import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-gray-200 text-xs text-gray-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <span>© 2026 Rakib Biswash. </span>
          <span className="text-gray-400">Built with curiosity and code.</span>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            type="button"
            className="text-gray-600 hover:text-[#0645ad] hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
