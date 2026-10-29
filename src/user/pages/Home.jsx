import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import HomeHero from "../components/HomeHero";
import useSEO from "../hooks/useSEO";
import styles from "../styles/Home.module.css";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.4, ease: "easeOut" };

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
    name: "Nike E-commerce — Independent Concept",
    type: "Custom Web Development",
    challenge: "Required a fully featured checkout flow with admin controls and fast load times.",
    outcome: "Built a responsive store concept with Razorpay integration and custom admin dashboards.",
    tech: "React, Node.js, Express, MongoDB, Razorpay",
  },
  {
    name: "KoFund",
    type: "Mobile App Development",
    challenge: "Tracking community contributions manually was slow and lacked real-time visibility.",
    outcome: "Created a Flutter app with role-based access, live contribution tracking, and dashboards.",
    tech: "Flutter, Firebase Auth, Cloud Firestore, Riverpod",
  },
  {
    name: "KoFind",
    type: "UI/UX Design",
    challenge: "Users struggled to find reliable local event info due to scattered resources.",
    outcome: "Designed an intuitive discovery platform with personalized flows and map integration.",
    tech: "Figma, React, TypeScript, Tailwind CSS",
  },
  {
    name: "Event Campaign Posters",
    type: "Creative Posters & Graphics",
    challenge: "Explore consistent visual treatments across print and digital formats.",
    outcome: "Created poster artwork and independent brand explorations.",
    tech: "Photoshop, Illustrator, Figma, Canva",
  },
];


const faqs = [
  ["Do you only build websites?", "No. We handle branding, mobile apps, marketing assets, and AI workflows too."],
  ["Can you work with my existing brand?", "Yes. We can design and improve the digital experience using your current logo."],
  ["What will I receive?", "We agree on deliverables before starting, including designs, development, launch support, and any ongoing maintenance."],
  ["What is the first step?", "We review your goals and suggest a small, practical project scope to start."],
];

const Home = () => {
  useSEO({
    title: "Triode Studio | Web Development Agency Kerala",
    description: "Triode Studio is a premier web development agency in Kerala, India. We build high-converting websites, custom mobile apps, and modern UI/UX designs.",
    keywords: "web development agency Kerala, digital agency Palakkad, UI UX design, mobile app development, Triode Studio, custom software",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Triode Studio",
      "image": "https://triodestudio.vercel.app/assets/logo/Triode%20SVG.svg",
      "@id": "https://triodestudio.vercel.app/#organization",
      "url": "https://triodestudio.vercel.app",
      "telephone": "+91 81578 75032",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Palakkad",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.7867",
        "longitude": "76.6547"
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Kerala"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "description": "Triode Studio is a digital development agency in Palakkad, Kerala, offering web development, Flutter app development, UI/UX design, and digital marketing/SEO services.",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.instagram.com/triodestudio/",
        "https://wa.me/918157875032",
        "https://linkedin.com/company/triode-studio"
      ]
    }
  });

  return (
    <Motion.div
      className={styles.home}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
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
    </Motion.div>
  );
};

export default Home;

