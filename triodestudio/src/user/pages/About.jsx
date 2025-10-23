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
        email: "arshidem0@gmail.com",
        mobile: "+91 81578 75032",
        whatsapp: "+91 81578 75032",
        linkedin: "https://linkedin.com/in/mohammed-arshid-em",
        github: "https://github.com/arshidem",
        instagram:"https://www.instagram.com/arshidh__"
      },
      bio: "Passionate full-stack developer with expertise in MERN stack. Specializes in building scalable web applications and robust backend systems. Always eager to tackle complex challenges and deliver high-quality solutions."
    },
    {
      id: 2,
      image: "/assets/images/team/midlaj.jpg", 
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
    image: "/assets/images/values/excellence.jpg",
    title: "Excellence", 
    description: "Delivering superior quality in every project"
  },
  {
    image: "/assets/images/values/innovation.jpg",
    title: "Innovation",
    description: "Staying current with industry trends and technologies"
  },
  {
    image: "/assets/images/values/collaboration.jpg",
    title: "Collaboration",
    description: "Working closely with clients as partners"
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
                        
                     {/* Contact Links - Icons Only */}
<div className={styles.contactLinks}>
  <h4 className={styles.socialsHeader}>Socials</h4>
  <div className={styles.socialIcons}>
    {member.contact.email && (
      <a href={`mailto:${member.contact.email}`} className={styles.socialIcon} title="Email">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.51 38.5" id="gmail">
  <g>
    <g>
      <path fill="#f2f2f2" d="M38.51,19.25c0,5.29-2.17,10.11-5.66,13.6-3.49,3.49-8.3,5.65-13.6,5.65-.38,0-.76-.01-1.13-.04C8.05,37.88,0,29.46,0,19.25c0-5.29,2.17-10.11,5.65-13.6C9.14,2.16,13.95,0,19.25,0s10.11,2.16,13.6,5.65c3.35,3.35,5.49,7.93,5.64,12.98.02.21.02.41.02.62Z"></path>
      <path fill="#c6c6c6" d="M38.51,18.65v.6c0,5.29-2.17,10.11-5.66,13.6-3.49,3.49-8.3,5.65-13.6,5.65h-1.09s-.03-.03-.04-.04c-3.5-3.49-6.99-6.98-10.49-10.49-.35-.3-.57-.74-.57-1.24v-14.13c0-2.05,2.35-3.23,3.99-1.99l1.55,1.16,6.65,4.99,6.65-4.99,1.55-1.16c1.08-.81,2.44-.58,3.26.25,2.59,2.58,5.19,5.18,7.78,7.77l.02.02Z"></path>
      <g>
        <path fill="#4285f4" d="M8.72,28.39h3.88v-9.42l-5.54-4.16v11.91c0,.92.75,1.66,1.66,1.66"></path>
        <path fill="#34a853" d="M25.9,28.39h3.88c.92,0,1.66-.75,1.66-1.66v-11.91l-5.54,4.16"></path>
        <path fill="#fbbc04" d="M25.9,11.77v7.2l5.54-4.16v-2.22c0-2.06-2.35-3.23-3.99-1.99"></path>
        <path fill="#ea4335" d="M12.6,18.97v-7.2l6.65,4.99,6.65-4.99v7.2l-6.65,4.99"></path>
        <path fill="#c5221f" d="M7.06,12.6v2.22l5.54,4.16v-7.2l-1.55-1.16c-1.65-1.23-3.99-.06-3.99,1.99"></path>
      </g>
    </g>
  </g>
</svg>
      </a>
    )}
    {member.contact.mobile && (
      <a href={`tel:${member.contact.mobile}`} className={styles.socialIcon} title="Call">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="phone">
  <path fill="#305CDE" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.232-8.639 1.544 1.548c.307.309.297.82-.02 1.14l-.442.432-.01-.009a2.606 2.606 0 0 1-1.274.52c-.1.011-2.435.23-5.333-2.674-2.097-2.101-2.87-3.65-2.665-5.344.023-.212.075-.422.16-.643.09-.232.212-.448.358-.634l-.012-.012.435-.439c.319-.32.829-.329 1.135-.021l1.545 1.548c.307.308.298.818-.02 1.138l-.258.257-.522.523a10.386 10.386 0 0 1 .084.15l.001.003c.273.493.647 1.167 1.355 1.876.708.71 1.38 1.084 1.872 1.357l.153.086.778-.78c.319-.32.828-.329 1.136-.021Z" clip-rule="evenodd"></path>
</svg>
      </a>
    )}
    {member.contact.whatsapp && (
  <a 
    href={`https://wa.me/${member.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello ${member.name.split(' ')[1]}! I would like to discuss a project with you.`)}`} 
    className={styles.socialIcon} 
    title="WhatsApp"
  >    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="whatsapp">
  <rect width="48" height="48" fill="#0DC143" rx="24"></rect>
  <path fill="#fff" d="M34.7507 13.2115C32.1777 10.5628 28.621 9.125 24.9885 9.125C17.2696 9.125 11.0642 15.4061 11.1399 23.0493C11.1399 25.4709 11.821 27.8169 12.9561 29.9358L10.9885 37.125L18.3291 35.2331C20.3723 36.3682 22.6426 36.898 24.9128 36.898C32.5561 36.898 38.7615 30.6169 38.7615 22.9736C38.7615 19.2655 37.3237 15.7845 34.7507 13.2115ZM24.9885 34.552C22.9453 34.552 20.902 34.0223 19.1615 32.9628L18.7074 32.7358L14.3183 33.8709L15.4534 29.5574L15.1507 29.1034C11.821 23.7304 13.4101 16.6169 18.8588 13.2872C24.3074 9.95743 31.3453 11.5466 34.675 16.9953C38.0047 22.4439 36.4156 29.4818 30.9669 32.8115C29.2264 33.9466 27.1074 34.552 24.9885 34.552ZM31.648 26.152L30.8156 25.7736C30.8156 25.7736 29.6047 25.2439 28.848 24.8655C28.7723 24.8655 28.6966 24.7899 28.621 24.7899C28.3939 24.7899 28.2426 24.8655 28.0912 24.9412C28.0912 24.9412 28.0156 25.0169 26.9561 26.2277C26.8804 26.3791 26.7291 26.4547 26.5777 26.4547H26.502C26.4264 26.4547 26.275 26.3791 26.1993 26.3034L25.821 26.152C24.9885 25.7736 24.2318 25.3196 23.6264 24.7142C23.475 24.5628 23.248 24.4115 23.0966 24.2601C22.5669 23.7304 22.0372 23.125 21.6588 22.4439L21.5831 22.2926C21.5074 22.2169 21.5074 22.1412 21.4318 21.9899C21.4318 21.8385 21.4318 21.6872 21.5074 21.6115C21.5074 21.6115 21.8101 21.2331 22.0372 21.0061C22.1885 20.8547 22.2642 20.6277 22.4156 20.4764C22.5669 20.2493 22.6426 19.9466 22.5669 19.7196C22.4912 19.3412 21.5831 17.298 21.3561 16.8439C21.2047 16.6169 21.0534 16.5412 20.8264 16.4655H20.5993C20.448 16.4655 20.221 16.4655 19.9939 16.4655C19.8426 16.4655 19.6912 16.5412 19.5399 16.5412L19.4642 16.6169C19.3128 16.6926 19.1615 16.8439 19.0101 16.9196C18.8588 17.0709 18.7831 17.2223 18.6318 17.3736C18.102 18.0547 17.7993 18.8872 17.7993 19.7196C17.7993 20.325 17.9507 20.9304 18.1777 21.4601L18.2534 21.6872C18.9345 23.125 19.8426 24.4115 21.0534 25.5466L21.3561 25.8493C21.5831 26.0764 21.8101 26.2277 21.9615 26.4547C23.5507 27.8169 25.3669 28.8007 27.4101 29.3304C27.6372 29.4061 27.9399 29.4061 28.1669 29.4818C28.3939 29.4818 28.6966 29.4818 28.9237 29.4818C29.302 29.4818 29.7561 29.3304 30.0588 29.1791C30.2858 29.0277 30.4372 29.0277 30.5885 28.8764L30.7399 28.725C30.8912 28.5736 31.0426 28.498 31.1939 28.3466C31.3453 28.1953 31.4966 28.0439 31.5723 27.8926C31.7237 27.5899 31.7993 27.2115 31.875 26.8331C31.875 26.6818 31.875 26.4547 31.875 26.3034C31.875 26.3034 31.7993 26.2277 31.648 26.152Z"></path>
</svg>
      </a>
    )}
    {member.contact.linkedin && (
      <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="linkedin">
  <circle cx="64" cy="64" r="64" fill="#0177b5"></circle>
  <path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path>
</svg>
      </a>
    )}
    {member.contact.github && (
      <a href={member.contact.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="GitHub">
     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="github">
  <rect width="48" height="48" fill="#000" rx="24"></rect>
  <path fill="#fff" fill-rule="evenodd" d="M31.4225 46.8287C29.0849 47.589 26.5901 48 24 48C21.4081 48 18.9118 47.5884 16.5728 46.8272C17.6533 46.9567 18.0525 46.2532 18.0525 45.6458C18.0525 45.3814 18.048 44.915 18.0419 44.2911C18.035 43.5692 18.0259 42.6364 18.0195 41.5615C11.343 43.0129 9.9345 38.3418 9.9345 38.3418C8.844 35.568 7.2705 34.8294 7.2705 34.8294C5.091 33.3388 7.4355 33.369 7.4355 33.369C9.843 33.5387 11.1105 35.8442 11.1105 35.8442C13.2525 39.5144 16.728 38.4547 18.096 37.8391C18.3135 36.2871 18.9345 35.2286 19.62 34.6283C14.2905 34.022 8.688 31.9625 8.688 22.7597C8.688 20.1373 9.6225 17.994 11.1585 16.3142C10.911 15.7065 10.0875 13.2657 11.3925 9.95888C11.3925 9.95888 13.4085 9.31336 17.9925 12.4206C19.908 11.8876 21.96 11.6222 24.0015 11.6114C26.04 11.6218 28.0935 11.8876 30.0105 12.4206C34.5915 9.31336 36.603 9.95888 36.603 9.95888C37.9125 13.2657 37.089 15.7065 36.8415 16.3142C38.3805 17.994 39.309 20.1373 39.309 22.7597C39.309 31.9849 33.6975 34.0161 28.3515 34.6104C29.2125 35.3519 29.9805 36.8168 29.9805 39.058C29.9805 41.2049 29.9671 43.0739 29.9582 44.3125C29.9538 44.9261 29.9505 45.385 29.9505 45.6462C29.9505 46.2564 30.3401 46.9613 31.4225 46.8287Z" clip-rule="evenodd"></path>
</svg>
      </a>
    )}
    {member.contact.instagram && (
      <a href={member.contact.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Instagram">
       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" id="instagram">
  <defs>
    <clipPath id="b">
      <circle cx="64" cy="64" r="64" fill="none"></circle>
    </clipPath>
    <clipPath id="c">
      <path fill="none" d="M104-163H24a24.07 24.07 0 0 0-24 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24v-80a24.07 24.07 0 0 0-24-24Zm16 104a16 16 0 0 1-16 16H24A16 16 0 0 1 8-59v-80a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16Z"></path>
    </clipPath>
    <clipPath id="e">
      <circle cx="82" cy="209" r="5" fill="none"></circle>
    </clipPath>
    <clipPath id="g">
      <path fill="none" d="M64-115a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16Zm0 24a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"></path>
    </clipPath>
    <clipPath id="h">
      <path fill="none" d="M84-63H44a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16Zm-40-64a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"></path>
    </clipPath>
    <clipPath id="i">
      <circle cx="82" cy="-117" r="5" fill="none"></circle>
    </clipPath>
    <radialGradient id="a" cx="27.5" cy="121.5" r="137.5" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffd676"></stop>
      <stop offset=".25" stop-color="#f2a454"></stop>
      <stop offset=".38" stop-color="#f05c3c"></stop>
      <stop offset=".7" stop-color="#c22f86"></stop>
      <stop offset=".96" stop-color="#6666ad"></stop>
      <stop offset=".99" stop-color="#5c6cb2"></stop>
    </radialGradient>
    <radialGradient xlink:href="#a" id="d" cx="27.5" cy="-41.5" r="148.5"></radialGradient>
    <radialGradient xlink:href="#a" id="f" cx="13.87" cy="303.38" r="185.63"></radialGradient>
    <radialGradient xlink:href="#a" id="j" cx="13.87" cy="-22.62" r="185.63"></radialGradient>
  </defs>
  <g clip-path="url(#b)">
    <circle cx="27.5" cy="121.5" r="137.5" fill="url(#a)"></circle>
  </g>
  <g clip-path="url(#c)">
    <circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle>
  </g>
  <g clip-path="url(#e)">
    <circle cx="13.87" cy="303.38" r="185.63" fill="url(#f)"></circle>
  </g>
  <g clip-path="url(#g)">
    <circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle>
  </g>
  <g clip-path="url(#h)">
    <circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle>
  </g>
  <g clip-path="url(#i)">
    <circle cx="13.87" cy="-22.62" r="185.63" fill="url(#j)"></circle>
  </g>
  <circle cx="82" cy="46" r="5" fill="#fff"></circle>
  <path fill="#fff" d="M64 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"></path>
  <rect width="64" height="64" x="32" y="32" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="8" rx="12" ry="12"></rect>
</svg>
      </a>
    )}
    {member.contact.behance && (
      <a href={member.contact.behance} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Behance">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="behance">
  <circle cx="64" cy="64" r="64" fill="#1e6dff"></circle>
  <path fill="#fff" d="M57 63s6-2.23 6-10-5.14-11-12-11H28v44h23s13 0 13-13c0 0 0-10-7-10zM38 50h13s3 0 3 4c0 4.52-2 5-4 5H38zm12 28H38V67l12.59-.07S55 67 55 73c0 5-3.19 4.95-5 5zm34.77-25.12c-16.69 0-16.68 16.68-16.68 16.68S67.17 86 85 86c0 0 15 1.39 15-11h-8s.24 4.28-7 4.28c0 0-8 .79-8-7.28h23s2.34-19.12-15.23-19.12zM92 66H77s1.24-6.76 7.94-6.76S92 66 92 66zM75 44h19v6H75z"></path>
</svg>
      </a>
    )}
  </div>
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
onClick={() => {
  const subject = encodeURIComponent(`Project Inquiry - ${member.name}`);
  const body = encodeURIComponent(`Hello ${member.name},\n\nI would like to discuss...`);
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${member.contact.email}&su=${subject}&body=${body}`, '_blank');
}}                      >
                        Contact {member.name.split(' ')[1]}
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
      {/* Background Image Container */}
      <div 
        className={styles.valueBackground}
        style={{ backgroundImage: `url(${value.image})` }}
      >
        {/* Overlay for better text readability */}
        <div className={styles.valueOverlay} />
      </div>
      
      {/* Content */}
      <div className={styles.valueContent}>
        <h4 className={styles.valueTitle}>{value.title}</h4>
        <p className={styles.valueDescription}>{value.description}</p>
      </div>
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