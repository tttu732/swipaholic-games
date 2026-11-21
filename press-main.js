/* =========================================================
   SwipaholicGames  プレスページ表示ロジック
   ※ 通常はこのファイルを編集する必要はありません。
     リリースの追加・変更は press.js で行ってください。
   ========================================================= */
(function () {
  const PRESS = window.PRESS || [];
  const INFO = window.PRESS_INFO || {};
  const APPS = window.APPS || [];
  const SITE = window.SITE || {};

  const $ = (s) => document.querySelector(s);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const linkify = (s) =>
    /^https?:\/\//.test(s) ? `<a href="${esc(s)}" target="_blank" rel="noopener">${esc(s)}</a>` : esc(s);

  const STATUS = {
    released: { label: "配信中", cls: "st-released" },
    prereg: { label: "事前登録受付中", cls: "st-prereg" },
    dev: { label: "開発中", cls: "st-dev" },
    ended: { label: "配信終了", cls: "st-ended" },
  };
  const fmtDate = (d) => {
    const t = new Date(d + "T00:00:00");
    return `${t.getFullYear()}年${t.getMonth() + 1}月${t.getDate()}日`;
  };
  const appOf = (p) => APPS.find((a) => a.id === p.app) || {};
  const grad = (a) => {
    const [c1, c2] = a.color || ["#ff5f8f", "#6a8dff"];
    return `linear-gradient(135deg, ${c1}, ${c2})`;
  };
  const pageUrl = (id) => location.href.split("#")[0] + "#" + id;

  const list = [...PRESS].sort((a, b) => b.date.localeCompare(a.date));

  /* ---------- 冒頭・素材・スタジオ情報 ---------- */
  $("#pressIntro").textContent = INFO.intro || "";
  $("#pressUsage").textContent = INFO.usage || "";
  $("#studioFacts").innerHTML = (INFO.studio || [])
    .map(([k, v]) => `<tr><th>${esc(k)}</th><td>${linkify(v)}</td></tr>`)
    .join("");
  document.querySelectorAll(".js-mail").forEach((a) => {
    if (SITE.contactEmail) { a.textContent = SITE.contactEmail; a.href = "mailto:" + SITE.contactEmail; }
  });

  /* ---------- 目次 ---------- */
  $("#pressIndex").innerHTML = list
    .map((p) => `<li><a href="#${esc(p.id)}"><time>${p.date.replace(/-/g, ".")}</time><span>${esc(p.title)}</span></a></li>`)
    .join("");

  /* ---------- リリース本体 ---------- */
  const releaseHTML = (p) => {
    const a = appOf(p);
    const st = STATUS[a.status];
    const icon = a.icon ? `<img class="icon" src="${esc(a.icon)}" alt="${esc(a.name)} アイコン" loading="lazy">` : "";
    return `
    <article class="release" id="${esc(p.id)}" style="--g:${grad(a)}">
      <header class="release__head">
        ${icon}
        <div>
          <p class="release__meta"><time datetime="${p.date}">${fmtDate(p.date)}</time>${st ? `<span class="badge ${st.cls}">${st.label}</span>` : ""}</p>
          <h2 class="release__title">${esc(p.title)}</h2>
        </div>
      </header>
      <p class="release__lead">${esc(p.lead)}</p>

      <details class="release__more">
        <summary><span class="more-open">本文・ゲーム概要・画像素材を見る</span><span class="more-close">閉じる</span></summary>

        ${(p.body || []).map((t) => `<p class="release__body">${esc(t)}</p>`).join("")}

        ${p.images && p.images.length ? `
        <h3>スクリーンショット</h3>
        <div class="shots">${p.images.map((u) => `<a href="${esc(u)}" target="_blank" rel="noopener"><img src="${esc(u)}" alt="${esc(a.name || "")} スクリーンショット" loading="lazy"></a>`).join("")}</div>
        <p class="release__hint">画像をクリックすると原寸で開きます（長押し・右クリックで保存できます）。</p>` : ""}

        ${p.features && p.features.length ? `
        <h3>ゲームの特徴</h3>
        <ol class="features">${p.features.map((f) => `<li><b>${esc(f.title)}</b><span>${esc(f.text)}</span></li>`).join("")}</ol>` : ""}

        ${p.facts && p.facts.length ? `
        <h3>ゲーム概要</h3>
        <table class="facts">${p.facts.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${linkify(v)}</td></tr>`).join("")}
          ${(p.links || []).map((l) => `<tr><th>${esc(l.label)}</th><td>${linkify(l.url)}</td></tr>`).join("")}
        </table>` : ""}

        ${p.kit && p.kit.length ? `
        <h3>素材ダウンロード</h3>
        <div class="kit">${p.kit.map((k) => `<a class="kit__item" href="${esc(k.url)}" target="_blank" rel="noopener"><span aria-hidden="true">⬇</span>${esc(k.label)}</a>`).join("")}</div>` : ""}

        ${p.credits ? `<p class="release__credits">${esc(p.credits)}</p>` : ""}
      </details>

      <div class="release__actions">
        <button class="chip" data-copy-link="${esc(p.id)}">🔗 このリリースのリンクをコピー</button>
        <button class="chip" data-copy-text="${esc(p.id)}">📄 本文をテキストでコピー</button>
      </div>
    </article>`;
  };
  $("#pressList").innerHTML = list.map(releaseHTML).join("");

  /* ---------- テキスト版（メールやPR配信サービスに貼り付け用） ---------- */
  const plainText = (p) => {
    const L = [];
    L.push(`【${fmtDate(p.date)}】${p.title}`, "", p.lead, "");
    (p.body || []).forEach((t) => L.push(t, ""));
    if (p.features && p.features.length) {
      L.push("■ ゲームの特徴");
      p.features.forEach((f, i) => L.push(`${i + 1}. ${f.title}`, `   ${f.text}`));
      L.push("");
    }
    if (p.facts && p.facts.length) {
      L.push("■ ゲーム概要");
      p.facts.forEach(([k, v]) => L.push(`${k}：${v}`));
      (p.links || []).forEach((l) => L.push(`${l.label}：${l.url}`));
      L.push("");
    }
    L.push("■ 画像素材", pageUrl(p.id), "");
    if (p.credits) L.push(p.credits, "");
    L.push("■ 本件に関するお問い合わせ", `${SITE.brand || ""}　${SITE.contactEmail || ""}`);
    return L.join("\n");
  };

  /* ---------- コピー ---------- */
  const toast = (msg) => {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 2200);
  };
  const copy = async (text, msg) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(msg);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast(msg); } catch (_) { toast("コピーできませんでした"); }
      ta.remove();
    }
  };
  document.addEventListener("click", (e) => {
    const l = e.target.closest("[data-copy-link]");
    if (l) return copy(pageUrl(l.dataset.copyLink), "リンクをコピーしました");
    const t = e.target.closest("[data-copy-text]");
    if (t) {
      const p = PRESS.find((x) => x.id === t.dataset.copyText);
      if (p) copy(plainText(p), "本文をコピーしました");
    }
  });

  /* ---------- press.html#id で開いたら、そのリリースを展開 ---------- */
  const openFromHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const el = id && document.getElementById(id);
    if (el && el.classList.contains("release")) {
      el.querySelector("details").open = true;
      el.scrollIntoView({ block: "start" });
    }
  };
  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();
