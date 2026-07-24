// src/user/pages/Services.jsx
/**
 * Services Page — Premium Sticky Showcase
 * Delegates rendering to the reusable ServicesShowcase component.
 */

import React from "react";
import ServicesShowcase from "../components/ServicesShowcase";
import useSEO from "../hooks/useSEO";

const Services = () => {
  useSEO({
    title: "Services | Triode Studio",
    description: "Explore Triode Studio's services: Web development, mobile apps, UI/UX design, digital marketing, AI video production, and posters.",
    keywords: "web development services, mobile app development, UI UX design agency, AI video production, digital marketing",
  });

  return <ServicesShowcase />;
};

export default Services;
