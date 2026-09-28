import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, FileUp } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/site";
import { trackEvent } from "../lib/analytics";
import { submitQuoteRequest } from "../lib/forms";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "missing" | "error">("idle");
  const started = useRef(false);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    trackEvent("quote_form_start", { placement: compact ? "contact" : "quote" });
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const result = await submitQuoteRequest(event.currentTarget);
    if (result.ok) {
      setStatus("success");
      event.currentTarget.reset();
      trackEvent("quote_form_submit", { placement: compact ? "contact" : "quote" });
    } else {
      setStatus(result.reason === "missing_endpoint" ? "missing" : "error");
    }
  };

  return (
    <form className={`quote-form${compact ? " quote-form--compact" : ""}`} onFocus={markStarted} onSubmit={submit}>
      <div className="form-grid">
        <label><span>Imię i nazwisko *</span><input name="name" autoComplete="name" required /></label>
        <label><span>Telefon *</span><input name="phone" type="tel" autoComplete="tel" required /></label>
        <label><span>E-mail *</span><input name="email" type="email" autoComplete="email" required /></label>
        <label><span>Miejscowość realizacji</span><input name="location" autoComplete="address-level2" /></label>
        <label><span>Rodzaj realizacji *</span><select name="service" required defaultValue=""><option value="" disabled>Wybierz</option><option>Schody</option><option>Podłogi</option><option>Drzwi</option><option>Kuchnia</option><option>Meble i zabudowy</option><option>Boazeria</option><option>Tarcica / obłóg</option><option>Inne</option></select></label>
        <label><span>Planowany termin</span><input name="deadline" placeholder="np. wiosna 2027" /></label>
      </div>
      <label className="form-wide"><span>Opisz projekt *</span><textarea name="message" rows={compact ? 5 : 7} required placeholder="Wymiary, materiał, etap budowy i wszystko, co już wiesz o realizacji." /></label>
      <label className="file-field"><FileUp size={20} /><span><strong>Dodaj pliki</strong><small>Rzut, szkic lub zdjęcia, maks. według limitu usługi formularza</small></span><input name="attachments" type="file" multiple accept="image/*,.pdf" /></label>
      <label className="consent-field"><input name="consent" type="checkbox" required /><span>Wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania. Zapoznałem/am się z <Link to="/polityka-prywatnosci/">polityką prywatności</Link>.</span></label>
      <div className="form-submit">
        <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Wysyłanie..." : <>Wyślij zapytanie <ArrowRight size={18} /></>}</button>
        <p>Odpowiadamy na konkretne zapytania po zapoznaniu się z zakresem prac.</p>
      </div>
      {status === "success" && <p className="form-message is-success"><Check size={18} />Dziękujemy. Zapytanie zostało wysłane.</p>}
      {status === "missing" && <p className="form-message">Wysyłka formularza wymaga konfiguracji adresu <code>VITE_QUOTE_ENDPOINT</code>. Do tego czasu napisz bezpośrednio: <a href={`mailto:${company.email}`}>{company.email}</a>.</p>}
      {status === "error" && <p className="form-message">Nie udało się wysłać formularza. Spróbuj ponownie lub napisz na <a href={`mailto:${company.email}`}>{company.email}</a>.</p>}
    </form>
  );
}

