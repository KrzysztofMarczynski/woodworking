import { useState } from "react";
import { ArrowDown, ArrowRight, DraftingCompass, Hammer, Layers3, Ruler, Trees } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import OfferMedia from "../components/OfferMedia";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { blogPosts } from "../data/blog";
import { images } from "../data/images";
import { projects } from "../data/projects";
import { primaryServices } from "../data/services";
import { homeVideos, serviceVideos } from "../data/videos";
import { formatDate } from "../lib/path";

const process = [
  { icon: DraftingCompass, title: "Rozmowa i pomiar", text: "Poznajemy wnętrze, potrzeby i techniczne ograniczenia." },
  { icon: Ruler, title: "Projekt", text: "Porządkujemy proporcje, materiał, detal i sposób montażu." },
  { icon: Trees, title: "Dobór drewna", text: "Wybieramy gatunek, klasę, wilgotność i wykończenie." },
  { icon: Hammer, title: "Produkcja", text: "Elementy powstają w naszej stolarni pod konkretny wymiar." },
  { icon: Layers3, title: "Montaż", text: "Dowozimy i składamy całość w gotowej przestrzeni." },
];

export default function Home() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideo = homeVideos[activeVideoIndex];
  const showNextVideo = () => setActiveVideoIndex((current) => (current + 1) % homeVideos.length);

  return (
    <>
      <SEO title="Stolarnia Paw – produkcja podłóg, schodów i mebli" description="Rodzinna stolarnia z własnym tartakiem. Schody, podłogi, drzwi, kuchnie i meble na wymiar w Małopolsce." canonicalPath="/" />
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <video
            className="home-hero__image home-hero__video"
            key={activeVideo.src}
            autoPlay
            muted
            playsInline
            poster={activeVideo.poster}
            preload="auto"
            onEnded={showNextVideo}
            onError={showNextVideo}
          >
            <source src={activeVideo.src} type="video/mp4" />
          </video>
          <img
            className="home-hero__image home-hero__poster"
            src={activeVideo.poster}
            alt=""
            width="540"
            height="960"
          />
        </div>
        <div className="home-hero__wash" />
        <div className="shell home-hero__content">
          <Reveal>
            <p className="eyebrow">Jawiszowice / Małopolska / od 1945</p>
            <h1>Stolarnia Paw</h1>
            <p className="home-hero__statement">Rysujemy. Wybieramy drewno.<br />Budujemy na lata.</p>
            <p className="home-hero__lead">Schody, podłogi, drzwi i zabudowy tworzone w jednym procesie: od własnego materiału po montaż u klienta.</p>
            <div className="hero-actions">
              <Link className="button" to="/realizacje/">Zobacz realizacje <ArrowRight size={18} /></Link>
              <Link className="button button--ghost" to="/wycena/">Zapytaj o wycenę</Link>
            </div>
          </Reveal>
          <a className="hero-scroll" href="#oferta"><ArrowDown size={18} />Poznaj proces</a>
        </div>
        <div className="hero-index"><span>{String(activeVideoIndex + 1).padStart(2, "0")} / {String(homeVideos.length).padStart(2, "0")}</span><span>{activeVideo.label}</span></div>
      </section>

      <section className="section offer-section" id="oferta">
        <div className="shell">
          <SectionHeading eyebrow="Zakres prac" title="Jedna stolarnia. Całe wnętrze." text="Najlepszy efekt powstaje wtedy, gdy materiał, proporcje i detale rozmawiają ze sobą od początku projektu." />
          <div className="offer-grid">
            {primaryServices.map((service, index) => (
              <Reveal className={`offer-item offer-item--${(index % 3) + 1}`} key={service.path}>
                <Link to={service.path}>
                  <div className={`offer-item__media${serviceVideos[service.key] ? " offer-item__media--video" : ""}`}>
                    <OfferMedia image={service.image} video={serviceVideos[service.key]} />
                  </div>
                  <div className="offer-item__meta"><span>{String(index + 1).padStart(2, "0")}</span><h3>{service.menuTitle}</h3><ArrowRight size={20} /></div>
                  <p>{service.lead}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link className="text-link section-link" to="/oferta/">Zobacz pełną ofertę <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="process-section section">
        <div className="shell">
          <SectionHeading eyebrow="Od szkicu do montażu" title="Proces, nad którym mamy kontrolę." light />
          <div className="process-line">
            {process.map((step, index) => <Reveal className="process-step" key={step.title}><span className="process-step__number">0{index + 1}</span><step.icon size={25} strokeWidth={1.4} /><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section origin-section">
        <div className="shell origin-grid">
          <Reveal className="origin-media"><img src={images.services.timber.src} alt={images.services.timber.alt} width={images.services.timber.width} height={images.services.timber.height} loading="lazy" /><span>Własny tartak / kontrola materiału</span></Reveal>
          <Reveal className="origin-copy"><p className="eyebrow">Drewno od początku</p><h2>Znamy materiał, zanim stanie się częścią domu.</h2><p>Tradycje zakładu sięgają 1945 roku. Dziś łączymy rzemieślniczą wiedzę z nowoczesnym parkiem maszynowym, własnym tartakiem i montażem.</p><ul><li>dobór i sezonowanie surowca</li><li>obróbka we własnym zakładzie</li><li>spójność elementów w całym wnętrzu</li></ul><Link className="text-link" to="/o-nas/">Poznaj stolarnię <ArrowRight size={17} /></Link></Reveal>
        </div>
      </section>

      <section className="section projects-section">
        <div className="shell">
          <SectionHeading eyebrow="Realizacje" title="Drewno w gotowej przestrzeni." text="Wybrane schody, podłogi, kuchnie i elementy stolarki wykonane w naszej pracowni." />
          <div className="projects-grid">{projects.slice(0, 4).map((project) => <Link className="project-tile" to={project.path} key={project.number}><img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} loading="lazy" /><div><span>{project.number} / {project.category}</span><h3>{project.title}</h3><ArrowRight /></div></Link>)}</div>
          <Link className="text-link section-link" to="/realizacje/">Wszystkie realizacje <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="section journal-section">
        <div className="shell">
          <SectionHeading eyebrow="Wiedza" title="O drewnie bez skrótów." />
          <div className="journal-list">{blogPosts.slice(0, 3).map((post, index) => <Link to={post.path} key={post.path}><span>0{index + 1}</span><div><small>{formatDate(post.modified || post.date)}</small><h3>{post.title}</h3></div><ArrowRight /></Link>)}</div>
          <Link className="text-link section-link" to="/blog/">Przejdź do bloga <ArrowRight size={17} /></Link>
        </div>
      </section>
      <CTA />
    </>
  );
}

