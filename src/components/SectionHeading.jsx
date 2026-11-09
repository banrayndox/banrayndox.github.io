import React from 'react';

/**
 * Wikipedia-style Section Heading with underline and classic [edit] tag
 */
export default function SectionHeading({ id, title, subtitle }) {
  return (
    <div id={id} className="pt-8 pb-1 mb-4 border-b border-[#a2a9b1] scroll-mt-14">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl sm:text-2xl font-serif text-black tracking-normal">
          <span className="mw-headline">{title}</span>
          {subtitle && (
            <span className="text-xs sm:text-sm font-sans text-gray-500 font-normal ml-3">
              ({subtitle})
            </span>
          )}
        </h2>
        <span className="text-xs font-sans font-normal text-gray-500 select-none">
          <a href={`#${id}`} className="text-[#0645ad] hover:underline">[edit]</a>
        </span>
      </div>
    </div>
  );
}
