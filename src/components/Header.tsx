import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { images } from "../data/images";
import { mainNavigation } from "../data/navigation";
import { primaryServices } from "../data/services";
import { company } from "../data/site";
import { trackEvent } from "../lib/analytics";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const location = useLocation();
  const close = () => {
    setOpen(false);
    setOfferOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-shell shell">
        <Link to="/" className="brand-mark" onClick={close} aria-label="Stolarnia Paw, strona główna">
          <img src={images.logo.src} width={images.logo.width} height={images.logo.height} alt={images.logo.alt} />
        </Link>

        <nav className="desktop-nav" aria-label="Główna nawigacja">
          {mainNavigation.map((item) => item.path === "/oferta/" ? (
            <div className="nav-offer" key={item.path} onMouseEnter={() => setOfferOpen(true)} onMouseLeave={() => setOfferOpen(false)}>
              <NavLink to={item.path} className={({ isActive }) => isActive ? "is-active" : ""}>
                {item.label}<ChevronDown size={14} aria-hidden="true" />
              </NavLink>
              {offerOpen && (
                <div className="mega-menu" onFocus={() => setOfferOpen(true)} onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setOfferOpen(false);
                }}>
                  <div className="mega-menu__intro">
                    <span>Oferta</span>
                    <strong>Od surowego drewna po gotowe wnętrze.</strong>
                    <Link to="/oferta/" onClick={close}>Cała oferta <ArrowUpRight size={16} /></Link>
                  </div>
                  <div className="mega-menu__links">
                    {primaryServices.map((service, index) => (
                      <Link key={service.path} to={service.path} onClick={close}>
                        <small>{String(index + 1).padStart(2, "0")}</small>
                        <span>{service.menuTitle}</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <NavLink key={item.path} to={item.path} onClick={() => item.path === "/kontakt/" && trackEvent("contact_click", { location: "header" })} className={({ isActive }) => isActive ? "is-active" : ""}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={company.phones[0].href} onClick={() => trackEvent("phone_click", { location: "header" })} aria-label={`Zadzwoń: ${company.phones[0].display}`}>
            <Phone size={18} /><span>{company.phones[0].display}</span>
          </a>
          <Link to="/wycena/" className="button button--small">Wycena <ArrowUpRight size={16} /></Link>
          <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Zamknij menu" : "Otwórz menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Nawigacja mobilna">
          {[...mainNavigation, { label: "Wycena", path: "/wycena/" }].map((item, index) => (
            <Link key={item.path} to={item.path} onClick={() => { if (item.path === "/kontakt/") trackEvent("contact_click", { location: "mobile_menu" }); close(); }} className={location.pathname === item.path ? "is-active" : ""}>
              <small>{String(index + 1).padStart(2, "0")}</small><span>{item.label}</span><ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__contact">
          <a href={company.phones[0].href}>{company.phones[0].display}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
    </header>
  );
}

