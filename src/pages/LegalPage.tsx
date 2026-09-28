type LegalSection = {
  heading: string
  paragraphs: string[]
}

type LegalPageProps = {
  title: string
  intro: string
  sections: LegalSection[]
}

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <section className="page-section container legal-page">
      <p className="eyebrow">Informacje prawne</p>
      <h1>{title}</h1>
      <p className="service-intro">{intro}</p>

      {sections.map((section) => (
        <div key={section.heading} className="legal-section">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ))}
    </section>
  )
}
