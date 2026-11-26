/* =========================================================
   SwipaholicGames  プレスリリース（メディア向け）データ
   ---------------------------------------------------------
   ★ リリースを追加するときは、このファイルだけ編集すればOKです。
     PRESS 配列の一番上に { ... } を1つ追加してください。
     （表示は date の新しい順に自動で並びます）

   各項目の説明（"" や [] の項目は表示されません）
   - id        : 英数字の識別子。press.html#id でこのリリースに直接リンクできます
   - date      : 発表日 "YYYY-MM-DD"
   - app       : apps.js の id（アイコン・配信状況・テーマ色を自動で引用）
   - title     : リリースのタイトル
   - lead      : リード文（最初の段落）
   - body      : 本文の段落（配列。1要素＝1段落）
   - features  : ゲームの特徴（配列。{ title, text }）
   - facts     : ゲーム概要の表（配列。[項目名, 内容]）
   - images    : スクリーンショットなど（配列。画像URL）
   - kit       : ダウンロード用素材（配列。{ label, url }）
   - links     : 関連リンク（配列。{ label, url }）
   - credits   : クレジット表記（任意）
   ========================================================= */

window.PRESS = [
 {
    id: "kusage",
    date: "2026-11-26",
    app: "kusage",
    title: "同じ葉物野菜を指でなぞってつなげ。コンボとFEVERで、取り立て屋を倒す草パズルバトル『草ゲー』11月下旬配信予定",
    lead:
      "SwipaholicGames は、iPhone向け草パズルバトル『草ゲー』を2026年11月下旬に App Store で配信します。",
    body: [
      "本作は、利息に追われる借金500万円の農家、草野ゲンジが、地下闘技場で人生逆転をかけた草ゲーに参加、借金返済をめざすゲームです。農家の強みを生かし、見分けづらい葉物野菜を指でなぞってつなげます。",
    ],
    features: [
      { title: "同じ草を3つ以上つなぐ", text: "同じ葉物野菜を3つ以上なぞると攻撃。たくさんつなぐほどダメージが大きい。敵の弱点の草なら1.5倍。" },
      { title: "コンボとFEVER", text: "手を止めずに消し続けるとコンボ。ゲージが満タンになるとFEVERで8秒間ダメージ2倍。" },
      { title: "スキル「雑草魂」", text: "草を28個消すとゲンジが光る。タップすると一番多い草を根こそぎ消し、6秒間どの草でもつなげ放題。" },
      { title: "勝って、借金を返す", text: "勝てば賞金で借金を返済。スコアは経験値になり、草レベルが上がるとゲンジの攻撃力とHPが上がる。" },
      { title: "見分けにくい、葉物野菜30種。", text: "盤面に並ぶのは、よく似た3つ組。チンゲン菜と小松菜とほうれん草、一瞬で見分けられますか。草レベルを上げると新しいセットが解放されます。" },
    ],
    facts: [
      ["タイトル", "草ゲー"],
      ["ジャンル", "草パズルバトル"],
      ["配信日", "2026年11月下旬"],
      ["対応端末", "iPhone"],
      ["価格", "基本プレイ無料（広告あり）"],
      ["開発", "SwipaholicGames"],
    ],
    images: [
      "https://tttu732.github.io/kusage/shot1.jpg",
      "https://tttu732.github.io/kusage/shot2.jpg",
      "https://tttu732.github.io/kusage/shot3.jpg",
      "https://tttu732.github.io/kusage/shot4.jpg",
      "https://tttu732.github.io/kusage/shot5.jpg",
    ],
    kit: [
      { label: "アプリアイコン", url: "https://tttu732.github.io/kusage/apple-touch-icon.png" },
      { label: "メインビジュアル（640×320）", url: "https://tttu732.github.io/kusage/ogp.jpg" },
    ],
    links: [
      { label: "公式サイト", url: "https://tttu732.github.io/kusage/" },
      { label: "App Store", url: "https://apps.apple.com/jp/app/id6838381842" },
    ],
    credits: "© 2026 草ゲー",
  },
  {
    id: "wanchan-racers",
    date: "2026-11-21",
    app: "wanchan-racers",
    title: "ジェットエンジン改造×空中レース『ワンチャンレーサーズ』11月28日(土)配信決定、事前予約受付中",
    lead:
      "SwipaholicGames は、iPhone向け空中レースゲーム『ワンチャンレーサーズ』を2026年11月28日(土)に App Store で配信します。現在、App Store にて事前予約を受け付けています。",
    body: [
      "本作は、見習い整備士の柴犬ゴロウが、ガラクタの山から部品を集めてジェットエンジンを組み上げ、空いちばんの速さを決める「スカイGP」の優勝をめざすゲームです。身の回りのバーコードで部品を探し、エンジンを改造し、縦画面の3D空中レースに挑みます。",
    ],
    features: [
      { title: "身の回りのバーコードでジャンク探し", text: "お菓子の箱や本、ペットボトルのバーコードをカメラで読み込むと、ジャンクの山から部品を掘り出せます。指でこすって出てくるのは、ガラクタか、光り輝くレア部品か。" },
      { title: "ジェットエンジンをまるごとカスタマイズ", text: "ファンブレード、コンプレッサー、タービン、アフターバーナーなど19の部位に、4つのメーカーの部品を組み込み。組み合わせしだいで推力・最高速・加速・耐熱と見た目が変わります。" },
      { title: "縦画面の3D空中レース「スカイGP」", text: "操縦かんで空を駆け、リングをくぐってブーストゲージをためてスキル発動。片手で遊べる縦画面で、全10ステージの頂点をめざします。" },
      { title: "工場でオリジナル部品を製造", text: "溶解から鍛造、熱処理、コーティングまで7つの工程をタイミングよくタップ。色23種・光沢8種から選んだ、自分の工房の名前入り部品をつくれます。" },
      { title: "Game Center でオンライン対戦", text: "エンジンの総合力が近いプレイヤー同士で、最大4人のリアルタイム対戦。人数が足りないときはゴーストが参戦します。" },
    ],
    facts: [
      ["タイトル", "ワンチャンレーサーズ"],
      ["ジャンル", "空中レースゲーム"],
      ["配信日", "2026年11月28日(土)"],
      ["対応端末", "iPhone"],
      ["価格", "基本プレイ無料（広告あり）"],
      ["開発", "SwipaholicGames"],
    ],
    images: [
      "https://tttu732.github.io/wanchan-racers/shot_race1.webp",
      "https://tttu732.github.io/wanchan-racers/shot_scan_reveal.webp",
      "https://tttu732.github.io/wanchan-racers/shot_jet.webp",
      "https://tttu732.github.io/wanchan-racers/shot_fac_done.webp",
      "https://tttu732.github.io/wanchan-racers/shot_home.webp",
    ],
    kit: [
      { label: "アプリアイコン", url: "https://tttu732.github.io/wanchan-racers/icon.webp" },
      { label: "メインビジュアル（640×320）", url: "https://tttu732.github.io/wanchan-racers/og_640x320.png" },
    ],
    links: [
      { label: "公式サイト", url: "https://tttu732.github.io/wanchan-racers/" },
      { label: "App Store", url: "https://apps.apple.com/jp/app/id6834320509" },
    ],
    credits: "© 2026 ワンチャンレーサーズ",
  },
  {
    id: "neco-yusha",
    date: "2026-11-22",
    app: "neco-yusha",
    title: "もふもふのねこ勇者が無限ダンジョンを進む放置育成RPG『ねこ勇者 〜無限ダンジョンで無双する〜』11月22日(日)リリース、App Store にて配信中",
    lead:
      "SwipaholicGames は、放置育成RPG『ねこ勇者 〜無限ダンジョンで無双する〜』を App Store にて配信中です。基本プレイ無料で、iPhone・iPad で遊べます。",
    body: [
      "ねこたちの国「ミャウリア」の宝「ひだまりの宝珠」が、地下の無限ダンジョンにうばわれてしまった――。ねこ勇者は放っておいても自動で戦い、レベルアップをくり返しながら、ダンジョンのどこまでも奥へ進みます。",
    ],
    features: [
      { title: "放っておいても、勝手に強くなる", text: "ねこ勇者は自動で戦い、ゴールドと経験値を集めます。アプリを閉じている間も最大8時間ぶんの放置報酬を受け取れます。" },
      { title: "レベルも装備も、上限なし", text: "能力値の振り分けや、ぶき・よろい・おまもりの無限強化に対応。数字は万・億・兆…と、無量大数まで伸びていきます。" },
      { title: "転生でインフレ", text: "強さが伸びなくなったら転生。オーブで覚える「ユニークスキル」で、次の冒険はもっと速く、もっと深くまで進めます。" },
      { title: "鬼モード・ヘルモードと踏破ランキング", text: "5000Fでまおうさまに勝つと鬼モードが解放。モードごとに累計と月間の踏破ランキングで全国の勇者と競えます。" },
      { title: "32種類のきせかえ", text: "見た目だけが変わるきせかえで、好きな姿で冒険できます。" },
    ],
    facts: [
      ["タイトル", "ねこ勇者 〜無限ダンジョンで無双する〜"],
      ["ジャンル", "放置育成RPG"],
      ["配信日", "2026年11月22日(日)"],
      ["対応端末", "iPhone・iPhone Duo・iPad"],
      ["価格", "基本プレイ無料（広告あり）"],
      ["開発", "SwipaholicGames"],
    ],
    images: [
      "https://tttu732.github.io/neco-yusha/ss_battle.jpg",
      "https://tttu732.github.io/neco-yusha/ss_artifact.jpg",
      "https://tttu732.github.io/neco-yusha/ss_rebirth.jpg",
      "https://tttu732.github.io/neco-yusha/ss_ranking.jpg",
    ],
    kit: [
      { label: "アプリアイコン", url: "https://tttu732.github.io/neco-yusha/icon.png" },
      { label: "メインビジュアル", url: "https://tttu732.github.io/neco-yusha/ogp.png" },
    ],
    links: [
      { label: "公式サイト", url: "https://tttu732.github.io/neco-yusha/" },
      { label: "App Store", url: "https://apps.apple.com/jp/app/id6827196685" },
    ],
    credits: "© 2026 ねこ勇者",
  },
  {
    id: "niki",
    date: "2026-11-23",
    app: "niki",
    title: "バーコードから相棒「ニキ」を召喚して走り抜ける疾走2Dアクション『NIKI』、11月23(月)リリース！App Store にて配信中",
    lead:
      "SwipaholicGames は、召喚×疾走2Dアクション『NIKI（ニキ）』を App Store にて配信中です。身の回りのバーコードやQRコードが、世界に1体だけの相棒「ニキ」に変わります。",
    body: [
      "舞台は、令和の少し先。かつてネット掲示板にいた「ニキ」と呼ばれるおせっかいな善意の持ち主たちは、AIがすべての質問に答えるようになった日から姿を消していました。文化祭のチラシに刷られた見覚えのないQRコードを読み込んだ5人の高校生が、ニキたちとともに街を管理するAIに挑みます。",
    ],
    features: [
      { title: "タップだけで遊べるオートラン", text: "主人公は自動で走り続け、タップでジャンプ、空中でもう一度タップで2段ジャンプ。炎・草・水・万能の「ソウル」を集めます。" },
      { title: "バーコードから召喚", text: "お菓子の箱、本、チラシのQRコードなど、読み込んだコードごとにニキの種類・レア度・個体値が決まります。全30種・8段階のレア度。" },
      { title: "ニキのスキルで戦うバトル", text: "1ステージに3回のバトル。集めたソウルで、編成した5体のニキのスキルを発動。属性の相性を見極めてAIボットを撃破します。" },
      { title: "5人の主人公、40話×5人分の物語", text: "主人公ごとに物語とリーダースキルが変化。全8章・40ステージで、各章の最後にはボスが待ち受けます。" },
    ],
    facts: [
      ["タイトル", "NIKI（ニキ）"],
      ["ジャンル", "召喚×疾走 2Dアクション"],
      ["配信日", "2026年11月23日(月)"],
      ["対応端末", "iPhone（iOS 16.4 以降）"],
      ["価格", "基本プレイ無料（広告あり）"],
      ["開発", "SwipaholicGames"],
    ],
    images: [
      "https://tttu732.github.io/niki/ss_title.jpg",
      "https://tttu732.github.io/niki/ss_run.jpg",
      "https://tttu732.github.io/niki/ss_battle.jpg",
      "https://tttu732.github.io/niki/ss_summon_result.jpg",
      "https://tttu732.github.io/niki/ss_boss.jpg",
    ],
    kit: [
      { label: "アプリアイコン", url: "https://tttu732.github.io/niki/app_icon.png" },
      { label: "メインビジュアル", url: "https://tttu732.github.io/niki/ogp.png" },
    ],
    links: [
      { label: "公式サイト", url: "https://tttu732.github.io/niki/" },
      { label: "App Store", url: "https://apps.apple.com/jp/app/id6836397470" },
    ],
    credits: "ボイス：VOICEVOX:離途　© 2026 NIKI",
  },
  {
    id: "neco-mahou",
    date: "2026-11-14",
    app: "neco-mahou",
    title: "声で唱えて戦う、ゆるかわ×呪文詠唱RPG『ねこ魔法』App Store にて配信開始",
    lead:
      "SwipaholicGames は、2026年11月14日(土)、ゆるかわ×呪文詠唱RPG『ねこ魔法』を App Store にて配信開始しました。基本プレイ無料で、iPhone・iPad で遊べます。",
    body: [
      "画面に流れる呪文を、スマホのマイクに向かって唱えて戦うRPGです。とぎれずに唱えきれたか、出だしのタイミング、最後の叫びの大きさで魔法の威力が決まります。主人公は、闇の力に憧れる見習い魔導ねこ「シロ」。声を出せない場所では、タップでも詠唱できます。",
    ],
    features: [
      { title: "声で唱えろ、魔法がかわる", text: "帯が白い線にふれた瞬間にその行を声に出し、最後の魔法名は全力で叫ぶ。詠唱の上手さが、攻撃・回復・補助すべての魔法の強さに反映されます。" },
      { title: "魔法陣を指で描く", text: "星形、ハート、いなずま、三日月、九芒星。光る点から指でなぞって描きあげると詠唱がはじまります。3ターンかけて唱える特大超魔法も。" },
      { title: "ねこの苦手なものと戦う", text: "ドライヤー魔人、おふろ大魔王、ドクター・チュウシャ……。炎・氷・雷・聖・闇・無の6属性で弱点をつこう。" },
      { title: "自分だけの呪文をつくる", text: "第1部をクリアすると、魔法名と詠唱文を自分で決めてオリジナル魔法陣を作成可能。画像にしてXなどでシェアできます。" },
    ],
    facts: [
      ["タイトル", "ねこ魔法"],
      ["ジャンル", "ゆるかわ × 呪文詠唱RPG"],
      ["配信日", "2026年11月14日(土)"],
      ["対応端末", "iPhone・iPhone Duo・iPad"],
      ["価格", "基本プレイ無料（広告あり）"],
      ["開発", "SwipaholicGames"],
    ],
    images: [
      "https://tttu732.github.io/neco-mahou/ss_chant.webp",
      "https://tttu732.github.io/neco-mahou/ss_trace.webp",
      "https://tttu732.github.io/neco-mahou/ss_battle.webp",
      "https://tttu732.github.io/neco-mahou/ss_original.webp",
      "https://tttu732.github.io/neco-mahou/ss_final.webp",
    ],
    kit: [
      { label: "アプリアイコン", url: "https://tttu732.github.io/neco-mahou/icon.png" },
      { label: "メインビジュアル", url: "https://tttu732.github.io/neco-mahou/ogp.png" },
    ],
    links: [
      { label: "公式サイト", url: "https://tttu732.github.io/neco-mahou/" },
      { label: "App Store", url: "https://apps.apple.com/jp/app/id6828928177" },
    ],
    credits: "© 2026 ねこ魔法",
  },
  {
    id: "nyakken",
    date: "2026-11-07",
    app: "NYAKKEN",
    title: "8人の猫拳士が戦う本格コマンド格闘ゲーム『にゃっ拳 NYANKO FIGHTERS』App Store にて配信開始",
    lead:
      "SwipaholicGames は、2026年11月7日、本格コマンド格闘ゲーム『にゃっ拳 NYANKO FIGHTERS -強者たちの肉球拳-』を App Store にて配信開始しました。基本プレイ無料・アカウント登録なしで遊べます。",
    body: [
      "十年前、紅い満月の夜に肉球拳の宗家・大師範ニャン斎が姿を消し、奥義書『肉球真経』は八つに裂かれた。その切れ端「肉球印」を手にした八匹のねこが、肉球拳の正統後継をかけて戦います。8人それぞれの物語が交差し、伏線がつながるとき、真相が明らかになります。",
    ],
    features: [
      { title: "スマホで本格コマンドバトル", text: "↓↘→＋P、→↓↘＋P など、格闘ゲームおなじみのコマンド入力に対応。バーチャルスティックとボタンで遊びやすく。" },
      { title: "操作設定が充実", text: "アーケード寄りのクラシック操作、格ゲーライト層でも楽しめるモダン操作、対戦でのゲームパッド操作と好きな操作で遊べます。" },
      { title: "超必殺技で一発逆転", text: "にゃんゲージを溜めて、迫力のカットインから超必殺技。キャンセル・チェーンでコンボもつながります。" },
      { title: "8人の猫拳士と全40章のストーリー", text: "スピード型、パワー型、テクニカル型など個性豊かな8人。それぞれの物語を集めて真相へ。" },
      { title: "対戦・ランキング", text: "Wi‑Fiで近くの友だちと、Game Center で全国のプレイヤーと対戦。ねこ鈴ランキングで肉球拳聖をめざします。" },
      { title: "10ステージ×8曲のバトルBGM", text: "雪見城、肉球夜祭、ネオン街の屋上…。エピックからメタル、チップチューンまで試合ごとにBGMが変わります。" },
    ],
    facts: [
      ["タイトル", "にゃっ拳 NYANKO FIGHTERS -強者たちの肉球拳-"],
      ["ジャンル", "コマンド格闘ゲーム"],
      ["配信日", "2026年11月7日"],
      ["対応端末", "iPhone・iPhone Duo・iPad"],
      ["価格", "基本プレイ無料（広告あり）"],
      ["開発", "SwipaholicGames"],
    ],
    images: [
      "https://tttu732.github.io/NYAKKEN/ss_battle.webp",
      "https://tttu732.github.io/NYAKKEN/ss_super.webp",
      "https://tttu732.github.io/NYAKKEN/ss_select.webp",
      "https://tttu732.github.io/NYAKKEN/ss_story.webp",
      "https://tttu732.github.io/NYAKKEN/ss_neon.webp",
    ],
    kit: [
      { label: "アプリアイコン", url: "https://tttu732.github.io/NYAKKEN/icon.png" },
      { label: "メインビジュアル", url: "https://tttu732.github.io/NYAKKEN/ogp.jpg" },
    ],
    links: [
      { label: "公式サイト", url: "https://tttu732.github.io/NYAKKEN/" },
      { label: "App Store", url: "https://apps.apple.com/jp/app/id6829777823" },
    ],
    credits: "ボイス：雪樹也、狼谷しっぽ　© にゃっ拳 製作委員会",
  },
];

/* ---------------------------------------------------------
   メディア向けのスタジオ情報（press.html の下部に表示）
   --------------------------------------------------------- */
window.PRESS_INFO = {
  intro:
    "SwipaholicGames のゲームに関する最新情報、ゲーム概要、画像素材をまとめています。記事や動画での紹介、取材のご依頼を歓迎します。",
  usage:
    "このページの画像素材は、ゲームの紹介を目的とした記事・動画などで自由にお使いいただけます。掲載のご連絡は不要ですが、お知らせいただけるととても励みになります。",
  studio: [
    ["スタジオ名", "SwipaholicGames"],
    ["活動内容", "スマホゲームの企画・開発・運営"],
    ["公式サイト", "https://tttu732.github.io/swipaholic-games/"],
    ["X", "https://x.com/swipaholic2026"],
  ],
};
