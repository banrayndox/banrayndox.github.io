import rakibPhoto from '../assets/Rakib_B.jpg';

/**
 * Personal Profile & Bio Configuration
 * Easily update your personal details, titles, and bio text here.
 */
export const profileData = {
  name: "Rakib B",
  title: "Computer Science & Engineering Student | Software Developer | AI Enthusiast",
  institution: "Daffodil International University",
  location: "Dhaka, Bangladesh",
  resumeUrl: "/resume.pdf",
  
  // Profile Photo configuration:
  avatar: {
    customPhotoUrl: rakibPhoto,
    placeholderInitial: "RB",
    altText: "Photograph of Rakib B",
    caption: "Rakib B — Daffodil International University",
  },

  // Core introductory paragraphs (concise & focused)
  bioParagraphs: [
    "Hi, I'm Rakib — a CSE student at Daffodil International University with a strong passion for competitive programming and algorithmic problem solving.",
    "I actively compete in programming contests while engineering full-stack software systems and exploring applied AI applications."
  ],

  // Primary quick links displayed right below the introduction
  quickLinks: [
    { label: "GitHub", url: "https://github.com/banrayndox" },
    { label: "LinkedIn", url: "https://linkedin.com/in/banrayndox" },
    { label: "Codeforces", url: "https://codeforces.com/profile/banrayndox" },
    { label: "LeetCode", url: "https://leetcode.com/u/banrayndox/" },
    { label: "Email", url: "mailto:banrayndox@gmail.com" },
    { label: "Resume", url: "#resume", note: "Available upon request / direct download" },
  ]
};
