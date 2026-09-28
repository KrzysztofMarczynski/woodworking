import { useState } from "react";
import { ArrowRight, Check, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import ImageLightbox from "../components/ImageLightbox";
import LegacyBlocks from "../components/LegacyBlocks";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { imageGalleries } from "../data/images";
import { legacyContent } from "../data/legacyContent";
import { findServiceByPath, type ServicePage } from "../data/services";

export default function Service({ service }: { service: ServicePage }) {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const legacy = legacyContent.find((item) => item.path === service.path);
  const related = service.related.map(findServiceByPath).filter((item): item is ServicePage => Boolean(item));
  const gallery = imageGalleries[service.key] ?? [];
  const faqSchema = service.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  } : undefined;

  return <>
    <SEO title={service.seo.title} description={service.seo.description} canonicalPath={service.seo.canonicalPath} schema={faqSchema} />
    <PageHero eyebrow={service.eyebrow} title={service.heroTitle} lead={service.lead} image={service.image} breadcrumbs={[{ label: "Oferta", path: "/oferta/" }, { label: service.h1 }]} />
    <section className="service-highlights"><div className="shell">{service.highlights.map((item) => <div key={item}><Check size={18} /><span>{item}</span></div>)}</div></section>
    <section className="section"><div className="shell service-details"><SectionHeading eyebrow="Zakres" title={service.h1} />{service.details.map((detail, index) => <Reveal className="service-detail" key={detail.title}><span>0{index + 1}</span><div><h2>{detail.title}</h2><p>{detail.body}</p>{detail.items && <ul>{detail.items.map((item) => <li key={item}>{item}</li>)}</ul>}</div></Reveal>)}</div></section>
    {gallery.length > 0 && <section className="section service-gallery-section"><div className="shell"><SectionHeading eyebrow="Wybrane realizacje" title="Drewno w gotowej przestrzeni." text="Kliknij zdjęcie, aby zobaczyć realizację na pełnym ekranie." /><div className="service-gallery">{gallery.map((image, index) => <figure key={image.src}><button className="gallery-trigger" type="button" onClick={() => setActiveImage(index)} aria-label={`Powiększ: ${image.alt}`}><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" /><span className="gallery-trigger__icon" aria-hidden="true"><Maximize2 /></span></button></figure>)}</div></div></section>}
    {legacy && legacy.blocks.length > 0 && <section className="section legacy-section"><div className="shell prose-shell"><p className="eyebrow">Szczegóły oferty</p><LegacyBlocks blocks={legacy.blocks} /></div></section>}
    {service.faq && <section className="section faq-section"><div className="shell faq-grid"><SectionHeading eyebrow="Najczęstsze pytania" title="Warto wiedzieć przed rozmową." /><div>{service.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>}
    {related.length > 0 && <section className="section related-section"><div className="shell"><SectionHeading eyebrow="Zobacz także" title="Powiązane rozwiązania." /><div className="related-grid">{related.map((item) => <Link to={item.path} key={item.path}><span>{item.eyebrow}</span><h3>{item.menuTitle}</h3><ArrowRight /></Link>)}</div></div></section>}
    <CTA />
    <ImageLightbox images={gallery} activeIndex={activeImage} onChange={setActiveImage} onClose={() => setActiveImage(null)} />
  </>;
}

