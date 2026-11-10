import React from 'react';
// import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading.jsx';
// import { articlesData } from '../data/articles.js';

/**
 * Writing & Knowledge Section
 * Currently displaying an honest note as no formal write-ups have been published yet.
 * The article list template is preserved and commented out for quick future additions.
 */
export default function WritingSection() {
  return (
    <section>
      <SectionHeading id="writing" title="Writing & technical notes" subtitle="Publications & articles" />

      {/* Honest statement that no articles have been published yet */}
      <div className="p-3.5 bg-[#f8f9fa] dark:bg-[#27292d] border border-[#eaecf0] dark:border-[#3c4043] text-xs sm:text-[13.5px] text-gray-700 dark:text-[#c8ccd1] leading-relaxed rounded-xs">
        <p className="m-0 italic">
          Currently, Rakib B has not published any formal technical articles, tutorials, or research write-ups. Technical notes, architectural teardowns, and engineering observations will be archived here as they are published.
        </p>
      </div>

      {/*
        ========================================================================
        FUTURE WRITING ARCHIVE TEMPLATE (COMMENTED OUT FOR QUICK FUTURE ADDITION)
        When articles or write-ups are ready:
        1. Add the article object to src/data/articles.js
        2. Uncomment the archive block below.
        ========================================================================
      */}
      {/*
      <ul className="space-y-5 list-disc pl-5 text-[#202122] dark:text-[#eaecf0] mt-4">
        {articlesData.map((article) => (
          <li key={article.slug} className="leading-relaxed pl-1">
            <div>
              <Link
                to={`/articles/${article.slug}`}
                className="font-bold text-[#0645ad] dark:text-[#6da8ff] hover:underline text-[15px]"
              >
                {article.title}
              </Link>
              <span className="text-xs text-[#54595d] dark:text-[#9aa0a6] ml-2 font-sans">
                ({article.date}) — <em>{article.category}</em> · {article.readingTime}
              </span>
            </div>

            <p className="text-[13.5px] text-gray-800 dark:text-[#c8ccd1] mt-1 mb-1.5 leading-relaxed">
              {article.summary}
            </p>

            <div className="text-xs font-mono">
              <Link
                to={`/articles/${article.slug}`}
                className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
              >
                [Read Full Article]
              </Link>
            </div>
          </li>
        ))}
      </ul>
      */}
    </section>
  );
}
