(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        1064: function(t, e, n) {
            "use strict";
            (function(t) {
                var r, o = n(1),
                    c = function(t) {
                        var e = "",
                            u = Object.keys(t);
                        return u.forEach((function(n, r) {
                            var i = t[n];
                            (function(t) {
                                return /[height|width]$/.test(t)
                            })(n = function(t) {
                                return t.replace(/[A-Z]/g, (function(t) {
                                    return "-" + t.toLowerCase()
                                })).toLowerCase()
                            }(n)) && "number" == typeof i && (i += "px"), e += !0 === i ? n : !1 === i ? "not " + n : "(" + n + ": " + i + ")", r < u.length - 1 && (e += " and ")
                        })), e
                    },
                    u = function(t) {
                        var e = "";
                        return "string" == typeof t ? t : t instanceof Array ? (t.forEach((function(u, n) {
                            e += c(u), n < t.length - 1 && (e += ", ")
                        })), e) : c(t)
                    },
                    d = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
                    l = "object" == typeof d && d && d.Object === Object && d,
                    i = "object" == typeof self && self && self.Object === Object && self,
                    f = (l || i || Function("return this")()).Symbol,
                    h = Array.isArray,
                    v = Object.prototype,
                    s = v.hasOwnProperty,
                    F = v.toString,
                    x = f ? f.toStringTag : void 0,
                    m = Object.prototype.toString,
                    p = f ? f.toStringTag : void 0,
                    k = function(t) {
                        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : p && p in Object(t) ? function(t) {
                            var e = s.call(t, x),
                                n = t[x];
                            try {
                                t[x] = void 0;
                                var u = !0
                            } catch (t) {}
                            var r = F.call(t);
                            return u && (e ? t[x] = n : delete t[x]), r
                        }(t) : function(t) {
                            return m.call(t)
                        }(t)
                    },
                    E = f ? f.prototype : void 0,
                    _ = E ? E.toString : void 0,
                    y = function t(e) {
                        if ("string" == typeof e) return e;
                        if (h(e)) return function(t, e) {
                            for (var n = -1, u = null == t ? 0 : t.length, r = Array(u); ++n < u;) r[n] = e(t[n], n, t);
                            return r
                        }(e, t) + "";
                        if (function(t) {
                                return "symbol" == typeof t || function(t) {
                                    return null != t && "object" == typeof t
                                }(t) && "[object Symbol]" == k(t)
                            }(e)) return _ ? _.call(e) : "";
                        var n = e + "";
                        return "0" == n && 1 / e == -1 / 0 ? "-0" : n
                    },
                    C = function(t) {
                        return null == t ? "" : y(t)
                    },
                    A = function(t, e, n) {
                        var u = t.length;
                        return n = void 0 === n ? u : n, !e && n >= u ? t : function(t, e, n) {
                            var u = -1,
                                r = t.length;
                            e < 0 && (e = -e > r ? 0 : r + e), (n = n > r ? r : n) < 0 && (n += r), r = e > n ? 0 : n - e >>> 0, e >>>= 0;
                            for (var o = Array(r); ++u < r;) o[u] = t[u + e];
                            return o
                        }(t, e, n)
                    },
                    B = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
                    S = function(t) {
                        return B.test(t)
                    },
                    D = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                    T = "\\ud83c[\\udffb-\\udfff]",
                    w = "[^\\ud800-\\udfff]",
                    O = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    j = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    L = "(?:" + D + "|" + T + ")?",
                    R = "[\\ufe0e\\ufe0f]?" + L + "(?:\\u200d(?:" + [w, O, j].join("|") + ")[\\ufe0e\\ufe0f]?" + L + ")*",
                    z = "(?:" + [w + D + "?", D, O, j, "[\\ud800-\\udfff]"].join("|") + ")",
                    $ = RegExp(T + "(?=" + T + ")|" + z + R, "g"),
                    U = function(t) {
                        return S(t) ? function(t) {
                            return t.match($) || []
                        }(t) : function(t) {
                            return t.split("")
                        }(t)
                    },
                    q = function(t) {
                        t = C(t);
                        var e = S(t) ? U(t) : void 0,
                            u = e ? e[0] : t.charAt(0),
                            n = e ? A(e, 1).join("") : t.slice(1);
                        return u.toUpperCase() + n
                    },
                    N = (r = {
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ã": "A",
                        "Ä": "A",
                        "Å": "A",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ã": "a",
                        "ä": "a",
                        "å": "a",
                        "Ç": "C",
                        "ç": "c",
                        "Ð": "D",
                        "ð": "d",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ë": "E",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ë": "e",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ï": "I",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ï": "i",
                        "Ñ": "N",
                        "ñ": "n",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Õ": "O",
                        "Ö": "O",
                        "Ø": "O",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "õ": "o",
                        "ö": "o",
                        "ø": "o",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ü": "U",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ü": "u",
                        "Ý": "Y",
                        "ý": "y",
                        "ÿ": "y",
                        "Æ": "Ae",
                        "æ": "ae",
                        "Þ": "Th",
                        "þ": "th",
                        "ß": "ss",
                        "Ā": "A",
                        "Ă": "A",
                        "Ą": "A",
                        "ā": "a",
                        "ă": "a",
                        "ą": "a",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "Ď": "D",
                        "Đ": "D",
                        "ď": "d",
                        "đ": "d",
                        "Ē": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ę": "E",
                        "Ě": "E",
                        "ē": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ę": "e",
                        "ě": "e",
                        "Ĝ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ģ": "G",
                        "ĝ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ģ": "g",
                        "Ĥ": "H",
                        "Ħ": "H",
                        "ĥ": "h",
                        "ħ": "h",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "Į": "I",
                        "İ": "I",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "į": "i",
                        "ı": "i",
                        "Ĵ": "J",
                        "ĵ": "j",
                        "Ķ": "K",
                        "ķ": "k",
                        "ĸ": "k",
                        "Ĺ": "L",
                        "Ļ": "L",
                        "Ľ": "L",
                        "Ŀ": "L",
                        "Ł": "L",
                        "ĺ": "l",
                        "ļ": "l",
                        "ľ": "l",
                        "ŀ": "l",
                        "ł": "l",
                        "Ń": "N",
                        "Ņ": "N",
                        "Ň": "N",
                        "Ŋ": "N",
                        "ń": "n",
                        "ņ": "n",
                        "ň": "n",
                        "ŋ": "n",
                        "Ō": "O",
                        "Ŏ": "O",
                        "Ő": "O",
                        "ō": "o",
                        "ŏ": "o",
                        "ő": "o",
                        "Ŕ": "R",
                        "Ŗ": "R",
                        "Ř": "R",
                        "ŕ": "r",
                        "ŗ": "r",
                        "ř": "r",
                        "Ś": "S",
                        "Ŝ": "S",
                        "Ş": "S",
                        "Š": "S",
                        "ś": "s",
                        "ŝ": "s",
                        "ş": "s",
                        "š": "s",
                        "Ţ": "T",
                        "Ť": "T",
                        "Ŧ": "T",
                        "ţ": "t",
                        "ť": "t",
                        "ŧ": "t",
                        "Ũ": "U",
                        "Ū": "U",
                        "Ŭ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ų": "U",
                        "ũ": "u",
                        "ū": "u",
                        "ŭ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ų": "u",
                        "Ŵ": "W",
                        "ŵ": "w",
                        "Ŷ": "Y",
                        "ŷ": "y",
                        "Ÿ": "Y",
                        "Ź": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "ź": "z",
                        "ż": "z",
                        "ž": "z",
                        "Ĳ": "IJ",
                        "ĳ": "ij",
                        "Œ": "Oe",
                        "œ": "oe",
                        "ŉ": "'n",
                        "ſ": "s"
                    }, function(t) {
                        return null == r ? void 0 : r[t]
                    }),
                    I = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                    P = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
                    Z = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                    W = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                    V = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                    G = "[" + V + "]",
                    H = "\\d+",
                    X = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                    rt = "[^\\ud800-\\udfff" + V + H + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                    K = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    J = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    M = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    Y = "(?:" + X + "|" + rt + ")",
                    dt = "(?:" + M + "|" + rt + ")",
                    Q = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                    tt = "[\\ufe0e\\ufe0f]?" + Q + "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", K, J].join("|") + ")[\\ufe0e\\ufe0f]?" + Q + ")*",
                    et = "(?:" + ["[\\u2700-\\u27bf]", K, J].join("|") + ")" + tt,
                    nt = RegExp([M + "?" + X + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [G, M, "$"].join("|") + ")", dt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [G, M + Y, "$"].join("|") + ")", M + "?" + Y + "+(?:['’](?:d|ll|m|re|s|t|ve))?", M + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", H, et].join("|"), "g"),
                    at = function(t, e, n) {
                        return t = C(t), void 0 === (e = n ? void 0 : e) ? function(t) {
                            return W.test(t)
                        }(t) ? function(t) {
                            return t.match(nt) || []
                        }(t) : function(t) {
                            return t.match(Z) || []
                        }(t) : t.match(e) || []
                    },
                    ot = RegExp("['’]", "g"),
                    it = function(t) {
                        return function(e) {
                            return function(t, e, n, u) {
                                var r = -1,
                                    o = null == t ? 0 : t.length;
                                for (u && o && (n = t[++r]); ++r < o;) n = e(n, t[r], r, t);
                                return n
                            }(at(function(t) {
                                return (t = C(t)) && t.replace(I, N).replace(P, "")
                            }(e).replace(ot, "")), t, "")
                        }
                    }((function(t, e, n) {
                        return e = e.toLowerCase(), t + (n ? function(t) {
                            return q(C(t).toLowerCase())
                        }(e) : e)
                    })),
                    st = {
                        small: {
                            maxWidth: 639
                        },
                        medium: {
                            minWidth: 640,
                            maxWidth: 979
                        },
                        minMedium: {
                            minWidth: 640
                        },
                        large: {
                            minWidth: 980,
                            maxWidth: 1199
                        },
                        minLarge: {
                            minWidth: 980
                        },
                        maxLarge: {
                            maxWidth: 979
                        },
                        huge: {
                            minWidth: 1200,
                            maxWidth: 1399
                        },
                        minHuge: {
                            minWidth: 1200
                        },
                        maxHuge: {
                            maxWidth: 1199
                        },
                        giant: {
                            minWidth: 1400
                        }
                    },
                    ut = o.a.extend({
                        name: "kib-display-viewport",
                        props: {
                            breakpoints: {
                                type: Object,
                                default: function() {
                                    return st
                                }
                            }
                        },
                        data: function() {
                            return {
                                listeners: {}
                            }
                        },
                        computed: {
                            mqList: function() {
                                var t = this.breakpoints,
                                    e = Object.keys(t),
                                    n = {};
                                return e.forEach((function(e) {
                                    var r = t[e];
                                    n[e] = u(r)
                                })), n
                            }
                        },
                        beforeMount: function() {
                            this.subscribeToAll()
                        },
                        methods: {
                            subscribeToAll: function() {
                                var t = this;
                                Object.keys(this.mqList).forEach((function(e) {
                                    t.subscribe(e)
                                }))
                            },
                            breakpointExists: function(t) {
                                var e = it(t);
                                return Object.prototype.hasOwnProperty.call(this.mqList, e)
                            },
                            subscribe: function(t) {
                                var e = this;
                                if (!this.breakpointExists(t)) throw new Error("Breakpoint '".concat(t, "' doesn't exist"));
                                var n = window.matchMedia(this.mqList[t]),
                                    u = function(n) {
                                        var u;
                                        e.listeners = Object.assign({}, e.listeners, ((u = {})[t] = n.matches, u)), e.$emit("change", t, n.matches)
                                    };
                                u(n), n.addListener(u)
                            }
                        },
                        render: function() {
                            return this.$scopedSlots.default ? this.$scopedSlots.default(this.listeners) : this.$slots.default ? this.$slots.default[0] : null
                        }
                    });
                ut.options.install = function(t) {
                    return t.component(ut.options.name, ut)
                };
                var ct = ut.options;
                e.a = ct
            }).call(this, n(65))
        },
        415: function(t, e, n) {},
        515: function(t, e, n) {},
        577: function(t, e, n) {},
        583: function(t, e, n) {
            var r = n(818).Symbol;
            t.exports = r
        },
        649: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return I
            }));
            var r = n(1),
                o = ["secondary", "tertiary", "transactional", "neutral", "danger"];
            const c = r.a.extend({
                name: "kib-button-small",
                props: {
                    full: {
                        type: Boolean,
                        default: !1
                    },
                    variant: {
                        type: String,
                        default: null,
                        validator: function(t) {
                            return o.includes(t)
                        }
                    },
                    loading: {
                        type: Boolean,
                        default: !1
                    },
                    useSplash: {
                        type: Boolean,
                        default: !1
                    }
                }
            });
            var a = function(t, e) {
                var n;
                return (0, e._c)(e.data.attrs && e.data.attrs.href ? "a" : "button", e._g(e._b({
                    ref: e.data.ref,
                    tag: "component",
                    class: ["kib-button-small", (n = {
                        "kib-button-small--full": e.props.full
                    }, n["kib-button-small--" + e.props.variant] = e.props.variant, n["kib-button-small--loading"] = e.props.loading, n["kib-button-small--splash"] = e.props.useSplash, n), e.data.class, e.data.staticClass],
                    style: [e.data.style, e.data.staticStyle]
                }, "component", e.data.attrs, !1), e.listeners), [e._t("default")], 2)
            };
            a._withStripped = !0;
            const s = function(t, e, n, r, a, s, o, i, c, d) {
                "boolean" != typeof o && (c = i, i = o, o = !1);
                const u = "function" == typeof n ? n.options : n;
                let p;
                if (t && t.render && (u.render = t.render, u.staticRenderFns = t.staticRenderFns, u._compiled = !0, a && (u.functional = !0)), r && (u._scopeId = r), s ? (p = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), e && e.call(this, c(t)), t && t._registeredComponents && t._registeredComponents.add(s)
                    }, u._ssrRegister = p) : e && (p = o ? function(t) {
                        e.call(this, d(t, this.$root.$options.shadowRoot))
                    } : function(t) {
                        e.call(this, i(t))
                    }), p)
                    if (u.functional) {
                        const t = u.render;
                        u.render = function(e, n) {
                            return p.call(n), t(e, n)
                        }
                    } else {
                        const t = u.beforeCreate;
                        u.beforeCreate = t ? [].concat(t, p) : [p]
                    }
                return n
            }({
                render: a,
                staticRenderFns: []
            }, void 0, c, void 0, !0, void 0, !1, void 0, void 0, void 0);
            s.options.install = function(t) {
                return t.component(s.options.name, s)
            };
            var d = s.options,
                l = n(1064),
                i = ["default", "short", "tall"],
                f = ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
                h = ["light", "dark"],
                v = ["style-1", "style-2", "style-3", "style-4"];
            const F = r.a.extend({
                name: "kib-banner",
                components: {
                    KibButtonSmall: d,
                    KibDisplayViewport: l.a
                },
                props: {
                    images: {
                        type: Object,
                        required: !0
                    },
                    alt: {
                        type: String,
                        required: !0
                    },
                    mode: {
                        type: String,
                        default: "light",
                        validator: function(t) {
                            return h.includes(t)
                        }
                    },
                    fontStyles: {
                        type: String,
                        default: "style-1",
                        validator: function(t) {
                            return v.includes(t)
                        }
                    },
                    headerTag: {
                        type: String,
                        default: "h3",
                        validator: function(t) {
                            return f.includes(t)
                        }
                    },
                    header: {
                        type: String,
                        default: ""
                    },
                    headerProps: {
                        type: Object,
                        default: null
                    },
                    subheader: {
                        type: String,
                        default: ""
                    },
                    subheaderProps: {
                        type: Object,
                        default: null
                    },
                    link: {
                        type: Object,
                        default: null
                    },
                    linkProps: {
                        type: Object,
                        default: null
                    },
                    secondLink: {
                        type: Object,
                        default: null
                    },
                    secondLinkProps: {
                        type: Object,
                        default: null
                    },
                    size: {
                        type: String,
                        default: "default",
                        validator: function(t) {
                            return i.includes(t)
                        }
                    },
                    fullLink: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        breakpoints: {
                            small: {
                                maxWidth: 647
                            },
                            medium: {
                                minWidth: 648,
                                maxWidth: 1024
                            },
                            large: {
                                minWidth: 1025
                            }
                        },
                        currentBreakpoint: "large",
                        rootLink: {
                            href: null,
                            target: null
                        }
                    }
                },
                computed: {
                    contentAlignment: function() {
                        return this.images[this.currentBreakpoint].align || "center"
                    },
                    rootClasses: function() {
                        var t = ["kib-banner", "default" !== this.size ? "kib-banner--".concat(this.size) : ""];
                        return (this.header || this.subheader || this.showActions) && t.push("kib-banner--align-".concat(this.contentAlignment), "kib-banner--".concat(this.mode), "kib-banner--".concat(this.fontStyles)), t
                    },
                    showActions: function() {
                        return !(!this.link && !this.secondLink || this.fullLink || this.isShort && "small" === this.currentBreakpoint)
                    },
                    isShort: function() {
                        return "short" === this.size
                    }
                },
                methods: {
                    shortShowLink: function() {
                        return this.isShort && this.link && "small" === this.currentBreakpoint
                    },
                    getTag: function() {
                        var t, e;
                        return this.shortShowLink() || this.fullLink ? (this.rootLink.href = null === (t = this.link) || void 0 === t ? void 0 : t.href, this.rootLink.target = null === (e = this.link) || void 0 === e ? void 0 : e.target, "a") : (this.rootLink.href = null, this.rootLink.target = null, "div")
                    },
                    breakpointChange: function(t, e) {
                        e && (this.currentBreakpoint = t)
                    }
                }
            });
            var x = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("kib-display-viewport", {
                    attrs: {
                        breakpoints: t.breakpoints
                    },
                    on: {
                        change: t.breakpointChange
                    }
                }, [n(t.getTag(), t._b({
                    tag: "component",
                    class: t.rootClasses
                }, "component", t.rootLink, !1), [n("picture", [n("source", {
                    attrs: {
                        media: "(max-width: 648px)",
                        srcset: t.images.small.url
                    }
                }), t._v(" "), n("source", {
                    attrs: {
                        media: "(max-width: 1024px)",
                        srcset: t.images.medium.url
                    }
                }), t._v(" "), n("source", {
                    attrs: {
                        media: "(min-width: 1025px)",
                        srcset: t.images.large.url
                    }
                }), t._v(" "), n("img", {
                    staticClass: "kib-banner__image",
                    attrs: {
                        src: t.images.large.url,
                        alt: t.alt,
                        loading: "lazy"
                    }
                })]), t._v(" "), t.header || t.subheader || t.showActions ? n("div", {
                    staticClass: "kib-banner__wrapper"
                }, [n("div", {
                    staticClass: "kib-banner__text"
                }, [t.header ? n(t.headerTag, t._b({
                    tag: "component",
                    staticClass: "kib-banner__header"
                }, "component", t.headerProps, !1), [t._v("\n          " + t._s(t.header) + "\n        ")]) : t._e(), t._v(" "), t.subheader ? n("p", t._b({
                    staticClass: "kib-banner__subheader"
                }, "p", t.subheaderProps, !1), [t._v("\n          " + t._s(t.subheader) + "\n        ")]) : t._e(), t._v(" "), t.showActions ? n("div", {
                    staticClass: "kib-banner__actions"
                }, [t.link ? n("kib-button-small", t._b({
                    attrs: {
                        href: t.link.href,
                        target: t.link.target
                    }
                }, "kib-button-small", t.linkProps, !1), [t._v("\n            " + t._s(t.link.label) + "\n          ")]) : t._e(), t._v(" "), t.secondLink && !t.isShort ? n("kib-button-small", t._b({
                    attrs: {
                        href: t.secondLink.href,
                        target: t.secondLink.target
                    }
                }, "kib-button-small", t.secondLinkProps, !1), [t._v("\n            " + t._s(t.secondLink.label) + "\n          ")]) : t._e()], 1) : t._e()], 1)]) : t._e()])], 1)
            };
            x._withStripped = !0;
            const u = function(t, e, n, i, r, s, a, o, c, d) {
                "boolean" != typeof a && (c = o, o = a, a = !1);
                const u = "function" == typeof n ? n.options : n;
                let l;
                if (t && t.render && (u.render = t.render, u.staticRenderFns = t.staticRenderFns, u._compiled = !0, r && (u.functional = !0)), i && (u._scopeId = i), s ? (l = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), e && e.call(this, c(t)), t && t._registeredComponents && t._registeredComponents.add(s)
                    }, u._ssrRegister = l) : e && (l = a ? function(t) {
                        e.call(this, d(t, this.$root.$options.shadowRoot))
                    } : function(t) {
                        e.call(this, o(t))
                    }), l)
                    if (u.functional) {
                        const t = u.render;
                        u.render = function(e, n) {
                            return l.call(n), t(e, n)
                        }
                    } else {
                        const t = u.beforeCreate;
                        u.beforeCreate = t ? [].concat(t, l) : [l]
                    }
                return n
            }({
                render: x,
                staticRenderFns: []
            }, void 0, F, void 0, !1, void 0, !1, void 0, void 0, void 0);
            u.options.install = function(t) {
                return t.component(u.options.name, u)
            };
            var m = u.options,
                k = ["action", "utility", "destructive", "transactional"],
                E = ["primary", "secondary", "tertiary"],
                _ = ["small", "medium", "large"],
                y = ["start", "end"];
            const C = r.a.extend({
                name: "kib-button-new",
                props: {
                    theme: {
                        type: String,
                        default: "action",
                        validator: function(t) {
                            return k.includes(t)
                        }
                    },
                    emphasis: {
                        type: String,
                        default: "primary",
                        validator: function(t) {
                            return E.includes(t)
                        }
                    },
                    size: {
                        type: String,
                        default: "large",
                        validator: function(t) {
                            return _.includes(t)
                        }
                    },
                    loading: {
                        type: Boolean,
                        default: !1
                    },
                    iconOnly: {
                        type: Boolean,
                        default: !1
                    },
                    appended: {
                        type: Boolean,
                        default: !1
                    },
                    iconPosition: {
                        type: String,
                        default: "start",
                        validator: function(t) {
                            return y.includes(t)
                        }
                    }
                }
            });
            var A = function(t, e) {
                var n, r = e._c;
                return r(e.data.attrs && e.data.attrs.href ? "a" : "button", e._g(e._b({
                    ref: e.data.ref,
                    tag: "component",
                    class: ["kib-button-new", (n = {}, n["kib-button-new--" + e.props.size] = "large" !== e.props.size, n["kib-button-new--" + e.props.emphasis] = "primary" !== e.props.emphasis, n["kib-button-new--" + e.props.theme] = "action" !== e.props.theme, n["kib-button-new--icon-only"] = e.props.iconOnly || e.slots().icon && !e.slots().default, n["kib-button-new--loading"] = e.props.loading, n["kib-button-new--appended"] = e.props.appended, n), e.data.class, e.data.staticClass],
                    style: [e.data.style, e.data.staticStyle]
                }, "component", e.data.attrs, !1), e.listeners), [e.slots().icon && ("start" === e.props.iconPosition || e.props.loading) ? r("span", {
                    staticClass: "kib-button-new__icon",
                    attrs: {
                        role: "presentation",
                        "aria-hidden": "true"
                    }
                }, [e._t("icon")], 2) : e._e(), e._v(" "), e.slots().default || e.props.loading && e.slots().loadingLabel ? r("span", {
                    staticClass: "kib-button-new__label"
                }, [e.props.loading && e.slots().loadingLabel ? [e._t("loadingLabel")] : e._t("default")], 2) : e._e(), e._v(" "), e.slots().icon && "end" === e.props.iconPosition && !e.props.loading ? r("span", {
                    staticClass: "kib-button-new__icon kib-button-new__icon--end",
                    attrs: {
                        role: "presentation",
                        "aria-hidden": "true"
                    }
                }, [e._t("icon")], 2) : e._e()])
            };
            A._withStripped = !0;
            const B = function(t, e, n, r, i, a, s, o, c, d) {
                "boolean" != typeof s && (c = o, o = s, s = !1);
                const p = "function" == typeof n ? n.options : n;
                let l;
                if (t && t.render && (p.render = t.render, p.staticRenderFns = t.staticRenderFns, p._compiled = !0, i && (p.functional = !0)), r && (p._scopeId = r), a ? (l = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), e && e.call(this, c(t)), t && t._registeredComponents && t._registeredComponents.add(a)
                    }, p._ssrRegister = l) : e && (l = s ? function(t) {
                        e.call(this, d(t, this.$root.$options.shadowRoot))
                    } : function(t) {
                        e.call(this, o(t))
                    }), l)
                    if (p.functional) {
                        const t = p.render;
                        p.render = function(e, n) {
                            return l.call(n), t(e, n)
                        }
                    } else {
                        const t = p.beforeCreate;
                        p.beforeCreate = t ? [].concat(t, l) : [l]
                    }
                return n
            }({
                render: A,
                staticRenderFns: []
            }, void 0, C, void 0, !0, void 0, !1, void 0, void 0, void 0);
            B.options.install = function(t) {
                return t.component(B.options.name, B)
            };
            var S = B.options,
                D = n(654),
                T = n.n(D);
            const w = {
                    a: {
                        1: {
                            text: "#FFFFFF",
                            background: "#871247",
                            active: "#791040",
                            hover: "#932A59",
                            focus: "#871247"
                        },
                        2: {
                            text: "#000000",
                            background: "#E565A0",
                            active: "#CE5B90",
                            hover: "#E874A9",
                            focus: "#E565A0"
                        },
                        3: {
                            text: "#000000",
                            background: "#F9CAE6",
                            active: "#E565A0",
                            hover: "#FACFE8",
                            focus: "#F9CAE6"
                        },
                        4: {
                            text: "#000000",
                            background: "#FCECF4",
                            active: "#E565A0",
                            hover: "#FCEEF5",
                            focus: "#FCECF4"
                        }
                    },
                    b: {
                        1: {
                            text: "#FFFFFF",
                            background: "#BC2848",
                            active: "#A92441",
                            hover: "#C33D5A",
                            focus: "#BC2848"
                        },
                        2: {
                            text: "#000000",
                            background: "#F54D5B",
                            active: "#DC4552",
                            hover: "#F65F6B",
                            focus: "#F54D5B"
                        },
                        3: {
                            text: "#000000",
                            background: "#F9A2AF",
                            active: "#F54D5B",
                            hover: "#FAABB7",
                            focus: "#F9A2AF"
                        },
                        4: {
                            text: "#000000",
                            background: "#FCDEE0",
                            active: "#F9A2AF",
                            hover: "#FCE1E3",
                            focus: "#FCDEE0"
                        }
                    },
                    c: {
                        1: {
                            text: "#000000",
                            background: "#F66E5A",
                            active: "#DD6351",
                            hover: "#F77D6A",
                            focus: "#F66E5A"
                        },
                        2: {
                            text: "#000000",
                            background: "#F79E92",
                            active: "#F66E5A",
                            hover: "#F8A89D",
                            focus: "#F79E92"
                        },
                        3: {
                            text: "#000000",
                            background: "#FFBFA8",
                            active: "#F79E92",
                            hover: "#FFC5B1",
                            focus: "#FFBFA8"
                        },
                        4: {
                            text: "#000000",
                            background: "#F9DCD4",
                            active: "#FFBFA8",
                            hover: "#FAE0D8",
                            focus: "#F9DCD4"
                        }
                    },
                    d: {
                        1: {
                            text: "#000000",
                            background: "#FFC80C",
                            active: "#E6B40B",
                            hover: "#FFCE24",
                            focus: "#FFC80C"
                        },
                        2: {
                            text: "#000000",
                            background: "#FBD58D",
                            active: "#E6B40B",
                            hover: "#FBD998",
                            focus: "#FBD58D"
                        },
                        3: {
                            text: "#000000",
                            background: "#F7E2B5",
                            active: "#FBD58D",
                            hover: "#F8E5BC",
                            focus: "#F7E2B5"
                        },
                        4: {
                            text: "#000000",
                            background: "#F9F4DC",
                            active: "#F7E2B5",
                            hover: "#FAF5E0",
                            focus: "#F9F4DC"
                        }
                    },
                    e: {
                        1: {
                            text: "#FFFFFF",
                            background: "#05402B",
                            active: "#053A27",
                            hover: "#1E5340",
                            focus: "#05402B"
                        },
                        2: {
                            text: "#FFFFFF",
                            background: "#006B2B",
                            active: "#053A27",
                            hover: "#197A40",
                            focus: "#006B2B"
                        },
                        3: {
                            text: "#000000",
                            background: "#A0CDA8",
                            active: "#6DAC79",
                            hover: "#A9D2B1",
                            focus: "#A0CDA8"
                        },
                        4: {
                            text: "#000000",
                            background: "#D0E6CB",
                            active: "#A0CDA8",
                            hover: "#D5E8D0",
                            focus: "#D0E6CB"
                        }
                    },
                    f: {
                        1: {
                            text: "#000000",
                            background: "#4DAF7A",
                            active: "#459E6E",
                            hover: "#5FB787",
                            focus: "#4DAF7A"
                        },
                        2: {
                            text: "#000000",
                            background: "#88CCA1",
                            active: "#4DAF7A",
                            hover: "#94D1AA",
                            focus: "#88CCA1"
                        },
                        3: {
                            text: "#000000",
                            background: "#BEEACE",
                            active: "#88CCA1",
                            hover: "#C5ECD3",
                            focus: "#BEEACE"
                        },
                        4: {
                            text: "#000000",
                            background: "#E2F2E7",
                            active: "#BEEACE",
                            hover: "#E5F3E9",
                            focus: "#E2F2E7"
                        }
                    },
                    g: {
                        1: {
                            text: "#000000",
                            background: "#286568",
                            active: "#245B5E",
                            hover: "#3D7477",
                            focus: "#286568"
                        },
                        2: {
                            text: "#000000",
                            background: "#75B9BA",
                            active: "#69A7A7",
                            hover: "#83C0C1",
                            focus: "#75B9BA"
                        },
                        3: {
                            text: "#000000",
                            background: "#B8E2DE",
                            active: "#75B9BA",
                            hover: "#BFE5E1",
                            focus: "#B8E2DE"
                        },
                        4: {
                            text: "#000000",
                            background: "#E3F3F1",
                            active: "#B8E2DE",
                            hover: "#E6F4F2",
                            focus: "#E3F3F1"
                        }
                    },
                    h: {
                        1: {
                            text: "#FFFFFF",
                            background: "#002957",
                            active: "#00254E",
                            hover: "#193E68",
                            focus: "#002957"
                        },
                        2: {
                            text: "#FFFFFF",
                            background: "#1C49C2",
                            active: "#031657",
                            hover: "#2661CE",
                            focus: "#1C49C2"
                        },
                        3: {
                            text: "#000000",
                            background: "#7FA8D9",
                            active: "#7297C3",
                            hover: "#8CB1DD",
                            focus: "#7FA8D9"
                        },
                        4: {
                            text: "#000000",
                            background: "#DDF0FF",
                            active: "#7FA8D9",
                            hover: "#E0F1FF",
                            focus: "#DDF0FF"
                        }
                    },
                    i: {
                        1: {
                            text: "#FFFFFF",
                            background: "#543577",
                            active: "#4C306B",
                            hover: "#654985",
                            focus: "#543577"
                        },
                        2: {
                            text: "#000000",
                            background: "#C298C5",
                            active: "#AF89B1",
                            hover: "#C8A2CB",
                            focus: "#C298C5"
                        },
                        3: {
                            text: "#000000",
                            background: "#E4C2E2",
                            active: "#C298C5",
                            hover: "#E7C8E5",
                            focus: "#E4C2E2"
                        },
                        4: {
                            text: "#000000",
                            background: "#F0E0EE",
                            active: "#E4C2E2",
                            hover: "#F1E3F0",
                            focus: "#F0E0EE"
                        }
                    },
                    j: {
                        1: {
                            text: "#FFFFFF",
                            background: "#4D4D4D",
                            active: "#121212",
                            hover: "#666666",
                            focus: "#4D4D4D"
                        },
                        2: {
                            text: "#000000",
                            background: "#FFFFFF",
                            active: "#EEEEEE",
                            hover: "#E7E7E7",
                            focus: "#FFFFFF"
                        }
                    }
                },
                O = {
                    a: {
                        1: {
                            text: "#871247",
                            background: "#FFFFFF",
                            active: "#FACFEB",
                            hover: "#FCECF4",
                            focus: "#FFFFFF",
                            border: "#871247"
                        }
                    },
                    b: {
                        1: {
                            text: "#BC2848",
                            background: "#FFFFFF",
                            active: "#FCDEE0",
                            hover: "#FCE1E3",
                            focus: "#FFFFFF",
                            border: "#BC2848"
                        }
                    },
                    c: {
                        1: {
                            text: "#000000",
                            background: "#FFFFFF",
                            active: "#FFBFA8",
                            hover: "#F9DCD4",
                            focus: "#FFFFFF",
                            border: "#F66E5A"
                        }
                    },
                    d: {
                        1: {
                            text: "#000000",
                            background: "#FFFFFF",
                            active: "#F8E5BC",
                            hover: "#F9F4DC",
                            focus: "#FFFFFF",
                            border: "#FFC80C"
                        }
                    },
                    e: {
                        1: {
                            text: "#05402B",
                            background: "#FFFFFF",
                            active: "#A0CDA8",
                            hover: "#D5E8D0",
                            focus: "#FFFFFF",
                            border: "#05402B"
                        }
                    },
                    f: {
                        1: {
                            text: "#000000",
                            background: "#FFFFFF",
                            active: "#BEEACE",
                            hover: "#E2F2E7",
                            focus: "#FFFFFF",
                            border: "#4DAF7A"
                        }
                    },
                    g: {
                        1: {
                            text: "#286568",
                            background: "#FFFFFF",
                            active: "#286568",
                            hover: "#E6F4F2",
                            focus: "#FFFFFF",
                            border: "#286568"
                        }
                    },
                    h: {
                        1: {
                            text: "#1C49C2",
                            background: "#FFFFFF",
                            active: "#B8D7F3",
                            hover: "#DBEBF9",
                            focus: "#FFFFFF",
                            border: "#1C49C2"
                        }
                    },
                    i: {
                        1: {
                            text: "#543577",
                            background: "#FFFFFF",
                            active: "#E4C2E2",
                            hover: "#F1E3F0",
                            focus: "#FFFFFF",
                            border: "#543577"
                        }
                    },
                    j: {
                        1: {
                            text: "#000000",
                            background: "transparent",
                            active: "#EEEEEE",
                            hover: "#FFFFFF",
                            focus: "transparent",
                            border: "#000000"
                        },
                        2: {
                            text: "#FFFFFF",
                            background: "transparent",
                            active: "#4D4D4D",
                            hover: "#666666",
                            focus: "transparent",
                            border: "#FFFFFF"
                        },
                        3: {
                            text: "#121212",
                            background: "#FFFFFF",
                            active: "#CCCCCC",
                            hover: "#EEEEEE",
                            focus: "#FFFFFF",
                            border: "#121212"
                        }
                    }
                };

            function j(t, e) {
                if (!e.match(/^[a-j]-[0-9]$/i)) return null;
                const style = e.split("-");
                return 2 !== style.length ? null : function(t, e, n) {
                    const r = ("secondary" === t ? O : w)[e];
                    if (r && r[n]) {
                        const t = r[n];
                        return {
                            "--splash-text-color": t.text,
                            "--splash-background": t.background,
                            "--splash-background-hover": t.hover,
                            "--splash-background-focus": t.focus,
                            "--splash-background-active": t.active,
                            "--splash-border": t.border
                        }
                    }
                    return null
                }(t, style[0], style[1])
            }
            var L = {
                "cms-banner--extraSmall": "banner-module_cms-banner--extraSmall__RK8GG",
                "cms-banner--small": "banner-module_cms-banner--small__3aA-B"
            };

            function R(t, e, n = null) {
                return t[e] || (t[e] = String(n)), t
            }

            function z(t) {
                return null != t && "" !== t
            }

            function $(t) {
                return Object.keys(null != t ? t : {}).reduce(((e, n) => {
                    if (z(n) && z(t[n])) switch (n) {
                        case "promoName":
                            t.name || R(e, "data-name", t[n]), R(e, "data-promo-name", t[n]);
                            break;
                        case "creativeName":
                            t.creative || R(e, "data-creative", t[n]), R(e, "data-creative-name", t[n]);
                            break;
                        case "pageType":
                            R(e, "data-landing-page-type", t[n]);
                            break;
                        case "position":
                            t.placementSlotNumber || R(e, "data-placement-slot-number", t[n]), R(e, "data-position", t[n]);
                            break;
                        case "targetSegment":
                            t.targetSegment || R(e, "data-analytics-target-segment", t[n]), R(e, "data-analytics-target-segment", t[n]);
                            break;
                        default:
                            n.startsWith("data-") ? R(e, T()(n), t[n]) : R(e, "data-".concat(T()(n)), t[n])
                    }
                    return e
                }), {})
            }
            const U = [null, "extraSmall", "small", "medium", "large"];

            function N(template, style, script, t, e, n, r, o, c, d) {
                "boolean" != typeof r && (c = o, o = r, r = !1);
                const l = "function" == typeof script ? script.options : script;
                let f;
                if (template && template.render && (l.render = template.render, l.staticRenderFns = template.staticRenderFns, l._compiled = !0, e && (l.functional = !0)), t && (l._scopeId = t), n ? (f = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), style && style.call(this, c(t)), t && t._registeredComponents && t._registeredComponents.add(n)
                    }, l._ssrRegister = f) : style && (f = r ? function(t) {
                        style.call(this, d(t, this.$root.$options.shadowRoot))
                    } : function(t) {
                        style.call(this, o(t))
                    }), f)
                    if (l.functional) {
                        const t = l.render;
                        l.render = function(e, n) {
                            return f.call(n), t(e, n)
                        }
                    } else {
                        const t = l.beforeCreate;
                        l.beforeCreate = t ? [].concat(t, f) : [f]
                    }
                return script
            }
            const I = N({
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.hasSize ? n("banner-grid", {
                        staticClass: "js-tracked-promo",
                        attrs: {
                            data: t.data,
                            size: t.size
                        }
                    }) : n("kib-banner", t._b({
                        staticClass: "js-tracked-promo",
                        attrs: {
                            images: t.images,
                            alt: t.data.altText,
                            "header-tag": t.data.headerTag,
                            header: t.data.header && t.data.header.text,
                            "header-props": {
                                style: {
                                    color: t.data.header && t.data.header.textColor
                                }
                            },
                            subheader: t.data.subText && t.data.subText.text,
                            "subheader-props": {
                                style: {
                                    color: t.data.subText && t.data.subText.textColor
                                }
                            },
                            link: t.firstButton,
                            "link-props": t.firstButtonProps,
                            "second-link": t.secondButton,
                            "second-link-props": t.secondButtonProps,
                            "full-link": !t.isDynamic,
                            size: t.data.height,
                            "font-styles": t.data.textStyles,
                            "aria-label": !t.isDynamic && t.data.link && t.data.link.accText ? t.data.link.accText : void 0
                        }
                    }, "kib-banner", t.analyticsProps, !1))
                },
                staticRenderFns: []
            }, undefined, {
                name: "CmsBanner",
                components: {
                    KibBanner: m,
                    BannerGrid: N({
                        render: function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n(t.tag, t._b({
                                tag: "component",
                                class: t.rootClasses,
                                attrs: {
                                    href: t.link,
                                    target: t.target
                                }
                            }, "component", t.analyticsProps, !1), [n("img", {
                                staticClass: "kib-banner__image",
                                attrs: {
                                    src: t.src,
                                    srcset: t.urlString,
                                    loading: "lazy"
                                }
                            }), t._v(" "), t.showText ? n("div", {
                                staticClass: "kib-banner__wrapper"
                            }, [n("div", {
                                staticClass: "kib-banner__text"
                            }, [t.hasHeader ? n(t.headerTag, {
                                tag: "component",
                                staticClass: "kib-banner__header"
                            }, [t._v("\n        " + t._s(t.data.header.text) + "\n      ")]) : t._e(), t._v(" "), t.hasSubHeader ? n("p", {
                                staticClass: "kib-banner__subheader"
                            }, [t._v("\n        " + t._s(t.data.subText.text) + "\n      ")]) : t._e(), t._v(" "), t.showActions ? n("div", {
                                staticClass: "kib-banner__actions"
                            }, [n("kib-button-new", t._b({
                                attrs: {
                                    href: t.firstButton.href,
                                    target: t.firstButton.target
                                }
                            }, "kib-button-new", t.firstButtonProps, !1), [t._v("\n          " + t._s(t.firstButton.label) + "\n        ")])], 1) : t._e()], 1)]) : t._e()])
                        },
                        staticRenderFns: []
                    }, undefined, {
                        name: "CmsBannerGrid",
                        components: {
                            KibButtonNew: S
                        },
                        props: {
                            data: {
                                type: Object,
                                required: !0
                            },
                            size: {
                                type: String,
                                required: !1,
                                default: null,
                                validator: t => -1 !== U.indexOf(t)
                            }
                        },
                        data: () => ({
                            buttonVariant: {
                                primary: null,
                                secondary: "secondary"
                            },
                            alignment: {
                                right: "end",
                                center: "center",
                                left: "start"
                            }
                        }),
                        computed: {
                            rootClasses() {
                                var t, e, n, r;
                                return ["kib-banner", "kib-banner--light", "default" !== (null === (t = this.data) || void 0 === t ? void 0 : t.height) && "kib-banner--".concat(this.data.height), "default" !== (null === (e = this.data) || void 0 === e ? void 0 : e.textStyles) && "kib-banner--".concat(this.data.textStyles), (null === (n = this.data) || void 0 === n ? void 0 : n.contentAlignment) && "kib-banner--align-".concat(this.alignment[this.data.contentAlignment]), null !== (r = null !== this.size) && void 0 !== r ? r : L["cms-banner--".concat(this.size)]]
                            },
                            isDynamic() {
                                var t, e, n;
                                return (null === (t = this.data) || void 0 === t || null === (e = t.bannerType) || void 0 === e ? void 0 : e.includes("dynamic")) && (null === (n = this.data) || void 0 === n ? void 0 : n.ctas.length) > 0
                            },
                            showActions() {
                                var t, e;
                                return this.isDynamic || (null === (t = this.data) || void 0 === t ? void 0 : t.link) || (null === (e = this.data) || void 0 === e ? void 0 : e.secondLink)
                            },
                            showText() {
                                var t, e, n, r;
                                return !!(null !== (t = this.data) && void 0 !== t && null !== (e = t.header) && void 0 !== e && e.text || null !== (n = this.data) && void 0 !== n && null !== (r = n.subText) && void 0 !== r && r.text || this.showActions)
                            },
                            tag() {
                                return this.showActions ? "div" : "a"
                            },
                            link() {
                                var t, e;
                                return null === (t = this.data) || void 0 === t || null === (e = t.link) || void 0 === e ? void 0 : e.url
                            },
                            target() {
                                var t, e;
                                return null === (t = this.data) || void 0 === t || null === (e = t.link) || void 0 === e ? void 0 : e.target
                            },
                            src() {
                                var t, e, n, r;
                                return null === (t = this.data) || void 0 === t || null === (e = t.images) || void 0 === e || null === (n = e[this.size]) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.url
                            },
                            urlString() {
                                var t, e, n, r, o, c;
                                const d = null !== (t = this.data) && void 0 !== t && null !== (e = t.images) && void 0 !== e && e[this.size] && (null === (n = this.data) || void 0 === n || null === (r = n.images) || void 0 === r ? void 0 : r[this.size].length) > 1 ? null === (o = this.data) || void 0 === o || null === (c = o.images) || void 0 === c ? void 0 : c[this.size] : void 0;
                                let l;
                                return d && (l = d.filter((t => ["1x", "2x"].includes(t.imageType))).reduce(((t, e, n) => {
                                    let r = 0 !== n ? ", " : "";
                                    return t.concat(r, "".concat(e.url, " ").concat(e.imageType))
                                }), "")), l || void 0
                            },
                            alt() {
                                var t;
                                return null === (t = this.data) || void 0 === t ? void 0 : t.altText
                            },
                            hasHeader() {
                                var t, e;
                                return !(null === (t = this.data) || void 0 === t || null === (e = t.header) || void 0 === e || !e.text)
                            },
                            hasSubHeader() {
                                var t, e;
                                return !(null === (t = this.data) || void 0 === t || null === (e = t.subText) || void 0 === e || !e.text)
                            },
                            headerTag() {
                                var t, e;
                                return (null === (t = this.data) || void 0 === t ? void 0 : t.headerTag) && (null === (e = this.headings) || void 0 === e ? void 0 : e.includes(this.data.headerTag)) || "h3"
                            },
                            firstButton() {
                                var t, e, n, r, o;
                                const c = null === (t = this.data) || void 0 === t || null === (e = t.ctas) || void 0 === e ? void 0 : e[0];
                                if (c) {
                                    return {
                                        label: null != c && c.text ? c.text : null != c && c.accText ? c.accText : "",
                                        href: null == c ? void 0 : c.url,
                                        target: null == c ? void 0 : c.target
                                    }
                                }
                                return {
                                    label: null === (n = this.data.link) || void 0 === n ? void 0 : n.accText,
                                    href: null === (r = this.data.link) || void 0 === r ? void 0 : r.url,
                                    target: null === (o = this.data.link) || void 0 === o ? void 0 : o.target
                                }
                            },
                            firstButtonProps() {
                                if (this.firstButton && this.isDynamic) {
                                    var t, e;
                                    const n = null === (t = this.data) || void 0 === t || null === (e = t.ctas) || void 0 === e ? void 0 : e[0],
                                        r = this.buttonVariant[null == n ? void 0 : n.type],
                                        o = null == n || !n.accText || null != n && n.text && n.text === n.accText ? void 0 : n.accText;
                                    return {
                                        variant: r,
                                        useSplash: !0,
                                        style: j(r, n.style),
                                        "aria-label": o
                                    }
                                }
                            },
                            analyticsProps() {
                                var t;
                                return null !== (t = this.data) && void 0 !== t && t.analytics ? $(this.data.analytics) : null
                            }
                        }
                    }, undefined, false, undefined, !1, void 0, void 0, void 0)
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    },
                    size: {
                        type: String,
                        required: !1,
                        default: null,
                        validator: t => -1 !== U.indexOf(t)
                    }
                },
                data: () => ({
                    buttonVariant: {
                        primary: null,
                        secondary: "secondary"
                    },
                    alignment: {
                        right: "end",
                        center: "center",
                        left: "start"
                    },
                    imageSizes: ["small", "medium", "large"]
                }),
                computed: {
                    hasSize() {
                        return !!this.size
                    },
                    images() {
                        return this.imageSizes.reduce(((t, e) => (t[e] = this.data.images[e][0], t[e].align = this.alignment[this.data.contentAlignment], t)), {})
                    },
                    isDynamic() {
                        return this.data.bannerType.includes("dynamic") && this.data.ctas.length > 0
                    },
                    firstButton() {
                        var t, e, n;
                        const r = this.data.ctas[0];
                        if (r) {
                            return {
                                label: null != r && r.text ? r.text : null != r && r.accText ? r.accText : "",
                                href: r.url,
                                target: r.target
                            }
                        }
                        return {
                            label: null === (t = this.data.link) || void 0 === t ? void 0 : t.accText,
                            href: null === (e = this.data.link) || void 0 === e ? void 0 : e.url,
                            target: null === (n = this.data.link) || void 0 === n ? void 0 : n.target
                        }
                    },
                    firstButtonProps() {
                        if (this.firstButton && this.isDynamic) {
                            const t = this.data.ctas[0],
                                e = this.buttonVariant[t.type],
                                n = null == t || !t.accText || null != t && t.text && t.text === t.accText ? void 0 : t.accText;
                            return {
                                variant: e,
                                useSplash: !0,
                                style: j(e, t.style),
                                "aria-label": n
                            }
                        }
                        return null
                    },
                    secondButton() {
                        const t = this.data.ctas[1];
                        if (t) {
                            return {
                                label: null != t && t.text ? t.text : null != t && t.accText ? t.accText : "",
                                href: t.url,
                                target: t.target
                            }
                        }
                        return null
                    },
                    secondButtonProps() {
                        if (this.secondButton) {
                            const t = this.data.ctas[1],
                                e = this.buttonVariant[t.type],
                                n = null == t || !t.accText || null != t && t.text && t.text === t.accText ? void 0 : t.accText;
                            return {
                                variant: e,
                                useSplash: !0,
                                style: j(e, t.style),
                                "aria-label": n
                            }
                        }
                        return null
                    },
                    analyticsProps() {
                        var t;
                        return null !== (t = this.data) && void 0 !== t && t.analytics ? $(this.data.analytics) : null
                    }
                }
            }, undefined, false, undefined, !1, void 0, void 0, void 0)
        },
        654: function(t, e, n) {
            var r = n(812)((function(t, e, n) {
                return t + (n ? "-" : "") + e.toLowerCase()
            }));
            t.exports = r
        },
        655: function(t, e, n) {
            var r = n(817);
            t.exports = function(t) {
                return null == t ? "" : r(t)
            }
        },
        812: function(t, e, n) {
            var r = n(813),
                o = n(814),
                c = n(827),
                d = RegExp("['’]", "g");
            t.exports = function(t) {
                return function(e) {
                    return r(c(o(e).replace(d, "")), t, "")
                }
            }
        },
        813: function(t, e) {
            t.exports = function(t, e, n, r) {
                var o = -1,
                    c = null == t ? 0 : t.length;
                for (r && c && (n = t[++o]); ++o < c;) n = e(n, t[o], o, t);
                return n
            }
        },
        814: function(t, e, n) {
            var r = n(815),
                o = n(655),
                c = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                d = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
            t.exports = function(t) {
                return (t = o(t)) && t.replace(c, r).replace(d, "")
            }
        },
        815: function(t, e, n) {
            var r = n(816)({
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            });
            t.exports = r
        },
        816: function(t, e) {
            t.exports = function(object) {
                return function(t) {
                    return null == object ? void 0 : object[t]
                }
            }
        },
        817: function(t, e, n) {
            var r = n(583),
                o = n(820),
                c = n(821),
                d = n(822),
                l = r ? r.prototype : void 0,
                f = l ? l.toString : void 0;
            t.exports = function t(e) {
                if ("string" == typeof e) return e;
                if (c(e)) return o(e, t) + "";
                if (d(e)) return f ? f.call(e) : "";
                var n = e + "";
                return "0" == n && 1 / e == -Infinity ? "-0" : n
            }
        },
        818: function(t, e, n) {
            var r = n(819),
                o = "object" == typeof self && self && self.Object === Object && self,
                c = r || o || Function("return this")();
            t.exports = c
        },
        819: function(t, e, n) {
            (function(e) {
                var n = "object" == typeof e && e && e.Object === Object && e;
                t.exports = n
            }).call(this, n(65))
        },
        820: function(t, e) {
            t.exports = function(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
                return o
            }
        },
        821: function(t, e) {
            var n = Array.isArray;
            t.exports = n
        },
        822: function(t, e, n) {
            var r = n(823),
                o = n(826);
            t.exports = function(t) {
                return "symbol" == typeof t || o(t) && "[object Symbol]" == r(t)
            }
        },
        823: function(t, e, n) {
            var r = n(583),
                o = n(824),
                c = n(825),
                d = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : d && d in Object(t) ? o(t) : c(t)
            }
        },
        824: function(t, e, n) {
            var r = n(583),
                o = Object.prototype,
                c = o.hasOwnProperty,
                d = o.toString,
                l = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                var e = c.call(t, l),
                    n = t[l];
                try {
                    t[l] = void 0;
                    var r = !0
                } catch (t) {}
                var o = d.call(t);
                return r && (e ? t[l] = n : delete t[l]), o
            }
        },
        825: function(t, e) {
            var n = Object.prototype.toString;
            t.exports = function(t) {
                return n.call(t)
            }
        },
        826: function(t, e) {
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        },
        827: function(t, e, n) {
            var r = n(828),
                o = n(829),
                c = n(655),
                d = n(830);
            t.exports = function(t, pattern, e) {
                return t = c(t), void 0 === (pattern = e ? void 0 : pattern) ? o(t) ? d(t) : r(t) : t.match(pattern) || []
            }
        },
        828: function(t, e) {
            var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            t.exports = function(t) {
                return t.match(n) || []
            }
        },
        829: function(t, e) {
            var n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            t.exports = function(t) {
                return n.test(t)
            }
        },
        830: function(t, e) {
            var n = "\\u2700-\\u27bf",
                r = "a-z\\xdf-\\xf6\\xf8-\\xff",
                o = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                c = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                d = "[" + c + "]",
                l = "\\d+",
                f = "[\\u2700-\\u27bf]",
                h = "[" + r + "]",
                v = "[^\\ud800-\\udfff" + c + l + n + r + o + "]",
                F = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                x = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                m = "[" + o + "]",
                k = "(?:" + h + "|" + v + ")",
                E = "(?:" + m + "|" + v + ")",
                _ = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                y = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                C = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                A = "[\\ufe0e\\ufe0f]?",
                B = A + C + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", F, x].join("|") + ")" + A + C + ")*"),
                S = "(?:" + [f, F, x].join("|") + ")" + B,
                D = RegExp([m + "?" + h + "+" + _ + "(?=" + [d, m, "$"].join("|") + ")", E + "+" + y + "(?=" + [d, m + k, "$"].join("|") + ")", m + "?" + k + "+" + _, m + "+" + y, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", l, S].join("|"), "g");
            t.exports = function(t) {
                return t.match(D) || []
            }
        }
    }
]);