# Claude Context

This file gives Claude high-level context about the project. Keep it **stack/architecture level** — not a file manifest. Update it when a foundational fact changes (new dependency, build tool, framework swap, deployment target, etc.), not when individual components change.

## What this is

A 3D dice prompt game. Five configurable dice roll in a Three.js scene; the face that lands up on each die feeds a prompt sentence at the top of the screen. Origin: a Claude Design (`claude.ai/design`) handoff bundle, ported to the repo root as a runnable prototype.

## Stack

- **React 18** + **Three.js 0.160**, bundled by **Vite 5**. ES modules throughout.
- **Dev loop**: `npm run dev` (HMR), `npm run build`, `npm run preview`.
- **Fonts**: Google Fonts — Inter (UI), Instrument Serif (display), JetBrains Mono (timer).
- Code lives under `src/`. `index.html` is the Vite entry shell.

## Architecture

- `src/main.jsx` wraps `<App />` in `<LocaleProvider>` and mounts into `#app`. Each component is its own ES module with a default export.
- State lives in the root `App` component; child components receive callbacks for throws, settle events, setting changes, etc.
- User settings (`dice`, `accent`, `bgMood`, `muted`) persist in `localStorage` under a per-locale key `dice-settings-v2-{locale}` so customizations don't leak across languages.
- The 3D scene runs its own rAF loop with a hand-rolled physics model (gravity + floor bounce + sphere-sphere dice collision + smooth settle). The active dice mount/unmount via an effect keyed on the dice config.
- The prompt text is derived from whichever face is pointing up on each settled die (not a separate RNG) — the scene reports face-up indices back to `App` via an `onSettled` callback. Each die face carries both a short display `value` (rendered on the cube) and a sentence-form `phrase` (used in the prompt); `phrases` is optional per-face, falls back to `value`.
- `React.StrictMode` is intentionally **off** in `main.jsx` because the Three.js scene's imperative lifecycle doesn't tolerate the double mount/unmount cleanly.

## Internationalization

- **Path-routed, pre-rendered.** English is the default and lives at `/`. Every other locale lives at `/{code}/` (e.g. `/es/`). No client-side router.
- **Locale data** is a JSON file per language in `src/locales/` (meta, UI strings, dice library, SEO fallback copy). Adding a language = add `src/locales/{code}.json` and list it in `src/i18n.jsx`.
- **Runtime**: `src/i18n.jsx` exposes a `LocaleProvider`, `useI18n()` / `useT()` hooks, and `switchLocale(code)` (full navigation). Locale is detected from the first path segment on mount.
- **Build**: `vite-plugin-i18n-html.js` (wired in `vite.config.js`) reads `src/locales/*.json` and emits a per-locale `index.html` with locale-specific `<html lang>`, title, meta, OG/Twitter tags, schema.org JSON-LD, SEO fallback content, and `<link rel="alternate" hreflang>` tags for every other locale plus `x-default`.
- **Default-locale convention**: only plain language codes (`en`, `es`, `fr`…). No regional variants (`pt-BR`, `zh-TW`) in v1 — add them later if traffic data justifies.

## Conventions

- Inline styles throughout (matching the Claude Design handoff style). No CSS files.
- Dark, wine-toned palette; accents and background moods are picked from a small fixed set in `app.jsx`.
- "Tweaks" panel is a design-time only affordance gated on an `editMode` message from a parent frame; it's safe to leave in.

## How to keep this file current

When any of the following change, update the relevant section above:

- Dependency or library swap (e.g. migrating off Babel Standalone, adding a bundler, switching from Three.js).
- A new top-level directory or a move to a `src/` layout.
- Change in how the app is served, built, or deployed.
- A shift in the state/data-flow pattern (e.g. introducing context, a state library, or moving physics to a worker).

Do **not** update this file for routine component edits, style tweaks, copy changes, or new dice faces — those belong in the code, not here.