import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AccessibleDialog from "../../shared/AccessibleDialog";
import styles from "../styles/Navbar.module.css";
const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/about", "About"],
  ["/contact", "Contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
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
            Discuss Your Project →
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
      {open && (
        <AccessibleDialog
          id="mobile-navigation"
          title="Navigation"
          onClose={() => setOpen(false)}
        >
          <div className="mobile-nav-links">
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                end={path === "/"}
                to={path}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/posters" onClick={() => setOpen(false)}>
              Posters
            </Link>
            <a href="https://wa.me/918157875032">Chat on WhatsApp</a>
          </div>
        </AccessibleDialog>
      )}
    </nav>
  );
}
