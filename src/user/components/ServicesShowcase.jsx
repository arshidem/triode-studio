import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCode, FiCompass, FiPenTool, FiTrendingUp, FiCpu } from "react-icons/fi";
import styles from "../styles/ServicesShowcase.module.css";

const services = [
  {
    icon: <FiCode />,
    title: "High-performance websites engineered for trust",
    solves: "Unclear websites that fail to explain the offer, look unpolished, or make contact feel like work.",
    forWho: "Founders, service businesses, local brands, and startups that need a stronger first impression.",
    impact: "Clearer positioning, faster pages, better SEO foundations, and a conversion path built around enquiry.",
    outcome: "A website visitors can understand quickly and act on confidently.",
  },
  {
    icon: <FiCompass />,
    title: "UI/UX design that removes friction",
    solves: "Confusing product flows, scattered requirements, and interfaces that make users hesitate.",
    forWho: "Teams building apps, dashboards, internal tools, landing pages, or customer-facing journeys.",
    impact: "Sharper flows, cleaner components, fewer dead ends, and design decisions your developers can execute.",
    outcome: "A product experience that feels simple without becoming shallow.",
  },
  {
    icon: <FiPenTool />,
    title: "Brand systems that make you recognizable",
    solves: "Inconsistent visuals, weak first impressions, and assets that do not feel connected.",
    forWho: "New businesses, rebrands, and teams preparing for a serious launch.",
    impact: "Logo usage, typography, layout rules, graphics, and messaging direction that stay consistent.",
    outcome: "A brand presence that feels deliberate wherever customers find you.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Marketing creative focused on response",
    solves: "Campaigns that look active but do not explain why someone should care now.",
    forWho: "Businesses running social content, Meta ads, launch pushes, or local lead campaigns.",
    impact: "Sharper offers, better creative direction, and campaign assets designed around attention and action.",
    outcome: "Marketing materials that support a measurable business conversation.",
  },
  {
    icon: <FiCpu />,
    title: "AI creative systems with human judgment",
    solves: "Slow content production, inconsistent AI output, and disconnected creative experiments.",
    forWho: "Teams that need more ideas, visuals, scripts, and workflows without lowering quality.",
    impact: "Repeatable AI-assisted production refined through brand strategy, editing, and practical standards.",
    outcome: "Faster creative output that still feels controlled and professional.",
  },
];

const ServicesShowcase = () => {
  return (
    <section className={styles.services} aria-labelledby="services-title">
      <div className={styles.header}>
        <span>Core Expertise</span>
        <h1 id="services-title">Digital services connected by strategy, not scattered deliverables.</h1>
        <p>
          Every service is shaped around a business problem: earning trust, explaining value, improving usability, or generating better conversations with potential customers.
        </p>
      </div>

      <div className={styles.matrix}>
        {services.map((service, index) => (
          <article key={service.title} className={styles.service}>
            <div className={styles.index}>0{index + 1}</div>
            <div className={styles.icon} aria-hidden="true">{service.icon}</div>
            <div className={styles.content}>
              <h2>{service.title}</h2>
              <dl>
                <div>
                  <dt>Solves</dt>
                  <dd>{service.solves}</dd>
                </div>
                <div>
                  <dt>For</dt>
                  <dd>{service.forWho}</dd>
                </div>
                <div>
                  <dt>Business impact</dt>
                  <dd>{service.impact}</dd>
                </div>
                <div>
                  <dt>Expected outcome</dt>
                  <dd>{service.outcome}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.ctaBand}>
        <h2>Need one service or the full system?</h2>
        <p>Start with the business objective. We will shape the right scope around it.</p>
        <Link to="/contact">Get a Proposal <FiArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
};

export default ServicesShowcase;
