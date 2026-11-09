import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToTarget } from '../utils/scrollToSection.js';

export default function WikiTOC() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    scrollToTarget(href, navigate, location.pathname);
  };

  const sections = [
    {
      num: "1",
      title: "Academic background",
      href: "academic",
      subs: [
        { num: "1.1", title: "Institutional standing", href: "academic" },
        { num: "1.2", title: "Core focus areas", href: "academic" }
      ]
    },
    {
      num: "2",
      title: "Professional activities",
      href: "professional"
    },
    {
      num: "3",
      title: "Selected projects",
      href: "projects",
      subs: [
        { num: "3.1", title: "DIU Copilot", href: "diu-copilot" },
        { num: "3.2", title: "DIU Class Coordination System", href: "diu-class-coordination-system" },
        { num: "3.3", title: "CodeReady AI", href: "codeready-ai" },
        { num: "3.4", title: "Online Compiler", href: "online-compiler" },
        { num: "3.5", title: "C Backend Project", href: "c-backend-project" }
      ]
    },
    {
      num: "4",
      title: "Research & technical interests",
      href: "research"
    },
    {
      num: "5",
      title: "Competitive programming",
      href: "competitive-programming"
    },
    {
      num: "6",
      title: "Writing & technical notes",
      href: "writing"
    },
    {
      num: "7",
      title: "Code & open source",
      href: "code"
    },
    {
      num: "8",
      title: "Contact & channels",
      href: "contact"
    }
  ];

  return (
    <nav aria-label="Table of contents" className="wiki-toc my-4">
      <div className="flex items-center justify-between gap-4 border-b border-[#eaecf0] pb-1 mb-2">
        <span className="font-bold text-xs uppercase tracking-wide text-gray-800">
          Contents
        </span>
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="text-xs text-[#0645ad] hover:underline cursor-pointer bg-transparent border-0 p-0"
        >
          [{collapsed ? "show" : "hide"}]
        </button>
      </div>

      {!collapsed && (
        <ul className="space-y-1 text-xs text-gray-800 pr-2">
          {sections.map((sec) => (
            <li key={sec.num}>
              <a
                href={`#${sec.href}`}
                onClick={(e) => handleLinkClick(e, sec.href)}
                className="hover:underline cursor-pointer"
              >
                <span className="text-gray-500 font-mono mr-1.5">{sec.num}</span>
                <span>{sec.title}</span>
              </a>
              {sec.subs && sec.subs.length > 0 && (
                <ul className="pl-4 mt-0.5 space-y-0.5">
                  {sec.subs.map((sub) => (
                    <li key={sub.num}>
                      <a
                        href={`#${sub.href}`}
                        onClick={(e) => handleLinkClick(e, sub.href)}
                        className="hover:underline text-gray-700 cursor-pointer"
                      >
                        <span className="text-gray-400 font-mono mr-1">{sub.num}</span>
                        <span>{sub.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
