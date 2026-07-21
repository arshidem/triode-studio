import React from "react";
import styles from "../styles/TechMarquee.module.css";

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Firebase"],
  },
  {
    category: "Design",
    items: ["Figma", "Framer Motion"],
  },
  {
    category: "Deployment",
    items: ["Git", "Vercel"],
  },
];

const marqueeItems = technologies.flatMap((group) => group.items);

export default function TechMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>BUILT WITH</span>

        <h2 className={styles.title}>
          Modern technologies.
          <br />
          Timeless experiences.
        </h2>

        <p className={styles.subtitle}>
          We use trusted technologies to build scalable, high-performance
          digital products for web and mobile.
        </p>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className={styles.item}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.categories}>
        {technologies.map((group) => (
          <div className={styles.category} key={group.category}>
            <span>{group.category}</span>

            <p>{group.items.join(" • ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}