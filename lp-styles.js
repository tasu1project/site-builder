window.LP_CSS = String.raw`/* =========================================================
   中司聖子 LP — styles
   Theme is driven by CSS variables on :root, overridden by
   [data-direction] (A/B/C) and [data-accent] for Tweaks.
   ========================================================= */

:root {
  /* Base palette (Direction A — 信頼・あたたか) */
  --navy: #16263f;
  --navy-2: #213a5e;
  --ink: #1c2738;
  --muted: #5d6779;
  --line: #e4ddd0;
  --bg: #f7f3ec;          /* warm off-white */
  --bg-2: #efe8da;        /* sand panel */
  --card: #ffffff;
  --on-navy: #f4eee2;
  --accent: #2b6cb0;      /* calm blue */
  --accent-ink: #1f5793;
  --accent-soft: #e6eef7;

  --radius: 14px;
  --radius-lg: 22px;
  --shadow: 0 1px 2px rgba(22,38,63,.05), 0 18px 40px -24px rgba(22,38,63,.28);
  --shadow-sm: 0 1px 2px rgba(22,38,63,.05), 0 8px 20px -16px rgba(22,38,63,.25);

  --maxw: 1160px;
  --gutter: clamp(20px, 5vw, 64px);

  --f-head: "Shippori Mincho B1", "Zen Kaku Gothic New", serif;
  --f-body: "Zen Kaku Gothic New", system-ui, sans-serif;
  --f-lat: "Outfit", "Zen Kaku Gothic New", sans-serif;
  --head-weight: 600;
}

/* ---- Accent options (Tweaks) ---- */
[data-accent="blue"]   { --accent:#2b6cb0; --accent-ink:#1f5793; --accent-soft:#e6eef7; }
[data-accent="teal"]   { --accent:#1f8a83; --accent-ink:#176b66; --accent-soft:#e0f1ef; }
[data-accent="indigo"] { --accent:#4a57c9; --accent-ink:#39449e; --accent-soft:#e9eaf8; }
[data-accent="amber"]  { --accent:#bf7a2e; --accent-ink:#9a6122; --accent-soft:#f6ecdc; }

/* ---- Direction B — モダン（ゴシック×ブルー） ---- */
[data-direction="B"] {
  --navy:#0f1f3d;
  --navy-2:#173863;
  --ink:#101828;
  --muted:#586273;
  --line:#e6e9ef;
  --bg:#ffffff;
  --bg-2:#f3f6fb;
  --on-navy:#eaf1fb;
  --accent-soft:#eaf2fb;
  --radius:10px;
  --radius-lg:16px;
  --f-head:"Zen Kaku Gothic New", system-ui, sans-serif;
  --head-weight:700;
}

/* ---- Direction C — あたたか（やわらか） ---- */
[data-direction="C"] {
  --navy:#3a3326;
  --navy-2:#5a4f38;
  --ink:#33302a;
  --muted:#776e60;
  --line:#e8dfcd;
  --bg:#faf5ea;
  --bg-2:#f1e7d4;
  --on-navy:#f6efe0;
  --accent-soft:#f2ebdc;
  --radius:20px;
  --radius-lg:30px;
  --f-head:"Zen Maru Gothic", "Zen Kaku Gothic New", sans-serif;
  --head-weight:700;
}

/* =========================== Reset =========================== */
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--f-body);
  color: var(--ink);
  background: var(--bg);
  line-height: 1.85;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
h1,h2,h3,h4 { margin: 0; font-weight: var(--head-weight); line-height: 1.35; letter-spacing: .01em; }
p { margin: 0; }
ul { margin: 0; padding: 0; list-style: none; }

.wrap { max-width: var(--maxw); margin-inline: auto; padding-inline: var(--gutter); }
.lat { font-family: var(--f-lat); font-feature-settings: "ss01"; letter-spacing: .01em; }

/* =========================== Buttons =========================== */
.btn {
  display: inline-flex; align-items: center; gap: .55em;
  font-family: var(--f-body); font-weight: 700; font-size: 15px;
  padding: 14px 26px; border-radius: 999px; cursor: pointer;
  border: 1px solid transparent; transition: transform .15s ease, background .2s ease, box-shadow .2s ease, color .2s;
  white-space: nowrap;
}
.btn-primary { background: var(--accent); color: #fff; box-shadow: 0 10px 22px -12px var(--accent); }
.btn-primary:hover { background: var(--accent-ink); transform: translateY(-2px); }
.btn-ghost { background: transparent; color: var(--navy); border-color: var(--line); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent-ink); background: var(--accent-soft); }
.btn-light { background: #fff; color: var(--navy); }
.btn-light:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -16px rgba(0,0,0,.4); }
.btn .arrow { transition: transform .2s; }
.btn:hover .arrow { transform: translateX(3px); }

/* =========================== Header =========================== */
.site-header {
  position: sticky; top: 0; z-index: 50;
  background: color-mix(in srgb, var(--bg) 86%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color .2s, background .2s;
}
.site-header.scrolled { border-color: var(--line); }
.nav { display: flex; align-items: center; justify-content: space-between; height: 72px; }
.brand { display: flex; align-items: center; gap: 12px; }
.brand-mark {
  width: 40px; height: 40px; border-radius: 11px; display: grid; place-items: center;
  background: var(--navy); color: var(--on-navy); font-family: var(--f-lat); font-weight: 600; font-size: 18px;
  letter-spacing: .02em;
}
.brand-name { font-weight: 700; font-size: 15px; line-height: 1.2; }
.brand-name small { display: block; font-weight: 500; font-size: 11px; color: var(--muted); letter-spacing: .02em; }
.nav-links { display: flex; align-items: center; gap: 30px; }
.nav-links a { font-size: 14px; font-weight: 500; color: var(--ink); position: relative; white-space: nowrap; }
.nav-links a::after {
  content:""; position:absolute; left:0; right:100%; bottom:-6px; height:2px;
  background: var(--accent); transition: right .25s ease;
}
.nav-links a:hover::after { right: 0; }
.nav-cta { display: flex; align-items: center; gap: 14px; }
.nav-toggle { display: none; }

/* =========================== Section scaffolding =========================== */
section { position: relative; }
.section { padding-block: clamp(64px, 9vw, 116px); }
.section.alt { background: var(--bg-2); }
.section.navy { background: var(--navy); color: var(--on-navy); }

.eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--f-lat); font-size: 12.5px; font-weight: 600; letter-spacing: .16em;
  text-transform: uppercase; color: var(--accent-ink);
}
.eyebrow .no { font-family: var(--f-lat); font-weight: 600; }
.eyebrow::before { content:""; width: 26px; height: 1.5px; background: var(--accent); display:inline-block; }
.section.navy .eyebrow { color: color-mix(in srgb, var(--on-navy) 80%, var(--accent)); }
.section.navy .eyebrow::before { background: color-mix(in srgb, var(--on-navy) 60%, var(--accent)); }

.section-title {
  font-family: var(--f-head);
  font-size: clamp(26px, 3.4vw, 40px);
  line-height: 1.4; margin-top: 18px; letter-spacing: .02em;
}
.section-lead { margin-top: 18px; max-width: 60ch; color: var(--muted); font-size: 16px; }
.section.navy .section-lead { color: color-mix(in srgb, var(--on-navy) 78%, transparent); }
.head-center { text-align: center; }
.head-center .eyebrow { justify-content: center; }
.head-center .section-lead { margin-inline: auto; }

/* =========================== Placeholder media =========================== */
.ph {
  position: relative; background:
    repeating-linear-gradient(135deg, color-mix(in srgb, var(--navy) 8%, transparent) 0 2px, transparent 2px 11px),
    var(--accent-soft);
  border: 1px solid var(--line); border-radius: var(--radius-lg);
  display: grid; place-items: center; color: var(--muted); overflow: hidden;
}
.ph span {
  font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 12px; letter-spacing: .04em;
  background: var(--card); padding: 6px 12px; border-radius: 999px; border: 1px solid var(--line);
  color: var(--navy-2);
}
.photo { border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--line); box-shadow: var(--shadow-sm); }
.photo img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 28%; display: block; }

/* =========================== Hero =========================== */
.hero { padding-top: clamp(40px, 6vw, 72px); padding-bottom: clamp(56px, 8vw, 104px); overflow: hidden; }
.hero-grid {
  display: grid; grid-template-columns: 1.35fr .65fr; gap: clamp(32px, 5vw, 72px); align-items: center;
}
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 13px; font-weight: 600; color: var(--accent-ink);
  background: var(--accent-soft); padding: 7px 15px; border-radius: 999px;
  letter-spacing: .02em;
}
.hero-eyebrow .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
.hero h1 {
  font-family: var(--f-head);
  font-size: clamp(34px, 5.4vw, 60px);
  line-height: 1.32; margin-top: 24px; letter-spacing: .015em;
}
.hero h1 .hl { color: var(--accent-ink); }
.hero h1 .u {
  background: linear-gradient(transparent 62%, color-mix(in srgb, var(--accent) 26%, transparent) 0);
}
.hero-sub { margin-top: 26px; font-size: 17px; color: var(--muted); max-width: 40ch; line-height: 1.9; }
.hero-actions { margin-top: 34px; display: flex; flex-wrap: wrap; gap: 14px; }
.hero-stats { margin-top: 40px; display: flex; flex-wrap: wrap; gap: 14px 34px; padding-top: 26px; border-top: 1px solid var(--line); }
.stat .num { font-family: var(--f-lat); font-weight: 600; font-size: clamp(26px, 3.4vw, 34px); color: var(--navy); line-height: 1; }
.stat .num em { font-style: normal; font-size: .62em; margin-left: 2px; color: var(--accent-ink); }
.stat .lbl { font-size: 12.5px; color: var(--muted); margin-top: 7px; letter-spacing: .02em; }

/* hero portrait */
.hero-figure { position: relative; width: 230px; margin-inline: auto; }
.hero-photo { aspect-ratio: 4/5; width: 100%; }
.hero-badge {
  position: static; margin: 16px auto 0;
  background: var(--card); border: 1px solid var(--line); border-radius: 14px;
  padding: 11px 14px; box-shadow: var(--shadow-sm); display: flex; align-items: center; gap: 10px;
  max-width: 230px;
}
.hero-badge .ico { width: 32px; height: 32px; border-radius: 9px; background: var(--navy); color: var(--on-navy); display: grid; place-items: center; flex: none; font-size: 13px; }
.hero-badge b { font-size: 12.5px; }
.hero-badge small { display: block; color: var(--muted); font-size: 11px; font-weight: 500; }
.hero-orb { position: absolute; inset: auto -18% -12% auto; width: 70%; aspect-ratio: 1; border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--accent-soft), transparent 70%); z-index: -1; }

/* centered hero layout variant */
[data-hero="center"] .hero-grid { grid-template-columns: 1fr; text-align: center; max-width: 880px; margin-inline: auto; }
[data-hero="center"] .hero-sub { margin-inline: auto; }
[data-hero="center"] .hero-eyebrow { margin-inline: auto; }
[data-hero="center"] .hero-actions, [data-hero="center"] .hero-stats { justify-content: center; }
[data-hero="center"] .hero-figure { display: none; }
[data-hero="center"] .hero-stats { border-top: none; max-width: 720px; margin-inline: auto; }

/* =========================== Pain / bridge =========================== */
.pain-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 44px; }
.pain {
  display: flex; gap: 14px; align-items: flex-start;
  background: var(--card); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 22px 24px; box-shadow: var(--shadow-sm);
}
.pain .q { font-family: var(--f-lat); font-weight: 600; color: var(--accent); font-size: 20px; line-height: 1.2; flex: none; }
.pain p { font-size: 15.5px; }
.pain-arrow { text-align: center; margin-top: 38px; color: var(--muted); font-size: 15px; }
.pain-arrow b { color: var(--navy); font-weight: 700; }

/* =========================== Services =========================== */
.svc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 52px; }
.svc {
  background: var(--card); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 26px 24px 28px; transition: transform .18s ease, box-shadow .2s, border-color .2s;
}
.svc:hover { transform: translateY(-4px); box-shadow: var(--shadow); border-color: color-mix(in srgb, var(--accent) 35%, var(--line)); }
.svc .n { font-family: var(--f-lat); font-size: 13px; font-weight: 600; color: var(--accent-ink); }
.svc .ico { width: 44px; height: 44px; border-radius: 12px; background: var(--accent-soft); color: var(--accent-ink);
  display: grid; place-items: center; margin: 14px 0 16px; }
.svc h3 { font-size: 17px; line-height: 1.5; }
.svc p { font-size: 14px; color: var(--muted); margin-top: 10px; }

/* =========================== Packages =========================== */
.pkg-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 52px; }
.pkg {
  background: var(--card); border: 1px solid var(--line); border-radius: var(--radius-lg);
  padding: 0; overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);
  transition: transform .18s, box-shadow .2s;
}
.pkg:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.pkg-head { padding: 24px 24px 20px; background: var(--navy); color: var(--on-navy); }
.pkg-head .tag { font-family: var(--f-lat); font-size: 12px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: color-mix(in srgb, var(--on-navy) 70%, var(--accent)); }
.pkg-head h3 { font-size: 21px; margin-top: 10px; line-height: 1.4; }
.pkg-body { padding: 22px 24px 24px; display: flex; flex-direction: column; gap: 16px; flex: 1; }
.pkg-body .label { font-size: 12px; font-weight: 700; color: var(--accent-ink); letter-spacing: .04em; }
.pkg-list li { position: relative; padding-left: 22px; font-size: 14.5px; margin-bottom: 7px; color: var(--ink); }
.pkg-list li::before { content:""; position: absolute; left: 2px; top: .62em; width: 7px; height: 7px; border-radius: 2px; background: var(--accent); }
.pkg-target { margin-top: auto; padding-top: 16px; border-top: 1px dashed var(--line); font-size: 13.5px; color: var(--muted); }
.pkg-target b { color: var(--navy); font-weight: 700; }

/* themes chips */
.themes { margin-top: 40px; display: flex; flex-wrap: wrap; gap: 10px; }
.chip {
  font-size: 13.5px; font-weight: 500; padding: 9px 16px; border-radius: 999px;
  background: var(--card); border: 1px solid var(--line); color: var(--ink);
  transition: border-color .15s, color .15s, background .15s;
}
.chip:hover { border-color: var(--accent); color: var(--accent-ink); background: var(--accent-soft); }
.section.navy .chip { background: color-mix(in srgb, var(--on-navy) 8%, transparent); border-color: color-mix(in srgb, var(--on-navy) 18%, transparent); color: var(--on-navy); }

/* =========================== Skills =========================== */
.skill-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 52px; }
.skill {
  background: color-mix(in srgb, var(--on-navy) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--on-navy) 16%, transparent);
  border-radius: var(--radius); padding: 22px 22px 24px;
}
.skill h4 { font-size: 15px; display: flex; align-items: center; gap: 9px; }
.skill h4 .b { width: 9px; height: 9px; border-radius: 50%; background: color-mix(in srgb, var(--on-navy) 55%, var(--accent)); }
.skill .tags { margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px; }
.skill .tags span {
  font-size: 12.5px; font-family: var(--f-lat); font-weight: 500; letter-spacing: .01em;
  padding: 5px 11px; border-radius: 7px;
  background: color-mix(in srgb, var(--on-navy) 10%, transparent);
  color: color-mix(in srgb, var(--on-navy) 88%, transparent);
}
.biz-skills { margin-top: 16px; display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }

/* =========================== Profile =========================== */
.profile-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(32px, 5vw, 64px); align-items: start; }
.profile-figure { position: sticky; top: 96px; }
.profile-photo { aspect-ratio: 3/4; width: 100%; }
.profile-card {
  margin-top: 16px; background: var(--card); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 18px 20px; box-shadow: var(--shadow-sm);
}
.profile-card .nm { font-family: var(--f-head); font-size: 22px; }
.profile-card .nm em { font-style: normal; font-family: var(--f-lat); font-size: 13px; color: var(--muted); margin-left: 10px; font-weight: 500; }
.profile-card .rl { font-size: 13px; color: var(--accent-ink); font-weight: 600; margin-top: 4px; }
.profile-bio p { font-size: 16px; margin-bottom: 20px; color: var(--ink); }
.profile-bio p:last-child { margin-bottom: 0; }
.strengths { margin-top: 34px; display: grid; gap: 14px; }
.strength { display: flex; gap: 16px; align-items: flex-start; background: var(--bg-2); border-radius: var(--radius); padding: 20px 22px; border: 1px solid var(--line); }
.strength .no { font-family: var(--f-lat); font-weight: 600; font-size: 22px; color: var(--accent); line-height: 1; flex: none; width: 30px; }
.strength h4 { font-size: 16px; }
.strength p { font-size: 14.5px; color: var(--muted); margin-top: 6px; }

/* =========================== Achievements (navy) =========================== */
.ach-top { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; margin-top: 48px; }
.ach-stat { border: 1px solid color-mix(in srgb, var(--on-navy) 18%, transparent); border-radius: var(--radius-lg); padding: 32px 34px; }
.ach-stat .num { font-family: var(--f-lat); font-weight: 600; font-size: clamp(42px, 6vw, 60px); line-height: 1; }
.ach-stat .num em { font-style: normal; font-size: .42em; margin-left: 6px; color: color-mix(in srgb, var(--on-navy) 75%, var(--accent)); }
.ach-stat .lbl { margin-top: 12px; font-size: 14px; color: color-mix(in srgb, var(--on-navy) 78%, transparent); }
.ach-detail { margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px 40px; }
.ach-detail h4 { font-size: 15px; margin-bottom: 14px; color: color-mix(in srgb, var(--on-navy) 90%, transparent); }
.ach-detail li { position: relative; padding-left: 22px; font-size: 14.5px; margin-bottom: 8px; color: color-mix(in srgb, var(--on-navy) 82%, transparent); }
.ach-detail li::before { content:"→"; position: absolute; left: 0; color: color-mix(in srgb, var(--on-navy) 60%, var(--accent)); }

/* =========================== Style (研修スタイル) =========================== */
.style-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 52px; }
.style-item { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px 22px; box-shadow: var(--shadow-sm); }
.style-item .no { font-family: var(--f-lat); font-weight: 600; font-size: 13px; color: var(--accent-ink); }
.style-item h4 { margin-top: 14px; font-size: 16px; line-height: 1.5; }

/* =========================== Voices =========================== */
.voice-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-top: 52px; }
.voice { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 28px 26px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; }
.voice .quote { font-family: var(--f-lat); font-size: 40px; line-height: .6; color: var(--accent); opacity: .5; height: 24px; }
.voice p { font-size: 15px; margin-top: 6px; }
.voice .who { margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--line); display: flex; align-items: center; gap: 12px; }
.voice .av { width: 42px; height: 42px; border-radius: 50%; background: var(--accent-soft); display: grid; place-items: center; color: var(--accent-ink); font-weight: 700; flex: none; font-size: 14px; }
.voice .who b { font-size: 13.5px; }
.voice .who small { display: block; color: var(--muted); font-size: 12px; font-weight: 500; }
.sample-note { margin-top: 20px; font-size: 12.5px; color: var(--muted); text-align: center; }

/* =========================== FAQ =========================== */
.faq-list { margin-top: 44px; max-width: 820px; margin-inline: auto; display: grid; gap: 12px; }
.faq { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
.faq summary {
  list-style: none; cursor: pointer; padding: 20px 24px; display: flex; align-items: center; gap: 16px;
  font-weight: 700; font-size: 16px;
}
.faq summary::-webkit-details-marker { display: none; }
.faq summary .qm { font-family: var(--f-lat); font-weight: 600; color: var(--accent); flex: none; }
.faq summary .pm { margin-left: auto; flex: none; width: 22px; height: 22px; position: relative; transition: transform .25s; }
.faq summary .pm::before, .faq summary .pm::after { content:""; position: absolute; inset: 50% 2px auto; height: 2px; background: var(--accent); transform: translateY(-50%); }
.faq summary .pm::after { transform: translateY(-50%) rotate(90deg); transition: opacity .2s; }
.faq[open] summary .pm::after { opacity: 0; }
.faq-a { padding: 0 24px 22px 60px; color: var(--muted); font-size: 15px; }

/* =========================== Contact (CTA) =========================== */
.contact-card {
  background: var(--navy); color: var(--on-navy); border-radius: clamp(20px, 3vw, 34px);
  padding: clamp(40px, 6vw, 76px) clamp(28px, 6vw, 80px); text-align: center; position: relative; overflow: hidden;
}
.contact-card::before { content:""; position: absolute; inset: -40% 60% 30% -20%; background: radial-gradient(circle, color-mix(in srgb, var(--accent) 40%, transparent), transparent 65%); }
.contact-card > * { position: relative; }
.contact-card h2 { font-family: var(--f-head); font-size: clamp(26px, 3.6vw, 40px); line-height: 1.4; }
.contact-card p { margin-top: 20px; color: color-mix(in srgb, var(--on-navy) 80%, transparent); font-size: 16px; max-width: 54ch; margin-inline: auto; }
.contact-actions { margin-top: 36px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.contact-meta { margin-top: 22px; font-size: 12.5px; color: color-mix(in srgb, var(--on-navy) 60%, transparent); font-family: var(--f-lat); }

/* =========================== Footer =========================== */
.site-footer { padding-block: 48px; border-top: 1px solid var(--line); }
.footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.footer-inner .copy { font-size: 12.5px; color: var(--muted); }
.footer-links { display: flex; gap: 22px; }
.footer-links a { font-size: 13px; color: var(--muted); }
.footer-links a:hover { color: var(--accent-ink); }

/* =========================== Reveal animation =========================== */
@media (prefers-reduced-motion: no-preference) {
  .reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1); }
  .reveal.in { opacity: 1; transform: none; }
}

/* =========================== Responsive =========================== */
@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-figure { display: none; }
  .hero-stats { border-top: 1px solid var(--line); }
  .svc-grid { grid-template-columns: repeat(2,1fr); }
  .pkg-grid, .voice-grid { grid-template-columns: 1fr 1fr; }
  .skill-grid { grid-template-columns: 1fr 1fr; }
  .style-grid { grid-template-columns: 1fr 1fr; }
  .profile-grid { grid-template-columns: 1fr; }
  .profile-figure { position: static; max-width: 360px; }
  .ach-top, .ach-detail { grid-template-columns: 1fr; }
}
@media (max-width: 680px) {
  .nav-links { display: none; }
  .nav-toggle { display: inline-flex; }
  .pain-grid, .svc-grid, .pkg-grid, .voice-grid, .skill-grid, .biz-skills, .style-grid { grid-template-columns: 1fr; }
  .hero h1 { font-size: clamp(30px, 9vw, 42px); }
  .nav-cta .btn-ghost { display: none; }
}
`;
