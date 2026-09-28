import { Seo } from '../components/Seo'

export function AboutPage() {
  return (
    <>
      <Seo title="O nas | Stolarnia Paw" description="Poznaj historię, tradycję i proces produkcji Stolarnia Paw — od drewna po gotowe wnętrza na wymiar." path="/o-nas" />
      <section className="page-section container">
        <p className="eyebrow">O nas</p>
        <h1>Stolarstwo z tradycją i myślą o nowoczesnej architekturze.</h1>
        <div className="content-grid two-col">
          <div>
            <p>
              Stolarnia Paw to firma z wieloletnią tradycją stolarską, która łączy doświadczenie rodzinnej produkcji z nowoczesnym podejściem do projektowania i realizacji wnętrz. W zależności od potrzeb tworzymy schody, podłogi, drzwi, kuchnie, meble, zabudowy i wykończenia wnętrz z naturalnego drewna.
            </p>
          </div>
          <div>
            <p>
              Własny tartak oraz zaplecze produkcyjne pozwalają nam kontrolować jakość materiału na każdym etapie procesu — od doboru drewna, przez obróbkę, aż po montaż i finalne wykończenie.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
