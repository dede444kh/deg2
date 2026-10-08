window.gLocalAssetContainer["main"] = function(g) { (function(exports, require, module, __filename, __dirname) {
// オリジナル無料10連（Akashic Engine v3 シンプル安定版・画像ボタン版・ブログ公開版）
var W = 1280;
var H = 720;
var RARITY_COLOR = {
  N: "#94a3b8",
  R: "#60a5fa",
  SR: "#c084fc",
  SSR: "#fbbf24"
};
var RARITY_TEXT = {
  N: "#ffffff",
  R: "#60a5fa",
  SR: "#c084fc",
  SSR: "#fbbf24"
};
var RARITY_BG = {
  N: "#1e293b",
  R: "#0f1d3a",
  SR: "#2a1245",
  SSR: "#3a2508"
};
var NAME_COLOR = {
  N: "#ffffff",
  R: "#dbeafe",
  SR: "#f3e8ff",
  SSR: "#fde68a"
};
var TITLE = "オリジナル無料10連";
var FRAME = "#fbbf24";

// ===== ルール設定 =====
var TIME_LIMIT = 150; // 全体の制限時間（秒）。ニコ生の放送者設定があれば main() で上書きされる
var MULTI_MAX = 10; // 10連を引ける回数（10回引き切ったらゲーム終了）
var ALLOW_REPLAY = true; // true: 結果画面に「もう一度あそぶ」が出る（ブログ公開用）

var CHARS = [{
  id: 1,
  name: "ごきぶり",
  rarity: "N",
  img: "goki.png",
  rate: 25.0
}, {
  id: 2,
  name: "しょう",
  rarity: "N",
  img: "sf.PNG",
  rate: 25.0
}, {
  id: 3,
  name: "いしだたみ",
  rarity: "R",
  img: "is2.png",
  rate: 4.5
}, {
  id: 4,
  name: "スライム",
  rarity: "R",
  img: "slime.png",
  rate: 4.5
}, {
  id: 5,
  name: "ホットドッグ",
  rarity: "R",
  img: "d.png",
  rate: 4.5
}, {
  id: 6,
  name: "別世界の入り口",
  rarity: "R",
  img: "ise.png",
  rate: 4.5
}, {
  id: 7,
  name: "デグの拳",
  rarity: "R",
  img: "deg1.png",
  rate: 4.5
}, {
  id: 8,
  name: "デグの気",
  rarity: "R",
  img: "deg2.png",
  rate: 4.5
}, {
  id: 9,
  name: "デグの手の甲",
  rarity: "R",
  img: "deg3.png",
  rate: 4.5
}, {
  id: 10,
  name: "隠れる人",
  rarity: "R",
  img: "333.png",
  rate: 4.5
}, {
  id: 11,
  name: "いしだたみ先輩",
  rarity: "SR",
  img: "ishi.png",
  rate: 1.5
}, {
  id: 12,
  name: "白だんご先輩",
  rarity: "SR",
  img: "sir.png",
  rate: 1.5
}, {
  id: 13,
  name: "ピアス",
  rarity: "SR",
  img: "pa.png",
  rate: 1.5
}, {
  id: 14,
  name: "亜熊",
  rarity: "SR",
  img: "aq.PNG",
  rate: 1.5
}, {
  id: 15,
  name: "閉じ込められた蒼花",
  rarity: "SR",
  img: "tz.png",
  rate: 1.5
}, {
  id: 16,
  name: "それな！",
  rarity: "SR",
  img: "srn.PNG",
  rate: 1.5
}, {
  id: 17,
  name: "おいしいあんパン",
  rarity: "SR",
  img: "anp.png",
  rate: 1.5
}, {
  id: 18,
  name: "ストロベリードーナツ",
  rarity: "SR",
  img: "pnk.PNG",
  rate: 1.5
}, {
  id: 19,
  name: "暗殺視点",
  rarity: "SR",
  img: "asns.png",
  rate: 1.5
}, {
  id: 20,
  name: "破滅の魔導書",
  rarity: "SSR",
  img: "hm.png",
  rate: 0.3
}, {
  id: 21,
  name: "地落の天翼",
  rarity: "SSR",
  img: "dt.png",
  rate: 0.3
}, {
  id: 22,
  name: "天翼丸",
  rarity: "SSR",
  img: "eee.png",
  rate: 0.3
}, {
  id: 23,
  name: "スライム大臣",
  rarity: "SSR",
  img: "sri.png",
  rate: 0.3
}, {
  id: 24,
  name: "テニスラケット",
  rarity: "SSR",
  img: "rk.PNG",
  rate: 0.3
}, {
  id: 25,
  name: "白米",
  rarity: "SSR",
  img: "hkm.png",
  rate: 0.3
}, {
  id: 26,
  name: "パンチラ",
  rarity: "SSR",
  img: "pn.PNG",
  rate: 2.0
}, {
  id: 27,
  name: "聖拳を極めし者",
  rarity: "SSR",
  img: "ssss.png",
  rate: 0.3
}, {
  id: 28,
  name: "町の働き者",
  rarity: "SSR",
  img: "zyun.png",
  rate: 0.3
}, {
  id: 29,
  name: "チョコアイス",
  rarity: "SSR",
  img: "ty.png",
  rate: 0.3
}, {
  id: 30,
  name: "地獄の三十面相",
  rarity: "SSR",
  img: "zgk.png",
  rate: 0.2
}, {
  id: 31,
  name: "九星種",
  rarity: "SSR",
  img: "kys.PNG",
  rate: 0.2
}];
var TOTAL = CHARS.length;

// レアリティごとの攻撃力の範囲 [最小, 最大]（引くたびに、この範囲でランダムに決まる）
var ATK_RANGE = {
  N: [1, 2],
  R: [1, 3],
  SR: [2, 4],
  SSR: [4, 6]
};

// ルール説明（色つき文字＋囲い。1つずつ順番に出てくる）
var RULE_ITEMS = [{
  color: "#60a5fa",
  bg: "#0f1d3a",
  tint: "#dbeafe",
  head: "① 目的",
  body: "ガチャで出たキャラの「攻撃力」を足していこう！ 合計スコアで勝負！"
}, {
  color: "#f472b6",
  bg: "#3b0f2a",
  tint: "#fce7f3",
  head: "② 10連ガチャを" + MULTI_MAX + "回！",
  body: "10連を" + MULTI_MAX + "回引き終えたら、その時点でゲーム終了だよ！"
}, {
  color: "#4ade80",
  bg: "#0b2e1a",
  tint: "#dcfce7",
  head: "③ シングルもOK！",
  body: "シングルは何回でも引けるよ。スコアは増えるけど、時間は減っちゃう！"
}, {
  color: "#f87171",
  bg: "#3b1010",
  tint: "#fee2e2",
  head: "④ 制限時間は" + TIME_LIMIT + "秒",
  body: "時間切れで終了！ 引いている途中のガチャは最後まで加算されるよ！"
}, {
  color: "#fbbf24",
  bg: "#3a2508",
  tint: "#fef3c7",
  head: "⑤ 攻撃力はレア度で決まる",
  rarityRow: true
}];
function main(param) {
  // ニコ生ゲームのランキングモードでは、g.game.vars.gameState.score の値がスコアとして扱われる
  try {
    if (!g.game.vars) g.game.vars = {};
    g.game.vars.gameState = {
      score: 0
    };
  } catch (e) {}

  // 放送者が設定した制限時間があれば、それに合わせる
  // （ルール説明とカウントダウンで約10秒かかるので、そのぶん引いておく）
  try {
    var sp = param && param.sessionParameter;
    if (sp && typeof sp.totalTimeLimit === "number" && sp.totalTimeLimit > 0) {
      TIME_LIMIT = Math.max(10, Math.floor(sp.totalTimeLimit) - 10);
      // ルール説明の「制限時間」表示も合わせる
      RULE_ITEMS[3].head = "④ 制限時間は" + TIME_LIMIT + "秒";
    }
  } catch (e) {}
  var scene = new g.Scene({
    game: g.game,
    assetPaths: ["/image/*", "/audio/*"]
  });
  scene.onLoad.add(function () {
    try {
      startGame(scene);
    } catch (e) {
      console.log("ERR: " + (e && e.message));
      console.log(e && e.stack);
      throw e;
    }
  });
  g.game.pushScene(scene);
}
module.exports = main;
function startGame(scene) {
  var CENTER = g.TextAlign.Center;

  // ---------- 状態・セーブ ----------
  // ニコニコのユーザーID（g.game.selfId）でセーブを分ける。IDが取れないときは従来どおり "user_001"
  function getUserId() {
    var id = null;
    try {
      id = g.game.selfId;
    } catch (e) {}
    if (id === undefined || id === null || id === "") return "user_001";
    return String(id);
  }
  var userId = getUserId();
  var SAVE_KEY = "nicogacha_free10_" + userId;
  var collected = {}; // 図鑑（次回に持ち越す）。スコアには一切関係しない（初獲得ボーナスなし）

  // ---- 今回のプレイ ----
  var phase = "rules"; // rules → countdown → playing → (closing) → over → final
  var timeLeft = TIME_LIMIT;
  var timeUp = false;
  var ending = false;
  var roundScore = 0;
  var roundSingle = 0;
  var roundMulti = 0;
  var roundRarity = {
    N: 0,
    R: 0,
    SR: 0,
    SSR: 0
  };
  function getStorage() {
    try {
      return typeof localStorage !== "undefined" ? localStorage : null;
    } catch (e) {
      return null;
    }
  }
  function save() {
    var s = getStorage();
    if (!s) return;
    try {
      s.setItem(SAVE_KEY, JSON.stringify({
        collected: collected
      }));
    } catch (e) {}
  }
  function load() {
    var s = getStorage();
    if (!s) return;
    try {
      var raw = s.getItem(SAVE_KEY);
      if (!raw) return;
      var d = JSON.parse(raw);
      collected = d.collected && typeof d.collected === "object" ? d.collected : {};
    } catch (e) {}
  }
  // 起動直後はIDがまだ取れないことがあるので、あとからIDが変わったら、そのIDのセーブを読み直す
  function syncUser() {
    var id = getUserId();
    if (id === userId) return;
    userId = id;
    SAVE_KEY = "nicogacha_free10_" + userId;
    collected = {};
    load();
    refreshStrip();
  }
  function collectedCount() {
    return Object.keys(collected).length;
  }

  // ---------- 素材ヘルパー ----------
  function getImage(file) {
    var a = null;
    try {
      a = scene.asset.getImageByPath("/image/" + file);
    } catch (e) {}
    if (!a) {
      try {
        a = scene.asset.getImageById(file);
      } catch (e2) {}
    }
    if (!a) {
      try {
        a = scene.asset.getImageById(file.replace(/\.[^.]+$/, ""));
      } catch (e3) {}
    }
    return a;
  }
  function getAudio(name) {
    var a = null;
    try {
      a = scene.asset.getAudioByPath("/audio/" + name);
    } catch (e) {}
    if (!a) {
      try {
        a = scene.asset.getAudioById(name);
      } catch (e2) {}
    }
    return a;
  }
  function playSE(name) {
    try {
      var a = getAudio(name);
      if (a) a.play();
    } catch (e) {}
  }
  function stopSE(name) {
    try {
      var a = getAudio(name);
      if (a) a.stop();
    } catch (e) {}
  }

  // ---------- BGM ----------
  // ホーム（最初の画面）= sasa
  // ガチャの演出中〜結果画面 = tui（結果画面で「ホーム」「もう一度引く」を押してホームに戻るまで続く）
  // 図鑑は、開いても閉じても曲を変えない（いま流れている曲がそのまま続く）
  // どちらも、画面が切り替わらない限り、ずっとループする
  var BGM_HOME_ID = "sasa";
  var BGM_HOME_VOL = 0.7; // ホーム・図鑑の音量（原曲を100とすると70）
  var BGM_GACHA_ID = "tui";
  var BGM_GACHA_VOL = 0.45; // ガチャ中の音量（原曲を100とすると45）
  var bgmAssets = {
    home: getAudio(BGM_HOME_ID),
    gacha: getAudio(BGM_GACHA_ID)
  };
  var bgmVols = {
    home: BGM_HOME_VOL,
    gacha: BGM_GACHA_VOL
  };
  var bgmMode = "home";
  var bgmPlayer = null;
  function bgmIsPlaying() {
    var a = bgmAssets[bgmMode];
    if (!a) return false;
    var playing = false;
    try {
      if (typeof a.isPlaying === "function") playing = !!a.isPlaying();
    } catch (e) {}
    return playing || !!bgmPlayer;
  }
  var bgmLastStart = 0;
  // いまのモードの曲を、頭からすぐ鳴らす。曲が最後まで流れて止まったら、すぐ頭から鳴らし直す（ループ）
  function playBgmNow() {
    var a = bgmAssets[bgmMode];
    if (!a) return;
    try {
      bgmLastStart = Date.now();
      var p = a.play();
      bgmPlayer = p || null;
      if (p) {
        if (p.changeVolume) p.changeVolume(bgmVols[bgmMode]);
        if (p.onStop) {
          p.onStop.add(function () {
            if (bgmPlayer !== p) return; // 曲の切り替え・鳴らし直しで止めた場合は何もしない
            bgmPlayer = null;
            // 鳴らした直後に止まる（鳴らせない）ときは、すぐ繰り返さない。下の定期チェックに任せる
            if (Date.now() - bgmLastStart < 500) return;
            playBgmNow();
          });
        }
      }
    } catch (e) {}
  }
  function startBgm() {
    if (!bgmAssets[bgmMode] || bgmIsPlaying()) return; // 鳴っている間は重ねない・切らない
    playBgmNow();
  }
  // 曲を切り替える。すでに同じグループの曲が鳴っているときは、何もせずそのまま流し続ける
  function setBgmMode(mode) {
    if (bgmMode === mode) {
      startBgm();
      return;
    }
    var old = bgmAssets[bgmMode];
    bgmPlayer = null;
    try {
      if (old) old.stop();
    } catch (e) {}
    bgmMode = mode;
    playBgmNow();
  }
  // 念のための定期チェック: 止まっていたら頭から流し直す（重ならない）
  scene.setInterval(function () {
    if (!bgmIsPlaying()) startBgm();
  }, 300);
  // 起動したらすぐ曲を鳴らす（上で startBgm を呼んでいる）。
  // ただしブラウザによっては、画面を一度も触っていない間は音を出させてくれない（ゲーム側では変えられない決まり）。
  // 最初から音が出せる環境では何もしない。出せない環境だけ、最初のタップのときに曲を頭から鳴らし直す。
  var bgmUnlocked = false;
  var bgmAutoplayOk = false; // ブラウザが最初から音を出せる状態か
  (function probeAutoplay() {
    try {
      var AC = typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext);
      if (!AC) return;
      var probe = new AC();
      scene.setTimeout(function () {
        try {
          bgmAutoplayOk = probe.state === "running";
          if (probe.close) probe.close();
        } catch (e) {}
      }, 1000);
    } catch (e) {}
  })();
  scene.onPointUpCapture.add(function () {
    if (bgmUnlocked) return;
    bgmUnlocked = true;
    if (bgmAutoplayOk) return; // 最初から鳴っているので、鳴らし直さない
    var a = bgmAssets[bgmMode];
    bgmPlayer = null;
    try {
      if (a) a.stop();
    } catch (e) {}
    playBgmNow();
  });

  // ---------- 描画ヘルパー（シンプル） ----------
  var fonts = {};
  function font(size) {
    if (!fonts[size]) {
      fonts[size] = new g.DynamicFont({
        game: g.game,
        fontFamily: "sans-serif",
        size: size
      });
    }
    return fonts[size];
  }
  function label(parent, text, x, y, size, color, width) {
    var opt = {
      scene: scene,
      text: text,
      font: font(size),
      fontSize: size,
      textColor: color || "#ffffff",
      x: x,
      y: y
    };
    if (width) {
      opt.width = width;
      opt.widthAutoAdjust = false;
      opt.textAlign = CENTER;
    }
    var l = new g.Label(opt);
    parent.append(l);
    return l;
  }
  function rect(parent, x, y, w, h, color, opacity, touchable) {
    var r = new g.FilledRect({
      scene: scene,
      x: x,
      y: y,
      width: w,
      height: h,
      cssColor: color,
      touchable: !!touchable
    });
    if (opacity !== undefined) r.opacity = opacity;
    parent.append(r);
    return r;
  }
  function layer() {
    var e = new g.E({
      scene: scene
    });
    scene.append(e);
    return e;
  }
  function clear(container) {
    while (container.children && container.children.length > 0) {
      container.children[0].destroy();
    }
  }
  function spriteFit(parent, file, x, y, w, h) {
    var img = getImage(file);
    if (!img) {
      rect(parent, x, y, w, h, "#334155");
      label(parent, "no img", x, y + h / 2 - 10, 16, "#fbbf24", w);
      return null;
    }
    var r = Math.min(w / img.width, h / img.height);
    var dw = img.width * r;
    var dh = img.height * r;
    var s = new g.Sprite({
      scene: scene,
      src: img,
      x: x + (w - dw) / 2,
      y: y + (h - dh) / 2,
      width: dw,
      height: dh,
      srcWidth: img.width,
      srcHeight: img.height
    });
    parent.append(s);
    return s;
  }
  // シンプルなボタン：枠＋本体＋文字
  function button(parent, x, y, w, h, text, color, border, size, fn) {
    rect(parent, x - 3, y - 3, w + 6, h + 6, border);
    var b = rect(parent, x, y, w, h, color, undefined, true);
    label(parent, text, x, y + (h - size) / 2 - 2, size, "#ffffff", w);
    b.onPointDown.add(function () {
      fn();
    });
    return b;
  }
  // 画像ボタン：枠(x,y,w,h)に収まるよう縮尺し、タップ範囲は表示画像と同じ。
  // 画像が見つからないときは普通のボタンで代用する。
  function imageButton(parent, file, x, y, w, h, fallbackText, fallbackColor, fallbackBorder, fallbackSize, fn) {
    var img = getImage(file);
    if (!img) {
      return button(parent, x, y, w, h, fallbackText, fallbackColor, fallbackBorder, fallbackSize, fn);
    }
    var r = Math.min(w / img.width, h / img.height);
    var dw = img.width * r;
    var dh = img.height * r;
    var s = new g.Sprite({
      scene: scene,
      src: img,
      x: x + (w - dw) / 2,
      y: y + (h - dh) / 2,
      width: dw,
      height: dh,
      srcWidth: img.width,
      srcHeight: img.height,
      touchable: true
    });
    parent.append(s);
    s.onPointDown.add(function () {
      fn();
    });
    return s;
  }

  // ---------- レイヤー ----------
  var bgLayer = layer();
  var view = layer();
  var strip = layer();
  var top = layer();
  var zl = layer();
  var zm = layer();

  // 背景（金色の枠付き）
  rect(bgLayer, 0, 0, W, H, "#0f172a");
  rect(bgLayer, 96, 126, 1088, 538, FRAME);
  rect(bgLayer, 100, 130, 1080, 530, "#1e1b4b");

  // ---------- 上部 ----------
  label(top, TITLE, 0, 10, 42, "#fcd34d", W);

  // 上部のステータス（ルール説明・結果発表のときは隠す）
  var hud = new g.E({
    scene: scene
  });
  top.append(hud);
  var statVals = {};
  function statPanel(x, key, title, color) {
    rect(hud, x, 64, 220, 58, FRAME);
    rect(hud, x + 3, 67, 214, 52, "#1e1b4b");
    label(hud, title, x, 70, 14, "#ffffff", 220);
    statVals[key] = label(hud, "", x, 90, 24, color, 220);
  }
  statPanel(290, "time", "残り時間", "#4ade80");
  statPanel(530, "score", "合計攻撃力", "#fbbf24");
  statPanel(770, "multi", "10連 のこり", "#f472b6");
  var lastSec = -1;
  function timeColor(sec) {
    return sec <= 10 ? "#f87171" : sec <= 30 ? "#fbbf24" : "#4ade80";
  }
  function updateTimeLabel(force) {
    var sec = Math.ceil(timeLeft);
    if (sec < 0) sec = 0;
    if (!force && sec === lastSec) return;
    lastSec = sec;
    statVals.time.text = sec + "秒";
    statVals.time.textColor = timeColor(sec);
    statVals.time.invalidate();
  }
  function updateStats() {
    statVals.score.text = String(roundScore);
    statVals.score.invalidate();
    statVals.multi.text = Math.max(0, MULTI_MAX - roundMulti) + "回";
    statVals.multi.invalidate();
    updateTimeLabel(true);
  }
  // 攻撃力を足す（初獲得ボーナスなし。スコア＝引いたカードの攻撃力の合計だけ）
  function addScore(n) {
    roundScore += n;
    try {
      g.game.vars.gameState.score = roundScore; // ニコ生ランキング用のスコア（ブログでは使われないが無害）
    } catch (e) {}
  }
  // 図鑑ボタン（zykan.PNG）
  imageButton(top, "zykan.PNG", 1050, 8, 210, 100, "図鑑", "#9333ea", "#e9d5ff", 26, function () {
    openZukan();
  });

  // タップ音
  scene.onPointDownCapture.add(function () {
    playSE("32");
  });

  // ---------- 抽選 ----------
  // 引いたカードのコピーを作り、攻撃力を決める（同じキャラでも、引くたびに攻撃力は変わる）
  function makeDraw(ch) {
    var r = ATK_RANGE[ch.rarity] || [1, 1];
    var atk = r[0] + Math.floor(g.game.localRandom.generate() * (r[1] - r[0] + 1));
    return {
      id: ch.id,
      name: ch.name,
      rarity: ch.rarity,
      img: ch.img,
      rate: ch.rate,
      atk: atk
    };
  }
  function drawOne() {
    var total = 0;
    var i;
    for (i = 0; i < CHARS.length; i++) total += CHARS[i].rate;
    var rand = g.game.localRandom.generate() * total; // 各プレイヤーごとの乱数（共有乱数だと全員が同じ結果になる）
    for (i = 0; i < CHARS.length; i++) {
      if (rand < CHARS[i].rate) return makeDraw(CHARS[i]);
      rand -= CHARS[i].rate;
    }
    return makeDraw(CHARS[0]);
  }

  // ---------- アニメ管理 ----------
  var frame = 0;
  var fades = [];
  var bursts = [];
  var animBall = null;
  var BALL_X = W / 2 - 100;
  var BALL_Y = 240;
  var busy = false;

  // ---------- 準備画面 ----------
  function showReady() {
    busy = false;
    setBgmMode("home");
    strip.show();
    hud.show();
    animBall = null;
    clear(view);
    rect(view, W / 2 - 60, 160, 120, 120, "#7c3aed");
    label(view, "?", W / 2 - 60, 180, 70, "#ffffff", 120);
    label(view, "ガチャを選んで回そう！", 0, 296, 36, "#ffffff", W);
    // シングル（1.PNG）
    imageButton(view, "1.PNG", 140, 350, 480, 184, "シングルを引く", "#2563eb", "#bfdbfe", 34, function () {
      startGacha(1);
    });
    // 10連（10.PNG）
    imageButton(view, "10.PNG", 660, 350, 480, 184, "無料10連を引く", "#db2777", "#fbcfe8", 34, function () {
      startGacha(10);
    });
    label(view, "10連は あと " + Math.max(0, MULTI_MAX - roundMulti) + " 回！ 引き切るとゲーム終了", 0, 548, 26, "#f472b6", W);
    label(view, "シングルは何回でもOK（そのぶん時間は減るよ）", 0, 586, 22, "#4ade80", W);
  }

  // ---------- 演出 ----------
  function startGacha(count) {
    if (busy || phase !== "playing") return;
    busy = true;
    if (count === 1) roundSingle++;else roundMulti++;
    updateStats();
    setBgmMode("gacha"); // ガチャ中はtui
    strip.hide(); // ガチャ中は下の小さなプレビューを隠す（結果のネタバレ防止）
    var results = [];
    var hasSSR = false;
    for (var i = 0; i < count; i++) {
      var c = drawOne();
      results.push(c);
      if (c.rarity === "SSR") hasSSR = true;
    }
    clear(view);
    animBall = new g.E({
      scene: scene,
      x: BALL_X,
      y: BALL_Y,
      width: 200,
      height: 200
    });
    view.append(animBall);
    rect(animBall, 0, 0, 200, 200, "#7c3aed");
    label(animBall, "?", 0, 40, 110, "#ffffff", 200);
    label(view, "ガチャ召喚中...！", 0, 520, 32, "#fcd34d", W);
    playSE("kasakasa");
    if (hasSSR) {
      scene.setTimeout(function () {
        if (animBall && !animBall.destroyed()) {
          rect(view, W / 2 + 70, 170, 70, 70, "#fbbf24");
          label(view, "！", W / 2 + 70, 178, 56, "#0f172a", 70);
        }
      }, 750);
    }
    scene.setTimeout(function () {
      stopSE("kasakasa");
      playSE("gfgg");
      animBall = null;
      bursts.push({
        e: rect(view, 0, 0, W, H, "#ffffff", 0.95),
        f: 0
      });
      scene.setTimeout(function () {
        showResults(results, count);
      }, 400);
    }, 1500);
  }

  // ---------- 結果 ----------
  var pending = [];
  var revealTimer = null;
  var revealIndex = 0;
  var revealCount = 1;
  var grid = null;
  var skipBtnParts = null;
  var resultAtkTotal = 0;
  var totalLabel = null;
  function showResults(results, count) {
    updateStats();
    clear(view);
    label(view, count === 1 ? "★ シングルガチャ結果 ★" : "★ 10連ガチャ結果 ★", 0, 140, 30, "#fcd34d", W);
    resultAtkTotal = 0;
    totalLabel = label(view, "今回の攻撃力: 0", 860, 144, 26, "#fde68a", 300);
    grid = new g.E({
      scene: scene
    });
    view.append(grid);
    pending = results.slice();
    revealIndex = 0;
    revealCount = count;
    skipBtnParts = new g.E({
      scene: scene
    });
    view.append(skipBtnParts);
    button(skipBtnParts, 540, 596, 200, 50, "スキップ", "#475569", "#e2e8f0", 24, skipReveal);
    revealNext();
  }
  function revealNext() {
    if (pending.length === 0) {
      finishReveal();
      return;
    }
    var ch = pending.shift();
    addCard(ch, true);
    revealTimer = scene.setTimeout(revealNext, ch.rarity === "SSR" ? 900 : 450);
  }
  function addCard(ch, fx) {
    var idx = revealIndex++;
    var x;
    var y;
    var w;
    var h;
    if (revealCount === 1) {
      w = 240;
      h = 330;
      x = W / 2 - 120;
      y = 190;
    } else {
      w = 200;
      h = 200;
      x = 100 + idx % 5 * 220;
      y = 175 + Math.floor(idx / 5) * 210;
    }
    var card = buildCard(ch, x, y, w, h);
    grid.append(card);
    card.opacity = 0;
    card.modified();
    fades.push({
      e: card,
      f: 0
    });
    resultAtkTotal += ch.atk || 0;
    addScore(ch.atk || 0); // 合計スコアに足す（初獲得ボーナスはなし）
    roundRarity[ch.rarity] = (roundRarity[ch.rarity] || 0) + 1;
    if (totalLabel && !totalLabel.destroyed()) {
      totalLabel.text = "今回の攻撃力: " + resultAtkTotal;
      totalLabel.invalidate();
    }
    collected[ch.id] = true;
    save();
    refreshStrip();
    updateStats();
    if (fx) {
      playSE("sdsd");
      if (ch.rarity === "SSR") {
        playSE("ky");
        bursts.push({
          e: rect(view, 0, 0, W, H, "#fde047", 0.45),
          f: 0,
          len: 0.3
        });
      }
    }
  }
  function buildCard(ch, x, y, w, h) {
    var col = RARITY_COLOR[ch.rarity];
    var c = new g.E({
      scene: scene,
      x: x,
      y: y,
      width: w,
      height: h,
      touchable: true
    });
    rect(c, 0, 0, w, h, col);
    rect(c, 4, 4, w - 8, h - 8, RARITY_BG[ch.rarity]);
    var imgSize = Math.min(w - 30, h - 80);
    var ix = (w - imgSize) / 2;
    rect(c, ix, 30, imgSize, imgSize, "#000000", 0.5);
    spriteFit(c, ch.img, ix + 2, 32, imgSize - 4, imgSize - 4);
    if (ch.atk !== undefined) {
      rect(c, ix, 30 + imgSize - 22, imgSize, 22, "#000000", 0.65);
      label(c, "攻撃力 " + ch.atk, ix, 30 + imgSize - 20, 17, "#fde68a", imgSize);
    }
    rect(c, w - 56, 6, 50, 22, col);
    label(c, ch.rarity, w - 56, 6, 18, ch.rarity === "SSR" ? "#0f172a" : "#ffffff", 50);
    label(c, "#" + ch.id, 10, 8, 16, "#ffffff");
    var ns;
    if (revealCount === 1) ns = ch.name.length > 8 ? 20 : 26;else ns = ch.name.length > 8 ? 14 : 17;
    label(c, ch.name, 6, h - 36 + (30 - ns) / 2, ns, NAME_COLOR[ch.rarity], w - 12);
    // 結果のカードをタップすると拡大表示（図鑑と同じ画面）
    c.onPointDown.add(function () {
      openZoom(ch);
    });
    return c;
  }
  function finishReveal() {
    if (revealTimer) {
      scene.clearTimeout(revealTimer);
      revealTimer = null;
    }
    if (skipBtnParts && !skipBtnParts.destroyed()) skipBtnParts.destroy();
    skipBtnParts = null;
    strip.show(); // 全部表示し終えたので、下のプレビューを戻す
    // ゲーム終了の条件（時間切れ or 10連を引き切った）なら、「結果発表へ」だけを出す
    if (timeUp || roundMulti >= MULTI_MAX) {
      if (phase === "playing" || phase === "closing") phase = "over";
      updateStats();
      label(view, timeUp ? "TIME UP！" : "10連 " + MULTI_MAX + "回 クリア！", 0, 540, 30, "#fde68a", W);
      button(view, W / 2 - 170, 596, 340, 56, "結果発表へ", "#d97706", "#fde68a", 30, showFinal);
      busy = false;
      return;
    }
    // 左: ホーム（起動したときの一番最初の画面へ） / 右: もう一度引く
    // 2つ並べた全体が画面の横中心にくるように置き、間は同じ空白(BTN_GAP)にする
    var BTN_W = 240;
    var BTN_H = 50;
    var BTN_GAP = 40; // ボタンの間の空白
    var homeImg = getImage("rcb.PNG");
    var homeW = BTN_W;
    if (homeImg) homeW = Math.round(homeImg.width * Math.min(BTN_W / homeImg.width, BTN_H / homeImg.height));
    var pairX = Math.round(W / 2 - (homeW + BTN_GAP + BTN_W) / 2);
    imageButton(view, "rcb.PNG", pairX, 596, homeW, BTN_H, "ホーム", "#0f766e", "#99f6e4", 26, showReady);
    button(view, pairX + homeW + BTN_GAP, 596, BTN_W, BTN_H, "もう一度引く", "#475569", "#e2e8f0", 26, showReady);
    busy = false;
  }
  function skipReveal() {
    if (revealTimer) {
      scene.clearTimeout(revealTimer);
      revealTimer = null;
    }
    while (pending.length > 0) {
      addCard(pending.shift(), false);
    }
    finishReveal();
  }

  // ---------- ミニ図鑑（画面下） ----------
  function refreshStrip() {
    clear(strip);
    for (var i = 0; i < CHARS.length; i++) {
      (function (ch, i) {
        var x = 40 + i * 39;
        var y = 676;
        var owned = !!collected[ch.id];
        rect(strip, x - 1, y - 1, 38, 38, owned ? "#c4b5fd" : "#6366f1");
        var box = rect(strip, x + 1, y + 1, 34, 34, owned ? "#312e81" : "#1e1b4b", undefined, owned);
        if (owned) {
          spriteFit(strip, ch.img, x + 2, y + 2, 32, 32);
          box.onPointDown.add(function () {
            openZoom(ch);
          });
        } else {
          label(strip, "？", x, y + 6, 22, "#ffffff", 36);
        }
      })(CHARS[i], i);
    }
  }

  // ---------- 図鑑画面 ----------
  function openZukan() {
    clear(zl);
    rect(zl, 0, 0, W, H, "#020617", 0.97, true);
    label(zl, "図鑑  " + collectedCount() + " / " + TOTAL, 0, 24, 36, "#fcd34d", W);
    button(zl, 1060, 20, 190, 52, "閉じる", "#475569", "#e2e8f0", 26, function () {
      clear(zl);
    });
    for (var i = 0; i < CHARS.length; i++) {
      (function (ch, i) {
        var col = i % 11;
        var row = Math.floor(i / 11);
        var x = 40 + col * 110;
        var y = 110 + row * 195;
        var owned = !!collected[ch.id];
        var cell = rect(zl, x, y, 100, 165, owned ? RARITY_COLOR[ch.rarity] : "#6366f1", undefined, owned);
        rect(zl, x + 3, y + 3, 94, 159, owned ? RARITY_BG[ch.rarity] : "#1e1b4b");
        if (owned) {
          rect(zl, x + 6, y + 6, 88, 88, "#000000", 0.5);
          spriteFit(zl, ch.img, x + 8, y + 8, 84, 84);
          var ns = ch.name.length > 7 ? 11 : 14;
          label(zl, ch.name, x - 5, y + 108, ns, NAME_COLOR[ch.rarity], 110);
          label(zl, ch.rarity, x, y + 136, 16, RARITY_TEXT[ch.rarity], 100);
          cell.onPointDown.add(function () {
            openZoom(ch);
          });
        } else {
          label(zl, "？", x, y + 28, 52, "#ffffff", 100);
          label(zl, "？？？", x, y + 108, 18, "#ffffff", 100);
        }
      })(CHARS[i], i);
    }
  }

  // ---------- 拡大画面 ----------
  function openZoom(ch) {
    clear(zm);
    var bgz = rect(zm, 0, 0, W, H, "#000000", 0.92, true);
    bgz.onPointDown.add(function () {
      clear(zm);
    });
    var col = RARITY_COLOR[ch.rarity];
    rect(zm, W / 2 - 40, 30, 80, 34, col);
    label(zm, ch.rarity, W / 2 - 40, 34, 24, ch.rarity === "SSR" ? "#0f172a" : "#ffffff", 80);
    rect(zm, (W - 540) / 2 - 6, 74, 552, 552, col);
    rect(zm, (W - 540) / 2, 80, 540, 540, "#0b1120");
    spriteFit(zm, ch.img, (W - 520) / 2, 90, 520, 520);
    label(zm, ch.name, 0, 626, 34, "#ffffff", W);
    var rg = ATK_RANGE[ch.rarity] || [1, 1];
    var atkText = ch.atk !== undefined ? "攻撃力 " + ch.atk : "攻撃力 " + rg[0] + "〜" + rg[1];
    label(zm, atkText, 0, 662, 26, "#fde68a", W);
    label(zm, "タップで閉じる", 0, 694, 18, "#ffffff", W);
  }

  // ---------- ルール説明（色文字＋囲い。1つずつ順番に出る） ----------
  var ruleTimers = [];
  var ruleBoxes = [];
  var rulesShown = 0;
  var startGroup = null;
  function clearRuleTimers() {
    for (var i = 0; i < ruleTimers.length; i++) {
      try {
        scene.clearTimeout(ruleTimers[i]);
      } catch (e) {}
    }
    ruleTimers = [];
  }
  function buildRuleBox(i) {
    var item = RULE_ITEMS[i];
    var e = new g.E({
      scene: scene,
      x: 100,
      y: 112 + i * 96,
      width: 1080,
      height: 88
    });
    rect(e, 0, 0, 1080, 88, item.color); // 囲い
    rect(e, 4, 4, 1072, 80, item.bg);
    rect(e, 4, 4, 14, 80, item.color); // 左の色帯
    label(e, item.head, 36, 8, 28, item.color);
    if (item.rarityRow) {
      label(e, "※初めてのキャラでもボーナスなし！", 600, 12, 22, "#fca5a5");
      var keys = ["N", "R", "SR", "SSR"];
      for (var k = 0; k < keys.length; k++) {
        var rg = ATK_RANGE[keys[k]];
        label(e, keys[k] + "  " + rg[0] + "〜" + rg[1], 36 + k * 260, 44, 32, RARITY_TEXT[keys[k]]);
      }
    } else {
      label(e, item.body, 36, 46, 24, item.tint);
    }
    return e;
  }
  function revealRule(i, quiet) {
    if (phase !== "rules" || ruleBoxes[i]) return;
    var box = buildRuleBox(i);
    view.append(box);
    box.opacity = 0;
    box.modified();
    fades.push({
      e: box,
      f: 0
    });
    ruleBoxes[i] = box;
    if (!quiet) playSE("sdsd");
    rulesShown++;
    if (rulesShown >= RULE_ITEMS.length) showStartButton();
  }
  function revealAllRules() {
    clearRuleTimers();
    for (var i = 0; i < RULE_ITEMS.length; i++) revealRule(i, true);
  }
  function showStartButton() {
    if (startGroup) return;
    startGroup = new g.E({
      scene: scene
    });
    view.append(startGroup);
    button(startGroup, W / 2 - 170, 600, 340, 70, "スタート！", "#16a34a", "#bbf7d0", 38, function () {
      startCountdown();
    });
  }
  function showRules() {
    phase = "rules";
    setBgmMode("home");
    strip.hide();
    hud.hide();
    clearRuleTimers();
    clear(view);
    ruleBoxes = [];
    rulesShown = 0;
    startGroup = null;
    var back = rect(view, 0, 0, W, H, "#0f172a", undefined, true);
    back.onPointDown.add(function () {
      revealAllRules(); // どこかをタップすると、残りのルールを一気に表示
    });
    label(view, "ルール説明（タップで全部表示）", 0, 58, 28, "#fde68a", W);
    for (var i = 0; i < RULE_ITEMS.length; i++) {
      (function (i) {
        ruleTimers.push(scene.setTimeout(function () {
          revealRule(i, false);
        }, 600 + i * 1200));
      })(i);
    }
  }

  // ---------- カウントダウン → ゲーム開始 ----------
  function startCountdown() {
    if (phase !== "rules") return;
    phase = "countdown";
    clearRuleTimers();
    startGroup = null;
    clear(view);
    rect(view, 0, 0, W, H, "#0f172a");
    label(view, "ゲームスタートまで…", 0, 170, 34, "#fde68a", W);
    var numLabel = label(view, "3", 0, 250, 220, "#fbbf24", W);
    var n = 3;
    function tick() {
      if (n >= 1) {
        numLabel.text = String(n);
        numLabel.invalidate();
        playSE("sdsd");
        n--;
        scene.setTimeout(tick, 800);
      } else {
        numLabel.text = "GO!";
        numLabel.textColor = "#4ade80";
        numLabel.invalidate();
        playSE("ky");
        scene.setTimeout(beginPlay, 700);
      }
    }
    tick();
  }
  function beginPlay() {
    phase = "playing";
    timeLeft = TIME_LIMIT;
    timeUp = false;
    ending = false;
    roundScore = 0;
    roundSingle = 0;
    roundMulti = 0;
    roundRarity = {
      N: 0,
      R: 0,
      SR: 0,
      SSR: 0
    };
    try {
      g.game.vars.gameState.score = 0;
    } catch (e) {}
    lastSec = -1;
    hud.show();
    updateStats();
    showReady();
  }

  // ---------- ゲーム終了 ----------
  // 時間切れのとき（引いている最中でなければ）すぐ呼ばれる。「TIME UP！」を見せてから結果発表へ
  function endGame() {
    if (ending) return;
    ending = true;
    phase = "over";
    busy = true; // これ以上引けないようにする
    clear(zl); // 図鑑・拡大画面が開いていたら閉じる
    clear(zm);
    strip.hide();
    clear(view);
    rect(view, 0, 0, W, H, "#0f172a");
    label(view, "TIME UP！", 0, 240, 130, "#f87171", W);
    label(view, "結果発表へ…", 0, 420, 34, "#fde68a", W);
    playSE("gfgg");
    scene.setTimeout(showFinal, 1800);
  }

  // ---------- 結果発表 ----------
  var finalAnim = null;
  function showFinal() {
    if (phase === "final") return;
    phase = "final";
    ending = true;
    busy = true;
    clear(zl);
    clear(zm);
    setBgmMode("home");
    hud.hide();
    strip.show();
    clear(view);
    rect(view, 0, 0, W, H, "#0f172a");
    rect(view, 236, 106, 808, 548, FRAME);
    rect(view, 240, 110, 800, 540, "#1e1b4b");
    label(view, "★ 結果発表 ★", 0, 126, 46, "#fcd34d", W);
    label(view, "あなたの合計攻撃力", 0, 206, 32, "#ffffff", W);
    var big = label(view, "0", 0, 248, 150, "#fde68a", W);
    finalAnim = {
      cur: 0,
      target: roundScore,
      label: big
    };
    var pulls = roundMulti * 10 + roundSingle;
    label(view, "10連 " + roundMulti + "回   シングル " + roundSingle + "回   （合計 " + pulls + "体）", 0, 428, 28, "#93c5fd", W);
    var keys = ["N", "R", "SR", "SSR"];
    for (var k = 0; k < keys.length; k++) {
      label(view, keys[k] + " × " + roundRarity[keys[k]], 330 + k * 160, 478, 32, RARITY_TEXT[keys[k]], 150);
    }
    label(view, "友だちとスコアを比べてみよう！", 0, 540, 26, "#fbcfe8", W);
    if (ALLOW_REPLAY) {
      button(view, W / 2 - 150, 588, 300, 50, "もう一度あそぶ", "#475569", "#e2e8f0", 26, function () {
        ending = false;
        finalAnim = null;
        timeUp = false;
        timeLeft = TIME_LIMIT;
        roundScore = 0;
        roundSingle = 0;
        roundMulti = 0;
        roundRarity = {
          N: 0,
          R: 0,
          SR: 0,
          SSR: 0
        };
        try {
          g.game.vars.gameState.score = 0;
        } catch (e) {}
        showRules();
      });
    }
  }

  // ---------- 毎フレーム処理 ----------
  scene.onUpdate.add(function () {
    frame++;
    if (frame === 30 || frame === 90) syncUser();
    var fps = g.game.fps;
    var i;

    // 制限時間のカウントダウン（プレイ中だけ減る）
    if (phase === "playing") {
      timeLeft -= 1 / fps;
      if (timeLeft <= 0) {
        timeLeft = 0;
        timeUp = true;
        updateTimeLabel(true);
        if (busy) {
          phase = "closing"; // 引いている途中のガチャは最後まで数える
        } else {
          endGame();
        }
      } else {
        updateTimeLabel(false);
      }
    }

    // スタートボタンの点滅
    if (startGroup && !startGroup.destroyed() && phase === "rules") {
      startGroup.opacity = 0.7 + 0.3 * Math.abs(Math.sin(frame / (fps * 0.35)));
      startGroup.modified();
    }

    // 結果発表のスコアのカウントアップ
    if (finalAnim) {
      if (finalAnim.label.destroyed()) {
        finalAnim = null;
      } else {
        finalAnim.cur = Math.min(finalAnim.target, finalAnim.cur + Math.max(1, Math.ceil(finalAnim.target / (fps * 1.5))));
        finalAnim.label.text = String(finalAnim.cur);
        finalAnim.label.invalidate();
        if (finalAnim.cur >= finalAnim.target) {
          finalAnim = null;
          playSE("ky");
        }
      }
    }
    if (animBall && !animBall.destroyed()) {
      animBall.x = BALL_X + (g.game.localRandom.generate() - 0.5) * 24;
      animBall.y = BALL_Y + (g.game.localRandom.generate() - 0.5) * 14;
      animBall.modified();
    }
    for (i = fades.length - 1; i >= 0; i--) {
      var p = fades[i];
      if (p.e.destroyed()) {
        fades.splice(i, 1);
        continue;
      }
      p.f++;
      var t = Math.min(1, p.f / (fps * 0.25));
      p.e.opacity = t;
      p.e.modified();
      if (t >= 1) fades.splice(i, 1);
    }
    for (i = bursts.length - 1; i >= 0; i--) {
      var b = bursts[i];
      if (b.e.destroyed()) {
        bursts.splice(i, 1);
        continue;
      }
      b.f++;
      var len = (b.len || 0.4) * fps;
      var k = 1 - b.f / len;
      if (k <= 0) {
        b.e.destroy();
        bursts.splice(i, 1);
      } else {
        b.e.opacity = 0.95 * k;
        b.e.modified();
      }
    }
  });

  // ---------- 起動 ----------
  load();
  refreshStrip();
  updateStats();
  showRules(); // 最初はルール説明から始める
  startBgm();
}
})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}