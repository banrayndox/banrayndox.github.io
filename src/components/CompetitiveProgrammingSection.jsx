import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { competitiveProgrammingData } from '../data/competitiveProgramming.js';

export default function CompetitiveProgrammingSection() {
  return (
    <section>
      <SectionHeading
        id="competitive-programming"
        title="Competitive programming & hackathons"
        subtitle="Contests & honours"
      />

      {/* Contest Standings & Hackathon Honours (Article / Wikipedia List Format) */}
      <ul className="space-y-3.5 list-disc pl-5 text-[14px] text-[#202122] leading-relaxed mb-4">
        {competitiveProgrammingData.achievements.map((item, idx) => (
          <li key={idx} className="pl-1">
            <span className="font-semibold text-gray-950">{item.award}</span> —{" "}
            <strong>{item.contest}</strong> ({item.edition}), organized by {item.organizer}.
            <p className="text-xs sm:text-[13px] text-gray-700 mt-0.5 mb-0 leading-relaxed">
              {item.details}
            </p>
          </li>
        ))}
      </ul>

      {/* Online Profiles & Practice (Wikipedia Prose Format) */}
      <p className="text-[14px] text-[#202122] leading-relaxed pt-2 border-t border-[#eaecf0]">
        For online contest practice and algorithmic problem solving, Rakib B actively competes on{" "}
        <a
          href="https://codeforces.com/profile/banrayndox"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] hover:underline"
        >
          Codeforces
        </a>{" "}
        and solves data structures and dynamic programming challenges on{" "}
        <a
          href="https://leetcode.com/u/banrayndox/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] hover:underline"
        >
          LeetCode
        </a>. Algorithmic contest templates and categorized C++ solutions are publicly maintained on{" "}
        <a
          href="https://github.com/banrayndox"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] hover:underline"
        >
          GitHub
        </a>{" "}
        under the handle{" "}
        <a
          href="https://github.com/banrayndox"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] hover:underline font-mono font-medium"
        >
          banrayndox
        </a>.
      </p>
    </section>
  );
}
