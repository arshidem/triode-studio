// src/user/components/HomeHero.jsx
/**
 * HomeHero Component — Premium 2-Column Hero Section
 * Left: Typography, Badges, CTAs.
 * Right: Infinite Product Builder Creative Canvas looping through 8 Scenes.
 * Features: Draggable floating labels with real-time vector collision physics.
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/HomeHero.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Icons for Floating Tags
import {
  FiLayers,
  FiBox,
  FiCpu,
  FiZap,
  FiTrendingUp,
  FiImage,
} from "react-icons/fi";

// Shared fade-up variant for staggered left column children
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

const HomeHero = () => {
  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState(0);
  const rightColumnRef = useRef(null);
  const heroRef = useRef(null);

  // Cycle through 8 scenes every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const tagDefs = [
    { id: 0, text: "UI Design",  icon: <FiLayers    size={11} color="#3B82F6" />, initialX: "5%",  initialY: "15%" },
    { id: 1, text: "React",      icon: <FiBox       size={11} color="#10B981" />, initialX: "75%", initialY: "8%"  },
    { id: 2, text: "Brand",      icon: <FiImage     size={11} color="#8B5CF6" />, initialX: "12%", initialY: "78%" },
    { id: 3, text: "SEO",        icon: <FiTrendingUp size={11} color="#10B981" />, initialX: "78%", initialY: "82%" },
    { id: 4, text: "Analytics",  icon: <FiZap       size={11} color="#F59E0B" />, initialX: "2%",  initialY: "45%" },
    { id: 5, text: "AI Node",    icon: <FiCpu       size={11} color="#EC4899" />, initialX: "82%", initialY: "48%" },
  ];

  const [offsets, setOffsets] = useState(() => tagDefs.map(() => ({ x: 0, y: 0 })));
  const tagsRef = useRef([]);

  const handleDrag = (dragIndex) => {
    const draggedEl = tagsRef.current[dragIndex];
    if (!draggedEl || !heroRef.current) return;

    const heroRect = heroRef.current.getBoundingClientRect();
    const dr = draggedEl.getBoundingClientRect();
    const dc = { x: dr.left + dr.width / 2, y: dr.top + dr.height / 2 };

    setOffsets((prev) => {
      let changed = false;
      const next = prev.map((off, idx) => {
        if (idx === dragIndex) return off;
        const el = tagsRef.current[idx];
        if (!el) return off;

        const er = el.getBoundingClientRect();
        const baseCx = (er.left + er.width / 2) - off.x;
        const baseCy = (er.top + er.height / 2) - off.y;
        const dx = baseCx - dc.x;
        const dy = baseCy - dc.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = 80;

        if (dist < minDist && dist > 0.5) {
          const overlap = minDist - dist;
          let px = (dx / dist) * overlap;
          let py = (dy / dist) * overlap;

          const newLeft  = er.left   - off.x + px;
          const newRight = er.right  - off.x + px;
          const newTop   = er.top    - off.y + py;
          const newBot   = er.bottom - off.y + py;

          if (newLeft  < heroRect.left)   px += heroRect.left   - newLeft;
          if (newRight > heroRect.right)  px -= newRight - heroRect.right;
          if (newTop   < heroRect.top)    py += heroRect.top    - newTop;
          if (newBot   > heroRect.bottom) py -= newBot   - heroRect.bottom;

          changed = true;
          return { x: px, y: py };
        }

        if (off.x !== 0 || off.y !== 0) { changed = true; return { x: 0, y: 0 }; }
        return off;
      });
      return changed ? next : prev;
    });
  };

  return (
    <div ref={heroRef} style={{ position: "relative" }}>
      <div className={styles.heroContainer}>
        <div className={styles.layoutColumns}>

          {/* ── Left Column — staggered fade-up ───────────────────────── */}
          <motion.div
            className={styles.leftColumn}
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } } }}
          >
          

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={styles.heading}
            >
              Crafting Digital Products{" "}
              <span className={styles.italic}>That Drive Growth.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={styles.description}
            >
              From strategy and design to development, branding, AI, and
              marketing—we build digital experiences that help businesses grow.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={styles.ctaContainer}
            >
              <button
                className={styles.ctaPrimary}
                onClick={() => navigate("/contact")}
              >
                Start Your Project
                <IoIosArrowForward size={14} />
              </button>
              <button
                className={styles.ctaSecondary}
                onClick={() => navigate("/portfolio")}
              >
                View Our Work
              </button>
            </motion.div>
          </motion.div>

          {/* ── Right Column — single fade-up, slight delay ───────────── */}
          <motion.div
            className={styles.rightColumn}
            ref={rightColumnRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.28 }}
          >
            <div className={styles.canvasWrapper}>
              <div className={styles.dotGrid}></div>

              <div className={styles.guideLineH} style={{ top: "33%" }} />
              <div className={styles.guideLineH} style={{ top: "66%" }} />
              <div className={styles.guideLineV} style={{ left: "33%" }} />
              <div className={styles.guideLineV} style={{ left: "66%" }} />

              <div className={styles.sceneContainer}>
                <AnimatePresence mode="wait">

                  {currentScene === 0 && (
                    <motion.div
                      key="scene-grid"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", width: "100%", height: "100%" }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className={styles.gridBlock}>BLOCK_0{i + 1}</div>
                      ))}
                    </motion.div>
                  )}

                  {currentScene === 1 && (
                    <motion.div
                      key="scene-wire"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className={styles.wireframeContainer}
                    >
                      <div className={styles.wireframeHeader}>
                        <div className={styles.wireframeCircle} />
                        <div className={styles.wireframeCircle} />
                        <div className={styles.wireframeLineShort} />
                      </div>
                      <div className={styles.wireframeHero}>
                        <div className={styles.wireframeTitleBox} />
                        <div className={styles.wireframeDescBox} />
                        <div className={styles.wireframeButtonBox} />
                      </div>
                    </motion.div>
                  )}

                  {currentScene === 2 && (
                    <motion.div
                      key="scene-ui"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className={styles.polishedContainer}
                    >
                      <div className={styles.polishedHeader}>
                        <div className={styles.polishedLogo}>TRIODE</div>
                        <div className={styles.polishedNav}>
                          <div className={styles.polishedNavLink} />
                          <div className={styles.polishedNavLink} />
                        </div>
                      </div>
                      <div className={styles.polishedBody}>
                        <div className={styles.polishedLeft}>
                          <h4 className={styles.polishedHeading}>Design Identity</h4>
                          <div className={styles.polishedDesc} />
                          <div className={styles.polishedDesc} />
                          <div className={styles.polishedButton}>Explore</div>
                        </div>
                        <div className={styles.polishedRight}>
                          <FiLayers size={36} color="rgba(0,0,0,0.1)" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentScene === 3 && (
                    <motion.div
                      key="scene-code"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.4 }}
                      className={styles.codeCard}
                    >
                      <div className={styles.codeHeader}>
                        <div className={styles.codeTabs}>
                          <span className={styles.codeDot} />
                          <span className={styles.codeDot} />
                        </div>
                        <span>App.jsx</span>
                      </div>
                      <div className={styles.codeContent}>
                        <span className={styles.codeBlue}>const</span>{" "}
                        <span className={styles.codePurple}>Triode</span> = () =&gt; &#123;<br />
                        &nbsp;&nbsp;<span className={styles.codeBlue}>return</span> (<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className={styles.codeGreen}>BuildSystem</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.codeOrange}>engine</span>=<span className={styles.codePurple}>"React"</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br />
                        &nbsp;&nbsp;);<br />
                        &#125;;
                      </div>
                      <div className={styles.deployBadge}>Deploy Successful ✓</div>
                    </motion.div>
                  )}

                  {currentScene === 4 && (
                    <motion.div
                      key="scene-brand"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className={styles.brandContainer}
                    >
                      <div className={styles.brandGrid}>
                        <div className={styles.brandLogoBox}>T</div>
                        <div className={styles.brandColors}>
                          <div className={styles.colorSwatch} style={{ background: "#0A0A0A" }} />
                          <div className={styles.colorSwatch} style={{ background: "#F5F3EF" }} />
                          <div className={styles.colorSwatch} style={{ background: "#3B82F6" }} />
                        </div>
                      </div>
                      <div className={styles.brandCard}>
                        <span style={{ fontSize: "8px", fontWeight: 700, color: "rgba(0,0,0,0.4)" }}>CARD MOCKUP</span>
                        <span style={{ fontSize: "14px", fontWeight: 800 }}>Triode Studio</span>
                      </div>
                    </motion.div>
                  )}

                  {currentScene === 5 && (
                    <motion.div
                      key="scene-marketing"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className={styles.marketingContainer}
                    >
                      <div className={styles.metricCard}>
                        <span className={styles.metricLabel}>SEO Rank</span>
                        <span className={styles.metricValue}>#1</span>
                        <span className={styles.growthIndicator}>+12.4%</span>
                      </div>
                      <div className={styles.metricCard}>
                        <span className={styles.metricLabel}>Conversion</span>
                        <span className={styles.metricValue}>4.8%</span>
                        <span className={styles.growthIndicator}>+22.1%</span>
                      </div>
                      <div className={styles.chartBox}>
                        <div className={styles.chartBars}>
                          <div className={styles.chartBar} style={{ height: "30%" }} />
                          <div className={styles.chartBar} style={{ height: "50%" }} />
                          <div className={styles.chartBar} style={{ height: "45%" }} />
                          <div className={styles.chartBar} style={{ height: "85%" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentScene === 6 && (
                    <motion.div
                      key="scene-ai"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className={styles.aiContainer}
                    >
                      <div className={styles.aiChatBox}>
                        <div className={`${styles.aiBubble} ${styles.aiBubbleUser}`}>Generate UI layout</div>
                        <div className={`${styles.aiBubble} ${styles.aiBubbleBot}`}>Layout generated successfully</div>
                      </div>
                      <div className={styles.aiGeneration}>
                        <div className={styles.aiGenThumbnail} style={{ background: "rgba(59, 130, 246, 0.1)" }} />
                        <div className={styles.aiGenThumbnail} style={{ background: "rgba(16, 185, 129, 0.1)" }} />
                        <div className={styles.aiGenThumbnail} style={{ background: "rgba(139, 92, 246, 0.1)" }} />
                      </div>
                    </motion.div>
                  )}

                  {currentScene === 7 && (
                    <motion.div
                      key="scene-finished"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={styles.finishedProduct}
                    >
                      <div className={styles.polishedHeader}>
                        <div className={styles.polishedLogo}>FINISHED WORKSPACE</div>
                      </div>
                      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
                        <div style={{ width: "30px", height: "30px", background: "#3B82F6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "bold", fontSize: "10px" }}>✓</div>
                        <div>
                          <span style={{ fontSize: "12px", fontWeight: "bold" }}>Production Ready</span>
                          <p style={{ fontSize: "9px", opacity: 0.6, margin: "2px 0 0" }}>All services consolidated</p>
                        </div>
                      </div>
                      <div style={{ width: "100%", height: "4px", background: "#10b981", borderRadius: "2px" }} />
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Context Labels */}
      <div className={styles.floatingLabels}>
        {tagDefs.map((tag, i) => (
          <motion.div
            key={tag.id}
            ref={(el) => (tagsRef.current[i] = el)}
            className={styles.floatingTag}
            animate={{ x: offsets[i].x, y: offsets[i].y }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
            drag
            dragConstraints={heroRef}
            dragElastic={0}
            dragMomentum={false}
            onDrag={() => handleDrag(i)}
            whileHover={{ scale: 1.06 }}
            whileDrag={{ scale: 1.1, zIndex: 120, cursor: "grabbing" }}
            style={{ left: tag.initialX, top: tag.initialY, cursor: "grab" }}
          >
            {tag.icon}
            {tag.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
