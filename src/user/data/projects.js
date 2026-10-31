export const projects = [
  {
    slug: "kofind",
    screenshots: [
      {
        src: "/assets/projects/kofind-desktop.webp",
        thumbnail: "/assets/projects/kofind-desktop-640.webp",
        label: "Recent reports with demo items · desktop",
        alt: "KoFind homepage showing fictional lost-and-found sample reports",
        width: 1440,
        height: 1100,
        demo: true,
      },
      {
        src: "/assets/projects/kofind-mobile.webp",
        thumbnail: "/assets/projects/kofind-mobile-640.webp",
        label: "Recent reports with demo items · mobile",
        alt: "KoFind homepage showing fictional lost-and-found sample reports",
        width: 390,
        height: 1100,
        demo: true,
      },
    ],
    title: "KoFind",
    type: "Studio product exploration",
    category: "Lost & Found · Web App · UI/UX",
    summary:
      "A lost-and-found platform for reporting items, discovering possible matches, and helping belongings find their way home.",
    challenge:
      "Help people report lost or found belongings and discover relevant reports without a confusing search process.",
    approach:
      "Connect lost-and-found reporting, search filters, location controls, and account flows in a responsive web interface.",
    deliverables: [
      "Lost-and-found reporting interface",
      "Responsive screen layouts",
      "Search, location, and category filters",
    ],
    technology: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    service: "ui-ux-design",
  },
  {
    slug: "kofund",
    screenshots: [
      {
        src: "/assets/projects/kofund-dashboard-demo.webp",
        thumbnail: "/assets/projects/kofund-dashboard-demo-640.webp",
        label: "Community dashboard · demo data",
        alt: "KoFund dashboard with fictional community figures: 48 members, 48,750 rupees collected, 12,750 rupees expenses, and 36,000 rupees balance",
        width: 390,
        height: 1100,
        demo: true,
      },
      {
        src: "/assets/projects/kofund-mobile.webp",
        thumbnail: "/assets/projects/kofund-mobile-640.webp",
        label: "Sign-in screen · mobile",
        alt: "Sign-in screen · mobile captured from the running kofund interface",
        width: 390,
        height: 844,
      },
    ],
    title: "KoFund",
    type: "Studio product",
    category: "Mobile App · Community",
    summary:
      "A mobile project exploring contribution tracking and community fund management.",
    challenge:
      "Make contribution records and fund activity easier to organize and understand.",
    approach:
      "Group contribution tracking, account roles, and financial summaries into a mobile workflow.",
    deliverables: [
      "Contribution tracking flows",
      "Role-based interface design",
      "Fund summary screens",
    ],
    technology: ["Flutter", "Firebase", "Dart", "Provider"],
    service: "app-development",
  },
  {
    slug: "nike-ecommerce",
    screenshots: [
      {
        src: "/assets/projects/nike-desktop.webp",
        thumbnail: "/assets/projects/nike-desktop-640.webp",
        label: "Storefront home · desktop",
        alt: "Storefront home · desktop captured from the running nike-ecommerce interface",
        width: 1440,
        height: 960,
      },
      {
        src: "/assets/projects/nike-mobile.webp",
        thumbnail: "/assets/projects/nike-mobile-640.webp",
        label: "Storefront home · mobile",
        alt: "Storefront home · mobile captured from the running nike-ecommerce interface",
        width: 390,
        height: 844,
      },
    ],
    title: "Nike E-commerce Concept",
    type: "Independent concept · No brand affiliation",
    category: "Web Development · E-commerce",
    summary:
      "An independent store concept exploring product discovery, cart, and checkout interfaces.",
    challenge:
      "Connect product browsing and shopping tasks in a responsive e-commerce experience.",
    approach:
      "Explore catalog filtering, cart interactions, checkout, and product administration in a full-stack project.",
    deliverables: [
      "Responsive storefront concept",
      "Cart and checkout exploration",
      "Product management interface",
    ],
    technology: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    service: "web-development",
  },
];
