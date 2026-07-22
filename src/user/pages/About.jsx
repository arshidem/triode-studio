// src/user/pages/About.jsx
/**
 * About Page — Black & White Minimal Premium
 * Clean typography storytelling, removed team members, removed all images.
 */

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";
import { Link } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.3 };

const About = () => {
  const processSteps = [
    {
      step: "01",
      title: "Planning & Research",
      description: "We study your business goals, sketch layout designs, figure out who your target audience is, and plan what to make.",
    },
    {
      step: "02",
      title: "Designing & Writing",
      description: "We create layouts for your website, phone app, poster designs, and write simple, clear text for your ads.",
    },
    {
      step: "03",
      title: "Building & Creating",
      description: "We write clean code to build your website or app, set up search engine optimization, and create AI-powered ads.",
    },
    {
      step: "04",
      title: "Testing & Launching",
      description: "We test different ads to see what works best, launch your product, and tweak everything to get you the best results.",
    },
  ];

  const values = [
    {
      title: "High Quality Work",
      description: "We build websites and mobile apps using clean, high-quality coding standards so they run fast and stay secure.",
    },
    {
      title: "Beautiful Design",
      description: "We design simple, modern posters and ads that look beautiful, neat, and catch people's eye.",
    },
    {
      title: "Real Results",
      description: "We set up online search, run ad campaigns, and use AI tools to help you get more customers and sales.",
    },
  ];

  const founders = [
    {
      name: "Mohammed Arshid EM",
      role: "Founder & Lead Developer",
      expertise: "Full-Stack Development, UI/UX, System Architecture",
    },
    {
      name: "Muhammed Musthafa",
      role: "Co-Founder & Creative Director",
      expertise: "UI/UX Design, AI Video Generation, Creative Direction",
    },
    {
      name: "Salman Faris",
      role: "Co-Founder & Brand Strategist",
      expertise: "Digital Marketing, Brand Strategy, Creative Campaigns",
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
              Triode Studio is a digital design and development studio. We build websites, mobile apps, brand identities, and advertising campaigns. We focus on creating products that work well and help businesses find more customers.
            </p>
            <p className={styles.storyDescription}>
              <strong>Why "Triode"?</strong> Just like a triode valve controls and strengthens electronic signals, we take care of all the small details to make your brand stronger and help your business grow.
            </p>
            <p className={styles.storyDescription}>
              Founded by <strong>Mohammed Arshid EM</strong>, <strong>Muhammed Musthafa</strong>, and <strong>Salman Faris</strong> — a team of designers, developers, and strategists who share a passion for building digital experiences that truly make a difference.
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