// src/user/hooks/useSEO.js
import { useEffect } from "react";

/**
 * Custom hook to dynamically manage SEO metadata per page.
 * Updates document.title and creates/updates meta description, keywords, og, and twitter tags.
 */
export const useSEO = ({ title, description, keywords, ogImage, ogUrl }) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    updateMetaTag('meta[name="description"]', "name", "description", description);
    updateMetaTag('meta[name="keywords"]', "name", "keywords", keywords);

    // 3. Open Graph Metadata
    updateMetaTag('meta[property="og:title"]', "property", "og:title", title);
    updateMetaTag('meta[property="og:description"]', "property", "og:description", description);
    updateMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);
    }
    if (ogUrl) {
      updateMetaTag('meta[property="og:url"]', "property", "og:url", ogUrl);
    }

    // 4. Twitter Card Metadata
    updateMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    updateMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    if (ogImage) {
      updateMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    }
  }, [title, description, keywords, ogImage, ogUrl]);
};

export default useSEO;
