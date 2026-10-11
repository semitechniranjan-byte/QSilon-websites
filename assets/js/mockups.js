/* ==========================================================================
   QSilon Tensorv — Animated service illustrations
   One live "product screen" per service id (see services.items in site-data.js).
   To use your own photo instead, set `image: "assets/img/your-photo.jpg"` on
   that service in site-data.js.
   ========================================================================== */
window.QT_MOCKUPS = (function () {
  "use strict";

  const win = (title, body, cls = "") => `
    <div class="m-win ${cls}">
      <div class="m-bar"><i></i><i></i><i></i><span>${title}</span></div>
      <div class="m-body">${body}</div>
    </div>`;

  return {
    /* ----------------------------- AI voice call ---------------------------- */
    "ai-voice": (icon) => `
      <div class="mock m-voice">
        <div class="m-phone">
          <div class="m-call-top"><span class="m-live"><b></b>Live call</span><span class="m-timer" data-timer>00:00</span></div>
          <div class="m-avatar">${icon("voice")}</div>
          <strong>QSilon AI Agent</strong>
          <small>Calling +91 98XXX XXX21</small>
          <div class="m-wave">${Array.from({ length: 18 }, (_, i) => `<i style="--d:${(i * 0.07).toFixed(2)}s"></i>`).join("")}</div>
          <div class="m-call-btns"><span>${icon("voice")}</span><span class="end">${icon("phone")}</span><span>${icon("users")}</span></div>
        </div>
        <div class="m-transcript">
          <div class="m-t-head">${icon("spark")} Live transcript</div>
          <p class="b ai" style="--t:0s">Namaste! QSilon Clinic se bol rahi hoon. Kal ka appointment confirm karein?</p>
          <p class="b user" style="--t:2.6s">Haan, kal 11 baje theek hai.</p>
          <p class="b ai" style="--t:5.2s">Done! 11:00 AM confirm ho gaya. SMS bhej diya hai.</p>
          <div class="m-chip" style="--t:7.4s">${icon("tick")} Appointment booked · CRM updated</div>
        </div>
      </div>`,

    /* --------------------------- Workflow automation ------------------------ */
    "ai-automation": (icon) => `
      <div class="mock m-flow">
        <div class="m-nodes">
          ${[
            ["globe", "New lead", "Website form"],
            ["bot", "AI agent", "Qualifies lead"],
            ["whatsapp", "WhatsApp", "Sends reply"],
            ["chart", "CRM", "Deal created"],
          ]
            .map(
              ([ic, t, s], i) => `${i ? `<div class="m-link"><b style="--d:${i * 0.4}s"></b></div>` : ""}
              <div class="m-node" style="--d:${i * 0.4}s">${icon(ic)}<strong>${t}</strong><small>${s}</small></div>`
            )
            .join("")}
        </div>
        <div class="m-log">
          ${["Lead captured from website", "AI scored lead: Hot 🔥", "WhatsApp follow-up sent", "Deal added to sales pipeline"]
            .map((l, i) => `<div style="--t:${i * 0.9}s">${icon("tick")}<span>${l}</span><em>${i * 2 + 1}s</em></div>`)
            .join("")}
        </div>
      </div>`,

    /* ---------------------------------- ERP --------------------------------- */
    erp: (icon) =>
      `<div class="mock">${win(
        "ERP · Dashboard",
        `<div class="m-erp">
          <aside>${["layers", "cart", "users", "bank", "chart"].map((i, n) => `<span class="${n ? "" : "on"}">${icon(i)}</span>`).join("")}</aside>
          <div class="m-erp-main">
            <div class="m-kpis">
              <div><small>Revenue</small><strong>₹12.4L</strong><em class="up">▲ 18%</em></div>
              <div><small>Orders</small><strong>318</strong><em class="up">▲ 9%</em></div>
              <div><small>Low stock</small><strong>7</strong><em class="down">Reorder</em></div>
            </div>
            <svg class="m-chart" viewBox="0 0 300 90" preserveAspectRatio="none">
              <defs><linearGradient id="mg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#8b5cf6" stop-opacity=".45"/><stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/></linearGradient></defs>
              <path class="area" d="M0 70 L30 62 L60 66 L90 48 L120 52 L150 36 L180 42 L210 26 L240 30 L270 14 L300 18 L300 90 L0 90Z" fill="url(#mg)"/>
              <path class="line" d="M0 70 L30 62 L60 66 L90 48 L120 52 L150 36 L180 42 L210 26 L240 30 L270 14 L300 18" fill="none" stroke="url(#mgl)" stroke-width="3" stroke-linecap="round"/>
              <defs><linearGradient id="mgl"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs>
            </svg>
            <div class="m-table">
              <div><span>INV-1042</span><span>Sharma Traders</span><b class="ok">Paid</b></div>
              <div><span>INV-1043</span><span>Metro Supplies</span><b class="warn">Due</b></div>
              <div><span>PO-0571</span><span>Steel Rods ×200</span><b class="ok">Received</b></div>
            </div>
          </div>
        </div>`
      )}</div>`,

    /* ------------------------------ Custom software ------------------------- */
    "b2b-software": () =>
      `<div class="mock">${win(
        "orders.service.js",
        `<div class="m-code">
          ${[
            `<kw>const</kw> <va>app</va> = <fn>express</fn>();`,
            ``,
            `<va>app</va>.<fn>post</fn>(<st>'/api/orders'</st>, <kw>async</kw> (req, res) => {`,
            `  <kw>const</kw> <va>order</va> = <kw>await</kw> erp.<fn>createOrder</fn>(req.body);`,
            `  <kw>await</kw> whatsapp.<fn>notify</fn>(order.customer);`,
            `  <kw>await</kw> invoice.<fn>generate</fn>(order.id);`,
            `  res.<fn>json</fn>({ status: <st>'ok'</st>, id: order.id });`,
            `});`,
          ]
            .map((l, i) => `<div class="ln" style="--t:${i * 0.35}s"><ln-n>${i + 1}</ln-n><code>${l || "&nbsp;"}</code></div>`)
            .join("")}
          <div class="m-resp"><b>200 OK</b><span>{ "status": "ok", "id": "ORD-2291" }</span><em>84 ms</em></div>
        </div>`
      )}</div>`,

    /* ---------------------------- School management ------------------------- */
    "school-management": (icon) => `
      <div class="mock m-school">
        <div class="m-card m-student">
          <div class="m-st-head"><span class="m-initials">AK</span><div><strong>Aarav Kumar</strong><small>Class 8-B · Roll 21</small></div></div>
          <div class="m-ring" style="--p:94"><span>94%</span><small>Attendance</small></div>
          <div class="m-fee">${icon("tick")} Term fee paid</div>
        </div>
        <div class="m-card m-tt">
          <div class="m-t-head">${icon("clock")} Today's timetable</div>
          ${[
            ["09:00", "Mathematics", ""],
            ["10:00", "Science Lab", "now"],
            ["11:00", "English", ""],
            ["12:00", "Computer", ""],
          ]
            .map(([t, s, c]) => `<div class="${c}"><em>${t}</em><span>${s}</span>${c ? "<b>Now</b>" : ""}</div>`)
            .join("")}
          <div class="m-note">${icon("mail")} Fee reminder sent to 248 parents</div>
        </div>
      </div>`,

    /* -------------------------------- Websites ------------------------------ */
    websites: (icon) => `
      <div class="mock">
        <div class="m-win m-browser">
          <div class="m-bar"><i></i><i></i><i></i><div class="m-url">${icon("shield")} yourbrand.com</div></div>
          <div class="m-site">
            <div class="m-nav"><b></b><span></span><span></span><span></span><em></em></div>
            <div class="m-hero-s"><div><i class="w80"></i><i class="w60 g"></i><i class="w90 t"></i><i class="w70 t"></i><u></u></div><div class="m-img"></div></div>
            <div class="m-cards">${"<div><span></span><i></i><i></i></div>".repeat(3)}</div>
          </div>
        </div>
        <div class="m-badges"><span>${icon("bolt")} Fast</span><span>${icon("search")} SEO-ready</span><span>${icon("phone")} Mobile</span></div>
      </div>`,

    /* ----------------------------------- CRM -------------------------------- */
    "crm-analytics": () =>
      `<div class="mock">${win(
        "CRM · Sales pipeline",
        `<div class="m-kanban">
          ${[
            ["New", [["Patel Foods", "₹80K"], ["Nova Clinic", "₹1.2L"]]],
            ["Qualified", [["Sunrise School", "₹2.4L"], ["Apex Steel", "₹3.1L"]]],
            ["Won", [["Green Mart", "₹95K"]]],
          ]
            .map(
              ([col, deals], c) => `<div class="m-col"><h5>${col}<em>${deals.length}</em></h5>${deals
                .map(([n, v], i) => `<div class="m-deal ${c === 2 ? "won" : ""}" style="--t:${(c * 2 + i) * 0.25}s"><strong>${n}</strong><span>${v}</span></div>`)
                .join("")}${c === 2 ? `<div class="m-deal ghost"><strong>Sunrise School</strong><span>₹2.4L</span></div>` : ""}</div>`
            )
            .join("")}
        </div>
        <div class="m-mini"><span>Win rate</span><div><i style="--w:68%"></i></div><b>68%</b></div>`
      )}</div>`,

    /* ------------------------------ Cloud & DevOps -------------------------- */
    "cloud-devops": (icon) =>
      `<div class="mock">${win(
        "CI/CD · production",
        `<div class="m-pipe">
          ${["Build", "Test", "Deploy"]
            .map((s, i) => `${i ? `<i class="m-arrow"></i>` : ""}<div class="m-stage" style="--t:${i * 1.2}s"><span>${icon("tick")}</span>${s}</div>`)
            .join("")}
        </div>
        <div class="m-term">
          ${["$ git push origin main", "✓ 214 tests passed", "✓ Docker image built (42 MB)", "✓ Deployed to AWS ap-south-1", "● All systems operational"]
            .map((l, i) => `<div style="--t:${i * 0.7}s">${l}</div>`)
            .join("")}
        </div>
        <div class="m-uptime"><small>Uptime · last 30 days</small><div>${'<i></i>'.repeat(30)}</div></div>`
      )}</div>`,

    /* --------------------------------- UI / UX ------------------------------ */
    "ui-ux": (icon) => `
      <div class="mock m-design">
        <div class="m-canvas">
          ${[0, 1, 2]
            .map(
              (i) => `<div class="m-frame f${i}"><b></b><i class="w80"></i><i class="w60"></i><span></span><i class="w90"></i><i class="w70"></i><u></u></div>`
            )
            .join("")}
          <div class="m-cursor">${icon("pen")}<em>Designer</em></div>
        </div>
        <div class="m-swatches"><span style="--c:#22d3ee"></span><span style="--c:#8b5cf6"></span><span style="--c:#ec4899"></span><span style="--c:#0e1430"></span><span style="--c:#f6f7fc"></span><em>Aa  Space Grotesk</em></div>
      </div>`,
  };
})();
