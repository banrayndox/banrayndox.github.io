import React from 'react';

/**
 * Wikipedia-style Section Heading with classic underline border
 */
export default function SectionHeading({ id, title, subtitle }) {
  return (
    <div id={id} className="pt-8 pb-1 mb-4 border-b border-[#a2a9b1] dark:border-[#54595d] scroll-mt-14 transition-colors duration-150">
      <h2 className="text-xl sm:text-2xl font-serif text-black dark:text-white tracking-normal">
        <span className="mw-headline">{title}</span>
        {subtitle && (
          <span className="text-xs sm:text-sm font-sans text-gray-500 dark:text-[#9aa0a6] font-normal ml-3">
            ({subtitle})
          </span>
        )}
      </h2>
    </div>
  );
}
