/**
 * Personal Profile & Bio Configuration
 * Easily update your personal details, titles, and bio text here.
 */
export const profileData = {
  name: "Rakib Biswash",
  title: "Computer Science & Engineering Student | Software Developer | AI Enthusiast",
  institution: "Daffodil International University",
  location: "Dhaka, Bangladesh",
  
  // Profile Photo configuration:
  // To use your actual photograph:
  // 1. Place your photo in the public folder as `rakib.jpg` (or any path)
  // 2. Set customPhotoUrl: "/rakib.jpg" (or your image URL)
  // 3. Set usePlaceholder: false
  avatar: {
    customPhotoUrl: "/rakib.jpg",
    placeholderInitial: "RB",
    altText: "Photograph of Rakib Biswash",
    caption: "Rakib Biswash — Daffodil International University",
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
    { label: "Email", url: "mailto:rakib.biswash.dev@gmail.com" },
    { label: "Codeforces", url: "https://codeforces.com/profile/banrayndox" },
    { label: "Resume", url: "#resume", note: "Available upon request / direct download" },
  ]
};
