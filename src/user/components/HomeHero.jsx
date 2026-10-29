import React from "react";
import { FiArrowRight, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomeHero.module.css";

const proofItems = [
  "Strategy before screens",
  "Conversion-led interfaces",
  "Build-ready design systems",
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
            <a className={styles.secondaryAction} href="https://wa.me/918157875032?text=Hi%20Triode%20Studio%2C%20I%20would%20like%20to%20arrange%20a%20discovery%20call." target="_blank" rel="noopener noreferrer">
              <FiCalendar aria-hidden="true" /> Arrange a Discovery Call
            </a>
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

        <figure className={styles.workPreview}>
          <img src="/assets/posters/nike-poster.jpg" alt="Nike concept campaign poster designed by Triode Studio" width="800" height="1000" />
          <figcaption>Nike — independent brand concept<br /><a href="/posters">Explore our poster collection →</a></figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HomeHero;

