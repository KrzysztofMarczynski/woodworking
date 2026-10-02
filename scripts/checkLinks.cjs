const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const sitemap = fs.readFileSync(path.join(root, "public", "sitemap.xml"), "utf8");
const crawled = JSON.parse(fs.readFileSync(path.join(root, "crawl", "site-map.json"), "utf8"));
const expected = [...crawled.map((item) => item.url),
  "https://stolarnia-paw.pl/oferta/",
  "https://stolarnia-paw.pl/realizacje/",
  "https://stolarnia-paw.pl/materialy/",
  "https://stolarnia-paw.pl/wycena/",
  "https://stolarnia-paw.pl/polityka-cookies/",
];
const missing = expected.filter((url) => !sitemap.includes(`<loc>${url}</loc>`));
const requiredFiles = [
  "public/images/logo-paw.png",
  "public/images/video/lakierowanie-drzwi.jpg",
  "public/images/video/lakierowanie-drzwi.mp4",
  "public/images/video/lakierowanie-drzwi-mobile.mp4",
  "public/images/video/schody-gotowa-realizacja.jpg",
  "public/images/video/schody-gotowa-realizacja.mp4",
  "public/images/video/schody-w-pracowni.jpg",
  "public/images/video/schody-w-pracowni.mp4",
  "public/images/video/schody-w-pracowni-mobile.mp4",
  "public/images/video/panel-drewniany-3d.jpg",
  "public/images/video/panel-drewniany-3d.mp4",
  "public/images/video/panel-drewniany-3d-mobile.mp4",
  "public/images/video/malowanie-mebli.jpg",
  "public/images/video/malowanie-mebli.mp4",
  "public/images/video/malowanie-mebli-mobile.mp4",
  "public/images/video/stolik-akacjowy.jpg",
  "public/images/video/stolik-akacjowy.mp4",
  "public/images/video/stolik-akacjowy-mobile.mp4",
  "public/robots.txt",
];
const missingFiles = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length || missingFiles.length) {
  console.error("Missing URLs:", missing);
  console.error("Missing files:", missingFiles);
  process.exit(1);
}
console.log(`Verified ${expected.length} sitemap URLs and ${requiredFiles.length} required assets.`);

