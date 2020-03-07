!(function(e) {
  function t(t) {
    for (
      var n, o, s = t[0], l = t[1], c = t[2], m = 0, u = [];
      m < s.length;
      m++
    )
      (o = s[m]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && u.push(r[o][0]),
        (r[o] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (d && d(t); u.length; ) u.shift()();
    return i.push.apply(i, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], n = !0, s = 1; s < a.length; s++) {
        var l = a[s];
        0 !== r[l] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    r = { 0: 0 },
    i = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function(e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (o.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "../dist/");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var d = l;
  i.push([146, 1]), a();
})({
  1: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_7qhl",
      sectionHeader: "_1hhb",
      index: "_2pL9",
      animationFadeInUp: "_1qJX",
      animationPaused: "_1Tgq",
      animationRunning: "_3XsC",
      maxWidthWithNormalPadding: "_3Frz",
      handleAspectRatio: "_3jVt",
      outbound: "MyKo",
      label: "_3hql",
      topNav: "_1-gO",
      active: "_3d4S",
      grid: "HB3X",
      featured: "sNmU",
      avatars: "_3iwy",
      music: "vRsQ",
      rockstarwallpaper: "t6St",
      gamewallpaper: "_185D",
      gamescreensaver: "_2oN9",
      img: "_1_ob",
      dropdownWrapper: "zKpz",
      header: "_18i6",
      title: "tABQ",
      list: "_2sdK",
      open: "_233W",
      item: "_2Hve",
      caret: "Xxn3",
      collection: "_3Ykp",
      rdr2: "_3icr",
      launcher: "Q7e8",
      companion: "_2CMa",
      sharkCards: "MOSu",
      goldBars: "TVX4",
      misc: "IJvi",
      featuredTop: "_2z6e",
      featuredDesc: "_2szJ",
      viewBtn: "_35e4"
    };
  },
  10: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "oUQz",
      sectionHeader: "_245q",
      gameInfo: "_3R3b",
      animationFadeInUp: "_3cfe",
      animationPaused: "_1Pgq",
      animationRunning: "_13ab",
      fob: "_3eTl",
      startAnimation: "_2H-S",
      game: "_2zsf",
      maxWidthWithNormalPadding: "_10_O",
      handleAspectRatio: "_3hXE",
      screenList: "_3sqq",
      outbound: "_1hmp",
      gamesIndex: "_1Qei",
      left: "_34ni",
      right: "_1s3b",
      videos: "_1klX",
      posts: "_2zZH",
      links: "_-W6",
      videoList: "uEAT",
      postList: "hVY_",
      specsList: "sHZi",
      rating: "_12CV"
    };
  },
  101: function(e, t, a) {
    e.exports = { circuit: "dsWx", jl: "_3Xun", robot_girl: "e6LZ" };
  },
  11: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_2gEF",
      sectionHeader: "_2HM5",
      animationFadeInUp: "_3gmH",
      animationPaused: "_2l4z",
      animationRunning: "_39BV",
      maxWidthWithNormalPadding: "_1qsc",
      handleAspectRatio: "zCzH",
      outbound: "_2D5g",
      scMenu: "_2LLW",
      opener: "_1ebF",
      loggedOut: "_1SuQ",
      icon: "_3q85",
      icon_profile: "_22CW",
      icon_messages: "_9MQf",
      icon_notifications: "_1Cw4",
      icon_friends: "_9NKL",
      icon_crews: "_1pqg",
      icon_logout: "_1YQR",
      glNav: "_2vCM",
      navOpen: "_3Pa4"
    };
  },
  12: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "qJ56",
      sectionHeader: "_1DKp",
      related: "_1_lU",
      animationFadeInUp: "_1bVo",
      animationPaused: "_1c89",
      animationRunning: "_2PcA",
      newswireBlock: "_1qYC",
      startAnimation: "_2gft",
      maxWidthWithNormalPadding: "_2dIC",
      handleAspectRatio: "mCh4",
      preview: "_3zxu",
      newswireBlocks: "_3zdX",
      noSpecialOrder: "_2ywg",
      contextHome: "hFgM",
      contextNewsIndex: "_3HvH",
      outbound: "_3RLP",
      newswireIndex: "_3fOs",
      info: "_2hbd",
      title: "_1oUd",
      posts: "_3Maq",
      moduleContainer: "_3L3d",
      moduleMainDescription01: "_2P3h",
      moduleImg: "_2oxs",
      module5050Details: "_2tJa",
      imageModule: "_3Nx2",
      imgDescArea: "_2TZg",
      btn: "_2hOR",
      module5050: "FF4Q",
      leftBgImg: "_1BFd",
      rightBgImg: "_2TO7",
      textArea5050: "_1dJq",
      tagsList: "_1tP6"
    };
  },
  14: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_3D-d",
      sectionHeader: "_2SJ9",
      animationFadeInUp: "dz-g",
      animationPaused: "_11Ls",
      animationRunning: "_2xv1",
      maxWidthWithNormalPadding: "o3e_",
      companyInfo: "HaEu",
      handleAspectRatio: "_2uuy",
      outbound: "_1Mrd",
      top: "_3H8J",
      content: "_3M-x",
      nav: "oWpT",
      us: "ccu9",
      br: "_31LJ",
      cz: "_21St",
      de: "_3lSR",
      es: "_2jIu",
      fr: "_2_kl",
      it: "-p6a",
      jp: "_1_6q",
      kr: "_3qQ8",
      mx: "_8OqE",
      nl: "_hn7",
      pl: "_3Lld",
      ru: "_2wUq",
      sa: "_2Kt_",
      tw: "_1g0Y",
      zh: "_3PCl",
      cookieSettingsButton: "V-nM",
      cookieSettingsModal: "_2xzP",
      open: "_3yRW",
      settings: "_18RU",
      setting: "_3GJK",
      optional: "_3YqE",
      dot: "_3rIk",
      optionalOn: "_2ESR"
    };
  },
  143: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_3q6B",
      sectionHeader: "_3yAq",
      animationFadeInUp: "_2PpJ",
      animationPaused: "_25rS",
      animationRunning: "UZBo",
      maxWidthWithNormalPadding: "_3ygr",
      handleAspectRatio: "_2sqm",
      outbound: "_2NdC"
    };
  },
  144: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_1kgN",
      sectionHeader: "_1_A5",
      animationFadeInUp: "_1IR1",
      animationPaused: "_3YQi",
      animationRunning: "_34h5",
      maxWidthWithNormalPadding: "_2nH0",
      handleAspectRatio: "_2rr1",
      outbound: "_1AJr",
      error: "VOrc",
      wasted: "vJRc"
    };
  },
  146: function(e, t, a) {
    e.exports = a(212);
  },
  173: function(e, t, a) {
    "use strict";
    a.r(t),
      function(e) {
        a.d(t, "instance", function() {
          return i;
        });
        var n, r;
        a(77),
          a(175),
          a(2),
          a(95),
          a(177),
          a(178),
          a(63),
          a(181),
          a(182),
          a(191);
        (n = window),
          (r = function() {
            Array.prototype.indexOf ||
              (Array.prototype.indexOf = function(e, t) {
                var a;
                if (null == this)
                  throw new TypeError("'this' is null or undefined");
                var n = Object(this),
                  r = n.length >>> 0;
                if (0 === r) return -1;
                var i = +t || 0;
                if ((Math.abs(i) === 1 / 0 && (i = 0), i >= r)) return -1;
                for (a = Math.max(i >= 0 ? i : r - Math.abs(i), 0); a < r; ) {
                  if (a in n && n[a] === e) return a;
                  a++;
                }
                return -1;
              });
            var e = function(e) {
              (this.options = this.extend(e, {
                swfContainerId: "fingerprintjs2",
                swfPath: "flash/compiled/FontList.swf",
                detectScreenOrientation: !1,
                sortPluginsFor: [/palemoon/i],
                excludeColorDepth: !0,
                excludeScreenResolution: !0,
                excludeAddBehavior: !0,
                excludeHasLiedLanguages: !0,
                excludeUserTamperedWithScreenRes: !0,
                excludeHasLiedResolution: !0,
                excludeHasLiedBrowser: !0,
                excludeFlashFonts: !0,
                excludeAvailableScreenResolution: !0,
                excludeIEPlugins: !0
              })),
                (this.nativeForEach = Array.prototype.forEach),
                (this.nativeMap = Array.prototype.map);
            };
            return (
              (e.prototype = {
                extend: function(e, t) {
                  if (null == e) return t;
                  for (var a in e)
                    null != e[a] && t[a] !== e[a] && (t[a] = e[a]);
                  return t;
                },
                log: function(e) {
                  window.console;
                },
                get: function(e) {
                  var t = [];
                  (t = this.userAgentKey(t)),
                    (t = this.languageKey(t)),
                    (t = this.colorDepthKey(t)),
                    (t = this.pixelRatioKey(t)),
                    (t = this.screenResolutionKey(t)),
                    (t = this.availableScreenResolutionKey(t)),
                    (t = this.timezoneOffsetKey(t)),
                    (t = this.sessionStorageKey(t)),
                    (t = this.localStorageKey(t)),
                    (t = this.indexedDbKey(t)),
                    (t = this.addBehaviorKey(t)),
                    (t = this.openDatabaseKey(t)),
                    (t = this.cpuClassKey(t)),
                    (t = this.platformKey(t)),
                    (t = this.doNotTrackKey(t)),
                    (t = this.pluginsKey(t)),
                    (t = this.canvasKey(t)),
                    (t = this.webglKey(t)),
                    (t = this.adBlockKey(t)),
                    (t = this.hasLiedLanguagesKey(t)),
                    (t = this.hasLiedResolutionKey(t)),
                    (t = this.hasLiedOsKey(t)),
                    (t = this.hasLiedBrowserKey(t)),
                    (t = this.touchSupportKey(t)),
                    (t = this.deviceNameKey(t));
                  var a = this;
                  this.fontsKey(t, function(t) {
                    var n = [],
                      r = [];
                    a.each(t, function(e) {
                      var t = e.value;
                      void 0 !== e.value.join && (t = e.value.join(";"));
                      var i = {};
                      (i[e.key] =
                        t.length > 32 && "device_name" !== e.key
                          ? a.x64hash128(t, 31)
                          : t),
                        r.push(i),
                        n.push(t);
                    });
                    var i = r
                        .map(function(e) {
                          return JSON.stringify(e).slice(1, -1);
                        })
                        .join(","),
                      o = a.x64hash128(n.join("~~~"), 31);
                    return e(o, '{"fp":{' + i + "}}");
                  });
                },
                userAgentKey: function(e) {
                  return (
                    this.options.excludeUserAgent ||
                      e.push({ key: "user_agent", value: this.getUserAgent() }),
                    e
                  );
                },
                getUserAgent: function() {
                  return navigator.userAgent;
                },
                languageKey: function(e) {
                  return (
                    this.options.excludeLanguage ||
                      e.push({
                        key: "language",
                        value:
                          navigator.language ||
                          navigator.userLanguage ||
                          navigator.browserLanguage ||
                          navigator.systemLanguage ||
                          ""
                      }),
                    e
                  );
                },
                colorDepthKey: function(e) {
                  return (
                    this.options.excludeColorDepth ||
                      e.push({ key: "color_depth", value: screen.colorDepth }),
                    e
                  );
                },
                pixelRatioKey: function(e) {
                  return (
                    this.options.excludePixelRatio ||
                      e.push({
                        key: "pixel_ratio",
                        value: this.getPixelRatio()
                      }),
                    e
                  );
                },
                getPixelRatio: function() {
                  return window.devicePixelRatio || "";
                },
                screenResolutionKey: function(e) {
                  return this.options.excludeScreenResolution
                    ? e
                    : this.getScreenResolution(e);
                },
                getScreenResolution: function(e) {
                  var t;
                  return (
                    void 0 !==
                      (t =
                        this.options.detectScreenOrientation &&
                        screen.height > screen.width
                          ? [screen.height, screen.width]
                          : [screen.width, screen.height]) &&
                      e.push({ key: "resolution", value: t }),
                    e
                  );
                },
                availableScreenResolutionKey: function(e) {
                  return this.options.excludeAvailableScreenResolution
                    ? e
                    : this.getAvailableScreenResolution(e);
                },
                getAvailableScreenResolution: function(e) {
                  var t;
                  return (
                    screen.availWidth &&
                      screen.availHeight &&
                      (t = this.options.detectScreenOrientation
                        ? screen.availHeight > screen.availWidth
                          ? [screen.availHeight, screen.availWidth]
                          : [screen.availWidth, screen.availHeight]
                        : [screen.availHeight, screen.availWidth]),
                    void 0 !== t &&
                      e.push({ key: "available_resolution", value: t }),
                    e
                  );
                },
                timezoneOffsetKey: function(e) {
                  return (
                    this.options.excludeTimezoneOffset ||
                      e.push({
                        key: "timezone_offset",
                        value: new Date().getTimezoneOffset()
                      }),
                    e
                  );
                },
                sessionStorageKey: function(e) {
                  return (
                    !this.options.excludeSessionStorage &&
                      this.hasSessionStorage() &&
                      e.push({ key: "session_storage", value: 1 }),
                    e
                  );
                },
                localStorageKey: function(e) {
                  return (
                    !this.options.excludeSessionStorage &&
                      this.hasLocalStorage() &&
                      e.push({ key: "local_storage", value: 1 }),
                    e
                  );
                },
                indexedDbKey: function(e) {
                  return (
                    !this.options.excludeIndexedDB &&
                      this.hasIndexedDB() &&
                      e.push({ key: "indexed_db", value: 1 }),
                    e
                  );
                },
                addBehaviorKey: function(e) {
                  return (
                    document.body &&
                      !this.options.excludeAddBehavior &&
                      document.body.addBehavior &&
                      e.push({ key: "add_behavior", value: 1 }),
                    e
                  );
                },
                openDatabaseKey: function(e) {
                  return (
                    !this.options.excludeOpenDatabase &&
                      window.openDatabase &&
                      e.push({ key: "open_database", value: 1 }),
                    e
                  );
                },
                cpuClassKey: function(e) {
                  return (
                    this.options.excludeCpuClass ||
                      e.push({
                        key: "cpu_class",
                        value: this.getNavigatorCpuClass()
                      }),
                    e
                  );
                },
                platformKey: function(e) {
                  return (
                    this.options.excludePlatform ||
                      e.push({
                        key: "navigator_platform",
                        value: this.getNavigatorPlatform()
                      }),
                    e
                  );
                },
                doNotTrackKey: function(e) {
                  return (
                    this.options.excludeDoNotTrack ||
                      e.push({
                        key: "do_not_track",
                        value: this.getDoNotTrack()
                      }),
                    e
                  );
                },
                canvasKey: function(e) {
                  return (
                    !this.options.excludeCanvas &&
                      this.isCanvasSupported() &&
                      e.push({ key: "canvas", value: this.getCanvasFp() }),
                    e
                  );
                },
                webglKey: function(e) {
                  return this.options.excludeWebGL
                    ? ("undefined" == typeof NODEBUG &&
                        this.log(
                          "Skipping WebGL fingerprinting per excludeWebGL configuration option"
                        ),
                      e)
                    : this.isWebGlSupported()
                    ? (e.push({ key: "webgl", value: this.getWebglFp() }), e)
                    : ("undefined" == typeof NODEBUG &&
                        this.log(
                          "Skipping WebGL fingerprinting because it is not supported in this browser"
                        ),
                      e);
                },
                adBlockKey: function(e) {
                  return (
                    this.options.excludeAdBlock ||
                      e.push({ key: "adblock", value: this.getAdBlock() }),
                    e
                  );
                },
                hasLiedLanguagesKey: function(e) {
                  return (
                    this.options.excludeHasLiedLanguages ||
                      e.push({
                        key: "has_lied_languages",
                        value: this.getHasLiedLanguages()
                      }),
                    e
                  );
                },
                hasLiedResolutionKey: function(e) {
                  return (
                    this.options.excludeHasLiedResolution ||
                      e.push({
                        key: "has_lied_resolution",
                        value: this.getHasLiedResolution()
                      }),
                    e
                  );
                },
                hasLiedOsKey: function(e) {
                  return (
                    this.options.excludeHasLiedOs ||
                      e.push({
                        key: "has_lied_os",
                        value: this.getHasLiedOs()
                      }),
                    e
                  );
                },
                hasLiedBrowserKey: function(e) {
                  return (
                    this.options.excludeHasLiedBrowser ||
                      e.push({
                        key: "has_lied_browser",
                        value: this.getHasLiedBrowser()
                      }),
                    e
                  );
                },
                fontsKey: function(e, t) {
                  return this.options.excludeJsFonts
                    ? this.flashFontsKey(e, t)
                    : this.jsFontsKey(e, t);
                },
                flashFontsKey: function(e, t) {
                  return this.options.excludeFlashFonts
                    ? ("undefined" == typeof NODEBUG &&
                        this.log(
                          "Skipping flash fonts detection per excludeFlashFonts configuration option"
                        ),
                      t(e))
                    : this.hasSwfObjectLoaded()
                    ? this.hasMinFlashInstalled()
                      ? void 0 === this.options.swfPath
                        ? ("undefined" == typeof NODEBUG &&
                            this.log(
                              "To use Flash fonts detection, you must pass a valid swfPath option, skipping Flash fonts enumeration"
                            ),
                          t(e))
                        : void this.loadSwfAndDetectFonts(function(a) {
                            e.push({ key: "swf_fonts", value: a.join(";") }),
                              t(e);
                          })
                      : ("undefined" == typeof NODEBUG &&
                          this.log(
                            "Flash is not installed, skipping Flash fonts enumeration"
                          ),
                        t(e))
                    : ("undefined" == typeof NODEBUG &&
                        this.log(
                          "Swfobject is not detected, Flash fonts enumeration is skipped"
                        ),
                      t(e));
                },
                jsFontsKey: function(e, t) {
                  var a = this;
                  return setTimeout(function() {
                    var n = ["monospace", "sans-serif", "serif"],
                      r = [
                        "Andale Mono",
                        "Arial",
                        "Arial Black",
                        "Arial Hebrew",
                        "Arial MT",
                        "Arial Narrow",
                        "Arial Rounded MT Bold",
                        "Arial Unicode MS",
                        "Bitstream Vera Sans Mono",
                        "Book Antiqua",
                        "Bookman Old Style",
                        "Calibri",
                        "Cambria",
                        "Cambria Math",
                        "Century",
                        "Century Gothic",
                        "Century Schoolbook",
                        "Comic Sans",
                        "Comic Sans MS",
                        "Consolas",
                        "Courier",
                        "Courier New",
                        "Garamond",
                        "Geneva",
                        "Georgia",
                        "Helvetica",
                        "Helvetica Neue",
                        "Impact",
                        "Lucida Bright",
                        "Lucida Calligraphy",
                        "Lucida Console",
                        "Lucida Fax",
                        "LUCIDA GRANDE",
                        "Lucida Handwriting",
                        "Lucida Sans",
                        "Lucida Sans Typewriter",
                        "Lucida Sans Unicode",
                        "Microsoft Sans Serif",
                        "Monaco",
                        "Monotype Corsiva",
                        "MS Gothic",
                        "MS Outlook",
                        "MS PGothic",
                        "MS Reference Sans Serif",
                        "MS Sans Serif",
                        "MS Serif",
                        "MYRIAD",
                        "MYRIAD PRO",
                        "Palatino",
                        "Palatino Linotype",
                        "Segoe Print",
                        "Segoe Script",
                        "Segoe UI",
                        "Segoe UI Light",
                        "Segoe UI Semibold",
                        "Segoe UI Symbol",
                        "Tahoma",
                        "Times",
                        "Times New Roman",
                        "Times New Roman PS",
                        "Trebuchet MS",
                        "Verdana",
                        "Wingdings",
                        "Wingdings 2",
                        "Wingdings 3"
                      ];
                    a.options.extendedJsFonts &&
                      (r = r.concat([
                        "Abadi MT Condensed Light",
                        "Academy Engraved LET",
                        "ADOBE CASLON PRO",
                        "Adobe Garamond",
                        "ADOBE GARAMOND PRO",
                        "Agency FB",
                        "Aharoni",
                        "Albertus Extra Bold",
                        "Albertus Medium",
                        "Algerian",
                        "Amazone BT",
                        "American Typewriter",
                        "American Typewriter Condensed",
                        "AmerType Md BT",
                        "Andalus",
                        "Angsana New",
                        "AngsanaUPC",
                        "Antique Olive",
                        "Aparajita",
                        "Apple Chancery",
                        "Apple Color Emoji",
                        "Apple SD Gothic Neo",
                        "Arabic Typesetting",
                        "ARCHER",
                        "ARNO PRO",
                        "Arrus BT",
                        "Aurora Cn BT",
                        "AvantGarde Bk BT",
                        "AvantGarde Md BT",
                        "AVENIR",
                        "Ayuthaya",
                        "Bandy",
                        "Bangla Sangam MN",
                        "Bank Gothic",
                        "BankGothic Md BT",
                        "Baskerville",
                        "Baskerville Old Face",
                        "Batang",
                        "BatangChe",
                        "Bauer Bodoni",
                        "Bauhaus 93",
                        "Bazooka",
                        "Bell MT",
                        "Bembo",
                        "Benguiat Bk BT",
                        "Berlin Sans FB",
                        "Berlin Sans FB Demi",
                        "Bernard MT Condensed",
                        "BernhardFashion BT",
                        "BernhardMod BT",
                        "Big Caslon",
                        "BinnerD",
                        "Blackadder ITC",
                        "BlairMdITC TT",
                        "Bodoni 72",
                        "Bodoni 72 Oldstyle",
                        "Bodoni 72 Smallcaps",
                        "Bodoni MT",
                        "Bodoni MT Black",
                        "Bodoni MT Condensed",
                        "Bodoni MT Poster Compressed",
                        "Bookshelf Symbol 7",
                        "Boulder",
                        "Bradley Hand",
                        "Bradley Hand ITC",
                        "Bremen Bd BT",
                        "Britannic Bold",
                        "Broadway",
                        "Browallia New",
                        "BrowalliaUPC",
                        "Brush Script MT",
                        "Californian FB",
                        "Calisto MT",
                        "Calligrapher",
                        "Candara",
                        "CaslonOpnface BT",
                        "Castellar",
                        "Centaur",
                        "Cezanne",
                        "CG Omega",
                        "CG Times",
                        "Chalkboard",
                        "Chalkboard SE",
                        "Chalkduster",
                        "Charlesworth",
                        "Charter Bd BT",
                        "Charter BT",
                        "Chaucer",
                        "ChelthmITC Bk BT",
                        "Chiller",
                        "Clarendon",
                        "Clarendon Condensed",
                        "CloisterBlack BT",
                        "Cochin",
                        "Colonna MT",
                        "Constantia",
                        "Cooper Black",
                        "Copperplate",
                        "Copperplate Gothic",
                        "Copperplate Gothic Bold",
                        "Copperplate Gothic Light",
                        "CopperplGoth Bd BT",
                        "Corbel",
                        "Cordia New",
                        "CordiaUPC",
                        "Cornerstone",
                        "Coronet",
                        "Cuckoo",
                        "Curlz MT",
                        "DaunPenh",
                        "Dauphin",
                        "David",
                        "DB LCD Temp",
                        "DELICIOUS",
                        "Denmark",
                        "DFKai-SB",
                        "Didot",
                        "DilleniaUPC",
                        "DIN",
                        "DokChampa",
                        "Dotum",
                        "DotumChe",
                        "Ebrima",
                        "Edwardian Script ITC",
                        "Elephant",
                        "English 111 Vivace BT",
                        "Engravers MT",
                        "EngraversGothic BT",
                        "Eras Bold ITC",
                        "Eras Demi ITC",
                        "Eras Light ITC",
                        "Eras Medium ITC",
                        "EucrosiaUPC",
                        "Euphemia",
                        "Euphemia UCAS",
                        "EUROSTILE",
                        "Exotc350 Bd BT",
                        "FangSong",
                        "Felix Titling",
                        "Fixedsys",
                        "FONTIN",
                        "Footlight MT Light",
                        "Forte",
                        "FrankRuehl",
                        "Fransiscan",
                        "Freefrm721 Blk BT",
                        "FreesiaUPC",
                        "Freestyle Script",
                        "French Script MT",
                        "FrnkGothITC Bk BT",
                        "Fruitger",
                        "FRUTIGER",
                        "Futura",
                        "Futura Bk BT",
                        "Futura Lt BT",
                        "Futura Md BT",
                        "Futura ZBlk BT",
                        "FuturaBlack BT",
                        "Gabriola",
                        "Galliard BT",
                        "Gautami",
                        "Geeza Pro",
                        "Geometr231 BT",
                        "Geometr231 Hv BT",
                        "Geometr231 Lt BT",
                        "GeoSlab 703 Lt BT",
                        "GeoSlab 703 XBd BT",
                        "Gigi",
                        "Gill Sans",
                        "Gill Sans MT",
                        "Gill Sans MT Condensed",
                        "Gill Sans MT Ext Condensed Bold",
                        "Gill Sans Ultra Bold",
                        "Gill Sans Ultra Bold Condensed",
                        "Gisha",
                        "Gloucester MT Extra Condensed",
                        "GOTHAM",
                        "GOTHAM BOLD",
                        "Goudy Old Style",
                        "Goudy Stout",
                        "GoudyHandtooled BT",
                        "GoudyOLSt BT",
                        "Gujarati Sangam MN",
                        "Gulim",
                        "GulimChe",
                        "Gungsuh",
                        "GungsuhChe",
                        "Gurmukhi MN",
                        "Haettenschweiler",
                        "Harlow Solid Italic",
                        "Harrington",
                        "Heather",
                        "Heiti SC",
                        "Heiti TC",
                        "HELV",
                        "Herald",
                        "High Tower Text",
                        "Hiragino Kaku Gothic ProN",
                        "Hiragino Mincho ProN",
                        "Hoefler Text",
                        "Humanst 521 Cn BT",
                        "Humanst521 BT",
                        "Humanst521 Lt BT",
                        "Imprint MT Shadow",
                        "Incised901 Bd BT",
                        "Incised901 BT",
                        "Incised901 Lt BT",
                        "INCONSOLATA",
                        "Informal Roman",
                        "Informal011 BT",
                        "INTERSTATE",
                        "IrisUPC",
                        "Iskoola Pota",
                        "JasmineUPC",
                        "Jazz LET",
                        "Jenson",
                        "Jester",
                        "Jokerman",
                        "Juice ITC",
                        "Kabel Bk BT",
                        "Kabel Ult BT",
                        "Kailasa",
                        "KaiTi",
                        "Kalinga",
                        "Kannada Sangam MN",
                        "Kartika",
                        "Kaufmann Bd BT",
                        "Kaufmann BT",
                        "Khmer UI",
                        "KodchiangUPC",
                        "Kokila",
                        "Korinna BT",
                        "Kristen ITC",
                        "Krungthep",
                        "Kunstler Script",
                        "Lao UI",
                        "Latha",
                        "Leelawadee",
                        "Letter Gothic",
                        "Levenim MT",
                        "LilyUPC",
                        "Lithograph",
                        "Lithograph Light",
                        "Long Island",
                        "Lydian BT",
                        "Magneto",
                        "Maiandra GD",
                        "Malayalam Sangam MN",
                        "Malgun Gothic",
                        "Mangal",
                        "Marigold",
                        "Marion",
                        "Marker Felt",
                        "Market",
                        "Marlett",
                        "Matisse ITC",
                        "Matura MT Script Capitals",
                        "Meiryo",
                        "Meiryo UI",
                        "Microsoft Himalaya",
                        "Microsoft JhengHei",
                        "Microsoft New Tai Lue",
                        "Microsoft PhagsPa",
                        "Microsoft Tai Le",
                        "Microsoft Uighur",
                        "Microsoft YaHei",
                        "Microsoft Yi Baiti",
                        "MingLiU",
                        "MingLiU_HKSCS",
                        "MingLiU_HKSCS-ExtB",
                        "MingLiU-ExtB",
                        "Minion",
                        "Minion Pro",
                        "Miriam",
                        "Miriam Fixed",
                        "Mistral",
                        "Modern",
                        "Modern No. 20",
                        "Mona Lisa Solid ITC TT",
                        "Mongolian Baiti",
                        "MONO",
                        "MoolBoran",
                        "Mrs Eaves",
                        "MS LineDraw",
                        "MS Mincho",
                        "MS PMincho",
                        "MS Reference Specialty",
                        "MS UI Gothic",
                        "MT Extra",
                        "MUSEO",
                        "MV Boli",
                        "Nadeem",
                        "Narkisim",
                        "NEVIS",
                        "News Gothic",
                        "News GothicMT",
                        "NewsGoth BT",
                        "Niagara Engraved",
                        "Niagara Solid",
                        "Noteworthy",
                        "NSimSun",
                        "Nyala",
                        "OCR A Extended",
                        "Old Century",
                        "Old English Text MT",
                        "Onyx",
                        "Onyx BT",
                        "OPTIMA",
                        "Oriya Sangam MN",
                        "OSAKA",
                        "OzHandicraft BT",
                        "Palace Script MT",
                        "Papyrus",
                        "Parchment",
                        "Party LET",
                        "Pegasus",
                        "Perpetua",
                        "Perpetua Titling MT",
                        "PetitaBold",
                        "Pickwick",
                        "Plantagenet Cherokee",
                        "Playbill",
                        "PMingLiU",
                        "PMingLiU-ExtB",
                        "Poor Richard",
                        "Poster",
                        "PosterBodoni BT",
                        "PRINCETOWN LET",
                        "Pristina",
                        "PTBarnum BT",
                        "Pythagoras",
                        "Raavi",
                        "Rage Italic",
                        "Ravie",
                        "Ribbon131 Bd BT",
                        "Rockwell",
                        "Rockwell Condensed",
                        "Rockwell Extra Bold",
                        "Rod",
                        "Roman",
                        "Sakkal Majalla",
                        "Santa Fe LET",
                        "Savoye LET",
                        "Sceptre",
                        "Script",
                        "Script MT Bold",
                        "SCRIPTINA",
                        "Serifa",
                        "Serifa BT",
                        "Serifa Th BT",
                        "ShelleyVolante BT",
                        "Sherwood",
                        "Shonar Bangla",
                        "Showcard Gothic",
                        "Shruti",
                        "Signboard",
                        "SILKSCREEN",
                        "SimHei",
                        "Simplified Arabic",
                        "Simplified Arabic Fixed",
                        "SimSun",
                        "SimSun-ExtB",
                        "Sinhala Sangam MN",
                        "Sketch Rockwell",
                        "Skia",
                        "Small Fonts",
                        "Snap ITC",
                        "Snell Roundhand",
                        "Socket",
                        "Souvenir Lt BT",
                        "Staccato222 BT",
                        "Steamer",
                        "Stencil",
                        "Storybook",
                        "Styllo",
                        "Subway",
                        "Swis721 BlkEx BT",
                        "Swiss911 XCm BT",
                        "Sylfaen",
                        "Synchro LET",
                        "System",
                        "Tamil Sangam MN",
                        "Technical",
                        "Teletype",
                        "Telugu Sangam MN",
                        "Tempus Sans ITC",
                        "Terminal",
                        "Thonburi",
                        "Traditional Arabic",
                        "Trajan",
                        "TRAJAN PRO",
                        "Tristan",
                        "Tubular",
                        "Tunga",
                        "Tw Cen MT",
                        "Tw Cen MT Condensed",
                        "Tw Cen MT Condensed Extra Bold",
                        "TypoUpright BT",
                        "Unicorn",
                        "Univers",
                        "Univers CE 55 Medium",
                        "Univers Condensed",
                        "Utsaah",
                        "Vagabond",
                        "Vani",
                        "Vijaya",
                        "Viner Hand ITC",
                        "VisualUI",
                        "Vivaldi",
                        "Vladimir Script",
                        "Vrinda",
                        "Westminster",
                        "WHITNEY",
                        "Wide Latin",
                        "ZapfEllipt BT",
                        "ZapfHumnst BT",
                        "ZapfHumnst Dm BT",
                        "Zapfino",
                        "Zurich BlkEx BT",
                        "Zurich Ex BT",
                        "ZWAdobeF"
                      ]));
                    var i = document.getElementsByTagName("body")[0],
                      o = document.createElement("div"),
                      s = document.createElement("div"),
                      l = {},
                      c = {},
                      d = function() {
                        var e = document.createElement("span");
                        return (
                          (e.style.position = "absolute"),
                          (e.style.left = "-9999px"),
                          (e.style.fontSize = "72px"),
                          (e.innerHTML = "mmmmmmmmmmlli"),
                          e
                        );
                      },
                      m = function(e, t) {
                        var a = d();
                        return (a.style.fontFamily = "'" + e + "'," + t), a;
                      },
                      u = function(e) {
                        for (var t = !1, a = 0; a < n.length; a++)
                          if (
                            (t =
                              e[a].offsetWidth !== l[n[a]] ||
                              e[a].offsetHeight !== c[n[a]])
                          )
                            return t;
                        return t;
                      },
                      g = (function() {
                        for (var e = [], t = 0, a = n.length; t < a; t++) {
                          var r = d();
                          (r.style.fontFamily = n[t]),
                            o.appendChild(r),
                            e.push(r);
                        }
                        return e;
                      })();
                    i.appendChild(o);
                    for (var h = 0, p = n.length; h < p; h++)
                      (l[n[h]] = g[h].offsetWidth),
                        (c[n[h]] = g[h].offsetHeight);
                    var v = (function() {
                      for (var e = {}, t = 0, a = r.length; t < a; t++) {
                        for (var i = [], o = 0, l = n.length; o < l; o++) {
                          var c = m(r[t], n[o]);
                          s.appendChild(c), i.push(c);
                        }
                        e[r[t]] = i;
                      }
                      return e;
                    })();
                    i.appendChild(s);
                    for (var f = [], E = 0, _ = r.length; E < _; E++)
                      u(v[r[E]]) && f.push(r[E]);
                    i.removeChild(s),
                      i.removeChild(o),
                      e.push({ key: "js_fonts", value: f }),
                      t(e);
                  }, 1);
                },
                pluginsKey: function(e) {
                  return (
                    this.options.excludePlugins ||
                      (this.isIE()
                        ? this.options.excludeIEPlugins ||
                          e.push({
                            key: "ie_plugins",
                            value: this.getIEPlugins()
                          })
                        : e.push({
                            key: "regular_plugins",
                            value: this.getRegularPlugins()
                          })),
                    e
                  );
                },
                getRegularPlugins: function() {
                  for (
                    var e = [], t = 0, a = navigator.plugins.length;
                    t < a;
                    t++
                  )
                    e.push(navigator.plugins[t]);
                  return (
                    this.pluginsShouldBeSorted() &&
                      (e = e.sort(function(e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
                      })),
                    this.map(
                      e,
                      function(e) {
                        var t = this.map(e, function(e) {
                          return [e.type, e.suffixes].join("~");
                        }).join(",");
                        return [e.name, e.description, t].join("::");
                      },
                      this
                    )
                  );
                },
                getIEPlugins: function() {
                  var e = [];
                  return (
                    ((Object.getOwnPropertyDescriptor &&
                      Object.getOwnPropertyDescriptor(
                        window,
                        "ActiveXObject"
                      )) ||
                      "ActiveXObject" in window) &&
                      (e = this.map(
                        [
                          "AcroPDF.PDF",
                          "Adodb.Stream",
                          "AgControl.AgControl",
                          "DevalVRXCtrl.DevalVRXCtrl.1",
                          "MacromediaFlashPaper.MacromediaFlashPaper",
                          "Msxml2.DOMDocument",
                          "Msxml2.XMLHTTP",
                          "PDF.PdfCtrl",
                          "QuickTime.QuickTime",
                          "QuickTimeCheckObject.QuickTimeCheck.1",
                          "RealPlayer",
                          "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                          "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                          "Scripting.Dictionary",
                          "SWCtl.SWCtl",
                          "Shell.UIHelper",
                          "ShockwaveFlash.ShockwaveFlash",
                          "Skype.Detection",
                          "TDCCtl.TDCCtl",
                          "WMPlayer.OCX",
                          "rmocx.RealPlayer G2 Control",
                          "rmocx.RealPlayer G2 Control.1"
                        ],
                        function(e) {
                          try {
                            return new ActiveXObject(e), e;
                          } catch (e) {
                            return null;
                          }
                        }
                      )),
                    navigator.plugins &&
                      (e = e.concat(this.getRegularPlugins())),
                    e
                  );
                },
                pluginsShouldBeSorted: function() {
                  for (
                    var e = !1, t = 0, a = this.options.sortPluginsFor.length;
                    t < a;
                    t++
                  ) {
                    var n = this.options.sortPluginsFor[t];
                    if (navigator.userAgent.match(n)) {
                      e = !0;
                      break;
                    }
                  }
                  return e;
                },
                touchSupportKey: function(e) {
                  return (
                    this.options.excludeTouchSupport ||
                      e.push({
                        key: "touch_support",
                        value: this.getTouchSupport()
                      }),
                    e
                  );
                },
                deviceNameKey: function(e) {
                  return (
                    e.push({ key: "device_name", value: this.getDeviceName() }),
                    e
                  );
                },
                getDeviceName: function() {
                  return this.getBrowser() + " on " + this.getOperatingSystem();
                },
                hasSessionStorage: function() {
                  try {
                    return !!window.sessionStorage;
                  } catch (e) {
                    return !0;
                  }
                },
                hasLocalStorage: function() {
                  try {
                    return !!window.localStorage;
                  } catch (e) {
                    return !0;
                  }
                },
                hasIndexedDB: function() {
                  return !!window.indexedDB;
                },
                getNavigatorCpuClass: function() {
                  return navigator.cpuClass ? navigator.cpuClass : "unknown";
                },
                getNavigatorPlatform: function() {
                  return navigator.platform ? navigator.platform : "unknown";
                },
                getDoNotTrack: function() {
                  return navigator.doNotTrack
                    ? navigator.doNotTrack
                    : "unknown";
                },
                getTouchSupport: function() {
                  var e = 0,
                    t = !1;
                  void 0 !== navigator.maxTouchPoints
                    ? (e = navigator.maxTouchPoints)
                    : void 0 !== navigator.msMaxTouchPoints &&
                      (e = navigator.msMaxTouchPoints);
                  try {
                    document.createEvent("TouchEvent"), (t = !0);
                  } catch (e) {}
                  return [e, t, "ontouchstart" in window];
                },
                getCanvasFp: function() {
                  var e = [],
                    t = document.createElement("canvas");
                  (t.width = 2e3),
                    (t.height = 200),
                    (t.style.display = "inline");
                  var a = t.getContext("2d");
                  return (
                    a.rect(0, 0, 10, 10),
                    a.rect(2, 2, 6, 6),
                    e.push(
                      "canvas winding:" +
                        (!1 === a.isPointInPath(5, 5, "evenodd") ? "yes" : "no")
                    ),
                    (a.textBaseline = "alphabetic"),
                    (a.fillStyle = "#f60"),
                    a.fillRect(125, 1, 62, 20),
                    (a.fillStyle = "#069"),
                    this.options.dontUseFakeFontInCanvas
                      ? (a.font = "11pt Arial")
                      : (a.font = "11pt no-real-font-123"),
                    a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
                    (a.fillStyle = "rgba(102, 204, 0, 0.2)"),
                    (a.font = "18pt Arial"),
                    a.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
                    (a.globalCompositeOperation = "multiply"),
                    (a.fillStyle = "rgb(255,0,255)"),
                    a.beginPath(),
                    a.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                    a.closePath(),
                    a.fill(),
                    (a.fillStyle = "rgb(0,255,255)"),
                    a.beginPath(),
                    a.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                    a.closePath(),
                    a.fill(),
                    (a.fillStyle = "rgb(255,255,0)"),
                    a.beginPath(),
                    a.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                    a.closePath(),
                    a.fill(),
                    (a.fillStyle = "rgb(255,0,255)"),
                    a.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                    a.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                    a.fill("evenodd"),
                    e.push("canvas fp:" + t.toDataURL()),
                    e.join("~")
                  );
                },
                getWebglFp: function() {
                  var e,
                    t = function(t) {
                      return (
                        e.clearColor(0, 0, 0, 1),
                        e.enable(e.DEPTH_TEST),
                        e.depthFunc(e.LEQUAL),
                        e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                        "[" + t[0] + ", " + t[1] + "]"
                      );
                    };
                  if (!(e = this.getWebglCanvas())) return null;
                  var a = [],
                    n = e.createBuffer();
                  e.bindBuffer(e.ARRAY_BUFFER, n);
                  var r = new Float32Array([
                    -0.2,
                    -0.9,
                    0,
                    0.4,
                    -0.26,
                    0,
                    0,
                    0.732134444,
                    0
                  ]);
                  e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW),
                    (n.itemSize = 3),
                    (n.numItems = 3);
                  var i = e.createProgram(),
                    o = e.createShader(e.VERTEX_SHADER);
                  e.shaderSource(
                    o,
                    "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
                  ),
                    e.compileShader(o);
                  var s = e.createShader(e.FRAGMENT_SHADER);
                  return (
                    e.shaderSource(
                      s,
                      "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
                    ),
                    e.compileShader(s),
                    e.attachShader(i, o),
                    e.attachShader(i, s),
                    e.linkProgram(i),
                    e.useProgram(i),
                    (i.vertexPosAttrib = e.getAttribLocation(i, "attrVertex")),
                    (i.offsetUniform = e.getUniformLocation(
                      i,
                      "uniformOffset"
                    )),
                    e.enableVertexAttribArray(i.vertexPosArray),
                    e.vertexAttribPointer(
                      i.vertexPosAttrib,
                      n.itemSize,
                      e.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    e.uniform2f(i.offsetUniform, 1, 1),
                    e.drawArrays(e.TRIANGLE_STRIP, 0, n.numItems),
                    null != e.canvas && a.push(e.canvas.toDataURL()),
                    a.push(
                      "extensions:" + e.getSupportedExtensions().join(";")
                    ),
                    a.push(
                      "webgl aliased line width range:" +
                        t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))
                    ),
                    a.push(
                      "webgl aliased point size range:" +
                        t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))
                    ),
                    a.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
                    a.push(
                      "webgl antialiasing:" +
                        (e.getContextAttributes().antialias ? "yes" : "no")
                    ),
                    a.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
                    a.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
                    a.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
                    a.push(
                      "webgl max anisotropy:" +
                        (function(e) {
                          var t,
                            a =
                              e.getExtension(
                                "EXT_texture_filter_anisotropic"
                              ) ||
                              e.getExtension(
                                "WEBKIT_EXT_texture_filter_anisotropic"
                              ) ||
                              e.getExtension(
                                "MOZ_EXT_texture_filter_anisotropic"
                              );
                          return a
                            ? (0 ===
                                (t = e.getParameter(
                                  a.MAX_TEXTURE_MAX_ANISOTROPY_EXT
                                )) && (t = 2),
                              t)
                            : null;
                        })(e)
                    ),
                    a.push(
                      "webgl max combined texture image units:" +
                        e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
                    ),
                    a.push(
                      "webgl max cube map texture size:" +
                        e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
                    ),
                    a.push(
                      "webgl max fragment uniform vectors:" +
                        e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
                    ),
                    a.push(
                      "webgl max render buffer size:" +
                        e.getParameter(e.MAX_RENDERBUFFER_SIZE)
                    ),
                    a.push(
                      "webgl max texture image units:" +
                        e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
                    ),
                    a.push(
                      "webgl max texture size:" +
                        e.getParameter(e.MAX_TEXTURE_SIZE)
                    ),
                    a.push(
                      "webgl max varying vectors:" +
                        e.getParameter(e.MAX_VARYING_VECTORS)
                    ),
                    a.push(
                      "webgl max vertex attribs:" +
                        e.getParameter(e.MAX_VERTEX_ATTRIBS)
                    ),
                    a.push(
                      "webgl max vertex texture image units:" +
                        e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
                    ),
                    a.push(
                      "webgl max vertex uniform vectors:" +
                        e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
                    ),
                    a.push(
                      "webgl max viewport dims:" +
                        t(e.getParameter(e.MAX_VIEWPORT_DIMS))
                    ),
                    a.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
                    a.push("webgl renderer:" + e.getParameter(e.RENDERER)),
                    a.push(
                      "webgl shading language version:" +
                        e.getParameter(e.SHADING_LANGUAGE_VERSION)
                    ),
                    a.push(
                      "webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)
                    ),
                    a.push("webgl vendor:" + e.getParameter(e.VENDOR)),
                    a.push("webgl version:" + e.getParameter(e.VERSION)),
                    e.getShaderPrecisionFormat
                      ? (a.push(
                          "webgl vertex shader high float precision:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.HIGH_FLOAT
                            ).precision
                        ),
                        a.push(
                          "webgl vertex shader high float precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.HIGH_FLOAT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl vertex shader high float precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.HIGH_FLOAT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl vertex shader medium float precision:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.MEDIUM_FLOAT
                            ).precision
                        ),
                        a.push(
                          "webgl vertex shader medium float precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.MEDIUM_FLOAT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl vertex shader medium float precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.MEDIUM_FLOAT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl vertex shader low float precision:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.LOW_FLOAT
                            ).precision
                        ),
                        a.push(
                          "webgl vertex shader low float precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.LOW_FLOAT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl vertex shader low float precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.LOW_FLOAT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl fragment shader high float precision:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.HIGH_FLOAT
                            ).precision
                        ),
                        a.push(
                          "webgl fragment shader high float precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.HIGH_FLOAT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl fragment shader high float precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.HIGH_FLOAT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl fragment shader medium float precision:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.MEDIUM_FLOAT
                            ).precision
                        ),
                        a.push(
                          "webgl fragment shader medium float precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.MEDIUM_FLOAT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl fragment shader medium float precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.MEDIUM_FLOAT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl fragment shader low float precision:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.LOW_FLOAT
                            ).precision
                        ),
                        a.push(
                          "webgl fragment shader low float precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.LOW_FLOAT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl fragment shader low float precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.LOW_FLOAT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl vertex shader high int precision:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.HIGH_INT
                            ).precision
                        ),
                        a.push(
                          "webgl vertex shader high int precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.HIGH_INT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl vertex shader high int precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.HIGH_INT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl vertex shader medium int precision:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.MEDIUM_INT
                            ).precision
                        ),
                        a.push(
                          "webgl vertex shader medium int precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.MEDIUM_INT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl vertex shader medium int precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.MEDIUM_INT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl vertex shader low int precision:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.LOW_INT
                            ).precision
                        ),
                        a.push(
                          "webgl vertex shader low int precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.LOW_INT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl vertex shader low int precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.VERTEX_SHADER,
                              e.LOW_INT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl fragment shader high int precision:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.HIGH_INT
                            ).precision
                        ),
                        a.push(
                          "webgl fragment shader high int precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.HIGH_INT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl fragment shader high int precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.HIGH_INT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl fragment shader medium int precision:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.MEDIUM_INT
                            ).precision
                        ),
                        a.push(
                          "webgl fragment shader medium int precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.MEDIUM_INT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl fragment shader medium int precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.MEDIUM_INT
                            ).rangeMax
                        ),
                        a.push(
                          "webgl fragment shader low int precision:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.LOW_INT
                            ).precision
                        ),
                        a.push(
                          "webgl fragment shader low int precision rangeMin:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.LOW_INT
                            ).rangeMin
                        ),
                        a.push(
                          "webgl fragment shader low int precision rangeMax:" +
                            e.getShaderPrecisionFormat(
                              e.FRAGMENT_SHADER,
                              e.LOW_INT
                            ).rangeMax
                        ),
                        a.join("~"))
                      : ("undefined" == typeof NODEBUG &&
                          this.log(
                            "WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"
                          ),
                        a.join("~"))
                  );
                },
                getAdBlock: function() {
                  var e = document.createElement("div");
                  (e.innerHTML = "&nbsp;"), (e.className = "adsbox");
                  var t = !1;
                  try {
                    document.body.appendChild(e),
                      (t =
                        0 ===
                        document.getElementsByClassName("adsbox")[0]
                          .offsetHeight),
                      document.body.removeChild(e);
                  } catch (e) {
                    t = !1;
                  }
                  return t;
                },
                getHasLiedLanguages: function() {
                  if (void 0 !== navigator.languages)
                    try {
                      if (
                        navigator.languages[0].substr(0, 2) !==
                        navigator.language.substr(0, 2)
                      )
                        return !0;
                    } catch (e) {
                      return !0;
                    }
                  return !1;
                },
                getHasLiedResolution: function() {
                  return (
                    screen.width < screen.availWidth ||
                    screen.height < screen.availHeight
                  );
                },
                getOperatingSystem: function() {
                  var e = navigator.userAgent.toLowerCase();
                  return e.indexOf("windows phone") >= 0
                    ? "Windows Phone"
                    : e.indexOf("steam") >= 0
                    ? "Steam"
                    : e.indexOf("xbox one") >= 0
                    ? "Xbox One"
                    : e.indexOf("xbox") >= 0
                    ? "Xbox 360"
                    : e.indexOf("playstation 4") >= 0
                    ? "Playstation 4"
                    : e.indexOf("playstation 3") >= 0
                    ? "Playstation 3"
                    : e.indexOf("win") >= 0
                    ? "Windows"
                    : e.indexOf("android") >= 0
                    ? "Android"
                    : e.indexOf("linux") >= 0
                    ? "Linux"
                    : e.indexOf("nintendo switch") >= 0
                    ? "Nintendo Switch"
                    : e.indexOf("iphone") >= 0 || e.indexOf("ipad") >= 0
                    ? "iOS"
                    : e.indexOf("mac") >= 0
                    ? "Mac"
                    : "Other";
                },
                getHasLiedOs: function() {
                  var e = navigator.oscpu,
                    t = navigator.platform.toLowerCase(),
                    a = this.getOperatingSystem();
                  if (
                    ("ontouchstart" in window ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0) &&
                    "Windows Phone" !== a &&
                    "Android" !== a &&
                    "iOS" !== a &&
                    "Other" !== a
                  )
                    return !0;
                  if (void 0 !== e) {
                    if (
                      (e = e.toLowerCase()).indexOf("win") >= 0 &&
                      "Windows" !== a &&
                      "Windows Phone" !== a
                    )
                      return !0;
                    if (
                      e.indexOf("linux") >= 0 &&
                      "Linux" !== a &&
                      "Android" !== a
                    )
                      return !0;
                    if (e.indexOf("mac") >= 0 && "Mac" !== a && "iOS" !== a)
                      return !0;
                    if (
                      0 === e.indexOf("win") &&
                      0 === e.indexOf("linux") &&
                      e.indexOf("mac") >= 0 &&
                      "other" !== a
                    )
                      return !0;
                  }
                  return (
                    (t.indexOf("win") >= 0 &&
                      "Windows" !== a &&
                      "Windows Phone" !== a) ||
                    ((t.indexOf("linux") >= 0 ||
                      t.indexOf("android") >= 0 ||
                      t.indexOf("pike") >= 0) &&
                      "Linux" !== a &&
                      "Android" !== a) ||
                    ((t.indexOf("mac") >= 0 ||
                      t.indexOf("ipad") >= 0 ||
                      t.indexOf("ipod") >= 0 ||
                      t.indexOf("iphone") >= 0) &&
                      "Mac" !== a &&
                      "iOS" !== a) ||
                    (0 === t.indexOf("win") &&
                      0 === t.indexOf("linux") &&
                      t.indexOf("mac") >= 0 &&
                      "other" !== a) ||
                    (void 0 === navigator.plugins &&
                      "Windows" !== a &&
                      "Windows Phone" !== a)
                  );
                },
                getBrowser: function() {
                  var e = navigator.userAgent.toLowerCase();
                  return e.indexOf("firefox") >= 0
                    ? "Firefox"
                    : e.indexOf("ucbrowser") >= 0 || e.indexOf("opr") >= 0
                    ? "UC Browser"
                    : e.indexOf("maxthon") >= 0 || e.indexOf("opr") >= 0
                    ? "Maxthon"
                    : e.indexOf("opera") >= 0 || e.indexOf("opr") >= 0
                    ? "Opera"
                    : e.indexOf("edge") >= 0
                    ? "Microsoft Edge"
                    : e.indexOf("chrome") >= 0 || e.indexOf("crios") >= 0
                    ? "Chrome"
                    : e.indexOf("safari") >= 0
                    ? "Safari"
                    : e.indexOf("trident") >= 0
                    ? "Internet Explorer"
                    : e.indexOf("playstation") >= 0
                    ? "Playstation"
                    : e.indexOf("nintendobrowser") >= 0
                    ? "Nintendo"
                    : "Other";
                },
                getHasLiedBrowser: function() {
                  var e = navigator.productSub,
                    t = this.getBrowser();
                  if (
                    ("Chrome" === t || "Safari" === t || "Opera" === t) &&
                    "20030107" !== e
                  )
                    return !0;
                  var a,
                    n = eval.toString().length;
                  if (
                    37 === n &&
                    "Safari" !== t &&
                    "Firefox" !== t &&
                    "Other" !== t
                  )
                    return !0;
                  if (39 === n && "Internet Explorer" !== t && "Other" !== t)
                    return !0;
                  if (
                    33 === n &&
                    "Chrome" !== t &&
                    "Opera" !== t &&
                    "Other" !== t
                  )
                    return !0;
                  try {
                    throw "a";
                  } catch (e) {
                    try {
                      e.toSource(), (a = !0);
                    } catch (e) {
                      a = !1;
                    }
                  }
                  return !(!a || "Firefox" === t || "Other" === t);
                },
                isCanvasSupported: function() {
                  var e = document.createElement("canvas");
                  return !(!e.getContext || !e.getContext("2d"));
                },
                isWebGlSupported: function() {
                  if (!this.isCanvasSupported()) return !1;
                  var e,
                    t = document.createElement("canvas");
                  try {
                    e =
                      t.getContext &&
                      (t.getContext("webgl") ||
                        t.getContext("experimental-webgl"));
                  } catch (t) {
                    e = !1;
                  }
                  return !!window.WebGLRenderingContext && !!e;
                },
                isIE: function() {
                  return (
                    "Microsoft Internet Explorer" === navigator.appName ||
                    !(
                      "Netscape" !== navigator.appName ||
                      !/Trident/.test(navigator.userAgent)
                    )
                  );
                },
                hasSwfObjectLoaded: function() {
                  return void 0 !== window.swfobject;
                },
                hasMinFlashInstalled: function() {
                  return swfobject.hasFlashPlayerVersion("9.0.0");
                },
                addFlashDivNode: function() {
                  var e = document.createElement("div");
                  e.setAttribute("id", this.options.swfContainerId),
                    document.body.appendChild(e);
                },
                loadSwfAndDetectFonts: function(e) {
                  window.___fp_swf_loaded = function(t) {
                    e(t);
                  };
                  var t = this.options.swfContainerId;
                  this.addFlashDivNode();
                  var a = { onReady: "___fp_swf_loaded" };
                  swfobject.embedSWF(
                    this.options.swfPath,
                    t,
                    "1",
                    "1",
                    "9.0.0",
                    !1,
                    a,
                    { allowScriptAccess: "always", menu: "false" },
                    {}
                  );
                },
                getWebglCanvas: function() {
                  var e = document.createElement("canvas"),
                    t = null;
                  try {
                    t =
                      e.getContext("webgl") ||
                      e.getContext("experimental-webgl");
                  } catch (e) {}
                  return t || (t = null), t;
                },
                each: function(e, t, a) {
                  if (null !== e)
                    if (this.nativeForEach && e.forEach === this.nativeForEach)
                      e.forEach(t, a);
                    else if (e.length === +e.length) {
                      for (var n = 0, r = e.length; n < r; n++)
                        if (t.call(a, e[n], n, e) === {}) return;
                    } else
                      for (var i in e)
                        if (e.hasOwnProperty(i) && t.call(a, e[i], i, e) === {})
                          return;
                },
                map: function(e, t, a) {
                  var n = [];
                  return null == e
                    ? n
                    : this.nativeMap && e.map === this.nativeMap
                    ? e.map(t, a)
                    : (this.each(e, function(e, r, i) {
                        n[n.length] = t.call(a, e, r, i);
                      }),
                      n);
                },
                x64Add: function(e, t) {
                  (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                    (t = [
                      t[0] >>> 16,
                      65535 & t[0],
                      t[1] >>> 16,
                      65535 & t[1]
                    ]);
                  var a = [0, 0, 0, 0];
                  return (
                    (a[3] += e[3] + t[3]),
                    (a[2] += a[3] >>> 16),
                    (a[3] &= 65535),
                    (a[2] += e[2] + t[2]),
                    (a[1] += a[2] >>> 16),
                    (a[2] &= 65535),
                    (a[1] += e[1] + t[1]),
                    (a[0] += a[1] >>> 16),
                    (a[1] &= 65535),
                    (a[0] += e[0] + t[0]),
                    (a[0] &= 65535),
                    [(a[0] << 16) | a[1], (a[2] << 16) | a[3]]
                  );
                },
                x64Multiply: function(e, t) {
                  (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                    (t = [
                      t[0] >>> 16,
                      65535 & t[0],
                      t[1] >>> 16,
                      65535 & t[1]
                    ]);
                  var a = [0, 0, 0, 0];
                  return (
                    (a[3] += e[3] * t[3]),
                    (a[2] += a[3] >>> 16),
                    (a[3] &= 65535),
                    (a[2] += e[2] * t[3]),
                    (a[1] += a[2] >>> 16),
                    (a[2] &= 65535),
                    (a[2] += e[3] * t[2]),
                    (a[1] += a[2] >>> 16),
                    (a[2] &= 65535),
                    (a[1] += e[1] * t[3]),
                    (a[0] += a[1] >>> 16),
                    (a[1] &= 65535),
                    (a[1] += e[2] * t[2]),
                    (a[0] += a[1] >>> 16),
                    (a[1] &= 65535),
                    (a[1] += e[3] * t[1]),
                    (a[0] += a[1] >>> 16),
                    (a[1] &= 65535),
                    (a[0] +=
                      e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
                    (a[0] &= 65535),
                    [(a[0] << 16) | a[1], (a[2] << 16) | a[3]]
                  );
                },
                x64Rotl: function(e, t) {
                  return 32 == (t %= 64)
                    ? [e[1], e[0]]
                    : t < 32
                    ? [
                        (e[0] << t) | (e[1] >>> (32 - t)),
                        (e[1] << t) | (e[0] >>> (32 - t))
                      ]
                    : ((t -= 32),
                      [
                        (e[1] << t) | (e[0] >>> (32 - t)),
                        (e[0] << t) | (e[1] >>> (32 - t))
                      ]);
                },
                x64LeftShift: function(e, t) {
                  return 0 == (t %= 64)
                    ? e
                    : t < 32
                    ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
                    : [e[1] << (t - 32), 0];
                },
                x64Xor: function(e, t) {
                  return [e[0] ^ t[0], e[1] ^ t[1]];
                },
                x64Fmix: function(e) {
                  return (
                    (e = this.x64Xor(e, [0, e[0] >>> 1])),
                    (e = this.x64Multiply(e, [4283543511, 3981806797])),
                    (e = this.x64Xor(e, [0, e[0] >>> 1])),
                    (e = this.x64Multiply(e, [3301882366, 444984403])),
                    (e = this.x64Xor(e, [0, e[0] >>> 1]))
                  );
                },
                x64hash128: function(e, t) {
                  t = t || 0;
                  for (
                    var a = (e = e || "").length % 16,
                      n = e.length - a,
                      r = [0, t],
                      i = [0, t],
                      o = [0, 0],
                      s = [0, 0],
                      l = [2277735313, 289559509],
                      c = [1291169091, 658871167],
                      d = 0;
                    d < n;
                    d += 16
                  )
                    (o = [
                      (255 & e.charCodeAt(d + 4)) |
                        ((255 & e.charCodeAt(d + 5)) << 8) |
                        ((255 & e.charCodeAt(d + 6)) << 16) |
                        ((255 & e.charCodeAt(d + 7)) << 24),
                      (255 & e.charCodeAt(d)) |
                        ((255 & e.charCodeAt(d + 1)) << 8) |
                        ((255 & e.charCodeAt(d + 2)) << 16) |
                        ((255 & e.charCodeAt(d + 3)) << 24)
                    ]),
                      (s = [
                        (255 & e.charCodeAt(d + 12)) |
                          ((255 & e.charCodeAt(d + 13)) << 8) |
                          ((255 & e.charCodeAt(d + 14)) << 16) |
                          ((255 & e.charCodeAt(d + 15)) << 24),
                        (255 & e.charCodeAt(d + 8)) |
                          ((255 & e.charCodeAt(d + 9)) << 8) |
                          ((255 & e.charCodeAt(d + 10)) << 16) |
                          ((255 & e.charCodeAt(d + 11)) << 24)
                      ]),
                      (o = this.x64Multiply(o, l)),
                      (o = this.x64Rotl(o, 31)),
                      (o = this.x64Multiply(o, c)),
                      (r = this.x64Xor(r, o)),
                      (r = this.x64Rotl(r, 27)),
                      (r = this.x64Add(r, i)),
                      (r = this.x64Add(this.x64Multiply(r, [0, 5]), [
                        0,
                        1390208809
                      ])),
                      (s = this.x64Multiply(s, c)),
                      (s = this.x64Rotl(s, 33)),
                      (s = this.x64Multiply(s, l)),
                      (i = this.x64Xor(i, s)),
                      (i = this.x64Rotl(i, 31)),
                      (i = this.x64Add(i, r)),
                      (i = this.x64Add(this.x64Multiply(i, [0, 5]), [
                        0,
                        944331445
                      ]));
                  switch (((o = [0, 0]), (s = [0, 0]), a)) {
                    case 15:
                      s = this.x64Xor(
                        s,
                        this.x64LeftShift([0, e.charCodeAt(d + 14)], 48)
                      );
                    case 14:
                      s = this.x64Xor(
                        s,
                        this.x64LeftShift([0, e.charCodeAt(d + 13)], 40)
                      );
                    case 13:
                      s = this.x64Xor(
                        s,
                        this.x64LeftShift([0, e.charCodeAt(d + 12)], 32)
                      );
                    case 12:
                      s = this.x64Xor(
                        s,
                        this.x64LeftShift([0, e.charCodeAt(d + 11)], 24)
                      );
                    case 11:
                      s = this.x64Xor(
                        s,
                        this.x64LeftShift([0, e.charCodeAt(d + 10)], 16)
                      );
                    case 10:
                      s = this.x64Xor(
                        s,
                        this.x64LeftShift([0, e.charCodeAt(d + 9)], 8)
                      );
                    case 9:
                      (s = this.x64Xor(s, [0, e.charCodeAt(d + 8)])),
                        (s = this.x64Multiply(s, c)),
                        (s = this.x64Rotl(s, 33)),
                        (s = this.x64Multiply(s, l)),
                        (i = this.x64Xor(i, s));
                    case 8:
                      o = this.x64Xor(
                        o,
                        this.x64LeftShift([0, e.charCodeAt(d + 7)], 56)
                      );
                    case 7:
                      o = this.x64Xor(
                        o,
                        this.x64LeftShift([0, e.charCodeAt(d + 6)], 48)
                      );
                    case 6:
                      o = this.x64Xor(
                        o,
                        this.x64LeftShift([0, e.charCodeAt(d + 5)], 40)
                      );
                    case 5:
                      o = this.x64Xor(
                        o,
                        this.x64LeftShift([0, e.charCodeAt(d + 4)], 32)
                      );
                    case 4:
                      o = this.x64Xor(
                        o,
                        this.x64LeftShift([0, e.charCodeAt(d + 3)], 24)
                      );
                    case 3:
                      o = this.x64Xor(
                        o,
                        this.x64LeftShift([0, e.charCodeAt(d + 2)], 16)
                      );
                    case 2:
                      o = this.x64Xor(
                        o,
                        this.x64LeftShift([0, e.charCodeAt(d + 1)], 8)
                      );
                    case 1:
                      (o = this.x64Xor(o, [0, e.charCodeAt(d)])),
                        (o = this.x64Multiply(o, l)),
                        (o = this.x64Rotl(o, 31)),
                        (o = this.x64Multiply(o, c)),
                        (r = this.x64Xor(r, o));
                  }
                  return (
                    (r = this.x64Xor(r, [0, e.length])),
                    (i = this.x64Xor(i, [0, e.length])),
                    (r = this.x64Add(r, i)),
                    (i = this.x64Add(i, r)),
                    (r = this.x64Fmix(r)),
                    (i = this.x64Fmix(i)),
                    (r = this.x64Add(r, i)),
                    (i = this.x64Add(i, r)),
                    ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) +
                      ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) +
                      ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) +
                      ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
                  );
                }
              }),
              (e.VERSION = "1.4.0"),
              e
            );
          }),
          e.exports
            ? (e.exports = r())
            : "function" == typeof define && a(192)
            ? define(r)
            : (n.Fingerprint2 = r());
        var i = new window.Fingerprint2();
      }.call(this, a(174)(e));
  },
  207: function(e, t, a) {
    "use strict";
    a.r(t);
    a(213), a(208);
  },
  212: function(e, t, a) {
    "use strict";
    a.r(t);
    var n = {};
    a.r(n),
      a.d(n, "article_tag", function() {
        return Nt;
      }),
      a.d(n, "cta", function() {
        return Ct;
      }),
      a.d(n, "Star", function() {
        return Te;
      }),
      a.d(n, "pct_bar", function() {
        return Tt;
      }),
      a.d(n, "newswire_full", function() {
        return _t;
      }),
      a.d(n, "responsive_grid_box", function() {
        return wt;
      }),
      a.d(n, "responsive_grid_item", function() {
        return St;
      }),
      a.d(n, "responsive_flex_box", function() {
        return xt;
      }),
      a.d(n, "responsive_flex_item", function() {
        return kt;
      }),
      a.d(n, "responsive_section", function() {
        return yt;
      }),
      a.d(n, "responsive_img", function() {
        return bt;
      }),
      a.d(n, "fade_in_content", function() {
        return Ot;
      });
    var r = a(0),
      i = a.n(r),
      o = a(140),
      s = a.n(o),
      l = a(30),
      c = a(4);
    var d = Object(l.i)(function(e) {
        var { history: t } = e;
        return (
          Object(r.useEffect)(() => {
            var e = t.listen(() => {
              window.scrollTo(0, 0);
            });
            return () => {
              e();
            };
          }, []),
          null
        );
      }),
      m = (a(2), a(3), a(91), a(143)),
      u = a.n(m),
      g = Object(r.createContext)(),
      h =
        (g.Consumer,
        e => i.a.createElement(g.Provider, { value: u.a }, e.children)),
      p = () => Object(r.useContext)(g),
      v = Object(r.createContext)(),
      f =
        (v.Consumer,
        e => {
          var { base: t, gdpr: a, locale: n, sc: o } = e,
            [s, l] = Object(r.useState)(!1),
            [c, d] = Object(r.useState)(""),
            [m, u] = Object(r.useState)(null),
            [g, h] = Object(r.useState)(0),
            [p, f] = Object(r.useState)(!1),
            [E, _] = Object(r.useState)(
              window.matchMedia("(max-width: 768px)").matches
            ),
            [b, y] = Object(r.useState)({ links: [], filter: [] }),
            [w, x] = Object(r.useState)(a.cookies.tracking),
            [S, k] = Object(r.useState)(!1),
            N = {
              normalLogo: { get: S, set: k },
              tracking: { get: w, set: x },
              breadcrumbs: { get: b, set: y },
              base: t,
              sc: o,
              locale: n,
              loading: { get: p, set: f },
              navOpen: { get: s, set: l },
              user: { get: m, set: u },
              search: { get: c, set: d },
              mobileBreakpoint: { get: E }
            };
          return (
            Object(r.useEffect)(() => {
              var e = e => {
                _(window.matchMedia("(max-width: 768px)").matches);
              };
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            i.a.createElement(v.Provider, { value: N }, e.children)
          );
        }),
      E = () => Object(r.useContext)(v),
      _ = Object(r.createContext)(),
      b =
        (_.Consumer,
        e => {
          dataLayer.push(e);
        }),
      y = e => (
        document.addEventListener("click", e => {
          if (
            e.target.matches(
              "*[data-gtm-category][data-gtm-action][data-gtm-label]"
            )
          ) {
            var t = e.target.dataset,
              a = {
                event: void 0 !== t.gtmEvent ? t.gtmEvent : "trackEvent",
                eventCategory: t.gtmCategory,
                eventAction: t.gtmAction,
                eventLabel: t.gtmLabel
              };
            b(a);
          }
        }),
        i.a.createElement(_.Provider, { value: b }, e.children)
      ),
      w = () => Object(r.useContext)(_);
    function x(e, t, a, n, r, i, o) {
      try {
        var s = e[i](o),
          l = s.value;
      } catch (e) {
        return void a(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(n, r);
    }
    function S(e) {
      return function() {
        var t = this,
          a = arguments;
        return new Promise(function(n, r) {
          var i = e.apply(t, a);
          function o(e) {
            x(i, n, r, o, s, "next", e);
          }
          function s(e) {
            x(i, n, r, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    var k = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          [a, n] = Object(r.useState)(null),
          [i, o] = Object(r.useState)(!0),
          [s, l] = Object(r.useState)(null),
          c = E();
        return (
          Object(r.useEffect)(() => {
            a && a.meta && a.meta.title && (document.title = a.meta.title);
          }, [a]),
          Object(r.useEffect)(() => {
            var t = !1;
            return (
              (function() {
                var a = S(function*() {
                  if (null !== e) {
                    t || (o(!0), l(null), n(null));
                    try {
                      var a = yield window.fetch(c.base + e, {
                          credentials: "same-origin"
                        }),
                        r = yield a.json();
                      if (r.hasOwnProperty("status") && 0 === r.status) throw r;
                      !t && n(r);
                    } catch (e) {
                      !t && l(e);
                    } finally {
                      !t && o(!1);
                    }
                  }
                });
                return function() {
                  return a.apply(this, arguments);
                };
              })()(),
              () => {
                t = !0;
              }
            );
          }, t),
          [a, i, s]
        );
      },
      N = e => {
        var [t, a] = Object(r.useState)(null),
          [n, i] = Object(r.useState)({});
        return (
          Object(r.useLayoutEffect)(() => {
            var t = new Image(),
              n = !1;
            return (
              t.addEventListener("load", e => {
                i({ width: t.width, height: t.height }), (t = null), n || a(!0);
              }),
              t.addEventListener("error", e => {
                (t = null), n || a(!1);
              }),
              (t.src = e),
              () => {
                (n = !0), null !== t && (t.src = "");
              }
            );
          }, [e]),
          [t, n]
        );
      },
      C = Object(r.createContext)(),
      T =
        (C.Consumer,
        e => {
          var [t, a, n] = k("app/translations.json");
          return null === t
            ? null
            : i.a.createElement(
                C.Provider,
                {
                  value: function(e) {
                    var { translations: a } = t;
                    return e in a && null !== a[e] && "" !== a[e] ? a[e] : e;
                  }
                },
                e.children
              );
        }),
      O = () => Object(r.useContext)(C),
      M = (a(63), a(38), a(7)),
      A = a.n(M),
      R = Object(r.forwardRef)((e, t) => {
        var a = E(),
          n = O(),
          r = Object(l.g)();
        return i.a.createElement(
          "form",
          {
            className: A.a.searchBox,
            onSubmit: e => {
              e.preventDefault(),
                a.navOpen.set(!1),
                document.activeElement.blur(),
                r.push("/search?q=".concat(e.target.q.value));
            }
          },
          i.a.createElement("button", { type: "submit" }),
          i.a.createElement("input", {
            ref: t,
            autoComplete: "off",
            name: "q",
            value: a.search.get,
            placeholder: n("Search Rockstar Games"),
            onChange: e => {
              a.search.set(e.target.value);
            }
          })
        );
      });
    a(42);
    function I() {
      return (I =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var P = e =>
        !/^(https?|mailto):/i.test(e.to)
          ? i.a.createElement(c.b, e, e.children)
          : i.a.createElement("a", I({ href: e.to }, e), e.children),
      j = a(144),
      B = a.n(j),
      L = e => {
        var { error: t } = e,
          a = E(),
          n = O(),
          o = "".concat((t && t.message) || n("error-404-new")),
          s = "".concat(t && t.code ? " (" + parseInt(t.code) + ")" : "");
        return (
          Object(r.useEffect)(() => {
            a.loading.set(!1), a.breadcrumbs.set({ links: [], filter: "" });
          }, []),
          i.a.createElement(
            "div",
            { className: B.a.error },
            i.a.createElement("h3", null, o, s),
            i.a.createElement(P, { to: "/" }, n("Home")),
            i.a.createElement(R, null)
          )
        );
      };
    class F extends r.Component {
      constructor(e) {
        super(e);
        var { history: t } = this.props;
        t.listen((e, t) => {
          null !== this.state.error && this.setState({ error: null });
        }),
          (this.state = { error: null });
      }
      static getDerivedStateFromError(e) {
        return {
          error: { message: e.message || e.toString(), code: e.code || null }
        };
      }
      componentDidCatch(e, t) {}
      render() {
        return null !== this.state.error
          ? i.a.createElement(L, { error: this.state.error })
          : this.props.children;
      }
    }
    var H = Object(l.i)(F),
      D = e =>
        i.a.createElement(
          "footer",
          { className: A.a.showsOver },
          i.a.createElement(
            "div",
            { className: A.a.whatTeamWildcats },
            "Rockstar Games"
          ),
          i.a.createElement(
            "div",
            { className: A.a.places },
            i.a.createElement("span", null, "New York"),
            i.a.createElement("span", null, "London"),
            i.a.createElement("span", null, "Paris"),
            i.a.createElement("span", null, "Bogota")
          ),
          i.a.createElement("div", { className: A.a.sophomore }, "MCMXCVIII")
        ),
      G = a(11),
      U = a.n(G);
    function W(e, t, a, n, r, i, o) {
      try {
        var s = e[i](o),
          l = s.value;
      } catch (e) {
        return void a(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(n, r);
    }
    var X = a(173),
      K = () => {
        var e = E(),
          t = w(),
          [a, n] = Object(r.useState)(!1),
          [o, s] = Object(r.useState)(null),
          l = e.user.get,
          c = {},
          d = O();
        return (
          Object(r.useEffect)(() => {
            window.addEventListener("popstate", () => {
              n(!1);
            });
          }, []),
          Object(r.useEffect)(() => {
            X.instance.get((e, t) => {
              s(t);
            });
          }, []),
          Object(r.useEffect)(() => {
            null !== o &&
              (function() {
                var t,
                  a =
                    ((t = function*() {
                      var t = yield fetch(
                          "".concat(e.base, "auth/get-user.json")
                        ),
                        a = yield t.json();
                      if (a.loggedIn) e.user.set(a.user);
                      else {
                        var n = yield fetch(e.sc.silentCheck, {
                          method: "POST",
                          credentials: "include",
                          headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-type":
                              "application/x-www-form-urlencoded; charset=utf-8"
                          },
                          body: "fingerprint=".concat(o)
                        });
                        if (n.ok) {
                          var r = yield n.text(),
                            i = yield fetch(
                              "".concat(e.base, "auth/login.json"),
                              {
                                method: "POST",
                                credentials: "include",
                                body: JSON.stringify({ code: r }),
                                headers: { "Content-Type": "application/json" }
                              }
                            ),
                            s = yield i.json();
                          s.status ? e.user.set(s.user) : e.user.set(!1);
                        } else e.user.set(!1);
                      }
                    }),
                    function() {
                      var e = this,
                        a = arguments;
                      return new Promise(function(n, r) {
                        var i = t.apply(e, a);
                        function o(e) {
                          W(i, n, r, o, s, "next", e);
                        }
                        function s(e) {
                          W(i, n, r, o, s, "throw", e);
                        }
                        o(void 0);
                      });
                    });
                return function() {
                  return a.apply(this, arguments);
                };
              })()();
          }, [o]),
          Object(r.useEffect)(() => {
            null !== l && !1 !== l && t({ memberId: String(l.id) });
          }, [l]),
          Object(r.useEffect)(() => {
            e.navOpen.get && n(!1);
          }, [e.navOpen.get]),
          null === l
            ? null
            : (l && (c.backgroundImage = "url(".concat(l.avatar, ")")),
              i.a.createElement(
                "div",
                {
                  className: [
                    U.a.scMenu,
                    l ? U.a.loggedIn : U.a.loggedOut
                  ].join(" ")
                },
                i.a.createElement("a", {
                  onClick: e => {
                    e.stopPropagation(), e.preventDefault(), n(!a);
                  },
                  className: U.a.opener,
                  style: c,
                  target: "_blank"
                }),
                i.a.createElement(
                  "nav",
                  { className: [U.a.glNav, a ? U.a.navOpen : ""].join(" ") },
                  l
                    ? i.a.createElement(
                        r.Fragment,
                        null,
                        i.a.createElement(
                          "a",
                          {
                            className: [U.a.icon, U.a.icon_profile].join(" "),
                            href: "".concat(l.profile_link),
                            target: "_blank"
                          },
                          d("View My Profile")
                        ),
                        i.a.createElement(
                          "a",
                          {
                            className: [U.a.icon, U.a.icon_settings].join(" "),
                            href: "https://".concat(
                              e.sc.host,
                              ".rockstargames.com/settings"
                            ),
                            target: "_blank"
                          },
                          d("Settings")
                        ),
                        i.a.createElement(
                          "a",
                          {
                            className: [U.a.icon, U.a.icon_messages].join(" "),
                            href: "https://".concat(
                              e.sc.host,
                              ".rockstargames.com/message"
                            ),
                            target: "_blank"
                          },
                          d("Messages")
                        ),
                        i.a.createElement(
                          "a",
                          {
                            className: [U.a.icon, U.a.icon_notifications].join(
                              " "
                            ),
                            href: "https://".concat(
                              e.sc.host,
                              ".rockstargames.com/notifications"
                            ),
                            target: "_blank"
                          },
                          d("Notifications")
                        ),
                        i.a.createElement(
                          "a",
                          {
                            className: [U.a.icon, U.a.icon_friends].join(" "),
                            href: "https://"
                              .concat(e.sc.host, ".rockstargames.com/member/")
                              .concat(l.nickname, "/friends"),
                            target: "_blank"
                          },
                          d("Friend Requests")
                        ),
                        i.a.createElement(
                          "a",
                          {
                            className: [U.a.icon, U.a.icon_crews].join(" "),
                            href: "https://"
                              .concat(e.sc.host, ".rockstargames.com/member/")
                              .concat(l.nickname, "/crews"),
                            target: "_blank"
                          },
                          d("Crew Invites")
                        ),
                        i.a.createElement(
                          "a",
                          {
                            href: "/auth/scauth-logout",
                            className: [U.a.icon, U.a.icon_logout].join(" ")
                          },
                          d("Log Out")
                        )
                      )
                    : i.a.createElement(
                        r.Fragment,
                        null,
                        i.a.createElement(
                          "a",
                          { href: "/auth/scauth-login" },
                          d("Sign In")
                        ),
                        i.a.createElement(
                          "a",
                          { href: "/auth/signup" },
                          d("Join Social Club")
                        )
                      )
                )
              ))
        );
      },
      V = a(65),
      q = a.n(V),
      z = e => {
        var { location: t } = e,
          a = t.pathname + t.search,
          n = O(),
          o = [
            { base: "", text: n("English") },
            { base: "/de", text: n("Deutsch") },
            { base: "/fr", text: n("Français") },
            { base: "/it", text: n("Italiano") },
            { base: "/jp", text: n("日本語") },
            { base: "/ru", text: n("Pусский") },
            { base: "/es", text: n("Español (España)") },
            { base: "/mx", text: n("Español (México)") },
            { base: "/br", text: n("Português") },
            { base: "/kr", text: n("한국어") },
            { base: "/zh", text: n("中文（简体）") },
            { base: "/tw", text: n("中文（繁體）") },
            { base: "/pl", text: n("Polski") }
          ],
          [s, l] = Object(r.useState)(!1);
        return i.a.createElement(
          "div",
          { className: [q.a.languageSelector, s ? q.a.open : ""].join(" ") },
          i.a.createElement(
            "button",
            { onClick: () => l(!s) },
            i.a.createElement("i", null),
            i.a.createElement("span", null, n("current-language"))
          ),
          i.a.createElement(
            "div",
            { className: q.a.linkWrapper },
            i.a.createElement(
              "div",
              { className: q.a.links },
              o.map(e =>
                i.a.createElement(
                  P,
                  {
                    key: e.text,
                    to: ""
                      .concat(window.location.origin)
                      .concat(e.base)
                      .concat(a)
                  },
                  e.text
                )
              )
            )
          )
        );
      },
      J = a(28),
      Z = a.n(J),
      Y = e => {
        var t = E(),
          a = Object(l.i)(e => i.a.createElement(z, e)),
          n = O(),
          r = () => {
            t.navOpen.set(!1);
          };
        return i.a.createElement(
          "footer",
          {
            className: [Z.a.siteFooter, t.loading.get ? Z.a.loading : ""].join(
              " "
            )
          },
          i.a.createElement(
            "div",
            { className: Z.a.content },
            i.a.createElement(a, null),
            i.a.createElement(
              "div",
              { className: Z.a.companyInfoLinks },
              i.a.createElement(
                P,
                {
                  to: "mailto:mouthoff@rockstargames.com",
                  onClick: r,
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Mouthoff email"
                },
                n("Mouthoff")
              ),
              i.a.createElement(
                P,
                {
                  to: "mailto:PR@rockstargames.com",
                  onClick: r,
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press email"
                },
                n("Press")
              ),
              i.a.createElement(
                P,
                {
                  to: "/corpinfo",
                  onClick: r,
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Corporate Info"
                },
                n("Corporate")
              ),
              i.a.createElement(
                P,
                {
                  to: "/privacy",
                  onClick: r,
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Privacy"
                },
                n("Privacy")
              ),
              i.a.createElement(
                P,
                {
                  to: "/cookies",
                  onClick: r,
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookies"
                },
                n("Cookies")
              ),
              i.a.createElement(
                P,
                {
                  to: "/legal",
                  onClick: r,
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Legal"
                },
                n("Legal")
              ),
              i.a.createElement(
                P,
                {
                  to: "https://www.rockstargames.com/careers",
                  onClick: r,
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Careers"
                },
                n("Careers")
              ),
              i.a.createElement(
                P,
                {
                  to: "https://socialclub.rockstargames.com/settings/email",
                  onClick: r,
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Social Club",
                  "data-gtm-label": "Manage Subscription Account"
                },
                n("Subscribe")
              )
            ),
            i.a.createElement(
              "div",
              { className: Z.a.social },
              i.a.createElement(P, {
                to: "https://twitch.tv/rockstargames",
                onClick: r,
                target: "_blank",
                className: Z.a.twitch,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitch"
              }),
              i.a.createElement(P, {
                to: "https://instagram.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: Z.a.instagram,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Instagram"
              }),
              i.a.createElement(P, {
                to: "https://twitter.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: Z.a.twitter,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "Twitter"
              }),
              i.a.createElement(P, {
                to: "https://www.youtube.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: Z.a.youtube,
                "data-gtm-category": "Footer",
                "data-gtm-action": "Social Click",
                "data-gtm-label": "YouTube"
              }),
              i.a.createElement(P, {
                to: "https://www.facebook.com/rockstargames",
                onClick: r,
                target: "_blank",
                className: Z.a.facebook,
                "data-gtm-category": "Footer",
                "data-gtm-action": " Social Click",
                "data-gtm-label": "Facebook"
              })
            )
          )
        );
      },
      Q = a(32),
      $ = a.n(Q),
      ee = a(101),
      te = a.n(ee),
      ae =
        (a(193),
        e => {
          var t = E(),
            [a, n] = Object(r.useState)(!1),
            o = O(),
            s = () => {
              t.navOpen.set(!1);
            };
          return i.a.createElement(
            "div",
            { className: $.a.links },
            i.a.createElement(
              P,
              {
                "data-gtm-category": "Site Nav",
                "data-gtm-action": "Main Nav Click",
                "data-gtm-label": "Newswire",
                to: "/newswire",
                onClick: s,
                activeClassName: $.a.active
              },
              o("Newswire")
            ),
            i.a.createElement(
              P,
              {
                "data-gtm-category": "Site Nav",
                "data-gtm-action": "Main Nav Click",
                "data-gtm-label": "Games",
                to: "/games",
                onClick: s,
                activeClassName: $.a.active
              },
              o("Games")
            ),
            i.a.createElement(
              P,
              {
                "data-gtm-category": "Site Nav",
                "data-gtm-action": "Main Nav Click",
                "data-gtm-label": "Videos",
                to: "/videos",
                onClick: s,
                activeClassName: $.a.active
              },
              o("Videos")
            ),
            i.a.createElement(
              P,
              {
                "data-gtm-category": "Site Nav",
                "data-gtm-action": "Main Nav Click",
                "data-gtm-label": "Downloads",
                to: "/downloads",
                onClick: s,
                activeClassName: $.a.active
              },
              o("Downloads")
            ),
            i.a.createElement(
              P,
              {
                "data-gtm-category": "Site Nav",
                "data-gtm-action": "Main Nav Click",
                "data-gtm-label": "Support",
                to: "https://support.rockstargames.com?redirect_lang=".concat(
                  t.locale
                ),
                onClick: s,
                target: "_blank"
              },
              o("Support")
            ),
            i.a.createElement(
              P,
              {
                "data-gtm-category": "Site Nav",
                "data-gtm-action": "Main Nav Click",
                "data-gtm-label": "Socialclub",
                to: "https://socialclub.rockstargames.com/",
                target: "_blank",
                onClick: s
              },
              o("Social Club")
            ),
            i.a.createElement(
              P,
              {
                "data-gtm-category": "Site Nav",
                "data-gtm-action": "Main Nav Click",
                "data-gtm-label": "Launcher",
                to:
                  "https://socialclub.rockstargames.com/rockstar-games-launcher",
                target: "_blank",
                onClick: s
              },
              o("Launcher")
            ),
            i.a.createElement(
              P,
              {
                "data-gtm-category": "Site Nav",
                "data-gtm-action": "Main Nav Click",
                "data-gtm-label": "Warehouse",
                to: "https://warehouse.rockstargames.com",
                onClick: s,
                target: "_blank"
              },
              o("Warehouse")
            )
          );
        }),
      ne = Object(l.i)(e => {
        var t = E(),
          [a, n] = Object(r.useState)(null),
          o = Object(r.useRef)(null),
          s = Object(r.useRef)(null);
        return (
          Object(r.useEffect)(() => {
            var e = e => {
              var t = o.current;
              e.deltaY <= 0
                ? t.scrollTop <= 0 && e.preventDefault()
                : t.scrollTop + t.clientHeight >= t.scrollHeight &&
                  e.preventDefault();
            };
            return (
              o.current.addEventListener("wheel", e),
              () => {
                o.current.removeEventListener("wheel", e);
              }
            );
          }, [o.current && o.current]),
          Object(r.useEffect)(
            () => (
              window.addEventListener("popstate", () => {
                t.navOpen.set(!1);
              }),
              () => {}
            ),
            []
          ),
          Object(r.useEffect)(() => {
            if (null === a) {
              var e = Object.keys(te.a);
              n(te.a[e[(e.length * Math.random()) << 0]]);
            }
          }, [a]),
          i.a.createElement(
            "nav",
            {
              className: [
                $.a.nav,
                t.navOpen.get ? $.a.navOpen : "",
                null !== a ? a : ""
              ].join(" "),
              onClick: e => e.stopPropagation()
            },
            i.a.createElement(
              "div",
              { className: $.a.content, ref: o },
              i.a.createElement(
                "div",
                { className: $.a.searchbox },
                i.a.createElement(R, { ref: s })
              ),
              i.a.createElement(ae, null),
              i.a.createElement(Y, null)
            )
          )
        );
      }),
      re = a(23),
      ie = a.n(re),
      oe = e => {
        var t = E(),
          [a, n] = Object(r.useState)(0);
        return (
          Object(r.useEffect)(() => {
            var e = e => {
              27 === e.keyCode && t.navOpen.set(!1);
            };
            return (
              document.addEventListener("keydown", e, !1),
              () => {
                document.removeEventListener("keydown", e, !1);
              }
            );
          }, []),
          i.a.createElement(
            r.Fragment,
            null,
            i.a.createElement(
              "header",
              {
                className: [
                  ie.a.header,
                  t.navOpen.get ? ie.a.navOpen : "",
                  t.loading.get ? ie.a.loading : ""
                ].join(" ")
              },
              i.a.createElement(
                "div",
                { className: ie.a.menuOpener },
                i.a.createElement(
                  P,
                  {
                    to: "#",
                    onClick: e => {
                      e.preventDefault(), t.navOpen.set(!t.navOpen.get);
                    }
                  },
                  i.a.createElement("span", null),
                  i.a.createElement("span", null),
                  i.a.createElement("span", null)
                )
              ),
              i.a.createElement(
                "div",
                { className: ie.a.logo },
                i.a.createElement(
                  P,
                  {
                    "data-gtm-category": "Mega Nav",
                    "data-gtm-action": "Main Nav",
                    "data-gtm-label": "Main Logo",
                    onClick: () => t.navOpen.set(!1),
                    to: "/"
                  },
                  i.a.createElement("div", {
                    className: [
                      ie.a.logoBlack,
                      t.normalLogo.get ? "" : ie.a.active
                    ].join(" ")
                  }),
                  i.a.createElement("div", {
                    className: [
                      ie.a.logoNormal,
                      t.normalLogo.get ? ie.a.active : ""
                    ].join(" ")
                  })
                )
              ),
              i.a.createElement(
                "div",
                { className: ie.a.signin },
                i.a.createElement(K, null)
              ),
              i.a.createElement("div", { className: ie.a.bg }),
              i.a.createElement("div", { className: ie.a.bgNav })
            ),
            i.a.createElement(ne, null)
          )
        );
      },
      se = Object(l.i)(e => {
        var t = E(),
          a = w();
        return (
          Object(r.useEffect)(() => {
            a({ event: "trackPageview" }),
              e.history.listen(e => {
                a({ event: "trackPageview" });
              });
          }, []),
          i.a.createElement(
            "main",
            {
              role: "main",
              className: [A.a.main, t.navOpen.get ? A.a.navOpen : ""].join(" ")
            },
            e.children
          )
        );
      }),
      le = a(53),
      ce = a.n(le),
      de = e => {
        var t = E();
        return i.a.createElement(
          "div",
          {
            className: [
              ce.a.breadcrumbs,
              t.breadcrumbs.get.links.length ? "" : ce.a.disabled
            ].join(" ")
          },
          i.a.createElement(
            "div",
            { className: ce.a.content },
            i.a.createElement("div", null),
            i.a.createElement(
              "div",
              { className: ce.a.links },
              t.breadcrumbs.get.links.map((e, t) =>
                i.a.createElement(P, { key: t, to: e.href }, e.title)
              )
            ),
            t.breadcrumbs.get.filter
              ? i.a.createElement(
                  "div",
                  { className: ce.a.filter },
                  t.breadcrumbs.get.filter
                )
              : ""
          )
        );
      };
    function me() {
      return (me =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var ue = e => {
        var { className: t, context: a } = e;
        return i.a.createElement(
          P,
          me({}, e, {
            className: [A.a.button, t || "", void 0 !== a ? A.a[a] : ""].join(
              " "
            )
          }),
          e.children
        );
      },
      ge = e => {
        var { children: t, error: a } = e;
        return i.a.createElement(
          "div",
          { className: A.a.errorContainer },
          i.a.createElement("h2", null, a.message),
          a.code
            ? i.a.createElement("h3", null, "Error code: ".concat(a.code))
            : "",
          t
        );
      },
      he = a(10),
      pe = a.n(he),
      ve = e => {
        var { game: t } = e,
          a = void 0 === e.to ? "/games/info/".concat(t.title_slug) : e.to,
          [n, r] = N(t.fob_640);
        return i.a.createElement(P, {
          "data-gtm-category": "Games",
          "data-gtm-action": "Game Click-through",
          "data-gtm-label": "".concat(t.title),
          to: a,
          key: t.id,
          className: [pe.a.game, n ? pe.a.startAnimation : ""].join(" "),
          style: { backgroundImage: "url(".concat(t.fob_640, ")") }
        });
      };
    function fe() {
      return (fe =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var Ee = e => {
        var { context: t, className: a } = e;
        return i.a.createElement(
          "button",
          fe({}, e, {
            className: [
              A.a.button,
              void 0 !== t ? A.a[t] : "",
              void 0 !== a ? a : ""
            ].join(" ")
          }),
          e.children
        );
      },
      _e = a(45),
      be = a.n(_e),
      ye = e => {
        var { onLoad: t, layer: a } = e,
          [n, r] = N(a.src),
          o = { backgroundSize: a.background_size || "cover" };
        return (
          n &&
            a.animation &&
            ((o.animation = a.animation),
            (o.backgroundImage = "url(".concat(a.src, ")"))),
          i.a.createElement("div", { className: be.a.artLayer, style: o })
        );
      },
      we = e => {
        var { active: t, video: a } = e,
          [n, r] = (p(), N(a.screencap));
        return a.art_layers.length
          ? i.a.createElement(
              "div",
              { className: [be.a.screencap, t ? be.a.active : ""].join(" ") },
              a.art_layers.map((e, t) =>
                i.a.createElement(ye, {
                  key: t,
                  layer: e,
                  onLoad: () => {
                    e.loaded = !0;
                  }
                })
              )
            )
          : i.a.createElement("div", {
              className: [
                be.a.screencap,
                be.a.normal,
                t && n ? be.a.active : ""
              ].join(" "),
              style: { backgroundImage: "url(".concat(a.screencap, ")") }
            });
      },
      xe = a(29),
      Se = a.n(xe),
      ke = a(79),
      Ne = a.n(ke),
      Ce = e => {
        var { videos: t } = e,
          [a, n] = Object(r.useState)(0),
          [o, s] = Object(r.useState)(0),
          l = Object(r.useRef)(),
          c = E(),
          d = O();
        p();
        return (
          Object(r.useEffect)(() => {
            var e = new Ne.a(l.current),
              r = e => {
                n(a - 1 < 0 ? 0 : a - 1), s(0);
              },
              i = e => {
                var r = a + 1 >= t.length - 1 ? t.length - 1 : a + 1;
                n(r), s(0);
              },
              o = e => {
                s(e.isFinal ? 0 : e.deltaX);
              },
              c = e => {
                s(0);
              };
            return (
              e.on("swiperight", r),
              e.on("swipeleft", i),
              e.on("pan", o),
              e.on("panend", c),
              () => {
                e.off("swiperight", r),
                  e.off("swipeleft", i),
                  e.off("pan", o),
                  e.off("panend", c),
                  s(0);
              }
            );
          }, [l.current, a]),
          i.a.createElement(
            "section",
            { className: Se.a.carousel },
            i.a.createElement(
              "div",
              {
                className: [Se.a.track, 0 !== o ? Se.a.dragging : ""].join(" "),
                ref: l,
                style: {
                  transform: "translateX(calc(-"
                    .concat(100 * a, "% + ")
                    .concat(o, "px))")
                }
              },
              t.map((e, t) =>
                i.a.createElement(
                  P,
                  {
                    key: e.id,
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": "/videos/video/".concat(e.id),
                    to: "/videos/video/".concat(e.id)
                  },
                  i.a.createElement(we, {
                    key: e.id,
                    video: e,
                    active: a === t
                  })
                )
              )
            ),
            i.a.createElement(
              "footer",
              null,
              i.a.createElement(
                "div",
                { className: Se.a.text },
                t.map((e, t) =>
                  i.a.createElement(
                    P,
                    {
                      "data-gtm-category": "Carousel",
                      "data-gtm-action": "Click-through footer",
                      "data-gtm-label": "/videos/video/".concat(e.id),
                      key: e.id,
                      to: "/videos/video/".concat(e.id)
                    },
                    i.a.createElement(
                      "div",
                      {
                        className: [Se.a.info, t === a ? Se.a.active : ""].join(
                          " "
                        )
                      },
                      i.a.createElement(
                        "div",
                        { className: Se.a.title },
                        ""
                          .concat(e.game.title)
                          .concat("fr_fr" === c.locale ? " " : "", ": ")
                          .concat(e.title)
                      ),
                      i.a.createElement(
                        Ee,
                        { className: Se.a.cta },
                        d("Watch Now")
                      )
                    )
                  )
                )
              ),
              i.a.createElement(
                "div",
                { className: Se.a.dots },
                t.map((e, t) =>
                  i.a.createElement("button", {
                    "data-gtm-category": "Marquee",
                    "data-gtm-action": "Dot click",
                    "data-gtm-label": "Dot clicked to ".concat(t),
                    key: e.id,
                    onClick: e => n(t),
                    className: a === t ? Se.a.active : ""
                  })
                )
              )
            )
          )
        );
      },
      Te = e => {
        var { title: t } = e;
        return i.a.createElement(
          "div",
          { className: A.a.star },
          i.a.createElement("i", null),
          t
        );
      },
      Oe = a(12),
      Me = a.n(Oe),
      Ae = e => {
        O(), p();
        var { post: t, index: a, noSpecialOrder: n } = e,
          r = "";
        r =
          0 !== a || (void 0 !== n && n)
            ? t.preview_images_parsed.newswire_block.square ||
              t.preview_images_parsed.newswire_block.d16x9 ||
              t.preview_images_parsed.newswire_block._fallback
            : t.preview_images_parsed.newswire_block.d16x9 ||
              t.preview_images_parsed.newswire_block.square ||
              t.preview_images_parsed.newswire_block._fallback;
        var [o, s] = N(r),
          l =
            0 !== a || !t.preview_video_player || (void 0 !== n && n)
              ? ""
              : t.preview_video_player,
          d = {};
        return (
          !0 !== o || l || (d = { backgroundImage: "url(".concat(r, ")") }),
          i.a.createElement(
            c.b,
            {
              "data-gtm-category": "Newswire",
              "data-gtm-action": "Article Block Click",
              "data-gtm-label": "".concat(t.title),
              style: e.style ? e.style : {},
              to: "/newswire/article/".concat(t.id, "/").concat(t.name_slug),
              className: [
                Me.a.newswireBlock,
                null !== o ? Me.a.startAnimation : ""
              ].join(" ")
            },
            l
              ? i.a.createElement("div", {
                  dangerouslySetInnerHTML: { __html: l },
                  className: Me.a.preview,
                  style: {
                    "--aspect-ratio":
                      "d_16x9" === t.preview_video_player_ratio ? "16/9" : "1/1"
                  }
                })
              : i.a.createElement("div", { className: Me.a.preview, style: d }),
            i.a.createElement(
              "div",
              { className: Me.a.info },
              t.primary_tags.length
                ? i.a.createElement(Te, {
                    title:
                      t.primary_tags[
                        t.primary_tags.length > 1 &&
                        722 === t.primary_tags[0].id
                          ? 1
                          : 0
                      ].name
                  })
                : "",
              i.a.createElement("h5", {
                className: Me.a.title,
                dangerouslySetInnerHTML: { __html: t.title }
              })
            )
          )
        );
      },
      Re = e => {
        O();
        var t = w(),
          { className: a, noSpecialOrder: n, posts: o } = e;
        return (
          Object(r.useEffect)(() => {
            if (o.length) {
              var e = {
                event: "trackEvent",
                eventCategory: "Home",
                eventAction: "Newswire Impressions",
                ecommerce: { impressions: [] }
              };
              o.map((t, a) => {
                e.ecommerce.impressions.push({
                  name: t.title,
                  id: t.id,
                  position: a + 1,
                  list: "Home"
                });
              }),
                t(e);
            }
          }, [o.length]),
          i.a.createElement(
            "div",
            {
              className: [void 0 !== a ? a : "", Me.a.newswireBlocks].join(" ")
            },
            o.map((e, t) =>
              i.a.createElement(Ae, {
                key: e.id,
                index: t,
                noSpecialOrder: n,
                post: e
              })
            )
          )
        );
      },
      Ie = a(46),
      Pe = a.n(Ie),
      je = e => {
        var t = O(),
          { games: a } = e;
        return i.a.createElement(
          "section",
          { className: Pe.a.games },
          i.a.createElement("h2", null, t("Featured Games")),
          i.a.createElement(
            "div",
            { className: Pe.a.items },
            a.map(e => i.a.createElement(ve, { key: e.id, game: e }))
          ),
          i.a.createElement(
            ue,
            {
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest Games",
              "data-gtm-label": "More Click",
              to: "/games",
              context: "secondary"
            },
            t("View More")
          )
        );
      },
      Be = e => {
        var t = O(),
          { posts: a } = (p(), e);
        return i.a.createElement(
          "section",
          { className: Pe.a.newswire },
          i.a.createElement("h2", null, t("Newswire")),
          i.a.createElement(Re, {
            className: [Pe.a.items, Me.a.contextHome].join(" "),
            posts: a
          }),
          i.a.createElement(
            ue,
            {
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest News",
              "data-gtm-label": "More Click",
              to: "/newswire",
              context: "secondary"
            },
            t("View More")
          )
        );
      },
      Le = () => {
        O();
        return i.a.createElement(
          "section",
          { className: Pe.a.downloads },
          "Downloads..."
        );
      },
      Fe = () => {
        O();
        var e = E(),
          [t, a, n] = k("app/home.json", []);
        if (
          (Object(r.useEffect)(() => {
            e.breadcrumbs.set({ links: [], filter: "" }), e.normalLogo.set(!0);
          }, []),
          Object(r.useEffect)(() => {
            e.loading.set(a);
          }, [a]),
          a)
        )
          return null;
        var { videos: o, posts: s, games: l } = t;
        return i.a.createElement(
          "div",
          { className: Pe.a.home },
          i.a.createElement(Ce, { videos: o }),
          i.a.createElement(Be, { posts: s }),
          i.a.createElement(je, { games: l }),
          i.a.createElement(Le, null)
        );
      },
      He = (a(51), a(66)),
      De = a.n(He),
      Ge = Object(l.i)(e => {
        var { posts: t } = e,
          a = new URLSearchParams(e.location.search),
          n = parseInt(a.get("tag_id")),
          [o, s] = Object(r.useState)(!1),
          [l, c, d] = k("newswire/get-tags.json", []),
          m = O();
        if (c) return null;
        var u = l.featuredTags;
        return i.a.createElement(
          "section",
          { className: [De.a.tagFilterPane, o ? De.a.open : ""].join(" ") },
          i.a.createElement("button", { onClick: () => s(!o) }, m("Filter")),
          i.a.createElement(
            "div",
            { className: De.a.tags },
            u
              ? u.map(e =>
                  i.a.createElement(
                    P,
                    {
                      to:
                        n !== e.tag_id
                          ? "/newswire?tag_id=".concat(e.tag_id)
                          : "/newswire",
                      exact: !0,
                      onClick: e => {
                        s(!1);
                      },
                      key: e.tag_id,
                      className: n === e.tag_id ? De.a.active : ""
                    },
                    e.tag.name
                  )
                )
              : ""
          )
        );
      }),
      Ue = e => {
        var t = O(),
          a = new URLSearchParams(e.location.search),
          n = E(),
          [o, s] = Object(r.useState)(a.get("tag_id")),
          [l, c] = Object(r.useState)(1),
          [d, m] = Object(r.useState)(null),
          [u, g] = Object(r.useState)([]),
          [h, p, v] = k(d, [d]);
        return (
          Object(r.useEffect)(() => {
            c(1), g([]), s(a.get("tag_id") ? parseInt(a.get("tag_id")) : null);
          }, [a.get("tag_id")]),
          Object(r.useEffect)(() => {
            var e = "".concat("newswire/get-posts.json", "?page=").concat(l);
            null !== o && (e += "&tag_id=".concat(o)), m(e);
          }, [o, l]),
          Object(r.useEffect)(() => {
            n.breadcrumbs.set({
              links: [{ href: "/newswire", title: t("Newswire") }],
              filter: i.a.createElement(Ge, null)
            }),
              n.normalLogo.set(!1);
          }, []),
          Object(r.useEffect)(() => {
            n.loading.set(p);
          }, [p]),
          Object(r.useEffect)(() => {
            h && h.posts && g(u.concat(h.posts));
          }, [h]),
          i.a.createElement(
            "div",
            { className: Me.a.newswireIndex },
            u.length
              ? i.a.createElement(
                  r.Fragment,
                  null,
                  i.a.createElement(Re, {
                    posts: u,
                    noSpecialOrder: null !== o,
                    className: [
                      Me.a.items,
                      Me.a.contextNewsIndex,
                      o ? Me.a.noSpecialOrder : ""
                    ].join(" ")
                  }),
                  i.a.createElement(
                    Ee,
                    {
                      onClick: e => c(l + 1),
                      disabled: p,
                      context: "secondary"
                    },
                    t("More Stories")
                  )
                )
              : ""
          )
        );
      },
      We = (a(98), a(22)),
      Xe = a.n(We),
      Ke = e => {
        var { gameTitleNecessary: t, video: a } = e;
        p();
        return i.a.createElement(
          c.b,
          {
            to: "/videos/video/".concat(a.id),
            className: Xe.a.videoPreview,
            "data-gtm-category": "Videos",
            "data-gtm-action": "Video Click-through",
            "data-gtm-label": "/videos/video/".concat(a.id)
          },
          i.a.createElement(we, { video: a, active: !0 }),
          i.a.createElement(
            "div",
            { className: Xe.a.title },
            i.a.createElement("h5", {
              dangerouslySetInnerHTML: { __html: a.title }
            }),
            void 0 === t || t
              ? i.a.createElement("h6", {
                  className: Xe.a.gameTitle,
                  dangerouslySetInnerHTML: { __html: a.game.title }
                })
              : ""
          )
        );
      },
      Ve = a(24),
      qe = a.n(Ve),
      ze = e => {
        var t,
          { vids: a, games: n, title: o, auto: s, gameTitleNecessary: l } = e,
          c = void 0 !== n ? "games" : "videos",
          d = "videos" === c ? a : n,
          m = Object(r.useRef)(null),
          [u, g] = (E(), Object(r.useState)(0)),
          [h, p] = Object(r.useState)(0),
          v = e => {
            var t = Math.ceil(d.length / u);
            e < 0 ? (e = 0) : e >= t - 1 && (e = t - 1), p(e);
          },
          [f, _] = Object(r.useState)(0);
        O();
        return (
          Object(r.useEffect)(() => {
            var e = () => {
              var e = e =>
                  window.matchMedia("(max-width: ".concat(e, ")")).matches,
                t = e("768px")
                  ? 1
                  : e("990px")
                  ? 2
                  : e("1440px")
                  ? 3
                  : e("1920px")
                  ? 4
                  : 5;
              g(t);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, [u]),
          Object(r.useEffect)(() => {
            var e = new Ne.a(m.current),
              t = e => {
                v(h - 1), _(0);
              },
              a = e => {
                v(h + 1), _(0);
              },
              n = e => {
                _(e.isFinal ? 0 : e.deltaX);
              },
              r = e => {
                _(0);
              };
            return (
              e.on("swiperight", t),
              e.on("swipeleft", a),
              e.on("pan", n),
              e.on("panend", r),
              () => {
                e.off("swiperight", t),
                  e.off("swipeleft", a),
                  e.off("pan", n),
                  e.off("panend", r),
                  _(0);
              }
            );
          }, [m.current, h]),
          (t =
            "games" === c
              ? i.a.createElement(
                  r.Fragment,
                  null,
                  n.map(e =>
                    i.a.createElement(ve, {
                      game: e,
                      key: e.id,
                      to: "/videos?type=game&gameId=".concat(e.id)
                    })
                  )
                )
              : i.a.createElement(
                  r.Fragment,
                  null,
                  a.map(e =>
                    i.a.createElement(Ke, {
                      video: e,
                      key: e.id,
                      gameTitleNecessary: l
                    })
                  )
                )),
          i.a.createElement(
            "section",
            { className: qe.a.videoList },
            i.a.createElement(
              "h2",
              null,
              o,
              i.a.createElement(
                "div",
                { className: qe.a.arrowNav },
                i.a.createElement("div", {
                  className: [
                    qe.a.arrow,
                    qe.a.previous,
                    0 === h ? qe.a.disabled : ""
                  ].join(" "),
                  onClick: () => v(h - 1)
                }),
                i.a.createElement("div", {
                  className: [
                    qe.a.arrow,
                    qe.a.next,
                    h === Math.ceil(d.length / u) - 1 ? qe.a.disabled : ""
                  ].join(" "),
                  onClick: () => v(h + 1)
                })
              )
            ),
            i.a.createElement(
              "div",
              { className: qe.a.items },
              i.a.createElement(
                "div",
                { className: qe.a.trackWrapper },
                i.a.createElement(
                  "div",
                  {
                    className: [qe.a.track, 0 !== f ? qe.a.dragging : ""].join(
                      " "
                    ),
                    ref: m,
                    style: {
                      transform: "translateX(calc(-"
                        .concat(100 * h, "% + ")
                        .concat(f, "px - (var(--padding-sides) * ")
                        .concat(h, "))"),
                      gridAutoColumns: "calc(100 / "
                        .concat(u, " * 1% - calc(var(--padding-sides) * (")
                        .concat(u - 1, "/")
                        .concat(u, "))")
                    }
                  },
                  t
                )
              )
            )
          )
        );
      },
      Je = (ze = Object(l.i)(ze)),
      Ze = e => {
        var t = new URLSearchParams(e.location.search),
          a = t.get("type"),
          n = E(),
          [o, s] = Object(r.useState)(null),
          [l, c, d] = k(o, [o]),
          m = O();
        Object(r.useEffect)(() => {
          n.breadcrumbs.set({ links: [], filter: "" }), n.normalLogo.set(!1);
        }, []),
          Object(r.useEffect)(() => {
            n.loading.set(c);
          }, [c]);
        var u = "videos/get-videos.json";
        if (
          (null !== a &&
            (u = "".concat("videos/get-videos.json", "?").concat(t.toString())),
          Object(r.useEffect)(() => {
            s(u);
          }, [u]),
          c || null === l)
        )
          return null;
        if (d) return i.a.createElement(ge, { error: d });
        if (l.gameId)
          return i.a.createElement(
            "div",
            { className: Xe.a.videosIndex },
            i.a.createElement(Je, {
              vids: l.videos,
              title: m("Videos from %s").replace("%s", l.game.title)
            })
          );
        var { gtao: g, gtaosessions: h, latest: p, rdo: v } = l.videos,
          { games: f } = l;
        return i.a.createElement(
          "div",
          { className: Xe.a.videosIndex },
          a
            ? ""
            : i.a.createElement(
                r.Fragment,
                null,
                i.a.createElement(
                  "section",
                  { className: Xe.a.latest },
                  p.map(e => i.a.createElement(Ke, { video: e, key: e.id }))
                ),
                i.a.createElement(Je, {
                  vids: v,
                  gameTitleNecessary: !1,
                  title: m("Videos from %s").replace("%s", "Red Dead Online")
                }),
                i.a.createElement(Je, {
                  vids: g,
                  gameTitleNecessary: !1,
                  title: m("Videos from %s").replace("%s", "GTA Online")
                }),
                i.a.createElement(Je, {
                  vids: h,
                  title: m("GTA Online Sessions Episodes")
                }),
                i.a.createElement(Je, { games: f, title: m("By Game") })
              )
        );
      },
      Ye =
        (a(77),
        e => {
          var { videoId: t } = Object(l.h)(),
            a = E(),
            [n, o, s] = k(
              "videos/get-video-information/".concat(parseInt(t), ".json"),
              [t]
            ),
            [d, m] = Object(r.useState)(!1),
            u = (p(), O());
          if (
            (Object(r.useEffect)(() => {
              a.breadcrumbs.set({
                links: [{ href: "/videos", title: u("Videos") }],
                filter: ""
              }),
                a.normalLogo.set(!1);
            }, []),
            Object(r.useEffect)(() => {
              a.loading.set(o);
            }, [o]),
            o)
          )
            return null;
          if (null !== s && 404 === s.code)
            return i.a.createElement(l.a, { to: "/videos" });
          var { video: g, related: h } = n;
          return i.a.createElement(
            "div",
            { className: Xe.a.videoInfo },
            i.a.createElement(
              "section",
              { className: Xe.a.marquee },
              i.a.createElement(
                "div",
                { className: Xe.a.embed },
                i.a.createElement("iframe", {
                  allowFullScreen: !0,
                  src: "https://"
                    .concat(
                      "stage.rockstargames.com" === window.location.host
                        ? "www.rockstargames.com"
                        : window.location.host,
                      "/videoplayer/?id="
                    )
                    .concat(g.id, "&locale=")
                    .concat(a.locale, "&context=site&autoplay=true")
                })
              ),
              i.a.createElement(
                "div",
                { className: Xe.a.details },
                i.a.createElement("h2", null, g.title),
                i.a.createElement(
                  "h3",
                  null,
                  i.a.createElement(
                    c.b,
                    {
                      to: "/videos?type=game&gameId=".concat(
                        g.game.sku_id ? g.game.sku_id : g.game.id
                      )
                    },
                    g.game.title
                  )
                ),
                i.a.createElement(
                  "time",
                  { dateTime: g.created },
                  g.created_formatted
                ),
                i.a.createElement("p", {
                  dangerouslySetInnerHTML: { __html: g.description }
                })
              )
            ),
            h.length
              ? i.a.createElement(Je, { vids: h, title: u("Related Videos") })
              : ""
          );
        }),
      Qe = (a(95), a(43)),
      $e = a.n(Qe),
      et = a(1),
      tt = a.n(et),
      at = e => {
        var [t, a] = Object(r.useState)(!1),
          n = $e.a.sanitize,
          { links: o, collectionId: s, name: l, title: c } = e,
          d = O(),
          m = p(),
          u = Object(r.useRef)(),
          g = e => {
            u.current.contains(e.target) || a(!1);
          };
        return (
          Object(r.useEffect)(
            () => (
              t
                ? document.addEventListener("mousedown", g)
                : document.removeEventListener("mousedown", g),
              () => {
                document.removeEventListener("mousedown", g);
              }
            ),
            [t]
          ),
          i.a.createElement(
            "div",
            { ref: u, className: tt.a.dropdownWrapper },
            i.a.createElement(
              "div",
              { className: tt.a.header, onClick: () => a(!t) },
              i.a.createElement(
                "div",
                { className: [tt.a.title, m.sectionHeader].join(" ") },
                i.a.createElement("p", null, l || d("Select Retailer")),
                i.a.createElement("div", {
                  className: [tt.a.caret, t ? tt.a.open : ""].join(" ")
                })
              )
            ),
            i.a.createElement(
              "ul",
              { className: [tt.a.list, t ? tt.a.open : ""].join(" ") },
              [11, 10, 12, 13, 14, 15].includes(s)
                ? i.a.createElement("li", {
                    className: tt.a.item,
                    dangerouslySetInnerHTML: { __html: n(o) }
                  })
                : o.map(e => {
                    if ("thumb" !== e.label)
                      return i.a.createElement(
                        "li",
                        { key: e.id, className: tt.a.item },
                        i.a.createElement(
                          P,
                          {
                            target: "_blank",
                            to: e.src,
                            "data-gtm-category": "Downloads",
                            "data-gtm-action": "Collection : ".concat(c),
                            "data-gtm-label": e.src
                          },
                          e.label
                        )
                      );
                  })
            )
          )
        );
      },
      nt = e => {
        E();
        var t = p(),
          a = O(),
          { collection: n, imgRatio: o, type: s, homePage: l, limit: c } = e;
        return i.a.createElement(
          "div",
          { className: tt.a.collection },
          i.a.createElement(
            "h2",
            { className: t.sectionHeader },
            "gamespcmac" === s && l && n.collections
              ? n.collections[0].title
              : "gamespcmac" !== s || l
              ? "misc" === s
                ? a("Miscellaneous")
                : n.title
              : n.collection.title
          ),
          i.a.createElement(
            "div",
            { className: [tt.a.grid, tt.a[s]].join(" ") },
            !["patches", "sharkcards", "apps", "gamespcmac", "misc"].includes(
              s
            ) &&
              n.series.map(e =>
                i.a.createElement(
                  P,
                  {
                    key: e.id,
                    to: "/downloads?collection="
                      .concat(n.id, "&series=")
                      .concat(e.id),
                    "data-gtm-category": "Downloads",
                    "data-gtm-action": "Collection : ".concat(n.title),
                    "data-gtm-label": e.title
                  },
                  i.a.createElement("div", {
                    className: tt.a.img,
                    style: Object.assign(
                      {},
                      {
                        backgroundImage:
                          "music" === s
                            ? e.musics
                              ? "url(".concat(e.musics[0].thumb, ")")
                              : ""
                            : "dlc" === s
                            ? e.dlcs
                              ? "url(".concat(e.dlcs[0].thumb, ")")
                              : ""
                            : "url(".concat(e.preview, ")")
                      },
                      { "--aspect-ratio": o }
                    )
                  }),
                  "music" === s || "dlc" === s
                    ? ""
                    : i.a.createElement("h5", null, e.title)
                )
              ),
            "patches" === s &&
              n.patches.map(e =>
                i.a.createElement(
                  P,
                  {
                    key: e.id,
                    to: e.support_url,
                    "data-gtm-category": "Downloads",
                    "data-gtm-action": "Collection : Patches",
                    "data-gtm-label": e.game.title
                  },
                  i.a.createElement("div", {
                    className: [tt.a.img, t[o]].join(" "),
                    style: Object.assign(
                      {},
                      { backgroundImage: "url(".concat(e.game.fob_1280, ")") },
                      { "--aspect-ratio": o }
                    )
                  })
                )
              ),
            "sharkcards" === s &&
              n.shark_cards.map(e =>
                i.a.createElement(
                  "div",
                  { key: e.id },
                  i.a.createElement("div", {
                    className: tt.a.img,
                    style: Object.assign(
                      {},
                      { backgroundImage: "url(".concat(e.preview, ")") },
                      { "--aspect-ratio": o }
                    )
                  }),
                  i.a.createElement(
                    "p",
                    { className: tt.a.label },
                    e.title,
                    i.a.createElement("br", null),
                    e.desc
                  ),
                  i.a.createElement(at, {
                    collectionId: n.id,
                    links: e.platform
                  })
                )
              ),
            "apps" === s &&
              n.apps
                .slice(0, c)
                .map(e =>
                  i.a.createElement(
                    "div",
                    { key: e.id },
                    i.a.createElement("div", {
                      className: tt.a.img,
                      style: Object.assign(
                        {},
                        { backgroundImage: "url(".concat(e.preview, ")") },
                        { "--aspect-ratio": o }
                      )
                    }),
                    i.a.createElement(at, {
                      collectionId: n.id,
                      links: e.platform
                    })
                  )
                ),
            "gamespcmac" === s &&
              n.games
                .slice(0, c)
                .map(e =>
                  i.a.createElement(
                    r.Fragment,
                    { key: e.id },
                    e.title
                      ? i.a.createElement(
                          "div",
                          null,
                          i.a.createElement("div", {
                            className: tt.a.img,
                            style: Object.assign(
                              {},
                              {
                                backgroundImage: "url(".concat(e.fob_1280, ")")
                              },
                              { "--aspect-ratio": o }
                            )
                          }),
                          i.a.createElement(at, {
                            collectionId: l
                              ? n.collections[0].id
                              : n.collection.id,
                            links: e.downloads_games[0].platform
                          })
                        )
                      : ""
                  )
                ),
            "misc" === s &&
              n.map(e => {
                if (![14, 15].includes(e.id))
                  return i.a.createElement(
                    r.Fragment,
                    { key: e.id },
                    i.a.createElement(
                      "div",
                      { className: tt.a.misc },
                      i.a.createElement(
                        P,
                        {
                          to: "/downloads?collection=".concat(e.id),
                          "data-gtm-category": "Downloads",
                          "data-gtm-action": "Collection : Misc",
                          "data-gtm-label": e.title
                        },
                        i.a.createElement("div", {
                          className: tt.a.img,
                          style: Object.assign(
                            {},
                            { backgroundImage: "url(".concat(e.preview, ")") },
                            { "--aspect-ratio": o }
                          )
                        })
                      ),
                      i.a.createElement("h5", null, e.title)
                    )
                  );
              }),
            "goldbars" === s &&
              n.gold_bars.map(e =>
                i.a.createElement(
                  "div",
                  { key: e.id },
                  i.a.createElement("div", {
                    className: tt.a.img,
                    style: Object.assign(
                      {},
                      { backgroundImage: "url(".concat(e.preview, ")") },
                      { "--aspect-ratio": o }
                    )
                  }),
                  i.a.createElement(at, {
                    collectionId: n.id,
                    links: e.platform
                  })
                )
              )
          ),
          ["apps", "gamespcmac"].includes(s) && l
            ? i.a.createElement(
                "div",
                { className: tt.a.viewBtn },
                i.a.createElement(
                  P,
                  {
                    to: "/downloads?collection=".concat(
                      "apps" === s ? "10" : "11"
                    ),
                    "data-gtm-category": "Downloads",
                    "data-gtm-action": "Collection : View All",
                    "data-gtm-label": s
                  },
                  a("View All")
                )
              )
            : ""
        );
      },
      rt = e => {
        var { featured: t } = e,
          a = O(),
          [n, o] = Object(r.useState)(null);
        return (
          Object(r.useEffect)(() => {
            t.games.map(e => {
              e.id && 912 == e.id && o(e);
            });
          }, []),
          i.a.createElement(
            "div",
            { className: tt.a.featured },
            i.a.createElement("h2", null, a("Featured Downloads")),
            n
              ? i.a.createElement(
                  "div",
                  { className: [tt.a.grid, tt.a.featuredTop].join(" ") },
                  i.a.createElement("div", {
                    className: [tt.a.rdr2, tt.a.img].join(" "),
                    style: { "--aspect-ratio": "1/1" }
                  }),
                  i.a.createElement(
                    "div",
                    { className: tt.a.featuredDesc },
                    i.a.createElement("h1", null, n.title),
                    i.a.createElement("p", null, n.translation.description),
                    i.a.createElement(
                      ue,
                      {
                        to:
                          "https://socialclub.rockstargames.com/store/rdr2Ultimate",
                        target: "_blank",
                        "data-gtm-category": "Downloads",
                        "data-gtm-action": "Collection : Red Dead Redemption 2",
                        "data-gtm-label":
                          "https://socialclub.rockstargames.com/store/rdr2Ultimate"
                      },
                      a("Download Now")
                    )
                  )
                )
              : "",
            i.a.createElement(
              "div",
              { className: [tt.a.grid, tt.a.featured].join(" ") },
              i.a.createElement(
                P,
                {
                  to:
                    "https://socialclub.rockstargames.com/rockstar-games-launcher",
                  target: "_blank",
                  "data-gtm-category": "Downloads",
                  "data-gtm-action": "Collection : Rockstar Games Launcher",
                  "data-gtm-label":
                    "https://socialclub.rockstargames.com/rockstar-games-launcher"
                },
                i.a.createElement("div", {
                  className: [tt.a.launcher, tt.a.img].join(" "),
                  style: { "--aspect-ratio": "780/373" }
                }),
                i.a.createElement("h5", null, a("Rockstar Games Launcher"))
              ),
              i.a.createElement(
                P,
                {
                  to:
                    "https://www.rockstargames.com/reddeadredemption2/downloads",
                  target: "_blank",
                  "data-gtm-category": "Downloads",
                  "data-gtm-action": "Collection : Red Dead Redemption 2",
                  "data-gtm-label":
                    "https://www.rockstargames.com/reddeadredemption2/downloads"
                },
                i.a.createElement("div", {
                  className: [tt.a.companion, tt.a.img].join(" "),
                  style: { "--aspect-ratio": "780/373" }
                }),
                i.a.createElement(
                  "h5",
                  null,
                  a("Red Dead Redemption 2 Companion App")
                )
              ),
              i.a.createElement(
                P,
                {
                  to: "/downloads?collection=14",
                  "data-gtm-category": "Downloads",
                  "data-gtm-action": "Collection : GTA Online",
                  "data-gtm-label": "/downloads?collection=14"
                },
                i.a.createElement("div", {
                  className: [tt.a.sharkCards, tt.a.img].join(" "),
                  style: { "--aspect-ratio": "780/373" }
                }),
                i.a.createElement("h5", null, a("GTA Online Shark Cards"))
              ),
              i.a.createElement(
                P,
                {
                  to: "/downloads?collection=15",
                  "data-gtm-category": "Downloads",
                  "data-gtm-action": "Collection : Red Dead Redemption 2",
                  "data-gtm-label": "/downloads?collection=15"
                },
                i.a.createElement("div", {
                  className: [tt.a.goldBars, tt.a.img].join(" "),
                  style: { "--aspect-ratio": "780/373" }
                }),
                i.a.createElement("h5", null, a("Red Dead Online Gold Bars"))
              )
            ),
            i.a.createElement(nt, {
              type: "gamespcmac",
              collection: t,
              imgRatio: "64/79",
              homePage: !0,
              limit: 4
            }),
            i.a.createElement(nt, {
              type: "apps",
              collection: t.collections[1],
              imgRatio: "1/1",
              homePage: !0,
              limit: 4
            }),
            i.a.createElement(nt, {
              type: "misc",
              collection: t.collections,
              imgRatio: "1/1",
              homePage: !0
            })
          )
        );
      },
      it = e => {
        var { series: t, seriesId: a, imgRatio: n, type: o } = e,
          s = (p(), O());
        return i.a.createElement(
          r.Fragment,
          null,
          i.a.createElement(
            "h2",
            null,
            t.collection.title,
            ":",
            " ",
            t.collection.series ? t.collection.series[0].title : ""
          ),
          i.a.createElement(
            "div",
            { className: [tt.a.grid, tt.a[o]].join(" ") },
            t.collection.series[0].id == a &&
              t.collection.series.map(e => {
                var { groups: a } = e;
                return a.map(e =>
                  i.a.createElement(
                    "div",
                    { key: e.id },
                    i.a.createElement("div", {
                      className: tt.a.img,
                      style: Object.assign(
                        {},
                        {
                          backgroundImage: "url(".concat(
                            "music" === o || "dlc" === o ? e.thumb : e.preview,
                            ")"
                          )
                        },
                        { "--aspect-ratio": n }
                      )
                    }),
                    i.a.createElement("h5", null, s(e.label)),
                    i.a.createElement(at, {
                      links:
                        "dlc" === o || "music" === o
                          ? e.platform
                          : "gamescreensaver" === o
                          ? e.screensavers
                          : "gamewallpaper" === o || "rockstarwallpaper" === o
                          ? e.wallpapers
                          : e.avatars,
                      collectionId: t.collection.id,
                      title: t.collection.series[0].title,
                      name: [
                        "gamewallpaper",
                        "avatars",
                        "rockstarwallpaper"
                      ].includes(o)
                        ? s("Select Size")
                        : ""
                    })
                  )
                );
              })
          )
        );
      },
      ot = e => {
        var t = new URLSearchParams(e.location.search),
          a = E(),
          [n, o] = Object(r.useState)(null),
          s = parseInt(t.get("collection")),
          l = parseInt(t.get("series")),
          c = O(),
          d =
            !isNaN(s) && isNaN(l)
              ? "downloads/get-collection-data.json?collectionId=".concat(s)
              : isNaN(l)
              ? "downloads/get-featured-downloads.json"
              : "downloads/get-series-data.json?collectionId="
                  .concat(s, "&seriesId=")
                  .concat(l),
          [m, u, g] = k(n, [n]);
        Object(r.useEffect)(() => {
          a.breadcrumbs.set({
            links: [{ href: "/downloads", title: c("Downloads") }],
            filter: ""
          }),
            a.normalLogo.set(!0);
        }, []),
          Object(r.useEffect)(() => {
            o(d);
          }, [d]);
        var h = "",
          p = !u && m && m.collection;
        if (
          (m &&
            isNaN(s) &&
            isNaN(l) &&
            (h = i.a.createElement(rt, { featured: m })),
          p &&
            isNaN(l) &&
            (h = i.a.createElement(nt, {
              type: p.title_slug,
              collection: "gamespcmac" === p.title_slug ? m : p,
              imgRatio: [6, 10, 15].includes(p.id)
                ? "1/1"
                : [9, 11, 12, 13].includes(p.id)
                ? "64/79"
                : [14].includes(p.id)
                ? "7/5"
                : "16/9"
            })),
          m && !u && !isNaN(l))
        ) {
          var v = [6, 12, 13].includes(parseInt(m.collectionId))
            ? "1/1"
            : "16/9";
          h = i.a.createElement(it, {
            series: m,
            imgRatio: v,
            type: m.collection.title_slug,
            seriesId: l
          });
        }
        return i.a.createElement("div", { className: tt.a.index }, h);
      },
      st = () => {
        var e = E(),
          [t, a, n] = k("games/get-games.json", []);
        if (
          (Object(r.useEffect)(() => {
            e.breadcrumbs.set({ links: [], filter: "" }), e.normalLogo.set(!0);
          }, []),
          Object(r.useEffect)(() => {
            e.loading.set(a);
          }, [a]),
          a)
        )
          return null;
        var { games: o } = t;
        return i.a.createElement(
          "div",
          { className: pe.a.gamesIndex },
          o.map(e => i.a.createElement(ve, { game: e, key: e.id }))
        );
      },
      lt = e => {
        var { data: t, onPageUpdate: a, page: n } = e;
        return i.a.createElement(
          "a",
          {
            href: "#",
            className: n === t.page ? A.a.active : "",
            onClick: e => {
              e.preventDefault(), a(n);
            }
          },
          e.children
        );
      },
      ct = e => {
        var { data: t, onPageUpdate: a } = e;
        if (1 === t.pageCount) return null;
        var n = Array.from(
          new Array(Math.min(t.pageCount, 8)),
          (e, a) =>
            a + Math.min(Math.max(t.pageCount - 8, 1), Math.max(2, t.page - 4))
        );
        return i.a.createElement(
          "div",
          { className: A.a.paging },
          t.pageCount > 8
            ? i.a.createElement(lt, { data: t, onPageUpdate: a, page: 1 }, "1")
            : "",
          n.map(e =>
            i.a.createElement(
              lt,
              { data: t, key: e, onPageUpdate: a, page: e },
              e
            )
          ),
          t.pageCount > 8
            ? i.a.createElement(
                lt,
                { data: t, onPageUpdate: a, page: t.pageCount },
                t.pageCount
              )
            : ""
        );
      },
      dt = a(39),
      mt = a.n(dt);
    function ut() {
      return (ut =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a)
              Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var gt = e => {
        var t = new URLSearchParams(e.location.search),
          a = E(),
          {
            paging: n,
            q: o,
            tab: s,
            totalResultCount: l,
            totalSections: c
          } = e.preflight,
          d = t.get("tab") ? t.get("tab") : null !== s ? s : "",
          m = d.charAt(0).toUpperCase() + d.slice(1),
          u = {
            q: t.get("q") ? t.get("q") : "",
            page: t.get("page") ? parseInt(t.get("page")) : 1,
            tab: d,
            direction: "desc",
            sort: m + (t.get("sort") ? t.get("sort") : "__searchScore")
          },
          g = Object.keys(u)
            .map(e => e + "=" + u[e])
            .join("&"),
          [h, p, v] = k("search/query.json?".concat(g), [t.toString()]);
        O();
        return (
          a.loading.set(p),
          i.a.createElement(
            r.Fragment,
            null,
            i.a.createElement(pt, { preflight: e.preflight, currentTab: d }),
            p ? "" : i.a.createElement(ht, { results: h }),
            h && h.paging[m]
              ? i.a.createElement(
                  "section",
                  { className: mt.a.paging },
                  i.a.createElement(ct, {
                    data: h.paging[m],
                    onPageUpdate: t => {
                      u.page = t;
                      var a = Object.keys(u)
                        .map(e => e + "=" + u[e])
                        .join("&");
                      e.history.push("/search?".concat(a));
                    }
                  })
                )
              : ""
          )
        );
      },
      ht = e => {
        var { results: t } = e,
          a = "";
        switch (t.tab) {
          case "posts":
            a = t.posts.map(e =>
              i.a.createElement(Ae, { key: e.id, post: e, index: "1" })
            );
            break;
          case "games":
            a = t.games.map(e => i.a.createElement(ve, { key: e.id, game: e }));
            break;
          case "videos":
            a = t.videos.map(e =>
              i.a.createElement(Ke, { key: e.id, video: e })
            );
        }
        return i.a.createElement(
          "section",
          { className: mt.a.results },
          i.a.createElement("div", { className: mt.a.items }, a)
        );
      },
      pt = e => {
        var {
            paging: t,
            q: a,
            totalResultCount: n,
            totalSections: r
          } = e.preflight,
          { currentTab: o } = e,
          s = O(),
          l = Object.entries(t).map(e => {
            var t = e[0],
              n = e[1],
              { count: r } = n;
            if (r)
              return i.a.createElement(
                P,
                {
                  key: t,
                  className: o === t.toLowerCase() ? mt.a.active : "",
                  activeClassName: "",
                  to: "/search?q="
                    .concat(a, "&tab=")
                    .concat(t.toLowerCase(), "&sort=__searchScore&page=1")
                },
                s(t),
                " ",
                i.a.createElement("span", null, "(", r, ")")
              );
          });
        return i.a.createElement("section", { className: mt.a.nav }, l);
      },
      vt = e => {
        var t = E(),
          a = new URLSearchParams(e.location.search).get("q"),
          [n, o, s] = k("search/query.json?q=".concat(a, "&preflight=true"), [
            a
          ]),
          l = O(),
          c = n && n.totalResultCount;
        return (
          t.loading.set(o),
          Object(r.useEffect)(() => {
            t.search.set(a);
          }, [a]),
          i.a.createElement(
            "div",
            { className: mt.a.searchIndex },
            i.a.createElement(
              "section",
              { className: mt.a.top },
              o ? i.a.createElement("h3", null, l("search-active")) : "",
              s ? i.a.createElement(ge, { error: s }) : "",
              o || c
                ? ""
                : i.a.createElement("h3", null, l("search-over-empty")),
              !o && c
                ? i.a.createElement(
                    "h3",
                    null,
                    l("Search Results for %s").replace("%s", a)
                  )
                : "",
              i.a.createElement(R, null)
            ),
            !o && c ? i.a.createElement(gt, ut({}, e, { preflight: n })) : ""
          )
        );
      },
      ft = a(5),
      Et = a.n(ft),
      _t = e => {
        var { children: t, className: a, style: n } = e;
        return i.a.createElement(
          "div",
          {
            className: [Et.a.newswireFull, void 0 !== a ? a : ""].join(" "),
            style: n
          },
          t
        );
      },
      bt = e => {
        var { children: t, src: a, className: n, animate: r } = e,
          [o, s] = N(a),
          l = void 0 !== e.style ? e.style : {};
        return o
          ? ((l.backgroundImage = "url(".concat(a, ")")),
            i.a.createElement(
              "div",
              {
                className: [
                  Et.a.responsiveImage,
                  r ? Et.a.animateBox : "",
                  void 0 !== n ? n : ""
                ].join(" "),
                style: l
              },
              i.a.createElement("span", {
                style: {
                  paddingBottom: "".concat((s.height / s.width) * 100, "%")
                }
              })
            ))
          : null;
      },
      yt = e => {
        var { children: t, className: a, style: n } = e;
        return i.a.createElement(
          "section",
          {
            className: [Et.a.responsiveSection, void 0 !== a ? a : ""].join(
              " "
            ),
            style: n
          },
          t
        );
      },
      wt = e => {
        var { children: t, cols: a, className: n, rows: r } = e,
          o = e.style;
        return (
          void 0 === o && (o = {}),
          void 0 !== a &&
            (o.gridTemplateColumns = "repeat(".concat(a, ", 1fr)")),
          void 0 !== r && (o.gridTemplateRows = "repeat(".concat(r, ", 1fr)")),
          i.a.createElement(
            "div",
            {
              className: [Et.a.responsiveGridBox, void 0 !== n ? n : ""].join(
                " "
              ),
              style: o
            },
            t
          )
        );
      },
      xt = e => {
        var { children: t, className: a, style: n } = e;
        return i.a.createElement(
          "div",
          {
            className: [Et.a.responsiveFlexBox, void 0 !== a ? a : ""].join(
              " "
            ),
            style: n
          },
          t
        );
      },
      St = e => {
        var { children: t, className: a, style: n } = e;
        return i.a.createElement(
          "div",
          {
            className: [Et.a.responsiveGridItem, void 0 !== a ? a : ""].join(
              " "
            ),
            style: n
          },
          t
        );
      },
      kt = e => {
        var { children: t, className: a, style: n } = e;
        return i.a.createElement(
          "div",
          {
            className: [Et.a.responsiveFlexItem, void 0 !== a ? a : ""].join(
              " "
            ),
            style: n
          },
          t
        );
      },
      Nt = e => {
        var { article: t, className: a } = e,
          n = t.primary_tags.length ? t.primary_tags[0].name : null;
        return null === n
          ? null
          : t.primary_tags.length
          ? i.a.createElement(
              "div",
              { className: [Et.a.tag, void 0 !== a ? a : ""].join(" ") },
              i.a.createElement(
                P,
                { to: "/newswire?tag_id=".concat(t.primary_tags[0].id) },
                n
              )
            )
          : "";
      },
      Ct = e => {
        var { children: t, href: a, style: n } = e;
        return i.a.createElement(
          "div",
          { className: Et.a.cta, style: n },
          i.a.createElement("a", { href: a, target: "_blank" }, t)
        );
      },
      Tt = e => {
        var { pct: t, bgColor: a, primaryColor: n } = e;
        return i.a.createElement(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: "20px",
              backgroundColor: a
            }
          },
          i.a.createElement("div", {
            className: Et.a.barGrow,
            style: {
              backgroundColor: n,
              position: "absolute",
              top: "0",
              left: "0",
              width: "".concat(t, "%"),
              height: "100%"
            }
          })
        );
      },
      Ot = e => {
        var t = Object(r.useRef)();
        return (
          Object(r.useEffect)(() => {
            new IntersectionObserver(e => {
              e.forEach(e => {
                e.isIntersecting && e.target.classList.add([Et.a.visible]);
              });
            }).observe(t.current);
          }, []),
          i.a.createElement(
            "div",
            { className: [Et.a.fadeArea].join(" "), ref: t },
            e.children
          )
        );
      },
      Mt = e => {
        var { posts: t } = e,
          a = O();
        return i.a.createElement(
          "section",
          { className: Me.a.related },
          i.a.createElement("h2", null, a("Related Stories")),
          i.a.createElement(
            "div",
            { className: Me.a.posts },
            t.map(e =>
              i.a.createElement(Ae, { key: e.id, index: 999, post: e })
            )
          )
        );
      },
      At = a(52),
      Rt = a.n(At),
      It = a(40),
      Pt = a.n(It),
      jt = () => {
        var { articleId: e, articleSlug: t } = Object(l.h)(),
          a = O(),
          o = E(),
          [s, c, d] = k("newswire/get-article/".concat(parseInt(e), ".json"), [
            e
          ]);
        if (
          (Object(r.useEffect)(() => {
            o.loading.set(c);
          }, [c]),
          Object(r.useEffect)(() => {
            o.breadcrumbs.set({
              links: [{ href: "/newswire", title: a("Newswire") }],
              filter: ""
            }),
              o.normalLogo.set(!1);
          }, []),
          Object(r.useEffect)(() => {
            window.instgrm.Embeds.process(), twttr.widgets.load();
          }, [c, s && s.article]),
          c)
        )
          return null;
        if (null !== d && 404 === d.code)
          return i.a.createElement(l.a, { to: "/newswire" });
        var { article: m, related: u } = s;
        return m.id !== parseInt(e)
          ? null
          : m.name_slug !== t
          ? i.a.createElement(l.a, {
              to: "/newswire/article/".concat(m.id, "/").concat(m.name_slug)
            })
          : null !== m.posts_jsx
          ? ((Rt.a.defaultProps.renderInWrapper = !1),
            i.a.createElement(
              r.Fragment,
              null,
              i.a.createElement(
                "div",
                {
                  className: [
                    Pt.a.newswireArticleJsx,
                    Pt.a.newswireArticle
                  ].join(" ")
                },
                i.a.createElement(Rt.a, {
                  bindings: {
                    getArray: (e, t) => e[t],
                    renderHtml: e =>
                      i.a.createElement("span", {
                        key: e,
                        dangerouslySetInnerHTML: { __html: e }
                      }),
                    article: m,
                    variables: m.posts_jsx.variables_us_defaulted,
                    locale: o.locale,
                    _t: a
                  },
                  components: n,
                  jsx: m.posts_jsx.markup,
                  onError: e => {}
                })
              ),
              i.a.createElement(
                "div",
                { className: Pt.a.jsxFooter },
                u ? i.a.createElement(Mt, { posts: u }) : ""
              )
            ))
          : i.a.createElement(
              "div",
              {
                className: [Pt.a.newswireArticleOG, Pt.a.newswireArticle].join(
                  " "
                )
              },
              m.primary_tags.length
                ? i.a.createElement(Te, {
                    title:
                      m.primary_tags[
                        m.primary_tags.length > 1 &&
                        722 === m.primary_tags[0].id
                          ? 1
                          : 0
                      ].name
                  })
                : "",
              i.a.createElement(
                "h1",
                null,
                m.title,
                m.subtitle ? i.a.createElement("span", null, m.subtitle) : ""
              ),
              m.posts_hero && "iframe" === m.posts_hero.type
                ? i.a.createElement(
                    "div",
                    { className: Pt.a.hero },
                    i.a.createElement("iframe", {
                      src:
                        "stage.rockstargames.com" === window.location.host
                          ? "https://www.rockstargames.com/".concat(
                              m.posts_hero.hero
                            )
                          : m.posts_hero.hero
                    })
                  )
                : "",
              i.a.createElement("div", {
                className: Pt.a.body,
                dangerouslySetInnerHTML: { __html: m.content }
              }),
              u ? i.a.createElement(Mt, { posts: u }) : ""
            );
      },
      Bt = (a(204), a(139), a(67)),
      Lt = a.n(Bt),
      Ft = e => {
        var { children: t, className: a, title: n } = e,
          [o, s] = Object(r.useState)(!1);
        return i.a.createElement(
          "div",
          {
            className: [
              Lt.a.dropdownWrapper,
              o ? Lt.a.open : "",
              void 0 !== a ? a : ""
            ].join(" ")
          },
          i.a.createElement(
            "button",
            { className: Lt.a.opener, onClick: () => s(!o) },
            n
          ),
          i.a.createElement(
            "div",
            { className: Lt.a.items, onClick: () => s(!1) },
            t
          )
        );
      },
      Ht = e => {
        var { game: t, _t: a } = e;
        return i.a.createElement("h1", { className: pe.a.title }, t.title);
      },
      Dt = e => {
        var { game: t, _t: a } = e,
          n = [],
          r = [];
        return (
          t.developers.map(e => {
            r.push(e.title);
          }),
          t.platforms.map(e => {
            n.push(e.name);
          }),
          i.a.createElement(
            qt,
            { title: a("Specifications") },
            i.a.createElement(
              "div",
              { className: pe.a.specsList },
              i.a.createElement(Vt, { title: a("Developer") }, r.join(", ")),
              i.a.createElement(Vt, { title: a("Platform") }, n.join(", ")),
              i.a.createElement(
                Vt,
                { title: a("Release Date") },
                t.release_date_in_words
              ),
              i.a.createElement(
                Vt,
                {
                  className: pe.a.rating,
                  title: i.a.createElement(
                    P,
                    { to: t.url_rating, target: "_blank" },
                    i.a.createElement("img", { src: t.img_rating })
                  )
                },
                t.rating_descriptors
              )
            )
          )
        );
      },
      Gt = e => {
        var { screens: t, _t: a } = e;
        return i.a.createElement(
          qt,
          { c: !0, title: a("Screens") },
          i.a.createElement(
            "div",
            { className: pe.a.screenList },
            t.map(e =>
              i.a.createElement("div", {
                key: e,
                style: { backgroundImage: "url(".concat(e, ")") }
              })
            )
          )
        );
      },
      Ut = e => {
        var { game: t, _t: a } = e,
          [n, o] = Object(r.useState)(!1),
          s = i.a.createElement("p", {
            dangerouslySetInnerHTML: { __html: t.description }
          }),
          l = t.description.includes("<br>");
        return i.a.createElement(
          qt,
          { className: pe.a.infoSection },
          l
            ? i.a.createElement(
                r.Fragment,
                null,
                n
                  ? s
                  : i.a.createElement(
                      "p",
                      null,
                      t.description.split("<br>")[0]
                    ),
                " ",
                i.a.createElement(
                  Ee,
                  { context: "secondary", onClick: () => o(!n) },
                  a(n ? "Read Less" : "Read More")
                )
              )
            : s
        );
      },
      Wt = e => {
        var { game: t, posts: a, _t: n } = e;
        return i.a.createElement(
          qt,
          { title: n("Latest News"), className: pe.a.posts },
          i.a.createElement(
            "div",
            { className: pe.a.postList },
            a.map(e => i.a.createElement(Ae, { key: e.id, post: e }))
          ),
          i.a.createElement(
            ue,
            {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest News",
              "data-gtm-label": "".concat(t.title, " - More Click"),
              to: "/newswire?tag_id=".concat(t.tags[0].id),
              context: "secondary"
            },
            n("Read more at the Rockstar Newswire")
          )
        );
      },
      Xt = e => {
        var { game: t, videos: a, _t: n } = e;
        return i.a.createElement(
          qt,
          { title: n("Latest Videos"), className: pe.a.videos },
          i.a.createElement(
            "div",
            { className: pe.a.videoList },
            a.map(e =>
              i.a.createElement(Ke, {
                video: e,
                key: e.id,
                gameTitleNecessary: !1
              })
            )
          ),
          i.a.createElement(
            ue,
            {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest Videos",
              "data-gtm-label": "".concat(t.title, " - View All Click"),
              to: "/videos?type=game&gameId=".concat(t.id),
              context: "secondary"
            },
            n("See all %s videos").replace("%s", t.title)
          )
        );
      },
      Kt = e => {
        var { imgSrc: t } = e,
          [a, n] = N(t);
        return i.a.createElement(qt, {
          className: [pe.a.fob, a ? pe.a.startAnimation : ""].join(" "),
          style: { backgroundImage: "url(".concat(t, ")") }
        });
      },
      Vt = e => {
        var { children: t, title: a, className: n } = e;
        return i.a.createElement(
          "dl",
          { className: n || "" },
          i.a.createElement("dt", null, a),
          i.a.createElement("dd", { dangerouslySetInnerHTML: { __html: t } })
        );
      },
      qt = e => {
        var { title: t, className: a, style: n } = e;
        return i.a.createElement(
          "section",
          {
            className: " undefined" != typeof a ? a : "",
            style: "object" == typeof n ? n : {}
          },
          t ? i.a.createElement("h2", null, t) : "",
          e.children
        );
      },
      zt = e => {
        var t = O(),
          a = Object(l.h)(),
          n = E(),
          [o, s, c] = k("games/get-game/".concat(a.gameTitlelug, ".json"), []);
        if (
          (Object(r.useEffect)(() => {
            n.breadcrumbs.set({
              links: [{ href: "/games", title: t("Games") }],
              filter: ""
            });
          }, []),
          Object(r.useEffect)(() => {
            n.loading.set(s);
          }, [s]),
          s)
        )
          return null;
        if (c) throw c;
        var { game: d } = o;
        return i.a.createElement(
          "div",
          { className: pe.a.gameInfo },
          i.a.createElement(
            "div",
            { className: pe.a.left },
            i.a.createElement(Ht, { game: d, _t: t }),
            i.a.createElement(
              "div",
              { className: pe.a.links },
              d.digital_purchases.length || d.purchases.length
                ? i.a.createElement(
                    Ft,
                    { title: t("Buy Now") },
                    d.digital_purchases.map((e, t) =>
                      i.a.createElement(
                        P,
                        {
                          target: "_blank",
                          key: t,
                          to: "/games-purchases/digital?game="
                            .concat(d.id, "&platform=")
                            .concat(e.platform_id)
                        },
                        "".concat(e.platform_name, " - Digital")
                      )
                    ),
                    d.purchases.map((e, t) =>
                      i.a.createElement(
                        P,
                        { target: "_blank", key: t, to: e.href },
                        "".concat(e.platform.name, " - Physical")
                      )
                    )
                  )
                : "",
              i.a.createElement(
                ue,
                {
                  to: d.url_official,
                  context: "secondary",
                  target: "_blank",
                  "data-gtm-category": "Games",
                  "data-gtm-action": "Official Site Click-through",
                  "data-gtm-label": d.title
                },
                t("Official Site")
              )
            ),
            i.a.createElement(Kt, { imgSrc: d.fob_1280 })
          ),
          i.a.createElement(
            "div",
            { className: pe.a.right },
            i.a.createElement(Ut, { game: d, _t: t }),
            d.tags.length && d.tags[0].videos.length
              ? i.a.createElement(Xt, {
                  game: d,
                  videos: d.tags[0].videos,
                  _t: t
                })
              : "",
            d.tags.length && d.tags[0].posts.length
              ? i.a.createElement(Wt, {
                  game: d,
                  posts: d.tags[0].posts,
                  _t: t
                })
              : "",
            d.screens.length
              ? i.a.createElement(Gt, { screens: d.screens, _t: t })
              : "",
            i.a.createElement(Dt, { game: d, _t: t })
          )
        );
      },
      Jt = a(14),
      Zt = a.n(Jt),
      Yt = Object(l.i)(e => {
        var {
            gdpr: t,
            cookieData: a,
            CookieSettingsModal: n,
            noCountrySelector: o,
            titleKey: s
          } = e,
          l = new URLSearchParams(e.location.search),
          c = E(),
          d = l.get("country") ? l.get("country") : null,
          [m, u] = Object(r.useState)(null),
          [g, h] = Object(r.useState)(null),
          [p, v, f] = k(m, [m]),
          _ = e => ("string" == typeof w[e] ? w[e] : e),
          b =
            void 0 === o && null !== d
              ? d
              : void 0 === o && c.locale.split("_").length > 1
              ? c.locale.split("_")[1]
              : c.locale,
          y = "official/company-info"
            .concat(e.location.pathname, ".json?locale=")
            .concat(b);
        if (
          ("object" == typeof t && (y += "&eu=".concat(t.eu.toString())),
          Object(r.useEffect)(() => {
            u(y);
          }, [y]),
          v)
        )
          return null;
        var { translations: w, content: x } = p;
        return i.a.createElement(
          "div",
          { className: Zt.a.companyInfo, "data-locale": b },
          i.a.createElement(
            "section",
            { className: Zt.a.top },
            i.a.createElement("h1", null, _(s)),
            "undefined" !== o && o
              ? ""
              : i.a.createElement(
                  "nav",
                  { className: Zt.a.nav },
                  [
                    "us",
                    "br",
                    "cz",
                    "de",
                    "es",
                    "fr",
                    "it",
                    "jp",
                    "kr",
                    "mx",
                    "nl",
                    "pl",
                    "ru",
                    "sa",
                    "tw",
                    "zh"
                  ].map((t, a) =>
                    i.a.createElement(P, {
                      key: a,
                      to: "".concat(e.location.pathname, "?country=").concat(t),
                      className: Zt.a[t]
                    })
                  )
                )
          ),
          !v && void 0 !== x && "object" == typeof a && t.eu
            ? i.a.createElement(
                "section",
                { className: Zt.a.content },
                i.a.createElement(Rt.a, {
                  bindings: { gdpr: t, country: d, cookieData: a, _t: _ },
                  components: { CookieSettingsModal: n },
                  jsx: x
                })
              )
            : v || "string" != typeof x
            ? ""
            : i.a.createElement("section", {
                className: Zt.a.content,
                dangerouslySetInnerHTML: { __html: x }
              })
        );
      }),
      Qt = e =>
        i.a.createElement(Yt, {
          titleKey: "conduct-title",
          noCountrySelector: !0
        }),
      $t = e =>
        i.a.createElement(Yt, {
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
      ea = e => i.a.createElement(Yt, { titleKey: "eula-title" }),
      ta = e => i.a.createElement(Yt, { titleKey: "Terms of Service" }),
      aa = e => i.a.createElement(Yt, { titleKey: "Privacy Policy" });
    function na(e, t, a, n, r, i, o) {
      try {
        var s = e[i](o),
          l = s.value;
      } catch (e) {
        return void a(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(n, r);
    }
    var ra = e => {
        var { buttonTitle: t, gdpr: a, country: n, _t: o } = e,
          s = E(),
          [l, c] = Object(r.useState)(s.tracking.get),
          [d, m] = Object(r.useState)(!1),
          u = (function() {
            var e,
              t =
                ((e = function*() {
                  var e = yield fetch(
                    "cookies/set-gdpr-value/".concat(l ? 2 : 0, ".json")
                  );
                  yield e.json(), m(!1);
                }),
                function() {
                  var t = this,
                    a = arguments;
                  return new Promise(function(n, r) {
                    var i = e.apply(t, a);
                    function o(e) {
                      na(i, n, r, o, s, "next", e);
                    }
                    function s(e) {
                      na(i, n, r, o, s, "throw", e);
                    }
                    o(void 0);
                  });
                });
            return function() {
              return t.apply(this, arguments);
            };
          })();
        return i.a.createElement(
          r.Fragment,
          null,
          i.a.createElement(
            Ee,
            { className: Zt.a.cookieSettingsButton, onClick: () => m(!d) },
            t
          ),
          i.a.createElement(
            "section",
            {
              className: [Zt.a.cookieSettingsModal, d ? Zt.a.open : ""].join(
                " "
              ),
              "data-locale": n
            },
            i.a.createElement(
              "div",
              { className: Zt.a.content },
              i.a.createElement("h3", null, o("gdpr-settings-title")),
              i.a.createElement("p", {
                dangerouslySetInnerHTML: {
                  __html: o("gdpr-settings-description")
                }
              }),
              i.a.createElement(
                "div",
                { className: Zt.a.settings },
                i.a.createElement(
                  "div",
                  { className: [Zt.a.setting, Zt.a.necessary].join(" ") },
                  i.a.createElement("span", null, o("gdpr-settings-necessary")),
                  i.a.createElement("span", null, o("gdpr-settings-on"))
                ),
                i.a.createElement(
                  "div",
                  { className: [Zt.a.setting, Zt.a.optional].join(" ") },
                  i.a.createElement("span", null, o("gdpr-settings-optional")),
                  i.a.createElement("span", {
                    className: [Zt.a.dot, l ? Zt.a.optionalOn : ""].join(" "),
                    onClick: () => {
                      c(!l);
                    }
                  })
                )
              ),
              i.a.createElement(Ee, { onClick: u }, o("gdpr-settings-ok"))
            )
          )
        );
      },
      ia = e => {
        var { gdpr: t } = e,
          [a, n, r] = (E(), O(), k("cookies/all.json", []));
        if (n) return null;
        var o = {
          sites: a.sites.map(e => i.a.createElement("li", { key: e }, e)),
          required: a.cookies.required.map(e =>
            i.a.createElement("li", { key: [e.name, e.host].join(" ") }, e.name)
          ),
          required_3rd: a.cookies.required_3rd.map(e =>
            i.a.createElement("li", { key: [e.name, e.host].join(" ") }, e.name)
          ),
          functional: a.cookies.functional.map(e =>
            i.a.createElement("li", { key: [e.name, e.host].join(" ") }, e.name)
          ),
          targeting: a.cookies.targeting.map(e =>
            i.a.createElement("li", { key: [e.name, e.host].join(" ") }, e.name)
          ),
          targeting_3rd: a.cookies.targeting_3rd.map(e =>
            i.a.createElement("li", { key: [e.name, e.host].join(" ") }, e.name)
          )
        };
        return i.a.createElement(Yt, {
          titleKey: "Cookie Policy",
          gdpr: t,
          cookieData: o,
          CookieSettingsModal: ra
        });
      },
      oa = a(54),
      sa = a.n(oa),
      la = () => {
        var e = O(),
          t = E(),
          [a, n, o] = k("manuals/get-all.json", []);
        if (
          (Object(r.useEffect)(() => {
            t.breadcrumbs.set({ links: [], filter: "" });
          }, []),
          Object(r.useEffect)(() => {
            t.loading.set(n);
          }, [n]),
          n)
        )
          return null;
        var { manuals: s } = a;
        return i.a.createElement(
          "div",
          { className: sa.a.manuals },
          i.a.createElement("h2", null, e("Manuals")),
          i.a.createElement(
            "div",
            { className: sa.a.list },
            s.map(e =>
              i.a.createElement(
                "div",
                { key: e.id, className: sa.a.item },
                i.a.createElement("div", {
                  className: sa.a.img,
                  style: { backgroundImage: "url(".concat(e.game.fob_640, ")") }
                }),
                i.a.createElement(
                  Ft,
                  { title: e.game.title, className: sa.a.dropdown },
                  e.manuals_platforms.map(e =>
                    i.a.createElement(
                      "p",
                      { key: e.id },
                      e.platform,
                      e.manuals_links.map(e =>
                        i.a.createElement(
                          "a",
                          { key: e.id, href: e.href, target: "_blank" },
                          e.label
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      },
      ca = e => {
        var { base: t, errorFromServer: a, gdpr: n, locale: o, sc: s } = e,
          m = i.a.createElement(
            l.d,
            null,
            i.a.createElement(l.b, { exact: !0, path: "/", component: Fe }),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/newswire",
              component: Ue
            }),
            i.a.createElement(l.b, {
              path: "/newswire/article/:articleId/:articleSlug?",
              component: jt
            }),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/videos",
              component: Ze
            }),
            i.a.createElement(l.b, {
              path: "/videos/video/:videoId",
              component: Ye
            }),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/games",
              component: st
            }),
            i.a.createElement(l.b, {
              path: "/games/info/:gameTitlelug",
              component: zt
            }),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/downloads",
              component: ot
            }),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/search",
              component: vt
            }),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/conduct",
              component: Qt
            }),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/corpinfo",
              component: $t
            }),
            i.a.createElement(l.b, { exact: !0, path: "/eula", component: ea }),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/legal",
              component: ta
            }),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/privacy",
              component: aa
            }),
            i.a.createElement(
              l.b,
              { exact: !0, path: "/cookies" },
              i.a.createElement(ia, { gdpr: n })
            ),
            i.a.createElement(l.b, {
              exact: !0,
              path: "/manuals",
              component: la
            }),
            i.a.createElement(l.b, {
              render: () => i.a.createElement(L, { error: a && a })
            })
          );
        return (
          Object(r.useEffect)(() => {
            window.onresize = () => {
              document.body.height = window.innerHeight;
            };
          }, []),
          i.a.createElement(
            f,
            { base: t, gdpr: n, locale: o, sc: s },
            i.a.createElement(
              h,
              null,
              i.a.createElement(
                T,
                null,
                i.a.createElement(
                  y,
                  null,
                  i.a.createElement(
                    c.a,
                    { basename: t },
                    i.a.createElement(d, null),
                    i.a.createElement(oe, null),
                    i.a.createElement(de, null),
                    i.a.createElement(se, null, i.a.createElement(H, null, m)),
                    i.a.createElement(D, null)
                  )
                )
              )
            )
          )
        );
      };
    a(207),
      s.a.render(
        i.a.createElement(ca, {
          base: document.getElementsByTagName("base")[0].getAttribute("href"),
          locale: document.documentElement.lang,
          errorFromServer: window.errorFromServer && window.errorFromServer,
          gdpr: window.gdpr && window.gdpr,
          sc: window.sc
        }),
        document.getElementById("app")
      );
  },
  22: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_2Syf",
      sectionHeader: "_1PBz",
      animationFadeInUp: "_1Idl",
      animationPaused: "_30_r",
      animationRunning: "_30TM",
      maxWidthWithNormalPadding: "_3wMa",
      handleAspectRatio: "_3b4K",
      videoInfo: "_70lK",
      marquee: "_1rz_",
      embed: "_35EI",
      outbound: "_2wAi",
      videosIndex: "dHYO",
      latest: "_2LDO",
      videoPreview: "_15Zu",
      img: "_19Mp",
      title: "NtXB",
      gameTitle: "_223j",
      details: "_2RSJ",
      videoList: "Svg5"
    };
  },
  23: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_36Nv",
      sectionHeader: "_1ZkC",
      animationFadeInUp: "_2DVC",
      animationPaused: "Dl7h",
      animationRunning: "_2jp6",
      maxWidthWithNormalPadding: "_23Fw",
      handleAspectRatio: "_2zmr",
      outbound: "_3u9f",
      header: "Xs7C",
      logo: "x_u7",
      logoNormal: "euJN",
      logoBlack: "_3LFU",
      active: "_3Auj",
      signin: "_2K8A",
      bg: "_3GNz",
      bgNav: "_19fX",
      loading: "WYtx",
      navOpen: "FXP_",
      menuOpener: "_23pr"
    };
  },
  24: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_2-au",
      sectionHeader: "nvHh",
      videoList: "_2Usi",
      animationFadeInUp: "_16CA",
      animationPaused: "_1MEG",
      animationRunning: "nTJA",
      maxWidthWithNormalPadding: "_1VR1",
      handleAspectRatio: "_1Apn",
      outbound: "_9yW",
      arrowNav: "_5ZNT",
      items: "_13bC",
      trackWrapper: "_1vql",
      track: "_1HtS",
      dragging: "_3uuq",
      arrow: "SGDB",
      previous: "_33l4",
      next: "_2pJ6",
      disabled: "_3jkK"
    };
  },
  28: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_3PP5",
      sectionHeader: "_1HhW",
      animationFadeInUp: "_3d7W",
      animationPaused: "_2JG5",
      animationRunning: "_1n7Z",
      maxWidthWithNormalPadding: "_1Znx",
      content: "_6Jbp",
      handleAspectRatio: "_2UEN",
      outbound: "_1FkF",
      companyInfoLinks: "_1Wst",
      siteFooter: "_3mkF",
      social: "_3gRX",
      facebook: "_1mwQ",
      instagram: "_1RrR",
      youtube: "_2bGH",
      twitter: "_3Kl1",
      twitch: "piLt"
    };
  },
  29: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_1O1i",
      sectionHeader: "_25QT",
      animationFadeInUp: "_1t2s",
      animationPaused: "hEhN",
      animationRunning: "_3uyR",
      maxWidthWithNormalPadding: "_3YbZ",
      dots: "_2hHu",
      handleAspectRatio: "t-T5",
      outbound: "_34lG",
      carousel: "_29Wp",
      text: "_7U3o",
      info: "_2LVc",
      active: "_25DH",
      title: "_12sr",
      cta: "_3ZMX",
      track: "_2nmN",
      dragging: "_2nYz"
    };
  },
  32: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_2iTQ",
      sectionHeader: "UJ82",
      animationFadeInUp: "_1cul",
      animationPaused: "_2eHa",
      animationRunning: "i-OL",
      maxWidthWithNormalPadding: "_3IKm",
      links: "jBdq",
      searchbox: "_2FhW",
      handleAspectRatio: "_24X1",
      outbound: "_2Mjp",
      navOpen: "_3T1K",
      nav: "_22gu",
      active: "-nZk",
      content: "_1PXj"
    };
  },
  39: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_12H9",
      sectionHeader: "_2uYt",
      animationFadeInUp: "Peq9",
      animationPaused: "-IdS",
      animationRunning: "_1Wqi",
      maxWidthWithNormalPadding: "_7CMh",
      handleAspectRatio: "_2IDF",
      outbound: "_1Gpx",
      searchIndex: "BPbk",
      items: "KE67",
      top: "_3YdF",
      nav: "zRCW",
      active: "_3N2T",
      paging: "_1jCD",
      results: "_39MF"
    };
  },
  40: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_2ZlQ",
      sectionHeader: "_2VNP",
      animationFadeInUp: "feEi",
      animationPaused: "XsKK",
      animationRunning: "ZabQ",
      maxWidthWithNormalPadding: "_3wrU",
      handleAspectRatio: "_1iFo",
      newswireArticleOG: "_1Er0",
      hero: "_2gtq",
      body: "_9VTz",
      outbound: "_26pM",
      newswireArticleJsx: "wqKg",
      jsxFooter: "_2MSi"
    };
  },
  45: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_3Dd3",
      sectionHeader: "hOIL",
      animationFadeInUp: "_3SWB",
      animationPaused: "_3Bgt",
      animationRunning: "Zeuv",
      maxWidthWithNormalPadding: "S_81",
      handleAspectRatio: "_3X27",
      screencap: "BrZE",
      outbound: "_2wmk",
      normal: "M8na",
      artLayer: "bCwC",
      active: "Cn_b"
    };
  },
  46: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "G-ge",
      sectionHeader: "_1YD6",
      newswire: "ymBR",
      downloads: "_20UL",
      games: "_3Jfm",
      animationFadeInUp: "_3Z3i",
      animationPaused: "_1r12",
      animationRunning: "_2mBw",
      maxWidthWithNormalPadding: "nup3",
      handleAspectRatio: "_1KGu",
      outbound: "_2YQx",
      home: "_3PC1",
      items: "_2qUK"
    };
  },
  5: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "GHIJ",
      sectionHeader: "_1HdC",
      animationFadeInUp: "_2R2G",
      animationPaused: "_2y0p",
      animationRunning: "_1Ev-",
      maxWidthWithNormalPadding: "_1ZJJ",
      handleAspectRatio: "_3vHF",
      outbound: "_3788",
      newswireFull: "_3YiZ",
      tag: "_2k-p",
      responsiveImage: "_2Ouf",
      cta: "_40-5",
      responsiveSection: "_2Yt6",
      responsiveGridBox: "_1MmS",
      responsiveGridItem: "_1vck",
      responsiveFlexBox: "_1auJ",
      responsiveFlexItem: "v-I5",
      animateBox: "_169L",
      fadeArea: "XMjC",
      visible: "_2wWL",
      barGrow: "_15Qi",
      bar: "_1AnU",
      animateMe: "_34Jv"
    };
  },
  53: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_1AVA",
      sectionHeader: "Ud0U",
      animationFadeInUp: "_3-2D",
      animationPaused: "_2a22",
      animationRunning: "_1OiP",
      maxWidthWithNormalPadding: "_20RE",
      handleAspectRatio: "oE9J",
      outbound: "_2Cd6",
      breadcrumbs: "_2r-r",
      disabled: "_3N4y",
      content: "_37U6",
      links: "_3Dmx",
      filter: "_3L-e"
    };
  },
  54: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_3Mii",
      sectionHeader: "_3Vf_",
      manuals: "_1EbB",
      animationFadeInUp: "_7joJ",
      animationPaused: "_3CpC",
      animationRunning: "_DcN",
      maxWidthWithNormalPadding: "_34yN",
      handleAspectRatio: "ICx0",
      list: "_17yr",
      item: "_300P",
      img: "_3gNJ",
      outbound: "_1CLX",
      dropdown: "_15aN",
      items: "SGrA"
    };
  },
  65: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_10Rg",
      sectionHeader: "_1V-n",
      animationFadeInUp: "_3kL3",
      animationPaused: "_2Cfh",
      animationRunning: "_2W51",
      maxWidthWithNormalPadding: "BGua",
      handleAspectRatio: "_3kLh",
      outbound: "_1C1u",
      languageSelector: "_1Hh3",
      open: "_1GF0",
      linkWrapper: "_15Lf",
      links: "k43J"
    };
  },
  66: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_3bH7",
      sectionHeader: "_1d3Q",
      animationFadeInUp: "_28GT",
      animationPaused: "_3yOw",
      animationRunning: "_2m1C",
      maxWidthWithNormalPadding: "_2nrt",
      handleAspectRatio: "_38jz",
      outbound: "_3OJ9",
      tagFilterPane: "_3mMu",
      open: "_8-Gf",
      tags: "_39Vb",
      active: "_2GVq"
    };
  },
  67: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "PMgb",
      sectionHeader: "_2d85",
      animationFadeInUp: "z7mX",
      animationPaused: "_1Jcg",
      animationRunning: "Dc2G",
      maxWidthWithNormalPadding: "_9pvo",
      handleAspectRatio: "_1CwY",
      outbound: "_29GI",
      dropdownWrapper: "_2MLR",
      items: "_2RnY",
      open: "_38WZ",
      opener: "_1F0A",
      secondary: "_1q1l"
    };
  },
  7: function(e, t, a) {
    e.exports = {
      headerHeight: "var(--header-height)",
      blurryBgImg: "_2p9t",
      sectionHeader: "XY3W",
      animationFadeInUp: "_1z2Q",
      animationPaused: "_3RGi",
      animationRunning: "_1-2J",
      maxWidthWithNormalPadding: "_3PJV",
      errorContainer: "_1O9H",
      handleAspectRatio: "_3j_H",
      outbound: "_1LgA",
      main: "_2vJr",
      navOpen: "_2mMx",
      "theme-std": "_1EVR",
      searchBox: "gQLW",
      star: "_3ISU",
      button: "_2aRn",
      secondary: "_3CI3",
      paging: "_3NeI",
      active: "ap91",
      showsOver: "_17s5",
      whatTeamWildcats: "_1Vl0",
      places: "_3saJ",
      sophomore: "Frps",
      spinnyspinspin: "mZ5k"
    };
  }
});
