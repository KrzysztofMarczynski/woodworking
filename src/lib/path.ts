export function normalizePath(pathname: string) {
  const clean = pathname.split("?")[0].split("#")[0] || "/";
  return clean === "/" ? "/" : `/${clean.replace(/^\/+|\/+$/g, "")}/`;
}

export function formatDate(value: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

