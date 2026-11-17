import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import WikiInfobox from './WikiInfobox.jsx';
import WikiTOC from './WikiTOC.jsx';
import { profileData } from '../data/profile.js';
import { scrollToTarget } from '../utils/scrollToSection.js';

export default function Introduction() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHatnoteClick = (e, targetId) => {
    e.preventDefault();
    scrollToTarget(targetId, navigate, location.pathname);
  };

  return (
    <section id="about" className="pt-3 pb-4">
      {/* Wikipedia Page Title */}
      <div className="mb-3">
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-normal text-black dark:text-white border-b border-[#a2a9b1] dark:border-[#54595d] pb-1 tracking-tight">
          {profileData.name}
        </h1>
      </div>

      {/* Wikipedia Hatnote */}
      <div className="text-xs text-[#54595d] dark:text-[#9aa0a6] italic mb-4 pl-3.5 border-l-2 border-[#a2a9b1] dark:border-[#54595d] py-1 bg-[#f8f9fa] dark:bg-[#27292d]">
        This article is about the software developer and engineering student. For projects and code repositories, see <a href="#projects" onClick={(e) => handleHatnoteClick(e, 'projects')} className="text-[#0645ad] dark:text-[#6da8ff] hover:underline cursor-pointer">Selected Projects</a>.
      </div>

      {/* Main Wikipedia Content Flow with Floated Infobox */}
      <div className="clearfix">
        {/* Right-aligned Wikipedia Biographical Infobox */}
        <WikiInfobox />

        {/* Lead Bio Paragraphs */}
        <div className="space-y-3 text-[14.5px] leading-relaxed text-[#202122] dark:text-[#eaecf0]">
          <p>
            Hi, I'm Rakib — a CSE student at{" "}
            <a
              href="https://daffodilvarsity.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
            >
              Daffodil International University
            </a>{" "}
            with a strong passion for competitive programming and algorithmic problem solving.
          </p>
          <p>
            I actively compete in programming contests while engineering full-stack software systems and exploring applied AI applications.
          </p>

          {/* Quick links & Documents */}
          <div className="pt-1 text-xs text-[#54595d] dark:text-[#9aa0a6] flex flex-wrap items-center gap-x-2 gap-y-1 font-sans">
            <span className="font-semibold text-gray-900 dark:text-gray-100">Profiles & Documents:</span>
            <a
              href="/Rakib_B_TraineeResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0645ad] dark:text-[#6da8ff] font-semibold hover:underline inline-flex items-center gap-0.5"
              title="Download or view Rakib B's Trainee Resume (PDF)"
            >
              <span>📄 Resume (PDF)</span>
              <span className="text-[10px]">↗</span>
            </a>
            <span>·</span>
            <a
              href="https://github.com/banrayndox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href="https://linkedin.com/in/banrayndox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://codeforces.com/profile/airayndox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
            >
              Codeforces
            </a>
            <span>·</span>
            <a
              href="https://leetcode.com/u/banrayndox/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
            >
              LeetCode
            </a>
          </div>
        </div>

        {/* Wikipedia Table of Contents */}
        <WikiTOC />
      </div>
    </section>
  );
}
