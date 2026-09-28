Assets folder for the project.

Place production-grade images, logos and optimized assets here.

Quick workflow:

1. Run `node scripts/download-assets.js` to fetch images referenced in `crawl/assets-manifest.json` into `public/images/`.
2. Optimize images (webp, responsive sizes) and move finalized files into `src/assets/` or keep originals in `public/images/`.
3. Update components to use images from `/public/images/` or `src/assets/` depending on build-time needs.

If you want me to run optimization (sharp) automatically, allow installing `sharp` and I will add a small pipeline.
Wstaw tutaj dostarczone zdjęcie schodów jako `hero.jpg`.

Przykład: `src/assets/hero.jpg`

Jeśli chcesz, mogę zapisać przesłane zdjęcie bezpośrednio w repo — daj znać.