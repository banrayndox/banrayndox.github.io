import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { projectsData } from '../data/projects.js';

/**
 * ProjectsSection
 * Formatted as an authentic Wikipedia biographical project dossier with formal entries.
 * Avoids rigid table grids while maintaining a formal, structured encyclopedia format.
 */
export default function ProjectsSection() {
  return (
    <section>
      <SectionHeading id="projects" title="Selected projects" subtitle="Technical systems & software" />

      <p className="text-[14.5px] text-[#202122] leading-relaxed mb-5">
        Rakib Biswash has developed and contributed to several software systems, ranging from full-stack university coordination tools and retrieval-augmented generation (RAG) campus assistants to low-level POSIX socket servers.
      </p>

      <div className="space-y-6">
        {projectsData.map((project, idx) => (
          <article
            key={project.id}
            id={project.id}
            className="pb-5 border-b border-[#eaecf0] last:border-b-0 scroll-mt-14"
          >
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-[15px] font-bold text-[#202122] font-sans">
                <span className="text-gray-500 font-normal mr-1.5 font-mono">3.{idx + 1}</span>
                <span>{project.title}</span>
                <span className="text-xs font-normal text-gray-600 font-serif italic ml-2">
                  — {project.subtitle}
                </span>
              </h3>
              <div className="text-xs text-gray-500 font-mono self-start sm:self-auto">
                ({project.year})
              </div>
            </div>

            {/* Factual Description */}
            <p className="text-xs sm:text-[13.5px] text-[#202122] leading-relaxed mb-2.5">
              {project.description}
            </p>

            {/* Technical Contribution & Architecture */}
            <div className="text-xs sm:text-[13px] text-gray-800 leading-relaxed mb-2.5 bg-[#f8f9fa] border-l-[3px] border-[#a2a9b1] pl-3 py-1.5">
              <span className="font-semibold text-gray-950 font-sans">Architecture & Implementation: </span>
              <span>{project.contribution}</span>
            </div>

            {/* Technologies & External References */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs pt-1 border-t border-[#f0f2f5]">
              <div className="text-gray-700 font-mono text-[11.5px] leading-relaxed">
                <span className="text-gray-500 font-sans font-medium mr-1.5">Tech stack:</span>
                <span>{project.technologies.join(" · ")}</span>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0645ad] hover:underline font-bold"
                  >
                    [Source Code ↗]
                  </a>
                )}
                {project.hasLiveDemo && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0645ad] hover:underline font-bold"
                  >
                    [Live Deployment ↗]
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
