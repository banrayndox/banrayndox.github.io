import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading.jsx';
import { projectsData } from '../data/projects.js';

export default function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      if (projectsData.some((p) => p.id === hashId)) {
        return { [hashId]: true };
      }
    }
    return {};
  });

  // Listen for hashchange events to auto-expand targeted project
  useEffect(() => {
    const onHashChange = () => {
      const hashId = window.location.hash.replace('#', '');
      if (projectsData.some((p) => p.id === hashId)) {
        setExpandedProjects((prev) => ({ ...prev, [hashId]: true }));
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const all = {};
    projectsData.forEach((p) => {
      all[p.id] = true;
    });
    setExpandedProjects(all);
  };

  const collapseAll = () => {
    setExpandedProjects({});
  };

  const allExpanded = projectsData.length > 0 && projectsData.every((p) => expandedProjects[p.id]);

  return (
    <section>
      <SectionHeading id="projects" title="Selected projects" subtitle="Technical systems & software" />

      {/* Wikipedia Section Introduction & Toggle Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <p className="text-xs text-[#54595d] italic m-0">
          Archive of software systems and algorithmic prototypes. Click any project to expand its technical dossier.
        </p>
        <button
          type="button"
          onClick={allExpanded ? collapseAll : expandAll}
          className="text-xs text-[#0645ad] hover:underline cursor-pointer bg-transparent border-0 p-0 self-start sm:self-auto font-mono whitespace-nowrap"
        >
          [{allExpanded ? "Collapse All ▲" : "Expand All ▼"}]
        </button>
      </div>

      {/* Expandable Wikipedia Project Dossier Table */}
      <div className="overflow-x-auto">
        <table className="wikitable mb-4">
          <thead>
            <tr>
              <th className="w-2/5">Project & Subtitle</th>
              <th className="w-1/6">Year</th>
              <th className="w-1/4">Category</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project) => {
              const isExpanded = !!expandedProjects[project.id];
              return (
                <React.Fragment key={project.id}>
                  {/* Summary Header Row */}
                  <tr
                    id={project.id}
                    className={`transition-colors cursor-pointer ${
                      isExpanded ? "bg-[#eaecf0]/60" : "hover:bg-gray-50"
                    }`}
                    onClick={() => toggleProject(project.id)}
                  >
                    <td>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProject(project.id);
                        }}
                        className="font-bold text-[#0645ad] hover:underline cursor-pointer text-left bg-transparent border-0 p-0 text-xs sm:text-[13.5px]"
                      >
                        <span className="font-mono text-gray-500 mr-1.5 select-none">
                          {isExpanded ? "▼" : "▶"}
                        </span>
                        {project.title}
                      </button>
                      <span className="block text-xs text-gray-600 mt-0.5 leading-snug">
                        {project.subtitle}
                      </span>
                    </td>
                    <td className="font-mono text-xs whitespace-nowrap text-gray-700">
                      {project.year}
                    </td>
                    <td className="text-xs text-gray-700">
                      {project.category}
                    </td>
                    <td className="text-xs font-mono text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProject(project.id);
                        }}
                        className="text-[#0645ad] hover:underline cursor-pointer bg-transparent border-0 p-0 font-medium"
                      >
                        [{isExpanded ? "Collapse ▲" : "Expand Details ▼"}]
                      </button>
                    </td>
                  </tr>

                  {/* Expanded Detail Panel Row */}
                  {isExpanded && (
                    <tr className="bg-[#f8f9fa] border-b-2 border-[#a2a9b1]">
                      <td colSpan={4} className="p-3.5 sm:p-4 text-xs sm:text-[13.5px] leading-relaxed">
                        <div className="space-y-3">
                          {/* Description */}
                          <div>
                            <strong className="text-black font-semibold">Description: </strong>
                            <span className="text-[#202122]">{project.description}</span>
                          </div>

                          {/* Technologies */}
                          <div>
                            <strong className="text-black font-semibold">Technologies: </strong>
                            <span className="font-mono text-xs text-gray-800 bg-white border border-[#c8ccd1] px-1.5 py-0.5 rounded">
                              {project.technologies.join(", ")}
                            </span>
                          </div>

                          {/* Contribution */}
                          <div>
                            <strong className="text-black font-semibold">Technical Contribution: </strong>
                            <span className="text-gray-800">{project.contribution}</span>
                          </div>

                          {/* Links */}
                          <div className="pt-2 border-t border-[#eaecf0] flex flex-wrap gap-4 text-xs font-mono">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0645ad] hover:underline font-bold"
                              >
                                [GitHub Repository ↗]
                              </a>
                            )}
                            {project.hasLiveDemo && project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0645ad] hover:underline font-bold"
                              >
                                [Live Demonstration ↗]
                              </a>
                            )}
                            <button
                              type="button"
                              onClick={() => toggleProject(project.id)}
                              className="text-gray-500 hover:text-gray-800 hover:underline cursor-pointer bg-transparent border-0 p-0 ml-auto"
                            >
                              [Close panel ▲]
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
