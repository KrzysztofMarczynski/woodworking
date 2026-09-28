import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicePage } from './pages/ServicePage'
import { BlogPage } from './pages/BlogPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { LegalPage } from './pages/LegalPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="page-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/stolarnia-paw" element={<AboutPage />} />
            <Route path="/polityka-prywatnosci" element={<LegalPage title="Polityka prywatności" intro="Dbamy o bezpieczeństwo danych osobowych klientów, partnerów oraz osób kontaktujących się z firmą." sections={[{ heading: '1. Administrator danych', paragraphs: ['Administratorem danych osobowych jest Stolarnia Paw z siedzibą w Jawiszowicach.'] }, { heading: '2. Cel i podstawy przetwarzania', paragraphs: ['Dane przetwarzamy w celu obsługi zapytań ofertowych, realizacji zamówień, kontaktu oraz zgodnie z obowiązującymi przepisami prawa.'] }, { heading: '3. Prawa osoby, której dane dotyczą', paragraphs: ['Każda osoba ma prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia danych.'] }]} />} />
            <Route path="/cookies" element={<LegalPage title="Polityka cookies" intro="Na naszej stronie wykorzystujemy pliki cookies w celu zapewnienia prawidłowego działania witryny i analizy ruchu." sections={[{ heading: '1. Czym są cookies?', paragraphs: ['Cookies to małe pliki tekstowe przechowywane w przeglądarce, które pomagają poprawić komfort korzystania z witryny.'] }, { heading: '2. Jak je wykorzystujemy?', paragraphs: ['Używamy ich do dostosowania treści, poprawy wydajności witryny oraz analizowania ruchu.'] }, { heading: '3. Zarządzanie cookies', paragraphs: ['Użytkownik może w każdej chwili zmienić ustawienia przeglądarki dotyczące cookies.'] }]} />} />
            <Route path="/schody" element={<ServicePage title="Schody" slug="/schody" />} />
            <Route path="/schody/schody-zabudowane" element={<ServicePage title="Schody zabudowane" slug="/schody/schody-zabudowane" />} />
            <Route path="/schody-drewniane-na-beton" element={<ServicePage title="Schody drewniane na beton" slug="/schody-drewniane-na-beton" />} />
            <Route path="/schody/schody-drewniane-dywanowe" element={<ServicePage title="Schody drewniane dywanowe" slug="/schody/schody-drewniane-dywanowe" />} />
            <Route path="/schody/schody-drewniane-samonosne" element={<ServicePage title="Schody samonosne drewniane" slug="/schody/schody-drewniane-samonosne" />} />
            <Route path="/podlogi" element={<ServicePage title="Podłogi" slug="/podlogi" />} />
            <Route path="/podlogi/jodelka-francuska" element={<ServicePage title="Jodelka francuska" slug="/podlogi/jodelka-francuska" />} />
            <Route path="/drzwi" element={<ServicePage title="Drzwi" slug="/drzwi" />} />
            <Route path="/kuchnie" element={<ServicePage title="Kuchnie" slug="/kuchnie" />} />
            <Route path="/meble-i-zabudowy" element={<ServicePage title="Meble i zabudowy" slug="/meble-i-zabudowy" />} />
            <Route path="/boazerie" element={<ServicePage title="Boazerie" slug="/boazerie" />} />
            <Route path="/tartacznictwo" element={<ServicePage title="Tartacznictwo" slug="/tartacznictwo" />} />
            <Route path="/tartacznictwo/oblog-debowy" element={<ServicePage title="Obłóg dębowy" slug="/tartacznictwo/oblog-debowy" />} />
            <Route path="/tartacznictwo/tarcica-debowa" element={<ServicePage title="Tarcica dębowa" slug="/tartacznictwo/tarcica-debowa" />} />
            <Route path="/tartacznictwo/tarcica-jesionowa" element={<ServicePage title="Tarcica jesionowa" slug="/tartacznictwo/tarcica-jesionowa" />} />
            <Route path="/jakie-deski-najlepiej-nadaja-sie-na-podlogi" element={<BlogPage />} />
            <Route path="/do-czego-wykorzystywane-sa-oblogi-debowe" element={<BlogPage />} />
            <Route path="/jak-ukladac-podloge-w-jodelke" element={<BlogPage />} />
            <Route path="/po-czym-poznac-deski-podlogowe-dobrej-jakosci" element={<BlogPage />} />
            <Route path="/jak-dobrac-drewniane-drzwi-na-wymiar" element={<BlogPage />} />
            <Route path="/od-pozyskania-drewna-po-montaz-jak-powstaja-schody-drewniane-dywanowe-proces-produkcji-krok-po-kroku" element={<BlogPage />} />
            <Route path="/jak-dbac-o-podloge-z-drewna" element={<BlogPage />} />
            <Route path="/jak-wybrac-najlepsza-metode-zabezpieczenia-schodow-drewnianych-dywanowych-kompletny-przewodnik-stolarni-paw" element={<BlogPage />} />
            <Route path="/wybor-samonosnych-schodow-drewnianych-kluczowe-wskazowki" element={<BlogPage />} />
            <Route path="/balustrady-i-porecze-do-schodow-drewnianych-dywanowych-najciekawsze-rozwiazania" element={<BlogPage />} />
            <Route path="/ile-kosztuja-schody-drewniane-dywanowe-w-2026-roku-od-czego-zalezy-cena" element={<BlogPage />} />
            <Route path="/meble-na-wymiar-2026-trendy-ktore-naprawde-zostana-na-lata" element={<BlogPage />} />
            <Route path="/producent-deski-podlogowej-jak-wybrac-podloge-ktora-zachwyca-wygladem-i-sluzy-przez-dziesieciolecia" element={<BlogPage />} />
            <Route path="/podloga-drewniana-w-jodelke-francuska-od-przygotowania-podloza-po-codzienna-pielegnacje" element={<BlogPage />} />
            <Route path="/tarcica-debowa-sucha-i-mokra-kompletny-poradnik-przed-zakupem" element={<BlogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
