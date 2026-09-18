'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // Initialize theme on mount - read from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    // Apply theme to document and storage
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update state after DOM is updated
    requestAnimationFrame(() => {
      setDarkMode(isDark);
    });
  }, []);

  // Handle theme toggle changes
  useEffect(() => {
    if (darkMode !== null) {
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode: darkMode ?? false, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};