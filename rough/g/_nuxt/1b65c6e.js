(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        1065: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return W
                })), n.d(t, "b", (function() {
                    return Z
                }));
                var o, r = n(1),
                    l = n(862),
                    c = function() {
                        return (c = Object.assign || function(e) {
                            for (var t, n = 1, i = arguments.length; n < i; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    },
                    i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
                    d = (function(e, t) {
                        var n;
                        n = function() {
                            return function(e) {
                                var t = {};

                                function n(i) {
                                    if (t[i]) return t[i].exports;
                                    var o = t[i] = {
                                        exports: {},
                                        id: i,
                                        loaded: !1
                                    };
                                    return e[i].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
                                }
                                return n.m = e, n.c = t, n.p = "", n(0)
                            }([function(e, t) {
                                e.exports = function() {
                                    if ("undefined" == typeof document || "undefined" == typeof window) return {
                                        ask: function() {
                                            return "initial"
                                        },
                                        element: function() {
                                            return null
                                        },
                                        ignoreKeys: function() {},
                                        specificKeys: function() {},
                                        registerOnChange: function() {},
                                        unRegisterOnChange: function() {}
                                    };
                                    var e = document.documentElement,
                                        t = null,
                                        n = "initial",
                                        i = n,
                                        o = Date.now(),
                                        r = "false",
                                        s = ["button", "input", "select", "textarea"],
                                        a = [],
                                        l = [16, 17, 18, 91, 93],
                                        u = [],
                                        c = {
                                            keydown: "keyboard",
                                            keyup: "keyboard",
                                            mousedown: "mouse",
                                            mousemove: "mouse",
                                            MSPointerDown: "pointer",
                                            MSPointerMove: "pointer",
                                            pointerdown: "pointer",
                                            pointermove: "pointer",
                                            touchstart: "touch",
                                            touchend: "touch"
                                        },
                                        d = !1,
                                        f = {
                                            x: null,
                                            y: null
                                        },
                                        h = {
                                            2: "touch",
                                            3: "touch",
                                            4: "mouse"
                                        },
                                        p = !1;
                                    try {
                                        var v = Object.defineProperty({}, "passive", {
                                            get: function() {
                                                p = !0
                                            }
                                        });
                                        window.addEventListener("test", null, v)
                                    } catch (e) {}
                                    var b = function() {
                                            if (r = !(e.getAttribute("data-whatpersist") || "false" === document.body.getAttribute("data-whatpersist"))) try {
                                                window.sessionStorage.getItem("what-input") && (n = window.sessionStorage.getItem("what-input")), window.sessionStorage.getItem("what-intent") && (i = window.sessionStorage.getItem("what-intent"))
                                            } catch (e) {}
                                            g("input"), g("intent")
                                        },
                                        m = function(e) {
                                            var t = e.which,
                                                o = c[e.type];
                                            "pointer" === o && (o = x(e));
                                            var r = !u.length && -1 === l.indexOf(t),
                                                a = u.length && -1 !== u.indexOf(t),
                                                d = "keyboard" === o && t && (r || a) || "mouse" === o || "touch" === o;
                                            if (C(o) && (d = !1), d && n !== o && (S("input", n = o), g("input")), d && i !== o) {
                                                var f = document.activeElement;
                                                f && f.nodeName && (-1 === s.indexOf(f.nodeName.toLowerCase()) || "button" === f.nodeName.toLowerCase() && !$(f, "form")) && (S("intent", i = o), g("intent"))
                                            }
                                        },
                                        g = function(t) {
                                            e.setAttribute("data-what" + t, "input" === t ? n : i), k(t)
                                        },
                                        w = function(e) {
                                            var t = c[e.type];
                                            "pointer" === t && (t = x(e)), O(e), (!d && !C(t) || d && "wheel" === e.type || "mousewheel" === e.type || "DOMMouseScroll" === e.type) && i !== t && (S("intent", i = t), g("intent"))
                                        },
                                        y = function(n) {
                                            n.target.nodeName ? (t = n.target.nodeName.toLowerCase(), e.setAttribute("data-whatelement", t), n.target.classList && n.target.classList.length && e.setAttribute("data-whatclasses", n.target.classList.toString().replace(" ", ","))) : _()
                                        },
                                        _ = function() {
                                            t = null, e.removeAttribute("data-whatelement"), e.removeAttribute("data-whatclasses")
                                        },
                                        S = function(e, t) {
                                            if (r) try {
                                                window.sessionStorage.setItem("what-" + e, t)
                                            } catch (e) {}
                                        },
                                        x = function(e) {
                                            return "number" == typeof e.pointerType ? h[e.pointerType] : "pen" === e.pointerType ? "touch" : e.pointerType
                                        },
                                        C = function(e) {
                                            var t = Date.now(),
                                                i = "mouse" === e && "touch" === n && t - o < 200;
                                            return o = t, i
                                        },
                                        E = function() {
                                            return "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
                                        },
                                        k = function(e) {
                                            for (var t = 0, o = a.length; t < o; t++) a[t].type === e && a[t].fn.call(void 0, "input" === e ? n : i)
                                        },
                                        O = function(e) {
                                            f.x !== e.screenX || f.y !== e.screenY ? (d = !1, f.x = e.screenX, f.y = e.screenY) : d = !0
                                        },
                                        $ = function(e, t) {
                                            var n = window.Element.prototype;
                                            if (n.matches || (n.matches = n.msMatchesSelector || n.webkitMatchesSelector), n.closest) return e.closest(t);
                                            do {
                                                if (e.matches(t)) return e;
                                                e = e.parentElement || e.parentNode
                                            } while (null !== e && 1 === e.nodeType);
                                            return null
                                        };
                                    return "addEventListener" in window && Array.prototype.indexOf && (c[E()] = "mouse", function() {
                                        var e = !!p && {
                                            passive: !0
                                        };
                                        document.addEventListener("DOMContentLoaded", b), window.PointerEvent ? (window.addEventListener("pointerdown", m), window.addEventListener("pointermove", w)) : window.MSPointerEvent ? (window.addEventListener("MSPointerDown", m), window.addEventListener("MSPointerMove", w)) : (window.addEventListener("mousedown", m), window.addEventListener("mousemove", w), "ontouchstart" in window && (window.addEventListener("touchstart", m, e), window.addEventListener("touchend", m))), window.addEventListener(E(), w, e), window.addEventListener("keydown", m), window.addEventListener("keyup", m), window.addEventListener("focusin", y), window.addEventListener("focusout", _)
                                    }()), {
                                        ask: function(e) {
                                            return "intent" === e ? i : n
                                        },
                                        element: function() {
                                            return t
                                        },
                                        ignoreKeys: function(e) {
                                            l = e
                                        },
                                        specificKeys: function(e) {
                                            u = e
                                        },
                                        registerOnChange: function(e, t) {
                                            a.push({
                                                fn: e,
                                                type: t || "input"
                                            })
                                        },
                                        unRegisterOnChange: function(e) {
                                            var t = function(e) {
                                                for (var t = 0, n = a.length; t < n; t++)
                                                    if (a[t].fn === e) return t
                                            }(e);
                                            (t || 0 === t) && a.splice(t, 1)
                                        },
                                        clearStorage: function() {
                                            window.sessionStorage.clear()
                                        }
                                    }
                                }()
                            }])
                        }, e.exports = n()
                    }(o = {
                        exports: {}
                    }), o.exports),
                    s = "object" == typeof i && i && i.Object === Object && i,
                    a = "object" == typeof self && self && self.Object === Object && self,
                    f = (s || a || Function("return this")()).Symbol,
                    h = Array.isArray,
                    v = Object.prototype,
                    m = v.hasOwnProperty,
                    w = v.toString,
                    p = f ? f.toStringTag : void 0,
                    y = Object.prototype.toString,
                    _ = f ? f.toStringTag : void 0,
                    g = function(e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : _ && _ in Object(e) ? function(e) {
                            var t = m.call(e, p),
                                n = e[p];
                            try {
                                e[p] = void 0;
                                var i = !0
                            } catch (e) {}
                            var o = w.call(e);
                            return i && (t ? e[p] = n : delete e[p]), o
                        }(e) : function(e) {
                            return y.call(e)
                        }(e)
                    },
                    S = f ? f.prototype : void 0,
                    x = S ? S.toString : void 0,
                    C = function e(t) {
                        if ("string" == typeof t) return t;
                        if (h(t)) return function(e, t) {
                            for (var n = -1, i = null == e ? 0 : e.length, o = Array(i); ++n < i;) o[n] = t(e[n], n, e);
                            return o
                        }(t, e) + "";
                        if (function(e) {
                                return "symbol" == typeof e || function(e) {
                                    return null != e && "object" == typeof e
                                }(e) && "[object Symbol]" == g(e)
                            }(t)) return x ? x.call(t) : "";
                        var n = t + "";
                        return "0" == n && 1 / t == -1 / 0 ? "-0" : n
                    },
                    E = 0,
                    k = function(e) {
                        var t = ++E;
                        return function(e) {
                            return null == e ? "" : C(e)
                        }(e) + t
                    },
                    O = {
                        render: function() {
                            var e = this.$createElement,
                                t = this._self._c || e;
                            return t("svg", {
                                attrs: {
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                }
                            }, [t("path", {
                                attrs: {
                                    fill: "currentColor",
                                    d: "M9.31 6.32c.42-.42 1.1-.42 1.5-.02l4.88 4.94c.41.42.41 1.1 0 1.51L10.8 17.7c-.41.41-1.08.41-1.5 0a1.08 1.08 0 010-1.52L13.44 12 9.3 7.83a1.08 1.08 0 010-1.51z"
                                }
                            })])
                        }
                    };

                function $(e, t, n, i, o, r, s, a, l, u) {
                    "boolean" != typeof s && (l = a, a = s, s = !1);
                    const c = "function" == typeof n ? n.options : n;
                    let d;
                    if (e && e.render && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0, o && (c.functional = !0)), i && (c._scopeId = i), r ? (d = function(e) {
                            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), t && t.call(this, l(e)), e && e._registeredComponents && e._registeredComponents.add(r)
                        }, c._ssrRegister = d) : t && (d = s ? function(e) {
                            t.call(this, u(e, this.$root.$options.shadowRoot))
                        } : function(e) {
                            t.call(this, a(e))
                        }), d)
                        if (c.functional) {
                            const e = c.render;
                            c.render = function(t, n) {
                                return d.call(n), e(t, n)
                            }
                        } else {
                            const e = c.beforeCreate;
                            c.beforeCreate = e ? [].concat(e, d) : [d]
                        }
                    return n
                }
                const L = r.a.extend({
                    name: "kib-carousel-control",
                    components: {
                        KibTransition: l.a,
                        KibArrowLeftSvg: {
                            render: function() {
                                var e = this.$createElement,
                                    t = this._self._c || e;
                                return t("svg", {
                                    attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24"
                                    }
                                }, [t("path", {
                                    attrs: {
                                        fill: "currentColor",
                                        d: "M14.69 6.32c.4.41.4 1.1 0 1.51L10.56 12l4.13 4.17c.4.42.4 1.1 0 1.52-.42.41-1.1.41-1.5 0L8.3 12.75a1.08 1.08 0 010-1.51l4.9-4.94c.4-.4 1.08-.4 1.5.02h-.01z"
                                    }
                                })])
                            }
                        },
                        KibArrowRightSvg: O
                    },
                    inheritAttrs: !1,
                    props: {
                        reverse: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        icon: function() {
                            return this.reverse ? "kib-arrow-left-svg" : "kib-arrow-right-svg"
                        }
                    }
                });
                var T = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("kib-transition", {
                        attrs: {
                            name: "fade",
                            speed: "fast",
                            appear: ""
                        }
                    }, [n("button", e._g(e._b({
                        staticClass: "kib-carousel__control",
                        class: "kib-carousel__control--" + (e.reverse ? "previous" : "next"),
                        attrs: {
                            type: "button"
                        }
                    }, "button", e.$attrs, !1), e.$listeners), [n(e.icon, {
                        tag: "component",
                        staticClass: "kib-carousel__control-icon",
                        attrs: {
                            role: "img",
                            focusable: "false",
                            "aria-hidden": "true"
                        }
                    })], 1)])
                };
                T._withStripped = !0;
                const I = $({
                        render: T,
                        staticRenderFns: []
                    }, void 0, L, void 0, !1, void 0, !1, void 0, void 0, void 0),
                    A = r.a.extend({
                        name: "kib-carousel",
                        components: {
                            KibCarouselControl: I
                        },
                        provide: function() {
                            return {
                                state: this.state
                            }
                        },
                        inheritAttrs: !1,
                        props: {
                            labelNext: {
                                type: String,
                                default: "Next"
                            },
                            labelPrevious: {
                                type: String,
                                default: "Previous"
                            }
                        },
                        data: function() {
                            return {
                                uniqueId: k("kib-carousel-"),
                                observer: null,
                                state: {
                                    items: []
                                },
                                scrollState: {
                                    timeout: 0,
                                    active: !1,
                                    behavior: "smooth"
                                }
                            }
                        },
                        computed: {
                            visibleItems: function() {
                                return this.state.items.filter((function(e) {
                                    return e.visible
                                }))
                            },
                            prevItem: function() {
                                var e = this,
                                    t = this.visibleItems[0];
                                if (t && 1 !== t.position) return this.state.items.find((function(n) {
                                    return n.position === t.position - e.visibleItems.length
                                })) || this.state.items[0]
                            },
                            nextItem: function() {
                                var e = this.visibleItems[this.visibleItems.length - 1];
                                if (e) return this.state.items.find((function(t) {
                                    return t.position === e.position + 1
                                }))
                            }
                        },
                        beforeMount: function() {
                            window.matchMedia("(prefers-reduced-motion: reduce)").matches && (this.scrollState.behavior = "auto")
                        },
                        mounted: function() {
                            this.createObserver()
                        },
                        beforeDestroy: function() {
                            this.destroyObserver()
                        },
                        methods: {
                            createObserver: function() {
                                var e = this;
                                this.destroyObserver();
                                var t = this.$refs.content;
                                this.observer = new window.IntersectionObserver(this.onIntersect, {
                                    root: t,
                                    threshold: [.99]
                                });
                                var n = t.querySelectorAll(".kib-carousel-item");
                                Array.from(n).forEach((function(t) {
                                    var n;
                                    null === (n = e.observer) || void 0 === n || n.observe(t)
                                }))
                            },
                            destroyObserver: function() {
                                var e;
                                null === (e = this.observer) || void 0 === e || e.disconnect(), this.observer = null
                            },
                            onIntersect: function(e) {
                                var t = this;
                                e.forEach((function(e) {
                                    var i = e.target.getAttribute("aria-posinset");
                                    if (i) {
                                        var n = parseInt(i, 10),
                                            o = t.state.items.findIndex((function(e) {
                                                return n === e.position
                                            })),
                                            s = c(c({}, t.state.items[o]), {
                                                visible: e.isIntersecting,
                                                element: e.target
                                            });
                                        t.state.items.splice(o, 1, s)
                                    }
                                }))
                            },
                            scrollContent: function(e, t) {
                                void 0 === t && (t = !1);
                                var n = t ? this.prevItem : this.nextItem,
                                    i = this.$refs.content;
                                if (n && !this.scrollState.active) {
                                    var o = window.getComputedStyle(i).getPropertyValue("grid-column-gap"),
                                        s = parseInt(o, 10);
                                    if ("mouse" !== d.ask()) return i.scroll(n.element.offsetLeft - s, 0), void this.$nextTick((function() {
                                        i.focus()
                                    }));
                                    i.scroll({
                                        left: n.element.offsetLeft - s,
                                        behavior: this.scrollState.behavior
                                    }), t ? this.$emit("backward", e) : this.$emit("forward", e)
                                }
                            },
                            onScroll: function() {
                                var e = this;
                                this.scrollState.active = !0, window.clearTimeout(this.scrollState.timeout), this.scrollState.timeout = window.setTimeout((function() {
                                    e.scrollState.active = !1
                                }), 200)
                            }
                        }
                    });
                var R = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "kib-carousel"
                    }, [n("div", {
                        staticClass: "kib-carousel__wrapper"
                    }, [n("ul", e._g(e._b({
                        ref: "content",
                        staticClass: "kib-carousel__content",
                        attrs: {
                            tabindex: "-1",
                            role: "list",
                            "aria-roledescription": "carousel"
                        },
                        on: {
                            scroll: e.onScroll
                        }
                    }, "ul", e.$attrs, !1), e.$listeners), [e._t("default")], 2), e._v(" "), e.nextItem ? n("kib-carousel-control", {
                        attrs: {
                            "aria-label": e.labelNext
                        },
                        on: {
                            click: e.scrollContent
                        }
                    }) : e._e(), e._v(" "), e.prevItem ? n("kib-carousel-control", {
                        attrs: {
                            reverse: "",
                            "aria-label": e.labelPrevious
                        },
                        on: {
                            click: function(t) {
                                return e.scrollContent(t, !0)
                            }
                        }
                    }) : e._e()], 1)])
                };
                R._withStripped = !0;
                const N = $({
                    render: R,
                    staticRenderFns: []
                }, void 0, A, void 0, !1, void 0, !1, void 0, void 0, void 0);
                var j = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
                    M = j.join(","),
                    z = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

                function P(e, t) {
                    t = t || {};
                    var n, i, o, r = [],
                        s = [],
                        a = e.querySelectorAll(M);
                    for (t.includeContainer && z.call(e, M) && (a = Array.prototype.slice.apply(a)).unshift(e), n = 0; n < a.length; n++) F(i = a[n]) && (0 === (o = K(i)) ? r.push(i) : s.push({
                        documentOrder: n,
                        tabIndex: o,
                        node: i
                    }));
                    return s.sort(B).map((function(e) {
                        return e.node
                    })).concat(r)
                }

                function F(e) {
                    return !(!q(e) || function(e) {
                        return function(e) {
                            return D(e) && "radio" === e.type
                        }(e) && ! function(e) {
                            if (!e.name) return !0;
                            var t = function(e) {
                                for (var t = 0; t < e.length; t++)
                                    if (e[t].checked) return e[t]
                            }(e.ownerDocument.querySelectorAll('input[type="radio"][name="' + e.name + '"]'));
                            return !t || t === e
                        }(e)
                    }(e) || K(e) < 0)
                }

                function q(e) {
                    return !(e.disabled || function(e) {
                        return D(e) && "hidden" === e.type
                    }(e) || function(e) {
                        return null === e.offsetParent || "hidden" === getComputedStyle(e).visibility
                    }(e))
                }
                P.isTabbable = function(e) {
                    if (!e) throw new Error("No node provided");
                    return !1 !== z.call(e, M) && F(e)
                }, P.isFocusable = function(e) {
                    if (!e) throw new Error("No node provided");
                    return !1 !== z.call(e, V) && q(e)
                };
                var V = j.concat("iframe").join(",");

                function K(e) {
                    var t = parseInt(e.getAttribute("tabindex"), 10);
                    return isNaN(t) ? function(e) {
                        return "true" === e.contentEditable
                    }(e) ? 0 : e.tabIndex : t
                }

                function B(e, t) {
                    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
                }

                function D(e) {
                    return "INPUT" === e.tagName
                }
                var U = P;
                const X = r.a.extend({
                    name: "kib-carousel-item",
                    inject: ["state"],
                    data: function() {
                        return {
                            position: 0
                        }
                    },
                    computed: {
                        itemState: function() {
                            var e = this;
                            return this.state.items.find((function(t) {
                                return t.position === e.position
                            }))
                        },
                        visible: function() {
                            return !!this.itemState && this.itemState.visible
                        }
                    },
                    watch: {
                        visible: function() {
                            this.handleTabbable()
                        }
                    },
                    mounted: function() {
                        this.position = this.state.items.length + 1;
                        var e = {
                            visible: !1,
                            position: this.position,
                            element: this.$el
                        };
                        this.state.items.push(e), this.handleTabbable()
                    },
                    methods: {
                        handleTabbable: function() {
                            var e = this.$el.querySelectorAll('[tabindex="-1"]');
                            Array.from(e).forEach((function(e) {
                                e.removeAttribute("tabindex")
                            })), this.visible || U(this.$el).forEach((function(e) {
                                e.setAttribute("tabindex", "-1")
                            }))
                        }
                    }
                });
                var J = function() {
                    var e = this,
                        t = e.$createElement;
                    return (e._self._c || t)("li", {
                        staticClass: "kib-carousel-item",
                        attrs: {
                            role: "listitem",
                            "aria-posinset": e.position,
                            "aria-setsize": e.state.items.length,
                            "aria-hidden": !e.visible
                        }
                    }, [e._t("default")], 2)
                };
                J._withStripped = !0;
                const Y = $({
                        render: J,
                        staticRenderFns: []
                    }, void 0, X, void 0, !1, void 0, !1, void 0, void 0, void 0),
                    G = r.a.extend({
                        name: "kib-carousel-view-all",
                        components: {
                            KibCarouselItem: Y,
                            KibArrowRightSvg: O
                        },
                        inheritAttrs: !1
                    });
                var H = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("kib-carousel-item", {
                        staticClass: "kib-carousel-view-all"
                    }, [n("a", e._g(e._b({
                        staticClass: "kib-carousel-view-all__link"
                    }, "a", e.$attrs, !1), e.$listeners), [n("div", {
                        staticClass: "kib-carousel-view-all__icon-wrapper"
                    }, [n("kib-arrow-right-svg", {
                        staticClass: "kib-carousel-view-all__icon",
                        attrs: {
                            focusable: "false",
                            "aria-hidden": "True"
                        }
                    })], 1), e._v(" "), e._t("default", (function() {
                        return [e._v("View All")]
                    }))], 2)])
                };
                H._withStripped = !0;
                const Q = $({
                    render: H,
                    staticRenderFns: []
                }, void 0, G, void 0, !1, void 0, !1, void 0, void 0, void 0);
                N.options.install = function(e) {
                    return e.component(N.options.name, N)
                }, Y.options.install = function(e) {
                    return e.component(Y.options.name, Y)
                }, Q.options.install = function(e) {
                    return e.component(Q.options.name, Q)
                };
                var W = N.options,
                    Z = Y.options;
                Q.options
            }).call(this, n(65))
        },
        668: function(e, t, n) {
            "use strict";
            var o = n(1),
                i = ["default", "small", "large", "huge", "huger", "giant"],
                r = ["default", "micro", "medium", "large", "huge", "giant", "epic"];
            const s = o.a.extend({
                name: "kib-media-icon",
                props: {
                    hideLabel: {
                        type: Boolean,
                        default: !1,
                        required: !1
                    },
                    size: {
                        type: String,
                        default: "default",
                        required: !1,
                        validator: function(e) {
                            return i.indexOf(e) > -1
                        }
                    },
                    labelSize: {
                        type: String,
                        default: "default",
                        required: !1,
                        validator: function(e) {
                            return r.indexOf(e) > -1
                        }
                    },
                    vertical: {
                        type: Boolean,
                        default: !1,
                        required: !1
                    },
                    centered: {
                        type: Boolean,
                        default: !1,
                        required: !1
                    },
                    reverseOrder: {
                        type: Boolean,
                        default: !1,
                        required: !1
                    },
                    wrapOnLabel: {
                        type: Boolean,
                        default: !1,
                        required: !1
                    }
                },
                computed: {
                    isLabelVisible: function() {
                        return !this.hideLabel
                    },
                    rootClasses: function() {
                        var e = [];
                        if (e.push("kib-media-icon"), this.size && i.indexOf(this.size) > -1 && "default" !== this.size && e.push("kib-media-icon--" + this.size), this.hasLabel() && this.isLabelVisible && (this.vertical || this.centered || this.reverseOrder)) {
                            var t = "kib-media-icon--";
                            this.vertical && (t += "vertical"), this.centered && (this.vertical && (t += "-"), t += "center"), this.reverseOrder && ((this.vertical || this.centered) && (t += "-"), t += "reverse"), e.push(t)
                        }
                        return this.wrapOnLabel && e.push("kib-media-icon--wrap-on-label"), e
                    },
                    labelTextSize: function() {
                        if (this.labelSize) return this.labelSize
                    },
                    labelClasses: function() {
                        var e = ["kib-media-icon__label"];
                        return this.isLabelVisible || e.push("kib-media-icon__label--is-hidden"), this.labelTextSize && this.isLabelVisible && "default" !== this.labelTextSize && e.push("kib-media-icon__label--" + this.labelTextSize), e
                    },
                    imageClasses: function() {
                        var e = ["kib-media-icon__image"];
                        return this.wrapOnLabel && e.push("kib-media-icon__image--prevent-flex-shrink"), e
                    }
                },
                methods: {
                    hasLabel: function() {
                        return this.$slots.label && this.$slots.label.length > 0
                    }
                }
            });
            var a = function() {
                var e = this,
                    i = e.$createElement,
                    t = e._self._c || i;
                return t("span", {
                    class: e.rootClasses
                }, [t("span", {
                    class: e.imageClasses,
                    attrs: {
                        role: "presentation"
                    }
                }, [e._t("default")], 2), e._v(" "), e.hasLabel() ? t("span", {
                    class: e.labelClasses
                }, [e._t("label")], 2) : e._e()])
            };
            a._withStripped = !0;
            const l = function(e, i, t, n, s, a, o, r, l, c) {
                "boolean" != typeof o && (l = r, r = o, o = !1);
                const u = "function" == typeof t ? t.options : t;
                let d;
                if (e && e.render && (u.render = e.render, u.staticRenderFns = e.staticRenderFns, u._compiled = !0, s && (u.functional = !0)), n && (u._scopeId = n), a ? (d = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, l(e)), e && e._registeredComponents && e._registeredComponents.add(a)
                    }, u._ssrRegister = d) : i && (d = o ? function(e) {
                        i.call(this, c(e, this.$root.$options.shadowRoot))
                    } : function(e) {
                        i.call(this, r(e))
                    }), d)
                    if (u.functional) {
                        const e = u.render;
                        u.render = function(i, t) {
                            return d.call(t), e(i, t)
                        }
                    } else {
                        const e = u.beforeCreate;
                        u.beforeCreate = e ? [].concat(e, d) : [d]
                    }
                return t
            }({
                render: a,
                staticRenderFns: []
            }, void 0, s, void 0, !1, void 0, !1, void 0, void 0, void 0);
            l.options.install = function(e) {
                return e.component(l.options.name, l)
            };
            var c = l.options;
            t.a = c
        },
        676: function(e, t, n) {},
        677: function(e, t, n) {},
        862: function(e, t, n) {
            "use strict";
            var o = n(1).a.extend({
                    methods: {
                        collapseEnter: function(e) {
                            var t = getComputedStyle(e).width;
                            e.style.width = t, e.style.position = "absolute", e.style.visibility = "hidden", e.style.height = "auto";
                            var n = getComputedStyle(e).height;
                            e.style.width = "", e.style.position = "", e.style.visibility = "", e.style.height = "0", setTimeout((function() {
                                e.style.height = n
                            }))
                        },
                        collapseAfterEnter: function(e) {
                            e.style.height = "auto", "function" == typeof this.$listeners["after-enter"] && this.$listeners["after-enter"]()
                        },
                        collapseLeave: function(e) {
                            var t = getComputedStyle(e).height;
                            e.style.height = t, setTimeout((function() {
                                e.style.height = "0"
                            }))
                        }
                    }
                }),
                r = ["default", "slow", "fast"],
                i = ["fade", "fade-up", "fade-down", "fade-left", "fade-right", "slide-up", "slide-left", "slide-right", "zoom", "collapse"];
            const l = o.extend({
                name: "kib-transition",
                mixins: [o],
                inheritAttrs: !1,
                props: {
                    name: {
                        type: String,
                        default: "fade",
                        validator: function(e) {
                            return i.indexOf(e) > -1
                        }
                    },
                    speed: {
                        type: String,
                        default: "default",
                        validator: function(e) {
                            return r.indexOf(e) > -1
                        }
                    },
                    group: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    transitionComponent: function() {
                        return this.group ? "transition-group" : "transition"
                    },
                    attributes: function() {
                        if (null === this.name) return {};
                        var e = "kib-transition",
                            t = e + "--" + this.name,
                            n = e + "--" + this.speed,
                            i = {
                                name: e,
                                class: this.group ? e + "--is-group" : "",
                                "enter-class": t + " " + e + "--is-entering",
                                "enter-active-class": t + " " + e + "--is-entering-active " + n,
                                "enter-to-class": t + " " + e + "--is-entering-to",
                                "leave-class": t + " " + e + "--is-leaving",
                                "leave-active-class": t + " " + e + "--is-leaving-active " + n,
                                "leave-to-class": t + " " + e + "--is-leaving-to",
                                "move-class": t + " " + e + "--is-moving " + n
                            };
                        return Object.assign({}, this.$attrs, i)
                    },
                    listeners: function() {
                        var e = {};
                        return "collapse" === this.name && (e = {
                            enter: this.collapseEnter,
                            afterEnter: this.collapseAfterEnter,
                            leave: this.collapseLeave
                        }), Object.assign({}, this.$listeners, e)
                    }
                }
            });
            var c = function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)(e.transitionComponent, e._g(e._b({
                    tag: "component"
                }, "component", e.attributes, !1), e.listeners), [e._t("default")], 2)
            };
            c._withStripped = !0;
            const a = function(e, t, n, i, s, o, r, a, l, c) {
                "boolean" != typeof r && (l = a, a = r, r = !1);
                const d = "function" == typeof n ? n.options : n;
                let u;
                if (e && e.render && (d.render = e.render, d.staticRenderFns = e.staticRenderFns, d._compiled = !0, s && (d.functional = !0)), i && (d._scopeId = i), o ? (u = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), t && t.call(this, l(e)), e && e._registeredComponents && e._registeredComponents.add(o)
                    }, d._ssrRegister = u) : t && (u = r ? function(e) {
                        t.call(this, c(e, this.$root.$options.shadowRoot))
                    } : function(e) {
                        t.call(this, a(e))
                    }), u)
                    if (d.functional) {
                        const e = d.render;
                        d.render = function(t, n) {
                            return u.call(n), e(t, n)
                        }
                    } else {
                        const e = d.beforeCreate;
                        d.beforeCreate = e ? [].concat(e, u) : [u]
                    }
                return n
            }({
                render: c,
                staticRenderFns: []
            }, void 0, l, void 0, !1, void 0, !1, void 0, void 0, void 0);
            a.options.install = function(e) {
                return e.component(a.options.name, a)
            };
            var d = a.options;
            t.a = d
        }
    }
]);