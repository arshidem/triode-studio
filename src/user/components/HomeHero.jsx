import React from "react";
import { FiArrowRight, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomeHero.module.css";

const proofItems = [
  "Strategy before screens",
  "Conversion-led interfaces",
  "Build-ready design systems",
];

const signalRows = [
  { label: "Clarity", value: "What buyers need to understand" },
  { label: "Trust", value: "What removes hesitation" },
  { label: "Action", value: "What moves them to contact you" },
];

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.heroInner}>
        <div
          className={styles.copy}
        >
          <p className={styles.eyebrow}>Triode Studio / Digital growth systems</p>
          <h1 id="home-hero-title" className={styles.title}>
            We craft digital experiences that turn visitors into customers.
          </h1>
          <p className={styles.lede}>
            We help founders, local businesses, and growing brands replace vague online presence with clear websites, sharper brands, and focused campaigns built to earn trust.
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryAction} onClick={() => navigate("/contact")}>
              Start Your Project <FiArrowRight aria-hidden="true" />
            </button>
            <button className={styles.secondaryAction} onClick={() => navigate("/contact")}>
              <FiCalendar aria-hidden="true" /> Book a Discovery Call
            </button>
          </div>

          <div className={styles.proofList} aria-label="How Triode Studio works">
            {proofItems.map((item) => (
              <span key={item}>
                <FiCheckCircle aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className={styles.systemPanel}
          aria-label="Conversion system preview"
        >
          <div className={styles.panelHeader}>
            <span>Decision Architecture</span>
            <span>Live</span>
          </div>

          <div className={styles.signalMap}>
            {signalRows.map((row, index) => (
              <div
                key={row.label}
                className={styles.signalRow}
              >
                <span className={styles.signalNumber}>0{index + 1}</span>
                <div>
                  <strong>{row.label}</strong>
                  <p>{row.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.flow}>
            <div className={styles.flowNode}>Problem</div>
            <span />
            <div className={styles.flowNode}>Offer</div>
            <span />
            <div className={styles.flowNode}>Lead</div>
          </div>

          <div className={styles.outcomeBox}>
            <span>Outcome</span>
            <strong>A website that explains, persuades, and makes contacting you feel obvious.</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
