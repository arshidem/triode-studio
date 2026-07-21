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

const TRIODE_LOGO = "/assets/logo/Triode SVG.svg";

// Shared fade-up variant for staggered left column children
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const BrowserBar = ({ url }) => (
  <div className={styles.browserBar}>
    <span className={`${styles.browserDot} ${styles.browserDotRed}`} />
    <span className={`${styles.browserDot} ${styles.browserDotYellow}`} />
    <span className={`${styles.browserDot} ${styles.browserDotGreen}`} />
    <div className={styles.browserUrl}>{url}</div>
  </div>
);

const HomeHero = () => {
  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState(0);
  const rightColumnRef = useRef(null);
  const heroRef = useRef(null);

  // Cycle through 8 scenes every 2 seconds
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentScene((prev) => (prev + 1) % 9); // was % 8
  }, 2200);
  return () => clearInterval(timer);
}, []);

// 1. Bump the tag rename — no AI framing on the floating labels either
const tagDefs = [
  { id: 0, text: "UI Design",  icon: <FiLayers    size={11} color="#0a0a0a" />, initialX: "5%",  initialY: "15%" },
  { id: 1, text: "React",      icon: <FiBox       size={11} color="#0a0a0a" />, initialX: "75%", initialY: "8%"  },
  { id: 2, text: "Brand",      icon: <FiImage     size={11} color="#0a0a0a" />, initialX: "12%", initialY: "78%" },
  { id: 3, text: "SEO",        icon: <FiTrendingUp size={11} color="#0a0a0a" />, initialX: "78%", initialY: "82%" },
  { id: 4, text: "Analytics",  icon: <FiZap       size={11} color="#0a0a0a" />, initialX: "2%",  initialY: "45%" },
  { id: 5, text: "Workflow",   icon: <FiCpu       size={11} color="#0a0a0a" />, initialX: "82%", initialY: "48%" },
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

          const newLeft = er.left - off.x + px;
          const newRight = er.right - off.x + px;
          const newTop = er.top - off.y + py;
          const newBot = er.bottom - off.y + py;

          if (newLeft < heroRect.left) px += heroRect.left - newLeft;
          if (newRight > heroRect.right) px -= newRight - heroRect.right;
          if (newTop < heroRect.top) py += heroRect.top - newTop;
          if (newBot > heroRect.bottom) py -= newBot - heroRect.bottom;

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

              <img
                src={TRIODE_LOGO}
                alt=""
                className={styles.canvasWatermark}
                draggable={false}
              />

              <div className={styles.guideLineH} style={{ top: "33%" }} />
              <div className={styles.guideLineH} style={{ top: "66%" }} />
              <div className={styles.guideLineV} style={{ left: "33%" }} />
              <div className={styles.guideLineV} style={{ left: "66%" }} />

              <div className={styles.sceneContainer}>
                <AnimatePresence mode="wait">

                  {/* SCENE 0 — Design Canvas (Figma-style layers + selection) */}
                  {currentScene === 0 && (
                    <motion.div
                      key="scene-grid"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className={styles.figmaFrame}
                    >
                      <div className={styles.figmaPanel}>
                        {["Header", "Hero", "Card", "Card", "CTA", "Footer"].map((l, i) => (
                          <div
                            key={i}
                            className={`${styles.figmaLayerRow} ${i === 2 ? styles.figmaLayerRowActive : ""}`}
                          >
                            {l}
                          </div>
                        ))}
                      </div>
                      <div className={styles.figmaCanvas}>
                        <div className={styles.figmaGrid}>
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className={`${styles.gridBlock} ${i === 2 ? styles.gridBlockActive : ""}`}
                            >
                              {i === 2 && (
                                <>
                                  <span className={`${styles.selectHandle} ${styles.shTL}`} />
                                  <span className={`${styles.selectHandle} ${styles.shTR}`} />
                                  <span className={`${styles.selectHandle} ${styles.shBL}`} />
                                  <span className={`${styles.selectHandle} ${styles.shBR}`} />
                                </>
                              )}
                              BLOCK_0{i + 1}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 1 — Wireframe, inside a real browser frame */}
                  {currentScene === 1 && (
                    <motion.div
                      key="scene-wire"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className={styles.browserFrame}
                    >
                      <BrowserBar url="triode.studio/draft" />
                      <div className={styles.wireframeContainer}>
                        <div className={styles.wireframeHero}>
                          <div className={styles.wireframeTitleBox} />
                          <div className={styles.wireframeDescBox} />
                          <div className={styles.wireframeButtonBox} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 2 — Live product UI with real logo in nav */}
                  {currentScene === 2 && (
                    <motion.div
                      key="scene-ui"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className={styles.browserFrame}
                    >
                      <BrowserBar url="triode.studio" />
                      {/* SCENE 2 — logo only in nav, no text beside it */}
                      <div className={styles.polishedHeader}>
                        <img src={TRIODE_LOGO} alt="Triode" className={styles.triodeLogoIcon} />
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

                  {/* SCENE 3 — Code editor with line numbers + terminal */}
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
                      <div className={styles.codeBody}>
                        <div className={styles.codeLineNumbers}>
                          {[1, 2, 3, 4, 5, 6].map((n) => <div key={n}>{n}</div>)}
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
                      </div>
                      <div className={styles.terminalLine}>▲ Deploying to production…</div>
                      <div className={styles.deployBadge}>Deploy Successful ✓</div>
                    </motion.div>
                  )}

{/* SCENE 4 — Coded Design Output */}
{currentScene === 4 && (
  <motion.div
    key="scene-coded-design"
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.04 }}
    transition={{ duration: 0.45 }}
    className={styles.browserFrame}
  >
    <BrowserBar url="triode.studio" />

    <div className={styles.codedDesignBody}>
      <img
        src={TRIODE_LOGO}
        alt="Triode"
        className={styles.codedDesignLogo}
      />

      <span className={styles.codedDesignTag}>Creative Development</span>

      <h2 className={styles.codedDesignTitle}>
        Design.
        <br />
        Develop.
        <br />
        Deliver.
      </h2>

      <p className={styles.codedDesignSubtitle}>
        Modern websites crafted with precision.
      </p>

      <div className={styles.codedDesignButtons}>
        <button className={styles.primaryBtn}>Start Project</button>
        <button className={styles.secondaryBtn}>Portfolio</button>
      </div>

      <div className={styles.featureGrid}>
        <div className={styles.featureCard}>
          <span className={styles.featureNumber}>01</span>
          <span>UI / UX</span>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureNumber}>02</span>
          <span>Web Apps</span>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureNumber}>03</span>
          <span>Branding</span>
        </div>
      </div>

      <div className={styles.codePreview}>
        <span>{"<motion.div>"}</span>
        <span>beautiful experiences</span>
        <span>{"</motion.div>"}</span>
      </div>
    </div>
  </motion.div>
)}

                  {/* SCENE 5 — Analytics dashboard */}
                  {currentScene === 5 && (
                    <motion.div
                      key="scene-marketing"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className={styles.browserFrame}
                    >
                      <BrowserBar url="analytics.triode.studio" />
                      <div className={styles.marketingContainer}>
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
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 6 — Client feedback / revision chat, replaces the AI scene */}
                  {currentScene === 6 && (
                    <motion.div
                      key="scene-feedback"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className={styles.feedbackContainer}
                    >
                      <div className={styles.feedbackChatBox}>
                        <div className={`${styles.feedbackBubble} ${styles.feedbackBubbleClient}`}>
                          Can we try a bolder headline?
                        </div>
                        <div className={styles.feedbackAvatarRow}>
                          <img src={TRIODE_LOGO} alt="" className={styles.aiAvatar} />
                          <div className={`${styles.feedbackBubble} ${styles.feedbackBubbleTeam}`}>
                            Updated — check revision 2
                          </div>
                        </div>
                      </div>
                      <div className={styles.revisionTrack}>
                        <div className={styles.revisionStep}>
                          <span className={styles.revisionDot} /> Draft
                        </div>
                        <div className={styles.revisionStep}>
                          <span className={styles.revisionDot} /> Review
                        </div>
                        <div className={`${styles.revisionStep} ${styles.revisionStepActive}`}>
                          <span className={styles.revisionDot} /> Approved
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SCENE 7 — Finished, deployed product */}
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
                        <div className={styles.polishedLogo}>
                          <img src={TRIODE_LOGO} alt="Triode" className={styles.triodeLogoIcon} />
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "10px", padding: "10px", alignItems: "center" }}>
                        <div style={{ width: "30px", height: "30px", background: "#0a0a0a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "bold", fontSize: "10px" }}>✓</div>
                        <div>
                          <span style={{ fontSize: "12px", fontWeight: "bold" }}>Production Ready</span>
                          <p style={{ fontSize: "9px", opacity: 0.6, margin: "2px 0 0" }}>All services consolidated</p>
                        </div>
                      </div>
                      <div style={{ width: "100%", height: "4px", background: "#0a0a0a", borderRadius: "2px" }} />
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