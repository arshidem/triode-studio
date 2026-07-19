// src/user/components/ServicesShowcase.jsx
/**
 * Reusable Premium Services Showcase component.
 * Desktop: Sticky 500vh scroll showcase with perspective-warped laptop mockup.
 * Mobile: Clean stacked list of service descriptions with matching icons (no laptop).
 * Features: Draggable floating cards with real-time vector collision physics.
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/ServicesShowcase.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { usePerspectiveWarp } from "../hooks/usePerspectiveWarp";

// Import icons
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

const ServicesShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [laptopFrameURL, setLaptopFrameURL] = useState(null);
  const containerRef = useRef(null);
  const laptopRef = useRef(null);

  const lastStepRef = useRef(0);
  const [direction, setDirection] = useState(1);
  const [isDesktop, setIsDesktop] = useState(true);

  // Card offsets state for collision resolver
  const [cardOffsets, setCardOffsets] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  // DOM references to track real-time coordinates of the cards
  const cardsRef = useRef([]);

  const servicesData = [
    {
      id: 1,
      number: "01",
      label: "UI/UX Design",
      title: "Easy-to-use Designs & Prototypes",
      description: "Designing simple, easy-to-use screens and layouts that people love. We build clear mockups and clean design templates.",
      screenImage: "/assets/services/uiux.png",
      icon: <FiLayers size={22} color="#3B82F6" />,
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
      title: "Building Websites & Apps",
      description: "We write clean code using modern tools. We build fast, reliable websites and apps that grow with your business.",
      screenImage: "/assets/services/webdev.png",
      icon: <FiCpu size={22} color="#10B981" />,
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
      title: "Memorable Branding & Logos",
      description: "We help your brand stand out. We design clear logos, choose beautiful colors, and create guidelines to keep your look consistent.",
      screenImage: "/assets/services/branding.png",
      icon: <FiLayout size={22} color="#8B5CF6" />,
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
      title: "Marketing & Growing Your Audience",
      description: "We use smart ways to help your business find more customers online. We handle search engine ranking (SEO), social media, and online ads.",
      screenImage: "/assets/services/marketing.png",
      icon: <FiTrendingUp size={22} color="#10B981" />,
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
      title: "Smart AI & Automation Tools",
      description: "We use smart AI tools to speed up your work. We help you automate daily tasks, write content, and build things faster.",
      screenImage: "/assets/services/ai.png",
      icon: <FiTerminal size={22} color="#EC4899" />,
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

  // Monitor screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chroma key the laptop image on mount
  useEffect(() => {
    if (isDesktop) {
      chromaKeyImage("/assets/services/laptop-frame.png").then((url) => {
        setLaptopFrameURL(url);
      });
    }
  }, [isDesktop]);

  // Reset card offsets when the active step changes
  useEffect(() => {
    setCardOffsets([
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 }
    ]);
  }, [activeStep]);

  // Scroll-driven service switching
  useEffect(() => {
    if (!isDesktop) return;

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
  }, [isDesktop]);

  // Preload service images
  useEffect(() => {
    servicesData.forEach((s) => {
      const img = new Image();
      img.src = s.screenImage;
    });
  }, []);

  // --- Collision Resolver ---
  // Computes the EXACT minimum offset from natural position to clear the dragged card.
  // Uses SET not ADD — so cards return to 0 when no longer colliding, no drift.
  const handleCardDrag = (dragIndex) => {
    const draggedEl = cardsRef.current[dragIndex];
    if (!draggedEl) return;

    const dr = draggedEl.getBoundingClientRect();
    const dc = { x: dr.left + dr.width / 2, y: dr.top + dr.height / 2 };

    setCardOffsets((prev) => {
      let changed = false;
      const next = prev.map((off, idx) => {
        if (idx === dragIndex) return off; // Never touch the dragged card's offset

        const el = cardsRef.current[idx];
        if (!el) return off;

        const er = el.getBoundingClientRect();

        // Compute the element's NATURAL center (without any collision offset applied)
        const baseCx = (er.left + er.width / 2) - off.x;
        const baseCy = (er.top + er.height / 2) - off.y;

        const dx = baseCx - dc.x;
        const dy = baseCy - dc.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = 90; // collision radius in px

        if (dist < minDist && dist > 0.5) {
          // Set offset to exactly the overlap needed from natural position — no accumulation
          const overlap = minDist - dist;
          let px = (dx / dist) * overlap;
          let py = (dy / dist) * overlap;

          // Strict viewport clamp — nothing exits the screen
          const newLeft  = er.left  - off.x + px;
          const newRight = er.right  - off.x + px;
          const newTop   = er.top    - off.y + py;
          const newBot   = er.bottom - off.y + py;

          if (newLeft  < 0)                  px += -newLeft;
          if (newRight > window.innerWidth)   px -= newRight - window.innerWidth;
          if (newTop   < 0)                  py += -newTop;
          if (newBot   > window.innerHeight)  py -= newBot - window.innerHeight;

          changed = true;
          return { x: px, y: py }; // SET — not off.x + px
        }

        // Not colliding — spring back to natural position
        if (off.x !== 0 || off.y !== 0) {
          changed = true;
          return { x: 0, y: 0 };
        }
        return off;
      });
      return changed ? next : prev;
    });
  };

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

  // Render desktop showcase (Sticky laptop + text carousel)
  if (isDesktop) {
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
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column — Laptop Mockup */}
            <div className={styles.rightColumn}>
              <div className={styles.mockupScene}>
                
                <div ref={laptopRef} className={styles.laptopContainer}>
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
                        ref={(el) => (cardsRef.current[idx] = el)}
                        className={styles.floatingCard}
                        style={{ left: card.x, top: card.y, cursor: "grab" }}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{
                          opacity: 0.95,
                          scale: 1,
                          // Only collision-pushed displacement animates here
                          // Framer Motion handles the drag position natively
                          x: cardOffsets[idx]?.x ?? 0,
                          y: cardOffsets[idx]?.y ?? 0,
                        }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{
                          type: "spring",
                          stiffness: 130,
                          damping: 18,
                          delay: idx === 0 ? card.delay : 0,
                        }}
                        drag
                        dragConstraints={containerRef}
                        dragElastic={0}
                        dragMomentum={false}
                        onDrag={() => handleCardDrag(idx)}
                        whileHover={{ scale: 1.06 }}
                        whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
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
  }

  // Render mobile showcase (clean listed/grid layout showing just text & icons)
  return (
    <div className={styles.mobileShowcase}>
      <div className={styles.mobileHeader}>
        <span className={styles.mobileTitleLabel}>Our Services</span>
        <h1 className={styles.mobileHeaderTitle}>What We Do</h1>
      </div>
      <div className={styles.mobileList}>
        {servicesData.map((service, index) => (
          <div key={service.id} className={styles.mobileServiceRow}>
            <div className={styles.mobileRowTop}>
              <span className={styles.mobileNum}>{service.number}</span>
              <div className={styles.mobileIcon}>{service.icon}</div>
              <span className={styles.mobileLabel}>{service.label}</span>
            </div>
            <h2 className={styles.mobileTitle}>{service.title}</h2>
            <p className={styles.mobileDesc}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;
