import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { interestsData } from '../data/interests.js';

export default function InterestsSection() {
  return (
    <section>
      <SectionHeading id="research" title="Research & Interests" subtitle="Technical Directions" />

      <p className="text-sm text-gray-500 mb-6 italic">
        {interestsData.disclaimer}
      </p>

      <div className="space-y-7">
        {interestsData.categories.map((cat, idx) => (
          <div key={idx} className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {cat.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3.5">
              {cat.summary}
            </p>

            <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-800">
              {cat.topics.map((topic, tIdx) => (
                <li key={tIdx} className="leading-relaxed">
                  <strong className="text-gray-900 font-medium">{topic.name}:</strong>{" "}
                  <span className="text-gray-700">{topic.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
