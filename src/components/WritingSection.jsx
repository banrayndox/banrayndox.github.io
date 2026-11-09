import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading.jsx';
import { articlesData } from '../data/articles.js';

export default function WritingSection() {
  return (
    <section>
      <SectionHeading id="writing" title="Writing & technical notes" subtitle="Publications & articles" />

      <p className="text-xs text-[#54595d] italic mb-3">
        Technical notes, system teardowns, and algorithmic tutorials authored by Rakib Biswash. Each article has a dedicated reader page.
      </p>

      {/* Wikipedia Style Articles Table */}
      <table className="wikitable mb-4">
        <thead>
          <tr>
            <th className="w-1/2">Title & Summary</th>
            <th className="w-1/4">Category</th>
            <th className="w-1/6">Date</th>
            <th>Article Link</th>
          </tr>
        </thead>
        <tbody>
          {articlesData.map((article) => (
            <tr key={article.slug}>
              <td>
                <Link
                  to={`/articles/${article.slug}`}
                  className="font-bold text-[#0645ad] hover:underline block mb-0.5 text-xs sm:text-[13.5px]"
                >
                  {article.title}
                </Link>
                <span className="text-xs text-gray-600 block line-clamp-2">
                  {article.summary}
                </span>
              </td>
              <td className="text-xs font-mono text-gray-700">{article.category}</td>
              <td className="text-xs font-mono whitespace-nowrap text-gray-600">{article.date}</td>
              <td className="text-xs font-mono whitespace-nowrap">
                <Link
                  to={`/articles/${article.slug}`}
                  className="text-[#0645ad] hover:underline font-semibold"
                >
                  [Read Article ↗]
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
