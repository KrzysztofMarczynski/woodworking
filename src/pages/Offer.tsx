import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import { images } from "../data/images";
import { primaryServices } from "../data/services";

export default function Offer() {
  return <>
    <SEO title="Oferta - schody, podłogi, drzwi i meble | Stolarnia Paw" description="Kompleksowa oferta Stolarni Paw: schody, podłogi, drzwi, kuchnie, meble i zabudowy, boazerie oraz tarcica." canonicalPath="/oferta/" />
    <PageHero eyebrow="Oferta" title="Drewno w skali całego wnętrza." lead="Projektujemy i wykonujemy elementy, które mogą powstać osobno albo stworzyć jedną, materiałowo spójną przestrzeń." image={images.services.kitchens} breadcrumbs={[{ label: "Oferta" }]} />
    <section className="section"><div className="shell offer-index">{primaryServices.map((service, index) => <article key={service.path} className="offer-row"><span>{String(index + 1).padStart(2, "0")}</span><div className="offer-row__image"><img src={service.image.src} alt={service.image.alt} width={service.image.width} height={service.image.height} loading="lazy" /></div><div><p className="eyebrow">{service.eyebrow}</p><h2>{service.menuTitle}</h2><p>{service.lead}</p><Link className="text-link" to={service.path}>Zobacz zakres <ArrowRight size={17} /></Link></div></article>)}</div></section>
    <CTA />
  </>;
}

