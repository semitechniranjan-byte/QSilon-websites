/* ==========================================================================
   QSilon Tensorv — Interactive effects
   Cursor glow, card tilt + spotlight, magnetic buttons, particle background,
   scroll progress, page loader and hero text animation.
   Everything is skipped for users who prefer reduced motion; pointer effects
   only run on devices with a real mouse.
   ========================================================================== */
(function () {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => [...el.querySelectorAll(q)];

  /* ------------------------------ Page loader ----------------------------- */
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = `<div class="loader-mark">${(window.SITE && window.SITE.brand.short) || "QT"}</div>`;
  document.body.appendChild(loader);
  const hideLoader = () => {
    loader.classList.add("done");
    document.body.classList.add("loaded");
    setTimeout(() => loader.remove(), 700);
  };
  if (reduce) hideLoader();
  else if (document.readyState === "complete") setTimeout(hideLoader, 250);
  else {
    window.addEventListener("load", () => setTimeout(hideLoader, 250));
    setTimeout(hideLoader, 2500); // never block the page for long
  }

  // Fade out when navigating to another page of the site
  if (!reduce) {
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname || !/\.html$|\/$/.test(url.pathname)) return;
      e.preventDefault();
      document.body.classList.add("leaving");
      setTimeout(() => (location.href = a.href), 280);
    });
    window.addEventListener("pageshow", (e) => e.persisted && document.body.classList.remove("leaving"));
  }

  /* ---------------------------- Scroll progress --------------------------- */
  const bar = document.createElement("div");
  bar.className = "progress";
  document.body.appendChild(bar);
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (reduce) return;

  /* -------------------------- Hero headline words ------------------------- */
  $$(".hero h1, .page-header h1").forEach((h) => {
    let n = 0;
    const wrap = (node) => {
      [...node.childNodes].forEach((c) => {
        if (c.nodeType === 3) {
          const frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(part));
            const s = document.createElement("span");
            s.className = "w";
            s.style.setProperty("--wi", n++);
            s.textContent = part;
            frag.appendChild(s);
          });
          c.replaceWith(frag);
        } else if (c.nodeType === 1) {
          // Gradient text is animated as one block (background-clip:text breaks on split children)
          c.classList.add("w");
          c.style.setProperty("--wi", n++);
        }
      });
    };
    wrap(h);
    h.classList.add("split");
  });

  /* ------------------------- Particle network canvas ---------------------- */
  $$(".hero, .page-header, .cta").forEach((host) => {
    const canvas = document.createElement("canvas");
    canvas.className = "fx-canvas";
    canvas.setAttribute("aria-hidden", "true");
    host.prepend(canvas);
    const ctx = canvas.getContext("2d");
    let w, h, pts, raf, visible = true;
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = host.offsetWidth;
      h = host.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.floor((w * h) / 16000), 90);
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const light = document.documentElement.dataset.theme === "light";
      const dot = light ? "rgba(91,64,200," : "rgba(160,190,255,";
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // gentle attraction to the cursor
        const mdx = mouse.x - p.x, mdy = mouse.y - p.y, md = Math.hypot(mdx, mdy);
        if (md < 160) {
          p.x += mdx * 0.006;
          p.y += mdy * 0.006;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dot + "0.7)";
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.strokeStyle = dot + (0.18 * (1 - d / 120)).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        if (md < 160) {
          ctx.strokeStyle = `rgba(34,211,238,${(0.45 * (1 - md / 160)).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      raf = visible ? requestAnimationFrame(draw) : null;
    };

    host.addEventListener("pointermove", (e) => {
      const r = host.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    });
    host.addEventListener("pointerleave", () => (mouse.x = mouse.y = -9999));

    new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(draw);
    }).observe(host);

    let t;
    window.addEventListener("resize", () => {
      clearTimeout(t);
      t = setTimeout(resize, 150);
    });
    resize();
    raf = requestAnimationFrame(draw);
  });

  if (!finePointer) return;

  /* ------------------------------ Cursor glow ----------------------------- */
  const dot = document.createElement("div");
  const ring = document.createElement("div");
  dot.className = "cursor-dot";
  ring.className = "cursor-ring";
  document.body.append(dot, ring);
  document.body.classList.add("has-cursor");

  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  window.addEventListener("pointermove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    document.body.classList.add("cursor-on");
  });
  document.addEventListener("pointerleave", () => document.body.classList.remove("cursor-on"));
  const follow = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  };
  follow();

  const hoverSel = "a, button, .card, .ind, .info-card, select, input, textarea, label";
  document.addEventListener("pointerover", (e) => {
    const t = e.target.closest(hoverSel);
    ring.classList.toggle("hover", !!t);
    ring.classList.toggle("text", !!(t && t.matches("input, textarea, select, label")));
  });
  document.addEventListener("pointerdown", () => ring.classList.add("press"));
  document.addEventListener("pointerup", () => ring.classList.remove("press"));

  /* ----------------------- Card spotlight + 3D tilt ----------------------- */
  const spotEls = $$(".card, .ind, .info-card, .feature, .faq-item, .stats, .form, .dash, .detail-art, .step");
  spotEls.forEach((el) => el.classList.add("spot"));

  spotEls.forEach((el) => {
    const tilt = el.matches(".card, .dash, .detail-art, .ind");
    const max = el.matches(".dash, .detail-art") ? 8 : 6;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      el.style.setProperty("--mx", x + "px");
      el.style.setProperty("--my", y + "px");
      if (tilt) {
        const px = x / r.width - 0.5, py = y / r.height - 0.5;
        el.style.transition = "transform .12s ease-out, opacity .8s, border-color .3s, box-shadow .3s";
        el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-6px)`;
      }
    });
    el.addEventListener("pointerleave", () => {
      if (!tilt) return;
      el.style.transition = "transform .6s cubic-bezier(.2,.8,.2,1), opacity .8s, border-color .3s, box-shadow .3s";
      el.style.transform = "";
    });
  });

  /* --------------------------- Magnetic buttons --------------------------- */
  $$(".btn, .socials a, .icon-btn, .wa-float").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      b.style.transform = `translate(${x * 0.22}px, ${y * 0.3}px)`;
      b.style.setProperty("--bx", e.clientX - r.left + "px");
      b.style.setProperty("--by", e.clientY - r.top + "px");
    });
    b.addEventListener("pointerleave", () => (b.style.transform = ""));
  });

  /* ------------------------------ Click ripple ---------------------------- */
  document.addEventListener("pointerdown", (e) => {
    const b = e.target.closest(".btn");
    if (!b) return;
    const r = b.getBoundingClientRect();
    const s = document.createElement("span");
    s.className = "ripple";
    s.style.left = e.clientX - r.left + "px";
    s.style.top = e.clientY - r.top + "px";
    b.appendChild(s);
    setTimeout(() => s.remove(), 650);
  });

  /* --------------------------- Hero mouse parallax ------------------------ */
  const hero = $(".hero");
  if (hero) {
    const layers = [
      [$(".hero .orb"), 30],
      [$(".hero .dash"), 12],
      [$(".hero .f1"), -22],
      [$(".hero .f2"), -16],
    ].filter(([el]) => el);
    hero.addEventListener("pointermove", (e) => {
      const px = e.clientX / innerWidth - 0.5, py = e.clientY / innerHeight - 0.5;
      layers.forEach(([el, d]) => {
        el.style.setProperty("--px", `${px * d}px`);
        el.style.setProperty("--py", `${py * d}px`);
      });
    });
  }
})();
