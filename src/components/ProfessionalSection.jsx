import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { professionalData } from '../data/professional.js';

export default function ProfessionalSection() {
  return (
    <section>
      <SectionHeading id="professional" title="Professional" subtitle="Activities & Experience" />

      <p className="text-sm text-gray-600 mb-6 italic">
        A chronological overview of ambassadorships, institutional service, and independent software development.
      </p>

      <div className="space-y-6">
        {professionalData.map((item, idx) => (
          <div key={idx} className="pb-5 border-b border-gray-100 last:border-b-0 last:pb-0">
            {/* Header Line */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-base font-semibold text-gray-900">
                {item.role}
                <span className="font-normal text-gray-600"> — {item.organization}</span>
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <span className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded border border-gray-200">
                  {item.type}
                </span>
                <span>{item.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[14.5px] text-gray-800 leading-relaxed mt-2 mb-2">
              {item.description}
            </p>

            {/* Highlights if any */}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700">
                {item.highlights.map((h, hIdx) => (
                  <li key={hIdx}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
