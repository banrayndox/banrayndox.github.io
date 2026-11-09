import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesData } from '../data/articles.js';

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = articlesData.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Article Not Found</h1>
        <p className="text-gray-600 mb-6">
          The requested technical note does not exist or has been relocated.
        </p>
        <Link to="/" className="font-medium hover:underline">
          ← Return to Home
        </Link>
      </div>
    );
  }

  // Find related articles
  const relatedArticles = articlesData.filter((a) =>
    article.relatedSlugs?.includes(a.slug)
  );

  return (
    <article className="pt-6 pb-12 max-w-[850px] mx-auto">
      {/* Navigation Breadcrumb */}
      <div className="mb-6">
        <Link
          to="/#writing"
          className="text-xs sm:text-sm text-gray-600 hover:text-[#0645ad] hover:underline inline-flex items-center gap-1"
        >
          ← Return to Writing & Knowledge
        </Link>
      </div>

      {/* Metadata Header */}
      <header className="pb-6 mb-8 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-500 mb-2.5">
          <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded border border-gray-200 font-semibold">
            {article.category}
          </span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readingTime}</span>
          <span>·</span>
          <span>Author: Rakib Biswash</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 tracking-tight leading-snug mb-3">
          {article.title}
        </h1>

        <p className="text-base text-gray-700 leading-relaxed italic">
          {article.summary}
        </p>
      </header>

      {/* Table of Contents */}
      {article.tableOfContents && article.tableOfContents.length > 0 && (
        <aside className="mb-8 p-4 bg-gray-50/80 border border-gray-200 rounded-xs">
          <h2 className="text-xs uppercase font-mono tracking-wider text-gray-600 font-bold mb-2">
            Contents
          </h2>
          <ol className="space-y-1 text-sm list-decimal pl-5">
            {article.tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:underline text-gray-800 hover:text-[#0645ad]"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      )}

      {/* Main Content Body */}
      <div className="article-prose space-y-5 text-gray-850 text-[15.5px] leading-relaxed">
        {article.content.split('\n\n').map((paragraph, index) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return null;

          // H3 Heading with ID anchor
          if (trimmed.startsWith('### ')) {
            const match = trimmed.replace('### ', '').match(/^(.*?)(?:\\s*\\{#(.*)\\})?$/);
            const headingText = match ? match[1].replace(/\{#.*?\}/, '').trim() : trimmed.replace('### ', '');
            const headingId = trimmed.match(/\{#(.*?)\}/)?.[1] || '';
            return (
              <h3
                key={index}
                id={headingId}
                className="text-lg sm:text-xl font-bold text-gray-950 pt-5 pb-1 border-b border-gray-100 scroll-mt-20"
              >
                {headingText}
              </h3>
            );
          }

          // Code Block
          if (trimmed.startsWith('```') && trimmed.endsWith('```')) {
            const lines = trimmed.split('\n');
            const lang = lines[0].replace('```', '').trim();
            const code = lines.slice(1, -1).join('\n');
            return (
              <div key={index} className="my-4">
                {lang && (
                  <div className="text-[11px] font-mono text-gray-500 uppercase px-3 py-1 bg-gray-100 border border-b-0 border-gray-200 rounded-t">
                    {lang}
                  </div>
                )}
                <pre className={`m-0 ${lang ? 'rounded-t-none' : ''}`}>
                  <code>{code}</code>
                </pre>
              </div>
            );
          }

          // Blockquote
          if (trimmed.startsWith('> ')) {
            return (
              <blockquote
                key={index}
                className="border-l-3 border-gray-400 pl-4 py-1 italic text-gray-700 bg-gray-50/60 my-4"
              >
                {trimmed.replace(/^>\s*/gm, '')}
              </blockquote>
            );
          }

          // Numbered list or bulleted list
          if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
            const items = trimmed.split('\n');
            const isNumbered = trimmed.startsWith('1. ');
            const ListTag = isNumbered ? 'ol' : 'ul';
            return (
              <ListTag
                key={index}
                className={`pl-5 space-y-1.5 my-3 ${isNumbered ? 'list-decimal' : 'list-disc'}`}
              >
                {items.map((item, i) => (
                  <li key={i} className="text-gray-800 text-[15px]">
                    {item.replace(/^-\s*|^\d+\.\s*/, '')}
                  </li>
                ))}
              </ListTag>
            );
          }

          // Default paragraph with inline code formatting
          return (
            <p key={index} className="leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </div>

      {/* Related Notes */}
      {relatedArticles.length > 0 && (
        <section className="mt-12 pt-6 border-t border-gray-200">
          <h2 className="text-base font-semibold text-gray-950 mb-3">
            Related Technical Notes
          </h2>
          <ul className="space-y-2 text-sm">
            {relatedArticles.map((rel) => (
              <li key={rel.slug} className="flex items-baseline gap-2">
                <span className="text-gray-400">↳</span>
                <Link to={`/articles/${rel.slug}`} className="hover:underline font-medium">
                  {rel.title}
                </Link>
                <span className="text-xs text-gray-500 font-mono">({rel.category})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Back button */}
      <div className="mt-8 pt-4">
        <Link
          to="/#writing"
          className="text-sm font-medium hover:underline inline-flex items-center gap-1"
        >
          ← Back to All Notes & Overview
        </Link>
      </div>
    </article>
  );
}
