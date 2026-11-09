import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: "About", anchor: "#about" },
    { label: "Academic", anchor: "#academic" },
    { label: "Professional", anchor: "#professional" },
    { label: "Projects", anchor: "#projects" },
    { label: "Research", anchor: "#research" },
    { label: "Contests", anchor: "#competitive-programming" },
    { label: "News", anchor: "#news" },
    { label: "Writing", anchor: "#writing" },
    { label: "Code", anchor: "#code" },
    { label: "Contact", anchor: "#contact" },
  ];

  const getHref = (anchor) => {
    return isHome ? anchor : `/${anchor}`;
  };

  return (
    <header className="bg-white border-b border-[#a2a9b1]">
      {/* Top Wikipedia Skin Meta Bar */}
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6 pt-2 pb-1.5 flex items-center justify-between text-xs text-[#54595d] border-b border-[#eaecf0]">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-1.5 text-black hover:no-underline font-serif font-bold text-sm">
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
          <span className="font-bold text-black border-b-2 border-[#0645ad] pb-0.5">Article</span>
          <a href="#contact" className="hover:underline text-[#0645ad]">Talk</a>
          <span className="text-gray-300">|</span>
          <span className="font-bold text-black border-b-2 border-[#0645ad] pb-0.5">Read</span>
          <a
            href="https://github.com/banrayndox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[#0645ad]"
          >
            View source
          </a>
          <a href="#news" className="hover:underline text-[#0645ad]">History</a>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-xs sm:text-[13px]">
        {/* Desktop Quick Nav */}
        <nav className="hidden md:flex items-center gap-4 text-gray-700" aria-label="Article sections">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={getHref(item.anchor)}
              className="hover:text-[#0645ad] hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Name on mobile + Toggle */}
        <div className="md:hidden flex items-center justify-between w-full">
          <span className="font-bold text-gray-900">Contents</span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs px-2 py-0.5 border border-[#a2a9b1] rounded bg-gray-50 text-gray-800"
          >
            {mobileMenuOpen ? "[close]" : "[sections]"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#eaecf0] bg-[#f8f9fa] px-4 py-2">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={getHref(item.anchor)}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#0645ad] hover:underline"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
