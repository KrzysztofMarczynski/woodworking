const fs = require('fs');
const path = require('path');
const url = require('url');
const http = require('http');
const https = require('https');

const manifestPath = path.join(__dirname, '..', 'crawl', 'assets-manifest.json');
const outDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(manifestPath)) {
  console.error('Manifest not found:', manifestPath);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
if (!manifest.images || !manifest.images.length) {
  console.log('No images to download.');
  process.exit(0);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function downloadImage(imgUrl) {
  return new Promise((resolve, reject) => {
    const parsed = url.parse(imgUrl);
    const filename = path.basename(parsed.pathname);
    const dest = path.join(outDir, filename);
    if (fs.existsSync(dest)) {
      console.log('Exists, skipping:', filename);
      return resolve({ url: imgUrl, file: dest, skipped: true });
    }
    const proto = parsed.protocol === 'https:' ? https : http;
    const req = proto.get(imgUrl, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow redirect
        return downloadImage(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Failed to download ' + imgUrl + ' (status ' + res.statusCode + ')'));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => resolve({ url: imgUrl, file: dest }));
      });
    });
    req.on('error', reject);
  });
}

(async () => {
  const results = [];
  for (const imgUrl of manifest.images) {
    try {
      console.log('Downloading', imgUrl);
      // small delay to be polite
      await new Promise(r => setTimeout(r, 200));
      const r = await downloadImage(imgUrl);
      results.push(r);
    } catch (err) {
      console.error('Error downloading', imgUrl, err.message || err);
      results.push({ url: imgUrl, error: String(err) });
    }
  }
  const out = path.join(__dirname, '..', 'crawl', 'assets-download-report.json');
  fs.writeFileSync(out, JSON.stringify(results, null, 2), 'utf8');
  console.log('Done. Report:', out);
})();
