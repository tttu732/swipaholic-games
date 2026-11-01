/* =========================================================
   SwipaholicGames  アプリ一覧データ
   ---------------------------------------------------------
   ★ アプリを追加するときは、このファイルだけ編集すればOKです。
     下の APPS 配列に { ... } を1つ追加してください。

   各項目の説明（"" のままの項目は表示されません）
   - id          : 英数字の識別子（重複しないように）
   - name        : アプリ名
   - catch       : キャッチコピー（1行・任意）
   - description : 紹介文（2〜3行程度・任意）
   - genre       : ジャンル（任意。2種類以上あると絞り込みボタンが出ます）
   - status      : "released"（配信中） / "prereg"（事前登録受付中）
                   / "dev"（開発中） / "ended"（配信終了）
   - releaseDate : リリース日 "YYYY-MM-DD"（任意）
                   ※ 60日以内なら自動で NEW バッジが付きます
   - icon        : アイコン画像のパス（images/ フォルダに置く）
   - emoji       : アイコン画像が無いときに表示する絵文字
   - color       : カード上部の背景色（2色グラデーション）
   - site        : 公式サイトURL（空なら「公式サイト準備中」）
   - featured    : true にするとページ上部の「PICK UP」に大きく表示
   ========================================================= */

window.APPS = [
  {
    id: "swipaholic",
    name: "Swipaholic",
    catch: "中毒性MAX!爽快コンボ＆無限強化",
    description: "画面に現れる犬をひたすらスワイプ、指がこわれるまでランク上位を目指せ！みんなのスワイプで社会貢献しよう。",
    genre: "",
    status: "released",
    releaseDate: "",
    icon: "https://tttu732.github.io/swipaholic-games/swipaholic.png",
    emoji: "🐶",
    color: ["#7b2fff", "#c39bff"],
    site: "https://tttu732.github.io/swipaholic/",
    featured: false,
  },
  {
    id: "neco-yusha",
    name: "ねこ勇者",
    catch: "放置育成RPG",
    description: "もふもふのねこ勇者が、放っておいても勝手に戦ってレベルアップ。転生をくり返して、ダンジョンのどこまでも奥へ。",
    genre: "",
    status: "dev",
    releaseDate: "",
    icon: "https://tttu732.github.io/swipaholic-games/neco-yusha.png",
    emoji: "🐱",
    color: ["#8fd3ff", "#9be07a"],
    site: "https://tttu732.github.io/neco-yusha/",
    featured: true,
  },
  {
    id: "neco-mahou",
    name: "ねこ魔法",
    catch: "声で唱えろ、魔法がかわる。",
    description: "画面に流れる呪文を、スマホのマイクに向かって唱えよう。とぎれずに唱えきれたか、出だしのタイミング、さいごの叫びの大きさで、魔法の威力が決まる。",
    genre: "",
    status: "dev",
    releaseDate: "",
    icon: "https://tttu732.github.io/swipaholic-games/neco-mahou.png",
    emoji: "🔮",
    color: ["#2a1a5e", "#ff9a3c"],
    site: "https://tttu732.github.io/neco-mahou/",
    featured: false,
  },
  {
    id: "NYAKKEN",
    name: "にゃっ拳",
    catch: "ねこ界の強者たちの肉球拳バトル",
    description: "本格的な格ゲーコマンド操作、お気に入りキャラで勝利をつかめ！",
    genre: "",
    status: "released",
    releaseDate: "",
    icon: "https://tttu732.github.io/swipaholic-games/nyakken.png",
    emoji: "✊",
    color: ["#d7466d", "#7f3768"],
    site: "https://tttu732.github.io/NYAKKEN/NYAKKEN.html",
    featured: false,
  },
];

/* ---------------------------------------------------------
   サイト全体の設定（会社情報・SNSリンクなど）
   --------------------------------------------------------- */
window.SITE = {
  brand: "SwipaholicGames",
  tagline: "指先ひとつで、夢中になる。",
  lead: "SwipaholicGames は「ゲームが好きすぎてつくりはじめてしまった人」がスマホゲームをつくるインディーゲームスタジオ(自称)です。",
  sns: {
    x: "https://x.com/swipaholic2026",
    line: "",
  },
};
