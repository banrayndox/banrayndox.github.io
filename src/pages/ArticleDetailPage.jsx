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
        <h1 className="text-2xl font-serif text-black mb-3">404: Article Not Found</h1>
        <p className="text-gray-600 mb-6 text-sm">
          The requested encyclopedic note does not exist in this archive.
        </p>
        <Link to="/" className="text-xs text-[#0645ad] hover:underline">
          ← Return to Main Page
        </Link>
      </div>
    );
  }

  const relatedArticles = articlesData.filter((a) =>
    article.relatedSlugs?.includes(a.slug)
  );

  return (
    <article className="pt-2 pb-12 max-w-[880px]">
      {/* Wikipedia Breadcrumbs */}
      <div className="mb-3 text-xs text-[#54595d]">
        <Link to="/" className="text-[#0645ad] hover:underline">
          Main Page
        </Link>
        <span className="mx-1.5">/</span>
        <a href="#writing" className="text-[#0645ad] hover:underline">
          Writing & technical notes
        </a>
        <span className="mx-1.5">/</span>
        <span className="text-gray-800">{article.title}</span>
      </div>

      {/* Wikipedia Article Heading */}
      <header className="pb-2 mb-4 border-b border-[#a2a9b1]">
        <h1 className="text-2xl sm:text-3xl font-serif font-normal text-black tracking-tight mb-1">
          {article.title}
        </h1>
        <div className="text-xs text-[#54595d] italic">
          From Rakib's Knowledge Base, the engineer's personal wiki
        </div>
      </header>

      {/* Encyclopedic Metadata Table */}
      <table className="wikitable mb-5">
        <tbody>
          <tr>
            <th className="w-1/4 text-xs">Subject Category</th>
            <td className="text-xs font-mono">{article.category}</td>
          </tr>
          <tr>
            <th className="text-xs">Author</th>
            <td className="text-xs">Rakib Biswash (Daffodil International University)</td>
          </tr>
          <tr>
            <th className="text-xs">Publication / Revision</th>
            <td className="text-xs font-mono">{article.date} ({article.readingTime})</td>
          </tr>
        </tbody>
      </table>

      {/* Summary Note */}
      <div className="p-3 bg-[#f8f9fa] border-l-3 border-[#a2a9b1] text-xs sm:text-[13.5px] italic text-gray-800 mb-5">
        <strong>Abstract:</strong> {article.summary}
      </div>

      {/* Wikipedia Table of Contents */}
      {article.tableOfContents && article.tableOfContents.length > 0 && (
        <aside className="wiki-toc my-4">
          <div className="wiki-toc-title">Contents</div>
          <ol className="space-y-1 text-xs list-decimal pl-5 text-gray-800">
            {article.tableOfContents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-[#0645ad] hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      )}

      {/* Main Body */}
      <div className="space-y-4 text-gray-900 text-xs sm:text-[14px] leading-relaxed">
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
                className="text-base sm:text-lg font-bold font-serif text-black pt-4 pb-1 border-b border-[#a2a9b1] scroll-mt-20"
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
              <div key={index} className="my-3">
                {lang && (
                  <div className="text-[11px] font-mono text-gray-500 uppercase px-2 py-0.5 bg-[#eaecf0] border border-b-0 border-[#a2a9b1]">
                    Source ({lang})
                  </div>
                )}
                <pre className="m-0 bg-white border border-[#a2a9b1] p-3 text-xs font-mono overflow-x-auto leading-relaxed">
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
                className="border-l-3 border-[#a2a9b1] pl-3 py-1 italic text-gray-800 bg-[#f8f9fa] my-3 text-xs sm:text-[13.5px]"
              >
                {trimmed.replace(/^>\s*/gm, '')}
              </blockquote>
            );
          }

          // Lists
          if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
            const items = trimmed.split('\n');
            const isNumbered = trimmed.startsWith('1. ');
            const ListTag = isNumbered ? 'ol' : 'ul';
            return (
              <ListTag
                key={index}
                className={`pl-5 space-y-1 my-2.5 ${isNumbered ? 'list-decimal' : 'list-disc'}`}
              >
                {items.map((item, i) => (
                  <li key={i} className="text-gray-800 text-xs sm:text-[13.5px]">
                    {item.replace(/^-\s*|^\d+\.\s*/, '')}
                  </li>
                ))}
              </ListTag>
            );
          }

          // Paragraph
          return (
            <p key={index} className="leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-10 pt-4 border-t border-[#a2a9b1]">
          <h2 className="text-base font-serif font-bold text-black mb-2">
            See also
          </h2>
          <ul className="space-y-1.5 text-xs">
            {relatedArticles.map((rel) => (
              <li key={rel.slug} className="flex items-baseline gap-1.5">
                <span className="text-gray-400 font-mono">•</span>
                <Link to={`/articles/${rel.slug}`} className="text-[#0645ad] hover:underline font-medium">
                  {rel.title}
                </Link>
                <span className="text-gray-500 font-mono">({rel.category})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Return button */}
      <div className="mt-8 pt-4 border-t border-[#eaecf0]">
        <Link to="/" className="text-xs text-[#0645ad] hover:underline font-mono">
          ← Return to Rakib Biswash (Main Wiki Article)
        </Link>
      </div>
    </article>
  );
}
