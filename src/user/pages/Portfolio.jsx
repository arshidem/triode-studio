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
      shortDescription: "Complete Nike store redesign with admin dashboard, payment integration, and real-time analytics.",
      status: "Live Demo Available",
      badge: "Featured",
      fullDescription: "A comprehensive e-commerce platform featuring a complete redesign of Nike's online shopping experience. Built with modern web technologies and featuring a robust admin dashboard for complete store management.",
      features: [
        "User Authentication with JWT & Email Verification",
        "Product Catalog with Advanced Filtering & Search",
        "Shopping Cart & Wishlist Functionality",
        "Razorpay Payment Gateway Integration",
        "Admin Dashboard with Analytics & Charts",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Razorpay", "JWT", "Redux"],
      liveLink: "https://nike-redesign-six.vercel.app",
      projectDuration: "6 weeks",
      yourRole: "Full-Stack Developer",
      challenges: "Implementing secure payment integration while maintaining smooth user experience and building a comprehensive admin dashboard with real-time analytics.",
      solutions: "Used Razorpay for reliable payments, JWT for secure authentication, and Chart.js for interactive analytics in the admin panel.",
    },
    {
      id: 2,
      title: "Fund Management System",
      category: "Mobile App Development",
      shortDescription: "Multi-user financial management app with real-time chat, event tracking, and admin approvals.",
      status: "Case Study",
      badge: "Enterprise",
      fullDescription: "A sophisticated fund management app designed for communities and organizations to manage events, contributions, expenses, and participant communications securely.",
      features: [
        "Multi-level User Authentication & Admin Approval",
        "Event Creation & Management System",
        "Financial Tracking (Contributions & Expenses)",
        "Real-time Chat with Text & Audio Messages",
        "Participant Management & Invitations",
      ],
      technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Socket.io", "JWT"],
      projectDuration: "8 weeks",
      yourRole: "Mobile Developer",
      challenges: "Building secure multi-level authentication and real-time communication features while maintaining data integrity for financial operations.",
      solutions: "Implemented admin approval workflow, WebSocket-based real-time chat, and robust financial transaction tracking with proper validation.",
    },
    {
      id: 3,
      title: "Meta Ads Cinematic Campaign",
      category: "AI Video & Marketing",
      shortDescription: "Generative AI-assisted advertising visual campaign generating 3.5x higher conversion rate.",
      status: "Completed Case Study",
      badge: "Marketing",
      fullDescription: "An AI-powered video advertising campaign targeting high-growth conversions. Designed and assembled custom scripts, virtual voiceovers, and cinematic scenes.",
      features: [
        "AI-assisted screenplay composition",
        "Dynamic high-fidelity scenes production",
        "Targeted audience funnel optimization",
        "High-retention video layouts configuration",
      ],
      technologies: ["Midjourney", "Runway Gen-2", "ElevenLabs", "Premiere Pro", "Meta Ads"],
      projectDuration: "3 weeks",
      yourRole: "Marketing Campaign Lead",
      challenges: "Creating highly engaging short-form advertising videos using AI tools that stay perfectly consistent with brand identity.",
      solutions: "Assembled a dedicated image-to-video workflow using Runway to retain strict styling parameters across all visual scenes.",
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
        className={styles.projectCard}
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
          A curated selection of our technical works, app layouts, digital marketing campaigns, and AI generative media.
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
