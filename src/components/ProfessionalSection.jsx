import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { professionalData } from '../data/professional.js';

export default function ProfessionalSection() {
  return (
    <section>
      <SectionHeading id="professional" title="Professional activities" subtitle="Ambassadorships & engineering" />

      <p className="text-xs text-[#54595d] italic mb-4">
        A chronological overview of ambassadorship appointments, institutional digital administration, and independent engineering.
      </p>

      {/* Summary Wikitable */}
      <table className="wikitable mb-5">
        <thead>
          <tr>
            <th className="w-1/4">Period</th>
            <th className="w-1/3">Role & Organization</th>
            <th className="w-1/5">Type</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {professionalData.map((item, idx) => (
            <tr key={idx}>
              <td className="font-mono text-xs">{item.period}</td>
              <td>
                <strong>{item.role}</strong>, <em>{item.organization}</em>
              </td>
              <td className="text-xs text-gray-700">{item.type}</td>
              <td className="text-xs">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Detailed subsections */}
      <div className="space-y-4">
        {professionalData.map((item, idx) => (
          <div key={idx} className="pb-3 border-b border-[#eaecf0] last:border-b-0">
            <h3 className="text-sm font-bold text-gray-900 mb-1">
              {item.organization} — {item.role}
            </h3>
            <p className="text-[14px] text-[#202122] leading-relaxed mb-2">
              {item.description}
              {item.type.includes("Ambassador") && (
                <a href="#ref-2" className="reference-bracket text-[#0645ad]">[2]</a>
              )}
            </p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="list-disc pl-5 space-y-0.5 text-xs text-gray-700">
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
