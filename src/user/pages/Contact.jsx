// src/user/pages/Contact.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../../shared/ContactForm";
import styles from "../styles/Contact.module.css";

// --- Icons ---
const IconLocation = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconEmail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// --- FAQ data ---
const FAQS = [
  { q: "How long does a project take?", a: "Timelines vary based on scope. Most projects take 4–12 weeks from discovery to launch." },
  { q: "Do you work with startups?", a: "Absolutely. We love helping startups build their digital presence and product foundations." },
  { q: "Can you redesign existing websites?", a: "Yes, we specialize in modern redesigns that improve UX, performance, and conversion." },
  { q: "Do you provide maintenance?", a: "We offer ongoing support and maintenance plans to keep your product running smoothly." },
  { q: "Can you create AI videos and posters?", a: "Yes, we produce AI-powered video content and creative posters for campaigns." },
  { q: "How does pricing work?", a: "We provide fixed-price quotes based on your requirements after a discovery call." },
];

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      className={styles.contactPage}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
    >
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className={styles.heroTitle}>Let's Build Something That Matters.</h1>
          <p className={styles.heroSub}>
            We help businesses build websites, products, brands, marketing campaigns, AI videos, and creative assets.
          </p>
          <div className={styles.heroCtas}>
            <a href="#inquiry" className={`${styles.ctaPrimary} ${styles.cta}`}>Start Your Project</a>
            <a href="#contact-methods" className={`${styles.ctaSecondary} ${styles.cta}`}>Schedule a Discovery Call</a>
          </div>
        </motion.div>
      </section>

      {/* ===== TWO-COLUMN LAYOUT ===== */}
      <div className={styles.splitLayout}>
        {/* LEFT: Trust, process, contact */}
        <motion.div
          className={styles.leftColumn}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.leftInner}>
            <h2 className={styles.leftTitle}>A partnership, not just a project.</h2>
            <p className={styles.leftDesc}>
              We combine strategy, design, and technology to create digital experiences that drive growth.
            </p>

            {/* Trust points */}
            <div className={styles.trustGrid}>
              {["Strategy-first", "Custom-built", "Performance-focused", "Clean code", "User-centered", "Transparent", "Long-term support"].map((point, i) => (
                <div key={i} className={styles.trustItem}>
                  <span className={styles.trustIcon}><IconCheck /></span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* What happens next? */}
            <div className={styles.timeline}>
              <h3 className={styles.timelineTitle}>What happens next?</h3>
              <div className={styles.timelineSteps}>
                {["Submit inquiry", "We review", "Discovery call", "Proposal", "Design & build"].map((step, i) => (
                  <div key={i} className={styles.timelineStep}>
                    <span className={styles.stepNumber}>{i + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response expectations */}
            <div className={styles.responseBadges}>
              <span>✓ Response within 1 business day</span>
              <span>✓ Free initial consultation</span>
              <span>✓ No-obligation discussion</span>
            </div>

            {/* Contact methods */}
            <div id="contact-methods" className={styles.contactMethods}>
              <h3 className={styles.methodsTitle}>Reach out</h3>
              <div className={styles.methodGrid}>
                {[
                  { icon: <IconEmail />, label: "Email", value: "triodewebstudio@gmail.com", link: "mailto:triodewebstudio@gmail.com" },
                  { icon: <IconPhone />, label: "Phone", value: "+91 81578 75032", link: "tel:+918157875032" },
                  { icon: <IconWhatsApp />, label: "WhatsApp", value: "Chat with us", link: "https://wa.me/918157875032" },
                  { icon: <IconInstagram />, label: "Instagram", value: "@triode.studio", link: "https://instagram.com/triode.studio" },
                  { icon: <IconLinkedIn />, label: "LinkedIn", value: "Triode Studio", link: "https://linkedin.com/company/triode-studio" },
                ].map((method, i) => (
                  <a key={i} href={method.link} target="_blank" rel="noopener noreferrer" className={styles.methodCard}>
                    <span className={styles.methodIcon}>{method.icon}</span>
                    <div>
                      <div className={styles.methodLabel}>{method.label}</div>
                      <div className={styles.methodValue}>{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Project Inquiry Form */}
        <motion.div
          className={styles.rightColumn}
          id="inquiry"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* ===== WHY CHOOSE TRIODE ===== */}
      <motion.section
        className={styles.whySection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Why Triode Studio</h2>
        <div className={styles.whyGrid}>
          {["Strategy-first approach", "Custom-built solutions", "Performance-focused", "Clean & scalable code", "User-centered design", "Transparent communication", "Long-term support"].map((item, i) => (
            <div key={i} className={styles.whyCard}>
              <span className={styles.whyIcon}><IconCheck /></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== FAQ ===== */}
      <motion.section
        className={styles.faqSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className={styles.faqToggle}>{activeFaq === idx ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== FINAL CTA ===== */}
      <motion.section
        className={styles.finalCta}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Every successful project begins with a conversation.</h2>
        <p>Let's talk about your next digital experience — no pressure, just possibilities.</p>
        <a href="#inquiry" className={`${styles.ctaPrimary} ${styles.cta}`}>Start Your Project</a>
      </motion.section>
    </motion.div>
  );
};

export default Contact;