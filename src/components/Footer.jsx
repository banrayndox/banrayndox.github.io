import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 pt-6 pb-12 border-t border-[#a2a9b1] text-xs text-[#54595d] font-sans">
      <div className="flex flex-col sm:flex-row items-baseline justify-between gap-3 mb-2">
        <p className="m-0 leading-relaxed">
          This article was last updated in November 2026. Maintained statically as an engineer's personal knowledge archive and academic record.
        </p>
        <button
          onClick={scrollToTop}
          type="button"
          className="text-[#0645ad] hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs shrink-0"
        >
          ↑ Back to Top
        </button>
      </div>

      <div className="text-[11.5px] text-gray-500 flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 border-t border-[#eaecf0]">
        <span>© 2026 Rakib B</span>
        <span>·</span>
        <span>Built with curiosity, code, and static precision</span>
        <span>·</span>
        <a href="#about" className="text-[#0645ad] hover:underline">About this wiki</a>
        <span>·</span>
        <a href="#contact" className="text-[#0645ad] hover:underline">Contact</a>
      </div>
    </footer>
  );
}
