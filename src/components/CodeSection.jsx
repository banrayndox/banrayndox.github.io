import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading.jsx';
import { codeData } from '../data/code.js';

export default function CodeSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${codeData.githubUsername}/repos?sort=updated&per_page=8`
        );
        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            const formatted = data.map((repo) => ({
              name: repo.name,
              description: repo.description || "Public software repository.",
              language: repo.language || "Plain Text",
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              url: repo.html_url,
              updatedAt: new Date(repo.updated_at).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              }),
            }));
            setRepos(formatted);
            setUsingFallback(false);
          } else {
            setRepos(codeData.curatedRepositories);
            setUsingFallback(true);
          }
        }
      } catch {
        if (isMounted) {
          // Graceful fallback to verified repositories
          setRepos(codeData.curatedRepositories);
          setUsingFallback(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGithubRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section>
      <SectionHeading id="code" title="Code & Open Source" subtitle="Repositories & Systems" />

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {codeData.overview}
      </p>

      {/* GitHub Profile Banner Link */}
      <div className="mb-6 p-3 bg-gray-50 border border-gray-200 rounded-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm">
        <div>
          <span className="font-medium text-gray-900">GitHub Profile:</span>{" "}
          <span className="font-mono text-gray-700">@{codeData.githubUsername}</span>
        </div>
        <a
          href={codeData.githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline inline-flex items-center gap-1"
        >
          [View Profile on GitHub ↗]
        </a>
      </div>

      {/* Selected / Live Repositories */}
      <div className="mb-7">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-900">
            Repositories {loading ? "(Fetching from GitHub...)" : ""}
          </h3>
          {usingFallback && (
            <span className="text-xs text-gray-500 font-mono">
              [Archive Index]
            </span>
          )}
        </div>

        <div className="space-y-4">
          {repos.map((repo, idx) => (
            <div
              key={repo.name || idx}
              className="pb-3 border-b border-gray-100 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-[15px] font-semibold text-gray-900 hover:underline hover:text-[#0645ad] font-mono"
                >
                  {repo.name} ↗
                </a>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                  {repo.language && (
                    <span className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded border border-gray-200">
                      {repo.language}
                    </span>
                  )}
                  {repo.stars > 0 && <span>★ {repo.stars}</span>}
                  {repo.updatedAt && <span>Updated {repo.updatedAt}</span>}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {repo.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Programming Languages Breakdown */}
      <div className="mb-7">
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Languages & Everyday Primitives
        </h3>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-800">
          {codeData.languages.map((lang, idx) => (
            <li key={idx}>
              <strong className="text-gray-900 font-medium">{lang.name}:</strong>{" "}
              <span className="text-gray-700">{lang.context}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Personal Development Experiments */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Personal Development Experiments
        </h3>
        <div className="space-y-2">
          {codeData.experiments.map((exp, idx) => (
            <div key={idx} className="p-2.5 bg-gray-50/70 border border-gray-200 rounded-xs text-xs sm:text-sm">
              <span className="font-semibold text-gray-900">{exp.title}: </span>
              <span className="text-gray-700">{exp.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
