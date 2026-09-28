import LegacyBlocks from "../components/LegacyBlocks";
import SEO from "../components/SEO";
import type { LegacyContentRecord } from "../types/content";

export default function LegacyPage({ page }: { page: LegacyContentRecord }) {
  return <>
    <SEO title={page.seoTitle || `${page.title} - Stolarnia Paw`} description={page.description || page.title} canonicalPath={page.path} />
    <section className="legal-page"><div className="shell prose-shell"><p className="eyebrow">Stolarnia Paw</p><h1>{page.title}</h1><LegacyBlocks blocks={page.blocks} /></div></section>
  </>;
}

