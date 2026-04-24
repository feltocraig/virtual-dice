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
