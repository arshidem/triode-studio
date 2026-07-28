// src/user/pages/PostersGallery.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiMaximize2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { postersData } from "../data/postersData";
import styles from "../styles/PostersGallery.module.css";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 },
};

const pageTransition = { duration: 0.4, ease: "easeOut" };

const PostersGallery = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Poster Designs Archive | Triode Studio",
    description: "Browse the complete collection of high-impact creative posters, product visualizations, and brand design work by Triode Studio.",
    keywords: "poster design, visual identity, product posters, branding, 3D visual design, Triode Studio, graphic design portfolio",
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(postersData.map((p) => p.category)))];

  const filteredPosters =
    activeCategory === "All"
      ? postersData
      : postersData.filter((p) => p.category === activeCategory);

  const selectedPoster = selectedIndex !== null ? filteredPosters[selectedIndex] : null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredPosters.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < filteredPosters.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredPosters.length - 1));
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev < filteredPosters.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredPosters]);

  return (
    <motion.div
      className={styles.postersGalleryPage}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={styles.headerSection}>
        <span className={styles.tagline}>Visual Storytelling & Brand Identity</span>
        <h1 className={styles.title}>Creative Posters Collection</h1>
        <p className={subtitle => styles.subtitle}>
          Explore our collection of {postersData.length} premium poster designs crafted with bold typography, 3D visualization, and aesthetic art direction.
        </p>
      </div>

      {/* Category Filter */}
      <div className={styles.filterContainer}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posters Grid */}
      <div className={styles.postersGrid}>
        {filteredPosters.map((poster, index) => (
          <motion.div
            key={poster.id}
            className={styles.posterCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            onClick={() => openLightbox(index)}
          >
            <div className={styles.posterImageWrapper}>
              <img src={poster.image} alt={poster.title} className={styles.posterImage} loading="lazy" />
              <div className={styles.posterOverlay}>
                <div className={styles.zoomBtn}>
                  <FiMaximize2 />
                </div>
              </div>
            </div>

            <div className={styles.posterInfo}>
              <span className={styles.posterCategory}>{poster.category}</span>
              <h3 className={styles.posterTitle}>{poster.title}</h3>
              {poster.tagline && <p className={styles.posterTagline}>"{poster.tagline}"</p>}
              <div className={styles.posterTools}>
                {poster.tools.map((tool, i) => (
                  <span key={i} className={styles.toolTag}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className={styles.closeButton} onClick={closeLightbox} aria-label="Close modal">
              ✕
            </button>

            {filteredPosters.length > 1 && (
              <>
                <button className={styles.navPrev} onClick={handlePrev} aria-label="Previous poster">
                  <FiChevronLeft size={24} />
                </button>
                <button className={styles.navNext} onClick={handleNext} aria-label="Next poster">
                  <FiChevronRight size={24} />
                </button>
              </>
            )}

            <motion.div
              className={styles.lightboxContainer}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.lightboxImageWrapper}>
                <img
                  src={selectedPoster.image}
                  alt={selectedPoster.title}
                  className={styles.lightboxImage}
                />
              </div>

              <div className={styles.lightboxDetails}>
                <span className={styles.modalCategory}>{selectedPoster.category}</span>
                <h2 className={styles.modalTitle}>{selectedPoster.title}</h2>
                {selectedPoster.tagline && <p className={styles.modalTagline}>"{selectedPoster.tagline}"</p>}

                <div className={styles.modalSection}>
                  <h4>Client / Brand</h4>
                  <p>{selectedPoster.client}</p>
                </div>

                <div className={styles.modalSection}>
                  <h4>Industry</h4>
                  <p>{selectedPoster.industry}</p>
                </div>

                <div className={styles.modalSection}>
                  <h4>Objective & Concept</h4>
                  <p>{selectedPoster.objective}</p>
                </div>

                <div className={styles.modalSection}>
                  <h4>Tools Used</h4>
                  <div className={styles.posterTools}>
                    {selectedPoster.tools.map((tool, i) => (
                      <span key={i} className={styles.toolTag}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PostersGallery;
