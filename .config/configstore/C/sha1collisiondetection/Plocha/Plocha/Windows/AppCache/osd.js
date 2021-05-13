(function(window, document) {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var k;
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this);
    function ea(a, b) {
        if (b)
            a: {
                var c = da;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }
    function fa(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    function t(a) {
        if (!(a instanceof Array)) {
            a = fa(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
    var ha = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , ia;
    if ("function" == typeof Object.setPrototypeOf)
        ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ka = {
                a: !0
            }
              , la = {};
            try {
                la.__proto__ = ka;
                ja = la.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ma = ia;
    function v(a, b) {
        a.prototype = ha(b.prototype);
        a.prototype.constructor = a;
        if (ma)
            ma(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.rc = b.prototype
    }
    var na = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    ea("Object.assign", function(a) {
        return a || na
    });
    ea("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    var w = this || self;
    function oa() {}
    function x(a) {
        a.Sa = void 0;
        a.l = function() {
            return a.Sa ? a.Sa : a.Sa = new a
        }
    }
    function pa(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function qa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function ra(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function sa(a, b) {
        a = a.split(".");
        var c = w;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function ta(a) {
        return a
    }
    ;var ua;
    function va(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function y(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    function wa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function xa(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function ya(a, b, c) {
        var d = c;
        y(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
    function za(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Aa(a, b) {
        var c = 0;
        y(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }
    function Ca(a, b) {
        b = Da(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Da(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return f;
        return -1
    }
    function Ea(a, b) {
        return 0 <= va(a, b)
    }
    function Fa(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Ga(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Ha(a, b) {
        a.sort(b || Ia)
    }
    function Ia(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function Ja(a) {
        if (!arguments.length)
            return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
            arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++)
                e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    }
    ;function Ka(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;function La(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Ma(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function Na(a) {
        var b = Oa, c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b))
                return !1;
        return !0
    }
    function Pa(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function z(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Qa.length; f++)
                c = Qa[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;var Ra;
    function Sa(a, b) {
        this.g = a === Ta && b || "";
        this.h = Ua
    }
    Sa.prototype.ub = !0;
    Sa.prototype.qb = function() {
        return this.g
    }
    ;
    function Va(a) {
        return a instanceof Sa && a.constructor === Sa && a.h === Ua ? a.g : "type_error:Const"
    }
    var Ua = {}
      , Ta = {};
    function Wa(a, b) {
        this.g = b === Ya ? a : ""
    }
    Wa.prototype.ub = !0;
    Wa.prototype.qb = function() {
        return this.g.toString()
    }
    ;
    Wa.prototype.toString = function() {
        return this.g + ""
    }
    ;
    var Ya = {};
    function Za(a) {
        if (void 0 === Ra) {
            var b = null;
            var c = w.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ta,
                        createScript: ta,
                        createScriptURL: ta
                    })
                } catch (d) {
                    w.console && w.console.error(d.message)
                }
                Ra = b
            } else
                Ra = b
        }
        a = (b = Ra) ? b.createScriptURL(a) : a;
        return new Wa(a,Ya)
    }
    function $a(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    }
    ;function ab(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var bb = /&/g
      , cb = /</g
      , db = />/g
      , eb = /"/g
      , fb = /'/g
      , gb = /\x00/g
      , hb = /[\x00&<>"']/;
    function A(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }
    function ib(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var B;
    a: {
        var jb = w.navigator;
        if (jb) {
            var kb = jb.userAgent;
            if (kb) {
                B = kb;
                break a
            }
        }
        B = ""
    }
    function C(a) {
        return -1 != B.indexOf(a)
    }
    ;function lb() {
        return C("Safari") && !(mb() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android"))
    }
    function mb() {
        return (C("Chrome") || C("CriOS")) && !C("Edge")
    }
    ;function nb(a) {
        hb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(bb, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(cb, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(db, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(eb, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(fb, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(gb, "&#0;")));
        return a
    }
    function ob() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }
    function pb(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    function qb(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;var rb = 0
      , sb = 0;
    function tb() {
        this.g = []
    }
    tb.prototype.length = function() {
        return this.g.length
    }
    ;
    tb.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    }
    ;
    function ub(a, b) {
        for (; 127 < b; )
            a.g.push(b & 127 | 128),
            b >>>= 7;
        a.g.push(b)
    }
    function vb(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    }
    ;function wb(a) {
        wb[" "](a);
        return a
    }
    wb[" "] = oa;
    function xb(a, b) {
        try {
            return wb(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    function yb(a, b) {
        var c = zb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    }
    ;var Ab = C("Opera")
      , D = C("Trident") || C("MSIE")
      , Bb = C("Edge")
      , Cb = C("Gecko") && !(A(B, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge")
      , Db = A(B, "WebKit") && !C("Edge")
      , Eb = Db && C("Mobile");
    function Fb() {
        var a = w.document;
        return a ? a.documentMode : void 0
    }
    var Gb;
    a: {
        var Hb = ""
          , Ib = function() {
            var a = B;
            if (Cb)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Bb)
                return /Edge\/([\d\.]+)/.exec(a);
            if (D)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Db)
                return /WebKit\/(\S+)/.exec(a);
            if (Ab)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Ib && (Hb = Ib ? Ib[1] : "");
        if (D) {
            var Jb = Fb();
            if (null != Jb && Jb > parseFloat(Hb)) {
                Gb = String(Jb);
                break a
            }
        }
        Gb = Hb
    }
    var Kb = Gb
      , zb = {};
    function Lb(a) {
        return yb(a, function() {
            for (var b = 0, c = ab(String(Kb)).split("."), d = ab(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || ""
                  , h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length)
                        break;
                    b = ib(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || ib(0 == g[2].length, 0 == h[2].length) || ib(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Mb;
    if (w.document && D) {
        var Nb = Fb();
        Mb = Nb ? Nb : parseInt(Kb, 10) || void 0
    } else
        Mb = void 0;
    var Ob = Mb;
    var Pb = {}
      , Qb = null;
    function Rb() {
        this.h = [];
        this.g = new tb
    }
    function Sb(a, b, c) {
        if (null != c) {
            ub(a.g, 8 * b);
            a = a.g;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0,
            b = (~b >>> 0) + 1,
            4294967295 < b && (b = 0,
            d++,
            4294967295 < d && (d = 0)));
            rb = b;
            sb = d;
            c = rb;
            for (b = sb; 0 < b || 127 < c; )
                a.g.push(c & 127 | 128),
                c = (c >>> 7 | b << 25) >>> 0,
                b >>>= 7;
            a.g.push(c)
        }
    }
    ;var Tb = "function" === typeof Uint8Array;
    function Ub() {}
    var Vb = [];
    function Wb(a) {
        var b = a.i + a.j;
        a.g[b] || (a.h = a.g[b] = {})
    }
    function Xb(a, b) {
        if (b < a.i) {
            b += a.j;
            var c = a.g[b];
            return c !== Vb ? c : a.g[b] = []
        }
        if (a.h)
            return c = a.h[b],
            c === Vb ? a.h[b] = [] : c
    }
    function Yb(a, b) {
        a = Xb(a, b);
        return null == a ? 0 : a
    }
    function Zb(a, b, c) {
        0 !== c ? b < a.i ? a.g[b + a.j] = c : (Wb(a),
        a.h[b] = c) : b < a.i ? a.g[b + a.j] = null : (Wb(a),
        delete a.h[b]);
        return a
    }
    function $b(a) {
        if (a.m)
            for (var b in a.m)
                if (Object.prototype.hasOwnProperty.call(a.m, b)) {
                    var c = a.m[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++)
                            c[d] && $b(c[d]);
                    else
                        c && $b(c)
                }
        return a.g
    }
    Ub.prototype.toString = function() {
        return $b(this).toString()
    }
    ;
    var ac;
    ac = ["av.key", "js", "20210423"].slice(-1)[0];
    var E = document
      , F = window;
    function bc(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }
    ;var cc = Ka(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            w.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function dc(a) {
        return a ? a.passive && cc() ? a : a.capture || !1 : !1
    }
    function ec(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, dc(d)),
        !0) : !1
    }
    function fc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, dc(void 0))
    }
    ;var gc = !D || 9 <= Number(Ob)
      , hc = D || Ab || Db;
    function G(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    G.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    G.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    G.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function H(a, b) {
        this.width = a;
        this.height = b
    }
    H.prototype.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    H.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    H.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    H.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    function ic(a) {
        return a ? new jc(I(a)) : ua || (ua = new jc)
    }
    function kc() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document,
        a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : lc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }
    function lc(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++)
                    b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++)
                b = g.className,
                "function" == typeof b.split && Ea(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }
    function mc(a, b) {
        La(b, function(c, d) {
            c && "object" == typeof c && c.ub && (c = c.qb());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : nc.hasOwnProperty(d) ? a.setAttribute(nc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var nc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function oc(a) {
        var b = a.scrollingElement ? a.scrollingElement : Db || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return D && Lb("10") && a.pageYOffset != b.scrollTop ? new G(b.scrollLeft,b.scrollTop) : new G(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function pc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    function qc(a, b, c) {
        var d = arguments
          , e = document
          , f = String(d[0])
          , g = d[1];
        if (!gc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', nb(g.name), '"');
            if (g.type) {
                f.push(' type="', nb(g.type), '"');
                var h = {};
                z(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = String(f);
        "application/xhtml+xml" === e.contentType && (f = f.toLowerCase());
        f = e.createElement(f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : mc(f, g));
        2 < d.length && rc(e, f, d, 2);
        return f
    }
    function rc(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!pa(f) || qa(f) && 0 < f.nodeType)
                e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (qa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                y(g ? Ga(f) : f, e)
            }
        }
    }
    function I(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function sc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? pc(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
    function tc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function jc(a) {
        this.g = a || w.document || document
    }
    jc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    }
    ;
    jc.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    jc.prototype.append = function(a, b) {
        rc(I(a), a, arguments, 1)
    }
    ;
    jc.prototype.canHaveChildren = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    function uc() {
        return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    }
    ;var vc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function wc(a) {
        try {
            return !!a && null != a.location.href && xb(a, "foo")
        } catch (b) {
            return !1
        }
    }
    function xc(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    function zc() {
        var a = Ac;
        if (!a)
            return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c)
                return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    }
    ;function J(a, b, c, d) {
        this.top = a;
        this.h = b;
        this.g = c;
        this.left = d
    }
    function Bc(a) {
        return a.h - a.left
    }
    function Cc(a) {
        return a.g - a.top
    }
    function Dc(a) {
        return new J(a.top,a.h,a.g,a.left)
    }
    J.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.h = Math.ceil(this.h);
        this.g = Math.ceil(this.g);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    J.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.h = Math.floor(this.h);
        this.g = Math.floor(this.g);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    J.prototype.round = function() {
        this.top = Math.round(this.top);
        this.h = Math.round(this.h);
        this.g = Math.round(this.g);
        this.left = Math.round(this.left);
        return this
    }
    ;
    function Ec(a, b, c) {
        b instanceof G ? (a.left += b.x,
        a.h += b.x,
        a.top += b.y,
        a.g += b.y) : (a.left += b,
        a.h += b,
        "number" === typeof c && (a.top += c,
        a.g += c));
        return a
    }
    ;function Fc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }
    function Gc(a) {
        if (Hc())
            Fc(window, a, !0);
        else {
            var b = w.document;
            if (b.body) {
                var c = b.getElementById("goog-srcless-iframe");
                c || (c = b.createElement("IFRAME"),
                c.style.display = "none",
                c.id = "goog-srcless-iframe",
                b.body.appendChild(c));
                b = c
            } else
                b = null;
            b && b.contentWindow && Fc(b.contentWindow, a, !0)
        }
    }
    var Hc = Ka(function() {
        return "referrerPolicy"in w.document.createElement("img")
    });
    var Ic = {};
    function Jc() {}
    function Kc(a, b) {
        if (b !== Ic)
            throw Error("Bad secret");
        this.g = a
    }
    v(Kc, Jc);
    Kc.prototype.toString = function() {
        return this.g
    }
    ;
    new Kc("about:invalid#zTSz",Ic);
    var Lc = {};
    function Mc(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
    function Nc(a, b) {
        var c = new G(0,0)
          , d = pc(I(a));
        if (!xb(d, "parent"))
            return c;
        do {
            if (d == b) {
                var e = a
                  , f = I(e);
                var g = new G(0,0);
                var h = f ? I(f) : document;
                h = !D || 9 <= Number(Ob) || "CSS1Compat" == ic(h).g.compatMode ? h.documentElement : h.body;
                e != h && (e = Mc(e),
                f = oc(ic(f).g),
                g.x = e.left + f.x,
                g.y = e.top + f.y)
            } else
                g = Mc(a),
                g = new G(g.left,g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
    ;function Oc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }
    function Pc() {
        var a = E.documentElement
          , b = K();
        try {
            if (E.createEvent) {
                var c = E.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Oc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load",{
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Oc(b.Event)) {
                var e = new Event("osd_load",{
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }
    function Qc() {
        var a = K();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var Rc = !!window.google_async_iframe_id
      , Sc = Rc && window.parent || window;
    function K() {
        if (Rc && !wc(Sc)) {
            var a = "." + E.domain;
            try {
                for (; 2 < a.split(".").length && !wc(Sc); )
                    E.domain = a = a.substr(a.indexOf(".") + 1),
                    Sc = window.parent
            } catch (b) {}
            wc(Sc) || (Sc = window)
        }
        return Sc
    }
    ;function Tc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c)
                    var f = (new H(e.innerWidth,e.innerHeight)).round();
                else {
                    var g = (e || window).document
                      , h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new H(h.clientWidth,h.clientHeight)).round()
                }
                d = f
            } catch (q) {
                d = new H(-12245933,-12245933)
            }
            a = d;
            var n = oc(ic(b.document).g);
            if (-12245933 == a.width) {
                var m = a.width;
                var l = new J(m,m,m,m)
            } else
                l = new J(n.y,n.x + a.width,n.y + a.height,n.x);
            return l
        } catch (q) {
            return new J(-12245933,-12245933,-12245933,-12245933)
        }
    }
    ;var Uc = {
        NONE: 0,
        $b: 1
    }
      , Vc = {
        Zb: 0,
        oc: 1,
        nc: 2
    };
    function Wc() {
        this.B = 0;
        this.i = !1;
        this.h = -1;
        this.g = !1;
        this.j = 0
    }
    Wc.prototype.isVisible = function() {
        return this.g ? .3 <= this.B : .5 <= this.B
    }
    ;
    var L = {
        Yb: 0,
        ac: 1
    }
      , Xc = {
        44738855: 0,
        44738856: 1
    }
      , Yc = {
        668123728: 0,
        668123729: 1
    }
      , Zc = {
        44727842: 0,
        44727843: 1
    }
      , $c = {
        44731964: 0,
        44731965: 1
    }
      , ad = {
        NONE: 0,
        hc: 1,
        bc: 2
    }
      , bd = {
        480596784: 0,
        480596785: 1,
        21063355: 2
    };
    function cd() {
        this.g = null;
        this.i = !1;
        this.j = null
    }
    function M(a) {
        a.i = !0;
        return a
    }
    function dd(a, b) {
        a.j = void 0 === b ? null : b
    }
    function ed(a, b) {
        a.j && y(b, function(c) {
            c = a.j[c];
            void 0 !== c && a.h(c)
        })
    }
    function fd(a) {
        cd.call(this);
        this.m = a
    }
    v(fd, cd);
    fd.prototype.h = function(a) {
        var b;
        if (!(b = null !== this.g)) {
            a: {
                b = this.m;
                for (c in b)
                    if (b[c] == a) {
                        var c = !0;
                        break a
                    }
                c = !1
            }
            b = !c
        }
        b || (this.g = a)
    }
    ;
    function gd() {
        cd.call(this)
    }
    v(gd, cd);
    gd.prototype.h = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    }
    ;
    function hd() {
        this.g = {};
        this.h = {}
    }
    function N(a, b, c) {
        a.g[b] || (a.g[b] = new fd(c));
        return a.g[b]
    }
    function id(a, b, c) {
        (a = a.g[b]) && a.h(c)
    }
    function O(a, b) {
        var c = a.h;
        if (null !== c && b in c)
            return a.h[b];
        if (a = a.g[b])
            return a.g
    }
    function jd(a) {
        var b = {}
          , c = Ma(a.g, function(d) {
            return d.i
        });
        La(c, function(d, e) {
            d = void 0 !== a.h[e] ? String(a.h[e]) : d.i && null !== d.g ? String(d.g) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }
    function kd(a, b) {
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("=")
              , e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.g[e]) && e.h(d)
        }
        return b.join("&")
    }
    function ld(a, b) {
        y(Pa(a.g), function(c) {
            return ed(c, b)
        })
    }
    function md(a, b) {
        b && "string" === typeof b && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","),
        b = xa(b, function(c) {
            return Number(c)
        }),
        ld(a, b))
    }
    ;var nd = !D && !lb();
    function od(a, b) {
        if (/-[a-z]/.test(b))
            return null;
        if (nd && a.dataset) {
            if (!(!C("Android") || mb() || C("Firefox") || C("FxiOS") || C("Opera") || C("Silk") || b in a.dataset))
                return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + pb(b))
    }
    function pd(a, b) {
        return /-[a-z]/.test(b) ? !1 : nd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + pb(b)) : !!a.getAttribute("data-" + pb(b))
    }
    ;function qd() {
        this.g = this.h = null;
        this.i = "no"
    }
    ;function rd(a, b) {
        this.h = (void 0 === a ? 0 : a) || 0;
        this.g = (void 0 === b ? "" : b) || ""
    }
    rd.prototype.i = function() {
        return !!this.h || !!this.g
    }
    ;
    rd.prototype.toString = function() {
        return this.h + (this.g ? "-" : "") + this.g
    }
    ;
    rd.prototype.matches = function(a) {
        return this.g || a.g ? this.g == a.g : this.h || a.h ? this.h == a.h : !1
    }
    ;
    function P() {}
    P.prototype.g = function() {
        return 0
    }
    ;
    P.prototype.i = function() {
        return 0
    }
    ;
    P.prototype.j = function() {
        return 0
    }
    ;
    P.prototype.h = function() {
        return 0
    }
    ;
    function sd() {
        if (!td())
            throw Error();
    }
    v(sd, P);
    function td() {
        return !(!F || !F.performance)
    }
    sd.prototype.g = function() {
        return td() && F.performance.now ? F.performance.now() : P.prototype.g.call(this)
    }
    ;
    sd.prototype.i = function() {
        return td() && F.performance.memory ? F.performance.memory.totalJSHeapSize || 0 : P.prototype.i.call(this)
    }
    ;
    sd.prototype.j = function() {
        return td() && F.performance.memory ? F.performance.memory.usedJSHeapSize || 0 : P.prototype.j.call(this)
    }
    ;
    sd.prototype.h = function() {
        return td() && F.performance.memory ? F.performance.memory.jsHeapSizeLimit || 0 : P.prototype.h.call(this)
    }
    ;
    function ud() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[E.visibilityState || E.webkitVisibilityState || E.mozVisibilityState || ""] || 0
    }
    ;function vd() {}
    vd.prototype.isVisible = function() {
        return 1 === ud()
    }
    ;
    var wd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    function xd() {
        var a = w
          , b = []
          , c = null;
        do {
            var d = a;
            if (wc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else
                e = c,
                c = null;
            b.push(new yd(e || "",d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d)
            b[d].depth = a - d;
        d = w;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a)
                e = b[a],
                e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
                e.xb = !0);
        return b
    }
    function zd(a, b) {
        this.g = a;
        this.h = b
    }
    function yd(a, b, c) {
        this.url = a;
        this.C = b;
        this.xb = !!c;
        this.depth = null
    }
    ;function Ad() {
        this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = []
    }
    function Bd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
    function Cd(a, b, c, d, e) {
        var f = [];
        xc(a, function(g, h) {
            (g = Dd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function Dd(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(Dd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(Cd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function Ed(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Fd(a) - c.length;
        if (0 > d)
            return "";
        a.g.sort(function(l, q) {
            return l - q
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], n = 0; n < h.length; n++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = Cd(h[n], a.i, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.i;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    function Fd(a) {
        var b = 1, c;
        for (c in a.h)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }
    ;function Gd() {
        this.h = new vd;
        this.g = td() ? new sd : new P
    }
    function Hd(a, b, c) {
        return F.setTimeout(b, c)
    }
    function Id(a) {
        Q();
        var b = K() || F;
        Fc(b, a, !1)
    }
    x(Gd);
    function Jd() {}
    function Q() {
        var a = Jd.l();
        if (!a.g) {
            if (!F)
                throw Error("Context has not been set and window is undefined.");
            a.g = Gd.l()
        }
        return a.g
    }
    x(Jd);
    function Kd(a) {
        this.m = null;
        a || (a = []);
        this.j = -1;
        this.g = a;
        a: {
            if (a = this.g.length) {
                --a;
                var b = this.g[a];
                if (!(null === b || "object" != typeof b || Array.isArray(b) || Tb && b instanceof Uint8Array)) {
                    this.i = a - -1;
                    this.h = b;
                    break a
                }
            }
            this.i = Number.MAX_VALUE
        }
    }
    v(Kd, Ub);
    function Ld(a) {
        this.i = a;
        this.g = -1;
        this.h = this.j = 0
    }
    function Md(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e)
                d[e] = arguments[e];
            if (-1 < a.g)
                return b.apply(null, t(d));
            try {
                return a.g = a.i.g.g(),
                b.apply(null, t(d))
            } finally {
                a.j += a.i.g.g() - a.g,
                a.g = -1,
                a.h += 1
            }
        }
    }
    ;function Nd(a, b) {
        this.h = a;
        this.i = b;
        this.g = new Ld(a)
    }
    ;var Od = {
        kc: 1,
        pc: 2,
        jc: 3
    };
    Za(Va(new Sa(Ta,"https://pagead2.googlesyndication.com/pagead/osd.js")));
    function R() {
        this.o = void 0;
        this.i = this.u = 0;
        this.s = -1;
        this.g = new hd;
        dd(M(N(this.g, "mv", ad)), bd);
        N(this.g, "omid", L);
        M(N(this.g, "epoh", L));
        M(N(this.g, "epph", L));
        dd(M(N(this.g, "umt", L)), Yc);
        M(N(this.g, "phel", L));
        M(N(this.g, "phell", L));
        M(N(this.g, "oseid", Od));
        var a = this.g;
        a.g.sloi || (a.g.sloi = new gd);
        M(a.g.sloi);
        M(N(this.g, "ovms", Vc));
        M(N(this.g, "xdi", L));
        M(N(this.g, "amp", L));
        M(N(this.g, "prf", L));
        M(N(this.g, "gtx", L));
        M(N(this.g, "mvp_lv", L));
        dd(M(N(this.g, "vcm", L)), Zc);
        dd(M(N(this.g, "ssmol", L)), $c);
        dd(M(N(this.g, "aud", L)), Xc);
        this.j = new Nd(Q(),this.g);
        this.h = null;
        this.m = !1
    }
    x(R);
    function Pd() {
        var a = "https:";
        F && F.location && "http:" === F.location.protocol && (a = "http:");
        this.h = a;
        this.g = .01;
        this.i = Math.random()
    }
    function Qd(a, b, c, d, e) {
        if ((d ? a.i : Math.random()) < (e || a.g))
            try {
                if (c instanceof Ad)
                    var f = c;
                else
                    f = new Ad,
                    xc(c, function(h, n) {
                        var m = f
                          , l = m.j++;
                        h = Bd(n, h);
                        m.g.push(l);
                        m.h[l] = h
                    });
                var g = Ed(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && Id(g)
            } catch (h) {}
    }
    ;var Rd = null;
    function Sd() {
        var a = w.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function Td() {
        var a = void 0 === a ? w : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    ;function Ud(a, b) {
        var c = Td() || Sd();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    }
    ;var S = w.performance
      , Vd = !!(S && S.mark && S.measure && S.clearMarks)
      , Wd = Ka(function() {
        var a;
        if (a = Vd) {
            var b;
            if (null === Rd) {
                Rd = "";
                try {
                    a = "";
                    try {
                        a = w.top.location.hash
                    } catch (c) {
                        a = w.location.hash
                    }
                    a && (Rd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                } catch (c) {}
            }
            b = Rd;
            a = !!b.indexOf && 0 <= b.indexOf("1337")
        }
        return a
    });
    function Xd() {
        var a = K();
        this.h = [];
        this.i = a || w;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
        this.h = a.google_js_reporting_queue,
        b = a.google_measure_js_timing);
        this.g = Wd() || (null != b ? b : 1 > Math.random())
    }
    function Yd(a) {
        a && S && Wd() && (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Xd.prototype.start = function(a, b) {
        if (!this.g)
            return null;
        a = new Ud(a,b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        S && Wd() && S.mark(b);
        return a
    }
    ;
    Xd.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (Td() || Sd()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            S && Wd() && S.mark(b);
            !this.g || 2048 < this.h.length || this.h.push(a)
        }
    }
    ;
    function Zd() {
        var a = $d;
        this.h = ae;
        this.mb = "jserror";
        this.Wa = !0;
        this.La = null;
        this.i = this.Ta;
        this.g = void 0 === a ? null : a
    }
    function be(a, b, c) {
        return Md(R.l().j.g, function() {
            try {
                if (a.g && a.g.g) {
                    var d = a.g.start(b.toString(), 3);
                    var e = c();
                    a.g.end(d)
                } else
                    e = c()
            } catch (g) {
                var f = a.Wa;
                try {
                    Yd(d),
                    f = a.i(b, new ce(de(g)), void 0, void 0)
                } catch (h) {
                    a.Ta(217, h)
                }
                if (!f)
                    throw g;
            }
            return e
        })()
    }
    function ee(a, b) {
        var c = fe;
        return Md(R.l().j.g, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f)
                e[f] = arguments[f];
            return be(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    Zd.prototype.Ta = function(a, b, c, d, e) {
        e = e || this.mb;
        try {
            var f = new Ad;
            f.g.push(1);
            f.h[1] = Bd("context", a);
            b.error && b.meta && b.id || (b = new ce(de(b)));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = Bd("msg", g)
            }
            var h = b.meta || {};
            if (this.La)
                try {
                    this.La(h)
                } catch (yc) {}
            if (d)
                try {
                    d(h)
                } catch (yc) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            var n = xd()
              , m = new yd(w.location.href,w,!1);
            b = null;
            var l = n.length - 1;
            for (d = l; 0 <= d; --d) {
                var q = n[d];
                !b && wd.test(q.url) && (b = q);
                if (q.url && !q.xb) {
                    m = q;
                    break
                }
            }
            q = null;
            var p = n.length && n[l].url;
            0 != m.depth && p && (q = n[l]);
            var u = new zd(m,q);
            if (u.h) {
                var r = u.h.url || "";
                f.g.push(4);
                f.h[4] = Bd("top", r)
            }
            var Ba = {
                url: u.g.url || ""
            };
            if (u.g.url) {
                var Xa = u.g.url.match(vc)
                  , me = Xa[1]
                  , ne = Xa[3]
                  , oe = Xa[4];
                n = "";
                me && (n += me + ":");
                ne && (n += "//",
                n += ne,
                oe && (n += ":" + oe));
                var pe = n
            } else
                pe = "";
            Ba = [Ba, {
                url: pe
            }];
            f.g.push(5);
            f.h[5] = Ba;
            Qd(this.h, e, f, !1, c)
        } catch (yc) {
            try {
                Qd(this.h, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: de(yc),
                    url: u && u.g.url
                }, !1, c)
            } catch (si) {}
        }
        return this.Wa
    }
    ;
    function de(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c; )
                    c = a,
                    a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    }
    function ce(a) {
        bc.call(this, Error(a), {
            message: a
        })
    }
    v(ce, bc);
    var ae, fe, $d = new Xd;
    function ge() {
        var a = K();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = $d,
        a.g = !1,
        a.h != a.i.google_js_reporting_queue && (Wd() && y(a.h, Yd),
        a.h.length = 0))
    }
    (function() {
        ae = new Pd;
        fe = new Zd;
        var a = K();
        a && a.document && ("complete" == a.document.readyState ? ge() : $d.g && ec(a, "load", function() {
            ge()
        }))
    }
    )();
    function he(a) {
        fe.La = function(b) {
            y(a, function(c) {
                c(b)
            })
        }
    }
    function ie(a, b) {
        return be(fe, a, b)
    }
    function je(a, b) {
        return ee(a, b)
    }
    function ke(a, b) {
        Qd(ae, a, b, "jserror" != a, void 0)
    }
    function le(a, b, c, d) {
        fe.Ta(a, b, c, d)
    }
    ;var qe = Date.now()
      , re = -1
      , se = -1
      , te = !1;
    function T() {
        return Date.now() - qe
    }
    function ue() {
        var a = R.l().o
          , b = 0 <= se ? T() - se : -1
          , c = te ? T() - re : -1;
        if (947190542 == a)
            return 100;
        if (79463069 == a)
            return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        le(637, Error(), .001);
        var e = b;
        -1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    }
    ;function ve(a, b, c) {
        var d = new J(0,0,0,0);
        this.time = a;
        this.volume = null;
        this.i = b;
        this.g = d;
        this.h = c
    }
    ;function we(a, b, c, d, e, f, g) {
        this.m = a;
        this.j = b;
        this.i = c;
        this.h = d;
        this.o = e;
        this.g = f;
        this.s = g
    }
    ;function xe(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent; )
            a = a.parent,
            d++,
            wc(a) && (c = a,
            b = d);
        return {
            C: c,
            level: b
        }
    }
    ;var Oa = {
        Xb: "addEventListener",
        cc: "getMaxSize",
        dc: "getScreenSize",
        ec: "getState",
        fc: "getVersion",
        lc: "removeEventListener",
        ic: "isViewable"
    };
    function ye(a) {
        var b = a !== a.top
          , c = a.top === xe(a).C
          , d = -1
          , e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else
            d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2),
        Na(function(g) {
            return "function" === typeof f[g]
        }) || (e = 1));
        return {
            J: f,
            ya: e,
            Wb: d
        }
    }
    ;function ze(a) {
        return (a = a.document) && "function" === typeof a.elementFromPoint
    }
    ;if (E && E.URL) {
        var Ae, Ac = E.URL;
        Ae = !!Ac && 0 < zc().length;
        fe.Wa = !Ae
    }
    function Be(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = ee(d, c);
        ec(a, b, c, {
            capture: e
        });
        return c
    }
    ;function Ce(a) {
        var b = [];
        La(a, function(c, d) {
            d = encodeURIComponent(d);
            "string" === typeof c && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + Date.now());
        return b.join("\n")
    }
    ;var De = 0;
    function Ee(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }
    function Fe(a, b) {
        try {
            De++,
            b.postMessage(a, "*")
        } catch (c) {}
    }
    function Ge(a, b) {
        b && (a(b),
        b.frames && y(b.frames, function(c) {
            Ge(a, c)
        }))
    }
    function He(a) {
        return new J(a.top,a.right,a.bottom,a.left)
    }
    function Ie() {
        var a = Q().h;
        return 0 === ud() ? -1 : a.isVisible() ? 0 : 1
    }
    function Je(a) {
        return [a.top, a.left, a.g, a.h].join("-")
    }
    function Ke(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = wa(c, function(e) {
                    var f = e.parent && e.parent !== e;
                    return e === F.top || f
                }),
                a = fa(c),
                c = a.next(); !c.done; c = a.next())
                    Fe(b, c.value);
            else {
                c = [];
                var d = sc(a);
                d && c.push(d);
                if (0 === c.length)
                    try {
                        c = xa(lc(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                            return sc(e)
                        })
                    } catch (e) {}
                a = fa(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && Ge(ra(Fe, b), c)
                    } catch (e) {}
                }
            }
    }
    function Le(a, b, c) {
        try {
            var d = Ce(b);
            Ke(a, d, c)
        } catch (e) {}
    }
    ;function Me() {
        var a = B;
        return a ? za("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return A(a, b)
        }) || A(a, "OMI/") && !A(a, "XiaoMi/") ? !0 : A(a, "Presto") && A(a, "Linux") && !A(a, "X11") && !A(a, "Android") && !A(a, "Mobi") : !1
    }
    function Ne() {
        var a = B;
        return A(a, "AppleTV") || A(a, "Apple TV") || A(a, "CFNetwork") || A(a, "tvOS")
    }
    function Oe() {
        var a = B;
        return A(a, "sdk_google_atv_x86") || A(a, "Android TV")
    }
    ;function U() {
        this.i = !wc(F.top);
        this.F = !this.i;
        this.o = uc() || !uc() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"));
        var a = xd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(vc)[3] || null) && decodeURI(a);
        this.g = new J(0,0,0,0);
        this.s = new H(0,0);
        this.m = new H(0,0);
        this.h = new J(0,0,0,0);
        this.u = new G(0,0);
        this.D = this.A = !1;
        this.j = !(!F || !ye(F).J);
        Pe(this)
    }
    function Qe(a, b) {
        b && b.screen && (a.s = new H(b.screen.width,b.screen.height))
    }
    function Re(a, b) {
        var c = a.g ? new H(Bc(a.g),Cc(a.g)) : new H(0,0);
        b = void 0 === b ? F : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0
          , e = 0;
        try {
            var f = b.document
              , g = f.body
              , h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight)
                d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight,
                e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var n = h.scrollHeight
                  , m = h.scrollWidth
                  , l = h.offsetHeight
                  , q = h.offsetWidth;
                h.clientHeight != l && (n = g.scrollHeight,
                m = g.scrollWidth,
                l = g.offsetHeight,
                q = g.offsetWidth);
                n > c.height ? n > l ? (d = n,
                e = m) : (d = l,
                e = q) : n < l ? (d = n,
                e = m) : (d = l,
                e = q)
            }
            var p = new H(e,d)
        } catch (u) {
            p = new H(-12245933,-12245933)
        }
        a.m = p
    }
    function Pe(a) {
        F && F.document && (a.h = Tc(!1, F, a.o),
        a.g = Tc(!0, F, a.o),
        Re(a, F),
        Qe(a, F))
    }
    function Se() {
        if (U.l().D)
            return !0;
        var a = Q().h.isVisible()
          , b = 0 === ud();
        return a || b
    }
    x(U);
    function Te(a) {
        this.i = a;
        this.h = 0;
        this.g = null
    }
    Te.prototype.cancel = function() {
        Q();
        F.clearTimeout(this.g);
        this.g = null
    }
    ;
    function Ue(a) {
        Q();
        a.g = Hd(0, Md(R.l().j.g, je(143, function() {
            a.h++;
            a.i.Hb()
        })), ue())
    }
    ;function V(a, b, c) {
        this.C = a;
        this.U = void 0 === c ? "na" : c;
        this.j = [];
        this.A = !1;
        this.i = new ve(-1,!0,this);
        this.g = this;
        this.o = b;
        this.D = this.u = !1;
        this.M = "uk";
        this.K = !1;
        this.s = !0
    }
    k = V.prototype;
    k.Y = function() {
        return !1
    }
    ;
    k.Ea = function() {
        return this.A = !0
    }
    ;
    k.aa = function() {
        return this.g.M
    }
    ;
    k.ha = function() {
        return this.g.D
    }
    ;
    function Ve(a, b, c) {
        if (!a.D || (void 0 === c ? 0 : c))
            a.D = !0,
            a.M = b,
            a.o = 0,
            a.g != a || We(a)
    }
    k.I = function() {
        return this.g.U
    }
    ;
    k.R = function() {
        return this.g.pb()
    }
    ;
    k.pb = function() {
        return {}
    }
    ;
    k.S = function() {
        return this.g.o
    }
    ;
    function Xe(a, b) {
        Ea(a.j, b) || (a.j.push(b),
        b.ga(a.g),
        b.W(a.i),
        b.V() && (a.u = !0))
    }
    k.Fa = function() {
        var a = U.l();
        a.g = Tc(!0, this.C, a.o)
    }
    ;
    k.Ga = function() {
        Qe(U.l(), this.C)
    }
    ;
    k.$a = function() {
        Re(U.l(), this.C)
    }
    ;
    k.ab = function() {
        var a = U.l();
        a.h = Tc(!1, this.C, a.o)
    }
    ;
    k.Qa = function() {
        return this.i.g
    }
    ;
    function Ye(a) {
        a = a.g;
        a.Ga();
        a.Fa();
        a.ab();
        a.$a();
        a.i.g = a.Qa()
    }
    k.Hb = function() {}
    ;
    function Ze(a) {
        a.u = a.j.length ? za(a.j, function(b) {
            return b.V()
        }) : !1
    }
    function $e(a) {
        var b = Ga(a.j);
        y(b, function(c) {
            c.W(a.i)
        })
    }
    function We(a) {
        var b = Ga(a.j);
        y(b, function(c) {
            c.ga(a.g)
        });
        a.g != a || $e(a)
    }
    k.ga = function(a) {
        var b = this.g;
        this.g = a.S() >= this.o ? a : this;
        b !== this.g ? (this.s = this.g.s,
        We(this)) : this.s !== this.g.s && (this.s = this.g.s,
        We(this))
    }
    ;
    k.W = function(a) {
        if (a.h === this.g) {
            var b = this.i
              , c = this.u;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.i == a.i)
                b = b.g,
                c = a.g,
                c = b == c ? !0 : b && c ? b.top == c.top && b.h == c.h && b.g == c.g && b.left == c.left : !1;
            this.i = a;
            !c && $e(this)
        }
    }
    ;
    k.V = function() {
        return this.u
    }
    ;
    k.G = function() {
        this.K = !0
    }
    ;
    k.ia = function() {
        return this.K
    }
    ;
    function af(a, b, c, d) {
        this.h = a;
        this.g = new J(0,0,0,0);
        this.s = new J(0,0,0,0);
        this.i = b;
        this.H = c;
        this.K = d;
        this.F = !1;
        this.timestamp = -1;
        this.u = new we(b.i,this.g,new J(0,0,0,0),0,0,T(),0)
    }
    k = af.prototype;
    k.ma = function() {
        return !0
    }
    ;
    k.P = function() {}
    ;
    k.G = function() {
        if (!this.ia()) {
            var a = this.i
              , b = a.j
              , c = va(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.u && this.V() && Ze(a);
            this.P();
            this.F = !0
        }
    }
    ;
    k.ia = function() {
        return this.F
    }
    ;
    k.R = function() {
        return this.i.R()
    }
    ;
    k.S = function() {
        return this.i.S()
    }
    ;
    k.aa = function() {
        return this.i.aa()
    }
    ;
    k.ha = function() {
        return this.i.ha()
    }
    ;
    k.ga = function() {}
    ;
    k.W = function() {
        this.Z()
    }
    ;
    k.V = function() {
        return this.K
    }
    ;
    function bf(a) {
        this.m = !1;
        this.g = a;
        this.j = oa
    }
    k = bf.prototype;
    k.S = function() {
        return this.g.S()
    }
    ;
    k.aa = function() {
        return this.g.aa()
    }
    ;
    k.ha = function() {
        return this.g.ha()
    }
    ;
    k.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Oa(a, b, c),
        Xe(this.g, d));
        return d
    }
    ;
    k.bb = function() {
        return this.na()
    }
    ;
    k.na = function() {
        return !1
    }
    ;
    k.vb = function(a) {
        return this.g.Ea() ? (Xe(this.g, this),
        this.j = a,
        !0) : !1
    }
    ;
    k.ga = function(a) {
        0 == a.S() && this.j(a.aa(), this)
    }
    ;
    k.W = function() {}
    ;
    k.V = function() {
        return !1
    }
    ;
    k.G = function() {
        this.m = !0
    }
    ;
    k.ia = function() {
        return this.m
    }
    ;
    k.R = function() {
        return {}
    }
    ;
    function cf(a, b, c) {
        this.i = void 0 === c ? 0 : c;
        this.h = a;
        this.g = null == b ? "" : b
    }
    function df(a) {
        switch (Math.trunc(a.i)) {
        case -16:
            return -16;
        case -8:
            return -8;
        case 0:
            return 0;
        case 8:
            return 8;
        case 16:
            return 16;
        default:
            return 16
        }
    }
    function ef(a, b) {
        return a.i < b.i ? !0 : a.i > b.i ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    }
    ;function ff() {
        this.i = 0;
        this.g = [];
        this.h = !1
    }
    ff.prototype.add = function(a, b, c) {
        ++this.i;
        a = new cf(a,b,c);
        this.g.push(new cf(a.h,a.g,a.i + this.i / 4096));
        this.h = !0;
        return this
    }
    ;
    function gf(a, b) {
        y(b.g, function(c) {
            a.add(c.h, c.g, df(c))
        })
    }
    function hf(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        xc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }
    function jf(a) {
        var b = kf;
        a.h && (Ha(a.g, function(c, d) {
            return ef(d, c) ? 1 : ef(c, d) ? -1 : 0
        }),
        a.h = !1);
        return ya(a.g, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    }
    ;function kf(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ea(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    }
    ;function lf(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new ff;
        void 0 !== a && gf(this.g, a);
        b && this.g.add("v", ac, -16)
    }
    lf.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204"
          , b = jf(this.g);
        0 < b.length && (a += "?" + b);
        return a
    }
    ;
    function mf(a) {
        var b = []
          , c = [];
        La(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d)
                switch (Array.isArray(d) && (d = d.join(",")),
                d = [e, "=", d].join(""),
                e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
                }
        });
        return b.concat(c)
    }
    function nf() {
        if (ac && "unreleased" !== ac)
            return ac
    }
    ;function of() {
        this.g = 0
    }
    x(of);
    function pf(a) {
        this.A = a;
        this.u = !1
    }
    pf.prototype.o = function(a, b) {
        this.g = a;
        this.h = b
    }
    ;
    function qf() {
        pf.call(this, "capability")
    }
    v(qf, pf);
    qf.prototype.s = function() {
        return !0
    }
    ;
    qf.prototype.m = function() {
        var a = {};
        return a.b_name = this.g.X,
        a.v_name = this.h.X,
        a
    }
    ;
    function rf() {
        pf.call(this, "diff")
    }
    v(rf, pf);
    rf.prototype.s = function() {
        return !(.02 >= Math.abs(this.h.B - this.g.B))
    }
    ;
    rf.prototype.m = function() {
        var a = {};
        return a.b_name = this.g.X,
        a.v_name = this.h.X,
        a.b_vp_off = JSON.stringify(this.g.L),
        a.v_vp_off = JSON.stringify(this.h.L),
        a.b_vp_sz = JSON.stringify(this.g.Za),
        a.v_vp_sz = JSON.stringify(this.h.Za),
        a.b_exp = this.g.B,
        a.v_exp = this.h.B,
        a.efp_occ = this.g.Kb,
        a.sbv = this.g.ka,
        a
    }
    ;
    function sf() {
        pf.call(this, "capt");
        this.j = [];
        this.i = []
    }
    v(sf, pf);
    sf.prototype.o = function(a, b) {
        pf.prototype.o.call(this, a, b);
        20 <= this.i.length || (this.j.push(a.B),
        this.i.push(b.B))
    }
    ;
    sf.prototype.s = function() {
        return 20 === this.i.length
    }
    ;
    sf.prototype.m = function() {
        var a = tf(this.j, this.i)
          , b = uf(this.j, this.i)
          , c = {};
        return c.b_name = this.g.X,
        c.v_name = this.h.X,
        c.b_exp = this.j.join(","),
        c.v_exp = this.i.join(","),
        c.diff = a,
        c.diff_buckets = b,
        c
    }
    ;
    function tf(a, b) {
        return Aa(Ja(a, b), function(c) {
            return c[0] !== c[1]
        })
    }
    function uf(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return tf(xa(a, c), xa(b, c))
    }
    ;function vf() {
        this.K = this.K;
        this.ua = this.ua
    }
    vf.prototype.K = !1;
    vf.prototype.ia = function() {
        return this.K
    }
    ;
    vf.prototype.G = function() {
        this.K || (this.K = !0,
        this.$())
    }
    ;
    vf.prototype.$ = function() {
        if (this.ua)
            for (; this.ua.length; )
                this.ua.shift()()
    }
    ;
    function wf(a, b, c, d, e) {
        e = void 0 === e ? [new qf, new rf, new sf] : e;
        vf.call(this);
        this.g = a.Oa(b, c, this.V());
        this.g.ma();
        this.i = e;
        this.h = d
    }
    v(wf, vf);
    wf.prototype.$ = function() {
        this.g && (this.g.P(),
        this.g.G())
    }
    ;
    function xf(a, b, c) {
        y(a.i, function(d) {
            var e = a.h;
            if (!d.u && (d.o(b, c),
            d.s())) {
                d.u = !0;
                var f = d.m()
                  , g = new ff;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.A);
                d = of.l();
                g.add("i", d.g++);
                g.add("adk", e);
                hf(g, f);
                e = new lf(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = nf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Id(e)
            }
        })
    }
    wf.prototype.W = function() {}
    ;
    wf.prototype.ga = function() {}
    ;
    wf.prototype.V = function() {
        return !1
    }
    ;
    function yf() {
        this.g = this.h = this.i = 0
    }
    function zf(a, b, c, d) {
        b && (a.i += c,
        a.h += c,
        a.g = Math.max(a.g, a.h));
        if (void 0 === d ? !b : d)
            a.h = 0
    }
    ;var Af = [1, .75, .5, .3, 0];
    function Bf(a) {
        this.g = a = void 0 === a ? Af : a;
        this.h = xa(this.g, function() {
            return new yf
        })
    }
    function Cf(a) {
        return Df(a, function(b) {
            return b.i
        }, !1)
    }
    function Ef(a) {
        return Df(a, function(b) {
            return b.g
        }, !0)
    }
    function Ff(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.g.length; f++) {
            var h = a.g[f]
              , n = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            zf(a.h[f], g && n, e, !g || h)
        }
    }
    function Df(a, b, c) {
        a = xa(a.h, function(d) {
            return b(d)
        });
        return c ? a : Gf(a)
    }
    function Gf(a) {
        return xa(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    }
    ;function Hf() {
        this.g = new Bf;
        this.i = new yf;
        this.h = -1;
        this.j = new Bf([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }
    function W(a) {
        return 1E3 <= a.i.g
    }
    ;var If = new J(0,0,0,0);
    function Jf(a, b) {
        b = Kf(b);
        return 0 === b ? 0 : Kf(a) / b
    }
    function Kf(a) {
        return Math.max(a.g - a.top, 0) * Math.max(a.h - a.left, 0)
    }
    function Lf(a, b) {
        if (!a || !b)
            return !1;
        for (var c = 0; null !== a && 100 > c++; ) {
            if (a === b)
                return !0;
            try {
                a: {
                    var d = void 0;
                    if (hc && !(D && Lb("9") && !Lb("10") && w.SVGElement && a instanceof w.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;
                    e = qa(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = I(a)
                      , g = f && pc(f)
                      , h = g && g.frameElement;
                    h && (a = h)
                }
            } catch (n) {
                break
            }
        }
        return !1
    }
    function Mf(a, b, c) {
        if (!a || !b)
            return !1;
        b = Ec(Dc(a), -b.left, -b.top);
        a = (b.left + b.h) / 2;
        b = (b.top + b.g) / 2;
        var d = K();
        wc(d.top) && d.top && d.top.document && (d = d.top);
        if (!ze(d))
            return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a)
            return !1;
        b = (b = (b = I(c)) && b.defaultView && b.defaultView.frameElement) && Lf(b, a);
        d = a === c;
        a = !d && a && tc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function Nf(a, b, c, d) {
        return U.l().i ? !1 : 0 >= Bc(a) || 0 >= Cc(a) ? !0 : c && d ? ie(208, function() {
            return Mf(a, b, c)
        }) : !1
    }
    ;var Of = new J(0,0,0,0);
    function Pf(a, b, c) {
        vf.call(this);
        this.position = Dc(Of);
        this.i = new Hf;
        this.qa = -2;
        this.Mb = -1;
        this.Gb = b;
        this.pa = null;
        this.O = !1;
        this.L = null;
        this.M = -1;
        this.va = c;
        this.Nb = this.Ka = oa;
        this.h = new qd;
        this.h.h = a;
        this.h.g = a;
        this.u = !1;
        this.o = {
            Ca: null,
            Ba: null
        };
        this.ea = !0;
        this.H = null;
        R.l().u++;
        this.j = new Wc;
        this.Lb = this.xa = -1;
        this.Da = 0;
        this.U = -1;
        this.g = null;
        this.Pa = new J(0,0,0,0);
        this.Eb = !1;
        a = this.m = new hd;
        N(a, "od", Uc);
        M(N(a, "opac", L));
        M(N(a, "sbeos", L));
        M(N(a, "prf", L));
        M(N(a, "mwt", L));
        N(a, "iogeo", L);
        (a = this.h.h) && a.getAttribute && pd(a, "googleAvInapp") && (U.l().j = !0);
        1 == this.va ? id(this.m, "od", 1) : id(this.m, "od", 0)
    }
    v(Pf, vf);
    k = Pf.prototype;
    k.$ = function() {
        Qf(this);
        this.H && this.H.G();
        this.g && this.g.G();
        delete this.i;
        delete this.Ka;
        delete this.Nb;
        delete this.h.h;
        delete this.h.g;
        delete this.o;
        delete this.H;
        delete this.g;
        delete this.m;
        vf.prototype.$.call(this)
    }
    ;
    function Rf(a) {
        return a.g ? a.g.g : a.position
    }
    k.Ha = function(a) {
        var b = R.l();
        "string" === typeof a && 0 != a.length && kd(b.g, a)
    }
    ;
    k.eb = function() {
        return !1
    }
    ;
    k.ja = function() {
        this.O = !0
    }
    ;
    k.Aa = function() {
        return this.O
    }
    ;
    k.Va = function() {
        this.j.B = 0
    }
    ;
    function Sf(a, b) {
        if (a.g) {
            if (b.I() === a.g.I())
                return;
            a.g.G();
            a.g = null
        }
        b = b.create(a.h.g, a.m, a.eb());
        if (b = null != b && b.ma() ? b : null)
            a.g = b
    }
    function Tf(a, b, c) {
        if (a.g) {
            a.g.Z();
            var d = a.g.u
              , e = d.m
              , f = e.g;
            if (null != d.i) {
                var g = d.j;
                a.L = new G(g.left - f.left,g.top - f.top);
                a.Pa = d.i
            }
            f = a.ka() ? Math.max(d.h, d.o) : d.h;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            a.pa && -1 != a.Gb && -1 !== d.g && -1 !== a.pa.g ? (e = d.g - a.pa.g,
            e = 1E4 < e ? 0 : e) : e = 0;
            a.pa = d;
            a.Xa(f, b, c, !1, g, e, d.s)
        }
    }
    function Uf(a) {
        if (a.Aa() && a.H) {
            var b = 1 == O(a.m, "od")
              , c = U.l().g
              , d = a.H
              , e = new H(Bc(c),Cc(c));
            c = a.ka();
            a = {
                X: a.g ? a.g.I() : "ns",
                L: a.L,
                Za: e,
                ka: c,
                B: a.j.B,
                Kb: b
            };
            if (b = d.g) {
                b.Z();
                e = b.u;
                var f = e.m.g
                  , g = null
                  , h = null;
                null != e.i && f && (g = e.j,
                g = new G(g.left - f.left,g.top - f.top),
                h = new H(f.h - f.left,f.g - f.top));
                c = {
                    X: b.I(),
                    L: g,
                    Za: h,
                    ka: c,
                    Kb: !1,
                    B: c ? Math.max(e.h, e.o) : e.h
                }
            } else
                c = null;
            c && xf(d, a, c)
        }
    }
    k.Xa = function(a, b, c, d, e, f, g) {
        this.u || (this.Aa() && (e = new Wc,
        e.i = c,
        e.h = Ie(),
        e.B = 0 === this.M && 1 === O(this.m, "opac") ? 0 : a,
        e.g = this.ca(),
        e.j = g,
        a = this.i,
        c = this.j,
        d = d && this.j.B >= (this.ca() ? .3 : .5),
        a.h = Math.max(a.h, e.B),
        Ff(a.j, e.j, c.j, e.i, f, d),
        Ff(a.g, e.B, c.B, e.i, f, d),
        d = d || c.g != e.g ? c.isVisible() && e.isVisible() : c.isVisible(),
        c = !e.isVisible() || e.i,
        zf(a.i, d, f, c),
        this.Gb = b,
        0 < e.B && (-1 === this.xa && (this.xa = b),
        this.Lb = b),
        -1 == this.Mb && W(this.i) && (this.Mb = b),
        -2 == this.qa && (this.qa = Kf(Rf(this)) ? e.B : -1),
        this.j = e),
        this.Ka(this))
    }
    ;
    k.ca = function() {
        return !1
    }
    ;
    k.ka = function() {
        return this.Eb || !1
    }
    ;
    function Vf(a) {
        a.h.g && (a.o.Ca = Be(a.h.g, "mouseover", function() {
            a.U = T()
        }, 149),
        a.o.Ba = Be(a.h.g, "mouseout", function() {
            var b = T();
            -1 == a.U || b < a.U || (a.Da += b - a.U);
            a.U = -1
        }, 150))
    }
    function Qf(a) {
        a.h.g && (a.o.Ca && (fc(a.h.g, "mouseover", a.o.Ca),
        a.o.Ca = null),
        a.o.Ba && (fc(a.h.g, "mouseout", a.o.Ba),
        a.o.Ba = null))
    }
    ;var Wf = Za(Va(new Sa(Ta,"https://www.googletagservices.com/activeview/js/current/osd.js")))
      , Xf = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/.exec((Wf instanceof Wa && Wf.constructor === Wa ? Wf.g : "type_error:TrustedResourceUrl").toString())
      , Yf = Xf[3] || "";
    Za(Xf[1] + $a("?", Xf[2] || "", {
        cb: "/r20100101"
    }) + $a("#", Yf, void 0));
    function Zf() {
        this.h = this.g = null;
        this.i = !1;
        $f(this)
    }
    function $f(a) {
        a.g || "function" !== typeof F.Goog_AdSense_getAdAdapterInstance || (a.g = F.Goog_AdSense_getAdAdapterInstance());
        if (!a.h) {
            var b = w.goog_osd_adp;
            a.h = b && "function" === typeof b.getOseId ? b : null
        }
        !a.i && kc() && (a.i = !0)
    }
    function ag(a, b, c, d) {
        $f(a);
        var e = U.l().A;
        a.g && a.g.getNewBlocks(b, e);
        a.h && a.h.getNewBlocks(b, e);
        a.i && !c() && (d(!0),
        b(kc(), "", 13, !0))
    }
    function bg(a) {
        $f(a);
        return (a.g ? a.g.numBlocks() : 0) + (a.h ? a.h.numBlocks() : 0) + (a.i ? 1 : 0)
    }
    function cg(a) {
        $f(a);
        return a.g ? a.g.getOseId() : a.h ? a.h.getOseId() : 0
    }
    ;function dg(a) {
        return lb() ? (a = (a = I(a)) && pc(a),
        !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    }
    ;var eg = "StopIteration"in w ? w.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    function fg() {}
    fg.prototype.g = function() {
        throw eg;
    }
    ;
    fg.prototype.fb = function() {
        return this
    }
    ;
    function gg(a) {
        if (a instanceof fg)
            return a;
        if ("function" == typeof a.fb)
            return a.fb(!1);
        if (pa(a)) {
            var b = 0
              , c = new fg;
            c.g = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw eg;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function hg(a, b) {
        if (pa(a))
            try {
                y(a, b, void 0)
            } catch (c) {
                if (c !== eg)
                    throw c;
            }
        else {
            a = gg(a);
            try {
                for (; ; )
                    b.call(void 0, a.g(), void 0, a)
            } catch (c) {
                if (c !== eg)
                    throw c;
            }
        }
    }
    function ig(a, b) {
        var c = 1;
        hg(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }
    function jg(a, b) {
        var c = gg(a);
        a = new fg;
        a.g = function() {
            var d = c.g();
            if (b.call(void 0, d, void 0, c))
                return d;
            throw eg;
        }
        ;
        return a
    }
    function kg(a) {
        var b = gg(a);
        a = new fg;
        var c = 100;
        a.g = function() {
            if (0 < c--)
                return b.g();
            throw eg;
        }
        ;
        return a
    }
    ;function lg(a, b) {
        this.j = b;
        this.i = null == a;
        this.h = a
    }
    v(lg, fg);
    lg.prototype.g = function() {
        if (this.i)
            throw eg;
        var a = this.h || null;
        this.i = null == a;
        var b;
        if (b = a) {
            b = this.j;
            if (xb(a, "parentElement") && null != a.parentElement && a != a.parentElement)
                var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? dg : d;
                if (d(a))
                    try {
                        var e = I(a)
                          , f = e && pc(e)
                          , g = f && f.frameElement;
                        c = null == g ? null : g
                    } catch (h) {
                        c = null
                    }
                else
                    c = null
            } else
                c = null;
            b = c
        }
        this.h = b;
        return a
    }
    ;
    function mg(a) {
        var b = 1;
        a = kg(new lg(a,!0));
        a = jg(a, function() {
            return 0 < b
        });
        return ig(a, function(c, d) {
            var e = 1;
            if (xb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = I(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[ob()];
                    if ("undefined" !== typeof g)
                        d = g;
                    else {
                        g = d.style;
                        var h = Lc.opacity;
                        if (!h) {
                            var n = ob();
                            h = n;
                            void 0 === d.style[n] && (n = (Db ? "Webkit" : Cb ? "Moz" : D ? "ms" : Ab ? "O" : null) + qb(n),
                            void 0 !== d.style[n] && (h = n));
                            Lc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                "number" !== typeof f || isNaN(f) || (e = f)
            }
            return b = c * e
        })
    }
    ;function ng(a, b, c, d, e, f, g) {
        g = void 0 === g ? [] : g;
        Pf.call(this, c, d, e);
        this.Ia = b;
        this.Ja = this.A = 0;
        this.Ab = null;
        this.zb = this.ob = "";
        this.rb = [];
        this.tb = [];
        this.lb = this.yb = "";
        this.Db = !1;
        this.D = 4;
        this.Ib = !1;
        this.ba = [];
        this.N = this.s = "";
        this.Fb = this.nb = this.Cb = !1;
        this.oa = 0;
        this.fa = this.Bb = Ie();
        this.sa = 0;
        this.da = f;
        this.Jb = !1;
        this.ra = this.Ma = this.Na = this.wa = this.F = -1;
        this.ta = g;
        og(this, this.h.h);
        md(R.l().g, this.Ia)
    }
    v(ng, Pf);
    function pg(a, b, c) {
        return (a = String(a[b] || od(a, c) || "")) ? a.split("|") : []
    }
    function og(a, b) {
        if (b) {
            if (0 == a.A)
                if (a.h.h) {
                    var c = a.h.h._adk_;
                    c || (c = (c = od(a.h.h, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else
                    c = 0;
            else
                c = a.A;
            a.A = c;
            "" == a.ob && (a.ob = String(b._avi_ || ""));
            "" == a.zb && (a.zb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.rb.length || (a.rb = pg(b, "_avicxn_", "googleAvCxn"));
            a.tb.length || (a.tb = pg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.yb && (a.yb = String(b._aviextcxn_ || od(b, "googleAvExtCxn") || ""));
            "" == a.lb && (a.lb = String(b._cid_ || ""));
            a.Db || (a.Db = !!b._imm_ || pd(b, "googleAvImmediate"));
            "" == a.N && (a.N = String(b._cvu_ || od(b, "googleAvCpmav") || ""));
            "" == a.s && (a.s = String(od(b, "googleAvBtr") || ""));
            a.Ha(String(b._avm_ || od(b, "googleAvMetadata") || ""));
            od(b, "googleAvFlags");
            R.l()
        }
    }
    k = ng.prototype;
    k.$ = function() {
        delete this.ba;
        delete this.ta;
        Pf.prototype.$.call(this)
    }
    ;
    function qg(a, b, c) {
        y(a.ta, function(d) {
            return d.g(a, c, b)
        })
    }
    k.Aa = function() {
        return this.O && !(1 == this.sa || 3 == this.sa)
    }
    ;
    k.Va = function() {
        Pf.prototype.Va.call(this);
        this.Pa = new J(0,0,0,0)
    }
    ;
    k.ja = function() {
        this.O || (this.Na = Sd(),
        void 0 !== this.da && this.da(!1, this.qa),
        null != this.s && "" != this.s && (Gc(this.s),
        this.s = ""));
        Pf.prototype.ja.call(this);
        rg(this)
    }
    ;
    function rg(a) {
        if (a.O && w == w.top) {
            var b = w.pageYOffset;
            null != b && (a.ra = Math.max(b, a.ra));
            qg(a, 4, {})
        }
    }
    function sg(a) {
        return new rd(a.A,a.Ab)
    }
    k.Ha = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = new hd
              , c = R.l();
            N(b, "omid", L);
            kd(b, a);
            b = O(b, "omid");
            null !== b && (c.g.h.omid = b);
            a = kd(this.m, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.ea = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1],
                "0" == d ? this.oa = 2 : "1" == d && (this.oa = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.Eb = !0) : "adf=1" == d && (this.Jb = !0)
            }
            this.j.g = this.ca();
            Pf.prototype.Ha.call(this, a)
        }
    }
    ;
    k.Xa = function(a, b, c, d, e, f, g) {
        var h = W(this.i)
          , n = Math.floor(100 * this.j.B);
        this.oa = 242500 <= Kf(Rf(this)) ? 1 : 2;
        Pf.prototype.Xa.call(this, a, b, c, d, e, f, g);
        -1 == this.fa && -1 != this.j.h ? this.fa = this.j.h : 0 == this.fa && 1 == this.j.h && (this.fa = 1);
        a = W(this.i);
        b = Math.floor(100 * this.j.B);
        (!h && a || b != n) && void 0 !== this.da && this.da(a, b);
        try {
            this.M = mg(this.h.g)
        } catch (m) {}
        rg(this)
    }
    ;
    k.ca = function() {
        return Eb ? !1 : 1 == this.oa
    }
    ;
    function tg(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {}
          , f = U.l()
          , g = jd(a.m)
          , h = f.u
          , n = Rf(a);
        g.p = [n.top + h.y, n.left + h.x, n.g + h.y, n.h + h.x];
        h = a.i;
        g.tos = Cf(h.g);
        g.mtos = Ef(h.g);
        g.mcvt = h.i.g;
        g.rs = a.va;
        (n = 5 == a.va) || (g.ht = a.Da);
        0 <= a.xa && (g.tfs = a.xa,
        g.tls = a.Lb);
        g.mc = Ee(h.h);
        g.lte = Ee(a.qa);
        g.bas = a.Bb;
        g.bac = a.fa;
        f.i && (g["if"] = a.u ? 0 : 1);
        g.met = a.h.i;
        n && a.Ia && (g.req = encodeURIComponent(a.Ia).substring(0, 100));
        a.Fb && (g.ci = "1");
        a.ca() && (g.la = "1");
        g.avms = a.g ? a.g.I() : "ns";
        a.g && z(g, a.g.R());
        0 != a.sa && (g.md = a.sa);
        g.btr = null != a.s && "" != a.s ? 1 : 0;
        g.cpmav = ug(a) ? 1 : 0;
        g.lm = a.D;
        z(g, vg(a));
        d && z(g, d);
        g.adk = a.A;
        a.Jb && a.Ja && (g.adf = a.Ja);
        d = a.u;
        f = R.l();
        !c && d && f.h && (c = f.h);
        c && (g.r = c);
        0 === a.M && (g.invis = 1);
        c = mf(g).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = R.l().i;
        e[0] = b;
        e[7] = a.j.B;
        e[9] = Je(a.Pa);
        e[28] = a.va;
        e[32] = a.g ? a.g.I() : "ns";
        e[5] = W(a.i) && 4 != a.D;
        e[13] = Ef(a.i.g).join(",");
        e[18] = 0 == Kf(Rf(a));
        null != a.L && (e[20] = a.L.y,
        e[21] = a.L.x);
        b = U.l();
        null != b.h && (e[22] = Bc(b.h),
        e[23] = Cc(b.h));
        null != b.g && (e[30] = Bc(b.g),
        e[31] = Cc(b.g),
        e[38] = Je(b.g));
        c = b.u;
        g = Rf(a);
        e[37] = Je(new J(g.top + c.y,g.h + c.x,g.g + c.y,g.left + c.x));
        b.m && (b = b.m,
        e[39] = b.width + "-" + b.height);
        -1 != a.M && (e[25] = a.M);
        if (a = sg(a))
            a.h && (e[4] = a.h),
            a.g && (e[12] = a.g);
        return e
    }
    function vg(a) {
        var b = a.F;
        var c = a.F;
        c = -1 == c || a.wa < c ? -1 : a.wa - c;
        var d = -1 == a.F || a.Na < a.F ? -1 : a.Na - a.F
          , e = {};
        return e.rst = 0 < b ? b : void 0,
        e.dlt = 0 <= c ? c : void 0,
        e.rpt = 0 <= d ? d : void 0,
        e.isd = 0 <= a.Ma ? a.Ma : void 0,
        e.msd = 0 <= a.ra ? a.ra : void 0,
        e
    }
    function ug(a) {
        return null != a.N && null != a.N.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)
    }
    k.eb = function() {
        return !1
    }
    ;
    function wg(a, b, c, d) {
        af.call(this, a, b, c, d)
    }
    v(wg, af);
    k = wg.prototype;
    k.ib = function() {
        if (this.h) {
            var a = this.h
              , b = this.i.g.C;
            try {
                try {
                    var c = He(a.getBoundingClientRect())
                } catch (m) {
                    c = new J(0,0,0,0)
                }
                var d = c.h - c.left
                  , e = c.g - c.top
                  , f = Nc(a, b)
                  , g = f.x
                  , h = f.y;
                var n = new J(Math.round(h),Math.round(g + d),Math.round(h + e),Math.round(g))
            } catch (m) {
                n = Dc(If)
            }
            this.g = n
        }
    }
    ;
    k.jb = function() {
        this.s = this.i.i.g
    }
    ;
    k.wb = function(a) {
        return Nf(a, this.s, this.h, 1 == O(this.H, "od"))
    }
    ;
    k.Z = function() {
        this.timestamp = T();
        this.ib();
        if (1 === O(R.l().g, "vcm") && this.h && "number" === typeof this.h.videoWidth && "number" === typeof this.h.videoHeight) {
            var a = this.h;
            var b = new H(a.videoWidth,a.videoHeight);
            a = this.g;
            var c = Bc(a)
              , d = Cc(a)
              , e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b,
            a = Dc(a),
            e > c / d ? (c /= e,
            d = (d - c) / 2,
            0 < d && (d = a.top + d,
            a.top = Math.round(d),
            a.g = Math.round(d + c))) : (d *= e,
            c = Math.round((c - d) / 2),
            0 < c && (c = a.left + c,
            a.left = Math.round(c),
            a.h = Math.round(c + d))));
            this.g = a
        }
        this.jb();
        a = this.g;
        c = this.s;
        a = a.left <= c.h && c.left <= a.h && a.top <= c.g && c.top <= a.g ? new J(Math.max(a.top, c.top),Math.min(a.h, c.h),Math.min(a.g, c.g),Math.max(a.left, c.left)) : new J(0,0,0,0);
        c = a.top >= a.g || a.left >= a.h ? new J(0,0,0,0) : a;
        a = this.i.i;
        b = e = d = 0;
        0 < (this.g.g - this.g.top) * (this.g.h - this.g.left) && (this.wb(c) ? c = new J(0,0,0,0) : (d = U.l().s,
        b = new J(0,d.height,d.width,0),
        d = Jf(c, this.g),
        e = Jf(c, U.l().g),
        b = Jf(c, b)));
        c = c.top >= c.g || c.left >= c.h ? new J(0,0,0,0) : Ec(c, -this.g.left, -this.g.top);
        Se() || (e = d = 0);
        this.u = new we(a,this.g,c,d,e,this.timestamp,b)
    }
    ;
    k.I = function() {
        return this.i.I()
    }
    ;
    function xg(a) {
        var b = [];
        yg(new zg, a, b);
        return b.join("")
    }
    function zg() {}
    function yg(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        yg(a, d[f], c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (f = b[d],
                        "function" != typeof f && (c.push(e),
                        Ag(d, c),
                        c.push(":"),
                        yg(a, f, c),
                        e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Ag(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Bg = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Cg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    function Ag(a, b) {
        b.push('"', a.replace(Cg, function(c) {
            var d = Bg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1),
            Bg[c] = d);
            return d
        }), '"')
    }
    ;function Dg() {
        this.key = "goog_adspeed";
        this.i = [3, 4];
        this.h = null
    }
    Dg.prototype.g = function(a, b, c) {
        if (!Ea(this.i, c) || !sg(a).i())
            return !1;
        c = {};
        c = (c[0] = this.key,
        c[40] = xg(vg(a)),
        c);
        var d;
        if (d = this.h)
            a: {
                d = this.h;
                for (var e in d)
                    if (!(e in c) || d[e] !== c[e]) {
                        d = !1;
                        break a
                    }
                for (var f in c)
                    if (!(f in d)) {
                        d = !1;
                        break a
                    }
                d = !0
            }
        if (d)
            return !1;
        this.h = c;
        e = {};
        z(e, c, b);
        return Eg(a, {
            Ya: {},
            Ua: e
        })
    }
    ;
    function Fg() {
        this.key = "goog_update_data";
        this.h = 0;
        this.i = !1
    }
    Fg.prototype.g = function(a, b, c) {
        if (c != this.h || !sg(a).i())
            return !1;
        c = 1 == a.D;
        var d = W(a.i)
          , e = {}
          , f = {};
        b = {
            Ua: (e[0] = this.key,
            e[40] = xg(vg(a)),
            e),
            Ya: Object.assign({}, b, (f.r = b.r,
            f))
        };
        if (c)
            return d && !this.i ? (this.i = d,
            Eg(a, b)) : !1;
        this.i = d;
        return Eg(a, b)
    }
    ;
    function Gg(a) {
        Fg.call(this, a);
        this.key = "goog_image_request";
        this.h = 2
    }
    v(Gg, Fg);
    function Hg(a) {
        Fg.call(this, a);
        this.key = "goog_image_request";
        this.h = 1
    }
    v(Hg, Fg);
    Hg.prototype.g = function(a, b, c) {
        var d = !a.nb;
        if (W(a.i) && a.ea || d) {
            if (b = Fg.prototype.g.call(this, a, b, c))
                if (W(a.i) || (a.nb = !0),
                W(a.i) || a.ea)
                    a.ea = !1;
            return b
        }
        return !1
    }
    ;
    function Ig() {
        this.h = [];
        this.g = []
    }
    function Jg(a) {
        return Ca(X.g, function(b) {
            return a.matches(sg(b))
        })
    }
    function Kg(a) {
        var b = X;
        return a ? Ca(b.g, function(c) {
            return c.h.h == a
        }) : null
    }
    function Lg(a) {
        return Ca(a.g, function() {
            return !1
        })
    }
    function Mg() {
        var a = X;
        return 0 == a.h.length ? a.g : 0 == a.g.length ? a.h : Fa(a.g, a.h)
    }
    function Ng() {
        var a = X;
        a.h = [];
        a.g = []
    }
    function Og(a, b) {
        a = a.g;
        var c = Da(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1),
        b.g && b.g.P(),
        b.G(),
        !0) : !1
    }
    function Pg(a) {
        var b = X;
        if (Og(b, a)) {
            a = function() {
                return null
            }
            ;
            a = function() {
                return Lg(b)
            }
            ;
            for (var c = a(); c; c = a())
                Og(b, c)
        }
    }
    x(Ig);
    var X = Ig.l();
    function Qg() {
        this.g = this.h = null
    }
    function Rg(a, b) {
        function c(d, e) {
            b(d, e)
        }
        if (null == a.h)
            return !1;
        a.g = Ca(a.h, function(d) {
            return null != d && d.bb()
        });
        a.g && (a.g.vb(c) ? Ye(a.g.g) : b(a.g.g.aa(), a.g));
        return null != a.g
    }
    x(Qg);
    function Sg(a) {
        a = Tg(a);
        bf.call(this, a.length ? a[a.length - 1] : new V(F,0));
        this.i = a;
        this.h = null
    }
    v(Sg, bf);
    k = Sg.prototype;
    k.I = function() {
        return (this.h ? this.h : this.g).I()
    }
    ;
    k.R = function() {
        return (this.h ? this.h : this.g).R()
    }
    ;
    k.S = function() {
        return (this.h ? this.h : this.g).S()
    }
    ;
    k.vb = function(a) {
        var b = !1;
        y(this.i, function(c) {
            c.Ea() && (b = !0)
        });
        b && (this.j = a,
        Xe(this.g, this));
        return b
    }
    ;
    k.G = function() {
        y(this.i, function(a) {
            a.G()
        });
        bf.prototype.G.call(this)
    }
    ;
    k.bb = function() {
        return za(this.i, function(a) {
            return a.Y()
        })
    }
    ;
    k.na = function() {
        return za(this.i, function(a) {
            return a.Y()
        })
    }
    ;
    k.Oa = function(a, b, c) {
        return new wg(a,this.g,b,c)
    }
    ;
    k.W = function(a) {
        this.h = a.h
    }
    ;
    function Tg(a) {
        if (!a.length)
            return [];
        a = wa(a, function(c) {
            return null != c && c.Y()
        });
        for (var b = 1; b < a.length; b++)
            Xe(a[b - 1], a[b]);
        return a
    }
    ;var Ug = {
        threshold: [0, .3, .5, .75, 1]
    };
    function Vg(a, b, c, d) {
        af.call(this, a, b, c, d);
        this.D = this.A = this.m = this.o = this.j = null
    }
    v(Vg, wg);
    k = Vg.prototype;
    k.ma = function() {
        var a = this;
        this.D || (this.D = T());
        if (ie(298, function() {
            return Wg(a)
        }))
            return !0;
        Ve(this.i, "msf");
        return !1
    }
    ;
    k.P = function() {
        if (this.j && this.h)
            try {
                this.j.unobserve(this.h),
                this.o ? (this.o.unobserve(this.h),
                this.o = null) : this.m && (this.m.disconnect(),
                this.m = null)
            } catch (a) {}
    }
    ;
    function Xg(a) {
        return a.j && a.j.takeRecords ? a.j.takeRecords() : []
    }
    function Wg(a) {
        if (!a.h)
            return !1;
        var b = a.h
          , c = a.i.g.C
          , d = R.l().j.g;
        a.j = new c.IntersectionObserver(Md(d, function(e) {
            return Yg(a, e)
        }),Ug);
        d = Md(d, function() {
            a.j.unobserve(b);
            a.j.observe(b);
            Yg(a, Xg(a))
        });
        c.ResizeObserver ? (a.o = new c.ResizeObserver(d),
        a.o.observe(b)) : c.MutationObserver && (a.m = new w.MutationObserver(d),
        a.m.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.j.observe(b);
        Yg(a, Xg(a));
        return !0
    }
    function Yg(a, b) {
        try {
            if (b.length) {
                a.A || (a.A = T());
                var c = Zg(b)
                  , d = Nc(a.h, a.i.g.C)
                  , e = d.x
                  , f = d.y;
                a.g = new J(Math.round(f),Math.round(e) + c.boundingClientRect.width,Math.round(f) + c.boundingClientRect.height,Math.round(e));
                var g = He(c.intersectionRect);
                a.s = Ec(g, a.g.left - g.left, a.g.top - g.top)
            }
        } catch (h) {
            a.P(),
            le(299, h)
        }
    }
    function Zg(a) {
        return ya(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    k.Z = function() {
        var a = Xg(this);
        0 < a.length && Yg(this, a);
        wg.prototype.Z.call(this)
    }
    ;
    k.ib = function() {}
    ;
    k.wb = function() {
        return !1
    }
    ;
    k.jb = function() {}
    ;
    k.R = function() {
        var a = {};
        return Object.assign(this.i.R(), (a.niot_obs = this.D,
        a.niot_cbk = this.A,
        a))
    }
    ;
    k.I = function() {
        return "nio"
    }
    ;
    function $g(a) {
        a = void 0 === a ? F : a;
        bf.call(this, new V(a,2))
    }
    v($g, bf);
    $g.prototype.I = function() {
        return "nio"
    }
    ;
    $g.prototype.na = function() {
        return !U.l().j && null != this.g.g.C.IntersectionObserver
    }
    ;
    $g.prototype.Oa = function(a, b, c) {
        return new Vg(a,this.g,b,c)
    }
    ;
    function ah() {
        var a = bh();
        V.call(this, F.top, a, "geo")
    }
    v(ah, V);
    ah.prototype.Qa = function() {
        return U.l().g
    }
    ;
    ah.prototype.Y = function() {
        var a = bh();
        this.o !== a && (this.g != this && a > this.g.o && (this.g = this,
        We(this)),
        this.o = a);
        return 2 == a
    }
    ;
    function bh() {
        R.l();
        var a = U.l();
        return a.i || a.j ? 0 : 2
    }
    x(ah);
    var ch = {}
      , dh = (ch[1] = function() {
        return new $g
    }
    ,
    ch[2] = function() {
        return new Sg([ah.l()])
    }
    ,
    ch);
    function eh() {
        this.g = null;
        this.h = dh
    }
    function fh() {
        var a = eh.l();
        a: {
            var b = O(R.l().g, "mv");
            if (null != b && (b = a.h[b]) && (b = b()) && b.na())
                break a;
            b = null
        }
        a.g = b
    }
    x(eh);
    function gh() {
        this.done = !1;
        this.g = {
            hb: 0,
            gb: 0,
            qc: 0,
            kb: 0,
            za: -1,
            Rb: 0,
            Qb: 0,
            Sb: 0
        };
        this.s = null;
        this.m = this.u = !1;
        this.o = "";
        this.i = null;
        this.A = 0;
        this.h = new Te(this)
    }
    function hh(a) {
        var b = Y;
        if (!b.u) {
            b.u = !0;
            if (a) {
                a = Mg();
                for (var c, d = 0; d < a.length; ++d)
                    c = a[d],
                    c.h.g && Vf(c)
            }
            ih(b, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g)
                    f[g] = arguments[g];
                return b.j.apply(b, t(f))
            });
            b.j()
        }
    }
    gh.prototype.Hb = function() {
        jh(this, Mg(), !1)
    }
    ;
    function kh() {
        var a = eh.l();
        null != a.g && a.g.g && Ye(a.g.g);
        a = Qg.l();
        null != a.g && a.g.g ? Ye(a.g.g) : Pe(U.l())
    }
    function jh(a, b, c) {
        if (!a.done)
            if (a.h.cancel(),
            0 == b.length)
                a.m = !1;
            else {
                a.i = null;
                try {
                    kh();
                    var d = T()
                      , e = R.l();
                    e.s = d;
                    if (null != Qg.l().g)
                        for (e = 0; e < b.length; e++)
                            Tf(b[e], d, c);
                    else
                        ke(a.o, {
                            strategy_not_selected: 1,
                            bin: e.i
                        });
                    for (d = 0; d < b.length; d++)
                        Uf(b[d]);
                    ++a.g.kb;
                    lh(a)
                } finally {
                    c ? y(b, function(f) {
                        return f.Va()
                    }) : Ue(a.h)
                }
            }
    }
    function ih(a, b) {
        if (!a.s) {
            b = ee(142, b);
            Q();
            var c;
            E.visibilityState ? c = "visibilitychange" : E.mozVisibilityState ? c = "mozvisibilitychange" : E.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && ec(E, c, b, {
                capture: !1
            }) && (a.s = b)
        }
    }
    gh.prototype.j = function() {
        var a = Se()
          , b = T();
        a ? (te || (re = b,
        y(X.h, function(c) {
            return c.i.o(b, !c.s())
        })),
        te = !0) : (this.A = mh(this, b),
        te = !1,
        y(X.h, function(c) {
            c.Aa() && c.i.m(b)
        }));
        this.m = !0;
        jh(this, Mg(), !a)
    }
    ;
    function nh(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }
    function oh(a, b, c) {
        if (!a.i || c) {
            c = b.document;
            var d = 0 <= se ? T() - se : -1
              , e = T();
            -1 == a.g.za && (d = e);
            var f = U.l()
              , g = R.l()
              , h = jd(g.g)
              , n = Mg();
            try {
                if (0 < n.length) {
                    var m = f.g;
                    m && (h.bs = [Bc(m), Cc(m)]);
                    var l = f.m;
                    l && (h.ps = [l.width, l.height]);
                    b.screen && (h.scs = [b.screen.width, b.screen.height])
                } else
                    h.url = encodeURIComponent(b.location.href.substring(0, 512)),
                    c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = se;
                h.bin = g.i;
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.g.hb, a.g.gb, a.g.kb, a.g.za, De, a.h.h, a.g.Rb, a.g.Qb, a.g.Sb].join("-");
                h.tvt = mh(a, e);
                f.j && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < n.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var q = f.h;
                    h.is = [Bc(q), Cc(q)]
                }
            } catch (Ba) {
                h.error = 1
            }
            a.i = h
        }
        b = a.i;
        a = {};
        for (var p in b)
            a[p] = b[p];
        p = R.l().j;
        var u;
        if (1 == O(p.i, "prf")) {
            b = new Kd;
            m = p.g;
            l = 0;
            -1 < m.g && (l = m.i.g.g() - m.g);
            b = Zb(b, 1, m.j + l);
            m = p.g;
            b = Zb(b, 5, -1 < m.g ? m.h + 1 : m.h);
            b = Zb(b, 2, p.h.g.j());
            b = Zb(b, 3, p.h.g.i());
            m = Zb(b, 4, p.h.g.h());
            p = {};
            b = new Rb;
            var r = void 0 === r ? 0 : r;
            l = Xb(m, 1);
            l = null == l ? l : +l;
            r = null == l ? r : l;
            if (0 !== r && (l = r,
            null != l)) {
                ub(b.g, 9);
                r = b.g;
                c = l;
                c = (l = 0 > c ? 1 : 0) ? -c : c;
                if (0 === c)
                    sb = 0 < 1 / c ? 0 : 2147483648,
                    rb = 0;
                else if (isNaN(c))
                    sb = 2147483647,
                    rb = 4294967295;
                else if (1.7976931348623157E308 < c)
                    sb = (l << 31 | 2146435072) >>> 0,
                    rb = 0;
                else if (2.2250738585072014E-308 > c)
                    c /= Math.pow(2, -1074),
                    sb = (l << 31 | c / 4294967296) >>> 0,
                    rb = c >>> 0;
                else {
                    d = c;
                    q = 0;
                    if (2 <= d)
                        for (; 2 <= d && 1023 > q; )
                            q++,
                            d /= 2;
                    else
                        for (; 1 > d && -1022 < q; )
                            d *= 2,
                            q--;
                    c *= Math.pow(2, -q);
                    sb = (l << 31 | q + 1023 << 20 | 1048576 * c & 1048575) >>> 0;
                    rb = 4503599627370496 * c >>> 0
                }
                vb(r, rb);
                vb(r, sb)
            }
            r = Yb(m, 2);
            0 !== r && null != r && Sb(b, 2, r);
            r = Yb(m, 3);
            0 !== r && null != r && Sb(b, 3, r);
            r = Yb(m, 4);
            0 !== r && null != r && Sb(b, 4, r);
            r = Yb(m, 5);
            if (0 !== r && null != r && (m = r,
            null != m))
                if (ub(b.g, 40),
                r = b.g,
                0 <= m)
                    ub(r, m);
                else {
                    for (l = 0; 9 > l; l++)
                        r.g.push(m & 127 | 128),
                        m >>= 7;
                    r.g.push(1)
                }
            r = new Uint8Array(b.g.length());
            l = b.h;
            q = l.length;
            for (c = m = 0; c < q; c++)
                d = l[c],
                r.set(d, m),
                m += d.length;
            l = b.g.end();
            r.set(l, m);
            b.h = [r];
            void 0 === u && (u = 0);
            if (!Qb)
                for (Qb = {},
                b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                m = ["+/=", "+/", "-_=", "-_.", "-_"],
                l = 0; 5 > l; l++)
                    for (q = b.concat(m[l].split("")),
                    Pb[l] = q,
                    c = 0; c < q.length; c++)
                        d = q[c],
                        void 0 === Qb[d] && (Qb[d] = c);
            u = Pb[u];
            b = [];
            for (m = 0; m < r.length; m += 3)
                e = r[m],
                f = (l = m + 1 < r.length) ? r[m + 1] : 0,
                d = (q = m + 2 < r.length) ? r[m + 2] : 0,
                c = e >> 2,
                e = (e & 3) << 4 | f >> 4,
                f = (f & 15) << 2 | d >> 6,
                d &= 63,
                q || (d = 64,
                l || (f = 64)),
                b.push(u[c], u[e], u[f] || "", u[d] || "");
            u = (p.pf = b.join(""),
            p)
        } else
            u = {};
        z(a, u);
        return a
    }
    function ph() {
        y(Mg(), function(a) {
            if (a.h.h) {
                var b = a.A || 0
                  , c = eh.l();
                if (b = c.g ? new wf(c.g,a.h.g,a.m,b) : null)
                    a.H = b
            }
        })
    }
    function qh() {
        var a = Qg.l();
        if (null != a.g) {
            var b = a.g;
            y(Mg(), function(c) {
                return Sf(c, b)
            })
        }
    }
    function lh(a) {
        var b = R.l()
          , c = 1 === O(b.g, "llp");
        "osd" == a.o && y(X.g, function(d) {
            if (c) {
                if (1 == b.i || W(d.i) || d.u) {
                    var e = {};
                    qg(d, 0, (e.r = void 0,
                    e))
                }
            } else
                e = {},
                qg(d, 0, (e.r = void 0,
                e))
        })
    }
    function mh(a, b) {
        a = a.A;
        te && (a += b - re);
        return a
    }
    function rh(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }
    function sh(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }
    function th() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        }
        : b;
        fe.mb = "av-js";
        ae.g = .01;
        he([function(c) {
            var d = R.l()
              , e = {};
            z(c, (e.bin = d.i,
            e.type = "error",
            e), jd(d.g), oh(a, F), b());
            if (d = nf())
                e = {},
                z(c, (e.v = encodeURIComponent(d),
                e))
        }
        ])
    }
    function uh(a) {
        var b = new vh;
        switch (a) {
        case 0:
        case 5:
            return [];
        default:
            return [new Fg(b), new Hg(b), new Gg(b), new Dg]
        }
    }
    x(gh);
    var Y = gh.l();
    function vh() {}
    function Eg(a, b) {
        var c = b || {};
        b = void 0 === c.Ya ? {} : c.Ya;
        c = void 0 === c.Ua ? {} : c.Ua;
        var d = c.r
          , e = b[0]
          , f = oh(Y, K(), !1)
          , g = {};
        z(g, f, b);
        b = {};
        z(b, tg(a, e, d, g), c);
        Le(a.h.h, b, a.ba);
        return !0
    }
    ;function wh() {
        V.call(this, F, 2, "iem")
    }
    v(wh, V);
    k = wh.prototype;
    k.Qa = function() {
        function a(p, u) {
            return !!b.C.document.elementFromPoint(p, u)
        }
        var b = this
          , c = new J(0,this.C.innerWidth || this.C.width,this.C.innerHeight || this.C.height,0)
          , d = oc(document)
          , e = Math.floor(c.left - d.x)
          , f = Math.floor(c.top - d.y)
          , g = Math.floor(c.h - d.x)
          , h = Math.floor(c.g - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d)
            return new J(f,g,h,e);
        var n = a(g, f)
          , m = a(e, h);
        if (c)
            h = Z(f, h, function(p) {
                return a(e, p)
            }),
            g = Z(e, g, function(p) {
                return a(p, f)
            });
        else if (n)
            h = Z(f, h, function(p) {
                return a(g, p)
            }),
            e = Z(g, e, function(p) {
                return a(p, f)
            });
        else if (m)
            f = Z(h, f, function(p) {
                return a(e, p)
            }),
            g = Z(e, g, function(p) {
                return a(p, h)
            });
        else if (d)
            f = Z(h, f, function(p) {
                return a(g, p)
            }),
            e = Z(g, e, function(p) {
                return a(p, h)
            });
        else {
            var l = Math.floor((e + g) / 2)
              , q = Math.floor((f + h) / 2);
            if (!a(l, q))
                return new J(0,0,0,0);
            f = Z(q, f, function(p) {
                return a(l, p)
            });
            h = Z(q, h, function(p) {
                return a(l, p)
            });
            e = Z(l, e, function(p) {
                return a(p, q)
            });
            g = Z(l, g, function(p) {
                return a(p, q)
            })
        }
        return new J(f,g,h,e)
    }
    ;
    function Z(a, b, c) {
        if (c(b))
            return b;
        for (var d = 15; d--; ) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b)
                break;
            c(e) ? a = e : b = e
        }
        return a
    }
    k.Y = function() {
        return U.l().i && D && Lb(8) && ze(this.C)
    }
    ;
    k.Fa = function() {}
    ;
    k.Ga = function() {}
    ;
    k.$a = function() {}
    ;
    k.ab = function() {}
    ;
    x(wh);
    function xh() {
        V.call(this, F, 2, "mraid");
        this.N = 0;
        this.F = this.H = !1;
        this.m = null;
        this.h = ye(this.C);
        this.i.g = new J(0,0,0,0);
        this.O = !1
    }
    v(xh, V);
    k = xh.prototype;
    k.Y = function() {
        return null != this.h.J
    }
    ;
    k.pb = function() {
        var a = {};
        this.N && (a.mraid = this.N);
        this.H && (a.mlc = 1);
        a.mtop = this.h.Wb;
        this.m && (a.mse = this.m);
        this.O && (a.msc = 1);
        a.mcp = this.h.ya;
        return a
    }
    ;
    k.T = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d)
            c[d - 1] = arguments[d];
        try {
            return this.h.J[a].apply(this.h.J, c)
        } catch (e) {
            le(538, e, .01, function(f) {
                f.method = a
            })
        }
    }
    ;
    function yh(a, b, c) {
        a.T("addEventListener", b, c)
    }
    k.Ea = function() {
        var a = this;
        if (this.A)
            return !this.ha();
        this.A = !0;
        if (2 === this.h.ya)
            return this.m = "ng",
            Ve(this, "w"),
            !1;
        if (1 === this.h.ya)
            return this.m = "mm",
            Ve(this, "w"),
            !1;
        U.l().D = !0;
        this.C.document.readyState && "complete" == this.C.document.readyState ? zh(this) : Be(this.C, "load", function() {
            Hd(Q(), je(292, function() {
                return zh(a)
            }), 100)
        }, 292);
        return !0
    }
    ;
    function zh(a) {
        R.l().m = !!a.T("isViewable");
        yh(a, "viewableChange", Ah);
        "loading" === a.T("getState") ? yh(a, "ready", Bh) : Ch(a)
    }
    function Ch(a) {
        "string" === typeof a.h.J.AFMA_LIDAR ? (a.H = !0,
        Dh(a)) : (a.h.ya = 3,
        a.m = "nc",
        Ve(a, "w"))
    }
    function Dh(a) {
        a.F = !1;
        var b = 1 == O(R.l().g, "rmmt")
          , c = !!a.T("isViewable");
        (b ? !c : 1) && Hd(Q(), je(524, function() {
            a.F || (Eh(a),
            le(540, Error()),
            a.m = "mt",
            Ve(a, "w"))
        }), 500);
        Fh(a);
        yh(a, a.h.J.AFMA_LIDAR, Gh)
    }
    function Fh(a) {
        var b = 1 == O(R.l().g, "sneio")
          , c = void 0 !== a.h.J.AFMA_LIDAR_EXP_1
          , d = void 0 !== a.h.J.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.h.J.AFMA_LIDAR_EXP_2 = !0);
        c && (a.h.J.AFMA_LIDAR_EXP_1 = !b)
    }
    function Eh(a) {
        a.T("removeEventListener", a.h.J.AFMA_LIDAR, Gh);
        a.H = !1
    }
    k.Fa = function() {
        var a = U.l()
          , b = Hh(this, "getMaxSize");
        a.g = new J(0,b.width,b.height,0)
    }
    ;
    k.Ga = function() {
        U.l().s = Hh(this, "getScreenSize")
    }
    ;
    function Hh(a, b) {
        if ("loading" === a.T("getState"))
            return new H(-1,-1);
        b = a.T(b);
        if (!b)
            return new H(-1,-1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new H(-1,-1) : new H(a,b)
    }
    k.G = function() {
        Eh(this);
        V.prototype.G.call(this)
    }
    ;
    function Bh() {
        try {
            var a = xh.l();
            a.T("removeEventListener", "ready", Bh);
            Ch(a)
        } catch (b) {
            le(541, b)
        }
    }
    function Gh(a, b) {
        try {
            var c = xh.l();
            c.F = !0;
            var d = a ? new J(a.y,a.x + a.width,a.y + a.height,a.x) : new J(0,0,0,0);
            var e = T()
              , f = Se();
            var g = new ve(e,f,c);
            g.g = d;
            g.volume = b;
            c.W(g)
        } catch (h) {
            le(542, h)
        }
    }
    function Ah(a) {
        var b = R.l()
          , c = xh.l();
        a && !b.m && (b.m = !0,
        c.O = !0,
        c.m && Ve(c, "w", !0))
    }
    x(xh);
    function Ih(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    }
    ;function Jh(a) {
        this.g = a;
        this.defaultValue = !1
    }
    ;var Kh = new Jh(160)
      , Lh = new Jh(900)
      , Mh = new Jh(382);
    var Nh = ["FRAME", "IMG", "IFRAME"]
      , Oh = /^[01](px)?$/;
    function Ph(a, b, c) {
        var d = !0
          , e = !1;
        d = void 0 === d ? !0 : d;
        e = void 0 === e ? !1 : e;
        var f = void 0 === f ? !1 : f;
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            c || (c = function(r, Ba, Xa) {
                r.addEventListener(Ba, Xa)
            }
            );
            for (var g = !1, h = function(r) {
                g || (g = !0,
                b(r))
            }, n, m, l = 0; l < Nh.length; ++l)
                if (Nh[l] == a.tagName) {
                    m = 3;
                    n = [a];
                    break
                }
            n || (n = a.querySelectorAll(Nh.join(",")),
            m = 2);
            var q = 0;
            a = !1;
            for (l = 0; l < n.length; l++) {
                var p = n[l];
                if (f || !("IMG" != p.tagName || !p.complete || p.naturalWidth && p.naturalHeight ? Oh.test(p.getAttribute("width")) && Oh.test(p.getAttribute("height")) : 1)) {
                    if ("IMG" == p.tagName)
                        var u = p.naturalWidth && p.naturalHeight ? !0 : !1;
                    else
                        try {
                            u = "complete" === (p.readyState ? p.readyState : p.contentWindow && p.contentWindow.document && p.contentWindow.document.readyState) ? !0 : !1
                        } catch (r) {
                            u = void 0 === e ? !1 : e
                        }
                    u ? a = !0 : (q++,
                    c(p, "load", function() {
                        q--;
                        q || h(m)
                    }))
                }
            }
            n = null;
            if (0 === q && !a && "complete" === w.document.readyState)
                m = 5;
            else if (q || !a) {
                c(w, "load", function() {
                    h(4)
                });
                return
            }
            d && h(m)
        }
    }
    ;function Qh(a) {
        this.methodName = a
    }
    var Rh = new Qh(15)
      , Sh = new Qh(5)
      , Th = new Qh(6)
      , Uh = new Qh(7)
      , Vh = new Qh(8);
    function Wh(a, b, c) {
        return b[a.methodName] || c || function() {}
    }
    ;function Xh() {}
    x(Xh);
    function Yh() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.g = function() {}
    }
    x(Yh);
    function Zh(a) {
        return Yh.l().h(a.g, a.defaultValue)
    }
    ;function $h() {}
    x($h);
    function ai(a, b) {
        b = void 0 === b ? 0 : b;
        var c = Yh.l();
        c.h = function(d, e) {
            return Wh(Sh, a, function() {
                return !1
            })(d, e, b)
        }
        ;
        c.i = function(d, e) {
            return Wh(Th, a, function() {
                return 0
            })(d, e, b)
        }
        ;
        c.j = function(d, e) {
            return Wh(Uh, a, function() {
                return ""
            })(d, e, b)
        }
        ;
        c.m = function(d, e) {
            return Wh(Vh, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.g = function() {
            Wh(Rh, a)(b)
        }
    }
    ;function bi() {
        this.h = null;
        this.j = this.o = this.i = this.m = !1;
        ci(this);
        th()
    }
    function di() {
        var a = void 0
          , b = 4;
        if (void 0 === a) {
            var c = void 0 === c ? w : c;
            a = c.ggeac || (c.ggeac = {})
        }
        b = void 0 === b ? 0 : b;
        Xh.l();
        ai(a, b);
        $h.l();
        Yh.l().g();
        b = R.l();
        Zh(Kh) && id(b.g, "gtx", 1)
    }
    k = bi.prototype;
    k.Ub = function(a) {
        this.m = a
    }
    ;
    k.sb = function() {
        ei(this);
        Q();
        F.clearTimeout(this.h);
        this.h = null;
        se = T();
        fi(this)
    }
    ;
    function ei(a) {
        R.l().i = 1;
        if (!(0 < se)) {
            try {
                if (!gi(a))
                    return;
                kh();
                hi(a)
            } catch (b) {}
            a.h = Hd(Q(), je(129, function() {
                return ei(a)
            }), 250)
        }
    }
    k.Vb = function(a, b, c, d, e, f, g, h, n) {
        var m = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        n = void 0 === n ? -1 : n;
        if (nh(F)) {
            var l = new ng(F,b,a,-1,c,g);
            l.ta = uh(l.D);
            e = R.l();
            0 < h && -1 == l.F && (l.F = h);
            0 <= n && (l.Ma = n);
            l.Ka = function(q) {
                for (var p = [], u = 0; u < arguments.length; ++u)
                    p[u] = arguments[u];
                return m.Tb.apply(m, t(p))
            }
            ;
            l.Nb = function(q) {
                for (var p = [], u = 0; u < arguments.length; ++u)
                    p[u] = arguments[u];
                return m.Ra.apply(m, t(p))
            }
            ;
            13 != c && (l.A = rh(b),
            l.Ab = Ih(b),
            l.Ja = sh(b));
            f && (l.Fb = !0);
            id(e.g, "oseid", cg(this.g));
            X.g.push(l);
            ++Y.g.gb;
            e.h ? this.Ra(l, e.h) : ((b = Qg.l().g) && Sf(l, b),
            fi(this),
            e.h || (d ? (ii(l),
            l.ja()) : a && Ph(a, function() {
                l.ia() || (ii(l),
                l.ja())
            }, function(q, p, u) {
                Be(q, p, u, 130)
            }),
            Y.m || Y.j()))
        }
    }
    ;
    function hi(a) {
        ji(a);
        ag(a.g, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Vb.apply(a, t(c))
        }, function() {
            return a.m
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Ub.apply(a, t(c))
        })
    }
    function ki(a) {
        R.l();
        var b = Zh(Mh)
          , c = [wh.l()];
        b || c.push(xh.l());
        b = [ah.l()];
        return [new Sg(c), new $g(a), new Sg(b)]
    }
    function fi(a) {
        if (!a.j) {
            a.j = !0;
            try {
                var b = K()
                  , c = U.l();
                R.l().o = 947190542;
                if (gi(a)) {
                    Y.g.hb = bg(a.g);
                    var d = Qg.l();
                    if (null == d.h) {
                        var e = ki(b);
                        d.h = e
                    }
                    if (Rg(d, function(g) {
                        return li(a, g)
                    })) {
                        if (!Y.done) {
                            qh();
                            c.A = !0;
                            hi(a);
                            var f;
                            (f = U.l().j || A(B, "CrKey") || A(B, "PlayStation") || A(B, "Roku") || Me() || A(B, "Xbox") || Ne() || Oe()) || (Q(),
                            f = 0 !== ud());
                            f ? (fh(),
                            ph(),
                            mi(a),
                            Pc()) : li(a, "pv")
                        }
                    } else
                        li(a, "i")
                } else
                    ni(a, "c")
            } catch (g) {
                throw li(a, "x"),
                Ng(),
                g;
            }
        }
    }
    function mi(a) {
        if (-1 == Y.g.za) {
            K();
            var b = 2 == cg(a.g);
            hh(b);
            Hd(Q(), je(131, function() {
                ni(a, "t")
            }), 36E5);
            Y.g.za = T() - se
        }
    }
    function li(a, b) {
        R.l().h = b;
        for (var c = fa(X.g), d = c.next(); !d.done; d = c.next())
            d.value.u = !0;
        ni(a, b, !1)
    }
    function ni(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            Y.h.cancel();
            a.g || (a.g = new Zf);
            if (2 == cg(a.g) || a.i)
                for (a = X.g,
                c && 0 < a.length && jh(Y, a, !0),
                c = fa(a),
                a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    qg(a, 1, (d.r = b,
                    d));
                    a.g && a.g.P()
                }
            Y.done = !0
        }
    }
    function gi(a) {
        if (!nh(K()))
            return !1;
        var b = new Zf;
        if (!(b.g || b.h || b.i))
            return !1;
        a.g = b;
        return !0
    }
    k.Ra = function(a, b) {
        a.u = !0;
        var c = {};
        qg(a, 2, (c.r = b,
        c));
        a.g && a.g.P()
    }
    ;
    k.Tb = function(a) {
        a && W(a.i) && (0 >= Kf(Rf(a)) ? 0 : ug(a) && !a.Cb) && (Gc(a.N),
        a.Cb = !0)
    }
    ;
    function oi(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if ("string" !== typeof c)
                var d = null;
            else {
                d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e]
                      , g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                        case 36:
                        case 8:
                        case 11:
                        case 16:
                        case 5:
                        case 18:
                            f = "true" == f;
                            break;
                        case 4:
                        case 33:
                        case 6:
                        case 25:
                        case 28:
                        case 29:
                        case 24:
                        case 31:
                        case 30:
                        case 23:
                        case 22:
                        case 7:
                        case 21:
                        case 20:
                            f = Number(f);
                            break;
                        case 3:
                            if ("function" === typeof decodeURIComponent)
                                try {
                                    f = decodeURIComponent(f)
                                } catch (n) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            }
            if (c = d)
                if (e = c[0],
                Ea("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_maybe_stop_monitoring goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Jg(new rd(c[4],c[12]))))
                    if (h = c[33],
                    0 < h && -1 == d.wa && (d.wa = h),
                    "goog_stop_monitoring" === e)
                        Pg(d);
                    else if ("goog_maybe_stop_monitoring" !== e || void 0 !== d.da) {
                        if (Ea(d.ba, b.source) || d.ba.push(b.source),
                        "goog_request_monitoring" === e || !d.Ib)
                            if (d.Ib = !0,
                            void 0 !== c[16] && (d.ea = !!c[16]),
                            void 0 !== c[6]) {
                                c = c[6];
                                b = pi(c, d.D);
                                if (b != d.D) {
                                    if (5 == b) {
                                        d.u = !0;
                                        Pg(d);
                                        return
                                    }
                                    d.D = b;
                                    d.ta = uh(b)
                                }
                                b = Zh(Lh);
                                4 != c || b || d.ja();
                                c = U.l();
                                e = tg(d, "goog_acknowledge_monitoring");
                                e[8] = c.i;
                                e[36] = c.F;
                                Le(d.h.h, e, d.ba);
                                c = R.l();
                                d.u && c.h ? (a.Ra(d, c.h),
                                Pg(d)) : b || (a.i = !0)
                            }
                    } else
                        Pg(d)
        }
    }
    function ii(a) {
        if (a && sg(a).i()) {
            var b = tg(a, "goog_get_mode");
            Le(a.h.h, b)
        }
    }
    function ji(a) {
        if (!a.o) {
            Be(F, "message", function(c) {
                return oi(a, c)
            }, 132);
            var b = qi().contentWindow;
            b && Be(b, "message", function(c) {
                return oi(a, c)
            }, 132);
            a.o = !0
        }
    }
    function ri(a) {
        Be(K(), "unload", function() {
            ni(a, "u")
        }, 133)
    }
    function pi(a, b) {
        return Ca([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    k.Ob = function(a) {
        (a = Kg(a)) && Pg(a)
    }
    ;
    k.Pb = function(a, b) {
        a && b && qa(a) && 1 == a.nodeType && qa(b) && 1 == b.nodeType && (a = Kg(a)) && (K(),
        Qf(a),
        a.h.g = b,
        Vf(a),
        og(a, b),
        a.g && (a = a.g,
        a.P(),
        a.h = b,
        a.ma(),
        a.Z()))
    }
    ;
    function qi() {
        var a = qc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        F.document.body.appendChild(a);
        return a
    }
    function ci(a) {
        sa("Goog_Osd_UnloadAdBlock", je(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Ob.apply(a, t(c))
        }));
        sa("Goog_Osd_UpdateElementToMeasure", je(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Pb.apply(a, t(c))
        }))
    }
    ;ie(155, function() {
        di();
        var a = new bi;
        Y.o = "osd";
        ri(a);
        Qc() ? a.sb() : (ei(a),
        Be(K(), "load", function() {
            Hd(Q(), je(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d)
                    c[d] = arguments[d];
                return a.sb.apply(a, t(c))
            }), 100)
        }, 154))
    });
}
).call(this, this, this.document);
