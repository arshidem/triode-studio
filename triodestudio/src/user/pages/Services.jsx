// src/user/pages/Services.jsx
/**
 * Services Page - Showcase all services with premium cards
 * Features: Service cards with icons, hover effects, detailed descriptions
 */

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../../shared/ServiceCard";
import styles from "../styles/Services.module.css";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = { type: "tween", duration: 0.6 };

const Services = () => {
  // Services data with icons and detailed descriptions
  const services = [
    {
      icon: "🎨",
      title: "Web Design",
      description: "Modern, responsive interfaces crafted with attention to detail. We create visually stunning designs that engage users and drive conversions.",
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Full-stack web applications built with MERN stack. Scalable, secure, and performant solutions tailored to your business needs.",
    },
    {
      icon: "🖌️",
      title: "UI/UX Design",
      description: "Beautiful and usable interfaces designed with user experience at the core. We blend aesthetics with functionality seamlessly.",
    },
    {
      icon: "🛍️",
      title: "E-Commerce Solutions",
      description: "Custom online store solutions with secure payment integration. Boost your sales with optimized shopping experiences.",
    },
    {
      icon: "📈",
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines. Drive organic traffic and grow your online presence.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that deliver native performance. Reach your users wherever they are.",
    },
  ];

  return (
    <motion.div
      className={styles.services}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Page Header */}
      <motion.div
        className={styles.servicesHeader}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-animate="fade-up"
      >
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.subtitle}>
          Comprehensive digital solutions to elevate your brand and achieve your goals.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        data-animate="fade-up"
      >
        <h2>Need a Custom Solution?</h2>
        <p>We're here to help. Let's discuss your project requirements.</p>
        <motion.button
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Services;
