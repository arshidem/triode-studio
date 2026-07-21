import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCompass,
  FiPenTool,
  FiCode,
} from "react-icons/fi";
import styles from "../styles/ThreePillars.module.css";

const pillars = [
  {
    id: 1,
    number: "01",
    icon: <FiCompass />,
    title: "Strategy",
    subtitle: "Research • Planning • Product Thinking",
    description:
      "Every successful product begins with understanding your users, business goals, and market opportunities. We create a roadmap before writing a single line of code.",
  },
  {
    id: 2,
    number: "02",
    icon: <FiPenTool />,
    title: "Design",
    subtitle: "UI • UX • Branding",
    description:
      "Beautiful interfaces, meaningful interactions, and modern visual systems that create memorable digital experiences.",
  },
  {
    id: 3,
    number: "03",
    icon: <FiCode />,
    title: "Development",
    subtitle: "Web • Mobile • Backend",
    description:
      "High-performance websites and applications engineered with scalability, reliability, and long-term maintainability.",
  },
];

export default function ThreePillars() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.backgroundGlow} />

      <div className={styles.gridPattern} />

      <motion.div
        className={styles.titleArea}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.tagline}>
          OUR PROCESS
        </span>

        <h2 className={styles.heading}>
          Three pillars behind
          <br />
          exceptional digital products.
        </h2>

        <p className={styles.subtitle}>
          Every project follows a thoughtful process—from discovering the
          problem to designing meaningful experiences and engineering reliable
          solutions.
        </p>
      </motion.div>

      <div className={styles.cards}>
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.number}>
                {pillar.number}
              </span>

              <div className={styles.arrow}>
                <FiArrowUpRight />
              </div>
            </div>

            <div className={styles.icon}>
              {pillar.icon}
            </div>

            <h3>{pillar.title}</h3>

            <span className={styles.smallText}>
              {pillar.subtitle}
            </span>

            <p>{pillar.description}</p>

            <div className={styles.bottom}>
              <div className={styles.line} />

              <span className={styles.learnMore}>
                Learn More
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}