// src/user/pages/About.jsx
/**
 * About Page - Company information and team details
 * Features: Company story, mission, values, team showcase
 */

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = { type: "tween", duration: 0.6 };

const About = () => {
  // Core values data
  const values = [
    {
      icon: "🎯",
      title: "Quality First",
      description: "We never compromise on quality. Every project receives our full attention to detail.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We stay ahead of trends and use cutting-edge technologies to deliver modern solutions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We work closely with clients as partners to bring their vision to life.",
    },
    {
      icon: "⏱️",
      title: "Timely Delivery",
      description: "We respect deadlines and ensure projects are delivered on time, every time.",
    },
  ];

  // Team members data
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Designer",
      avatar: "AJ",
    },
    {
      name: "Sarah Williams",
      role: "Full Stack Developer",
      avatar: "SW",
    },
    {
      name: "Michael Chen",
      role: "UI/UX Specialist",
      avatar: "MC",
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
      {/* Page Header */}
      <motion.div
        className={styles.aboutHeader}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-animate="fade-up"
      >
        <h1 className={styles.title}>About TRIODE STUDIO</h1>
        <p className={styles.subtitle}>
          We're a creative web studio specializing in websites, web apps, and UI/UX design.
        </p>
      </motion.div>

      {/* Story Section */}
      <motion.section
        className={styles.storySection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        data-animate="fade-up"
      >
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p className={styles.storyText}>
          Founded in 2020, TRIODE STUDIO began with a simple mission: to deliver smooth, modern,
          and high-performing digital experiences that help businesses thrive in the digital age.
          What started as a passion project has grown into a full-service digital studio, trusted
          by clients worldwide.
        </p>
        <p className={styles.storyText}>
          We believe in the power of great design combined with robust technology. Our team brings
          together creative vision and technical expertise to create solutions that don't just look
          good, but work flawlessly and achieve real business results.
        </p>
      </motion.section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              data-animate="fade-up"
            >
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>

        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={styles.teamCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              data-animate="fade-up"
            >
              <div className={styles.avatar}>{member.avatar}</div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        data-animate="fade-up"
      >
        <h2>Ready to Work Together?</h2>
        <p>Let's create something amazing for your business.</p>
        <motion.button
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default About;
