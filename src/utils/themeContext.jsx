import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.js';

export function ThemeProvider({ children }) {
  // Mode can be 'auto', 'light', or 'dark'
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wiki-theme');
      if (saved === 'light' || saved === 'dark' || saved === 'auto') {
        return saved;
      }
    }
    return 'auto';
  });

  const [resolvedTheme, setResolvedTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      let active = 'light';
      if (themeMode === 'dark') {
        active = 'dark';
      } else if (themeMode === 'light') {
        active = 'light';
      } else {
        // 'auto' - follow system
        active = mediaQuery.matches ? 'dark' : 'light';
      }

      setResolvedTheme(active);

      if (active === 'dark') {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
      }
    };

    applyTheme();

    const handleChange = () => {
      if (themeMode === 'auto') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  const selectTheme = (mode) => {
    setThemeMode(mode);
    try {
      localStorage.setItem('wiki-theme', mode);
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
