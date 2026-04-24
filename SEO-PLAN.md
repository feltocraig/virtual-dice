# SEO Plan — Virtual Sex Dice

> Status: **draft v2**. Domain, brand, and locales locked. Volume numbers are still rough estimates — replace with DataForSEO / GSC data once the domain ships.

## 1. Positioning

A free, browser-based 3D dice game for couples. Customizable dice (action / body part / duration / intensity / position / mood), multi-language, no signup.

- **Audience**: couples aged 20–45, English-first, looking for a private, low-effort bedroom activity. Mobile-dominant (~70% of sessions expected).
- **Core value props** for SEO copy: 3D real-feel physics · no signup · fully customizable · multi-language · works on mobile + desktop.
- **Domain**: **virtualsexdice.com**
- **Brand**: **Virtual Sex Dice**
- **EMD consideration**: the domain is an exact-match for the primary keyword, which helps direct-match ranking but limits softer brand pivots later. Mitigation: in copy and schema, keep "Virtual Sex Dice" as the brand but describe the product as "the couples dice game" — gives us flexibility without renaming.

## 2. Market constraints (unique to this niche)

These materially shape the plan — don't skip.

| Constraint | Impact |
|---|---|
| **Google SafeSearch** filters "sex dice" / similar queries for logged-out mobile users by default | Organic traffic is suppressed on mobile SERPs. Optimize anyway — desktop + logged-in users still see you, and SafeSearch can miss edge-terms like "couples dice", "foreplay dice", "intimate dice". |
| **Paid ads**: Google Ads and Meta effectively ban adult-adjacent content | No paid amplification. SEO + content + partnerships is the whole game. |
| **App store distribution**: Apple restricts, Google Play inconsistent | Web-first is correct. No mobile app dependency. |
| **Affiliate monetization** is the likely revenue path | Plan for sex-toy affiliate links / partnerships; this shapes content strategy (reviews, guides, integrations). |
| **AI search (Perplexity, ChatGPT)** is often more permissive than Google for this space | GEO (AI-search optimization) punches above its weight here. Prioritize it. |

## 3. Competitive landscape

Quick scan of who holds the head terms (verify with real SERP data before launch):

| Competitor | Strength | Weakness |
|---|---|---|
| **sexdice.net** / **sexdice.online** type domains | EMD, ranks for "sex dice online" | Ugly UX, no 3D, no mobile polish, no languages |
| **loverly / kindu / coral apps** | Huge content libraries, email capture | Freemium paywall, requires signup |
| **Amazon / Lovehoney listings** for physical dice | Commercial intent ranks well | Not a web tool — gap for "online" modifier |
| **DIY reddit / Pinterest posts** | Long tail | No repeat-play utility |

**Our positional edge**: best-in-class 3D feel + zero friction + i18n. No direct competitor checks all three.

## 4. Keyword strategy

### Primary (English) — pursue in phase 1

| Keyword cluster | Rough monthly vol (global) | Intent | Target page |
|---|---|---|---|
| "sex dice" / "sex dice game" | 40–60k | Transactional-info | `/` (home) + `/sex-dice/` |
| "couples dice game" | 5–10k | Info-play | `/couples-dice/` or `/` |
| "virtual sex dice" / "online sex dice" | 2–5k | Transactional | `/` (home) |
| "foreplay dice" / "bedroom dice" | 5k | Info-play | `/foreplay-dice/` |
| "adult dice game" / "naughty dice" | 3–5k | Info-play | `/adult-dice/` |
| "sex dice online free" (long tail) | 500–2k | Transactional | `/` (home) |
| "dice game for couples" (long tail) | 500–2k | Info-play | `/couples-dice/` |

### Long-tail / content cluster — phase 2–3

- "how to play sex dice" → `/how-to-play/`
- "best sex dice games" → round-up post `/blog/best-sex-dice-games/`
- "DIY sex dice ideas" → `/blog/diy-sex-dice-ideas/` (links to our custom-faces feature)
- "couples games at home" → lightweight content page
- "sex games for long distance couples" → positions the 3D feel as "feels real over a call"

### Locale set — 17 locales (core 12 + 5 expansion)

