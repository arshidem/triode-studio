# TRIODE STUDIO - Premium React Website

A modern, scalable, and premium-quality React website built with best practices for web development. Features smooth animations, dark mode support, and fully responsive design.

## 🌟 Features

### Core Features
- ✨ **Dark Mode Support** - Seamless theme switching with localStorage persistence
- 🎨 **Premium UI/UX** - Modern, clean interface with attention to detail
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast & Optimized** - Built with performance in mind
- 🎭 **Smooth Animations** - GSAP scroll-trigger and Framer Motion animations
- 🧭 **Client-side Routing** - React Router for seamless navigation

### Technical Features
- 🏗️ **Modular Architecture** - Well-organized component structure
- 🎯 **CSS Modules** - Scoped styling for better maintainability
- 🔄 **React Context API** - Global state management for theme
- 📦 **Reusable Components** - DRY principle applied throughout
- 🎬 **Page Transitions** - AnimatePresence for smooth route changes
- 📊 **Advanced Animations** - Multiple GSAP animation variants

## 📁 Project Structure

```
triodestudio/
├── src/
│   ├── animations/           # GSAP animation configurations
│   │   └── gsapAnimations.js # Scroll-trigger animations
│   ├── assets/               # Static assets
│   │   ├── images/          # Image files
│   │   ├── icons/           # Icon files
│   │   └── videos/          # Video files
│   ├── context/             # React Context providers
│   │   └── ThemeContext.jsx # Dark mode theme context
│   ├── shared/              # Reusable components
│   │   ├── Hero.jsx         # Hero section component
│   │   ├── Hero.module.css
│   │   ├── ServiceCard.jsx  # Service card component
│   │   ├── ServiceCard.module.css
│   │   ├── TestimonialCard.jsx # Testimonial card
│   │   ├── TestimonialCard.module.css
│   │   ├── ContactForm.jsx  # Contact form with validation
│   │   ├── ContactForm.module.css
│   │   ├── ThemeToggle.jsx  # Theme toggle button
│   │   └── ThemeToggle.module.css
│   ├── styles/              # Global styles
│   │   └── global.css       # CSS variables & global styles
│   ├── user/                # User-facing features
│   │   ├── components/      # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   └── styles/         # Page-specific CSS modules
│   │       ├── Navbar.module.css
│   │       ├── Footer.module.css
│   │       ├── Home.module.css
│   │       ├── Services.module.css
│   │       ├── Testimonials.module.css
│   │       ├── About.module.css
│   │       └── Contact.module.css
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to the project folder)
```bash
cd triodestudio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to `http://localhost:5173` (default Vite port)

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --primary: #4a90e2;
  --secondary: #667eea;
  --bg: #f0f1f5;
  --text: #052659;
  /* ... more variables */
}
```

### Adding New Pages

1. Create page component in `src/user/pages/`
2. Create CSS module in `src/user/styles/`
3. Add route in `src/App.jsx`
4. Add navigation link in `src/user/components/Navbar.jsx`

### Creating Reusable Components

Place shared components in `src/shared/` with their CSS modules.

## 📦 Dependencies

### Core Dependencies
- **React** (v19.1.1) - UI library
- **React DOM** (v19.1.1) - DOM rendering
- **React Router DOM** (v7.9.4) - Routing
- **Framer Motion** (v12.23.24) - Page transitions & animations
- **GSAP** (v3.13.0) - Scroll animations

### Dev Dependencies
- **Vite** (v7.1.7) - Build tool
- **@vitejs/plugin-react** - React plugin for Vite
- **ESLint** - Code linting

## 🎭 Animation Guide

### GSAP Scroll Animations
Use `data-animate` attribute on elements:

```jsx
<div data-animate="fade-up">Content</div>
<div data-animate="fade-in">Content</div>
<div data-animate="slide-left">Content</div>
<div data-animate="slide-right">Content</div>
<div data-animate="scale">Content</div>
<div data-animate="stagger">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Framer Motion
Use motion components for interactive animations:

```jsx
import { motion } from "framer-motion";

<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Hover me!
</motion.div>
```

## 🌙 Dark Mode

Dark mode is handled via `ThemeContext`. Access theme state and toggle function:

```jsx
import { useTheme } from '../context/ThemeContext';

const MyComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};
```

## 📝 Code Style

- Use functional components with hooks
- Follow CSS Modules naming convention
- Add comments for complex logic
- Keep components small and focused
- Use meaningful variable names

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or inquiries:
- Email: hello@triodestudio.com
- Website: [triodestudio.com](https://triodestudio.com)

---

**Built with ❤️ by TRIODE STUDIO**
