/* =========================================================
   SwipaholicGames  表示ロジック
   ※ 通常はこのファイルを編集する必要はありません。
     アプリの追加・変更は apps.js で行ってください。
   ========================================================= */
(function () {
  const APPS = window.APPS || [];
  const SITE = window.SITE || {};

  const STATUS = {
    released: { label: "配信中", cls: "st-released" },
    prereg: { label: "事前登録受付中", cls: "st-prereg" },
    dev: { label: "開発中", cls: "st-dev" },
    ended: { label: "配信終了", cls: "st-ended" },
  };
  const STATUS_ORDER = ["prereg", "released", "dev", "ended"];
  const NEW_DAYS = 60;

  const $ = (s) => document.querySelector(s);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const isNew = (a) => {
    if (!a.releaseDate || a.status !== "released") return false;
    const diff = (Date.now() - new Date(a.releaseDate).getTime()) / 864e5;
    return diff >= 0 && diff <= NEW_DAYS;
  };
  const fmtDate = (d) => {
    if (!d) return "";
    const t = new Date(d);
    return `${t.getFullYear()}.${String(t.getMonth() + 1).padStart(2, "0")}.${String(t.getDate()).padStart(2, "0")}`;
  };
  const grad = (a) => {
    const [c1, c2] = a.color || ["#ff5f8f", "#6a8dff"];
    return `linear-gradient(135deg, ${c1}, ${c2})`;
  };

  /* ---------- 並び順：ステータス → リリース日の新しい順 ---------- */
  const sorted = [...APPS].sort((a, b) => {
    const s = STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status);
    if (s) return s;
    return (b.releaseDate || "9999").localeCompare(a.releaseDate || "9999");
  });

  /* ---------- 部品 ---------- */
  const iconHTML = (a, size = "") =>
    a.icon
      ? `<img class="icon ${size}" src="${esc(a.icon)}" alt="${esc(a.name)} アイコン" loading="lazy">`
      : `<div class="icon icon--auto ${size}" style="background:${grad(a)}" role="img" aria-label="${esc(a.name)} アイコン">${esc(a.emoji || a.name[0])}</div>`;

  const badgesHTML = (a) => {
    const st = STATUS[a.status] || STATUS.dev;
    return `<div class="badges"><span class="badge ${st.cls}">${st.label}</span>${isNew(a) ? '<span class="badge badge--new">NEW</span>' : ""}${a.genre ? `<span class="badge badge--genre">${esc(a.genre)}</span>` : ""}</div>`;
  };

  const siteBtn = (a, big) =>
    a.site
      ? `<a class="btn ${big ? "btn--big" : ""}" href="${esc(a.site)}" target="_blank" rel="noopener">公式サイトへ <span aria-hidden="true">→</span></a>`
      : `<span class="btn btn--disabled">公式サイト準備中</span>`;

  const cardHTML = (a, i) => `
    <article class="card" style="--g:${grad(a)}; --d:${i * 70}ms">
      <div class="card__visual" style="background:${grad(a)}">
        <span class="card__spark">✦</span>
        ${iconHTML(a, "icon--lg")}
      </div>
      <div class="card__body">
        ${badgesHTML(a)}
        <h3 class="card__name">${esc(a.name)}</h3>
        ${a.catch ? `<p class="card__catch">${esc(a.catch)}</p>` : ""}
        <p class="card__desc">${esc(a.description)}</p>
        ${a.releaseDate ? `<p class="card__date">RELEASE ${fmtDate(a.releaseDate)}</p>` : ""}
        <div class="card__actions">${siteBtn(a)}</div>
      </div>
    </article>`;

  /* ---------- サイト設定の反映 ---------- */
  document.querySelectorAll("[data-site]").forEach((el) => {
    const v = SITE[el.dataset.site];
    if (v) el.textContent = v;
  });
  if ($("#year")) $("#year").textContent = new Date().getFullYear();
  if (SITE.contactEmail && $("#mail")) {
    $("#mail").textContent = SITE.contactEmail;
    $("#mail").href = "mailto:" + SITE.contactEmail;
  }
  $("#footerLinks").innerHTML = (SITE.links || [])
    .map((l) => `<li><a href="${esc(l.url)}">${esc(l.label)}</a></li>`)
    .join("");
  const SNS_ICON = {
    x: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.8 2.3h7l4.8 6.4 5.6-6.4zm-1.2 17.9h1.9L7.1 4.2H5.1l11.9 16z"/></svg>',
    line: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 5.6 2 10.1c0 4 3.6 7.4 8.4 8 .3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5 1.1-.5 5.9-3.5 8-6 1.5-1.6 2-3.2 2-4.9C22 5.6 17.5 2 12 2z"/></svg>',
  };
  $("#sns").innerHTML = Object.entries(SITE.sns || {})
    .filter(([, url]) => url)
    .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${k}">${SNS_ICON[k] || k}</a>`)
    .join("");

  // ここから下はトップページ専用（ガイドラインページなどでは実行しない）
  if (!$("#grid")) return;

  /* ---------- ヒーロー：浮遊アイコンと数字 ---------- */
  // アプリ数が6未満でも6か所すべてに浮かぶよう、順番に繰り返して配置
  const floats = sorted.length ? Array.from({ length: 6 }, (_, i) => sorted[i % sorted.length]) : [];
  $("#heroFloat").innerHTML = floats
    .map((a, i) => `<div class="float f${i + 1}">${iconHTML(a)}</div>`)
    .join("");
  const count = (s) => APPS.filter((a) => a.status === s).length;
  $("#heroStats").innerHTML = `
    <div><b>${APPS.length}</b><span>TITLES</span></div>
    <div><b>${count("released")}</b><span>配信中</span></div>
    <div><b>${count("prereg") + count("dev")}</b><span>COMING</span></div>`;

  /* ---------- PICK UP ---------- */
  const fe = APPS.find((a) => a.featured);
  if (fe) {
    $("#pickup").hidden = false;
    $("#pickupBody").innerHTML = `
      <div class="feature" style="--g:${grad(fe)}">
        <div class="feature__visual" style="background:${grad(fe)}">
          <span class="spark fs1">✦</span><span class="spark fs2">✧</span><span class="spark fs3">✦</span>
          ${iconHTML(fe, "icon--xl")}
        </div>
        <div class="feature__body">
          ${badgesHTML(fe)}
          <h3 class="feature__name">${esc(fe.name)}</h3>
          ${fe.catch ? `<p class="feature__catch">${esc(fe.catch)}</p>` : ""}
          ${fe.description ? `<p class="feature__desc">${esc(fe.description)}</p>` : ""}
          <div class="card__actions">${siteBtn(fe, true)}</div>
        </div>
      </div>`;
  }

  /* ---------- 絞り込み ---------- */
  const state = { status: "all", genre: "all" };
  const statuses = STATUS_ORDER.filter((s) => APPS.some((a) => a.status === s));
  const genres = [...new Set(APPS.map((a) => a.genre).filter(Boolean))];

  const chip = (group, val, label, n) =>
    `<button class="chip" data-group="${group}" data-val="${esc(val)}" aria-pressed="${state[group] === val}">${esc(label)}${n != null ? `<i>${n}</i>` : ""}</button>`;

  function renderChips() {
    $("#statusChips").innerHTML =
      chip("status", "all", "すべて", APPS.length) +
      statuses.map((s) => chip("status", s, STATUS[s].label, count(s))).join("");
    $("#genreChips").innerHTML =
      genres.length > 1
        ? chip("genre", "all", "全ジャンル") + genres.map((g) => chip("genre", g, "#" + g)).join("")
        : "";
  }

  function renderGrid() {
    const list = sorted.filter(
      (a) => (state.status === "all" || a.status === state.status) && (state.genre === "all" || a.genre === state.genre)
    );
    $("#grid").innerHTML = list.map(cardHTML).join("");
    $("#empty").hidden = list.length > 0;
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    state[b.dataset.group] = b.dataset.val;
    renderChips();
    renderGrid();
  });

  renderChips();
  renderGrid();
})();
