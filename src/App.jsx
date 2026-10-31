import { BrowserRouter, MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./user/components/Navbar";
import ShowcaseHeader from "./shared/ShowcaseHeader";
import { projects } from "./user/data/projects";
import Footer from "./user/components/Footer";
import FloatingContact from "./user/components/FloatingContact";
import ScrollToTop from "./user/components/ScrollToTop";
import Home from "./user/pages/Home";
import About from "./user/pages/About";
import Contact from "./user/pages/Contact";
import Portfolio from "./user/pages/Portfolio";
import PostersGallery from "./user/pages/PostersGallery";
import Services from "./user/pages/Services";
import ServiceDetail from "./user/pages/ServiceDetail";
import ProjectDetail from "./user/pages/ProjectDetail";
import Privacy from "./user/pages/Privacy";
import NotFound from "./user/pages/NotFound";
import "./styles/global.css";
export default function App({ url }) {
  const Router = url ? MemoryRouter : BrowserRouter;
  return (
    <Router {...(url ? { initialEntries: [url] } : {})}>
      <SiteLayout />
    </Router>
  );
}
function SiteLayout() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const project = projects.find((item) => path === `/portfolio/${item.slug}`);
  const showcase = Boolean(project) || path === "/posters";
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      {showcase ? (
        <ShowcaseHeader title={project?.title || "Posters Gallery"} />
      ) : (
        <Navbar />
      )}
      <main id="main-content" tabIndex={-1} className={showcase ? "showcase-main" : undefined}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/posters" element={<PostersGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
