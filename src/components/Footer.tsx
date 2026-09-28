import { Link } from 'react-router-dom'
import { footerLinks } from '../data/navigation'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">PAW</span>
            <span className="brand-text">
              <strong>STOLARNIA</strong>
              <small>PAW</small>
            </span>
          </div>
          <p className="muted">Stolarz i projektant wnętrz z naturalnym drewnem, projektujący i wykonujący prace na wymiar.</p>
        </div>

        <div>
          <h3>Nawigacja</h3>
          <ul className="footer-list">
            {footerLinks.company.map((item) => (
              <li key={item.href}><Link to={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Oferta</h3>
          <ul className="footer-list">
            {footerLinks.services.map((item) => (
              <li key={item.href}><Link to={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Kontakt</h3>
          <ul className="footer-list contact-list">
            <li>ul. Daszyńskiego 50</li>
            <li>32-626 Jawiszowice</li>
            <li><a href="tel:+48535112662">+48 535 112 662</a></li>
            <li><a href="mailto:biuro@stolarnia-paw.pl">biuro@stolarnia-paw.pl</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Stolarnia Paw</span>
        <div className="legal-links">
          {footerLinks.legal.map((item) => (
            <Link key={item.href} to={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
