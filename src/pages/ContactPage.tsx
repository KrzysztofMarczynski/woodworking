import { Seo } from '../components/Seo'

export function ContactPage() {
  return (
    <>
      <Seo title="Kontakt | Stolarnia Paw" description="Umów wycenę, zapytaj o realizację lub skontaktuj się ze Stolarnia Paw w sprawie schodów, podłóg i mebli na wymiar." path="/kontakt" />
      <section className="page-section container contact-page">
        <div className="form-panel" id="wycena">
          <p className="eyebrow">Kontakt</p>
          <h1>Umów wycenę lub zapytaj o realizację.</h1>
          <form className="contact-form">
            <div className="field-row">
              <label>
                Imię i nazwisko
                <input type="text" name="name" />
              </label>
              <label>
                Telefon
                <input type="tel" name="phone" />
              </label>
            </div>
            <div className="field-row">
              <label>
                E-mail
                <input type="email" name="email" />
              </label>
              <label>
                Rodzaj realizacji
                <select name="type">
                  <option>Schody</option>
                  <option>Podłogi</option>
                  <option>Drzwi</option>
                  <option>Kuchnie</option>
                  <option>Meble i zabudowy</option>
                  <option>Boazerie</option>
                  <option>Tartacznictwo</option>
                </select>
              </label>
            </div>
            <label>
              Orientacyjny zakres projektu
              <textarea name="scope" rows={4} />
            </label>
            <label>
              Wiadomość
              <textarea name="message" rows={6} />
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="rodo" />
              Wyrażam zgodę na przetwarzanie danych osobowych.
            </label>
            <button type="submit" className="button button-primary">Wyślij zapytanie</button>
          </form>
        </div>

        <aside className="contact-aside">
          <h2>Stolarnia Paw</h2>
          <p>ul. Daszyńskiego 50<br />32-626 Jawiszowice<br />gm. Brzeszcze<br />woj. małopolskie</p>
          <ul>
            <li><a href="tel:+48535112662">+48 535 112 662</a></li>
            <li><a href="tel:+48600978425">+48 600 978 425</a></li>
            <li><a href="mailto:biuro@stolarnia-paw.pl">biuro@stolarnia-paw.pl</a></li>
          </ul>
          <p><strong>Godziny otwarcia:</strong><br />Poniedziałek–piątek 07:00–17:00<br />Sobota 08:00–14:00<br />Niedziela zamknięte</p>
          <div className="map-box">
            <iframe
              title="Mapa lokalizacji Stolarnia Paw"
              src="https://www.google.com/maps?q=Jawiszowice%20Stolarnia%20Paw&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </>
  )
}
