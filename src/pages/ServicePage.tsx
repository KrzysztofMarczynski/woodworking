type ServicePageProps = {
  title: string
  slug: string
}

export function ServicePage({ title, slug }: ServicePageProps) {
  return (
    <section className="page-section container service-page">
      <p className="eyebrow">Usługa</p>
      <h1>{title}</h1>
      <p className="service-intro">
        Projekty wykonujemy z myślą o architekturze wnętrza, trwałości oraz swoim charakterze.
      </p>
      <div className="content-grid two-col">
        <div>
          <h2>Dlaczego warto wybrać rozwiązania z drewna?</h2>
          <p>
            Drewno jako materiał buduje atmosferę, podkreśla charakter wnętrza i pozostaje atrakcyjne przez lata.
          </p>
        </div>
        <div>
          <h2>Proces realizacji</h2>
          <p>
            Od pomysłu i projektu, przez dobór materiału, produkcję i montaż, aż po finalne detale — każda usługa jest realizowana indywidualnie.
          </p>
        </div>
      </div>
      <p className="inline-note">Ścieżka strony: {slug}</p>
    </section>
  )
}
