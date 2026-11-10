import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { profileData } from '../data/profile.js';
import { scrollToTarget } from '../utils/scrollToSection.js';

/**
 * Biographical Infobox
 * Strictly modeled after Wikipedia's classic Vector biography infobox layout
 * with standard taxonomy (Residence, Institute, Occupation, Fields, Known for, Awards).
 */
export default function WikiInfobox() {
  const [imgSrc, setImgSrc] = useState(profileData.avatar.customPhotoUrl);
  const [imgFailed, setImgFailed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleImageError = () => {
    if (!imgFailed) {
      setImgFailed(true);
      setImgSrc('/rakib-placeholder.svg');
    }
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    scrollToTarget(targetId, navigate, location.pathname);
  };

  return (
    <aside
      aria-label="Biographical infobox"
      className="wiki-infobox-container float-none md:float-right md:w-[290px] md:ml-6 mb-6 clear-right"
    >
      <table className="wiki-infobox">
        <thead>
          <tr>
            <th
              colSpan="2"
              className="bg-[#eaecf0] dark:bg-[#2e3034] text-center font-bold text-[15px] py-1.5 px-2 border-b border-[#a2a9b1] dark:border-[#54595d] text-black dark:text-white tracking-normal"
            >
              {profileData.name}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Portrait Image Row */}
          <tr>
            <td colSpan="2" className="text-center p-2.5 border-b border-[#eaecf0] dark:border-[#3c4043] bg-white dark:bg-[#202122]">
              <div className="w-[170px] h-[205px] mx-auto border border-[#c8ccd1] dark:border-[#3c4043] bg-gray-50 dark:bg-[#1a1b1e] flex items-center justify-center overflow-hidden">
                <img
                  src={imgSrc}
                  alt={profileData.avatar.altText}
                  onError={handleImageError}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-[11px] text-[#54595d] dark:text-[#9aa0a6] mt-1.5 leading-snug font-sans">
                Rakib B (2026)
              </div>
            </td>
          </tr>

          {/* Infobox Subheader: Personal details */}
          <tr>
            <th colSpan="2" className="wiki-infobox-header">
              Personal details
            </th>
          </tr>

          <tr className="border-b border-[#eaecf0] dark:border-[#3c4043]">
            <th scope="row" className="w-[36%] text-xs font-bold text-gray-800 dark:text-[#eaecf0]">
              Residence
            </th>
            <td className="text-xs text-gray-900 dark:text-[#c8ccd1]">
              {profileData.location}
            </td>
          </tr>

          <tr className="border-b border-[#eaecf0] dark:border-[#3c4043]">
            <th scope="row" className="text-xs font-bold text-gray-800 dark:text-[#eaecf0]">
              Institute
            </th>
            <td className="text-xs text-gray-900 dark:text-[#c8ccd1]">
              <a
                href="https://daffodilvarsity.edu.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0645ad] dark:text-[#6da8ff] hover:underline font-medium"
              >
                Daffodil International University
              </a>{" "}
              <span className="text-gray-500 dark:text-[#9aa0a6]">(DIU)</span>
              <div className="text-[11px] text-gray-600 dark:text-[#9aa0a6] mt-0.5">
                B.Sc. in CSE · 6th Semester
              </div>
            </td>
          </tr>

          <tr className="border-b border-[#eaecf0] dark:border-[#3c4043]">
            <th scope="row" className="text-xs font-bold text-gray-800 dark:text-[#eaecf0]">
              Occupation
            </th>
            <td className="text-xs text-gray-900 dark:text-[#c8ccd1]">
              Student
            </td>
          </tr>

          <tr className="border-b border-[#eaecf0] dark:border-[#3c4043]">
            <th scope="row" className="text-xs font-bold text-gray-800 dark:text-[#eaecf0]">
              Fields
            </th>
            <td className="text-xs text-gray-900 dark:text-[#c8ccd1]">
              Software Engineering · Artificial Intelligence · Competitive Programming
            </td>
          </tr>

          {/* Infobox Subheader: Career & notable work */}
          <tr>
            <th colSpan="2" className="wiki-infobox-header">
              Career & notable work
            </th>
          </tr>

          <tr className="border-b border-[#eaecf0] dark:border-[#3c4043]">
            <th scope="row" className="text-xs font-bold text-gray-800 dark:text-[#eaecf0]">
              Known for
            </th>
            <td className="text-xs text-gray-900 dark:text-[#c8ccd1]">
              <ul className="list-disc pl-4 space-y-0.5 m-0">
                <li>
                  <a
                    href="#diu-copilot"
                    onClick={(e) => handleLinkClick(e, 'diu-copilot')}
                    className="cursor-pointer text-[#0645ad] dark:text-[#6da8ff] hover:underline"
                  >
                    DIU Copilot
                  </a>
                </li>
                <li>
                  <a
                    href="#diu-class-coordination-system"
                    onClick={(e) => handleLinkClick(e, 'diu-class-coordination-system')}
                    className="cursor-pointer text-[#0645ad] dark:text-[#6da8ff] hover:underline"
                  >
                    DIU Class Coordination
                  </a>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-xs font-bold text-gray-800 dark:text-[#eaecf0]">
              Awards
            </th>
            <td className="text-xs text-gray-900 dark:text-[#c8ccd1]">
              <ul className="list-disc pl-4 space-y-0.5 m-0">
                <li>
                  <strong className="text-black dark:text-white">Champion</strong>, DIU Modal-X AI Hackathon (2026)
                </li>
                <li>
                  <strong className="text-black dark:text-white">Runner-Up</strong>, BreakOut Algorithm Contest (2026)
                </li>
                <li>
                  <strong className="text-black dark:text-white">Runner-Up</strong>, DIU Codetrap Contest (2025)
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
