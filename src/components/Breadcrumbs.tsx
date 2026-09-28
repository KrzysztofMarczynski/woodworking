import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Breadcrumb } from "../types/content";

export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Okruszki">
      <Link to="/">Strona główna</Link>
      {items.map((item) => (
        <span key={`${item.label}-${item.path || "current"}`}>
          <ChevronRight aria-hidden="true" size={14} />
          {item.path ? <Link to={item.path}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

