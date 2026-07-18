# Triode Studio — Premium Sticky Services Showcase

Build a premium, interactive **Services** section for the Triode Studio website. This section should not be a traditional services grid. Instead, it should be a scroll-driven storytelling experience inspired by Apple, Linear, Stripe, Framer, Notion, Vercel, and Figma.

The goal is to visually demonstrate each service while the user scrolls.

---

# Overall Layout

Desktop Layout (2 Columns)

Left Column (40%)
- Service Number
- Small Label
- Large Heading
- Description
- CTA Button

Right Column (60%)
- Premium Matte Black Laptop Mockup (Sticky)
- Floating Context Cards around the laptop
- Decorative background elements

The laptop remains sticky throughout the section.

The left-side content changes as the user scrolls.

---

# Sticky Scroll Behavior

The entire Services section should occupy approximately 500–600vh.

Each service represents one viewport (100vh).

As the user scrolls:

- Left content fades to the next service.
- Laptop remains fixed.
- Laptop screen transitions.
- Floating UI cards change.
- Decorative elements animate subtly.

The laptop itself NEVER changes position.

Only the content inside the screen and the floating UI cards change.

---

# IMPORTANT

Do NOT simply replace screenshots.

Each laptop screen should be built using actual HTML components (or layered SVG/HTML) so transitions feel alive.

Everything should feel like a real application.

---

# Floating Context Cards

Like the attached reference, every service has floating interface cards surrounding the laptop.

These are NOT random icons.

They should look like real dashboard widgets.

Example:

Instagram Card

Instagram Icon

Scheduled Post

2.4K Reach

Facebook Card

Facebook Icon

Engagement

1.8K

LinkedIn Card

New Leads

512

Google Ads Card

12 Active Campaigns

These cards should:

• Have rounded corners (18–20px)
• Soft shadow
• White / Off-white background
• Premium spacing
• Small icons
• Micro animations
• Float gently
• Never overlap important laptop content

Cards should animate with each service.

---

# Service 01

UI/UX Design

Laptop Screen

Display a premium Figma-inspired workspace.

Include

• Website Wireframes
• Design System
• Components
• Typography
• Color Palette
• Auto Layout
• Prototype Panel

Floating Cards

• Design System
• Components
• Typography
• Grid
• Auto Layout
• Prototype

Animations

Mouse cursor moves

Layers highlight

Components expand

Cards fade in

---

# Service 02

Web Development

Laptop Screen

Display

• VS Code
• React Project
• Next.js
• Browser Preview
• Terminal

Terminal

npm install

npm run build

✓ Build Successful

✓ Deploy Successful

Floating Cards

GitHub

Latest Commit

Deployment

Production Live

Performance

98/100

API

200 OK

Database

Connected

Browser Preview

Responsive

Animations

Typing code

Terminal updates

Browser refresh

Deploy success animation

---

# Service 03

Branding & Identity

Laptop Screen

Display

Logo Construction

Typography

Color Palette

Brand Guidelines

Business Card

Mockups

Floating Cards

Primary Logo

Logo Variations

Typography

Color Palette

Business Card

Brand Assets

Animations

Logo sketch

↓

Outline

↓

Vector

↓

Final Logo

Cards slide into place

---

# Service 04

Digital Marketing

Laptop Screen

Display

Analytics Dashboard

Campaign Overview

SEO Dashboard

Conversion Charts

Social Media Manager

Traffic Analytics

Floating Cards

Instagram

Scheduled Post

2.4K Reach

Facebook

Engagement

1.8K

LinkedIn

New Leads

512

Google Ads

12 Active Campaigns

SEO

#1 Ranking

Conversion Rate

Traffic

Revenue

Charts

Animations

Graphs animate upward

Numbers count

Cards slide

Progress bars grow

---

# Service 05

AI Solutions

Laptop Screen

Display

AI Assistant

Prompt Input

Generated Website

Generated UI

Automation Workflow

Generated Images

Floating Cards

Prompt

Generate Website

Workflow

Automation

Image Generated

Website Generated

GPT Response

Code Generated

Automation Complete

Animations

Prompt typing

Generating...

Result appears

Cards animate one after another

---

# Transition Animation

When the next service becomes active

Old Service

Opacity

1 → 0

Y

0 → -30px

Scale

1 → 0.98

Laptop Screen

Crossfade

Blur

Slight zoom

Floating Cards

Fade Out

↓

Slide Down

↓

New Cards Fade In

↓

Slide Up

New Service

Opacity

0 → 1

Y

30px → 0

Scale

0.98 → 1

Duration

700ms

Ease

easeInOut

---

# Laptop Animation

Laptop should never feel static.

Add

Floating

translateY(-5px)

↓

translateY(5px)

Loop

8 seconds

Light Reflection

Soft glossy reflection moving across the display

Duration

8 seconds

Infinite

Subtle

---

# Floating Cards Animation

Every floating card

Float

±8px

Rotate

±2°

Opacity

95%

Random delay

0–400ms

Never synchronized

Cards should feel alive.

---

# Visual Design

Theme

Background

Warm Off White

#F5F3EF

Laptop

Matte Black

#151515

Cards

White

Neutral Gray

Accent

Brand Blue

#3B82F6

Style

Apple

Linear

Framer

Notion

Vercel

Premium

Editorial

Luxury

Minimal

---

# Responsive

Desktop

Two-column sticky layout

Tablet

Laptop on top

Content below

Reduced floating cards

Mobile

Disable sticky scrolling

Each service becomes its own section

Laptop above

Content below

Maintain all transitions

---

# Technical Requirements

Framework

Next.js

React

TypeScript

Tailwind CSS

Framer Motion

Use Intersection Observer or Framer Motion scroll hooks.

Do NOT use videos.

Do NOT use GIFs.

Do NOT use image sequences.

Build every laptop screen using reusable React components.

Build every floating card using reusable components.

Transitions should be GPU accelerated.

Animate only

opacity

transform

translate3d

rotate

scale

Maintain 60 FPS.

The final result should feel like a premium interactive product showcase where the laptop remains fixed while each service comes to life with animated UI, contextual floating widgets, and smooth storytelling as the user scrolls.