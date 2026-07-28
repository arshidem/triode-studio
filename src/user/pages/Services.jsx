// src/user/pages/Services.jsx
/**
 * Services Page — Premium Sticky Showcase
 * Delegates rendering to the reusable ServicesShowcase component.
 */

import React from "react";
import { motion } from "framer-motion";
import ServicesShowcase from "../components/ServicesShowcase";
import useSEO from "../hooks/useSEO";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = { duration: 0.4, ease: "easeOut" };

const Services = () => {
  useSEO({
    title: "Services | Digital Marketing & Creative Agency Palakkad",
    description: "Explore Triode Studio's core digital marketing services in Palakkad. We also specialize in custom web development, Flutter mobile apps, and UI/UX design.",
    keywords: "digital marketing services Palakkad, SEO agency Palakkad, social media marketing Kerala, web development services, Flutter app development, UI UX design",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Custom Web Development",
          "description": "We build fast, secure, and modern websites that rank well on Google and turn visitors into customers.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Triode Studio"
          }
        },
        {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "We create smooth, native iOS and Android apps tailored to your business operations using Flutter.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Triode Studio"
          }
        },
        {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "We design clean interfaces and user journeys that make digital products simple to use.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Triode Studio"
          }
        },
        {
          "@type": "Service",
          "name": "Digital Marketing & SEO",
          "description": "We launch targeted ads, SEO, and social campaigns that connect your brand with the right audience.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Triode Studio"
          }
        }
      ]
    }
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <ServicesShowcase />
    </motion.div>
  );
};

export default Services;
