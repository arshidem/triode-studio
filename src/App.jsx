// src/App.jsx
/**
 * Main App Component — Black & White Minimal
 * Features: LogoLoader splash, Router, clean page transitions
 */

import React, { useState, useEffect } from "react";
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

// Styles
import "./styles/global.css";

/**
 * AnimatedRoutes - Simple route wrapper
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

/**
 * App - Main application component
 */
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LogoLoader onComplete={handleLoaderComplete} />}
      <Router>
        <div className="app" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}>
          <ScrollToTop />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;