import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/ProcessTimeline.module.css';

const steps = [
  { id: 1, title: 'Discovery', desc: 'We learn about your vision, goals, and target audience to define the scope.' },
  { id: 2, title: 'Design', desc: 'We craft beautiful, high-fidelity prototypes focused on user experience.' },
  { id: 3, title: 'Development', desc: 'Our engineers build a fast, scalable, and secure product.' },
  { id: 4, title: 'Launch', desc: 'We test everything rigorously and deploy your project to the world.' }
];

const ProcessTimeline = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className={styles.timelineSection} ref={containerRef}>
      <div className={styles.header}>
        <span className={styles.tagline}>How We Work</span>
        <h2 className={styles.title}>The Triode Pipeline</h2>
      </div>

      <div className={styles.timelineWrapper}>
        {/* Background track line */}
        <div className={styles.trackLine}></div>
        
        {/* Animated glowing fill line based on scroll */}
        <motion.div 
          className={styles.fillLine} 
          style={{ height: lineHeight }}
        ></motion.div>

        {steps.map((step, index) => {
          // Calculate threshold for when the line reaches this node
          const stepThreshold = index / (steps.length - 1);
          
          // Animate properties based on scroll position passing the threshold
          const bgColor = useTransform(
            scrollYProgress, 
            [stepThreshold - 0.05, stepThreshold + 0.05], 
            ['#E5E5E5', '#10B981']
          );
          
          const glowShadow = useTransform(
            scrollYProgress, 
            [stepThreshold - 0.05, stepThreshold + 0.05], 
            ['0 0 0px rgba(16, 185, 129, 0)', '0 0 20px rgba(16, 185, 129, 0.8)']
          );
          
          const scaleVal = useTransform(
            scrollYProgress, 
            [stepThreshold - 0.05, stepThreshold + 0.05], 
            [1, 1.3]
          );

          return (
            <div key={step.id} className={styles.stepContainer}>
              <div className={index % 2 === 0 ? styles.contentLeft : styles.contentRight}>
                <div className={styles.stepCard}>
                  <span className={styles.stepNumber}>0{step.id}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
              
              <div className={styles.nodeWrapper}>
                <motion.div 
                  className={styles.nodeCore}
                  style={{ 
                    backgroundColor: bgColor,
                    boxShadow: glowShadow,
                    scale: scaleVal
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;
