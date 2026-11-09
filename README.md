# Rakib Biswash — Personal Website & Engineer's Wiki

A minimalist, content-first personal website and academic knowledge archive for **Rakib Biswash**, inspired by the aesthetic and architectural philosophy of [William Falcon's homepage](https://www.williamfalcon.com/).

This project deliberately avoids conventional developer portfolio gimmicks (no oversized hero banners, no 3D decorations, no skill percentage bars, no glassmorphism). Instead, it presents an authentic synthesis of:
- **A personal Wikipedia page** (structured biographical and academic facts).
- **An academic homepage** (credentials, coursework, research directions, and replaceable portrait).
- **An engineer's project archive** (text-first technical teardowns and architecture logs).
- **A technical notebook & wiki** (dedicated, readable long-form engineering articles).

---

## 🚀 Getting Started

### 1. Install & Run Locally
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Production Build & Linting
```bash
# Build optimized static distribution
npm run build

# Run linter
npm run lint

# Preview production build locally
npm run preview
```

---

## 📁 Centralized Data Architecture (`src/data/`)

Every piece of information, project description, social link, news update, and article is maintained in pure JavaScript data files under `src/data/`. You can update your entire website without altering component markup.

| Data File | Purpose | What to update |
|---|---|---|
| [`src/data/profile.js`](file:///d:/Documents/port_by_grav/src/data/profile.js) | Personal identity, bio paragraphs, quick links, portrait setup | Bio text, quick link URLs, photo location |
| [`src/data/academic.js`](file:///d:/Documents/port_by_grav/src/data/academic.js) | University standing, degree, core subjects | Semester status, coursework, academic focus |
| [`src/data/professional.js`](file:///d:/Documents/port_by_grav/src/data/professional.js) | Ambassadorships, campus leadership, independent work | Roles, tenures, descriptions |
| [`src/data/projects.js`](file:///d:/Documents/port_by_grav/src/data/projects.js) | Selected software systems & research prototypes | Project names, tech stacks, contributions, GitHub & live URLs |
| [`src/data/interests.js`](file:///d:/Documents/port_by_grav/src/data/interests.js) | AI, systems architecture, algorithmic problem solving | Research directions and technical notes |
| [`src/data/competitiveProgramming.js`](file:///d:/Documents/port_by_grav/src/data/competitiveProgramming.js) | Contest achievements, Codeforces/LeetCode profiles | Contest standings, problem handles |
| [`src/data/news.js`](file:///d:/Documents/port_by_grav/src/data/news.js) | Chronological newsfeed (William Falcon style) | New milestones, events, contest results |
| [`src/data/articles.js`](file:///d:/Documents/port_by_grav/src/data/articles.js) | Long-form technical notes and tutorials | Add new articles with markdown content and table of contents |
| [`src/data/code.js`](file:///d:/Documents/port_by_grav/src/data/code.js) | GitHub handle, fallback repository archive, experiments | GitHub username (`banrayndox`), languages, lab experiments |
| [`src/data/contact.js`](file:///d:/Documents/port_by_grav/src/data/contact.js) | Contact channels & communication links | Email, LinkedIn, WhatsApp number |

---

## 📷 How to Add Your Real Profile Photograph

1. Take your professional or academic photograph.
2. Save it as `rakib.jpg` directly inside the `public/` folder (`public/rakib.jpg`).
3. Refresh the website — it will automatically detect and load your photograph!
4. *(Optional)* If your image has a different name, open [`src/data/profile.js`](file:///d:/Documents/port_by_grav/src/data/profile.js) and update `customPhotoUrl: "/your-image-name.jpg"`.
5. If the file is not yet placed, the website automatically displays an academic silhouette placeholder with your name caption without showing broken image icons.

---

## 📝 How to Publish New Technical Articles

To add a new article:
1. Open [`src/data/articles.js`](file:///d:/Documents/port_by_grav/src/data/articles.js).
2. Append a new article object to the array:
```javascript
{
  slug: "your-article-slug",
  title: "Your Article Title",
  date: "Month Year",
  category: "Artificial Intelligence", // or Computer Science, Backend Engineering, etc.
  readingTime: "5 min read",
  summary: "A concise 1-2 sentence overview.",
  tableOfContents: [
    { id: "section-1", title: "1. Section Heading" }
  ],
  content: `
### 1. Section Heading {#section-1}

Your article text formatted with markdown, code blocks, and math.
  `,
  relatedSlugs: ["designing-agentic-rag-systems-langgraph-chromadb"]
}
```
3. The article is automatically routed to `/articles/your-article-slug` with full table-of-contents navigation and category filtering.

---

## 🌐 Real GitHub Integration

The `CodeSection` automatically connects to the public GitHub REST API:
```
https://api.github.com/users/banrayndox/repos?sort=updated&per_page=8
```
- Fetches and displays your live public repositories with star counts, primary languages, and update timestamps.
- If the unauthenticated GitHub rate limit (60 requests/hr) is reached or the client is offline, it seamlessly falls back to the curated repositories defined in [`src/data/code.js`](file:///d:/Documents/port_by_grav/src/data/code.js).

---

## 🎨 Design Philosophy & Principles

- **Color Palette**: Pristine `#FFFFFF` background, solid `#111827` / `#1f2937` typography, and classic academic blue hyperlinks (`#0645ad`).
- **Layout**: Centered `max-w-[980px]` container with generous line height (`1.68`) for long-form readability.
- **Tone**: Intellectual, factual, clear, and timeless.
