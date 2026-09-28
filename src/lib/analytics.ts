declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __pawAnalyticsReady?: boolean;
  }
}

const gaId = import.meta.env.VITE_GA_ID?.trim();
const gtmId = import.meta.env.VITE_GTM_ID?.trim();
const adsId = import.meta.env.VITE_GOOGLE_ADS_ID?.trim();

function addScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (window.__pawAnalyticsReady || localStorage.getItem("paw-cookie-consent") !== "accepted") return;
  window.__pawAnalyticsReady = true;
  window.dataLayer = window.dataLayer || [];

  if (gtmId) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    addScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`, "paw-gtm");
  }

  const primaryId = gaId || adsId;
  if (!gtmId && primaryId) {
    addScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`, "paw-gtag");
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("js", new Date());
    if (gaId) window.gtag("config", gaId);
    if (adsId) window.gtag("config", adsId);
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", name, params);
  window.dataLayer?.push({ event: name, ...params });
}

