import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { interestsData } from '../data/interests.js';

export default function InterestsSection() {
  return (
    <section>
      <SectionHeading id="research" title="Research & technical interests" subtitle="Academic exploration" />

      <p className="text-xs text-[#54595d] italic mb-4">
        {interestsData.disclaimer}
      </p>

      <div className="space-y-6">
        {interestsData.categories.map((cat, idx) => (
          <div key={idx} className="pb-4 border-b border-[#eaecf0] last:border-b-0">
            <h3 className="text-sm font-bold text-gray-900 mb-1">
              {cat.name}
            </h3>
            <p className="text-xs text-gray-600 mb-2.5">
              {cat.summary}
            </p>

            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13.5px] text-[#202122]">
              {cat.topics.map((topic, tIdx) => (
                <li key={tIdx} className="leading-relaxed">
                  <strong>{topic.name}:</strong>{" "}
                  <span className="text-gray-800">{topic.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
