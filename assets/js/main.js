/* ==========================================================================
   QSilon Tensorv — Dynamic site renderer
   Builds every page from window.SITE (assets/js/site-data.js).
   ========================================================================== */
(function () {
  "use strict";

  const S = window.SITE;
  if (!S) return;

  /* ---------------------------- Icon library ----------------------------- */
  const ICONS = {
    voice: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v1a7 7 0 0 0 14 0v-1M12 18v4M8 22h8"/><path d="M1.5 9v4M22.5 9v4"/>',
    bot: '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M8 4h8"/><circle cx="9" cy="14" r="1.2"/><circle cx="15" cy="14" r="1.2"/><path d="M2 13v3M22 13v3"/>',
    layers: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/><path d="m14 4-4 16"/>',
    school: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
    cloud: '<path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4.3 12 3.5 3.5 0 0 0 6 19z"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6"/>',
    hospital: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
    factory: '<path d="M2 20V9l6 4V9l6 4V4h4l2 16z"/><path d="M2 20h20"/>',
    truck: '<path d="M1 4h14v12H1z"/><path d="M15 9h4l3 3v4h-7"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    bank: '<path d="M3 21h18M3 10h18M12 3l9 5H3z"/><path d="M5 10v11M9.5 10v11M14.5 10v11M19 10v11"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
    bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z"/><path d="M19 17v1a3 3 0 0 1-3 3h-3"/>',
    trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
    key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    spark: '<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/><path d="M19 17l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    map: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    whatsapp: '<path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.6z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.2-1.8-1-1 .7a4 4 0 0 1-2.4-2.4l.7-1-1-1.8z"/>',
    linkedin: '<rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 10v7M7 7v.01M11 17v-7M11 13a3 3 0 0 1 6 0v4"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    twitter: '<path d="M4 4l16 16M20 4 4 20"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 0 0-1 2.6V22"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    tick: '<path d="M20 6 9 17l-5-5"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5H3v8h4M14 21c3 0 7-1 7-8V5h-7v8h4"/>',
  };

  const icon = (name, cls = "") =>
    `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.spark}</svg>`;

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const head = (o = {}) => `
    <div class="sec-head reveal">
      ${o.eyebrow ? `<span class="eyebrow">${esc(o.eyebrow)}</span>` : ""}
      ${o.title ? `<h2>${o.title}</h2>` : ""}
      ${o.text ? `<p>${esc(o.text)}</p>` : ""}
    </div>`;

  const btn = (b, kind = "primary") =>
    b ? `<a class="btn btn-${kind}" href="${esc(b.href)}">${esc(b.label)} ${kind === "primary" ? icon("arrow") : ""}</a>` : "";

  const page = document.body.dataset.page || "home";

  /* ------------------------------- Logo mark ------------------------------ */
  // "Q" ring with a neural-network core and a forward tail, on a gradient tile.
  let logoUid = 0;
  const logoMark = (cls = "") => {
    const id = "qtg" + logoUid++;
    return `<svg class="qt-mark ${cls}" viewBox="0 0 64 64" role="img" aria-label="${esc(S.brand.name)} logo">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset=".55" stop-color="#8b5cf6"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs>
      <rect width="64" height="64" rx="16" fill="url(#${id})"/>
      <circle cx="30" cy="30" r="15" fill="none" stroke="#fff" stroke-width="6"/>
      <path d="M34 35 47 48" stroke="#fff" stroke-width="6.5" stroke-linecap="round"/>
      <path d="M23 31 30 22 37 28Z" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round" opacity=".7"/>
      <circle cx="23" cy="31" r="2.8" fill="#fff"/><circle cx="30" cy="22" r="2.8" fill="#fff"/><circle cx="37" cy="28" r="2.8" fill="#fff"/>
      <path d="M51 8.5 52.6 12.4 56.5 14 52.6 15.6 51 19.5 49.4 15.6 45.5 14 49.4 12.4Z" fill="#fff"/>
    </svg>`;
  };
  window.QT_LOGO_MARK = logoMark;
  const brandWords = S.brand.name.split(" ");
  const wordmark = `${esc(brandWords[0])}${brandWords.length > 1 ? ` <span class="grad">${esc(brandWords.slice(1).join(" "))}</span>` : ""}`;
  const slug = (t) => String(t).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  // Service visual: your own photo (image), else an animated product screen, else the icon
  const MOCKUPS = window.QT_MOCKUPS || {};
  const detailVisual = (x) => {
    const key = x.mockup || x.id;
    const fallback = MOCKUPS[key] ? MOCKUPS[key](icon) : `<div class="big-ic">${icon(x.icon)}</div>`;
    if (!x.image) return fallback;
    return `<img class="detail-img" src="${esc(x.image)}" alt="${esc(x.imageAlt || x.title)}" loading="lazy"
      onerror="this.parentElement.classList.remove('has-img');this.outerHTML=this.nextElementSibling.innerHTML"/><template>${fallback}</template>`;
  };

  /* -------------------------------- Blog --------------------------------- */
  const BLOG = window.BLOG || { posts: [] };
  const blogPosts = () => [...BLOG.posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const fmtDate = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  const readTime = (p) => {
    const words = p.content.map((b) => [b.h, b.p, b.tip, ...(b.ul || [])].join(" ")).join(" ").split(/\s+/).length;
    return Math.max(2, Math.round(words / 200));
  };
  const postMeta = (p) => `<span>${icon("clock")} ${fmtDate(p.date)}</span><span>${icon("eye")} ${readTime(p)} min read</span>`;
  // Card image: a live miniature of the article's product screen (falls back to an icon cover)
  const cover = (p) => {
    const key = p.cardMockup || p.mockup;
    if (key && MOCKUPS[key])
      return `<div class="post-cover has-shot" data-cat="${esc(p.category)}"><span class="pc-orb"></span><div class="pc-shot">${MOCKUPS[key](icon)}</div><span class="pc-badge">${icon(p.icon)}</span></div>`;
    return `<div class="post-cover" data-cat="${esc(p.category)}"><span class="pc-orb"></span><span class="pc-orb b"></span><div class="pc-ic">${icon(p.icon)}</div></div>`;
  };
  const figure = (key, caption) =>
    MOCKUPS[key]
      ? `<figure class="post-fig"><div class="detail-art glass">${MOCKUPS[key](icon)}</div>${caption ? `<figcaption>${esc(caption)}</figcaption>` : ""}</figure>`
      : "";
  const postCard = (p, i) => `
    <a class="card post-card reveal" style="--i:${i}" href="blog.html?post=${esc(p.slug)}" data-cat="${esc(p.category)}" data-text="${esc((p.title + " " + p.excerpt + " " + p.category).toLowerCase())}">
      ${cover(p)}
      <span class="tag">${esc(p.category)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.excerpt)}</p>
      <div class="post-meta">${postMeta(p)}</div>
    </a>`;
  const blogArticle = (p, posts) => {
    const url = location.origin + location.pathname + "?post=" + encodeURIComponent(p.slug);
    const body = p.content
      .map((b) =>
        b.h ? `<h2>${esc(b.h)}</h2>`
        : b.ul ? `<ul>${b.ul.map((li) => `<li>${icon("tick")}<span>${esc(li)}</span></li>`).join("")}</ul>`
        : b.tip ? `<aside class="post-tip">${icon("spark")}<p>${esc(b.tip)}</p></aside>`
        : b.img ? figure(b.img, b.caption)
        : `<p>${esc(b.p)}</p>`)
      .join("");
    const related = [...posts.filter((x) => x.slug !== p.slug && x.category === p.category), ...posts.filter((x) => x.slug !== p.slug && x.category !== p.category)].slice(0, 3);
    return `
      <section class="section blog-sec">
        <div class="container narrow">
          <article class="post reveal">
            <a class="more back" href="blog.html">← All articles</a>
            <span class="tag">${esc(p.category)}</span>
            <h1>${esc(p.title)}</h1>
            <div class="post-meta big"><span>${icon("users")} ${esc(BLOG.author || S.brand.name)}</span>${postMeta(p)}</div>
            <figure class="post-fig post-hero">
              <div class="detail-art glass">${p.mockup && MOCKUPS[p.mockup] ? MOCKUPS[p.mockup](icon) : cover(p)}</div>
              ${p.heroCaption ? `<figcaption>${esc(p.heroCaption)}</figcaption>` : ""}
            </figure>
            <div class="post-body">${body}</div>
            <div class="post-share">
              <span>Share this article</span>
              <a href="https://wa.me/?text=${encodeURIComponent(p.title + " " + url)}" target="_blank" rel="noopener" aria-label="Share on WhatsApp">${icon("whatsapp")}</a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}" target="_blank" rel="noopener" aria-label="Share on LinkedIn">${icon("linkedin")}</a>
              <button class="copy-link" data-url="${esc(url)}" aria-label="Copy link">${icon("send")}<em>Copy link</em></button>
            </div>
            <div class="post-cta">
              <div><h3>Want this for your business?</h3><p>Get a free consultation with our team.</p></div>
              <a class="btn btn-primary" href="contact.html">Talk to an expert ${icon("arrow")}</a>
            </div>
          </article>
        </div>
        ${related.length ? `
        <div class="container">
          <div class="sec-head reveal related-head"><h2>Related <span class="grad">articles</span></h2></div>
          <div class="grid g3">${related.map((r, i) => postCard(r, i)).join("")}</div>
        </div>` : ""}
      </section>`;
  };

  /* ------------------------------ Sections ------------------------------- */
  const SECTIONS = {
    hero() {
      const h = S.hero;
      return `
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-copy">
            <span class="badge reveal"><span class="dot"></span>${esc(h.badge)}</span>
            <h1 class="reveal">${h.title}</h1>
            <p class="lead reveal">${esc(h.text)}</p>
            <div class="btn-row reveal">${btn(h.primary)}${btn(h.secondary, "ghost")}</div>
            <ul class="hero-points reveal">
              ${h.highlights.map((x) => `<li>${icon("tick")} ${esc(x)}</li>`).join("")}
            </ul>
          </div>
          <div class="hero-visual reveal">
            <div class="orb"></div>
            <div class="glass dash">
              <div class="dash-top"><span></span><span></span><span></span><em>${esc(S.brand.name)} · Console</em></div>
              <div class="dash-title">We build <span class="rotator" data-words='${esc(JSON.stringify(h.rotating))}'>${esc(h.rotating[0])}</span></div>
              <div class="dash-bars">
                ${[62, 84, 48, 92, 70, 98, 76].map((v, i) => `<i style="--h:${v}%;--d:${i * 0.08}s"></i>`).join("")}
              </div>
              <div class="dash-rows">
                <div>${icon("voice")}<span>AI voice agent: 340 calls answered</span><b>Live</b></div>
                <div>${icon("bot")}<span>AI agent resolved 128 tickets</span><b>Done</b></div>
                <div>${icon("layers")}<span>ERP: 42 invoices auto-generated</span><b>Done</b></div>
                <div>${icon("school")}<span>Fee reminders sent to parents</span><b>Sent</b></div>
              </div>
            </div>
            <div class="glass float f1">${icon("bolt")} Automation on</div>
            <div class="glass float f2">${icon("shield")} Secure cloud</div>
          </div>
        </div>
      </section>`;
    },

    pageHeader() {
      const p = S.pageHeaders[page] || {};
      return `
      <section class="page-header">
        <div class="container">
          ${p.eyebrow ? `<span class="eyebrow reveal">${esc(p.eyebrow)}</span>` : ""}
          <h1 class="reveal">${p.title || ""}</h1>
          ${p.text ? `<p class="lead reveal">${esc(p.text)}</p>` : ""}
          <nav class="crumbs reveal" aria-label="Breadcrumb"><a href="index.html">Home</a> / <span>${esc((S.nav.find((n) => n.page === page) || {}).label || "")}</span></nav>
        </div>
      </section>`;
    },

    techStrip() {
      const t = S.techStrip;
      const row = t.items.map((x) => `<span>${esc(x)}</span>`).join("");
      return `
      <section class="strip">
        <p class="strip-title">${esc(t.title)}</p>
        <div class="marquee"><div class="marquee-track">${row}${row}</div></div>
      </section>`;
    },

    services() {
      const s = S.services;
      return `
      <section class="section" id="services">
        <div class="container">
          ${head(s)}
          <div class="grid g4">
            ${s.items
              .slice(0, s.homeLimit || s.items.length)
              .map(
                (x, i) => `
              <a class="card svc reveal${x.featured ? " featured" : ""}" style="--i:${i}" href="services.html#${esc(x.id)}">
                <div class="ic-wrap">${icon(x.icon)}</div>
                ${x.badge ? `<span class="new-badge">${esc(x.badge)}</span>` : ""}
                <h3>${esc(x.title)}</h3>
                <p>${esc(x.text)}</p>
                ${x.featured ? `<div class="chips">${x.features.map((f) => `<span>${esc(f)}</span>`).join("")}</div>` : ""}
                <span class="more">Learn more ${icon("arrow")}</span>
              </a>`
              )
              .join("")}
          </div>
          ${s.homeLimit && s.items.length > s.homeLimit ? `<div class="center reveal"><a class="btn btn-ghost" href="services.html">View all ${s.items.length} services ${icon("arrow")}</a></div>` : ""}
        </div>
      </section>`;
    },

    serviceDetails() {
      return `
      <section class="section">
        <div class="container stack">
          ${S.services.items
            .map(
              (x, i) => `
            <article class="detail reveal ${i % 2 ? "flip" : ""}" id="${esc(x.id)}">
              <div class="detail-art glass${x.image ? " has-img" : ""}">
                ${detailVisual(x)}
                <span class="num">0${i + 1}</span>
              </div>
              <div class="detail-copy">
                ${x.badge ? `<span class="new-badge">${esc(x.badge)}</span>` : ""}
                <h2>${esc(x.title)}</h2>
                <p class="lead">${esc(x.text)}</p>
                <ul class="checks">${x.features.map((f) => `<li>${icon("tick")} ${esc(f)}</li>`).join("")}</ul>
                <a class="btn btn-primary" href="contact.html?service=${encodeURIComponent(x.title)}">Discuss ${esc(x.title)} ${icon("arrow")}</a>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </section>`;
    },

    showcase() {
      const c = S.showcase;
      // items can be service ids or { id, mockup, example } objects
      const items = c.items
        .map((it) => {
          const o = typeof it === "string" ? { id: it } : it;
          const svc = S.services.items.find((x) => x.id === o.id);
          return svc && { ...svc, image: o.image, mockup: o.mockup || svc.mockup, text: o.example || svc.text };
        })
        .filter(Boolean);
      if (!items.length) return "";
      return `
      <section class="section alt">
        <div class="container">
          ${head(c)}
          <div class="showcase reveal" data-showcase>
            <div class="sc-tabs" role="tablist" aria-label="Product demos">
              ${items
                .map(
                  (x, i) => `
                <button class="sc-tab${i ? "" : " on"}" role="tab" aria-selected="${i ? "false" : "true"}" data-i="${i}">
                  <span class="ic-wrap sm">${icon(x.icon)}</span>
                  <span class="sc-txt"><strong>${esc(x.title)}</strong><small>${esc(x.text)}</small></span>
                  <i class="sc-prog"></i>
                </button>`
                )
                .join("")}
            </div>
            <div class="sc-stage">
              ${items
                .map(
                  (x, i) => `
                <div class="detail-art glass sc-panel${i ? "" : " on"}" role="tabpanel" data-i="${i}">
                  <template>${detailVisual(x)}</template>
                </div>`
                )
                .join("")}
              <a class="more sc-link" href="services.html">Explore all services ${icon("arrow")}</a>
            </div>
          </div>
        </div>
      </section>`;
    },

    stats() {
      return `
      <section class="section tight">
        <div class="container">
          <div class="stats glass reveal">
            ${S.stats
              .map(
                (x) => `
              <div class="stat">
                <strong>${
                  typeof x.value === "number"
                    ? `<span class="counter" data-to="${x.value}">0</span>${esc(x.suffix || "")}`
                    : esc(x.value)
                }</strong>
                <span>${esc(x.label)}</span>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
    },

    process() {
      const p = S.process;
      return `
      <section class="section">
        <div class="container">
          ${head(p)}
          <div class="steps">
            ${p.steps
              .map(
                (x, i) => `
              <div class="step reveal" style="--i:${i}">
                <div class="step-n">${String(i + 1).padStart(2, "0")}</div>
                <div class="ic-wrap">${icon(x.icon)}</div>
                <h3>${esc(x.title)}</h3>
                <p>${esc(x.text)}</p>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
    },

    industries() {
      const s = S.industries;
      return `
      <section class="section alt">
        <div class="container">
          ${head(s)}
          <div class="grid g4 inds">
            ${s.items.map((x, i) => `<div class="ind reveal" style="--i:${i}">${icon(x.icon)}<span>${esc(x.name)}</span></div>`).join("")}
          </div>
        </div>
      </section>`;
    },

    whyUs() {
      const s = S.whyUs;
      return `
      <section class="section">
        <div class="container">
          ${head(s)}
          <div class="grid g3">
            ${s.items
              .map(
                (x, i) => `
              <div class="feature reveal" style="--i:${i}">
                <div class="ic-wrap sm">${icon(x.icon)}</div>
                <div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
    },

    techStack() {
      const s = S.techStack;
      return `
      <section class="section alt">
        <div class="container">
          ${head(s)}
          <div class="grid g3">
            ${s.groups
              .map(
                (g, i) => `
              <div class="card reveal" style="--i:${i}">
                <h3>${esc(g.name)}</h3>
                <div class="chips">${g.items.map((m) => `<span>${esc(m)}</span>`).join("")}</div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
    },

    about() {
      const a = S.about;
      return `
      <section class="section">
        <div class="container about-grid">
          <div class="reveal">
            <span class="eyebrow">${esc(S.brand.name)}</span>
            <h2>${esc(a.title)}</h2>
            ${a.paragraphs.map((p) => `<p class="lead">${esc(p)}</p>`).join("")}
          </div>
          <div class="reveal about-art">
            <div class="detail-art glass">${MOCKUPS.about ? MOCKUPS.about(icon, S) : ""}</div>
          </div>
        </div>
      </section>`;
    },

    missionVision() {
      const a = S.about;
      return `
      <section class="section tight">
        <div class="container grid g2">
          <div class="card mv-card reveal"><div class="ic-wrap">${icon("rocket")}</div><h3>Our mission</h3><p>${esc(a.mission)}</p></div>
          <div class="card mv-card reveal" style="--i:1"><div class="ic-wrap">${icon("eye")}</div><h3>Our vision</h3><p>${esc(a.vision)}</p></div>
        </div>
      </section>`;
    },

    nextSteps() {
      const n = S.nextSteps;
      return `
      <section class="section alt">
        <div class="container">
          ${head(n)}
          <div class="ns-grid">
            <div class="reveal ns-art"><div class="detail-art glass">${MOCKUPS["contact-flow"] ? MOCKUPS["contact-flow"](icon) : ""}</div></div>
            <ol class="ns-steps reveal">
              ${n.steps
                .map(
                  (x, i) => `
                <li style="--t:${1.4 + i * 1.4}s">
                  <span class="ns-n">${i + 1}</span>
                  <div class="ic-wrap sm">${icon(x.icon)}</div>
                  <div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>
                </li>`
                )
                .join("")}
            </ol>
          </div>
        </div>
      </section>`;
    },

    teamWork() {
      const t = S.about.inside;
      return `
      <section class="section alt">
        <div class="container about-grid">
          <div class="reveal about-art wide"><div class="detail-art glass">${MOCKUPS["about-team"] ? MOCKUPS["about-team"](icon) : ""}</div></div>
          <div class="reveal">
            <span class="eyebrow">${esc(t.eyebrow)}</span>
            <h2>${t.title}</h2>
            <p class="lead">${esc(t.text)}</p>
            <ul class="checks one">${t.points.map((p) => `<li>${icon("tick")} ${esc(p)}</li>`).join("")}</ul>
          </div>
        </div>
      </section>`;
    },

    expertise() {
      return `
      <section class="section">
        <div class="container">
          ${head({ eyebrow: "Our expertise", title: "The people behind <span class='grad'>your product</span>", text: "Specialists across AI, software, design and cloud — working together on your project." })}
          <div class="grid g3">
            ${S.about.team
              .map(
                (x, i) => `
              <div class="card team-card reveal" style="--i:${i}">
                <div class="team-top"><div class="ic-wrap">${icon(x.icon)}</div><span class="team-pulse"></span></div>
                <h3>${esc(x.title)}</h3>
                <p>${esc(x.text)}</p>
                <div class="chips">${x.skills.map((m) => `<span>${esc(m)}</span>`).join("")}</div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
    },

    blogLatest() {
      const posts = blogPosts().slice(0, 3);
      if (!posts.length) return "";
      return `
      <section class="section alt">
        <div class="container">
          ${head({ eyebrow: "From our blog", title: "Latest <span class='grad'>insights</span>", text: "Practical guides on AI, automation and business software." })}
          <div class="grid g3">${posts.map((p, i) => postCard(p, i)).join("")}</div>
          <div class="center reveal"><a class="btn btn-ghost" href="blog.html">Read all articles ${icon("arrow")}</a></div>
        </div>
      </section>`;
    },

    blog() {
      const posts = blogPosts();
      const slugParam = new URLSearchParams(location.search).get("post");
      const post = slugParam && posts.find((p) => p.slug === slugParam);
      if (post) return blogArticle(post, posts);
      const cats = ["All", ...new Set(posts.map((p) => p.category))];
      const [first, ...rest] = posts;
      return `
      <section class="section blog-sec">
        <div class="container">
          ${slugParam ? `<p class="blog-missing reveal">That article was not found — here are all our posts.</p>` : ""}
          ${first ? `
          <a class="blog-featured reveal" href="blog.html?post=${esc(first.slug)}" data-cat="${esc(first.category)}">
            <div class="detail-art glass">${first.mockup && MOCKUPS[first.mockup] ? MOCKUPS[first.mockup](icon) : cover(first)}</div>
            <div class="bf-copy">
              <span class="tag">${esc(first.category)}</span>
              <h2>${esc(first.title)}</h2>
              <p class="lead">${esc(first.excerpt)}</p>
              <div class="post-meta">${postMeta(first)}</div>
              <span class="more">Read article ${icon("arrow")}</span>
            </div>
          </a>` : ""}
          <div class="blog-tools reveal">
            <div class="blog-cats" role="tablist" aria-label="Filter by category">
              ${cats.map((c, i) => `<button class="blog-cat${i ? "" : " on"}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
            </div>
            <label class="blog-search">${icon("search")}<input type="search" placeholder="Search articles…" aria-label="Search articles"/></label>
          </div>
          <div class="grid g3 blog-grid">${rest.map((p, i) => postCard(p, i)).join("")}</div>
          <p class="blog-empty" hidden>No articles match your search.</p>
        </div>
      </section>`;
    },

    values() {
      const s = S.values;
      return `
      <section class="section alt">
        <div class="container">
          ${head(s)}
          <div class="grid g4">
            ${s.items
              .map(
                (x, i) => `
              <div class="card center-text reveal" style="--i:${i}">
                <div class="ic-wrap mx">${icon(x.icon)}</div>
                <h3>${esc(x.title)}</h3><p>${esc(x.text)}</p>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
    },

    testimonials() {
      if (!S.testimonials || !S.testimonials.length) return "";
      return `
      <section class="section">
        <div class="container">
          ${head({ eyebrow: "Testimonials", title: "What our <span class='grad'>clients say</span>" })}
          <div class="grid g3">
            ${S.testimonials
              .map(
                (t, i) => `
              <figure class="card quote reveal" style="--i:${i}">
                ${icon("quote")}
                <blockquote>${esc(t.quote)}</blockquote>
                <figcaption><strong>${esc(t.name)}</strong><span>${esc(t.role)}</span></figcaption>
              </figure>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
    },

    faq() {
      const f = S.faq;
      return `
      <section class="section">
        <div class="container narrow">
          ${head(f)}
          <div class="faq">
            ${f.items
              .map(
                (x, i) => `
              <div class="faq-item reveal">
                <button class="faq-q" aria-expanded="false" aria-controls="faq-${i}" id="faq-b-${i}">
                  <span>${esc(x.q)}</span>${icon("plus")}
                </button>
                <div class="faq-a" id="faq-${i}" role="region" aria-labelledby="faq-b-${i}"><p>${esc(x.a)}</p></div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
    },

    cta() {
      const c = S.cta;
      return `
      <section class="section">
        <div class="container">
          <div class="cta reveal">
            <div class="cta-glow"></div>
            <h2>${esc(c.title)}</h2>
            <p>${esc(c.text)}</p>
            <div class="btn-row center">${btn(c.primary)}${btn(c.secondary, "ghost")}</div>
          </div>
        </div>
      </section>`;
    },

    contact() {
      const c = S.contact;
      const cs = S.contactSection;
      const options = [...S.services.items.map((x) => x.title), "Other"];
      const unique = [...new Set(options)];
      const infos = [
        { icon: "mail", label: "Email us", value: c.email, href: `mailto:${c.email}` },
        { icon: "phone", label: "Call us", value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
        c.whatsapp && { icon: "whatsapp", label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${c.whatsapp}` },
        { icon: "map", label: "Visit us", value: c.address },
        { icon: "clock", label: "Working hours", value: c.hours },
      ].filter(Boolean);

      return `
      <section class="section">
        <div class="container contact-grid">
          <aside class="contact-info">
            ${infos
              .map(
                (x, i) => `
              <${x.href ? `a href="${esc(x.href)}"${x.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}` : "div"} class="info-card reveal" style="--i:${i}">
                <div class="ic-wrap sm">${icon(x.icon)}</div>
                <div><span>${esc(x.label)}</span><strong>${esc(x.value)}</strong></div>
              </${x.href ? "a" : "div"}>`
              )
              .join("")}
            <div class="socials reveal">${S.social.map((s) => `<a href="${esc(s.url)}" aria-label="${esc(s.name)}" target="_blank" rel="noopener">${icon(s.icon)}</a>`).join("")}</div>
          </aside>

          <form class="form glass reveal" id="contact-form" novalidate>
            <h2>${esc(cs.title)}</h2>
            <p class="muted">${esc(cs.text)}</p>
            <div class="form-grid">
              <label class="field"><span>Full name *</span><input name="name" required autocomplete="name" placeholder="Your name"/><small></small></label>
              <label class="field"><span>Email *</span><input name="email" type="email" required autocomplete="email" placeholder="you@company.com"/><small></small></label>
              <label class="field"><span>Phone</span><input name="phone" type="tel" autocomplete="tel" placeholder="+91 ..."/><small></small></label>
              <label class="field"><span>Company / Institution</span><input name="company" autocomplete="organization" placeholder="Company name"/><small></small></label>
              <label class="field"><span>Interested in *</span>
                <select name="service" required>
                  <option value="">Select a service</option>
                  ${unique.map((o) => `<option>${esc(o)}</option>`).join("")}
                </select><small></small></label>
              <label class="field"><span>Budget</span>
                <select name="budget">${cs.budgets.map((b) => `<option>${esc(b)}</option>`).join("")}</select><small></small></label>
              <label class="field full"><span>Project details *</span><textarea name="message" rows="5" required placeholder="Tell us about your requirements..."></textarea><small></small></label>
              <input type="text" name="_gotcha" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true"/>
            </div>
            <button class="btn btn-primary wide" type="submit">${icon("send")} Send message</button>
            <div class="form-status" role="status" aria-live="polite"></div>
          </form>
        </div>
        ${c.mapEmbed ? `<div class="container"><iframe class="map reveal" src="${esc(c.mapEmbed)}" loading="lazy" title="Office location" referrerpolicy="no-referrer-when-downgrade"></iframe></div>` : ""}
      </section>`;
    },
  };

  /* --------------------------- Header & footer --------------------------- */
  const logo = () => `
    <a class="logo" href="index.html" aria-label="${esc(S.brand.name)} home">
      ${S.brand.logo ? `<img class="logo-img" src="${esc(S.brand.logo)}" alt="${esc(S.brand.name)}"/>` : `<span class="logo-mark">${logoMark()}</span>
      <span class="logo-text"><span class="logo-name">${wordmark}</span><small>${esc(S.brand.tagline)}</small></span>`}
    </a>`;

  function renderHeader() {
    return `
    <header class="site-header" id="top">
      <div class="container nav-wrap">
        ${logo()}
        <nav class="nav" id="nav" aria-label="Main">
          ${S.nav.map((n) => `<a href="${esc(n.href)}" class="${n.page === page ? "active" : ""}"${n.page === page ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`).join("")}
          <a class="btn btn-primary sm nav-cta" href="contact.html">Get a quote</a>
        </nav>
        <div class="nav-actions">
          <button class="icon-btn" id="theme-toggle" aria-label="Toggle colour theme">${icon("sun", "sun")}${icon("moon", "moon")}</button>
          <button class="icon-btn menu-btn" id="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="nav">${icon("menu", "i-open")}${icon("close", "i-close")}</button>
        </div>
      </div>
    </header>`;
  }

  function renderFooter() {
    const c = S.contact;
    return `
    <footer class="site-footer">
      <div class="container foot-grid">
        <div>
          ${logo()}
          <p class="muted">${esc(S.footer.text)}</p>
          <div class="socials">${S.social.map((s) => `<a href="${esc(s.url)}" aria-label="${esc(s.name)}" target="_blank" rel="noopener">${icon(s.icon)}</a>`).join("")}</div>
        </div>
        <div>
          <h4>Company</h4>
          ${S.nav.map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
        </div>
        <div>
          <h4>Services</h4>
          ${S.services.items.slice(0, 6).map((x) => `<a href="services.html#${esc(x.id)}">${esc(x.title)}</a>`).join("")}
        </div>
        <div>
          <h4>Get in touch</h4>
          <a href="mailto:${esc(c.email)}">${icon("mail")} ${esc(c.email)}</a>
          <a href="tel:${esc(c.phone.replace(/\s/g, ""))}">${icon("phone")} ${esc(c.phone)}</a>
          <span>${icon("map")} ${esc(c.address)}</span>
        </div>
      </div>
      <div class="container foot-bottom">
        <span>© <span id="year"></span> ${esc(S.brand.name)}. All rights reserved.</span>
        <a href="#top" class="to-top">Back to top ↑</a>
      </div>
    </footer>
    ${c.whatsapp ? `<a class="wa-float" href="https://wa.me/${esc(c.whatsapp)}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon("whatsapp")}</a>` : ""}`;
  }

  /* ------------------------------- Render -------------------------------- */
  const layout = S.pages[page] || S.pages.home;
  const main = layout
    .map((name) => {
      const fn = SECTIONS[name];
      if (!fn) {
        console.warn(`[QSilon] Unknown section "${name}" in pages.${page}`);
        return "";
      }
      return fn();
    })
    .join("");

  document.getElementById("app").innerHTML = `${renderHeader()}<main id="main">${main}</main>${renderFooter()}`;

  const pageTitle = (S.nav.find((n) => n.page === page) || {}).label;
  document.title = page === "home" ? `${S.brand.name} — ${S.brand.tagline}` : `${pageTitle} — ${S.brand.name}`;
  const openPost = page === "blog" && BLOG.posts.find((p) => p.slug === new URLSearchParams(location.search).get("post"));
  if (openPost) {
    document.title = `${openPost.title} — ${S.brand.name}`;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", openPost.excerpt);
    const ph = document.querySelector(".page-header");
    if (ph) ph.remove(); // the article has its own title
  }

  /* ----------------------------- Behaviours ------------------------------ */
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => [...el.querySelectorAll(q)];

  // Year
  $("#year").textContent = new Date().getFullYear();

  // Theme
  const root = document.documentElement;
  $("#theme-toggle").addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("qt-theme", next); } catch (e) {}
  });

  // Mobile menu
  const menuBtn = $("#menu-btn");
  const header = $(".site-header");
  menuBtn.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$("#nav a").forEach((a) => a.addEventListener("click", () => header.classList.remove("open")));

  // Sticky header shadow
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Reveal on scroll
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    $$(".reveal").forEach((el) => io.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("in"));
  }

  // Counters
  const runCounter = (el) => {
    const to = +el.dataset.to;
    if (reduce) return (el.textContent = to);
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver((entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          runCounter(e.target);
          co.unobserve(e.target);
        }
      })
    );
    $$(".counter").forEach((el) => co.observe(el));
  } else {
    $$(".counter").forEach((el) => (el.textContent = el.dataset.to));
  }

  // Rotating words
  $$(".rotator").forEach((el) => {
    const words = JSON.parse(el.dataset.words || "[]");
    if (words.length < 2 || reduce) return;
    let i = 0;
    setInterval(() => {
      el.classList.add("out");
      setTimeout(() => {
        i = (i + 1) % words.length;
        el.textContent = words[i];
        el.classList.remove("out");
      }, 300);
    }, 2200);
  });

  // FAQ accordion
  $$(".faq-q").forEach((b) =>
    b.addEventListener("click", () => {
      const item = b.parentElement;
      const open = item.classList.toggle("open");
      b.setAttribute("aria-expanded", String(open));
      const a = item.querySelector(".faq-a");
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
    })
  );

  // Contact form
  const form = $("#contact-form");
  if (form) {
    const preset = new URLSearchParams(location.search).get("service");
    if (preset) {
      const sel = form.service;
      if ([...sel.options].some((o) => o.value === preset)) sel.value = preset;
    }

    const status = $(".form-status", form);
    const setErr = (input, msg) => {
      const field = input.closest(".field");
      field.classList.toggle("err", !!msg);
      field.querySelector("small").textContent = msg || "";
    };
    const validate = () => {
      let ok = true;
      const v = (n) => form[n].value.trim();
      const rules = [
        ["name", v("name").length >= 2 ? "" : "Please enter your name."],
        ["email", /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email")) ? "" : "Please enter a valid email."],
        ["phone", !v("phone") || /^[+\d][\d\s()-]{6,}$/.test(v("phone")) ? "" : "Please enter a valid phone number."],
        ["service", v("service") ? "" : "Please choose a service."],
        ["message", v("message").length >= 10 ? "" : "Please add a few details (10+ characters)."],
      ];
      rules.forEach(([n, msg]) => {
        setErr(form[n], msg);
        if (msg) ok = false;
      });
      return ok;
    };
    $$("input, select, textarea", form).forEach((el) =>
      el.addEventListener("input", () => el.closest(".field") && el.closest(".field").classList.contains("err") && validate())
    );

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form-status";
      status.textContent = "";
      if (form._gotcha.value) return; // bot trap
      if (!validate()) {
        const first = $(".field.err input, .field.err select, .field.err textarea", form);
        first && first.focus();
        return;
      }
      const data = Object.fromEntries(new FormData(form));
      delete data._gotcha;
      const submitBtn = $("button[type=submit]", form);
      const endpoint = S.contact.formEndpoint;

      if (!endpoint) {
        const body = Object.entries(data).map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`).join("\n");
        location.href = `mailto:${S.contact.email}?subject=${encodeURIComponent(`Project enquiry: ${data.service}`)}&body=${encodeURIComponent(body)}`;
        status.classList.add("ok");
        status.textContent = "Opening your email app… If nothing happens, email us at " + S.contact.email;
        return;
      }

      submitBtn.disabled = true;
      submitBtn.classList.add("loading");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.classList.add("ok");
        status.textContent = S.contactSection.successMessage;
      } catch (err) {
        status.classList.add("bad");
        status.textContent = `Sorry, something went wrong. Please email us directly at ${S.contact.email}.`;
      } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
      }
    });
  }

  // Live call timers in the voice mockup
  setInterval(() => {
    $$("[data-timer]").forEach((el) => {
      const sec = (el._sec = ((el._sec || 0) + 1) % 600);
      el.textContent = `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
    });
  }, 1000);

  // Showcase tabs (home): auto-plays, pauses on hover, restarts animations on switch
  $$("[data-showcase]").forEach((sc) => {
    const tabs = $$(".sc-tab", sc);
    const panels = $$(".sc-panel", sc);
    const DURATION = 7000;
    let cur = -1, timer, paused = false;
    const show = (i) => {
      if (i === cur) return;
      cur = i;
      tabs.forEach((t, n) => {
        t.classList.toggle("on", n === i);
        t.setAttribute("aria-selected", String(n === i));
      });
      panels.forEach((p, n) => {
        p.classList.toggle("on", n === i);
        if (n === i) {
          const tpl = p.querySelector("template");
          // re-insert the screen so its animations start from the beginning
          $$(".mock, .big-ic, .detail-img", p).forEach((el) => el.remove());
          p.insertAdjacentHTML("afterbegin", tpl.innerHTML);
        }
      });
      sc.style.setProperty("--dur", DURATION + "ms");
      sc.classList.remove("playing");
      void sc.offsetWidth;
      if (!paused && !reduce) sc.classList.add("playing");
    };
    const next = () => show((cur + 1) % tabs.length);
    const start = () => {
      clearInterval(timer);
      if (!reduce) timer = setInterval(() => !paused && next(), DURATION);
    };
    tabs.forEach((t, n) => t.addEventListener("click", () => { show(n); start(); }));
    sc.addEventListener("pointerenter", () => { paused = true; sc.classList.add("paused"); });
    sc.addEventListener("pointerleave", () => {
      paused = false;
      sc.classList.remove("paused", "playing");
      void sc.offsetWidth;
      if (!reduce) sc.classList.add("playing");
      start();
    });
    show(0);
    start();
  });

  // Blog: category filter + search
  const blogGrid = $(".blog-grid");
  if (blogGrid) {
    let cat = "All", q = "";
    const cards = $$(".post-card", blogGrid);
    const featured = $(".blog-featured");
    const empty = $(".blog-empty");
    const apply = () => {
      let shown = 0;
      cards.forEach((c) => {
        const ok = (cat === "All" || c.dataset.cat === cat) && (!q || c.dataset.text.includes(q));
        c.hidden = !ok;
        if (ok) { shown++; c.classList.add("in"); }
      });
      if (featured) {
        const fOk = (cat === "All" || featured.dataset.cat === cat) && (!q || featured.textContent.toLowerCase().includes(q));
        featured.hidden = !fOk;
        if (fOk) shown++;
      }
      empty.hidden = shown > 0;
    };
    $$(".blog-cat").forEach((b) =>
      b.addEventListener("click", () => {
        $$(".blog-cat").forEach((x) => x.classList.toggle("on", x === b));
        cat = b.dataset.cat;
        apply();
      })
    );
    $(".blog-search input").addEventListener("input", (e) => {
      q = e.target.value.trim().toLowerCase();
      apply();
    });
  }
  $$(".copy-link").forEach((b) =>
    b.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(b.dataset.url); b.querySelector("em").textContent = "Copied!"; }
      catch (e) { prompt("Copy this link:", b.dataset.url); }
    })
  );

  // Scroll to hash after dynamic render
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(() => target.scrollIntoView(), 50);
  }
})();
