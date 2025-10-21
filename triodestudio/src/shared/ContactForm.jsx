// src/shared/ContactForm.jsx
/**
 * ContactForm Component - Premium contact form with validation
 * Features: Name, email, message fields, submit button, form validation
 * Animated focus states and error handling
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <motion.form
      className={styles.contactForm}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      data-animate="fade-up"
    >
      {/* Name Field */}
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          placeholder="Your full name"
        />
        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
      </div>

      {/* Email Field */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          placeholder="your.email@example.com"
        />
        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
      </div>

      {/* Message Field */}
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          placeholder="Tell us about your project..."
          rows="5"
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>

      {/* Success Message */}
      {submitSuccess && (
        <motion.div
          className={styles.successMessage}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          ✓ Message sent successfully! We'll get back to you soon.
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
