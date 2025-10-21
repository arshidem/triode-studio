// src/shared/Hero.jsx
/**
 * Hero Component - Premium hero section with animations
 * Features: Animated text, call-to-action button, gradient background
 * Used on Home page
 */

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = ({ title, subtitle, ctaText, ctaAction, highlightText }) => {
  // Animation variants for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      data-animate="fade-up"
    >
      <motion.h1 variants={itemVariants} className={styles.title}>
        {title} {highlightText && <span className={styles.highlight}>{highlightText}</span>}
      </motion.h1>

      <motion.p variants={itemVariants} className={styles.subtitle}>
        {subtitle}
      </motion.p>

      {ctaText && (
        <motion.button
          variants={itemVariants}
          className={styles.ctaButton}
          onClick={ctaAction}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
        </motion.button>
      )}
    </motion.div>
  );
};

export default Hero;
