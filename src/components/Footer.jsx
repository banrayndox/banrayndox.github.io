import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 pt-5 pb-12 border-t border-[#a2a9b1] text-xs text-[#54595d] font-sans">
      <div className="flex items-center justify-between gap-3">
        <p className="m-0 leading-relaxed">
          This page was last edited in November 2026.
        </p>
        <button
          onClick={scrollToTop}
          type="button"
          className="text-[#0645ad] hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs shrink-0"
        >
          ↑ Back to Top
        </button>
      </div>

      <div className="text-[11.5px] text-gray-500 pt-2 mt-2 border-t border-[#eaecf0]">
        <span>© 2026 Rakib B</span>
      </div>
    </footer>
  );
}
