// src/user/pages/Portfolio.jsx
/**
 * Portfolio Page with Project Modals - Matching Services Style
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Portfolio.module.css";
import { Link } from "react-router-dom";

// Page transition variants
const pageVariants = {
  initial: { opacity: 1, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 1, y: -50 },
};

const pageTransition = { type: "tween", duration: 0.1 };

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Projects data
  const projects = [
    {
      id: 1,
      image1: "/assets/images/portfolio/nike-redesign1.jpg",
      image2: "/assets/images/portfolio/nike-redesign2.jpg",
      image3: "/assets/images/portfolio/nike-redesign3.jpg",
      title: "Nike E-commerce Redesign",
      category: "Full-Stack Development",
      shortDescription:
        "Complete Nike store redesign with admin dashboard, payment integration, and real-time analytics.",
      status: "Live Demo Available",
      badge: "Featured",

      // Modal Details
      fullDescription:
        "A comprehensive e-commerce platform featuring a complete redesign of Nike's online shopping experience. Built with modern web technologies and featuring a robust admin dashboard for complete store management.",
      features: [
        "User Authentication with JWT & Email Verification",
        "Product Catalog with Advanced Filtering & Search",
        "Shopping Cart & Wishlist Functionality",
        "Razorpay Payment Gateway Integration",
        "Order Tracking & Management System",
        "Admin Dashboard with Analytics & Charts",
        "Coupon Code System & Promotions",
        "Product & Stock Management",
        "Order Export (PDF/Word) Functionality",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Razorpay",
        "JWT",
        "Redux",
      ],
      liveLink: "https://nike-redesign-six.vercel.app",
      projectDuration: "6 weeks",
      yourRole: "Full-Stack Developer & UI Designer",
      challenges:
        "Implementing secure payment integration while maintaining smooth user experience and building a comprehensive admin dashboard with real-time analytics.",
      solutions:
        "Used Razorpay for reliable payments, JWT for secure authentication, and Chart.js for interactive analytics in the admin panel.",
    },
    {
      id: 2,
      image1: "/assets/images/portfolio/fund-management1.jpg",
      image2: "/assets/images/portfolio/fund-management2.jpg",
      image3: "/assets/images/portfolio/fund-management3.jpg",
      title: "Fund Management System",
      category: "Full-Stack Web Application",
      shortDescription:
        "Multi-user financial management platform with real-time chat, event management, and admin controls.",
      status: "Case Study",
      badge: "Enterprise",

      // Modal Details
      fullDescription:
        "A sophisticated fund management system designed for communities and organizations to manage events, contributions, expenses, and participant communications securely.",
      features: [
        "Multi-level User Authentication & Admin Approval",
        "Event Creation & Management System",
        "Financial Tracking (Contributions & Expenses)",
        "Real-time Chat with Text & Audio Messages",
        "Participant Management & Invitations",
        "Balance Tracking & Financial Reporting",
        "Notification System & Alerts",
        "Admin Dashboard with Full Controls",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "Socket.io",
        "JWT",
      ],
      projectDuration: "8 weeks",
      yourRole: "Full-Stack Developer",
      challenges:
        "Building secure multi-level authentication and real-time communication features while maintaining data integrity for financial operations.",
      solutions:
        "Implemented admin approval workflow, WebSocket-based real-time chat, and robust financial transaction tracking with proper validation.",
      accessNote:
        "Demo access requires admin approval due to sensitive financial data and security protocols.",
    },
    {
      id: 3,
      image1: "/assets/images/portfolio/book-swap1.jpg",
      image2: "/assets/images/portfolio/book-swap2.jpg",
      image3: "/assets/images/portfolio/book-swap3.jpg",
      title: "Book Swap Mobile App",
      category: "UI/UX Design",
      shortDescription:
        "Mobile app design for book sharing community with intuitive user flows and modern interface.",
      status: "UI Design",
      badge: "Mobile Design",

      // Modal Details
      fullDescription:
        "A mobile application UI design for a community-based book swapping platform. Focused on creating seamless user experiences for book discovery, swapping, and community engagement.",
      features: [
        "Book Discovery & Search Interface",
        "User Profile & Book Collection Management",
        "Swap Request & Approval Flow",
        "Community Engagement Features",
        "Location-based Book Availability",
        "Rating & Review System",
        "Notification Center",
        "Chat Interface for User Communication",
      ],
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      figmaLink: "https://figma.com/your-prototype-link",
      projectDuration: "3 weeks",
      yourRole: "UI/UX Designer",
      challenges:
        "Creating intuitive user flows for book swapping while maintaining visual appeal and ensuring smooth mobile interactions.",
      solutions:
        "Conducted user research to understand pain points, created wireframes for key flows, and developed high-fidelity prototypes with interactive elements.",
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
    const handleLiveDemoClick = (e, project) => {
      e.stopPropagation(); // Prevent opening modal when clicking Live Demo
      if (project.liveLink) {
        window.open(project.liveLink, "_blank", "noopener,noreferrer");
      } else if (project.figmaLink) {
        window.open(project.figmaLink, "_blank", "noopener,noreferrer");
      }
    };

    return (
      <motion.div
        className={styles.projectCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.15 },
        }}
        onClick={() => openModal(project)}
      >
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={project.image1}
              alt={project.title}
              className={styles.projectImage}
              loading="lazy"
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.projectBadge}>
            <span className={styles.badgeText}>{project.badge}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{project.title}</h3>

          {/* Action Buttons */}
          <div className={styles.cardActions}>
            {/* Live Demo Button */}
            {(project.liveLink || project.figmaLink) && (
              <motion.button
                className={styles.liveDemoBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => handleLiveDemoClick(e, project)}
              >
                <span>{project.liveLink ? "Live Demo" : "View Prototype"}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            )}

            {/* View Case Study Button */}
            <motion.button
              className={styles.viewDetailsBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Case Study</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
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
            {/* Backdrop */}
            <motion.div
              className={styles.modalBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={onClose}
            >
              {/* Modal Container */}
              <motion.div
                className={styles.modal}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.2,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modalInner}>
                  {/* Close Button */}
                  <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Modal Content */}
                  <div className={styles.modalContent}>
                    {/* Header with Demo Button at Top */}
                    <div className={styles.modalHeader}>
                      <div className={styles.modalImageContainer}>
                        <img
                          src={project.image3}
                          alt={project.title}
                          className={styles.modalImage}
                        />
                      </div>
                      <div className={styles.modalTitleSection}>
                        <div className={styles.projectCategory}>
                          {project.category}
                        </div>
                        <h2 className={styles.modalTitle}>{project.title}</h2>
                        <p className={styles.modalSubtitle}>
                          {project.shortDescription}
                        </p>

                        {/* Demo Button at Top */}
                        <div className={styles.modalDemoSection}>
                          {project.liveLink && (
                            <motion.a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.demoButton}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span>View Live Demo</span>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </motion.a>
                          )}
                          {project.figmaLink && (
                            <motion.a
                              href={project.figmaLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.figmaButton}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span>View Figma Prototype</span>
                            </motion.a>
                          )}
                        </div>

                        <div className={styles.projectMeta}>
                          <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Role:</span>
                            <span className={styles.metaValue}>
                              {project.yourRole}
                            </span>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Duration:</span>
                            <span className={styles.metaValue}>
                              {project.projectDuration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Full Description */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Project Overview</h3>
                      <p className={styles.fullDescription}>
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>
                        Challenge & Solution
                      </h3>
                      <div className={styles.challengeGrid}>
                        <div className={styles.challengeCard}>
                          <h4 className={styles.challengeTitle}>Challenge</h4>
                          <p className={styles.challengeText}>
                            {project.challenges}
                          </p>
                        </div>
                        <div className={styles.solutionCard}>
                          <h4 className={styles.solutionTitle}>Solution</h4>
                          <p className={styles.solutionText}>
                            {project.solutions}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Key Features</h3>
                      <div className={styles.featuresGrid}>
                        {project.features.map((feature, index) => (
                          <div key={index} className={styles.featureCard}>
                            <div className={styles.featureIcon}>✓</div>
                            <span className={styles.featureText}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>
                        Technologies & Tools
                      </h3>
                      <div className={styles.technologiesGrid}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className={styles.techPill}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Access Note for Restricted Projects */}
                    {project.accessNote && (
                      <div className={styles.accessNote}>
                        <div className={styles.noteIcon}>ℹ️</div>
                        <p className={styles.noteText}>{project.accessNote}</p>
                      </div>
                    )}

                    {/* CTA */}
                    <div className={styles.modalCTA}>
                      <motion.button
                        className={styles.secondaryButton}
                        onClick={onClose}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Explore Other Projects
                      </motion.button>
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
      {/* Page Header */}
      <motion.div
        className={styles.portfolioHeader}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Our Portfolio</h1>
          <p className={styles.subtitle}>
            Explore our latest projects and case studies. Each project
            represents our commitment to quality, innovation, and delivering
            exceptional digital experiences.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Live Demos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* CTA Section */}
      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let's collaborate to bring your ideas to life with the same level of
            quality and attention to detail showcased in our portfolio.
          </p>
          <div className={styles.ctaButtons}>
            <motion.button
              className={`${styles.ctaButton} ${styles.primary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
         <Link to="/services" style={{ width: "100%", maxWidth: "250px" }}>
  <motion.button
    className={`${styles.ctaButton} ${styles.secondary}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    View Services
  </motion.button>
</Link>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
