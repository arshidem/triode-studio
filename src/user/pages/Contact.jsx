// src/user/pages/Contact.jsx
/**
 * Contact Page — Black & White Minimal Premium
 * Clean monochrome presentation
 */

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../shared/ContactForm";
import styles from "../styles/Contact.module.css";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.3 };

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Location",
      info: "Palakkad, Kerala, India",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      info: "triodewebstudio@gmail.com",
      link: "mailto:triodewebstudio@gmail.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Phone",
      info: "+91 81578 75032",
      link: "tel:+918157875032",
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
      <div className={styles.contactHeader}>
        <h1 className={styles.title}>Let's Work Together</h1>
        <p className={styles.subtitle}>
          Have a project in mind or want to collaborate? Get in touch with us.
        </p>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.formSection}>
          <ContactForm />
        </div>

        <div className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Information</h2>
          <div className={styles.infoCards}>
            {contactInfo.map((item, idx) => (
              <div key={idx} className={styles.infoCard}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div>
                  <h3 className={styles.cardInfoTitle}>{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className={styles.infoLink}>
                      {item.info}
                    </a>
                  ) : (
                    <p className={styles.infoText}>{item.info}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;