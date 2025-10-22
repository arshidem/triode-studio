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
  initial: { opacity: 1, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 1, y: -50 },
};

const pageTransition = { type: "tween", duration: 0.1 };

const Home = () => {
  const navigate = useNavigate();

  // Features data
 const features = [
  {
    image: "/assets/images/features/api-development.jpg",
    title: "Scale Your Business",
    description: "APIs that handle millions of requests daily, helping startups grow into enterprises",
    proof: "50+ APIs delivered with 99.9% uptime",
    color: "#6366f1"
  },
  {
    image: "/assets/images/features/backend-systems.jpg",
    title: "Handle Massive Growth", 
    description: "Server architecture that scales seamlessly as your user base explodes",
    proof: "Systems supporting 1M+ concurrent users",
    color: "#10b981"
  },
  {
    image: "/assets/images/features/integrations.jpg",
    title: "Connect Everything",
    description: "Seamlessly integrate payment, analytics, and communication tools in days, not months",
    proof: "100+ third-party services integrated",
    color: "#f59e0b"
  },
  {
    image: "/assets/images/features/deployment.jpg",
    title: "Launch Faster, Sleep Better",
    description: "Automated deployment pipelines that get your products to market 3x faster",
    proof: "Zero-downtime deployments for 200+ projects",
    color: "#ef4444"
  }
];

  // Handle image loading errors
  const handleImageError = (e, featureTitle) => {
    console.error(`Failed to load image for ${featureTitle}:`, e.target.src);
    e.target.src = "https://via.placeholder.com/400x300/2a2a2a/ffffff?text=Image+Coming+Soon";
  };

  return (
    <motion.div
      className={styles.home}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Enhanced Hero Section */}
      <Hero
        title="We Build"
        highlightText="Digital Experiences"
        subtitle="Triode Studio crafts scalable web services, APIs, and backend systems that power modern businesses."
        ctaText="Start a Project"
        ctaAction={() => navigate("/contact")}
        secondaryCtaText="View Our Work"
        secondaryCtaAction={() => navigate("/portfolio")}
      />

      {/* Features Section with Services-style animations */}
<section className={styles.features}>
  <motion.div
    className={styles.featuresHeader}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className={styles.featuresTitle}>
      Why Choose <span className={styles.highlight}>Triode Studio</span>
    </h2>
    <p className={styles.featuresSubtitle}>
      We specialize in the technical foundation that makes your digital products exceptional
    </p>
  </motion.div>

  <div className={styles.featuresGrid}>
    {features.map((feature, index) => (
      <motion.div
        key={index}
        className={styles.featureCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.15 },
        }}
        style={{ 
          '--accent-color': feature.color,
        }}
      >
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img 
              src={feature.image} 
              alt={feature.title}
              className={styles.featureImage}
              onError={(e) => handleImageError(e, feature.title)}
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.featureBadge}>
            <span className={styles.badgeText}>Feature</span>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{feature.title}</h3>
          <p className={styles.cardDescription}>{feature.description}</p>
          
          {/* Proof Section */}
          {feature.proof && (
            <div className={styles.proofSection}>
              <div className={styles.proofIcon}>✓</div>
              <span className={styles.proofText}>{feature.proof}</span>
            </div>
          )}
          
          {/* Learn More Button */}
          <motion.button
            className={styles.learnMoreBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Learn More</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    ))}
  </div>
</section>

    {/* Simple Stats Section - Just showing what we do */}
      <motion.section 
        className={styles.statsSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.statsGrid}>
          <motion.div 
            className={styles.statItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <motion.h3 
              className={styles.statNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.15 }}
            >
              Fast
            </motion.h3>
            <p>Development</p>
          </motion.div>
          
          <motion.div 
            className={styles.statItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.h3 
              className={styles.statNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Scalable
            </motion.h3>
            <p>Solutions</p>
          </motion.div>
          
          <motion.div 
            className={styles.statItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <motion.h3 
              className={styles.statNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.25 }}
            >
              Modern
            </motion.h3>
            <p>Technology</p>
          </motion.div>
        </div>
      </motion.section>


      {/* CTA Section */}
      <motion.section 
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.ctaContent}>
          <h2>Ready to Build Something
            <span className={styles.ctaHighlight}> Amazing?</span>
          </h2>
          <p>
            Let's discuss your project and create powerful web services that scale.
          </p>
          <div className={styles.ctaButtons}>
            <motion.button
              className={styles.ctaButtonPrimary}
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className={styles.ctaButtonSecondary}
              onClick={() => navigate("/portfolio")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;