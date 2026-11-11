import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToTarget } from '../utils/scrollToSection.js';
import { useTheme } from '../utils/ThemeContext.js';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const appearanceMenuRef = useRef(null);

  const { themeMode, selectTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Academic", id: "academic" },
    { label: "Professional", id: "professional" },
    { label: "Projects", id: "projects" },
    { label: "Research", id: "research" },
    { label: "Competitions", id: "competitive-programming" },
    { label: "Code", id: "code" },
    { label: "Languages", id: "languages" },
  ];

  // Close appearance menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (appearanceMenuRef.current && !appearanceMenuRef.current.contains(event.target)) {
        setAppearanceOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToTarget(targetId, navigate, location.pathname);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 dark:bg-[#202122]/98 backdrop-blur-xs border-b border-[#a2a9b1] dark:border-[#54595d] shadow-2xs transition-colors duration-150">
      {/* Top Wikipedia Skin Meta Bar */}
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6 pt-2 pb-1.5 flex items-center justify-between text-xs text-[#54595d] dark:text-[#9aa0a6] border-b border-[#eaecf0] dark:border-[#3c4043]">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-black dark:text-white hover:no-underline font-serif font-bold text-sm cursor-pointer bg-transparent border-0 p-0"
          >
            Rakib's Wiki
          </button>
        </div>

        {/* Wikipedia Header Action Tabs & Appearance Menu */}
        <div className="flex items-center gap-3 font-sans">
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'about')}
            className="font-bold text-black dark:text-white border-b-2 border-[#0645ad] dark:border-[#6da8ff] pb-0.5 cursor-pointer bg-transparent border-t-0 border-x-0 p-0 text-xs"
          >
            Article
          </button>
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hover:underline text-[#0645ad] dark:text-[#6da8ff] cursor-pointer bg-transparent border-0 p-0 text-xs"
          >
            Talk
          </button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'writing')}
            className="hover:underline text-[#0645ad] dark:text-[#6da8ff] cursor-pointer bg-transparent border-0 p-0 text-xs"
          >
            Writing
          </button>

          <span className="text-gray-300 dark:text-gray-600">|</span>

          {/* Wikipedia Vector 2022 Appearance Dropdown */}
          <div className="relative" ref={appearanceMenuRef}>
            <button
              type="button"
              onClick={() => setAppearanceOpen(!appearanceOpen)}
              className="flex items-center gap-1 px-1.5 py-0.5 text-xs text-[#54595d] dark:text-[#c8ccd1] hover:text-black dark:hover:text-white border border-transparent hover:border-[#a2a9b1] dark:hover:border-[#54595d] rounded-xs cursor-pointer bg-transparent"
              title="Appearance settings"
              aria-label="Appearance settings"
              aria-expanded={appearanceOpen}
            >
              <span>Appearance</span>
              <span className="text-[9px]">▾</span>
            </button>

            {appearanceOpen && (
              <div className="absolute right-0 mt-1.5 w-40 bg-white dark:bg-[#202122] border border-[#a2a9b1] dark:border-[#54595d] shadow-lg rounded-xs p-3 z-50 text-xs font-sans">
                <div className="font-bold text-black dark:text-white text-xs border-b border-[#eaecf0] dark:border-[#3c4043] pb-1.5 mb-2.5">
                  Color mode
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#27292d] p-1 rounded-xs">
                    <input
                      type="radio"
                      name="wiki-theme"
                      value="light"
                      checked={themeMode === 'light'}
                      onChange={() => selectTheme('light')}
                      className="accent-[#0645ad] dark:accent-[#6da8ff] cursor-pointer"
                    />
                    <span className="text-[#202122] dark:text-[#eaecf0]">Light</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#27292d] p-1 rounded-xs">
                    <input
                      type="radio"
                      name="wiki-theme"
                      value="dark"
                      checked={themeMode === 'dark'}
                      onChange={() => selectTheme('dark')}
                      className="accent-[#0645ad] dark:accent-[#6da8ff] cursor-pointer"
                    />
                    <span className="text-[#202122] dark:text-[#eaecf0]">Dark</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-xs sm:text-[13px]">
        {/* Desktop Navigation Buttons */}
        <nav className="hidden md:flex items-center gap-4 text-gray-700 dark:text-[#c8ccd1]" aria-label="Article sections">
          {navLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-gray-700 dark:text-[#c8ccd1] hover:text-[#0645ad] dark:hover:text-[#6da8ff] hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs sm:text-[13px] font-normal transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Header Bar & Dropdown Toggle */}
        <div className="md:hidden flex items-center justify-between w-full">
          <span className="font-bold text-gray-900 dark:text-gray-100 text-xs uppercase tracking-wider">
            Jump to Section
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs px-2.5 py-1 border border-[#a2a9b1] dark:border-[#54595d] rounded-xs bg-gray-50 dark:bg-[#27292d] text-gray-800 dark:text-[#eaecf0] font-medium cursor-pointer active:bg-gray-200 dark:active:bg-[#3c4043]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle section navigation menu"
          >
            {mobileMenuOpen ? "[✕ Close]" : "[☰ Sections]"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#a2a9b1] dark:border-[#54595d] bg-[#f8f9fa] dark:bg-[#27292d] px-4 py-3 shadow-inner">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-left py-1.5 px-2 text-[#0645ad] dark:text-[#6da8ff] hover:underline hover:bg-gray-100 dark:hover:bg-[#202122] rounded cursor-pointer font-medium border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              >
                {item.label} →
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
