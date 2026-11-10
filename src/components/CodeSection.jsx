import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { codeData } from '../data/code.js';

/**
 * Code & Open Source Section
 * Formatted as an authentic Wikipedia article with prose & structured lists (no tables).
 */
export default function CodeSection() {
  return (
    <section>
      <SectionHeading id="code" title="Code & open source" subtitle="Repositories & implementations" />

      <p className="text-[14.5px] text-[#202122] leading-relaxed mb-4">
        Rakib B maintains public software repositories, systems implementations, and algorithmic problem-solving archives under the GitHub handle{" "}
        <a
          href={codeData.githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] hover:underline font-mono font-bold"
        >
          @{codeData.githubUsername} ↗
        </a>.
        His codebase is structured around modularity, low overhead, and clear architecture.
      </p>

      {/* Selected Repositories - Article/Wiki List Format */}
      <h3 className="text-xs font-bold text-gray-900 mb-2.5 font-sans uppercase tracking-wider">
        Selected Software Repositories
      </h3>

      <ul className="space-y-4 list-disc pl-5 text-[#202122] mb-5">
        {codeData.curatedRepositories.map((repo) => (
          <li key={repo.name} className="leading-relaxed pl-1">
            <div>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold font-mono text-[#0645ad] hover:underline text-[14.5px]"
              >
                {repo.name} ↗
              </a>
              <span className="text-xs text-gray-500 font-mono ml-2">
                ({repo.language})
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-gray-800 mt-0.5 leading-relaxed">
              {repo.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
