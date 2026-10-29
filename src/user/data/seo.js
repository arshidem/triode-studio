import { services } from "./services";
import { projects } from "./projects";
export const siteOrigin = "https://triodestudio.vercel.app";
export const staticPaths = [
  "/",
  "/services",
  "/portfolio",
  "/posters",
  "/about",
  "/contact",
  "/privacy",
  ...services.map((s) => `/services/${s.slug}`),
  ...projects.map((p) => `/portfolio/${p.slug}`),
];
const pages = {
  "/": [
    "Triode Studio | Websites, Apps & Creative Services in Kerala",
    "A three-person digital studio in Kerala building websites, mobile apps, brand identities, marketing campaigns, posters, and AI videos.",
  ],
  "/services": [
    "Digital Services | Triode Studio, Kerala",
    "Explore web and app development, UI/UX, branding, digital marketing, AI video production, and poster design from Triode Studio.",
  ],
  "/portfolio": [
    "Projects & Design Explorations | Triode Studio",
    "Explore Triode Studio products, independent web concepts, and creative poster work, with clear project context and design decisions.",
  ],
  "/posters": [
    "Poster & Graphic Design Collection | Triode Studio",
    "Browse poster and graphic design explorations across product, hospitality, fashion, and other industries.",
  ],
  "/about": [
    "Meet the Three-Founder Team | Triode Studio",
    "Meet Arshid, Musthafa, and Salman Faris: the development, creative, and marketing team behind Triode Studio in Kerala.",
  ],
  "/contact": [
    "Discuss Your Project | Contact Triode Studio",
    "Tell Triode Studio about your website, app, branding, marketing, poster, or AI video project. Contact our Kerala team by email, phone, or WhatsApp.",
  ],
  "/privacy": [
    "Privacy | Triode Studio",
    "How Triode Studio handles project enquiries and website information, and how to contact the team about your data.",
  ],
};
export function getPageMetadata(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const service = services.find((s) => path === `/services/${s.slug}`);
  const project = projects.find((p) => path === `/portfolio/${p.slug}`);
  const page =
    pages[path] ||
    (service
      ? [`${service.title} in Kerala | Triode Studio`, service.description]
      : project
        ? [`${project.title} | Triode Studio`, project.summary]
        : [
            "Page Not Found | Triode Studio",
            "Find your way back to Triode Studio services, projects, or contact information.",
          ]);
  const url = siteOrigin + (path === "/" ? "/" : path);
  const organization = {
    "@type": "Organization",
    "@id": `${siteOrigin}/#organization`,
    name: "Triode Studio",
    url: siteOrigin,
    logo: `${siteOrigin}/assets/logo/Triode%20SVG.svg`,
    email: "triodewebstudio@gmail.com",
    telephone: "+918157875032",
    areaServed: { "@type": "Place", name: "Kerala, India" },
  };
  const entities = [organization];
  if (service)
    entities.push({
      "@type": "Service",
      name: service.title,
      description: service.description,
      url,
      provider: { "@id": organization["@id"] },
    });
  if (path === "/services")
    services.forEach((s) =>
      entities.push({
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `${siteOrigin}/services/${s.slug}`,
        provider: { "@id": organization["@id"] },
      }),
    );
  if (project)
    entities.push({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url,
      creator: { "@id": organization["@id"] },
    });
  return {
    title: page[0],
    description: page[1],
    url,
    image: `${siteOrigin}/social-card.png`,
    robots: staticPaths.includes(path) ? "index, follow" : "noindex, follow",
    jsonLd: { "@context": "https://schema.org", "@graph": entities },
  };
}
