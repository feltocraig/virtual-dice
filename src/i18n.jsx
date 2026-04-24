// i18n.jsx — Locale detection, string lookup, and provider.
// Locales are path-prefixed: English lives at `/`, others at `/{code}/`.
// Switching locale does a full navigation so per-locale pre-rendered HTML
// (meta, title, hreflang) is loaded correctly.
import { createContext, useContext, useMemo } from 'react';
import en from './locales/en.json';
import es from './locales/es.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import it from './locales/it.json';

const LOCALES = { en, es, de, fr, it };
const DEFAULT_LOCALE = 'en';

export const AVAILABLE_LOCALES = [
  { code: 'en', name: en.name },
  { code: 'es', name: es.name },
  { code: 'de', name: de.name },
  { code: 'fr', name: fr.name },
  { code: 'it', name: it.name },
];

const Ctx = createContext(null);

export function detectLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const seg = window.location.pathname.split('/').filter(Boolean)[0];
  return seg && LOCALES[seg] ? seg : DEFAULT_LOCALE;
}

function pickDeep(obj, path) {
  return path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
}

function format(template, params) {
  if (typeof template !== 'string' || !params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => (k in params ? params[k] : `{${k}}`));
}

export function LocaleProvider({ children }) {
  const locale = detectLocale();
  const strings = LOCALES[locale];
  const value = useMemo(() => ({
    locale,
    strings,
    t: (path, params) => {
      const raw = pickDeep(strings, path);
      if (raw == null) return path; // fall back to key if missing — easy to spot in UI
      return format(raw, params);
    },
  }), [locale, strings]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useI18n must be used inside <LocaleProvider>');
  return v;
}

export function useT() {
  return useI18n().t;
}

// Full navigation so per-locale pre-rendered HTML (title, meta, hreflang)
// is loaded fresh. Persisted user settings survive the reload because
// localStorage keys are scoped per-locale (see App.jsx).
export function switchLocale(code) {
  if (typeof window === 'undefined') return;
  const target = code === DEFAULT_LOCALE ? '/' : `/${code}/`;
  if (window.location.pathname === target) return;
  window.location.href = target;
}
