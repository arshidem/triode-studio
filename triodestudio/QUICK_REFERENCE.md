# 🚀 Quick Reference Card

## 📍 Current Status
✅ **Development Server:** RUNNING on http://localhost:5174  
✅ **All Components:** Created and working  
✅ **All Pages:** Implemented  
✅ **Documentation:** Complete  

---

## ⚡ Quick Commands

```bash
# Development
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Check code

# Stop server
Ctrl + C         # In terminal
```

---

## 📂 Quick File Access

### Need to Edit Content?
- **Home page:** `src/user/pages/Home.jsx`
- **Services:** `src/user/pages/Services.jsx`
- **About:** `src/user/pages/About.jsx`
- **Contact:** `src/user/pages/Contact.jsx`

### Need to Change Styles?
- **Colors:** `src/styles/global.css` (CSS variables)
- **Component styles:** `src/user/styles/*.module.css`
- **Shared styles:** `src/shared/*.module.css`

### Need to Add Features?
- **New component:** `src/shared/ComponentName.jsx`
- **New page:** `src/user/pages/PageName.jsx`
- **New animation:** `src/animations/gsapAnimations.js`

---

## 🎨 Theme Customization

### Colors (in global.css)
```css
--primary: #4a90e2;    /* Main brand color */
--secondary: #667eea;  /* Accent color */
--bg: #f0f1f5;        /* Background */
--text: #052659;      /* Text color */
```

### Dark Mode
```css
.dark {
  --bg: #052659;      /* Dark background */
  --text: #f0f1f5;    /* Light text */
}
```

---

## 🎬 Animation Quick Guide

### GSAP (Scroll Animations)
```jsx
<div data-animate="fade-up">Animates on scroll</div>
<div data-animate="slide-left">Slides from left</div>
<div data-animate="scale">Scales up</div>
```

### Framer Motion (Hover/Click)
```jsx
<motion.div whileHover={{ scale: 1.1 }}>
  Hover me!
</motion.div>
```

---

## 🧩 Component Quick Use

### Hero
```jsx
import Hero from "../../shared/Hero";

<Hero
  title="Your Title"
  highlightText="Highlighted"
  subtitle="Subtitle text"
  ctaText="Button"
  ctaAction={() => {}}
/>
```

### Service Card
```jsx
import ServiceCard from "../../shared/ServiceCard";

<ServiceCard
  icon="🎨"
  title="Service"
  description="Description"
  index={0}
/>
```

### Contact Form
```jsx
import ContactForm from "../../shared/ContactForm";

<ContactForm />
```

---

## 🔄 Theme Toggle

### Access Theme
```jsx
import { useTheme } from '../context/ThemeContext';

const { isDarkMode, toggleTheme } = useTheme();
```

### Use in Component
```jsx
<button onClick={toggleTheme}>
  {isDarkMode ? 'Light' : 'Dark'}
</button>
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (max-width: 480px)  { /* Small mobile */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 1024px) { /* Tablet */ }
/* Default: Desktop */
```

---

## 🗂️ Project Structure (Quick)

```
src/
├── animations/        # GSAP animations
├── assets/           # Images, icons, videos
├── context/          # Theme context
├── shared/           # Reusable components
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   ├── TestimonialCard.jsx
│   ├── ContactForm.jsx
│   └── ThemeToggle.jsx
├── styles/           # Global CSS
├── user/
│   ├── components/   # Navbar, Footer
│   ├── pages/        # All pages
│   └── styles/       # Page CSS modules
└── App.jsx           # Main app
```

---

## 🎯 Common Tasks

### Add New Route
1. Create page in `src/user/pages/`
2. Add route in `App.jsx`
3. Add nav link in `Navbar.jsx`

### Change Logo
1. Edit `Navbar.jsx`
2. Update brand name

### Add Social Links
1. Edit `Footer.jsx`
2. Update social links array

### Customize Contact Info
1. Edit `Contact.jsx`
2. Update contact info array

---

## 📊 Current Features

✅ 5 Pages (Home, Services, Testimonials, About, Contact)  
✅ Dark/Light Mode  
✅ Responsive Design  
✅ Scroll Animations  
✅ Page Transitions  
✅ Form Validation  
✅ Mobile Menu  
✅ Premium UI/UX  

---

## 🔍 Finding Things

### Search for...
- **Theme colors:** Search "CSS variables" in global.css
- **Page content:** Check `src/user/pages/`
- **Animations:** Check `gsapAnimations.js`
- **Styles:** Check matching `.module.css` file

---

## 🚨 Troubleshooting

### Server won't start?
```bash
npx kill-port 5173
npm run dev
```

### Styles not updating?
- Restart dev server
- Clear browser cache
- Check CSS module import

### Animations not working?
- Check data-animate attribute
- Verify GSAP import
- Check browser console

---

## 📚 Documentation Files

| File | What's Inside |
|------|---------------|
| `COMPLETE_SUMMARY.md` | Full overview |
| `PROJECT_README.md` | Detailed guide |
| `SETUP_GUIDE.md` | Getting started |
| `ARCHITECTURE.md` | Technical details |
| `QUICK_REFERENCE.md` | This file |

---

## 🎉 Quick Start Checklist

- [x] Install dependencies
- [x] Start dev server
- [x] View in browser
- [ ] Customize colors
- [ ] Update content
- [ ] Add images
- [ ] Test features
- [ ] Deploy!

---

## 💡 Pro Tips

1. Use dark mode while coding (easier on eyes)
2. Test mobile view (browser dev tools)
3. Check console for errors
4. Save often (Ctrl+S)
5. Use Git for version control
6. Compress images before adding
7. Test in different browsers

---

**Need More Help?**  
Check the full documentation files listed above!

**Server Running:** http://localhost:5174  
**Status:** ✅ Ready to customize!
