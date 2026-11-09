import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading.jsx';
import { articlesData } from '../data/articles.js';

/**
 * Writing & Knowledge Section
 * Formatted as an authentic Wikipedia bibliography / publications archive list
 * instead of a grid table.
 */
export default function WritingSection() {
  return (
    <section>
      <SectionHeading id="writing" title="Writing & technical notes" subtitle="Publications & articles" />

      <p className="text-xs text-[#54595d] italic mb-4">
        A curated archive of technical notes, architectural teardowns, and algorithmic tutorials. Each entry links to its dedicated reader page.
      </p>

      {/* Wikipedia Style Bibliography / Article Archive List */}
      <ul className="space-y-5 list-disc pl-5 text-[#202122]">
        {articlesData.map((article) => (
          <li key={article.slug} className="leading-relaxed pl-1">
            {/* Header: Title, Date, Category */}
            <div>
              <Link
                to={`/articles/${article.slug}`}
                className="font-bold text-[#0645ad] hover:underline text-[15px]"
              >
                {article.title}
              </Link>
              <span className="text-xs text-[#54595d] ml-2 font-sans">
                ({article.date}) — <em>{article.category}</em> · {article.readingTime}
              </span>
            </div>

            {/* Summary / Abstract */}
            <p className="text-[13.5px] text-gray-800 mt-1 mb-1.5 leading-relaxed">
              {article.summary}
            </p>

            {/* Direct Action Link */}
            <div className="text-xs font-mono">
              <Link
                to={`/articles/${article.slug}`}
                className="text-[#0645ad] hover:underline"
              >
                [Read Full Article ↗]
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
