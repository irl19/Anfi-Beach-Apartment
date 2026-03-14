# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run preview  # Preview production build
```

No linting or test scripts are configured.

## Architecture

Single-page landing for a vacation rental apartment in Anfi del Mar (Gran Canaria). No routing — the app is one long scrollable page.

**Key files:**
- [App.tsx](App.tsx) — the entire UI lives here as one large component with many inline sub-components. All sections (hero, gallery, availability calendar, contact form, FAQs, footer, cookie banner) are defined in this file.
- [i18n.ts](i18n.ts) — all user-facing strings for `es`, `en`, and `no` languages, typed against `TranslationStrings`.
- [types.ts](types.ts) — `Language`, `Review`, and `TranslationStrings` types shared between App and i18n.

**i18n pattern:** `App.tsx` holds a `language` state (`Language = 'es' | 'en' | 'no'`) and reads `translations[language]` (from `i18n.ts`) to render all text. To add or change UI copy, edit `i18n.ts` for all three languages.

**Path alias:** `@` resolves to the project root (`vite.config.ts`).

**Environment:** `GEMINI_API_KEY` is read from `.env.local` and exposed as `process.env.GEMINI_API_KEY` / `process.env.API_KEY` at build time via Vite's `define`.
