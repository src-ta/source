# terryarbors

Professional portfolio site for Jason Terry — Security Researcher & Penetration Tester. Live at [terryarbors.com](https://terryarbors.com).

## Prerequisites

- **Node.js 20.19 or later** — Node 18 will produce a compatibility warning during build. Use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to manage versions.

```bash
node --version   # should be v20.19.0 or higher
```

## Install / Build

```bash
npm install
npm run build
```

Development server with HMR:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

## Resume PDF Generation

The resume PDF (`public/Jason-Terry-Resume.pdf`) is generated from a self-contained Puppeteer script. It does **not** render the live site — the resume HTML is embedded directly in the script for portability and reproducibility.

**Prerequisites:** `puppeteer` is installed as a devDependency (`npm install` handles it). Puppeteer downloads a bundled Chromium on first install.

**Generate / regenerate the PDF:**

```bash
node scripts/generate-resume-pdf.mjs
```

Output is written to `public/Jason-Terry-Resume.pdf`. Commit the updated PDF to keep it in sync with the resume content.

**When to regenerate:**
- After editing any resume content in the script (contact info, experience, skills, etc.)
- Before a new deployment if resume content has changed

**What the script does:**
1. Launches a headless Chromium browser via Puppeteer
2. Renders the embedded `resumeHTML` string (Letter format, 0.4in × 0.45in margins)
3. Exports a print-quality PDF with `printBackground: true`
4. Saves to `public/Jason-Terry-Resume.pdf` and closes the browser

**Note:** The embedded HTML in `scripts/generate-resume-pdf.mjs` is the authoritative source for the resume content used in PDF output. It is maintained separately from the site's `src/data/resume.ts` data file. If you update one, update the other.

## Overview

Single-page portfolio built with Vite, React 19, and TypeScript. Dark-themed with animated section transitions via framer-motion. Sections: Nav, Hero, Skills, Projects, About, Chat (client-side keyword-matching assistant), Contact (mailto-based form), Footer. Tailwind CSS handles styling. Built output goes to `dist/` for static hosting.

## Architecture

```
src/
  App.tsx           Root component, section composition
  sections/
    Hero.tsx        Landing section with animated tagline and stat counters
    Skills.tsx      Skills display with category filter and progress bars
    Projects.tsx    Project cards with hover effects
    About.tsx       Bio section with professional experience timeline
    Chat.tsx        Client-side chat assistant (keyword-matching, no backend API)
    Contact.tsx     Contact form (mailto-based, opens email client) + certs/training
  components/
    Nav.tsx         Sticky navigation bar with active-section tracking
    Footer.tsx      Footer with nav links and social icons
  data/
    resume.ts       All site content: profile, skills, projects, experience, certs, chat responses
scripts/
  generate-resume-pdf.mjs   Puppeteer PDF generator (see Resume PDF Generation above)
```

## Tech Stack

- React 19 + TypeScript
- Vite 7 (build tool)
- Tailwind CSS 4 (styling)
- framer-motion 12 (animations)
- lucide-react (icons)
- puppeteer (devDependency — resume PDF generation only)
