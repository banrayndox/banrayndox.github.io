import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import WikiThumbnail from './WikiThumbnail.jsx';
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
      <ul className="space-y-3.5 list-disc pl-5 text-[14px] text-[#202122] dark:text-[#eaecf0] leading-relaxed mb-4">
        {competitiveProgrammingData.achievements.map((item, idx) => (
          <li key={idx} className="pl-1">
            <span className="font-semibold text-gray-950 dark:text-white">{item.award}</span> —{" "}
            <strong className="text-black dark:text-white">{item.contest}</strong> ({item.edition}), organized by {item.organizer}.
            <p className="text-xs sm:text-[13px] text-gray-700 dark:text-[#c8ccd1] mt-0.5 mb-0 leading-relaxed">
              {item.details}
            </p>
          </li>
        ))}
      </ul>

      {/* Wikipedia Contest Gallery (Zero whitespace, clean 3-column responsive showcase) */}
      <div className="my-4">
        <div className="text-[11px] font-semibold text-[#54595d] dark:text-[#9aa0a6] uppercase tracking-wider mb-2 font-sans flex items-center justify-between border-b border-[#eaecf0] dark:border-[#3c4043] pb-1">
          <span>Contest photographs & awards gallery</span>
          <span className="text-[10px] font-normal text-gray-400 dark:text-gray-500 font-mono">
            archived event photographs
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {competitiveProgrammingData.achievements.map((item, idx) => (
            item.photos && item.photos.length > 0 && (
              <WikiThumbnail
                key={idx}
                layout="gallery"
                photos={item.photos}
                contest={item.contest}
                edition={item.edition}
              />
            )
          ))}
        </div>
      </div>

      {/* Online Profiles & Practice (Wikipedia Prose Format) */}
      <p className="text-[14px] text-[#202122] dark:text-[#eaecf0] leading-relaxed pt-3 border-t border-[#eaecf0] dark:border-[#3c4043]">
        For online contest practice and algorithmic problem solving, Rakib B actively competes on{" "}
        <a
          href="https://codeforces.com/profile/airayndox"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
        >
          Codeforces
        </a>{" "}
        and solves data structures and dynamic programming challenges on{" "}
        <a
          href="https://leetcode.com/u/banrayndox/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
        >
          LeetCode
        </a>. Algorithmic contest templates and categorized C++ solutions are publicly maintained on{" "}
        <a
          href="https://github.com/banrayndox"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
        >
          GitHub
        </a>.
      </p>
    </section>
  );
}