Core 12 picked by web-usage share (W3Techs Dec 2025); 5 expansion locales added for speaker-count reach and niche coverage. All use `hreflang` with `x-default` pointing to root (English).

> **Arabic and Hindi deliberately excluded**: both introduce non-Latin script complexity (RTL layout for Arabic, Devanagari fonts for Hindi) without enough ROI to justify the launch-phase engineering cost. Arab markets ISP-block adult content; India has unstable adult-content regulation. Revisit either if AI-search traffic shows real demand.

**Core 12 (by web-usage share)**

| Rank | Code | Language | Seed terms | Notes |
|---|---|---|---|---|
| 1 | `en` | English (default) | "sex dice", "couples dice", "virtual sex dice" | Root. Primary market. |
| 2 | `es` | Español | "dados sexuales", "dados para parejas" | Huge LatAm + Spain market, low ads competition. |
| 3 | `de` | Deutsch | "sex würfel", "würfelspiel für paare" | High CPM, affluent buyers. |
| 4 | `ja` | 日本語 | "セックスサイコロ", "大人のサイコロゲーム" | Massive culturally, but Google.co.jp filters and blurs adult images. Worth it for direct/social traffic. |
| 5 | `fr` | Français | "dés sexuels", "dés coquins", "jeu de dés couple" | Strong, moderate competition. |
| 6 | `pt-BR` | Português (Brasil) | "dados sensuais", "jogo de dados para casais" | Brazil is one of the largest adult-content markets globally. |
| 7 | `ru` | Русский | "секс кубики", "кубики для пар" | **Yandex** matters more than Google — submit sitemap to Yandex Webmaster. |
| 8 | `it` | Italiano | "dadi sexy", "dadi per coppie" | Moderate volume, underserved. |
| 9 | `nl` | Nederlands | "seks dobbelstenen", "koppel dobbelspel" | Wealthy, liberal; minimal filtering. |
| 10 | `pl` | Polski | "kości seksu", "gra w kości dla par" | Growing adult ecommerce market. |
| 11 | `tr` | Türkçe | "seks zarları", "çift zarı oyunu" | Turkey ISP-blocks adult content intermittently; Turkish speakers in Germany are a big audience. |
| 12 | `zh` | 中文 (Simplified) | "性爱骰子", "情侣骰子" | **Baidu won't index**; mainland blocks Google. Audience = overseas Chinese diaspora. |

**Expansion 5 (speaker count, niche fit, or sister-variants)**

| Code | Language | Seed terms | Notes |
|---|---|---|---|
| `ko` | 한국어 | "섹스 주사위", "커플 주사위 게임" | South Korea filters adult content strictly; Naver dominant. Traffic comes mostly via Google from signed-in users. High purchasing power. |
| `id` | Bahasa Indonesia | "dadu seks", "permainan dadu pasangan" | ~270M speakers, Muslim-majority audience, moderate filtering. |
| `ms` | Bahasa Melayu | "dadu seks", "permainan dadu pasangan" | ~30M in Malaysia + Brunei. Near-duplicate of Indonesian — copy can mostly be shared with light Malaysianization (vocabulary differences). |
| `vi` | Tiếng Việt | "xúc xắc tình yêu", "trò chơi xúc xắc cho cặp đôi" | ~85M, growing digital market, moderate filtering. |
| `pt-PT` | Português (Portugal) | "dados eróticos", "jogo de dados para casais" | Sister variant to `pt-BR`. Portugal's audience is small but distinct vocabulary + spelling justifies a separate page if we're serious about EU SEO. |

## 5. Site architecture

```
/                           (en, canonical)
/en/                        (redirects to /)

# Core 12
/es/                        (Spanish)
/de/                        (German)
/ja/                        (Japanese)
/fr/                        (French)
/pt-br/                     (Portuguese — Brazil)
/ru/                        (Russian)
/it/                        (Italian)
/nl/                        (Dutch)
/pl/                        (Polish)
/tr/                        (Turkish)
/zh/                        (Chinese — Simplified)

# Expansion 5
/ko/                        (Korean)
/id/                        (Indonesian)
/ms/                        (Malay)
/vi/                        (Vietnamese)
/pt-pt/                     (Portuguese — Portugal)

# Per-locale page set (identical structure across all)
/                           home: the game itself (primary landing)
/how-to-play/               guide + SEO content for "how to play"
/couples-dice/              landing variant targeting couples-specific keywords
/foreplay-dice/             landing variant (foreplay keywords)
/adult-dice/                landing variant (adult dice keywords)
/presets/sweet/             preset deep-links (shareable)
/presets/spicy/
/presets/wild/
/about/
/privacy/
/terms/
/blog/                      phase 3 only — content hub

# Global
/sitemap.xml                sitemap index → per-locale sitemaps
/robots.txt
/llms.txt                   AI-search friendly summary
```

