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
    { path: "/testimonials", label: "Testimonials" },
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
      },
    },
    exit: {
      x: 250,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  /* Animation variants for mobile links */
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      },
    },
  };

  /* Backdrop animation */
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
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
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ 
      duration: 0.8, 
      type: "spring", 
      stiffness: 100,
      delay: 0.2 
    }}
   
  >
    <img 
      className={styles.logo} 
      src="/favicon.svg" 
      alt="Triode Studio Logo" 
    />
  </motion.div>
  
  <motion.div
    className={styles.logoText}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ 
      duration: 0.6, 
      delay: 0.4,
      ease: "easeOut" 
    }}
    whileHover={{ 
      color: "var(--primary, #6366f1)",
      transition: { duration: 0.3 }
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
      <IoIosArrowForward  size={22} />
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

              {/* Mobile Get In Touch Button */}
          <motion.div
  className={styles.mobileGetInTouch}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  <button className={styles.getInTouchBtn}>
    <span className={styles.arrowCircle}>
      <IoIosArrowForward  size={22} />
    </span>
    <span className={styles.getInTouchText}>Get In Touch</span>
  </button>
</motion.div>


              {/* Theme toggle at the bottom */}
              <motion.div
                className={styles.mobileToggleWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ThemeToggle />
                <span className={styles.toggleLabel}>
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;