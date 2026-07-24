// src/components/ServicesShowcase.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import styles from "../styles/ServicesShowcase.module.css";

const services = [
  {
    title: "Custom Web Development",
    description: "We build fast, secure, and modern websites that rank well on Google and turn visitors into customers.",
  },
  {
    title: "Mobile App Development",
    description: "We create smooth, native iOS and Android apps tailored to your business operations.",
  },
  {
    title: "UI/UX Design",
    description: "We design clean interfaces and user journeys that make digital products simple to use.",
  },
  {
    title: "Digital Marketing",
    description: "We launch targeted ads and social campaigns that connect your brand with the right audience.",
  },
  {
    title: "AI Video Production",
    description: "We produce high-quality promo videos and animations quickly using modern AI tools.",
  },
  {
    title: "Creative Posters & Graphics",
    description: "We design eye-catching posters, ads, and graphics that keep your brand look consistent.",
  },
];

const ServicesShowcase = () => {
  return (
    <section className={styles.services} aria-labelledby="services-title">
      <div className={styles.header}>
        <span>What We Build</span>
        <h1 id="services-title">Digital solutions that drive real business growth.</h1>
        <p>
          From websites and apps to videos and marketing — every service is designed to help you 
          attract customers, build trust, and grow your business.
        </p>
      </div>

      <div className={styles.matrix}>
        {services.map((service, index) => (
          <article key={service.title} className={styles.service}>
            <div className={styles.serialNumber}>0{index + 1}</div>
            <div className={styles.content}>
              <h2>{service.title}</h2>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--subtext)" }}>
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.ctaBand}>
        <h2>Ready to build something great?</h2>
        <p>Whether you need a complete digital presence or a single service, we're here to help.</p>
        <Link to="/contact">Start Your Project <FiArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
};

export default ServicesShowcase;