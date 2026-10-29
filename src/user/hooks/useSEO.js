import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageMetadata } from "../data/seo";
export default function useSEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getPageMetadata(pathname);
    document.title = meta.title;
    const setMeta = (attribute, key, content) => {
      let node = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!node) {
        node = document.createElement("meta");
        node.setAttribute(attribute, key);
        document.head.append(node);
      }
      node.content = content;
    };
    setMeta("name", "description", meta.description);
    setMeta("name", "robots", meta.robots);
    for (const [key, value] of Object.entries({
      title: meta.title,
      description: meta.description,
      url: meta.url,
      image: meta.image,
      type: "website",
      site_name: "Triode Studio",
    }))
      setMeta("property", `og:${key}`, value);
    for (const [key, value] of Object.entries({
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      image: meta.image,
    }))
      setMeta("name", `twitter:${key}`, value);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = meta.url;
    let schema = document.getElementById("jsonLd-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.id = "jsonLd-schema";
      document.head.append(schema);
    }
    schema.textContent = JSON.stringify(meta.jsonLd);
  }, [pathname]);
}
