import { useEffect, useRef, useState } from "react";
import type { ImageAsset, VideoAsset } from "../types/content";

type Props = {
  image: ImageAsset;
  video?: VideoAsset;
};

export default function OfferMedia({ image, video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  useEffect(() => {
    const element = videoRef.current;
    const shouldUsePoster = window.matchMedia("(max-width: 960px), (prefers-reduced-motion: reduce)").matches;
    if (!element || shouldUsePoster) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void element.play().catch(() => undefined);
      } else {
        element.pause();
      }
    }, { threshold: 0.25 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [video]);

  if (!video) {
    return <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />;
  }

  return (
    <>
      <img className="offer-item__poster" src={video.poster} alt={image.alt} width="540" height="960" loading="lazy" />
      <video
        ref={videoRef}
        className={`offer-item__video${hasStartedPlaying ? " offer-item__video--ready" : ""}`}
        loop
        muted
        playsInline
        poster={video.poster}
        preload="metadata"
        aria-hidden="true"
        onPlaying={() => setHasStartedPlaying(true)}
        onError={() => setHasStartedPlaying(false)}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    </>
  );
}
