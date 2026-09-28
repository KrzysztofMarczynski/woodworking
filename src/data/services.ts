export type Service = {
  id: string
  title: string
  slug: string
  summary: string
  number: string
  image: string
}

export const services: Service[] = [
  { id: 'stairs', title: 'Schody', slug: '/schody', summary: 'Schody wykonane z drewna i tworzone z myślą o architekturze wnętrza.', number: '01', image: '/images/stairs.jpg' },
  { id: 'floors', title: 'Podłogi', slug: '/podlogi', summary: 'Drewniane podłogi, które łączą ciepło natury z trwałością użytkowania.', number: '02', image: '/images/floors.jpg' },
  { id: 'doors', title: 'Drzwi', slug: '/drzwi', summary: 'Drzwi na wymiar, projektowane w zgodzie z charakterem wnętrza.', number: '03', image: '/images/doors.jpg' },
  { id: 'kitchens', title: 'Kuchnie', slug: '/kuchnie', summary: 'Kuchnie, które są funkcjonalne, trwałe i estetycznie wyrafinowane.', number: '04', image: '/images/kitchens.jpg' },
  { id: 'furniture', title: 'Meble', slug: '/meble-i-zabudowy', summary: 'Indywidualne projekty mebli i zabudów do każdej przestrzeni.', number: '05', image: '/images/furniture.jpg' },
  { id: 'paneling', title: 'Boazerie', slug: '/boazerie', summary: 'Boazerie i wykończenia, które nadają wnętrzu głębię i charakter.', number: '06', image: '/images/wall-paneling.jpg' },
  { id: 'timber', title: 'Tartacznictwo', slug: '/tartacznictwo', summary: 'Kontrola procesu od surowca po finalny produkt.', number: '07', image: '/images/timber.jpg' },
]

export const processSteps = [
  'Pomysł',
  'Projekt',
  'Dobór drewna',
  'Produkcja',
  'Montaż',
  'Gotowa realizacja',
]
