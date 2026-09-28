import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page-section container not-found">
      <p className="eyebrow">404</p>
      <h1>Ten projekt jeszcze nie powstał.</h1>
      <p>Strona, której szukasz, nie jest dostępna albo została przeniesiona.</p>
      <Link to="/" className="button button-primary">Wróć na stronę główną</Link>
    </section>
  )
}
