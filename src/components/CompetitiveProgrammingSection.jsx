import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { competitiveProgrammingData } from '../data/competitiveProgramming.js';

export default function CompetitiveProgrammingSection() {
  return (
    <section>
      <SectionHeading
        id="competitive-programming"
        title="Competitive programming & hackathons"
        subtitle="Contests, hackathons & algorithmic problem solving"
      />

      <blockquote className="border-l-3 border-[#a2a9b1] pl-3 py-1 mb-4 text-xs sm:text-sm italic text-gray-800 bg-[#f8f9fa]">
        "{competitiveProgrammingData.quote}"
      </blockquote>

      <p className="text-[14px] text-[#202122] leading-relaxed mb-4">
        {competitiveProgrammingData.overview}
      </p>

      {/* Contest & Hackathon Standings Table */}
      <h3 className="text-sm font-bold text-gray-900 mb-2">
        Contest Standings & Hackathon Honours
      </h3>
      <table className="wikitable mb-5">
        <thead>
          <tr>
            <th className="w-2/5">Competition / Event</th>
            <th className="w-1/6">Edition</th>
            <th className="w-1/4">Award / Standing</th>
            <th>Organizer</th>
          </tr>
        </thead>
        <tbody>
          {competitiveProgrammingData.achievements.map((item, idx) => (
            <tr key={idx}>
              <td>
                <span className="font-bold block text-xs sm:text-[13.5px]">{item.contest}</span>
                <span className="text-[11.5px] text-gray-600 block mt-0.5 leading-snug">
                  {item.details}
                </span>
              </td>
              <td className="font-mono text-xs whitespace-nowrap">{item.edition}</td>
              <td className="text-xs font-semibold whitespace-nowrap">
                {item.award}
              </td>
              <td className="text-xs text-gray-700">{item.organizer}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Online Profiles & Handles (Wiki Bulleted List instead of second table) */}
      <div className="mt-4 pt-1">
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          Online Evaluator Profiles & Handles
        </h3>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13.5px] text-[#202122]">
          {competitiveProgrammingData.profiles.map((p, idx) => (
            <li key={idx} className="leading-relaxed">
              <strong>{p.platform}:</strong>{" "}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0645ad] hover:underline font-mono font-medium"
              >
                @{p.handle} ↗
              </a>{" "}
              <span className="text-gray-600">— {p.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
