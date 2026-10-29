import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import Navbar from "./user/components/Navbar";
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
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
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
    </Router>
  );
}
