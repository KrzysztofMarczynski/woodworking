import { useEffect, useRef } from "react";
import type { ImageAsset, VideoAsset } from "../types/content";

type Props = {
  image: ImageAsset;
  video?: VideoAsset;
};

export default function OfferMedia({ image, video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
      <video ref={videoRef} className="offer-item__video" loop muted playsInline poster={video.poster} preload="metadata" aria-hidden="true">
        <source src={video.src} type="video/mp4" />
      </video>
      <img className="offer-item__poster" src={video.poster} alt={image.alt} width="540" height="960" loading="lazy" />
    </>
  );
}
