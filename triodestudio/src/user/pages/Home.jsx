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

// Enhanced page transition variants
const pageVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.98,
    filter: "blur(10px)"
  },
  in: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)"
  },
  out: { 
    opacity: 0, 
    scale: 1.02,
    filter: "blur(10px)"
  },
};

const pageTransition = { 
  type: "spring", 
  stiffness: 100,
  damping: 20,
  duration: 0.8 
};

// Floating animation for background elements
const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Home = () => {
  const navigate = useNavigate();

  // SIMPLIFIED features data - only images
  const features = [
    {
      image: "/assets/images/features/api-development.jpg",
      title: "API Development",
      description: "RESTful & GraphQL APIs built for scalability and performance.",
      color: "#6366f1"
    },
    {
      image: "/assets/images/features/backend-systems.jpg",
      title: "Backend Systems", 
      description: "Robust server architecture that handles millions of requests.",
      color: "#10b981"
    },
    {
      image: "/assets/images/features/integrations.jpg",
      title: "Integrations",
      description: "Seamless third-party API integrations and microservices.",
      color: "#f59e0b"
    },
    {
      image: "/assets/images/features/deployment.jpg",
      title: "Deployment",
      description: "CI/CD pipelines and cloud infrastructure management.",
      color: "#ef4444"
    }
  ];

  // Stagger animation for feature cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Handle image loading errors
  const handleImageError = (e, featureTitle) => {
    console.error(`Failed to load image for ${featureTitle}:`, e.target.src);
    // You can set a fallback image here
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
      {/* Animated background elements */}
      <motion.div 
        className={styles.backgroundShape1}
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div 
        className={styles.backgroundShape2}
        variants={floatingAnimation}
        animate="animate"
        transition={{ delay: 2 }}
      />

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

      {/* Enhanced Features Section with Media */}
      <section className={styles.features}>
        <motion.div
          className={styles.featuresHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className={styles.featuresTitle}>
            Why Choose <span className={styles.highlight}>Triode Studio</span>
          </h2>
          <p className={styles.featuresSubtitle}>
            We specialize in the technical foundation that makes your digital products exceptional
          </p>
        </motion.div>

        <motion.div
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                '--accent-color': feature.color,
              }}
            >
              {/* Background Media - SIMPLIFIED for images only */}
              <div className={styles.featureBackgroundMedia}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className={styles.featureBackgroundImage}
                  onError={(e) => handleImageError(e, feature.title)}
                />
                {/* Overlay for better text readability */}
                <div className={styles.featureMediaOverlay}></div>
              </div>

              {/* Content */}
              <motion.div 
                className={styles.featureContent}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>

              <motion.div 
                className={styles.featureLine}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className={styles.statsSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.statsGrid}>
          <motion.div 
            className={styles.statItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h3 
              className={styles.statNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              50+
            </motion.h3>
            <p>APIs Delivered</p>
          </motion.div>
          
          <motion.div 
            className={styles.statItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3 
              className={styles.statNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.4 }}
            >
              99.9%
            </motion.h3>
            <p>Uptime Guarantee</p>
          </motion.div>
          
          <motion.div 
            className={styles.statItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h3 
              className={styles.statNumber}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              24/7
            </motion.h3>
            <p>Support</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section */}
      <motion.section 
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ready to Build Something
            <span className={styles.ctaHighlight}> Amazing?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's discuss your project and create powerful web services that scale.
          </motion.p>
          <motion.div 
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className={styles.ctaButtonPrimary}
              onClick={() => navigate("/contact")}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
              }}
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
          </motion.div>
        </motion.div>
        
        {/* Floating elements for CTA section */}
        <motion.div 
          className={styles.ctaOrb1}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div 
          className={styles.ctaOrb2}
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        />
      </motion.section>
    </motion.div>
  );
};

export default Home;