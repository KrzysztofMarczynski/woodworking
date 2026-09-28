import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems, serviceLinks } from '../data/navigation'
import { images } from '../data/images'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [offerOpen, setOfferOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOfferOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Stolarnia Paw">
          <img src={images.logo} alt="Stolarnia Paw logo" className="brand-logo" />
        </Link>

        <nav className="desktop-nav" aria-label="Główna nawigacja">
          <NavLink to="/o-nas">O nas</NavLink>
          <div
            className="nav-dropdown"
            ref={dropdownRef}
          >
            <button
              type="button"
              className={`nav-trigger ${offerOpen ? 'is-open' : ''}`}
              aria-expanded={offerOpen}
              onClick={() => setOfferOpen((prev) => !prev)}
            >
              Oferta
            </button>
            <motion.div
              className={`mega-menu ${offerOpen ? 'is-open' : ''}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: offerOpen ? 1 : 0, y: offerOpen ? 0 : 14 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ pointerEvents: offerOpen ? 'auto' : 'none' }}
            >
              <div className="mega-grid">
                {serviceLinks.map((service) => (
                  <Link key={service.href} to={service.href} className="mega-item" onClick={() => setOfferOpen(false)}>
                    <span className="mega-label">{service.label}</span>
                    <span className="mega-desc">{service.description}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
          <NavLink to="/#realizacje">Realizacje</NavLink>
          <NavLink to="/#materials">Materiały</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
          <Link to="/kontakt#wycena" className="button button-primary small">Wycena</Link>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Otwórz menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  )
}
