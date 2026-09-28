import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import Breadcrumbs from "../components/Breadcrumbs";
import LegacyBlocks from "../components/LegacyBlocks";
import SEO from "../components/SEO";
import type { blogPosts } from "../data/blog";
import { formatDate } from "../lib/path";

type BlogPostRecord = (typeof blogPosts)[number];

export default function BlogPost({ post }: { post: BlogPostRecord }) {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, datePublished: post.date, dateModified: post.modified || post.date, author: { "@type": "Organization", name: "Stolarnia Paw" } };
  return <>
    <SEO title={post.seoTitle || `${post.title} - Stolarnia Paw`} description={post.description || post.excerpt} canonicalPath={post.path} type="article" schema={schema} />
    <article className="article-page">
      <header className="article-header shell"><Breadcrumbs items={[{ label: "Blog", path: "/blog/" }, { label: post.title }]} /><p className="eyebrow">{post.category} / {formatDate(post.modified || post.date)}</p><h1>{post.title}</h1><p className="article-lead">{post.excerpt}</p></header>
      <div className="article-image shell"><img src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} /></div>
      <div className="article-layout shell"><aside><span>Stolarnia Paw</span><p>Materiały i wskazówki oparte na praktyce produkcyjnej.</p><Link to="/blog/"><ArrowLeft size={16} />Wszystkie artykuły</Link></aside><LegacyBlocks blocks={post.blocks} /></div>
      <div className="article-back shell"><Link className="text-link" to="/blog/">Więcej poradników <ArrowRight size={17} /></Link></div>
    </article>
    <CTA />
  </>;
}

