import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blog";
import { images } from "../data/images";
import { formatDate } from "../lib/path";

export default function BlogIndex() {
  return <>
    <SEO title="Blog - Stolarnia Paw" description="Poradniki Stolarni Paw o schodach, podłogach, drewnie, drzwiach i meblach wykonywanych na wymiar." canonicalPath="/blog/" />
    <PageHero eyebrow="Blog" title="Wiedza zapisana w drewnie." lead="Praktyczne odpowiedzi o materiałach, wykonaniu, pielęgnacji i decyzjach, które wpływają na trwałość gotowej realizacji." image={images.services.veneer} breadcrumbs={[{ label: "Blog" }]} />
    <section className="section"><div className="shell blog-grid">{blogPosts.map((post) => <article key={post.path}><Link to={post.path}><div className="blog-card__media"><img src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} loading="lazy" /></div><small>{formatDate(post.modified || post.date)} / {post.category}</small><h2>{post.title}</h2><p>{post.excerpt}</p><span className="text-link">Czytaj <ArrowRight size={17} /></span></Link></article>)}</div></section>
  </>;
}

