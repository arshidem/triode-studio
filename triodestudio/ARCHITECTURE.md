# 🎨 Component Hierarchy & Architecture

## Component Tree Visualization

```
App.jsx (ThemeProvider + Router)
│
├─── ThemeContext.Provider
│    └─── Global State: isDarkMode, toggleTheme
│
└─── Router
     │
     ├─── Navbar.jsx
     │    ├─── Logo (animated)
     │    ├─── Desktop Links
     │    │    └─── Active Indicator (animated)
     │    ├─── ThemeToggle.jsx
     │    │    └─── Sun/Moon Icons (animated)
     │    └─── Mobile Menu (hamburger)
     │         └─── Mobile Links
     │
     ├─── AnimatedRoutes
     │    └─── AnimatePresence (page transitions)
     │         │
     │         ├─── Route: "/" → Home.jsx
     │         │    ├─── Hero.jsx (shared component)
     │         │    │    ├─── Title with highlight
     │         │    │    ├─── Subtitle
     │         │    │    └─── CTA Button
     │         │    ├─── Features Section
     │         │    │    └─── Feature Cards (3x)
     │         │    └─── CTA Section
     │         │         └─── CTA Button
     │         │
     │         ├─── Route: "/services" → Services.jsx
     │         │    ├─── Header Section
     │         │    ├─── Services Grid
     │         │    │    └─── ServiceCard.jsx (6x)
     │         │    │         ├─── Icon
     │         │    │         ├─── Title
     │         │    │         ├─── Description
     │         │    │         └─── Hover Line
     │         │    └─── CTA Section
     │         │
     │         ├─── Route: "/testimonials" → Testimonials.jsx
     │         │    ├─── Header Section
     │         │    ├─── Slider Container
     │         │    │    ├─── TestimonialCard.jsx (current)
     │         │    │    │    ├─── Quote Icon
     │         │    │    │    ├─── Quote Text
     │         │    │    │    ├─── Rating Stars
     │         │    │    │    └─── Author (avatar + info)
     │         │    │    ├─── Navigation Buttons (prev/next)
     │         │    │    └─── Dot Indicators
     │         │    └─── Stats Section
     │         │         └─── Stat Items (3x)
     │         │
     │         ├─── Route: "/about" → About.jsx
     │         │    ├─── Header Section
     │         │    ├─── Story Section
     │         │    ├─── Values Section
     │         │    │    └─── Value Cards (4x)
     │         │    ├─── Team Section
     │         │    │    └─── Team Cards (3x)
     │         │    └─── CTA Section
     │         │
     │         └─── Route: "/contact" → Contact.jsx
     │              ├─── Header Section
     │              └─── Contact Content Grid
     │                   ├─── Form Section
     │                   │    └─── ContactForm.jsx
     │                   │         ├─── Name Field
     │                   │         ├─── Email Field
     │                   │         ├─── Message Field
     │                   │         ├─── Submit Button
     │                   │         └─── Success Message
     │                   └─── Info Section
     │                        ├─── Contact Cards (4x)
     │                        └─── Map Placeholder
     │
     └─── Footer.jsx
          ├─── Footer Container
          │    ├─── Brand Section
          │    │    ├─── Logo
          │    │    ├─── Description
          │    │    └─── Social Links (3x)
          │    ├─── Quick Links Section
          │    │    └─── Navigation Links
          │    └─── Contact Info Section
          │         └─── Contact Details
          └─── Footer Bottom
               └─── Copyright
```

## Data Flow Architecture

```
┌─────────────────────────────────────────────┐
│              ThemeProvider                   │
│  ┌───────────────────────────────────────┐  │
│  │   State: isDarkMode (from localStorage)│  │
│  │   Method: toggleTheme()                │  │
│  └───────────────────────────────────────┘  │
└──────────────┬──────────────────────────────┘
               │
               ├──→ Navbar (consumes theme)
               │     └─→ ThemeToggle (calls toggleTheme)
               │
               ├──→ All Pages (theme-aware styles)
               │
               └──→ Footer (consumes theme)

┌─────────────────────────────────────────────┐
│           React Router Flow                  │
│                                              │
│  User clicks link                            │
│       ↓                                      │
│  URL changes                                 │
│       ↓                                      │
│  AnimatePresence triggers                    │
│       ↓                                      │
│  Exit animation (old page)                   │
│       ↓                                      │
│  New route renders                           │
│       ↓                                      │
│  Enter animation (new page)                  │
│       ↓                                      │
│  GSAP ScrollTrigger init                     │
│       ↓                                      │
│  Scroll animations ready                     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│         Animation Timeline                   │
│                                              │
│  Page Load                                   │
│    ├─→ Navbar fade-in (0.5s)                │
│    └─→ Framer Motion page transition        │
│                                              │
│  User Scrolls                                │
│    └─→ GSAP ScrollTrigger fires             │
│         └─→ Elements animate in sequence     │
│                                              │
│  User Hovers                                 │
│    └─→ Framer Motion hover animations       │
│         ├─→ Scale                            │
│         ├─→ Shadow                           │
│         └─→ Color                            │
│                                              │
│  Route Change                                │
│    ├─→ Exit animation (old page)            │
│    ├─→ Enter animation (new page)           │
│    └─→ Re-init GSAP animations              │
└─────────────────────────────────────────────┘
```

## Component Responsibility Map

### Layout Components

**Navbar.jsx**
- ✅ Site navigation
- ✅ Theme toggle integration
- ✅ Mobile menu
- ✅ Active route highlighting
- ✅ Sticky positioning
- ✅ Scroll-based styling

**Footer.jsx**
- ✅ Brand information
- ✅ Quick links
- ✅ Social media links
- ✅ Contact information
- ✅ Copyright notice

