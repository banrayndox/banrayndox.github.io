import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading.jsx';
import { articlesData } from '../data/articles.js';

export default function WritingSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(articlesData.map((a) => a.category))];

  const filteredArticles = selectedCategory === "All"
    ? articlesData
    : articlesData.filter((a) => a.category === selectedCategory);

  return (
    <section>
      <SectionHeading
        id="writing"
        title="Writing & Knowledge"
        subtitle="Technical Notes & Tutorials"
      />

      <p className="text-sm text-gray-600 mb-4 italic">
        A repository of engineering notes, system teardowns, and algorithmic analysis. Each note has a dedicated readable page.
      </p>

      {/* Category Filter Pills (Minimal academic style) */}
      <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs">
        <span className="text-gray-500 mr-1">Filter:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              selectedCategory === cat
                ? "bg-gray-900 text-white font-medium"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div className="space-y-6">
        {filteredArticles.map((article) => (
          <article
            key={article.slug}
            className="pb-5 border-b border-gray-100 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-base sm:text-[17px] font-semibold text-gray-950">
                <Link
                  to={`/articles/${article.slug}`}
                  className="hover:underline text-gray-950 hover:text-[#0645ad]"
                >
                  {article.title}
                </Link>
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 shrink-0">
                <span className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded border border-gray-200">
                  {article.category}
                </span>
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readingTime}</span>
              </div>
            </div>

            <p className="text-[14.5px] text-gray-700 leading-relaxed mb-2">
              {article.summary}
            </p>

            <div className="text-xs">
              <Link
                to={`/articles/${article.slug}`}
                className="font-medium hover:underline inline-flex items-center gap-1"
              >
                [Read Full Note →]
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
