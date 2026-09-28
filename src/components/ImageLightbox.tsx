import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import type { ImageAsset } from "../types/content";

type Props = {
  images: ImageAsset[];
  activeIndex: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function ImageLightbox({ images, activeIndex, onChange, onClose }: Props) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (activeIndex === null || images.length === 0) return;

    const changeBy = (direction: number) => {
      onChange((activeIndex + direction + images.length) % images.length);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") changeBy(-1);
      if (event.key === "ArrowRight") changeBy(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    [images[(activeIndex - 1 + images.length) % images.length], images[(activeIndex + 1) % images.length]].forEach((image) => {
      const preload = new Image();
      preload.src = image.src;
    });

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images, onChange, onClose]);

  if (activeIndex === null || images.length === 0) return null;

  const image = images[activeIndex];
  const changeBy = (direction: number) => {
    onChange((activeIndex + direction + images.length) % images.length);
  };

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Podgląd zdjęcia" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <button ref={closeButton} className="lightbox__close" type="button" onClick={onClose} aria-label="Zamknij podgląd">
        <X aria-hidden="true" />
      </button>
      {images.length > 1 && <button className="lightbox__arrow lightbox__arrow--previous" type="button" onClick={() => changeBy(-1)} aria-label="Poprzednie zdjęcie">
        <ChevronLeft aria-hidden="true" />
      </button>}
      <figure className="lightbox__figure">
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
        <figcaption>
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
          <p>{image.alt}</p>
        </figcaption>
      </figure>
      {images.length > 1 && <button className="lightbox__arrow lightbox__arrow--next" type="button" onClick={() => changeBy(1)} aria-label="Następne zdjęcie">
        <ChevronRight aria-hidden="true" />
      </button>}
    </div>,
    document.body,
  );
}
