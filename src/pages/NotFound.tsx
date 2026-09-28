import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return <><SEO title="Nie znaleziono strony - Stolarnia Paw" description="Podany adres nie istnieje." noindex /><section className="not-found shell"><span>404</span><h1>Ta strona nie istnieje.</h1><p>Adres mógł się zmienić albo zawiera błąd.</p><Link className="button" to="/"><ArrowLeft size={18} />Wróć na stronę główną</Link></section></>;
}

