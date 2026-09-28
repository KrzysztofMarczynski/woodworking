import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { initAnalytics } from "../lib/analytics";

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => !localStorage.getItem("paw-cookie-consent"));
  if (!visible) return null;

  const decide = (value: "accepted" | "rejected") => {
    localStorage.setItem("paw-cookie-consent", value);
    setVisible(false);
    if (value === "accepted") initAnalytics();
  };

  return (
    <aside className="cookie-banner" aria-label="Ustawienia plików cookie">
      <button type="button" className="cookie-close" onClick={() => decide("rejected")} aria-label="Odrzuć i zamknij"><X size={18} /></button>
      <strong>Twoja prywatność ma znaczenie.</strong>
      <p>Używamy opcjonalnej analityki dopiero po Twojej zgodzie. Niezbędne ustawienia działają zawsze.</p>
      <div className="cookie-actions">
        <button type="button" className="button button--small" onClick={() => decide("accepted")}>Akceptuję</button>
        <button type="button" className="button button--small button--ghost" onClick={() => decide("rejected")}>Tylko niezbędne</button>
        <Link to="/polityka-cookies/">Szczegóły</Link>
      </div>
    </aside>
  );
}

