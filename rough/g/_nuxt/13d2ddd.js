(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        1076: function(e, t, n) {
            "use strict";
            n.r(t);
            n(12), n(7), n(14), n(16), n(10), n(17), n(43), n(25), n(48), n(44), n(49);
            var r = n(0),
                o = n(4),
                c = (n(6), n(22), n(20), n(24), n(26), n(29)),
                l = n(1),
                h = n(102),
                m = (n(515), n(577), n(415), n(557)),
                d = {
                    components: {},
                    props: {},
                    data: function() {
                        return {
                            showMessage: !1
                        }
                    },
                    methods: {
                        changeMessage: function(e) {
                            this.showMessage = !this.showMessage
                        }
                    }
                },
                v = (n(836), n(9)),
                f = Object(v.a)(d, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "shelterApiBanner Carousel"
                    }, [n("h1", [e._v("Shelter Api Example: Banner Carousel")]), e._v(" "), n("button", {
                        on: {
                            click: function(t) {
                                e.showMessage = !e.showMessage
                            }
                        }
                    }, [e._v("\n    Shelter API Example: Banner Carousel\n  ")]), e._v(" "), e.showMessage ? n("div", [n("pre", [e._v("Cools stuff here")])]) : e._e()])
                }), [], !1, null, "7b655f7e", null).exports,
                _ = {
                    components: {},
                    props: {},
                    data: function() {
                        return {
                            showMessage: !1
                        }
                    },
                    methods: {
                        changeMessage: function(e) {
                            this.showMessage = !this.showMessage
                        }
                    }
                },
                y = (n(837), Object(v.a)(_, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "shelterApiNonSku"
                    }, [n("h1", [e._v("Shelter Api Example: Non Sku")]), e._v(" "), n("button", {
                        on: {
                            click: function(t) {
                                e.showMessage = !e.showMessage
                            }
                        }
                    }, [e._v("\n    Shelter API Example: Non Sku\n  ")]), e._v(" "), e.showMessage ? n("div", [n("pre", [e._v("Cools stuff here")])]) : e._e()])
                }), [], !1, null, "73a089b4", null).exports),
                w = {
                    components: {},
                    props: {},
                    data: function() {
                        return {
                            showMessage: !1
                        }
                    },
                    methods: {
                        changeMessage: function(e) {
                            this.showMessage = !this.showMessage
                        }
                    }
                },
                C = (n(838), Object(v.a)(w, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "shelterApiSku"
                    }, [n("h1", [e._v("Shelter Api Example: Sku")]), e._v(" "), n("button", {
                        on: {
                            click: function(t) {
                                e.showMessage = !e.showMessage
                            }
                        }
                    }, [e._v("\n    Shelter API Example: Sku\n  ")]), e._v(" "), e.showMessage ? n("div", [n("pre", [e._v("Cools stuff here")])]) : e._e()])
                }), [], !1, null, "1167b826", null).exports),
                k = {
                    components: {
                        ContentBlock: n(1058).a
                    },
                    props: {
                        apiData: {
                            type: Object,
                            required: !0
                        }
                    }
                },
                O = Object(v.a)(k, (function() {
                    var e = this,
                        t = e.$createElement;
                    return (e._self._c || t)("content-block", {
                        attrs: {
                            data: e.apiData
                        }
                    })
                }), [], !1, null, "b8a7c330", null).exports,
                S = {
                    components: {},
                    props: {},
                    data: function() {
                        return {
                            showMessage: !1
                        }
                    },
                    methods: {
                        changeMessage: function(e) {
                            this.showMessage = !this.showMessage
                        }
                    }
                },
                j = (n(839), Object(v.a)(S, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "shelterApiAccordion"
                    }, [n("h1", [e._v("Shelter Api Example: Accordion")]), e._v(" "), n("button", {
                        on: {
                            click: function(t) {
                                e.showMessage = !e.showMessage
                            }
                        }
                    }, [e._v("\n    Shelter API Example: Accordion\n  ")]), e._v(" "), e.showMessage ? n("div", [n("pre", [e._v("Cools stuff here")])]) : e._e()])
                }), [], !1, null, "8f7f6a48", null).exports),
                P = {
                    "STANDARD-BANNER": m.a,
                    "STANDARD-CONTENT-BLOCK": O,
                    "STANDARD-NON-SKU": y,
                    "STANDARD-BANNER-CAROUSEL": f,
                    "STANDARD-SKU": C,
                    "`ACCORDION`": j
                },
                E = n(411),
                x = n(70),
                L = n(494),
                A = n.n(L),
                I = (n(255), {
                    components: {
                        KibButtonDefault: E.a,
                        ChewyGivesBack: A.a
                    },
                    data: function() {
                        return {
                            heading: "Helping More People Bring Love Home",
                            content: "Join Chewy in giving back to your local shelter or rescue by donating items from their Wish List or adopting a pet."
                        }
                    },
                    methods: {
                        clickSearch: function() {
                            Object(x.c)({
                                category: "snr cust splash top nav",
                                action: "click",
                                label: "shop their wishlist"
                            })
                        },
                        trackImpression: function() {
                            Object(x.c)({
                                category: "snr cust splash top nav",
                                action: "impression",
                                label: "find a rescue"
                            })
                        }
                    }
                }),
                M = (n(840), Object(v.a)(I, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("section", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: e.trackImpression,
                            expression: "trackImpression"
                        }],
                        staticClass: "landing-page-hero"
                    }, [n("div", {
                        staticClass: "landing-content-container"
                    }, [n("div", {
                        staticClass: "landing-page-hero__content",
                        attrs: {
                            title: "Young girl with an old, small dog"
                        }
                    }, [n("chewy-gives-back", {
                        staticClass: "landing-page-hero__logo",
                        attrs: {
                            role: "presentation",
                            focusable: "false"
                        }
                    }), e._v(" "), n("h1", {
                        staticClass: "landing-page-hero__heading"
                    }, [e._v("\n        " + e._s(e.heading) + "\n      ")]), e._v(" "), n("p", {
                        staticClass: "landing-page-hero__description"
                    }, [e._v("\n        " + e._s(e.content) + "\n      ")]), e._v(" "), n("kib-button-default", {
                        attrs: {
                            href: "/g/animal-shelters-and-rescues"
                        }
                    }, [e._v("\n        Find a Rescue\n      ")])], 1)])])
                }), [], !1, null, null, null).exports),
                R = n(586),
                D = n.n(R);

            function N(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }
            var T = {
                    components: {},
                    data: function() {
                        return {
                            BubbleMap: D.a
                        }
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? N(Object(source), !0).forEach((function(t) {
                                Object(o.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : N(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, (0, Object(c.a)("page").mapGetters)(["staticAssetsUrl", "isStaticAssetsLoadingEnabled"]))
                },
                $ = (n(841), Object(v.a)(T, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "map"
                    }, [n("img", {
                        attrs: {
                            src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/us-map.png" : e.BubbleMap,
                            width: "665",
                            alt: "Map graphic of continental United States with Chewy Gives Back metrics."
                        }
                    }), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4)])
                }), [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "meals-donated bubble txt-salmon"
                    }, [n("span", {
                        staticClass: "title"
                    }, [e._v("130M+")]), e._v(" "), n("span", {
                        staticClass: "text"
                    }, [e._v("\n      Meals Donated to "), n("br"), e._v("\n      Shelter Animals\n    ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "pounds-donated bubble txt-salmon"
                    }, [n("span", {
                        staticClass: "title"
                    }, [e._v("86M+")]), e._v(" "), n("span", {
                        staticClass: "text"
                    }, [e._v("\n      Pounds of Food "), n("br"), e._v("\n      Donated\n    ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "states-served bubble txt-salmon"
                    }, [n("span", {
                        staticClass: "title"
                    }, [e._v("50")]), e._v(" "), n("span", {
                        staticClass: "text"
                    }, [e._v("\n      States "), n("br"), e._v("\n      Served\n    ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "partners-served bubble txt-salmon"
                    }, [n("span", {
                        staticClass: "title"
                    }, [e._v("11,000+")]), e._v(" "), n("span", {
                        staticClass: "text"
                    }, [e._v("\n      Partners "), n("br"), e._v("\n      Served\n    ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "supplies-donated bubble txt-salmon"
                    }, [n("span", {
                        staticClass: "title"
                    }, [e._v("$183M+")]), e._v(" "), n("span", {
                        staticClass: "text"
                    }, [e._v("\n      of Pet Supplies "), n("br"), e._v("\n      Donated\n    ")])])
                }], !1, null, "785a2933", null).exports),
                B = n(842),
                U = n.n(B),
                G = n(843),
                z = n.n(G),
                H = n(844),
                W = n.n(H),
                K = {
                    components: {
                        BubbleMap: $
                    },
                    data: function() {
                        return {
                            metrics: ["More than 71 million meals donated to shelter animals", "More than 40 million pounds of food donated", "50 states served", "More than 6,500 partners served", "More than 62 million US dollars of pet supplies donated"],
                            slides: [{
                                src: U.a,
                                alt: "Lucky Lab logo",
                                text: "Lucky Lab Rescue and Adoption can't thank Chewy enough for all its support. By donating back to rescues it helps save more dogs and cats across America. Thank you Chewy for all the love!",
                                author: "Katherine Martin, Founder and President Lucky Lab Rescue and Adoption",
                                trackingText: "lucky lab"
                            }, {
                                src: z.a,
                                alt: "Pets for Patriots logo",
                                text: "We feel good letting our supporters know about Chewy's Shelter and Rescue Network because what they offer is spot on with our mission: to help make pet parenthood easier, more affordable, and fun!",
                                author: "Beth Zimmerman, Founder + Director Pets for Patriots",
                                trackingText: "pets for patriots"
                            }, {
                                src: W.a,
                                alt: "Rescue City logo",
                                text: "When I founded Rescue City, I established a relationship between the organization and Chewy. The relationship has been fruitful to say the least. It is a pleasure to work with a company that truly holds its customers dear and treats every single one as royalty.",
                                author: "Stella Plit, CEO Rescue City",
                                trackingText: "rescue city"
                            }]
                        }
                    },
                    methods: {}
                },
                V = (n(845), Object(v.a)(K, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "impact-by-numbers"
                    }, [n("h3", {
                        staticClass: "impact-by-numbers__heading sfw-shelters-home__heading"
                    }, [e._v("\n    You Give Hope, We Give Back\n  ")]), e._v(" "), e._m(0), e._v(" "), n("div", {
                        staticClass: "impact-by-numbers__content"
                    }, [n("div", {
                        staticClass: "impact-by-numbers__content-column"
                    }, [n("bubble-map"), e._v(" "), n("div", {
                        staticClass: "kib-visually-hidden"
                    }, [n("ul", e._l(e.metrics, (function(t, i) {
                        return n("li", {
                            key: i
                        }, [e._v("\n            " + e._s(t) + "\n          ")])
                    })), 0)])], 1)])])
                }), [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("p", {
                        staticClass: "impact-by-numbers__lead"
                    }, [e._v("\n    Since 2012, we've donated more than\n    "), n("strong", {
                        staticClass: "impact-by-numbers__lead-highlight"
                    }, [e._v("\n      $183M in products\n    ")]), e._v("\n    to ensure that shelter and rescue animals get the quality care they\n    deserve.\n  ")])
                }], !1, null, "08cf9727", null).exports),
                F = (n(53), n(668)),
                Y = n(101),
                J = (n(434), {
                    name: "SfwSheltersHomeCarousel",
                    components: {
                        KibMediaIcon: F.a,
                        KibArrowLeftSvg: Y.a,
                        KibArrowRightSvg: Y.b
                    },
                    props: {
                        slides: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    data: function() {
                        return {
                            activeIndex: 0
                        }
                    },
                    computed: {
                        active: function() {
                            return this.slides[this.activeIndex]
                        }
                    },
                    methods: {
                        updateIndex: function(e) {
                            var t = this.activeIndex + e;
                            this.activeIndex = t >= 0 ? t % this.slides.length : this.slides.length - 1, this.$emit(1 === e ? "scroll-right" : "scroll-left")
                        }
                    }
                }),
                Z = (n(846), Object(v.a)(J, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.active ? n("div", {
                        staticClass: "landing-page-carousel"
                    }, [n("div", {
                        staticClass: "landing-page-carousel__elements"
                    }, [n("button", {
                        staticClass: "landing-page-carousel__control",
                        on: {
                            click: function(t) {
                                return e.updateIndex(-1)
                            }
                        }
                    }, [n("kib-media-icon", {
                        attrs: {
                            size: "huge"
                        }
                    }, [n("KibArrowLeftSvg")], 1)], 1), e._v(" "), n("img", {
                        staticClass: "landing-page-carousel__image",
                        attrs: {
                            src: e.active.src,
                            alt: e.active.alt
                        }
                    }), e._v(" "), n("button", {
                        staticClass: "landing-page-carousel__control",
                        on: {
                            click: function(t) {
                                return e.updateIndex(1)
                            }
                        }
                    }, [n("kib-media-icon", {
                        attrs: {
                            size: "huge"
                        }
                    }, [n("KibArrowRightSvg")], 1)], 1)]), e._v(" "), n("div", {
                        staticClass: "landing-page-carousel__dots"
                    }, e._l(e.slides.length, (function(t) {
                        return n("div", {
                            key: t,
                            staticClass: "landing-page-carousel__dot",
                            class: {
                                active: t - 1 === e.activeIndex
                            }
                        })
                    })), 0), e._v(" "), e.active.text ? n("div", {
                        staticClass: "landing-page-carousel__text"
                    }, [n("blockquote", [n("p", [e._v(e._s(e.active.text))])]), e._v(" "), n("footer", {
                        staticClass: "landing-page-carousel__author"
                    }, [e._v("\n      " + e._s(e.active.author) + "\n    ")])]) : e._e(), e._v(" "), e.active.name ? n("a", {
                        staticClass: "landing-page-carousel__caption",
                        attrs: {
                            href: "/g/" + e.active.url
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("item-click", e.active)
                            }
                        }
                    }, [e._v("\n    " + e._s(e.active.name) + "\n  ")]) : e._e()]) : e._e()
                }), [], !1, null, null, null).exports),
                Q = n(441),
                X = n.n(Q),
                ee = {
                    components: {
                        LandingPageCarousel: Z
                    },
                    fetch: function() {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, e.$api.getSearchResultsByIP();
                                    case 3:
                                        n = t.sent, e.shelters = n.shelterList, t.next = 9;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        })))()
                    },
                    data: function() {
                        return {
                            shelters: []
                        }
                    },
                    computed: {
                        sheltersToShow: function() {
                            return this.shelters.length ? this.shelters.slice(0, 4).map((function(e) {
                                return {
                                    src: e.logoUrl || X.a,
                                    alt: "Logo for ".concat(e.orgName),
                                    name: e.orgName,
                                    url: e.businessPageUrl,
                                    id: e.kyriosOrgId
                                }
                            })) : []
                        }
                    },
                    methods: {
                        trackImpression: function() {
                            Object(x.c)({
                                category: "eec",
                                action: "impression",
                                label: "snr near you",
                                ecommerce: {
                                    promoView: {
                                        promotions: this.sheltersToShow.map((function(e) {
                                            return {
                                                name: "snr cust splash near you",
                                                creative: e.id
                                            }
                                        }))
                                    }
                                }
                            })
                        },
                        trackClick: function(e) {
                            Object(x.c)({
                                category: "snr cust splash near you",
                                action: "click",
                                label: e.id,
                                ecommerce: {
                                    promoClick: {
                                        promotions: [{
                                            name: "snr cust splash near you",
                                            creative: e.id
                                        }]
                                    }
                                }
                            })
                        }
                    }
                },
                te = (n(847), Object(v.a)(ee, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("section", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: e.trackImpression,
                            expression: "trackImpression"
                        }],
                        staticClass: "sfw-shelters-home-nearby"
                    }, [e.shelters.length ? n("div", {
                        staticClass: "sr-content-container"
                    }, [n("h2", {
                        staticClass: "sfw-shelters-home-nearby__heading"
                    }, [e._v("\n      Shelters and Rescues Near You\n    ")]), e._v(" "), n("div", {
                        staticClass: "sfw-shelters-home-nearby__carousel"
                    }, [n("landing-page-carousel", {
                        attrs: {
                            slides: e.sheltersToShow
                        },
                        on: {
                            "item-click": e.trackClick
                        }
                    })], 1), e._v(" "), n("ul", {
                        staticClass: "sfw-shelters-home-nearby__list"
                    }, e._l(e.sheltersToShow, (function(t, i) {
                        return n("li", {
                            key: i,
                            staticClass: "sfw-shelters-home-nearby__item"
                        }, [n("a", {
                            staticClass: "sfw-shelters-home-nearby__location",
                            attrs: {
                                href: "/g/" + t.url
                            },
                            on: {
                                click: function(n) {
                                    return e.trackClick(t)
                                }
                            }
                        }, [n("img", {
                            staticClass: "sfw-shelters-home-nearby__image",
                            attrs: {
                                src: t.src,
                                alt: t.alt
                            }
                        }), e._v(" "), n("figcaption", [n("span", {
                            staticClass: "sfw-shelters-home-nearby__caption"
                        }, [e._v("\n              " + e._s(t.name) + "\n            ")])])])])
                    })), 0)]) : e._e()])
                }), [], !1, null, null, null).exports),
                se = n(848),
                ne = n.n(se),
                ae = n(849),
                re = n.n(ae),
                ie = n(850),
                oe = n.n(ie);

            function ce(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }
            var le = {
                    data: function() {
                        return {
                            items: [{
                                url: "https://be.chewy.com/shelter-dog-field-trip-doggy-day-out-volunteer-rescue/",
                                image: "SR-shelter-dog-field-trip.png",
                                summary: "Need a little puppy love? You don’t have to adopt or long-term foster a dog to get those sweet, furry snuggles. Here’s how you can plan a dog’s day out with a shelter pup.",
                                name: "dog field trip"
                            }, {
                                url: "https://be.chewy.com/villalobos-rescue-center-scholar-pet-pack-video-interview/",
                                image: "SR-shelter-spotlight-villalobos.jpg",
                                summary: "Find out how a New Orleans teacher, a group of educators in Illinois, and Villalobos Rescue Center helped a homeless pup named—what else?—Scholar..",
                                name: "shelter pet story"
                            }, {
                                url: "https://be.chewy.com/heres-how-you-can-help-stray-and-feral-cats-in-your-community/",
                                image: "SR-stray-feral-cats.jpg",
                                summary: "Learn the important distinction between stray cats and feral cats, and how you can make a difference in the lives of community cats near you.",
                                name: "stray cat shelters"
                            }],
                            DogFieldTrip: ne.a,
                            Villalobos: re.a,
                            FeralCats: oe.a
                        }
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? ce(Object(source), !0).forEach((function(t) {
                                Object(o.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ce(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, (0, Object(c.a)("page").mapGetters)(["staticAssetsUrl", "isStaticAssetsLoadingEnabled"])),
                    methods: {
                        trackImpression: function() {
                            Object(x.c)({
                                category: "eec",
                                action: "impression",
                                label: "whats happening",
                                ecommerce: {
                                    promoView: {
                                        promotions: this.items.map((function(e) {
                                            return {
                                                name: "snr cust splash whats happening",
                                                creative: e.name
                                            }
                                        }))
                                    }
                                }
                            })
                        },
                        trackClick: function(e) {
                            Object(x.c)({
                                category: "eec",
                                action: "click",
                                label: "read more",
                                ecommerce: {
                                    promoClick: {
                                        promotions: [{
                                            name: "snr cust splash whats happening",
                                            creative: e.name
                                        }]
                                    }
                                }
                            })
                        }
                    }
                },
                ue = (n(851), Object(v.a)(le, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("section", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: e.trackImpression,
                            expression: "trackImpression"
                        }],
                        staticClass: "sfw-shelters-home-news"
                    }, [n("h3", {
                        staticClass: "sfw-shelters-home-news__heading sfw-shelters-home__heading"
                    }, [e._v("\n    Here's What's Happening at Chewy\n  ")]), e._v(" "), n("div", {
                        staticClass: "sfw-shelters-home-news__container sr-content-container"
                    }, [n("div", {
                        staticClass: "sfw-shelters-home-news__wrapper"
                    }, [n("div", {
                        staticClass: "sfw-shelters-home-news__layout"
                    }, e._l(e.items, (function(t, i) {
                        return n("div", {
                            key: i,
                            staticClass: "sfw-shelters-home-news__column"
                        }, [n("figure", {
                            staticClass: "sfw-shelters-home-news__figure"
                        }, ["dog field trip" === t.name ? n("img", {
                            staticClass: "sfw-shelters-home-news__image",
                            attrs: {
                                src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/SR-shelter-dog-field-trip.png" : e.DogFieldTrip,
                                alt: t.name
                            }
                        }) : e._e(), e._v(" "), "shelter pet story" === t.name ? n("img", {
                            staticClass: "sfw-shelters-home-news__image",
                            attrs: {
                                src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/SR-shelter-spotlight-villalobos.jpg" : e.Villalobos,
                                alt: t.name
                            }
                        }) : e._e(), e._v(" "), "stray cat shelters" === t.name ? n("img", {
                            staticClass: "sfw-shelters-home-news__image",
                            attrs: {
                                src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/SR-stray-feral-cats.jpg" : e.FeralCats,
                                alt: t.name
                            }
                        }) : e._e()]), e._v(" "), n("p", {
                            staticClass: "sfw-shelters-home-news__summary"
                        }, [e._v("\n            " + e._s(t.summary) + "\n          ")]), e._v(" "), n("a", {
                            staticClass: "sfw-shelters-home-news__more",
                            attrs: {
                                href: t.url,
                                target: "_blank",
                                rel: "noopener"
                            },
                            on: {
                                click: function(n) {
                                    return e.trackClick(t)
                                }
                            }
                        }, [e._v("\n            Read More\n          ")])])
                    })), 0)])])])
                }), [], !1, null, null, null).exports);

            function pe(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }
            var he = Object(c.a)("page").mapGetters,
                me = {
                    components: {
                        KibButtonDefault: E.a
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? pe(Object(source), !0).forEach((function(t) {
                                Object(o.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : pe(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, he(["isNma"])),
                    methods: {
                        track: function(e) {
                            Object(x.c)({
                                category: "snr cust splash rushelter",
                                action: e,
                                label: "learn more"
                            })
                        }
                    }
                },
                de = (n(852), Object(v.a)(me, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("section", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: function() {
                                return e.track("impression")
                            },
                            expression: "() => track('impression')"
                        }],
                        staticClass: "join-our-network"
                    }, [n("div", {
                        staticClass: "sr-content-container",
                        attrs: {
                            title: "Smiling woman volunteer with kitten"
                        }
                    }, [n("div", {
                        staticClass: "join-our-network__wrapper"
                    }, [n("div", {
                        staticClass: "join-our-network__content"
                    }, [n("h2", {
                        staticClass: "join-our-network__heading"
                    }, [e._v("\n          Are You Part of a Shelter or Rescue?\n        ")]), e._v(" "), n("p", {
                        staticClass: "join-our-network__lead"
                    }, [e._v("\n          Join our network and together we can do more for animals in need.\n        ")]), e._v(" "), e.isNma ? n("p", [e._v("\n          Visit "), n("a", {
                        attrs: {
                            href: "https://www.chewy.com"
                        }
                    }, [e._v("Chewy.com")]), e._v(" to learn more.\n        ")]) : e._e(), e._v(" "), e.isNma ? e._e() : n("kib-button-default", {
                        attrs: {
                            href: "/g/shelter-partners"
                        }
                    }, [e._v("\n          Learn More\n        ")])], 1)])])])
                }), [], !1, null, null, null).exports),
                ge = {
                    components: {},
                    data: function() {
                        return {
                            heading: "It's Never Been Easier To Give Back",
                            content: "At Chewy, we share your passion for pets. You can help us make an even greater impact by donating items to your local shelter or rescue through their Wish List. Ready to bring love home? Search for your new family member today."
                        }
                    }
                },
                ve = (n(853), Object(v.a)(ge, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "impact-by-numbers"
                    }, [n("h3", {
                        staticClass: "impact-by-numbers__heading sfw-shelters-home__heading"
                    }, [e._v("\n    " + e._s(e.heading) + "\n  ")]), e._v(" "), n("p", {
                        staticClass: "impact-by-numbers__lead"
                    }, [e._v("\n    " + e._s(e.content) + "\n  ")])])
                }), [], !1, null, "74f2d528", null).exports),
                fe = n(854),
                be = n.n(fe),
                _e = n(855),
                ye = n.n(_e);

            function we(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }
            var Ce = Object(c.a)("page").mapGetters,
                ke = {
                    components: {
                        KibButtonDefault: E.a
                    },
                    data: function() {
                        return {
                            SearchWishlistLandingpageAsset: be.a,
                            SearchPetsLandingpageAsset: ye.a
                        }
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? we(Object(source), !0).forEach((function(t) {
                                Object(o.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : we(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, Ce(["staticAssetsUrl", "isStaticAssetsLoadingEnabled"])),
                    methods: {
                        generateWishListUrl: function() {
                            return "/animal-shelters-and-rescues"
                        },
                        generateAdoptablePetstUrl: function() {
                            return "/search-adoptable-pets"
                        },
                        trackImpression: function(label) {
                            return function() {
                                return Object(x.c)({
                                    category: "snr cust splash top nav",
                                    action: "impression",
                                    label: label
                                })
                            }
                        },
                        trackClick: function(label) {
                            Object(x.c)({
                                category: "snr cust splash top nav",
                                action: "click",
                                label: label
                            })
                        }
                    }
                },
                Oe = (n(856), Object(v.a)(ke, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "wish-list-search-pets"
                    }, [n("div", {
                        staticClass: "wish-list-search-pets__links"
                    }, [n("div", {
                        staticClass: "wish-list-search-pets__content"
                    }, [n("div", {
                        staticClass: "wish-list-search-pets__subcontent"
                    }, [n("div", {
                        staticClass: "wish-list-search-pets__mobile-blobs"
                    }, [n("img", {
                        staticClass: "partners-saying__blob",
                        attrs: {
                            src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/Impact-Landingpage-searchshelters.png" : e.SearchWishlistLandingpageAsset,
                            alt: "",
                            width: "100"
                        }
                    })]), e._v(" "), n("h5", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: e.trackImpression("shop their wishlist"),
                            expression: "trackImpression('shop their wishlist')"
                        }],
                        staticClass: "wish-list-search-pets__heading"
                    }, [e._v("\n          Give Essentials to Rescues in Need\n        ")]), e._v(" "), n("kib-button-default", {
                        attrs: {
                            href: "/g/animal-shelters-and-rescues"
                        },
                        on: {
                            click: function(t) {
                                return e.trackClick("shop their wishlist")
                            }
                        }
                    }, [e._v("\n          Shop Wish List\n        ")])], 1), e._v(" "), n("div", {
                        staticClass: "wish-list-search-pets__blobs"
                    }, [n("img", {
                        staticClass: "partners-saying__blob",
                        attrs: {
                            src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/Impact-Landingpage-searchshelters.png" : e.SearchWishlistLandingpageAsset,
                            alt: "",
                            width: "100"
                        }
                    })])])]), e._v(" "), n("div", {
                        staticClass: "wish-list-search-pets__whitespace-divider"
                    }), e._v(" "), n("div", {
                        staticClass: "wish-list-search-pets__links"
                    }, [n("div", {
                        staticClass: "wish-list-search-pets__content"
                    }, [n("div", {
                        staticClass: "wish-list-search-pets__subcontent"
                    }, [n("div", {
                        staticClass: "wish-list-search-pets__mobile-blobs"
                    }, [n("img", {
                        staticClass: "partners-saying__blob",
                        attrs: {
                            src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/Impact-Landingpage-searchshelters.png" : e.SearchPetsLandingpageAsset,
                            alt: "",
                            width: "100"
                        }
                    })]), e._v(" "), n("h5", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: e.trackImpression("adoptable pets in need"),
                            expression: "trackImpression('adoptable pets in need')"
                        }],
                        staticClass: "wish-list-search-pets__heading"
                    }, [e._v("\n          Adoptable Pets in"), n("br"), e._v("\n          Need of Loving Homes\n        ")]), e._v(" "), n("kib-button-default", {
                        attrs: {
                            href: "/g/search-adoptable-pets"
                        },
                        on: {
                            click: function(t) {
                                return e.trackClick("adoptable pets in need")
                            }
                        }
                    }, [e._v("\n          Find a Pet\n        ")])], 1), e._v(" "), n("div", {
                        staticClass: "wish-list-search-pets__blobs"
                    }, [n("img", {
                        staticClass: "partners-saying__blob",
                        attrs: {
                            src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/Impact-Landingpage-searchshelters.png" : e.SearchPetsLandingpageAsset,
                            alt: "",
                            width: "100"
                        }
                    })])])])])
                }), [], !1, null, "49b52eec", null).exports),
                Se = n(857),
                je = n.n(Se),
                Pe = n(858),
                Ee = n.n(Pe),
                xe = n(859),
                Le = n.n(xe);

            function Ae(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }
            var Ie = {
                    components: {},
                    data: function() {
                        return {
                            LuckyLab: je.a,
                            Patriots: Ee.a,
                            RescueCity: Le.a
                        }
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? Ae(Object(source), !0).forEach((function(t) {
                                Object(o.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Ae(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, (0, Object(c.a)("page").mapGetters)(["staticAssetsUrl", "isStaticAssetsLoadingEnabled"])),
                    methods: {
                        trackImpression: function(label) {
                            return function() {
                                return Object(x.c)({
                                    category: "snr cust splash partner testimonials",
                                    action: "impression",
                                    label: label
                                })
                            }
                        }
                    }
                },
                Me = (n(860), Object(v.a)(Ie, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "partners-saying"
                    }, [n("h2", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: e.trackImpression("partner testimonials"),
                            expression: "trackImpression('partner testimonials')"
                        }],
                        staticClass: "heading"
                    }, [e._v("\n    What Our Partners Are Saying\n  ")]), e._v(" "), n("div", [n("div", {
                        staticClass: "partners-saying__review-section"
                    }, [n("img", {
                        attrs: {
                            src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/Impact-LandingPage-LuckLab.png" : e.LuckyLab,
                            alt: "Lucky Lab logo",
                            width: "280"
                        }
                    }), e._v(" "), e._m(0)]), e._v(" "), n("div", {
                        staticClass: "partners-saying__review-section partners-saying__review-section--reverse"
                    }, [n("img", {
                        attrs: {
                            src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/Impact-LandingPage-Patriots.png" : e.Patriots,
                            alt: "Patriots logo",
                            width: "280"
                        }
                    }), e._v(" "), e._m(1)]), e._v(" "), n("div", {
                        staticClass: "partners-saying__review-section"
                    }, [n("img", {
                        attrs: {
                            src: e.isStaticAssetsLoadingEnabled ? e.staticAssetsUrl + "img/consumer-landing-page/Impact-LandingPage-RescueCity.png" : e.RescueCity,
                            alt: "Rescue City logo",
                            width: "280"
                        }
                    }), e._v(" "), e._m(2)])])])
                }), [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("p", [e._v("\n          “Lucky Lab Rescue & Adoption can't thank Chewy enough for its\n          support. By donating back to rescues, it helps save more dogs and\n          cats across America. Thank you, Chewy, for all the love!”\n        ")]), e._v(" "), n("p", {
                        staticClass: "partners-saying__author"
                    }, [e._v("\n          Katherine Martin, Founder and President Lucky Lab Rescue & Adoption\n        ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("p", [e._v("\n          “We feel good letting our supporters know about Chewy's Shelter and\n          Rescue Network because what they offer is spot on with our mission:\n          To help make pet parenthood easier, more affordable and fun!”\n        ")]), e._v(" "), n("p", {
                        staticClass: "partners-saying__author"
                    }, [e._v("\n          Beth Zimmerman, Founder + Director Pets for Patriots\n        ")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("p", [e._v("\n          “When I founded Rescue City, I established a relationship between\n          the organization and Chewy. The relationship has been fruitful to\n          say the least. It is a pleasure to work with a company that truly\n          holds its customers dear and treats every single one as royalty.”\n        ")]), e._v(" "), n("p", {
                        staticClass: "partners-saying__author"
                    }, [e._v("Stella Plit, CEO Rescue City")])])
                }], !1, null, "67167aa2", null).exports),
                Re = n(558),
                De = (n(87), n(1065)),
                Ne = n(1056),
                Te = (n(861), n(676), n(677), {
                    components: {
                        KibCarousel: De.a,
                        KibCarouselItem: De.b,
                        KibProductImage: Ne.b,
                        KibProductCard: Ne.a
                    },
                    props: {
                        title: {
                            type: String,
                            default: "Shelters and Rescues Near You"
                        }
                    },
                    data: function() {
                        return {
                            starlight: {
                                items: []
                            },
                            starlightDataLoadState: "not loading"
                        }
                    },
                    computed: {
                        dataReady: function() {
                            return "loaded" === this.starlightDataLoadState
                        },
                        slTitleNormalized: function() {
                            var e;
                            return null === (e = this.title) || void 0 === e ? void 0 : e.trim()
                        }
                    },
                    mounted: function() {
                        this.getStarlightShelters()
                    },
                    methods: {
                        trackImpression: function() {
                            Object(x.c)({
                                category: "eec",
                                action: "impression",
                                label: "snr near you",
                                ecommerce: {
                                    promoView: {
                                        promotions: {
                                            name: "snr cust splash near you",
                                            creative: "starlight"
                                        }
                                    }
                                }
                            })
                        },
                        trackClick: function(e) {
                            Object(x.c)({
                                category: "snr cust splash near you",
                                action: "click",
                                label: e.kyriosOrgId,
                                ecommerce: {
                                    promoClick: {
                                        promotions: [{
                                            name: "snr cust splash near you",
                                            creative: e.kyriosOrgId
                                        }]
                                    }
                                }
                            })
                        },
                        buildUrl: function(e) {
                            return "/g/".concat(e)
                        },
                        getStarlightShelters: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                var n;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.starlightDataLoadState = "loading", t.next = 4, e.$api.getStarlightShelters();
                                        case 4:
                                            n = t.sent, e.starlight.items = n.shelterList || [], e.starlightDataLoadState = "loaded", t.next = 12;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t.catch(0), console.log("ERROR: getStarlightShelters: \n".concat(JSON.stringify(t.t0)));
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 9]
                                ])
                            })))()
                        }
                    }
                }),
                $e = (n(863), Object(v.a)(Te, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.dataReady ? n("div", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: e.trackImpression,
                            expression: "trackImpression"
                        }],
                        staticClass: "starlight"
                    }, [n("div", {
                        staticClass: "starlight__title"
                    }, [e._v(e._s(e.slTitleNormalized))]), e._v(" "), n("kib-carousel", e._l(e.starlight.items, (function(t) {
                        return n("kib-carousel-item", {
                            key: t.id
                        }, [n("a", {
                            staticClass: "startlight__shelter_box",
                            attrs: {
                                href: e.buildUrl(t.businessPageUrlV2)
                            },
                            on: {
                                click: function(n) {
                                    return e.trackClick(t)
                                }
                            }
                        }, [n("kib-product-card", {
                            attrs: {
                                variant: "elevated"
                            }
                        }, [n("template", {
                            slot: "canvas"
                        }, [n("kib-product-image", {
                            attrs: {
                                href: e.buildUrl(t.businessPageUrlV2)
                            }
                        }, [n("img", {
                            staticClass: "starlight__shelter_logo",
                            attrs: {
                                src: t.orgLogoUrl,
                                alt: t.orgName
                            }
                        })])], 1)], 2), e._v(" "), n("div", {
                            staticClass: "starlight__shelter_title"
                        }, [e._v("\n          " + e._s(t.orgName) + "\n        ")])], 1)])
                    })), 1)], 1) : e._e()
                }), [], !1, null, null, null).exports);

            function Be(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return Ue(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ue(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        l = !0, o = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function Ue(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }

            function Ge(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function ze(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Ge(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Ge(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var He = Object(c.a)("shelter-search").mapGetters,
                We = Object(c.a)("page").mapGetters,
                Ke = {
                    components: {
                        LandingPageHero: M,
                        ImpactByNumbers: V,
                        SheltersNearYou: te,
                        HappeningAtChewy: ue,
                        JoinOurNetwork: de,
                        Chirpify: h.a,
                        TopCitiesList: Re.a,
                        NeverBeenEasierToGiveBack: ve,
                        PartnersSaying: Me,
                        WishListSearchPets: Oe,
                        Starlight: $e
                    },
                    data: function() {
                        return {
                            showConsumer: !1,
                            spaHeaderPropsResponse: {
                                js: "",
                                css: "",
                                html: ""
                            },
                            spaFooterPropsResponse: {
                                js: "",
                                css: "",
                                html: ""
                            }
                        }
                    },
                    computed: ze(ze(ze({}, He(["topCities", "cmsGivebackContent"])), We(["isGivingBackTuesdayEnabled", "isShelterCmsEnabled", "isShelterCmsGiveBackLandingEnabled", "isShelterNavSpaEnabled", "isShelterStarlightEnabled", "isShelterStarlightGivebackEnabled"])), {}, {
                        isCmsEnabled: function() {
                            return this.isShelterCmsEnabled && this.isShelterCmsGiveBackLandingEnabled
                        },
                        isStarlightEnabled: function() {
                            return this.isShelterStarlightEnabled && this.isShelterStarlightGivebackEnabled
                        }
                    }),
                    mounted: function() {
                        window.scrollTo(0, 0), document && document.documentElement && document.documentElement.classList.add("smooth-scroll");
                        this.isCmsEnabled && this.initDynamicCmsComponents(["apiCmsComponent_000", "apiCmsComponent_001", "apiCmsComponent_002", "apiCmsComponent_003", "apiCmsComponent_004", "apiCmsComponent_005", "apiCmsComponent_006", "apiCmsComponent_007", "apiCmsComponent_008", "apiCmsComponent_009", "apiCmsComponent_010", "apiCmsComponent_011", "apiCmsComponent_012", "apiCmsComponent_013", "apiCmsComponent_014", "apiCmsComponent_015", "apiCmsComponent_016", "apiCmsComponent_017", "apiCmsComponent_018", "apiCmsComponent_019"], this.cmsGivebackContent)
                    },
                    destroyed: function() {
                        document && document.documentElement && document.documentElement.classList.remove("smooth-scroll")
                    },
                    methods: {
                        trackTopCitiesImpression: function() {
                            Object(x.c)({
                                category: "snr cust splash top snr cities",
                                action: "impression",
                                label: "snr cities"
                            })
                        },
                        trackTopCitiesClick: function(e) {
                            Object(x.c)({
                                category: "snr cust splash top snr cities",
                                action: "click",
                                label: "".concat(e.city, ", ").concat(e.stateCode)
                            })
                        },
                        initDynamicCmsComponents: function(e, t) {
                            try {
                                for (var n = function(e, t) {
                                        if ((null == e ? void 0 : e.length) > 0 && null != t && t.length) return (null == e ? void 0 : e.length) > (null == t ? void 0 : t.length) ? null == t ? void 0 : t.length : null == e ? void 0 : e.length
                                    }(e, t.zones), i = 0; i < n; i++) {
                                    var r, o = e[i],
                                        c = Be(t.zones[i].components);
                                    try {
                                        for (c.s(); !(r = c.n()).done;) {
                                            var l = r.value,
                                                h = P[l.type];
                                            this.mountCmsComponent(h, o, l)
                                        }
                                    } catch (e) {
                                        c.e(e)
                                    } finally {
                                        c.f()
                                    }
                                }
                            } catch (e) {
                                console.log("ERROR: Invalid CMS Widget Hydration")
                            }
                        },
                        mountCmsComponent: function(e, t, n) {
                            try {
                                var r = new(l.a.extend(e))({
                                    propsData: {
                                        apiData: n
                                    }
                                });
                                r.$mount(), this.$refs[t].appendChild(r.$el)
                            } catch (e) {
                                console.log("ERROR: can not find base tag for ".concat(t, " element, ").concat(e.message))
                            }
                        }
                    },
                    head: function() {
                        return {
                            title: "Chewy Gives Back",
                            link: [{
                                rel: "preload",
                                href: "/app/headerfooterspa/header.css",
                                as: "style"
                            }, {
                                rel: "preload",
                                href: "/app/headerfooterspa/header.js",
                                as: "script"
                            }],
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "At Chewy, we share your passion for pets. You can help us make an even greater impact by donating items to your local shelter or rescue through their Wish List. Ready to bring love home? Search for your new family member today."
                            }, {
                                hid: "og:description",
                                name: "og:description",
                                content: "At Chewy, we share your passion for pets. You can help us make an even greater impact by donating items to your local shelter or rescue through their Wish List. Ready to bring love home? Search for your new family member today."
                            }, {
                                hid: "og:title",
                                name: "og:title",
                                content: "Chewy Gives Back"
                            }, {
                                hid: "og:image",
                                name: "og:image",
                                content: "https://cms-www.chewy.com/images/shelters/cgb-share-consumer-landing.jpg"
                            }]
                        }
                    },
                    middleware: function(e) {
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.store, r = n.getters["page/isShelterCmsEnabled"], o = n.getters["page/isShelterCmsGiveBackLandingEnabled"], !r || !o) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.next = 6, Promise.all([n.dispatch("shelter-search/getGivebackContent"), n.dispatch("shelter-search/getTopShelterCities")]);
                                    case 6:
                                        t.next = 10;
                                        break;
                                    case 8:
                                        return t.next = 10, n.dispatch("shelter-search/getTopShelterCities");
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    layout: function(e) {
                        return e.store.getters["page/isShelterCmsEnabled"] && e.store.getters["page/isShelterCmsGiveBackLandingEnabled"] ? "SfwLayoutCms" : "SfwLayout"
                    }
                },
                Ve = (n(864), Object(v.a)(Ke, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [e.isShelterCmsEnabled && e.isShelterCmsGiveBackLandingEnabled ? n("div", [n("div", {
                        ref: "apiCmsComponent_000",
                        staticClass: "give-back-cms-banner-cls"
                    }), e._v(" "), n("chirpify", [n("div", {
                        staticClass: "consumer-landing"
                    }, [n("never-been-easier-to-give-back"), e._v(" "), n("wish-list-search-pets"), e._v(" "), e.isShelterCmsEnabled && e.isShelterCmsGiveBackLandingEnabled ? n("div", {
                        ref: "apiCmsComponent_001",
                        staticClass: "give-back-cms-campaign-cls"
                    }) : e._e(), e._v(" "), n("impact-by-numbers"), e._v(" "), n("partners-saying")], 1)]), e._v(" "), e.isStarlightEnabled ? n("div", {
                        staticClass: "starlight_giveback"
                    }, [n("starlight", {
                        attrs: {
                            title: "Give Back to a Shelter Near You"
                        }
                    })], 1) : n("div", {
                        staticClass: "consumer-landing"
                    }, [n("shelters-near-you")], 1), e._v(" "), n("chirpify", [n("div", {
                        staticClass: "consumer-landing"
                    }, [n("happening-at-chewy"), e._v(" "), n("join-our-network")], 1)]), e._v(" "), n("chirpify", [n("div", {
                        staticClass: "consumer-landing"
                    }, [n("top-cities-list", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: e.trackTopCitiesImpression,
                            expression: "trackTopCitiesImpression"
                        }],
                        staticClass: "top-shelters",
                        attrs: {
                            title: "Top Shelter and Rescue Cities",
                            cities: e.topCities
                        },
                        on: {
                            click: e.trackTopCitiesClick
                        }
                    })], 1)])], 1) : n("div", [n("chirpify", [n("landing-page-hero"), e._v(" "), n("div", {
                        staticClass: "consumer-landing"
                    }, [n("never-been-easier-to-give-back"), e._v(" "), n("wish-list-search-pets")], 1), e._v(" "), n("impact-by-numbers"), e._v(" "), n("partners-saying"), e._v(" "), n("div", {
                        staticClass: "consumer-landing"
                    }, [n("shelters-near-you"), e._v(" "), n("happening-at-chewy")], 1), e._v(" "), n("join-our-network"), e._v(" "), n("div", {
                        staticClass: "consumer-landing"
                    }, [n("top-cities-list", {
                        directives: [{
                            name: "in-view",
                            rawName: "v-in-view",
                            value: e.trackTopCitiesImpression,
                            expression: "trackTopCitiesImpression"
                        }],
                        staticClass: "top-shelters",
                        attrs: {
                            title: "Top Shelter and Rescue Cities",
                            cities: e.topCities
                        },
                        on: {
                            click: e.trackTopCitiesClick
                        }
                    })], 1)], 1)], 1)])
                }), [], !1, null, null, null));
            t.default = Ve.exports
        },
        419: function(e, t, n) {},
        425: function(e, t, n) {
            "use strict";
            var r = {},
                o = (n(433), n(9)),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e.$createElement;
                    return (e._self._c || t)("button", e._g(e._b({
                        staticClass: "button-link specificity-workaround",
                        attrs: {
                            type: "button"
                        }
                    }, "button", e.$attrs, !1), e.$listeners), [e._t("default")], 2)
                }), [], !1, null, "2553e6ae", null);
            t.a = component.exports
        },
        433: function(e, t, n) {
            "use strict";
            n(419)
        },
        441: function(e, t, n) {
            e.exports = n.p + "img/logo-default.0ceb042.png"
        },
        485: function(e, t, n) {},
        494: function(e, t, n) {
            n(12), n(7), n(14), n(16), n(10), n(17);
            var r = n(257),
                o = n(258),
                c = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function l(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }
            n(22), e.exports = {
                functional: !0,
                render: function(e, t) {
                    var n = t._c,
                        data = (t._v, t.data),
                        h = t.children,
                        m = void 0 === h ? [] : h,
                        d = data.class,
                        v = data.staticClass,
                        style = data.style,
                        f = data.staticStyle,
                        _ = data.attrs,
                        y = void 0 === _ ? {} : _,
                        w = o(data, c);
                    return n("svg", function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? l(Object(source), !0).forEach((function(t) {
                                r(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({
                        class: [d, v],
                        style: [style, f],
                        attrs: Object.assign({
                            height: "97px",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 279 259",
                            fill: "#002957"
                        }, y)
                    }, w), m.concat([n("g", {
                        attrs: {
                            "fill-rule": "nonzero"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M57.46 99.46h-3.69c-2.43 0-3.38-.95-3.38-3.38v-.63c0-2.64 1.16-3.69 3.8-3.69h6.65c3.48 0 4.85 1.37 4.85 4.85v21.31c0 9.18-4.54 13.72-13.72 13.72H48.8c-9.18 0-13.72-4.54-13.72-13.72V70.23c0-9.18 4.54-13.72 13.72-13.72h3.17c8.97 0 13.51 4.54 13.51 13.51v6.33c0 2.85-1.16 4.01-4.01 4.01h-.21c-2.85 0-4.01-1.16-4.01-4.01v-6.54c0-3.69-1.9-5.59-5.59-5.59h-2.53c-3.69 0-5.59 1.9-5.59 5.59v48.54c0 3.69 1.9 5.59 5.59 5.59h2.74c3.69 0 5.59-1.9 5.59-5.59V99.46zM92.49 56.94c2.95 0 4.12 1.16 4.12 4.12v66.05c0 2.95-1.16 4.11-4.12 4.11h-.21c-2.95 0-4.11-1.16-4.11-4.11V61.06c0-2.95 1.16-4.12 4.11-4.12h.21zM132.58 131.43c-2.85 0-4.01-1.16-4.43-3.8L117.7 61.68c-.53-3.17.84-4.75 4.01-4.75h.21c2.43 0 3.8 1.16 4.11 3.48l7.49 55.5 7.49-55.61c.32-2.22 1.58-3.38 4.01-3.38h.21c3.27 0 4.43 1.37 3.9 4.64l-10.45 66.05c-.42 2.64-1.58 3.8-4.43 3.8h-1.67v.02zM170.14 62c0-3.48 1.37-4.85 4.85-4.85h14.77c2.85 0 3.8.95 3.8 3.8v.21c0 2.85-.95 3.8-3.8 3.8h-11.18v24.48h10.76c2.64 0 3.69 1.06 3.69 3.69v.21c0 2.64-1.06 3.8-3.69 3.8h-10.76v26.06h11.4c2.85 0 3.8.95 3.8 3.8v.21c0 2.85-.95 3.8-3.8 3.8H175c-3.48 0-4.85-1.37-4.85-4.85V62h-.01zM237.46 93.44c5.38 3.9 7.07 7.39 7.07 13.72v10.76c0 9.18-4.54 13.72-13.72 13.72h-2.32c-8.97 0-13.51-4.54-13.51-13.51v-11.71c0-2.85 1.16-4.01 4.01-4.01h.21c2.85 0 4.01 1.16 4.01 4.01v12.03c0 3.69 1.9 5.59 5.59 5.59h1.69c3.69 0 5.59-1.9 5.59-5.59v-11.08c0-3.48-1.05-5.06-3.69-7.07l-10.34-7.49c-5.38-3.8-7.07-7.49-7.07-13.72v-8.86c0-9.18 4.54-13.72 13.72-13.72h2.11c8.97 0 13.51 4.54 13.51 13.51v9.5c0 2.85-1.16 4.01-4.01 4.01h-.21c-2.85 0-4.01-1.16-4.01-4.01v-9.81c0-3.69-1.9-5.59-5.59-5.59h-1.48c-3.69 0-5.59 1.9-5.59 5.59V79c0 3.48 1.16 5.06 3.8 7.07l10.23 7.37zM77.14 175.25c0 6.01-2.11 9.92-6.44 11.5 4.43 1.79 6.65 5.59 6.65 11.61v12.45c0 9.18-4.54 13.72-13.72 13.72H52.87c-3.48 0-4.85-1.37-4.85-4.85v-64.15c0-3.48 1.37-4.85 4.85-4.85h10.55c9.18 0 13.72 4.54 13.72 13.72v10.85zm-8.34-11.39c0-3.69-1.9-5.59-5.59-5.59h-6.86v24.8h6.23c4.11 0 6.23-2.11 6.23-6.23v-12.98h-.01zm-12.45 26.69v26.38h7.07c3.69 0 5.59-1.9 5.59-5.59v-14.56c0-4.12-2.11-6.23-6.23-6.23h-6.43zM126.31 224.74c-2.32 0-3.59-1.16-3.9-3.48l-1.27-9.07h-13.72l-1.27 9.18c-.32 2.22-1.58 3.38-3.8 3.38h-.21c-3.06 0-4.33-1.48-3.8-4.54l10.02-65.84c.42-2.95 1.79-4.12 4.75-4.12h2.53c2.95 0 4.33 1.16 4.75 4.12l10.02 65.74c.53 3.27-.63 4.64-3.9 4.64h-.2v-.01zm-17.84-20.15h11.5l-5.7-41.26-5.8 41.26zM173.47 199.95c0-2.85 1.16-4.01 4.01-4.01h.21c2.85 0 4.01 1.16 4.01 4.01v11.5c0 9.18-4.54 13.72-13.72 13.72h-2.74c-9.18 0-13.72-4.54-13.72-13.72v-47.69c0-9.18 4.54-13.72 13.72-13.72h2.74c8.97 0 13.51 4.54 13.51 13.51v9.5c0 2.85-1.16 4.01-4.01 4.01h-.21c-2.85 0-4.01-1.16-4.01-4.01v-9.71c0-3.69-1.9-5.59-5.59-5.59h-2.11c-3.69 0-5.59 1.9-5.59 5.59v48.54c0 3.69 1.9 5.59 5.59 5.59h2.32c3.69 0 5.59-1.9 5.59-5.59v-11.93zM228.97 224.74c-1.9 0-3.17-.84-3.9-2.64l-12.77-33.87v32.39c0 2.96-1.16 4.12-4.12 4.12h-.21c-2.96 0-4.12-1.16-4.12-4.12v-66.05c0-2.95 1.16-4.12 4.12-4.12h.21c2.95 0 4.12 1.16 4.12 4.12v31.87l13.51-33.55c.74-1.58 2-2.43 3.69-2.43h.21c4.01 0 5.28 1.9 3.8 5.59l-12.87 30.81 12.56 32.08c1.48 3.9.11 5.8-4.01 5.8h-.22z"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M260.8 258.71H18.5c-9.92 0-17.99-8.07-17.99-17.98V40.06c0-9.92 8.07-17.99 17.99-17.99h25.8v7.19H18.5c-5.95 0-10.79 4.84-10.79 10.79v200.67c0 5.95 4.84 10.79 10.79 10.79h242.3c5.95 0 10.79-4.84 10.79-10.79V40.06c0-5.95-4.84-10.79-10.79-10.79H235v-7.19h25.8c9.92 0 17.98 8.07 17.98 17.99v200.67c0 9.91-8.06 17.97-17.98 17.97z"
                        }
                    }), n("g", [n("path", {
                        attrs: {
                            d: "M82.49 26.39c-3.47.83-4.35 4.95-8.04 5.7-4.18.86-6.82-2.4-7.63-6.32-.66-3.22-.09-7.96 4.55-8.66 4.08-.61 5.03 3.64 9.57 2.74 2.69-.53 3.99-2.65 3.36-5.35-.99-4.09-7.49-7.1-14.62-5.64-9.18 1.89-15.38 10.07-13.36 20.33C58.41 39.8 68.43 43.23 76.36 41.5c10.2-2.23 11.99-9.46 11.43-11.84-.48-2.05-2.58-3.95-5.3-3.27zM146.63 13.89c-2.13-5.7-10.73-11.27-21.32-5.59-10.94 5.87-10.19 16.18-7.39 22.21 4.83 10.41 14.73 11.08 22.44 7.5 4.48-2.08 7.13-4.61 8.69-6.92 3.01-4.45 1.49-7.63-.54-8.78-2.45-1.38-5.43-.57-6.84 2.34-1.03 2.13-1.46 4.3-5.09 5.75-3.54 1.41-6.77-.65-7.84-2.6 0 0 11.72-5.31 15.17-7.35 2.67-1.58 3.77-3.75 2.72-6.56zm-20.68 7.84s-1.75-5.05 3.09-7.29 7.53 2.36 7.53 2.36l-10.62 4.93z"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M107.6 13.03c-5.64-.5-8.81 2.76-8.81 2.76l-.11-.01c.4-4.56.74-8.27.82-9.24.26-2.97-1.72-5.59-4.96-5.88-3.24-.29-5.67 1.98-5.93 4.91l-2.8 31.55c-.26 2.97 1.72 5.59 4.96 5.88 3.24.29 5.67-1.98 5.93-4.91 0 0 .52-5.88 1.12-12.57.3-3.52 2.68-4.81 4.75-4.62 2.07.18 4.15 2.13 3.87 5.39-.6 6.7-1.12 12.57-1.12 12.57-.26 2.97 1.72 5.59 4.96 5.88 3.24.29 5.67-1.98 5.93-4.91l1.24-14c.59-6.69-3.38-12.23-9.85-12.8zM189.7 6.99c-3.12-.39-5.57 1.77-5.95 4.66l-2.11 16.08-.13.01s-2.59-7.03-4.36-11.85c-1.77-4.82-3.22-7.32-7.63-6.83-4.41.49-5.27 3.24-5.95 8.34-.67 5.09-1.65 12.51-1.65 12.51l-.13.01-5.59-15.23c-1-2.73-3.87-4.3-6.83-3.24-2.96 1.07-4.2 4.09-3.12 6.83 1.42 3.53 3.82 9.21 5.92 13.68 3.72 7.89 5.02 9.83 10.95 9.33 5.9-.81 6.47-3.22 8.05-16.7l.06-.01.06-.01c4.5 12.8 5.59 15.03 11.52 14.53 5.9-.81 6.73-2.99 8.63-11.5 1.07-4.83 2.16-10.89 2.78-14.65.48-2.9-1.4-5.57-4.52-5.96z"
                        }
                    }), n("path", {
                        attrs: {
                            d: "M219.63 10.48c-3.04-1.01-5.9.67-6.82 3.47 0 0-2.96 9.02-5.12 15.62l-.13-.01c-1.63-6.75-3.85-15.98-3.85-15.98-.69-2.87-3.41-4.77-6.52-4.01-3.11.76-4.73 3.68-3.96 6.57l1.62 5.23c3.17 10.2 6.46 16.96 4.48 17.95-1.76.88-2.78-2.2-6.18-1.99-2.33.14-4.4 2.59-3.65 5.61 1.04 4.17 7.57 8.6 15.07 6.38 7.56-2.24 9.76-8.34 18.47-31.97 1-2.82-.37-5.86-3.41-6.87z"
                        }
                    })])])]))
                }
            }
        },
        519: function(e, t, n) {
            "use strict";
            n(485)
        },
        557: function(e, t, n) {
            "use strict";
            var r = {
                    components: {
                        Banner: n(649).a
                    },
                    props: {
                        apiData: {
                            type: Object,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            showMessage: !1
                        }
                    },
                    methods: {
                        changeMessage: function(e) {
                            this.showMessage = !this.showMessage
                        }
                    }
                },
                o = n(9),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e.$createElement;
                    return (e._self._c || t)("banner", {
                        attrs: {
                            data: e.apiData
                        }
                    })
                }), [], !1, null, "0968d350", null);
            t.a = component.exports
        },
        558: function(e, t, n) {
            "use strict";
            n(12), n(7), n(16), n(10), n(17);
            var r = n(4),
                o = (n(14), n(53), n(43), n(22), n(34), n(58), n(70)),
                c = n(39),
                l = n(425),
                h = n(73);

            function m(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function d(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(t) {
                        Object(r.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var v = {
                    components: {
                        ButtonLink: l.a
                    },
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        cities: {
                            type: Array,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            collapsed: !0
                        }
                    },
                    computed: {
                        filteredCities: function() {
                            var e = this;
                            return this.cities && this.cities.length ? this.cities.map((function(t) {
                                return d(d({}, t), {}, {
                                    url: e.generateUrl(t)
                                })
                            })).filter((function(e) {
                                return Object(h.d)(e.url)
                            })) : []
                        },
                        citiesToShow: function() {
                            return this.collapsed ? this.filteredCities.slice(0, 15) : this.filteredCities
                        },
                        hiddenCities: function() {
                            return this.filteredCities && this.filteredCities.length && this.collapsed ? this.filteredCities.slice(15) : []
                        },
                        showToggle: function() {
                            var e;
                            return (null === (e = this.filteredCities) || void 0 === e ? void 0 : e.length) > 15
                        }
                    },
                    methods: {
                        generateUrl: function(e) {
                            return Object(c.e)({
                                city: e.city,
                                state: e.stateCode,
                                uniqueCityId: e.uniqueCityId
                            })
                        },
                        trackClickandEmit: function(e, t) {
                            Object(o.c)({
                                category: "snr search results",
                                action: e,
                                label: "".concat(t.city, ", ").concat(t.stateCode),
                                pageType: "shelter_and_rescue",
                                screen_name: "snr search results"
                            }), this.$emit(e, t)
                        },
                        clearOrgName: function() {
                            var e, t = null === (e = this.$route.hash) || void 0 === e ? void 0 : e.split("orgName")[0];
                            return t ? t.concat('orgName":""}') : ""
                        }
                    }
                },
                f = (n(519), n(9)),
                component = Object(f.a)(v, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.cities && e.cities.length ? n("section", {
                        staticClass: "top-cities-list chirp-content-container"
                    }, [n("div", [n("h3", {
                        staticClass: "top-cities-list__title"
                    }, [e._v("\n      " + e._s(e.title) + "\n    ")]), e._v(" "), n("ul", {
                        staticClass: "top-cities-list__list"
                    }, [e._l(e.hiddenCities, (function(t) {
                        return n("li", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !1,
                                expression: "false"
                            }],
                            key: t.uniqueCityId
                        }, [n("nuxt-link", {
                            attrs: {
                                to: {
                                    path: e.generateUrl(t),
                                    hash: "" + e.clearOrgName()
                                }
                            },
                            nativeOn: {
                                click: function(n) {
                                    return e.$emit("click", t)
                                }
                            }
                        }, [e._v("\n          Shelters and Rescues in " + e._s(t.city) + ",\n          " + e._s(t.stateCode) + "\n        ")])], 1)
                    })), e._v(" "), e._l(e.citiesToShow, (function(t) {
                        return n("li", {
                            key: t.uniqueCityId
                        }, [n("nuxt-link", {
                            attrs: {
                                to: {
                                    path: e.generateUrl(t),
                                    hash: "" + e.clearOrgName()
                                }
                            },
                            nativeOn: {
                                click: function(n) {
                                    return e.trackClickandEmit("click", t)
                                }
                            }
                        }, [e._v("\n          Shelters and Rescues in " + e._s(t.city) + ",\n          " + e._s(t.stateCode) + "\n        ")])], 1)
                    }))], 2), e._v(" "), e.showToggle ? n("div", {
                        staticClass: "top-cities-list__showMore"
                    }, [n("button-link", {
                        staticClass: "top-cities-list__showMoreLink",
                        on: {
                            click: function(t) {
                                e.collapsed = !e.collapsed
                            }
                        }
                    }, [e._v("\n        " + e._s(e.collapsed ? "Show More" : "Show Less") + "\n      ")])], 1) : e._e()])]) : e._e()
                }), [], !1, null, null, null);
            t.a = component.exports
        },
        586: function(e, t, n) {
            e.exports = n.p + "img/us-map.18a8929.png"
        },
        661: function(e, t, n) {},
        662: function(e, t, n) {},
        663: function(e, t, n) {},
        664: function(e, t, n) {},
        665: function(e, t, n) {},
        666: function(e, t, n) {},
        667: function(e, t, n) {},
        669: function(e, t, n) {},
        670: function(e, t, n) {},
        671: function(e, t, n) {},
        672: function(e, t, n) {},
        673: function(e, t, n) {},
        674: function(e, t, n) {},
        675: function(e, t, n) {},
        678: function(e, t, n) {},
        679: function(e, t, n) {},
        836: function(e, t, n) {
            "use strict";
            n(661)
        },
        837: function(e, t, n) {
            "use strict";
            n(662)
        },
        838: function(e, t, n) {
            "use strict";
            n(663)
        },
        839: function(e, t, n) {
            "use strict";
            n(664)
        },
        840: function(e, t, n) {
            "use strict";
            n(665)
        },
        841: function(e, t, n) {
            "use strict";
            n(666)
        },
        842: function(e, t, n) {
            e.exports = n.p + "img/lucky-lab.81e9d6f.png"
        },
        843: function(e, t, n) {
            e.exports = n.p + "img/pets-for-patriots.7d5f4b8.png"
        },
        844: function(e, t, n) {
            e.exports = n.p + "img/rescue-city.48db7e4.png"
        },
        845: function(e, t, n) {
            "use strict";
            n(667)
        },
        846: function(e, t, n) {
            "use strict";
            n(669)
        },
        847: function(e, t, n) {
            "use strict";
            n(670)
        },
        848: function(e, t, n) {
            e.exports = n.p + "img/SR-shelter-dog-field-trip.c67f8cb.png"
        },
        849: function(e, t, n) {
            e.exports = n.p + "img/SR-shelter-spotlight-villalobos.e97fce8.jpg"
        },
        850: function(e, t, n) {
            e.exports = n.p + "img/SR-stray-feral-cats.78c7230.jpg"
        },
        851: function(e, t, n) {
            "use strict";
            n(671)
        },
        852: function(e, t, n) {
            "use strict";
            n(672)
        },
        853: function(e, t, n) {
            "use strict";
            n(673)
        },
        854: function(e, t, n) {
            e.exports = n.p + "img/Impact-Landingpage-searchshelters.d8ff42b.png"
        },
        855: function(e, t, n) {
            e.exports = n.p + "img/Impact-Landingpage-searchpets.47e7fff.png"
        },
        856: function(e, t, n) {
            "use strict";
            n(674)
        },
        857: function(e, t, n) {
            e.exports = n.p + "img/Impact-LandingPage-LuckLab.1a3c26a.png"
        },
        858: function(e, t, n) {
            e.exports = n.p + "img/Impact-LandingPage-Patriots.a2844bd.png"
        },
        859: function(e, t, n) {
            e.exports = n.p + "img/Impact-LandingPage-RescueCity.9703eb7.png"
        },
        860: function(e, t, n) {
            "use strict";
            n(675)
        },
        863: function(e, t, n) {
            "use strict";
            n(678)
        },
        864: function(e, t, n) {
            "use strict";
            n(679)
        }
    }
]);