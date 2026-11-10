import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { profileData } from '../data/profile.js';
import { scrollToTarget } from '../utils/scrollToSection.js';

/**
 * Biographical Infobox
 * Strictly modeled after Wikipedia's classic Vector biography infobox layout
 * with standard taxonomy (Residence, Alma mater, Occupation, Fields, Known for, Awards).
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
              className="bg-[#eaecf0] text-center font-bold text-[15px] py-1.5 px-2 border-b border-[#a2a9b1] text-black tracking-normal"
            >
              {profileData.name}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Portrait Image Row */}
          <tr>
            <td colSpan="2" className="text-center p-2.5 border-b border-[#eaecf0] bg-white">
              <div className="w-[170px] h-[205px] mx-auto border border-[#c8ccd1] bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={imgSrc}
                  alt={profileData.avatar.altText}
                  onError={handleImageError}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-[11px] text-[#54595d] mt-1.5 leading-snug font-sans">
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

          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="w-[36%] text-xs font-bold text-gray-800">
              Residence
            </th>
            <td className="text-xs text-gray-900">
              {profileData.location}
            </td>
          </tr>

          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Alma mater
            </th>
            <td className="text-xs text-gray-900">
              <a
                href="https://daffodilvarsity.edu.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0645ad] hover:underline font-medium"
              >
                Daffodil International University
              </a>{" "}
              <span className="text-gray-500">(DIU)</span>
              <div className="text-[11px] text-gray-600 mt-0.5">
                B.Sc. in CSE · 5th Semester
              </div>
            </td>
          </tr>

          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Occupation
            </th>
            <td className="text-xs text-gray-900">
              Software developer · Student
            </td>
          </tr>

          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Fields
            </th>
            <td className="text-xs text-gray-900">
              Software Engineering · Artificial Intelligence · Competitive Programming
            </td>
          </tr>

          {/* Infobox Subheader: Engineering & Notable work */}
          <tr>
            <th colSpan="2" className="wiki-infobox-header">
              Career & notable work
            </th>
          </tr>

          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Known for
            </th>
            <td className="text-xs text-gray-900">
              <ul className="list-disc pl-4 space-y-0.5 m-0">
                <li>
                  <a
                    href="#diu-copilot"
                    onClick={(e) => handleLinkClick(e, 'diu-copilot')}
                    className="cursor-pointer text-[#0645ad] hover:underline"
                  >
                    DIU Copilot
                  </a>
                </li>
                <li>
                  <a
                    href="#diu-class-coordination-system"
                    onClick={(e) => handleLinkClick(e, 'diu-class-coordination-system')}
                    className="cursor-pointer text-[#0645ad] hover:underline"
                  >
                    DIU Class Coordination
                  </a>
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-xs font-bold text-gray-800">
              Awards
            </th>
            <td className="text-xs text-gray-900">
              <ul className="list-disc pl-4 space-y-0.5 m-0">
                <li>
                  <strong>Champion</strong>, DIU Modal-X AI Hackathon (2026)
                </li>
                <li>
                  <strong>Runner-Up</strong>, BreakOut Algorithm Contest (2026)
                </li>
                <li>
                  <strong>Runner-Up</strong>, DIU Codetrap Contest (2025)
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
