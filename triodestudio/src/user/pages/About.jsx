// src/user/pages/About.jsx
/**
 * About Page with Team Member Modals - Matching Portfolio Style
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/About.module.css";
import { Link } from "react-router-dom";

// Page transition variants
const pageVariants = {
  initial: { opacity: 1, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 1, y: -50 },
};

const pageTransition = { type: "tween", duration: 0.1 };

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      image: "/assets/images/team/arshid.jpg",
      name: "Mohammed Arshid EM",
      role: "Full-Stack Developer",
      badge: "Technical Lead",
      
      // Modal Details
      education: "B.Com, Calicut University",
      certification: "MERN Stack Specialist - One Teame Solutions",
      focus: "Scalable web applications, API integration, performance optimization",
      expertise: [
        "Full-Stack Web Development",
        "API Design & Integration", 
        "Database Architecture",
        "Performance Optimization",
        "System Security",
        "Cloud Deployment"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs", "Git", "AWS"],
      approach: [
        "Architecture-first development",
        "Performance-driven solutions", 
        "Scalable and maintainable codebases"
      ],
      contact: {
        email: "arshid@triodestudio.com",
        mobile: "+91 81578 75032",
        linkedin: "https://linkedin.com/in/mohammed-arshid",
        github: "https://github.com/arshid-dev"
      },
      bio: "Passionate full-stack developer with expertise in MERN stack. Specializes in building scalable web applications and robust backend systems. Always eager to tackle complex challenges and deliver high-quality solutions."
    },
    {
      id: 2,
      image: "/assets/images/team/midilaj.jpg", 
      name: "Mohammed Midilaj PT",
      role: "UI/UX Designer",
      badge: "Creative Director",
      
      // Modal Details
      education: "Plus Two Graduate",
      certification: "UI/UX Design Specialist",
      focus: "User-centered design, interactive experiences, brand consistency",
      expertise: [
        "User Interface Design",
        "User Experience Research",
        "Interactive Prototyping",
        "Design Systems",
        "Brand Identity",
        "Mobile App Design"
      ],
      technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Prototyping", "User Research"],
      approach: [
        "Research-driven design decisions",
        "Intuitive user interfaces",
        "Consistent brand experiences"
      ],
      contact: {
        email: "midilaj@triodestudio.com",
        mobile: "+91 12345 67890",
        linkedin: "https://linkedin.com/in/mohammed-midilaj",
        behance: "https://behance.net/midilaj-design"
      },
      bio: "Creative UI/UX designer focused on creating intuitive and engaging digital experiences. Combines aesthetic sensibility with user-centered design principles to deliver interfaces that are both beautiful and functional."
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Requirement analysis and technical assessment, user research and project scope definition"
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Wireframing and visual design, system architecture and database planning"
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Frontend and backend development, design integration and asset optimization"
    },
    {
      step: "04",
      title: "Testing & Delivery",
      description: "Quality assurance and performance testing, deployment and post-launch support"
    }
  ];

  // Values
  const values = [
    {
      icon: "⭐",
      title: "Excellence",
      description: "Delivering superior quality in every project"
    },
    {
      icon: "💡", 
      title: "Innovation",
      description: "Staying current with industry trends and technologies"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Working closely with clients as partners"
    },
    {
      icon: "🕒",
      title: "Reliability",
      description: "Consistent delivery on promises and deadlines"
    }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  const TeamMemberCard = ({ member, index }) => {
    return (
      <motion.div
        className={styles.teamCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.15 },
        }}
        onClick={() => openModal(member)}
      >
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.memberImage}
              loading="lazy"
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.memberBadge}>
            <span className={styles.badgeText}>{member.badge}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{member.name}</h3>
          <p className={styles.cardDescription}>{member.role}</p>
          
          {/* View Details Button */}
          <motion.button
            className={styles.viewDetailsBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Profile</span>
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

  const MemberModal = ({ member, isOpen, onClose }) => {
    if (!member) return null;

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
                transition={{ type: "spring", damping: 25, stiffness: 300, duration: 0.2 }}
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
                    {/* Header */}
                    <div className={styles.modalHeader}>
                      <div className={styles.modalImageContainer}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className={styles.modalImage}
                        />
                      </div>
                      <div className={styles.modalTitleSection}>
                        <div className={styles.memberBadge}>{member.badge}</div>
                        <h2 className={styles.modalTitle}>{member.name}</h2>
                        <p className={styles.modalSubtitle}>{member.role}</p>
                        
                        {/* Contact Links */}
                        <div className={styles.contactLinks}>
                          {member.contact.email && (
                            <a href={`mailto:${member.contact.email}`} className={styles.contactLink}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                              Email
                            </a>
                          )}
                          {member.contact.mobile && (
                            <a href={`tel:${member.contact.mobile}`} className={styles.contactLink}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                              Call
                            </a>
                          )}
                          {member.contact.linkedin && (
                            <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                              LinkedIn
                            </a>
                          )}
                          {member.contact.github && (
                            <a href={member.contact.github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                              GitHub
                            </a>
                          )}
                          {member.contact.behance && (
                            <a href={member.contact.behance} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M22 12h-4a4 4 0 100 8h4M16.5 8.5h5M18 12V6a4 4 0 00-4-4H8a4 4 0 00-4 4v12a4 4 0 004 4h6a4 4 0 004-4v-2" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                              Behance
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>About</h3>
                      <p className={styles.fullDescription}>{member.bio}</p>
                    </div>

                    {/* Education & Certification */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Education & Certification</h3>
                      <div className={styles.detailsGrid}>
                        <div className={styles.detailCard}>
                          <h4 className={styles.detailTitle}>Education</h4>
                          <p className={styles.detailText}>{member.education}</p>
                        </div>
                        <div className={styles.detailCard}>
                          <h4 className={styles.detailTitle}>Certification</h4>
                          <p className={styles.detailText}>{member.certification}</p>
                        </div>
                      </div>
                    </div>

                    {/* Focus */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Focus Areas</h3>
                      <p className={styles.fullDescription}>{member.focus}</p>
                    </div>

                    {/* Expertise */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Areas of Expertise</h3>
                      <div className={styles.featuresGrid}>
                        {member.expertise.map((skill, index) => (
                          <div key={index} className={styles.featureCard}>
                            <div className={styles.featureIcon}>✓</div>
                            <span className={styles.featureText}>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Technologies & Tools</h3>
                      <div className={styles.technologiesGrid}>
                        {member.technologies.map((tech, index) => (
                          <span key={index} className={styles.techPill}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Approach */}
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Professional Approach</h3>
                      <div className={styles.approachGrid}>
                        {member.approach.map((item, index) => (
                          <div key={index} className={styles.approachCard}>
                            <div className={styles.approachNumber}>{index + 1}</div>
                            <p className={styles.approachText}>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact CTA */}
                    <div className={styles.modalCTA}>
                      <motion.button
                        className={styles.primaryButton}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open(`mailto:${member.contact.email}`, '_blank')}
                      >
                        Contact {member.name.split(' ')[0]}
                      </motion.button>
                      <motion.button
                        className={styles.secondaryButton}
                        onClick={onClose}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Team
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

  const ProcessStep = ({ step, index }) => {
    return (
      <motion.div
        className={styles.processStep}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <div className={styles.stepNumber}>{step.step}</div>
        <div className={styles.stepContent}>
          <h4 className={styles.stepTitle}>{step.title}</h4>
          <p className={styles.stepDescription}>{step.description}</p>
        </div>
      </motion.div>
    );
  };

  const ValueCard = ({ value, index }) => {
    return (
      <motion.div
        className={styles.valueCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{
          y: -5,
          transition: { duration: 0.15 },
        }}
      >
        <div className={styles.valueIcon}>{value.icon}</div>
        <h4 className={styles.valueTitle}>{value.title}</h4>
        <p className={styles.valueDescription}>{value.description}</p>
      </motion.div>
    );
  };

  return (
    <motion.div
      className={styles.about}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <motion.div
        className={styles.aboutHeader}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.headerContent}>
          <h1 className={styles.title}>About Triode Studio</h1>
          <p className={styles.subtitle}>
            Digital Innovation Partners - Where technical excellence meets creative vision 
            to deliver comprehensive digital solutions.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Team Members</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Client Focus</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.section
        className={styles.storySection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <p className={styles.storyDescription}>
                Triode Studio brings together complementary expertise in development and design 
                to deliver comprehensive digital solutions. Our partnership combines technical 
                excellence with creative vision to help businesses thrive in the digital landscape.
              </p>
              <p className={styles.storyDescription}>
                <strong>Why "Triode Studio"?</strong> Inspired by the triode's ability to amplify 
                and control electronic signals, we amplify our clients' digital presence while 
                ensuring precise control over user experience and functionality.
              </p>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.visualPlaceholder}>
                <span>Triode Studio</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className={styles.teamSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className={styles.processSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Process</h2>
          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <ProcessStep key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className={styles.valuesSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Member Modal */}
      <MemberModal 
        member={selectedMember} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      {/* CTA Section */}
      <motion.section
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let's collaborate to bring your ideas to life with our combined expertise 
            in development and design.
          </p>
          <div className={styles.ctaButtons}>
            <motion.button
              className={`${styles.ctaButton} ${styles.primary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <Link to="/services">
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
      </motion.section>
    </motion.div>
  );
};

export default About;