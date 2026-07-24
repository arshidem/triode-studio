import React from "react";
import { Link } from "react-router-dom";
import HomeHero from "../components/HomeHero";
import useSEO from "../hooks/useSEO";
import styles from "../styles/Home.module.css";

const services = [
  {
    title: "High-converting websites",
    for: "For businesses needing a modern, clear web presence.",
    impact: "We structure layout and copy to make inquiry easy and natural.",
  },
  {
    title: "Intuitive UI/UX design",
    for: "For products requiring simplified flows and interfaces.",
    impact: "We design component systems that developers can build quickly.",
  },
  {
    title: "Strong brand identity",
    for: "For founders who need to establish trust and credibility.",
    impact: "We define logos, rules, and assets that keep branding consistent.",
  },
  {
    title: "Action-focused marketing assets",
    for: "For campaigns designed to generate leads and sales.",
    impact: "We create clean assets to clarify your offer and lower ad costs.",
  },
  {
    title: "AI-assisted production workflows",
    for: "For teams looking to generate campaign content faster.",
    impact: "We use AI to speed up editing, then polish it with human eyes.",
  },
];

const process = [
  ["01", "Diagnose", "We identify the user journey issue and goals first."],
  ["02", "Architect", "We map the layout, messaging flow, and details."],
  ["03", "Craft", "We write, design, and code for high speed and SEO."],
  ["04", "Launch", "We do quality checks and launch your site ready to go."],
];

const projects = [
  {
    name: "KoFund",
    type: "Community fund app",
    challenge: "Tracking contributions manually was slow and lacked visibility.",
    outcome: "Created a role-based app with live tracking and expense dashboards.",
    tech: "Flutter, Firebase Auth, Cloud Firestore",
  },
  {
    name: "Nike E-commerce Redesign",
    type: "Web store concept",
    challenge: "Required a fully featured checkout flow with admin controls.",
    outcome: "Built a responsive store concept with Razorpay and custom dashboards.",
    tech: "React, Node.js, Express, MongoDB, Razorpay",
  },
  {
    name: "AI Campaign System",
    type: "Marketing workflow",
    challenge: "Needed high-volume video ads without losing brand style.",
    outcome: "Built an AI production pipeline for cinematic social campaigns.",
    tech: "Runway, Midjourney, ElevenLabs, Premiere Pro",
  },
];

const faqs = [
  ["Do you only build websites?", "No. We handle branding, mobile apps, marketing assets, and AI workflows too."],
  ["Can you work with my existing brand?", "Yes. We can design and improve the digital experience using your current logo."],
  ["Do you use fake metrics?", "No. We focus on real client challenges, decisions, and clear business outcomes."],
  ["What is the first step?", "We review your goals and suggest a small, practical project scope to start."],
];

const Home = () => {
  useSEO({
    title: "Triode Studio | Web Development & UI/UX Agency",
    description: "Triode Studio is a digital studio building high-converting websites, mobile apps, UI/UX systems, and AI video campaigns.",
    keywords: "web development, UI UX design, mobile app development, digital marketing, AI video agency, Kerala digital studio",
  });

  return (
    <div className={styles.home}>
      <HomeHero />

      <section className={styles.credibility} aria-label="Credibility">
        <p>Built for businesses that need clarity before traffic, trust before enquiry, and quality before scale.</p>
        <div>
          <span>Web</span>
          <span>UI/UX</span>
          <span>Brand</span>
          <span>Marketing</span>
          <span>AI Creative</span>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.sectionKicker}>About Triode Studio</div>
        <div className={styles.split}>
          <h2>Digital work should make your business easier to understand, trust, and contact.</h2>
          <div className={styles.copyBlock}>
            <p>
              Triode Studio is a creative digital agency from Kerala working across web development, UI/UX, branding, graphic design, digital marketing, and AI creative solutions.
            </p>
            <p>
              We treat every project as a business system: the message, structure, visual identity, speed, and call-to-action all need to support one clear decision.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.expertiseSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionKicker}>Core Expertise</span>
          <h2>Services connected by one goal: better decisions from your audience.</h2>
        </div>
        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <article key={service.title} className={styles.serviceRow}>
              <span className={styles.rowNumber}>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.for}</p>
              <strong>{service.impact}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.workSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionKicker}>Selected Projects</span>
          <h2>Real and clearly labeled concept work, shown through the decisions behind it.</h2>
        </div>
        <div className={styles.projectStack}>
          {projects.map((project) => (
            <article key={project.name} className={styles.projectPanel}>
              <div>
                <span>{project.type}</span>
                <h3>{project.name}</h3>
              </div>
              <p><strong>Challenge:</strong> {project.challenge}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
              <p><strong>Technology:</strong> {project.tech}</p>
            </article>
          ))}
        </div>
        <Link className={styles.textLink} to="/portfolio">Read the project details</Link>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionKicker}>How We Work</span>
          <h2>A direct process that keeps creative work tied to business value.</h2>
        </div>
        <div className={styles.processGrid}>
          {process.map(([num, title, desc]) => (
            <article key={num} className={styles.processCard}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionKicker}>FAQ</span>
          <h2>Answers before the first call.</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map(([question, answer]) => (
            <details key={question} className={styles.faqItem}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <span className={styles.sectionKicker}>Start the conversation</span>
        <h2>Bring the problem. We will help shape the right digital solution.</h2>
        <Link to="/contact" className={styles.ctaButton}>Get a Proposal</Link>
      </section>
    </div>
  );
};

export default Home;
