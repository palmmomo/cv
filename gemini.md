# gemini.md — Palm CV Website

## Project Overview

**Name:** Palm's Personal CV/Resume Website  
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React  
**Deployment Target:** Vercel  
**Repository:** palmmomo/cv  

---

## Architecture

### Directory Structure
```
src/
├── app/
│   ├── globals.css        # Base styles, smooth scroll, custom scrollbar
│   ├── layout.tsx         # Root layout with Inter font + SEO metadata
│   └── page.tsx           # Main single-page assembly
└── components/
    ├── AnimatedSection.tsx # Reusable Framer Motion scroll wrapper (fade-in + slide-up)
    ├── Hero.tsx            # Hero section: name, title, location, social links, intro
    ├── Education.tsx       # Education: SUT and TheTigerTeamAcademy (timeline layout)
    ├── Skills.tsx          # Skills: 3 groups with badge pills
    ├── Projects.tsx        # Projects: 3 cards with tag chips and hover effects
    └── Footer.tsx          # Footer: copyright + tech stack note
```

### Design Decisions
- **Single-page scroll layout** with generous section padding for readability
- **Light background** (`bg-gray-50` page, `bg-white` for alternate sections)
- **No harsh pure blacks** — `text-slate-900` headings, `text-slate-600` body
- **Framer Motion** `useInView` hook drives all scroll animations (once: true, margin: -80px)
- **Modular components** — each section is fully self-contained

---

## Activity Log

### 2026-03-31 — Initial Build
- **Scaffolded** Next.js 14 (App Router, TypeScript, Tailwind CSS) via `create-next-app`
- **Installed** `framer-motion@latest` and `lucide-react@latest`
- **Created** all source files:
  - `AnimatedSection` — reusable scroll-triggered animation wrapper
  - `Hero` — with `MapPin`, `Github`, `Linkedin`, `Mail` Lucide icons
  - `Education` — timeline border layout
  - `Skills` — grouped badge pills (Web Dev, System & Security, Tools & Automation)
  - `Projects` — card layout (Aphid2, Network Automation Lab, Google Sheets Integration)
  - `Footer` — dynamic year copyright
- **Updated** `globals.css` for smooth scroll + custom scrollbar
- **Configured** `layout.tsx` with Inter font and full SEO metadata

---

## Deployment Notes

Vercel auto-detects Next.js. To deploy:
1. Push to GitHub (`palmmomo/cv`)
2. Import repository in Vercel dashboard
3. Vercel will auto-configure build settings
4. No environment variables required for this project

---

## Development

```bash
npm run dev    # Start dev server at http://localhost:3000
npm run build  # Build for production
npm run lint   # Run ESLint
```
