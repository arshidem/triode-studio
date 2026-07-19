import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/MouseSpotlightCTA.module.css';

const MouseSpotlightCTA = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      className={styles.ctaSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Spotlight Effect */}
      <div 
        className={styles.spotlight}
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`
        }}
      />
      
      {/* Ambient noise for texture */}
      <div className={styles.noise} />

      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>
          Ready to Build Something <span className={styles.italic}>Amazing?</span>
        </h2>
        <p className={styles.ctaSubtitle}>
          Let's build websites, mobile apps, or eye-catching advertisements for your business.
        </p>
        
        <div className={styles.ctaButtons}>
          <motion.button
            className={styles.ctaPrimary}
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          
          <button
            className={styles.ctaSecondary}
            onClick={() => navigate("/portfolio")}
          >
            View Portfolio
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default MouseSpotlightCTA;
