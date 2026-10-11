/* ==========================================================================
   QSilon Tensorv — Extra animated scenes
   Real-world example scenes for the Home showcase, Contact and About pages.
   (Services page screens live in mockups.js and are not changed here.)
   All names and numbers are sample data for illustration.
   ========================================================================== */
(function () {
  "use strict";
  const M = (window.QT_MOCKUPS = window.QT_MOCKUPS || {});

  const win = (title, body, extra = "") => `
    <div class="m-win">
      <div class="m-bar"><i></i><i></i><i></i><span>${title}</span>${extra}</div>
      <div class="m-body">${body}</div>
    </div>`;
  const num = (to, pre = "", post = "") => `<b class="x-num" style="--to:${to}" data-pre="${pre}" data-post="${post}"></b>`;

  Object.assign(M, {
    /* ------------------- Home: AI voice outbound campaign ------------------- */
    "home-voice": (icon) =>
      `<div class="mock">${win(
        "Voice campaign · Real-estate leads",
        `<div class="x-kpis">
          <div><small>Calls made</small>${num(486)}</div>
          <div><small>Connected</small>${num(312)}</div>
          <div><small>Site visits booked</small>${num(47)}</div>
        </div>
        <div class="x-calls">
          ${[
            ["Rohit Sharma", "+91 98XXX XX412", 0],
            ["Anjali Verma", "+91 97XXX XX088", 1],
            ["Karan Mehta", "+91 99XXX XX731", 2],
            ["Sneha Iyer", "+91 90XXX XX256", 3],
          ]
            .map(
              ([n, p, i]) => `
            <div class="x-call" style="--o:${i * 1.6}s">
              <span class="x-av">${n.split(" ").map((w) => w[0]).join("")}</span>
              <span class="x-who"><strong>${n}</strong><small>${p}</small></span>
              <span class="x-wave">${"<i></i>".repeat(5)}</span>
              <span class="x-st"><em class="s1">${icon("phone")} Ringing</em><em class="s2">${icon("voice")} Talking</em><em class="s3">${icon("tick")} Visit booked</em></span>
            </div>`
            )
            .join("")}
        </div>`,
        `<span class="x-rec"><b></b>Live</span>`
      )}</div>`,

    /* ----------------- Home: WhatsApp order automation --------------------- */
    "home-automation": (icon) => `
      <div class="mock x-wa-wrap">
        <div class="x-phone">
          <div class="x-wa-head"><span class="x-av sm">YS</span><div><strong>Your Store</strong><small>AI assistant · online</small></div></div>
          <div class="x-chat">
            <p class="me" style="--t:0s">Hi, 2 kg basmati rice available hai?</p>
            <p class="bot" style="--t:1.6s">Haan ji! ₹180/kg. Cart mein add karun?</p>
            <div class="x-prod bot" style="--t:2.6s"><span class="x-thumb"></span><div><strong>Basmati Rice · 2 kg</strong><small>₹360 · In stock</small></div></div>
            <p class="me" style="--t:4.2s">Yes, aaj deliver kar do</p>
            <div class="x-inv bot" style="--t:5.6s">${icon("layers")}<div><strong>Invoice INV-2291</strong><small>₹360 · UPI link</small></div><u>Pay</u></div>
            <p class="x-paid" style="--t:7.4s">${icon("tick")} Payment received · Delivery by 6 PM</p>
          </div>
        </div>
        <div class="x-steps">
          <div class="m-t-head">${icon("bolt")} Automations triggered</div>
          ${["Stock checked in ERP", "Order created", "Invoice + UPI link sent", "Delivery boy assigned"]
            .map((s, i) => `<div style="--t:${1.6 + i * 1.9}s">${icon("tick")}<span>${s}</span></div>`)
            .join("")}
        </div>
      </div>`,

    /* ----------------------- Home: ERP warehouse --------------------------- */
    "home-erp": (icon) =>
      `<div class="mock">${win(
        "Warehouse · Live stock",
        `<div class="x-wh">
          <div class="x-stock">
            ${[
              ["SKU-4471", "Steel Rod 12mm", 82, 64],
              ["SKU-2210", "Cement 50kg", 70, 18],
              ["SKU-3302", "PVC Pipe 1in", 55, 46],
              ["SKU-1185", "Paint 20L", 90, 72],
            ]
              .map(
                ([sku, n, from, to]) => `
              <div class="x-item ${to < 25 ? "low" : ""}">
                <span><strong>${n}</strong><small>${sku}</small></span>
                <div class="x-bar"><i style="--from:${from}%;--to:${to}%"></i></div>
                <em>${to < 25 ? "Low" : "OK"}</em>
              </div>`
              )
              .join("")}
          </div>
          <div class="x-scan">
            <div class="x-code">${Array.from({ length: 26 }, (_, i) => `<i style="width:${[2, 1, 3, 1, 2][i % 5]}px"></i>`).join("")}<b></b></div>
            <small>${icon("search")} Scanned SKU-4471 · +24 units</small>
          </div>
        </div>
        <div class="x-toast">${icon("send")} Auto purchase order <b>PO-0588</b> sent to supplier for Cement</div>`
      )}</div>`,

    /* ---------------------- Home: school parent app ------------------------ */
    "home-school": (icon) => `
      <div class="mock x-parent">
        <div class="x-phone tall">
          <div class="x-app-head"><span class="x-av sm">AK</span><div><strong>Aarav · Class 8-B</strong><small>Parent app</small></div>${icon("mail")}</div>
          <div class="x-notes">
            ${[
              ["check", "Present today", "Marked at 08:52 AM", "g"],
              ["pen", "Homework uploaded", "Maths · Chapter 5", "v"],
              ["bank", "Fee due ₹4,500", "Term 2 · Pay online", "o", "Pay"],
              ["spark", "Result: Science A+", "Unit test 3", "p"],
            ]
              .map(
                ([ic, t, s, c, b], i) => `<div class="x-note ${c}" style="--t:${i * 1.3}s">${icon(ic)}<span><strong>${t}</strong><small>${s}</small></span>${b ? `<u>${b}</u>` : ""}</div>`
              )
              .join("")}
          </div>
          <div class="x-bus">
            <div class="x-route"><i></i><b>${icon("truck")}</b></div>
            <small>School bus · 6 min away</small>
          </div>
        </div>
        <div class="x-tags"><span>${icon("map")} Live bus tracking</span><span>${icon("bank")} Online fees</span><span>${icon("chart")} Results</span></div>
      </div>`,

    /* ---------------------- Home: CRM sales analytics ---------------------- */
    "home-crm": () =>
      `<div class="mock">${win(
        "Sales analytics · This quarter",
        `<div class="x-an">
          <div class="x-donut-wrap">
            <div class="x-donut"><span>${num(68, "", "%")}<small>Target</small></span></div>
            <div class="x-leg"><span><i style="background:#22d3ee"></i>Won</span><span><i style="background:#8b5cf6"></i>In progress</span><span><i style="background:#ec4899"></i>Lost</span></div>
          </div>
          <div class="x-board">
            <small>Revenue</small>
            <div class="x-big">${num(48, "₹", "L")}</div>
            ${[["North", 86], ["South", 72], ["West", 58], ["East", 41]]
              .map(([r, v], i) => `<div class="x-row"><span>${r}</span><div><i style="--w:${v}%;--d:${i * 0.15}s"></i></div><em>${v}%</em></div>`)
              .join("")}
          </div>
        </div>`
      )}</div>`,

    /* --------------------- Home: e-commerce website ------------------------ */
    "home-website": (icon) => `
      <div class="mock x-shop">
        <div class="x-laptop">
          <div class="m-bar"><i></i><i></i><i></i><div class="m-url">${icon("shield")} yourstore.in</div><span class="x-cart">${icon("cart")}<b class="x-badge"></b></span></div>
          <div class="x-store">
            ${[
              ["Basmati Rice", "₹360", "a"],
              ["Cold-pressed Oil", "₹420", "b"],
              ["Organic Honey", "₹299", "c"],
            ]
              .map(([n, p, c], i) => `<div class="x-prodc"><span class="x-img ${c}"></span><strong>${n}</strong><small>${p}</small><u class="${i === 1 ? "hit" : ""}">Add to cart</u></div>`)
              .join("")}
          </div>
          <div class="x-cursor">${icon("arrow")}</div>
          <div class="x-order">${icon("tick")} Order placed · ₹420</div>
        </div>
        <div class="x-mobile"><span class="x-img b"></span><i></i><i class="s"></i><u></u></div>
      </div>`,

    /* ---------------------- Contact: enquiry journey ----------------------- */
    "contact-flow": (icon) => `
      <div class="mock x-cf">
        <div class="x-form-card" style="--t:0s">
          <div class="m-t-head">${icon("mail")} New enquiry</div>
          <div class="x-field"><small>Name</small><span class="x-type" style="--n:12">Ravi Kapoor</span></div>
          <div class="x-field"><small>Interested in</small><span class="x-type" style="--n:16">AI Voice Calling</span></div>
          <u>${icon("send")} Send</u>
        </div>
        <div class="x-flow">
          ${[
            ["mail", "Enquiry received", "Instant confirmation email"],
            ["users", "Expert assigned", "Solutions team · within hours"],
            ["phone", "Free consultation call", "Tomorrow · 11:00 AM"],
            ["layers", "Proposal & quote", "Scope, timeline, pricing"],
          ]
            .map(([ic, t, s], i) => `<div class="x-fstep" style="--t:${1.4 + i * 1.4}s"><span>${icon(ic)}</span><div><strong>${t}</strong><small>${s}</small></div><em>${icon("tick")}</em></div>`)
            .join("")}
        </div>
      </div>`,

    /* -------------------- About: daily stand-up call ----------------------- */
    "about-team": (icon) => `
      <div class="mock x-meet">
        <div class="m-win">
          <div class="m-bar"><i></i><i></i><i></i><span>Daily stand-up · 10:00 AM</span><span class="x-rec"><b></b>REC</span></div>
          <div class="x-grid">
            ${[
              ["PM", "Project Manager", "a"],
              ["AI", "AI Engineer", "b"],
              ["BE", "Backend Dev", "c"],
              ["FE", "Frontend Dev", "d"],
              ["UX", "UI/UX Designer", "e"],
              ["QA", "QA Engineer", "f"],
            ]
              .map(([a, r, c], i) => `<div class="x-tile ${c}" style="--s:${i * 1.5}s"><span class="x-face">${a}</span><small>${icon("voice")} ${r}</small></div>`)
              .join("")}
          </div>
          <div class="x-ctrl"><span>${icon("voice")}</span><span>${icon("eye")}</span><span>${icon("users")}</span><span class="end">${icon("phone")}</span></div>
        </div>
        <div class="x-sprint">
          <div class="m-t-head">${icon("layers")} Sprint 14</div>
          <div class="x-cols">
            <div><small>To do</small><i></i><i></i></div>
            <div><small>In progress</small><i></i><i class="mv"></i></div>
            <div><small>Done</small><i class="ok"></i><i class="ok"></i><i class="ghost"></i></div>
          </div>
        </div>
      </div>`,
  });
})();
