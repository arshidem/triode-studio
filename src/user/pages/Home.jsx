// src/user/pages/Home.jsx
/**
 * Home Page — Black & White Minimal Premium
 * No images, typography-focused, clean design
 */

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "../../shared/Hero";
import styles from "../styles/Home.module.css";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.3 };

const Home = () => {
  const navigate = useNavigate();

  const servicesHighlights = [
    {
      number: "01",
      title: "Web & Mobile Apps",
      description: "Custom web systems and mobile applications engineered with scalable architectures and clean code.",
    },
    {
      number: "02",
      title: "Digital Marketing",
      description: "Data-driven advertising campaigns and search engine optimization designed to scale businesses.",
    },
    {
      number: "03",
      title: "Poster & Ads Design",
      description: "Minimal, aesthetic, and premium branding poster designs that capture attention instantly.",
    },
    {
      number: "04",
      title: "AI Video Generation",
      description: "Cutting-edge AI-assisted marketing ads and cinematic video content built for modern channels.",
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
      <Hero
        title="We Build"
        highlightText="Modern Digital Products"
        subtitle="Triode Studio designs and develops high-end mobile apps, web platforms, premium posters, and AI-driven marketing campaigns."
        ctaText="Start a Project"
        ctaAction={() => navigate("/contact")}
        secondaryCtaText="View Services"
        secondaryCtaAction={() => navigate("/services")}
      />

      {/* Features/Highlights Section */}
      <section className={styles.features}>
        <motion.div
          className={styles.featuresHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>
            Our Specialized <span className={styles.italic}>Expertise</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            From minimal design identities to functional software products and generative media.
          </p>
        </motion.div>

        <div className={styles.featuresGrid}>
          {servicesHighlights.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className={styles.featureNumber}>{feature.number}</span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

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
              className={styles.statItem}
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