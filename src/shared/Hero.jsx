// src/shared/Hero.jsx
/**
 * Hero Component — Black & White Minimal Premium
 */

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaAction, 
  highlightText,
  secondaryCtaText,
  secondaryCtaAction 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants} className={styles.title}>
        {title}{" "}
        <span className={styles.highlight}>{highlightText}</span>
      </motion.h1>

      <motion.p variants={itemVariants} className={styles.subtitle}>
        {subtitle}
      </motion.p>

      <motion.div className={styles.ctaContainer} variants={itemVariants}>
        {ctaText && (
          <button
            className={styles.ctaButtonPrimary}
            onClick={ctaAction}
          >
            {ctaText}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        
        {secondaryCtaText && (
          <button
            className={styles.ctaButtonSecondary}
            onClick={secondaryCtaAction}
          >
            {secondaryCtaText}
          </button>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        animate={{
          y: [0, 8, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className={styles.scrollArrow} />
      </motion.div>
    </motion.div>
  );
};

export default Hero;