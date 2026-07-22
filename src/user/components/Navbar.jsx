// src/components/Navbar.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMail, FiPhone, FiInstagram, FiLinkedin, FiMessageCircle } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";
import { useNavbarLogo } from "../context/NavbarLogoContext";

/**
 * Navbar Component — Clean, non-animated, black & white minimal
 * - Desktop: logo + nav links + Get In Touch
 * - Mobile: hamburger → sidebar dropdown with social links
 */
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { navbarLogoRef, loaderDone } = useNavbarLogo() || {};
  const sidebarRef = useRef(null);
  const menuBtnRef = useRef(null);

  const menuId = "mobile-menu";

  /* Scroll background + hide/show on direction */
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (currentY > 80) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu when route changes */
  useEffect(() => setIsMobileOpen(false), [location]);

  /* Close on outside click - but not on the hamburger button */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMobileOpen && 
          sidebarRef.current && 
          !sidebarRef.current.contains(e.target) &&
          menuBtnRef.current &&
          !menuBtnRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileOpen]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const toggleMenu = useCallback(() => {
    if (isMobileOpen) {
      closeMenu();
    } else {
      setIsMobileOpen(true);
      setIsAnimating(true);
    }
  }, [isMobileOpen]);

  const closeMenu = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsMobileOpen(false);
    }, 300);
  }, []);

  const isActiveLink = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  // Social links - icons only
  const socialLinks = [
    { icon: <FiMail />, label: "Email", link: "mailto:triodewebstudio@gmail.com" },
    { icon: <FiPhone />, label: "Phone", link: "tel:+918157875032" },
    { icon: <FiMessageCircle />, label: "WhatsApp", link: "https://wa.me/918157875032" },
    { icon: <FiInstagram />, label: "Instagram", link: "https://instagram.com/triode.studio" },
    { icon: <FiLinkedin />, label: "LinkedIn", link: "https://linkedin.com/company/triode-studio" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${hidden ? styles.hidden : ""} ${isMobileOpen ? styles.menuOpen : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <Link
          to="/"
          className={styles.navbarLogo}
          onClick={closeMenu}
          aria-label="Triode Studio Home"
        >
          <img
            ref={navbarLogoRef}
            src="/assets/logo/Triode SVG.svg"
            alt="triode logo"
            className={styles.logoImage}
            style={{
              opacity: loaderDone ? 1 : 0,
              transition: "none",
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div className={styles.navbarLinks} role="menubar">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${
                isActiveLink(link.path) ? styles.active : ""
              }`}
              role="menuitem"
              aria-current={isActiveLink(link.path) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className={styles.navbarActions}>
          {/* Desktop Get In Touch */}
          <button
            className={styles.getInTouchBtn}
            onClick={() => navigate("/contact")}
          >
            Get a Proposal
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Hamburger - transforms to X when open */}
          <button
            ref={menuBtnRef}
            className={`${styles.menuBtn} ${isMobileOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls={menuId}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - with slide animation for both in and out */}
      {(isMobileOpen || isAnimating) && (
        <>
          <div 
            className={`${styles.backdrop} ${isMobileOpen ? styles.backdropVisible : styles.backdropHidden}`} 
            onClick={closeMenu} 
          />
          <div
            ref={sidebarRef}
            className={`${styles.navbarMobileMenu} ${
              isMobileOpen ? styles.slideIn : styles.slideOut
            }`}
            id={menuId}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className={styles.mobileContent}>
              {/* Navigation Links */}
              <div className={styles.mobileLinks}>
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`${styles.mobileLink} ${
                      isActiveLink(link.path) ? styles.activeMobile : ""
                    }`}
                    role="menuitem"
                    onClick={closeMenu}
                    aria-current={isActiveLink(link.path) ? "page" : undefined}
                  >
                    <span className={styles.linkText}>{link.label}</span>
                    <span className={styles.linkIndicator}></span>
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className={styles.divider}></div>

              {/* Social Links - Icons Only */}
              <div className={styles.mobileSocial}>
                <span className={styles.socialLabel}>Connect</span>
                <div className={styles.socialGrid}>
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialItem}
                      onClick={closeMenu}
                      aria-label={item.label}
                    >
                      <span className={styles.socialIcon}>{item.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={styles.mobileGetInTouchBtn}
                onClick={() => {
                  closeMenu();
                  navigate("/contact");
                }}
              >
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;