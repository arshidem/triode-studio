// src/user/hooks/useSEO.js
import { useEffect } from "react";

/**
 * Custom hook to dynamically manage SEO metadata per page.
 * Updates document.title and creates/updates meta description, keywords, og, and twitter tags.
 */
export const useSEO = ({ title, description, keywords, ogImage, ogUrl, jsonLd }) => {
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

    // Helper function to update or create link tags (for canonical link)
    const updateLinkTag = (rel, hrefValue) => {
      if (!hrefValue) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", hrefValue);
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
    const currentUrl = ogUrl || window.location.origin + window.location.pathname;
    updateMetaTag('meta[property="og:url"]', "property", "og:url", currentUrl);
    
    // Canonical link
    updateLinkTag("canonical", currentUrl);

    // 4. Twitter Card Metadata
    updateMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    updateMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    if (ogImage) {
      updateMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    }

    // 5. JSON-LD Structured Data
    let scriptTag = document.getElementById("jsonLd-schema");
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "jsonLd-schema";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    // Cleanup function when unmounting or parameters change
    return () => {
      const scriptToRemove = document.getElementById("jsonLd-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, ogImage, ogUrl, jsonLd]);
};

export default useSEO;
