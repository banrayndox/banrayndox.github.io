import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.js';

export function ThemeProvider({ children }) {
  // Mode can be 'auto', 'light', or 'dark'
  // Auto is explicitly set as white/light as requested
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

    const applyTheme = () => {
      // 'auto' resolves to white ('light'); only explicit 'dark' mode renders dark
      const active = themeMode === 'dark' ? 'dark' : 'light';

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
