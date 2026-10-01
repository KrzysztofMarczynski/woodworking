import hashlib
import io
import json
import re
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import unquote, urlparse

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent.parent
AUDIT_PATH = ROOT / "crawl" / "legacy-images-audit.json"
REPORT_PATH = ROOT / "crawl" / "legacy-images-download-report.json"
OUTPUT_ROOT = ROOT / "public" / "images" / "legacy"
DATA_PATH = ROOT / "src" / "data" / "legacyImages.generated.ts"
MAX_DIMENSION = 1600
WEBP_QUALITY = 82

CATEGORY_LABELS = {
    "stairs": "Schody",
    "doors": "Drzwi",
    "kitchens": "Kuchnie",
    "furniture": "Meble",
    "floors": "Podłogi",
    "paneling": "Boazerie",
    "timber": "Tartak",
    "archive": "Archiwum",
}

ALT_PREFIXES = {
    "stairs": "Schody drewniane",
    "doors": "Drzwi drewniane",
    "kitchens": "Kuchnia na wymiar",
    "furniture": "Mebel drewniany na wymiar",
    "floors": "Podłoga drewniana",
    "paneling": "Boazeria i okładzina drewniana",
    "timber": "Drewno i praca tartaku",
    "archive": "Archiwalne zdjęcie Stolarni Paw",
}


def category_for_gallery(gallery):
    if gallery.startswith("schody"):
        return "stairs"
    return {
        "drzwi": "doors",
        "kuchnie": "kitchens",
        "meble": "furniture",
        "podlogi": "floors",
        "jodelka": "floors",
    }.get(gallery, "archive")


def category_for_pages(pages):
    joined = " ".join(pages).lower()
    if "boazerie" in joined:
        return "paneling"
    if "tartacznictwo" in joined or "oblog" in joined or "tarcica" in joined:
        return "timber"
    if "kuchni" in joined:
        return "kitchens"
    if "drzwi" in joined:
        return "doors"
    if "podlog" in joined or "jodel" in joined or "parkiet" in joined:
        return "floors"
    if "schod" in joined:
        return "stairs"
    if "mebl" in joined:
        return "furniture"
    return "archive"


def safe_filename(url):
    source_name = unquote(Path(urlparse(url).path).stem)
    source_name = re.sub(r"[^a-zA-Z0-9_-]+", "-", source_name).strip("-").lower()
    source_name = source_name[:64] or "image"
    digest = hashlib.sha1(url.encode("utf-8")).hexdigest()[:10]
    return f"{digest}-{source_name}.webp"


def download(url, attempts=3):
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; StolarniaPawImageImport/1.0)"},
    )
    last_error = None
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(request, timeout=45) as response:
                return response.read()
        except (urllib.error.URLError, TimeoutError, OSError) as error:
            last_error = error
            time.sleep(0.6 * (attempt + 1))
    raise last_error


def process_image(item):
    category = item["category"]
    output_dir = OUTPUT_ROOT / category
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / safe_filename(item["url"])

    if output_path.exists():
        with Image.open(output_path) as image:
            width, height = image.size
        return {**item, "file": output_path, "width": width, "height": height, "skipped": True}

    content = download(item["url"])
    with Image.open(io.BytesIO(content)) as source:
        image = ImageOps.exif_transpose(source)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        if image.mode == "RGBA":
            background = Image.new("RGB", image.size, "white")
            background.paste(image, mask=image.getchannel("A"))
            image = background
        image.thumbnail((MAX_DIMENSION, MAX_DIMENSION), Image.Resampling.LANCZOS)
        image.save(output_path, "WEBP", quality=WEBP_QUALITY, method=6)
        width, height = image.size

    return {**item, "file": output_path, "width": width, "height": height, "bytes": output_path.stat().st_size}


def ts_string(value):
    return json.dumps(value, ensure_ascii=False)


def write_data_file(images):
    category_order = ["stairs", "doors", "kitchens", "furniture", "floors", "paneling", "timber", "archive"]
    lines = [
        'import type { ImageAsset } from "../types/content";',
        "",
        "export type LegacyImageAsset = ImageAsset & {",
        "  categoryId: string;",
        "  category: string;",
        "  sourceUrl: string;",
        "};",
        "",
        "export const legacyImages: LegacyImageAsset[] = [",
    ]

    counters = {category: 0 for category in category_order}
    for image in images:
        category = image["category"]
        counters[category] += 1
        alt = f'{ALT_PREFIXES[category]} - zdjęcie archiwalne {counters[category]}'
        src = "/" + image["file"].relative_to(ROOT / "public").as_posix()
        lines.extend([
            "  {",
            f"    src: {ts_string(src)},",
            f"    alt: {ts_string(alt)},",
            f"    width: {image['width']},",
            f"    height: {image['height']},",
            f"    categoryId: {ts_string(category)},",
            f"    category: {ts_string(CATEGORY_LABELS[category])},",
            f"    sourceUrl: {ts_string(image['url'])},",
            "  },",
        ])

    lines.extend([
        "];",
        "",
        "export const legacyImageCategories = [",
        '  { id: "all", label: "Wszystkie" },',
    ])
    for category in category_order:
        if counters[category]:
            lines.append(f"  {{ id: {ts_string(category)}, label: {ts_string(CATEGORY_LABELS[category])} }},")
    lines.extend([
        "] as const;",
        "",
        "export const legacyImageCount = legacyImages.length;",
        "",
    ])
    DATA_PATH.write_text("\n".join(lines), encoding="utf-8")


def main():
    audit = json.loads(AUDIT_PATH.read_text(encoding="utf-8"))
    items = []
    for image in audit["galleryImages"]:
        items.append({
            "url": image["url"],
            "category": category_for_gallery(image["gallery"]),
            "origin": f"gallery:{image['gallery']}",
        })
    for image in audit["uploadImages"]:
        if "cropped-cropped-wood-591631_1920" in image["url"]:
            continue
        items.append({
            "url": image["url"],
            "category": category_for_pages(image["pages"]),
            "origin": "uploads",
        })

    results = []
    failures = []
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(process_image, item): item for item in items}
        for index, future in enumerate(as_completed(futures), start=1):
            item = futures[future]
            try:
                results.append(future.result())
                print(f"[{index}/{len(items)}] {item['url']}")
            except Exception as error:
                failures.append({**item, "error": str(error)})
                print(f"[{index}/{len(items)}] ERROR {item['url']}: {error}")

    category_order = {category: index for index, category in enumerate(
        ["stairs", "doors", "kitchens", "furniture", "floors", "paneling", "timber", "archive"]
    )}
    results.sort(key=lambda image: (category_order[image["category"]], image["url"]))
    write_data_file(results)
    report = {
        "processed": len(results),
        "failed": len(failures),
        "totalBytes": sum(image["file"].stat().st_size for image in results),
        "failures": failures,
    }
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
