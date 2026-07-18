// src/user/components/LogoLoader.jsx
/**
 * Logo Loader - Full-screen splash with fade-in/fade-out "triode" SVG logo.
 * Ensures the logo starts fully hidden (opacity: 0) and transitions smoothly in.
 */

import React, { useState, useEffect } from "react";
import styles from "../styles/LogoLoader.module.css";

const LogoLoader = ({ onComplete }) => {
  const [phase, setPhase] = useState("init"); // init → fade-in → hold → fade-out → done

  useEffect(() => {
    // Delay slightly before beginning the fade-in so it starts from complete transparency
    const startFadeIn = setTimeout(() => {
      setPhase("fade-in");
    }, 100);

    const holdTimer = setTimeout(() => {
      setPhase("hold");
    }, 900);

    const fadeOutTimer = setTimeout(() => {
      setPhase("fade-out");
    }, 1900);

    const doneTimer = setTimeout(() => {
      setPhase("done");
      if (onComplete) onComplete();
    }, 2700);

    return () => {
      clearTimeout(startFadeIn);
      clearTimeout(holdTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`${styles.loader} ${
        phase === "fade-out" ? styles.fadeOut : ""
      }`}
    >
      <div
        className={`${styles.logoWrapper} ${
          phase === "init" ? styles.init : ""
        } ${phase === "fade-in" ? styles.fadeIn : ""} ${
          phase === "hold" ? styles.visible : ""
        } ${phase === "fade-out" ? styles.fadeOutLogo : ""}`}
      >
        <img
          src="/assets/logo/Triode SVG.svg"
          alt="triode logo"
          className={styles.logoImage}
        />
      </div>
    </div>
  );
};

export default LogoLoader;
