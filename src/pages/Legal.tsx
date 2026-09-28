import LegacyBlocks from "../components/LegacyBlocks";
import SEO from "../components/SEO";
import { legacyContent } from "../data/legacyContent";

export default function Legal({ type }: { type: "privacy" | "cookies" }) {
  const privacy = legacyContent.find((item) => item.path === "/polityka-prywatnosci/");
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Polityka prywatności" : "Polityka cookies";
  return <>
    <SEO title={`${title} - Stolarnia Paw`} description={`${title} serwisu Stolarnia Paw.`} canonicalPath={isPrivacy ? "/polityka-prywatnosci/" : "/polityka-cookies/"} />
    <section className="legal-page"><div className="shell prose-shell"><p className="eyebrow">Dokumenty</p><h1>{title}</h1>{isPrivacy && privacy ? <LegacyBlocks blocks={privacy.blocks} /> : <div className="legacy-prose"><h2>Pliki niezbędne</h2><p>Serwis może zapisywać lokalnie informację o wybranych ustawieniach prywatności, aby nie pytać o zgodę przy każdej wizycie.</p><h2>Analityka</h2><p>Narzędzia analityczne są uruchamiane wyłącznie po akceptacji. Identyfikatory usług są konfigurowane przez zmienne środowiskowe i nie są zapisane na stałe w kodzie strony.</p><h2>Zmiana decyzji</h2><p>Ustawienia można wyczyścić w pamięci przeglądarki, usuwając dane witryny dla domeny stolarnia-paw.pl.</p></div>}</div></section>
  </>;
}