**Canonical rule**: each locale page canonicals to itself. Hreflang links to siblings + `x-default`.

**Route-equivalence**: landing variants (`/couples-dice/`, `/foreplay-dice/`, `/adult-dice/`) all render the same game UI with different copy (H1, meta, intro paragraph). This is a thin-content risk — see quality gates below.

## 6. On-page targets (English, per page)

### `/` (home)
- **H1**: *Online Sex Dice for Couples — Free, No Signup*
- **Title**: *Sex Dice Online — Free 3D Dice Game for Couples | [BrandName]*
- **Meta desc** (155ch): *Play sex dice online free. Real 3D physics, customizable faces, works on any device. No signup. For couples, solo, long-distance — any language.*
- **Schema**: `WebApplication` + `Game` (see §8)
- **Intro copy**: 150–250 words explaining what the game is + how to start + trust signals (private, no account, no tracking)

### `/couples-dice/`
- **H1**: *Couples Dice Game — 3D Roll for Two*
- **Title**: *Couples Dice Game Online — Spice Up Your Night | [Brand]*
- **Body**: ~400 words: "what is it", "how to use", "why couples love it", testimonial block (if real)

### `/foreplay-dice/` and `/adult-dice/`
- Same template, different H1/Title/intro anchored on the respective keyword cluster
- **Critical**: minimum 300 words of *unique* intro copy per variant or Google treats them as duplicates (quality gate from the skill)

### `/how-to-play/`
- Step-by-step guide (1000+ words)
- Embeds screenshots / animated GIFs (generate once with a recording tool)
- Anchor links for each step — AI-search friendly

## 7. Technical foundation

### Core Web Vitals targets (tight because 3D scene is heavy)

| Metric | Target | Current risk |
|---|---|---|
| **LCP** | < 2.5s | Three.js + font load = risk. Defer Three.js; show a static hero until first interaction. |
| **INP** | < 200ms | Throw handler runs main-thread physics. Fine for 5 dice; budget in if we add more. |
| **CLS** | < 0.1 | Current layout uses `clamp()` and fixed min-heights — OK. Make sure the 3D canvas has a reserved aspect. |

**Action**: split the bundle so the 3D scene is a `React.lazy` import. Landing HTML is lightweight for first-load SEO.

### Schema (JSON-LD, per locale)

```jsonc
// home
{ "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "[Brand] Sex Dice",
  "applicationCategory": "GameApplication",
  "inLanguage": "en",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "operatingSystem": "Web",
  "browserRequirements": "Requires JavaScript and WebGL" }
```

- Skip `FAQPage` schema unless audience is govt/healthcare (Aug 2023 restriction). On `/how-to-play/` use headings + H2/H3 structure — still citation-friendly for AI search without the schema.
- Skip `HowTo` schema (deprecated Sept 2023).

### Hreflang

