// src/user/pages/Contact.jsx
/**
 * Contact Page - Contact form and information
 * Features: Premium contact form with validation, contact info, map placeholder
 */

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../shared/ContactForm";
import styles from "../styles/Contact.module.css";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = { type: "tween", duration: 0.6 };

const Contact = () => {
  // Contact information data
  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Location",
      info: "123 Creative Lane, Design City, DC 12345",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      info: "hello@triodestudio.com",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Phone",
      info: "+1 (555) 123-4567",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Working Hours",
      info: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <motion.div
      className={styles.contact}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Page Header */}
      <motion.div
        className={styles.contactHeader}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-animate="fade-up"
      >
        <h1 className={styles.title}>Let's Work Together</h1>
        <p className={styles.subtitle}>
          Have a project in mind? We'd love to hear from you. Get in touch and let's create
          something amazing together.
        </p>
      </motion.div>

      {/* Contact Content */}
      <div className={styles.contactContent}>
        {/* Contact Form */}
        <div className={styles.formSection}>
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className={styles.infoSection}>
          <motion.h2
            className={styles.infoTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Information
          </motion.h2>

          <div className={styles.infoCards}>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className={styles.infoCard}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: -5 }}
              >
                <div className={styles.infoIcon}>{item.icon}</div>
                <div className={styles.infoText}>
                  <h3 className={styles.infoCardTitle}>{item.title}</h3>
                  <p className={styles.infoCardInfo}>{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Placeholder */}
          <motion.div
            className={styles.mapPlaceholder}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className={styles.mapOverlay}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>Map Location</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
