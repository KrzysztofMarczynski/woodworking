export type NavItem = {
  label: string
  href: string
  description?: string
  image?: string
}

export const navItems: NavItem[] = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Oferta', href: '/schody', description: 'Schody, podłogi, drzwi i bardziej', image: '/images/placeholder-1.jpg' },
  { label: 'Realizacje', href: '/#realizacje' },
  { label: 'Materiały', href: '/#materials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Wycena', href: '/kontakt#wycena' },
]

export const serviceLinks: NavItem[] = [
  { label: 'Schody', href: '/schody', description: 'Nowoczesne i klasyczne rozwiązania schodowe.', image: '/images/stairs.jpg' },
  { label: 'Podłogi', href: '/podlogi', description: 'Drewno naturalne, precyzja i trwałość.', image: '/images/floors.jpg' },
  { label: 'Drzwi', href: '/drzwi', description: 'Drzwi na wymiar do wnętrz i domów.', image: '/images/doors.jpg' },
  { label: 'Kuchnie', href: '/kuchnie', description: 'Kuchnie projektowane z myślą o codzienności.', image: '/images/kitchens.jpg' },
  { label: 'Meble i zabudowy', href: '/meble-i-zabudowy', description: 'Meble i zabudowy dopasowane do przestrzeni.', image: '/images/furniture.jpg' },
  { label: 'Boazerie', href: '/boazerie', description: 'Architektoniczne wykończenia z drewna.', image: '/images/wall-paneling.jpg' },
  { label: 'Tartacznictwo', href: '/tartacznictwo', description: 'Surowiec, obróbka i kontrola jakości.', image: '/images/timber.jpg' },
]

export const footerLinks = {
  company: [
    { label: 'O nas', href: '/o-nas' },
    { label: 'Realizacje', href: '/#realizacje' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  services: serviceLinks,
  legal: [
    { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    { label: 'Cookies', href: '/cookies' },
  ],
}
