export type Project = {
  title: string
  category: string
  location?: string
  year?: string
  description: string
  image: string
}

export const projects: Project[] = [
  { title: 'Nowoczesne schody w domu prywatnym', category: 'Schody', location: 'Małopolska', year: '2025', description: 'Kompozycja z drewna i szkła zaprojektowana pod konkretną architekturę wnętrza.', image: '/images/project-1.jpg' },
  { title: 'Jodelka francuska w salonie', category: 'Podłogi', location: 'Kraków', year: '2024', description: 'Precyzyjnie ułożona podłoga z naturalnym usłojeniem drewna.', image: '/images/project-2.jpg' },
  { title: 'Kuchnia na wymiar', category: 'Kuchnie', location: 'Oświęcim', year: '2025', description: 'Kuchnia zintegrowana z bryłą domu i przeznaczona do codziennego użytkowania.', image: '/images/project-3.jpg' },
  { title: 'Boazeria salonowa', category: 'Boazerie', location: 'Jawiszowice', year: '2023', description: 'Architektoniczne wykończenie ścian z ciepłym drewnem i subtelnie podkreślonym światłem.', image: '/images/project-4.jpg' },
  { title: 'Zabudowa garderoby', category: 'Meble', location: 'Brzeszcze', year: '2024', description: 'Meble dopasowane do wymiarów przestrzeni i codziennych potrzeb właścicieli.', image: '/images/project-5.jpg' },
  { title: 'Eleganckie drzwi wewnętrzne', category: 'Drzwi', location: 'Bielsko-Biała', year: '2025', description: 'Drzwi wykonane na zamówienie, z zachowaniem proporcji i charakteru wnętrza.', image: '/images/project-6.jpg' },
]
