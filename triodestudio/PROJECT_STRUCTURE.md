# TRIODE STUDIO - Complete Project Structure

## 📁 Full Directory Tree

```
triodestudio/
├── node_modules/              # Dependencies (auto-generated)
├── public/                    # Static public files
├── src/                       # Source code
│   ├── animations/           # Animation configurations
│   │   └── gsapAnimations.js # GSAP scroll-trigger animations
│   │
│   ├── assets/               # Static assets
│   │   ├── images/          # Image files
│   │   ├── icons/           # Icon files
│   │   ├── videos/          # Video files
│   │   └── README.md        # Asset usage guide
│   │
│   ├── context/             # React Context providers
│   │   └── ThemeContext.jsx # Dark/Light mode theme context
│   │
│   ├── shared/              # Reusable components
│   │   ├── Hero.jsx         # Premium hero section
│   │   ├── Hero.module.css
│   │   ├── ServiceCard.jsx  # Service display card
│   │   ├── ServiceCard.module.css
│   │   ├── TestimonialCard.jsx # Testimonial display card
│   │   ├── TestimonialCard.module.css
│   │   ├── ContactForm.jsx  # Form with validation
│   │   ├── ContactForm.module.css
│   │   ├── ThemeToggle.jsx  # Dark mode toggle button
│   │   └── ThemeToggle.module.css
│   │
│   ├── styles/              # Global styles
│   │   └── global.css       # CSS variables, reset, utilities
│   │
│   ├── user/                # User-facing code
│   │   ├── components/      # Layout components
│   │   │   ├── Navbar.jsx   # Navigation bar
│   │   │   └── Footer.jsx   # Footer component
│   │   │
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx     # Landing page
│   │   │   ├── Services.jsx # Services page
│   │   │   ├── Testimonials.jsx # Testimonials page
│   │   │   ├── About.jsx    # About page
│   │   │   └── Contact.jsx  # Contact page
│   │   │
│   │   └── styles/         # CSS Modules
│   │       ├── Navbar.module.css
│   │       ├── Footer.module.css
│   │       ├── Home.module.css
│   │       ├── Services.module.css
│   │       ├── Testimonials.module.css
│   │       ├── About.module.css
│   │       └── Contact.module.css
│   │
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
│
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Project dependencies
├── package-lock.json       # Dependency lock file
├── vite.config.js         # Vite configuration
├── README.md              # Original README
├── PROJECT_README.md      # Comprehensive project guide
└── PROJECT_STRUCTURE.md   # This file
```

## 🗂️ File Descriptions

### Root Configuration Files

- **package.json** - Dependencies and scripts
- **vite.config.js** - Vite build configuration
- **eslint.config.js** - Code linting rules
- **index.html** - HTML entry point

### Source Directory (`src/`)

#### Animations
- **gsapAnimations.js** - Advanced scroll-trigger animations with multiple variants

#### Assets
- **images/** - Hero images, backgrounds, photos
- **icons/** - SVG icons, logos
- **videos/** - Background videos, demos

#### Context
- **ThemeContext.jsx** - Global theme state management with localStorage

#### Shared Components
Reusable components used across multiple pages:
- **Hero** - Premium hero section with CTA
- **ServiceCard** - Service display with hover effects
- **TestimonialCard** - Customer testimonial display
- **ContactForm** - Form with validation and error handling
- **ThemeToggle** - Animated dark/light mode toggle

#### Global Styles
- **global.css** - CSS variables, reset, utility classes

#### User Directory
Contains all user-facing components and pages:

**Components:**
- **Navbar** - Sticky navigation with mobile menu
- **Footer** - Multi-column footer with social links

**Pages:**
- **Home** - Hero + features + CTA
- **Services** - Service cards grid
- **Testimonials** - Slider with navigation
- **About** - Company info + values + team
- **Contact** - Form + contact information

## 🎨 Component Architecture

### Page Component Structure
```jsx
// Page component template
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/PageName.module.css";

const PageName = () => {
  return (
    <motion.div
      className={styles.pageName}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Content */}
    </motion.div>
  );
};

export default PageName;
```

### Reusable Component Structure
```jsx
// Shared component template
import React from "react";
import { motion } from "framer-motion";
import styles from "./ComponentName.module.css";

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className={styles.componentName}>
      {/* Component logic */}
    </div>
  );
};

export default ComponentName;
```

## 🔄 Data Flow

```
App.jsx (ThemeProvider)
  ↓
  ├─ ThemeContext (Global State)
  │   └─ isDarkMode, toggleTheme
  │
  ├─ Router
  │   ├─ Navbar (uses ThemeContext)
  │   ├─ AnimatedRoutes
  │   │   ├─ Home
  │   │   ├─ Services
  │   │   ├─ Testimonials
  │   │   ├─ About
  │   │   └─ Contact
  │   └─ Footer
  │
  └─ GSAP Animations (on route change)
```

## 🎭 Animation Flow

1. **Page Load** → Framer Motion page transition
2. **Scroll** → GSAP ScrollTrigger animations
3. **Hover/Click** → Framer Motion interactive animations
4. **Route Change** → AnimatePresence exit/enter

## 📦 Component Dependencies

```
Navbar
  └─ ThemeToggle
      └─ ThemeContext

Home
  └─ Hero

Services
  └─ ServiceCard (multiple instances)

Testimonials
  └─ TestimonialCard

Contact
  └─ ContactForm

All Pages
  └─ Framer Motion (page transitions)
  └─ GSAP (scroll animations)
```

## 🎯 Key Features by File

### ThemeContext.jsx
- Dark/light mode state
- localStorage persistence
- Global toggle function

### gsapAnimations.js
- Fade-up animations
- Slide animations
- Scale animations
- Stagger effects
- Parallax effects
- Counter animations

### global.css
- CSS custom properties
- Light/dark theme variables
- Reset styles
- Utility classes
- Responsive breakpoints

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🚀 Build Process

```
Development: npm run dev
  ↓
Vite Dev Server (HMR enabled)
  ↓
Browser: http://localhost:5173

Production: npm run build
  ↓
Vite Build Process
  ↓
Optimized Output in dist/
  ↓
Deploy to hosting
```

## 📊 Total File Count

- **JSX Components**: 15 files
- **CSS Modules**: 13 files
- **Configuration**: 4 files
- **Documentation**: 3 files
- **Total**: ~35+ files

---

**Last Updated**: 2025-10-21
