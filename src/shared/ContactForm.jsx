// src/components/ContactForm.jsx
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
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
  const [submitError, setSubmitError] = useState("");

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
    if (isSubmitting) return;
    setSubmitError("");
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === "your_service_id") {
      setIsSubmitting(false);
      setSubmitError("Online inquiries are temporarily unavailable. Your inquiry has not been sent. Please email or WhatsApp us using the links below.");
      return;
    }

    const templateParams = {
      project_type: selectedServices.join(", ") || "General Inquiry",
      selected_services: selectedServices.join(", ") || "None selected",
      business_name: formState.businessName,
      from_name: formState.name,
      from_email: formState.email,
      phone: formState.phone,
      budget: formState.budget,
      timeline: formState.timeline,
      message: formState.description,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success("Project inquiry sent successfully!");
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setIsSubmitting(false);
        setSubmitError("Your inquiry could not be sent. Please try again, or contact us by email or WhatsApp below.");
      });
  };

  if (isSubmitted) {
    return (
      <Motion.div
        className={styles.formCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className={styles.successState}>
          <div className={styles.successIcon}>✓</div>
          <h3>Inquiry received!</h3>
          <p>We'll review your project and reach out within 24 hours.</p>
        </div>
      </Motion.div>
    );
  }

  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Project Inquiry</h2>
      <p className={styles.formSub}>Tell us about your vision, and we'll build a roadmap.</p>

      {submitError && <p role="alert">{submitError}</p>}
      <p>Prefer a direct conversation? <a href="mailto:triodewebstudio@gmail.com">Email us</a> or <a href="https://wa.me/918157875032" target="_blank" rel="noopener noreferrer">WhatsApp us</a>.</p>
      <form onSubmit={handleSubmit} className={styles.form}>

        {/* Service chips */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Services you're interested in</label>
          <div className={styles.chipGroup}>
            {SERVICES.map((svc) => (
              <button
                key={svc}
                type="button"
                aria-pressed={selectedServices.includes(svc)}
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
          <label className={styles.label} htmlFor="inquiry-businessName">Business / Organization</label>
          <input type="text" id="inquiry-businessName" name="businessName" value={formState.businessName} onChange={handleChange} placeholder="Your company name" className={styles.input} />
        </div>

        {/* Name & Email */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="inquiry-name">Your Name *</label>
            <input type="text" id="inquiry-name" name="name" value={formState.name} onChange={handleChange} required placeholder="Full name" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="inquiry-email">Email *</label>
            <input type="email" id="inquiry-email" name="email" value={formState.email} onChange={handleChange} required placeholder="you@example.com" className={styles.input} />
          </div>
        </div>

        {/* Phone */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="inquiry-phone">Phone (optional)</label>
          <input type="tel" id="inquiry-phone" name="phone" value={formState.phone} onChange={handleChange} placeholder="+91 98765 43210" className={styles.input} />
        </div>

        {/* Budget & Timeline */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="inquiry-budget">Estimated Budget</label>
            <select id="inquiry-budget" name="budget" value={formState.budget} onChange={handleChange} className={styles.select}>
              <option value="">Select range</option>
              <option value="Under ₹50K">Under ₹50K</option>
              <option value="₹50K–₹1L">₹50K–₹1L</option>
              <option value="₹1L–₹5L">₹1L–₹5L</option>
              <option value="₹5L+">₹5L+</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="inquiry-timeline">Project Timeline</label>
            <select id="inquiry-timeline" name="timeline" value={formState.timeline} onChange={handleChange} className={styles.select}>
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
          <label className={styles.label} htmlFor="inquiry-description">Project Description *</label>
          <textarea
            id="inquiry-description" name="description"
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
