import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import styles from "../styles/FloatingContact.module.css";

const PHONE_DISPLAY = "+91 81578 75032";
const PHONE_TEL = "+918157875032";
const INSTAGRAM_URL = "https://www.instagram.com/triodestudio/";
const WHATSAPP_URL = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent("Hi Triode Studio, I want to discuss a project.")}`;

const actions = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: <FaInstagram aria-hidden="true" />,
    external: true,
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    icon: <FaWhatsapp aria-hidden="true" />,
    external: true,
  },
  {
    label: `Call ${PHONE_DISPLAY}`,
    href: `tel:${PHONE_TEL}`,
    icon: <FiPhone aria-hidden="true" />,
  },
];

const FloatingContact = () => {
  return (
    <aside className={styles.floatingContact} aria-label="Quick contact buttons">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          className={styles.action}
          aria-label={action.label}
          title={action.label}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
        >
          {action.icon}
          <span>{action.label}</span>
        </a>
      ))}
    </aside>
  );
};

export default FloatingContact;