In `<head>` of every page:
```html
<link rel="alternate" hreflang="en"        href="https://virtualsexdice.com/">
<link rel="alternate" hreflang="es"        href="https://virtualsexdice.com/es/">
<link rel="alternate" hreflang="de"        href="https://virtualsexdice.com/de/">
<link rel="alternate" hreflang="ja"        href="https://virtualsexdice.com/ja/">
<link rel="alternate" hreflang="fr"        href="https://virtualsexdice.com/fr/">
<link rel="alternate" hreflang="pt-BR"     href="https://virtualsexdice.com/pt-br/">
<link rel="alternate" hreflang="pt-PT"     href="https://virtualsexdice.com/pt-pt/">
<link rel="alternate" hreflang="ru"        href="https://virtualsexdice.com/ru/">
<link rel="alternate" hreflang="it"        href="https://virtualsexdice.com/it/">
<link rel="alternate" hreflang="nl"        href="https://virtualsexdice.com/nl/">
<link rel="alternate" hreflang="pl"        href="https://virtualsexdice.com/pl/">
<link rel="alternate" hreflang="tr"        href="https://virtualsexdice.com/tr/">
<link rel="alternate" hreflang="zh"        href="https://virtualsexdice.com/zh/">
<link rel="alternate" hreflang="ko"        href="https://virtualsexdice.com/ko/">
<link rel="alternate" hreflang="id"        href="https://virtualsexdice.com/id/">
<link rel="alternate" hreflang="ms"        href="https://virtualsexdice.com/ms/">
<link rel="alternate" hreflang="vi"        href="https://virtualsexdice.com/vi/">
<link rel="alternate" hreflang="x-default" href="https://virtualsexdice.com/">
```

Same set on every locale. The Vite migration we just did is the foundation for this — each locale will be a pre-rendered static page.

### Sitemap

- Sitemap index → per-locale sitemap files (`sitemap-en.xml`, `sitemap-es.xml`, …)
- Regenerate at build time from the known route list
- Submit each to Google Search Console per domain

### `llms.txt`

Publish at `/llms.txt` — plain-text summary of what the site is, key pages, and a canonical content block that AI crawlers can cite. Critical for this niche where Perplexity/ChatGPT citations may outperform Google.

### `robots.txt`

Allow all reputable crawlers. Do NOT block adult-content crawlers — we want Perplexity/OpenAI discoverability.

## 8. GEO / AI search readiness

AI search (ChatGPT, Perplexity, Gemini) handles adult-adjacent content better than Google. Heavy bet here.

- Structure every landing page with a **tl;dr block** (1–2 sentences, answer-style) right after H1 — easy to cite
- **FAQ-style H2/H3** on `/how-to-play/` and `/couples-dice/`
- **Unique brand voice + quotes** Google's perplexity quality raters reward
- **Author bio** on any blog post (phase 3) — establishes E-E-A-T
- Avoid LLM-generated copy that pattern-matches other AI text — distinctiveness wins

## 9. Roadmap

### Phase 0 — Pre-launch (this sprint)
- [ ] Decide on domain, register
- [x] Implement per-locale route structure in Vite (`/`, `/es/`, `/fr/`, …) — pre-rendered HTML per locale via `vite-plugin-i18n-html.js`; locale data in `src/locales/*.json`; hooks in `src/i18n.jsx`
- [x] Implement localStorage settings persistence (per-locale key `dice-settings-v2-{locale}`)
- [x] Add SEO primitives: `<title>`, meta description, OG tags, hreflang — all emitted per-locale by the i18n HTML plugin
- [ ] Create `public/og-image.png` (1200×630) — `index.html` already references `/og-image.png` for `og:image` and `twitter:image`, but the file doesn't exist yet. Per-locale variants can wait until Phase 1.
- [ ] Generate sitemap index at build time
- [ ] Add `llms.txt`

### Phase 1 — Launch (weeks 1–4)
- [x] v1 ships with `en`, `es`, `de`, `fr`, `it` (5 locales). DE/FR/IT activity terms sourced from the Wikipedia interlanguage sidebar for each sex-act article, then register-adjusted toward colloquial where Wikipedia's title was clinical (e.g. `Missionarsstellung` kept, but `Coitus a tergo` → `Doggy`, `Tribadisme` → `Ciseaux`, etc.).
- [ ] Add remaining locales as additional JSON files in `src/locales/` (the i18n plugin picks them up automatically, no code changes).
- [ ] Full set target: en, es, de, ja, fr, pt-BR, ru, it, nl, pl, tr, zh, ko, id, ms, vi, pt-PT (17 total). **Regional variants** (`pt-BR`, `zh-TW`, `pt-PT`) are deferred — early launch uses plain language codes (`pt`, `zh`) and only splits regionally if traffic data justifies it.
- [ ] **Native review** of the sex-content vocabulary for every locale before promoting its route publicly. Register choice (clinical vs colloquial vs crude) varies by market and one wrong word reads very wrong.
- [ ] Core pages live per locale: `/`, `/how-to-play/`, `/couples-dice/`, `/about/`, `/privacy/`, `/terms/`
- [ ] Schema: `WebApplication` on home per locale, `inLanguage` set correctly
- [ ] Font subsetting: load only the Unicode ranges needed per locale (CJK for `/ja/` `/ko/` `/zh/`, Latin-ext for everything else). Use Google Fonts `subset` or self-host with `unicode-range` in `@font-face`.
- [ ] CWV green on mobile (watch CJK locales especially — heavy font payload risks LCP)
- [ ] Webmaster Tools: Google Search Console (all) + Bing Webmaster + **Yandex Webmaster** (`/ru/`) + optionally **Naver** (`/ko/`)
- [ ] Submit sitemaps to each

