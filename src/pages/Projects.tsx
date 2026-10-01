import { useState } from "react";
import { ArrowRight, Images, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import ImageLightbox from "../components/ImageLightbox";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { images, portfolioCollections } from "../data/images";
import { projects } from "../data/projects";
import type { ImageAsset } from "../types/content";

const photoCount = (count: number) => `${count} ${count === 1 ? "zdjęcie" : count < 5 ? "zdjęcia" : "zdjęć"}`;

export default function Projects() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [activeGallery, setActiveGallery] = useState<ImageAsset[]>([]);
  const collectionsById = new Map(portfolioCollections.map((collection) => [collection.id, collection]));
  const featuredCollectionIds = new Set(projects.map((project) => project.collectionId));
  const additionalCollections = portfolioCollections.filter((collection) => !featuredCollectionIds.has(collection.id));
  const openGallery = (gallery: ImageAsset[]) => {
    setActiveGallery(gallery);
    setActiveImage(0);
  };

  return <>
    <SEO title="Realizacje - Stolarnia Paw" description="Schody, podłogi, drzwi, kuchnie oraz zabudowy wykonane przez Stolarnię Paw." canonicalPath="/realizacje/" />
    <PageHero eyebrow="Realizacje" title="Rzemiosło w prawdziwych wnętrzach." lead="Wybrane schody, podłogi, kuchnie, meble i okładziny wykonane przez Stolarnię Paw." image={images.services.floors} breadcrumbs={[{ label: "Realizacje" }]} />
    <section className="section"><div className="shell projects-archive">{projects.map((project) => {
      const gallery = collectionsById.get(project.collectionId)?.images ?? [project.image];
      return <article key={project.number}><button className="projects-archive__media gallery-trigger" type="button" onClick={() => openGallery(gallery)} aria-label={`Otwórz galerię: ${project.title}`}><img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} loading="lazy" decoding="async" />{gallery.length > 1 && <span className="gallery-trigger__count"><Images aria-hidden="true" />{photoCount(gallery.length)}</span>}<span className="gallery-trigger__icon" aria-hidden="true"><Maximize2 /></span></button><Link className="project-card__content" to={project.path}><span>{project.number} / {project.category}</span><h2>{project.title}</h2><p>{project.description}</p><span className="text-link">Zobacz ofertę <ArrowRight size={17} /></span></Link></article>;
    })}</div></section>
    <section className="section additional-gallery-section"><div className="shell"><SectionHeading eyebrow="Więcej realizacji" title="Jedna realizacja. Wszystkie jej ujęcia." text="Powiązane zdjęcia tego samego mebla lub wnętrza są zebrane w jednym zestawie." /><div className="additional-gallery">{additionalCollections.map((collection) => {
      const cover = collection.images[0];
      return <button className="gallery-trigger" type="button" key={collection.id} onClick={() => openGallery(collection.images)} aria-label={`Otwórz galerię: ${collection.title}`}><img src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} loading="lazy" decoding="async" /><span className="additional-gallery__caption"><small>{collection.category}</small>{collection.title}</span>{collection.images.length > 1 && <span className="gallery-trigger__count"><Images aria-hidden="true" />{photoCount(collection.images.length)}</span>}<span className="gallery-trigger__icon" aria-hidden="true"><Maximize2 /></span></button>;
    })}</div></div></section>
    <CTA title="Twój projekt może być następny." />
    <ImageLightbox images={activeGallery} activeIndex={activeImage} onChange={setActiveImage} onClose={() => setActiveImage(null)} />
  </>;
}

