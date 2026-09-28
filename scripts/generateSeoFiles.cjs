const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const crawled = JSON.parse(fs.readFileSync(path.join(root, "crawl", "site-map.json"), "utf8"));
const newPaths = ["/oferta/", "/realizacje/", "/materialy/", "/wycena/", "/polityka-cookies/"];
const paths = [...new Set([...crawled.map((item) => new URL(item.url).pathname), ...newPaths])];
const today = new Date().toISOString().slice(0, 10);
const entries = paths.map((pathname) => `  <url>\n    <loc>https://stolarnia-paw.pl${pathname === "/" ? "/" : pathname}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

fs.mkdirSync(path.join(root, "public"), { recursive: true });
fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "public", "robots.txt"), "User-agent: *\nAllow: /\n\nSitemap: https://stolarnia-paw.pl/sitemap.xml\n");
console.log(`Generated sitemap with ${paths.length} URLs.`);

