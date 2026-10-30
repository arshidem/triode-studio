import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiInstagram,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";
import AccessibleDialog from "../../shared/AccessibleDialog";
import styles from "../styles/Navbar.module.css";
const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/about", "About"],
  ["/contact", "Contact"],
];
const socials = [
  {
    label: "Email",
    href: "mailto:triodewebstudio@gmail.com",
    icon: <FiMail />,
  },
  { label: "Phone", href: "tel:+918157875032", icon: <FiPhone /> },
  {
    label: "WhatsApp",
    href: "https://wa.me/918157875032",
    icon: <FiMessageCircle />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/triodestudio",
    icon: <FiInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/triode-studio",
    icon: <FiLinkedin />,
  },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(
        !open &&
          y > 80 &&
          y > lastScrollY.current &&
          !navRef.current?.contains(document.activeElement),
      );
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);
  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [pathname]);
  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${hidden && !open ? styles.hidden : ""} ${open ? styles.menuOpen : ""}`}
      aria-label="Main navigation"
    >
      <div className={styles.navbarContainer}>
        <Link
          to="/"
          className={styles.navbarLogo}
          aria-label="Triode Studio home"
        >
          <img
            src="/assets/logo/Triode SVG.svg"
            alt="Triode Studio"
            className={styles.logoImage}
            width="128"
            height="28"
          />
        </Link>
        <div className={styles.navbarLinks}>
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className={styles.navbarActions}>
          <Link className={styles.getInTouchBtn} to="/contact">
            Get a Proposal <span aria-hidden="true">→</span>
          </Link>
          <button
            className={`${styles.menuBtn} menu-toggle`}
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
          </button>
        </div>
      </div>
      <AccessibleDialog
        id="mobile-navigation"
        title="Navigation"
        onClose={() => setOpen(false)}
        open={open}
        exitClassName={styles.slideOut}
        className={`${styles.navbarMobileMenu} ${styles.navigationDialog} ${open ? styles.slideIn : ""}`}
      >
        <div className={styles.mobileContent}>
          <div className={styles.mobileLinks}>
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                end={path === "/"}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.activeMobile : ""}`
                }
              >
                <span className={styles.linkText}>{label}</span>
                <span className={styles.linkIndicator} aria-hidden="true" />
              </NavLink>
            ))}
          </div>
          <div className={styles.divider} />
          <div className={styles.mobileSocial}>
            <span className={styles.socialLabel}>Connect</span>
            <div className={styles.socialGrid}>
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className={styles.socialItem}
                  target={item.href.startsWith("https:") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("https:")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className={styles.socialIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <Link
            className={styles.mobileGetInTouchBtn}
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Start Your Project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </AccessibleDialog>
    </nav>
  );
}
