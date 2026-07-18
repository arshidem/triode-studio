// src/shared/TestimonialCard.jsx
/**
 * TestimonialCard Component - Display customer testimonials
 * Features: Profile image, quote, name, role, rating
 * Used in Testimonials slider
 */

import React from "react";
import { motion } from "framer-motion";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ name, role, quote, rating, image }) => {
  return (
    <motion.div
      className={styles.testimonialCard}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      data-animate="fade-up"
    >
      {/* Quote icon */}
      <div className={styles.quoteIcon}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          opacity="0.2"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
      </div>

      {/* Testimonial text */}
      <p className={styles.quote}>"{quote}"</p>

      {/* Rating stars */}
      <div className={styles.rating}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? styles.starFilled : styles.starEmpty}
          >
            ★
          </span>
        ))}
      </div>

      {/* Author info */}
      <div className={styles.author}>
        <div className={styles.avatar}>
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className={styles.avatarPlaceholder}>
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className={styles.authorInfo}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
