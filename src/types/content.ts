export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website" | "article";
};

export type LegacyBlock =
  | {
      type: "heading";
      level: number;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type LegacyContentRecord = {
  kind: "page" | "post";
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  modified: string;
  headings: Array<{
    level: number;
    text: string;
  }>;
  blocks: LegacyBlock[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Breadcrumb = {
  label: string;
  path?: string;
};
