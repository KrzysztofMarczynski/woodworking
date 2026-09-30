import type { ImageAsset, VideoAsset } from "../types/content";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  image: ImageAsset;
  video?: VideoAsset;
  breadcrumbs?: Array<{ label: string; path?: string }>;
};

export default function PageHero({ eyebrow, title, lead, image, video, breadcrumbs = [] }: Props) {
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
          {video ? (
            <>
              <video className="page-hero__visual page-hero__video" autoPlay loop muted playsInline poster={video.poster} preload="metadata" aria-hidden="true">
                <source src={video.src} type="video/mp4" />
              </video>
              <img className="page-hero__visual page-hero__poster" src={video.poster} alt="" width="540" height="960" aria-hidden="true" />
            </>
          ) : (
            <img className="page-hero__visual" src={image.src} alt={image.alt} width={image.width} height={image.height} />
          )}
          <span className="drawing-label">PAW / {video?.label ?? "detal 1:1"}</span>
        </Reveal>
      </div>
    </section>
  );
}

