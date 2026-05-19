# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server (localhost:5173)
npm run build     # tsc type-check + Vite production build
npm run lint      # ESLint
npm run preview   # serve the production build locally
```

There are no tests.

## Architecture

Single-page portfolio app — React 19, TypeScript, Vite, Tailwind CSS v4 (via `@tailwindcss/vite`), Framer Motion.

Navigation is anchor-link only (`#hero`, `#about`, `#projects`, `#skills`, `#contact`). There is no router.

### Layout flow

```
main.tsx
  └── App.tsx
        ├── Navbar
        ├── <main>
        │     ├── Hero
        │     ├── About
        │     ├── Projects
        │     ├── Skills
        │     └── Contact
        └── Footer
```

### Theme system

`ThemeContext` / `ThemeProvider` (`src/context/ThemeContext.tsx`) manages `'light' | 'dark'`. It toggles a `.dark` class on `<html>` and persists to `localStorage`. Consume with `useTheme` (`src/hooks/useTheme.ts`).

### Language / i18n system

**Do not use the `i18next` / `react-i18next` packages** — they are listed in `package.json` but unused. The project has a custom implementation:

- `LanguageContext` / `LanguageProvider` (`src/context/LanguageContext.tsx`) imports the three JSON files directly and exposes `{ language, translations, changeLanguage }`.
- Consume with `useLanguage()` (`src/hooks/useLanguage.ts`).
- **Every new string must be added to all three files**: `src/i18n/en.json`, `src/i18n/fr.json`, `src/i18n/de.json`.
- The TypeScript type for `Translation` is derived from `en.json`, so `fr.json` and `de.json` must have the exact same keys.

### CSS / design tokens

The active stylesheet is **`src/styles/globals.css`** (imported by `main.tsx`). The file `src/index.css` is an older, unused stylesheet — do not edit it.

CSS variables defined in `globals.css` (light/`.dark`):

| Variable | Purpose |
|---|---|
| `--background` | page background |
| `--foreground` | primary text |
| `--muted` | secondary/muted text |
| `--card` | card surface (semi-transparent) |
| `--border` | border color |
| `--accent` | accent / brand color (indigo/violet) |
| `--glow` | radial gradient used for decorative glows |

Tailwind is configured through the Vite plugin — no `tailwind.config.*` file. Dark mode is applied via the `.dark` class (set by ThemeProvider), not `prefers-color-scheme`.

### Animations

All motion uses **Framer Motion**. Icons come from **react-icons** (`FaGithub`, `FaLinkedin`, etc. from `react-icons/fa`). The `CustomCursor` component and Lenis smooth-scroll are both currently commented out.
