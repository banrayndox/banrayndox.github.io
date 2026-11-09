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
        <div className="p-3.5 bg-[#f8f9fa] border border-[#eaecf0] text-xs sm:text-[13.5px] text-gray-700 leading-relaxed rounded-xs">
          <p className="m-0 italic">
            {noProfessionalActivityMessage}
          </p>
        </div>
      )}

      {/* 
        ========================================================================
        FUTURE ACTIVITY TEMPLATE (COMMENTED OUT FOR QUICK ADDITION IN THE FUTURE)
        When you have professional activities to add:
        1. Add the item in src/data/professional.js (or uncomment the table below).
        ========================================================================
      */}
      {/*
      <div className="mt-4">
        <table className="wikitable mb-4">
          <thead>
            <tr>
              <th className="w-1/4">Period</th>
              <th className="w-1/3">Role & Organization</th>
              <th className="w-1/5">Type</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-mono text-xs">November 2026 – May 2027</td>
              <td><strong>Software Developer</strong>, <em>Organization Name</em></td>
              <td className="text-xs text-gray-700">Internship / Role</td>
              <td className="text-xs">Dhaka, Bangladesh</td>
            </tr>
          </tbody>
        </table>

        <div className="pb-3 border-b border-[#eaecf0]">
          <h3 className="text-sm font-bold text-gray-900 mb-1">
            Organization Name — Role Title
          </h3>
          <p className="text-[14px] text-[#202122] leading-relaxed mb-2">
            Description of responsibilities and technical accomplishments during this appointment.
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-xs text-gray-700">
            <li>Achievement or engineering contribution 1</li>
            <li>Achievement or engineering contribution 2</li>
          </ul>
        </div>
      </div>
      */}

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
                    <strong>{item.role}</strong>, <em>{item.organization}</em>
                  </td>
                  <td className="text-xs text-gray-700">{item.type}</td>
                  <td className="text-xs">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="space-y-4">
            {professionalData.map((item, idx) => (
              <div key={idx} className="pb-3 border-b border-[#eaecf0] last:border-b-0">
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {item.organization} — {item.role}
                </h3>
                <p className="text-[14px] text-[#202122] leading-relaxed mb-2">
                  {item.description}
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
        </div>
      )}
    </section>
  );
}
