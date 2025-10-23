// src/user/pages/Contact.jsx
/**
 * Contact Page - Contact form and information
 * Features: Contact form with validation, contact info, map placeholder
 */

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../shared/ContactForm";
import styles from "../styles/Contact.module.css";

// Reduced page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -30 },
};

const pageTransition = { type: "tween", duration: 0.3 };

const Contact = () => {
  // Contact information data from Footer
  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Location",
      info: "Palakkad, Kerala, India",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      info: "triodeuiux@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=triodeuiux@gmail.com&su=Contact%20from%20Website&body=Hello,%20I%20would%20like%20to%20get%20in%20touch..."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Phone",
      info: "+91 81578 75032",
      link: "tel:+918157875032"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Working Hours",
      info: "Mon - Sun: 9:00 AM - 9:00 PM",
    },
  ];

  // Social links from Footer
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/triodestudio",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="24" height="24">
          <radialGradient id="a" cx="27.5" cy="121.5" r="137.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffd676"/>
            <stop offset=".25" stopColor="#f2a454"/>
            <stop offset=".38" stopColor="#f05c3c"/>
            <stop offset=".7" stopColor="#c22f86"/>
            <stop offset=".96" stopColor="#6666ad"/>
            <stop offset=".99" stopColor="#5c6cb2"/>
          </radialGradient>
          <circle cx="64" cy="64" r="64" fill="url(#a)"/>
          <circle cx="82" cy="46" r="5" fill="#fff"/>
          <path fill="#fff" d="M64 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"/>
          <rect width="64" height="64" x="32" y="32" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="8" rx="12" ry="12"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/company-triode-studio",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="24" height="24">
          <circle cx="64" cy="64" r="64" fill="#0177b5"/>
          <path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"/>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918157875032?text=Hello!%20I%20need%20web%20development%20services%20for%20my%20business.%20Are%20you%20available%20for%20a%20consultation?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
          <rect width="48" height="48" fill="#0DC143" rx="24"/>
          <path fill="#fff" d="M34.7507 13.2115C32.1777 10.5628 28.621 9.125 24.9885 9.125C17.2696 9.125 11.0642 15.4061 11.1399 23.0493C11.1399 25.4709 11.821 27.8169 12.9561 29.9358L10.9885 37.125L18.3291 35.2331C20.3723 36.3682 22.6426 36.898 24.9128 36.898C32.5561 36.898 38.7615 30.6169 38.7615 22.9736C38.7615 19.2655 37.3237 15.7845 34.7507 13.2115ZM24.9885 34.552C22.9453 34.552 20.902 34.0223 19.1615 32.9628L18.7074 32.7358L14.3183 33.8709L15.4534 29.5574L15.1507 29.1034C11.821 23.7304 13.4101 16.6169 18.8588 13.2872C24.3074 9.95743 31.3453 11.5466 34.675 16.9953C38.0047 22.4439 36.4156 29.4818 30.9669 32.8115C29.2264 33.9466 27.1074 34.552 24.9885 34.552Z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/14QskoHRe87/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="24" height="24">
          <path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"/>
          <path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"/>
        </svg>
      ),
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Contact Information
          </motion.h2>

          <div className={styles.infoCards}>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className={styles.infoCard}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                <div className={styles.infoIcon}>{item.icon}</div>
                <div className={styles.infoText}>
                  <h3 className={styles.infoCardTitle}>{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className={styles.infoCardLink}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className={styles.infoCardInfo}>{item.info}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            className={styles.socialSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <h3 className={styles.socialTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.6 + index * 0.05 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            className={styles.mapPlaceholder}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <div className={styles.mapOverlay}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>Palakkad, Kerala, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;