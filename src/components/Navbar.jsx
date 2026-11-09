import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToTarget } from '../utils/scrollToSection.js';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Academic", id: "academic" },
    { label: "Professional", id: "professional" },
    { label: "Projects", id: "projects" },
    { label: "Research", id: "research" },
    { label: "Contests", id: "competitive-programming" },
    { label: "Writing", id: "writing" },
    { label: "Code", id: "code" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToTarget(targetId, navigate, location.pathname);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-xs border-b border-[#a2a9b1] shadow-2xs">
      {/* Top Wikipedia Skin Meta Bar */}
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6 pt-2 pb-1.5 flex items-center justify-between text-xs text-[#54595d] border-b border-[#eaecf0]">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'about')}
            className="flex items-center gap-1.5 text-black hover:no-underline font-serif font-bold text-sm cursor-pointer"
          >
            <span className="w-5 h-5 bg-[#202122] text-white flex items-center justify-center font-bold text-xs rounded-xs">
              W
            </span>
            <span>Rakib's Wiki</span>
          </Link>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <span className="italic hidden sm:inline">The Engineer's Knowledge Base</span>
        </div>

        {/* Wikipedia Header Action Tabs */}
        <div className="flex items-center gap-3 font-sans">
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'about')}
            className="font-bold text-black border-b-2 border-[#0645ad] pb-0.5 cursor-pointer bg-transparent border-t-0 border-x-0 p-0 text-xs"
          >
            Article
          </button>
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hover:underline text-[#0645ad] cursor-pointer bg-transparent border-0 p-0 text-xs"
          >
            Talk
          </button>
          <span className="text-gray-300">|</span>
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'about')}
            className="font-bold text-black border-b-2 border-[#0645ad] pb-0.5 cursor-pointer bg-transparent border-t-0 border-x-0 p-0 text-xs"
          >
            Read
          </button>
          <a
            href="https://github.com/banrayndox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[#0645ad] cursor-pointer"
          >
            View source ↗
          </a>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-xs sm:text-[13px]">
        {/* Desktop Navigation Buttons */}
        <nav className="hidden md:flex items-center gap-4 text-gray-700" aria-label="Article sections">
          {navLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-gray-700 hover:text-[#0645ad] hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs sm:text-[13px] font-normal transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Header Bar & Dropdown Toggle */}
        <div className="md:hidden flex items-center justify-between w-full">
          <span className="font-bold text-gray-900 text-xs uppercase tracking-wider">
            Jump to Section
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs px-2.5 py-1 border border-[#a2a9b1] rounded bg-gray-50 text-gray-800 font-medium cursor-pointer active:bg-gray-200"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle section navigation menu"
          >
            {mobileMenuOpen ? "[✕ Close]" : "[☰ Sections]"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#a2a9b1] bg-[#f8f9fa] px-4 py-3 shadow-inner">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-left py-1.5 px-2 text-[#0645ad] hover:underline hover:bg-gray-100 rounded cursor-pointer font-medium border border-transparent hover:border-gray-200"
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
