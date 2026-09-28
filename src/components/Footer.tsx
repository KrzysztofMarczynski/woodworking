import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../data/images";
import { legalNavigation, mainNavigation } from "../data/navigation";
import { company } from "../data/site";
import { trackEvent } from "../lib/analytics";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <img src={images.logo.src} alt={images.logo.alt} width={images.logo.width} height={images.logo.height} />
          <p>Rodzinna stolarnia. Projekt, materiał, produkcja i montaż w jednym procesie.</p>
          <Link className="text-link" to="/wycena/">Porozmawiajmy o projekcie <ArrowUpRight size={17} /></Link>
        </div>
        <div>
          <p className="footer-label">Nawigacja</p>
          <div className="footer-links">{mainNavigation.map((item) => <Link key={item.path} to={item.path} onClick={() => item.path === "/kontakt/" && trackEvent("contact_click", { location: "footer" })}>{item.label}</Link>)}</div>
        </div>
        <div>
          <p className="footer-label">Kontakt</p>
          <div className="footer-links footer-links--contact">
            {company.phones.map((phone) => <a key={phone.href} href={phone.href} onClick={() => trackEvent("phone_click", { location: "footer" })}><Phone size={15} />{phone.display}</a>)}
            <a href={`mailto:${company.email}`} onClick={() => trackEvent("email_click", { location: "footer" })}><Mail size={15} />{company.email}</a>
            <span><MapPin size={15} />{company.address.street}, {company.address.postalCode} {company.address.city}</span>
          </div>
        </div>
        <div>
          <p className="footer-label">Godziny</p>
          <div className="footer-links">{company.hours.map((hour) => <span key={hour}>{hour}</span>)}</div>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} Stolarnia Paw</span>
        <span>NIP {company.nip}</span>
        <div>{legalNavigation.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}</div>
      </div>
    </footer>
  );
}

