import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company, siteUrl } from "../data/site";
import { normalizePath } from "../lib/path";

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: "website" | "article";
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
};

function setMeta(key: string, value: string, property = false) {
  const attribute = property ? "property" : "name";
  let node = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attribute, key);
    document.head.appendChild(node);
  }
  node.content = value;
}

export default function SEO({ title, description, canonicalPath, type = "website", schema, noindex = false }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const path = canonicalPath || normalizePath(location.pathname);
    const canonical = `${siteUrl}${path}`;
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:url", canonical, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow");

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    document.getElementById("page-schema")?.remove();
    const organization = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: company.brand,
      url: siteUrl,
      email: company.email,
      telephone: company.phones[0].display,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        postalCode: company.address.postalCode,
        addressLocality: company.address.city,
        addressRegion: "małopolskie",
        addressCountry: "PL",
      },
    };
    const script = document.createElement("script");
    script.id = "page-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema ? [organization, ...(Array.isArray(schema) ? schema : [schema])] : organization);
    document.head.appendChild(script);
    return () => script.remove();
  }, [canonicalPath, description, location.pathname, noindex, schema, title, type]);

  return null;
}

