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

      {/* Stats Section */}
      <motion.section
        className={styles.statsSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.statsGrid}>
          {[
            { label: "Engineering", value: "Scalable" },
            { label: "Visual Art", value: "Creative" },
            { label: "Marketing", value: "Strategic" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={stat.label === "Visual Art" ? styles.statItemActive : styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className={styles.statValue}>{stat.value}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Build Something <span className={styles.italic}>Amazing?</span>
          </h2>
          <p className={styles.ctaSubtitle}>
            Let's build web systems, mobile apps, or high-converting advertising creatives for your brand.
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.ctaPrimary}
              onClick={() => navigate("/contact")}
            >
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className={styles.ctaSecondary}
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;