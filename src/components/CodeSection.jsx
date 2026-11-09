import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { codeData } from '../data/code.js';

/**
 * 100% Full Static Code & Repositories Section
 * No network delays, no dynamic fetch spinners, no external API rate-limit dependencies.
 */
export default function CodeSection() {
  return (
    <section>
      <SectionHeading id="code" title="Code & open source" subtitle="Repositories & implementations" />

      <p className="text-[14px] text-[#202122] leading-relaxed mb-4">
        {codeData.overview} Software repositories and algorithmic implementations are maintained publicly under the GitHub handle{" "}
        <a
          href={codeData.githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] hover:underline font-mono font-bold"
        >
          @{codeData.githubUsername}
        </a>.
      </p>

      {/* Wikipedia Style Repositories Table */}
      <h3 className="text-sm font-bold text-gray-900 mb-2">
        Selected Software Repositories
      </h3>
      <table className="wikitable mb-6">
        <thead>
          <tr>
            <th className="w-1/4">Repository</th>
            <th className="w-1/6">Language</th>
            <th>Description & Topics</th>
            <th className="w-1/6">Link</th>
          </tr>
        </thead>
        <tbody>
          {codeData.curatedRepositories.map((repo) => (
            <tr key={repo.name}>
              <td className="font-bold font-mono text-xs">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0645ad] hover:underline"
                >
                  {repo.name} ↗
                </a>
              </td>
              <td className="font-mono text-xs">{repo.language}</td>
              <td className="text-xs">
                <div className="text-gray-900 mb-1">{repo.description}</div>
                <div className="flex flex-wrap gap-1">
                  {repo.topics.map((t) => (
                    <span key={t} className="bg-white border border-[#c8ccd1] text-[10.5px] px-1 py-0.2 rounded font-mono text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </td>
              <td className="font-mono text-xs">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0645ad] hover:underline whitespace-nowrap"
                >
                  [GitHub ↗]
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Programming Languages & Tooling (Wikipedia Style with Language as Subject) */}
      <div className="mt-4 pt-1">
        <h3 className="text-xs font-bold text-gray-900 mb-2 font-sans uppercase tracking-wider">
          Programming Languages & Tooling
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-xs text-gray-800 leading-relaxed">
          {codeData.languages.map((lang, idx) => (
            <li key={idx}>
              <strong className="text-gray-950 font-semibold">{lang.name}</strong> — {lang.context}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
