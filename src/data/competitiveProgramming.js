import modalxChampion from '../assets/modalx/modalx-champion.jpg';
import breakoutPodium from '../assets/breakout/breakout-podium.jpg';
import breakoutStage from '../assets/breakout/breakout-stage.jpg';
import codetrapTrophy from '../assets/codetrap/codetrap-trophy.jpg';
import codetrapPodium from '../assets/codetrap/codetrap-podium.jpg';
import codetrapStairs from '../assets/codetrap/codetrap-stairs.jpg';

/**
 * Competitive Programming & Hackathon Achievements
 * All contest records, rankings, and platform profiles.
 */
export const competitiveProgrammingData = {
  quote: "I enjoy solving algorithmic problems and improving my understanding of data structures, algorithms, and computational complexity.",
  
  overview: "Active participant in algorithmic contests, software hackathons, and computer science problem-solving platforms. Regularly practicing algorithmic thinking, mathematical modeling, and time/space complexity optimization.",
  
  // Contest & Hackathon achievements (Reverse-chronological)
  achievements: [
    {
      contest: "DIU Modal-X AI Hackathon",
      edition: "2026",
      organizer: "DIU AI Club",
      award: "Champion (1st Place)",
      type: "AI Hackathon",
      details: "Awarded Champion (Team EchoMind) for architecting and presenting an AI-powered multi-modal presentation assessment system evaluated on machine learning architecture, technical implementation, and real-world utility.",
      photos: [
        {
          src: modalxChampion,
          title: "Champion Award Ceremony",
          alt: "Team EchoMind awarded Champion at the DIU Modal-X AI Hackathon (ModalX-AI Challenge)",
          caption: "Rakib B with Team EchoMind receiving the Champion award at the DIU Modal-X AI Hackathon (2026), organized by DIU AI Club.",
          objectPosition: "object-center"
        }
      ]
    },
    {
      contest: "DIU BreakOut Algorithm Programming Contest",
      edition: "Summer 2026",
      organizer: "Department of Software Engineering, DIU",
      award: "1st Runner-Up (Podium Finisher)",
      type: "Algorithm Contest",
      details: "Ranked 1st Runner-Up in algorithmic problem solving under timed contest conditions covering graph theory, dynamic programming, and combinatorial problems.",
      photos: [
        {
          src: breakoutPodium,
          title: "1st Runner-Up Trophy",
          alt: "Rakib B with the 1st Runner-Up trophy at the DIU BreakOut Algorithm Programming Contest",
          caption: "Rakib B with the 1st Runner-Up trophy at the DIU BreakOut Algorithm Programming Contest (2026).",
          objectPosition: "object-top"
        },
        {
          src: breakoutStage,
          title: "Award Ceremony",
          alt: "Prize giving ceremony on stage for the DIU BreakOut Algorithm Programming Contest with faculty members",
          caption: "Prize giving ceremony on stage for the DIU BreakOut Algorithm Programming Contest with faculty members.",
          objectPosition: "object-center"
        }
      ]
    },
    {
      contest: "DIU Codetrap Programming Contest",
      edition: "Summer 2025",
      organizer: "Department of Software Engineering, DIU",
      award: "Runner-Up (Podium Finisher)",
      type: "Algorithm Contest",
      details: "Secured a top runner-up finish in timed algorithmic problem solving, computational complexity analysis, and core data structure applications.",
      photos: [
        {
          src: codetrapTrophy,
          title: "Trophy Close-Up",
          alt: "Rakib B holding the Runner-Up trophy at the DIU Codetrap Programming Contest",
          caption: "Rakib B holding the Runner-Up trophy at the DIU Codetrap Programming Contest (Summer 2025)."
        },
        {
          src: codetrapPodium,
          title: "Award Ceremony",
          alt: "Podium winners and university faculty on stage at DIU Codetrap",
          caption: "Podium finishers and faculty members at the DIU Codetrap award ceremony."
        },
        {
          src: codetrapStairs,
          title: "Campus Stairs",
          alt: "Rakib B with the Runner-Up trophy on university stairs at sunset",
          caption: "Rakib B on the university campus stairs following the DIU Codetrap contest."
        }
      ]
    }
  ],

  // Platform profiles & statistics (User can edit anytime)
  profiles: [
    {
      platform: "Codeforces",
      handle: "airayndox",
      url: "https://codeforces.com/profile/airayndox",
      description: "Regular contest participation in Div. 2 / Div. 3 rounds."
    },
    {
      platform: "LeetCode",
      handle: "banrayndox",
      url: "https://leetcode.com/u/banrayndox/",
      description: "Data structures, graph traversals, and dynamic programming interview problems."
    },
    {
      platform: "GitHub",
      handle: "banrayndox",
      url: "https://github.com/banrayndox",
      description: "Contest templates, C++ algorithmic solution archives, and problem implementations."
    }
  ]
};
