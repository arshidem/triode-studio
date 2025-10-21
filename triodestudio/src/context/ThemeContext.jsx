// src/context/ThemeContext.jsx
/**
 * ThemeContext - Manages global dark/light theme state
 * Provides theme state and toggle function to all components
 * Persists theme preference in localStorage
 */

import React, { createContext, useContext, useState, useEffect } from "react";

// Create theme context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? true : false;
  });

  // Apply theme class to document root on mount and when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
