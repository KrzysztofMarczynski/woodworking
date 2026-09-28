import { useState } from "react";
import { ArrowRight, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import ImageLightbox from "../components/ImageLightbox";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { images, portfolioGallery } from "../data/images";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const featuredSources = new Set(projects.map((project) => project.image.src));
  const additionalImages = portfolioGallery.filter((image) => !featuredSources.has(image.src));
  const openImage = (src: string) => {
    const index = portfolioGallery.findIndex((image) => image.src === src);
    if (index >= 0) setActiveImage(index);
  };

  return <>
    <SEO title="Realizacje - Stolarnia Paw" description="Schody, podłogi, drzwi, kuchnie oraz zabudowy wykonane przez Stolarnię Paw." canonicalPath="/realizacje/" />
    <PageHero eyebrow="Realizacje" title="Rzemiosło w prawdziwych wnętrzach." lead="Wybrane schody, podłogi, kuchnie, meble i okładziny wykonane przez Stolarnię Paw." image={images.services.floors} breadcrumbs={[{ label: "Realizacje" }]} />
    <section className="section"><div className="shell projects-archive">{projects.map((project) => <article key={project.number}><button className="projects-archive__media gallery-trigger" type="button" onClick={() => openImage(project.image.src)} aria-label={`Powiększ: ${project.image.alt}`}><img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} loading="lazy" decoding="async" /><span className="gallery-trigger__icon" aria-hidden="true"><Maximize2 /></span></button><Link className="project-card__content" to={project.path}><span>{project.number} / {project.category}</span><h2>{project.title}</h2><p>{project.description}</p><span className="text-link">Zobacz ofertę <ArrowRight size={17} /></span></Link></article>)}</div></section>
    <section className="section additional-gallery-section"><div className="shell"><SectionHeading eyebrow="Więcej zdjęć" title="Realizacje i detale z bliska." text="Kliknij dowolny kadr, aby otworzyć pełnoekranową galerię." /><div className="additional-gallery">{additionalImages.map((image) => <button className="gallery-trigger" type="button" key={image.src} onClick={() => openImage(image.src)} aria-label={`Powiększ: ${image.alt}`}><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" /><span className="additional-gallery__caption"><small>{image.category}</small>{image.alt}</span><span className="gallery-trigger__icon" aria-hidden="true"><Maximize2 /></span></button>)}</div></div></section>
    <CTA title="Twój projekt może być następny." />
    <ImageLightbox images={portfolioGallery} activeIndex={activeImage} onChange={setActiveImage} onClose={() => setActiveImage(null)} />
  </>;
}

