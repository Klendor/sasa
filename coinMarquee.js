'use strict';
!function(m) {
  /**
   * @param {number} i
   * @return {?}
   */
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  t.m = m;
  t.c = n;
  /**
   * @param {!Function} d
   * @param {string} name
   * @param {!Function} n
   * @return {undefined}
   */
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  t.r = function(data) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(data, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(data, "__esModule", {
      value : true
    });
  };
  /**
   * @param {number} name
   * @param {number} version
   * @return {?}
   */
  t.t = function(name, version) {
    if (1 & version && (name = t(name)), 8 & version) {
      return name;
    }
    if (4 & version && "object" == typeof name && name && name.__esModule) {
      return name;
    }
    /** @type {!Object} */
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : name
    }), 2 & version && "string" != typeof name) {
      var s;
      for (s in name) {
        t.d(d, s, function(nameProp) {
          return name[nameProp];
        }.bind(null, s));
      }
    }
    return d;
  };
  /**
   * @param {!Object} module
   * @return {?}
   */
  t.n = function(module) {
    /** @type {function(): ?} */
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return t.d(n, "a", n), n;
  };
  /**
   * @param {!Function} property
   * @param {string} object
   * @return {?}
   */
  t.o = function(property, object) {
    return Object.prototype.hasOwnProperty.call(property, object);
  };
  /** @type {string} */
  t.p = "";
  t(t.s = 37);
}({
  1 : function(eventStr, a, b) {
    a.a = {
      usd : {
        id : 2781,
        name : "United States Dollar",
        symbol : "usd",
        token : "$",
        space : ""
      },
      all : {
        id : 3526,
        name : "Albanian Lek",
        symbol : "all",
        token : "L",
        space : ""
      },
      dzd : {
        id : 3537,
        name : "Algerian Dinar",
        symbol : "dzd",
        token : "\u0172\u00c6.\u0172\u00ac",
        space : ""
      },
      ars : {
        id : 2821,
        name : "Argentine Peso",
        symbol : "ars",
        token : "$",
        space : ""
      },
      amd : {
        id : 3527,
        name : "Armenian Dram",
        symbol : "amd",
        token : "\u00d6\u00b8",
        space : ""
      },
      aud : {
        id : 2782,
        name : "Australian Dollar",
        symbol : "aud",
        token : "$",
        space : ""
      },
      azn : {
        id : 3528,
        name : "Azerbaijani Manat",
        symbol : "azn",
        token : "\u0101\u201a\u00bc",
        space : ""
      },
      bhd : {
        id : 3531,
        name : "Bahraini Dinar",
        symbol : "bhd",
        token : ".\u0172\u00c6.\u0172\u00d8",
        space : ""
      },
      bdt : {
        id : 3530,
        name : "Bangladeshi Taka",
        symbol : "bdt",
        token : "\u0105\u00a7\u00b3",
        space : ""
      },
      byn : {
        id : 3533,
        name : "Belarusian Ruble",
        symbol : "byn",
        token : "Br",
        space : ""
      },
      bmd : {
        id : 3532,
        name : "Bermudan Dollar",
        symbol : "bmd",
        token : "$",
        space : ""
      },
      bob : {
        id : 2832,
        name : "Bolivian Boliviano",
        symbol : "bob",
        token : "Bs.",
        space : ""
      },
      bam : {
        id : 3529,
        name : "Bosnia-Herzegovina Convertible Mark",
        symbol : "bam",
        token : "KM",
        space : ""
      },
      brl : {
        id : 2783,
        name : "Brazilian Real",
        symbol : "brl",
        token : "R$",
        space : ""
      },
      bgn : {
        id : 2814,
        name : "Bulgarian Lev",
        symbol : "bgn",
        token : "\u0160\u00bb\u0160\u00b2",
        space : ""
      },
      khr : {
        id : 3549,
        name : "Cambodian Riel",
        symbol : "khr",
        token : "\u012f\u009f\u203a",
        space : ""
      },
      cad : {
        id : 2784,
        name : "Canadian Dollar",
        symbol : "cad",
        token : "$",
        space : ""
      },
      clp : {
        id : 2786,
        name : "Chilean Peso",
        symbol : "clp",
        token : "$",
        space : ""
      },
      cny : {
        id : 2787,
        name : "Chinese Yuan",
        symbol : "cny",
        token : "\u0100\ufffd",
        space : ""
      },
      cop : {
        id : 2820,
        name : "Colombian Peso",
        symbol : "cop",
        token : "$",
        space : ""
      },
      crc : {
        id : 3534,
        name : "Costa Rican Col\u0106\u00b3n",
        symbol : "crc",
        token : "\u0101\u201a\ufffd",
        space : ""
      },
      hrk : {
        id : 2815,
        name : "Croatian Kuna",
        symbol : "hrk",
        token : "kn",
        space : ""
      },
      cup : {
        id : 3535,
        name : "Cuban Peso",
        symbol : "cup",
        token : "$",
        space : ""
      },
      czk : {
        id : 2788,
        name : "Czech Koruna",
        symbol : "czk",
        token : "K\u00c4\u00a8",
        space : ""
      },
      dkk : {
        id : 2789,
        name : "Danish Krone",
        symbol : "dkk",
        token : "kr",
        space : ". "
      },
      dop : {
        id : 3536,
        name : "Dominican Peso",
        symbol : "dop",
        token : "$",
        space : ""
      },
      egp : {
        id : 3538,
        name : "Egyptian Pound",
        symbol : "egp",
        token : "\u0100\u00a3",
        space : ""
      },
      eur : {
        id : 2790,
        name : "Euro",
        symbol : "eur",
        token : "\u0101\u201a\u00ac",
        space : ""
      },
      gel : {
        id : 3539,
        name : "Georgian Lari",
        symbol : "gel",
        token : "\u0101\u201a\u00be",
        space : ""
      },
      ghs : {
        id : 3540,
        name : "Ghanaian Cedi",
        symbol : "ghs",
        token : "\u0101\u201a\u00b5",
        space : ""
      },
      gtq : {
        id : 3541,
        name : "Guatemalan Quetzal",
        symbol : "gtq",
        token : "Q",
        space : ""
      },
      hnl : {
        id : 3542,
        name : "Honduran Lempira",
        symbol : "hnl",
        token : "L",
        space : ""
      },
      hkd : {
        id : 2792,
        name : "Hong Kong Dollar",
        symbol : "hkd",
        token : "$",
        space : ""
      },
      huf : {
        id : 2793,
        name : "Hungarian Forint",
        symbol : "huf",
        token : "Ft",
        space : " "
      },
      isk : {
        id : 2818,
        name : "Icelandic Kr\u0106\u00b3na",
        symbol : "isk",
        token : "kr",
        space : ""
      },
      inr : {
        id : 2796,
        name : "Indian Rupee",
        symbol : "inr",
        token : "\u0101\u201a\u00b9",
        space : ""
      },
      idr : {
        id : 2794,
        name : "Indonesian Rupiah",
        symbol : "idr",
        token : "Rp",
        space : " "
      },
      irr : {
        id : 3544,
        name : "Iranian Rial",
        symbol : "irr",
        token : "\u013c\u00b7\u00bc",
        space : ""
      },
      iqd : {
        id : 3543,
        name : "Iraqi Dinar",
        symbol : "iqd",
        token : "\u0172\u00b9.\u0172\u00c6",
        space : ""
      },
      ils : {
        id : 2795,
        name : "Israeli New Shekel",
        symbol : "ils",
        token : "\u0101\u201a\u0156",
        space : ""
      },
      jmd : {
        id : 3545,
        name : "Jamaican Dollar",
        symbol : "jmd",
        token : "$",
        space : ""
      },
      jpy : {
        id : 2797,
        name : "Japanese Yen",
        symbol : "jpy",
        token : "\u0100\ufffd",
        space : ""
      },
      jod : {
        id : 3546,
        name : "Jordanian Dinar",
        symbol : "jod",
        token : "\u0172\u00c6.\u0172\u00a7",
        space : ""
      },
      kzt : {
        id : 3551,
        name : "Kazakhstani Tenge",
        symbol : "kzt",
        token : "\u0101\u201a\u00f8",
        space : ""
      },
      kes : {
        id : 3547,
        name : "Kenyan Shilling",
        symbol : "kes",
        token : "Sh",
        space : ""
      },
      kwd : {
        id : 3550,
        name : "Kuwaiti Dinar",
        symbol : "kwd",
        token : "\u0172\u00c6.\u0141\u0083",
        space : ""
      },
      kgs : {
        id : 3548,
        name : "Kyrgystani Som",
        symbol : "kgs",
        token : "\u0143\u0081",
        space : ""
      },
      lbp : {
        id : 3552,
        name : "Lebanese Pound",
        symbol : "lbp",
        token : "\u0141\u201e.\u0141\u201e",
        space : ""
      },
      mkd : {
        id : 3556,
        name : "Macedonian Denar",
        symbol : "mkd",
        token : "\u0160\u00b4\u0160\u00b5\u0160\u00bd",
        space : ""
      },
      myr : {
        id : 2800,
        name : "Malaysian Ringgit",
        symbol : "myr",
        token : "RM",
        space : ""
      },
      mur : {
        id : 2816,
        name : "Mauritian Rupee",
        symbol : "mur",
        token : "\u0101\u201a\u00d8",
        space : ""
      },
      mxn : {
        id : 2799,
        name : "Mexican Peso",
        symbol : "mxn",
        token : "$",
        space : ""
      },
      mdl : {
        id : 3555,
        name : "Moldovan Leu",
        symbol : "mdl",
        token : "L",
        space : ""
      },
      mnt : {
        id : 3558,
        name : "Mongolian Tugrik",
        symbol : "mnt",
        token : "\u0101\u201a\u00ae",
        space : ""
      },
      mad : {
        id : 3554,
        name : "Moroccan Dirham",
        symbol : "mad",
        token : "\u0172\u00c6.\u0141\u2026.",
        space : ""
      },
      mmk : {
        id : 3557,
        name : "Myanma Kyat",
        symbol : "mmk",
        token : "Ks",
        space : ""
      },
      nad : {
        id : 3559,
        name : "Namibian Dollar",
        symbol : "nad",
        token : "$",
        space : ""
      },
      npr : {
        id : 3561,
        name : "Nepalese Rupee",
        symbol : "npr",
        token : "\u0101\u201a\u00d8",
        space : ""
      },
      twd : {
        id : 2811,
        name : "New Taiwan Dollar",
        symbol : "twd",
        token : "NT$",
        space : ""
      },
      nzd : {
        id : 2802,
        name : "New Zealand Dollar",
        symbol : "nzd",
        token : "$",
        space : ""
      },
      nio : {
        id : 3560,
        name : "Nicaraguan C\u0106\u00b3rdoba",
        symbol : "nio",
        token : "C$",
        space : ""
      },
      ngn : {
        id : 2819,
        name : "Nigerian Naira",
        symbol : "ngn",
        token : "\u0101\u201a\u00a6",
        space : ""
      },
      nok : {
        id : 2801,
        name : "Norwegian Krone",
        symbol : "nok",
        token : "kr",
        space : " "
      },
      omr : {
        id : 3562,
        name : "Omani Rial",
        symbol : "omr",
        token : "\u0172\u00b1.\u0172\u00b9.",
        space : ""
      },
      pkr : {
        id : 2804,
        name : "Pakistani Rupee",
        symbol : "pkr",
        token : "\u0101\u201a\u00d8",
        space : " "
      },
      pab : {
        id : 3563,
        name : "Panamanian Balboa",
        symbol : "pab",
        token : "B/.",
        space : ""
      },
      pen : {
        id : 2822,
        name : "Peruvian Sol",
        symbol : "pen",
        token : "S/.",
        space : ""
      },
      php : {
        id : 2803,
        name : "Philippine Peso",
        symbol : "php",
        token : "\u0101\u201a\u00b1",
        space : ""
      },
      pln : {
        id : 2805,
        name : "Polish Z\u00c5\u201aoty",
        symbol : "pln",
        token : "z\u00c5\u201a",
        space : ""
      },
      gbp : {
        id : 2791,
        name : "Pound Sterling",
        symbol : "gbp",
        token : "\u0100\u00a3",
        space : ""
      },
      qar : {
        id : 3564,
        name : "Qatari Rial",
        symbol : "qar",
        token : "\u0172\u00b1.\u0141\u201a",
        space : ""
      },
      ron : {
        id : 2817,
        name : "Romanian Leu",
        symbol : "ron",
        token : "lei",
        space : ""
      },
      rub : {
        id : 2806,
        name : "Russian Ruble",
        symbol : "rub",
        token : "\u0101\u201a\u00bd",
        space : ""
      },
      sar : {
        id : 3566,
        name : "Saudi Riyal",
        symbol : "sar",
        token : "\u0172\u00b1.\u0172\u00b3",
        space : ""
      },
      rsd : {
        id : 3565,
        name : "Serbian Dinar",
        symbol : "rsd",
        token : "\u0160\u00b4\u0160\u00f8\u0160\u00bd.",
        space : ""
      },
      sgd : {
        id : 2808,
        name : "Singapore Dollar",
        symbol : "sgd",
        token : "S$",
        space : ""
      },
      zar : {
        id : 2812,
        name : "South African Rand",
        symbol : "zar",
        token : "R",
        space : " "
      },
      krw : {
        id : 2798,
        name : "South Korean Won",
        symbol : "krw",
        token : "\u0101\u201a\u00a9",
        space : ""
      },
      ssp : {
        id : 3567,
        name : "South Sudanese Pound",
        symbol : "ssp",
        token : "\u0100\u00a3",
        space : ""
      },
      ves : {
        id : 3573,
        name : "Sovereign Bolivar",
        symbol : "ves",
        token : "Bs.",
        space : ""
      },
      lkr : {
        id : 3553,
        name : "Sri Lankan Rupee",
        symbol : "lkr",
        token : "Rs",
        space : ""
      },
      sek : {
        id : 2807,
        name : "Swedish Krona",
        symbol : "sek",
        token : "kr",
        space : " "
      },
      chf : {
        id : 2785,
        name : "Swiss Franc",
        symbol : "chf",
        token : "Fr",
        space : ". "
      },
      thb : {
        id : 2809,
        name : "Thai Baht",
        symbol : "thb",
        token : "\u0105\u00f8\u00e6",
        space : ""
      },
      ttd : {
        id : 3569,
        name : "Trinidad and Tobago Dollar",
        symbol : "ttd",
        token : "$",
        space : ""
      },
      tnd : {
        id : 3568,
        name : "Tunisian Dinar",
        symbol : "tnd",
        token : "\u0172\u00c6.\u0172\u0156",
        space : ""
      },
      try : {
        id : 2810,
        name : "Turkish Lira",
        symbol : "try",
        token : "\u0101\u201a\u0157",
        space : ""
      },
      ugx : {
        id : 3570,
        name : "Ugandan Shilling",
        symbol : "ugx",
        token : "Sh",
        space : ""
      },
      uah : {
        id : 2824,
        name : "Ukrainian Hryvnia",
        symbol : "uah",
        token : "\u0101\u201a\u00b4",
        space : ""
      },
      aed : {
        id : 2813,
        name : "United Arab Emirates Dirham",
        symbol : "aed",
        token : "\u0172\u00c6.\u0172\ufffd",
        space : ""
      },
      uyu : {
        id : 3571,
        name : "Uruguayan Peso",
        symbol : "uyu",
        token : "$",
        space : ""
      },
      uzs : {
        id : 3572,
        name : "Uzbekistan Som",
        symbol : "uzs",
        token : "so'm",
        space : ""
      },
      vnd : {
        id : 2823,
        name : "Vietnamese Dong",
        symbol : "vnd",
        token : "\u0101\u201a\u00ab",
        space : ""
      }
    };
  },
  36 : function(module, data) {
    /**
     * @param {string} value
     * @return {?}
     */
    function extend(value) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? module.exports = extend = function(classProps) {
        return typeof classProps;
      } : module.exports = extend = function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, extend(value);
    }
    /** @type {function(string): ?} */
    module.exports = extend;
  },
  37 : function(transferLock, fn, n) {
    n.r(fn);
    var m = n(36);
    var _container = n.n(m);
    var o = n(1);
    !function() {
      /**
       * @return {undefined}
       */
      function ready() {
        jQuery = window.jQuery.noConflict(true);
        init();
      }
      /**
       * @param {string} b
       * @return {?}
       */
      function initComparator(b) {
        /** @type {string} */
        var s = " " + document.cookie;
        /** @type {string} */
        var search = " " + b + "=";
        /** @type {null} */
        var setNameToExpand = null;
        /** @type {number} */
        var index = 0;
        /** @type {number} */
        var i = 0;
        return s.length > 0 && -1 != (index = s.indexOf(search)) && (index = index + search.length, -1 == (i = s.indexOf(";", index)) && (i = s.length), setNameToExpand = unescape(s.substring(index, i))), setNameToExpand;
      }
      /**
       * @return {undefined}
       */
      function init() {
        /**
         * @param {number} i
         * @param {number} length
         * @return {?}
         */
        function parse(i, length) {
          /** @type {number} */
          var remaininglength = length;
          /** @type {number} */
          length = Math.pow(10, length);
          /** @type {!Array} */
          var suffices = ["K", "M", "B", "T"];
          /** @type {number} */
          var x = suffices.length - 1;
          for (; x >= 0; x--) {
            /** @type {number} */
            var len = Math.pow(10, 3 * (x + 1));
            if (len <= i) {
              if (1E3 == (i = Math.round(i * length / len) / length) && x < suffices.length - 1) {
                /** @type {number} */
                i = 1;
                x++;
              }
              /** @type {string} */
              i = output.toLocaleString(Number(i), {
                minDecimalPlaces : remaininglength,
                maxDecimalPlaces : remaininglength
              });
              /** @type {string} */
              i = i + (" " + suffices[x]);
              break;
            }
          }
          return i;
        }
        /**
         * @param {number} value
         * @param {string} object
         * @return {?}
         */
        function get(value, object) {
          return "BTC" == object ? function(value) {
            /** @type {string} */
            value = value >= 1E3 ? output.toLocaleString(Math.round(value)) : value >= 1 ? output.toLocaleString(value, {
              minDecimalPlaces : 8,
              maxDecimalPlaces : 8
            }) : value < 1E-8 ? Number(value).toExponential(4) : output.toLocaleString(value, {
              minDecimalPlaces : 8,
              maxDecimalPlaces : 8
            });
            return value;
          }(value) : function(value) {
            /** @type {string} */
            value = value >= 1 ? value >= 1E5 ? output.toLocaleString(Math.round(value)) : output.toLocaleString(value, {
              minDecimalPlaces : 2,
              maxDecimalPlaces : 2
            }) : value < 1E-6 ? Number(value).toExponential(2) : output.toLocaleString(value, {
              minDecimalPlaces : 6,
              maxDecimalPlaces : 6
            });
            return value;
          }(value);
        }
        /**
         * @param {string} value
         * @param {string} string
         * @param {string} i
         * @return {?}
         */
        function render(value, string, i) {
          /** @type {string} */
          var m = string;
          var g = {
            btc : "\u0105\u00f8\u00e6",
            usd : "$",
            eur : "\u0101\u201a\u00ac",
            cny : "\u0100\ufffd",
            gbp : "\u0100\u00a3",
            cad : "$",
            rub : "<img src='/static/img/fiat/ruble.gif'/>",
            hkd : "$",
            jpy : "\u0100\ufffd",
            aud : "$",
            brl : "R$",
            inr : "\u0101\u201a\u00b9",
            krw : "\u0101\u201a\u00a9",
            mxn : "$",
            idr : "Rp",
            chf : "Fr"
          };
          return value.toLowerCase() in g && (m = g[value.toLowerCase()] + m), i && (m = m + ' <span style="font-size:12px">' + value.toUpperCase() + "</span>"), m;
        }
        /**
         * @param {string} instance
         * @param {string} method
         * @param {string} id
         * @param {string} index
         * @param {string} name
         * @param {string} count
         * @param {number} value
         * @param {string} view
         * @param {number} key
         * @param {number} locale
         * @param {number} fn
         * @param {number} s
         * @param {string} r
         * @param {string} g
         * @param {!Function} e
         * @param {!Function} f
         * @param {!Function} options
         * @param {string} uri
         * @param {string} segment
         * @param {string} req
         * @return {?}
         */
        function load(instance, method, id, index, name, count, value, view, key, locale, fn, s, r, g, e, f, options, uri, segment, req) {
          /** @type {string} */
          var parent = segment ? "https://s2.coinmarketcap.com/static/img/coins/64x64/" + segment + ".png" : "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/" + instance + ".png";
          /** @type {string} */
          var z = "#009e73";
          if (locale < 0) {
            /** @type {string} */
            z = "#d94040";
          }
          /** @type {string} */
          locale = output.toLocaleString(locale, {
            minDecimalPlaces : 2,
            maxDecimalPlaces : 2
          });
          /** @type {string} */
          var store = g ? "(" + index + ")" : "";
          var prevClass = value ? get(value, name) : "?";
          /** @type {string} */
          var localePath = locale ? '<span style="color:' + z + '">(' + locale + "%)" : "";
          var i = fn ? parse(fn, 2) : "?";
          var t = s ? parse(s, 2) : "?";
          /** @type {string} */
          var R = "zh" == req ? "\u0113\u201d\u00b1CoinMarketCap\u010d\u00a8\u00a3\u00e5\u00b9\u00f8\u00e5\u2018\u0088\u0113\u02c7\u00b0" : "Powered by CoinMarketCap";
          /** @type {string} */
          var current_tag_name = "";
          if (view) {
            /** @type {string} */
            current_tag_name = '<br><span style="font-size: 14px; color: rgba(39, 52, 64, 0.5)">' + (key ? get(key, view) : "?") + " " + view + " </span>";
          } else {
            /** @type {string} */
            current_tag_name = "";
          }
          /** @type {string} */
          var _id = "utm_medium=widget&utm_campaign=cmcwidget&utm_source=" + location.hostname + "&utm_content=" + instance;
          /** @type {string} */
          var html = '      <div style="border:2px solid #e1e5ea;border-radius: 10px;font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif;min-width:285px;">        <div style="display:flex;padding:12px 0px;">          <div style="width:33%;display: flex;justify-content: center;align-items: center;"><img style="width:46px;height:46px;" src="' + parent + '"></div>          <div style="width:67%;border: none;text-align:left;line-height:1.4">              <span style="font-size: 18px;"><a href="https://coinmarketcap.com/currencies/' + 
          id + "/?" + _id + '" target="_blank">' + method + " " + store + '</a></span> <br>              <span style="font-size: 16px;">                <span style="font-size: 20px; font-weight: 500;">' + prevClass + '</span>                <span style="font-size: 14px; font-weight: 500;">' + name + '</span>                <span style="margin-left:6px; font-weight: 500;">' + localePath + "</span>                " + current_tag_name + "              </span>          </div>      </div>";
          return html = html + function(n, a, b, item, count, personLookupResult, email, img, paramName) {
            /** @type {number} */
            var wikimedia_commons = 0;
            /** @type {number} */
            var wikimediacommons_page = 0;
            /** @type {string} */
            var annotation = "";
            /** @type {string} */
            var pid = "";
            /** @type {string} */
            var rss = "";
            /** @type {string} */
            var y = "zh" == paramName ? "\u00e4\u0157\u00a4\u0119\u0098\u201c\u00e9\u2021\u00b8\u013c\u00bc\u008824\u00e5\u00b0\u00b8\u0119\u2014\u00b6\u013c\u00bc\u2030" : "VOLUME";
            if (n && wikimedia_commons++, a && wikimedia_commons++, b && wikimedia_commons++, 0 == wikimedia_commons) {
              return "";
            }
            if (1 == wikimedia_commons && (wikimediacommons_page = 100), 2 == wikimedia_commons && (wikimediacommons_page = 49.8), 3 == wikimedia_commons && (wikimediacommons_page = 33), n) {
              /** @type {number} */
              var k = 0;
              if (b || a) {
                /** @type {number} */
                k = 1;
              }
              /** @type {string} */
              annotation = '                  <div style="text-align:center;float:left;width:' + wikimediacommons_page + "%;font-size:12px;padding:12px 0;border-right:" + k + 'px solid #e1e5ea;line-height:1em;">                      ' + ("zh" == paramName ? "\u0119\u02c7\u2019\u00e5\u0090\u00a8" : "RANK") + '                      <br><br>                      <span style="font-size: 18px; ">' + personLookupResult + "</span>                  </div>";
            }
            if (b) {
              /** @type {number} */
              k = 0;
              if (a) {
                /** @type {number} */
                k = 1;
              }
              /** @type {string} */
              pid = '                  <div style="text-align:center;float:left;width:' + wikimediacommons_page + "%;font-size:12px;padding:12px 0 16px 0;border-right:" + k + 'px solid #e1e5ea;line-height:1em;">                      ' + ("zh" == paramName ? "\u00e5\u00f8\u201a\u00e5\u20ac\u00bc" : "MARKET CAP") + '                      <br><br>                      <span style="font-size: 16px; ">' + render(count, email, item) + "</span>                  </div>";
            }
            if (a) {
              /** @type {string} */
              rss = '                  <div style="text-align:center;float:left;width:' + wikimediacommons_page + '%;font-size:12px;padding:12px 0 16px 0;line-height:1em;">                      ' + y + '                      <br><br>                      <span style="font-size: 16px; ">' + render(count, img, item) + "</span>                  </div>";
            }
            return '<div style="border-top: 1px solid #e1e5ea;clear:both;">' + annotation + pid + rss + "</div>";
          }(e, f, options, uri, count, r, i, t, req), html = html + ('  <div style="border-top: 1px solid #e1e5ea;text-align:center;clear:both;font-size:12px;font-style:italic;padding:8px 0;">      <a href="https://coinmarketcap.com?' + _id + '" target="_blank">' + R + "</a>  </div></div>");
        }
        var locale;
        var b;
        var output = (locale = initComparator("_locale") || void 0, b = !("object" != ("undefined" == typeof Intl ? "undefined" : _container()(Intl)) || !Intl || "function" != typeof Intl.NumberFormat), {
          toLocaleString : function(value, start) {
            /** @type {number} */
            var a = Number(value);
            if (isNaN(a)) {
              return value;
            }
            var output;
            var node = start && start.minDecimalPlaces;
            var before = start && start.maxDecimalPlaces;
            return void 0 === node || void 0 === before ? (output = a, b ? output.toLocaleString(locale) : output.toLocaleString()) : function(n, d, c) {
              return b ? n.toLocaleString(locale, {
                minimumFractionDigits : d,
                maximumFractionDigits : c
              }) : n.toFixed(c);
            }(a, node, before);
          }
        });
        jQuery(document).ready(function(jQuery) {
          /** @type {!Array<?>} */
          var $ = Object.values(o.a);
          $.push({
            name : "Bitcoin",
            token : "BTC",
            space : " ",
            id : 1,
            symbol : "BTC"
          });
          jQuery(".coinmarketcap-currency-widget").each(function() {
            var value = jQuery(this).attr("data-currency");
            var j = jQuery(this).data("currencyid");
            var context = jQuery(this).attr("data-base").toUpperCase();
            var i = $.find(function(inputs) {
              return inputs.symbol.toUpperCase() === context;
            }).id;
            var match = jQuery(this).attr("data-secondary");
            match = "BTC" == (match = match ? match.toUpperCase() : null) || "USD" == match ? match : null;
            var wunderlist_list = $.find(function(inputs) {
              return inputs.symbol.toUpperCase() === match;
            });
            var tic = void 0 !== wunderlist_list ? wunderlist_list.id : null;
            var hash = jQuery(this).attr("data-stats");
            hash = (hash = hash ? hash.toUpperCase() : null) == context ? context : "USD";
            var id = $.find(function(inputs) {
              return inputs.symbol.toUpperCase() === hash;
            }).id;
            var data = jQuery(this).data("language");
            data = data || "en-us";
            var c;
            /** @type {boolean} */
            var debugVolumeGroup = false !== jQuery(this).data("ticker");
            /** @type {boolean} */
            var nberr = false !== jQuery(this).data("rank");
            /** @type {boolean} */
            var keyReads = false !== jQuery(this).data("marketcap");
            /** @type {boolean} */
            var smoothFunc = false !== jQuery(this).data("volume");
            /** @type {boolean} */
            var linkSchemaURI = false !== jQuery(this).data("statsticker");
            var meanMenu = this;
            /** @type {string} */
            c = j ? "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=" + j + "&convert_id=1,2781," + i : "https://widgets.coinmarketcap.com/v1/ticker/" + value + "/?ref=widget&convert_id=" + i;
            jQuery.get({
              url : c,
              success : function(item) {
                if (item = item.length ? item[0] : item.data, value || (value = item[j].name.toLowerCase()), j) {
                  var scope = item[j];
                  /** @type {number} */
                  var width = parseFloat(scope.quote[i].price);
                  var key = match && parseFloat(scope.quote[tic].price);
                  /** @type {number} */
                  var x = parseInt(scope.quote[id].market_cap);
                  /** @type {number} */
                  var w = parseInt(scope.quote[id].volume_24h);
                  /** @type {number} */
                  var current = parseFloat(scope.quote[i].percent_change_24h);
                  var module = item[j].name;
                  var symbol = item[j].symbol;
                  var b = item[j].cmc_rank;
                } else {
                  var xField = "price_" + context.toLowerCase();
                  /** @type {(null|string)} */
                  var attr = match ? "price_" + match.toLowerCase() : null;
                  var comparator = "market_cap_" + hash.toLowerCase();
                  var dimension = "24h_volume_" + hash.toLowerCase();
                  /** @type {number} */
                  width = parseFloat(item[xField]);
                  /** @type {(null|number)} */
                  key = attr ? parseFloat(item[attr]) : null;
                  /** @type {number} */
                  x = parseInt(item[comparator]);
                  /** @type {number} */
                  w = parseInt(item[dimension]);
                  /** @type {number} */
                  current = Number(item.percent_change_24h);
                  module = item.name;
                  symbol = item.symbol;
                  b = item.rank;
                }
                var id = item[j].slug;
                var result = load(value, module, id, symbol, context, hash, width, match, key, current, x, w, b, debugVolumeGroup, nberr, smoothFunc, keyReads, linkSchemaURI, j, data);
                jQuery(meanMenu).html(result);
                jQuery(meanMenu).find("a").css({
                  "text-decoration" : "none",
                  color : "#1070e0"
                });
              }
            });
          });
        });
      }
      var jQuery;
      if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
        /** @type {!Element} */
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");
        if (script.readyState) {
          /**
           * @return {undefined}
           */
          script.onreadystatechange = function() {
            if (!("complete" != this.readyState && "loaded" != this.readyState)) {
              ready();
            }
          };
        } else {
          /** @type {function(): undefined} */
          script.onload = ready;
        }
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);
      } else {
        jQuery = window.jQuery;
        init();
      }
    }();
  }
});
