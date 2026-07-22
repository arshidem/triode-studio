import React from "react";
import { Link } from "react-router-dom";
import HomeHero from "../components/HomeHero";
import styles from "../styles/Home.module.css";

const services = [
  {
    title: "Websites that convert serious buyers",
    for: "For businesses whose current site looks unclear, dated, or hard to trust.",
    impact: "We structure the offer, sharpen the user journey, and build fast pages that make enquiry the natural next step.",
  },
  {
    title: "UI/UX systems for products and service brands",
    for: "For teams launching a new product, redesigning a flow, or simplifying a confusing experience.",
    impact: "We turn messy requirements into usable screens, decision flows, and component systems your team can actually build.",
  },
  {
    title: "Brand identity that makes you easier to choose",
    for: "For founders and businesses that need to look credible before the first conversation.",
    impact: "We define the visual rules, messaging direction, and branded assets that keep every touchpoint consistent.",
  },
  {
    title: "Marketing assets built around action",
    for: "For brands running social content, ads, launch campaigns, or local lead generation.",
    impact: "We create focused campaign materials that clarify the offer and reduce wasted attention.",
  },
  {
    title: "AI-assisted creative workflows",
    for: "For businesses that need faster content, sharper ideas, and repeatable creative output.",
    impact: "We use AI where it improves speed and quality, then refine everything with human direction and brand judgment.",
  },
];

const process = [
  ["01", "Diagnose", "We identify the real conversion problem, audience hesitation, and business goal before any design work begins."],
  ["02", "Architect", "We map the message, page structure, user flow, and proof points that make the offer easier to understand."],
  ["03", "Craft", "We design, write, build, and refine the experience with performance, accessibility, and responsiveness in mind."],
  ["04", "Launch", "We prepare the final build, check quality, and leave you with a website or system ready to use."],
];

const projects = [
  {
    name: "KoFund",
    type: "Community fund platform",
    challenge: "Manual contribution tracking made transparency difficult for community admins and members.",
    outcome: "A role-based mobile app with real-time fund visibility, contribution records, and expense management.",
    tech: "Flutter, Firebase Auth, Cloud Firestore, Firebase Storage",
  },
  {
    name: "Nike E-commerce Redesign",
    type: "Concept commerce system",
    challenge: "Demonstrate a complete shopping flow with admin controls, payment handling, and product discovery.",
    outcome: "A responsive store concept with cart, wishlist, Razorpay checkout, and analytics-focused admin pages.",
    tech: "React, Node.js, Express, MongoDB, Razorpay",
  },
  {
    name: "AI Campaign System",
    type: "Concept marketing workflow",
    challenge: "Create a repeatable way to produce cinematic ad creative without losing brand consistency.",
    outcome: "A structured workflow for scripting, generation, voiceover, editing, and Meta campaign rollout.",
    tech: "Runway, Midjourney, ElevenLabs, Premiere Pro, Meta Ads",
  },
];

const faqs = [
  ["Do you only build websites?", "No. We connect brand, interface, development, campaign assets, and AI-assisted production when the project needs it."],
  ["Can you work with an existing brand?", "Yes. We can improve the digital experience while keeping your existing logo and brand recognition intact."],
  ["Do you use fake metrics?", "No. We avoid invented numbers. Case studies focus on challenge, solution, decisions, and business impact."],
  ["What happens after I contact you?", "We review your business, clarify the objective, and suggest the smallest practical scope that can create visible value."],
];

const Home = () => {
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
