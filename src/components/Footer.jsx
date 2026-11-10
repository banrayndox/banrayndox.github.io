import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 pt-4 pb-12 text-xs text-[#54595d] font-sans">
      <div className="flex items-center justify-between gap-3">
        <span>© 2026 Rakib B</span>
        <button
          onClick={scrollToTop}
          type="button"
          className="text-[#0645ad] hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs shrink-0"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}
