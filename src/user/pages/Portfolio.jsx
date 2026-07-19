// src/user/pages/Portfolio.jsx
/**
 * Portfolio Page — Black & White Minimal Premium
 * No images, focused on project typography and clean details
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Portfolio.module.css";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.3 };

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Nike E-commerce Redesign",
      category: "Web Development",
      shortDescription: "A redesign of the Nike online store with a clean management page, easy payment setups, and sales tracking.",
      status: "Live Demo Available",
      badge: "Featured",
      fullDescription: "A full online shopping website for Nike products. It includes an easy-to-use shopping system and a store owner dashboard to manage items and track sales easily.",
      features: [
        "User Authentication with JWT & Email Verification",
        "Product Catalog with Advanced Filtering & Search",
        "Shopping Cart & Wishlist Functionality",
        "Razorpay Payment Gateway Integration",
        "Admin Dashboard with Analytics & Charts",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Razorpay", "JWT", "Redux"],
      liveLink: "https://nike-redesign-delta.vercel.app",
      projectDuration: "6 weeks",
      yourRole: "Full-Stack Developer",
      challenges: "Setting up safe payment systems that work smoothly and building a simple dashboard to show sales data.",
      solutions: "We used Razorpay for payments, secure logins to protect user data, and clean charts to show sales information.",
      bentoClass: "bentoLarge",
    },
    {
      id: 2,
      title: "KoFund",
      category: "Mobile App Development",
      shortDescription: "A community fund management platform to track shared contributions and expenses transparently.",
      status: "Live App",
      badge: "Community",
      fullDescription: "KoFund digitizes community fund management. It replaces notebooks and spreadsheets with a centralized system where admins can manage collections and expenses, and members can monitor fund activity with full transparency.",
      features: [
        "Community & Role-based Access Management",
        "Program & Target Goal Creation",
        "Transparent Contribution Tracking",
        "Detailed Expense Management",
        "Real-time Fund Transparency & Dashboards",
      ],
      technologies: ["Flutter", "Firebase Authentication", "Cloud Firestore", "Firebase Storage"],
      liveLink: "https://drive.google.com/file/d/1jQEGYyfAZjnt9L8PPqYpANaizGaq0gq0/view?usp=sharing",
      projectDuration: "Ongoing",
      yourRole: "Lead Developer",
      challenges: "Ensuring 100% transparency for community members while keeping admin management simple and offline-friendly.",
      solutions: "Built a centralized ledger using Firebase for real-time synchronization and transparent dashboards for all members.",
      bentoClass: "bentoMedium",
    },
    {
      id: 3,
      title: "Meta Ads Cinematic Campaign",
      category: "AI Video & Marketing",
      shortDescription: "An advertising campaign using AI video tools that helped get 3.5 times more customer actions.",
      status: "Completed Case Study",
      badge: "Marketing",
      fullDescription: "A video advertising campaign created with the help of AI. We wrote the story, generated realistic voiceovers, and made beautiful video clips.",
      features: [
        "Writing stories using AI tools",
        "Creating high-quality video scenes",
        "Finding the right audience for the ads",
        "Designing videos that keep people watching",
      ],
      technologies: ["Midjourney", "Runway Gen-2", "ElevenLabs", "Premiere Pro", "Meta Ads"],
      projectDuration: "3 weeks",
      yourRole: "Marketing Campaign Lead",
      challenges: "Making short, engaging ad videos with AI that match the look and feel of the brand.",
      solutions: "We created a step-by-step video system using Runway to keep the colors and style the same in all videos.",
      bentoClass: "bentoWide",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        className={`${styles.projectCard} ${styles[project.bentoClass]}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        onClick={() => openModal(project)}
      >
        <span className={styles.projectCategory}>{project.category}</span>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.shortDescription}</p>
        <div className={styles.cardFooter}>
          <span className={styles.status}>{project.status}</span>
          <span className={styles.viewLink}>Read Details →</span>
        </div>
      </motion.div>
    );
  };

  const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.modalBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            >
              <motion.div
                className={styles.modal}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modalInner}>
                  <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                      <span className={styles.modalCategory}>{project.category}</span>
                      <h2 className={styles.modalTitle}>{project.title}</h2>
                      <p className={styles.modalSubtitle}>{project.shortDescription}</p>

                      <div className={styles.modalMeta}>
                        <div>
                          <strong>Role:</strong> {project.yourRole}
                        </div>
                        <div>
                          <strong>Duration:</strong> {project.projectDuration}
                        </div>
                      </div>

                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>
                          View Live Demo
                        </a>
                      )}
                    </div>

                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Project Overview</h3>
                      <p className={styles.fullDescription}>{project.fullDescription}</p>
                    </div>

                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Challenges & Solutions</h3>
                      <div className={styles.challengeGrid}>
                        <div>
                          <h4 className={styles.subSubTitle}>Challenge</h4>
                          <p className={styles.descText}>{project.challenges}</p>
                        </div>
                        <div>
                          <h4 className={styles.subSubTitle}>Solution</h4>
                          <p className={styles.descText}>{project.solutions}</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Key Features</h3>
                      <div className={styles.featuresGrid}>
                        {project.features.map((feature, idx) => (
                          <div key={idx} className={styles.featureCard}>
                            <span className={styles.bullet}>✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Technologies & Tools</h3>
                      <div className={styles.techList}>
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className={styles.techPill}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <motion.div
      className={styles.portfolio}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={styles.portfolioHeader}>
        <h1 className={styles.title}>Our Portfolio</h1>
        <p className={styles.subtitle}>
          A handpicked selection of our websites, mobile apps, marketing campaigns, and AI video creations.
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </motion.div>
  );
};

export default Portfolio;
