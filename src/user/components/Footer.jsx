import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/posters", label: "Posters" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/privacy", label: "Privacy" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <div className={styles.logoWrapper}>
            <img
              src="/assets/logo/Triode SVG.svg"
              alt="Triode Studio Logo"
              className={styles.logoImage}
            />
          </div>
          <p className={styles.brandDescription}>
            Digital strategy, design, development, branding, marketing, and AI
            creative systems built to make businesses easier to trust and
            contact.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Navigate</h3>
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

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Start a Project</h3>
          {/* TODO: Update address and telephone if physical storefront details change */}
          <address
            className={styles.contactInfo}
            style={{ fontStyle: "normal" }}
          >
            <a
              href="mailto:triodewebstudio@gmail.com"
              className={styles.contactLink}
            >
              triodewebstudio@gmail.com
            </a>
            <a href="tel:+918157875032" className={styles.contactLink}>
              +91 81578 75032
            </a>
            <span className={styles.contactText}>Palakkad, Kerala, India</span>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/triodestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Instagram
              </a>
              <a
                href="https://wa.me/918157875032"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                WhatsApp
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} Triode Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
