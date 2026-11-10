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

  // The 3 core introductory paragraphs as requested
  bioParagraphs: [
    "Hi, I'm Rakib — a Computer Science and Engineering student, software developer, and AI enthusiast at Daffodil International University, Bangladesh.",
    "I'm interested in building software systems, exploring artificial intelligence, solving algorithmic problems, and understanding how technology works internally.",
    "I am deeply passionate about competitive programming, regularly practicing algorithmic problem solving and participating in contests. Alongside contest programming, I am actively exploring the intersection of full-stack software engineering and AI application development."
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
