// src/user/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/triodestudio",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.4 1 .4.4.8.8 1 1.4.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-.9 1.4-.4.4-.8.8-1.4.9-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.4-.9-.4-.4-.8-.8-.9-1.4-.2-.5-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 .9-1.4.4-.4.8-.8 1.4-.9.5-.2 1.2-.4 2.4-.5 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 .1 5.6.2 4.5.4 3.7.7 2.8 1 2.1 1.5 1.4 2.2.8 2.8.3 3.5 0 4.3c-.3.8-.5 1.9-.6 3.3C-.1 8 0 8.4 0 11.7s-.1 3.7.1 5c.1 1.4.3 2.5.6 3.3.3.8.8 1.5 1.4 2.1.7.7 1.4 1.2 2.3 1.5.8.3 1.9.5 3.3.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.4-.1 2.5-.3 3.3-.6.8-.3 1.5-.8 2.1-1.4.7-.7 1.2-1.4 1.5-2.3.3-.8.5-1.9.6-3.3.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.4-.3-2.5-.6-3.3-.3-.8-.8-1.5-1.5-2.1C22.5 1.5 21.8 1 21 0.7c-.8-.3-1.9-.5-3.3-.6C15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.9a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/company-triode-studio",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
          0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27
          c-.96 0-1.73-.78-1.73-1.73s.77-1.73 1.73-1.73 1.73.78 1.73 1.73-.78
          1.73-1.73 1.73zm13.25 12.27h-3v-5.6c0-1.34-.03-3.08-1.88-3.08-1.88 
          0-2.17 1.47-2.17 2.98v5.7h-3v-11h2.89v1.5h.04c.4-.75 1.38-1.55 
          2.84-1.55 3.04 0 3.6 2 3.6 4.59v6.46z"/>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918157875032?text=Hello!%20I%20need%20web%20development%20services%20for%20my%20business.%20Are%20you%20available%20for%20a%20consultation?",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 4.96 0 11.09c0 2.19.69 4.21 1.88 
          5.9L.13 24l7.1-2.23a12.5 12.5 0 0 0 4.77.93C18.63 22.7 
          24 17.74 24 11.61 24 5.48 18.63 0 12 0zm0 21.06a9.94 9.94 
          0 0 1-4.27-.98l-.31-.15-4.2 1.3 1.38-3.97-.26-.36a8.85 8.85 
          0 0 1-1.68-5.33C2.66 6.33 6.86 2.46 12 2.46s9.34 3.87 
          9.34 8.71-4.2 8.7-9.34 8.7zm4.96-6.57c-.27-.14-1.57-.77-1.81-.86s-.42-.14-.6.14-.69.86-.84 1.04c-.15.17-.31.2-.58.07a8.17 8.17 0 0 1-2.41-1.44 8.83 8.83 0 0 1-1.64-2.02c-.17-.29 0-.45.13-.59.14-.13.29-.34.44-.5.15-.16.2-.28.3-.47s.05-.36-.02-.5c-.07-.14-.6-1.43-.82-1.96s-.44-.45-.6-.46h-.5c-.16 0-.5.07-.77.36s-1 1-1 2.45 1.03 2.84 1.18 3.04c.15.21 2.04 3.12 4.95 4.27.69.3 1.23.47 1.65.6.69.22 1.32.19 1.82.12.56-.09 1.57-.64 1.8-1.26.22-.63.22-1.16.16-1.27-.07-.12-.24-.19-.51-.33z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/14QskoHRe87/",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.675 0h-21.35C.597 0 0 .597 
          0 1.333v21.333C0 23.403.597 24 1.325 
          24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 
          1.893-4.788 4.659-4.788 1.325 0 2.463.098 
          2.794.142v3.24h-1.917c-1.504 0-1.795.716-1.795 
          1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 
          0 1.325-.597 1.325-1.334V1.333C24 
          .597 23.403 0 22.675 0z"/>
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo & Brand Info */}
        <div className={styles.footerSection}>
          <div className={styles.logoWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.46 378.01" width="30" height="30" className={styles.logo}>
              <path fill="currentColor" d="M436.46,0l-22.77,39.46-3.56,6.16-19.29,33.4-9.81,17.02h-52.24l-.3-.18,22.88-39.63,6.12-10.61h-116.47v114.08l-45.61-18.68V45.62h-116.47l6.11,10.57,22.97,39.79-.09.05h.17l13.29,23.02,67.21,27.53,6.82,2.79,45.61,18.67,6.82,2.8,30.21,12.36,14.18,5.81,28.41,11.64-23.01,39.86-10.9,18.86-22.8,39.5-.03.06-19.34,33.49-3.47,6.01h0c-7.6,13.18-15.19,26.32-22.79,39.49-.02.03-.04.07-.06.1l-26.33-45.61h.01s-.01-.02-.01-.02h-.01s-19.36-33.53-19.36-33.53l-22.78-39.48h52.64l1.67,2.89 7.95,13.79.05.08,6.16,10.66c2.06-3.56,4.11-7.12,6.17-10.68-2.06,3.56-4.11,7.12-6.17,10.68,4.42-7.66,8.84-15.31,13.26-22.97l2.58-4.45.83-1.45,12.33-21.37.6-1.03,3.8-6.58,3.39-5.89-7.19-2.95-6.82-2.79-22.78-9.34-22.82-9.35-6.82-2.79-16.72-6.85-13.23-5.41h0s-50.17-20.55-50.17-20.55l-18.79-7.69-21.13-36.59-13.12-22.73-3.01-5.21-6.84-11.84-19.25-33.36h-.01l-3.53-6.12L0,.02l.02-.02h436.44Z" />
              <polygon fill="currentColor" points="241.02 224.61 241.02 233.72 233.19 247.28 229.01 254.53 229 254.53 226.19 259.38 225.58 260.43 225.59 260.44 218.24 273.19 210.26 259.38 209.96 258.87 206.56 252.97 203.28 247.28 195.41 233.65 195.41 205.93 241.02 224.61" />
            </svg>
            <h2 className={styles.brandName}>TRIODE STUDIO</h2>
          </div>
          <p className={styles.brandDescription}>
            Crafting premium digital experiences that elevate brands and engage audiences.
          </p>

          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
<div className={styles.footerSection}>
  <h3 className={styles.sectionTitle}>Quick Links</h3>
  <div className={styles.linksList}>
    {quickLinks.map((link) => (
      <Link 
        key={link.path} 
        to={link.path} 
        className={styles.footerLink}
        onClick={() => window.scrollTo(0, 0)}
      >
        {link.label}
      </Link>
    ))}
  </div>
</div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Get in Touch</h3>
          <div className={styles.contactInfo}>
            <p>Email: hello@triodestudio.com</p>
            <p>Phone: +91 81578 75032</p>
            <p>Location: Palakkad, Kerala, India</p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} TRIODE STUDIO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
