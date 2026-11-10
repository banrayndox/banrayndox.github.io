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
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-normal text-black border-b border-[#a2a9b1] pb-1 tracking-tight">
          {profileData.name}
        </h1>
      </div>

      {/* Wikipedia Hatnote */}
      <div className="text-xs text-[#54595d] italic mb-4 pl-3.5 border-l-2 border-[#a2a9b1] py-0.5 bg-[#f8f9fa]">
        This article is about the software developer and engineering student. For projects and code repositories, see <a href="#projects" onClick={(e) => handleHatnoteClick(e, 'projects')} className="text-[#0645ad] hover:underline cursor-pointer">Selected Projects</a>.
      </div>

      {/* Main Wikipedia Content Flow with Floated Infobox */}
      <div className="clearfix">
        {/* Right-aligned Wikipedia Biographical Infobox */}
        <WikiInfobox />

        {/* Lead Bio Paragraphs */}
        <div className="space-y-3 text-[14.5px] leading-relaxed text-[#202122]">
          {profileData.bioParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Wikipedia Table of Contents */}
        <WikiTOC />
      </div>
    </section>
  );
}
