import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Check, Maximize2 } from "lucide-react";
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
import { legacyImages } from "../data/legacyImages.generated";
import { findServiceByPath, type ServicePage } from "../data/services";
import { serviceVideos } from "../data/videos";
import type { ImageAsset } from "../types/content";

const serviceGalleryPageSize = 12;
const serviceGalleryCategories: Record<string, string> = {
  stairs: "stairs",
  "carpet-stairs": "stairs",
  "self-supporting-stairs": "stairs",
  "built-stairs": "stairs",
  "concrete-stairs": "stairs",
  floors: "floors",
  "french-herringbone": "floors",
  doors: "doors",
  kitchens: "kitchens",
  furniture: "furniture",
  paneling: "paneling",
  timber: "timber",
  "oak-timber": "timber",
  "ash-timber": "timber",
  "oak-veneer": "timber",
};

function uniqueImages(images: ImageAsset[]) {
  const seen = new Set<string>();
  return images.filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

export default function Service({ service }: { service: ServicePage }) {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(serviceGalleryPageSize);
  const legacy = legacyContent.find((item) => item.path === service.path);
  const related = service.related.map(findServiceByPath).filter((item): item is ServicePage => Boolean(item));
  const galleryCategory = serviceGalleryCategories[service.key];
  const gallery = uniqueImages([
    ...(imageGalleries[service.key] ?? []),
    ...legacyImages.filter((image) => image.categoryId === galleryCategory),
  ]);
  const visibleGallery = gallery.slice(0, visibleGalleryCount);
  const faqSchema = service.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  } : undefined;

  useEffect(() => {
    setActiveImage(null);
    setVisibleGalleryCount(serviceGalleryPageSize);
  }, [service.key]);

  return <>
    <SEO title={service.seo.title} description={service.seo.description} canonicalPath={service.seo.canonicalPath} schema={faqSchema} />
    <PageHero eyebrow={service.eyebrow} title={service.heroTitle} lead={service.lead} image={service.image} video={serviceVideos[service.key]} breadcrumbs={[{ label: "Oferta", path: "/oferta/" }, { label: service.h1 }]} />
    <section className="service-highlights"><div className="shell">{service.highlights.map((item) => <div key={item}><Check size={18} /><span>{item}</span></div>)}</div></section>
    <section className="section"><div className="shell service-details"><SectionHeading eyebrow="Zakres" title={service.h1} />{service.details.map((detail, index) => <Reveal className="service-detail" key={detail.title}><span>0{index + 1}</span><div><h2>{detail.title}</h2><p>{detail.body}</p>{detail.items && <ul>{detail.items.map((item) => <li key={item}>{item}</li>)}</ul>}</div></Reveal>)}</div></section>
    {gallery.length > 0 && <section className="section service-gallery-section"><div className="shell"><SectionHeading eyebrow="Realizacje" title={`Wszystkie realizacje: ${service.menuTitle}.`} text={`Galeria zawiera ${gallery.length} zdjęć. Kliknij wybrane ujęcie, aby otworzyć pełnoekranowy podgląd i przechodzić między wszystkimi zdjęciami.`} /><div className="service-gallery">{visibleGallery.map((image, index) => <figure key={image.src}><button className="gallery-trigger" type="button" onClick={() => setActiveImage(index)} aria-label={`Powiększ: ${image.alt}`}><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" /><span className="gallery-trigger__icon" aria-hidden="true"><Maximize2 /></span></button></figure>)}</div><div className="legacy-gallery__footer"><p>Pokazano {visibleGallery.length} z {gallery.length} zdjęć</p>{visibleGalleryCount < gallery.length && <button className="button button--ghost" type="button" onClick={() => setVisibleGalleryCount((count) => count + serviceGalleryPageSize)}>Pokaż kolejne <ArrowDown size={18} /></button>}</div></div></section>}
    {legacy && legacy.blocks.length > 0 && <section className="section legacy-section"><div className="shell prose-shell"><p className="eyebrow">Szczegóły oferty</p><LegacyBlocks blocks={legacy.blocks} /></div></section>}
    {service.faq && <section className="section faq-section"><div className="shell faq-grid"><SectionHeading eyebrow="Najczęstsze pytania" title="Warto wiedzieć przed rozmową." /><div>{service.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>}
    {related.length > 0 && <section className="section related-section"><div className="shell"><SectionHeading eyebrow="Zobacz także" title="Powiązane rozwiązania." /><div className="related-grid">{related.map((item) => <Link to={item.path} key={item.path}><span>{item.eyebrow}</span><h3>{item.menuTitle}</h3><ArrowRight /></Link>)}</div></div></section>}
    <CTA />
    <ImageLightbox images={gallery} activeIndex={activeImage} onChange={setActiveImage} onClose={() => setActiveImage(null)} />
  </>;
}

