import { useRef, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import emailjs from "emailjs-com";
import { track } from "@vercel/analytics";
import { services } from "../user/data/services";
import { getEmailConfig, buildEnquiryParams } from "../lib/enquiry";
import styles from "./ContactForm.module.css";
function recordEvent(name) {
  try {
    track(name);
  } catch {
    /* Measurement must never change delivery status. */
  }
}
export default function ContactForm() {
  const [params] = useSearchParams();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [fields, setFields] = useState({
    businessName: "",
    name: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    description: "",
    website: "",
  });
  const [selected, setSelected] = useState(() =>
    services.some((s) => s.title === params.get("service"))
      ? [params.get("service")]
      : [],
  );
  const [status, setStatus] = useState("idle");
  const busy = useRef(false);
  const statusRef = useRef(null);
  useEffect(() => {
    if (status === "error" || status === "unconfigured" || status === "success")
      statusRef.current?.focus();
  }, [status]);
  const change = (event) =>
    setFields((old) => ({ ...old, [event.target.name]: event.target.value }));
  async function submit(event) {
    event.preventDefault();
    if (busy.current || fields.website) return;
    const config = getEmailConfig(import.meta.env);
    if (!config) {
      setStatus("unconfigured");
      recordEvent("Enquiry unavailable");
      return;
    }
    busy.current = true;
    setStatus("sending");
    try {
      const response = await emailjs.send(
        config.serviceId,
        config.templateId,
        buildEnquiryParams(fields, selected),
        config.publicKey,
      );
      if (response.status !== 200) throw new Error("Delivery not accepted");
      setStatus("success");
      recordEvent("Enquiry accepted");
    } catch {
      setStatus("error");
      recordEvent("Enquiry failed");
    } finally {
      busy.current = false;
    }
  }
  if (status === "success")
    return (
      <div className={styles.formCard}>
        <div
          className={styles.successState}
          role="status"
          tabIndex={-1}
          ref={statusRef}
        >
          <h2>Enquiry sent.</h2>
          <p>We aim to reply within one business day.</p>
        </div>
      </div>
    );
  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Tell us about your project</h2>
      <p className={styles.formSub}>
        Start with your idea. Budget and timeline are optional.
      </p>
      {(status === "error" || status === "unconfigured") && (
        <div className="form-error" role="alert" tabIndex={-1} ref={statusRef}>
          <p>
            {status === "unconfigured"
              ? "The enquiry form is currently unavailable. Your enquiry has not been sent."
              : "We could not confirm delivery. Your details are still here so you can retry."}
          </p>
          <p>
            Please <a href="mailto:triodewebstudio@gmail.com">email the team</a>{" "}
            or <a href="https://wa.me/918157875032">contact us on WhatsApp</a>.
          </p>
        </div>
      )}
      <noscript>
        <p>
          Please enable JavaScript to use this form, or{" "}
          <a href="mailto:triodewebstudio@gmail.com">email the team directly</a>
          .
        </p>
      </noscript>
      <form onSubmit={submit} className={styles.form}>
        <fieldset className="service-fieldset">
          <legend className={styles.label}>
            Services you are interested in (optional)
          </legend>
          <div className={styles.chipGroup}>
            {services.map((service) => (
              <button
                key={service.slug}
                type="button"
                className={`${styles.chip} ${selected.includes(service.title) ? styles.chipActive : ""}`}
                aria-pressed={selected.includes(service.title)}
                onClick={() =>
                  setSelected((old) =>
                    old.includes(service.title)
                      ? old.filter((s) => s !== service.title)
                      : [...old, service.title],
                  )
                }
              >
                {service.title}
              </button>
            ))}
          </div>
        </fieldset>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="enquiry-name" className={styles.label}>
              Your name (required)
            </label>
            <input
              className={styles.input}
              id="enquiry-name"
              name="name"
              autoComplete="name"
              required
              maxLength={120}
              value={fields.name}
              onChange={change}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="enquiry-email" className={styles.label}>
              Email (required)
            </label>
            <input
              className={styles.input}
              id="enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={fields.email}
              onChange={change}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="enquiry-description" className={styles.label}>
            What would you like to create? (required)
          </label>
          <textarea
            className={styles.textarea}
            id="enquiry-description"
            name="description"
            required
            maxLength={5000}
            rows={4}
            value={fields.description}
            onChange={change}
            placeholder="Your goals, audience, and what you need help with"
          />
        </div>
        <details className="optional-fields">
          <summary>
            Add business, budget, or timeline details (optional)
          </summary>
          <div className={styles.formGroup}>
            <label htmlFor="enquiry-business" className={styles.label}>
              Business / organization
            </label>
            <input
              className={styles.input}
              id="enquiry-business"
              name="businessName"
              autoComplete="organization"
              maxLength={200}
              value={fields.businessName}
              onChange={change}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="enquiry-phone" className={styles.label}>
              Phone
            </label>
            <input
              className={styles.input}
              id="enquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              value={fields.phone}
              onChange={change}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="enquiry-budget" className={styles.label}>
                Budget
              </label>
              <select
                className={styles.select}
                id="enquiry-budget"
                name="budget"
                value={fields.budget}
                onChange={change}
              >
                {[
                  "",
                  "Not sure yet",
                  "Under ₹10,000",
                  "₹10,000–₹50,000",
                  "₹50,000–₹1 lakh",
                  "₹1 lakh–₹5 lakh",
                  "₹5 lakh+",
                ].map((value) => (
                  <option key={value} value={value}>
                    {value || "Choose a range (optional)"}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="enquiry-timeline" className={styles.label}>
                Timeline
              </label>
              <select
                className={styles.select}
                id="enquiry-timeline"
                name="timeline"
                value={fields.timeline}
                onChange={change}
              >
                {[
                  "",
                  "As soon as possible",
                  "Within one month",
                  "Two to three months",
                  "Flexible",
                ].map((value) => (
                  <option key={value} value={value}>
                    {value || "Choose a timeline (optional)"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </details>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="enquiry-website">Leave this field empty</label>
          <input
            id="enquiry-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={fields.website}
            onChange={change}
          />
        </div>
        <p className="form-privacy">
          We use these details to respond to your enquiry.{" "}
          <Link to="/privacy">Read our privacy information</Link>.
        </p>
        <button
          className={styles.submitBtn}
          type="submit"
          disabled={!ready || status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Enquiry"}
        </button>
        <p role="status" className="sr-only">
          {status === "sending" ? "Sending your enquiry. Please wait." : ""}
        </p>
      </form>
    </div>
  );
}
