import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import SEO from "../components/SEO";
import { images } from "../data/images";
import { company } from "../data/site";
import { trackEvent } from "../lib/analytics";

export default function Contact() {
  return <>
    <SEO title="Kontakt - Stolarnia Paw" description="Skontaktuj się ze Stolarnią Paw w Jawiszowicach. Telefon, e-mail, godziny pracy, mapa i formularz zapytania." canonicalPath="/kontakt/" />
    <PageHero eyebrow="Kontakt" title="Porozmawiajmy o Twojej przestrzeni." lead="Najłatwiej zacząć od wymiarów, kilku zdjęć i krótkiego opisu. Jeśli projekt jest na wcześniejszym etapie, też możemy uporządkować pierwsze decyzje." image={images.services.kitchens} breadcrumbs={[{ label: "Kontakt" }]} />
    <section className="section contact-section"><div className="shell contact-layout"><div className="contact-details"><p className="eyebrow">Dane kontaktowe</p><h2>Stolarnia Paw</h2><div className="contact-list"><div><MapPin /><span>{company.address.street}<br />{company.address.postalCode} {company.address.city}<br />{company.address.municipality}, {company.address.region}</span></div>{company.phones.map((phone) => <div key={phone.href}><Phone /><a href={phone.href} onClick={() => trackEvent("phone_click", { location: "contact" })}>{phone.display} <small>{phone.label}</small></a></div>)}<div><Mail /><a href={`mailto:${company.email}`} onClick={() => trackEvent("email_click", { location: "contact" })}>{company.email}</a></div><div><Clock /><span>{company.hours.map((hour) => <span key={hour}>{hour}</span>)}</span></div></div><p className="correspondence">Adres korespondencyjny: {company.correspondenceAddress}</p></div><div><p className="eyebrow">Napisz do nas</p><QuoteForm compact /></div></div></section>
    <section className="map-section"><iframe title="Mapa dojazdu do Stolarni Paw" src={company.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
  </>;
}

