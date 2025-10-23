// src/user/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/triodestudio",
      icon: (
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

      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/company-triode-studio",
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="linkedin">
  <circle cx="64" cy="64" r="64" fill="#0177b5"></circle>
  <path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path>
</svg>



      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918157875032?text=Hello!%20I%20need%20web%20development%20services%20for%20my%20business.%20Are%20you%20available%20for%20a%20consultation?",
      icon: (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="whatsapp">
  <rect width="48" height="48" fill="#0DC143" rx="24"></rect>
  <path fill="#fff" d="M34.7507 13.2115C32.1777 10.5628 28.621 9.125 24.9885 9.125C17.2696 9.125 11.0642 15.4061 11.1399 23.0493C11.1399 25.4709 11.821 27.8169 12.9561 29.9358L10.9885 37.125L18.3291 35.2331C20.3723 36.3682 22.6426 36.898 24.9128 36.898C32.5561 36.898 38.7615 30.6169 38.7615 22.9736C38.7615 19.2655 37.3237 15.7845 34.7507 13.2115ZM24.9885 34.552C22.9453 34.552 20.902 34.0223 19.1615 32.9628L18.7074 32.7358L14.3183 33.8709L15.4534 29.5574L15.1507 29.1034C11.821 23.7304 13.4101 16.6169 18.8588 13.2872C24.3074 9.95743 31.3453 11.5466 34.675 16.9953C38.0047 22.4439 36.4156 29.4818 30.9669 32.8115C29.2264 33.9466 27.1074 34.552 24.9885 34.552ZM31.648 26.152L30.8156 25.7736C30.8156 25.7736 29.6047 25.2439 28.848 24.8655C28.7723 24.8655 28.6966 24.7899 28.621 24.7899C28.3939 24.7899 28.2426 24.8655 28.0912 24.9412C28.0912 24.9412 28.0156 25.0169 26.9561 26.2277C26.8804 26.3791 26.7291 26.4547 26.5777 26.4547H26.502C26.4264 26.4547 26.275 26.3791 26.1993 26.3034L25.821 26.152C24.9885 25.7736 24.2318 25.3196 23.6264 24.7142C23.475 24.5628 23.248 24.4115 23.0966 24.2601C22.5669 23.7304 22.0372 23.125 21.6588 22.4439L21.5831 22.2926C21.5074 22.2169 21.5074 22.1412 21.4318 21.9899C21.4318 21.8385 21.4318 21.6872 21.5074 21.6115C21.5074 21.6115 21.8101 21.2331 22.0372 21.0061C22.1885 20.8547 22.2642 20.6277 22.4156 20.4764C22.5669 20.2493 22.6426 19.9466 22.5669 19.7196C22.4912 19.3412 21.5831 17.298 21.3561 16.8439C21.2047 16.6169 21.0534 16.5412 20.8264 16.4655H20.5993C20.448 16.4655 20.221 16.4655 19.9939 16.4655C19.8426 16.4655 19.6912 16.5412 19.5399 16.5412L19.4642 16.6169C19.3128 16.6926 19.1615 16.8439 19.0101 16.9196C18.8588 17.0709 18.7831 17.2223 18.6318 17.3736C18.102 18.0547 17.7993 18.8872 17.7993 19.7196C17.7993 20.325 17.9507 20.9304 18.1777 21.4601L18.2534 21.6872C18.9345 23.125 19.8426 24.4115 21.0534 25.5466L21.3561 25.8493C21.5831 26.0764 21.8101 26.2277 21.9615 26.4547C23.5507 27.8169 25.3669 28.8007 27.4101 29.3304C27.6372 29.4061 27.9399 29.4061 28.1669 29.4818C28.3939 29.4818 28.6966 29.4818 28.9237 29.4818C29.302 29.4818 29.7561 29.3304 30.0588 29.1791C30.2858 29.0277 30.4372 29.0277 30.5885 28.8764L30.7399 28.725C30.8912 28.5736 31.0426 28.498 31.1939 28.3466C31.3453 28.1953 31.4966 28.0439 31.5723 27.8926C31.7237 27.5899 31.7993 27.2115 31.875 26.8331C31.875 26.6818 31.875 26.4547 31.875 26.3034C31.875 26.3034 31.7993 26.2277 31.648 26.152Z"></path>
</svg>

      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/14QskoHRe87/",
      icon: (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="facebook">
  <path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path>
  <path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path>
</svg>

      ),
    },
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo & Brand Info */}
        <div className={styles.footerSection}>
          <div className={styles.logoWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.46 378.01" width="30" height="30" className={styles.logo}>
              <path fill="currentColor" d="M436.46,0l-22.77,39.46-3.56,6.16-19.29,33.4-9.81,17.02h-52.24l-.3-.18,22.88-39.63,6.12-10.61h-116.47v114.08l-45.61-18.68V45.62h-116.47l6.11,10.57,22.97,39.79-.09.05h.17l13.29,23.02,67.21,27.53,6.82,2.79,45.61,18.67,6.82,2.8,30.21,12.36,14.18,5.81,28.41,11.64-23.01,39.86-10.9,18.86-22.8,39.5-.03.06-19.34,33.49-3.47,6.01h0c-7.6,13.18-15.19,26.32-22.79,39.49-.02.03-.04.07-.06.1l-26.33-45.61h.01s-.01-.02-.01-.02h-.01s-19.36-33.53-19.36-33.53l-22.78-39.48h52.64l1.67,2.89 7.95,13.79.05.08,6.16,10.66c2.06-3.56,4.11-7.12,6.17-10.68-2.06,3.56-4.11,7.12-6.17,10.68,4.42-7.66,8.84-15.31,13.26-22.97l2.58-4.45.83-1.45,12.33-21.37.6-1.03,3.8-6.58,3.39-5.89-7.19-2.95-6.82-2.79-22.78-9.34-22.82-9.35-6.82-2.79-16.72-6.85-13.23-5.41h0s-50.17-20.55-50.17-20.55l-18.79-7.69-21.13-36.59-13.12-22.73-3.01-5.21-6.84-11.84-19.25-33.36h-.01l-3.53-6.12L0,.02l.02-.02h436.44Z" />
              <polygon fill="currentColor" points="241.02 224.61 241.02 233.72 233.19 247.28 229.01 254.53 229 254.53 226.19 259.38 225.58 260.43 225.59 260.44 218.24 273.19 210.26 259.38 209.96 258.87 206.56 252.97 203.28 247.28 195.41 233.65 195.41 205.93 241.02 224.61" />
            </svg>
            <h2 className={styles.brandName}>TRIODE STUDIO</h2>
          </div>
          <p className={styles.brandDescription}>
            Crafting premium digital experiences that elevate brands and engage audiences.
          </p>

          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
<div className={styles.footerSection}>
  <h3 className={styles.sectionTitle}>Quick Links</h3>
  <div className={styles.linksList}>
    {quickLinks.map((link) => (
      <Link 
        key={link.path} 
        to={link.path} 
        className={styles.footerLink}
        onClick={() => window.scrollTo(0, 0)}
      >
        {link.label}
      </Link>
    ))}
  </div>
</div>
        {/* Contact Info */}
<div className={styles.footerSection}>
  <h3 className={styles.sectionTitle}>Get in Touch</h3>
  <div className={styles.contactInfo}>
    <div className={styles.contactItem}>
      <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className={styles.emailOptions}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=triodeuiux@gmail.com&su=Contact%20from%20Website&body=Hello,%20I%20would%20like%20to%20get%20in%20touch..." 
           className={styles.contactLink} target="_blank" rel="noopener noreferrer">
          triodeuiux@gmail.com
        </a>
      </div>
    </div>
    
    <div className={styles.contactItem}>
      <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92V19.92C22 20.52 21.53 21.02 20.94 21.07C20.47 21.11 19.98 21.14 19.49 21.16C17.17 21.3 14.88 20.84 12.81 19.82C10.06 18.47 7.78 16.34 6.24 13.68C5.23 11.89 4.65 9.92 4.51 7.89C4.44 6.87 4.49 5.85 4.66 4.84C4.75 4.26 5.25 3.81 5.84 3.81H8.84C9.41 3.81 9.91 4.22 10.02 4.78C10.22 5.82 10.56 6.83 11.02 7.78C11.18 8.11 11.13 8.5 10.88 8.78L9.82 9.99C10.93 12.38 12.69 14.31 14.89 15.55L16.09 14.47C16.38 14.21 16.78 14.15 17.12 14.3C18.05 14.74 19.05 15.07 20.07 15.27C20.65 15.39 21.09 15.89 21.09 16.48V16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <a href="tel:+918157875032" className={styles.contactLink}>
        +91 81578 75032
      </a>
    </div>
    
    <div className={styles.contactItem}>
      <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className={styles.contactText}>
        Palakkad, Kerala, India
      </span>
    </div>
  </div>
</div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} TRIODE STUDIO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
