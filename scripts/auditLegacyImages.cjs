const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const urlListPath = path.join(root, "crawl", "urls.txt");
const reportPath = path.join(root, "crawl", "legacy-images-audit.json");
const siteOrigin = "https://stolarnia-paw.pl";

const startUrls = fs.readFileSync(urlListPath, "utf8")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line.startsWith(siteOrigin));

const queue = [...startUrls];
const visited = new Set();
const galleries = new Map();
const uploads = new Map();
const failures = [];

const imagePattern = /https?:\/\/stolarnia-paw\.pl\/wp-content\/(?:gallery|uploads)\/[^"'<>\s]+?\.(?:jpe?g|png|webp)(?:\?[^"'<>\s]*)?/gi;
const hrefPattern = /href=["']([^"']+)["']/gi;

function normalizeUrl(value) {
  return value.replaceAll("&#038;", "&").replaceAll("&amp;", "&");
}

function addImage(collection, imageUrl, pageUrl, gallery) {
  const cleanUrl = new URL(normalizeUrl(imageUrl));
  cleanUrl.search = "";
  const normalized = cleanUrl.href;
  const current = collection.get(normalized) ?? { url: normalized, gallery, pages: [] };
  if (!current.pages.includes(pageUrl)) current.pages.push(pageUrl);
  collection.set(normalized, current);
}

function collectImages(html, pageUrl) {
  for (const match of html.matchAll(imagePattern)) {
    const imageUrl = normalizeUrl(match[0]);
    const pathname = new URL(imageUrl).pathname;

    if (pathname.includes("/wp-content/gallery/")) {
      const relative = pathname.split("/wp-content/gallery/")[1];
      const [gallery, ...fileParts] = relative.split("/");
      const filename = fileParts.at(-1) ?? "";
      if (!gallery || fileParts.includes("cache") || fileParts.includes("thumbs") || filename.startsWith("thumbs-")) continue;
      addImage(galleries, imageUrl, pageUrl, gallery);
      continue;
    }

    const filename = path.posix.basename(pathname);
    if (/^(?:cropped-)?logo|favicon|gmap|facebook|instagram/i.test(filename)) continue;
    if (/[-_]\d{2,4}x\d{2,4}\.(?:jpe?g|png|webp)$/i.test(filename)) continue;
    addImage(uploads, imageUrl, pageUrl, "uploads");
  }
}

function collectPagination(html, pageUrl) {
  for (const match of html.matchAll(hrefPattern)) {
    const href = normalizeUrl(match[1]);
    let target;
    try {
      target = new URL(href, pageUrl);
    } catch {
      continue;
    }
    if (target.origin !== siteOrigin || !target.pathname.includes("/nggallery/page/")) continue;
    target.hash = "";
    const normalized = target.href;
    if (!visited.has(normalized) && !queue.includes(normalized)) queue.push(normalized);
  }
}

async function fetchPage(pageUrl) {
  const response = await fetch(pageUrl, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; StolarniaPawImageAudit/1.0)" },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

(async () => {
  while (queue.length) {
    const pageUrl = queue.shift();
    if (!pageUrl || visited.has(pageUrl)) continue;
    visited.add(pageUrl);

    try {
      const html = await fetchPage(pageUrl);
      collectImages(html, pageUrl);
      collectPagination(html, pageUrl);
      process.stdout.write(".");
    } catch (error) {
      failures.push({ url: pageUrl, error: String(error) });
      process.stdout.write("x");
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  const galleryImages = [...galleries.values()].sort((a, b) => a.url.localeCompare(b.url));
  const uploadImages = [...uploads.values()].sort((a, b) => a.url.localeCompare(b.url));
  const galleryCounts = Object.fromEntries(
    Object.entries(Object.groupBy(galleryImages, (image) => image.gallery))
      .map(([gallery, images]) => [gallery, images.length])
      .sort(([a], [b]) => a.localeCompare(b)),
  );

  const report = {
    generatedAt: new Date().toISOString(),
    pagesVisited: visited.size,
    galleryImageCount: galleryImages.length,
    uploadImageCount: uploadImages.length,
    galleryCounts,
    galleryImages,
    uploadImages,
    failures,
  };

  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(`\nVisited ${report.pagesVisited} pages.`);
  console.log(`Found ${report.galleryImageCount} gallery originals and ${report.uploadImageCount} upload images.`);
  console.log(report.galleryCounts);
  if (failures.length) console.log(`Failures: ${failures.length}`);
})();
