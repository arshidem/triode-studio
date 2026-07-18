// src/user/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand */}
        <div className={styles.footerSection}>
          <div className={styles.logoWrapper}>
            <img
              src="/assets/logo/Triode SVG.svg"
              alt="triode logo"
              className={styles.logoImage}
            />
          </div>
          <p className={styles.brandDescription}>
            Crafting premium digital experiences that elevate brands and engage audiences.
          </p>
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
            <div className={styles.contactItem}>
              <a href="mailto:triodewebstudio@gmail.com" className={styles.contactLink}>
                triodewebstudio@gmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <a href="tel:+918157875032" className={styles.contactLink}>
                +91 81578 75032
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactText}>
                Palakkad, Kerala, India
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} triode studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
