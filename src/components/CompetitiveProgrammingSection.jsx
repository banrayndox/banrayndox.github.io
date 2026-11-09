import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { competitiveProgrammingData } from '../data/competitiveProgramming.js';

export default function CompetitiveProgrammingSection() {
  return (
    <section>
      <SectionHeading
        id="competitive-programming"
        title="Competitive Programming"
        subtitle="Algorithms & Problem Solving"
      />

      {/* Quote */}
      <blockquote className="border-l-2 border-gray-300 pl-4 py-1 mb-5 text-[15px] italic text-gray-700 bg-gray-50/50">
        "{competitiveProgrammingData.quote}"
      </blockquote>

      <p className="text-[14.5px] text-gray-800 leading-relaxed mb-6">
        {competitiveProgrammingData.overview}
      </p>

      {/* Contest Achievements */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Contest Results & Recognitions
        </h3>
        <div className="space-y-3">
          {competitiveProgrammingData.achievements.map((item, idx) => (
            <div key={idx} className="p-3.5 bg-gray-50 border border-gray-200 rounded-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <span className="font-semibold text-sm text-gray-900">
                  {item.contest} — <span className="font-normal text-gray-700">{item.edition}</span>
                </span>
                <span className="text-xs font-mono font-medium text-blue-900 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  {item.award}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-1">
                Organized by {item.organizer}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Links & Handles */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Profiles & Problem Solving Handles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {competitiveProgrammingData.profiles.map((p, idx) => (
            <div key={idx} className="p-3 border border-gray-200 rounded-xs bg-white">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{p.platform}</span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono hover:underline"
                >
                  [{p.handle}] ↗
                </a>
              </div>
              <p className="text-xs text-gray-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Topics */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Algorithmic Areas Practiced
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {competitiveProgrammingData.topicsPracticed.map((topic, idx) => (
            <span
              key={idx}
              className="text-xs font-mono bg-gray-100 text-gray-800 px-2 py-1 rounded border border-gray-200"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
