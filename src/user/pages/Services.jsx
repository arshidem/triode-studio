// src/user/pages/Services.jsx
/**
 * Services Page — Premium Sticky Showcase with Dynamic Perspective Warp & Slide Transition
 * Uses Canvas API to chroma-key the green screen to transparent.
 * Integrates homography matrix3d transform, slide transitions, and dynamic icons for floating elements.
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Services.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { usePerspectiveWarp } from "../hooks/usePerspectiveWarp";

// Import icons for floating cards
import {
  FiLayers,
  FiBox,
  FiGrid,
  FiLink,
  FiZap,
  FiCpu,
  FiGitBranch,
  FiServer,
  FiLayout,
  FiImage,
  FiDroplet,
  FiBookOpen,
  FiTrendingUp,
  FiVolume2,
  FiInstagram,
  FiPieChart,
  FiEdit3,
  FiCompass,
  FiTerminal
} from "react-icons/fi";

/* ──────────────────────────────────────────────────────────
   Chroma Key — removes green pixels from an image using Canvas.
   Exactly like green screen removal in video editing software.
   ────────────────────────────────────────────────────────── */
const chromaKeyImage = (imgSrc) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;

      for (let i = 0; i < d.length; i += 4) {
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];

        // Green screen detection
        if (g > 80 && g > r * 1.2 && g > b * 1.2) {
          d[i + 3] = 0;
        }
        else if (g > 60 && g > r && g > b) {
          const greenness = (g - Math.max(r, b)) / g;
          if (greenness > 0.15) {
            d[i + 3] = Math.round(255 * (1 - greenness));
            d[i + 1] = Math.round(g * (1 - greenness * 0.5));
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => resolve(imgSrc);
    img.src = imgSrc;
  });
};

