# Stolarnia Paw

Produkcyjna wersja strony firmowej zbudowana w React, TypeScript, Vite, Tailwind CSS, React Router i Framer Motion.

## Uruchomienie

```bash
npm install
npm run dev
```

Kontrola przed wdrożeniem:

```bash
npm run lint
npm run check:links
npm run build
```

## Struktura

- `src/pages` - strony główne, usługi, blog, kontakt i dokumenty prawne
- `src/components` - nagłówek, stopka, SEO, formularz, CTA i wspólne sekcje
- `src/data` - oferta, wszystkie stare treści, realizacje, nawigacja i dane firmy
- `public/images` - logo, zdjęcia ze starej strony i uporządkowane placeholdery
- `crawl` - raport migracyjny starej witryny
- `public/sitemap.xml` i `public/robots.txt` - pliki SEO

## Formularz

Formularz nie udaje wysłania. Do działania wymaga endpointu przyjmującego `POST multipart/form-data`:

```env
VITE_QUOTE_ENDPOINT=https://adres-endpointu
```

Może to być funkcja Netlify/Vercel, własne API albo usługa formularzy. Bez konfiguracji użytkownik zobaczy jasny komunikat i adres e-mail.

## Analityka

Skopiuj `.env.example` do `.env.local` i uzupełnij wybrane identyfikatory. GA, GTM i Google Ads uruchamiają się dopiero po zgodzie na analitykę. Zdarzenia: `phone_click`, `email_click`, `quote_form_start`, `quote_form_submit` i `contact_click`.

## Zdjęcia

Ścieżki i teksty alternatywne są scentralizowane w `src/data/images.ts`. Pliki zastępcze w `public/images/placeholders` można podmieniać bez zmiany układu. Zachowane logo znajduje się w `public/images/logo-paw.png`.

## Wdrożenie

Po `npm run build` gotowe pliki znajdują się w `dist`. Repo zawiera fallback SPA dla Netlify (`public/_redirects`) i Vercel (`vercel.json`). Dla innego serwera wszystkie nieistniejące ścieżki aplikacji należy kierować do `index.html`, pozostawiając pliki statyczne bez zmian.

Przed przełączeniem domeny skonfiguruj endpoint formularza, identyfikatory analityki, HTTPS oraz test wysyłki. Wszystkie stare adresy są zachowane w routerze i mapie witryny.
