// src/user/pages/Portfolio.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiArrowRight, FiPlay, FiExternalLink, FiGithub } from "react-icons/fi";
import useSEO from "../hooks/useSEO";
import styles from "../styles/Portfolio.module.css";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.4 };

// Project Data
const projects = [
  {
    id: "kofind",
    title: "KoFind",
    category: "Product Design • Web App • UI/UX",
    shortDescription: "A discovery platform connecting users with curated local experiences.",
    featured: true,
    challenge: "Users struggled to find reliable local event info due to scattered resources.",
    solution: "We built an intuitive discovery web application with personalized recommendations and map integration.",
    research: "Conducted interviews with 50+ local users to identify core navigation problems.",
    designProcess: "Created rapid wireframes and high-fidelity mockups, validated with live user testing.",
    development: "Developed with React, TypeScript, and Tailwind CSS for speed and accessibility.",
    responsive: "Optimized with a responsive, mobile-first design system.",
    accessibility: "WCAG 2.1 AA compliant featuring keyboard navigation and screen reader support.",
    businessValue: "Reduced search time by 60% and raised user engagement by 45%.",
    keyFeatures: [
      "Personalized recommendations",
      "Interactive map integration",
      "Saved favorites",
      "Real-time notifications",
    ],
    outcome: "Successfully launched with 10,000+ active users in the first month.",
    gallery: ["/assets/portfolio/kofind-1.jpg", "/assets/portfolio/kofind-2.jpg"],
    cta: "Explore Project",
    ctaLink: "/portfolio/kofind",
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
    impact: "Digitized payments for 500+ communities and boosted tracking speed by 90%.",
    techStack: ["Flutter", "Firebase", "Dart", "Riverpod"],
    cta: "View Project",
    ctaLink: "/portfolio/kofund",
    duration: "8 weeks",
    services: ["Mobile Dev", "UI/UX Design", "Architecture"],
    deliverables: ["Mobile App", "Admin Panel"],
    image: "/assets/portfolio/kofund.jpg",
  },
  {
    id: "ai-marketing",
    title: "AI Campaign",
    category: "AI Video • Marketing • Creative Direction",
    shortDescription: "An AI-powered video marketing pipeline that scales creative asset production.",
    featured: false,
    campaignGoal: "Generate 50+ video ads in standard formats to test across social channels.",
    creativeDirection: "Established a clear prompt style guide to keep generated scenes consistent.",
    aiWorkflow: "Designed a generation chain: AI Scripting → Voice Synthesis → Video Gen → Editing.",
    videoProduction: "Utilized Runway and Midjourney to generate high-definition cinematic elements.",
    advertisingStrategy: "Implemented multi-variant creative testing on Meta Ads.",
    deliverables: [
      "50+ Video Ads",
      "Visual Prompts Guide",
      "Production Pipeline Docs",
    ],
    businessValue: "Reduced production costs by 70% while improving click-through rate by 3.5x.",
    visualStorytelling: "Crafted short, high-impact stories tailored for mobile scroll behaviors.",
    techStack: ["Runway", "Midjourney", "ElevenLabs", "Premiere"],
    cta: "See Pipeline",
    ctaLink: "/portfolio/ai-marketing",
    duration: "4 weeks",
    services: ["AI Production", "Creative Direction", "Ad Strategy"],
    image: "/assets/portfolio/ai-marketing.jpg",
  },
];

// Placeholder data for Creative Posters
const posters = [
  { title: "Art Exhibition Poster", industry: "Arts & Culture", objective: "Promote gallery exhibition", tools: ["Photoshop", "Illustrator"] },
  { title: "Brand Campaign Poster", industry: "Branding", objective: "Launch campaign visuals", tools: ["Figma", "After Effects"] },
  { title: "Event Promotional Poster", industry: "Events", objective: "Increase event attendance", tools: ["Photoshop", "InDesign"] },
  { title: "Social Media Campaign", industry: "Digital Marketing", objective: "Social engagement", tools: ["Canva", "Premiere Pro"] },
];

// Placeholder data for AI Videos
const aiVideos = [
  { title: "Brand Story Video", client: "Tech Startup", concept: "Brand launch", duration: "60s", goal: "Brand awareness" },
  { title: "Product Explainer", client: "SaaS Company", concept: "Product demo", duration: "90s", goal: "Lead generation" },
  { title: "Social Media Reel", client: "Fashion Brand", concept: "Campaign teaser", duration: "30s", goal: "Engagement" },
  { title: "AI Cinematic Ad", client: "Entertainment", concept: "Movie promo", duration: "45s", goal: "Ticket sales" },
];

