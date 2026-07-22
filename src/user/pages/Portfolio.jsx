// src/user/pages/Portfolio.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiArrowRight, FiPlay, FiExternalLink, FiGithub } from "react-icons/fi";
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
    category: "Product Design • Web Application • UI/UX • Branding",
    shortDescription: "A modern discovery platform connecting users with curated experiences.",
    featured: true,
    challenge: "Users struggled to discover meaningful experiences in their area due to fragmented information and poor discovery tools.",
    solution: "We built an intelligent discovery platform with personalized recommendations, interactive maps, and a clean, intuitive interface.",
    research: "Conducted user interviews with 50+ users and analyzed competitor platforms to identify key pain points.",
    designProcess: "Iterative design process starting from wireframes to high-fidelity prototypes, validated through user testing.",
    development: "Built with a modern tech stack focusing on performance, accessibility, and scalability.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Mapbox"],
    responsive: "Fully responsive across all devices with mobile-first approach.",
    accessibility: "WCAG 2.1 AA compliant with keyboard navigation and screen reader support.",
    businessValue: "Reduced discovery time by 60% and increased user engagement by 45%.",
    keyFeatures: [
      "Personalized recommendations",
      "Interactive map integration",
      "User reviews & ratings",
      "Saved favorites",
      "Social sharing",
      "Real-time notifications",
    ],
    outcome: "Successfully launched with 10,000+ active users in the first month.",
    gallery: ["/assets/portfolio/kofind-1.jpg", "/assets/portfolio/kofind-2.jpg"],
    cta: "Explore Project",
    ctaLink: "/portfolio/kofind",
    duration: "12 weeks",
    services: ["Product Design", "Web Development", "UI/UX", "Branding"],
    deliverables: ["Design System", "Web Application", "Mobile Responsive", "API Documentation"],
  },
  {
    id: "kofund",
    title: "KoFund",
    category: "Mobile App Development • Fintech • Community",
    shortDescription: "A community fund management platform for transparent financial tracking.",
    featured: false,
    challenge: "Community financial management was inefficient, relying on manual spreadsheets and lacking transparency.",
    solution: "Built a centralized mobile app with real-time tracking, transparent dashboards, and role-based access.",
    features: [
      "Community & Role-based Access",
      "Target Goal Creation",
      "Transparent Contribution Tracking",
      "Detailed Expense Management",
      "Real-time Dashboards",
      "Offline Support",
    ],
    designDecisions: "Focused on simplicity and clarity with a clean interface that makes financial data easy to understand.",
    technology: ["Flutter", "Firebase", "Cloud Firestore", "Firebase Storage", "Push Notifications"],
    dashboard: "Interactive dashboard showing contributions, expenses, and fund health in real-time.",
    userExperience: "Intuitive navigation with quick actions for contributions and expense tracking.",
    architecture: "Scalable Firebase architecture supporting multiple communities with role-based permissions.",
    impact: "Digitized financial management for 500+ communities, improving transparency by 90%.",
    techStack: ["Flutter", "Firebase", "Dart", "Riverpod"],
    cta: "View Case Study",
    ctaLink: "/portfolio/kofund",
    duration: "8 weeks",
    services: ["Mobile Development", "UI/UX Design", "Firebase Architecture"],
    deliverables: ["Mobile App", "Admin Dashboard", "API Integration"],
    image: "/assets/portfolio/kofund.jpg",
  },
  {
    id: "ai-marketing",
    title: "AI Marketing Campaign",
    category: "AI Video • Digital Marketing • Creative Strategy",
    shortDescription: "An AI-powered marketing campaign generating high-quality video content at scale.",
    featured: false,
    campaignGoal: "Create 50+ engaging video ads for a product launch using AI to reduce production time and costs.",
    creativeDirection: "Developed a cohesive visual style guide to ensure brand consistency across all AI-generated content.",
    aiWorkflow: "Implemented a multi-stage AI pipeline: script generation → voiceover synthesis → video generation → editing.",
    videoProduction: "Leveraged Runway ML, ElevenLabs, and Midjourney for high-quality video and audio production.",
    advertisingStrategy: "Targeted audience segmentation with A/B testing for optimal ad performance.",
    deliverables: [
      "50+ Video Ads",
      "Visual Style Guide",
      "AI Workflow Documentation",
      "Performance Analytics",
    ],
    businessValue: "Reduced video production costs by 70% and increased engagement by 3.5x.",
    visualStorytelling: "Created compelling narratives that resonated with target audiences.",
    techStack: ["Runway Gen-2", "Midjourney", "ElevenLabs", "Premiere Pro", "Meta Ads"],
    cta: "See the Process",
    ctaLink: "/portfolio/ai-marketing",
    duration: "4 weeks",
    services: ["AI Production", "Creative Direction", "Marketing Strategy"],
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