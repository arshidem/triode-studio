import React from 'react';
import styles from '../styles/TechMarquee.module.css';

const techList = [
  "React", "Next.js", "Vercel", "Framer Motion", "Figma", 
  "Node.js", "TypeScript", "TailwindCSS", "Stripe", "Supabase"
];

const TechMarquee = () => {
  return (
    <div className={styles.marqueeSection}>
      <h3 className={styles.marqueeTitle}>Powered by Modern Technology</h3>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {/* Render twice for infinite loop effect */}
          {[...techList, ...techList].map((tech, index) => (
            <div key={index} className={styles.techItem}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
