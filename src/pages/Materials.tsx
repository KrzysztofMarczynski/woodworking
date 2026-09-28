import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { images } from "../data/images";

export default function Materials() {
  return <>
    <SEO title="Materiały i drewno - Stolarnia Paw" description="Dąb, jesion, tarcica i naturalny obłóg. Zobacz, jak Stolarnia Paw dobiera i przygotowuje drewno do produkcji." canonicalPath="/materialy/" />
    <PageHero eyebrow="Materiały" title="Drewno nie jest próbką. Jest początkiem projektu." lead="Gatunek, klasa, wilgotność i sposób wykończenia wpływają na wygląd oraz pracę gotowego elementu przez kolejne lata." image={images.services.veneer} breadcrumbs={[{ label: "Materiały" }]} />
    <section className="section"><div className="shell"><SectionHeading eyebrow="Dąb i jesion" title="Materiał dobierany do zadania." /><div className="material-grid"><Reveal><h3>Dąb</h3><p>Trwały, wyrazisty i ponadczasowy. Stosowany w podłogach, schodach, drzwiach, meblach i naturalnych okleinach.</p></Reveal><Reveal><h3>Jesion</h3><p>Sprężysty i mocny, z dynamicznym rysunkiem. Sprawdza się tam, gdzie ważna jest wytrzymałość i lekkość wizualna.</p></Reveal><Reveal><h3>Wykończenie</h3><p>Kolor i zabezpieczenie dobieramy do intensywności użytkowania, oczekiwanego efektu oraz pozostałych elementów wnętrza.</p></Reveal></div></div></section>
    <section className="section material-flow"><div className="shell"><SectionHeading eyebrow="Kontrola procesu" title="Od kłody do detalu." light /><div className="flow-list">{["Pozyskanie i selekcja", "Sezonowanie i suszenie", "Rozkrój i obróbka", "Wykończenie powierzchni", "Montaż"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div><Link className="text-link text-link--light" to="/tartacznictwo/">Tarcica i obłóg <ArrowRight size={17} /></Link></div></section>
    <CTA />
  </>;
}

