import { Check } from "lucide-react";
import QuoteForm from "../components/QuoteForm";
import SEO from "../components/SEO";

export default function Quote() {
  return <>
    <SEO title="Wycena realizacji - Stolarnia Paw" description="Prześlij dane projektu, zdjęcia lub rzut i zapytaj o wycenę schodów, podłogi, drzwi, kuchni albo mebli na wymiar." canonicalPath="/wycena/" />
    <section className="quote-page"><div className="shell quote-layout"><div className="quote-intro"><p className="eyebrow">Wycena</p><h1>Opowiedz nam o projekcie.</h1><p>Im więcej konkretów dostaniemy na początku, tym sprawniej ocenimy zakres i zadamy właściwe pytania.</p><ul><li><Check size={17} />podaj przybliżone wymiary</li><li><Check size={17} />dołącz zdjęcia lub rzut</li><li><Check size={17} />napisz, jaki materiał i termin rozważasz</li></ul></div><QuoteForm /></div></section>
  </>;
}

