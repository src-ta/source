# terryarbors

Professional portfolio site for Jason Terry — Security Researcher & Penetration Tester. Live at [terryarbors.com](https://terryarbors.com).

## Overview

Single-page portfolio built with Vite, React 19, and TypeScript. Dark-themed with animated section transitions via framer-motion. Sections: Nav, Hero, Skills, Projects, About, interactive Chat widget, Contact, Footer. Tailwind CSS handles styling. Built output goes to `dist/` for static hosting.

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
