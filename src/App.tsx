import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { blogPosts, findBlogPostByPath } from "./data/blog";
import { legacyContent } from "./data/legacyContent";
import { findServiceByPath } from "./data/services";
import { normalizePath } from "./lib/path";
import About from "./pages/About";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LegacyPage from "./pages/LegacyPage";
import Legal from "./pages/Legal";
import Materials from "./pages/Materials";
import NotFound from "./pages/NotFound";
import Offer from "./pages/Offer";
import Projects from "./pages/Projects";
import Quote from "./pages/Quote";
import Service from "./pages/Service";

function CurrentPage() {
  const location = useLocation();
  const path = normalizePath(location.pathname);
  const service = findServiceByPath(path);
  const post = findBlogPostByPath(path);
  const legacy = legacyContent.find((item) => item.path === path && !blogPosts.some((blogPost) => blogPost.path === path));

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  if (path === "/") return <Home />;
  if (path === "/o-nas/" || path === "/stolarnia-paw/") return <About />;
  if (path === "/oferta/") return <Offer />;
  if (path === "/realizacje/") return <Projects />;
  if (path === "/materialy/") return <Materials />;
  if (path === "/blog/") return <BlogIndex />;
  if (path === "/kontakt/") return <Contact />;
  if (path === "/wycena/") return <Quote />;
  if (path === "/polityka-prywatnosci/") return <Legal type="privacy" />;
  if (path === "/polityka-cookies/") return <Legal type="cookies" />;
  if (service) return <Service service={service} />;
  if (post) return <BlogPost post={post} />;
  if (legacy) return <LegacyPage page={legacy} />;
  return <NotFound />;
}

export default function App() {
  return (
    <div className="site-app">
      <Header />
      <main><CurrentPage /></main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

