# CLAUDE.md — terryarbors-site

## What This Is

Professional portfolio SPA for Jason Terry (Security Researcher & Penetration Tester).
Live at [terryarbors.com](https://terryarbors.com). Deployed via GitHub Pages.

## Tech Stack

- **Vite 7** — build tool, dev server with HMR
- **React 19** — UI framework
- **TypeScript** — strict typing
- **Tailwind CSS 4** — utility-first styling with custom dark theme (`@theme` in `index.css`)
- **framer-motion 12** — animations on every section (scroll-triggered, hover, typing effects)
- **lucide-react** — icon library
- **Puppeteer** (devDependency) — used in `scripts/generate-resume-pdf.mjs` to render resume HTML to PDF

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Dev server with HMR
npm run build      # tsc -b && vite build → dist/
npm run lint       # ESLint
npm run preview    # Preview production build
node scripts/generate-resume-pdf.mjs  # Generate resume PDF (requires Puppeteer)
```

## Architecture

```
src/
  App.tsx              Root component — composes all sections
  main.tsx             Entry point — StrictMode + createRoot
  index.css            Tailwind config, custom theme vars, animations
  sections/
    Hero.tsx           Landing: animated tagline rotation, stats, particles
    Skills.tsx         Categorized skill bars with animated progress
    Projects.tsx       Project cards with hover effects
    About.tsx          Bio + experience timeline
    Chat.tsx           Client-side keyword-matching chat assistant
    Contact.tsx        Contact form (mailto) + certifications + training
  components/
    Nav.tsx            Fixed navbar with scroll-spy, mobile hamburger
    Footer.tsx         Site footer with nav + social links
  data/
    resume.ts          All static content: profile, skills, projects, experience, chat responses
scripts/
  generate-resume-pdf.mjs   Puppeteer script: renders HTML resume → public/Jason-Terry-Resume.pdf
```

## Key Design Decisions

- **Chat widget is client-side only** — `Chat.tsx` uses keyword matching against `chatResponses[]` in `data/resume.ts`. No backend, no API, no LLM. The `matchResponse()` function scores user input tokens against pattern arrays and returns the best canned response. The "LIVE" indicator in the UI is cosmetic.
- **Contact form uses mailto** — `Contact.tsx` constructs a `mailto:` URI with subject/body from form fields. Clicking "Send Message" opens the user's email client. No server-side form handler.
- **Dark theme** — all colors defined as CSS custom properties in `index.css` `@theme` block. Background: `#0a0a0f`, primary: `#f59e0b` (amber), accent: `#00d4ff` (cyan).
- **Puppeteer is a legitimate devDependency** — used solely for `scripts/generate-resume-pdf.mjs` to generate the resume PDF from inline HTML. Not used at runtime.
- **Static site** — no backend, no server, no database. All content lives in `data/resume.ts`.

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. CNAME: `terryarbors.com`.
Built output in `dist/` includes `CNAME` file copied from `public/`.

## Hard Rules

- No `as any`, `@ts-ignore`, `@ts-expect-error`, or empty catch blocks
- No backend or API keys — this is a purely static site
- All content edits go through `src/data/resume.ts`
- Resume PDF regeneration requires running the Puppeteer script manually
