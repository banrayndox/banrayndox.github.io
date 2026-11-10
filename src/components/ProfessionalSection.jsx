import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { professionalData, noProfessionalActivityMessage } from '../data/professional.js';

export default function ProfessionalSection() {
  const hasActivities = professionalData && professionalData.length > 0;

  return (
    <section>
      <SectionHeading id="professional" title="Professional activities" subtitle="Industry & appointments" />

      {/* Honest, clean "No activity" text display */}
      {!hasActivities && (
        <div className="p-3.5 bg-[#f8f9fa] dark:bg-[#27292d] border border-[#eaecf0] dark:border-[#3c4043] text-xs sm:text-[13.5px] text-gray-700 dark:text-[#c8ccd1] leading-relaxed rounded-xs">
          <p className="m-0 italic">
            {noProfessionalActivityMessage}
          </p>
        </div>
      )}

      {/* Dynamic rendering if professionalData is populated */}
      {hasActivities && (
        <div className="mt-4">
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
                    <strong className="text-black dark:text-white">{item.role}</strong>, <em>{item.organization}</em>
                  </td>
                  <td className="text-xs text-gray-700 dark:text-[#c8ccd1]">{item.type}</td>
                  <td className="text-xs">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="space-y-4">
            {professionalData.map((item, idx) => (
              <div key={idx} className="pb-3 border-b border-[#eaecf0] dark:border-[#3c4043] last:border-b-0">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                  {item.organization} — {item.role}
                </h3>
                <p className="text-[14px] text-[#202122] dark:text-[#eaecf0] leading-relaxed mb-2">
                  {item.description}
                </p>
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="list-disc pl-5 space-y-0.5 text-xs text-gray-700 dark:text-[#c8ccd1]">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
