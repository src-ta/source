# terryarbors

Portfolio site for the Terry Arbors cybersecurity persona.

## Overview

A single-page portfolio built with Vite, React 19, and TypeScript. Dark-themed with animated section transitions via framer-motion. The site presents a cybersecurity professional persona named Terry Arbors and includes sections for hero, skills, projects, about, an interactive chat widget, and contact. Tailwind CSS handles styling. The built output goes to `dist/` and is ready for static hosting.

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

## Usage

After `npm run build`, serve the `dist/` directory from any static host. The site is a single HTML entry point with client-side routing handled by React.

Sections rendered in order: Nav, Hero, Skills, Projects, About, Chat, Contact, Footer.

## Testing

No automated test suite. Lint passes with `npm run lint`.

## Architecture

```
src/
  App.tsx           Root component, section composition
  sections/
    Hero.tsx        Landing section
    Skills.tsx      Skills display
    Projects.tsx    Project cards
    About.tsx       Bio section
    Chat.tsx        Interactive chat widget
    Contact.tsx     Contact form/links
  components/
    Nav.tsx         Navigation bar
    Footer.tsx      Footer
  data/             Static content data
  hooks/            Custom React hooks
```

## Tech Stack

- React 19 + TypeScript
- Vite 7 (build tool)
- Tailwind CSS 4 (styling)
- framer-motion 12 (animations)
- lucide-react (icons)
- Persona: Terry Arbors (cybersecurity)
