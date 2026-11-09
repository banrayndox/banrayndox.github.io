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

      {/* Languages & Technical Environment (Authentic Wikipedia Encyclopedic Prose) */}
      <div className="mt-5 pt-2 border-t border-[#eaecf0]">
        <h3 className="text-sm font-bold text-gray-900 mb-2 font-sans uppercase tracking-wider">
          Languages & Technical Environment
        </h3>
        <div className="space-y-2.5 text-xs sm:text-[14px] text-[#202122] leading-relaxed">
          <p>
            Biswash writes software primarily using <strong>C++</strong>, <strong>JavaScript</strong>, <strong>Python</strong>, <strong>C</strong>, and <strong>Java</strong>, structuring language selection around algorithmic efficiency and architectural requirements:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Algorithmic Problem Solving:</strong> Relies primarily on <strong>C++</strong> for competitive programming contests, leveraging the Standard Template Library (STL) data structures, predictable runtime, and deterministic memory control.
            </li>
            <li>
              <strong>Full-Stack Development:</strong> Constructs web applications and campus services using <strong>JavaScript</strong>, building modular user interfaces with React and server-side RESTful APIs with Node.js and Express.
            </li>
            <li>
              <strong>Data Engineering & Machine Learning:</strong> Employs <strong>Python</strong> across data engineering pipelines, focusing on dataset preprocessing, feature engineering, and data preparation leading up to model training.
            </li>
            <li>
              <strong>Systems Programming & Foundations:</strong> Conducts academic coursework and explores low-level computing concepts using <strong>C</strong> (POSIX socket networking and manual memory allocation) and <strong>Java</strong> (object-oriented software design and design patterns).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
