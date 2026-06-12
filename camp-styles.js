window.CAMP_CSS = String.raw`/* =========================================================
   たすいちキャンプ場 — sample site styles
   森・焚き火のナチュラルテーマ（自己完結 / portable）
   ========================================================= */

:root {
  --forest:   #1d2b22;   /* deep forest ink */
  --forest-2: #2f4034;
  --moss:     #3c6b46;   /* primary green */
  --moss-ink: #2c5435;
  --moss-soft:#e4ede2;
  --ember:    #d2693f;   /* accent (焚き火) */
  --ember-ink:#b4502b;
  --ember-soft:#f6e6dc;
  --ink:      #25302a;
  --muted:    #616b62;
  --line:     #e2dccc;
  --bg:       #f6f1e7;   /* warm cream */
  --bg-2:     #ece4d4;   /* sand panel */
  --card:     #fffdf8;
  --on-dark:  #f1ece0;

  --radius: 14px;
  --radius-lg: 24px;
  --shadow: 0 1px 2px rgba(29,43,34,.05), 0 22px 46px -26px rgba(29,43,34,.34);
  --shadow-sm: 0 1px 2px rgba(29,43,34,.05), 0 10px 22px -16px rgba(29,43,34,.3);

  --maxw: 1180px;
  --gutter: clamp(20px, 5vw, 64px);

  --f-head: "Zen Maru Gothic", "Zen Kaku Gothic New", sans-serif;
  --f-body: "Zen Kaku Gothic New", system-ui, sans-serif;
  --f-lat: "Outfit", sans-serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0; font-family: var(--f-body); color: var(--ink); background: var(--bg);
  line-height: 1.85; font-size: 16px; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
h1,h2,h3,h4 { margin: 0; font-weight: 700; line-height: 1.4; letter-spacing: .01em; }
p { margin: 0; }
ul { margin: 0; padding: 0; list-style: none; }

.wrap { max-width: var(--maxw); margin-inline: auto; padding-inline: var(--gutter); }
.lat { font-family: var(--f-lat); letter-spacing: .01em; }

/* ===================== Buttons ===================== */
.btn {
  display: inline-flex; align-items: center; gap: .55em; font-family: var(--f-body);
  font-weight: 700; font-size: 15px; padding: 14px 28px; border-radius: 999px; cursor: pointer;
  border: 1.5px solid transparent; transition: transform .15s, background .2s, box-shadow .2s, color .2s, border-color .2s; white-space: nowrap;
}
.btn-primary { background: var(--ember); color: #fff; box-shadow: 0 12px 26px -12px var(--ember); }
.btn-primary:hover { background: var(--ember-ink); transform: translateY(-2px); }
.btn-forest { background: var(--moss); color: #fff; }
.btn-forest:hover { background: var(--moss-ink); transform: translateY(-2px); }
.btn-ghost { background: transparent; color: var(--forest); border-color: var(--line); }
.btn-ghost:hover { border-color: var(--moss); color: var(--moss-ink); background: var(--moss-soft); }
.btn-light { background: #fff; color: var(--forest); }
.btn-light:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -16px rgba(0,0,0,.4); }
.btn .arrow { transition: transform .2s; }
.btn:hover .arrow { transform: translateX(3px); }

/* ===================== Header ===================== */
.site-header { position: sticky; top: 0; z-index: 50; background: color-mix(in srgb, var(--bg) 85%, transparent); backdrop-filter: blur(10px); border-bottom: 1px solid transparent; transition: border-color .2s; }
.site-header.scrolled { border-color: var(--line); }
.nav { display: flex; align-items: center; justify-content: space-between; height: 74px; }
.brand { display: flex; align-items: center; gap: 12px; }
.brand-mark { width: 42px; height: 42px; border-radius: 13px; display: grid; place-items: center; background: var(--moss); color: #fff; font-size: 21px; flex: none; }
.brand-name { font-weight: 700; font-size: 15.5px; line-height: 1.2; }
.brand-name small { display: block; font-weight: 500; font-size: 11px; color: var(--muted); letter-spacing: .04em; font-family: var(--f-lat); }
.nav-links { display: flex; align-items: center; gap: 28px; }
.nav-links a { font-size: 14px; font-weight: 500; position: relative; white-space: nowrap; }
.nav-links a::after { content:""; position:absolute; left:0; right:100%; bottom:-6px; height:2px; background: var(--ember); transition: right .25s; }
.nav-links a:hover::after { right: 0; }
.nav-cta { display: flex; align-items: center; gap: 14px; }

/* ===================== Section scaffolding ===================== */
section { position: relative; }
.section { padding-block: clamp(64px, 9vw, 116px); }
.section.alt { background: var(--bg-2); }
.section.forest { background: var(--forest); color: var(--on-dark); }

.eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--f-lat); font-size: 12.5px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: var(--moss-ink); }
.eyebrow::before { content:""; width: 24px; height: 1.5px; background: var(--ember); display: inline-block; }
.section.forest .eyebrow { color: color-mix(in srgb, var(--on-dark) 78%, var(--ember)); }
.section.forest .eyebrow::before { background: var(--ember); }
.section-title { font-family: var(--f-head); font-size: clamp(27px, 3.6vw, 42px); line-height: 1.38; margin-top: 18px; }
.section-lead { margin-top: 18px; max-width: 60ch; color: var(--muted); font-size: 16px; }
.section.forest .section-lead { color: color-mix(in srgb, var(--on-dark) 78%, transparent); }
.head-center { text-align: center; }
.head-center .eyebrow { justify-content: center; }
.head-center .section-lead { margin-inline: auto; }

/* ===================== Placeholder media ===================== */
.ph { position: relative; background:
    repeating-linear-gradient(135deg, color-mix(in srgb, var(--moss) 10%, transparent) 0 2px, transparent 2px 12px), var(--moss-soft);
  border: 1px solid var(--line); border-radius: var(--radius-lg); display: grid; place-items: center; color: var(--muted); overflow: hidden; }
.ph span { font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 12px; letter-spacing: .04em; background: var(--card); padding: 6px 12px; border-radius: 999px; border: 1px solid var(--line); color: var(--forest-2); }

/* ===================== Hero ===================== */
.hero { position: relative; min-height: clamp(560px, 88vh, 880px); display: flex; align-items: flex-end; overflow: hidden; color: var(--on-dark); }
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg .ph { width: 100%; height: 100%; border-radius: 0; border: none; place-items: start center; padding-top: 92px; background:
    repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 2px, transparent 2px 16px),
    linear-gradient(180deg, #314a37, #1d2b22 86%); }
.hero-bg .ph span { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.2); color: #fff; }
.hero::after { content:""; position: absolute; inset: 0; z-index: 1; background: linear-gradient(180deg, rgba(29,43,34,.18) 0%, rgba(29,43,34,.05) 38%, rgba(29,43,34,.82) 100%); }
.hero-inner { position: relative; z-index: 2; width: 100%; padding-bottom: clamp(48px, 7vw, 92px); padding-top: 120px; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: 9px; font-size: 13px; font-weight: 600; background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.24); backdrop-filter: blur(4px); padding: 7px 16px; border-radius: 999px; letter-spacing: .02em; }
.hero-eyebrow .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--ember); }
.hero h1 { font-family: var(--f-head); font-size: clamp(36px, 6.4vw, 76px); line-height: 1.28; margin-top: 22px; text-shadow: 0 2px 30px rgba(0,0,0,.3); }
.hero-sub { margin-top: 22px; font-size: clamp(16px, 2vw, 19px); max-width: 44ch; color: color-mix(in srgb, var(--on-dark) 92%, transparent); line-height: 1.9; }
.hero-actions { margin-top: 32px; display: flex; flex-wrap: wrap; gap: 14px; }
.hero-stats { margin-top: 44px; display: flex; flex-wrap: wrap; gap: 16px 40px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,.2); }
.hero-stats .num { font-family: var(--f-lat); font-weight: 600; font-size: clamp(26px, 3.4vw, 36px); line-height: 1; }
.hero-stats .num em { font-style: normal; font-size: .56em; margin-left: 3px; color: color-mix(in srgb, var(--on-dark) 80%, var(--ember)); }
.hero-stats .lbl { font-size: 12.5px; margin-top: 8px; color: color-mix(in srgb, var(--on-dark) 78%, transparent); }

/* ===================== Features ===================== */
.feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 52px; }
.feat { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 30px 28px 32px; transition: transform .18s, box-shadow .2s, border-color .2s; box-shadow: var(--shadow-sm); }
.feat:hover { transform: translateY(-4px); box-shadow: var(--shadow); border-color: color-mix(in srgb, var(--moss) 34%, var(--line)); }
.feat .ico { width: 52px; height: 52px; border-radius: 15px; background: var(--moss-soft); display: grid; place-items: center; margin-bottom: 18px; }
.feat .ico svg { width: 27px; height: 27px; stroke: var(--moss-ink); fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.feat h3 { font-size: 19px; }
.feat p { font-size: 14.5px; color: var(--muted); margin-top: 10px; }

/* ===================== Site types ===================== */
.type-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 52px; }
.type { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm); transition: transform .18s, box-shadow .2s; }
.type:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.type-photo { aspect-ratio: 16/10; width: 100%; border-radius: 0; border: none; border-bottom: 1px solid var(--line); }
.type-body { padding: 24px 26px 26px; display: flex; flex-direction: column; gap: 14px; flex: 1; }
.type-body .top { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.type-body h3 { font-size: 21px; }
.type-body .cap { font-size: 12.5px; color: var(--muted); font-weight: 500; white-space: nowrap; }
.type-body p { font-size: 14.5px; color: var(--muted); }
.type-price { margin-top: auto; padding-top: 16px; border-top: 1px dashed var(--line); display: flex; align-items: baseline; gap: 6px; }
.type-price .yen { font-family: var(--f-lat); font-weight: 600; font-size: 26px; color: var(--ember-ink); }
.type-price .unit { font-size: 12.5px; color: var(--muted); }

/* ===================== Pricing ===================== */
.price-wrap { margin-top: 52px; display: grid; grid-template-columns: 1.1fr .9fr; gap: 22px; align-items: start; }
.price-table { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); }
.price-row { display: grid; grid-template-columns: 1.4fr 1fr 1fr; align-items: center; padding: 18px 26px; border-bottom: 1px solid var(--line); }
.price-row:last-child { border-bottom: none; }
.price-row.head { background: var(--forest); color: var(--on-dark); font-weight: 700; font-size: 13.5px; letter-spacing: .02em; }
.price-row .plan { font-weight: 700; font-size: 15.5px; }
.price-row .plan small { display: block; font-weight: 500; font-size: 12px; color: var(--muted); }
.price-row .v { font-family: var(--f-lat); font-weight: 600; font-size: 18px; color: var(--ink); }
.price-row .v em { font-style: normal; font-size: 12px; color: var(--muted); margin-left: 2px; }
.price-note { background: var(--moss-soft); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 26px 28px; }
.price-note h4 { font-size: 16px; display: flex; align-items: center; gap: 9px; }
.price-note ul { margin-top: 14px; display: grid; gap: 9px; }
.price-note li { position: relative; padding-left: 20px; font-size: 14px; color: var(--forest-2); }
.price-note li::before { content:""; position: absolute; left: 2px; top: .62em; width: 7px; height: 7px; border-radius: 50%; background: var(--moss); }

/* ===================== Amenities (forest) ===================== */
.amen-grid { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 48px; }
.amen { display: inline-flex; align-items: center; gap: 10px; font-size: 14.5px; font-weight: 500; padding: 12px 20px; border-radius: 999px; background: color-mix(in srgb, var(--on-dark) 8%, transparent); border: 1px solid color-mix(in srgb, var(--on-dark) 18%, transparent); }
.amen svg { width: 18px; height: 18px; stroke: color-mix(in srgb, var(--on-dark) 70%, var(--ember)); fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }

/* ===================== Activities ===================== */
.act-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 52px; }
.act { position: relative; border-radius: var(--radius-lg); overflow: hidden; aspect-ratio: 3/4; border: 1px solid var(--line); }
.act .ph { width: 100%; height: 100%; border: none; border-radius: 0; }
.act .cap { position: absolute; left: 0; right: 0; bottom: 0; z-index: 2; padding: 20px 18px 18px; color: #fff; background: linear-gradient(180deg, transparent, rgba(29,43,34,.86)); }
.act .cap .no { font-family: var(--f-lat); font-size: 12px; font-weight: 600; opacity: .85; }
.act .cap h4 { font-size: 17px; margin-top: 4px; }

/* ===================== Gallery ===================== */
.gallery { margin-top: 52px; display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 180px; gap: 14px; }
.gallery .ph { width: 100%; height: 100%; }
.gallery .g-wide { grid-column: span 2; }
.gallery .g-tall { grid-row: span 2; }

/* ===================== Access ===================== */
.access-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: clamp(28px, 4vw, 56px); margin-top: 52px; align-items: stretch; }
.access-map { border-radius: var(--radius-lg); overflow: hidden; min-height: 340px; border: 1px solid var(--line); }
.access-map .ph { width: 100%; height: 100%; }
.access-info { display: flex; flex-direction: column; gap: 22px; }
.access-row { display: grid; grid-template-columns: 110px 1fr; gap: 16px; padding-bottom: 20px; border-bottom: 1px solid var(--line); }
.access-row:last-child { border-bottom: none; padding-bottom: 0; }
.access-row .k { font-weight: 700; font-size: 14px; color: var(--moss-ink); }
.access-row .val { font-size: 14.5px; color: var(--ink); }
.access-row .val small { color: var(--muted); }

/* ===================== FAQ ===================== */
.faq-list { margin-top: 44px; max-width: 820px; margin-inline: auto; display: grid; gap: 12px; }
.faq { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
.faq summary { list-style: none; cursor: pointer; padding: 20px 24px; display: flex; align-items: center; gap: 16px; font-weight: 700; font-size: 16px; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary .qm { font-family: var(--f-lat); font-weight: 600; color: var(--ember); flex: none; }
.faq summary .pm { margin-left: auto; flex: none; width: 22px; height: 22px; position: relative; transition: transform .25s; }
.faq summary .pm::before, .faq summary .pm::after { content:""; position: absolute; inset: 50% 2px auto; height: 2px; background: var(--ember); transform: translateY(-50%); }
.faq summary .pm::after { transform: translateY(-50%) rotate(90deg); transition: opacity .2s; }
.faq[open] summary .pm::after { opacity: 0; }
.faq-a { padding: 0 24px 22px 60px; color: var(--muted); font-size: 15px; }

/* ===================== Reserve CTA ===================== */
.reserve { position: relative; overflow: hidden; }
.reserve-card { background: var(--forest); color: var(--on-dark); border-radius: clamp(20px, 3vw, 34px); padding: clamp(44px, 6vw, 84px) clamp(28px, 6vw, 80px); text-align: center; position: relative; overflow: hidden; }
.reserve-card::before { content:""; position: absolute; inset: -50% 55% 20% -25%; background: radial-gradient(circle, color-mix(in srgb, var(--ember) 42%, transparent), transparent 64%); }
.reserve-card > * { position: relative; }
.reserve-card h2 { font-family: var(--f-head); font-size: clamp(28px, 3.8vw, 44px); line-height: 1.36; }
.reserve-card p { margin-top: 20px; color: color-mix(in srgb, var(--on-dark) 82%, transparent); font-size: 16px; max-width: 52ch; margin-inline: auto; }
.reserve-actions { margin-top: 36px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.reserve-meta { margin-top: 22px; font-size: 12.5px; color: color-mix(in srgb, var(--on-dark) 62%, transparent); }

/* ===================== Footer ===================== */
.site-footer { padding-block: 48px; border-top: 1px solid var(--line); }
.footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.footer-inner .copy { font-size: 12.5px; color: var(--muted); }
.footer-links { display: flex; gap: 22px; flex-wrap: wrap; }
.footer-links a { font-size: 13px; color: var(--muted); }
.footer-links a:hover { color: var(--moss-ink); }

/* ===================== Reveal ===================== */
@media (prefers-reduced-motion: no-preference) {
  .reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1); }
  .reveal.in { opacity: 1; transform: none; }
}

/* ===================== Responsive ===================== */
@media (max-width: 960px) {
  .feat-grid, .type-grid { grid-template-columns: repeat(2,1fr); }
  .price-wrap, .access-grid { grid-template-columns: 1fr; }
  .act-grid { grid-template-columns: repeat(2,1fr); }
  .gallery { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 680px) {
  .nav-links { display: none; }
  .feat-grid, .type-grid, .act-grid, .gallery { grid-template-columns: 1fr; }
  .gallery { grid-auto-rows: 220px; }
  .gallery .g-wide, .gallery .g-tall { grid-column: auto; grid-row: auto; }
  .nav-cta .btn-ghost { display: none; }
  .price-row { grid-template-columns: 1.3fr 1fr 1fr; padding-inline: 16px; }
  .access-row { grid-template-columns: 84px 1fr; }
}
`;
