import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { projectsData } from '../data/projects.js';

export default function ProjectsSection() {
  return (
    <section>
      <SectionHeading id="projects" title="Selected Projects" subtitle="Research & Systems Archive" />

      <p className="text-sm text-gray-600 mb-6 italic">
        A text-based archive of software systems, campus tools, and algorithmic prototypes.
      </p>

      <div className="space-y-8">
        {projectsData.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="pb-7 border-b border-gray-100 last:border-b-0 last:pb-0"
          >
            {/* Title & Tagline */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
              <h3 className="text-base sm:text-[17px] font-semibold text-gray-900">
                {project.title}
                <span className="font-normal text-gray-600"> — {project.subtitle}</span>
              </h3>
              <span className="text-xs font-mono text-gray-500 shrink-0">
                {project.category} · {project.year}
              </span>
            </div>

            {/* Description */}
            <p className="text-[14.5px] text-gray-800 leading-relaxed mb-2.5">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="text-xs sm:text-sm text-gray-700 mb-2 leading-relaxed">
              <strong className="text-gray-900 font-medium">Technologies:</strong>{" "}
              <span className="font-mono text-[13px] text-gray-800">
                {project.technologies.join(", ")}
              </span>
            </div>

            {/* Contribution */}
            <div className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed">
              <strong className="text-gray-900 font-medium">My Contribution:</strong>{" "}
              <span>{project.contribution}</span>
            </div>

            {/* Minimalist Hyperlinks: [GitHub] [Live Demo] */}
            <div className="text-xs sm:text-sm space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  [GitHub]
                </a>
              )}
              {project.hasLiveDemo && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  [Live Demo]
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
