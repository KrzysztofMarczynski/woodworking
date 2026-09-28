import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { processSteps, services } from '../data/services'
import { images } from '../data/images'
import { Seo } from '../components/Seo'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export function HomePage() {
  return (
    <>
      <Seo title="Stolarnia Paw | Schody, podłogi i meble z drewna na wymiar" description="Stolarnia Paw projektuje i wykonuje schody, podłogi, drzwi, kuchnie, meble i zabudowy z drewna na wymiar dla wnętrz premium." path="/" />
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="eyebrow">Projektowanie i realizacja wnętrz z drewna</p>
            <h1>
              Rysujemy<br />
              Twoje pomysły.<br />
              Realizujemy<br />
              marzenia.
            </h1>
            <p className="lead">
              Od projektu po montaż tworzymy wyjątkowe wnętrza z naturalnego drewna —
              z zachowaniem architektonicznej estetyki i rzemieślniczej precyzji.
            </p>
            <div className="button-row">
              <Link to="/#realizacje" className="button button-primary">Zobacz realizacje</Link>
              <Link to="/kontakt#wycena" className="button button-secondary">Umów wycenę</Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="hero-photo frame-card">
              <img src={images.hero} alt="Nowoczesna realizacja drewna i wnętrza" width={820} height={1040} loading="eager" />
            </div>
            <div className="hero-drawing">
              <span>ARCHITECTURE</span>
              <span>WOOD</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section container process-section" id="process">
        <div className="section-header">
          <p className="eyebrow">Od projektu do realizacji</p>
          <h2>Proces, który prowadzi od koncepcji do dopracowanego wnętrza.</h2>
        </div>

        <div className="timeline">
          {processSteps.map((step, index) => (
            <motion.div
              className="timeline-item"
              key={step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <span className="timeline-number">0{index + 1}</span>
              <h3>{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header narrow">
            <p className="eyebrow">Oferta</p>
            <h2>Tworzymy elementy wnętrz, które współgrają z architekturą i użytkowaniem.</h2>
          </div>

          <div className="service-showcase">
            {services.map((service) => (
              <motion.article className="service-card" key={service.id} whileHover={{ y: -6 }}>
                <div className="service-image-wrap">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-meta">
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <Link to={service.slug}>Poznaj usługę</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container materials-section" id="materials">
        <div className="materials-copy">
          <p className="eyebrow">Drewno od początku</p>
          <h2>Kontrolujemy proces od surowca do gotowego wnętrza.</h2>
          <p>
            Własny tartak i zaplecze produkcyjne pozwalają nam dobierać drewno z pełną
            świadomością jakości, struktury i przeznaczenia każdej części projektu.
          </p>
        </div>

        <div className="materials-flow">
          {['Drewno', 'Selekcja', 'Suszenie', 'Obróbka', 'Projekt', 'Produkcja', 'Montaż'].map((item, index) => (
            <div key={item} className="material-step">
              <span>{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt" id="realizacje">
        <div className="container">
          <div className="section-header narrow">
            <p className="eyebrow">Realizacje</p>
            <h2>Wybrane projekty, które łączą rzemiosło, estetykę i funkcjonalność.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article key={project.title} className={`project-card card-${index + 1}`} whileHover={{ y: -8 }}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <small>{project.location}</small>
                  <p>{project.description}</p>
                  <Link to="/kontakt#wycena">Zobacz realizację</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container cta-strip">
        <div>
          <p className="eyebrow">Zaprojektowane dla życia</p>
          <h2>Każda realizacja powstaje z myślą o proporcji, świetle i trwałości.</h2>
        </div>
        <Link to="/kontakt#wycena" className="button button-primary">Umów wycenę</Link>
      </section>
    </>
  )
}
