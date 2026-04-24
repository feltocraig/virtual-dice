# Dice Game

A 3D dice game built with React, Three.js, and Vite.

## Running

```bash
npm install
npm run dev
```

Then open http://localhost:8000/ in your browser. HMR picks up edits automatically — no hard refresh needed.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — produce a production build in `dist/`
- `npm run preview` — serve the production build locally

## Structure

- `index.html` — Vite entry shell
- `src/main.jsx` — React root
- `src/App.jsx` — root component; game state and prompt builder
- `src/DiceScene.jsx` — Three.js 3D dice, physics, collision, face detection
- `src/MainScreen.jsx` — prompt header, throw button, timer
- `src/SettingsModal.jsx` — dice picker, face editor, look, presets
- `src/TweaksPanel.jsx` — design-time tweaks (accent, mood, etc.)
- `src/shade.js` — color helper

## Deployment

Hosted at **[virtualsexdice.com](https://virtualsexdice.com/)** via GitHub Pages.

Every push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build`, writes the `CNAME` for the custom domain, and force-pushes the resulting `dist/` to the `gh-pages` branch. GitHub Pages is configured to serve from `gh-pages` / root.

No manual release step — merging to `main` is the release.
