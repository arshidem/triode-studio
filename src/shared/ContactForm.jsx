// src/components/ContactForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactForm.module.css";

const SERVICES = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Branding",
  "Digital Marketing",
  "AI Videos",
  "Creative Posters",
];

const ContactForm = () => {
  const [formState, setFormState] = useState({
    projectType: "",
    businessName: "",
    name: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className={styles.formCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className={styles.successState}>
          <div className={styles.successIcon}>✓</div>
          <h3>Inquiry received!</h3>
          <p>We'll review your project and reach out within 24 hours.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Project Inquiry</h2>
      <p className={styles.formSub}>Tell us about your vision, and we'll build a roadmap.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Project Type */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Project Type *</label>
          <select name="projectType" value={formState.projectType} onChange={handleChange} required className={styles.select}>
            <option value="">Select a category</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Branding">Branding</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="AI Video Production">AI Video Production</option>
            <option value="Creative Posters">Creative Posters</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Service chips */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Services you're interested in</label>
          <div className={styles.chipGroup}>
            {SERVICES.map((svc) => (
              <button
                key={svc}
                type="button"
                className={`${styles.chip} ${selectedServices.includes(svc) ? styles.chipActive : ""}`}
                onClick={() => handleServiceToggle(svc)}
              >
                {svc}
              </button>
            ))}
          </div>
        </div>

        {/* Business Name */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Business / Organization</label>
          <input type="text" name="businessName" value={formState.businessName} onChange={handleChange} placeholder="Your company name" className={styles.input} />
        </div>

        {/* Name & Email */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Name *</label>
            <input type="text" name="name" value={formState.name} onChange={handleChange} required placeholder="Full name" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email *</label>
            <input type="email" name="email" value={formState.email} onChange={handleChange} required placeholder="you@example.com" className={styles.input} />
          </div>
        </div>

        {/* Phone */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Phone (optional)</label>
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder="+91 98765 43210" className={styles.input} />
        </div>

        {/* Budget & Timeline */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Estimated Budget</label>
            <select name="budget" value={formState.budget} onChange={handleChange} className={styles.select}>
              <option value="">Select range</option>
              <option value="Under ₹50K">Under ₹50K</option>
              <option value="₹50K–₹1L">₹50K–₹1L</option>
              <option value="₹1L–₹5L">₹1L–₹5L</option>
              <option value="₹5L+">₹5L+</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Project Timeline</label>
            <select name="timeline" value={formState.timeline} onChange={handleChange} className={styles.select}>
              <option value="">Select timeline</option>
              <option value="ASAP">ASAP</option>
              <option value="Within 1 Month">Within 1 Month</option>
              <option value="2–3 Months">2–3 Months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Project Description *</label>
          <textarea
            name="description"
            value={formState.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Tell us about your goals, challenges, and expectations..."
            className={styles.textarea}
          />
        </div>

        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className={styles.spinner}></span> Sending...
            </>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;