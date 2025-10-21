// src/user/pages/Testimonials.jsx
/**
 * Testimonials Page - Customer testimonials with slider
 * Features: Auto-play slider, navigation controls, ratings, fade transitions
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "../../shared/TestimonialCard";
import styles from "../styles/Testimonials.module.css";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = { type: "tween", duration: 0.6 };

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Testimonials data with complete information
  const testimonials = [
    {
      name: "Aiden Smith",
      role: "CEO, TechStart Inc.",
      quote: "TRIODE STUDIO transformed our brand identity completely! Their attention to detail and creative approach exceeded all our expectations. The team was professional, responsive, and delivered on time.",
      rating: 5,
      image: null,
    },
    {
      name: "Sophia Lee",
      role: "Founder, Creative Hub",
      quote: "Working with TRIODE STUDIO was an absolute pleasure. Their creative, fast, and reliable service helped us launch our platform successfully. Highly recommend them for any digital project!",
      rating: 5,
      image: null,
    },
    {
      name: "Ethan Brown",
      role: "Marketing Director, BrandCo",
      quote: "I loved their design process! From initial concepts to final delivery, everything was smooth and collaborative. The final product was stunning and perfectly aligned with our vision.",
      rating: 5,
      image: null,
    },
    {
      name: "Olivia Johnson",
      role: "Product Manager, InnovateLabs",
      quote: "The team at TRIODE STUDIO brought our ideas to life with incredible precision. Their technical expertise and design skills are unmatched. We've seen a 300% increase in user engagement!",
      rating: 5,
      image: null,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  // Navigation handlers
  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrent(index);
    setIsAutoPlay(false);
  };

  return (
    <motion.div
      className={styles.testimonials}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Page Header */}
      <motion.div
        className={styles.testimonialsHeader}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-animate="fade-up"
      >
        <h1 className={styles.title}>What Clients Say</h1>
        <p className={styles.subtitle}>
          Hear from our satisfied clients about their experience working with us.
        </p>
      </motion.div>

      {/* Testimonial Slider */}
      <div className={styles.sliderContainer}>
        <AnimatePresence mode="wait">
          <TestimonialCard
            key={current}
            name={testimonials[current].name}
            role={testimonials[current].role}
            quote={testimonials[current].quote}
            rating={testimonials[current].rating}
            image={testimonials[current].image}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className={styles.sliderControls}>
          <motion.button
            className={styles.navButton}
            onClick={goToPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </motion.button>

          <motion.button
            className={styles.navButton}
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </motion.button>
        </div>

        {/* Dot Indicators */}
        <div className={styles.dotIndicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === current ? styles.activeDot : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection} data-animate="fade-up">
        <motion.div
          className={styles.statItem}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>50+</h3>
          <p>Happy Clients</p>
        </motion.div>
        <motion.div
          className={styles.statItem}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>100+</h3>
          <p>Projects Completed</p>
        </motion.div>
        <motion.div
          className={styles.statItem}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>5⭐</h3>
          <p>Average Rating</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
