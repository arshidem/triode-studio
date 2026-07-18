import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

/**
 * Navbar Component — Clean, non-animated, black & white minimal
 * - Desktop: logo + nav links + Get In Touch
 * - Mobile: hamburger → sidebar dropdown
 */
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuId = "mobile-menu";

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu when route changes */
  useEffect(() => setIsMobileOpen(false), [location]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
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
    setIsMobileOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileOpen(false);
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

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
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
            src="/assets/logo/Triode SVG.svg"
            alt="triode logo"
            className={styles.logoImage}
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
            Get In Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Hamburger */}
          <button
            className={`${styles.menuBtn} ${isMobileOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            aria-controls={menuId}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <>
          <div className={styles.backdrop} onClick={closeMenu} />
          <div
            className={styles.navbarMobileMenu}
            id={menuId}
            role="menu"
            aria-label="Mobile navigation menu"
          >
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
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.mobileBottom}>
              <button
                className={styles.mobileGetInTouchBtn}
                onClick={() => {
                  closeMenu();
                  navigate("/contact");
                }}
              >
                Get In Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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