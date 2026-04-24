import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { LocaleProvider } from './i18n.jsx';

// Not using StrictMode — the Three.js DiceScene has an imperative lifecycle
// that doesn't cleanly tolerate a double mount/unmount in dev.
ReactDOM.createRoot(document.getElementById('app')).render(
  <LocaleProvider>
    <App />
  </LocaleProvider>
);
