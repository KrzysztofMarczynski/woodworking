export type BlogPost = {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  { slug: '/jakie-deski-najlepiej-nadaja-sie-na-podlogi', title: 'Jakie deski najlepiej nadają się na podłogi?', category: 'Podłogi', date: '2026-08-21', excerpt: 'Poradnik o doborze odpowiedniego gatunku drewna oraz przekrojów do codziennego użytku.' },
  { slug: '/do-czego-wykorzystywane-sa-oblogi-debowe', title: 'Do czego wykorzystywane są obłogi dębowe?', category: 'Tartacznictwo', date: '2026-08-14', excerpt: 'Obłogi dębowe stosuje się w wykończeniach ścian, podłóg i elementów dekoracyjnych.' },
  { slug: '/jak-ukladac-podloge-w-jodelke', title: 'Jak układać podłogę w jodełkę?', category: 'Podłogi', date: '2026-08-09', excerpt: 'Technika układania desek w jodełkę wymaga precyzji i właściwej przygotowanej podkłady.' },
  { slug: '/jak-dobrac-drewniane-drzwi-na-wymiar', title: 'Jak dobrać drewniane drzwi na wymiar?', category: 'Drzwi', date: '2026-07-28', excerpt: 'Dobór rodzaju drewna, koloru i wykończenia wpływa na wygląd całego wnętrza.' },
  { slug: '/jak-dbac-o-podloge-z-drewna', title: 'Jak dbać o podłogę z drewna?', category: 'Pielęgnacja', date: '2026-07-12', excerpt: 'Prawidłowa pielęgnacja ułatwia zachowanie estetyki oraz trwałości podłogi przez lata.' },
]
