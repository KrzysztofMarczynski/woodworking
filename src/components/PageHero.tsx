import type { ImageAsset } from "../types/content";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  image: ImageAsset;
  breadcrumbs?: Array<{ label: string; path?: string }>;
};

export default function PageHero({ eyebrow, title, lead, image, breadcrumbs = [] }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid shell">
        <Reveal className="page-hero__copy">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__lead">{lead}</p>
        </Reveal>
        <Reveal className="page-hero__media">
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
          <span className="drawing-label">PAW / detal 1:1</span>
        </Reveal>
      </div>
    </section>
  );
}

