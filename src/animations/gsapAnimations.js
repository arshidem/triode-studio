// src/animations/gsapAnimations.js
/**
 * GSAP Scroll-Trigger Animations
 * Premium scroll-based animations for enhanced user experience
 * Handles fade-up, fade-in, slide animations with stagger effects
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize all scroll-triggered animations
 * Call this function after component mount or route change
 */
export const initScrollAnimations = () => {
  // Refresh ScrollTrigger to recalculate positions
  ScrollTrigger.refresh();

  // Fade-up animation for elements with data-animate="fade-up"
  gsap.utils.toArray('[data-animate="fade-up"]').forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 60,
      duration: .5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none reverse",
        // markers: true, // Uncomment for debugging
      },
    });
  });

  // Fade-in animation for elements with data-animate="fade-in"
  gsap.utils.toArray('[data-animate="fade-in"]').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Slide-left animation for elements with data-animate="slide-left"
  gsap.utils.toArray('[data-animate="slide-left"]').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      x: -80,
      duration: .5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Slide-right animation for elements with data-animate="slide-right"
  gsap.utils.toArray('[data-animate="slide-right"]').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      x: 80,
      duration: .5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Scale animation for elements with data-animate="scale"
  gsap.utils.toArray('[data-animate="scale"]').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      scale: 0.8,
      duration: .5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Stagger animation for children elements
  gsap.utils.toArray('[data-animate="stagger"]').forEach((container) => {
    const children = container.children;
    gsap.from(children, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
};

/**
 * Parallax effect for hero sections
 * @param {string} selector - CSS selector for the element
 * @param {number} speed - Parallax speed (0.5 = slower, 2 = faster)
 */
export const parallaxEffect = (selector, speed = 0.5) => {
  const element = document.querySelector(selector);
  if (!element) return;

  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

/**
 * Reveal animation for text lines
 * @param {string} selector - CSS selector for the text element
 */
export const textReveal = (selector) => {
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent;
  element.innerHTML = text
    .split(" ")
    .map((word) => `<span class="word">${word}</span>`)
    .join(" ");

  gsap.from(element.querySelectorAll(".word"), {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
  });
};

/**
 * Counter animation for numbers
 * @param {string} selector - CSS selector for the counter element
 * @param {number} endValue - Final number value
 * @param {number} duration - Animation duration in seconds
 */
export const counterAnimation = (selector, endValue, duration = 2) => {
  const element = document.querySelector(selector);
  if (!element) return;

  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration: duration,
    ease: "power1.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value);
    },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
};

/**
 * Kill all ScrollTrigger instances
 * Use when unmounting components or changing routes
 */
export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

/**
 * Batch animation for multiple elements
 * @param {string} selector - CSS selector for elements
 * @param {object} animationProps - GSAP animation properties
 */
export const batchAnimation = (selector, animationProps = {}) => {
  ScrollTrigger.batch(selector, {
    onEnter: (elements) => {
      gsap.from(elements, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: .1,
        ease: "power3.out",
        ...animationProps,
      });
    },
    start: "top 85%",
  });
};

export default {
  initScrollAnimations,
  parallaxEffect,
  textReveal,
  counterAnimation,
  killScrollTriggers,
  batchAnimation,
};
