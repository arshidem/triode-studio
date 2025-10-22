// src/App.jsx
/**
 * Main App Component - Root component with routing and theme management
 * Features: ThemeProvider, Router, AnimatePresence for page transitions
 * GSAP scroll animations initialization on route changes
 */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Context Providers
import { ThemeProvider } from "./context/ThemeContext";

// Layout Components
import Navbar from "./user/components/Navbar";
import Footer from "./user/components/Footer";
import ScrollToTop from "./user/components/ScrollToTop"; // Fixed: single import

// Pages
import Home from "./user/pages/Home";
import Services from "./user/pages/Services";
import Testimonials from "./user/pages/Testimonials";
import About from "./user/pages/About";
import Contact from "./user/pages/Contact";

// Styles and Animations
import "./styles/global.css";
import { initScrollAnimations } from "./animations/gsapAnimations";

/**
 * AnimatedRoutes - Wrapper component for routes with page transitions
 * Handles GSAP animations on location change
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  // Initialize scroll animations on route change
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

/**
 * App - Main application component
 * Wraps entire app with ThemeProvider and Router
 */
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <ScrollToTop /> {/* Handles smooth scroll after route change */}
          <Navbar />
          <main>
            <AnimatedRoutes /> {/* Contains your motion page transitions */}
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;