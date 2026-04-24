// Vite plugin: reads locale JSON files and emits per-locale HTML output.
//
// - `index.html` holds `{{TOKEN}}` placeholders (title, meta, canonical,
//   hreflang, SEO fallback copy, schema.org).
// - In dev + build: `transformIndexHtml` substitutes with the default locale
//   so the base HTML is always a real, valid document.
// - In build only: `generateBundle` additionally emits `{code}/index.html`
//   for every non-default locale by re-running substitution on the source
//   template (read fresh from disk).
//
// Why read the template from disk in generateBundle rather than re-using the
// already-transformed index.html: transformIndexHtml has already applied
// other plugins' transforms (React refresh, asset URL rewrites, etc.) that
// we do NOT want to re-apply. The correct base for per-locale emission is
// the already-transformed default HTML, with only the locale-variant tokens
// swapped. We therefore un-swap the default tokens and re-swap with the
// target locale's values.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function escapeAttr(s) {
  return String(s).replace(/"/g, '&quot;');
}
function escapeJson(s) {
  // Safe inside a JSON string literal within a <script type="application/ld+json">.
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');
}

function buildHreflangTags(locales, siteUrl, defaultLocale) {
  const lines = [];
  for (const l of locales) {
    const href = l.locale === defaultLocale ? `${siteUrl}/` : `${siteUrl}/${l.locale}/`;
    lines.push(`  <link rel="alternate" hreflang="${l.locale}" href="${href}">`);
  }
  lines.push(`  <link rel="alternate" hreflang="x-default" href="${siteUrl}/">`);
  return lines.join('\n');
}

function buildBullets(items) {
  return items.map(b => `<li>${escapeAttr(b)}</li>`).join('\n          ');
}

function substitutionsFor(locale, allLocales, siteUrl, defaultLocale) {
  const canonical = locale.locale === defaultLocale
    ? `${siteUrl}/`
    : `${siteUrl}/${locale.locale}/`;
  // OG locale convention: language_REGION. We only have the language code,
  // so synthesize a plausible region (uppercase language code works fine —
  // crawlers accept en_EN, es_ES, etc.).
  const ogLocale = `${locale.locale}_${locale.locale.toUpperCase()}`;

  return {
    HTML_LANG: locale.htmlLang,
    TITLE: locale.meta.title,
    DESCRIPTION: locale.meta.description,
    CANONICAL: canonical,
    OG_SITE_NAME: locale.meta.ogSiteName,
    OG_TITLE: locale.meta.ogTitle,
    OG_DESCRIPTION: locale.meta.ogDescription,
    OG_LOCALE: ogLocale,
    TWITTER_TITLE: locale.meta.twitterTitle,
    TWITTER_DESCRIPTION: locale.meta.twitterDescription,
    SCHEMA_NAME: locale.meta.schemaName,
    SCHEMA_DESCRIPTION: locale.meta.schemaDescription,
    HREFLANG_LINKS: buildHreflangTags(allLocales, siteUrl, defaultLocale),
    FALLBACK_EYEBROW: locale.seoFallback.eyebrow,
    FALLBACK_HEADING: locale.seoFallback.heading,
    FALLBACK_LEDE: locale.seoFallback.lede,
    FALLBACK_BODY: locale.seoFallback.body,
    FALLBACK_BULLETS: buildBullets(locale.seoFallback.bullets),
    FALLBACK_NOSCRIPT: locale.seoFallback.noscript,
  };
}

function substitute(html, subs) {
  // Different contexts want different escaping. Attribute/body values go
  // through HTML-entity-escape; JSON-LD values get JSON-string-escape.
  // Most tokens are used in attribute/body contexts; SCHEMA_* are the
  // exception (inside <script type="application/ld+json">).
  const jsonTokens = new Set(['SCHEMA_NAME', 'SCHEMA_DESCRIPTION']);
  // Bullets are raw HTML (already contain <li>), so no escape.
  const rawTokens = new Set(['HREFLANG_LINKS', 'FALLBACK_BULLETS']);

  return html.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    const val = subs[key];
    if (val == null) return `{{${key}}}`; // leave unknown tokens alone for debuggability
    if (rawTokens.has(key)) return val;
    if (jsonTokens.has(key)) return escapeJson(val);
    return escapeAttr(val);
  });
}

