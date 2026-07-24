// src/user/pages/About.jsx
/**
 * About Page — Black & White Minimal Premium
 * Clean typography storytelling, removed team members, removed all images.
 */

import React from "react";
import { motion } from "framer-motion";
import useSEO from "../hooks/useSEO";
import styles from "../styles/About.module.css";
import { Link } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.3 };

const About = () => {
  useSEO({
    title: "About Us | Triode Studio",
    description: "Discover Triode Studio's team, values, and client-first process for web development, UI/UX, branding, and AI creative solutions.",
    keywords: "About Triode Studio, digital agency Kerala, web design team, founders Arshid Musthafa Faris",
  });

  const processSteps = [
    {
      step: "01",
      title: "Research",
      description: "We study your goals and outline the target audience to plan what to make.",
    },
    {
      step: "02",
      title: "Design",
      description: "We design websites, app interfaces, and clean marketing assets.",
    },
    {
      step: "03",
      title: "Build",
      description: "We write clean code to build your website or app, optimizing for SEO.",
    },
    {
      step: "04",
      title: "Launch",
      description: "We verify everything runs smoothly and launch the final product.",
    },
  ];

  const values = [
    {
      title: "Quality Code",
      description: "We build websites and mobile apps using clean code so they run fast and stay secure.",
    },
    {
      title: "Clean Design",
      description: "We design minimal, modern interfaces and assets that catch the eye and feel professional.",
    },
    {
      title: "Real Value",
      description: "We focus on solutions that solve problems and help your business grow.",
    },
  ];

  const founders = [
    {
      name: "Mohammed Arshid EM",
      role: "Lead Developer",
      expertise: "Full-Stack Development & Architecture",
    },
    {
      name: "Muhammed Musthafa",
      role: "Creative Director",
      expertise: "UI/UX & AI Video Generation",
    },
    {
      name: "Salman Faris",
      role: "Brand Strategist",
      expertise: "Digital Marketing & Brand Strategy",
    },
  ];

  return (
    <motion.div
      className={styles.about}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Header */}
      <div className={styles.aboutHeader}>
        <h1 className={styles.title}>About Triode Studio</h1>
        <p className={styles.subtitle}>
          A digital studio that builds websites, designs brands, and creates marketing campaigns.
        </p>
      </div>

      {/* Our Story */}
      <section className={styles.storySection}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <p className={styles.storyDescription}>
              Triode Studio is a digital design and development studio. We build websites, mobile apps, brand identities, and ad campaigns.
            </p>
            <p className={styles.storyDescription}>
              <strong>Why "Triode"?</strong> Just like a triode valve strengthens electrical signals, we help make your business presence stronger.
            </p>
            <p className={styles.storyDescription}>
              Founded by Arshid, Musthafa, and Faris — a team passionate about creating digital experiences that make a difference.
            </p>
          </div>
          <div className={styles.storyAside}>
            <div className={styles.asideBlock}>
              <span className={styles.asideTitle}>Founded</span>
              <span className={styles.asideValue}>2024</span>
            </div>
            <div className={styles.asideBlock}>
              <span className={styles.asideTitle}>Location</span>
              <span className={styles.asideValue}>Kerala, India</span>
            </div>
            <div className={styles.asideBlock}>
              <span className={styles.asideTitle}>Focus</span>
              <span className={styles.asideValue}>Web • Mobile • Branding • AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className={styles.foundersSection}>
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        <div className={styles.foundersGrid}>
          {founders.map((founder, idx) => (
            <div key={idx} className={styles.founderCard}>
              <div className={styles.founderAvatar}>
                <span className={styles.avatarPlaceholder}>
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className={styles.founderName}>{founder.name}</h3>
              <span className={styles.founderRole}>{founder.role}</span>
              <p className={styles.founderExpertise}>{founder.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Our Process</h2>
        <div className={styles.processGrid}>
          {processSteps.map((step, idx) => (
            <div key={idx} className={styles.processCard}>
              <span className={styles.stepNum}>{step.step}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((val, idx) => (
            <div key={idx} className={styles.valueCard}>
              <h3 className={styles.valueTitle}>{val.title}</h3>
              <p className={styles.valueDesc}>{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Start?</h2>
        <p className={styles.ctaSubtitle}>
          Let's discuss how we can build your software products, poster designs, or AI ad creatives.
        </p>
        <Link to="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </section>
    </motion.div>
  );
};

export default About;