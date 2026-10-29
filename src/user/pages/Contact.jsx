import { Link } from "react-router-dom";
import ContactForm from "../../shared/ContactForm";
import useSEO from "../hooks/useSEO";
import styles from "../styles/Contact.module.css";
const faqs = [
  [
    "How long does a project take?",
    "The timeline depends on the scope, content, and integrations. We agree milestones and delivery dates in your proposal.",
  ],
  [
    "Can you redesign existing work?",
    "Yes. Share your website, app, or brand assets and the issues you want to solve.",
  ],
  [
    "Do you provide maintenance?",
    "We can scope ongoing support, content updates, and maintenance alongside your project.",
  ],
  [
    "How does pricing work?",
    "We provide a quote based on the deliverables, revision rounds, and support you need.",
  ],
];
export default function Contact() {
  useSEO();
  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Tell us what you want to make.</h1>
          <p className={styles.heroSub}>
            A website, an app, a campaign, or a fresh creative direction. Start
            with your goals, and we will help define the next step.
          </p>
          <div className={styles.heroCtas}>
            <a href="#inquiry" className={`${styles.ctaPrimary} ${styles.cta}`}>
              Send an Enquiry
            </a>
            <a
              href="https://wa.me/918157875032"
              className={`${styles.ctaSecondary} ${styles.cta}`}
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <div className={styles.splitLayout}>
        <div className={styles.leftColumn}>
          <div className={styles.leftInner}>
            <h2 className={styles.leftTitle}>Work directly with the team.</h2>
            <p>
              Arshid, Musthafa, and Salman Faris bring development, creative
              direction, and marketing together.
            </p>
            <Link className="text-link" to="/about">
              Meet the founders →
            </Link>
            <div className={styles.timeline}>
              <h3 className={styles.timelineTitle}>What happens next?</h3>
              <ol className="enquiry-steps">
                <li>We review your enquiry.</li>
                <li>We discuss your goals and requirements.</li>
                <li>You receive a proposal with scope, timeline, and cost.</li>
              </ol>
            </div>
            <p>We aim to reply within one business day.</p>
            <section className={styles.contactMethods} id="contact-methods">
              <h3 className={styles.methodsTitle}>Contact options</h3>
              <div className={styles.methodGrid}>
                {[
                  [
                    "Email",
                    "triodewebstudio@gmail.com",
                    "mailto:triodewebstudio@gmail.com",
                  ],
                  ["Phone", "+91 81578 75032", "tel:+918157875032"],
                  [
                    "WhatsApp",
                    "Chat with the team",
                    "https://wa.me/918157875032",
                  ],
                  [
                    "Instagram",
                    "@triodestudio",
                    "https://instagram.com/triodestudio",
                  ],
                ].map(([label, value, href]) => (
                  <a className={styles.methodCard} href={href} key={label}>
                    <div>
                      <span className={styles.methodLabel}>{label}</span>
                      <div className={styles.methodValue}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div id="inquiry" className={styles.rightColumn}>
          <ContactForm />
        </div>
      </div>
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Before we start</h2>
        {faqs.map(([question, answer]) => (
          <details className="contact-faq" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
