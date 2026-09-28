import { images } from "./images";
import type { FAQItem, ImageAsset, SeoMeta } from "../types/content";

export type ServicePage = {
  key: string;
  path: string;
  aliases?: string[];
  menuTitle: string;
  eyebrow: string;
  h1: string;
  heroTitle: string;
  lead: string;
  seo: SeoMeta;
  image: ImageAsset;
  tone: "architectural" | "material" | "gallery" | "technical";
  highlights: string[];
  details: Array<{
    title: string;
    body: string;
    items?: string[];
  }>;
  faq?: FAQItem[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    key: "stairs",
    path: "/schody/",
    menuTitle: "Schody",
    eyebrow: "Flagowa oferta",
    h1: "Schody",
    heroTitle: "Schody drewniane wpisane w architekturę domu.",
    lead:
      "Projektujemy, dowozimy i montujemy schody drewniane dywanowe, samonośne, gięte, spiralne, zabiegowe oraz okładziny na konstrukcje betonowe.",
    seo: {
      title: "Schody drewniane dywanowe, samonośne, nowoczesne na beton - Stolarnia Paw",
      description:
        "Projektujemy i produkujemy schody drewniane dywanowe i samonośne. Przygotowujemy też schody drewniane nowoczesne na beton. Sprawdź szczegóły naszych produktów.",
      canonicalPath: "/schody/",
    },
    image: images.services.stairs,
    tone: "architectural",
    highlights: [
      "Drewno lite, egzotyczne oraz elementy oklejane obłogiem",
      "Balustrady drewniane, metalowe, kute i szklane",
      "Pomiar, projekt, produkcja, transport i montaż",
    ],
    details: [
      {
        title: "Formy dopasowane do wnętrza",
        body:
          "Oferta obejmuje schody dywanowe, samonośne, gięte, spiralne i zabiegowe, a także drewniane okładziny na gotowe schody betonowe.",
      },
      {
        title: "Materiały i wykończenia",
        body:
          "Dobór gatunku, odcienia i wykończenia odbywa się pod konkretną przestrzeń, styl wnętrza i zakładany sposób użytkowania.",
      },
      {
        title: "Detale techniczne",
        body:
          "Schody powstają z myślą o stabilności, proporcjach i relacji z balustradą, podłogą, drzwiami oraz pozostałą zabudową.",
      },
    ],
    faq: [
      {
        question: "Jakie rodzaje schodów wykonuje Stolarnia Paw?",
        answer:
          "W ofercie znajdują się schody dywanowe, samonośne, gięte, spiralne, zabiegowe oraz drewniane okładziny na schody betonowe.",
      },
      {
        question: "Czy schody mogą powstać razem z balustradą?",
        answer:
          "Tak. Do schodów oferowane są balustrady drewniane, metalowe, kute i szklane.",
      },
    ],
    related: [
      "/schody/schody-drewniane-dywanowe/",
      "/schody/schody-drewniane-samonosne/",
      "/schody-drewniane-na-beton/",
    ],
  },
  {
    key: "carpet-stairs",
    path: "/schody/schody-drewniane-dywanowe/",
    menuTitle: "Schody dywanowe",
    eyebrow: "Schody",
    h1: "Schody drewniane dywanowe",
    heroTitle: "Lekka linia stopni bez zbędnego ciężaru.",
    lead:
      "Schody dywanowe tworzą płynne przejście między stopniami i dobrze odnajdują się w nowoczesnych oraz klasycznych wnętrzach.",
    seo: {
      title: "Schody drewniane dywanowe - Stolarnia Paw",
      description:
        "Schody drewniane dywanowe łączą minimalistyczną formę, naturalne drewno i precyzyjne wykonanie dopasowane do wnętrza.",
      canonicalPath: "/schody/schody-drewniane-dywanowe/",
    },
    image: images.services.stairs,
    tone: "architectural",
    highlights: [
      "Ciągła forma stopni",
      "Naturalne drewno dobrane do projektu",
      "Montaż realizowany po przygotowaniu elementów",
    ],
    details: [
      {
        title: "Charakter",
        body:
          "Konstrukcja przypomina pas drewna prowadzony przez kondygnacje, dlatego wymaga starannego planowania proporcji i wykończeń.",
      },
      {
        title: "Trwałość",
        body:
          "Odpowiednio dobrany gatunek drewna, obróbka i zabezpieczenie powierzchni pomagają zachować estetykę przy codziennym użytkowaniu.",
      },
    ],
    related: ["/schody/", "/schody/schody-drewniane-samonosne/", "/schody-drewniane-na-beton/"],
  },
  {
    key: "self-supporting-stairs",
    path: "/schody/schody-drewniane-samonosne/",
    menuTitle: "Schody samonośne",
    eyebrow: "Schody",
    h1: "Schody samonośne drewniane",
    heroTitle: "Konstrukcja, która nie potrzebuje dodatkowego podparcia.",
    lead:
      "Schody samonośne pozwalają zachować lekkość przestrzeni i dopasować formę do nietypowych wnętrz.",
    seo: {
      title: "Schody samonośne drewniane - Stolarnia Paw",
      description:
        "Drewniane schody samonośne projektowane pod nowoczesne i klasyczne wnętrza, z doborem gatunku drewna i indywidualnym wykonaniem.",
      canonicalPath: "/schody/schody-drewniane-samonosne/",
    },
    image: images.services.stairs,
    tone: "technical",
    highlights: ["Minimalistyczna konstrukcja", "Możliwość dopasowania do nietypowej przestrzeni", "Dąb i jesion jako ważne gatunki materiałowe"],
    details: [
      {
        title: "Dobór gatunku",
        body:
          "Przy projektowaniu uwzględnia się twardość, kolorystykę i właściwości drewna, aby schody pracowały z rytmem całego wnętrza.",
      },
      {
        title: "Architektura przestrzeni",
        body:
          "Brak dodatkowych podpór pozwala uzyskać lżejszy efekt wizualny i większą swobodę aranżacji.",
      },
    ],
    related: ["/schody/", "/schody/schody-drewniane-dywanowe/"],
  },
  {
    key: "built-stairs",
    path: "/schody/schody-zabudowane/",
    menuTitle: "Schody zabudowane",
    eyebrow: "Schody",
    h1: "Schody zabudowane",
    heroTitle: "Schody z przestrzenią wykorzystaną do końca.",
    lead:
      "Zabudowa schodów porządkuje wnętrze i może pełnić także funkcję dodatkowego przechowywania.",
    seo: {
      title: "Schody zabudowane - Stolarnia Paw",
      description:
        "Schody zabudowane łączą funkcjonalność, estetykę i trwałość, pozwalając lepiej wykorzystać przestrzeń w domu.",
      canonicalPath: "/schody/schody-zabudowane/",
    },
    image: images.services.furniture,
    tone: "gallery",
    highlights: ["Pełna osłona konstrukcji", "Porządek wizualny", "Możliwość funkcji przechowywania"],
    details: [
      {
        title: "Wykorzystanie miejsca",
        body:
          "Zabudowane schody mogą uporządkować dolną część biegu, ukryć konstrukcję i dodać wnętrzu bardziej dopracowany charakter.",
      },
      {
        title: "Dopasowanie",
        body:
          "Forma, materiał i detale są dobierane pod styl domu oraz potrzeby użytkowników.",
      },
    ],
    related: ["/schody/", "/meble-i-zabudowy/"],
  },
  {
    key: "concrete-stairs",
    path: "/schody-drewniane-na-beton/",
    aliases: ["/schody/schody-drewniane-na-beton/"],
    menuTitle: "Schody na beton",
    eyebrow: "Schody",
    h1: "Schody drewniane nowoczesne na beton",
    heroTitle: "Drewniana precyzja na stabilnej konstrukcji.",
    lead:
      "Drewniane okładziny na beton są wykonywane na zamówienie i dopasowywane do parametrów technicznych budynku.",
    seo: {
      title: "Schody drewniane nowoczesne na beton - Stolarnia Paw",
      description:
        "Schody drewniane na beton wykonywane na wymiar, z doborem materiału, odcienia i detali wykończeniowych.",
      canonicalPath: "/schody-drewniane-na-beton/",
    },
    image: images.services.stairs,
    tone: "technical",
    highlights: ["Dopasowanie do konstrukcji betonowej", "Szeroka gama odcieni", "Detale wykończenia pod projekt"],
    details: [
      {
        title: "Stabilność i estetyka",
        body:
          "Drewno ociepla betonową konstrukcję i pozwala połączyć trwałość schodów z naturalnym charakterem wnętrza.",
      },
      {
        title: "Produkcja od podstaw",
        body:
          "Elementy powstają na wymiar po analizie parametrów technicznych, sposobu użytkowania i wybranego wykończenia.",
      },
    ],
    related: ["/schody/", "/schody/schody-drewniane-dywanowe/"],
  },
  {
    key: "floors",
    path: "/podlogi/",
    menuTitle: "Podłogi",
    eyebrow: "Podłogi drewniane",
    h1: "Producent podłóg drewnianych w Małopolsce",
    heroTitle: "Podłogi z naturalnego drewna, przygotowane od deski do montażu.",
    lead:
      "Wykonujemy podłogi z różnych gatunków drewna, układamy je, cyklinujemy, malujemy, montujemy listwy oraz odnawiamy stare parkiety.",
    seo: {
      title: "Producent deski podłogowej, podłóg drewnianych Małopolska - Stolarnia Paw",
      description:
        "Oferujemy jakościową deskę podłogową z naturalnego drewna. Jako producent podłóg drewnianych stawiamy na jakość, estetykę i funkcjonalność.",
      canonicalPath: "/podlogi/",
    },
    image: images.services.floors,
    tone: "material",
    highlights: ["Deska z różnych gatunków drewna", "Układanie, cyklinowanie i malowanie", "Renowacja starych podłóg i parkietów"],
    details: [
      {
        title: "Od materiału do montażu",
        body:
          "Podłogi powstają od wyboru drewna, przez obróbkę, aż po montaż u klienta.",
      },
      {
        title: "Wykończenie",
        body:
          "W pracy wykorzystywane są nowoczesne maszyny, technologie oraz ekologiczne lakiery.",
      },
    ],
    faq: [
      {
        question: "Czy Stolarnia Paw odnawia stare podłogi?",
        answer: "Tak. Oferta obejmuje renowację starych podłóg i parkietów.",
      },
      {
        question: "Czy podłogi są wykonywane od podstaw?",
        answer:
          "Tak. Proces obejmuje wybór drewna, obróbkę i montaż gotowej podłogi u klienta.",
      },
    ],
    related: ["/podlogi/jodelka-francuska/", "/tartacznictwo/tarcica-debowa/"],
  },
  {
    key: "french-herringbone",
    path: "/podlogi/jodelka-francuska/",
    menuTitle: "Jodełka francuska",
    eyebrow: "Podłogi",
    h1: "Podłoga drewniana jodełka francuska",
    heroTitle: "Precyzyjny rytm desek ciętych pod kątem.",
    lead:
      "Jodełka francuska wymaga dokładnego przygotowania podłoża, cięcia i układania, aby wzór zachował swój charakter.",
    seo: {
      title: "Podłoga drewniana jodełka francuska - Stolarnia Paw",
      description:
        "Oferujemy podłogę drewnianą typu jodełka francuska. To eleganckie i uniwersalne pokrycie powierzchni do wielu budynków.",
      canonicalPath: "/podlogi/jodelka-francuska/",
    },
    image: images.services.floors,
    tone: "material",
    highlights: ["Wzór o charakterze premium", "Precyzyjne cięcie i układanie", "Drewno dobierane do wnętrza"],
    details: [
      {
        title: "Geometria",
        body:
          "Układ jodełki francuskiej opiera się na rytmie krótszych boków desek i wymaga równego podłoża oraz trzymania osi pomieszczenia.",
      },
      {
        title: "Efekt",
        body:
          "Wzór może optycznie prowadzić przestrzeń i wprowadzać do wnętrza architektoniczny porządek.",
      },
    ],
    related: ["/podlogi/", "/producent-deski-podlogowej-jak-wybrac-podloge-ktora-zachwyca-wygladem-i-sluzy-przez-dziesieciolecia/"],
  },
  {
    key: "doors",
    path: "/drzwi/",
    menuTitle: "Drzwi",
    eyebrow: "Drzwi drewniane",
    h1: "Drzwi drewniane na wymiar",
    heroTitle: "Drzwi dopasowane do proporcji i charakteru wnętrza.",
    lead:
      "Wykonujemy drzwi wewnętrzne i zewnętrzne, pełne i przeszklone, przylgowe oraz bezprzylgowe, z ościeżnicą stałą lub regulowaną.",
    seo: {
      title: "Drzwi drewniane na wymiar: zewnętrzne i wewnętrzne - Stolarnia Paw",
      description:
        "Oferujemy drzwi wewnętrzne i zewnętrzne, pełne i przeszklone. Wszystkie rodzaje wykonamy na wymiar.",
      canonicalPath: "/drzwi/",
    },
    image: images.services.doors,
    tone: "gallery",
    highlights: ["Drzwi wewnętrzne i zewnętrzne", "Witraże według projektów własnych lub klienta", "Zamki listwowe, chowane zawiasy, warianty ocieplane"],
    details: [
      {
        title: "Zakres",
        body:
          "Oferta obejmuje drzwi pełne, przeszklone, przylgowe, bezprzylgowe, z ościeżnicą stałą lub regulowaną.",
      },
      {
        title: "Wykończenia",
        body:
          "Drzwi mogą być dopasowane kolorem, formą i detalem do wnętrza oraz innych elementów stolarki.",
      },
    ],
    related: ["/jak-dobrac-drewniane-drzwi-na-wymiar/", "/meble-i-zabudowy/"],
  },
  {
    key: "kitchens",
    path: "/kuchnie/",
    menuTitle: "Kuchnie",
    eyebrow: "Kuchnie na wymiar",
    h1: "Meble kuchenne na zamówienie",
    heroTitle: "Kuchnie projektowane pod rytm domu.",
    lead:
      "Tworzymy kuchnie klasyczne i nowoczesne w każdym wymiarze, z frontami drewnianymi, fornirowanymi, lakierowanymi, akrylowymi, laminowanymi i frezowanymi.",
    seo: {
      title: "Meble kuchenne na zamówienie – nowoczesne kuchnie na wymiar - Stolarnia Paw",
      description:
        "Produkujemy meble kuchenne na zamówienie. Przygotowujemy nowoczesne sprzęty na wymiar, które sprawdzą się w domu.",
      canonicalPath: "/kuchnie/",
    },
    image: images.services.kitchens,
    tone: "architectural",
    highlights: ["Fronty drewniane, fornirowane, lakierowane, akrylowe i laminowane", "Blaty ze spieku kwarcowego oraz laminowane", "Witraże do witryn"],
    details: [
      {
        title: "Indywidualny projekt",
        body:
          "Układ, kolorystyka, fronty i blaty są dobierane do przestrzeni oraz potrzeb domowników.",
      },
      {
        title: "Materiały",
        body:
          "Dostępna jest duża gama kolorów, wzorów i kształtów elementów, w tym blaty ze spieku kwarcowego i laminatu.",
      },
    ],
    related: ["/meble-i-zabudowy/", "/meble-na-wymiar-2026-trendy-ktore-naprawde-zostana-na-lata/"],
  },
  {
    key: "furniture",
    path: "/meble-i-zabudowy/",
    menuTitle: "Meble i zabudowy",
    eyebrow: "Na wymiar",
    h1: "Zabudowa wnęki w ścianie",
    heroTitle: "Zabudowy, które porządkują przestrzeń.",
    lead:
      "Wykonujemy zabudowy wnęk, szafy z drzwiami przesuwnymi, szafki, komody, biurka i sypialnie z drewna litego, płyt laminowanych lub luster.",
    seo: {
      title: "Zabudowa wnęki w ścianie – szafki drewniane na wymiar - Stolarnia Paw",
      description:
        "Zajmujemy się produkcją zabudowy wnęki na wymiar oraz szafek i biurek drewnianych zgodnie z potrzebami klienta.",
      canonicalPath: "/meble-i-zabudowy/",
    },
    image: images.services.furniture,
    tone: "gallery",
    highlights: ["Szafy i wnęki", "Szafki, komody, biurka, sypialnie", "Drewno lite, płyty laminowane i lustra"],
    details: [
      {
        title: "Funkcja",
        body:
          "Zabudowy pozwalają wykorzystać trudne wnęki i dopasować przechowywanie do codziennego rytmu domu.",
      },
      {
        title: "Estetyka",
        body:
          "Meble powstają na zamówienie, dlatego mogą tworzyć spójną całość z podłogą, drzwiami i schodami.",
      },
    ],
    related: ["/kuchnie/", "/schody/schody-zabudowane/"],
  },
  {
    key: "paneling",
    path: "/boazerie/",
    menuTitle: "Boazerie",
    eyebrow: "Ściany i bezpieczeństwo",
    h1: "Ognioochronne boazerie",
    heroTitle: "Drewno na ścianie w nowoczesnym, bezpieczniejszym wydaniu.",
    lead:
      "Oferujemy ogniochronne boazerie o wielowarstwowej budowie, przeznaczone do budownictwa mieszkalnego, biurowego, hotelowego i sanatoryjnego.",
    seo: {
      title: "Ognioochronne boazerie – elegancja i większe bezpieczeństwo - Stolarnia Paw",
      description:
        "Oferujemy ognioodporne boazerie produkowane z materiałów niepalnych i pokryte naturalnym drewnem.",
      canonicalPath: "/boazerie/",
    },
    image: images.services.paneling,
    tone: "material",
    highlights: ["Płyta gipsowa ognioodporna", "Warstwa dekoracyjna z forniru", "Lakier ognioodporny"],
    details: [
      {
        title: "Budowa",
        body:
          "Boazeria składa się z podstawy ognioodpornej, warstwy forniru oraz lakieru ognioodpornego.",
      },
      {
        title: "Dopasowanie",
        body:
          "Dostępna jest duża gama kolorów i wzorów, także z możliwością dopasowania do deski podłogowej.",
      },
    ],
    related: ["/podlogi/", "/tartacznictwo/oblog-debowy/"],
  },
  {
    key: "timber",
    path: "/tartacznictwo/",
    menuTitle: "Tartacznictwo",
    eyebrow: "Drewno od początku",
    h1: "Skład drewna - Oświęcim, Małopolska",
    heroTitle: "Materiał, który znamy zanim stanie się wnętrzem.",
    lead:
      "W ramach działalności tartacznej świadczymy usługi suszenia i sprzedaży różnych gatunków drewna liściastego oraz iglastego, w szczególności tarcicy dębowej i jesionowej.",
    seo: {
      title: "Skład drewna - Oświęcim, Małopolska – sprzedaż tarcicy - Stolarnia Paw",
      description:
        "Prowadzimy skład drewna w Małopolsce. Oferujemy wysokiej jakości materiał, z którego powstają meble, podłogi i dekoracje.",
      canonicalPath: "/tartacznictwo/",
    },
    image: images.services.timber,
    tone: "material",
    highlights: ["Suszenie i sprzedaż drewna", "Drewno liściaste i iglaste", "Tarcica dębowa i jesionowa"],
    details: [
      {
        title: "Parametry z oferty",
        body:
          "Drewno sezonowane jest suszone na miejscu i przechowywane w suchym magazynie.",
        items: ["Grubość: 25, 32, 50 mm", "Długość: od 2,5 do 5 metrów", "Wilgotność: 8-10%", "Klasa: S, A, B, C, D"],
      },
      {
        title: "Logistyka",
        body:
          "Przy większej ilości materiału istnieje możliwość załadunku na auto wózkiem widłowym.",
      },
    ],
    related: ["/tartacznictwo/tarcica-debowa/", "/tartacznictwo/tarcica-jesionowa/", "/tartacznictwo/oblog-debowy/"],
  },
  {
    key: "oak-timber",
    path: "/tartacznictwo/tarcica-debowa/",
    menuTitle: "Tarcica dębowa",
    eyebrow: "Tartak",
    h1: "Tarcica dębowa sucha i mokra",
    heroTitle: "Dąb przygotowany do dalszej obróbki.",
    lead:
      "W asortymencie znajduje się tarcica dębowa mokra i sucha, wykorzystywana w stolarstwie, budownictwie oraz produkcji mebli.",
    seo: {
      title: "Tarcica dębowa sucha i mokra - Stolarnia Paw",
      description:
        "W naszym asortymencie znajdziesz tarcicę dębową w wersji mokrej i suchej. Oferujemy surowiec do produktów drewnianych.",
      canonicalPath: "/tartacznictwo/tarcica-debowa/",
    },
    image: images.services.timber,
    tone: "material",
    highlights: ["Tarcica mokra i sucha", "Materiał do mebli, podłóg i schodów", "Pomoc przy wyborze parametrów"],
    details: [
      {
        title: "Zastosowanie",
        body:
          "Dąb jest ceniony za trwałość, naturalny rysunek i szerokie zastosowanie w produktach drewnianych.",
      },
      {
        title: "Zakup u producenta",
        body:
          "Bezpośredni kontakt ze składem ułatwia dopasowanie wilgotności, klasy i wymiarów do planowanego projektu.",
      },
    ],
    related: ["/tartacznictwo/", "/tartacznictwo/tarcica-jesionowa/"],
  },
  {
    key: "ash-timber",
    path: "/tartacznictwo/tarcica-jesionowa/",
    menuTitle: "Tarcica jesionowa",
    eyebrow: "Tartak",
    h1: "Tarcica jesionowa sucha",
    heroTitle: "Jesion suszony i przygotowany do obróbki.",
    lead:
      "Tarcica jesionowa sucha jest sezonowana, suszona i przechowywana w suchym magazynie, z myślą o dalszej pracy stolarskiej.",
    seo: {
      title: "Tarcica jesionowa sucha - Stolarnia Paw",
      description:
        "Oferujemy tarcicę jesionową suchą. To materiał przygotowywany w naszym tartaku do dalszej obróbki.",
      canonicalPath: "/tartacznictwo/tarcica-jesionowa/",
    },
    image: images.services.timber,
    tone: "material",
    highlights: ["Materiał dla stolarni, tartaków i osób fizycznych", "Wilgotność 8-10%", "Klasy S, A, B, C, D"],
    details: [
      {
        title: "Właściwości",
        body:
          "Jesion jest wybierany do prac, w których liczy się wytrzymałość, sprężystość i wyrazisty rysunek drewna.",
      },
      {
        title: "Różnica wilgotności",
        body:
          "Sucha tarcica ogranicza ryzyko późniejszego pękania i zniekształceń podczas dalszej obróbki.",
      },
    ],
    related: ["/tartacznictwo/", "/tartacznictwo/tarcica-debowa/"],
  },
  {
    key: "oak-veneer",
    path: "/tartacznictwo/oblog-debowy/",
    menuTitle: "Obłóg dębowy",
    eyebrow: "Tartak",
    h1: "Obłóg dębowy 4 mm z naturalnego drewna",
    heroTitle: "Cienka warstwa drewna dla precyzyjnego wykończenia.",
    lead:
      "Obłóg dębowy 4 mm to naturalny materiał wykorzystywany między innymi przy produkcji mebli i wykańczaniu powierzchni.",
    seo: {
      title: "Obłóg dębowy 4 mm z naturalnego drewna - Stolarnia Paw",
      description:
        "Oferujemy obłóg dębowy grubość 4 mm, który sprawdzi się m.in. przy produkcji mebli. Sprawdź okleinę z drewna dębowego.",
      canonicalPath: "/tartacznictwo/oblog-debowy/",
    },
    image: images.services.veneer,
    tone: "technical",
    highlights: ["Grubość 4 mm", "Naturalne drewno dębowe", "Materiał do mebli i wykończeń"],
    details: [
      {
        title: "Zastosowanie",
        body:
          "Obłóg nadaje powierzchni wygląd i teksturę dębu, zachowując elastyczność pracy na różnych formatach.",
      },
      {
        title: "Jakość",
        body:
          "Dąb jest ceniony za twardość, trwałość i elegancki rysunek, dlatego dobrze sprawdza się w wykończeniach.",
      },
    ],
    related: ["/tartacznictwo/", "/tartacznictwo/tarcica-debowa/"],
  },
];

export const primaryServices = servicePages.filter((service) =>
  ["/schody/", "/podlogi/", "/drzwi/", "/kuchnie/", "/meble-i-zabudowy/", "/boazerie/", "/tartacznictwo/"].includes(service.path),
);

export function findServiceByPath(path: string) {
  return servicePages.find((service) => service.path === path || service.aliases?.includes(path));
}
