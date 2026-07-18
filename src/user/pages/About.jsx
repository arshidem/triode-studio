// src/user/pages/About.jsx
/**
 * About Page — Black & White Minimal Premium
 * Clean typography storytelling, removed team members, removed all images.
 */

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";
import { Link } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.3 };

const About = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Blueprinting",
      description: "Analyzing business requirements, drafting UI schematics, mapping target demographics, and planning video assets.",
    },
    {
      step: "02",
      title: "Design & Copywriting",
      description: "Formulating layouts for websites, mobile applications, visual poster concepts, and advertising scripts.",
    },
    {
      step: "03",
      title: "Development & Media Generation",
      description: "Coding web systems and mobile apps, launching search engines indexing, and rendering AI ad layouts.",
    },
    {
      step: "04",
      title: "Optimization & Launch",
      description: "A/B testing ad copy, launching applications, automated deployment configurations, and funnel optimization.",
    },
  ];

  const values = [
    {
      title: "Technical Rigor",
      description: "Building scalable web & mobile architectures utilizing structured, high-grade development standards.",
    },
    {
      title: "Aesthetic Precision",
      description: "Designing high-end minimal poster layouts and ad structures that command attention with visual balance.",
    },
    {
      title: "Funnel Conversion",
      description: "Directing search optimization, paid media campaigns, and AI ad generation to drive concrete conversion metrics.",
    },
  ];

  return (
    <motion.div
      className={styles.about}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Header */}
      <div className={styles.aboutHeader}>
        <h1 className={styles.title}>About Triode Studio</h1>
        <p className={styles.subtitle}>
          A multi-disciplinary studio bridging scalable software systems, design identities, and AI generative marketing campaigns.
        </p>
      </div>

      {/* Our Story */}
      <section className={styles.storySection}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <p className={styles.storyDescription}>
              Triode Studio is a digital studio specializing in web and mobile app development, digital marketing, poster design, and AI-assisted ad video generation. We focus on building highly functional systems and high-converting creative media that scale modern companies.
            </p>
            <p className={styles.storyDescription}>
              <strong>Why "Triode"?</strong> Inspired by the triode valve's function to control and amplify electronic signals, we control all architectural details while amplifying your brand’s reach, conversions, and product capabilities.
            </p>
          </div>
          <div className={styles.storyAside}>
            <div className={styles.asideBlock}>
              <span className={styles.asideTitle}>Founder</span>
              <span className={styles.asideValue}>Mohammed Arshid EM</span>
            </div>
            <div className={styles.asideBlock}>
              <span className={styles.asideTitle}>Location</span>
              <span className={styles.asideValue}>Kerala, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Our Process</h2>
        <div className={styles.processGrid}>
          {processSteps.map((step, idx) => (
            <div key={idx} className={styles.processCard}>
              <span className={styles.stepNum}>{step.step}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((val, idx) => (
            <div key={idx} className={styles.valueCard}>
              <h3 className={styles.valueTitle}>{val.title}</h3>
              <p className={styles.valueDesc}>{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Start?</h2>
        <p className={styles.ctaSubtitle}>
          Let's discuss how we can build your software products, poster designs, or AI ad creatives.
        </p>
        <Link to="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </section>
    </motion.div>
  );
};

export default About;
