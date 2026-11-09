import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { competitiveProgrammingData } from '../data/competitiveProgramming.js';

export default function CompetitiveProgrammingSection() {
  return (
    <section>
      <SectionHeading
        id="competitive-programming"
        title="Competitive programming"
        subtitle="Contests & algorithmic problem solving"
      />

      <blockquote className="border-l-3 border-[#a2a9b1] pl-3 py-1 mb-4 text-xs sm:text-sm italic text-gray-800 bg-[#f8f9fa]">
        "{competitiveProgrammingData.quote}"
      </blockquote>

      <p className="text-[14px] text-[#202122] leading-relaxed mb-4">
        {competitiveProgrammingData.overview}
      </p>

      {/* Contest Standings Table */}
      <h3 className="text-sm font-bold text-gray-900 mb-2">
        Contest Standings & Awards
      </h3>
      <table className="wikitable mb-5">
        <thead>
          <tr>
            <th className="w-1/3">Contest</th>
            <th className="w-1/6">Edition</th>
            <th className="w-1/4">Award / Standing</th>
            <th>Organizer</th>
          </tr>
        </thead>
        <tbody>
          {competitiveProgrammingData.achievements.map((item, idx) => (
            <tr key={idx}>
              <td className="font-bold">{item.contest}</td>
              <td className="font-mono text-xs">{item.edition}</td>
              <td className="text-xs">
                <strong>{item.award}</strong>
                <a href="#ref-3" className="reference-bracket text-[#0645ad]">[3]</a>
              </td>
              <td className="text-xs text-gray-700">{item.organizer}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Online Profiles & Handles Table */}
      <h3 className="text-sm font-bold text-gray-900 mb-2">
        Online Evaluator Handles
      </h3>
      <table className="wikitable mb-5">
        <thead>
          <tr>
            <th className="w-1/4">Platform</th>
            <th className="w-1/4">Handle</th>
            <th>Focus & Activity</th>
          </tr>
        </thead>
        <tbody>
          {competitiveProgrammingData.profiles.map((p, idx) => (
            <tr key={idx}>
              <td className="font-bold">{p.platform}</td>
              <td className="font-mono text-xs">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[#0645ad] hover:underline">
                  {p.handle} ↗
                </a>
              </td>
              <td className="text-xs text-gray-700">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Practiced Topics */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          Algorithmic Fields & Data Structures
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-xs text-[#202122]">
          {competitiveProgrammingData.topicsPracticed.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
