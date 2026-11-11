import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.js';

export function ThemeProvider({ children }) {
  // Mode can be 'light' (default) or 'dark'
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wiki-theme');
      if (saved === 'dark') {
        return 'dark';
      }
    }
    return 'light';
  });

  const resolvedTheme = themeMode;

  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [themeMode]);

  const selectTheme = (mode) => {
    const validMode = mode === 'dark' ? 'dark' : 'light';
    setThemeMode(validMode);
    try {
      localStorage.setItem('wiki-theme', validMode);
    } catch {
      // Storage access blocked or quota exceeded
    }
  };

  return (
    <ThemeContext.Provider value={{ themeMode, resolvedTheme, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
