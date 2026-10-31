import ProjectPreview from "../../shared/ProjectPreview";
import { Link } from "react-router-dom";
import HomeHero from "../components/HomeHero";
import useSEO from "../hooks/useSEO";
import { services } from "../data/services";
import { projects } from "../data/projects";
import styles from "../styles/Home.module.css";
const faqs = [
  [
    "What can you help us create?",
    "We build websites and mobile apps, design interfaces and brands, and create marketing campaigns, posters, and AI videos.",
  ],
  [
    "What does a project cost?",
    "We provide a quote after understanding the deliverables, timeline, and support you need.",
  ],
  [
    "Can you improve an existing website or brand?",
    "Yes. Share your current work and what you want to improve so we can suggest a practical scope.",
  ],
  [
    "What happens after an enquiry?",
    "We aim to reply within one business day, discuss your goals, and prepare a proposal with scope, timeline, and cost.",
  ],
];
export default function Home() {
  useSEO();
  return (
    <div className={styles.home}>
      <HomeHero />
      <section className={styles.aboutSection}>
        <div className={styles.split}>
          <h2>One small team, from the first idea to launch.</h2>
          <div className={styles.copyBlock}>
            <p>
              Arshid leads development, Musthafa leads creative work, and Salman
              Faris leads branding and marketing. We work together so your
              product and its communication fit the same goal.
            </p>
            <Link className="text-link" to="/about">
              Meet the team →
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.expertiseSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionKicker}>Our services</span>
          <h2>Choose the support your business needs.</h2>
        </div>
        <div className="service-home-grid">
          {services.map((service) => (
            <article className="project-card" key={service.slug}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link className="text-link" to={`/services/${service.slug}`}>
                Explore the service →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.workSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionKicker}>Products & concepts</span>
          <h2>Explore our development and design work.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card dark-card" key={project.slug}>
              <ProjectPreview project={project} />
              <p className="eyebrow">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link className="text-link" to={`/portfolio/${project.slug}`}>
                Read project overview →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.processSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionKicker}>How we work</span>
          <h2>A clear path from brief to delivery.</h2>
        </div>
        <div className={styles.processGrid}>
          {[
            ["Discover", "We discuss your audience, goals, and constraints."],
            ["Plan", "We agree deliverables, cost, and timeline."],
            [
              "Create",
              "We design and build, with reviews at agreed milestones.",
            ],
            [
              "Deliver",
              "We test the work, launch or export it, and hand it over.",
            ],
          ].map(([title, description], index) => (
            <article className={styles.processCard} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.faqSection}>
        <div className={styles.sectionIntro}>
          <h2>Before we start.</h2>
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
        <span className={styles.sectionKicker}>Your next project</span>
        <h2>Tell us what you want to make.</h2>
        <Link className={styles.ctaButton} to="/contact">
          Discuss Your Project →
        </Link>
      </section>
    </div>
  );
}
