// src/shared/ServiceCard.jsx
/**
 * ServiceCard Component - Reusable service card with hover effects
 * Features: Icon, title, description, animated hover state
 * Used in Services page
 */

import React from "react";
import { motion } from "framer-motion";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ icon, title, description, index }) => {
  // Stagger animation based on card index
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.serviceCard}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 },
      }}
      data-animate="fade-up"
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      
      <p className={styles.description}>{description}</p>
      
      <motion.div
        className={styles.hoverLine}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ServiceCard;