const SCREEN_CORNERS = {
  tl: [0.358, 0.215],
  tr: [0.858, 0.225],
  br: [0.822, 0.734],
  bl: [0.310, 0.670],
};

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [laptopFrameURL, setLaptopFrameURL] = useState(null);
  const containerRef = useRef(null);
  const laptopRef = useRef(null);

  // Keep track of scroll direction for sliding direction
  const lastStepRef = useRef(0);
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up

  const servicesData = [
    {
      id: 1,
      number: "01",
      label: "UI/UX Design",
      title: "Interactive Prototyping & Systems",
      description: "Designing intuitive experiences that people love. We craft custom design systems, component blueprints, and pixel-perfect layouts.",
      cta: "Explore Design System",
      screenImage: "/assets/services/uiux.png",
      floatingCards: [
        { text: "Design System", x: "-12%", y: "5%", delay: 0, icon: <FiLayers size={14} color="#3B82F6" /> },
        { text: "Components", x: "85%", y: "0%", delay: 0.05, icon: <FiBox size={14} color="#10B981" /> },
        { text: "Auto Layout", x: "-15%", y: "60%", delay: 0.1, icon: <FiGrid size={14} color="#8B5CF6" /> },
        { text: "Prototyping", x: "82%", y: "65%", delay: 0.15, icon: <FiLink size={14} color="#EC4899" /> }
      ]
    },
    {
      id: 2,
      number: "02",
      label: "Web Development",
      title: "Full-Stack System Engineering",
      description: "Clean code. Modern technologies. Scalable solutions. We build robust React and Next.js projects deployed on production infrastructure.",
      cta: "Inspect Source Code",
      screenImage: "/assets/services/webdev.png",
      floatingCards: [
        { text: "Performance 98/100", x: "-15%", y: "2%", delay: 0.05, icon: <FiZap size={14} color="#F59E0B" /> },
        { text: "Deploy Successful", x: "80%", y: "-3%", delay: 0.1, icon: <FiCpu size={14} color="#10B981" /> },
        { text: "main ← 2", x: "-10%", y: "62%", delay: 0.15, icon: <FiGitBranch size={14} color="#6B7280" /> },
        { text: "Production Live", x: "85%", y: "58%", delay: 0.2, icon: <FiServer size={14} color="#3B82F6" /> }
      ]
    },
    {
      id: 3,
      number: "03",
      label: "Branding & Identity",
      title: "Strong Brands. Clear Identities.",
      description: "Strong brands. Clear identities. Lasting impressions. Logo construction, typography, color palette, and brand guidelines.",
      cta: "View Guidelines",
      screenImage: "/assets/services/branding.png",
      floatingCards: [
        { text: "Logo Variations", x: "-10%", y: "0%", delay: 0.05, icon: <FiLayout size={14} color="#8B5CF6" /> },
        { text: "Brand Assets", x: "88%", y: "5%", delay: 0.1, icon: <FiImage size={14} color="#EC4899" /> },
        { text: "Color Palette", x: "-18%", y: "55%", delay: 0.15, icon: <FiDroplet size={14} color="#3B82F6" /> },
        { text: "Guidelines", x: "80%", y: "62%", delay: 0.2, icon: <FiBookOpen size={14} color="#F59E0B" /> }
      ]
    },
    {
      id: 4,
      number: "04",
      label: "Digital Marketing",
      title: "Campaign Performance Analytics",
      description: "Data-driven strategies that grow brands and drive results. Real-time analytics, SEO, social media, and conversion optimization.",
      cta: "Launch Campaign",
      screenImage: "/assets/services/marketing.png",
      floatingCards: [
        { text: "SEO Ranking #1", x: "-14%", y: "-2%", delay: 0.05, icon: <FiTrendingUp size={14} color="#10B981" /> },
        { text: "Ads Active", x: "82%", y: "2%", delay: 0.1, icon: <FiVolume2 size={14} color="#3B82F6" /> },
        { text: "Instagram Reach", x: "-18%", y: "55%", delay: 0.15, icon: <FiInstagram size={14} color="#EC4899" /> },
        { text: "Conversion 4.8%", x: "80%", y: "60%", delay: 0.2, icon: <FiPieChart size={14} color="#8B5CF6" /> }
      ]
    },
    {
      id: 5,
      number: "05",
      label: "AI Solutions",
      title: "Generative Automation & Code",
      description: "Intelligent solutions powered by AI to accelerate your business. Generate websites, content, and automate workflows.",
      cta: "Try AI Assistant",
      screenImage: "/assets/services/ai.png",
      floatingCards: [
        { text: "AI Workflow", x: "-12%", y: "0%", delay: 0.05, icon: <FiCpu size={14} color="#3B82F6" /> },
        { text: "Content Gen", x: "85%", y: "-5%", delay: 0.1, icon: <FiEdit3 size={14} color="#F59E0B" /> },
        { text: "Image Generator", x: "-16%", y: "58%", delay: 0.15, icon: <FiCompass size={14} color="#EC4899" /> },
        { text: "Code Generator", x: "82%", y: "63%", delay: 0.2, icon: <FiTerminal size={14} color="#10B981" /> }
      ]
    }
  ];

  // Perspective Warp Hook for the screen image
  const warpTransform = usePerspectiveWarp(laptopRef, SCREEN_CORNERS);

  // Chroma key the laptop image on mount (removes green → transparent)
  useEffect(() => {
    chromaKeyImage("/assets/services/laptop-frame.png").then((url) => {
      setLaptopFrameURL(url);
    });
  }, []);

  // Scroll-driven service switching
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relativeScroll = -rect.top;
      const totalScrollRange = rect.height - window.innerHeight;
      if (totalScrollRange <= 0) return;
      
      const progress = Math.max(0, Math.min(1, relativeScroll / totalScrollRange));
      const currentStep = Math.min(
        servicesData.length - 1,
        Math.floor(progress * servicesData.length)
      );
      
      if (currentStep !== lastStepRef.current) {
        setDirection(currentStep > lastStepRef.current ? 1 : -1);
        lastStepRef.current = currentStep;
        setActiveStep(currentStep);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preload service images
  useEffect(() => {
    servicesData.forEach((s) => {
      const img = new Image();
      img.src = s.screenImage;
    });
  }, []);

  const laptopReady = !!laptopFrameURL;

  // Slide Animation Variants
  const slideVariants = {
    enter: (dir) => ({
      y: dir > 0 ? "100%" : "-100%",
    }),
    center: {
      y: 0,
    },
    exit: (dir) => ({
      y: dir > 0 ? "-100%" : "100%",
    })
  };

  return (
    <div ref={containerRef} className={styles.servicesContainer}>
      <div className={styles.stickyWrapper}>
        <div className={styles.layoutColumns}>
          
          {/* Left Column (Content) */}
          <div className={styles.leftColumn}>
            <div className={styles.contentCarousel}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={styles.textWrapper}
                >
                  <span className={styles.serviceNumber}>
                    {servicesData[activeStep].number}
                  </span>
                  <span className={styles.smallLabel}>
                    {servicesData[activeStep].label}
                  </span>
                  <h2 className={styles.largeHeading}>
                    {servicesData[activeStep].title}
                  </h2>
                  <p className={styles.description}>
                    {servicesData[activeStep].description}
                  </p>
                  <button className={styles.ctaButton}>
                    {servicesData[activeStep].cta}
                    <IoIosArrowForward size={14} />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column — Laptop Mockup */}
          <div className={styles.rightColumn}>
            <div className={styles.mockupScene}>
              
              <div ref={laptopRef} className={styles.laptopContainer}>
                {/* Layer 1 (BEHIND): Service screenshot with perspective warp & slide animation */}
                <div className={styles.screenBehind}>
                  <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                      key={activeStep}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.screenSlideWrapper}
                    >
                      <img
                        src={servicesData[activeStep].screenImage}
                        alt={servicesData[activeStep].label}
                        className={styles.screenImage}
                        style={{ 
                          transform: warpTransform, 
                          transformOrigin: '0 0'
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Layer 2 (ON TOP): Chroma-keyed laptop frame (green = transparent) */}
                {laptopReady && (
                  <img
                    src={laptopFrameURL}
                    alt="Laptop"
                    className={styles.laptopFrame}
                    draggable={false}
                  />
                )}
              </div>

              {/* Floating Context Cards */}
              <div className={styles.floatingCardsWrapper}>
                <AnimatePresence>
                  {servicesData[activeStep].floatingCards.map((card, idx) => (
                    <motion.div
                      key={`${activeStep}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 0.95, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                        delay: card.delay 
                      }}
                      className={styles.floatingCard}
                      style={{ left: card.x, top: card.y }}
                    >
                      <span className={styles.cardIconWrapper}>{card.icon}</span>
                      {card.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
