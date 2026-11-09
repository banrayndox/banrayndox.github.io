import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading.jsx';
import { articlesData } from '../data/articles.js';

export default function WritingSection() {
  const [activeInlineArticle, setActiveInlineArticle] = useState(null);

  const toggleInline = (slug) => {
    setActiveInlineArticle(activeInlineArticle === slug ? null : slug);
  };

  return (
    <section>
      <SectionHeading id="writing" title="Writing & technical notes" subtitle="Publications & articles" />

      <p className="text-xs text-[#54595d] italic mb-3">
        Technical notes, system teardowns, and algorithmic tutorials authored by Rakib Biswash.
      </p>

      {/* Wikipedia Style Articles Table */}
      <table className="wikitable mb-4">
        <thead>
          <tr>
            <th className="w-1/2">Title</th>
            <th className="w-1/4">Category</th>
            <th className="w-1/6">Date</th>
            <th>Read</th>
          </tr>
        </thead>
        <tbody>
          {articlesData.map((article) => (
            <tr key={article.slug}>
              <td>
                <span className="font-bold text-gray-900 block mb-0.5">
                  {article.title}
                </span>
                <span className="text-xs text-gray-600 block line-clamp-1">
                  {article.summary}
                </span>
              </td>
              <td className="text-xs font-mono">{article.category}</td>
              <td className="text-xs font-mono whitespace-nowrap">{article.date}</td>
              <td className="text-xs font-mono whitespace-nowrap">
                <button
                  type="button"
                  onClick={() => toggleInline(article.slug)}
                  className="text-[#0645ad] hover:underline cursor-pointer bg-transparent border-0 p-0 mr-2"
                >
                  [{activeInlineArticle === article.slug ? "Close" : "Expand"}]
                </button>
                <Link
                  to={`/articles/${article.slug}`}
                  className="text-[#0645ad] hover:underline"
                >
                  [Page ↗]
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Inline Expanded Article Viewer (100% Static) */}
      {activeInlineArticle && (() => {
        const article = articlesData.find((a) => a.slug === activeInlineArticle);
        if (!article) return null;

        return (
          <div className="p-4 bg-[#f8f9fa] border border-[#a2a9b1] rounded-xs my-4">
            <div className="flex items-center justify-between border-b border-[#a2a9b1] pb-2 mb-3">
              <div>
                <span className="text-xs font-mono uppercase bg-white border border-[#a2a9b1] px-1.5 py-0.5 rounded mr-2">
                  {article.category}
                </span>
                <span className="font-bold text-base text-black">{article.title}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveInlineArticle(null)}
                className="text-xs text-[#0645ad] hover:underline cursor-pointer font-mono"
              >
                [Close View]
              </button>
            </div>

            <div className="text-xs text-gray-600 mb-3 font-mono">
              Published: {article.date} · Reading time: {article.readingTime} · Author: Rakib Biswash
            </div>

            {/* Table of Contents */}
            {article.tableOfContents && (
              <div className="wiki-toc my-3">
                <div className="wiki-toc-title">Article Outline</div>
                <ul className="text-xs space-y-0.5 list-decimal pl-5">
                  {article.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-[#0645ad] hover:underline">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content paragraphs */}
            <div className="space-y-3 text-xs sm:text-[13.5px] leading-relaxed text-[#202122] mt-3">
              {article.content.split('\n\n').map((para, i) => {
                const t = para.trim();
                if (!t) return null;
                if (t.startsWith('### ')) {
                  const heading = t.replace('### ', '').replace(/\{#.*?\}/, '').trim();
                  return <h4 key={i} className="font-bold text-sm text-black pt-2 border-b border-[#eaecf0] pb-0.5">{heading}</h4>;
                }
                if (t.startsWith('```') && t.endsWith('```')) {
                  const code = t.split('\n').slice(1, -1).join('\n');
                  return (
                    <pre key={i} className="my-2 bg-white border border-[#a2a9b1] p-2 text-xs font-mono overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  );
                }
                if (t.startsWith('- ') || t.startsWith('1. ')) {
                  const items = t.split('\n');
                  return (
                    <ul key={i} className="list-disc pl-5 space-y-0.5">
                      {items.map((it, idx) => (
                        <li key={idx}>{it.replace(/^-\s*|^\d+\.\s*/, '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{t}</p>;
              })}
            </div>
          </div>
        );
      })()}
    </section>
  );
}
