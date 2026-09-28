import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/site";
import { trackEvent } from "../lib/analytics";

export default function CTA({ title = "Masz pomysł, rzut albo tylko wymiar?", text = "Zaczniemy od rozmowy. Opowiedz nam o przestrzeni, terminie i materiale, a wrócimy z konkretnymi pytaniami." }) {
  return (
    <section className="cta-band">
      <div className="shell cta-band__inner">
        <div><p className="eyebrow">Porozmawiajmy</p><h2>{title}</h2><p>{text}</p></div>
        <div className="cta-band__actions">
          <Link className="button button--light" to="/wycena/">Przejdź do wyceny <ArrowRight size={18} /></Link>
          <a href={company.phones[0].href} onClick={() => trackEvent("phone_click", { location: "cta" })}><Phone size={18} />{company.phones[0].display}</a>
        </div>
      </div>
    </section>
  );
}

