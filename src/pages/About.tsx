import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { images } from "../data/images";

export default function About() {
  return <>
    <SEO title="O nas - Stolarnia Paw" description="Poznaj rodzinną Stolarnię Paw z Jawiszowic. Tradycja od 1945 roku, własny tartak, nowoczesna produkcja i montaż." canonicalPath="/o-nas/" />
    <PageHero eyebrow="O nas" title="Rodzinne rzemiosło, współczesna precyzja." lead="Tradycje zakładu sięgają 1945 roku, a firma została zarejestrowana w 1990. Od początku najważniejsze pozostają materiał, uczciwa praca i odpowiedzialność za gotowy efekt." image={images.hero} breadcrumbs={[{ label: "O nas" }]} />
    <section className="section"><div className="shell story-grid"><Reveal><SectionHeading eyebrow="Ciągłość" title="Trzy pokolenia wiedzy o drewnie." /><p className="large-copy">Łączymy doświadczenie przekazywane w rodzinie z nowoczesnymi technologiami obróbki. Własny tartak pozwala nam kontrolować drogę drewna od surowca do gotowego elementu.</p><Link className="text-link" to="/tartacznictwo/">Poznaj nasz tartak <ArrowRight size={17} /></Link></Reveal><Reveal className="story-facts"><div><strong>1945</strong><span>Początek tradycji stolarskich</span></div><div><strong>1990</strong><span>Rejestracja firmy</span></div><div><strong>1 proces</strong><span>Materiał, projekt, produkcja i montaż</span></div></Reveal></div></section>
    <section className="section values-section"><div className="shell"><SectionHeading eyebrow="Jak pracujemy" title="Odpowiedzialność od pierwszego cięcia." light /><div className="values-grid"><Reveal><span>01</span><h3>Własny materiał</h3><p>Pozyskujemy i przygotowujemy drewno, dzięki czemu znamy jego pochodzenie i parametry.</p></Reveal><Reveal><span>02</span><h3>Indywidualny wymiar</h3><p>Każdy element odpowiada konkretnej przestrzeni, proporcjom i sposobowi użytkowania.</p></Reveal><Reveal><span>03</span><h3>Kompletny montaż</h3><p>Nie kończymy na produkcji. Dowozimy i montujemy wykonane elementy u klienta.</p></Reveal></div></div></section>
    <CTA title="Zbudujmy coś, co zostanie na lata." />
  </>;
}

