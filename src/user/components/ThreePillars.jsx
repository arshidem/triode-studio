import React from "react";
import { FiCpu, FiLayers, FiTrendingUp } from "react-icons/fi";
import styles from "../styles/ThreePillars.module.css";

const nodes = [
  {
    id: "eng",
    title: "Engineering",
    icon: <FiCpu size={24} />,
    colorClass: styles.colorEng,
    delayClass: styles.delay1
  },
  {
    id: "design",
    title: "Visual Design",
    icon: <FiLayers size={24} />,
    colorClass: styles.colorDesign,
    delayClass: styles.delay2
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: <FiTrendingUp size={24} />,
    colorClass: styles.colorMarketing,
    delayClass: styles.delay3
  }
];

const ThreePillars = () => {
  return (
    <div className={styles.sectionWrapper}>
      {/* Background Noise */}
      <div className={styles.noise} />
      
      <div className={styles.titleArea}>
        <span className={styles.tagline}>Core Vision</span>
        <h2 className={styles.heading}>The Triode Ecosystem</h2>
        <p className={styles.subtitle}>Three disciplines revolving around one central vision.</p>
      </div>

      {/* Orbital Layout */}
      <div className={styles.orbitWrapper}>
        <div className={styles.orbitContainer}>
          {/* Faint connecting rings */}
          <div className={styles.orbitRing} />
          
          {/* Central Core */}
          <div className={styles.coreCenter}>
            <div className={styles.coreGlow} />
            <div className={styles.coreRingPulse} />
            <div className={styles.coreContent}>
              <span className={styles.coreLogo}>TS</span>
            </div>
          </div>

          {/* Orbiting Tracks */}
          <div className={styles.orbitSystem}>
            {nodes.map((node) => (
              <div key={node.id} className={`${styles.orbitTrack} ${node.delayClass}`}>
                {/* Connection line from center to node */}
                <div className={styles.connectionLine} />
                <div className={`${styles.serviceNode} ${node.colorClass}`}>
                  <div className={styles.iconWrapper}>{node.icon}</div>
                  <span className={styles.nodeTitle}>{node.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ThreePillars;
