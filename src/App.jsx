// src/App.jsx
/**
 * Main App Component — Black & White Minimal
 * Features: LogoLoader splash, Router, clean page transitions
 */

import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Navbar from "./user/components/Navbar";
import Footer from "./user/components/Footer";
import ScrollToTop from "./user/components/ScrollToTop";
import LogoLoader from "./user/components/LogoLoader";

// Pages
import Home from "./user/pages/Home";
import Services from "./user/pages/Services";
import About from "./user/pages/About";
import Contact from "./user/pages/Contact";
import Portfolio from "./user/pages/Portfolio";

// Context
import { NavbarLogoContext } from "./user/context/NavbarLogoContext";

// Styles
import "./styles/global.css";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/"          element={<Home />} />
      <Route path="/services"  element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about"     element={<About />} />
      <Route path="/contact"   element={<Contact />} />
    </Routes>
  );
};

const App = () => {
  const [isLoading, setIsLoading]   = useState(true);
  const [loaderDone, setLoaderDone] = useState(false);
  const navbarLogoRef               = useRef(null);

  const handleLoaderComplete = () => {
    setLoaderDone(true);
    // Small delay so the navbar logo fade-in starts just after the fly lands
    setTimeout(() => setIsLoading(false), 80);
  };

  return (
    <NavbarLogoContext.Provider value={{ navbarLogoRef, loaderDone }}>
      {isLoading && (
        <LogoLoader
          onComplete={handleLoaderComplete}
          navbarLogoRef={navbarLogoRef}
        />
      )}
      <Router>
        <ScrollToTop />

        {/* Navbar is ALWAYS rendered at full opacity so the fly target is visible */}
        <Navbar />

        {/* Page content fades in after loading */}
        <div
          style={{
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        >
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </NavbarLogoContext.Provider>
  );
};

export default App;