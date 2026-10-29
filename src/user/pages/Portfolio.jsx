// src/user/pages/Portfolio.jsx
import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import useSEO from "../hooks/useSEO";
import { postersData } from "../data/postersData";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Portfolio.module.css";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.4, ease: "easeOut" };

// Project Data
const projects = [
  {
    id: "kofind",
    title: "KoFind",
    category: "Product Design • Web App • UI/UX",
    shortDescription: "A discovery platform connecting users with curated local experiences.",
    featured: false,
    challenge: "Users struggled to find reliable local event info due to scattered resources.",
    solution: "We built an intuitive discovery web application with personalized recommendations and map integration.",
    research: "Explored navigation challenges for local discovery.",
    designProcess: "Created rapid wireframes and high-fidelity mockups, validated with live user testing.",
    development: "Developed with React, TypeScript, and Tailwind CSS for speed and accessibility.",
    responsive: "Optimized with a responsive, mobile-first design system.",
    accessibility: "Designed with accessible navigation in mind.",
    businessValue: "Brings local discovery and saved experiences into one interface.",
    keyFeatures: [
      "Personalized recommendations",
      "Interactive map integration",
      "Saved favorites",
      "Real-time notifications",
    ],
    outcome: "A product exploration focused on local discovery.",
    
    cta: "Explore Project",
    ctaLink: "/contact",
    duration: "12 weeks",
    services: ["Product Design", "Web Dev", "UI/UX"],
    deliverables: ["Design System", "Web App", "API Setup"],
  },
  {
    id: "kofund",
    title: "KoFund",
    category: "Fintech • Mobile App • Community",
    shortDescription: "A community fund management platform for transparent tracking.",
    featured: false,
    challenge: "Community funds were managed manually, leading to tracking errors and low trust.",
    solution: "We built a Flutter mobile application featuring real-time contribution tracking and dashboards.",
    features: [
      "Role-based access controls",
      "Contribution tracking",
      "Expense dashboards",
      "Offline database support",
    ],
    designDecisions: "Focused on clean typography and layout hierarchy to keep financial data legible.",
    technology: ["Flutter", "Firebase", "Dart", "Riverpod"],
    dashboard: "Interactive dashboard displaying live contributions and fund health.",
    userExperience: "Simplified navigation with quick-action shortcuts for contributions.",
    architecture: "Role-based Firebase rules enforcing secure user data separation.",
    impact: "Designed to simplify contribution tracking and financial visibility.",
    techStack: ["Flutter", "Firebase", "Dart", "Riverpod"],
    cta: "View Project",
    ctaLink: "/contact",
    duration: "8 weeks",
    services: ["Mobile Dev", "UI/UX Design", "Architecture"],
    deliverables: ["Mobile App", "Admin Panel"],
    
  },
  {
    id: "nike-ecommerce",
    title: "Nike E-commerce",
    category: "Independent Nike Brand Concept • E-commerce",
    shortDescription: "A fully featured Nike store concept with checkout, cart, and admin dashboard.",
    featured: true,
    challenge: "Required a complete e-commerce flow with product management, cart, checkout, and admin controls.",
    solution: "Built a responsive store with Razorpay payment gateway, product filtering, and a custom admin dashboard.",
    keyFeatures: [
      "Product catalog with filters",
      "Cart and checkout flow",
      "Razorpay payment integration",
      "Custom admin dashboard",
      "Responsive mobile design",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    cta: "View Project",
    ctaLink: "/contact",
    duration: "6 weeks",
    services: ["Web Development", "UI/UX Design", "Backend"],
    deliverables: ["Full-stack Web App", "Admin Panel", "Payment Integration"],
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  useSEO({
    title: "Selected Work | UI UX Design Agency Kerala",
    description: "Explore Triode Studio's portfolio featuring web applications, mobile apps, creative poster designs, and AI video campaigns.",
    keywords: "UI UX design agency Kerala, portfolio, case studies, Web design Kerala, Flutter mobile applications, KoFind, KoFund, LostLink, Fate Unwritten",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          "name": "KoFind",
          "description": "A discovery platform connecting users with curated local experiences.",
          "creator": {
            "@type": "Organization",
            "name": "Triode Studio"
          }
        },
        {
          "@type": "CreativeWork",
          "name": "KoFund",
          "description": "A community fund management platform for transparent tracking.",
          "creator": {
            "@type": "Organization",
            "name": "Triode Studio"
          }
        },
        {
          "@type": "CreativeWork",
          "name": "LostLink",
          "description": "A creative digital concept and product design project.",
          "creator": {
            "@type": "Organization",
            "name": "Triode Studio"
          }
        },
        {
          "@type": "CreativeWork",
          "name": "Fate Unwritten",
          "description": "A creative project showcasing visual storytelling and production.",
          "creator": {
            "@type": "Organization",
            "name": "Triode Studio"
          }
        }
      ]
    }
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <Motion.div
      className={styles.portfolio}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* ===== HERO HEADER ===== */}
      <section className={styles.portfolioHeader}>
        <Motion.span 
          className={styles.headerTag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Selected Work
        </Motion.span>
        <Motion.h1 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Software explorations and creative work from our studio.
        </Motion.h1>
        <Motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Software explorations and independent creative concepts from our team. Brand concepts do not imply a commissioned client relationship.
        </Motion.p>
      </section>

      {/* ===== FEATURED PROJECT ===== */}
      {featuredProject && (
        <Motion.section 
          className={styles.featuredSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.featuredBadge}>⭐ Featured Project</div>
          <div className={styles.featuredContent}>
            <div className={styles.featuredInfo}>
              <span className={styles.featuredCategory}>{featuredProject.category}</span>
              <h2 className={styles.featuredTitle}>{featuredProject.title}</h2>
              <p className={styles.featuredDescription}>{featuredProject.shortDescription}</p>
              
              <div className={styles.featuredMetrics}>
                <div>
                  <span className={styles.metricLabel}>Project type</span>
                  <span className={styles.metricValue}>Independent project</span>
                </div>
                <div>
                  <span className={styles.metricLabel}>Services</span>
                  <span className={styles.metricValue}>{featuredProject.services.join(" • ")}</span>
                </div>
              </div>

              <button 
                className={styles.featuredCta}
                onClick={() => openModal(featuredProject)}
              >
                Explore Project <FiArrowRight />
              </button>
            </div>
            
            <div className={styles.featuredVisual}>
              <img src="/assets/posters/nike-poster.jpg" alt="Independent Nike campaign poster concept by Triode Studio" style={{ width: '100%', height: 'auto', maxHeight: 520, objectFit: 'contain' }} />
              <p>Campaign artwork for our independent Nike brand exploration.</p>
            </div>
          </div>

          {/* Featured Project Details */}
          <div className={styles.featuredDetails}>
            <div className={styles.detailCard}>
              <h4>Challenge</h4>
              <p>{featuredProject.challenge}</p>
            </div>
            <div className={styles.detailCard}>
              <h4>Solution</h4>
              <p>{featuredProject.solution}</p>
            </div>
            <div className={styles.detailCard}>
              <h4>Business Value</h4>
              <p>{featuredProject.businessValue || "An independent exploration of a complete shopping experience."}</p>
            </div>
          </div>
        </Motion.section>
      )}

      {/* ===== OTHER PROJECTS ===== */}
      <section className={styles.projectsSection}>
        <h3 className={styles.sectionLabel}>Featured Projects</h3>
        <div className={styles.projectsGrid}>
          {otherProjects.map((project, index) => (
            <Motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(project)}
              role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openModal(project); } }}
            >
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.shortDescription}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardCta}>{project.cta} →</span>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ===== CREATIVE POSTERS SECTION ===== */}
      <section className={styles.postersSection}>
        <Motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}
        >
          <div>
            <h2 className={styles.sectionTitle}>Creative Posters</h2>
            <p className={styles.sectionSubtitle}>Visual storytelling through bold design, product rendering & creative direction.</p>
          </div>
          <button
            onClick={() => navigate("/posters")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              padding: "0.6rem 1.2rem",
              borderRadius: "30px",
              fontSize: "0.9rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            View All {postersData.length} Posters <FiArrowRight />
          </button>
        </Motion.div>
        
        <div className={styles.postersGrid}>
          {postersData.slice(0, 8).map((poster, index) => (
            <Motion.div
              key={poster.id}
              className={styles.posterCard}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => navigate("/posters")}
              role="link" tabIndex={0} onKeyDown={(event) => { if (event.key === "Enter") navigate("/posters"); }}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.posterVisual}>
                <img
                  loading="lazy"
                  src={poster.image}
                  alt={poster.title}
                  className={styles.posterImage}
                  style={{ width: "100%", height: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "8px" }}
                />
              </div>
              <div className={styles.posterContent}>
                <h3 className={styles.posterTitle}>{poster.title}</h3>
                <span className={styles.posterIndustry}>{poster.client}</span>
                <p className={styles.posterObjective}>{poster.objective}</p>
                <div className={styles.posterTools}>
                  {poster.tools.map((tool, i) => (
                    <span key={i} className={styles.toolTag}>{tool}</span>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </section>

      <section className={styles.videoSection}>
        <h2 className={styles.sectionTitle}>Have an AI video project in mind?</h2>
        <p>Tell us about your audience, message, and format to discuss an AI-assisted production approach.</p>
        <button onClick={() => navigate('/contact')} className={styles.videoCta}>Discuss your video brief →</button>
      </section>

      {/* ===== PROJECT MODAL ===== */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <Motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <Motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} aria-label="Close project details" onClick={closeModal}>✕</button>
              
              <div className={styles.modalContent}>
                <span className={styles.modalCategory}>{selectedProject.category}</span>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                <p className={styles.modalDescription}>{selectedProject.shortDescription}</p>

                <div className={styles.modalMeta}>
                  <div><strong>Project:</strong> Independent studio work</div>
                  <div><strong>Services:</strong> {selectedProject.services?.join(", ")}</div>
                </div>

                {selectedProject.challenge && (
                  <div className={styles.modalSection}>
                    <h3 className={styles.sectionTitle}>Challenge</h3>
                    <p>{selectedProject.challenge}</p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div className={styles.modalSection}>
                    <h3 className={styles.sectionTitle}>Solution</h3>
                    <p>{selectedProject.solution}</p>
                  </div>
                )}

                {selectedProject.keyFeatures && (
                  <div className={styles.modalSection}>
                    <h3 className={styles.sectionTitle}>Key Features</h3>
                    <div className={styles.featuresList}>
                      {selectedProject.keyFeatures.map((feature, i) => (
                        <span key={i} className={styles.featureItem}>✓ {feature}</span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.techStack && (
                  <div className={styles.modalSection}>
                    <h3 className={styles.sectionTitle}>Technology Stack</h3>
                    <div className={styles.techStack}>
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className={styles.techPill}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                <button 
                  className={styles.modalCta}
                  onClick={() => { closeModal(); navigate(selectedProject.ctaLink); }}
                >
                  Discuss a similar project <FiArrowRight />
                </button>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  );
};

export default Portfolio;
