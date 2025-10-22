// src/user/pages/Services.jsx
/**
 * Enhanced Services Page with Modal Popups
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Services.module.css";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = { type: "tween", duration: 0.6 };

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Enhanced services data with images and detailed features
  const services = [
    {
      id: 1,
      image: "/assets/images/services/web-design.jpg",
      title: "Web Design",
      shortDescription: "Modern, responsive interfaces crafted with attention to detail.",
      fullDescription: "We create visually stunning designs that engage users and drive conversions. Our web design process focuses on creating intuitive, beautiful interfaces that reflect your brand identity while ensuring optimal user experience across all devices.",
      features: [
        "Responsive Design that works on all devices",
        "User-Centric Approach focused on your audience",
        "Modern UI Trends and best practices",
        "Conversion Optimization strategies",
        "Brand Alignment and consistency",
        "Interactive Prototypes and mockups"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
      process: [
        { step: "Discovery", description: "Understand your business and goals" },
        { step: "Wireframing", description: "Create structural layout and flow" },
        { step: "Design", description: "Develop visual design and branding" },
        { step: "Testing", description: "User testing and feedback implementation" },
        { step: "Delivery", description: "Final assets and style guide handoff" }
      ],
      deliveryTime: "2-3 weeks"
    },
    {
      id: 2,
      image: "/assets/images/services/web-development.jpg",
      title: "Web Development",
      shortDescription: "Full-stack web applications built with modern technologies.",
      fullDescription: "We build scalable, secure, and performant web applications tailored to your business needs. Our development process ensures clean, maintainable code with robust architecture and seamless user experiences.",
      features: [
        "MERN Stack Development (MongoDB, Express, React, Node.js)",
        "RESTful APIs Integration and development",
        "Database Design & Optimization",
        "Performance Optimization and caching",
        "Security Implementation and best practices",
        "Third-party Integrations and API connections"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase", "PostgreSQL"],
      process: [
        { step: "Planning", description: "Technical specification and architecture" },
        { step: "Development", description: "Agile development with regular updates" },
        { step: "Testing", description: "Quality assurance and bug fixing" },
        { step: "Deployment", description: "Production deployment and setup" },
        { step: "Maintenance", description: "Ongoing support and updates" }
      ],
      deliveryTime: "4-6 weeks"
    },
    {
      id: 3,
      image: "/assets/images/services/ui-ux.jpg",
      title: "UI/UX Design",
      shortDescription: "Beautiful and usable interfaces designed with user experience at the core.",
      fullDescription: "We blend aesthetics with functionality seamlessly, creating interfaces that users love to interact with. Our design process is research-driven, ensuring every decision improves user satisfaction and achieves business goals.",
      features: [
        "User Research & Personas development",
        "Wireframes & Interactive Prototypes",
        "Interaction Design and micro-interactions",
        "Usability Testing and user feedback",
        "Design Systems and component libraries",
        "Accessibility Compliance (WCAG guidelines)"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Proto.io"],
      process: [
        { step: "Research", description: "User research and competitive analysis" },
        { step: "Wireframing", description: "Information architecture and layout" },
        { step: "Prototyping", description: "Interactive prototypes and flows" },
        { step: "Testing", description: "User testing and iteration" },
        { step: "Handoff", description: "Developer handoff with specifications" }
      ],
      deliveryTime: "3-4 weeks"
    },
    {
      id: 4,
      image: "/assets/images/services/e-commerce.jpg",
      title: "E-Commerce Solutions",
      shortDescription: "Custom online store solutions with secure payment integration.",
      fullDescription: "Boost your sales with optimized shopping experiences. We build e-commerce platforms that convert visitors into customers with seamless shopping journeys, secure transactions, and powerful management tools.",
      features: [
        "Payment Gateway Integration (Stripe, PayPal, etc.)",
        "Inventory Management System",
        "Order Processing Automation",
        "Security & SSL Certification",
        "Mobile-First Optimization",
        "Analytics Dashboard and reporting"
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solutions", "Stripe", "PayPal"],
      process: [
        { step: "Store Setup", description: "Platform configuration and setup" },
        { step: "Product Integration", description: "Catalog and inventory setup" },
        { step: "Payment Setup", description: "Payment gateway integration" },
        { step: "Testing", description: "End-to-end testing and quality assurance" },
        { step: "Launch", description: "Go-live and post-launch support" }
      ],
      deliveryTime: "5-7 weeks"
    },
    {
      id: 5,
      image: "/assets/images/services/seo.jpg",
      title: "SEO Optimization",
      shortDescription: "Improve your website's visibility and ranking on search engines.",
      fullDescription: "Drive organic traffic and grow your online presence with our comprehensive SEO strategies. We combine technical expertise with content optimization to help you rank higher and attract qualified visitors.",
      features: [
        "Comprehensive Keyword Research and analysis",
        "On-Page Optimization and content strategy",
        "Technical SEO Audit and fixes",
        "Content Strategy Development",
        "Performance Analytics & Reporting",
        "Competitor Analysis and strategy"
      ],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Search Console", "Screaming Frog"],
      process: [
        { step: "Audit", description: "Comprehensive website analysis" },
        { step: "Strategy", description: "Custom SEO strategy development" },
        { step: "Implementation", description: "On-page and technical optimization" },
        { step: "Monitoring", description: "Performance tracking and adjustments" },
        { step: "Reporting", description: "Regular progress reports and insights" }
      ],
      deliveryTime: "Ongoing"
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  const ServiceCard = ({ service, index }) => {
    return (
      <motion.div
        className={styles.serviceCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
        onClick={() => openModal(service)}
      >
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.serviceImage}
              loading="lazy"
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.serviceBadge}>
            <span className={styles.badgeText}>Service</span>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDescription}>{service.shortDescription}</p>
          
          {/* View Details Button */}
          <motion.button
            className={styles.viewDetailsBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Details</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
      </motion.div>
    );
  };

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!service) return null;

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
            onClick={onClose}
          >
            {/* Modal Container with centered positioning */}
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.2, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
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
                {/* Rest of your modal content remains the same */}
                {/* Header */}
                <div className={styles.modalHeader}>
                  <div className={styles.modalImageContainer}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.modalImage}
                    />
                  </div>
                  <div className={styles.modalTitleSection}>
                    <h2 className={styles.modalTitle}>{service.title}</h2>
                    <p className={styles.modalSubtitle}>{service.shortDescription}</p>
                    <div className={styles.deliveryBadge}>
                      Delivery: {service.deliveryTime}
                    </div>
                  </div>
                </div>

                {/* Full Description */}
                <div className={styles.modalSection}>
                  <h3 className={styles.sectionTitle}>Overview</h3>
                  <p className={styles.fullDescription}>{service.fullDescription}</p>
                </div>

                {/* Features */}
                <div className={styles.modalSection}>
                  <h3 className={styles.sectionTitle}>Key Features</h3>
                  <div className={styles.featuresGrid}>
                    {service.features.map((feature, index) => (
                      <div key={index} className={styles.featureCard}>
                        <div className={styles.featureIcon}>✓</div>
                        <span className={styles.featureText}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className={styles.modalSection}>
                  <h3 className={styles.sectionTitle}>Technologies & Tools</h3>
                  <div className={styles.technologiesGrid}>
                    {service.technologies.map((tech, index) => (
                      <span key={index} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className={styles.modalSection}>
                  <h3 className={styles.sectionTitle}>Our Process</h3>
                  <div className={styles.processTimeline}>
                    {service.process.map((step, index) => (
                      <div key={index} className={styles.processStep}>
                        <div className={styles.stepNumber}>{index + 1}</div>
                        <div className={styles.stepContent}>
                          <h4 className={styles.stepTitle}>{step.step}</h4>
                          <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className={styles.modalCTA}>
                  <motion.button
                    className={styles.ctaButton}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Your Project
                  </motion.button>
                  <button className={styles.secondaryButton} onClick={onClose}>
                    Explore Other Services
                  </button>
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
      className={styles.services}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Page Header */}
      <motion.div
        className={styles.servicesHeader}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.subtitle}>
            Comprehensive digital solutions to elevate your brand and achieve
            your business goals. We deliver exceptional results through
            cutting-edge technology and creative expertise.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5*</span>
              <span className={styles.statLabel}>Client Rating</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      {/* CTA Section */}
      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.ctaContent}>
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>
            Let's discuss your project requirements and create something amazing
            together.
          </p>
          <div className={styles.ctaButtons}>
            <motion.button
              className={`${styles.ctaButton} ${styles.primary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className={`${styles.ctaButton} ${styles.secondary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;