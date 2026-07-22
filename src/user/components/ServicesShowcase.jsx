// src/components/ServicesShowcase.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import styles from "../styles/ServicesShowcase.module.css";

const services = [
  {
    title: "Custom Web Development",
    solves: "Outdated websites that don't convert visitors into customers or fail to represent your brand properly.",
    forWho: "Businesses, startups, and organizations needing a modern, fast, and conversion-focused website.",
    impact: "Faster load times, better SEO, mobile responsiveness, and a clear path for visitors to take action.",
    outcome: "A website that builds trust, explains your value, and turns visitors into leads.",
  },
  {
    title: "Mobile App Development",
    solves: "Complex mobile experiences that confuse users or fail to deliver a smooth, native feel.",
    forWho: "Companies building iOS, Android, or cross-platform apps for customers, employees, or partners.",
    impact: "Intuitive navigation, better engagement, and a polished experience that users actually enjoy.",
    outcome: "A mobile app that people find useful, easy to use, and keep coming back to.",
  },
  {
    title: "UI/UX Design",
    solves: "Confusing interfaces, poor user flows, and designs that look good but don't work well.",
    forWho: "Teams building websites, apps, dashboards, or digital products that need a user-first approach.",
    impact: "Clearer navigation, reduced friction, and design decisions backed by user behavior.",
    outcome: "A product that feels intuitive and guides users toward their goals effortlessly.",
  },
  {
    title: "Digital Marketing",
    solves: "Marketing campaigns that feel scattered, fail to reach the right audience, or don't generate real results.",
    forWho: "Businesses running social media, Google ads, content marketing, or lead generation campaigns.",
    impact: "Better targeting, clearer messaging, and campaigns designed to drive measurable action.",
    outcome: "Marketing that actually connects with your audience and brings in qualified leads.",
  },
  {
    title: "AI Video Production",
    solves: "Slow video creation, high production costs, and inconsistent quality across campaigns.",
    forWho: "Brands needing promotional videos, social media content, explainer videos, and AI-powered animations.",
    impact: "Faster turnaround, consistent quality, and engaging visuals that capture attention.",
    outcome: "Professional videos that tell your story and drive engagement at scale.",
  },
  {
    title: "Creative Posters & Graphics",
    solves: "Visual assets that look generic, fail to stand out, or don't align with your brand identity.",
    forWho: "Businesses needing posters, banners, social graphics, and visual content for campaigns.",
    impact: "Consistent brand visuals, professional designs, and graphics that make an impression.",
    outcome: "Eye-catching designs that stop the scroll and communicate your message clearly.",
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
              <dl>
                <div>
                  <dt>What we solve</dt>
                  <dd>{service.solves}</dd>
                </div>
                <div>
                  <dt>Who it's for</dt>
                  <dd>{service.forWho}</dd>
                </div>
                <div>
                  <dt>How you benefit</dt>
                  <dd>{service.impact}</dd>
                </div>
                <div>
                  <dt>What you get</dt>
                  <dd>{service.outcome}</dd>
                </div>
              </dl>
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