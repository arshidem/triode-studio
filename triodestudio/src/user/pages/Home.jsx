// src/user/pages/Home.jsx
/**
 * Home Page - Landing page with hero section and feature highlights
 * Features: Premium hero, animated content, call-to-action
 */

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "../../shared/Hero";
import styles from "../styles/Home.module.css";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = { type: "tween", duration: 0.6 };

const Home = () => {
  const navigate = useNavigate();

  // Feature cards data
  const features = [
    {
      icon: "🎨",
      title: "Premium Design",
      description: "Stunning, modern interfaces that captivate and convert.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized performance for seamless user experiences.",
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "Perfect on any device, from mobile to desktop.",
    },
  ];

  return (
    <motion.div
      className={styles.home}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <Hero
        title="We Build"
        highlightText="Digital Experiences"
        subtitle="We craft modern websites, web apps, and UI/UX experiences that help brands grow online."
        ctaText="Start a Project"
        ctaAction={() => navigate("/contact")}
      />

      {/* Features Section */}
      <section className={styles.features} data-animate="fade-up">
        <motion.h2
          className={styles.featuresTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              }}
              data-animate="fade-up"
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} data-animate="fade-up">
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Start Your Project?</h2>
          <p>Let's create something amazing together.</p>
          <motion.button
            className={styles.ctaButton}
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
