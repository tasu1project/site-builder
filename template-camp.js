/* テンプレート: キャンプ場 / 宿泊（たすいちキャンプ場ベース） */
(function () {
  var B = window.BLD;
  var esc = B.esc, ml = B.ml;

  var TENT = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 20h16L12 3Z"/><path d="M12 9l-4 11"/><path d="M12 9l4 11"/></svg>';
  var ICONS = {
    fire: '<path d="M12 3 4 20h16L12 3Z"/><path d="M9 14l3 6 3-6"/>',
    box: '<path d="M3 7h18"/><path d="M6 7v13h12V7"/><path d="M9 11h6"/>',
    star: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    water: '<path d="M5 13c3-3 5-3 7 0s4 3 7 0"/><path d="M5 18c3-3 5-3 7 0s4 3 7 0"/>',
    pet: '<path d="M10 5a4 4 0 0 1 4 4v2"/><circle cx="7" cy="16" r="3"/><circle cx="17" cy="16" r="3"/>',
    drop: '<path d="M4 12h16"/><path d="M12 4v16"/><circle cx="12" cy="12" r="9"/>'
  };
  var ICON_KEYS = Object.keys(ICONS);

  function featHtml(f, i) {
    var ic = ICONS[f.icon] || ICONS[ICON_KEYS[i % ICON_KEYS.length]];
    return '<article class="feat"><span class="ico"><svg viewBox="0 0 24 24">' + ic + '</svg></span><h3>' + esc(f.title) + '</h3><p>' + esc(f.desc) + '</p></article>';
  }
  function typeHtml(t) {
    var media = t.photo
      ? '<div class="type-photo"><img src="' + t.photo + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block;" /></div>'
      : '<div class="ph type-photo"><span>' + esc(t.title) + '写真</span></div>';
    return '<article class="type">' + media +
      '<div class="type-body"><div class="top"><h3>' + esc(t.title) + '</h3><span class="cap">' + esc(t.cap) + '</span></div>' +
      '<p>' + esc(t.desc) + '</p><div class="type-price"><span class="yen lat">' + esc(t.price) + '</span><span class="unit">' + esc(t.unit) + '</span></div></div></article>';
  }
  function priceRowHtml(r) {
    return '<div class="price-row"><div class="plan">' + esc(r.plan) + '<small>' + esc(r.sub) + '</small></div><div class="v lat">' + esc(r.weekday) + '</div><div class="v lat">' + esc(r.holiday) + '</div></div>';
  }
  function amenHtml(a) {
    return '<span class="amen"><svg viewBox="0 0 24 24"><path d="M5 12h14M5 12a7 7 0 0 1 14 0"/></svg>' + esc(a) + '</span>';
  }
  function actHtml(a, i) {
    var n = ('0' + (i + 1)).slice(-2);
    var media = a.photo
      ? '<img src="' + a.photo + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block;" />'
      : '<div class="ph"><span>' + esc(a.title) + '</span></div>';
    return '<article class="act">' + media + '<div class="cap"><div class="no lat">' + n + '</div><h4>' + esc(a.title) + '</h4></div></article>';
  }
  function accessHtml(r) {
    return '<div class="access-row"><div class="k">' + esc(r.k) + '</div><div class="val">' + ml(r.val) + '</div></div>';
  }
  function faqHtml(f) {
    return '<details class="faq"><summary><span class="qm lat">Q</span>' + esc(f.q) + '<span class="pm"></span></summary><div class="faq-a">' + esc(f.a) + '</div></details>';
  }

  function generate(d) {
    var heroBg = (d.hero.photo)
      ? '<div class="hero-bg"><img src="' + d.hero.photo + '" alt="" style="width:100%;height:100%;object-fit:cover;" /></div>'
      : '<div class="hero-bg"><div class="ph"><span>ヒーロー写真（森・焚き火・テント）</span></div></div>';
    var gtiles = (d.gallery || []).map(function (g, i) {
      var cls = i === 0 ? 'g-wide g-tall' : (i === 3 ? 'g-wide' : '');
      return g.photo
        ? '<div class="' + cls + '" style="border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--line);"><img src="' + g.photo + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block;" /></div>'
        : '<div class="ph ' + cls + '"><span>写真</span></div>';
    }).join('');
    var galleryBlock = (d.galleryOn === false || !(d.gallery && d.gallery.length)) ? '' :
      '<section class="section alt" id="gallery"><div class="wrap"><div class="head-center"><span class="eyebrow">Gallery</span><h2 class="section-title">' + esc(d.galleryTitle) + '</h2></div>' +
      '<div class="gallery">' + gtiles + '</div></div></section>\n';

    return '<!DOCTYPE html>\n<html lang="ja">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1" />\n' +
'<title>' + esc(d.brand.name) + ' ｜ ' + esc(d.hero.h1).replace(/\n/g, '') + '</title>\n' +
'<meta name="description" content="' + esc(d.hero.sub) + '" />\n' +
'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n' +
'<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Zen+Maru+Gothic:wght@500;700&family=Outfit:wght@500;600;700&display=swap" rel="stylesheet" />\n' +
'<style>\n' + window.CAMP_CSS + '\n</style>\n</head>\n<body>\n' +

'<header class="site-header" id="header"><div class="wrap nav">' +
'<a class="brand" href="#top"><span class="brand-mark">' + TENT + '</span><span class="brand-name">' + esc(d.brand.name) + '<small>' + esc(d.brand.sub) + '</small></span></a>' +
'<nav class="nav-links"><a href="#features">魅力</a><a href="#types">サイト</a><a href="#price">料金</a><a href="#amenities">設備</a><a href="#access">アクセス</a></nav>' +
'<div class="nav-cta"><a class="btn btn-ghost" href="#gallery">写真を見る</a><a class="btn btn-primary" href="#reserve">予約する <span class="arrow">→</span></a></div>' +
'</div></header>\n<main id="top">\n' +

'<section class="hero">' + heroBg + '<div class="hero-inner wrap">' +
'<span class="hero-eyebrow"><span class="dot"></span>' + esc(d.hero.eyebrow) + '</span>' +
'<h1>' + ml(d.hero.h1) + '</h1><p class="hero-sub">' + esc(d.hero.sub) + '</p>' +
'<div class="hero-actions"><a class="btn btn-primary" href="#reserve">' + esc(d.hero.cta1) + ' <span class="arrow">→</span></a><a class="btn btn-light" href="#types">' + esc(d.hero.cta2) + '</a></div>' +
'<div class="hero-stats">' + (d.hero.stats || []).map(function (s) { return '<div class="stat"><div class="num lat">' + esc(s.num) + '<em>' + esc(s.unit) + '</em></div><div class="lbl">' + esc(s.label) + '</div></div>'; }).join('') + '</div>' +
'</div></section>\n' +

'<section class="section" id="features"><div class="wrap"><span class="eyebrow">Features</span><h2 class="section-title">' + esc(d.featuresTitle) + '</h2><p class="section-lead">' + esc(d.featuresLead) + '</p>' +
'<div class="feat-grid">' + (d.features || []).map(featHtml).join('') + '</div></div></section>\n' +

'<section class="section alt" id="types"><div class="wrap"><span class="eyebrow">Site Types</span><h2 class="section-title">' + esc(d.typesTitle) + '</h2><p class="section-lead">' + esc(d.typesLead) + '</p>' +
'<div class="type-grid">' + (d.types || []).map(typeHtml).join('') + '</div></div></section>\n' +

'<section class="section" id="price"><div class="wrap"><span class="eyebrow">Price</span><h2 class="section-title">' + esc(d.priceTitle) + '</h2><p class="section-lead">' + esc(d.priceLead) + '</p>' +
'<div class="price-wrap"><div class="price-table"><div class="price-row head"><div>プラン</div><div>平日</div><div>休日・休前日</div></div>' +
(d.priceRows || []).map(priceRowHtml).join('') + '</div>' +
'<aside class="price-note"><h4>ご利用の前に</h4><ul>' + B.lis(d.priceNotes) + '</ul></aside></div></div></section>\n' +

'<section class="section forest" id="amenities"><div class="wrap"><span class="eyebrow">Facilities</span><h2 class="section-title">' + esc(d.amenTitle) + '</h2><p class="section-lead">' + esc(d.amenLead) + '</p>' +
'<div class="amen-grid">' + (d.amenities || []).map(amenHtml).join('') + '</div></div></section>\n' +

'<section class="section"><div class="wrap"><span class="eyebrow">Activities</span><h2 class="section-title">' + esc(d.actTitle) + '</h2><p class="section-lead">' + esc(d.actLead) + '</p>' +
'<div class="act-grid">' + (d.activities || []).map(actHtml).join('') + '</div></div></section>\n' +

galleryBlock +

'<section class="section" id="access"><div class="wrap"><span class="eyebrow">Access</span><h2 class="section-title">アクセス</h2>' +
'<div class="access-grid"><div class="access-map"><div class="ph"><span>地図（Googleマップ埋め込み）</span></div></div>' +
'<div class="access-info">' + (d.access || []).map(accessHtml).join('') + '</div></div></div></section>\n' +

'<section class="section alt" id="faq"><div class="wrap"><div class="head-center"><span class="eyebrow">FAQ</span><h2 class="section-title">よくあるご質問</h2></div>' +
'<div class="faq-list">' + (d.faq || []).map(faqHtml).join('') + '</div></div></section>\n' +

'<section class="section reserve" id="reserve"><div class="wrap"><div class="reserve-card"><h2>' + ml(d.reserve.heading) + '</h2><p>' + esc(d.reserve.sub) + '</p>' +
'<div class="reserve-actions"><a class="btn btn-primary" href="' + esc(d.reserve.url || '#') + '" target="_blank" rel="noopener">' + esc(d.reserve.button) + ' <span class="arrow">→</span></a>' +
(d.reserve.tel ? '<a class="btn btn-light" href="tel:' + esc(d.reserve.tel) + '">お電話：' + esc(d.reserve.tel) + '</a>' : '') + '</div>' +
'<p class="reserve-meta">' + esc(d.reserve.meta) + '</p></div></div></section>\n' +

'</main>\n<footer class="site-footer"><div class="wrap footer-inner">' +
'<div class="brand"><span class="brand-mark">' + TENT + '</span><span class="brand-name">' + esc(d.brand.name) + '<small>' + esc(d.footer.sub) + '</small></span></div>' +
'<nav class="footer-links"><a href="#features">魅力</a><a href="#types">サイトタイプ</a><a href="#price">料金</a><a href="#access">アクセス</a><a href="#reserve">予約</a></nav>' +
'<div class="copy lat">' + esc(d.footer.copy) + '</div></div></footer>\n' +

'<script>\n(function(){var h=document.getElementById("header");function s(){if(window.scrollY>8)h.classList.add("scrolled");else h.classList.remove("scrolled");}window.addEventListener("scroll",s,{passive:true});s();var b=document.querySelectorAll(".section .wrap > *");b.forEach(function(e){e.classList.add("reveal");});if("IntersectionObserver" in window){var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{threshold:0.08,rootMargin:"0px 0px -40px 0px"});b.forEach(function(e){io.observe(e);});}else{b.forEach(function(e){e.classList.add("in");});}})();\n</' + 'script>\n</body>\n</html>';
  }

  var defaults = {
    brand: { name: 'たすいちキャンプ場', sub: 'TASUICHI CAMP' },
    hero: {
      photo: '', eyebrow: '標高800m・山あいの森のキャンプ場',
      h1: '森と焚き火の、\nゆるやかな時間。',
      sub: '手ぶらでも、本格派でも。木々に囲まれたサイトで、火を囲み、星を眺める。何もしない贅沢を、たすいちキャンプ場で。',
      cta1: '予約する', cta2: 'サイトを見る',
      stats: [
        { num: '32', unit: '区画', label: 'オート / グランピング / コテージ' },
        { num: '800', unit: 'm', label: '標高・夏も涼しい' },
        { num: '25', unit: '分', label: '最寄ICから車で' }
      ]
    },
    featuresTitle: 'たすいちキャンプ場の、6つの魅力',
    featuresLead: '初めてのファミリーから、こだわりのソロキャンパーまで。森のなかで思い思いに過ごせる環境を整えています。',
    features: [
      { icon: 'fire', title: '直火OKの焚き火サイト', desc: '焚き火台があれば直火エリアで本格的に。薪は売店で販売しています。' },
      { icon: 'box', title: '手ぶらで楽しめるレンタル', desc: 'テント・タープ・寝袋・調理器具まで完備。道具がなくても気軽に。' },
      { icon: 'star', title: '降るような星空', desc: '標高800m・街灯の少ない立地。晴れた夜は満天の星が広がります。' },
      { icon: 'water', title: 'すぐそばを流れる清流', desc: '場内から歩いてすぐの川で、水遊びや川のせせらぎを楽しめます。' },
      { icon: 'pet', title: 'ペットといっしょに', desc: '指定サイトはペット同伴OK。ドッグランも併設しています。' },
      { icon: 'drop', title: '清潔な水回り・温水シャワー', desc: '水洗トイレ・炊事場・温水シャワーを完備。はじめての方も安心です。' }
    ],
    typesTitle: '過ごし方で選ぶ、サイトタイプ',
    typesLead: 'スタイルに合わせて3つのサイトから。料金は1泊あたりの目安です。',
    types: [
      { title: 'オートサイト', cap: '最大5名 / 区画約100㎡', desc: '車の横付けOK。広めの区画で、ファミリーやグループにおすすめの定番サイトです。', price: '¥5,500', unit: '〜 / 泊（1区画）', photo: '' },
      { title: 'グランピングテント', cap: '最大4名 / 設営済み', desc: 'ベッド・家具付きの常設テント。手ぶらで快適に、特別な森の夜を。', price: '¥16,000', unit: '〜 / 泊（1棟）', photo: '' },
      { title: 'コテージ', cap: '最大6名 / 冷暖房完備', desc: 'キッチン・バス・トイレ付きの一棟貸し。寒い季節やお子様連れにも。', price: '¥22,000', unit: '〜 / 泊（1棟）', photo: '' }
    ],
    priceTitle: '料金プラン',
    priceLead: '宿泊・デイキャンプの基本料金です。ハイシーズン（GW・夏休み・連休）は別料金となります。',
    priceRows: [
      { plan: 'オートサイト', sub: '1区画 / 1泊', weekday: '¥5,500', holiday: '¥7,000' },
      { plan: 'グランピング', sub: '1棟 / 1泊・2名', weekday: '¥16,000', holiday: '¥19,000' },
      { plan: 'コテージ', sub: '1棟 / 1泊・4名', weekday: '¥22,000', holiday: '¥26,000' },
      { plan: 'デイキャンプ', sub: '1区画 / 10:00–17:00', weekday: '¥3,000', holiday: '¥4,000' }
    ],
    priceNotes: ['料金は税込・1区画/1棟あたりの目安です。', '追加の大人 ¥1,100 / 小学生 ¥550（未就学児は無料）。', 'チェックイン 13:00 / チェックアウト 11:00。', 'ペット同伴サイトは1頭 ¥550。', 'レンタル品・薪・食材は別途。詳しくは予約時にご案内します。'],
    amenTitle: '設備・アメニティ',
    amenLead: '必要なものは場内でそろう。だから、はじめてでも身軽に楽しめます。',
    amenities: ['炊事場（給湯あり）', '水洗トイレ', '温水シャワー', '売店・薪販売', 'レンタル用品一式', '焚き火台・BBQコンロ', 'ドッグラン', '無料Wi‑Fi（管理棟周辺）', '屋根付き炊事棟', '自動販売機'],
    actTitle: '森での、過ごし方',
    actLead: '何もしない時間も、思いきり遊ぶ時間も。季節ごとに表情を変える森が舞台です。',
    activities: [ { title: '焚き火を囲む夜', photo: '' }, { title: '清流で川遊び', photo: '' }, { title: '満天の星空観察', photo: '' }, { title: '森のBBQ', photo: '' } ],
    galleryOn: true, galleryTitle: 'たすいちの風景',
    gallery: [ { photo: '' }, { photo: '' }, { photo: '' }, { photo: '' }, { photo: '' }, { photo: '' } ],
    access: [
      { k: '所在地', val: '〒000‑0000\n○○県○○郡たすいち村 森ヶ丘1‑2‑3\n※サンプル住所' },
      { k: 'お車で', val: '○○IC から約25分。場内に無料駐車場あり（1サイト1台）。' },
      { k: '電車・バス', val: '○○線「○○駅」下車、送迎バスで約20分（要予約）。' },
      { k: '受付時間', val: 'チェックイン 13:00–17:00 / チェックアウト 〜11:00\n管理棟 9:00–18:00' }
    ],
    faq: [
      { q: 'キャンプ道具がなくても大丈夫ですか？', a: 'はい。テント・寝袋・調理器具などのレンタルを用意しています。グランピング・コテージなら設営不要で手ぶらでお越しいただけます。' },
      { q: '雨の日でもキャンプできますか？', a: '屋根付きの炊事棟があり、雨天でも調理・食事が可能です。荒天時はコテージへの変更やキャンセルもご相談ください。' },
      { q: 'ペットは連れて行けますか？', a: '指定のペット同伴サイトとコテージで受け入れています。場内ではリードの着用をお願いしています。ドッグランもご利用いただけます。' },
      { q: '焚き火・直火はできますか？', a: '焚き火台のご利用が基本です。指定の直火エリアでは直火も可能です。薪は売店で販売しています。' },
      { q: 'チェックイン・チェックアウトの時間は？', a: 'チェックインは13:00〜17:00、チェックアウトは11:00です。アーリーチェックインは空き状況により承ります。' },
      { q: '予約のキャンセルはできますか？', a: '7日前まで無料、以降は規定のキャンセル料を申し受けます。詳細は予約時にご案内します。' }
    ],
    reserve: {
      heading: '森の週末を、\n予約しませんか。',
      sub: '空き状況の確認・ご予約はオンラインから。ご不明な点はお電話でもお気軽にどうぞ。',
      button: 'オンライン予約へ', url: '', tel: '000-000-0000', meta: '受付時間 9:00–18:00'
    },
    footer: { sub: 'TASUICHI CAMP', copy: '© 2026 TASUICHI CAMP' }
  };

  var schema = [
    { title: 'ヘッダー・基本', fields: [
      { path: 'brand.name', label: 'キャンプ場名', kind: 'text' }, { path: 'brand.sub', label: '英字表記（小さく）', kind: 'text' }
    ]},
    { title: 'ヒーロー（最上部）', fields: [
      { path: 'hero.photo', label: '背景写真', kind: 'image' }, { path: 'hero.eyebrow', label: '上の小見出し', kind: 'text' },
      { path: 'hero.h1', label: 'キャッチコピー（改行可）', kind: 'textarea' }, { path: 'hero.sub', label: '説明文', kind: 'textarea' },
      { path: 'hero.cta1', label: 'メインボタン', kind: 'text' }, { path: 'hero.cta2', label: 'サブボタン', kind: 'text' }
    ], repeats: [
      { path: 'hero.stats', itemLabel: '数字', addLabel: '＋ 数字を追加', fields: [
        { key: 'num', label: '数字', kind: 'text' }, { key: 'unit', label: '単位', kind: 'text' }, { key: 'label', label: 'ラベル', kind: 'text' }
      ]}
    ]},
    { title: '魅力・特長', fields: [
      { path: 'featuresTitle', label: '見出し', kind: 'text' }, { path: 'featuresLead', label: 'リード文', kind: 'textarea' }
    ], repeats: [
      { path: 'features', itemLabel: '魅力', addLabel: '＋ 魅力を追加', fields: [
        { key: 'title', label: 'タイトル', kind: 'text' }, { key: 'desc', label: '説明', kind: 'textarea' },
        { key: 'icon', label: 'アイコン', kind: 'select', options: [
          { value: 'fire', label: '焚き火' }, { value: 'box', label: '道具・レンタル' }, { value: 'star', label: '星' },
          { value: 'water', label: '川・水' }, { value: 'pet', label: 'ペット' }, { value: 'drop', label: '水回り' }
        ]}
      ]}
    ]},
    { title: 'サイトタイプ', fields: [
      { path: 'typesTitle', label: '見出し', kind: 'text' }, { path: 'typesLead', label: 'リード文', kind: 'textarea' }
    ], repeats: [
      { path: 'types', itemLabel: 'サイト', addLabel: '＋ サイトを追加', fields: [
        { key: 'title', label: '名称', kind: 'text' }, { key: 'cap', label: '定員・補足', kind: 'text' },
        { key: 'desc', label: '説明', kind: 'textarea' }, { key: 'price', label: '料金', kind: 'text' }, { key: 'unit', label: '料金の単位', kind: 'text' },
        { key: 'photo', label: '写真', kind: 'image' }
      ]}
    ]},
    { title: '料金プラン', fields: [
      { path: 'priceTitle', label: '見出し', kind: 'text' }, { path: 'priceLead', label: 'リード文', kind: 'textarea' },
      { path: 'priceNotes', label: '注意事項（1行に1つ）', kind: 'tags' }
    ], repeats: [
      { path: 'priceRows', itemLabel: '行', addLabel: '＋ 料金行を追加', fields: [
        { key: 'plan', label: 'プラン名', kind: 'text' }, { key: 'sub', label: '補足', kind: 'text' },
        { key: 'weekday', label: '平日料金', kind: 'text' }, { key: 'holiday', label: '休日料金', kind: 'text' }
      ]}
    ]},
    { title: '設備・アメニティ', fields: [
      { path: 'amenTitle', label: '見出し', kind: 'text' }, { path: 'amenLead', label: 'リード文', kind: 'textarea' },
      { path: 'amenities', label: '設備（1行に1つ）', kind: 'tags' }
    ]},
    { title: '過ごし方', fields: [
      { path: 'actTitle', label: '見出し', kind: 'text' }, { path: 'actLead', label: 'リード文', kind: 'textarea' }
    ], repeats: [
      { path: 'activities', itemLabel: '過ごし方', addLabel: '＋ 過ごし方を追加', fields: [ { key: 'title', label: 'タイトル', kind: 'text' }, { key: 'photo', label: '写真', kind: 'image' } ]}
    ]},
    { title: 'ギャラリー', fields: [
      { path: 'galleryTitle', label: '見出し', kind: 'text' }
    ], repeats: [
      { path: 'gallery', itemLabel: '写真', addLabel: '＋ 写真を追加', fields: [ { key: 'photo', label: '写真', kind: 'image' } ]}
    ]},
    { title: 'アクセス', repeats: [
      { path: 'access', itemLabel: '項目', addLabel: '＋ 項目を追加', fields: [
        { key: 'k', label: '見出し', kind: 'text' }, { key: 'val', label: '内容（改行可）', kind: 'textarea' }
      ]}
    ]},
    { title: 'FAQ', repeats: [
      { path: 'faq', itemLabel: '質問', addLabel: '＋ 質問を追加', fields: [
        { key: 'q', label: '質問', kind: 'text' }, { key: 'a', label: '回答', kind: 'textarea' }
      ]}
    ]},
    { title: '予約・お問い合わせ', fields: [
      { path: 'reserve.heading', label: '見出し（改行可）', kind: 'textarea' }, { path: 'reserve.sub', label: '説明文', kind: 'textarea' },
      { path: 'reserve.button', label: 'ボタン文言', kind: 'text' }, { path: 'reserve.url', label: '予約サイトURL', kind: 'text' },
      { path: 'reserve.tel', label: '電話番号', kind: 'text' }, { path: 'reserve.meta', label: '注記', kind: 'text' }
    ]},
    { title: 'フッター', fields: [
      { path: 'footer.sub', label: '補足', kind: 'text' }, { path: 'footer.copy', label: 'コピーライト', kind: 'text' }
    ]}
  ];

  window.TEMPLATES = window.TEMPLATES || {};
  window.TEMPLATES.camp = {
    key: 'camp', label: 'キャンプ場 / 宿泊',
    desc: 'キャンプ場・グランピング・宿泊施設向け。魅力／サイト／料金／アクセスを案内。',
    iconBg: '#3c6b46',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 20h16L12 3Z"/><path d="M12 9l-4 11"/><path d="M12 9l4 11"/></svg>',
    previewW: 1280, generate: generate, defaults: defaults, schema: schema
  };
})();
