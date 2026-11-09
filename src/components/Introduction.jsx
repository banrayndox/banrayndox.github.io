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
      {/* Wikipedia Page Title & Tagline */}
      <div className="mb-3">
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-normal text-black border-b border-[#a2a9b1] pb-1 mb-1 tracking-tight">
          {profileData.name}
        </h1>
        <div className="text-xs text-[#54595d] italic">
          From Rakib's Knowledge Base, the personal engineer's wiki
        </div>
      </div>

      {/* Wikipedia Hatnote */}
      <div className="text-xs text-[#54595d] italic mb-4 pl-3.5 border-l-2 border-[#a2a9b1] py-0.5 bg-[#f8f9fa]">
        This article is about the software developer and engineering student. For projects and code repositories, see <a href="#projects" onClick={(e) => handleHatnoteClick(e, 'projects')} className="text-[#0645ad] hover:underline cursor-pointer">Selected Projects</a>.
      </div>

      {/* Main Wikipedia Content Flow with Floated Infobox */}
      <div className="clearfix">
        {/* Right-aligned Wikipedia Biographical Infobox */}
        <WikiInfobox />

        {/* Lead Encyclopedic Paragraphs */}
        <div className="space-y-3 text-[14.5px] leading-relaxed text-[#202122]">
          <p>
            <strong>{profileData.name}</strong> is a Computer Science and Engineering undergraduate student, full-stack software developer, and artificial intelligence practitioner based in Dhaka, Bangladesh. He currently serves as Bangladesh Campus Ambassador for CleverCreator AI and has developed campus platforms including <em>DIU Copilot</em> and <em>CodeReady AI</em>.
          </p>

          {profileData.bioParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Quick Links Bar */}
        <div className="mt-4 pt-2.5 pb-2 border-y border-[#eaecf0] text-xs text-gray-700 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans">
          <span className="font-bold text-gray-900">Direct Links:</span>
          {profileData.quickLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              <a
                href={link.url}
                target={link.url.startsWith('http') ? "_blank" : undefined}
                rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-[#0645ad] hover:underline font-medium"
              >
                [{link.label}]
              </a>
              {idx < profileData.quickLinks.length - 1 && (
                <span className="text-gray-300">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Wikipedia Table of Contents */}
        <WikiTOC />
      </div>
    </section>
  );
}
