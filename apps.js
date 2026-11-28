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
    description: "画面に現れる犬をひたすらスワイプ、指がこわれるまでランク上位を目指せ！みんなのスワイプで社会貢献しよう。(DB一時停止中)",
    genre: "",
    status: "released",
    releaseDate: "2026-03-25",
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
    status: "released",
    releaseDate: "2026-11-22",
    icon: "https://tttu732.github.io/swipaholic-games/neco-yusha.png",
    emoji: "🐱",
    color: ["#8fd3ff", "#9be07a"],
    site: "https://tttu732.github.io/neco-yusha/",
    featured: false,
  },
  {
    id: "neco-mahou",
    name: "ねこ魔法",
    catch: "声で唱えろ、魔法がかわる。",
    description: "画面に流れる呪文を、スマホのマイクに向かって唱えよう。とぎれずに唱えきれたか、出だしのタイミング、さいごの叫びの大きさで、魔法の威力が決まる。",
    genre: "",
    status: "released",
    releaseDate: "2026-11-14",
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
    releaseDate: "2026-11-07",
    icon: "https://tttu732.github.io/swipaholic-games/nyakken.png",
    emoji: "✊",
    color: ["#0067C0", "#0054A6"],
    site: "https://tttu732.github.io/NYAKKEN/",
    featured: false,
  },
  {
    id: "wanchan-racers",
    name: "ワンチャンレーサーズ",
    catch: "パイロット育成 × 爆速エアレース",
    description: "ジャンク品からエンジンをカスタマイズ、ワンチャン、空のてっぺんへ！",
    genre: "",
    status: "released",
    releaseDate: "2026-11-28",
    icon: "https://tttu732.github.io/swipaholic-games/wanchan-racers.png",
    emoji: "🛬",
    color: ["#dce7f1", "#68b0f8"],
    site: "https://tttu732.github.io/wanchan-racers/",
    featured: false,
  },
　{
    id: "niki",
    name: "NIKI",
    catch: "消えた「ニキ」を、もう一度呼び出せ。",
    description: "バーコードやQRコードから「ニキ」を召喚して走り抜ける、縦画面の疾走2Dアクション。",
    genre: "",
    status: "released",
    releaseDate: "2026-11-23",
    icon: "https://tttu732.github.io/swipaholic-games/niki.png",
    emoji: "👻",
    color: ["#f0456f", "#4fb3bf"],
    site: "https://tttu732.github.io/niki/",
    featured: false,
  },
　{
    id: "kusage",
    name: "草ゲー",
    catch: "借金500万円。返す方法はただひとつ、地下闘技場で勝つこと。",
    description: "葉物野菜をつないで一発逆転する、草パズルバトル。",
    genre: "",
    status: "prereg",
    releaseDate: "2026-11-29",
    icon: "https://tttu732.github.io/swipaholic-games/kusage.png",
    emoji: "🍃",
    color: ["#FF1A8C", "#B8A3B6"],
    site: "https://tttu732.github.io/kusage/",
    featured: true,
  },
　{
    id: "nyajira",
    name: "ニャジラ",
    catch: "昭和ネオン街 リズム大破壊",
    description: "ねこ×怪獣の「ニャジラ」になって、リズムに乗って北海道から九州まで大暴れしよう",
    genre: "",
    status: "released",
    releaseDate: "2026-11-27",
    icon: "https://tttu732.github.io/swipaholic-games/nyajira.png",
    emoji: "🐈",
    color: ["#a04bff", "#ff3fa4"],
    site: "https://tttu732.github.io/nyajira/",
    featured: false,
  },
  {
    id: "dbc",
    name: "DevBuddyConnect",
    catch: "個人開発者を、ひとりにしない。",
    description: "バーコードで生まれる、あなただけの相棒。集中タイムも休憩も、歩数も睡眠も、ぜんぶ見て応援してくれる。やる気と健康を、相棒と一緒にこつこつ積み上げよう。",
    genre: "",
    status: "dev",
    releaseDate: "",
    icon: "https://tttu732.github.io/swipaholic-games/dbc.png",
    emoji: "💻",
    color: ["#2EB8FD", "#FC3D99"],
    site: "https://tttu732.github.io/devbuddyconnect/",
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
  contactEmail: "swipaholic.app@gmail.com",
  sns: {
    x: "https://x.com/swipaholic2026",
    ofuse: "https://ofuse.me/swipaholic_games",
    youtube: "https://www.youtube.com/channel/UCyn2fkGhRw-5tYdj6xNfbjQ",
    line: "",
  },
  links: [
    { label: "配信・二次創作ガイドライン", url: "guideline.html#top" },
    { label: "プレス・メディアの皆さまへ", url: "press.html#top" },
  ],
};
