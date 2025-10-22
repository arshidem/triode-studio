// src/shared/Hero.jsx
/**
 * Enhanced Hero Component - Premium hero section with modern animations
 * Features: Floating particles, typewriter effect, enhanced gradients
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
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const highlightVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      backgroundPosition: "0% 50%" 
    },
    visible: {
      opacity: 1,
      scale: 1,
      backgroundPosition: "100% 50%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        backgroundPosition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }
      },
    },
  };

  // Floating particles data
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4
  }));

  return (
    <motion.div
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Particles */}
      <div className={styles.particlesContainer}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.h1 variants={itemVariants} className={styles.title}>
        {title}{" "}
        <motion.span 
          className={styles.highlight}
          variants={highlightVariants}
        >
          {highlightText}
        </motion.span>
      </motion.h1>

      <motion.p variants={itemVariants} className={styles.subtitle}>
        {subtitle}
      </motion.p>

      <motion.div 
        className={styles.ctaContainer}
        variants={itemVariants}
      >
        {ctaText && (
          <motion.button
            className={styles.ctaButtonPrimary}
            onClick={ctaAction}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
          </motion.button>
        )}
        
        {secondaryCtaText && (
          <motion.button
            className={styles.ctaButtonSecondary}
            onClick={secondaryCtaAction}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            {secondaryCtaText}
          </motion.button>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
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