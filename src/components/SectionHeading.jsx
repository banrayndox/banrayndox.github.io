import React from 'react';

/**
 * Minimalist section heading matching academic Wikipedia/William Falcon styling:
 * Crisp, clean, with subtle bottom border divider.
 */
export default function SectionHeading({ id, title, subtitle }) {
  return (
    <div id={id} className="pt-10 pb-3 mb-6 border-b border-gray-200 scroll-mt-14">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
          <a href={`#${id}`} className="hover:no-underline text-gray-900 hover:text-gray-700">
            {title}
          </a>
        </h2>
        {subtitle && (
          <span className="text-xs sm:text-sm text-gray-500 font-normal">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