const Portfolio = () => {
  useSEO({
    title: "Selected Work | Portfolio | Triode Studio",
    description: "Explore Triode Studio's portfolio featuring web applications, mobile apps, creative poster designs, and AI video campaigns.",
    keywords: "Triode Studio portfolio, web design portfolio, mobile app showcase, AI video case studies",
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

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
    <motion.div
      className={styles.portfolio}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* ===== HERO HEADER ===== */}
      <section className={styles.portfolioHeader}>
        <motion.span 
          className={styles.headerTag}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Selected Work
        </motion.span>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Digital products built with strategy, creativity, and measurable impact.
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Every project is designed to solve real problems and create meaningful experiences.
        </motion.p>
      </section>

      {/* ===== FEATURED PROJECT ===== */}
      {featuredProject && (
        <motion.section 
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
                  <span className={styles.metricLabel}>Duration</span>
                  <span className={styles.metricValue}>{featuredProject.duration}</span>
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
              <div className={styles.featuredPlaceholder}>
                <div className={styles.placeholderContent}>
                  <span className={styles.placeholderIcon}>◆</span>
                  <span>Project Preview</span>
                </div>
              </div>
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
              <p>{featuredProject.businessValue}</p>
            </div>
          </div>
        </motion.section>
      )}

      {/* ===== OTHER PROJECTS ===== */}
      <section className={styles.projectsSection}>
        <h3 className={styles.sectionLabel}>Featured Projects</h3>
        <div className={styles.projectsGrid}>
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(project)}
            >
              <div className={styles.cardVisual}>
                <div className={styles.cardPlaceholder}>
                  <span>◆</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.shortDescription}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardCta}>{project.cta} →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CREATIVE POSTERS SECTION ===== */}
      <section className={styles.postersSection}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Creative Posters</h2>
          <p className={styles.sectionSubtitle}>Visual storytelling through bold design and creative direction.</p>
        </motion.div>
        
        <div className={styles.postersGrid}>
          {posters.map((poster, index) => (
            <motion.div
              key={index}
              className={styles.posterCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className={styles.posterVisual}>
                <div className={styles.posterPlaceholder}>
                  <span className={styles.posterIcon}>◆</span>
                  <span className={styles.posterLabel}>Poster Preview</span>
                </div>
              </div>
              <div className={styles.posterContent}>
                <h3 className={styles.posterTitle}>{poster.title}</h3>
                <span className={styles.posterIndustry}>{poster.industry}</span>
                <p className={styles.posterObjective}>{poster.objective}</p>
                <div className={styles.posterTools}>
                  {poster.tools.map((tool, i) => (
                    <span key={i} className={styles.toolTag}>{tool}</span>
                  ))}
                </div>
                <button className={styles.posterCta}>
                  View Project <FiArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== AI VIDEO SHOWCASE ===== */}
      <section className={styles.videoSection}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>AI Video Showcase</h2>
          <p className={styles.sectionSubtitle}>Cinematic storytelling powered by AI, crafted with human creativity.</p>
        </motion.div>
        
        <div className={styles.videoGrid}>
          {aiVideos.map((video, index) => (
            <motion.div
              key={index}
              className={styles.videoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.videoVisual}>
                <div className={styles.videoPlaceholder}>
                  <div className={styles.videoOverlay}>
                    <button className={styles.playButton} aria-label="Play video preview">
                      <FiPlay />
                    </button>
                  </div>
                  <span className={styles.videoDuration}>{video.duration}</span>
                </div>
              </div>
              <div className={styles.videoContent}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <span className={styles.videoClient}>{video.client}</span>
                <div className={styles.videoMeta}>
                  <span className={styles.videoConcept}>{video.concept}</span>
                  <span className={styles.videoGoal}>{video.goal}</span>
                </div>
                <button className={styles.videoCta}>
                  View Case Study <FiExternalLink />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PROJECT MODAL ===== */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal}>✕</button>
              
              <div className={styles.modalContent}>
                <span className={styles.modalCategory}>{selectedProject.category}</span>
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                <p className={styles.modalDescription}>{selectedProject.shortDescription}</p>

                <div className={styles.modalMeta}>
                  <div><strong>Duration:</strong> {selectedProject.duration}</div>
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
                  onClick={() => window.open(selectedProject.ctaLink, "_blank")}
                >
                  {selectedProject.cta} <FiArrowRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;