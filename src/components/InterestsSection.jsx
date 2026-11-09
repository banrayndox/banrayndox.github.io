import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { interestsData } from '../data/interests.js';

export default function InterestsSection() {
  return (
    <section>
      <SectionHeading id="research" title="Research & technical interests" subtitle="Focus areas & aspirations" />

      <p className="text-[14px] text-[#202122] leading-relaxed mb-3">
        {interestsData.statement}
      </p>

      {/* Concise Wikipedia Focus Table */}
      <table className="wikitable my-3">
        <thead>
          <tr>
            <th className="w-1/4">Field / Focus</th>
            <th className="w-1/5">Category</th>
            <th>Scope & Technical Direction</th>
          </tr>
        </thead>
        <tbody>
          {interestsData.areas.map((area, idx) => (
            <tr key={idx} className={idx === 0 ? "bg-[#fdfefe]" : ""}>
              <td className="font-bold text-xs sm:text-[13.5px]">
                {area.title}
              </td>
              <td className="text-xs font-mono text-gray-700">
                <span className={idx === 0 ? "font-bold text-blue-900" : ""}>
                  {area.badge}
                </span>
              </td>
              <td className="text-xs sm:text-[13px] text-[#202122] leading-relaxed">
                {area.summary}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Core Research Aspiration Box */}
      <div className="p-3 bg-[#f8f9fa] border-l-3 border-[#a2a9b1] text-xs sm:text-[13px] text-gray-800 leading-relaxed my-2">
        <strong className="text-black font-semibold">Academic Direction: </strong>
        While actively building full-stack and AI software systems, my core long-term research interest lies in <strong>algorithms and theoretical computer science</strong> — specifically investigating algorithmic optimization, computational complexity boundaries, and novel data structure designs.
      </div>
    </section>
  );
}