### Phase 2 — Content expansion (weeks 5–12)
- [ ] Add `/foreplay-dice/`, `/adult-dice/` with unique copy per locale (≥300 words each, per quality gate)
- [ ] Add preset deep-link pages (`/presets/sweet/`, etc.) — shareable + ranks for preset names
- [ ] First 4 blog posts (see topics in §4)
- [ ] Consider `zh-TW` Traditional Chinese if `/zh/` (Simplified) shows traction
- [ ] Revisit Arabic / Hindi if AI-search traffic shows real demand

### Phase 3 — Authority (months 3–6)
- [ ] Scale blog to ~12 posts targeting long-tail queries
- [ ] Affiliate partnerships with sex-toy brands (Lovehoney, We-Vibe, etc.) — both revenue and backlinks
- [ ] Guest posts / podcast appearances in couples/relationship niches
- [ ] Outreach for links from existing "best sex games" round-ups

### Phase 4 — Optimize (months 6–12)
- [ ] Add locales 6+ based on traffic data
- [ ] Programmatic expansion: per-preset × per-locale landing pages — only if quality gates hold (≥30 location-pages triggers a 60%+ uniqueness check; hard stop at 50)
- [ ] A/B test CTAs / headlines
- [ ] Core Web Vitals regression-test on each release (`/seo drift compare`)

## 10. KPI targets

| Metric | Launch | 3 mo | 6 mo | 12 mo |
|---|---|---|---|---|
| Indexed pages | ~102 (17 locales × 6 pages) | ~170 | ~280 | ~420 |
| Ranking keywords (top 100) | 0 | ~150 | ~400 | ~1000 |
| Top-10 keywords | 0 | ~5 | ~25 | ~80 |
| Organic users / mo | 0 | 2–5k | 15–30k | 60–120k |
| Referring domains | 0 | 10 | 40 | 120 |
| LCP (mobile p75) | <2.5s | <2.0s | <1.8s | <1.5s |

Numbers are directional; revise after first 30 days of GSC data.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Google SafeSearch suppresses mobile organic | Lean into AI-search (GEO) and desktop + direct/social traffic. Don't build the business on Google mobile organic alone. |
| Duplicate content across landing variants | Enforce ≥300 words unique copy per variant. Monitor with `/seo drift` after launch. |
| Adult-affiliate Terms of Service restrictions | Read every affiliate's ToS; avoid networks that ban adult sites. |
| Brand/domain choice — adult context limits partnerships | Pick a domain that can pivot softer ("couples game") if needed. |
| 3D scene hurts CWV | Lazy-load Three.js behind a lightweight hero; measure in CrUX field data monthly. |

---

## Next concrete step

Ship **Phase 0** as one PR:
1. Add `react-router-dom` and wire `/`, `/es/`, `/fr/`, `/de/`, `/pt-br/`, `/it/` routes
2. Add a `<Head>` helper (e.g. `react-helmet-async`) that emits title / description / hreflang / OG per page
3. Add a tiny i18n dict (starting with the static strings: "Tonight's Roll", "Throw", tab labels, preset names) — no runtime library yet, just a map keyed on locale
4. Add localStorage persistence for settings (dice config, intensity, accent, mood)
5. Build step generates per-locale `index.html` files so each route has real SEO-ready HTML

That's the minimum to start indexing in every target market. Everything else in this plan layers on top of that foundation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
