/* テンプレート: 講師 / コンサル（中司聖子LPベース） */
(function () {
  var B = window.BLD;
  var esc = B.esc, ml = B.ml;

  var ACCENTS = [
    { value: 'blue',   color: '#2b6cb0' },
    { value: 'teal',   color: '#1f8a83' },
    { value: 'indigo', color: '#4a57c9' },
    { value: 'amber',  color: '#bf7a2e' }
  ];

  function statHtml(s) {
    return '<div class="stat"><div class="num lat">' + esc(s.num) + '<em>' + esc(s.unit) + '</em></div><div class="lbl">' + esc(s.label) + '</div></div>';
  }
  function svcHtml(s, i) {
    var n = ('0' + (i + 1)).slice(-2);
    return '<article class="svc"><span class="ico lat">' + n + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.desc) + '</p></article>';
  }
  function pkgHtml(p) {
    return '<article class="pkg"><div class="pkg-head"><span class="tag lat">' + esc(p.tag) + '</span><h3>' + esc(p.title) + '</h3></div>' +
      '<div class="pkg-body"><div><div class="label">内容</div><ul class="pkg-list">' + B.lis(p.items) + '</ul></div>' +
      '<div class="pkg-target">対象：<b>' + esc(p.target) + '</b></div></div></article>';
  }
  function skillHtml(s) {
    return '<div class="skill"><h4><span class="b"></span>' + esc(s.label) + '</h4><div class="tags">' +
      (s.tags || []).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div></div>';
  }
  function strengthHtml(s, i) {
    var n = ('0' + (i + 1)).slice(-2);
    return '<div class="strength"><span class="no lat">' + n + '</span><div><h4>' + esc(s.title) + '</h4><p>' + esc(s.desc) + '</p></div></div>';
  }
  function achListHtml(l) {
    return '<div><h4>' + esc(l.title) + '</h4><ul>' + B.lis(l.items) + '</ul>' +
      (l.note ? '<p style="font-size:14px;color:color-mix(in srgb,var(--on-navy) 72%,transparent);margin-top:14px;">' + esc(l.note) + '</p>' : '') + '</div>';
  }
  function styleHtml(s, i) {
    var n = ('0' + (i + 1)).slice(-2);
    return '<div class="style-item"><div class="no lat">' + n + '</div><h4>' + ml(s.title) + '</h4></div>';
  }
  function voiceHtml(v) {
    return '<article class="voice"><div class="quote lat">&ldquo;</div><p>' + esc(v.text) + '</p>' +
      '<div class="who"><span class="av lat">' + esc(v.avatar) + '</span><span><b>' + esc(v.who) + '</b><small>' + esc(v.role) + '</small></span></div></article>';
  }
  function faqHtml(f) {
    return '<details class="faq"><summary><span class="qm lat">Q</span>' + esc(f.q) + '<span class="pm"></span></summary><div class="faq-a">' + esc(f.a) + '</div></details>';
  }

  function generate(d) {
    var photo = (d.profile && d.profile.photo) ? '<img src="' + d.profile.photo + '" alt="' + esc(d.profile.name) + '" />' : '<span>プロフィール写真</span>';
    var photoClass = (d.profile && d.profile.photo) ? 'photo' : 'ph';
    var heroFig = (d.profile && d.profile.photo)
      ? '<div class="photo hero-photo"><img src="' + d.profile.photo + '" alt="' + esc(d.profile.name) + '" /></div>'
      : '<div class="ph hero-photo"><span>講師プロフィール写真</span></div>';

    var themesBlock = (d.themes && d.themes.length)
      ? '<div style="margin-top:56px;"><h3 style="font-size:16px;color:var(--muted);font-weight:700;">研修テーマ例</h3><div class="themes">' + B.chips(d.themes) + '</div></div>'
      : '';
    var voicesBlock = (d.voices && d.voices.length)
      ? '<section class="section" id="voices" data-screen-label="受講者の声"><div class="wrap"><div class="head-center"><span class="eyebrow"><span class="no">08</span> Voices</span><h2 class="section-title">受講者の声</h2></div><div class="voice-grid">' + d.voices.map(voiceHtml).join('') + '</div></div></section>'
      : '';
    var snsLinks = '';
    if (d.sns && d.sns.instagram) snsLinks += '<a href="' + esc(d.sns.instagram) + '" target="_blank" rel="noopener">Instagram</a>';
    if (d.sns && d.sns.x) snsLinks += '<a href="' + esc(d.sns.x) + '" target="_blank" rel="noopener">X</a>';

    return '<!DOCTYPE html>\n<html lang="ja" data-direction="' + esc(d.theme.direction) + '" data-accent="' + esc(d.theme.accent) + '" data-hero="' + esc(d.theme.heroLayout) + '">\n' +
'<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1" />\n' +
'<title>' + esc(d.brand.name) + ' ｜ ' + esc(d.brand.sub) + '</title>\n' +
'<meta name="description" content="' + esc(d.hero.sub) + '" />\n' +
'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n' +
'<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Zen+Maru+Gothic:wght@500;700&family=Outfit:wght@500;600;700&display=swap" rel="stylesheet" />\n' +
'<style>\n' + window.LP_CSS + '\n</style>\n</head>\n<body>\n' +

'<header class="site-header" id="header"><div class="wrap nav">' +
'<a class="brand" href="#top"><span class="brand-mark lat">' + esc(d.brand.initial) + '</span><span class="brand-name">' + esc(d.brand.name) + '<small>' + esc(d.brand.sub) + '</small></span></a>' +
'<nav class="nav-links"><a href="#services">サービス</a><a href="#packages">研修パッケージ</a><a href="#achievements">実績</a><a href="#profile">プロフィール</a><a href="#faq">FAQ</a></nav>' +
'<div class="nav-cta"><a class="btn btn-ghost" href="#skills">対応スキル</a><a class="btn btn-primary" href="#contact">お問い合わせ <span class="arrow">→</span></a></div>' +
'</div></header>\n<main id="top">\n' +

'<section class="hero wrap"><div class="hero-grid"><div class="hero-copy">' +
'<span class="hero-eyebrow"><span class="dot"></span>' + esc(d.hero.eyebrow) + '</span>' +
'<h1>' + B.accent(d.hero.h1, d.hero.h1Accent) + '</h1>' +
'<p class="hero-sub">' + esc(d.hero.sub) + '</p>' +
'<div class="hero-actions"><a class="btn btn-primary" href="#contact">' + esc(d.hero.cta1) + ' <span class="arrow">→</span></a><a class="btn btn-ghost" href="#packages">' + esc(d.hero.cta2) + '</a></div>' +
'<div class="hero-stats">' + (d.hero.stats || []).map(statHtml).join('') + '</div>' +
'</div><div class="hero-figure">' + heroFig +
'<div class="hero-orb"></div><div class="hero-badge"><span class="ico lat">' + esc(d.hero.badgeIco) + '</span><span><b>' + esc(d.hero.badgeTitle) + '</b><small>' + esc(d.hero.badgeSub) + '</small></span></div>' +
'</div></div></section>\n' +

'<section class="section" id="services"><div class="wrap"><span class="eyebrow"><span class="no">01</span> Services</span><h2 class="section-title">' + esc(d.servicesTitle) + '</h2><p class="section-lead">' + esc(d.servicesLead) + '</p>' +
'<div class="svc-grid">' + (d.services || []).map(svcHtml).join('') + '</div></div></section>\n' +

'<section class="section alt" id="packages"><div class="wrap"><span class="eyebrow"><span class="no">02</span> Programs</span><h2 class="section-title">' + esc(d.packagesTitle) + '</h2><p class="section-lead">' + esc(d.packagesLead) + '</p>' +
'<div class="pkg-grid">' + (d.packages || []).map(pkgHtml).join('') +
'<article class="pkg pkg-cta"><div class="pkg-head" style="background:var(--accent);"><span class="tag" style="color:#fff;opacity:.8;">Custom</span><h3>' + ml(d.packagesCustom) + '</h3></div><div class="pkg-body"><p style="color:var(--muted);font-size:14.5px;">' + esc(d.packagesCustomDesc) + '</p><div class="pkg-target" style="border:none;padding-top:8px;"><a class="btn btn-primary" href="#contact" style="width:100%;justify-content:center;">相談する <span class="arrow">→</span></a></div></div></article>' +
'</div>' + themesBlock + '</div></section>\n' +

'<section class="section navy" id="skills"><div class="wrap"><span class="eyebrow"><span class="no">03</span> Skills &amp; Tools</span><h2 class="section-title">' + esc(d.skillsTitle) + '</h2><p class="section-lead">' + esc(d.skillsLead) + '</p>' +
'<div class="skill-grid">' + (d.skills || []).map(skillHtml).join('') + '</div>' +
'<div class="biz-skills">' + (d.bizSkills || []).map(skillHtml).join('') + '</div></div></section>\n' +

'<section class="section" id="profile"><div class="wrap"><span class="eyebrow"><span class="no">04</span> Profile</span><h2 class="section-title">講師プロフィール</h2>' +
'<div class="profile-grid" style="margin-top:44px;"><div class="profile-figure"><div class="' + photoClass + ' profile-photo">' + photo + '</div>' +
'<div class="profile-card"><div class="nm">' + esc(d.profile.name) + '<em class="lat">' + esc(d.profile.nameEn) + '</em></div><div class="rl">' + esc(d.profile.role) + '</div></div></div>' +
'<div><div class="profile-bio">' + (d.profile.bio || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
'<div class="strengths">' + (d.profile.strengths || []).map(strengthHtml).join('') + '</div></div></div></div></section>\n' +

'<section class="section navy" id="achievements"><div class="wrap"><span class="eyebrow"><span class="no">05</span> Track Record</span><h2 class="section-title">主な実績</h2>' +
'<div class="ach-top">' + (d.ach.stats || []).map(function (s) { return '<div class="ach-stat"><div class="num lat">' + esc(s.num) + '<em>' + esc(s.unit) + '</em></div><div class="lbl">' + esc(s.label) + '</div></div>'; }).join('') + '</div>' +
'<div class="ach-detail">' + (d.ach.lists || []).map(achListHtml).join('') + '</div></div></section>\n' +

'<section class="section alt"><div class="wrap"><span class="eyebrow"><span class="no">06</span> Style</span><h2 class="section-title">' + esc(d.styleTitle) + '</h2><p class="section-lead">' + esc(d.styleLead) + '</p>' +
'<div class="style-grid">' + (d.styleItems || []).map(styleHtml).join('') + '</div></div></section>\n' +

voicesBlock +

'<section class="section alt" id="faq"><div class="wrap"><div class="head-center"><span class="eyebrow"><span class="no">07</span> FAQ</span><h2 class="section-title">よくあるご質問</h2></div>' +
'<div class="faq-list">' + (d.faq || []).map(faqHtml).join('') + '</div></div></section>\n' +

'<section class="section" id="contact"><div class="wrap"><div class="contact-card"><h2>' + ml(d.contact.heading) + '</h2><p>' + esc(d.contact.sub) + '</p>' +
'<div class="contact-actions"><a class="btn btn-light" href="' + esc(d.contact.formUrl || '#') + '" target="_blank" rel="noopener">' + esc(d.contact.button) + ' <span class="arrow">→</span></a></div>' +
'<p class="contact-meta">' + esc(d.contact.meta) + '</p></div></div></section>\n' +

'</main>\n<footer class="site-footer"><div class="wrap footer-inner">' +
'<div class="brand"><span class="brand-mark lat">' + esc(d.footer.initial) + '</span><span class="brand-name">' + esc(d.footer.org) + '<small>' + esc(d.footer.sub) + '</small></span></div>' +
'<nav class="footer-links"><a href="#services">サービス</a><a href="#packages">研修パッケージ</a><a href="#profile">プロフィール</a><a href="#contact">お問い合わせ</a>' + snsLinks + '</nav>' +
'<div class="copy lat">' + esc(d.footer.copy) + '</div></div></footer>\n' +

'<script>\n(function(){var h=document.getElementById("header");function s(){if(window.scrollY>8)h.classList.add("scrolled");else h.classList.remove("scrolled");}window.addEventListener("scroll",s,{passive:true});s();var b=document.querySelectorAll(".section .wrap > *, .hero-grid");b.forEach(function(e){e.classList.add("reveal");});if("IntersectionObserver" in window){var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{threshold:0.08,rootMargin:"0px 0px -40px 0px"});b.forEach(function(e){io.observe(e);});}else{b.forEach(function(e){e.classList.add("in");});}})();\n</' + 'script>\n</body>\n</html>';
  }

  var defaults = {
    theme: { direction: 'C', accent: 'amber', heroLayout: 'split' },
    brand: { initial: 'た', name: '中司 聖子', sub: 'IT研修講師 / DX・AI人材育成' },
    hero: {
      eyebrow: 'IT研修講師 / DX・AI人材育成コンサルタント',
      h1: 'ITを、楽しく。\n苦手を自信に変える。', h1Accent: '自信',
      sub: '大人の「ITコンプレックス」を、現場で使えるスキルへ。約30年・延べ1,000名以上の指導実績で、業務改善と課題解決につながるIT・DX・生成AI活用を、演習中心で育てます。',
      cta1: '研修について相談する', cta2: '研修パッケージを見る',
      stats: [
        { num: '30', unit: '年', label: 'IT講師歴（約）' },
        { num: '1,000', unit: '名+', label: '延べ指導人数' },
        { num: '100', unit: '%', label: '演習中心の実践型' }
      ],
      badgeIco: '30+', badgeTitle: '教育現場で培った実践知', badgeSub: '職業訓練校・企業研修での指導'
    },
    servicesTitle: '対応可能な業務',
    servicesLead: '研修の登壇だけでなく、カリキュラム設計から教材制作、講師育成まで。教育に必要なプロセスを一括でサポートします。',
    services: [
      { title: '企業研修講師', desc: '実務に直結するIT・DX・生成AIテーマで登壇。' },
      { title: 'IT教育カリキュラム設計', desc: '基礎→応用→実践の段階型で学習を設計。' },
      { title: '教材制作', desc: 'テキスト・スライド・演習課題まで一括制作。' },
      { title: '研修プログラム設計', desc: '目的と対象に合わせた研修全体を構成。' },
      { title: 'DX人材育成支援', desc: '現場で動けるDX人材の育成を伴走支援。' },
      { title: '生成AI活用研修', desc: 'プロンプト設計から業務活用まで実践的に。' },
      { title: 'ITツール活用研修', desc: 'Office・M365・Google Workspaceを実務目線で。' },
      { title: '講師育成支援', desc: '教える人を育てる、社内講師の育成も対応。' }
    ],
    packagesTitle: '研修パッケージ例',
    packagesLead: '代表的な研修プログラムの例です。いずれも貴社の課題・対象者に合わせてカスタマイズできます。',
    packages: [
      { tag: 'AI × Improvement', title: '生成AI × 業務改善', items: ['生成AI基礎', 'プロンプト設計', 'AI壁打ちによる思考整理', '業務改善アイデア作成', '業務特化GPTs作成'], target: '一般社員 / 管理職 / DX担当者' },
      { tag: 'Excel × Data', title: 'Excel × データ分析', items: ['Excel関数', 'ピボットテーブル', 'データ可視化', '回帰分析の基礎', '業務データ分析演習'], target: '事務職 / 管理職 / 企画部門' },
      { tag: 'M365 × Efficiency', title: 'Microsoft365 × 業務効率化', items: ['Teamsコミュニケーション', 'SharePoint情報共有', 'Formsデータ収集', 'Power Automate業務自動化'], target: '全社員' },
      { tag: 'Logic × IT', title: 'ロジカルシンキング × IT活用', items: ['ロジカルシンキング', '問題の分解', '業務改善ワークショップ', 'ITツール活用'], target: '若手社員 / 中堅社員' },
      { tag: 'Canva × Branding', title: 'Canva × 情報発信', items: ['Canva基本操作', '資料デザイン', 'SNS投稿デザイン', 'プレゼン資料作成'], target: '広報 / 営業 / SNS担当' }
    ],
    packagesCustom: '貴社専用の\n研修づくりも対応',
    packagesCustomDesc: '既存研修の分析・再設計から、新規プログラムの開発まで。目的に合わせてゼロから組み立てます。',
    themes: ['Excel業務活用', 'Excel関数実践', 'ピボットテーブル分析', 'PowerPoint資料作成', 'Wordビジネス文書', 'VBA業務自動化', 'Microsoft365業務活用', 'Teams活用', 'SharePoint情報共有', 'Power Automate自動化', '生成AIビジネス活用', 'プロンプトエンジニアリング', 'AI壁打ち思考整理', 'GPTs作成', 'ロジカルシンキング', 'プログラミング的思考', '業務改善ワークショップ', 'Canvaデザイン制作', 'SNS活用', 'WordPressサイト制作'],
    skillsTitle: '対応スキル・ツール',
    skillsLead: '幅広いITツールと、それを活かすビジネス思考の両面をカバーします。',
    skills: [
      { label: 'Office', tags: ['Word', 'Excel', 'PowerPoint', 'VBA', 'Access'] },
      { label: 'Microsoft365', tags: ['Teams', 'Outlook', 'OneDrive', 'SharePoint', 'OneNote', 'Forms', 'Power Automate', 'Power Apps', 'Power Pages'] },
      { label: 'Google Workspace', tags: ['Gmail', 'Drive', 'スプレッドシート', 'ドキュメント', 'スライド', 'フォーム', 'Keep'] },
      { label: '生成AI', tags: ['ChatGPT', 'Copilot', 'Gemini', 'Claude', 'NotebookLM'] },
      { label: 'デザイン / Web', tags: ['Canva', 'HTML', 'CSS', 'WordPress', 'CMS運用'] },
      { label: '情報発信', tags: ['Notion', 'Instagram', 'Facebook', 'LINE公式', 'X', 'note', 'ブログ'] }
    ],
    bizSkills: [
      { label: 'ビジネススキル ｜ DX関連', tags: ['情報セキュリティ', 'データ分析', 'IT活用による業務改善'] },
      { label: 'ビジネススキル ｜ 思考スキル', tags: ['ロジカルシンキング', 'プログラミング的思考', '課題解決力', '業務改善', 'レジリエンス'] }
    ],
    profile: {
      name: '中司 聖子', nameEn: 'Seiko Nakatsu', role: 'IT研修講師 / DX・AI人材育成コンサルタント', photo: '',
      bio: [
        'ITインストラクターとして約30年間、職業訓練校および企業研修においてIT教育・人材育成に従事してきました。延べ指導人数は1,000名以上にのぼります。',
        'Microsoft Office、データ分析、Microsoft365、生成AI活用など、実務で活用できるITスキル教育を中心に、カリキュラム設計、教材制作、研修登壇を行っています。',
        '単なるツール操作の教育ではなく、業務改善や課題解決につながるIT活用を重視した教育設計を強みとしています。既存の研修や教育内容を分析し、時代の変化に合わせて更新・再設計する取り組みを継続してきました。'
      ],
      strengths: [
        { title: 'ITツール × ビジネス思考の教育設計', desc: '操作習得にとどまらず、業務で「成果」につなげる視点を組み込みます。' },
        { title: 'カリキュラム〜教材〜演習を一括設計', desc: 'カリキュラム・教材・スライド・演習までワンストップで制作可能。' },
        { title: '既存研修を分析し、時代に合わせて更新', desc: '長年の教育現場の経験に基づき、内容を継続的にアップデート。' }
      ]
    },
    ach: {
      stats: [
        { num: '30', unit: '年', label: 'IT講師歴（約）' },
        { num: '1,000', unit: '名以上', label: '延べ指導人数' }
      ],
      lists: [
        { title: '既存のIT教育に導入してきた内容', items: ['ロジカルシンキング', '業務改善', '実践型演習', '生成AI活用'], note: 'ツール操作中心の教育に、思考力や業務活用の視点を組み込み、教育内容の更新を継続。' },
        { title: 'Web分野で開発したコース', items: ['Canvaによるデザイン制作', 'WordPressサイト制作', 'Local環境でのWebサイト構築'], note: '職業訓練・企業研修の両面で、新しい分野のコース開発にも取り組んでいます。' }
      ]
    },
    styleTitle: '研修スタイル',
    styleLead: '「わかる」で終わらせず、「できる」まで。演習を軸にした段階型の設計が特長です。',
    styleItems: [
      { title: '演習中心の\n実践型研修' }, { title: 'ITツール × ビジネス思考の教育' },
      { title: '基礎→応用→実践の段階型設計' }, { title: '企業課題に合わせたカスタマイズ' }
    ],
    voices: [
      { text: '操作だけでなく「どう業務に使うか」まで教わり、研修翌日から実際の業務改善に動けました。', who: '製造業 ｜ 管理職', role: 'Microsoft365 × 業務効率化', avatar: 'A' },
      { text: '生成AIを「なんとなく」から「業務の武器」に。プロンプト設計とGPTs作成が特に実践的でした。', who: 'IT企業 ｜ DX推進担当', role: '生成AI × 業務改善', avatar: 'B' },
      { text: '自社の課題に合わせて内容を組んでもらえたので、社員が「自分ごと」として学べました。', who: 'サービス業 ｜ 人事・研修担当', role: 'カスタマイズ研修', avatar: 'C' }
    ],
    faq: [
      { q: 'オンラインでの研修は可能ですか？', a: '対面・オンラインのどちらにも対応しています。研修テーマや対象人数に応じて、最適な形式をご提案します。' },
      { q: '自社の課題に合わせたカスタマイズはできますか？', a: 'はい。既存の研修内容の分析から、貴社の課題・対象者に合わせたカリキュラム・教材の設計まで対応します。' },
      { q: '教材やスライドも作成してもらえますか？', a: 'カリキュラム・テキスト・スライド・演習課題まで、一括で設計・制作が可能です。' },
      { q: '研修の時間や日数はどのくらいですか？', a: '半日・1日・複数回シリーズなど、目的に合わせて柔軟に設計します。まずはご相談ください。' },
      { q: 'まずは相談だけでも大丈夫ですか？', a: 'もちろんです。お問い合わせフォームより、課題やご要望をお気軽にお寄せください。' }
    ],
    contact: {
      heading: '研修・人材育成のご相談を\nお受けしています。',
      sub: '「操作で終わらない、成果につながるIT活用」を、貴社の課題に合わせてご提案します。まずはお気軽にお問い合わせください。',
      button: 'お問い合わせフォームへ', meta: 'Googleフォームが別タブで開きます', formUrl: ''
    },
    sns: { instagram: '', x: '' },
    footer: { initial: 'た', org: 'たすいちプロジェクト', sub: '中司 聖子 ｜ IT研修講師 / DX・AI人材育成', copy: '© 2026 たすいちプロジェクト' }
  };

  var schema = [
    { title: 'ヘッダー・基本', fields: [
      { path: 'brand.name', label: '名前 / 屋号', kind: 'text' },
      { path: 'brand.sub', label: '肩書き（小さく表示）', kind: 'text' },
      { path: 'brand.initial', label: 'ロゴの一文字', kind: 'text' }
    ]},
    { title: 'ヒーロー（最上部）', fields: [
      { path: 'hero.eyebrow', label: '上の小見出し', kind: 'text' },
      { path: 'hero.h1', label: 'キャッチコピー（改行可）', kind: 'textarea' },
      { path: 'hero.h1Accent', label: '下線を引く語（任意）', kind: 'text', hint: 'キャッチコピー内の語を入れると下線アクセントが付きます' },
      { path: 'hero.sub', label: '説明文', kind: 'textarea' },
      { path: 'hero.cta1', label: 'メインボタン', kind: 'text' },
      { path: 'hero.cta2', label: 'サブボタン', kind: 'text' },
      { path: 'hero.badgeTitle', label: 'バッジ見出し', kind: 'text' },
      { path: 'hero.badgeSub', label: 'バッジ補足', kind: 'text' }
    ], repeats: [
      { path: 'hero.stats', itemLabel: '数字', addLabel: '＋ 数字を追加', fields: [
        { key: 'num', label: '数字', kind: 'text' }, { key: 'unit', label: '単位', kind: 'text' }, { key: 'label', label: 'ラベル', kind: 'text' }
      ]}
    ]},
    { title: 'プロフィール写真', fields: [
      { path: 'profile.photo', label: '写真（ヒーロー・プロフィール共通）', kind: 'image' }
    ]},
    { title: 'サービス', fields: [
      { path: 'servicesTitle', label: '見出し', kind: 'text' }, { path: 'servicesLead', label: 'リード文', kind: 'textarea' }
    ], repeats: [
      { path: 'services', itemLabel: 'サービス', addLabel: '＋ サービスを追加', fields: [
        { key: 'title', label: 'タイトル', kind: 'text' }, { key: 'desc', label: '説明', kind: 'textarea' }
      ]}
    ]},
    { title: '研修パッケージ', fields: [
      { path: 'packagesTitle', label: '見出し', kind: 'text' }, { path: 'packagesLead', label: 'リード文', kind: 'textarea' }
    ], repeats: [
      { path: 'packages', itemLabel: 'パッケージ', addLabel: '＋ パッケージを追加', fields: [
        { key: 'tag', label: '英タグ', kind: 'text' }, { key: 'title', label: 'タイトル', kind: 'text' },
        { key: 'items', label: '内容（1行に1つ）', kind: 'tags' }, { key: 'target', label: '対象', kind: 'text' }
      ]}
    ]},
    { title: '研修テーマ例（タグ）', fields: [
      { path: 'themes', label: 'テーマ（1行に1つ・空で非表示）', kind: 'tags' }
    ]},
    { title: 'スキル・ツール', fields: [
      { path: 'skillsTitle', label: '見出し', kind: 'text' }, { path: 'skillsLead', label: 'リード文', kind: 'textarea' }
    ], repeats: [
      { path: 'skills', itemLabel: 'カテゴリ', addLabel: '＋ カテゴリを追加', fields: [
        { key: 'label', label: 'カテゴリ名', kind: 'text' }, { key: 'tags', label: 'ツール（1行に1つ）', kind: 'tags' }
      ]},
      { path: 'bizSkills', itemLabel: 'ビジネススキル', addLabel: '＋ ビジネススキルを追加', fields: [
        { key: 'label', label: 'カテゴリ名', kind: 'text' }, { key: 'tags', label: '項目（1行に1つ）', kind: 'tags' }
      ]}
    ]},
    { title: 'プロフィール本文', fields: [
      { path: 'profile.name', label: '氏名', kind: 'text' }, { path: 'profile.nameEn', label: '英字表記', kind: 'text' },
      { path: 'profile.role', label: '肩書き', kind: 'text' }, { path: 'profile.bio', label: '本文（1行＝1段落）', kind: 'tags' }
    ], repeats: [
      { path: 'profile.strengths', itemLabel: '強み', addLabel: '＋ 強みを追加', fields: [
        { key: 'title', label: 'タイトル', kind: 'text' }, { key: 'desc', label: '説明', kind: 'textarea' }
      ]}
    ]},
    { title: '実績', repeats: [
      { path: 'ach.stats', itemLabel: '数字', addLabel: '＋ 数字を追加', fields: [
        { key: 'num', label: '数字', kind: 'text' }, { key: 'unit', label: '単位', kind: 'text' }, { key: 'label', label: 'ラベル', kind: 'text' }
      ]},
      { path: 'ach.lists', itemLabel: 'リスト', addLabel: '＋ リストを追加', fields: [
        { key: 'title', label: '見出し', kind: 'text' }, { key: 'items', label: '項目（1行に1つ）', kind: 'tags' }, { key: 'note', label: '補足', kind: 'textarea' }
      ]}
    ]},
    { title: '研修スタイル', fields: [
      { path: 'styleTitle', label: '見出し', kind: 'text' }, { path: 'styleLead', label: 'リード文', kind: 'textarea' }
    ], repeats: [
      { path: 'styleItems', itemLabel: '項目', addLabel: '＋ 項目を追加', fields: [ { key: 'title', label: 'テキスト（改行可）', kind: 'textarea' } ]}
    ]},
    { title: '受講者の声', repeats: [
      { path: 'voices', itemLabel: '声', addLabel: '＋ 声を追加', fields: [
        { key: 'text', label: 'コメント', kind: 'textarea' }, { key: 'who', label: '肩書き', kind: 'text' },
        { key: 'role', label: '受講テーマ', kind: 'text' }, { key: 'avatar', label: 'アイコン文字', kind: 'text' }
      ]}
    ]},
    { title: 'FAQ', repeats: [
      { path: 'faq', itemLabel: '質問', addLabel: '＋ 質問を追加', fields: [
        { key: 'q', label: '質問', kind: 'text' }, { key: 'a', label: '回答', kind: 'textarea' }
      ]}
    ]},
    { title: 'お問い合わせ', fields: [
      { path: 'contact.heading', label: '見出し（改行可）', kind: 'textarea' }, { path: 'contact.sub', label: '説明文', kind: 'textarea' },
      { path: 'contact.button', label: 'ボタン文言', kind: 'text' }, { path: 'contact.formUrl', label: 'フォームURL', kind: 'text', hint: 'Googleフォーム等のURL' },
      { path: 'contact.meta', label: 'ボタン下の注記', kind: 'text' }
    ]},
    { title: 'フッター・SNS', fields: [
      { path: 'footer.org', label: '屋号・名称', kind: 'text' }, { path: 'footer.sub', label: '補足', kind: 'text' },
      { path: 'footer.initial', label: 'ロゴ一文字', kind: 'text' }, { path: 'footer.copy', label: 'コピーライト', kind: 'text' },
      { path: 'sns.instagram', label: 'Instagram URL', kind: 'text' }, { path: 'sns.x', label: 'X URL', kind: 'text' }
    ]},
    { title: 'デザイン', fields: [
      { path: 'theme.direction', label: '方向性', kind: 'select', options: [
        { value: 'A', label: 'A 信頼（明朝×紺）' }, { value: 'B', label: 'B モダン（ゴシック×青）' }, { value: 'C', label: 'C あたたか（やわらか）' }
      ]},
      { path: 'theme.accent', label: 'アクセント色', kind: 'accent', options: ACCENTS },
      { path: 'theme.heroLayout', label: 'ヒーロー', kind: 'seg', options: [ { value: 'split', label: '写真あり' }, { value: 'center', label: '中央寄せ' } ]}
    ]}
  ];

  window.TEMPLATES = window.TEMPLATES || {};
  window.TEMPLATES.instructor = {
    key: 'instructor', label: '講師 / コンサル',
    desc: '研修講師・士業・コンサルタント向け。プロフィール／サービス／実績を魅せる構成。',
    iconBg: '#2b6cb0',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4Z"/><path d="M21 7v6"/><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
    previewW: 1280, generate: generate, defaults: defaults, schema: schema
  };
})();
