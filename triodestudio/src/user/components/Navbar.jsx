import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io"; 
import ThemeToggle from "../../shared/ThemeToggle";
import styles from "../styles/Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";

/**
 * Navbar Component
 * - Desktop: logo + nav links + theme toggle
 * - Mobile: hamburger → sidebar dropdown (250px width from right)
 */
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();

  // Menu ID for accessibility
  const menuId = "mobile-menu";

  /* ---------------- Scroll background ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu when route changes */
  useEffect(() => setIsMobileOpen(false), [location]);

  /* Keyboard navigation support */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileOpen]);

  const toggleMenu = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  /* Enhanced active link detection */
  const isActiveLink = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  /* Nav link data */
const links = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" }, // Changed from Testimonials
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

  /* Animation variants for mobile sidebar (slide from right) */
  const sidebarVariants = {
    hidden: {
      x: 250,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.2,
      },
    },
    exit: {
      x: 250,
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  /* Animation variants for mobile links */
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.2,
      },
    },
  };

  /* Backdrop animation */
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.15 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

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
          <motion.div
            className={styles.logoContainer}
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              type: "spring", 
              stiffness: 100,
              delay: 0.1 
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 436.46 378.01"
              width="30"
              height="30"
              className="logo"
            >
              <path
                fill="currentColor"
                d="M436.46,0l-22.77,39.46-3.56,6.16-19.29,33.4-9.81,17.02h-52.24l-.3-.18,22.88-39.63,6.12-10.61h-116.47v114.08l-45.61-18.68V45.62h-116.47l6.11,10.57,22.97,39.79-.09.05h.17l13.29,23.02,67.21,27.53,6.82,2.79,45.61,18.67,6.82,2.8,30.21,12.36,14.18,5.81,28.41,11.64-23.01,39.86-10.9,18.86-22.8,39.5-.03.06-19.34,33.49-3.47,6.01h0c-7.6,13.18-15.19,26.32-22.79,39.49-.02.03-.04.07-.06.1l-26.33-45.61h.01s-.01-.02-.01-.02h-.01s-19.36-33.53-19.36-33.53l-22.78-39.48h52.64l1.67,2.89,7.95,13.79.05.08,6.16,10.66c2.06-3.56,4.11-7.12,6.17-10.68-2.06,3.56-4.11,7.12-6.17,10.68,4.42-7.66,8.84-15.31,13.26-22.97l2.58-4.45.83-1.45,12.33-21.37.6-1.03,3.8-6.58,3.39-5.89-7.19-2.95-6.82-2.79-22.78-9.34-22.82-9.35-6.82-2.79-16.72-6.85-13.23-5.41h0s-50.17-20.55-50.17-20.55l-18.79-7.69-21.13-36.59-13.12-22.73-3.01-5.21-6.84-11.84-19.25-33.36h-.01l-3.53-6.12L0,.02l.02-.02h436.44Z"
              />
              <polygon
                fill="currentColor"
                points="241.02 224.61 241.02 233.72 233.19 247.28 229.01 254.53 229 254.53 226.19 259.38 225.58 260.43 225.59 260.44 218.24 273.19 210.26 259.38 209.96 258.87 206.56 252.97 203.28 247.28 195.41 233.65 195.41 205.93 241.02 224.61"
              />
            </svg>
          </motion.div>
          
          <motion.div
            className={styles.logoText}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.2,
              ease: "easeOut" 
            }}
            whileHover={{ 
              color: "var(--primary, #6366f1)",
              transition: { duration: 0.15 }
            }}
          >
            TRIODE STUDIO
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className={styles.navbarLinks} role="menubar">
          {links.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${
                isActiveLink(link.path) ? styles.active : ""
              }`}
              role="menuitem"
              aria-current={isActiveLink(link.path) ? "page" : undefined}
            >
              <motion.span
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.025 }}
              >
                {link.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Actions (theme toggle + get in touch + hamburger) */}
        <div className={styles.navbarIcons}>
          {/* Desktop theme toggle & Get In Touch */}
          <div className={styles.desktopActions}>
            <div className={styles.getInTouch}>
              <button className={styles.getInTouchBtn}>
                <span className={styles.arrowCircle}>
                  <IoIosArrowForward size={22} />
                </span>
                <span className={styles.getInTouchText}>Get In Touch</span>
              </button>
            </div>

            <div className={styles.desktopThemeToggle}>
              <ThemeToggle />
            </div>
          </div>

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

      {/* Mobile Sidebar with Backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMenu}
            />

            {/* Mobile Menu - 250px width from right */}
            <motion.div
              className={styles.navbarMobileMenu}
              id={menuId}
              role="menu"
              aria-label="Mobile navigation menu"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Links – animated one‑by‑one */}
              <motion.div
                className={styles.mobileLinks}
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {links.map((link) => (
                  <motion.div key={link.path} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className={`${styles.mobileLink} ${
                        isActiveLink(link.path) ? styles.activeMobile : ""
                      }`}
                      role="menuitem"
                      onClick={closeMenu}
                      aria-current={
                        isActiveLink(link.path) ? "page" : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom section with Get In Touch and Theme Toggle in one line */}
              <motion.div 
                className={styles.mobileBottomSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Get In Touch Button */}
                <div className={styles.mobileGetInTouch}>
                  <button className={styles.mobileGetInTouchBtn}>
                    <span className={styles.mobileArrowCircle}>
                      <IoIosArrowForward size={22} />
                    </span>
                    <span className={styles.mobileGetInTouchText}>Get In Touch</span>
                  </button>
                </div>

                {/* Theme toggle */}
                <div className={styles.mobileToggleWrapper}>
                  <ThemeToggle />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;