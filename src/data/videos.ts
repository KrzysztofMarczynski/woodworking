import type { VideoAsset } from "../types/content";

export const videos = {
  doorFinishing: {
    src: "/images/video/lakierowanie-drzwi.mp4",
    poster: "/images/video/lakierowanie-drzwi.jpg",
    label: "Drzwi / wykończenie",
    sourceUrl: "https://www.facebook.com/reel/967566336025870",
  },
  finishedStairs: {
    src: "/images/video/schody-gotowa-realizacja.mp4",
    poster: "/images/portfolio/schody-samonosne.jpg",
    label: "Schody / realizacja",
    sourceUrl: "https://www.facebook.com/reel/1464945595116938",
  },
  workshopStairs: {
    src: "/images/video/schody-w-pracowni.mp4",
    poster: "/images/video/schody-w-pracowni.jpg",
    label: "Schody / produkcja",
    sourceUrl: "https://www.facebook.com/reel/1514634143712951",
  },
  wallPanel: {
    src: "/images/video/panel-drewniany-3d.mp4",
    poster: "/images/video/panel-drewniany-3d.jpg",
    label: "Boazeria / detal 3D",
    sourceUrl: "https://www.facebook.com/reel/1279173757506428",
  },
  furnitureFinishing: {
    src: "/images/video/malowanie-mebli.mp4",
    poster: "/images/video/malowanie-mebli.jpg",
    label: "Meble / malowanie",
    sourceUrl: "https://www.facebook.com/reel/1939989623329259",
  },
  acaciaTable: {
    src: "/images/video/stolik-akacjowy.mp4",
    poster: "/images/video/stolik-akacjowy.jpg",
    label: "Meble / stolik na wymiar",
    sourceUrl: "https://www.facebook.com/reel/1087775663646087",
  },
} satisfies Record<string, VideoAsset>;

export const homeVideos = [
  videos.doorFinishing,
  videos.workshopStairs,
  videos.furnitureFinishing,
  videos.acaciaTable,
  videos.wallPanel,
];

export const serviceVideos: Partial<Record<string, VideoAsset>> = {
  stairs: videos.finishedStairs,
  "carpet-stairs": videos.finishedStairs,
  "self-supporting-stairs": videos.workshopStairs,
  "built-stairs": videos.workshopStairs,
  "concrete-stairs": videos.workshopStairs,
  doors: videos.doorFinishing,
  furniture: videos.furnitureFinishing,
  paneling: videos.wallPanel,
};
