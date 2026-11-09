import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { profileData } from '../data/profile.js';
import { scrollToTarget } from '../utils/scrollToSection.js';

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
      className="wiki-infobox-container float-none md:float-right md:w-[320px] md:ml-6 mb-6 clear-right"
    >
      <table className="wiki-infobox">
        <thead>
          <tr>
            <th colSpan="2" className="bg-[#eaecf0] text-center font-bold text-base py-1.5 border-b border-[#a2a9b1]">
              Rakib Biswash
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Portrait Image Row */}
          <tr>
            <td colSpan="2" className="text-center p-2 border-b border-[#eaecf0] bg-white">
              <div className="w-[180px] h-[215px] mx-auto border border-[#a2a9b1] bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={imgSrc}
                  alt={profileData.avatar.altText}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[11.5px] text-gray-600 mt-1.5 leading-tight font-sans">
                Rakib Biswash at Daffodil International University (2026)
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
            <th scope="row" className="w-[38%] text-xs font-bold text-gray-800">
              Residence / Location
            </th>
            <td className="text-xs text-gray-900">
              Dhaka, Bangladesh
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Alma mater
            </th>
            <td className="text-xs text-gray-900">
              <a
                href="#academic"
                onClick={(e) => handleLinkClick(e, 'academic')}
                className="hover:underline cursor-pointer"
              >
                Daffodil International University
              </a> (DIU)
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Academic standing
            </th>
            <td className="text-xs text-gray-900">
              B.Sc. in CSE (5th Semester)
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

          {/* Infobox Subheader: Technical work */}
          <tr>
            <th colSpan="2" className="wiki-infobox-header">
              Engineering & Projects
            </th>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Notable projects
            </th>
            <td className="text-xs text-gray-900">
              <ul className="list-disc pl-4 space-y-0.5 m-0">
                <li>
                  <a
                    href="#diu-copilot"
                    onClick={(e) => handleLinkClick(e, 'diu-copilot')}
                    className="cursor-pointer hover:underline"
                  >
                    DIU Copilot
                  </a>
                </li>
                <li>
                  <a
                    href="#diu-class-coordination-system"
                    onClick={(e) => handleLinkClick(e, 'diu-class-coordination-system')}
                    className="cursor-pointer hover:underline"
                  >
                    DIU Class Coordination
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Key fields
            </th>
            <td className="text-xs text-gray-900">
              Full-Stack Systems · AI Engineering · Algorithms
            </td>
          </tr>
          {/* 
          // Future appointment row template:
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Appointments
            </th>
            <td className="text-xs text-gray-900">
              Company / Role Title
            </td>
          </tr>
          */}
          <tr>
            <th scope="row" className="text-xs font-bold text-gray-800">
              Honours
            </th>
            <td className="text-xs text-gray-900">
              <ul className="list-disc pl-4 space-y-0.5 m-0">
                <li><strong>Champion</strong>, DIU Modal-X AI Hackathon (2026)</li>
                <li><strong>Runner-Up</strong>, BreakOut Algorithm Contest (2026)</li>
                <li><strong>Runner-Up</strong>, DIU Codetrap Contest (2025)</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