// Pulls Vite-rewritten script/stylesheet tags out of the already-built HTML
// so we can graft them into a freshly-substituted template per locale. This
// is safer than un-swapping default-locale values in the built HTML — short
// substitution values like "en" would otherwise collide with substrings of
// unrelated words ("content", etc.) and produce corrupted output.
function extractAssetTags(builtHtml) {
  const tags = [];
  // Match any <script ... src="..."> and <link ... href="/assets/..." rel="stylesheet">
  const scriptRe = /<script\b[^>]*\bsrc="[^"]+"[^>]*><\/script>/g;
  const stylesheetRe = /<link\b[^>]*\brel="stylesheet"[^>]*\bhref="\/assets\/[^"]+"[^>]*>/g;
  let m;
  while ((m = scriptRe.exec(builtHtml)) !== null) tags.push(m[0]);
  while ((m = stylesheetRe.exec(builtHtml)) !== null) tags.push(m[0]);
  return tags;
}

export default function i18nHtmlPlugin({ siteUrl, localesDir, defaultLocale = 'en' }) {
  let locales = [];
  let configRoot = process.cwd();
  let outDir = 'dist';
  let rawTemplate = '';

  return {
    name: 'i18n-html',

    configResolved(cfg) {
      configRoot = cfg.root;
      outDir = cfg.build?.outDir || 'dist';
    },

    buildStart() {
      const absDir = path.isAbsolute(localesDir)
        ? localesDir
        : path.resolve(configRoot, localesDir);
      const files = fs.readdirSync(absDir).filter(f => f.endsWith('.json'));
      locales = files.map(f => JSON.parse(fs.readFileSync(path.join(absDir, f), 'utf8')));
      rawTemplate = fs.readFileSync(path.resolve(configRoot, 'index.html'), 'utf8');
    },

    // Runs in both dev and build. Substitute placeholders with the default
    // locale so the served/emitted root HTML is a real, valid document.
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const def = locales.find(l => l.locale === defaultLocale);
        if (!def) return html;
        const subs = substitutionsFor(def, locales, siteUrl, defaultLocale);
        return substitute(html, subs);
      },
    },

    // Build only. For each non-default locale, start from the raw template
    // (with tokens intact), substitute per-locale, then replace the source
    // script tag with the production script tag extracted from the built
    // default HTML. This keeps asset references correct across all locales.
    closeBundle() {
      const absOutDir = path.isAbsolute(outDir)
        ? outDir
        : path.resolve(configRoot, outDir);
      const defaultHtmlPath = path.join(absOutDir, 'index.html');
      if (!fs.existsSync(defaultHtmlPath)) return;
      const builtDefault = fs.readFileSync(defaultHtmlPath, 'utf8');

      const productionTags = extractAssetTags(builtDefault);
      if (productionTags.length === 0) return; // nothing to graft

      for (const l of locales) {
        if (l.locale === defaultLocale) continue;
        const subs = substitutionsFor(l, locales, siteUrl, defaultLocale);
        let html = substitute(rawTemplate, subs);

        // Replace the dev-time source script tag with the built tag(s).
        html = html.replace(
          /<script\b[^>]*\bsrc="\/src\/main\.jsx"[^>]*><\/script>/,
          productionTags.join('\n  ')
        );

        const localeDir = path.join(absOutDir, l.locale);
        fs.mkdirSync(localeDir, { recursive: true });
        fs.writeFileSync(path.join(localeDir, 'index.html'), html, 'utf8');
      }
    },
  };
}
