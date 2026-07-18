import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for route change + any framer-motion animation
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500); // adjust based on your animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
