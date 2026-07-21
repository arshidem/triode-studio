// src/user/pages/Home.jsx
/**
 * Home Page — Black & White Minimal Premium
 * Features dynamic sticky scroll ServicesShowcase with the perspective-warped laptop mockup.
 */

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HomeHero from "../components/HomeHero";
import ServicesShowcase from "../components/ServicesShowcase";
import TechMarquee from "../components/TechMarquee";
import ProcessTimeline from "../components/ProcessTimeline";
import MouseSpotlightCTA from "../components/MouseSpotlightCTA";
import styles from "../styles/Home.module.css";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.3 };

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles.home}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HomeHero />

      {/* Reusable Interactive Services Showcase (Laptop Frame) */}
      <ServicesShowcase />

 
      {/* Infinite Tech Marquee */}
      <TechMarquee />

      {/* Scroll-Linked Process Timeline */}
      <ProcessTimeline />

      {/* Interactive Mouse Spotlight CTA */}
      <MouseSpotlightCTA />
    </motion.div>
  );
};

export default Home;