import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { projectsData } from '../data/projects.js';

export default function ProjectsSection() {
  return (
    <section>
      <SectionHeading id="projects" title="Selected projects" subtitle="Technical systems & software" />

      <p className="text-xs text-[#54595d] italic mb-4">
        Archive of software platforms, campus utilities, and algorithmic prototypes built by Rakib Biswash.
      </p>

      {/* Wikipedia Projects Index Table */}
      <table className="wikitable mb-6">
        <thead>
          <tr>
            <th className="w-1/4">Project</th>
            <th className="w-1/6">Year</th>
            <th className="w-1/3">Core Stack</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {projectsData.map((project) => (
            <tr key={project.id}>
              <td>
                <a href={`#${project.id}`} className="font-bold text-[#0645ad] hover:underline">
                  {project.title}
                </a>
              </td>
              <td className="font-mono text-xs">{project.year}</td>
              <td className="text-xs font-mono">{project.technologies.slice(0, 4).join(", ")}</td>
              <td className="text-xs font-mono">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mr-2 text-[#0645ad] hover:underline">
                    [GitHub]
                  </a>
                )}
                {project.hasLiveDemo && project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#0645ad] hover:underline">
                    [Demo]
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Detailed Project Entries */}
      <div className="space-y-6">
        {projectsData.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="pb-5 border-b border-[#eaecf0] last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
              <h3 className="text-[16px] font-bold text-black">
                {project.title}
                <span className="font-normal text-gray-700"> — {project.subtitle}</span>
              </h3>
              <span className="text-xs font-mono text-gray-500">
                {project.year} · {project.category}
              </span>
            </div>

            <p className="text-[14px] text-[#202122] leading-relaxed mb-2">
              {project.description}
            </p>

            <div className="text-xs text-gray-800 mb-1.5 leading-relaxed">
              <strong className="text-black">Technologies:</strong>{" "}
              <span className="font-mono text-[12.5px] text-gray-800">
                {project.technologies.join(", ")}
              </span>
            </div>

            <div className="text-xs text-gray-800 mb-2 leading-relaxed">
              <strong className="text-black">Contribution:</strong>{" "}
              <span>{project.contribution}</span>
            </div>

            <div className="text-xs space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0645ad] hover:underline font-mono"
                >
                  [GitHub Repository ↗]
                </a>
              )}
              {project.hasLiveDemo && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0645ad] hover:underline font-mono"
                >
                  [Live Demonstration ↗]
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
