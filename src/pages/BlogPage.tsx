import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export function BlogPage() {
  return (
    <section className="page-section container">
      <p className="eyebrow">Blog</p>
      <h1>Artykuły o drewnie, projektowaniu i wnętrzach.</h1>
      <div className="blog-grid">
        <article className="blog-featured">
          <h2>Jak dobrać drewno do schodów i podłóg?</h2>
          <p>Poradnik dotyczący doboru gatunku drewna, struktury usłojenia i trwałości w codziennym użytkowaniu.</p>
          <Link to="/jakie-deski-najlepiej-nadaja-sie-na-podlogi" className="button button-secondary">Czytaj więcej</Link>
        </article>
        {blogPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <span className="blog-category">{post.category}</span>
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.excerpt}</p>
            <Link to={post.slug}>Czytaj</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
