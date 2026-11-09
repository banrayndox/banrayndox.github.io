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
    { label: "Research & Interests", anchor: "#research" },
    { label: "Writing", anchor: "#writing" },
    { label: "Code", anchor: "#code" },
    { label: "Contact", anchor: "#contact" },
  ];

  const getHref = (anchor) => {
    return isHome ? anchor : `/${anchor}`;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-gray-200">
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Left: Name / Home Link */}
          <div>
            <Link
              to="/"
              className="text-base font-semibold tracking-tight text-gray-900 hover:text-blue-700 hover:no-underline"
            >
              Rakib Biswash
            </Link>
          </div>

          {/* Right: Minimal text links for desktop */}
          <nav className="hidden md:flex items-center gap-5 text-sm" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={getHref(item.anchor)}
                className="text-gray-600 hover:text-[#0645ad] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger toggle (minimal text toggle) */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sm px-2.5 py-1 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-3 border-t border-gray-100 flex flex-col space-y-2 text-sm bg-white" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={getHref(item.anchor)}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1 text-gray-700 hover:text-[#0645ad] hover:bg-gray-50 rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
