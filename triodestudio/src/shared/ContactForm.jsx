import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
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
  const [submitError, setSubmitError] = useState("");

  // EmailJS configuration (get these from emailjs.com)
  const EMAILJS_SERVICE_ID = 'service_bx11iti';
  const EMAILJS_TEMPLATE_ID = 'template_q1s2a3b';
  const EMAILJS_USER_ID = 'yVl3lnyuuBXGHuhnP';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    // Clear any previous errors
    setSubmitError("");
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'triodeuiux@gmail.com',
        reply_to: formData.email
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      className={styles.contactForm}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Form fields remain the same */}
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
        >
          ✓ Message sent successfully! We'll get back to you within 24 hours.
        </motion.div>
      )}

      {/* Error Message */}
      {submitError && (
        <motion.div
          className={styles.errorMessage}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ⚠ {submitError}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;