### Shared Components

**Hero.jsx**
- ✅ Hero section display
- ✅ Title with gradient highlight
- ✅ Subtitle text
- ✅ CTA button with action
- ✅ Stagger animations

**ServiceCard.jsx**
- ✅ Service information display
- ✅ Icon with gradient background
- ✅ Hover animations
- ✅ Stagger entrance
- ✅ Responsive layout

**TestimonialCard.jsx**
- ✅ Testimonial quote
- ✅ Star rating display
- ✅ Author information
- ✅ Avatar (with placeholder)
- ✅ Fade animations

**ContactForm.jsx**
- ✅ Form field management
- ✅ Input validation
- ✅ Error display
- ✅ Submit handling
- ✅ Success message
- ✅ Accessible labels

**ThemeToggle.jsx**
- ✅ Theme switching
- ✅ Icon animation
- ✅ Context integration
- ✅ Accessibility

### Page Components

**Home.jsx**
- ✅ Hero section
- ✅ Features grid
- ✅ CTA section
- ✅ Navigation to Contact

**Services.jsx**
- ✅ Services header
- ✅ Service cards grid
- ✅ CTA for custom solutions
- ✅ Stagger animations

**Testimonials.jsx**
- ✅ Testimonial slider
- ✅ Auto-play functionality
- ✅ Navigation controls
- ✅ Dot indicators
- ✅ Stats section

**About.jsx**
- ✅ Company story
- ✅ Core values grid
- ✅ Team members
- ✅ CTA section
- ✅ Multiple sections

**Contact.jsx**
- ✅ Contact form
- ✅ Contact information
- ✅ Map placeholder
- ✅ Two-column layout
- ✅ Form validation

### Context & Utilities

**ThemeContext.jsx**
- ✅ Theme state management
- ✅ localStorage persistence
- ✅ Toggle function
- ✅ Provider component
- ✅ Custom hook (useTheme)

**gsapAnimations.js**
- ✅ ScrollTrigger setup
- ✅ Multiple animation variants
- ✅ Parallax effects
- ✅ Counter animations
- ✅ Text reveal
- ✅ Batch animations
- ✅ Cleanup functions

## State Management

### Global State (Context API)

```javascript
ThemeContext
├─ State: isDarkMode (boolean)
├─ Persisted: localStorage.getItem('theme')
└─ Action: toggleTheme()
    ├─ Updates state
    ├─ Toggles HTML class 'dark'
    └─ Saves to localStorage
```

### Component State

```javascript
Navbar
├─ isMobileMenuOpen (boolean)
├─ isScrolled (boolean)
└─ location (from useLocation)

Testimonials
├─ current (number) - Active slide index
└─ isAutoPlay (boolean) - Auto-play status

ContactForm
├─ formData (object) - Form field values
├─ errors (object) - Validation errors
├─ isSubmitting (boolean) - Submit status
└─ submitSuccess (boolean) - Success state
```

## Styling Architecture

### CSS Cascade

```
1. global.css (CSS variables, reset, utilities)
   ↓
2. Component CSS Modules (scoped styles)
   ↓
3. Inline styles (Framer Motion animations)
   ↓
4. Dynamic classes (theme, active states)
```

### CSS Variables Flow

```css
:root (Light Mode)
  ├─ --bg: #f0f1f5
  ├─ --text: #052659
  ├─ --primary: #4a90e2
  └─ ...more variables

.dark (Dark Mode)
  ├─ --bg: #052659
  ├─ --text: #f0f1f5
  ├─ --primary: #4a90e2
  └─ ...more variables
```

## Animation Architecture

### Framer Motion

**Page Transitions**
```javascript
variants: {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 }
}
```

**Interactive Animations**
```javascript
whileHover: { scale: 1.05 }
whileTap: { scale: 0.95 }
```

### GSAP ScrollTrigger

**Scroll Animations**
```javascript
data-animate="fade-up"    → Fade + Slide up
data-animate="fade-in"    → Simple fade
data-animate="slide-left" → Slide from left
data-animate="slide-right"→ Slide from right
data-animate="scale"      → Scale up
data-animate="stagger"    → Stagger children
```

## Routing Architecture

```
Routes (React Router v7)
├─ / → Home
├─ /services → Services
├─ /testimonials → Testimonials
├─ /about → About
└─ /contact → Contact

All routes wrapped in:
├─ AnimatePresence (transitions)
└─ useEffect (GSAP init)
```

## Component Reusability Matrix

| Component | Used In | Instances |
|-----------|---------|-----------|
| Hero | Home | 1 |
| ServiceCard | Services | 6 |
| TestimonialCard | Testimonials | 4 (1 visible) |
| ContactForm | Contact | 1 |
| ThemeToggle | Navbar | 1 |

## File Size Distribution

```
📂 Components:  ~2,500 lines
📂 CSS Modules: ~2,000 lines
📂 Pages:       ~1,500 lines
📂 Utilities:   ~300 lines
📂 Context:     ~60 lines
───────────────────────────
Total:          ~6,400 lines
```

## Performance Considerations

### Optimizations Implemented
- ✅ CSS Modules (code splitting)
- ✅ Lazy loading ready
- ✅ Efficient re-renders (React memo potential)
- ✅ GSAP RAF (requestAnimationFrame)
- ✅ Debounced scroll events
- ✅ Optimized animations (transform/opacity)

### Future Optimizations
- [ ] React.lazy for route splitting
- [ ] Image lazy loading
- [ ] Service worker for caching
- [ ] Bundle analyzer
- [ ] CDN for assets

---

**This architecture ensures:**
- 🎯 Maintainability
- 🚀 Scalability
- ⚡ Performance
- 🎨 Consistency
- 🔧 Developer Experience
