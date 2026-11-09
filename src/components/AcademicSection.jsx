import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { academicData } from '../data/academic.js';

export default function AcademicSection() {
  return (
    <section>
      <SectionHeading id="academic" title="Academic" subtitle="Education & Coursework" />

      {/* Concise Overview Paragraph */}
      <div className="mb-6 text-gray-800 text-[15.5px] leading-relaxed">
        <p className="mb-3">
          I am an undergraduate student enrolled in the <strong>{academicData.degree}</strong> program at <strong>{academicData.institution}</strong> in {academicData.location}, currently in my <strong>{academicData.currentStatus}</strong>.
        </p>
        <p>
          {academicData.overview}
        </p>
      </div>

      {/* Wikipedia-style Key Facts Table */}
      <div className="mb-6 overflow-hidden border border-gray-200 rounded-xs">
        <table className="academic-table">
          <tbody>
            {academicData.details.map((item, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                <td className="w-1/3 py-2 px-3 font-medium text-gray-700 text-sm border-r border-gray-200">
                  {item.label}
                </td>
                <td className="w-2/3 py-2 px-3 text-gray-900 text-sm">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Academic Interest Focus Areas */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-2.5">
          Core Academic Interests
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
          {academicData.focusAreas.map((area, idx) => (
            <li key={idx} className="leading-relaxed">
              <strong className="text-gray-900 font-medium">{area.title}:</strong>{" "}
              <span className="text-gray-700">{area.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
