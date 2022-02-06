var kedcomponents = function(e) {
    function t(t) {
        for (var r, i, s = t[0], c = t[1], l = t[2], d = 0, p = []; d < s.length; d++)
            i = s[d],
            Object.prototype.hasOwnProperty.call(a, i) && a[i] && p.push(a[i][0]),
            a[i] = 0;
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (u && u(t); p.length; )
            p.shift()();
        return o.push.apply(o, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== a[c] && (r = !1)
            }
            r && (o.splice(t--, 1),
            e = i(i.s = n[0]))
        }
        return e
    }
    var r = {}
      , a = {
        30: 0
    }
      , o = [];
    function i(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.e = function(e) {
        var t = []
          , n = a[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var r = new Promise((function(t, r) {
                    n = a[e] = [t, r]
                }
                ));
                t.push(n[2] = r);
                var o, s = document.createElement("script");
                s.charset = "utf-8",
                s.timeout = 120,
                i.nc && s.setAttribute("nonce", i.nc),
                s.src = function(e) {
                    return i.p + "" + ({
                        0: "common",
                        2: "ListCourses",
                        3: "BaseGroupsSelect",
                        4: "Calendar",
                        5: "CalendarTutored",
                        6: "ChildSelectorView",
                        7: "CourseBuilder",
                        8: "CourseViewer",
                        9: "KGTermPlanner",
                        10: "KSAcademyStrategyTeacherView",
                        11: "KSAcademyStrategyUpperTeacherView",
                        12: "KSGoals",
                        13: "KSTermPlanner",
                        14: "KSTermPlannerTutored",
                        15: "LatestAssessments",
                        16: "LearningTasks",
                        17: "MyCourses",
                        18: "MySubjects",
                        19: "ProfilePageArea",
                        20: "StrategyTeacherView",
                        21: "StudentAssignmentsViewTab",
                        22: "SubjectPlanner",
                        23: "SubjectPlannerAdmin",
                        24: "TeacherViewApp",
                        25: "TestChildrenEditor",
                        26: "WeekPlanner",
                        27: "WeekPlannerTutored",
                        28: "WorkpathCbViewApp",
                        29: "WorkpathViewApp"
                    }[e] || e) + ".min.js?ver=" + {
                        0: "3495bfd57aac08ff5a6f",
                        2: "6a2b9c29bf7bacb01ef4",
                        3: "efd65fb42b3dd68e5a47",
                        4: "90aee678e6479e0fd202",
                        5: "8e36045f81f222e9c3eb",
                        6: "6d79e83b53100596dea8",
                        7: "f9b8405502ccca673d12",
                        8: "4b82b6c064bbb4c39032",
                        9: "9f27ef7b4d03cbc04989",
                        10: "c396f3208a60c3ddeb51",
                        11: "c1cff06286545bd4ec04",
                        12: "1147988c73e1318a01f4",
                        13: "fc7ea496c0db6f593c8e",
                        14: "b85ecdaee1eadd779f16",
                        15: "3371c44d3e9754e9c091",
                        16: "a2d330fd39de79368079",
                        17: "15f20fcb6973ec6d0c89",
                        18: "cbfd650cb77e53a51213",
                        19: "01a421a57a9285047d2b",
                        20: "e8c9545ec580a9648aac",
                        21: "95fe225c82cd62c8056a",
                        22: "3d21dca21333818a49d4",
                        23: "0a8b7e4c0ab6201c1979",
                        24: "2d2715a8daaf36c372e8",
                        25: "9c81634dfa6eb9ed0997",
                        26: "133f8c6434d354aecd98",
                        27: "4edb674b74cec049cc9f",
                        28: "2ebedb58e68976a5b812",
                        29: "95e10bf6135f396bdef5"
                    }[e]
                }(e);
                var c = new Error;
                o = function(t) {
                    s.onerror = s.onload = null,
                    clearTimeout(l);
                    var n = a[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")",
                            c.name = "ChunkLoadError",
                            c.type = r,
                            c.request = o,
                            n[1](c)
                        }
                        a[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: s
                    })
                }
                ), 12e4);
                s.onerror = s.onload = o,
                document.head.appendChild(s)
            }
        return Promise.all(t)
    }
    ,
    i.m = e,
    i.c = r,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "/vendor/",
    i.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var s = window.webpackJsonp_name_ = window.webpackJsonp_name_ || []
      , c = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var l = 0; l < s.length; l++)
        t(s[l]);
    var u = c;
    return o.push([368, 1]),
    n()
}([, function(e, t) {
    e.exports = React
}
, , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return a
    }
    ));
    var r = n(20);
    r.a.env || (r.a.env = {}),
    t.a = r.a.env;
    var a = r.a.env
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = n(20);
    r.a.cfg || (r.a.cfg = {}),
    t.b = r.a.cfg;
    var a = r.a.cfg
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "f", (function() {
        return s
    }
    )),
    n.d(t, "h", (function() {
        return l
    }
    )),
    n.d(t, "n", (function() {
        return d
    }
    )),
    n.d(t, "i", (function() {
        return p
    }
    )),
    n.d(t, "b", (function() {
        return m
    }
    )),
    n.d(t, "j", (function() {
        return h
    }
    )),
    n.d(t, "a", (function() {
        return g
    }
    )),
    n.d(t, "q", (function() {
        return b
    }
    )),
    n.d(t, "C", (function() {
        return f
    }
    )),
    n.d(t, "k", (function() {
        return k
    }
    )),
    n.d(t, "y", (function() {
        return w
    }
    )),
    n.d(t, "A", (function() {
        return y
    }
    )),
    n.d(t, "z", (function() {
        return _
    }
    )),
    n.d(t, "x", (function() {
        return O
    }
    )),
    n.d(t, "u", (function() {
        return T
    }
    )),
    n.d(t, "c", (function() {
        return j
    }
    )),
    n.d(t, "d", (function() {
        return E
    }
    )),
    n.d(t, "g", (function() {
        return S
    }
    )),
    n.d(t, "m", (function() {
        return x
    }
    )),
    n.d(t, "v", (function() {
        return C
    }
    )),
    n.d(t, "r", (function() {
        return D
    }
    )),
    n.d(t, "w", (function() {
        return N
    }
    )),
    n.d(t, "B", (function() {
        return A
    }
    )),
    n.d(t, "o", (function() {
        return I
    }
    )),
    n.d(t, "D", (function() {
        return L
    }
    )),
    n.d(t, "l", (function() {
        return P
    }
    )),
    n.d(t, "s", (function() {
        return V
    }
    )),
    n.d(t, "e", (function() {
        return G
    }
    )),
    n.d(t, "t", (function() {
        return R
    }
    )),
    n.d(t, "p", (function() {
        return B
    }
    ));
    var r = n(0)
      , a = n(13)
      , o = n(1)
      , i = n(41);
    function s(e) {
        for (var t = 0, n = e.length; t < n; ++t)
            if (e.charCodeAt(t) < 8192)
                return e.substr(0, t) + e[t].toLocaleUpperCase() + e.substr(t + 1);
        return e
    }
    function c(e, t) {
        return "object" != typeof t || Object.keys(t).forEach((function(n) {
            e[n] = t[n]
        }
        )),
        e
    }
    function l(e, t) {
        var n = {};
        return Object.getOwnPropertyNames(e).forEach((function(t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
        }
        )),
        t && c(n, t),
        n
    }
    var u = [].concat;
    function d(e) {
        return u.apply([], e)
    }
    function p(e) {
        return function(t, n) {
            var r = t[e]
              , a = n[e];
            return r > a ? 1 : r < a ? -1 : 0
        }
    }
    function m(e, t) {
        return e.filter(t).concat(e.filter((function(e) {
            return !t(e)
        }
        )))
    }
    function h(e, t, n, a) {
        e = Array.isArray(e) ? e : [e];
        function o(e, r, i, s) {
            var c = e[i]
              , l = r[i];
            return c === l ? 0 : null == c ? -1 : null == l ? 1 : 0 === s.length ? function(e, r) {
                return "string" == typeof e ? e.localeCompare(r, t, n) : e < r ? a ? 1 : -1 : e > r ? a ? -1 : 1 : 0
            }(c, l) : o(c, l, s[0], s.slice(1))
        }
        return e.map((function(e) {
            return e.split(".")
        }
        )).map((function(e) {
            var t = Object(r.__read)(e)
              , n = t[0]
              , a = t.slice(1);
            return function(e, t) {
                return o(e, t, n, a)
            }
        }
        )).reduce((function(e, t) {
            return function(n, r) {
                return e(n, r) || t(n, r)
            }
        }
        ))
    }
    function g(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        e[0];
        return v(e, t)
    }
    function b(e, t, n, r) {
        return void 0 === r && (r = null),
        e.formatMessage({
            id: t,
            defaultMessage: n
        }, r)
    }
    function f(e) {
        var t = Object(o.useContext)(i.b).intl;
        return function(n, r, a) {
            return void 0 === a && (a = null),
            t.formatMessage({
                id: e + "." + n,
                defaultMessage: r
            }, a)
        }
    }
    function v(e, t) {
        for (var n = e[0], r = 1, a = e.length; r < a; ++r)
            n += t[r - 1] + e[r];
        return n
    }
    function k(e, t) {
        var n;
        return "string" == typeof t && (n = /\/Date\((\d*)\)\//.exec(t)) ? new Date(+n[1]) : t
    }
    function w(e) {
        var t = new CustomEvent("info",{
            detail: e
        });
        window.dispatchEvent(t)
    }
    function y(e) {
        var t = Object(a.j)()
          , n = new CustomEvent("tempInfo",{
            detail: {
                msg: e,
                id: t
            }
        });
        return window.dispatchEvent(n),
        {
            close: function() {
                var e = new CustomEvent("tempInfoClose",{
                    detail: {
                        id: t
                    }
                });
                window.dispatchEvent(e)
            },
            updateInfo: function(e) {
                window.dispatchEvent(new CustomEvent("tempInfo",{
                    detail: {
                        msg: e,
                        id: t
                    }
                }))
            }
        }
    }
    function _(e) {
        var t = new CustomEvent("success",{
            detail: e
        });
        window.dispatchEvent(t)
    }
    function O(e) {
        var t = "string" == typeof e ? e : e.message
          , n = new CustomEvent("customerror",{
            detail: t
        });
        console.error(e),
        setTimeout((function() {
            return window.dispatchEvent(n)
        }
        ), 0)
    }
    function T(e, t) {
        return e.length > t ? e.substr(0, t - 3) + "..." : e
    }
    function j(e, t) {
        for (var n = {}, r = 0, a = e.length; r < a; ++r) {
            var o = e[r]
              , i = t(o)
              , s = n[i];
            s ? s.push(o) : n[i] = [o]
        }
        return n
    }
    function E(e, t, n) {
        for (var r = {}, a = 0, o = e.length; a < o; ++a) {
            var i = e[a];
            r[t(i)] = n ? n(i) : i
        }
        return r
    }
    function S(e, t) {
        var n, a, o = {};
        try {
            for (var i = Object(r.__values)(t), s = i.next(); !s.done; s = i.next()) {
                var c = s.value;
                c in e && (o[c] = e[c])
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                s && !s.done && (a = i.return) && a.call(i)
            } finally {
                if (n)
                    throw n.error
            }
        }
        return o
    }
    function x(e, t) {
        var n = E(e, t || function(e) {
            return e
        }
        );
        return Object.keys(n).map((function(e) {
            return n[e]
        }
        ))
    }
    function C(e, t) {
        if (e === t)
            return !0;
        if (!e || !t)
            return !1;
        if ("object" != typeof e || "object" != typeof t)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (var a = 0, o = n.length; a < o; ++a) {
            var i = n[a];
            if (r[a] !== i)
                return !1;
            if (e[i] !== t[i])
                return !1
        }
        return !0
    }
    function D(e, t) {
        return e.reduce((function(e, n) {
            return (e[n[t]] = e[n[t]] || []).push(n),
            e
        }
        ), {})
    }
    function N(e) {
        return e.tutored || e.currentUser && null != e.currentUser.impersonator
    }
    var A = function(e, t, n) {
        try {
            return e(t)
        } catch (e) {
            return null != n ? n : e
        }
    };
    function I(e, t) {
        var n = /^sv/i.test(t);
        return /s$/i.test(e) ? n ? e : e + "'" : n ? e + "s" : e + "'s"
    }
    function L(e) {
        return !!/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#.*)?$/i.test(e)
    }
    function P(e) {
        return e.includes("://") ? e : L("https://" + e) ? "https://" + e : e
    }
    function V(e) {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(e)
    }
    function G(e) {
        return e.filter((function(e, t, n) {
            return n.indexOf(e) === t
        }
        ))
    }
    function R(e) {
        return e ? e[e.length - 1] : null
    }
    function B(e) {
        return Object(r.__spreadArray)([], Object(r.__read)(Array(26).keys())).map((function(e) {
            return String.fromCharCode(e + 65)
        }
        ))[e]
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(49);
    n.d(t, "a", (function() {
        return r.a
    }
    )),
    n.d(t, "b", (function() {
        return r.b
    }
    )),
    n.d(t, "c", (function() {
        return r.c
    }
    )),
    n.d(t, "d", (function() {
        return r.d
    }
    )),
    n.d(t, "e", (function() {
        return r.e
    }
    )),
    n.d(t, "f", (function() {
        return r.f
    }
    )),
    n.d(t, "g", (function() {
        return r.g
    }
    )),
    n.d(t, "h", (function() {
        return r.h
    }
    )),
    n.d(t, "i", (function() {
        return r.i
    }
    )),
    n.d(t, "j", (function() {
        return r.j
    }
    )),
    n.d(t, "k", (function() {
        return r.k
    }
    )),
    n.d(t, "l", (function() {
        return r.l
    }
    )),
    n.d(t, "m", (function() {
        return r.m
    }
    )),
    n.d(t, "n", (function() {
        return r.n
    }
    )),
    n.d(t, "o", (function() {
        return r.o
    }
    )),
    n.d(t, "p", (function() {
        return r.p
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = n(106);
    n.d(t, "a", (function() {
        return r.b
    }
    )),
    n.d(t, "b", (function() {
        return r.c
    }
    )),
    n.d(t, "c", (function() {
        return r.d
    }
    )),
    n.d(t, "d", (function() {
        return r.e
    }
    )),
    n.d(t, "e", (function() {
        return r.f
    }
    )),
    n.d(t, "f", (function() {
        return r.g
    }
    )),
    n.d(t, "g", (function() {
        return r.h
    }
    )),
    n.d(t, "h", (function() {
        return r.i
    }
    )),
    n.d(t, "i", (function() {
        return r.j
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    ));
    var r = {
        background: "#E1E1E1",
        primary: "#5BBEA2",
        primaryOnHover: n(125).a.darken("#5BBEA2"),
        inactive: "#CACACA",
        text: "#404242",
        grey: "#BFBFBF"
    }
}
, , , , , function(e, t, n) {
    "use strict";
    var r = "undefined" == typeof KED ? {} : KED;
    "undefined" != typeof window && "undefined" == typeof KED && (window.KED = r),
    t.a = r
}
, , , , , , , , , function(e, t) {
    e.exports = ReactDOM
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return a
    }
    )),
    n.d(t, "a", (function() {
        return i
    }
    )),
    n.d(t, "c", (function() {
        return s
    }
    ));
    var r = n(0);
    function a(e, t) {
        var n = (t || {}).toLower
          , a = {};
        return e && e.length > 1 && e.substr(1).split("&").map((function(e) {
            return e.split("=").map((function(e) {
                return decodeURIComponent(e.trim())
            }
            ))
        }
        )).forEach((function(e) {
            var t = Object(r.__read)(e, 2)
              , o = t[0]
              , i = t[1];
            return a[n ? o.toLowerCase() : o] = i
        }
        )),
        a
    }
    function o(e) {
        return Object.keys(e).filter((function(t) {
            return void 0 !== e[t]
        }
        )).map((function(t) {
            var n = e[t];
            return Array.isArray(n) && (n = n.join(",")),
            encodeURIComponent(t) + "=" + encodeURIComponent(n)
        }
        )).join("&")
    }
    function i(e) {
        return "?" + o(e)
    }
    function s(e) {
        var t = e.indexOf("?");
        return t >= 0 ? [e.substr(0, t), e.substr(t)] : [e, ""]
    }
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return d
    }
    )),
    n.d(t, "g", (function() {
        return p
    }
    )),
    n.d(t, "j", (function() {
        return h
    }
    )),
    n.d(t, "b", (function() {
        return g
    }
    )),
    n.d(t, "d", (function() {
        return b
    }
    )),
    n.d(t, "h", (function() {
        return f
    }
    )),
    n.d(t, "i", (function() {
        return v
    }
    )),
    n.d(t, "e", (function() {
        return k
    }
    )),
    n.d(t, "f", (function() {
        return w
    }
    )),
    n.d(t, "c", (function() {
        return y
    }
    ));
    var r = n(377)
      , a = n(246)
      , o = n(261)
      , i = n(196)
      , s = n(164)
      , c = n(113)
      , l = n(64)
      , u = n(381);
    function d(e) {
        if (!function(e) {
            if (!isNaN(e) && e >= 2e5 && e < 3e5 && e % 100 <= 53) {
                var t = p(e)
                  , n = t.year;
                return t.week <= Object(r.a)(Object(a.default)(new Date, n))
            }
            return !1
        }(e))
            throw new Error("Assertion failed: " + e + " is not a valid YearWeek")
    }
    function p(e) {
        return {
            year: Math.floor(e / 100),
            week: e % 100
        }
    }
    function m(e, t) {
        return Math.round(100 * e + t)
    }
    function h(e) {
        var t = p(e)
          , n = t.year
          , r = t.week;
        return Object(o.a)(Object(i.a)(new Date(n,0,4), r), 3)
    }
    function g(e) {
        var t = b(e);
        return m(t.year, t.week)
    }
    function b(e) {
        return {
            year: Object(s.a)(e),
            week: Object(c.default)(e)
        }
    }
    function f(e, t) {
        return w(Object(l.default)(h(e), t))
    }
    function v(e, t) {
        return Object(u.a)(h(e), h(t))
    }
    function k(e, t) {
        for (var n = [], r = e, a = 0; a < t; ++a)
            n.push(r),
            r = f(r, 1);
        return n
    }
    function w(e) {
        return 100 * Object(s.a)(e) + Object(c.default)(e)
    }
    function y(e, t) {
        return t.toLocaleTimeString(e, {
            hour: "numeric",
            minute: "2-digit"
        })
    }
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return m
    }
    )),
    n.d(t, "b", (function() {
        return g
    }
    )),
    n.d(t, "c", (function() {
        return b
    }
    )),
    n.d(t, "a", (function() {
        return f
    }
    ));
    var r = n(0)
      , a = n(49)
      , o = function() {
        function e() {}
        return e.prototype.save = function(e, t) {
            sessionStorage.setItem("bearer-" + e, JSON.stringify(t))
        }
        ,
        e.prototype.load = function(e) {
            try {
                var t = sessionStorage.getItem("bearer-" + e);
                return Promise.resolve(t ? JSON.parse(t) : {
                    token: null,
                    expires: 0
                })
            } catch (e) {
                return Promise.resolve({
                    token: null,
                    expires: 0
                })
            }
        }
        ,
        e
    }()
      , i = n(38);
    function s(e) {
        e.resources || (e.resources = [])
    }
    function c(e, t, n) {
        switch (t) {
        case "courses":
            !function(e, t) {
                e.modules || (e.modules = []),
                e.modules.forEach((function(e) {
                    e.resources || (e.resources = []),
                    e.taskIds || (e.taskIds = [])
                }
                )),
                e.responsibleTeachers || (e.responsibleTeachers = []),
                "resourses"in e && !("resources"in e) && (e.resources = e.resourses,
                delete e.resourses),
                e.resources || (e.resources = []),
                t && t.forEach((function(t) {
                    switch (t) {
                    case "tasks":
                        e.tasks.forEach((function(e) {
                            return s(e)
                        }
                        ))
                    }
                }
                ))
            }(e, n);
            break;
        case "tasks":
            s(e)
        }
    }
    var l = sessionStorage.getItem("redir-hash");
    if (l)
        try {
            var u = JSON.parse(l)
              , d = u.time
              , p = u.hash;
            d && d > Date.now() - 6e4 && (sessionStorage.removeItem("redir-hash"),
            location.hash = p)
        } catch (e) {}
    !function(e) {
        if (!e.__migrator_mixed_in) {
            e.__migrator_mixed_in = !0;
            var t = e.get
              , n = e.list;
            e.get = function(e, n, r) {
                var a = r && r.include;
                return t.apply(this, arguments).then((function(t) {
                    return c(t, e, a && a.toString().split(",")),
                    t
                }
                ))
            }
            ,
            e.list = function(e, t) {
                var r = t && t.include;
                return n.apply(this, arguments).then((function(t) {
                    return t.forEach((function(t) {
                        return c(t, e, r && r.toString().split(","))
                    }
                    )),
                    t
                }
                ))
            }
        }
    }(a.d.prototype);
    var m = new o
      , h = Date.now()
      , g = function() {
        function e(e, t, n) {
            this.tokenPath = e,
            this.tokenResponseMapper = t,
            this.tokenId = n,
            this.tokenInfo = {
                token: null,
                expires: 0
            },
            this.getBearer = Object(i.b)(this.getBearer.bind(this)),
            this.refreshBearer = Object(i.b)(this.refreshBearer.bind(this))
        }
        return e.prototype.getBearer = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return this.tokenInfo.token ? [3, 2] : this.tokenId ? (e = this,
                        [4, m.load(this.tokenId)]) : [3, 2];
                    case 1:
                        e.tokenInfo = t.sent(),
                        t.label = 2;
                    case 2:
                        return this.tokenInfo.expires < Date.now() ? [4, this.refreshBearer()] : [3, 4];
                    case 3:
                        t.sent(),
                        t.label = 4;
                    case 4:
                        return [2, this.tokenInfo]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.refreshBearer = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n, o, i;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, fetch(this.tokenPath, {
                            headers: {
                                Accept: "text/plain; application/json"
                            },
                            redirect: "manual",
                            cache: "no-cache",
                            credentials: "same-origin"
                        })];
                    case 1:
                        if ((302 === (e = r.sent()).status || !e.status && "opaqueredirect" === e.type) && Date.now() - h > 6e4)
                            throw this.wantsRedirect = !0,
                            console.log("Redirect wanted. Reload page."),
                            sessionStorage.setItem("redir-hash", JSON.stringify({
                                time: Date.now(),
                                hash: location.hash
                            })),
                            window.location.reload(),
                            new a.c(302,"Redirected");
                        return 200 == e.status ? [3, 3] : (t = Error.bind,
                        n = "HTTP" + e.status + " ",
                        [4, e.text()]);
                    case 2:
                        throw new (t.apply(Error, [void 0, n + r.sent()]));
                    case 3:
                        return o = this,
                        i = this.tokenResponseMapper,
                        [4, e.text()];
                    case 4:
                        return o.tokenInfo = i.apply(this, [r.sent()]),
                        m.save(this.tokenId, this.tokenInfo),
                        [2, this.tokenInfo]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }()
      , b = {
        fetch: fetch.bind(self),
        btoa: btoa.bind(self)
    }
      , f = function(e) {
        function t(t, n, r) {
            var a = "string" != typeof n ? n : new g(n,r && r.tokenResponseMapper || function(e) {
                return {
                    token: e,
                    expires: Date.now() + 212400
                }
            }
            ,r && r.tokenId);
            return e.call(this, b, a, t) || this
        }
        return Object(r.__extends)(t, e),
        t
    }(a.d)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return a
    }
    )),
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return i
    }
    )),
    n.d(t, "e", (function() {
        return s
    }
    )),
    n.d(t, "f", (function() {
        return c
    }
    )),
    n.d(t, "c", (function() {
        return l
    }
    )),
    n.d(t, "h", (function() {
        return u
    }
    )),
    n.d(t, "i", (function() {
        return p
    }
    )),
    n.d(t, "j", (function() {
        return m
    }
    )),
    n.d(t, "g", (function() {
        return g
    }
    ));
    var r = n(0);
    function a() {
        var e = Date.now();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16),
            ("x" === t ? n : 7 & n | 8).toString(16)
        }
        ))
    }
    function o(e, t, n) {
        if ("function" != typeof n.value)
            throw new Error("avoidSimultanous must be decorated onto a value method.");
        n.value = i(n.value)
    }
    function i(e) {
        var t = null;
        return function() {
            return t || (t = e.apply(this, arguments).then((function(e) {
                return t = null,
                e
            }
            )).catch((function(e) {
                return t = null,
                Promise.reject(e)
            }
            ))),
            t
        }
    }
    function s(e) {
        var t = ["50", "08", "e1", "40", "e4", "e7"];
        if (e.length > 6)
            throw new Error("Too long realm");
        for (var n = 0; n < e.length; ++n) {
            var r = e.charCodeAt(n).toString(16);
            t[n] = 2 === r.length ? r : "0" + r
        }
        return "ec96b3be-45fc-41d3-b69e-" + t.join("")
    }
    function c(e, t) {
        var n = t ? ["51", "09", "e3", "42", "e6", "e9"] : ["51", "09", "e2", "41", "e5", "e8"];
        if (e.length > 6)
            throw new Error("Too long realm");
        for (var r = 0; r < e.length; ++r) {
            var a = e.charCodeAt(r).toString(16);
            n[r] = 2 === a.length ? a : "0" + a
        }
        return "ec96b3be-45fc-41d3-b69e-" + n.join("")
    }
    function l(e) {
        return Object(r.__awaiter)(this, void 0, void 0, (function() {
            var t, n, a, o, i;
            return Object(r.__generator)(this, (function(r) {
                switch (r.label) {
                case 0:
                    return t = new TextEncoder,
                    n = t.encode(e),
                    o = Uint8Array.bind,
                    [4, crypto.subtle.digest("SHA-256", n)];
                case 1:
                    return a = new (o.apply(Uint8Array, [void 0, r.sent()])),
                    i = 0,
                    [2, "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        var t = a[i++] % 16 | 0;
                        return ("x" === e ? t : 7 & t | 8).toString(16)
                    }
                    ))]
                }
            }
            ))
        }
        ))
    }
    function u(e) {
        return Object(r.__awaiter)(this, void 0, void 0, (function() {
            var t, n, a, o;
            return Object(r.__generator)(this, (function(r) {
                switch (r.label) {
                case 0:
                    return t = new TextEncoder,
                    n = t.encode(e),
                    o = Uint8Array.bind,
                    [4, crypto.subtle.digest("SHA-256", n)];
                case 1:
                    return a = new (o.apply(Uint8Array, [void 0, r.sent(), 0, 16])),
                    [2, (i = a,
                    Array.prototype.map.call(i, (function(e) {
                        return ("00" + e.toString(16)).slice(-2)
                    }
                    )).join(""))]
                }
                var i
            }
            ))
        }
        ))
    }
    var d = {};
    function p(e) {
        var t = e.map((function(e) {
            return d[e]
        }
        ))
          , n = [];
        if (t.forEach((function(t, r) {
            t || n.push(e[r])
        }
        )),
        0 === n.length)
            return t;
        throw Promise.all(n.map((function(e) {
            return u(e).then((function(t) {
                return d[e] = t
            }
            ))
        }
        )))
    }
    function m(e, t) {
        for (var n = e, r = 0, a = 0, o = e.length; a < o; ++a) {
            var i = e[a]
              , s = t(i);
            s !== i && (n === e && (n = e.slice()),
            void 0 === s ? (n.splice(a + r, 1),
            --r) : n[a + r] = s)
        }
        return n
    }
    var h = 0;
    function g() {
        var e = Date.now();
        return h < e ? h = e : h += 100,
        h
    }
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return o
    }
    )),
    n.d(t, "a", (function() {
        return i
    }
    ));
    var r = n(1)
      , a = n(116)
      , o = Object(a.a)("LanguageContext", (function() {
        return r.createContext({
            intl: null
        })
    }
    ))
      , i = Object(a.a)("ChangeLanguageContext", (function() {
        return r.createContext({
            changeLanguage: function(e) {}
        })
    }
    ))
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return c
    }
    ));
    var r = n(0)
      , a = n(14)
      , o = n(20)
      , i = n(7)
      , s = function() {
        function e() {
            this.subscribers = [],
            this.env = null,
            this.version = 1
        }
        return e.prototype.subscribe = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    return this.subscribers.push(e),
                    e(this.env),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.unsubscribe = function(e) {
            this.subscribers = this.subscribers.filter((function(t) {
                return t !== e
            }
            ))
        }
        ,
        e.prototype.notifySubscribers = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e = this;
                return Object(r.__generator)(this, (function(t) {
                    return this.subscribers.forEach((function(t) {
                        return t(e.env)
                    }
                    )),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setNewEnv = function(e, t) {
            var n, a, o;
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var s, c;
                return Object(r.__generator)(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        return this.env !== i.a && (null === (o = null === (a = null === (n = this.env) || void 0 === n ? void 0 : n.icClient) || void 0 === a ? void 0 : a.dispose) || void 0 === o || o.call(a)),
                        s = ++this.version,
                        this.env = {
                            currentUser: e,
                            tutored: !0,
                            complete: !1
                        },
                        this.notifySubscribers(),
                        [4, t().catch((function(t) {
                            return {
                                currentUser: e,
                                tutored: !0,
                                error: t,
                                complete: !1
                            }
                        }
                        ))];
                    case 1:
                        return c = l.sent(),
                        s === this.version && (++this.version,
                        this.env = Object(r.__assign)(Object(r.__assign)({}, c), {
                            tutored: !0
                        }),
                        this.notifySubscribers()),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.restoreOrigEnv = function() {
            var e, t, n;
            this.env !== i.a && (null === (n = null === (t = null === (e = this.env) || void 0 === e ? void 0 : e.icClient) || void 0 === t ? void 0 : t.dispose) || void 0 === n || n.call(t),
            ++this.version,
            this.env = i.a,
            this.notifySubscribers())
        }
        ,
        e
    }();
    o.a.tutorEnv || (o.a.tutorEnv = new s);
    var c = new a.e((function(e) {
        var t = !1
          , n = {
            unsubscribe: function() {
                t = !0,
                o.a.tutorEnv.unsubscribe(r)
            }
        };
        function r(r) {
            t || e(r, null, n)
        }
        return o.a.tutorEnv.subscribe(r),
        n
    }
    ));
    t.a = o.a.tutorEnv
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return r
    }
    )),
    n.d(t, "a", (function() {
        return a
    }
    )),
    n.d(t, "b", (function() {
        return o
    }
    )),
    n.d(t, "d", (function() {
        return i
    }
    )),
    n.d(t, "e", (function() {
        return s
    }
    ));
    var r = ["kedbackend", "EDS", "ksaccount"]
      , a = ["https://www.googleapis.com/auth/calendar.readonly", "https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/script.external_request"]
      , o = ["https://www.googleapis.com/auth/classroom.courses", "https://www.googleapis.com/auth/classroom.profile.emails", "https://www.googleapis.com/auth/classroom.rosters", "https://www.googleapis.com/auth/classroom.coursework.students"]
      , i = ["https://www.googleapis.com/auth/classroom.courses", "https://www.googleapis.com/auth/classroom.coursework.me"]
      , s = ["https://www.googleapis.com/auth/classroom.courses.readonly", "https://www.googleapis.com/auth/classroom.coursework.me.readonly"]
}
, function(e, t, n) {
    "use strict";
    n.d(t, "j", (function() {
        return a.d
    }
    )),
    n.d(t, "g", (function() {
        return a.a
    }
    )),
    n.d(t, "h", (function() {
        return a.b
    }
    )),
    n.d(t, "k", (function() {
        return a.e
    }
    )),
    n.d(t, "l", (function() {
        return a.f
    }
    )),
    n.d(t, "i", (function() {
        return a.c
    }
    )),
    n.d(t, "o", (function() {
        return a.h
    }
    )),
    n.d(t, "p", (function() {
        return a.i
    }
    )),
    n.d(t, "n", (function() {
        return a.g
    }
    )),
    n.d(t, "e", (function() {
        return s
    }
    )),
    n.d(t, "b", (function() {
        return c
    }
    )),
    n.d(t, "m", (function() {
        return l
    }
    )),
    n.d(t, "c", (function() {
        return u
    }
    )),
    n.d(t, "f", (function() {
        return i
    }
    )),
    n.d(t, "d", (function() {
        return p
    }
    )),
    n.d(t, "a", (function() {
        return m
    }
    ));
    var r = n(0)
      , a = n(38)
      , o = n(104)
      , i = function() {
        function e(e, t, n) {
            this.isomorphic = e,
            this.baseUrl = t,
            this.options = n,
            this.numOutstandingOperations = 0,
            this.cache = {},
            this._status = new o.a(this),
            this.fetchOptions = {
                mode: "cors"
            },
            this.authHeader = n.bearer ? "Bearer " + n.bearer : n.username ? "Basic " + e.btoa(n.username + ":" + (n.password || "")) : null,
            this.bearerProvider = n.bearerProvider || null
        }
        return Object.defineProperty(e.prototype, "status", {
            get: function() {
                return this._status
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.suspenseFetch = function(e, t, n, a, o) {
            var i = this
              , s = t + " " + e + " " + JSON.stringify(n) + " " + JSON.stringify(a) + " " + JSON.stringify(o)
              , c = this.cache[s];
            if (c) {
                if ("promise"in c)
                    throw c.promise;
                return c.result
            }
            var l = this.fetch(e, t, n, a, o).then((function(e) {
                return Object(r.__awaiter)(i, void 0, void 0, (function() {
                    var t, n;
                    return Object(r.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return t = e.status,
                            [4, e.text()];
                        case 1:
                            return n = r.sent(),
                            this.cache[s] = {
                                result: {
                                    status: t,
                                    text: function() {
                                        return n
                                    },
                                    json: function() {
                                        return JSON.parse(n)
                                    }
                                }
                            },
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ));
            throw this.cache[s] = {
                promise: l
            },
            l
        }
        ,
        e.prototype.fetch = function(e, t, n, r, a) {
            var o = this;
            return ++this.numOutstandingOperations,
            this._status.dispatch(this),
            this._fetch(e, t, n, r, a).then((function(e) {
                return --o.numOutstandingOperations,
                o._status.dispatch(o),
                e
            }
            )).catch((function(e) {
                return --o.numOutstandingOperations,
                o._status.dispatch(o),
                Promise.reject(e)
            }
            ))
        }
        ,
        e.prototype._fetch = function(e, t, n, o, i) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var s, c, l, u, d, p, m, h, g, b, f;
                return Object(r.__generator)(this, (function(v) {
                    switch (v.label) {
                    case 0:
                        return i && "no-cache" === i.cache && (o = Object(r.__assign)(Object(r.__assign)({}, o), {
                            nocache: Object(a.d)()
                        })),
                        s = o && Object.keys(o).filter((function(e) {
                            return void 0 !== o[e]
                        }
                        )).map((function(e) {
                            return encodeURIComponent(e) + "=" + encodeURIComponent(o[e])
                        }
                        )).join("&"),
                        l = (c = this).authHeader,
                        u = c.tokenInfo,
                        d = c.bearerProvider,
                        l || u || !d ? [3, 2] : (p = this,
                        [4, d.getBearer()]);
                    case 1:
                        p.tokenInfo = u = v.sent(),
                        v.label = 2;
                    case 2:
                        return u ? u.expires < Date.now() ? (console.log("Token expired. Refresh it:"),
                        m = this,
                        [4, d.refreshBearer()]) : [3, 4] : [3, 5];
                    case 3:
                        m.tokenInfo = u = v.sent(),
                        v.label = 4;
                    case 4:
                        l = "Bearer " + u.token,
                        v.label = 5;
                    case 5:
                        return l && (n.Authorization = l),
                        h = this.baseUrl + e + (s ? "?" + s : ""),
                        [4, this.isomorphic.fetch(h, Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({}, this.fetchOptions), {
                            headers: n,
                            method: t
                        }), i))];
                    case 6:
                        return 401 == (g = v.sent()).status && this.bearerProvider ? (b = g.headers.get("www-authenticate"),
                        console.log("Got " + g.status + " from " + (this.baseUrl + e)),
                        b && /Bearer/i.test(b) ? (f = this,
                        [4, this.bearerProvider.refreshBearer()]) : [3, 9]) : [3, 9];
                    case 7:
                        return f.tokenInfo = v.sent(),
                        n.Authorization = "Bearer " + this.tokenInfo.token,
                        [4, this.isomorphic.fetch(h, Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({}, this.fetchOptions), {
                            headers: n,
                            method: t
                        }), i))];
                    case 8:
                        g = v.sent(),
                        v.label = 9;
                    case 9:
                        return [2, g]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.get = function(e, t, n) {
            return this.fetch(e, "GET", {
                Accept: "application/json; text/plain"
            }, t, n)
        }
        ,
        e.prototype.suspenseGet = function(e, t, n) {
            return this.suspenseFetch(e, "GET", {
                Accept: "application/json; text/plain"
            }, t, n)
        }
        ,
        e.prototype.post = function(e, t, n, a) {
            return this.fetch(e, "POST", {
                "Content-Type": "application/json",
                Accept: "application/json"
            }, a, Object(r.__assign)(Object(r.__assign)({}, n), {
                body: JSON.stringify(t)
            }))
        }
        ,
        e.prototype.delete = function(e, t, n, a) {
            return this.fetch(e, "DELETE", {
                Accept: "application/json; text/plain"
            }, t, Object(r.__assign)(Object(r.__assign)({}, a), {
                body: n
            }))
        }
        ,
        e
    }()
      , s = function() {
        function e(e, t, n, r, o, s, c) {
            this.isomorphic = e,
            this.storage = t,
            this.tokenId = n,
            this.clientId = r,
            this.clientSecret = o,
            this.tokenUrl = s,
            this.tokenQuery = c,
            this.tokenInfo = {
                token: null,
                expires: 0
            },
            this.client = new i(e,"",{
                username: this.clientId,
                password: this.clientSecret
            }),
            this.getBearer = Object(a.b)(this.getBearer.bind(this)),
            this.refreshBearer = Object(a.b)(this.refreshBearer.bind(this))
        }
        return e.prototype.getBearer = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n, a;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        if (e = this.tokenInfo,
                        t = e.token,
                        n = e.expires,
                        t && n >= Date.now())
                            return [2, this.tokenInfo];
                        r.label = 1;
                    case 1:
                        return r.trys.push([1, 4, , 6]),
                        a = this,
                        [4, this.storage.load(this.clientId + "/" + this.tokenId)];
                    case 2:
                        return a.tokenInfo = r.sent(),
                        this.tokenInfo.token && this.tokenInfo.expires >= Date.now() ? [2, this.tokenInfo] : [4, this.refreshBearer()];
                    case 3:
                        return r.sent(),
                        [2, this.tokenInfo];
                    case 4:
                        return r.sent(),
                        [4, this.refreshBearer()];
                    case 5:
                        return r.sent(),
                        [2, this.tokenInfo];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.refreshBearer = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n, a;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        t = 0,
                        r.label = 1;
                    case 1:
                        return t < 6 ? (console.log("Retrieving token for " + this.tokenId),
                        [4, this.client.get(this.tokenUrl, this.tokenQuery, {
                            cache: "reload"
                        })]) : [3, 5];
                    case 2:
                        return 200 !== (e = r.sent()).status ? (console.warn("Got " + e.status + " " + e.statusText),
                        [3, 4]) : (n = this,
                        a = {},
                        [4, e.text()]);
                    case 3:
                        return n.tokenInfo = (a.token = r.sent(),
                        a.expires = Date.now() + 354e4,
                        a),
                        console.log("Got token for " + this.tokenId + ": " + JSON.stringify(this.tokenInfo)),
                        this.storage.save(this.clientId + "/" + this.tokenId, this.tokenInfo),
                        [2, this.tokenInfo];
                    case 4:
                        return ++t,
                        [3, 1];
                    case 5:
                        throw new Error("Failed to retrieve token for " + JSON.stringify(this.tokenId))
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }()
      , c = function() {
        function e(e, t, n) {
            this.accessClaimType = e,
            this.accessClaimValue = t,
            this.right = n
        }
        return e.fromString = function(t) {
            if (!t)
                return null;
            var n = t.split(":");
            if (n.length < 3)
                throw new Error("Invalid access string: " + t);
            var r = e.unescape(n[0])
              , a = e.unescape(n[1])
              , o = n[2];
            if ("R" !== o && "L" !== o && "W" !== o && "S" !== o)
                throw new Error("Invalid access string: " + t);
            return new e(r,a,o)
        }
        ,
        e.escape = function(e) {
            return e.replace(/\%/g, "%25").replace(/\:/g, "%3A")
        }
        ,
        e.unescape = function(e) {
            return e.replace(/\%3A/g, ":").replace(/\%25/g, "%")
        }
        ,
        e.prototype.toString = function() {
            return e.escape(this.accessClaimType) + ":" + e.escape(this.accessClaimValue) + ":" + this.right
        }
        ,
        e.fromStringArray = function(t) {
            return t.map((function(t) {
                return e.fromString(t)
            }
            )).filter((function(e) {
                return e
            }
            ))
        }
        ,
        e.toStringArray = function(e) {
            return e.map((function(e) {
                return e.toString()
            }
            ))
        }
        ,
        e
    }();
    function l(e, t, n) {
        return !!t.some((function(e) {
            return "role" === e.type && "ADMIN" === e.value
        }
        )) || e.some((function(e) {
            return t.some((function(t) {
                return e.accessClaimType === t.type && e.accessClaimValue === t.value && ("R" === e.right && "R" === n || "L" === e.right && ["R", "L"].indexOf(n) >= 0 || "W" === e.right && ["R", "L", "W"].indexOf(n) >= 0 || "S" === e.right)
            }
            ))
        }
        ))
    }
    var u = function(e) {
        function t(t, n) {
            var r = e.call(this, "HTTP" + t + " " + n) || this;
            return r.code = t,
            r.message = n,
            r.name = "http" + t,
            r.message = "HTTP" + t + " " + n,
            r
        }
        return Object(r.__extends)(t, e),
        t
    }(Error)
      , d = n(50)
      , p = function() {
        function e(e, t, n) {
            this.http = new i(e,n,{
                bearerProvider: t
            })
        }
        return e.prototype.getMyClaims = function(e, t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var n, a, o;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.http.get("me/claims/" + (e || ""), null, t)];
                    case 1:
                        return 200 == (n = r.sent()).status ? [3, 3] : (a = u.bind,
                        o = [void 0, n.status],
                        [4, n.text()]);
                    case 2:
                        throw new (a.apply(u, o.concat([r.sent()])));
                    case 3:
                        return [4, n.json()];
                    case 4:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.get = function(e, t, n, a) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var o, i, s;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.http.get(e + "/" + t, n, a)];
                    case 1:
                        return 200 == (o = r.sent()).status ? [3, 3] : (i = u.bind,
                        s = [void 0, o.status],
                        [4, o.text()]);
                    case 2:
                        throw new (i.apply(u, s.concat([r.sent()])));
                    case 3:
                        return [4, o.json()];
                    case 4:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.list = function(e, t, n) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var a, o, i, s, c, l;
                return Object(r.__generator)(this, (function(p) {
                    switch (p.label) {
                    case 0:
                        return (a = Object(r.__assign)({}, t)).hasEdgesFrom && 0 === a.hasEdgesFrom.length ? (console.debug("A query with empty 'hasEdgesFrom' was requested. No idea to fetch from server - result will be empty array."),
                        [2, []]) : a.hasEdgesTo && 0 === a.hasEdgesTo.length ? (console.debug("A query with empty 'hasEdgesTo' was requested. No idea to fetch from server - result will be empty array."),
                        [2, []]) : a.ids && 0 === a.ids.length ? (console.debug("A query with empty 'ids' was requested. No idea to fetch from server - result will be empty array."),
                        [2, []]) : a.names && 0 === a.names.length ? (console.debug("A query with empty 'names' was requested. No idea to fetch from server - result will be empty array."),
                        [2, []]) : null != a.tags && "" + a.tags == "" ? (console.debug("A query with empty 'tags' was requested. No idea to fetch from server - result will be empty array."),
                        [2, []]) : a.from && isNaN(a.from) ? (console.debug("A query with non-number value for 'from' is not permitted. Returning empty data."),
                        [2, []]) : a.to && isNaN(a.to) ? (console.debug("A query with non-number value for 'to' is not permitted. Returning empty data."),
                        [2, []]) : ("undefined" != typeof location && location.search.includes("dontUseSP") || (o = d.a[e],
                        i = null,
                        a.include && o && (i = [].concat(a.include).filter((function(e) {
                            return "acl" !== e
                        }
                        )).map((function(e) {
                            return o.relationships[e]
                        }
                        ))),
                        a.names || a.from || a.to || !a.tags && 1 !== [a.hasEdgesFrom, a.hasEdgesTo, a.ids].filter((function(e) {
                            return !!e
                        }
                        )).length || !o || !o.isPublic || i && !i.every((function(e) {
                            return d.a[e] && d.a[e].isPublic
                        }
                        )) || (a.flags = (a.flags || []).concat("useSP"))),
                        t && t.mutationsOnEmpty && (a.mutationsOnEmpty = JSON.stringify(t.mutationsOnEmpty)),
                        [4, this.http.get("" + e, a, n)]);
                    case 1:
                        return 200 == (s = p.sent()).status ? [3, 3] : (c = u.bind,
                        l = [void 0, s.status],
                        [4, s.text()]);
                    case 2:
                        throw new (c.apply(u, l.concat([p.sent()])));
                    case 3:
                        return [4, s.json()];
                    case 4:
                        return [2, p.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.batch = function(e, t, n) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var a, o, i;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return e = e.slice().sort((function(e, t) {
                            return "add" === e.op ? -1 : "add" === t.op || "delete" === e.op ? 1 : "delete" === t.op ? -1 : 0
                        }
                        )),
                        [4, this.http.post("batch", e, t, n)];
                    case 1:
                        return 200 == (a = r.sent()).status ? [3, 3] : (o = u.bind,
                        i = [void 0, a.status],
                        [4, a.text()]);
                    case 2:
                        throw new (o.apply(u, i.concat([r.sent()])));
                    case 3:
                        return [4, a.json()];
                    case 4:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.do = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return Object(r.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return t = new m,
                        e(t),
                        [4, this.batch(t.mutationRequests)];
                    case 1:
                        return [2, n.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.deleteRealm = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n, a;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.http.delete("realms/" + e)];
                    case 1:
                        return 200 == (t = r.sent()).status ? [3, 3] : (n = u.bind,
                        a = [void 0, t.status],
                        [4, t.text()]);
                    case 2:
                        throw new (n.apply(u, a.concat([r.sent()])));
                    case 3:
                        return [4, t.json()];
                    case 4:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.add = function(e, t, n) {
            return this.do((function(n) {
                return n.add(e, t)
            }
            ))
        }
        ,
        e.prototype.put = function(e, t) {
            return this.do((function(n) {
                return n.put(e, t)
            }
            ))
        }
        ,
        e.prototype.update = function(e, t, n, r) {
            return this.do((function(a) {
                return a.update(e, t, n, r)
            }
            ))
        }
        ,
        e.prototype.merge = function(e, t) {
            return this.do((function(n) {
                return n.merge(e, t)
            }
            ))
        }
        ,
        e.prototype.clearBranch = function(e) {
            return this.do((function(t) {
                return t.clearBranch(e)
            }
            ))
        }
        ,
        e.prototype.delete = function(e, t) {
            return this.do((function(n) {
                return n.delete(e, t)
            }
            ))
        }
        ,
        e.prototype.share = function(e, t, n) {
            return this.do((function(r) {
                return r.share(e, t, n)
            }
            ))
        }
        ,
        e.prototype.unshare = function(e, t, n) {
            return this.do((function(r) {
                return r.unshare(e, t, n)
            }
            ))
        }
        ,
        e.prototype.link = function(e, t, n, r, a) {
            return this.do((function(o) {
                return o.link(e, t, n, r, a)
            }
            ))
        }
        ,
        e.prototype.link2 = function(e, t, n, r, a) {
            return this.do((function(o) {
                return o.link2(e, t, r, n, a)
            }
            ))
        }
        ,
        e.prototype.unlink = function(e, t, n, r, a) {
            return this.do((function(o) {
                return o.unlink(e, t, n, r, a)
            }
            ))
        }
        ,
        e.prototype.unlink2 = function(e, t, n, r, a) {
            return this.do((function(o) {
                return o.unlink2(e, t, r, n, a)
            }
            ))
        }
        ,
        e.prototype.undoLink = function(e, t, n, r, a) {
            return this.do((function(o) {
                return o.undoLink(e, t, r, n, a)
            }
            ))
        }
        ,
        e
    }()
      , m = function() {
        function e() {
            this.mutationRequests = []
        }
        return e.prototype.add = function(e, t, n) {
            return this.mutationRequests.push({
                op: "add",
                table: e,
                doc: t,
                branchId: n
            }),
            this
        }
        ,
        e.prototype.put = function(e, t) {
            return delete (t = Object(r.__assign)({}, t)).acl,
            this.mutationRequests.push({
                op: "put",
                table: e,
                doc: t
            }),
            this
        }
        ,
        e.prototype.update = function(e, t, n, a) {
            n = Object(r.__assign)({}, n),
            this.mutationRequests.push({
                op: "update",
                table: e,
                id: t,
                deltaDoc: n,
                branchId: a
            })
        }
        ,
        e.prototype.merge = function(e, t, n, r) {
            this.mutationRequests.push({
                op: "merge",
                branchId: e,
                targetBranchId: t,
                tagToMerge: n,
                track: r
            })
        }
        ,
        e.prototype.clearBranch = function(e) {
            this.mutationRequests.push({
                op: "clear-branch",
                branchId: e
            })
        }
        ,
        e.prototype.delete = function(e, t) {
            return this.mutationRequests.push({
                op: "delete",
                table: e,
                id: t
            }),
            this
        }
        ,
        e.prototype.share = function(e, t, n) {
            return this.mutationRequests.push({
                op: "share",
                table: e,
                id: t,
                acl: n
            }),
            this
        }
        ,
        e.prototype.unshare = function(e, t, n) {
            return this.mutationRequests.push({
                op: "unshare",
                table: e,
                id: t,
                acl: n
            }),
            this
        }
        ,
        e.prototype.link = function(e, t, n, r, a) {
            return this.mutationRequests.push({
                op: "link",
                sourceTable: e,
                sourceId: t,
                targetTable: n,
                targetId: r,
                label: a
            }),
            this
        }
        ,
        e.prototype.link2 = function(e, t, n, r, a) {
            this.mutationRequests.push({
                op: "link",
                sourceTable: e,
                sourceId: t,
                targetId: r,
                label: n,
                branchId: a
            })
        }
        ,
        e.prototype.unlink = function(e, t, n, r, a) {
            return this.mutationRequests.push({
                op: "unlink",
                sourceTable: e,
                sourceId: t,
                targetTable: n,
                targetId: r,
                label: a
            }),
            this
        }
        ,
        e.prototype.unlink2 = function(e, t, n, r, a) {
            return this.mutationRequests.push({
                op: "unlink",
                sourceTable: e,
                sourceId: t,
                targetId: r,
                label: n,
                branchId: a
            }),
            this
        }
        ,
        e.prototype.undoLink = function(e, t, n, r, a) {
            this.mutationRequests.push({
                op: "undo-link",
                sourceTable: e,
                sourceId: t,
                targetId: r,
                label: n,
                branchId: a
            })
        }
        ,
        e
    }()
}
, function(e) {
    e.exports = JSON.parse('{"a":{"branches":{"accessClaimTypes":["role","schoolRole","email"],"sharingAccessPerRole":{"USER":{"email":["*"],"schoolRole":["*"],"role":["*"]}},"relationships":{"parents":"branches","approvedChildren":"branches"},"isPublic":true},"global":{"accessClaimTypes":["role","schoolRole"],"relationships":{"courseInstances":"courseInstances","strategyCategories":"strategyCategories"},"isPublic":true},"emailTemplates":{"accessClaimTypes":["role","schoolRole"],"relationships":{},"isPublic":false},"courseInstances":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"USER":{"schoolRole":["*"],"role":["*"]}},"defaultAcl":["role:USER:R","schoolRole:{school}/EMPLOYEE:S"],"relationships":{"abilities":"abilities","centralContent":"central-content","knowledgeRequirements":"knowledge-requirements","blocks":"courseBlocks","tabs":"courseTabs","planningToolTerms":"planningToolTerms"},"isPublic":true},"courseBlocks":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"USER":{"schoolRole":["*"],"role":["*"]}},"defaultAcl":["role:USER:R","schoolRole:{school}/EMPLOYEE:S"],"relationships":{"abilities":"abilities","centralContent":"central-content","knowledgeRequirements":"knowledge-requirements","tabs":"courseTabs","tasks":"tasks"},"isPublic":true},"courseTabs":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"USER":{"schoolRole":["*"],"role":["*"]}},"defaultAcl":["role:USER:R","schoolRole:{school}/EMPLOYEE:S"],"relationships":{"abilities":"abilities","centralContent":"central-content","knowledgeRequirements":"knowledge-requirements","contents":"courseContents"},"isPublic":true},"courseContents":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"USER":{"schoolRole":["*"],"role":["*"]}},"defaultAcl":["role:USER:R","schoolRole:{school}/EMPLOYEE:S"],"relationships":{"tasks":"tasks","rubrics":"rubrics"},"isPublic":true,"conflictProps":["html"]},"weekplans":{"accessClaimTypes":["email","tutorFor"],"sharingAccessPerRole":{"USER":{"email":["{email}:*","{tutorFor}:*"],"tutorFor":["{tutorFor}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"weekplans-ks":{"accessClaimTypes":["email","tutorFor"],"sharingAccessPerRole":{"USER":{"email":["{email}:*","{tutorFor}:*"],"tutorFor":["{tutorFor}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"usertasks":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{"task":"tasks","course":"courses"},"isPublic":false},"usertasks2":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"conversations":{"accessClaimTypes":["school","email"],"sharingAccessPerRole":{"USER":{"email":["*"],"school":["{school}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{"messages":"messages"},"isPublic":false},"messages":{"accessClaimTypes":["school","email"],"sharingAccessPerRole":{"USER":{"email":["*:*"],"school":["{school}:*"]}},"defaultAcl":["email:{email}:*"],"relationships":{},"isPublic":false},"unreadMessages":{"accessClaimTypes":["school","email"],"sharingAccessPerRole":{"USER":{"email":["*:*"],"school":["{school}:*"]}},"defaultAcl":["email:{email}:*"],"relationships":{},"isPublic":false},"calendarEvents":{"accessClaimTypes":["email","schoolRole"],"sharingAccessPerRole":{"STAFF":{"schoolRole":["{school}/STAFF:*","{school}/USER:*"],"email":["*:*"]}},"defaultAcl":["schoolRole:{school}/STAFF:W"],"relationships":{"workshopBookings":"workshopBookings","studentAbsences":"eventWorkshopAbsences"},"isPublic":false},"workshopBookings":{"accessClaimTypes":["email","school","schoolRole"],"sharingAccessPerRole":{"USER":{"schoolRole":["{school}/EMPLOYEE:*"],"email":["{email}:*"],"school":["{school}:R"]}},"defaultAcl":["schoolRole:{school}/EMPLOYEE:*"],"relationships":{},"isPublic":false},"eventWorkshopAbsences":{"accessClaimTypes":["role","email","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"schoolRole":["{school}/EMPLOYEE:S"],"email":["*:R"]}},"defaultAcl":["schoolRole:{school}/EMPLOYEE:S"],"relationships":{},"isPublic":false},"userhiddencourses":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"usercalendarvisibility":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"userPrefs":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"subjects":{"relationships":{"courseTemplates":"courses","abilities":"abilities"},"isPublic":true},"schools":{"accessClaimTypes":["role","schoolRole"],"relationships":{"courses":"courses","activeCourses":"courses"},"isPublic":true},"courses":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"schoolRole":["{school}/EMPLOYEE:*"],"role":["USER:R"]}},"defaultAcl":["schoolRole:{school}/EMPLOYEE:*"],"relationships":{"templateChain":"courses","centralContent":"central-content","knowledgeRequirements":"knowledge-requirements","abilities":"abilities","images":"images","tasks":"tasks"},"isPublic":true},"tasks":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"schoolRole":["{school}/EMPLOYEE:*"],"role":["USER:R"]}},"defaultAcl":["schoolRole:{school}/EMPLOYEE:S","role:USER:R"],"relationships":{"knowledgeRequirements":"knowledge-requirements","centralContent":"central-content","abilities":"abilities","contents":"courseContents","learningResources":"learningResources"},"isPublic":true,"conflictProps":["html","content","description","workingProcedure","assessments","embeddedHtml","name"]},"learningResources":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"schoolRole":["{school}/EMPLOYEE:*"],"role":["USER:R"]}},"relationships":{},"defaultAcl":["schoolRole:{school}/EMPLOYEE:S","role:USER:R"],"isPublic":true,"conflictProps":["content"]},"images":{"accessClaimTypes":["role","schoolRole","email"],"sharingAccessPerRole":{"EMPLOYEE":{"schoolRole":["{school}/EMPLOYEE:*"],"role":["USER:R"]},"USER":{"email":["{email}:*"]}},"relationships":{},"isPublic":true},"central-content":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"relationships":{},"isPublic":true},"knowledge-requirements":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"relationships":{},"isPublic":true},"abilities":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"relationships":{},"isPublic":true},"seenStudentAssignments":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":true},"notes":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"workPaths":{"accessClaimTypes":["role","email","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"email":["*:*"],"role":["USER:R"],"schoolRole":["{school}/EMPLOYEE:*"]}},"defaultAcl":["email:{email}:S","role:USER:R"],"relationships":{"tasks":"tasks","groups":"userGroups"},"isPublic":true},"planningToolTerms":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"role":["USER:R"],"schoolRole":["{school}/EMPLOYEE:*"]}},"defaultAcl":["role:USER:R","schoolRole:{school}/EMPLOYEE:*"],"relationships":{"communicationGroups":"communicationGroups"},"isPublic":true},"strategyCategories":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"isPublic":true,"relationships":{"strategies":"strategies","subCategories":"strategyCategories"}},"strategies":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"isPublic":true,"relationships":{"strategyTags":"strategyTags","contents":"strategyContents"}},"strategyContents":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"relationships":{},"isPublic":true},"strategyTags":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"relationships":{},"isPublic":true},"userFavStrats":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"userStratRecos":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"userGroups":{"accessClaimTypes":["email","baseGroup","tuitionGroup","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"email":["*:*"],"baseGroup":["*:R"],"tuitionGroup":["*:R"],"schoolRole":["{school}/EMPLOYEE:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"communicationGroups":{"accessClaimTypes":["email","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"email":["*:*"],"schoolRole":["{school}/EMPLOYEE:*"]}},"defaultAcl":["schoolRole:{school}/EMPLOYEE:S"],"relationships":{},"isPublic":false},"rubrics":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"schoolRole":["{school}/EMPLOYEE:*"],"role":["USER:R"]}},"defaultAcl":["schoolRole:{school}/EMPLOYEE:S","role:USER:R"],"relationships":{},"isPublic":true}}}')
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return g
    }
    )),
    n.d(t, "b", (function() {
        return b
    }
    ));
    var r = n(0)
      , a = n(264)
      , o = (n(276),
    n(280),
    n(281),
    n(282),
    n(283),
    n(287),
    n(288),
    n(289),
    n(94))
      , i = n(128)
      , s = n(166)
      , c = n(88)
      , l = n(250)
      , u = n(251)
      , d = n(252)
      , p = n(1)
      , m = n(10)
      , h = n(41);
    s.a.options.weekStartsOn = 1,
    s.a.options.firstWeekContainsDate = 1,
    o.a.options.weekStartsOn = 6,
    o.a.options.firstWeekContainsDate = 1,
    Object(c.registerLocale)("sv", i.a),
    Object(c.registerLocale)("sv_SE", i.a),
    Object(c.registerLocale)("sv-SE", i.a),
    Object(c.registerLocale)("ar", o.a),
    Object(c.registerLocale)("ar_SA", o.a),
    Object(c.registerLocale)("ar-SA", o.a);
    var g = m.b.KED_LOCALE.startsWith("ar") ? o.a : "en-IN" === m.b.KED_LOCALE || "en" === m.b.KED_LOCALE && "en_nin" == m.b.KED_SCHOOL_LOCALE ? s.a : i.a
      , b = function(e, t) {
        return function(n) {
            function o(e) {
                var r = n.call(this, e) || this;
                return r.messages = {
                    sv: l,
                    en: u,
                    "ar-SA": d
                },
                r.state = {
                    intlLocale: t ? "en" : "ar" === m.b.KED_LOCALE ? "ar-SA" : m.b.KED_LOCALE
                },
                r
            }
            return Object(r.__extends)(o, n),
            o.prototype.setLocale = function(e) {
                this.setState({
                    intlLocale: "ar" === e ? "ar-SA" : e
                })
            }
            ,
            o.prototype.render = function() {
                return p.createElement(h.a.Provider, {
                    value: {
                        changeLanguage: this.setLocale.bind(this)
                    }
                }, p.createElement(a.a, {
                    locale: this.state.intlLocale,
                    key: this.state.intlLocale,
                    messages: this.messages[this.state.intlLocale]
                }, p.createElement(e, Object(r.__assign)({}, this.props))))
            }
            ,
            o
        }(p.Component)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return c
    }
    )),
    n.d(t, "c", (function() {
        return l
    }
    )),
    n.d(t, "a", (function() {
        return u
    }
    ));
    var r = n(0)
      , a = n(130)
      , o = n(14)
      , i = n(1)
      , s = n.n(i);
    function c(e) {
        return u(e, !0)
    }
    function l(e, t) {
        void 0 === t && (t = s.a.createElement(a.b, null));
        var n = u(e);
        return function(e) {
            return s.a.createElement(i.Suspense, {
                fallback: t
            }, s.a.createElement(n, Object(r.__assign)({}, e)))
        }
    }
    function u(e, t) {
        return function(n) {
            var a = Object(r.__read)(Object(i.useState)(Object.create(null)), 2)
              , s = (a[0],
            a[1])
              , c = Object(r.__read)(Object(i.useState)(null), 2)
              , l = c[0]
              , u = c[1]
              , d = [];
            if (l && !t)
                throw l;
            Object(i.useEffect)((function() {
                var e = d.map((function(e) {
                    var t = Object(r.__read)(e, 3)
                      , n = t[0]
                      , a = t[1]
                      , o = t[2]
                      , i = !!a
                      , c = n.subscribe((function(e, t) {
                        t ? u(t) : i || e !== o && (u(null),
                        s(Object.create(null))),
                        o = e
                    }
                    ));
                    return i = !1,
                    c
                }
                ));
                return function() {
                    return e.forEach((function(e) {
                        return e.unsubscribe()
                    }
                    ))
                }
            }
            ));
            var p = o.a.current;
            try {
                return o.a.current = {
                    observables: d,
                    prerender: !!t
                },
                e(n)
            } finally {
                o.a.current = p
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return o
        }
        ));
        var r = {
            current: null,
            get isLoading() {
                return r.current.observables.some((function(e) {
                    return e[0].isLoading
                }
                ))
            },
            get error() {
                return r.current.error
            }
        }
          , a = "undefined" == typeof self ? void 0 === e ? globalThis : e : self;
        a.KEDObservableContext || (a.KEDObservableContext = r);
        var o = a.KEDObservableContext
    }
    ).call(this, n(99))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    }
    )),
    n.d(t, "f", (function() {
        return d
    }
    )),
    n.d(t, "e", (function() {
        return p
    }
    )),
    n.d(t, "d", (function() {
        return m
    }
    )),
    n.d(t, "b", (function() {
        return h
    }
    )),
    n.d(t, "c", (function() {
        return g
    }
    ));
    var r = n(0)
      , a = n(261)
      , o = n(64)
      , i = n(13)
      , s = n(34)
      , c = n(12)
      , l = n(56);
    function u(e) {
        return Object(a.a)(Object(o.default)(e, 23), 3).valueOf()
    }
    function d(e, t, n) {
        var r = e.dateTime
          , a = e.deletedWeek
          , o = e.validWeeks
          , i = Object(s.g)(t)
          , c = i.year
          , u = i.week;
        return r >= Object(l.a)(c, u).notBefore && (!a || a > t) && (t > n ? o.includes(t) : o.some((function(e) {
            return e <= t
        }
        )))
    }
    function p(e, t) {
        return t.filter((function(t) {
            return function(e, t) {
                var n, r;
                if (e.task && e.course)
                    return e.task.id === t.taskId && e.course.id === t.courseId;
                if (e.courseInfo && e.task) {
                    if (!t.courseInfo)
                        return !1;
                    var a = 2 === t.v ? t.taskId : null === (r = null === (n = t.task) || void 0 === n ? void 0 : n[0]) || void 0 === r ? void 0 : r.id;
                    return e.courseInfo.course === t.courseInfo.course && e.courseInfo.school === t.courseInfo.school && e.task.id === a
                }
                return e.url === t.url
            }(e, t)
        }
        ))
    }
    function m(e) {
        var t = e.step
          , n = e.tabName
          , r = e.name
          , a = e.courseName;
        return a ? t ? a.toLowerCase() + ":" + t : n ? a.toLowerCase() + ":" + n.toLowerCase().replace(/\s/g, "") : r ? a.toLowerCase() + ":" + r.toLowerCase() : "" : ""
    }
    function h(e) {
        var t = []
          , n = [];
        return e.forEach((function(e) {
            var a = Object(r.__read)(e.name.split(":"), 2)
              , o = a[0]
              , i = a[1];
            if (o && i) {
                var s = i;
                isNaN(Number(s)) ? n.push({
                    course: o,
                    tag: s,
                    fullTag: e
                }) : t.push({
                    course: o,
                    tag: Number(s),
                    fullTag: e
                })
            }
        }
        )),
        {
            stepCourses: t.sort(Object(c.i)("tag")).map((function(e) {
                return Object(r.__assign)(Object(r.__assign)({}, e), {
                    tag: e.tag.toString()
                })
            }
            )),
            themeCourses: n
        }
    }
    function g(e) {
        return Object(r.__awaiter)(this, void 0, void 0, (function() {
            var t, n;
            return Object(r.__generator)(this, (function(r) {
                switch (r.label) {
                case 0:
                    return (t = m(e)) ? [4, Object(i.i)(t)] : [3, 2];
                case 1:
                    return n = r.sent(),
                    [3, 3];
                case 2:
                    n = null,
                    r.label = 3;
                case 3:
                    return [2, n]
                }
            }
            ))
        }
        ))
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return k
    }
    )),
    n.d(t, "d", (function() {
        return w
    }
    )),
    n.d(t, "h", (function() {
        return y
    }
    )),
    n.d(t, "c", (function() {
        return _
    }
    )),
    n.d(t, "g", (function() {
        return O
    }
    )),
    n.d(t, "b", (function() {
        return T
    }
    )),
    n.d(t, "e", (function() {
        return j
    }
    )),
    n.d(t, "f", (function() {
        return E
    }
    ));
    var r = n(10)
      , a = n(31)
      , o = n(196)
      , i = n(122)
      , s = n(46)
      , c = (n(64),
    n(260),
    n(243),
    n(113))
      , l = n(195)
      , u = (n(129),
    n(167),
    n(378))
      , d = n(372)
      , p = n(373)
      , m = n(72)
      , h = n(379)
      , g = n(247)
      , b = n(380)
      , f = n(374)
      , v = n(51);
    function k(e, t) {
        var n = Object(a.default)(Object(o.a)(new Date(e,1,1), t));
        return {
            year: e,
            week: t,
            notBefore: Object(i.default)(n, 2).getTime(),
            notAfter: Object(s.default)(n, 5).getTime()
        }
    }
    function w(e) {
        return "sv" === r.a.KED_LOCALE ? Object(c.default)(e) : Object(l.a)(e, {
            locale: v.a
        })
    }
    function y(e) {
        return "sv" === r.a.KED_LOCALE ? Object(u.a)(e) : Object(d.a)(e, {
            locale: v.a
        })
    }
    function _(e) {
        return Object(a.default)(e, {
            locale: v.a
        })
    }
    function O(e) {
        return Object(p.a)(e) ? Object(m.default)(e) : Object(m.default)(Object(h.a)(e))
    }
    function T(e) {
        return Object(g.default)(e, {
            locale: v.a
        })
    }
    function j() {
        var e = Object(b.a)(new Date);
        return [0, 1, 2, 3, 4].map((function(t) {
            return new Intl.DateTimeFormat(v.a.code,{
                weekday: "long"
            }).format(Object(s.default)(e, t))
        }
        ))
    }
    function E(e, t) {
        var n = Object(s.default)(Object(a.default)(e), 3)
          , r = Object(s.default)(Object(a.default)(t), 3);
        return Object(f.a)({
            start: n,
            end: r
        }, {
            locale: v.a
        })
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = n(14)
      , a = window._profileLinkOpenState || (window._profileLinkOpenState = new r.b(!1))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }
    )),
    n.d(t, "c", (function() {
        return s
    }
    )),
    n.d(t, "b", (function() {
        return c
    }
    ));
    var r = n(0)
      , a = n(14)
      , o = {
        visible: !1,
        duration: 0,
        stop: 0,
        paused: !0,
        position: "translate(45vw, 230px)",
        elapsed: 0,
        clockwise: !0
    }
      , i = new a.b(function() {
        var e = localStorage.getItem("ked-timer-state");
        if (e) {
            var t = e && JSON.parse(e);
            return n = t,
            Date.now() - n.stop > 36e5 ? Object(r.__assign)(Object(r.__assign)({}, t), {
                stop: o.stop,
                paused: o.paused,
                elapsed: o.elapsed
            }) : t
        }
        return o;
        var n
    }());
    function s(e) {
        var t = Object(r.__assign)(Object(r.__assign)({}, i.value), e);
        i.dispatch(t),
        localStorage.setItem("ked-timer-state", JSON.stringify(t))
    }
    function c(e) {
        var t = i.value
          , n = t.visible
          , a = t.duration
          , c = t.clockwise;
        s(Object(r.__assign)(Object(r.__assign)({}, o), {
            clockwise: c,
            duration: a,
            visible: null == e ? !n : e
        }))
    }
    i.log("timerState"),
    window.addEventListener("storage", (function(e) {
        if ("ked-timer-state" === e.key) {
            var t = JSON.parse(e.newValue);
            i.dispatch(t)
        }
    }
    ))
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return U
    }
    )),
    n.d(t, "c", (function() {
        return f
    }
    )),
    n.d(t, "a", (function() {
        return v
    }
    )),
    n.d(t, "d", (function() {
        return y
    }
    )),
    n.d(t, "g", (function() {
        return T
    }
    )),
    n.d(t, "e", (function() {
        return M
    }
    )),
    n.d(t, "f", (function() {
        return s
    }
    ));
    var r = n(0)
      , a = n(49)
      , o = function() {
        function e(e, t) {
            this.subscriber = e,
            this.collection = t
        }
        return e.prototype.notifySubscriber = function(e, t) {
            try {
                t ? this.subscriber([], t, this) : e !== this.lastNotifiedData && (this.lastNotifiedData = e,
                this.subscriber(e, t, this))
            } catch (e) {
                try {
                    this.subscriber([], e, this)
                } catch (t) {
                    console.error("Error while notifying KedBackendSubscriber:", t, "originally notified error:", e)
                }
            }
        }
        ,
        e.prototype.unsubscribe = function() {
            this.collection.unsubscribe(this)
        }
        ,
        e
    }()
      , i = n(50);
    function s(e, t) {
        return i.a[e].relationships[t]
    }
    function c(e, t) {
        var n = u(e);
        return t.filter(n)
    }
    function l(e, t) {
        return function(n) {
            return e(n) && t(n)
        }
    }
    function u(e) {
        if (e.hasEdgesFrom || e.hasEdgesTo)
            return function(e) {}
            ;
        var t = function(e) {
            return !0
        };
        if (e.from && (t = l(t, (function(t) {
            return t.dateTime >= e.from
        }
        ))),
        e.to && (t = l(t, (function(t) {
            return t.dateTime < e.to
        }
        ))),
        e.ids && (t = l(t, (function(t) {
            return e.ids.includes(t.id)
        }
        ))),
        e.name && (t = l(t, (function(t) {
            return t.name === e.name
        }
        ))),
        e.tags) {
            var n = [].concat(e.tags);
            t = l(t, (function(e) {
                return e.tags && n.some((function(t) {
                    return e.tags.includes(t)
                }
                ))
            }
            ))
        }
        return t
    }
    function d(e) {
        return "delete" !== e.op
    }
    function p(e) {
        return "clear-branch" === e.op || "merge" === e.op
    }
    function m(e) {
        return e.flags ? e.flags.includes("idsOnly") ? 1 : e.flags.includes("idsAndNamesOnly") ? 2 : void 0 : 100
    }
    function h(e) {
        return e.flags ? e.flags.includes("includeIdsOnly") ? 1 : e.flags.includes("includeIdsAndNamesOnly") ? 2 : 100 : 100
    }
    var g = function() {
        function e() {}
        return e.getCacheBust = function(t, n, r, a) {
            return e.getInvolvedItems(t, n, a).map((function(e) {
                return localStorage.getItem("cache-bust-" + r + "-" + e)
            }
            )).filter((function(e) {
                return !!e
            }
            )).join("/") || "static"
        }
        ,
        e.invalidateCache = function(t, n) {
            for (var r = 0, a = e.getCacheInvalidations(t); r < a.length; r++) {
                var o = a[r];
                localStorage.setItem("cache-bust-" + n + "-" + o, "" + Date.now())
            }
        }
        ,
        e.getInvolvedItems = function(e, t, n) {
            var r = t.hasEdgesFrom
              , a = n.map((function(t) {
                return i.a[e].relationships[t]
            }
            )).filter((function(e) {
                return !!e
            }
            ));
            return r && a.push("hef" + e),
            [e, "master", t.branchId].filter((function(e) {
                return !!e
            }
            )).concat(a).sort()
        }
        ,
        e.getCacheInvalidations = function(e) {
            var t = {};
            return e.forEach((function(e) {
                switch (e.op) {
                case "add":
                case "put":
                case "delete":
                case "update":
                    t[e.table] = !0;
                    break;
                case "link":
                case "unlink":
                case "undo-link":
                    t[e.sourceTable] = !0,
                    t["hef-" + s(e.sourceTable, e.label)] = !0;
                    break;
                case "clear-branch":
                    t[e.branchId] = !0;
                    break;
                case "merge":
                    t[e.branchId] = !0,
                    t[e.targetBranchId || "master"] = !0
                }
            }
            )),
            Object.keys(t)
        }
        ,
        e
    }()
      , b = n(38)
      , f = {
        $unset: 0
    }
      , v = {
        $delete: 0
    };
    function k(e, t) {
        return "object" == typeof e && e && "object" == typeof t && t ? e.id === t.id : e === t
    }
    function w(e, t) {
        return e && t && e.id === t.id
    }
    function y(e, t) {
        for (var n = Object.keys(t), a = e, o = 0, i = n; o < i.length; o++) {
            var s = i[o];
            a === e && (a = Object(r.__assign)({}, e));
            var c = t[s];
            if (c && "object" == typeof c) {
                var l = Object.keys(c).filter((function(e) {
                    return e.startsWith("$")
                }
                ));
                if (l.length > 0) {
                    for (var u, d = function(e) {
                        var t = c[e];
                        switch (e) {
                        case "$unset":
                            a.$wasUnset = !0;
                            break;
                        case "$delete":
                            delete a[s];
                            break;
                        case "$add":
                            var n = t;
                            if (!Array.isArray(n))
                                throw new Error("$add instruction must contain array");
                            var o = a[s];
                            o = Array.isArray(o) ? Object(r.__spreadArray)([], o) : [],
                            a[s] = o;
                            for (var i = function(e) {
                                o.some((function(t) {
                                    return k(t, e)
                                }
                                )) || o.push(e)
                            }, l = 0, d = n; l < d.length; l++) {
                                i(d[l])
                            }
                            break;
                        case "$update":
                            if (u = t,
                            !Array.isArray(u))
                                throw new Error("$update instruction must contain array");
                            if (!u.every((function(e) {
                                return e && e.id
                            }
                            )))
                                throw new Error("Every item in the $update instruction array must be an object with a property named 'id'");
                            o = a[s];
                            if (!Array.isArray(o))
                                break;
                            for (var p = !1, m = 0, h = u; m < h.length; m++)
                                for (var g = h[m], b = 0, f = o.length; b < f; ++b) {
                                    var v = o[b];
                                    w(g, v) && (p || (o = o.slice(),
                                    a[s] = o,
                                    p = !0),
                                    o[b] = y(v, g))
                                }
                            break;
                        case "$remove":
                            var _ = t;
                            if (!Array.isArray(_))
                                throw new Error("$remove instruction must contain array");
                            o = a[s];
                            Array.isArray(o) || (o = []),
                            a[s] = o.filter((function(e) {
                                return !_.some((function(t) {
                                    return k(t, e)
                                }
                                ))
                            }
                            ))
                        }
                    }, p = 0, m = l; p < m.length; p++) {
                        d(m[p])
                    }
                    continue
                }
            }
            a[s] = c
        }
        return a
    }
    function _(e, t, n) {
        for (var a = (void 0 === n ? {
            removeUnsetProps: !1
        } : n).removeUnsetProps, o = Object.keys(t), i = Object(r.__assign)({}, e), s = 0, c = o; s < c.length; s++) {
            var l = c[s]
              , u = t[l];
            if (u && "object" == typeof u) {
                var d = Object.keys(u).filter((function(e) {
                    return e.startsWith("$")
                }
                ));
                if (d.length > 0) {
                    for (var p = function(e) {
                        var t = u[e];
                        switch (e) {
                        case "$unset":
                            a && t < 1 ? delete i[l] : i[l] = {
                                $unset: t
                            };
                            break;
                        case "$delete":
                            i[l] = {
                                $delete: 0
                            };
                            break;
                        case "$update":
                            var n = t;
                            if (!Array.isArray(n))
                                throw new Error("$update instruction must contain array");
                            if (!n.every((function(e) {
                                return e && e.id
                            }
                            )))
                                throw new Error("Every item in the $update instruction array must be an object with a property named 'id'");
                            var o = i[l];
                            if (void 0 === o)
                                i[l] = {
                                    $update: n
                                };
                            else if (Array.isArray(o))
                                n = O(o = i[l] = o.slice(), n, y);
                            else if ("object" == typeof o) {
                                var s = (o = i[l] = Object(r.__assign)({}, o)).$remove;
                                if (Array.isArray(s) && (n = O(s, n)),
                                0 === n.length)
                                    break;
                                var c = o.$add;
                                if (Array.isArray(c) && (n = O(c = o.$add = c.slice(), n, y)),
                                0 === n.length)
                                    break;
                                var d = o.$update;
                                Array.isArray(d) ? (n = O(d = o.$update = d.slice(), n, (function(e, t) {
                                    return _(e, t, {
                                        removeUnsetProps: a
                                    })
                                }
                                ))).length > 0 && d.push.apply(d, n) : o.$update = n
                            }
                            break;
                        case "$add":
                            var p = t;
                            if (!Array.isArray(p))
                                throw new Error("$add instruction must contain array");
                            h = (h = i[l]) ? Object(r.__assign)({}, h) : {},
                            i[l] = h;
                            var m = h.$remove;
                            Array.isArray(m) && (h.$remove = m.filter((function(e) {
                                return !p.some((function(t) {
                                    return k(t, e)
                                }
                                ))
                            }
                            )),
                            0 === h.$remove.length && delete h.$remove),
                            b = (b = h.$add) ? Object(r.__spreadArray)(Object(r.__spreadArray)([], b), p) : Object(r.__spreadArray)([], p),
                            h.$add = b;
                            break;
                        case "$remove":
                            var h, g = t;
                            if (!Array.isArray(g))
                                throw new Error("$remove instruction must contain array");
                            h = (h = i[l]) ? Object(r.__assign)({}, h) : {},
                            i[l] = h;
                            var b = h.$add;
                            Array.isArray(b) && (h.$add = b.filter((function(e) {
                                return !g.some((function(t) {
                                    return k(t, e)
                                }
                                ))
                            }
                            )),
                            0 === h.$add.length && delete h.$add),
                            m = (m = h.$remove) ? Object(r.__spreadArray)(Object(r.__spreadArray)([], m), g) : Object(r.__spreadArray)([], g),
                            h.$remove = m
                        }
                    }, m = 0, h = d; m < h.length; m++) {
                        p(h[m])
                    }
                    continue
                }
            }
            i[l] = u
        }
        return i
    }
    function O(e, t, n) {
        for (var r = t, a = function(t) {
            for (var a = 0, o = e.length; a < o; ++a) {
                var i = e[a];
                w(t, i) && (n && (e[a] = n(i, t)),
                r = r.filter((function(e) {
                    return e.id !== t.id
                }
                )))
            }
        }, o = 0, i = t; o < i.length; o++) {
            a(i[o])
        }
        return r
    }
    function T(e) {
        return !Array.isArray(e) && e && "object" == typeof e && Object.keys(e).some((function(e) {
            return e.startsWith("$")
        }
        ))
    }
    function j(e) {
        return e ? "string" == typeof e ? e.split(",") : e : void 0
    }
    Object.freeze && (Object.freeze(f),
    Object.freeze({
        $unset: 1
    }),
    Object.freeze(v));
    var E = n(407)
      , S = Object(a.j)();
    function x(e, t, n, a) {
        return Object(r.__awaiter)(this, void 0, void 0, (function() {
            var o, i, s, c, l, u, d = this;
            return Object(r.__generator)(this, (function(p) {
                switch (p.label) {
                case 0:
                    return o = e.deps,
                    i = o.client.http,
                    s = o.messagingUrl,
                    c = s.replace("/messagehub", "").concat("/livequery"),
                    l = i.bearerProvider,
                    [4, (u = (new E.a).withUrl(c, {
                        accessTokenFactory: function() {
                            return Object(r.__awaiter)(d, void 0, void 0, (function() {
                                return Object(r.__generator)(this, (function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return [4, l.getBearer()];
                                    case 1:
                                        return [2, e.sent().token]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                    }).withAutomaticReconnect().build()).start()];
                case 1:
                    return p.sent(),
                    u.on("trigger", a),
                    [4, u.send("SetQuery", Object(r.__assign)(Object(r.__assign)({}, n), {
                        table: t
                    }), S)];
                case 2:
                    return p.sent(),
                    [2, u]
                }
            }
            ))
        }
        ))
    }
    var C = function() {
        function e(e, t, n, r) {
            this.table = e,
            this.query = t,
            this.callback = n,
            this.repo = r
        }
        return Object.defineProperty(e.prototype, "key", {
            get: function() {
                return this.subscriptionKey
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.subscribe = function() {
            var e, t, n, r, a, o, i, s, c, l, u, d, p, m = this;
            return this.subscriptionPromise || (this.subscriptionPromise = this.setUpSocketSubscription(this.table, (e = this.query,
            t = e.from,
            n = e.to,
            r = e.branchId,
            a = e.flags,
            o = e.hasEdgesFrom,
            i = e.hasEdgesTo,
            s = e.ids,
            c = e.include,
            l = e.name,
            u = e.names,
            d = e.role,
            p = e.tags,
            {
                from: t,
                to: n,
                branchId: r,
                name: l,
                include: j(c),
                flags: j(a),
                hasEdgesFrom: j(o),
                hasEdgesTo: j(i),
                ids: j(s),
                names: j(u),
                role: j(d),
                tags: j(p)
            }), this.callback).then((function(e) {
                return m.subscriptionKey = e
            }
            ))),
            this.subscriptionPromise
        }
        ,
        e.prototype.unsubscribe = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return this.subscriptionPromise ? (e = this.subscriptionPromise,
                        delete this.subscriptionPromise,
                        [4, e]) : [3, 3];
                    case 1:
                        return t.sent(),
                        [4, this.teardownSocketSubscription()];
                    case 2:
                        t.sent(),
                        t.label = 3;
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setUpSocketSubscription = function(e, t, n) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var a;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return a = this,
                        [4, x(this.repo, e, t, n)];
                    case 1:
                        return a.hubConnection = r.sent(),
                        [2, this.hubConnection.connectionId]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.teardownSocketSubscription = function() {
            var e;
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    return null === (e = this.hubConnection) || void 0 === e || e.stop(),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e
    }()
      , D = function() {
        function e(e, t, n, r, a) {
            this.table = e,
            this.query = t,
            this.user = n,
            this.repo = r,
            this.mutationQueue = a,
            this.subscriptions = [],
            this.data = [],
            this.gotInitialResponse = !1,
            this.invalid = !1,
            this.loadedVersion = 0,
            this._loadPromise = null,
            this._getDataWithMA_memo = {
                lastMutations: null,
                lastOptimistic: !1,
                lastData: [],
                lastResult: []
            },
            this.includes = t.include ? "string" == typeof t.include ? [t.include] : t.include : []
        }
        return e.queryKey = function(e, t) {
            t.mutationsOnEmpty,
            t.cacheBust;
            var n = Object(r.__rest)(t, ["mutationsOnEmpty", "cacheBust"]);
            return e + JSON.stringify(n)
        }
        ,
        Object.defineProperty(e.prototype, "queryKey", {
            get: function() {
                return e.queryKey(this.table, this.query)
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.subscribe = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return Object(r.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return this.subscriptions.push(e),
                        !this.gotInitialResponse || this.invalid ? [3, 1] : (t = this.getDataWithMutationsApplied(this.mutationQueue.get(), !0, this.data),
                        e.notifySubscriber(t, this.error),
                        [3, 4]);
                    case 1:
                        return (t = this.queryLocally()) ? (this.data = t,
                        this.gotInitialResponse = !0,
                        this.error = null,
                        e.notifySubscriber(t, this.error),
                        [3, 4]) : [3, 2];
                    case 2:
                        return [4, this.load()];
                    case 3:
                        n.sent(),
                        n.label = 4;
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.load = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n = this;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return this.gotInitialResponse && delete this.query.mutationsOnEmpty,
                        e || !this._loadPromise ? [3, 2] : [4, this._loadPromise];
                    case 1:
                        return [2, r.sent()];
                    case 2:
                        return e = e || this.repo.writer.persistedVersion.value,
                        [4, t = this._loadPromise = this._load(e).then((function(r) {
                            n._loadPromise === t && (n.data = r,
                            n.loadedVersion = Math.max(n.loadedVersion, e))
                        }
                        )).catch((function(e) {
                            n._loadPromise === t && (n.error = e)
                        }
                        )).then((function() {
                            if (n._loadPromise !== t)
                                return n._loadPromise;
                            n._loadPromise = null,
                            n.gotInitialResponse = !0,
                            n.invalid = !1,
                            n.notifySubscribers(n.mutationQueue.get())
                        }
                        ))];
                    case 3:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype._load = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return this.mutationQueue.affectsQuery(this.table, this.query, this.includes) ? [4, this.repo.writer.waitForVersionToPersist(e)] : [3, 2];
                    case 1:
                        t.sent(),
                        t.label = 2;
                    case 2:
                        return [4, this.queryServer()];
                    case 3:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.unsubscribe = function(e) {
            this.subscriptions = this.subscriptions.filter((function(t) {
                return t !== e
            }
            ))
        }
        ,
        e.prototype.commitMutations = function(e, t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var n, a, o, i;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        if (!this.data)
                            return [3, 9];
                        n = 0,
                        a = e,
                        r.label = 1;
                    case 1:
                        return n < a.length ? "clear-branch" !== (o = a[n]).op || o.branchId !== this.query.branchId ? [3, 3] : [4, this.refreshOrInvalidate(t)] : [3, 8];
                    case 2:
                        return r.sent(),
                        [2];
                    case 3:
                        return "merge" !== o.op || o.targetBranchId && o.branchId !== this.query.branchId && o.targetBranchId !== this.query.branchId ? [3, 5] : [4, this.refreshOrInvalidate(t)];
                    case 4:
                        return r.sent(),
                        [2];
                    case 5:
                        return "update" === o.op && (o.deltaDoc.tags && this.query.tags || o.deltaDoc.name && this.query.name) ? [4, this.refreshOrInvalidate(t)] : [3, 7];
                    case 6:
                        return r.sent(),
                        [2];
                    case 7:
                        return n++,
                        [3, 1];
                    case 8:
                        i = this.getDataWithMutationsApplied(e, !1, this.data),
                        this.data = i,
                        r.label = 9;
                    case 9:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.refreshOrInvalidate = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return 0 !== this.subscriptions.length ? [3, 1] : (this.invalid = !0,
                        this.liveServerSubscription && (this.liveServerSubscription.unsubscribe(),
                        delete this.liveServerSubscription),
                        [3, 3]);
                    case 1:
                        return [4, this.load(e)];
                    case 2:
                        t.sent(),
                        t.label = 3;
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.notifySubscribers = function(e) {
            var t = this;
            if (this.data && this.gotInitialResponse) {
                var n = this.getDataWithMutationsApplied(e, !0, this.data);
                this.subscriptions.forEach((function(e) {
                    e.notifySubscriber(n, t.error)
                }
                ))
            }
        }
        ,
        e.prototype.queryLocally = function() {
            return this.repo.querySet.queryLocally(this.table, this.query, this.includes)
        }
        ,
        e.prototype.queryServer = function() {
            var e;
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t = this;
                return Object(r.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return !this.query.live || this.liveServerSubscription ? [3, 2] : (this.liveServerSubscription = new C(this.table,this.query,(function() {
                            return t.refreshOrInvalidate()
                        }
                        ),this.repo),
                        [4, this.liveServerSubscription.subscribe()]);
                    case 1:
                        n.sent(),
                        n.label = 2;
                    case 2:
                        return [4, this.repo.deps.client.list(this.table, Object(r.__assign)(Object(r.__assign)({}, this.query), {
                            live: void 0,
                            subscrKey: null === (e = this.liveServerSubscription) || void 0 === e ? void 0 : e.key
                        }))];
                    case 3:
                        return [2, n.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getDataWithMutationsApplied = function(e, t, n) {
            var r = this
              , a = this._getDataWithMA_memo;
            if (e === a.lastMutations && t === a.lastOptimistic && n === a.lastData)
                return a.lastResult;
            var o = n;
            return e.forEach((function(e) {
                o = r.applyMutationsOnData(o, e, t)
            }
            )),
            a.lastMutations = e,
            a.lastOptimistic = t,
            a.lastData = n,
            a.lastResult = o,
            o
        }
        ,
        e.prototype.applyMutationsOnData = function(e, t, n) {
            if (d(t) && t.branchId != this.query.branchId)
                return e;
            var a = this.table
              , o = this.includes
              , i = this.query
              , c = i.hasEdgesFrom ? [].concat(i.hasEdgesFrom || []) : []
              , l = i.tags ? [].concat(i.tags || []) : []
              , p = u(i)
              , m = o.map((function(e) {
                return s(a, e)
            }
            ));
            switch (t.op) {
            case "update":
                var h = null === t.table;
                if (a === t.table || h || m.includes(t.table)) {
                    var g = !1
                      , f = Object(b.j)(e, (function(e) {
                        if (e.id === t.id) {
                            g = !0;
                            var a = y(e, t.deltaDoc);
                            if (!h && !1 === p(a))
                                return;
                            return n && (a.$meta = "updating"),
                            a
                        }
                        return o.forEach((function(a) {
                            var o, i = e[a];
                            if (i) {
                                var s = Object(b.j)(i, (function(e) {
                                    if (e.id !== t.id)
                                        return e;
                                    var r = y(e, t.deltaDoc);
                                    return n && (r.$meta = "updating"),
                                    r
                                }
                                ));
                                s !== i && (e = Object(r.__assign)(Object(r.__assign)({}, e), ((o = {})[a] = s,
                                o)))
                            }
                        }
                        )),
                        e
                    }
                    ));
                    if (!h && !g && t.table === a) {
                        var v = y(t.doc, t.deltaDoc);
                        if (p(v))
                            return f.concat(v)
                    }
                    return f
                }
                return e;
            case "add":
                return a === t.table && p(t.doc) ? Object(r.__spreadArray)(Object(r.__spreadArray)([], e), [n ? Object(r.__assign)(Object(r.__assign)({}, t.doc), {
                    $meta: "adding"
                }) : t.doc]) : e;
            case "put":
                if (a === t.table) {
                    if (!1 === p(t.doc))
                        return Object(b.j)(e, (function(e) {
                            if (e.id !== t.id)
                                return e
                        }
                        ));
                    var k = !1
                      , w = Object(b.j)(e, (function(e) {
                        return e.id !== t.id ? e : (k = !0,
                        n ? Object(r.__assign)(Object(r.__assign)({}, t.doc), {
                            $meta: "updating"
                        }) : t.doc)
                    }
                    ));
                    return k ? w : e.concat(n ? Object(r.__assign)(Object(r.__assign)({}, t.doc), {
                        $meta: "adding"
                    }) : t.doc)
                }
                return e;
            case "add-related":
                if (a === t.table && -1 !== o.indexOf(t.graphProp))
                    return Object(b.j)(e, (function(e) {
                        var a;
                        if (e.id !== t.id)
                            return e;
                        var o = Object(r.__assign)({}, t.relatedDoc);
                        return n && (o.$meta = "adding"),
                        Object(r.__assign)(Object(r.__assign)({}, e), ((a = {})[t.graphProp] = Object(r.__spreadArray)(Object(r.__spreadArray)([], e[t.graphProp]), [o]),
                        a))
                    }
                    ));
                if (i.hasEdgesFrom && c.includes(t.id) && a === s(t.table, t.graphProp) && !e.some((function(e) {
                    return e.id === t.relatedDoc.id
                }
                ))) {
                    if (!i.tags)
                        return e.concat(this.setGraphProps(t.relatedDoc));
                    if (t.relatedDoc.tags && l.some((function(e) {
                        return t.relatedDoc.tags.includes(e)
                    }
                    )))
                        return e.concat(this.setGraphProps(t.relatedDoc))
                }
                return i.ids && i.ids.some((function(e) {
                    return e === t.relatedDoc.id
                }
                )) && !e.some((function(e) {
                    return i.ids.includes(e.id)
                }
                )) ? e.concat(this.setGraphProps(t.relatedDoc)) : e;
            case "remove-related":
                return a === t.table && -1 !== o.indexOf(t.graphProp) ? Object(b.j)(e, (function(e) {
                    var a, o = e[t.graphProp];
                    return o ? e.id !== t.id ? e : Object(r.__assign)(Object(r.__assign)({}, e), ((a = {})[t.graphProp] = n ? o.map((function(e) {
                        return e.id !== t.relatedDoc.id ? e : Object(r.__assign)(Object(r.__assign)({}, e), {
                            $meta: "deleting"
                        })
                    }
                    )) : o.filter((function(e) {
                        return e.id !== t.relatedDoc.id
                    }
                    )),
                    a)) : e
                }
                )) : i.hasEdgesFrom && c.includes(t.id) ? n ? e.map((function(e) {
                    return e.id === t.relatedDoc.id ? Object(r.__assign)(Object(r.__assign)({}, e), {
                        $meta: "deleting"
                    }) : e
                }
                )) : e.filter((function(e) {
                    return e.id !== t.relatedDoc.id
                }
                )) : e;
            case "delete":
                if (a === t.table)
                    return e.filter((function(e) {
                        return e.id !== t.id
                    }
                    ));
                if (i.include) {
                    var _ = o.map((function(e) {
                        return {
                            label: e,
                            table: s(a, e)
                        }
                    }
                    )).filter((function(e) {
                        return e.table === t.table
                    }
                    ));
                    if (_.length > 0)
                        return Object(b.j)(e, (function(e) {
                            return _.forEach((function(a) {
                                var o, i = a.label, s = e[i];
                                s && (e = Object(r.__assign)(Object(r.__assign)({}, e), ((o = {})[i] = n ? s.map((function(e) {
                                    return e.id === t.id ? Object(r.__assign)(Object(r.__assign)({}, e), {
                                        $meta: "deleting"
                                    }) : e
                                }
                                )) : s.filter((function(e) {
                                    return e.id !== t.id
                                }
                                )),
                                o)))
                            }
                            )),
                            e
                        }
                        ))
                }
                return e;
            default:
                return e
            }
        }
        ,
        e.prototype.setGraphProps = function(e) {
            var t = Object(r.__assign)({}, e);
            return this.includes.forEach((function(e) {
                return t[e] = t[e] || []
            }
            )),
            t
        }
        ,
        e
    }()
      , N = function(e) {
        function t(t, n, r) {
            var a = e.call(this, (function(e) {
                var t = new o(e,a);
                return a.repo.querySet.subscribe(t),
                t
            }
            )) || this;
            return a.repo = t,
            a.table = n,
            a.query = r,
            a
        }
        return Object(r.__extends)(t, e),
        Object.defineProperty(t.prototype, "queryKey", {
            get: function() {
                return D.queryKey(this.table, this.query)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "includes", {
            get: function() {
                return this._includes || (this._includes = [].concat(this.query.include || []))
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.applyQuery = function(e) {
            return new t(this.repo,this.table,Object(r.__assign)(Object(r.__assign)({}, this.query), e))
        }
        ,
        t.prototype.addToQueryArrayProp = function(e, t) {
            var n;
            return this.applyQuery(((n = {})[e] = (this.query[e] || []).concat(t),
            n))
        }
        ,
        t.prototype.addFlags = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return this.addToQueryArrayProp("flags", e)
        }
        ,
        t.prototype.debug = function() {
            return this.applyQuery({
                debug: !0
            })
        }
        ,
        t.prototype.idsOnly = function() {
            return this.addFlags("idsOnly")
        }
        ,
        t.prototype.idsAndNamesOnly = function() {
            return this.addFlags("idsAndNamesOnly")
        }
        ,
        t.prototype.includeIdsOnly = function() {
            return this.addFlags("includeIdsOnly")
        }
        ,
        t.prototype.includeIdsAndNamesOnly = function() {
            return this.addFlags("includeIdsAndNamesOnly")
        }
        ,
        t.prototype.between = function(e, t) {
            return this.applyQuery({
                from: e,
                to: t
            })
        }
        ,
        t.prototype.before = function(e) {
            return this.applyQuery({
                to: e
            })
        }
        ,
        t.prototype.after = function(e) {
            return this.applyQuery({
                from: e
            })
        }
        ,
        t.prototype.role = function(e) {
            return this.applyQuery({
                role: e
            })
        }
        ,
        t.prototype.hasEdgesFrom = function(e) {
            if (e.some((function(e) {
                return !e
            }
            )))
                throw new Error("Invalid id list given to Collection.hasEdgesFrom(" + JSON.stringify(e) + ")");
            return this.addToQueryArrayProp("hasEdgesFrom", e)
        }
        ,
        t.prototype.hasEdgesTo = function(e) {
            if (e.some((function(e) {
                return !e
            }
            )))
                throw new Error("Invalid id list given to Collection.hasEdgesTo(" + JSON.stringify(e) + ")");
            return this.addToQueryArrayProp("hasEdgesTo", e)
        }
        ,
        t.prototype.id = function(e) {
            var t = this;
            if (!e)
                throw new Error("Given ID was not given");
            return this.applyQuery({
                ids: [e]
            }).single({
                onZero: function() {
                    throw new Error("Could not find entity in " + t.table + " with id " + e)
                },
                onMany: function() {
                    throw new Error("Multiple entries in " + t.table + " with id " + e)
                }
            })
        }
        ,
        t.prototype.ids = function(e) {
            if (e.some((function(e) {
                return !e
            }
            )))
                throw new Error("Invalid id list given to Collection.ids(" + JSON.stringify(e) + ")");
            return this.applyQuery({
                ids: e
            })
        }
        ,
        t.prototype.name = function(e) {
            return this.applyQuery({
                name: e
            })
        }
        ,
        t.prototype.names = function(e) {
            return this.applyQuery({
                names: e
            })
        }
        ,
        t.prototype.tags = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return this.applyQuery({
                tags: e
            })
        }
        ,
        t.prototype.branchId = function(e) {
            return this.applyQuery({
                branchId: e
            })
        }
        ,
        t.prototype.include = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return this.addToQueryArrayProp("include", e)
        }
        ,
        t.prototype.cacheOptimized = function(e) {
            return void 0 === e || !0 === e ? this.applyQuery({
                cacheBust: g.getCacheBust(this.table, this.query, this.repo.deps.userEmail, this.includes)
            }) : this.applyQuery({
                cacheBust: void 0
            })
        }
        ,
        t.prototype.live = function() {
            return this.applyQuery({
                live: !0
            })
        }
        ,
        t.prototype.mutationsOnEmpty = function(e) {
            var t = new a.a;
            return e(t),
            this.applyQuery({
                mutationsOnEmpty: t.mutationRequests
            })
        }
        ,
        t.prototype.single = function(e) {
            var t = this
              , n = e || {}
              , r = n.onZero
              , a = n.onMany;
            return this.toValue().map((function(e) {
                if (0 === e.length) {
                    if (!r)
                        throw new Error("Single item of " + t.table + " expected to be returned by query " + JSON.stringify(t.query) + " but none was found.");
                    r()
                }
                return e.length > 1 && (a ? a() : console.log("Single item of " + t.table + " expected to be returned by query " + JSON.stringify(t.query) + " but " + e.length + " was found.")),
                e[0]
            }
            ))
        }
        ,
        t.prototype.update = function(e, t, n) {
            void 0 === n && (n = 1e3),
            this.repo.writer.mutate([{
                op: "update",
                table: this.table,
                branchId: this.query.branchId,
                id: e.id,
                doc: e,
                deltaDoc: t,
                targetName: e.name
            }], n)
        }
        ,
        t.prototype.addRelated = function(e, t, n) {
            var r = e.id
              , a = e.tags
              , o = e.name;
            this.repo.writer.mutate([{
                op: "add-related",
                table: this.table,
                branchId: this.query.branchId,
                sourceDoc: {
                    tags: a || [],
                    name: o || ""
                },
                id: r,
                graphProp: t,
                relatedDoc: n
            }], 0)
        }
        ,
        t.prototype.add = function(e) {
            this.repo.writer.mutate([{
                op: "add",
                id: e.id,
                table: this.table,
                doc: e
            }], 0)
        }
        ,
        t.prototype.put = function(e) {
            if (this.branchId)
                throw new Error("put-operation not implemented in backend for branches");
            this.repo.writer.mutate([{
                op: "put",
                id: e.id,
                table: this.table,
                doc: e
            }], 0)
        }
        ,
        t.prototype.modify = function(e, t, n) {
            if (void 0 === n && (n = 500),
            this.query.branchId)
                throw new Error("put-operation not implemented in backend for branches");
            var r = this.repo.querySet.queryLocally(this.table, {
                ids: [e.id]
            }, []);
            r && r.length > 0 && (e = r[0]),
            t(e = JSON.parse(JSON.stringify(e))),
            this.repo.writer.mutate([{
                op: "put",
                id: e.id,
                table: this.table,
                doc: e,
                retryUpdater: t
            }], n)
        }
        ,
        t.prototype.removeRelated = function(e, t, n) {
            var r = e.id
              , a = e.tags
              , o = e.name;
            this.repo.writer.mutate([{
                op: "remove-related",
                table: this.table,
                branchId: this.query.branchId,
                id: r,
                sourceDoc: {
                    tags: a || [],
                    name: o || ""
                },
                graphProp: t,
                relatedDoc: n
            }], 0)
        }
        ,
        t.prototype.undoLink = function(e, t, n) {
            if (!this.query.branchId)
                throw new Error("undo links can only be performed on branches");
            this.repo.writer.mutate([{
                op: "undo-link",
                table: this.table,
                branchId: this.query.branchId,
                id: e,
                graphProp: t,
                relatedId: n
            }], 0)
        }
        ,
        t.prototype.delete = function() {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            if (this.query.branchId)
                throw new Error("delete cannot be done on branched documents (not implemented yet)");
            this.repo.writer.mutate(t.map((function(t) {
                return {
                    op: "delete",
                    table: e.table,
                    id: t
                }
            }
            )), 0)
        }
        ,
        t.prototype.unsubscribe = function(e) {
            this.repo.querySet.unsubscribe(e)
        }
        ,
        t
    }(n(105).a)
      , A = function() {
        function e(e) {
            this.mutationQueue = e,
            this.queries = [],
            window.QuerySet = this
        }
        return e.prototype.commitMutations = function(e, t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, Promise.all(this.queries.map((function(n) {
                            return n.commitMutations(e, t)
                        }
                        )))];
                    case 1:
                        return n.sent(),
                        this.cleanupInvalidQueries(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.cleanupInvalidQueries = function() {
            this.queries = this.queries.filter((function(e) {
                return !e.invalid || (e.timeoutHandle && (clearTimeout(e.timeoutHandle),
                e.timeoutHandle = null),
                !1)
            }
            ))
        }
        ,
        e.prototype.notifySubscribers = function() {
            var e = this.mutationQueue.get();
            this.queries.forEach((function(t) {
                t.notifySubscribers(e)
            }
            ))
        }
        ,
        e.prototype.findQuery = function(e, t) {
            return this.queries.find((function(n) {
                return n.queryKey === D.queryKey(e, t)
            }
            ))
        }
        ,
        e.prototype.queryLocally = function(e, t, n) {
            var r = this.mutationQueue.get();
            if (t.ids && 1 === t.ids.length && r.some((function(e) {
                return "add-related" === e.op && e.relatedDoc.id === t.ids[0]
            }
            )))
                return [];
            if (t.hasEdgesFrom || t.hasEdgesTo)
                return null;
            if (t.live)
                return null;
            if (!t.ids)
                return null;
            for (var a = t.ids, o = function(r) {
                if (!r.gotInitialResponse)
                    return "continue";
                if (r.query.branchId !== t.branchId)
                    return "continue";
                var o = m(t);
                if (m(r.query) < o)
                    return "continue";
                if (r.invalid)
                    return "continue";
                var s = r.includes;
                if (0 === n.length) {
                    if (s.length > 0 && (!r.query.flags || !r.query.flags.some((function(e) {
                        return "includeIdsOnly" === e || "includeIdsAndNamesOnly" === e
                    }
                    )))) {
                        var l = s.find((function(t) {
                            return i.a[r.table].relationships[t] === e
                        }
                        ));
                        if (l) {
                            for (var u = {}, d = 0, p = r.data; d < p.length; d++) {
                                var g = p[d];
                                c(t, g[l]).forEach((function(e) {
                                    return u[e.id] = e
                                }
                                ))
                            }
                            var b = Object.keys(u).map((function(e) {
                                return u[e]
                            }
                            ));
                            return a.every((function(e) {
                                return b.some((function(t) {
                                    return t.id === e
                                }
                                ))
                            }
                            )) ? {
                                value: b
                            } : "continue"
                        }
                    }
                } else {
                    if (!n.every((function(e) {
                        return s.includes(e)
                    }
                    )))
                        return "continue";
                    var f = h(t);
                    if (h(r.query) < f)
                        return "continue"
                }
                if (r.table === e) {
                    var v = c(t, r.data);
                    return a.every((function(e) {
                        return v.some((function(t) {
                            return t.id === e
                        }
                        ))
                    }
                    )) ? {
                        value: v
                    } : "continue"
                }
            }, s = 0, l = this.queries; s < l.length; s++) {
                var u = o(l[s]);
                if ("object" == typeof u)
                    return u.value
            }
        }
        ,
        e.prototype.subscribe = function(e) {
            var t = e.collection
              , n = t.table
              , r = t.query
              , a = t.repo
              , o = this.findQuery(n, r);
            o ? o.timeoutHandle && (clearTimeout(o.timeoutHandle),
            o.timeoutHandle = null) : (o = new D(n,r,a.deps.userEmail,a,this.mutationQueue),
            this.queries.push(o)),
            o.subscribe(e)
        }
        ,
        e.prototype.unsubscribe = function(e) {
            var t = this
              , n = e.collection
              , r = n.table
              , a = n.query
              , o = (n.repo,
            this.findQuery(r, a));
            o && (o.unsubscribe(e),
            0 === o.subscriptions.length && (o.timeoutHandle = setTimeout((function() {
                0 === o.subscriptions.length && (t.queries = t.queries.filter((function(e) {
                    return e !== o
                }
                )),
                o.liveServerSubscription && (o.liveServerSubscription.unsubscribe(),
                delete o.liveServerSubscription))
            }
            ), 3e4)))
        }
        ,
        e
    }()
      , I = function() {
        function e() {
            this.queue = [],
            this.savingQueue = [],
            this.get_memo = {
                lastSavingQueue: [],
                lastQueue: [],
                lastResult: []
            }
        }
        return e.prototype.add = function(t) {
            this.queue = e.merge(this.queue, t)
        }
        ,
        e.prototype.moveToSavingQueue = function() {
            this.savingQueue = e.merge(this.savingQueue, this.queue),
            this.queue = []
        }
        ,
        e.prototype.clearSavingQueue = function() {
            this.savingQueue = []
        }
        ,
        e.prototype.resolveConflicts = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return 0 === (t = this.savingQueue.filter((function(e) {
                            return "put" === e.op && e.retryUpdater
                        }
                        ))).length ? [2, !1] : [4, Promise.all(t.map((function(t) {
                            var n = t.table
                              , r = t.id;
                            return e.get(n, r)
                        }
                        )))];
                    case 1:
                        return n = r.sent(),
                        t.forEach((function(e, t) {
                            e.doc = n[t],
                            e.retryUpdater(e.doc),
                            e.retryUpdater = null
                        }
                        )),
                        [2, !0]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.get = function() {
            var e = this.get_memo;
            if (this.savingQueue === e.lastSavingQueue && this.queue === e.lastQueue)
                return e.lastResult;
            var t = this.savingQueue.concat(this.queue);
            return e.lastSavingQueue = this.savingQueue,
            e.lastQueue = this.queue,
            e.lastResult = t,
            t
        }
        ,
        e.prototype.affectsQuery = function(e, t, n) {
            var r = this.get();
            return !!r.some((function(e) {
                return "merge" === e.op || "clear-branch" === e.op
            }
            )) || (t.ids ? r.some((function(e) {
                return p(e) || (!d(e) || e.branchId === t.branchId) && t.ids.includes(e.id)
            }
            )) : r.some((function(r) {
                return "add" === r.op || "put" === r.op ? r.table === e : "delete" === r.op ? r.table === e || n.some((function(t) {
                    return s(e, t) === r.table
                }
                )) : !!p(r) || r.branchId == t.branchId && (r.table === e || "update" !== r.op && [e].concat(n.map((function(t) {
                    return s(e, t)
                }
                ))).some((function(e) {
                    return s(r.table, r.graphProp) === e
                }
                )))
            }
            )))
        }
        ,
        e.merge = function(e, t) {
            for (var n = Object(r.__spreadArray)([], e), a = Object(r.__spreadArray)([], t), o = e.length, i = function(t) {
                var o = e[t];
                if ("update" === o.op) {
                    var i = a.findIndex((function(e) {
                        return "update" === e.op && e.branchId === o.branchId && e.id === o.id
                    }
                    ));
                    i >= 0 && (n[t] = Object(r.__assign)(Object(r.__assign)({}, o), {
                        deltaDoc: _(o.deltaDoc, a[i].deltaDoc)
                    }),
                    a.splice(i, 1))
                }
            }, s = 0; s < o; ++s)
                i(s);
            return n.concat(a)
        }
        ,
        e
    }()
      , L = n(106);
    function P(e, t, n, a, o) {
        for (var i = e.branchId, s = e.tag, c = e.conflictsOnly, l = function(e) {
            switch (e.op) {
            case "add-related":
                if (c)
                    break;
                e.branchId === i && (!s || e.sourceDoc.tags && (e.sourceDoc.tags.includes(s) || e.relatedDoc.tags.includes(s))) && (t = Object(r.__spreadArray)([{
                    type: "add",
                    sourceId: e.id,
                    sourceName: e.sourceDoc.name,
                    sourceTags: e.sourceDoc.tags,
                    targetTags: e.relatedDoc.tags,
                    targetId: e.relatedDoc.id,
                    label: e.graphProp,
                    sourceTable: e.table,
                    $meta: a ? "adding" : "persisted",
                    dateTime: Date.now(),
                    targetName: e.relatedDoc.name,
                    contributor: o
                }], t));
                break;
            case "clear-branch":
                e.branchId === i && (t = []);
                break;
            case "delete":
                break;
            case "merge":
                if (e.branchId !== i || a) {
                    if (e.targetBranchId === i && !a)
                        return {
                            value: null
                        }
                } else
                    t = e.tagToMerge ? t.filter((function(t) {
                        return !("sourceTags"in t && t.sourceTags.includes(e.tagToMerge) || "targetTags"in t && t.targetTags && t.targetTags.includes(e.tagToMerge))
                    }
                    )) : [];
                break;
            case "remove-related":
                if (c)
                    break;
                e.branchId === i && (!s || e.sourceDoc.tags && (e.sourceDoc.tags.includes(s) || e.relatedDoc.tags.includes(s))) && (t = Object(r.__spreadArray)([{
                    type: "remove",
                    sourceId: e.id,
                    targetId: e.relatedDoc.id,
                    targetName: e.relatedDoc.name,
                    sourceName: e.sourceDoc.name,
                    sourceTags: e.sourceDoc.tags,
                    targetTags: e.relatedDoc.tags,
                    label: e.graphProp,
                    sourceTable: e.table,
                    contributor: o,
                    dateTime: Date.now(),
                    $meta: a ? "adding" : "persisted"
                }], t));
                break;
            case "undo-link":
                if (e.branchId !== i)
                    return "continue";
                if ((l = t.findIndex((function(t) {
                    return ("add" === t.type || "remove" === t.type || "undo-link" === t.type) && t.sourceId === e.id && t.targetId === e.relatedId
                }
                ))) < 0)
                    return "continue";
                if (a) {
                    var n = t[l];
                    t = Object(r.__spreadArray)(Object(r.__spreadArray)(Object(r.__spreadArray)([], t.slice(0, l)), [Object(r.__assign)(Object(r.__assign)({}, n), {
                        $meta: a ? "removing" : "persisted"
                    })]), t.slice(l + 1))
                } else
                    t = Object(r.__spreadArray)(Object(r.__spreadArray)([], t.slice(0, l)), t.slice(l + 1));
                break;
            case "update":
                if (e.branchId !== i)
                    return "continue";
                if (s && (!e.doc.tags || !e.doc.tags.includes(s)))
                    return "continue";
                var l;
                if ((l = t.findIndex((function(t) {
                    return "modify" === t.type && t.targetId === e.id
                }
                ))) < 0)
                    t = Object(r.__spreadArray)([{
                        type: "modify",
                        table: e.table,
                        targetId: e.id,
                        targetName: e.targetName,
                        targetTags: e.doc.tags,
                        data: e.deltaDoc,
                        dateTime: Date.now(),
                        contributors: [o],
                        $meta: a ? "adding" : "persisted"
                    }], t);
                else {
                    var u = t[l]
                      , d = Object(r.__spreadArray)([], u.contributors);
                    d.includes(o) || d.push(o);
                    var p = _(u.data, e.deltaDoc, {
                        removeUnsetProps: !0
                    });
                    t = a || 0 !== Object.keys(p).length ? Object(r.__spreadArray)(Object(r.__spreadArray)([{
                        type: "modify",
                        table: e.table,
                        targetId: e.id,
                        targetName: e.targetName,
                        targetTags: e.doc.tags,
                        data: p,
                        dateTime: Date.now(),
                        contributors: d,
                        $meta: a ? "updating" : "persisted"
                    }], t.slice(0, l)), t.slice(l + 1)) : Object(r.__spreadArray)(Object(r.__spreadArray)([], t.slice(0, l)), t.slice(l + 1))
                }
            }
        }, u = 0, d = n; u < d.length; u++) {
            var p = l(d[u]);
            if ("object" == typeof p)
                return p.value
        }
        return t
    }
    var V = function() {
        function e(e, t, n) {
            this.getClient = e,
            this.getUser = t,
            this.getUserDisplayName = n,
            this.lookup = {}
        }
        return e.prototype.applyMutations = function(e, t) {
            for (var n = (void 0 === t ? {
                optimistic: !1
            } : t).optimistic, r = 0, a = Object.keys(this.lookup); r < a.length; r++) {
                var o = a[r]
                  , i = this.lookup[o];
                if (i.value) {
                    var s = P(i.query, i.value, e, n, this.getUserDisplayName());
                    null === s && (n || i.fetch()),
                    s !== i.value && (i.optimisticValue = s,
                    n || (i.value = s),
                    i.notify(s))
                }
            }
        }
        ,
        e.prototype.subscribe = function(e, t) {
            var n = this
              , r = e.branchId + e.tag + (e.conflictsOnly ? ":conflicts" : "")
              , a = this.lookup[r];
            a || (a = new G(this.getClient(),e),
            this.lookup[r] = a),
            a.cleanupTimer && (clearTimeout(a.cleanupTimer),
            a.cleanupTimer = null);
            var o = {
                unsubscribe: function() {
                    a.subscribers = a.subscribers.filter((function(e) {
                        return e.observer !== t
                    }
                    )),
                    0 === a.subscribers.length && (a.cleanupTimer = setTimeout((function() {
                        0 === a.subscribers.length && delete n.lookup[r]
                    }
                    ), 3e4))
                }
            };
            return a.subscribers.push({
                observer: t,
                subscription: o
            }),
            a.value ? t(a.optimisticValue || a.value, null, o) : a.isFetching || (a.error ? t(null, a.error, o) : a.fetch()),
            o
        }
        ,
        e
    }()
      , G = function() {
        function e(e, t) {
            this.fetchOperationId = 0,
            this.client = e,
            this.query = t,
            this.value = null,
            this.error = null,
            this.optimisticValue = null,
            this.subscribers = [],
            this.isFetching = !1,
            this.cleanupTimer = null
        }
        return e.prototype.fetch = function() {
            var e = this
              , t = ++this.fetchOperationId;
            this.isFetching = !0,
            this.fetchFromServer().then((function(n) {
                t === e.fetchOperationId && (e.isFetching = !1,
                n.sort((function(e, t) {
                    return t.dateTime - e.dateTime
                }
                )),
                e.value = n,
                e.optimisticValue = n,
                e.notify(n))
            }
            )).catch((function(n) {
                t === e.fetchOperationId && (e.isFetching = !1,
                e.error = n,
                e.fail(n))
            }
            ))
        }
        ,
        e.prototype.fetchFromServer = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        if (!this.query.branchId)
                            throw new Error("Deltas only available on branches");
                        return [4, this.client.http.get("deltas", this.query)];
                    case 1:
                        return (e = r.sent()).status >= 300 || e.status < 200 ? (t = a.c.bind,
                        n = [void 0, e.status],
                        [4, e.text()]) : [3, 3];
                    case 2:
                        throw new (t.apply(a.c, n.concat([r.sent()])));
                    case 3:
                        return [4, e.json()];
                    case 4:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.notify = function(e) {
            for (var t = 0, n = this.subscribers; t < n.length; t++) {
                var r = n[t];
                (0,
                r.observer)(e, null, r.subscription)
            }
        }
        ,
        e.prototype.fail = function(e) {
            var t = Object(r.__spreadArray)([], this.subscribers);
            this.subscribers = [];
            for (var n = 0, a = t; n < a.length; n++) {
                var o = a[n];
                (0,
                o.observer)(null, e, o.subscription)
            }
        }
        ,
        e
    }()
      , R = function() {
        function e(e, t, n, r, a) {
            this.mutationQueue = e,
            this.querySet = t,
            this.getClient = n,
            this.getUser = r,
            this.getUserDisplayName = a,
            this._timeoutId = null,
            this._isSavingPromise = null,
            this.currentVersion = 0,
            this.persistedVersion = new L.c(0),
            this.errorSubscribers = [],
            this.stateSubscribers = [],
            this.deltaCache = new V(n,r,a)
        }
        return Object.defineProperty(e.prototype, "isSaving", {
            get: function() {
                return !!this._isSavingPromise
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isEdited", {
            get: function() {
                return this.mutationQueue.get().length > 0
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.onError = function(e) {
            this.errorSubscribers.push(e)
        }
        ,
        e.prototype.onStateChange = function(e) {
            this.stateSubscribers.push(e)
        }
        ,
        e.prototype.off = function(e) {
            this.errorSubscribers = this.errorSubscribers.filter((function(t) {
                return t !== e
            }
            )),
            this.stateSubscribers = this.stateSubscribers.filter((function(t) {
                return t !== e
            }
            ))
        }
        ,
        e.prototype.dispatchError = function(e, t) {
            var n = this;
            this.errorSubscribers.forEach((function(r) {
                try {
                    r(e, t, n)
                } catch (e) {}
            }
            ))
        }
        ,
        e.prototype.dispatchStateChange = function() {
            var e = this;
            this.stateSubscribers.forEach((function(t) {
                try {
                    t(e)
                } catch (e) {}
            }
            ))
        }
        ,
        e.prototype.mutate = function(e, t) {
            this.mutationQueue.add(e),
            ++this.currentVersion,
            this.dispatchStateChange(),
            this.querySet.notifySubscribers(),
            this.deltaCache.applyMutations(this.mutationQueue.get(), {
                optimistic: !0
            }),
            this._isSavingPromise || (this._timeoutId && clearTimeout(this._timeoutId),
            this._timeoutId = setTimeout(this.save.bind(this), t))
        }
        ,
        e.prototype.retrySave = function() {
            return this.save()
        }
        ,
        e.prototype.waitForVersionToPersist = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.persistedVersion.load()];
                    case 1:
                        return t.sent() < e ? (this.save(),
                        [4, this.persistedVersion.filter((function(t) {
                            return t >= e
                        }
                        )).load()]) : [3, 3];
                    case 2:
                        t.sent(),
                        t.label = 3;
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.save = function() {
            var e = this;
            return this._timeoutId && clearTimeout(this._timeoutId),
            this._isSavingPromise ? this._isSavingPromise : this.isEdited ? (this._timeoutId = null,
            this._isSavingPromise = this._save(),
            this._isSavingPromise.catch((function() {}
            )).then((function() {
                return e._isSavingPromise = null
            }
            )),
            this._isSavingPromise) : Promise.resolve()
        }
        ,
        e.prototype._save = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n, a, o, i, s;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        this.dispatchStateChange(),
                        e = this.mutationQueue.get(),
                        t = this.currentVersion,
                        this.mutationQueue.moveToSavingQueue(),
                        n = this.mapMutations(e),
                        r.label = 1;
                    case 1:
                        return r.trys.push([1, 6, 15, 16]),
                        [4, this.getClient().batch(n, {}, {
                            clientIdentity: S
                        })];
                    case 2:
                        return a = r.sent(),
                        o = Object.keys(a.newEtags).map((function(e) {
                            return {
                                op: "update",
                                table: null,
                                id: e,
                                doc: {
                                    id: e
                                },
                                deltaDoc: {
                                    $etag: a.newEtags[e]
                                },
                                targetName: null
                            }
                        }
                        )),
                        g.invalidateCache(n, this.getUser()),
                        this.persistedVersion.dispatch(t),
                        this.deltaCache.applyMutations(e, {
                            optimistic: !1
                        }),
                        [4, this.querySet.commitMutations(I.merge(e, o), t)];
                    case 3:
                        return r.sent(),
                        this.mutationQueue.clearSavingQueue(),
                        this.dispatchStateChange(),
                        this.querySet.notifySubscribers(),
                        this.mutationQueue.get().length > 0 ? [4, this._save()] : [3, 5];
                    case 4:
                        r.sent(),
                        r.label = 5;
                    case 5:
                        return [3, 16];
                    case 6:
                        if (!(i = r.sent()) || "http409" !== i.name)
                            return [3, 12];
                        r.label = 7;
                    case 7:
                        return r.trys.push([7, 11, , 12]),
                        [4, this.mutationQueue.resolveConflicts(this.getClient())];
                    case 8:
                        return r.sent() ? [4, this._save()] : [3, 10];
                    case 9:
                        return [2, r.sent()];
                    case 10:
                        return [3, 12];
                    case 11:
                        return s = r.sent(),
                        i = s,
                        [3, 12];
                    case 12:
                        return this.persistedVersion.dispatchError(i),
                        this.dispatchError(i, !1),
                        this.mutationQueue.clearSavingQueue(),
                        this.dispatchStateChange(),
                        this.querySet.notifySubscribers(),
                        this.mutationQueue.get().length > 0 ? [4, this._save()] : [3, 14];
                    case 13:
                        r.sent(),
                        r.label = 14;
                    case 14:
                        return [3, 16];
                    case 15:
                        return this.dispatchStateChange(),
                        [7];
                    case 16:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.mapMutations = function(e) {
            var t = new a.a;
            return e.forEach((function(e) {
                switch (e.op) {
                case "update":
                    t.update(e.table, e.id, e.deltaDoc, e.branchId);
                    break;
                case "add":
                    t.add(e.table, e.doc);
                    break;
                case "put":
                    t.put(e.table, e.doc);
                    break;
                case "add-related":
                    e.relatedDoc.$etag || t.add(i.a[e.table].relationships[e.graphProp], e.relatedDoc, e.branchId),
                    t.link2(e.table, e.id, e.graphProp, e.relatedDoc.id, e.branchId);
                    break;
                case "remove-related":
                    t.unlink2(e.table, e.id, e.graphProp, e.relatedDoc.id, e.branchId);
                    break;
                case "undo-link":
                    t.undoLink(e.table, e.id, e.graphProp, e.relatedId, e.branchId);
                    break;
                case "delete":
                    t.delete(e.table, e.id);
                    break;
                case "clear-branch":
                    t.clearBranch(e.branchId);
                    break;
                case "merge":
                    t.merge(e.branchId, e.targetBranchId, e.tagToMerge, e.track)
                }
            }
            )),
            t.mutationRequests
        }
        ,
        e
    }()
      , B = function(e) {
        function t(t, n) {
            var r = e.call(this, (function(e) {
                return r.deltaCache.subscribe(n, e)
            }
            )) || this;
            return r.deltaCache = t,
            r.query = n,
            r
        }
        return Object(r.__extends)(t, e),
        t.prototype.tag = function(e) {
            return new t(this.deltaCache,Object(r.__assign)(Object(r.__assign)({}, this.query), {
                tag: e
            }))
        }
        ,
        t.prototype.conflictsOnly = function(e) {
            return void 0 === e && (e = !0),
            new t(this.deltaCache,Object(r.__assign)(Object(r.__assign)({}, this.query), {
                conflictsOnly: e
            }))
        }
        ,
        t
    }(L.a)
      , U = function() {
        function e(e, t, n, r, a, o) {
            var s = this;
            this.deps = e,
            this.defaultQueryOptions = t,
            this.mutationQueue = n,
            this.querySet = r,
            this.writer = a,
            this.cacheOptimized = o,
            t || (this.defaultQueryOptions = {}),
            n || (this.mutationQueue = new I),
            r || (this.querySet = new A(this.mutationQueue)),
            a || (this.writer = new R(this.mutationQueue,this.querySet,(function() {
                return e.client
            }
            ),(function() {
                return e.userEmail
            }
            ),(function() {
                return e.userDisplayName
            }
            ))),
            Object.keys(i.a).forEach((function(e) {
                var n = new N(s,e,t || {});
                o && (n = n.cacheOptimized()),
                s[e] = n
            }
            )),
            this.deltas = new B(this.writer.deltaCache,{
                branchId: this.defaultQueryOptions.branchId
            })
        }
        return e.prototype.table = function(e) {
            var t = new N(this,e,this.defaultQueryOptions);
            return this.cacheOptimized && (t = t.cacheOptimized()),
            t
        }
        ,
        e.prototype._clone = function(t, n) {
            return new e(this.deps,Object(r.__assign)(Object(r.__assign)({}, this.defaultQueryOptions), t),this.mutationQueue,this.querySet,this.writer,void 0 === n ? this.cacheOptimized : n)
        }
        ,
        e.prototype.branch = function(e) {
            return this._clone({
                branchId: e
            })
        }
        ,
        e.prototype.role = function(e) {
            return this._clone({
                role: e
            })
        }
        ,
        e.prototype.optimizeCache = function() {
            return this._clone({}, !0)
        }
        ,
        e.prototype.clearBranch = function() {
            if (!this.defaultQueryOptions.branchId)
                throw new Error("Cannot clear master branch");
            this.writer.mutate([{
                op: "clear-branch",
                branchId: this.defaultQueryOptions.branchId
            }], 0)
        }
        ,
        e.prototype.merge = function(e) {
            var t = e.targetBranchId
              , n = void 0 === t ? null : t
              , r = e.tagToMerge
              , a = void 0 === r ? null : r
              , o = e.track
              , i = void 0 !== o && o;
            if (!this.defaultQueryOptions.branchId)
                throw new Error("Cannot merge from master branch");
            this.writer.mutate([{
                op: "merge",
                branchId: this.defaultQueryOptions.branchId,
                targetBranchId: n,
                tagToMerge: a,
                track: i
            }], 0)
        }
        ,
        e.prototype.saveNow = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.writer.waitForVersionToPersist(this.writer.currentVersion)];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    function M(e) {
        if ("modify" !== e.type || !e.data)
            return !1;
        var t = e.data
          , n = t.$conflictProps;
        return "string" == typeof t.$conflictRel || !!n && (Array.isArray(n) ? n.some((function(t) {
            return t.id in e.data
        }
        )) : !!Array.isArray(n.$add) && n.$add.some((function(t) {
            return t.id in e.data
        }
        )))
    }
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }
    ));
    var r = n(0)
      , a = n(75)
      , o = n(146)
      , i = n(105)
      , s = n(53)
      , c = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.isLoading = !1,
            n
        }
        return Object(r.__extends)(t, e),
        t.prototype.subscribe = function(t) {
            var n = this;
            return this.isLoading = !0,
            e.prototype.subscribe.call(this, (function(e, r, a) {
                return n.isLoading = !1,
                t(e, r, a)
            }
            ))
        }
        ,
        t.from = function(e) {
            if (e.subscribe)
                return new t((function(t) {
                    return e.subscribe(t)
                }
                ));
            throw new Error("Value.from() can only take observables")
        }
        ,
        t.prototype.read = function(e) {
            var t, n = this._hasValue, r = this._lastValue, a = this._lastError;
            if (!n && (this.subscribe((function(e, o, i) {
                i.unsubscribe(),
                n = !0,
                r = e,
                a = o,
                t && t(e, o)
            }
            )),
            !n && void 0 === e))
                throw new Promise((function(e, n) {
                    t = function(t, r) {
                        r ? n(r) : e(t)
                    }
                }
                ));
            var o = s.a.current;
            if (!o)
                throw new Error("Invalid Fiber Context");
            if (a) {
                if (void 0 !== e)
                    return o.error = a,
                    [e, !0, a];
                throw a
            }
            return o.observables.push([this, n, r]),
            n ? void 0 !== e ? [r, !1] : r : [e, !0]
        }
        ,
        t.prototype.load = function() {
            var e = this;
            return new Promise((function(t, n) {
                e.subscribe((function(e, r, a) {
                    r ? n(r) : t(e),
                    a.unsubscribe()
                }
                ))
            }
            ))
        }
        ,
        t.prototype.filter = function(e) {
            var n = this;
            return new t((function(t) {
                return n.subscribe((function(n, r, a) {
                    r ? t(null, r, a) : e(n) && t(n, r, a)
                }
                ))
            }
            ))
        }
        ,
        t.prototype.log = function(e) {
            return this.map((function(t) {
                return console.log(e, t),
                t
            }
            ))
        }
        ,
        t.prototype.toCollection = function(e) {
            var t = this;
            return new i.a((function(n) {
                return t.map(e).subscribe(n)
            }
            ))
        }
        ,
        t.prototype.combineLatest = function(e) {
            var n = this;
            return new t((function(t) {
                var r, a, o = [null, null], i = {
                    unsubscribe: function() {
                        r.unsubscribe(),
                        a.unsubscribe()
                    }
                };
                return r = n.subscribe((function(e, n, a) {
                    r = a,
                    n && (a.unsubscribe(),
                    t(null, n, i)),
                    o[0] = e,
                    null !== o[1] && t(o, null, i)
                }
                )),
                a = e.subscribe((function(e, n, r) {
                    a = r,
                    n && (r.unsubscribe(),
                    t(null, n, i)),
                    o[1] = e,
                    null !== o[0] && t(o, null, i)
                }
                )),
                i
            }
            ))
        }
        ,
        t.prototype.switchMap = function(e) {
            var n = this;
            return new t((function(t) {
                var r = null
                  , a = null
                  , o = {
                    unsubscribe: function() {
                        a.unsubscribe(),
                        r && (r.unsubscribe(),
                        r = null)
                    }
                };
                return a = n.subscribe((function(n, i, s) {
                    if (a = s,
                    r && (r.unsubscribe(),
                    r = null),
                    i)
                        t(null, i, o);
                    else
                        try {
                            var c = e(n);
                            c && "function" == typeof c.subscribe ? r = c.subscribe((function(e, n, a) {
                                r = a,
                                t(e, n, o)
                            }
                            )) : t(c, null, a)
                        } catch (i) {
                            t(null, i, a)
                        }
                }
                )),
                o
            }
            ))
        }
        ,
        t
    }(a.a);
    c.prototype.map = Object(o.a)(c)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    }
    ));
    var r = n(0)
      , a = n(13)
      , o = n(14)
      , i = n(62)
      , s = n(86)
      , c = n(212)
      , l = n(10)
      , u = function() {
        function e(e, t, n, r) {
            this.userPrefs = new o.b(null),
            this.db = e,
            this.user = t,
            this.tutored = n,
            this.icClient = r
        }
        return e.getInstance = function(t) {
            var n = d.get(t);
            return n || (n = new e(t.db,t.currentUser,t.tutored,t.icClient),
            d.set(t, n)),
            n
        }
        ,
        e.prototype.readProfilePicture = function() {
            var e, t = this.readUserPrefs(), n = null !== (e = t.avatar) && void 0 !== e ? e : t.profilePic;
            if ("string" != typeof n) {
                var r = this.icClient.levelObservable.read();
                return c.a.getUserAvatarData(n, r.levelData.currentLevel, l.a.KED_GAMIFICATION_ICONS_STORAGE_URL)
            }
            return n
        }
        ,
        e.prototype.readUserPrefs = function() {
            if (this.userPrefs.read())
                return this.userPrefs.value;
            var e = this.db.userPrefs.role("USER").cacheOptimized().orderBy("dateTime").last().read();
            return e || (e = {
                id: Object(a.j)(),
                dateTime: Date.now(),
                profilePic: null,
                avatar: null
            },
            this.user.impersonator || this.tutored || this.db.userPrefs.add(e)),
            e.profilePic || (e = Object(r.__assign)(Object(r.__assign)({}, e), {
                profilePic: "https://storage.googleapis.com/gwen-prod-storage/e8583e1d-b0a1-48ef-b417-11331d680063/1596201929121-Avatar%2006.svg"
            })),
            this.userPrefs.dispatch(e),
            e
        }
        ,
        e.prototype.updateUserPrefs = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n = this;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, Object(o.f)((function() {
                            return n.readUserPrefs()
                        }
                        ))];
                    case 1:
                        return t = r.sent(),
                        this.user.impersonator || this.tutored || this.db.userPrefs.update(t, e),
                        this.userPrefs.dispatch(Object(i.d)(t, e)),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        Object(r.__decorate)([s.a], e.prototype, "readProfilePicture", null),
        e
    }()
      , d = new WeakMap
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return l
    }
    )),
    n.d(t, "b", (function() {
        return u
    }
    )),
    n.d(t, "a", (function() {
        return d
    }
    ));
    var r = n(0)
      , a = n(64)
      , o = n(129)
      , i = n(375)
      , s = n(167)
      , c = (n(244),
    n(186),
    n(245),
    n(376),
    n(56));
    function l(e, t) {
        var n = null;
        n = e.getMonth() >= 7 ? t ? e.getFullYear() : e.getFullYear() + 1 : t ? e.getFullYear() - 1 : e.getFullYear();
        var r = new Date(n.toString());
        1 != Object(c.d)(r) && (r = Object(a.default)(r, 1));
        var l = Object(o.a)(r, {
            month: 11,
            date: 24
        })
          , u = Object(c.d)(l);
        return Object(i.a)(l) && (u -= 1),
        t ? [Object(c.c)(Object(s.a)(r, 32)), Object(c.b)(Object(s.a)(r, u))] : [new Date(r), Object(c.b)(Object(s.a)(r, 25))]
    }
    function u(e) {
        var t = e.getFullYear()
          , n = e.getMonth() >= 6
          , a = Object(r.__read)(n ? [t, t + 1] : [t - 1, t], 2);
        return {
            academicYear: a[0] + "/" + a[1],
            term: n ? "AT" : "ST",
            week: Object(c.d)(e)
        }
    }
    function d(e, t) {
        return e.split("/").map((function(e) {
            return parseInt(e) + t
        }
        )).map((function(e) {
            return "" + e
        }
        )).join("/")
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e.schoolGrade >= 10 || /gymnasium/i.test(e.schoolType) || /gymnasiet/.test(e.mail)
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return s
    }
    )),
    n.d(t, "d", (function() {
        return c
    }
    )),
    n.d(t, "e", (function() {
        return l
    }
    )),
    n.d(t, "f", (function() {
        return u
    }
    )),
    n.d(t, "b", (function() {
        return d
    }
    )),
    n.d(t, "a", (function() {
        return p
    }
    ));
    var r = n(7)
      , a = n(62)
      , o = n(13)
      , i = n(10);
    r.a.db || (r.a.db = new a.b({
        get client() {
            return r.a.kedBackendClient
        },
        get userEmail() {
            return r.a.currentUser ? r.a.currentUser.mail : ""
        },
        get userDisplayName() {
            return r.a.currentUser ? r.a.currentUser.displayName || r.a.currentUser.mail : ""
        },
        get messagingUrl() {
            return i.b.KED_MESSAGING_HUB_URL
        }
    }));
    var s = r.a.db
      , c = Object(o.k)(i.b.KED_REALM)
      , l = Object(o.l)(i.b.KED_REALM)
      , u = Object(o.l)(i.b.KED_REALM, !0)
      , d = {
        standardSchool: s.schools.name("standard").cacheOptimized().single(),
        get mySchool() {
            return s.schools.name(r.a.currentUser.school).cacheOptimized().single()
        }
    }
      , p = {
        getBranchIdSuspense: function(e, t, n) {
            var r = n.cacheOptimized;
            return s.branches.hasEdgesFrom([e.officialBranchId]).name("draft").cacheOptimized(r).tags(t).idsOnly().map((function(e) {
                return e.id
            }
            )).toValue().map((function(e) {
                return e.length > 0 ? e[0] : void 0
            }
            )).read()
        },
        getBranchId: function(e, t, n) {
            var r = n.cacheOptimized;
            return e.switchMap((function(e) {
                return s.branches.hasEdgesFrom([e.officialBranchId]).name("draft").cacheOptimized(r).tags(t).idsOnly().map((function(e) {
                    return e.id
                }
                )).toValue().map((function(e) {
                    return e.length > 0 ? e[0] : void 0
                }
                ))
            }
            ))
        },
        getOrCreateBranchId: function(e, t) {
            return s.courseInstances.idsOnly().id(t).switchMap((function() {
                return e.switchMap((function(e) {
                    return s.branches.hasEdgesFrom([e.officialBranchId]).name("draft").tags(t).idsOnly().mutationsOnEmpty((function(n) {
                        var r = Object(o.j)();
                        n.add("branches", {
                            id: r,
                            acl: ["role:USER:R", "schoolRole:" + e.name + "/EMPLOYEE:S"],
                            name: "draft",
                            schoolId: e.id,
                            treeParentId: e.officialBranchId,
                            tags: [t]
                        }),
                        n.link2("branches", e.officialBranchId, "approvedChildren", r)
                    }
                    )).single().map((function(e) {
                        return e.id
                    }
                    ))
                }
                ))
            }
            ))
        },
        getAllDescendantIds: function(e) {
            return s.courseBlocks.tags(e).idsOnly().concat(s.courseContents.tags(e).idsOnly()).concat(s.courseTabs.tags(e).idsOnly()).concat(s.tasks.tags(e).idsOnly()).map((function(e) {
                return e.id
            }
            ))
        }
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    ));
    var r = function() {
        function e(e) {
            this._subscribe = e,
            this._hasValue = !1,
            this._lastValue = void 0,
            this._lastError = void 0
        }
        return e.prototype.subscribe = function(e) {
            var t = this;
            try {
                return this._subscribe((function(n, r, a) {
                    try {
                        t._hasValue = !0,
                        t._lastValue = n,
                        t._lastError = r,
                        e(n, r, a)
                    } catch (n) {
                        t._lastValue = null,
                        t._lastError = n,
                        e(null, n, a)
                    }
                }
                ))
            } catch (t) {
                this._hasValue = !0,
                this._lastValue = null,
                this._lastError = t,
                e(null, t, {
                    unsubscribe: function() {}
                })
            }
        }
        ,
        e.prototype.peek = function() {
            var e = null;
            return this.subscribe((function(t) {
                return e = t
            }
            )).unsubscribe(),
            e
        }
        ,
        e
    }()
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    }
    ));
    var r = n(0)
      , a = n(186)
      , o = n(242)
      , i = n(14)
      , s = n(20)
      , c = n(238)
      , l = s.a.weekPlannerEmitters || (s.a.weekPlannerEmitters = {})
      , u = function() {
        function e(e) {
            if ("string" == typeof e) {
                this.user = e,
                this.lastWrite = Date.now();
                var t = c.a.getCurrentWeek();
                this.weekDate = t.currentDate.valueOf(),
                this.openCourses = {},
                this.mode = "week"
            } else
                Object.assign(this, e)
        }
        return e.observe = function(t) {
            return l[t] || (l[t] = new i.b(e.loadSync(t))),
            l[t]
        }
        ,
        e.loadSync = function(e) {
            var t = localStorage.getItem("WeekPlannerState-" + e);
            return this.loadValueSync(e, t)
        }
        ,
        e.loadValueSync = function(t, n) {
            try {
                var r = n && JSON.parse(n)
                  , a = new e(t);
                r && null === r.weekDate && delete r.weekDate,
                r && Object.assign(a, r);
                var o = a.user !== t || a.isExpired(new Date) ? new e(t) : a;
                return r || o.save(),
                o
            } catch (n) {
                return new e(t)
            }
        }
        ,
        e.load = function(t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(n) {
                    return [2, e.loadSync(t)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.save = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(r.__generator)(this, (function(t) {
                    return this.lastWrite = Date.now(),
                    e = JSON.stringify(this),
                    localStorage.setItem("WeekPlannerState-" + this.user, e),
                    l[this.user] && l[this.user].dispatch(this),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.isExpired = function(t) {
            return Object(a.default)(this.lastWrite, Object(o.default)(t, e.EXPIRATION_HOURS))
        }
        ,
        e.EXPIRATION_HOURS = 12,
        e.VERSION = 2,
        e
    }()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return o
    }
    )),
    n.d(t, "a", (function() {
        return i
    }
    ));
    function r() {
        return parseInt(localStorage.getItem("lastOnboardingActivity"), 10) || 0
    }
    var a = r();
    function o() {
        a = Date.now(),
        localStorage.setItem("lastOnboardingActivity", "" + a)
    }
    function i() {
        return a > Date.now() - 6e5
    }
    addEventListener("storage", (function() {
        a = Math.max(a, r())
    }
    ))
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }
    )),
    n.d(t, "d", (function() {
        return c
    }
    )),
    n.d(t, "f", (function() {
        return l
    }
    )),
    n.d(t, "e", (function() {
        return u
    }
    )),
    n.d(t, "b", (function() {
        return p
    }
    )),
    n.d(t, "g", (function() {
        return m
    }
    )),
    n.d(t, "c", (function() {
        return h
    }
    ));
    var r = n(0)
      , a = n(13);
    var o = n(30)
      , i = ["user", "role", "school", "debug", "testVersion", "testversion", "features", "schoolGrade", "schoolgrade", "schoolType", "schooltype", "baseGroup", "tuitionGroups"];
    function s(e, t, n) {
        var r = function(e) {
            return [{
                type: "email",
                value: e.mail
            }, {
                type: "school",
                value: e.school
            }].concat(e.roles.map((function(e) {
                return {
                    type: "role",
                    value: e
                }
            }
            ))).concat(e.roles.map((function(t) {
                return {
                    type: "schoolRole",
                    value: e.school + "/" + t
                }
            }
            )))
        }(e);
        return "R" !== n && e.tutorFor && (r = r.filter((function(e) {
            return "email" !== e.type
        }
        ))),
        Object(a.m)(a.b.fromStringArray(t.acl || []), r, n)
    }
    function c(e, t) {
        return s(e, t, "W")
    }
    function l(e, t) {
        var n = e.roles.some((function(e) {
            return "EMPLOYEE" === e || "ADMIN" === e
        }
        ))
          , r = (t || "").toLowerCase() === e.school.toLowerCase();
        return n && r
    }
    function u(e, t) {
        return e.roles.includes("ADMIN") || l(e, t)
    }
    var d = function(e) {
        var t = e.role
          , n = e.school
          , a = e.url
          , i = Object(o.b)(location.search)
          , s = Object(r.__assign)(Object(r.__assign)({}, i), {
            role: t,
            school: n
        })
          , c = Object(o.a)(s);
        a ? location.href = "" + a + c : (location.hash = "#",
        location.search = c)
    };
    function p(e) {
        d(e)
    }
    function m(e, t, n) {
        var a, s, c = Object(o.b)(location.search);
        n && c[n] && delete c[n];
        var l = {};
        try {
            for (var u = Object(r.__values)(i), d = u.next(); !d.done; d = u.next()) {
                var p = d.value;
                c[p] && (l[p] = c[p])
            }
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                d && !d.done && (s = u.return) && s.call(u)
            } finally {
                if (a)
                    throw a.error
            }
        }
        var m = Object(o.a)(Object(r.__assign)(Object(r.__assign)({}, l), t))
          , h = e.indexOf("#");
        return h >= 0 ? "" + e.substr(0, h) + m + e.substr(h) : "" + e + m
    }
    function h(e) {
        var t = Object(o.b)(location.search)
          , n = Object(r.__assign)(Object(r.__assign)({}, t), e);
        location.search = Object(o.a)(n)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    }
    )),
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = function(e) {
        return /gymnasium/i.test(e.schoolType) || /gymnasiet/.test(e.mail)
    }
      , a = function(e) {
        return e.roles.some((function(e) {
            return ["ADMIN", "EMPLOYEE"].includes(e)
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        if (!("function" == typeof n.value))
            throw new Error("Invalid @bound() decoration. Must be on a method.");
        var r = n.value
          , a = !1;
        return {
            configurable: !0,
            get: function() {
                if (a || this === e.prototype || this.hasOwnProperty(t) || "function" != typeof r)
                    return r;
                var n = r.bind(this);
                return a = !0,
                Object.defineProperty(this, t, {
                    configurable: !0,
                    get: function() {
                        return n
                    },
                    set: function(e) {
                        r = e,
                        delete this[t]
                    }
                }),
                a = !1,
                n
            },
            set: function(e) {
                r = e
            }
        }
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = n(10);
    new Set(["KED", "Stockholm", "Norrkoping", "Linkoping", "Katrineholm", "Orebro", "Nykoping", "Trelleborg", "Lund", "Landskrona", "Ystad", "Helsingborg"]);
    function a(e) {
        e.schoolType,
        e.mail,
        e.school;
        return !!r.a.IC_API_URL
    }
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }
    ));
    var r = n(1)
      , a = n.n(r)
      , o = n(116)
      , i = n(7)
      , s = Object(o.a)("EnvContext", (function() {
        return a.a.createContext(i.b)
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return i
    }
    ));
    var r = n(1)
      , a = n(124)
      , o = function(e) {
        var t = e.label
          , n = void 0 === t ? "" : t;
        return r.createElement("span", null, r.createElement("i", {
            className: "fas fa-spinner fa-spin",
            "aria-hidden": "true"
        }), " ", n)
    }
      , i = function(e) {
        var t = e.label
          , n = void 0 === t ? "" : t
          , i = e.timeoutms
          , s = void 0 === i ? a.a : i;
        return r.createElement(a.b, {
            timeoutms: s
        }, r.createElement(o, {
            label: n
        }))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(198);
    n.d(t, "a", (function() {
        return r.a
    }
    )),
    n.d(t, "b", (function() {
        return r.b
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }
    )),
    n.d(t, "b", (function() {
        return s
    }
    ));
    var r = n(0)
      , a = n(1)
      , o = n.n(a);
    var i = function(e) {
        var t, n, i = e.classNames, s = e.faIcon, c = e.type, l = e.context, u = e.size, d = e.disabled, p = e.action, m = e.url, h = (e.style,
        e.children), g = Object(r.__rest)(e, ["classNames", "faIcon", "type", "context", "size", "disabled", "action", "url", "style", "children"]), b = m || g.href || "link" === c ? "a" : "button", f = Object(r.__read)(Object(a.useState)(!1), 2), v = f[0], k = f[1], w = (n = Object(a.useRef)(!1),
        Object(a.useEffect)((function() {
            return n.current = !0,
            function() {
                n.current = !1
            }
        }
        ), []),
        function() {
            return n.current
        }
        ), y = Object(r.__spreadArray)(["btn"], Object(r.__read)(null != i ? i : [])).join(" ");
        u && (y = y + " btn-" + u),
        g.className && (y += g.className),
        (d || v) && (y += " disabled"),
        l && (y += " btn-" + l),
        c && (y += " animate-scale");
        var _ = m || g.href ? null !== (t = g.target) && void 0 !== t ? t : "_blank" : void 0;
        var O = Object(r.__assign)(Object(r.__assign)({}, g), {
            className: y,
            onClick: v || d || !p ? null : function() {
                var e = p.apply(this, arguments);
                if ("function" == typeof (null == e ? void 0 : e.then)) {
                    k(!0);
                    var t = function() {
                        return w() && k(!1)
                    };
                    e.then(t, t)
                }
                return e
            }
            ,
            target: _
        });
        return d && "button" === b && (O.disabled = d),
        "a" !== b || O.href || (O.href = m),
        ["addClass", "label", "history", "loction", "match", "staticContext"].map((function(e) {
            delete O[e]
        }
        )),
        o.a.createElement(b, Object(r.__assign)({}, O), s && o.a.createElement("i", {
            className: s,
            style: c ? {
                marginRight: 0
            } : void 0,
            "aria-hidden": "true"
        }), h)
    }
      , s = function(e) {
        return o.a.createElement("div", {
            className: "btn-group"
        }, e.children)
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return T
    }
    ));
    var r = n(0)
      , a = n(7)
      , o = n(91)
      , i = "assign-task"
      , s = "mark-task-as-done"
      , c = "add-strategy"
      , l = "add-evaluation"
      , u = "add-term-goals"
      , d = "schedule-task"
      , p = "evaluate-strategy"
      , m = "explore"
      , h = "plan-term"
      , g = "media"
      , b = n(13)
      , f = n(20)
      , v = n(10)
      , k = n(80)
      , w = n(44)
      , y = n(245)
      , _ = n(195)
      , O = /debug/.test(location.search) ? function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return Object(r.__awaiter)(void 0, void 0, void 0, (function() {
            var t;
            return Object(r.__generator)(this, (function(n) {
                switch (n.label) {
                case 0:
                    return [4, E.apply(void 0, Object(r.__spreadArray)([], Object(r.__read)(e)))];
                case 1:
                    return (t = n.sent()) && console.log("Event would have been sent but was blocked to prohibit multiple events:", e),
                    [2, t]
                }
            }
            ))
        }
        ))
    }
    : E
      , T = function() {
        function e() {}
        return e.sendAssignTaskEvent = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, j(i)];
                    case 1:
                        return t.sent() ? [2] : [4, this.sendEvent({
                            eventType: i,
                            event: e
                        })];
                    case 2:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendMarkTaskAsDoneEvent = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return e.done ? [4, O(s, e.taskName)] : [2];
                    case 1:
                        return t.sent() ? [2] : [4, this.sendEvent({
                            eventType: s,
                            event: e
                        })];
                    case 2:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendAddEvaluationEvent = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return Object(r.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return (t = !Object(k.a)()) ? [4, O(l, "" + e.year, "" + e.week)] : [3, 2];
                    case 1:
                        t = n.sent(),
                        n.label = 2;
                    case 2:
                        return t ? [2] : [4, this.sendEvent({
                            eventType: l,
                            event: e
                        })];
                    case 3:
                        return n.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendScheduleTaskEvent = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, O(d, e)];
                    case 1:
                        return t.sent() ? [2] : [4, this.sendEvent({
                            eventType: d,
                            event: {
                                taskName: e
                            }
                        })];
                    case 2:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendAddStrategyEvent = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return (e = !Object(k.a)()) ? [4, j(c)] : [3, 2];
                    case 1:
                        e = t.sent(),
                        t.label = 2;
                    case 2:
                        return e ? [2] : [4, this.sendEvent({
                            eventType: c,
                            event: {}
                        })];
                    case 3:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendEvaluateStrategyEvent = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, j(p)];
                    case 1:
                        return e.sent() ? [2] : [4, this.sendEvent({
                            eventType: p,
                            event: {}
                        })];
                    case 2:
                        return e.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendAddTermGoalsEvent = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.sendEvent({
                            eventType: u,
                            event: e
                        })];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendPlanTermEvent = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.sendEvent({
                            eventType: h,
                            event: e
                        })];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendExploreEvent = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.sendEvent({
                            eventType: m,
                            event: e
                        })];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendMediaEvent = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.sendEvent({
                            eventType: g,
                            event: e
                        })];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.sendEvent = function(e) {
            var t;
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var n, i, s, c, l;
                return Object(r.__generator)(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        if (!v.a.IC_API_URL)
                            return [3, 6];
                        u.label = 1;
                    case 1:
                        return u.trys.push([1, 5, , 6]),
                        w.a.env && (null === (t = w.a.env.currentUser) || void 0 === t ? void 0 : t.mail) !== a.b.currentUser.mail || a.b.currentUser.children || a.b.currentUser.impersonator || a.b.tutored ? [2] : (n = Object(o.a)(a.b.currentUser),
                        [4, a.b.kedBackendClient.http.post("insertcoin/event", Object(r.__assign)(Object(r.__assign)({}, e), {
                            event: Object(r.__assign)(Object(r.__assign)({}, e.event), {
                                gwenEnabled: n
                            })
                        }))]);
                    case 2:
                        return (i = u.sent()).status >= 400 ? (c = (s = console).warn,
                        l = ["Insert Coin error - event type " + e.eventType + ": " + i.status + " "],
                        [4, i.text()]) : [3, 4];
                    case 3:
                        c.apply(s, l.concat([u.sent()])),
                        u.label = 4;
                    case 4:
                        return a.b.icClient.suspense.$cache.invalidate("missionPath"),
                        [3, 6];
                    case 5:
                        return u.sent(),
                        console.warn("Could not send event to Insert Coin"),
                        [3, 6];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    function j(e) {
        return Object(r.__awaiter)(this, void 0, void 0, (function() {
            var t;
            return Object(r.__generator)(this, (function(n) {
                switch (n.label) {
                case 0:
                    return t = new Date,
                    [4, O(e, "" + Object(y.default)(t), "" + Object(_.a)(t))];
                case 1:
                    return [2, n.sent()]
                }
            }
            ))
        }
        ))
    }
    function E() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return Object(r.__awaiter)(this, void 0, void 0, (function() {
            var t, n;
            return Object(r.__generator)(this, (function(r) {
                switch (r.label) {
                case 0:
                    return r.trys.push([0, 2, , 3]),
                    [4, Object(b.i)(e.join(","))];
                case 1:
                    t = r.sent(),
                    n = void 0;
                    try {
                        n = JSON.parse(localStorage.getItem("icCool") || "[]")
                    } catch (e) {
                        n = []
                    }
                    return n.includes(t) ? [2, !0] : (n.push(t),
                    n.length > 100 && (n = n.slice(100 - n.length)),
                    localStorage.setItem("icCool", JSON.stringify(n)),
                    [2, !1]);
                case 2:
                    return r.sent(),
                    [2, !1];
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    f.a.InsertCoinService || (f.a.InsertCoinService = T)
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = n(0)
      , a = function(e) {
        function t(t) {
            var n = e.call(this, (function(e) {
                var t = {
                    unsubscribe: function() {
                        return n.subscribers = n.subscribers.filter((function(t) {
                            return t[0] !== e
                        }
                        ))
                    }
                };
                return n.subscribers.push([e, t]),
                n.error ? e(null, n.error, t) : e(n.value, void 0, t),
                t
            }
            )) || this;
            return n.subscribers = [],
            n.value = t,
            n
        }
        return Object(r.__extends)(t, e),
        t.prototype.dispatch = function(e) {
            this.value = e,
            this.error = void 0,
            this._dispatch()
        }
        ,
        t.prototype.dispatchError = function(e) {
            this.error = e,
            this._dispatch()
        }
        ,
        t.prototype._dispatch = function() {
            var e = this;
            this.subscribers.forEach((function(t) {
                var n = t[0]
                  , r = t[1];
                try {
                    n(e.value, e.error, r)
                } catch (e) {
                    n(null, e, r)
                }
            }
            ))
        }
        ,
        t
    }(n(65).a)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    }
    ));
    var r = n(0)
      , a = n(75)
      , o = n(146)
      , i = n(65)
      , s = n(104)
      , c = n(53)
      , l = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return Object(r.__extends)(t, e),
        t.prototype._map = function(e) {
            throw "mixedin"
        }
        ,
        t.from = function(e) {
            if (e.subscribe)
                return new t((function(t) {
                    return e.subscribe(t)
                }
                ));
            if (Array.isArray(e)) {
                var n = new s.a(e);
                return new t((function(e) {
                    return n.subscribe(e)
                }
                ))
            }
            throw new Error("ObservableCollection.from() can only take arrays or observables")
        }
        ,
        t.prototype.map = function(e) {
            return this._map((function(t) {
                return t.map((function(t) {
                    return e(t)
                }
                ))
            }
            ))
        }
        ,
        t.prototype.flat = function() {
            return this._map((function(e) {
                return [].concat.apply([], e)
            }
            ))
        }
        ,
        t.prototype.filter = function(e) {
            return this._map((function(t) {
                return t.filter(e)
            }
            ))
        }
        ,
        t.prototype.concat = function(e) {
            return t.from(this.toValue().combineLatest(e).map((function(e) {
                var t = e[0]
                  , n = e[1];
                return t.concat(n)
            }
            )))
        }
        ,
        t.prototype.orderBy = function(e) {
            return this.toValue().map((function(t) {
                return t.slice().sort((function(t, n) {
                    var r = t && t[e]
                      , a = n && n[e];
                    return r > a ? 1 : r < a ? -1 : 0
                }
                ))
            }
            )).toCollection((function(e) {
                return e
            }
            ))
        }
        ,
        t.prototype.toValue = function() {
            var e = this;
            return new i.a((function(t) {
                return e.subscribe(t)
            }
            ))
        }
        ,
        t.prototype.read = function() {
            var e = c.a.current;
            if (!e)
                throw new Error("Invalid FiberContext");
            var t = this.toValue();
            return t._c = this,
            e.prerender ? t.read([])[0] : t.read()
        }
        ,
        t.prototype.load = function() {
            return this.toValue().load()
        }
        ,
        t.prototype.groupBy = function(e) {
            return this.toValue().map((function(t) {
                var n = {};
                return t.forEach((function(t) {
                    (n[t[e]] || (n[t[e]] = [])).push(t)
                }
                )),
                n
            }
            ))
        }
        ,
        t.prototype.first = function() {
            return this.toValue().map((function(e) {
                return e[0]
            }
            ))
        }
        ,
        t.prototype.last = function() {
            return this.toValue().map((function(e) {
                return e[e.length - 1]
            }
            ))
        }
        ,
        t
    }(a.a);
    l.prototype._map = Object(o.a)(l)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "e", (function() {
        return r.a
    }
    )),
    n.d(t, "i", (function() {
        return i
    }
    )),
    n.d(t, "g", (function() {
        return s
    }
    )),
    n.d(t, "d", (function() {
        return l
    }
    )),
    n.d(t, "f", (function() {
        return o.a
    }
    )),
    n.d(t, "a", (function() {
        return u.a
    }
    )),
    n.d(t, "c", (function() {
        return d.a
    }
    )),
    n.d(t, "b", (function() {
        return a.a
    }
    )),
    n.d(t, "j", (function() {
        return p
    }
    )),
    n.d(t, "h", (function() {
        return m.a
    }
    ));
    var r = n(75)
      , a = n(53)
      , o = n(65);
    function i(e) {
        return new o.a((function(t) {
            var n = !1
              , r = [];
            function o() {
                r.forEach((function(e) {
                    return e.unsubscribe()
                }
                )),
                r = []
            }
            var i = {
                unsubscribe: function() {
                    n = !0,
                    o()
                }
            }
              , s = !1
              , c = Promise.resolve();
            function l() {
                if (o(),
                !n) {
                    var u = a.a.current;
                    try {
                        var d = [];
                        a.a.current = {
                            observables: d,
                            prerender: !1
                        };
                        var p = e();
                        r = d.map((function(e) {
                            var r = e[0]
                              , a = (e[1],
                            e[2])
                              , u = !0
                              , d = r.subscribe((function(e, r, d) {
                                r ? function(e) {
                                    o(),
                                    s || (s = !0,
                                    c.then((function() {
                                        s = !1,
                                        !n && t(null, e, i)
                                    }
                                    )))
                                }(r) : u || e !== a && (o(),
                                s || (s = !0,
                                c.then((function() {
                                    s = !1,
                                    !n && l()
                                }
                                )))),
                                a = e
                            }
                            ));
                            return u = !1,
                            d
                        }
                        )),
                        t(p, null, i)
                    } catch (e) {
                        if (!e || "function" != typeof e.then)
                            return void (!n && t(null, e, i));
                        e.then((function() {
                            return !n && l()
                        }
                        ), (function(e) {
                            return !n && t(null, e, i)
                        }
                        ))
                    } finally {
                        a.a.current = u
                    }
                }
            }
            return l(),
            i
        }
        ))
    }
    var s = function(e) {
        return i(e).load()
    }
      , c = n(0)
      , l = function(e) {
        function t(t, n) {
            void 0 === n && (n = 300);
            var r = this
              , a = []
              , o = !1
              , i = null
              , s = null
              , c = null
              , l = null;
            function u(e, t, n) {
                o = !0,
                s = e,
                i = t,
                a.forEach((function(e) {
                    return e(s, i, n)
                }
                ))
            }
            function d() {
                c = null,
                l && 0 === a.length && (l.unsubscribe(),
                l = null)
            }
            return (r = e.call(this, (function(e) {
                var r = {
                    unsubscribe: function() {
                        a = a.filter((function(e) {
                            return e !== p
                        }
                        )),
                        n < 1 / 0 && 0 === a.length && (c && clearTimeout(c),
                        c = setTimeout(d, n))
                    }
                };
                function p(t, n) {
                    e(t, n, r)
                }
                return a.push(p),
                o && e(s, i, r),
                l || (l = t.subscribe(u)),
                r
            }
            )) || this).dispose = function() {
                n = 0,
                d()
            }
            ,
            r
        }
        return Object(c.__extends)(t, e),
        t
    }(o.a)
      , u = n(105)
      , d = n(104);
    function p(e) {
        var t = !0
          , n = e.map((function(e) {
            try {
                return e()
            } catch (e) {
                if (!e || "function" != typeof e.then)
                    throw e;
                return t = !1,
                e
            }
        }
        ));
        if (!t)
            throw Promise.all(n);
        return n
    }
    var m = n(206)
}
, , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }
    ));
    var r = n(13)
      , a = n(37)
      , o = n(10);
    function i(e, t, n) {
        return new r.e(a.c,a.d,e + t.mail + location.search + (t.impersonator ? "(readOnly)" : ""),o.b.KED_CLIENT_ID,o.b.KED_CLIENT_SECRET,e,{
            email: t.mail.toLowerCase(),
            roles: t.roles,
            school: t.school,
            schoolType: t.schoolType,
            scopes: n,
            baseGroup: t.baseGroup,
            tuitionGroups: t.tuitionGroups,
            name: t.displayName,
            readOnly: t.impersonator ? "email" : void 0
        })
    }
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    }
    ));
    var r, a = n(0), o = n(1), i = n(12), s = n(197), c = n(41), l = function(e) {
        var t = e.onClick
          , n = e.title
          , l = e.className
          , u = e.position
          , d = e.size
          , p = Object(o.useContext)(c.b).intl;
        return o.createElement(s.a, {
            icon: "remove",
            title: n || Object(i.q)(p, "common.deleteLbl", Object(i.a)(r || (r = Object(a.__makeTemplateObject)(["Radera"], ["Radera"])))),
            className: l,
            position: u,
            color: "remove",
            size: d,
            onClick: t
        })
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = n(20);
    function a(e, t) {
        var n = r.a.singletons || (r.a.singletons = {});
        return n[e] || (n[e] = t())
    }
}
, , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return i
    }
    ));
    var r = n(0)
      , a = n(1)
      , o = 1e3;
    function i(e) {
        var t = e.children
          , n = e.timeoutms
          , i = void 0 === n ? o : n
          , s = Object(r.__read)(Object(a.useState)(!1), 2)
          , c = s[0]
          , l = s[1];
        return Object(a.useEffect)((function() {
            var e = setTimeout((function() {
                return l(!0)
            }
            ), i);
            return function() {
                return clearTimeout(e)
            }
        }
        ), []),
        c ? t : null
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    ));
    var r = function() {
        function e() {}
        return e.opacity = function(e, t) {
            var n = this.rgb(e);
            return "rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + (t > 1 ? t / 100 : t) + ")"
        }
        ,
        e.darken = function(e, t) {
            void 0 === t && (t = 10);
            var n = this.rgb(e);
            return n.r *= 1 - t / 100,
            n.r = n.r > 0 ? n.r : 0,
            n.g *= 1 - t / 100,
            n.g = n.g > 0 ? n.g : 0,
            n.b *= 1 - t / 100,
            n.b = n.b > 0 ? n.b : 0,
            "rgb(" + n.r + ", " + n.g + ", " + n.b + ")"
        }
        ,
        e.lighten = function(e, t) {
            void 0 === t && (t = 10);
            var n = this.rgb(e);
            return n.r *= 1 + t / 100,
            n.r = n.r < 255 ? n.r : 255,
            n.g *= 1 + t / 100,
            n.g = n.g < 255 ? n.g : 255,
            n.b *= 1 + t / 100,
            n.b = n.b < 255 ? n.b : 255,
            "rgb(" + n.r + ", " + n.g + ", " + n.b + ")"
        }
        ,
        e.rgb = function(e) {
            var t = {
                r: 0,
                g: 0,
                b: 0
            };
            if ("rgb" === e.slice(0, 3)) {
                var n = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                n && 4 === n.length && (t.r = Number.parseInt(n[1], 10),
                t.g = Number.parseInt(n[2], 10),
                t.b = Number.parseInt(n[3], 10))
            } else {
                var r = e.replace("#", "");
                r = 3 === r.length ? r.split("").map((function(e) {
                    return e + e
                }
                )).join("") : r,
                t.r = Number.parseInt(r.slice(0, 2), 16),
                t.g = Number.parseInt(r.slice(2, 4), 16),
                t.b = Number.parseInt(r.slice(4, 6), 16)
            }
            return t
        }
        ,
        e
    }()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    ));
    var r = n(20)
      , a = n(14)
      , o = r.a.dialogs || (r.a.dialogs = new a.b([]))
}
, , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }
    )),
    n.d(t, "b", (function() {
        return s
    }
    ));
    var r = n(0)
      , a = n(1)
      , o = n(124)
      , i = function() {
        return a.createElement("img", {
            style: {
                border: 0,
                margin: 0,
                padding: 0
            },
            className: "ellipsis-loader"
        })
    }
      , s = function(e) {
        return a.createElement(o.b, Object(r.__assign)({}, e), a.createElement(i, null))
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    }
    )),
    n.d(t, "a", (function() {
        return a
    }
    )),
    n.d(t, "c", (function() {
        return o
    }
    ));
    var r = {
        theme: {
            yellow: "rgb(218, 218, 57)",
            cyan: "rgb(61, 188, 162)",
            purple: "rgb(102, 49, 143)",
            red: "rgb(233, 43, 94)",
            "kg-orange": "rgb(241, 93, 37)",
            orange: "rgb(246, 192, 48)",
            "ks-blue": "rgb(0, 93, 172)",
            blue: "rgb(0, 164, 218)",
            pink: "rgb(232, 46, 142)",
            magenta: "rgb(165, 41, 140)",
            green: "rgb(122, 182, 77)",
            task: "rgb(114, 139, 222)",
            assignment: "rgb(114, 139, 222)",
            exercise: "rgb(101, 188, 152)",
            primary: "rgb(61, 188, 162)"
        },
        actions: {
            edit: "#c9b145",
            view: "#4f80cc",
            show: "#5c9655",
            hide: "#ce786e",
            remove: "var(--col-red)",
            delete: "var(--col-red)"
        },
        colorId: ["#e1e1e1", "#dbadff", "#dc2127", "#ff887c", "#ff887c", "#ffb878", "#fbd75b", "#51b749", "#7ae7bf", "#46d6db", "#a4bdfc", "#5484ed", "#dbadff", "#dc2127", "#ff887c", "#ffb878", "#fbd75b", "#51b749", "#7ae7bf", "#46d6db", "#a4bdfc", "#5484ed", "#5484ed", "#5484ed", "#5484ed", "#5484ed"],
        eventCourse: {
            aff: "#df9b9b",
            bas: "#a0a1d0",
            bg: "#a0a1d0",
            bio: "#8ad3c4",
            eng: "#cc9191",
            en: "#cc9191",
            ent: "#e4e4e4",
            mu: "#adaee5",
            est: "#fafa51",
            bd: "#fafa51",
            sl: "#fafa51",
            etn: "#bc8888",
            fil: "#f6a7a7",
            fys: "#78cdbc",
            for: "#b8b9e8",
            kur: "#b8b9e8",
            fy: "#b8b9e8",
            ke: "#b8b9e8",
            te: "#b8b9e8",
            ge: "#b8b9e8",
            hi: "#b8b9e8",
            re: "#b8b9e8",
            sa: "#b8b9e8",
            no: "#b8b9e8",
            so: "#b8b9e8",
            ku: "#b8b9e8",
            geo: "#8c8db0",
            gym: "#a0a3e2",
            his: "#e1e175",
            idh: "#6aa195",
            id: "#6aa195",
            int: "#e0e0e0",
            jou: "#cfcfcf",
            kem: "#a87abe",
            kom: "#e297e2",
            led: "#f6a7a7",
            mar: "#9d9d9d",
            mat: "#e1e175",
            ma: "#e1e175",
            med: "#e4e4e4",
            man: "#a0a3e2",
            nat: "#bcbc6c",
            ph: "#4ffafa",
            pri: "#faa4fa",
            psy: "#cf7aae",
            lun: "#cf7aae",
            ras: "#cf7aae",
            ra: "#cf7aae",
            rel: "#df9b9b",
            rat: "#b680cf",
            sam: "#e2e251",
            soc: "#78cdbc",
            sve: "#9c9ee4",
            sva: "#9c9ee4",
            tek: "#d891fa",
            tys: "#8c8db0",
            fra: "#8c8db0",
            spa: "#8c8db0",
            sp: "#8c8db0",
            fr: "#8c8db0",
            ty: "#8c8db0",
            wor: "#e7e797"
        },
        urkund: ["#73ae42", "#ffff9d", "#ffeb5a", "#ffca08", "#f07110", "#ee5d5a", "#d62d2a", "#ad2821", "#000000"]
    }
      , a = {
        sm: {
            max: "759px"
        },
        md: {
            min: "760px",
            max: "1024px"
        },
        lg: {
            min: "1025px",
            max: "1399px"
        },
        xl: {
            min: "1400px"
        }
    }
      , o = {
        remove: "fas fa-times",
        delete: "fas fa-times",
        edit: "fas fa-pencil-alt",
        view: "fas fa-eye",
        show: "fas fa-eye",
        hide: "fas fa-eye-slash"
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }
    ));
    var r, a = n(0), o = n(1), i = n.n(o), s = n(12), c = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.state = {
                hasError: !1
            },
            n
        }
        return Object(a.__extends)(t, e),
        t.prototype.componentDidCatch = function(e, t) {
            this.setState({
                hasError: !0,
                error: e,
                errorInfo: t
            }),
            console.error(e, t)
        }
        ,
        t.prototype.render = function() {
            return this.state.hasError ? this.props.render ? this.props.render(this.state.error, this.state.errorInfo) : i.a.createElement("span", {
                style: {
                    fontStyle: "italic"
                }
            }, Object(s.a)(r || (r = Object(a.__makeTemplateObject)(["Oops. Problems..."], ["Oops. Problems..."])))) : this.props.children
        }
        ,
        t
    }(o.Component)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return tt
    }
    )),
    n.d(t, "b", (function() {
        return ot
    }
    )),
    n.d(t, "c", (function() {
        return Nt
    }
    )),
    n.d(t, "d", (function() {
        return vt
    }
    )),
    n.d(t, "e", (function() {
        return Qt
    }
    )),
    n.d(t, "f", (function() {
        return on
    }
    )),
    n.d(t, "g", (function() {
        return Sn
    }
    ));
    var r, a = n(0), o = n(1), i = n.n(o), s = n(5), c = n(15), l = function(e) {
        var t = e.stroke
          , n = e.progress
          , r = e.width
          , a = e.className
          , o = r / (r / 50) * .95
          , s = Math.round(Math.PI * o * 2);
        return i.a.createElement(u, {
            className: a,
            viewBox: "-50 -50 100 100"
        }, i.a.createElement("circle", {
            r: o,
            fill: "none",
            strokeWidth: "5",
            stroke: c.a.background
        }), i.a.createElement("circle", {
            transform: "rotate(-90)",
            r: o,
            fill: "none",
            strokeWidth: "5",
            stroke: t,
            strokeLinecap: "round",
            strokeDasharray: s,
            strokeDashoffset: s - n * s,
            style: {
                transition: "stroke-dashoffset 1s ease-in-out"
            }
        }))
    }, u = s.b.svg.withConfig({
        displayName: "Circle",
        componentId: "-k29zid"
    })(r || (r = Object(a.__makeTemplateObject)(["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n"], ["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n"]))), d = function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
        }), i.a.createElement("path", {
            d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
        }))
    }, p = function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            version: "1",
            viewBox: "0 0 369 367"
        }), i.a.createElement("path", {
            fill: "none",
            d: "M170 36H50C27 36 9 54 9 77v240c0 22 18 40 41 40h241c22 0 40-18 40-40V197"
        }), i.a.createElement("path", {
            d: "M330 105L197 238v1h-1v1h-2l-1 1h-5v-1h-2v-1h-1v-1l-55-55h-1v-1l-1-1v-2h-1v-4h1v-2h1v-1l1-1L262 39l68 66zm-180 72l41 41 113-113-41-40-113 112z"
        }), i.a.createElement("path", {
            d: "M301 10h6v1h3v1h2v1h2v1h1v1h2v1h1v1l34 33v1h1v1h1v2h1v1h1v2h1v3h1v4h1v6h-1v4h-1v3h-1v2h-1v1h-1v2h-1v1h-1v1l-36 35-67-67 35-35 1-1h1v-1h1v-1h1v-1h2v-1h2v-1h3v-1h6zm0 18h-1v1h-2v1l-23 22 41 41 23-23v-1h1v-4h-1v-2l-34-33h-1v-1h-2v-1h-1zM193 237a2 2 0 0 1-1 4l-67 25a18 18 0 0 1-23-23 1571238 1571238 0 0 0 27-69l2 1 62 62z"
        }), i.a.createElement("path", {
            d: "M129 174h1v1h1l62 62v1h1v2h-1v1h-1l-67 25h-1l-1 1h-9v-1h-2l-1-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-2h-1v-2h-1v-3h-1v-7l1-1v-2l25-67v-1h2v-1zm-9 74l42-16-26-26-16 42z"
        }), i.a.createElement("g", null, i.a.createElement("path", {
            d: "M9 269h65"
        })))
    };
    function m(e) {
        return e ? /^https?:\/\//.test(e) ? e : "https://gwen.insertcoin.se/widget/images/action-icons/" + e + ".svg" : "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg"
    }
    var h, g, b, f, v, k, w, y, _, O, T, j, E, S, x, C, D, N, A, I, L, P, V, G, R, B, U, M, K, W, F, z, q, H, Y, Z, J, Q, $, X, ee, te, ne, re, ae, oe, ie, se, ce, le, ue, de, pe, me, he, ge, be, fe, ve, ke, we, ye, _e, Oe, Te, je, Ee, Se, xe, Ce, De, Ne, Ae, Ie, Le, Pe, Ve, Ge, Re, Be, Ue, Me, Ke, We, Fe, ze, qe, He, Ye, Ze, Je = function(e) {
        var t = e.width || 150
          , n = e.activeTier
          , r = e.icon;
        return i.a.createElement(Qe, {
            style: {
                width: t + "px"
            }
        }, i.a.createElement(l, {
            stroke: c.a.primary,
            width: t,
            progress: n ? Math.min(n.progress, n.amount) / n.amount : 0
        }), i.a.createElement($e, {
            src: m(r || n.icon)
        }), i.a.createElement(Xe, null, i.a.createElement(et, {
            style: {
                fontSize: t / 8 + "px"
            }
        }, n ? Math.min(n.progress, n.amount) : 0, " / ", (null == n ? void 0 : n.amount) || 0)))
    }, Qe = s.b.div.withConfig({
        displayName: "Progress",
        componentId: "-1m8edn5"
    })(h || (h = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n"], ["\n\tposition: relative;\n"]))), $e = s.b.img.withConfig({
        displayName: "Icon",
        componentId: "-mxn6zj"
    })(g || (g = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 25%;\n\tleft: 25%;\n\tdisplay: block;\n\twidth: 50%;\n\theight: 50%;\n\tobject-fit: contain;\n\toverflow: hidden;\n"], ["\n\tposition: absolute;\n\ttop: 25%;\n\tleft: 25%;\n\tdisplay: block;\n\twidth: 50%;\n\theight: 50%;\n\tobject-fit: contain;\n\toverflow: hidden;\n"]))), Xe = s.b.div.withConfig({
        displayName: "Label",
        componentId: "-ptmrek"
    })(b || (b = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\twidth: 50%;\n\theight: 20%;\n\tleft: 25%;\n\tbottom: -5%;\n\tborder-radius: 20%/50%;\n\tbackground: ", ";\n"], ["\n\tposition: absolute;\n\twidth: 50%;\n\theight: 20%;\n\tleft: 25%;\n\tbottom: -5%;\n\tborder-radius: 20%/50%;\n\tbackground: ", ";\n"])), c.a.primary), et = s.b.div.withConfig({
        displayName: "LabelText",
        componentId: "-t4j5yy"
    })(f || (f = Object(a.__makeTemplateObject)(["\n\theight: 100%;\n\twidth: 100%;\n\tcolor: white;\n\tfont-weight: 600;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"], ["\n\theight: 100%;\n\twidth: 100%;\n\tcolor: white;\n\tfont-weight: 600;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]))), tt = function(e) {
        var t = e.width || 150
          , n = e.achievement
          , r = n.tiers
          , a = n.title
          , o = n.icon
          , s = r.find((function(e) {
            return !e.completed
        }
        )) || r[r.length - 1];
        return i.a.createElement(nt, {
            onClick: function() {
                return e.openDetails ? e.openDetails() : {}
            }
        }, i.a.createElement(Je, {
            activeTier: s,
            width: t,
            icon: o
        }), i.a.createElement(rt, {
            style: {
                marginTop: t / 10 + "px"
            }
        }, a))
    }, nt = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-13kt8un"
    })(v || (v = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"]))), rt = s.b.span.withConfig({
        displayName: "Title",
        componentId: "-twu5aa"
    })(k || (k = Object(a.__makeTemplateObject)(["\n\twidth: 100%;\n\tmargin-top: 20px;\n\ttext-align: center;\n\tcolor: ", ";\n\twhite-space: nowrap;\n"], ["\n\twidth: 100%;\n\tmargin-top: 20px;\n\ttext-align: center;\n\tcolor: ", ";\n\twhite-space: nowrap;\n"])), c.a.text), at = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI"
    }, ot = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                activeTierIndex: t.getStartingIndex()
            },
            t
        }
        return Object(a.__extends)(t, e),
        t.prototype.getStartingIndex = function() {
            var e = this.props.data.tiers.sort((function(e, t) {
                return e.amount - t.amount
            }
            )).findIndex((function(e) {
                return !e.completed
            }
            ));
            return -1 === e ? this.props.data.tiers.length - 1 : e
        }
        ,
        t.prototype.setActiveTier = function(e) {
            this.setState({
                activeTierIndex: e
            })
        }
        ,
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = t.data
              , r = t.close
              , a = t.navigate
              , o = n.tiers
              , s = n.cta
              , c = n.icon
              , l = this.state.activeTierIndex
              , u = n.tiers[l];
            return i.a.createElement(it, null, i.a.createElement(pt, {
                onClick: function() {
                    return r()
                }
            }, i.a.createElement(d, null)), i.a.createElement(st, null, u.title), i.a.createElement(lt, null, o.length > 1 && o.map((function(t, n) {
                return i.a.createElement(i.a.Fragment, null, i.a.createElement(ut, {
                    active: n === l,
                    complete: !!t.completed,
                    onClick: function() {
                        return e.setActiveTier(n)
                    }
                }, at[n + 1]), n < o.length - 1 && i.a.createElement(dt, {
                    complete: !!t.completed
                }))
            }
            ))), i.a.createElement(Je, {
                activeTier: u,
                width: 150,
                icon: c
            }), i.a.createElement(ct, null, "" + u.description), s && i.a.createElement(mt, {
                onClick: function() {
                    return a(s)
                }
            }, "Ta mig dit!"))
        }
        ,
        t
    }(i.a.PureComponent), it = s.b.div.withConfig({
        displayName: "Modal",
        componentId: "-1w1qrhp"
    })(w || (w = Object(a.__makeTemplateObject)(["\n\tbox-sizing: content-box;\n\tposition: relative;\n\twidth: 500px;\n\theight: 400px;\n\tpadding: 20px;\n\tborder-radius: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbackground: white;\n"], ["\n\tbox-sizing: content-box;\n\tposition: relative;\n\twidth: 500px;\n\theight: 400px;\n\tpadding: 20px;\n\tborder-radius: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbackground: white;\n"]))), st = s.b.span.withConfig({
        displayName: "Title",
        componentId: "-1jqkia7"
    })(y || (y = Object(a.__makeTemplateObject)(["\n\tfont-weight: 600;\n\tfont-size: 24px;\n\tcolor: ", ";\n"], ["\n\tfont-weight: 600;\n\tfont-size: 24px;\n\tcolor: ", ";\n"])), c.a.text), ct = s.b.span.withConfig({
        displayName: "Description",
        componentId: "-cwkt7w"
    })(_ || (_ = Object(a.__makeTemplateObject)(["\n\tfont-weight: 500;\n\tfont-size: 20px;\n\tcolor: ", ";\n\tmargin-top: 20px;\n"], ["\n\tfont-weight: 500;\n\tfont-size: 20px;\n\tcolor: ", ";\n\tmargin-top: 20px;\n"])), c.a.text), lt = s.b.div.withConfig({
        displayName: "TierSelector",
        componentId: "-d54782"
    })(O || (O = Object(a.__makeTemplateObject)(["\n\theight: 20px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 20px 0;\n"], ["\n\theight: 20px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 20px 0;\n"]))), ut = s.b.div.withConfig({
        displayName: "TierButton",
        componentId: "-1ncgi47"
    })(T || (T = Object(a.__makeTemplateObject)(["\n\tborder: ", ";\n\twidth: 50px;\n\theight: 20px;\n\tborder-radius: 15px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tfont-weight: 600;\n\t", ";\n\t&:hover {\n\t\tborder: 3px solid ", ";\n\t\tcolor: ", ";\n\t\tbox-shadow: 0 0 10px ", ";\n\t\tcursor: pointer;\n\t}\n"], ["\n\tborder: ", ";\n\twidth: 50px;\n\theight: 20px;\n\tborder-radius: 15px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ", ";\n\tfont-weight: 600;\n\t", ";\n\t&:hover {\n\t\tborder: 3px solid ", ";\n\t\tcolor: ", ";\n\t\tbox-shadow: 0 0 10px ", ";\n\t\tcursor: pointer;\n\t}\n"])), (function(e) {
        return e.complete || e.active ? "3px solid " + c.a.primary : "3px solid #6e6e6e"
    }
    ), (function(e) {
        return e.complete || e.active ? "" + c.a.primary : "#6e6e6e"
    }
    ), (function(e) {
        return e.active ? "box-shadow: 0 0 10px " + c.a.primary + ";" : ""
    }
    ), c.a.primary, c.a.primary, c.a.primary), dt = s.b.div.withConfig({
        displayName: "TierConnector",
        componentId: "-ww7ahc"
    })(j || (j = Object(a.__makeTemplateObject)(["\n\theight: 9px;\n\twidth: 20px;\n\tborder-bottom: 3px solid ", ";\n\talign-self: flex-start;\n"], ["\n\theight: 9px;\n\twidth: 20px;\n\tborder-bottom: 3px solid ", ";\n\talign-self: flex-start;\n"])), (function(e) {
        return e.complete ? c.a.primary : "#6e6e6e"
    }
    )), pt = s.b.div.withConfig({
        displayName: "CloseButton",
        componentId: "-qewr3k"
    })(E || (E = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\theight: 40px;\n\twidth: 40px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n\t> svg {\n\t\theight: 75%;\n\t\twidth: 75%;\n\t\t> path {\n\t\t\tfill: #f47164;\n\t\t}\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\theight: 40px;\n\twidth: 40px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n\t> svg {\n\t\theight: 75%;\n\t\twidth: 75%;\n\t\t> path {\n\t\t\tfill: #f47164;\n\t\t}\n\t}\n"]))), mt = s.b.div.withConfig({
        displayName: "CTAButton",
        componentId: "-a4u9vv"
    })(S || (S = Object(a.__makeTemplateObject)(["\n\theight: 40px;\n\twidth: 200px;\n\tborder-radius: 25px;\n\tbackground: ", ";\n\tcolor: white;\n\tmargin-top: 30px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-weight: 600;\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t}\n"], ["\n\theight: 40px;\n\twidth: 200px;\n\tborder-radius: 25px;\n\tbackground: ", ";\n\tcolor: white;\n\tmargin-top: 30px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-weight: 600;\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t}\n"])), c.a.primary, c.a.primaryOnHover), ht = {
        hair: "Hår",
        body: "Kropp",
        eyes: "Ögon",
        nose: "Näsa",
        mouth: "Mun",
        hat: "Hatt",
        glasses: "Glasögon",
        shirt: "Tröja",
        special: "Special"
    }, gt = function(e) {
        var t = e.avatar
          , n = e.slotName
          , r = e.onSelect
          , a = e.isActive;
        return i.a.createElement(bt, null, i.a.createElement("h3", null, ht[n]), i.a.createElement(ft, {
            active: a,
            onClick: r
        }, t && i.a.createElement("img", {
            src: t.iconUrl,
            alt: "avatar " + n
        })))
    }, bt = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-uay7j6"
    })(x || (x = Object(a.__makeTemplateObject)(["\n\tmargin-bottom: 30px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\t> h3 {\n\t\ttext-align: center;\n\t\ttext-transform: capitalize;\n\t\tfont-size: 18px;\n\t\tmargin-bottom: 15px;\n\t}\n"], ["\n\tmargin-bottom: 30px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\t> h3 {\n\t\ttext-align: center;\n\t\ttext-transform: capitalize;\n\t\tfont-size: 18px;\n\t\tmargin-bottom: 15px;\n\t}\n"]))), ft = s.b.div.withConfig({
        displayName: "Button",
        componentId: "-1ml3i6o"
    })(C || (C = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100px;\n\theight: 100px;\n\tpadding: 5px;\n\tmargin: 0;\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tbackground-color: #efefef;\n\tborder: 5px solid ", ";\n\t> img {\n\t\twidth: 90%;\n\t\theight: 90%;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100px;\n\theight: 100px;\n\tpadding: 5px;\n\tmargin: 0;\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tbackground-color: #efefef;\n\tborder: 5px solid ", ";\n\t> img {\n\t\twidth: 90%;\n\t\theight: 90%;\n\t}\n"])), (function(e) {
        return e.active ? c.a.primary : "transparent"
    }
    )), vt = function(e) {
        var t = e.avatar
          , n = Object.values(t).map((function(e) {
            return null == e ? void 0 : e.components.map((function(e, t) {
                return i.a.createElement("img", {
                    key: t,
                    src: e.url,
                    alt: "things",
                    style: {
                        zIndex: e.layer + 10
                    }
                })
            }
            ))
        }
        ));
        return i.a.createElement(kt, null, n)
    }, kt = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-t7i8gd"
    })(D || (D = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\t> img {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n"], ["\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\t> img {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n"]))), wt = function(e) {
        var t = e.closeModal
          , n = e.resetChangeAvatar
          , r = e.saveChangeAvatar;
        return i.a.createElement(yt, {
            onClick: function() {
                return t()
            }
        }, i.a.createElement(_t, null, i.a.createElement("h1", {
            className: "avatar-modal__title"
        }, "Spara ändringar?"), i.a.createElement("div", null, i.a.createElement(Ot, {
            type: "button",
            onClick: function(e) {
                e.stopPropagation(),
                n()
            }
        }, "Nej"), i.a.createElement(Ot, {
            type: "submit",
            onClick: function(e) {
                e.stopPropagation(),
                r()
            }
        }, "Ja"))))
    }, yt = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-1q81flc"
    })(N || (N = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\ttransition: 0.3s ease;\n\tz-index: 100;\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\ttransition: 0.3s ease;\n\tz-index: 100;\n"]))), _t = s.b.div.withConfig({
        displayName: "Modal",
        componentId: "-1t42em7"
    })(A || (A = Object(a.__makeTemplateObject)(["\n\twidth: 200px;\n\tpadding: 20px;\n\ttext-align: center;\n\tbackground-color: white;\n\tborder-radius: 5px;\n\t> h1 {\n\t\tmargin-bottom: 20px;\n\t\tfont-size: 18px;\n\t}\n"], ["\n\twidth: 200px;\n\tpadding: 20px;\n\ttext-align: center;\n\tbackground-color: white;\n\tborder-radius: 5px;\n\t> h1 {\n\t\tmargin-bottom: 20px;\n\t\tfont-size: 18px;\n\t}\n"]))), Ot = s.b.button.withConfig({
        displayName: "Button",
        componentId: "-1u77bl"
    })(I || (I = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\tmax-width: 70px;\n\twidth: 100%;\n\tpadding: 10px;\n\tmargin-left: 5px;\n\tmargin-right: 5px;\n\tfont-weight: bold;\n\tcolor: white;\n\tbackground-size: 300% 100%;\n\tbackground-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\n\tbox-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\n\tborder: none;\n\tborder-radius: 15px;\n\t-moz-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\t-webkit-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n\tcursor: pointer;\n\t&:focus {\n\t\toutline: none;\n\t}\n\t&:hover {\n\t\tbackground-position: 100% 0;\n\t\t-moz-transition: all 0.4s ease-in-out;\n\t\t-o-transition: all 0.4s ease-in-out;\n\t\t-webkit-transition: all 0.4s ease-in-out;\n\t\ttransition: all 0.4s ease-in-out;\n\t}\n"], ["\n\tposition: relative;\n\tmax-width: 70px;\n\twidth: 100%;\n\tpadding: 10px;\n\tmargin-left: 5px;\n\tmargin-right: 5px;\n\tfont-weight: bold;\n\tcolor: white;\n\tbackground-size: 300% 100%;\n\tbackground-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\n\tbox-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\n\tborder: none;\n\tborder-radius: 15px;\n\t-moz-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\t-webkit-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n\tcursor: pointer;\n\t&:focus {\n\t\toutline: none;\n\t}\n\t&:hover {\n\t\tbackground-position: 100% 0;\n\t\t-moz-transition: all 0.4s ease-in-out;\n\t\t-o-transition: all 0.4s ease-in-out;\n\t\t-webkit-transition: all 0.4s ease-in-out;\n\t\ttransition: all 0.4s ease-in-out;\n\t}\n"]))), Tt = function(e) {
        var t = e.availableItems
          , n = e.currentLevel
          , r = e.onChangeItem
          , a = e.isActiveSelect
          , o = e.iconsBaseUrl;
        return i.a.createElement(jt, null, i.a.createElement("h4", null, "Välj:"), i.a.createElement(Et, null, new Array(Math.ceil(t.length / 4)).fill(void 0).map((function(e, s) {
            var c = [t[4 * s], t[4 * s + 1], t[4 * s + 2], t[4 * s + 3]];
            return i.a.createElement(St, null, c.map((function(e) {
                var t = (null == e ? void 0 : e.requiredLevel) <= n;
                return i.a.createElement(xt, {
                    exists: !!e,
                    available: t,
                    active: !!a && !!e && (null == a ? void 0 : a.id) === (null == e ? void 0 : e.id),
                    onClick: function() {
                        return t ? r(e) : function() {}
                    }
                }, !!e && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ct, {
                    available: t,
                    src: e.iconUrl,
                    alt: "things",
                    className: "avatar-select__icon",
                    width: "58px",
                    height: "58px"
                }), !t && i.a.createElement(Dt, {
                    src: o + "/icons/padlock.png",
                    alt: "lock things",
                    className: "avatar-select__lock-icon",
                    width: "58px",
                    height: "58px"
                })))
            }
            )))
        }
        ))))
    }, jt = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-1wqc13z"
    })(L || (L = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t> h4 {\n\t\ttext-align: center;\n\t\tfont-size: 18px;\n\t\tline-height: 21px;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t> h4 {\n\t\ttext-align: center;\n\t\tfont-size: 18px;\n\t\tline-height: 21px;\n\t}\n"]))), Et = s.b.div.withConfig({
        displayName: "Options",
        componentId: "-oyxuv5"
    })(P || (P = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 270px;\n\toverflow-y: auto;\n\n\t-webkit-overflow-scrolling: touch;\n\t&::-webkit-scrollbar {\n\t\twidth: 8px;\n\t}\n\t&::-webkit-scrollbar-track {\n\t\tbackground: #dfdfdf;\n\t}\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: #3a3a3a;\n\t\tborder-radius: 20px;\n\t\tborder: 3px solid #3a3a3a;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 270px;\n\toverflow-y: auto;\n\n\t-webkit-overflow-scrolling: touch;\n\t&::-webkit-scrollbar {\n\t\twidth: 8px;\n\t}\n\t&::-webkit-scrollbar-track {\n\t\tbackground: #dfdfdf;\n\t}\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: #3a3a3a;\n\t\tborder-radius: 20px;\n\t\tborder: 3px solid #3a3a3a;\n\t}\n"]))), St = s.b.div.withConfig({
        displayName: "Row",
        componentId: "-1v9odnn"
    })(V || (V = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n\t&:not(:last-child) {\n\t\tmargin-bottom: 12px;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n\t&:not(:last-child) {\n\t\tmargin-bottom: 12px;\n\t}\n"]))), xt = s.b.div.withConfig({
        displayName: "ItemWrapper",
        componentId: "-1frw6nv"
    })(G || (G = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 110px;\n\theight: 110px;\n\tmargin: 0 6px;\n\tborder-radius: 4px;\n\t", "\n\tcursor: ", ";\n\tborder: 5px solid ", ";\n\n\t", "\n"], ["\n\tposition: relative;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 110px;\n\theight: 110px;\n\tmargin: 0 6px;\n\tborder-radius: 4px;\n\t", "\n\tcursor: ", ";\n\tborder: 5px solid ", ";\n\n\t", "\n"])), (function(e) {
        return e.exists ? "background: #efefef;" : ""
    }
    ), (function(e) {
        return e.available ? "pointer" : "default"
    }
    ), (function(e) {
        return e.available && e.active ? c.a.primary : "transparent"
    }
    ), (function(e) {
        return e.available ? "&:hover {\n\t\tborder-color: " + c.a.primary + ";\n\t}" : ""
    }
    )), Ct = s.b.img.withConfig({
        displayName: "AvatarIcon",
        componentId: "-1o6sjyq"
    })(R || (R = Object(a.__makeTemplateObject)(["\n\tdisplay: inline-block;\n\twidth: 100%;\n\theight: auto;\n\topacity: ", ";\n"], ["\n\tdisplay: inline-block;\n\twidth: 100%;\n\theight: auto;\n\topacity: ", ";\n"])), (function(e) {
        return e.available ? 1 : .3
    }
    )), Dt = s.b.img.withConfig({
        displayName: "LockIcon",
        componentId: "-1oyvsru"
    })(B || (B = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\twidth: 58px;\n\theight: 58px;\n"], ["\n\tposition: absolute;\n\twidth: 58px;\n\theight: 58px;\n"]))), Nt = function(e) {
        var t = e.current
          , n = e.currentLevel
          , r = e.availableItems
          , s = e.close
          , c = e.saveChanges
          , l = e.iconsBaseUrl
          , u = Object(a.__read)(Object(o.useState)(t), 2)
          , p = u[0]
          , m = u[1]
          , h = Object(a.__read)(Object(o.useState)("body"), 2)
          , g = h[0]
          , b = h[1]
          , f = Object(a.__read)(Object(o.useState)(!1), 2)
          , v = f[0]
          , k = f[1]
          , w = Object(o.useCallback)((function(e) {
            var t, n = Object(a.__rest)(p, []);
            if (/hair|hat/.test(g))
                switch (g) {
                case "hair":
                    n = Object(a.__assign)(Object(a.__assign)({}, n), {
                        hat: void 0
                    });
                    break;
                case "hat":
                    n = Object(a.__assign)(Object(a.__assign)({}, n), {
                        hair: void 0
                    })
                }
            /hat|hair|glasses|special/.test(g) && (null === (t = n[g]) || void 0 === t ? void 0 : t.id) === e.id ? n[g] = void 0 : n[g] = e,
            m(n)
        }
        ), [g, p]);
        return i.a.createElement(At, null, i.a.createElement("h2", {
            className: "avatar-builder__title"
        }, "Bygg din avatar!"), i.a.createElement(It, {
            onClick: function() {
                return k(!0)
            }
        }, i.a.createElement(d, null)), i.a.createElement(Lt, null, i.a.createElement("div", {
            className: "avatar-builder__content-items"
        }, ["hair", "eyes", "nose", "mouth"].map((function(e) {
            var t = e === g;
            return i.a.createElement(gt, {
                key: e,
                avatar: p[e],
                slotName: e,
                onSelect: function() {
                    return b(e)
                },
                isActive: t
            })
        }
        ))), i.a.createElement(Pt, null, i.a.createElement("h3", null, "Kropp"), i.a.createElement(Vt, {
            active: "body" === g,
            onClick: function() {
                return b("body")
            }
        }, i.a.createElement(vt, {
            avatar: p
        })), i.a.createElement(Tt, {
            iconsBaseUrl: l,
            availableItems: r[g],
            currentLevel: n,
            onChangeItem: w,
            isActiveSelect: p[g]
        })), i.a.createElement("div", {
            className: "avatar-builder__content-items"
        }, ["hat", "glasses", "shirt", "special"].map((function(e) {
            var t = e === g;
            return i.a.createElement(gt, {
                key: e,
                avatar: p[e],
                slotName: e,
                onSelect: function() {
                    return b(e)
                },
                isActive: t
            })
        }
        )))), v && i.a.createElement(wt, {
            closeModal: function() {
                k(!1)
            },
            resetChangeAvatar: function() {
                s()
            },
            saveChangeAvatar: function() {
                c(p),
                s()
            }
        }))
    }, At = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-1q0e38o"
    })(U || (U = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\twidth: 100%;\n\t> h2 {\n\t\tmargin: 0;\n\t\tpadding: 15px;\n\t\ttext-align: center;\n\t\tfont-size: 18px;\n\t\tfont-weight: bold;\n\t}\n"], ["\n\tposition: relative;\n\twidth: 100%;\n\t> h2 {\n\t\tmargin: 0;\n\t\tpadding: 15px;\n\t\ttext-align: center;\n\t\tfont-size: 18px;\n\t\tfont-weight: bold;\n\t}\n"]))), It = s.b.div.withConfig({
        displayName: "CloseButton",
        componentId: "-3rrdeh"
    })(M || (M = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\theight: 40px;\n\twidth: 40px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n\t> svg {\n\t\theight: 75%;\n\t\twidth: 75%;\n\t\t> path {\n\t\t\tfill: #f47164;\n\t\t}\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\theight: 40px;\n\twidth: 40px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n\t> svg {\n\t\theight: 75%;\n\t\twidth: 75%;\n\t\t> path {\n\t\t\tfill: #f47164;\n\t\t}\n\t}\n"]))), Lt = s.b.div.withConfig({
        displayName: "Content",
        componentId: "-whdsdd"
    })(K || (K = Object(a.__makeTemplateObject)(["\n\tdisplay: grid;\n\tgrid-template-columns: 102px auto 102px;\n\tpadding: 0px 74px;\n"], ["\n\tdisplay: grid;\n\tgrid-template-columns: 102px auto 102px;\n\tpadding: 0px 74px;\n"]))), Pt = s.b.div.withConfig({
        displayName: "Center",
        componentId: "-1gyciwt"
    })(W || (W = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]))), Vt = s.b.div.withConfig({
        displayName: "AvatarResult",
        componentId: "-mlr1m6"
    })(F || (F = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-content: center;\n\tmargin-bottom: 50px;\n\twidth: 301px;\n\theight: 301px;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tcursor: pointer;\n\tbox-shadow: ", ";\n\t> h3 {\n\t\tmargin-bottom: 15px;\n\t\tfont-size: 18px;\n\t}\n\t> div {\n\t\talign-self: center;\n\t\theight: 75%;\n\t\twidth: 75%;\n\t}\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-content: center;\n\tmargin-bottom: 50px;\n\twidth: 301px;\n\theight: 301px;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tcursor: pointer;\n\tbox-shadow: ", ";\n\t> h3 {\n\t\tmargin-bottom: 15px;\n\t\tfont-size: 18px;\n\t}\n\t> div {\n\t\talign-self: center;\n\t\theight: 75%;\n\t\twidth: 75%;\n\t}\n"])), (function(e) {
        return e.active ? "0 0 0 5px rgba(61, 188, 161, 1), 0 0 25px 0 rgba(0, 0, 0, 0.45)" : "0 0 25px 0 rgba(0, 0, 0, 0.45)"
    }
    )), Gt = function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            x: "0px",
            y: "0px",
            viewBox: "0 0 512 512",
            enableBackground: "new 0 0 512 512"
        }), i.a.createElement("circle", {
            fill: "#FFCA28",
            cx: "256",
            cy: "256",
            r: "256"
        }), i.a.createElement("g", null, i.a.createElement("path", {
            fill: "#6D4C41",
            d: "M357.824,394.176c-4.096,0-8.192-1.568-11.328-4.672c-48.384-48.384-132.672-48.384-181.024,0\n                c-6.24,6.24-16.384,6.24-22.624,0s-6.24-16.384,0-22.624C173.088,336.672,213.248,320,256,320s82.912,16.672,113.12,46.88\n                c6.24,6.24,6.24,16.384,0,22.624C366.016,392.64,361.92,394.176,357.824,394.176z"
        }), i.a.createElement("circle", {
            fill: "#6D4C41",
            cx: "160",
            cy: "192",
            r: "32"
        }), i.a.createElement("circle", {
            fill: "#6D4C41",
            cx: "352",
            cy: "192",
            r: "32"
        })))
    }, Rt = function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            x: "0px",
            y: "0px",
            viewBox: "0 0 512 512",
            enableBackground: "new 0 0 512 512"
        }), i.a.createElement("circle", {
            fill: "#FFCA28",
            cx: "256",
            cy: "256",
            r: "256"
        }), i.a.createElement("g", null, i.a.createElement("circle", {
            fill: "#6D4C41",
            cx: "160",
            cy: "192",
            r: "32"
        }), i.a.createElement("circle", {
            fill: "#6D4C41",
            cx: "352",
            cy: "192",
            r: "32"
        }), i.a.createElement("path", {
            fill: "#6D4C41",
            d: "M336,384H176c-8.832,0-16-7.168-16-16s7.168-16,16-16h160c8.832,0,16,7.168,16,16\n\t\tS344.832,384,336,384z"
        })))
    }, Bt = function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            x: "0px",
            y: "0px",
            viewBox: "0 0 512 512",
            enableBackground: "new 0 0 512 512",
            xmlSpace: "preserve"
        }), i.a.createElement("circle", {
            fill: "#FFCA28",
            cx: "256",
            cy: "256",
            r: "256"
        }), i.a.createElement("g", null, i.a.createElement("path", {
            fill: "#6D4C41",
            d: "M399.68,208.32c-8.832,0-16-7.168-16-16c0-17.632-14.336-32-32-32s-32,14.368-32,32\n\t\tc0,8.832-7.168,16-16,16s-16-7.168-16-16c0-35.296,28.704-64,64-64s64,28.704,64,64C415.68,201.184,408.512,208.32,399.68,208.32z"
        }), i.a.createElement("path", {
            fill: "#6D4C41",
            d: "M207.68,208.32c-8.832,0-16-7.168-16-16c0-17.632-14.368-32-32-32s-32,14.368-32,32\n\t\tc0,8.832-7.168,16-16,16s-16-7.168-16-16c0-35.296,28.704-64,64-64s64,28.704,64,64C223.68,201.184,216.512,208.32,207.68,208.32z"
        })), i.a.createElement("path", {
            fill: "#FAFAFA",
            d: "M437.696,294.688c-3.04-4-7.744-6.368-12.736-6.368H86.4c-5.024,0-9.728,2.336-12.736,6.336\n\tc-3.072,4.032-4.032,9.184-2.688,14.016C94.112,390.88,170.08,448.32,255.648,448.32s161.536-57.44,184.672-139.648\n\tC441.696,303.84,440.736,298.688,437.696,294.688z"
        }), i.a.createElement("path", {
            fill: "#2196F3",
            d: "M479.36,75.552c-4-13.696-26.752-13.696-30.752,0C440.96,101.952,416,189.504,416,208\n\tc0,26.464,21.536,48,48,48s48-21.536,48-48C512,189.504,487.04,101.952,479.36,75.552z"
        }))
    }, Ut = function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            x: "0px",
            y: "0px",
            viewBox: "0 0 512 512",
            enableBackground: "new 0 0 512 512"
        }), i.a.createElement("circle", {
            fill: "#FFCA28",
            cx: "256",
            cy: "256",
            r: "256"
        }), i.a.createElement("g", null, i.a.createElement("path", {
            fill: "#6D4C41",
            d: "M399.68,208.32c-8.832,0-16-7.168-16-16c0-17.632-14.336-32-32-32s-32,14.368-32,32\n\t\tc0,8.832-7.168,16-16,16s-16-7.168-16-16c0-35.296,28.704-64,64-64s64,28.704,64,64C415.68,201.184,408.512,208.32,399.68,208.32z"
        }), i.a.createElement("path", {
            fill: "#6D4C41",
            d: "M207.68,208.32c-8.832,0-16-7.168-16-16c0-17.632-14.368-32-32-32s-32,14.368-32,32\n\t\tc0,8.832-7.168,16-16,16s-16-7.168-16-16c0-35.296,28.704-64,64-64s64,28.704,64,64C223.68,201.184,216.512,208.32,207.68,208.32z"
        })), i.a.createElement("path", {
            fill: "#FAFAFA",
            d: "M437.696,294.688c-3.04-4-7.744-6.368-12.736-6.368H86.4c-5.024,0-9.728,2.336-12.736,6.336\n\tc-3.072,4.032-4.032,9.184-2.688,14.016C94.112,390.88,170.08,448.32,255.648,448.32s161.536-57.44,184.672-139.648\n\tC441.696,303.84,440.736,298.688,437.696,294.688z"
        }))
    }, Mt = function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            x: "0px",
            y: "0px",
            viewBox: "0 0 512 512",
            enableBackground: "new 0 0 512 512"
        }), i.a.createElement("circle", {
            fill: "#FFCA28",
            cx: "256",
            cy: "256",
            r: "256"
        }), i.a.createElement("path", {
            fill: "#FAFAFA",
            d: "M438.016,294.336c-3.008-4-7.744-6.336-12.736-6.336H86.72c-5.024,0-9.728,2.336-12.736,6.336\n\tc-3.04,4-4.032,9.152-2.656,14.016C94.464,390.56,170.4,448,256,448s161.536-57.44,184.672-139.648\n\tC442.016,303.488,441.056,298.336,438.016,294.336z"
        }), i.a.createElement("g", null, i.a.createElement("path", {
            fill: "#F44336",
            d: "M188.8,128c-10.144,0-20.224,2.88-28.8,8.032c-8.576-5.152-18.656-8.032-28.8-8.032\n\t\tc-28.704,0-51.2,21.344-51.2,48.64c0,29.728,36.928,55.296,71.52,76.928C154.112,255.2,157.056,256,160,256\n\t\tc2.88,0,5.792-0.768,8.352-2.368C205.568,230.88,240,205.792,240,176.64C240,149.344,217.504,128,188.8,128z"
        }), i.a.createElement("path", {
            fill: "#F44336",
            d: "M396.8,128c-10.144,0-20.224,2.88-28.8,8.032c-8.608-5.152-18.656-8.032-28.8-8.032\n\t\tc-28.736,0-51.2,21.344-51.2,48.64c0,29.76,36.896,55.328,71.52,76.928C362.112,255.2,365.056,256,368,256\n\t\tc2.912,0,5.792-0.768,8.352-2.336C413.568,230.88,448,205.792,448,176.64C448,149.344,425.536,128,396.8,128z"
        })))
    }, Kt = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.state = {
                completed: n.props.completed || !1
            },
            n.checkIn = n.checkIn.bind(n),
            n
        }
        Object(a.__extends)(t, e),
        t.prototype.checkIn = function(e) {
            this.props.checkIn(e),
            this.setState({
                completed: !0
            })
        }
        ,
        t.prototype.render = function() {
            var e = this;
            return i.a.createElement(Kt, null, i.a.createElement(Wt, null), i.a.createElement(Ft, null, i.a.createElement(qt, null, "Hur kändes din dag idag?"), i.a.createElement(Ht, null, this.state.completed ? i.a.createElement(zt, null, "Tack för ditt svar!") : i.a.createElement(Yt, null, i.a.createElement(Zt, {
                onClick: function() {
                    return e.checkIn(1)
                },
                mood: 1
            }, i.a.createElement(Gt, null)), i.a.createElement(Zt, {
                onClick: function() {
                    return e.checkIn(2)
                },
                mood: 2
            }, i.a.createElement(Rt, null)), i.a.createElement(Zt, {
                onClick: function() {
                    return e.checkIn(3)
                },
                mood: 3
            }, i.a.createElement(Bt, null)), i.a.createElement(Zt, {
                onClick: function() {
                    return e.checkIn(4)
                },
                mood: 4
            }, i.a.createElement(Ut, null)), i.a.createElement(Zt, {
                onClick: function() {
                    return e.checkIn(5)
                },
                mood: 5
            }, i.a.createElement(Mt, null))))))
        }
    }(i.a.PureComponent),
    s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-15f5e8m"
    })(z || (z = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n"], ["\n\tposition: relative;\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n"])))), Wt = Object(s.b)((function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            width: "100%",
            height: "100%",
            viewBox: "0 0 16000 4767",
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: "2"
        }), i.a.createElement("rect", {
            id: "Artboard4",
            x: "0",
            y: "1.302",
            width: "15995.9",
            height: "4764.35",
            fill: "none"
        }), i.a.createElement("clipPath", {
            id: "_clip1"
        }, i.a.createElement("rect", {
            x: "0",
            y: "1.302",
            width: "15995.9",
            height: "4764.35"
        })), i.a.createElement("g", {
            clipPath: "url(#_clip1)"
        }, i.a.createElement("path", {
            d: "M8.46,779.679c336.987,-77.308 1273.22,42.624 2186,-116.882c740.502,-129.402 1245.53,1.968 1245.53,1.968c891.778,-597.614 6738.6,-948.122 9205.58,-66.555c2160.86,10.448 2517.86,435.934 3362.9,336.592l0,3766.06c-1451.97,-660.837 -15515.3,-346.423 -16000,0l0,-3921.18",
            fill: "#7af4d1"
        }), i.a.createElement("clipPath", {
            id: "_clip2"
        }, i.a.createElement("path", {
            d: "M8.46,779.679c336.987,-77.308 1273.22,42.624 2186,-116.882c740.502,-129.402 1245.53,1.968 1245.53,1.968c891.778,-597.614 6738.6,-948.122 9205.58,-66.555c2160.86,10.448 2517.86,435.934 3362.9,336.592l0,3766.06c-1451.97,-660.837 -15515.3,-346.423 -16000,0l0,-3921.18"
        })), i.a.createElement("g", {
            clipPath: "url(#_clip2)"
        }, i.a.createElement("path", {
            d: "M-2014.85,4285.38c0,0 2852.51,-2123.14 11716.8,-1445.54c8864.26,677.598 8787.57,-609.838 8910.26,-1468.13c122.689,-858.29 -214.705,4359.21 -214.705,4359.21l-19921.6,880.877l-490.754,-2326.42Z",
            fill: "url(#_Linear3)"
        }))), i.a.createElement("defs", null, i.a.createElement("linearGradient", {
            id: "_Linear3",
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "-0.359666",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "matrix(-2226.61,-6444.28,4303.85,-3034.93,6702.29,7720.62)"
        }, i.a.createElement("stop", {
            offset: "0",
            stopColor: "#b6ffea",
            stopOpacity: "1"
        }), i.a.createElement("stop", {
            offset: "1",
            stopColor: "#21ebb1",
            stopOpacity: "1"
        }))))
    }
    )).withConfig({
        displayName: "Background",
        componentId: "-1oeka67"
    })(q || (q = Object(a.__makeTemplateObject)(["\n\twidth: 100%;\n"], ["\n\twidth: 100%;\n"]))), Ft = s.b.div.withConfig({
        displayName: "ContentWrapper",
        componentId: "-1vc6glu"
    })(H || (H = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 12.5%;\n\tleft: 0;\n\twidth: 100%;\n\theight: 75%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\talign-items: center;\n"], ["\n\tposition: absolute;\n\ttop: 12.5%;\n\tleft: 0;\n\twidth: 100%;\n\theight: 75%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\talign-items: center;\n"]))), zt = s.b.div.withConfig({
        displayName: "Text",
        componentId: "-1q7ek1t"
    })(Y || (Y = Object(a.__makeTemplateObject)(["\n\tfont-size: 26px;\n\tfont-weight: 600;\n\tcolor: ", ";\n"], ["\n\tfont-size: 26px;\n\tfont-weight: 600;\n\tcolor: ", ";\n"])), c.a.text), qt = Object(s.b)(zt).withConfig({
        displayName: "Title",
        componentId: "-c04m45"
    })(Z || (Z = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-end;\n"], ["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-end;\n"]))), Ht = s.b.div.withConfig({
        displayName: "Content",
        componentId: "-1oacwni"
    })(J || (J = Object(a.__makeTemplateObject)(["\n\tflex: 1;\n\tpadding: 0 50px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"], ["\n\tflex: 1;\n\tpadding: 0 50px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]))), Yt = s.b.div.withConfig({
        displayName: "Moods",
        componentId: "-gvr750"
    })(Q || (Q = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n\talign-items: center;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n\talign-items: center;\n"]))), Zt = s.b.div.withConfig({
        displayName: "MoodIcon",
        componentId: "-me0ris"
    })($ || ($ = Object(a.__makeTemplateObject)(["\n\tmargin: 0 30px;\n\twidth: 100px;\n\theight: 100px;\n\tmargin-bottom: ", "px;\n\ttransition: transform 0.2s;\n\t&:hover {\n\t\tcursor: pointer;\n\t\ttransform: scale(1.2);\n\t}\n\t> svg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n"], ["\n\tmargin: 0 30px;\n\twidth: 100px;\n\theight: 100px;\n\tmargin-bottom: ", "px;\n\ttransition: transform 0.2s;\n\t&:hover {\n\t\tcursor: pointer;\n\t\ttransform: scale(1.2);\n\t}\n\t> svg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n"])), (function(e) {
        return 1 === e.mood || 5 === e.mood ? 50 : 2 === e.mood || 4 === e.mood ? 20 : 0
    }
    )), Jt = n(194), Qt = function(e) {
        var t = e.avatars
          , n = e.selectAvatar
          , r = e.close;
        return i.a.createElement($t, null, i.a.createElement(Xt, null, i.a.createElement(en, {
            onClick: function() {
                return r()
            }
        }, i.a.createElement(d, null)), "Välj en avatar"), i.a.createElement(Jt.a, null, (function(e) {
            var o = e.height
              , s = e.width;
            return i.a.createElement(tn, {
                style: {
                    outline: "none",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    userSelect: "none"
                },
                containerStyle: {
                    width: s + "px"
                },
                height: o - 50,
                width: s,
                rowHeight: 186,
                rowCount: Math.ceil(t.length / 2),
                rowRenderer: function(e) {
                    var o = t[2 * e.index]
                      , s = t[2 * e.index + 1];
                    return i.a.createElement("div", {
                        key: e.index,
                        style: Object(a.__assign)(Object(a.__assign)({}, e.style), {
                            display: "flex",
                            alignItems: "center"
                        })
                    }, i.a.createElement(nn, {
                        onClick: function() {
                            n(o.id),
                            r()
                        }
                    }, i.a.createElement("img", {
                        src: o.url,
                        alt: "avatar"
                    })), s ? i.a.createElement(nn, {
                        onClick: function() {
                            n(s.id),
                            r()
                        }
                    }, i.a.createElement("img", {
                        src: s.url,
                        alt: "avatar"
                    })) : i.a.createElement(rn, null))
                }
            })
        }
        )))
    }, $t = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-183cjwc"
    })(X || (X = Object(a.__makeTemplateObject)(["\n\twidth: 400px;\n\theight: 500px;\n\tborder-radius: 10px;\n\tbox-shadow: 0 0 4px 4px #d5d5d5;\n"], ["\n\twidth: 400px;\n\theight: 500px;\n\tborder-radius: 10px;\n\tbox-shadow: 0 0 4px 4px #d5d5d5;\n"]))), Xt = s.b.div.withConfig({
        displayName: "Header",
        componentId: "-1u3mttz"
    })(ee || (ee = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\theight: 50px;\n\twidth: 100%;\n\tbox-shadow: 0 4px 4px 0 #d5d5d5;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"], ["\n\tposition: relative;\n\theight: 50px;\n\twidth: 100%;\n\tbox-shadow: 0 4px 4px 0 #d5d5d5;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))), en = s.b.div.withConfig({
        displayName: "CloseButton",
        componentId: "-1iloxx9"
    })(te || (te = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\theight: 50px;\n\twidth: 50px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n\t> svg {\n\t\theight: 75%;\n\t\twidth: 75%;\n\t\t> path {\n\t\t\tfill: #f47164;\n\t\t}\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\theight: 50px;\n\twidth: 50px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n\t> svg {\n\t\theight: 75%;\n\t\twidth: 75%;\n\t\t> path {\n\t\t\tfill: #f47164;\n\t\t}\n\t}\n"]))), tn = Object(s.b)(Jt.b).withConfig({
        displayName: "AvatarList",
        componentId: "-5fpgsm"
    })(ne || (ne = Object(a.__makeTemplateObject)(['\n\tmargin-top: 4px;\n\t::-webkit-scrollbar {\n\t\twidth: 10px;\n\t\theight: 40px;\n\t\tbackground-color: "#ababab";\n\t}\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: #4c4c4c;\n\t\tborder: 2px white solid;\n\t\tborder-radius: 5px;\n\t}\n'], ['\n\tmargin-top: 4px;\n\t::-webkit-scrollbar {\n\t\twidth: 10px;\n\t\theight: 40px;\n\t\tbackground-color: "#ababab";\n\t}\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: #4c4c4c;\n\t\tborder: 2px white solid;\n\t\tborder-radius: 5px;\n\t}\n']))), nn = s.b.div.withConfig({
        displayName: "Avatar",
        componentId: "-10uhfon"
    })(re || (re = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\twidth: 150px;\n\theight: 150px;\n\tmargin: 15px;\n\tborder: 10px solid #d5d5d5;\n\tborder-radius: 100%;\n\ttransition: 0.2s ease-in-out;\n\tcursor: pointer;\n\timg {\n\t\tdisplay: block;\n\t\tborder-radius: 100%;\n\t\twidth: 100%;\n\t}\n\t&:hover {\n\t\tborder-color: ", ";\n\t}\n"], ["\n\tposition: relative;\n\twidth: 150px;\n\theight: 150px;\n\tmargin: 15px;\n\tborder: 10px solid #d5d5d5;\n\tborder-radius: 100%;\n\ttransition: 0.2s ease-in-out;\n\tcursor: pointer;\n\timg {\n\t\tdisplay: block;\n\t\tborder-radius: 100%;\n\t\twidth: 100%;\n\t}\n\t&:hover {\n\t\tborder-color: ", ";\n\t}\n"])), c.a.primary), rn = s.b.div.withConfig({
        displayName: "EmptyAvatar",
        componentId: "-1263rt5"
    })(ae || (ae = Object(a.__makeTemplateObject)(["\n\twidth: 150px;\n\theight: 150px;\n"], ["\n\twidth: 150px;\n\theight: 150px;\n"]))), an = function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            width: "100%",
            height: "100%",
            viewBox: "0 0 516 491",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            xmlSpace: "preserve",
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: "2"
        }), i.a.createElement("path", {
            d: "M227.375,39.49c7.18,-9.401 18.332,-14.916 30.161,-14.916c11.829,0 22.982,5.515 30.162,14.916c22.271,29.159 50.867,66.599 63.787,83.514c4.488,5.877 10.596,10.315 17.572,12.768c20.08,7.06 64.524,22.686 99.138,34.857c11.159,3.923 19.851,12.826 23.507,24.076c3.655,11.25 1.856,23.561 -4.866,33.295c-20.85,30.191 -47.62,68.957 -59.716,86.472c-4.202,6.085 -6.535,13.265 -6.712,20.657c-0.509,21.28 -1.637,68.377 -2.516,105.058c-0.283,11.825 -6.064,22.843 -15.634,29.796c-9.569,6.953 -21.834,9.046 -33.168,5.661c-35.157,-10.5 -80.298,-23.981 -100.693,-30.072c-7.086,-2.116 -14.635,-2.116 -21.721,0c-20.395,6.091 -65.536,19.572 -100.693,30.072c-11.334,3.385 -23.599,1.292 -33.169,-5.661c-9.569,-6.953 -15.35,-17.971 -15.633,-29.796c-0.879,-36.681 -2.007,-83.778 -2.516,-105.058c-0.177,-7.392 -2.51,-14.572 -6.712,-20.657c-12.096,-17.515 -38.866,-56.281 -59.716,-86.472c-6.722,-9.734 -8.521,-22.045 -4.866,-33.295c3.656,-11.25 12.347,-20.153 23.507,-24.076c34.614,-12.171 79.057,-27.797 99.138,-34.857c6.976,-2.453 13.084,-6.891 17.572,-12.768c12.92,-16.915 41.516,-54.355 63.787,-83.514Z",
            fill: "url(#_Linear1)"
        }), i.a.createElement("path", {
            d: "M217.632,31.348c9.5,-12.437 24.255,-19.734 39.904,-19.734c15.65,0 30.405,7.297 39.904,19.734c21.632,28.322 46.551,60.949 59.631,78.073c5.938,7.775 14.019,13.646 23.249,16.891c20.328,7.148 59.058,20.765 92.678,32.586c14.764,5.191 26.263,16.969 31.099,31.853c4.836,14.884 2.456,31.172 -6.437,44.049c-20.251,29.325 -43.58,63.107 -55.825,80.838c-5.559,8.05 -8.646,17.55 -8.88,27.331c-0.516,21.541 -1.499,62.584 -2.352,98.212c-0.375,15.645 -8.023,30.221 -20.684,39.42c-12.661,9.198 -28.887,11.968 -43.882,7.49c-34.148,-10.199 -73.485,-21.947 -94.132,-28.113c-9.374,-2.799 -19.363,-2.799 -28.737,0c-20.647,6.166 -59.985,17.914 -94.132,28.113c-14.995,4.478 -31.221,1.708 -43.882,-7.49c-12.661,-9.199 -20.309,-23.775 -20.684,-39.42c-0.853,-35.628 -1.836,-76.671 -2.352,-98.212c-0.234,-9.781 -3.321,-19.281 -8.88,-27.331c-12.245,-17.731 -35.574,-51.513 -55.825,-80.838c-8.893,-12.877 -11.273,-29.165 -6.437,-44.049c4.836,-14.884 16.335,-26.662 31.099,-31.853c33.62,-11.821 72.35,-25.438 92.678,-32.586c9.23,-3.245 17.311,-9.116 23.249,-16.891c13.079,-17.124 37.999,-49.751 59.63,-78.073Zm20.798,14.206c4.662,-6.103 11.903,-9.683 19.583,-9.683c7.68,0 14.921,3.58 19.584,9.683c22.446,29.379 57.731,75.562 70.106,91.759c2.915,3.816 6.882,6.696 11.412,8.289c19.23,6.759 74.061,26.031 108.949,38.294c7.248,2.547 12.893,8.329 15.267,15.636c2.374,7.306 1.205,15.302 -3.162,21.622c-21.014,30.42 -54.035,78.221 -65.62,94.991c-2.73,3.952 -4.246,8.615 -4.361,13.417c-0.488,20.376 -1.879,78.458 -2.765,115.414c-0.183,7.679 -3.937,14.833 -10.151,19.348c-6.214,4.515 -14.177,5.875 -21.537,3.677c-35.436,-10.579 -91.139,-27.209 -110.672,-33.041c-4.6,-1.373 -9.5,-1.373 -14.1,0c-19.532,5.832 -75.236,22.462 -110.672,33.041c-7.36,2.198 -15.323,0.838 -21.537,-3.677c-6.214,-4.515 -9.967,-11.669 -10.151,-19.348c-0.886,-36.956 -2.277,-95.038 -2.765,-115.414c-0.115,-4.802 -1.631,-9.465 -4.361,-13.417c-11.585,-16.77 -44.606,-64.571 -65.62,-94.991c-4.366,-6.32 -5.536,-14.316 -3.162,-21.622c2.374,-7.307 8.019,-13.089 15.267,-15.636c34.888,-12.263 89.72,-31.535 108.95,-38.294c4.529,-1.593 8.496,-4.473 11.411,-8.289c12.375,-16.197 47.66,-62.38 70.107,-91.759Z",
            fill: "#ffa500"
        }), i.a.createElement("defs", null, i.a.createElement("linearGradient", {
            id: "_Linear1",
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "0",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "matrix(-510.878,705.687,-705.687,-510.878,373.51,150.153)"
        }, i.a.createElement("stop", {
            offset: "0",
            stopColor: "#ffeb82",
            stopOpacity: "1"
        }), i.a.createElement("stop", {
            offset: "0.14",
            stopColor: "#f6ce00",
            stopOpacity: "1"
        }), i.a.createElement("stop", {
            offset: "1",
            stopColor: "#e79b00",
            stopOpacity: "1"
        }))))
    }, on = function(e) {
        var t = e.level
          , n = e.avatar
          , r = e.name
          , a = e.openAvatarSelector
          , o = e.width || 150;
        return i.a.createElement(sn, null, i.a.createElement(cn, {
            style: {
                width: o + "px"
            }
        }, i.a.createElement(ln, {
            stroke: c.a.primary,
            width: o,
            progress: t.xpGainedOnCurrentLevel / (t.xpGainedOnCurrentLevel + t.xpRemainingOnCurrentLevel)
        }), "string" != typeof n && n ? i.a.createElement(bn, null, i.a.createElement(vt, {
            avatar: n
        })) : i.a.createElement(un, {
            src: n || t.avatar.url || "https://storage.googleapis.com/gwen-prod-storage/e8583e1d-b0a1-48ef-b417-11331d680063/1596201929121-Avatar%2006.svg"
        }), a && i.a.createElement(dn, {
            onClick: function() {
                return a()
            }
        }, i.a.createElement(p, null)), i.a.createElement(pn, null, i.a.createElement(an, null), i.a.createElement(mn, {
            style: {
                fontSize: o / 8 + "px"
            }
        }, t.currentLevel))), i.a.createElement(hn, {
            style: {
                fontSize: .18 * o
            }
        }, r), i.a.createElement(gn, {
            style: {
                fontSize: .14 * o
            }
        }, i.a.createElement(an, null), t.xpRemainingOnCurrentLevel, " poäng till nästa nivå"))
    }, sn = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-1q6oleg"
    })(oe || (oe = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]))), cn = s.b.div.withConfig({
        displayName: "Progress",
        componentId: "-q2eb5z"
    })(ie || (ie = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\twidth: 100%;\n"], ["\n\tposition: relative;\n\twidth: 100%;\n"]))), ln = Object(s.b)(l).withConfig({
        displayName: "LevelProgress",
        componentId: "-xrrd8t"
    })(se || (se = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\tz-index: 1;\n"], ["\n\tposition: relative;\n\tz-index: 1;\n"]))), un = s.b.img.withConfig({
        displayName: "Avatar",
        componentId: "-te61sj"
    })(ce || (ce = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 10%;\n\tleft: 10%;\n\tdisplay: block;\n\twidth: 80%;\n\theight: 80%;\n\tobject-fit: contain;\n\tborder-radius: 50%;\n\toverflow: hidden;\n"], ["\n\tposition: absolute;\n\ttop: 10%;\n\tleft: 10%;\n\tdisplay: block;\n\twidth: 80%;\n\theight: 80%;\n\tobject-fit: contain;\n\tborder-radius: 50%;\n\toverflow: hidden;\n"]))), dn = s.b.div.withConfig({
        displayName: "EditButton",
        componentId: "-17oymcm"
    })(le || (le = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\theight: 20%;\n\twidth: 20%;\n\ttop: -5%;\n\tright: -5%;\n\tborder-radius: 50%;\n\tbackground: white;\n\tz-index: 2;\n\ttransition: 0.2s ease-in-out;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-start;\n\tbox-shadow: 0 0 4px 4px #d5d5d5;\n\t> svg {\n\t\theight: 80%;\n\t\twidth: 80%;\n\t\tstroke: #a5a5a5;\n\t\tfill: #a5a5a5;\n\t}\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t\t> svg {\n\t\t\tstroke: white;\n\t\t\tfill: white;\n\t\t}\n\t}\n"], ["\n\tposition: absolute;\n\theight: 20%;\n\twidth: 20%;\n\ttop: -5%;\n\tright: -5%;\n\tborder-radius: 50%;\n\tbackground: white;\n\tz-index: 2;\n\ttransition: 0.2s ease-in-out;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: flex-start;\n\tbox-shadow: 0 0 4px 4px #d5d5d5;\n\t> svg {\n\t\theight: 80%;\n\t\twidth: 80%;\n\t\tstroke: #a5a5a5;\n\t\tfill: #a5a5a5;\n\t}\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t\t> svg {\n\t\t\tstroke: white;\n\t\t\tfill: white;\n\t\t}\n\t}\n"])), c.a.primary), pn = s.b.div.withConfig({
        displayName: "LevelStar",
        componentId: "-10wou5j"
    })(ue || (ue = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\twidth: 35%;\n\theight: 35%;\n\tbottom: -10%;\n\tleft: 32.5%;\n\tz-index: 2;\n"], ["\n\tposition: absolute;\n\twidth: 35%;\n\theight: 35%;\n\tbottom: -10%;\n\tleft: 32.5%;\n\tz-index: 2;\n"]))), mn = s.b.div.withConfig({
        displayName: "LevelStarText",
        componentId: "-irmqm7"
    })(de || (de = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 5%;\n\tleft: 0;\n\tcolor: #893c11;\n\tfont-size: 22px;\n\tfont-weight: 600;\n\ttext-align: center;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"], ["\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 5%;\n\tleft: 0;\n\tcolor: #893c11;\n\tfont-size: 22px;\n\tfont-weight: 600;\n\ttext-align: center;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))), hn = s.b.span.withConfig({
        displayName: "Name",
        componentId: "-1x70sdo"
    })(pe || (pe = Object(a.__makeTemplateObject)(["\n\tmargin-top: 20px;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 20px;\n"], ["\n\tmargin-top: 20px;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 20px;\n"]))), gn = s.b.div.withConfig({
        displayName: "XpText",
        componentId: "-17yqc7z"
    })(me || (me = Object(a.__makeTemplateObject)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: ", ";\n\tfont-size: 16px;\n\t> svg {\n\t\tmargin-right: 5px;\n\t\twidth: 20px;\n\t}\n"], ["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: ", ";\n\tfont-size: 16px;\n\t> svg {\n\t\tmargin-right: 5px;\n\t\twidth: 20px;\n\t}\n"])), c.a.text), bn = s.b.div.withConfig({
        displayName: "ConstructedAvatar",
        componentId: "-1guy5br"
    })(he || (he = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\tbottom: 10%;\n\tleft: 10%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-content: center;\n\twidth: 80%;\n\theight: 80%;\n\tz-index: 0;\n\toverflow: hidden;\n\tborder-radius: 25%;\n"], ["\n\tposition: absolute;\n\tbottom: 10%;\n\tleft: 10%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-content: center;\n\twidth: 80%;\n\theight: 80%;\n\tz-index: 0;\n\toverflow: hidden;\n\tborder-radius: 25%;\n"]))), fn = n(125), vn = function(e) {
        var t = e.direction
          , n = e.data
          , r = e.selfReportableBehaviors
          , s = e.navigate
          , c = e.sendSelfReport
          , l = Object(a.__read)(Object(o.useState)({}), 2)
          , u = l[0]
          , d = l[1];
        return i.a.createElement(kn, {
            direction: t
        }, i.a.createElement(yn, null, "Uppgifter"), n.objectives.map((function(e) {
            var t = !!u[e.behaviorId] || e.completed >= e.amount;
            return i.a.createElement("div", {
                key: "mission-objective-" + e.behaviorId
            }, i.a.createElement(_n, null, i.a.createElement(On, null), i.a.createElement(Tn, {
                completed: t
            }, e.title)), i.a.createElement(jn, null, e.cta && i.a.createElement(En, {
                onClick: function() {
                    return s(e.cta, e.behaviorId)
                }
            }, "Visa mig"), r.find((function(t) {
                return t.behaviorId === e.behaviorId
            }
            )) && !t && i.a.createElement(En, {
                onClick: function() {
                    c(e.behaviorId),
                    d((function(t) {
                        var n;
                        return Object(a.__assign)(Object(a.__assign)({}, t), ((n = {})[e.behaviorId] = !0,
                        n))
                    }
                    ))
                }
            }, "Klarmarkera")))
        }
        )))
    }, kn = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-ao0kfc"
    })(ge || (ge = Object(a.__makeTemplateObject)(['\n\tposition: relative;\n\twidth: 300px;\n\tbackground: white;\n\tborder-radius: 15px;\n\tbox-shadow: 0 0 4px 4px #d5d5d5;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tpadding-bottom: 15px;\n\t&:after {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tbackground: white;\n\t\twidth: 0px;\n\t\theight: 0px;\n\t\tpadding: 8px;\n\t\ttop: -5px;\n\t\t', ": 30px;\n\t\ttransform: rotate(-45deg);\n\t\tbox-shadow: 4px -4px 4px 0 #d5d5d5;\n\t}\n"], ['\n\tposition: relative;\n\twidth: 300px;\n\tbackground: white;\n\tborder-radius: 15px;\n\tbox-shadow: 0 0 4px 4px #d5d5d5;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tpadding-bottom: 15px;\n\t&:after {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tbackground: white;\n\t\twidth: 0px;\n\t\theight: 0px;\n\t\tpadding: 8px;\n\t\ttop: -5px;\n\t\t', ": 30px;\n\t\ttransform: rotate(-45deg);\n\t\tbox-shadow: 4px -4px 4px 0 #d5d5d5;\n\t}\n"])), (function(e) {
        return "right" === e.direction ? "left" : "right"
    }
    )), wn = s.b.span.withConfig({
        displayName: "Text",
        componentId: "-685ugr"
    })(be || (be = Object(a.__makeTemplateObject)(["\n\tfont-weight: 600;\n\tcolor: ", ";\n"], ["\n\tfont-weight: 600;\n\tcolor: ", ";\n"])), c.a.text), yn = Object(s.b)(wn).withConfig({
        displayName: "Title",
        componentId: "-1q4ktva"
    })(fe || (fe = Object(a.__makeTemplateObject)(["\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 16px;\n\tmargin-top: 5px;\n"], ["\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 16px;\n\tmargin-top: 5px;\n"]))), _n = s.b.div.withConfig({
        displayName: "ObjectiveWrapper",
        componentId: "-fku54y"
    })(ve || (ve = Object(a.__makeTemplateObject)(["\n\tpadding: 8px 15px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n"], ["\n\tpadding: 8px 15px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n"]))), On = s.b.div.withConfig({
        displayName: "ObjectiveBullet",
        componentId: "-1u1kaig"
    })(ke || (ke = Object(a.__makeTemplateObject)(["\n\tflex-shrink: 0;\n\twidth: 8px;\n\theight: 8px;\n\tbackground: ", ";\n\tborder-radius: 50%;\n\tmargin-right: 10px;\n"], ["\n\tflex-shrink: 0;\n\twidth: 8px;\n\theight: 8px;\n\tbackground: ", ";\n\tborder-radius: 50%;\n\tmargin-right: 10px;\n"])), c.a.primary), Tn = Object(s.b)(wn).withConfig({
        displayName: "ObjectiveText",
        componentId: "-ce72k"
    })(we || (we = Object(a.__makeTemplateObject)(["\n\tfont-size: 14px;\n\tcolor: ", ";\n"], ["\n\tfont-size: 14px;\n\tcolor: ", ";\n"])), (function(e) {
        return e.completed ? c.a.primary : c.a.text
    }
    )), jn = s.b.div.withConfig({
        displayName: "ButtonWrapper",
        componentId: "-1mreq0p"
    })(ye || (ye = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\talign-items: center;\n\tmargin-left: 30px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\talign-items: center;\n\tmargin-left: 30px;\n"]))), En = s.b.div.withConfig({
        displayName: "Button",
        componentId: "-1dgqd8o"
    })(_e || (_e = Object(a.__makeTemplateObject)(["\n\tbackground: ", ";\n\tcolor: white;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 2px 12px;\n\tborder-radius: 15px;\n\tfont-size: 15px;\n\tfont-weight: 600;\n\tmargin-right: 20px;\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t}\n"], ["\n\tbackground: ", ";\n\tcolor: white;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 2px 12px;\n\tborder-radius: 15px;\n\tfont-size: 15px;\n\tfont-weight: 600;\n\tmargin-right: 20px;\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t}\n"])), c.a.primary, c.a.primaryOnHover), Sn = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {},
            t.amplitude = 70,
            t.NbrOfCycles = 2,
            t.waveOffset = 1,
            t
        }
        return Object(a.__extends)(t, e),
        t.prototype.calculatePosition = function(e, t) {
            return this.amplitude * Math.sin(e * this.NbrOfCycles * 2 * Math.PI / (t - 1) + this.waveOffset * Math.PI)
        }
        ,
        t.prototype.componentDidUpdate = function(e) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var t, n;
                return Object(a.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return this.props.data.currentMission.missionNumber === this.state.currentMissionNumber ? [3, 1] : (this.setState({
                            missionData: void 0
                        }),
                        [3, 3]);
                    case 1:
                        return this.state.missionData && this.props.data !== e.data ? (t = this.setState,
                        n = {},
                        [4, this.props.fetchMission(this.state.missionData.missionNumber)]) : [3, 3];
                    case 2:
                        t.apply(this, [(n.missionData = r.sent(),
                        n)]),
                        r.label = 3;
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.toggleDetails = function(e) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return Object(a.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return (t = this.state.missionData) && t.missionNumber === e ? [2, this.setState({
                            missionData: void 0
                        })] : [4, this.props.fetchMission(e)];
                    case 1:
                        return t = n.sent(),
                        [2, this.setState({
                            missionData: t,
                            currentMissionNumber: this.props.data.currentMission.missionNumber
                        })]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.render = function() {
            for (var e = this, t = this.props, n = t.data, r = t.selfReportableBehaviors, a = t.navigate, o = t.sendSelfReport, s = n.currentMission.missionNumber, c = n.finalMissionNumber || s, l = this.state.missionData, u = [], d = function(t) {
                var n = t / c > .5 ? "left" : "right";
                u.push(i.a.createElement(Cn, {
                    key: "mission" + t,
                    position: p.calculatePosition(t - 1, c)
                }, i.a.createElement(Dn, {
                    current: t === s,
                    hasData: t <= s,
                    onClick: function() {
                        return e.toggleDetails(t)
                    }
                }, t), l && (null == l ? void 0 : l.missionNumber) === t && i.a.createElement(Nn, {
                    current: t === s,
                    direction: n
                }, i.a.createElement(vn, {
                    direction: n,
                    data: l,
                    selfReportableBehaviors: r,
                    navigate: a,
                    sendSelfReport: o
                }))))
            }, p = this, m = 1; m <= c; m++)
                d(m);
            return i.a.createElement(xn, null, u)
        }
        ,
        t
    }(i.a.PureComponent), xn = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-fkr4uo"
    })(Oe || (Oe = Object(a.__makeTemplateObject)(["\n\twidth: 100%;\n\tpadding: 0 30px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n"], ["\n\twidth: 100%;\n\tpadding: 0 30px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n"]))), Cn = s.b.div.withConfig({
        displayName: "MissionCircleWrapper",
        componentId: "-1h3lbsi"
    })(Te || (Te = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\twidth: 70px;\n\theight: 70px;\n\tmargin-bottom: ", "px;\n"], ["\n\tposition: relative;\n\twidth: 70px;\n\theight: 70px;\n\tmargin-bottom: ", "px;\n"])), (function(e) {
        return e.position
    }
    )), Dn = s.b.div.withConfig({
        displayName: "MissionCircle",
        componentId: "-17yg19n"
    })(je || (je = Object(a.__makeTemplateObject)(["\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 50%;\n\tbackground: ", ";\n\t", "\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: white;\n\tfont-weight: 600;\n\tfont-size: 24px;\n\t", "\n\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n"], ["\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 50%;\n\tbackground: ", ";\n\t", "\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: white;\n\tfont-weight: 600;\n\tfont-size: 24px;\n\t", "\n\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n"])), (function(e) {
        return e.hasData || e.current ? c.a.primary : "#7C9E99"
    }
    ), (function(e) {
        return e.current ? "border: 10px solid #65F3D6;" : ""
    }
    ), (function(e) {
        return e.hasData || e.current ? "&:hover {\n\t\tcursor: pointer;\n\t\tbackground: " + fn.a.darken(c.a.primary) + ";\n\t\t" + (e.current ? "border: 10px solid " + fn.a.darken("#65F3D6") + ";" : "") + "\n\t}" : ""
    }
    )), Nn = s.b.div.withConfig({
        displayName: "DetailsWrapper",
        componentId: "-1gphyjb"
    })(Ee || (Ee = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 120%;\n\t", ": -4px;\n\tz-index: 1;\n"], ["\n\tposition: absolute;\n\ttop: 120%;\n\t", ": -4px;\n\tz-index: 1;\n"])), (function(e) {
        return "right" === e.direction ? "left" : "right"
    }
    )), An = (s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-rzocrl"
    })(Se || (Se = Object(a.__makeTemplateObject)(["\n\theight: 70px;\n\tborder-radius: 5px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\toverflow: hidden;\n\tbackground: white;\n\tpadding-right: 15px;\n\tbox-shadow: 0 0 4px 4px #d5d5d5;\n"], ["\n\theight: 70px;\n\tborder-radius: 5px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\toverflow: hidden;\n\tbackground: white;\n\tpadding-right: 15px;\n\tbox-shadow: 0 0 4px 4px #d5d5d5;\n"]))),
    s.b.div.withConfig({
        displayName: "Highlight",
        componentId: "-z0q72s"
    })(xe || (xe = Object(a.__makeTemplateObject)(["\n\twidth: 3px;\n\theight: 100%;\n\tbackground: ", ";\n\tmargin-right: 15px;\n"], ["\n\twidth: 3px;\n\theight: 100%;\n\tbackground: ", ";\n\tmargin-right: 15px;\n"])), c.a.primary),
    s.b.img.withConfig({
        displayName: "Icon",
        componentId: "-10hlkf4"
    })(Ce || (Ce = Object(a.__makeTemplateObject)(["\n\tdisplay: block;\n\theight: 80%;\n\tobject-fit: contain;\n\tmargin-right: 15px;\n"], ["\n\tdisplay: block;\n\theight: 80%;\n\tobject-fit: contain;\n\tmargin-right: 15px;\n"]))),
    s.b.div.withConfig({
        displayName: "Content",
        componentId: "-eo7yc7"
    })(De || (De = Object(a.__makeTemplateObject)(["\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"], ["\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"]))),
    s.b.span.withConfig({
        displayName: "Text",
        componentId: "-k9g386"
    })(Ne || (Ne = Object(a.__makeTemplateObject)(["\n\tpadding: 4px 0;\n\tfont-size: 14px;\n\tcolor: ", ";\n"], ["\n\tpadding: 4px 0;\n\tfont-size: 14px;\n\tcolor: ", ";\n"])), c.a.text),
    s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-1a1noe5"
    })(Ae || (Ae = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder: 1px solid ", ";\n\t> span {\n\t\tfont-size: 18px;\n\t\tpadding: 5px 10px;\n\t\tmargin: 0;\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder: 1px solid ", ";\n\t> span {\n\t\tfont-size: 18px;\n\t\tpadding: 5px 10px;\n\t\tmargin: 0;\n\t}\n"])), c.a.grey),
    s.b.div.withConfig({
        displayName: "Content",
        componentId: "-1yv924d"
    })(Ie || (Ie = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n"], ["\n\tposition: relative;\n"]))),
    s.b.ul.withConfig({
        displayName: "List",
        componentId: "-1uax3nz"
    })(Le || (Le = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\toverflow-x: auto;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style-type: none;\n\t-webkit-overflow-scrolling: touch;\n\t&::-webkit-scrollbar {\n\t\theight: 6px;\n\t}\n\t&::-webkit-scrollbar-track {\n\t\tbackground: #bfbfbf;\n\t}\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: #3a3a3a;\n\t\tborder-radius: 20px;\n\t\tborder: 3px solid #3a3a3a;\n\t}\n"], ["\n\tdisplay: flex;\n\toverflow-x: auto;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style-type: none;\n\t-webkit-overflow-scrolling: touch;\n\t&::-webkit-scrollbar {\n\t\theight: 6px;\n\t}\n\t&::-webkit-scrollbar-track {\n\t\tbackground: #bfbfbf;\n\t}\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: #3a3a3a;\n\t\tborder-radius: 20px;\n\t\tborder: 3px solid #3a3a3a;\n\t}\n"]))),
    s.b.li.withConfig({
        displayName: "ListItem",
        componentId: "-1wc5xmv"
    })(Pe || (Pe = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmax-width: 80px;\n\twidth: 100%;\n\theight: 100%;\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tpadding: 10px 5px;\n\tborder-top: 1px solid ", ";\n\tborder-right: 1px solid ", ";\n\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n\n\t&:last-child {\n\t\tborder-right: none;\n\t}\n\n\tp {\n\t\tfont-size: 12px;\n\t\tmargin: 0;\n\t}\n\t", "\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmax-width: 80px;\n\twidth: 100%;\n\theight: 100%;\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tpadding: 10px 5px;\n\tborder-top: 1px solid ", ";\n\tborder-right: 1px solid ", ";\n\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n\n\t&:last-child {\n\t\tborder-right: none;\n\t}\n\n\tp {\n\t\tfont-size: 12px;\n\t\tmargin: 0;\n\t}\n\t", "\n"])), c.a.grey, c.a.grey, (function(e) {
        return e.locked ? "\n\t\t> div, p {\n\t\t\t&:not(:first-child) {\n\t\t\t\topacity: 0.3;\n\t\t\t}\n\t\t}\n\t" : ""
    }
    )),
    s.b.div.withConfig({
        displayName: "AvailableIcon",
        componentId: "-51ykgh"
    })(Ve || (Ve = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 0px;\n\tright: 0px;\n\twidth: 18px;\n\theight: 18px;\n\tpadding: 2px;\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 0px;\n\tright: 0px;\n\twidth: 18px;\n\theight: 18px;\n\tpadding: 2px;\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n"]))),
    s.b.div.withConfig({
        displayName: "Reward",
        componentId: "-1aac42x"
    })(Ge || (Ge = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100%;\n\tmargin-bottom: 5px;\n\n\timg {\n\t\twidth: 100%;\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100%;\n\tmargin-bottom: 5px;\n\n\timg {\n\t\twidth: 100%;\n\t}\n"]))),
    function(e) {
        return i.a.createElement("svg", Object(a.__assign)({}, e, {
            width: "100%",
            height: "100%",
            viewBox: "0 0 342 201",
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: "2"
        }), i.a.createElement("path", {
            d: "M157.359,184.726c3.314,3.89 8.168,6.132 13.279,6.132c5.111,0 9.965,-2.242 13.279,-6.132c28.575,-33.546 96.268,-113.011 132.863,-155.97c4.411,-5.179 5.41,-12.449 2.558,-18.625c-2.852,-6.176 -9.034,-10.131 -15.837,-10.131c-65.655,0 -200.071,0 -265.726,0c-6.803,0 -12.985,3.955 -15.837,10.131c-2.852,6.176 -1.854,13.446 2.558,18.625c36.594,42.959 104.287,122.424 132.863,155.97Z",
            fill: "#6d6d6d"
        }))
    }
    ), In = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                show: !1,
                behaviors: t.props.behaviors.sort((function(e, t) {
                    return e.name.localeCompare(t.name, void 0, {
                        numeric: !0,
                        sensitivity: "base"
                    })
                }
                ))
            },
            t
        }
        Object(a.__extends)(t, e),
        t.prototype.toggleShow = function() {
            this.setState((function(e) {
                return {
                    show: !e.show
                }
            }
            ))
        }
        ,
        t.prototype.selectBehavior = function(e) {
            this.setState({
                selectedBehavior: e
            })
        }
        ,
        t.prototype.sendSelfReport = function(e) {
            this.props.sendSelfReport(e),
            this.setState({
                selectedBehavior: void 0
            })
        }
        ,
        t.prototype.render = function() {
            var e = this
              , t = this.state
              , n = t.selectedBehavior
              , r = t.show
              , a = t.behaviors;
            return i.a.createElement(In, null, i.a.createElement(Ln, {
                onClick: function() {
                    return e.toggleShow()
                }
            }, i.a.createElement(Pn, null, n ? n.name : "Vad vill du rapportera?"), i.a.createElement(Vn, null, i.a.createElement(An, null)), r && i.a.createElement(Gn, null, a.map((function(t) {
                return i.a.createElement(Rn, {
                    onClick: function() {
                        return e.selectBehavior(t)
                    }
                }, t.name)
            }
            )))), i.a.createElement(Bn, {
                active: !!n,
                onClick: function() {
                    n && e.sendSelfReport(n.behaviorId)
                }
            }, "Skicka Rapport"))
        }
    }(i.a.PureComponent),
    s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-eirvlj"
    })(Re || (Re = Object(a.__makeTemplateObject)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"], ["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"])))), Ln = s.b.div.withConfig({
        displayName: "Dropdown",
        componentId: "-f5mivz"
    })(Be || (Be = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\theight: 50px;\n\twidth: 50%;\n\tborder: 2px solid #cacaca;\n\tborder-radius: 10px;\n\tpadding: 0 15px;\n\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n\t> span {\n\t\tline-height: 50px;\n\t\tfont-size: 20px;\n\t\tcolor: ", ";\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\theight: 50px;\n\twidth: 50%;\n\tborder: 2px solid #cacaca;\n\tborder-radius: 10px;\n\tpadding: 0 15px;\n\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n\t> span {\n\t\tline-height: 50px;\n\t\tfont-size: 20px;\n\t\tcolor: ", ";\n\t}\n"])), c.a.text), Pn = s.b.span.withConfig({
        displayName: "DropdownText",
        componentId: "-1x35bqa"
    })(Ue || (Ue = Object(a.__makeTemplateObject)(["\n\tline-height: 50px;\n\tfont-size: 20px;\n\tcolor: ", ";\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twidth: 95%;\n"], ["\n\tline-height: 50px;\n\tfont-size: 20px;\n\tcolor: ", ";\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twidth: 95%;\n"])), c.a.text), Vn = s.b.div.withConfig({
        displayName: "DropdownCollapser",
        componentId: "-eka0fz"
    })(Me || (Me = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\theight: 50px;\n\twidth: 50px;\n\ttop: 0;\n\tright: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\t> svg {\n\t\theight: 60%;\n\t\twidth: 60%;\n\t}\n"], ["\n\tposition: absolute;\n\theight: 50px;\n\twidth: 50px;\n\ttop: 0;\n\tright: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\t> svg {\n\t\theight: 60%;\n\t\twidth: 60%;\n\t}\n"]))), Gn = s.b.div.withConfig({
        displayName: "OptionsWrapper",
        componentId: "-vmsqu4"
    })(Ke || (Ke = Object(a.__makeTemplateObject)(['\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 52px;\n\tleft: 0;\n\tmax-height: 500px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tz-index: 1;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\t::-webkit-scrollbar {\n\t\twidth: 4px;\n\t\theight: 40px;\n\t\tbackground-color: "#ababab";\n\t}\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: #4c4c4c;\n\t}\n'], ['\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 52px;\n\tleft: 0;\n\tmax-height: 500px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tz-index: 1;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\t::-webkit-scrollbar {\n\t\twidth: 4px;\n\t\theight: 40px;\n\t\tbackground-color: "#ababab";\n\t}\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: #4c4c4c;\n\t}\n']))), Rn = s.b.div.withConfig({
        displayName: "Option",
        componentId: "-1l4qumf"
    })(We || (We = Object(a.__makeTemplateObject)(["\n\tline-height: 50px;\n\twidth: 100%;\n\tpadding: 0 10px;\n\tfont-size: 18px;\n\tbackground: white;\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t}\n"], ["\n\tline-height: 50px;\n\twidth: 100%;\n\tpadding: 0 10px;\n\tfont-size: 18px;\n\tbackground: white;\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground: ", ";\n\t}\n"])), c.a.background), Bn = s.b.div.withConfig({
        displayName: "Button",
        componentId: "-174ank1"
    })(Fe || (Fe = Object(a.__makeTemplateObject)(["\n\twidth: 20%;\n\theight: 50px;\n\tmargin-top: 50px;\n\tpadding: 0 10px;\n\tbackground: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: white;\n\tborder-radius: 25px;\n\t", "\n"], ["\n\twidth: 20%;\n\theight: 50px;\n\tmargin-top: 50px;\n\tpadding: 0 10px;\n\tbackground: ", ";\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: white;\n\tborder-radius: 25px;\n\t", "\n"])), (function(e) {
        return e.active ? c.a.primary : c.a.inactive
    }
    ), (function(e) {
        return e.active ? "\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground: " + c.a.primaryOnHover + ";\n\t}\n\t" : ""
    }
    ));
    n(239),
    s.b.li.withConfig({
        displayName: "Item",
        componentId: "-slxqht"
    })(ze || (ze = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tmax-width: 33%;\n\twidth: 100%;\n\tpadding-right: 20px;\n\talign-items: center;\n\t> p {\n\t\tmargin-right: 10px;\n\t\tline-height: 1.4;\n\t}\n\t> img {\n\t\tmargin-top: 2px;\n\t}\n"], ["\n\tdisplay: flex;\n\tmax-width: 33%;\n\twidth: 100%;\n\tpadding-right: 20px;\n\talign-items: center;\n\t> p {\n\t\tmargin-right: 10px;\n\t\tline-height: 1.4;\n\t}\n\t> img {\n\t\tmargin-top: 2px;\n\t}\n"]))),
    n(240),
    s.b.header.withConfig({
        displayName: "Header",
        componentId: "-2s7rmj"
    })(qe || (qe = Object(a.__makeTemplateObject)(["\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 30px;\n\tpadding: 5px 8px;\n\ttext-align: center;\n\tcolor: white;\n\tbackground-color: ", ";\n\n\t> h3 {\n\t\tfont-weight: bold;\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 30px;\n\tpadding: 5px 8px;\n\ttext-align: center;\n\tcolor: white;\n\tbackground-color: ", ";\n\n\t> h3 {\n\t\tfont-weight: bold;\n\t}\n"])), c.a.primary),
    s.b.div.withConfig({
        displayName: "Content",
        componentId: "-xqe922"
    })(He || (He = Object(a.__makeTemplateObject)(["\n\tborder: 1px solid #a4a4a4;\n"], ["\n\tborder: 1px solid #a4a4a4;\n"]))),
    s.b.ul.withConfig({
        displayName: "Missions",
        componentId: "-19n7v1a"
    })(Ye || (Ye = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tpadding: 15px 100px;\n\tlist-style-type: none;\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tpadding: 15px 100px;\n\tlist-style-type: none;\n"]))),
    s.b.ol.withConfig({
        displayName: "Objectives",
        componentId: "-94hydl"
    })(Ze || (Ze = Object(a.__makeTemplateObject)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tmin-height: 46px;\n\tpadding: 10px 32px 5px 32px;\n\tlist-style-type: decimal;\n"], ["\n\tdisplay: flex;\n\tflex-direction: row;\n\tmin-height: 46px;\n\tpadding: 10px 32px 5px 32px;\n\tlist-style-type: decimal;\n"])))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return C
    }
    )),
    n.d(t, "a", (function() {
        return K
    }
    ));
    var r = n(0)
      , a = n(13)
      , o = n(70);
    var i = function() {
        function e(e) {
            var t = "academicYear"in e ? e : Object(o.b)(e);
            this.academicYear = t.academicYear,
            this.term = t.term
        }
        return Object.defineProperty(e.prototype, "year", {
            get: function() {
                return parseInt(this.academicYear.split("/")["AT" === this.term ? 0 : 1])
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.nextTerm = function() {
            return new e("AT" === this.term ? {
                term: "ST",
                academicYear: this.academicYear
            } : {
                term: "AT",
                academicYear: Object(o.a)(this.academicYear, 1)
            })
        }
        ,
        e.prototype.prevTerm = function() {
            return new e("AT" === this.term ? {
                term: "ST",
                academicYear: Object(o.a)(this.academicYear, -1)
            } : {
                term: "AT",
                academicYear: this.academicYear
            })
        }
        ,
        e.prototype.toLocaleString = function(e, t) {
            var n = "AT" === this.term ? this.academicYear.split("/")[0] : this.academicYear.split("/")[1];
            return t && (n = n.substr(2)),
            "AT" === this.term ? e.formatMessage({
                id: "termplanner.secondTerm",
                defaultMessage: "HT {year}"
            }, {
                year: n
            }) : e.formatMessage({
                id: "termplanner.firstTerm",
                defaultMessage: "VT {year}"
            }, {
                year: n
            })
        }
        ,
        e
    }()
      , s = n(12)
      , c = n(165)
      , l = n(136)
      , u = function(e, t, n) {
        for (var r = [], a = t; a <= n; a++)
            r.push({
                schoolName: "KED",
                tuitionGroupName: e,
                studentFirstName: "Student " + a,
                studentLastName: "Classroom",
                studentEmailAddress: "student" + a + ".classroom@kedschools.com"
            });
        return r
    };
    var d, p, m = [{
        schoolName: "KED",
        teacherFirstName: "Teacher 1",
        teacherLastName: "Classroom",
        teacherEmailAddress: "teacher1.classroom@kedschools.com"
    }, {
        schoolName: "KED",
        teacherFirstName: "Teacher 2",
        teacherLastName: "Classroom",
        teacherEmailAddress: "teacher2.classroom@kedschools.com"
    }, {
        schoolName: "KED",
        teacherFirstName: "Teacher 3",
        teacherLastName: "Classroom",
        teacherEmailAddress: "teacher3.classroom@kedschools.com"
    }, {
        schoolName: "KED",
        teacherFirstName: "Carl",
        teacherLastName: "Holmberg",
        teacherEmailAddress: "carl@kedschools.com"
    }, {
        schoolName: "KED",
        teacherFirstName: "David",
        teacherLastName: "Fahlander",
        teacherEmailAddress: "david.fahlander@kedschools.com"
    }, {
        schoolName: "KED",
        teacherFirstName: "Andrei",
        teacherLastName: "Spatarelu",
        teacherEmailAddress: "andrei.spatarelu@vemendo.se"
    }, {
        schoolName: "KED",
        teacherFirstName: "Andrei",
        teacherLastName: "Spatarelu",
        teacherEmailAddress: "andrei@kedschools.com"
    }], h = {
        "2020/2021": [{
            baseGroupName: "6.1",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11122"
        }, {
            baseGroupName: "Spanska, ak 4",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11123"
        }, {
            baseGroupName: "7.5",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11124"
        }, {
            baseGroupName: "9.1",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11125"
        }, {
            baseGroupName: "Spanska, ak 3",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11126"
        }, {
            baseGroupName: "7.1",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11127"
        }, {
            baseGroupName: "Franska, ak7",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11128"
        }, {
            baseGroupName: "Franska, ak4",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11129"
        }, {
            baseGroupName: "Spanska",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11130"
        }, {
            baseGroupName: "6.2",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11131"
        }, {
            baseGroupName: "6.3",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11132"
        }, {
            baseGroupName: "6.4",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11133"
        }, {
            baseGroupName: "6.5",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11134"
        }, {
            baseGroupName: "6.5, Spåkval Franska",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11135"
        }, {
            baseGroupName: "6.1, Spåkval Tyska",
            schoolName: "KED",
            academicYearName: "2019/2020",
            baseGroupId: "11136"
        }],
        "2021/2022": [{
            baseGroupName: "6.1",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11122"
        }, {
            baseGroupName: "Spanska, ak 4",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11123"
        }, {
            baseGroupName: "7.5",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11124"
        }, {
            baseGroupName: "9.1",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11125"
        }, {
            baseGroupName: "Spanska, ak 3",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11126"
        }, {
            baseGroupName: "7.1",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11127"
        }, {
            baseGroupName: "Franska, ak7",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11128"
        }, {
            baseGroupName: "Franska, ak4",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11129"
        }, {
            baseGroupName: "Spanska",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11130"
        }, {
            baseGroupName: "6.2",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11131"
        }, {
            baseGroupName: "6.3",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11132"
        }, {
            baseGroupName: "6.4",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11133"
        }, {
            baseGroupName: "6.5",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11134"
        }, {
            baseGroupName: "6.5, Spåkval Franska",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11135"
        }, {
            baseGroupName: "6.1, Spåkval Tyska",
            schoolName: "KED",
            academicYearName: "2021/2022",
            baseGroupId: "11136"
        }]
    }, g = {
        11122: [{
            firstName: "Vemendo",
            lastName: "Elev",
            emailAddress: "vemendo.elev@kedschools.com",
            baseGroupName: "6.1",
            schoolName: "KED",
            academicYearName: "2021/2022",
            basegroupIsActive: !0,
            userIsActive: !0
        }, {
            firstName: "Student 1",
            lastName: "Test",
            emailAddress: "student1.classroom@kedschools.com",
            baseGroupName: "6.1",
            schoolName: "KED",
            academicYearName: "2021/2022",
            basegroupIsActive: !0,
            userIsActive: !0
        }, {
            firstName: "Student 2",
            lastName: "Test",
            emailAddress: "student2.classroom@kedschools.com",
            baseGroupName: "6.1",
            schoolName: "KED",
            academicYearName: "2021/2022",
            basegroupIsActive: !0,
            userIsActive: !0
        }, {
            firstName: "Student 3",
            lastName: "Test 3",
            emailAddress: "student3.classroom@kedschools.com",
            baseGroupName: "6.1",
            schoolName: "KED",
            academicYearName: "2020/2021",
            basegroupIsActive: !0,
            userIsActive: !0
        }],
        11131: [{
            firstName: "Student 8",
            lastName: "Test",
            emailAddress: "student8.classroom@kedschools.com",
            baseGroupName: "6.2",
            schoolName: "KED",
            academicYearName: "2020/2021",
            basegroupIsActive: !0,
            userIsActive: !0
        }, {
            firstName: "Student 9",
            lastName: "Test",
            emailAddress: "student9.classroom@kedschools.com",
            baseGroupName: "6.2",
            schoolName: "KED",
            academicYearName: "2019/2020",
            basegroupIsActive: !0,
            userIsActive: !0
        }, {
            firstName: "Student 10",
            lastName: "Test",
            emailAddress: "student10.classroom@kedschools.com",
            baseGroupName: "6.2",
            schoolName: "KED",
            academicYearName: "2019/2020",
            basegroupIsActive: !0,
            userIsActive: !0
        }],
        11125: [{
            firstName: "Student 4",
            lastName: "Test",
            emailAddress: "student4.classroom@kedschools.com",
            baseGroupName: "9.1",
            schoolName: "KED",
            academicYearName: "2020/2021",
            basegroupIsActive: !0,
            userIsActive: !0
        }, {
            firstName: "Student 5",
            lastName: "Test",
            emailAddress: "student5.classroom@kedschools.com",
            baseGroupName: "9.1",
            schoolName: "KED",
            academicYearName: "2020/2021",
            basegroupIsActive: !0,
            userIsActive: !0
        }, {
            firstName: "Student 7",
            lastName: "Test",
            emailAddress: "student7.classroom@kedschools.com",
            baseGroupName: "9.1",
            schoolName: "KED",
            academicYearName: "2020/2021",
            basegroupIsActive: !0,
            userIsActive: !0
        }]
    }, b = {
        "DJUSÄL01": [{
            schoolName: "KED",
            tuitionGroupName: "DJUR1_GR1 (180816-190614)",
            courseCode: "DJUSÄL01",
            tuitionGroupId: "123"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUR1_GR2 (180816-190614)",
            courseCode: "DJUSÄL01",
            tuitionGroupId: "124"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUR1_GR3 (180816-190614)",
            courseCode: "DJUSÄL01",
            tuitionGroupId: "125"
        }],
        DJUDJI0: [{
            schoolName: "KED",
            tuitionGroupName: "DJUDJ_Gr1 (180816-190614)",
            courseCode: "DJUDJI0",
            tuitionGroupId: "126"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUDJ_Gr2 (180816-190614)",
            courseCode: "DJUDJI0",
            tuitionGroupId: "126"
        }],
        KEMKEM01: [{
            schoolName: "KED",
            tuitionGroupName: "KEM1_Gr1 (180816-190614)",
            courseCode: "KEMKEM01",
            tuitionGroupId: "K123"
        }, {
            schoolName: "KED",
            tuitionGroupName: "KEM1_Gr2 (180816-190614)",
            courseCode: "KEMKEM01",
            tuitionGroupId: "K124"
        }],
        MATMAT02b: [{
            schoolName: "KED",
            tuitionGroupName: "MAT2b_Gr1 (200816-210614)",
            courseCode: "MATMAT02b"
        }, {
            schoolName: "KED",
            tuitionGroupName: "MAT2b_Gr2 (200816-210614)",
            courseCode: "MATMAT02b"
        }, {
            schoolName: "KED",
            tuitionGroupName: "MAT2b_Gr3 (200816-210614)",
            courseCode: "MATMAT02b"
        }],
        MATMAT03b: [{
            schoolName: "KED",
            tuitionGroupName: "MAT3b_Gr1 (180816-190614)",
            courseCode: "MATMAT03b"
        }, {
            schoolName: "KED",
            tuitionGroupName: "MAT3b_Gr2 (180816-190614)",
            courseCode: "MATMAT03b"
        }, {
            schoolName: "KED",
            tuitionGroupName: "MAT3b_Gr3 (180816-190614)",
            courseCode: "MATMAT03b"
        }],
        BIOBIO01: [{
            schoolName: "KED",
            tuitionGroupName: "BIO1_Gr1 (180816-190614)",
            courseCode: "BIOBIO01"
        }, {
            schoolName: "KED",
            tuitionGroupName: "BIO1_Gr2 (180816-190614)",
            courseCode: "BIOBIO01"
        }],
        GRGRSVE01: [{
            schoolName: "KED",
            tuitionGroupName: "SVE3_Gr1 (180816-190614)",
            courseCode: "SVESVE03"
        }, {
            schoolName: "KED",
            tuitionGroupName: "SVE3_Gr2 (180816-190614)",
            courseCode: "SVESVE03"
        }, {
            schoolName: "KED",
            tuitionGroupName: "SVE3_Gr3 (180816-190614)",
            courseCode: "SVESVE03"
        }, {
            schoolName: "KED",
            tuitionGroupName: "SVE3_Gr4 (180816-190614)",
            courseCode: "SVESVE03"
        }, {
            schoolName: "KED",
            tuitionGroupName: "SVE3_Gr5 (180816-190614)",
            courseCode: "SVESVE03"
        }, {
            schoolName: "KED",
            tuitionGroupName: "SVE3_Gr6 (180816-190614)",
            courseCode: "SVESVE03"
        }, {
            schoolName: "KED",
            tuitionGroupName: "SVE3_Gr7 (180816-190614)",
            courseCode: "SVESVE03"
        }]
    }, f = {
        "DJUR1_GR1 (180816-190614)": u("DJUR1_GR1 (180816-190614)", 1, 12),
        "DJUR1_GR2 (180816-190614)": u("DJUR1_GR2 (180816-190614)", 13, 24),
        "DJUR1_GR3 (180816-190614)": Object(r.__spreadArray)([{
            schoolName: "KED",
            tuitionGroupName: "DJUR1_GR3 (180816-190614)",
            studentFirstName: "Student2",
            studentLastName: "Classroom",
            studentEmailAddress: "student2.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUR1_GR3 (180816-190614)",
            studentFirstName: "Eleven",
            studentLastName: "Globen",
            studentEmailAddress: "elev.globen@edu.kunskapsgymnasiet.se"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUR1_GR3 (180816-190614)",
            studentFirstName: "Carl",
            studentLastName: "Holmberg",
            studentEmailAddress: "carl@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUR1_GR3 (180816-190614)",
            studentFirstName: "Andrei",
            studentLastName: "Spatarelu",
            studentEmailAddress: "andrei.spatarelu@vemendo.se"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUR1_GR3 (180816-190614)",
            studentFirstName: "Student3",
            studentLastName: "Classroom",
            studentEmailAddress: "student3.classroom@kedschools.com"
        }], Object(r.__read)(u("DJUR1_GR3 (180816-190614)", 23, 34))),
        "DJUDJ_Gr1 (180816-190614)": Object(r.__spreadArray)([{
            schoolName: "KED",
            tuitionGroupName: "DJUDJ_Gr1 (180816-190614)",
            studentFirstName: "Carl",
            studentLastName: "Holmberg",
            studentEmailAddress: "carl@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUDJ_Gr1 (180816-190614)",
            studentFirstName: "Andrei",
            studentLastName: "Spatarelu",
            studentEmailAddress: "andrei.spatarelu@vemendo.se"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUDJ_Gr1 (180816-190614)",
            studentFirstName: "David",
            studentLastName: "Fahlander",
            studentEmailAddress: "david.fahlander@kedschools.com"
        }], Object(r.__read)(u("DJUDJ_Gr1 (180816-190614)", 151, 160))),
        "DJUDJ_Gr2 (180816-190614)": Object(r.__spreadArray)([{
            schoolName: "KED",
            tuitionGroupName: "DJUDJ_Gr2 (180816-190614)",
            studentFirstName: "Carl",
            studentLastName: "Holmberg",
            studentEmailAddress: "carl@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUDJ_Gr2 (180816-190614)",
            studentFirstName: "Andrei",
            studentLastName: "Spatarelu",
            studentEmailAddress: "andrei.spatarelu@vemendo.se"
        }, {
            schoolName: "KED",
            tuitionGroupName: "DJUDJ_Gr2 (180816-190614)",
            studentFirstName: "David",
            studentLastName: "Fahlander",
            studentEmailAddress: "david.fahlander@kedschools.com"
        }], Object(r.__read)(u("DJUDJ_Gr2 (180816-190614)", 161, 165))),
        "MAT3b_Gr1 (180816-190614)": u("MAT3b_Gr1 (180816-190614)", 3, 23),
        "MAT3b_Gr3 (180816-190614)": u("MAT3b_Gr3 (180816-190614)", 24, 49),
        "MAT3b_Gr2 (180816-190614)": Object(r.__spreadArray)([{
            schoolName: "KED",
            tuitionGroupName: "MAT3b_Gr2 (180816-190614)",
            studentFirstName: "Andrei",
            studentLastName: "Spatarelu",
            studentEmailAddress: "andrei@kedschools.com"
        }], Object(r.__read)(u("MAT3b_Gr2 (180816-190614)", 50, 72))),
        "IDR1_Gr1 (180816-190614)": u("IDR1_Gr1 (180816-190614)", 1, 12),
        "IDR1_Gr2 (180816-190614)": u("IDR1_Gr2 (180816-190614)", 13, 22),
        "IDR1_Gr3 (180816-190614)": u("IDR1_Gr3 (180816-190614)", 23, 34),
        "KEM1_Gr1 (180816-190614)": [{
            schoolName: "KED",
            tuitionGroupName: "KEM1_Gr1 (180816-190614)",
            studentFirstName: "Student 2",
            studentLastName: "Classroom",
            studentEmailAddress: "student2.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "KEM1_Gr1 (180816-190614)",
            studentFirstName: "Student 3",
            studentLastName: "Classroom",
            studentEmailAddress: "student3.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "KEM1_Gr1 (180816-190614)",
            studentFirstName: "Student 8",
            studentLastName: "Classroom",
            studentEmailAddress: "student8.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "KEM1_Gr1 (180816-190614)",
            studentFirstName: "Student 9",
            studentLastName: "Classroom",
            studentEmailAddress: "student9.classroom@kedschools.com"
        }],
        "KEM1_Gr2 (180816-190614)": [{
            schoolName: "KED",
            tuitionGroupName: "KEM1_Gr2 (180816-190614)",
            studentFirstName: "Student 1",
            studentLastName: "Classroom",
            studentEmailAddress: "student1.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "KEM1_Gr2 (180816-190614)",
            studentFirstName: "Student 5",
            studentLastName: "Classroom",
            studentEmailAddress: "student5.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "KEM1_Gr2 (180816-190614)",
            studentFirstName: "Student 6",
            studentLastName: "Classroom",
            studentEmailAddress: "student6.classroom@kedschools.com"
        }],
        "BIO1_Gr1 (180816-190614)": [{
            schoolName: "KED",
            tuitionGroupName: "BIO1_Gr1 (180816-190614)",
            studentFirstName: "Student 1",
            studentLastName: "Classroom",
            studentEmailAddress: "student1.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "BIO1_Gr1 (180816-190614)",
            studentFirstName: "Student 4",
            studentLastName: "Classroom",
            studentEmailAddress: "student4.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "BIO1_Gr1 (180816-190614)",
            studentFirstName: "Student 6",
            studentLastName: "Classroom",
            studentEmailAddress: "student6.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "BIO1_Gr1 (180816-190614)",
            studentFirstName: "Student 10",
            studentLastName: "Classroom",
            studentEmailAddress: "student10.classroom@kedschools.com"
        }],
        "BIO1_Gr2 (180816-190614)": [{
            schoolName: "KED",
            tuitionGroupName: "BIO1_Gr2 (180816-190614)",
            studentFirstName: "Student 2",
            studentLastName: "Classroom",
            studentEmailAddress: "student2.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "BIO1_Gr2 (180816-190614)",
            studentFirstName: "Student 7",
            studentLastName: "Classroom",
            studentEmailAddress: "student7.classroom@kedschools.com"
        }, {
            schoolName: "KED",
            tuitionGroupName: "BIO1_Gr2 (180816-190614)",
            studentFirstName: "Student 8",
            studentLastName: "Classroom",
            studentEmailAddress: "student8.classroom@kedschools.com"
        }],
        "SVE3_Gr1 (180816-190614)": u("SVE3_Gr1 (180816-190614)", 1, 21),
        "SVE3_Gr2 (180816-190614)": u("SVE3_Gr2 (180816-190614)", 22, 44),
        "SVE3_Gr3 (180816-190614)": u("SVE3_Gr3 (180816-190614)", 45, 61),
        "SVE3_Gr4 (180816-190614)": u("SVE3_Gr4 (180816-190614)", 62, 78),
        "SVE3_Gr5 (180816-190614)": u("SVE3_Gr5 (180816-190614)", 83, 107),
        "SVE3_Gr6 (180816-190614)": u("SVE3_Gr6 (180816-190614)", 108, 124),
        "SVE3_Gr7 (180816-190614)": u("SVE3_Gr7 (180816-190614)", 125, 150)
    }, v = n(10), k = (n(210),
    Object(r.__read)((null === (d = v.a.EDS_ALTERNATE_URL) || void 0 === d ? void 0 : d.split(";")) || [], 2)), w = k[0], y = k[1], _ = new Set((null === (p = null == y ? void 0 : y.split(",")) || void 0 === p ? void 0 : p.map((function(e) {
        return e.trim()
    }
    ))) || []);
    var O = n(319)
      , T = n(320)
      , j = n(404)
      , E = n(245)
      , S = n(299)
      , x = n(298)
      , C = function() {
        function e(t, n, r, o) {
            var i = this;
            this.http = new a.f(t,function(e, t) {
                var n;
                return _.has(null === (n = t()) || void 0 === n ? void 0 : n.school) ? w : e
            }(n, o),{
                bearerProvider: r
            }),
            this.userGetter = o;
            var s = function(e) {
                return "function" == typeof i[e] && "constructor" !== e && "privatizingCacheBust" !== e && "userEmailGetter" !== e
            };
            Object.keys(e.prototype).forEach((function(e) {
                s(e) && (i[e] = function(e) {
                    var t = {};
                    return function() {
                        var n = JSON.stringify([].slice.call(arguments));
                        return t[n] || (t[n] = e.apply(this, arguments).then((function(e) {
                            return delete t[n],
                            e
                        }
                        ))),
                        t[n]
                    }
                }(i[e]))
            }
            )),
            this.suspense = Object(l.a)(this, {
                isApiMethod: s
            })
        }
        return e.prototype.privatizingCacheBust = function() {
            var e;
            return {
                user: null === (e = this.userGetter()) || void 0 === e ? void 0 : e.mail
            }
        }
        ,
        e.prototype.getBasegroupStudents = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n, o, i;
                return Object(r.__generator)(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        if (c.trys.push([0, 5, , 6]),
                        e.baseGroupId.length < 8)
                            try {
                                return [2, g[e.baseGroupId] || []]
                            } catch (e) {
                                return [2, []]
                            }
                        return [4, this.http.get("BaseGroupStudents", e)];
                    case 1:
                        return 200 == (t = c.sent()).status ? [3, 3] : (n = a.c.bind,
                        o = [void 0, t.status],
                        [4, t.text()]);
                    case 2:
                        throw new (n.apply(a.c, o.concat([c.sent()])));
                    case 3:
                        return [4, t.json()];
                    case 4:
                        return [2, c.sent().baseGroupStudents.filter((function(e) {
                            return e.userIsActive && e.basegroupIsActive
                        }
                        ))];
                    case 5:
                        return i = c.sent(),
                        console.error("Error from EDS:", i),
                        Object(s.x)(Object(s.a)(N || (N = Object(r.__makeTemplateObject)(["Kunde inte ladda elever per basgrupp från EDS. Försök igen senare..."], ["Kunde inte ladda elever per basgrupp från EDS. Försök igen senare..."])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getSchoolBaseGroups = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n, o, i;
                return Object(r.__generator)(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        if (c.trys.push([0, 5, , 6]),
                        !e.schoolName)
                            try {
                                return [2, h[e.academicYearName] || []]
                            } catch (e) {
                                return [2, []]
                            }
                        return [4, this.http.get("SchoolBaseGroups", e)];
                    case 1:
                        return 200 == (t = c.sent()).status ? [3, 3] : (n = a.c.bind,
                        o = [void 0, t.status],
                        [4, t.text()]);
                    case 2:
                        throw new (n.apply(a.c, o.concat([c.sent()])));
                    case 3:
                        return [4, t.json()];
                    case 4:
                        return [2, c.sent().schoolBaseGroups];
                    case 5:
                        return i = c.sent(),
                        console.error("Error from EDS:", i),
                        Object(s.x)(Object(s.a)(A || (A = Object(r.__makeTemplateObject)(["Kunde tyvärr inte ladda basgrupper från EDS. Försök igen senare..."], ["Kunde tyvärr inte ladda basgrupper från EDS. Försök igen senare..."])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getActiveCourses = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n, o, i, c;
                return Object(r.__generator)(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        return l.trys.push([0, 5, , 6]),
                        t = this.privatizingCacheBust(),
                        e && (e.courseCode && (t.CourseCode = e.courseCode),
                        e.periodName && (t.PeriodName = e.periodName)),
                        [4, this.http.get("studentactivecourses", t)];
                    case 1:
                        return 200 == (n = l.sent()).status ? [3, 3] : (o = a.c.bind,
                        i = [void 0, n.status],
                        [4, n.text()]);
                    case 2:
                        throw new (o.apply(a.c, i.concat([l.sent()])));
                    case 3:
                        return [4, n.json()];
                    case 4:
                        return [2, l.sent().courses];
                    case 5:
                        return c = l.sent(),
                        console.error("Error from EDS:", c),
                        Object(s.x)(Object(s.a)(I || (I = Object(r.__makeTemplateObject)(["Kunde tyvärr inte ladda terminsmål eller avklarade steg från EDS. Försök igen senare..."], ["Kunde tyvärr inte ladda terminsmål eller avklarade steg från EDS. Försök igen senare..."])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getLatestAssessments = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n, o, i, c;
                return Object(r.__generator)(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        return l.trys.push([0, 5, , 6]),
                        t = this.privatizingCacheBust(),
                        isNaN(e) || (t.Count = e),
                        [4, this.http.get("studentassessments", t)];
                    case 1:
                        return 200 == (n = l.sent()).status ? [3, 3] : (o = a.c.bind,
                        i = [void 0, n.status],
                        [4, n.text()]);
                    case 2:
                        throw new (o.apply(a.c, i.concat([l.sent()])));
                    case 3:
                        return [4, n.json()];
                    case 4:
                        return [2, l.sent().assessments];
                    case 5:
                        return c = l.sent(),
                        console.error("Error from EDS:", c),
                        Object(s.x)(Object(s.a)(L || (L = Object(r.__makeTemplateObject)(["Kunde inte ladda senaste bedömningar från EDS"], ["Kunde inte ladda senaste bedömningar från EDS"])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getStudentGoals = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n, o;
                return Object(r.__generator)(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return i.trys.push([0, 5, , 6]),
                        [4, this.http.get("studentgoals", this.privatizingCacheBust())];
                    case 1:
                        return 200 == (e = i.sent()).status ? [3, 3] : (t = a.c.bind,
                        n = [void 0, e.status],
                        [4, e.text()]);
                    case 2:
                        throw new (t.apply(a.c, n.concat([i.sent()])));
                    case 3:
                        return [4, e.json()];
                    case 4:
                        return [2, i.sent().studentGoals];
                    case 5:
                        return o = i.sent(),
                        console.error("Error from EDS:", o),
                        Object(s.x)(Object(s.a)(P || (P = Object(r.__makeTemplateObject)(["Kunde inte ladda mål från EDS"], ["Kunde inte ladda mål från EDS"])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getStudentFutureAbilities = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n, o;
                return Object(r.__generator)(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return i.trys.push([0, 5, , 6]),
                        [4, this.http.get("studentFutureAbilities", this.privatizingCacheBust())];
                    case 1:
                        return 200 == (e = i.sent()).status ? [3, 3] : (t = a.c.bind,
                        n = [void 0, e.status],
                        [4, e.text()]);
                    case 2:
                        throw new (t.apply(a.c, n.concat([i.sent()])));
                    case 3:
                        return [4, e.json()];
                    case 4:
                        return [2, i.sent().studentFutureAbilities];
                    case 5:
                        return o = i.sent(),
                        console.error("Error from EDS:", o),
                        Object(s.x)(Object(s.a)(V || (V = Object(r.__makeTemplateObject)(["Kunde inte ladda framtidsförmågor från EDS"], ["Kunde inte ladda framtidsförmågor från EDS"])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getTeacherTutorStudents = function() {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n, o, i, c;
                return Object(r.__generator)(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        return l.trys.push([0, 5, , 6]),
                        [4, this.http.get("teachertutorstudents", this.privatizingCacheBust())];
                    case 1:
                        return 200 == (e = l.sent()).status ? [3, 3] : (t = a.c.bind,
                        n = [void 0, e.status],
                        [4, e.text()]);
                    case 2:
                        throw new (t.apply(a.c, n.concat([l.sent()])));
                    case 3:
                        return [4, e.json()];
                    case 4:
                        return o = l.sent(),
                        i = o.students,
                        [2, Object(s.m)(i, (function(e) {
                            return e.email
                        }
                        ))];
                    case 5:
                        return c = l.sent(),
                        console.error("Error from EDS:", c),
                        Object(s.x)(Object(s.a)(G || (G = Object(r.__makeTemplateObject)(["Kunde inte ladda handledda elever från EDS"], ["Kunde inte ladda handledda elever från EDS"])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getSchoolTuitionGroups = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n, o, i, c;
                return Object(r.__generator)(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        if (l.trys.push([0, 5, , 6]),
                        !e.schoolName)
                            try {
                                return [2, e.courseCode ? Object(s.n)(Object.values(b).map((function(e) {
                                    return e
                                }
                                ))) : Object(s.n)(Object.values(b).filter((function(e) {
                                    return !!e.tuitionGroupId
                                }
                                )))]
                            } catch (e) {
                                return [2, []]
                            }
                        return [4, this.http.get("SchoolTuitionGroups", Object(r.__assign)(Object(r.__assign)({}, this.privatizingCacheBust()), e))];
                    case 1:
                        return 200 == (t = l.sent()).status ? [3, 3] : (n = a.c.bind,
                        o = [void 0, t.status],
                        [4, t.text()]);
                    case 2:
                        throw new (n.apply(a.c, o.concat([l.sent()])));
                    case 3:
                        return [4, t.json()];
                    case 4:
                        return i = l.sent(),
                        [2, i.schoolTuitionGroups.map((function(e) {
                            return Object(r.__assign)(Object(r.__assign)({}, e), {
                                tuitionGroupName: e.tuitionGroupName.trim()
                            })
                        }
                        ))];
                    case 5:
                        return c = l.sent(),
                        console.error("Error from EDS:", c),
                        Object(s.x)(Object(s.a)(R || (R = Object(r.__makeTemplateObject)(["Kunde inte ladda undervisningsgrupper från EDS"], ["Kunde inte ladda undervisningsgrupper från EDS"])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getTuitionGroupStudents = function(e) {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var t, n, o, i;
                return Object(r.__generator)(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        return c.trys.push([0, 5, , 6]),
                        void 0 === e.schoolName && e.tuitionGroupName ? [2, f[e.tuitionGroupName] || (l = e.tuitionGroupName,
                        d = 1,
                        p = 12,
                        Object(r.__spreadArray)([{
                            schoolName: "KED",
                            tuitionGroupName: l,
                            studentFirstName: "Carl",
                            studentLastName: "Holmberg",
                            studentEmailAddress: "carl@kedschools.com"
                        }, {
                            schoolName: "KED",
                            tuitionGroupName: l,
                            studentFirstName: "Andrei",
                            studentLastName: "Spatarelu",
                            studentEmailAddress: "andrei.spatarelu@kedschools.com"
                        }, {
                            schoolName: "KED",
                            tuitionGroupName: l,
                            studentFirstName: "David",
                            studentLastName: "Fahlander",
                            studentEmailAddress: "david.fahlander@kedschools.com"
                        }], Object(r.__read)(u(l, d, p))))] : [4, this.http.get("TuitionGroupStudents", Object(r.__assign)(Object(r.__assign)({}, this.privatizingCacheBust()), e))];
                    case 1:
                        return 200 == (t = c.sent()).status ? [3, 3] : (n = a.c.bind,
                        o = [void 0, t.status],
                        [4, t.text()]);
                    case 2:
                        throw new (n.apply(a.c, o.concat([c.sent()])));
                    case 3:
                        return [4, t.json()];
                    case 4:
                        return [2, c.sent().tuitionGroupStudents];
                    case 5:
                        return i = c.sent(),
                        console.error("Error from EDS:", i),
                        Object(s.x)(Object(s.a)(B || (B = Object(r.__makeTemplateObject)(["Kunde inte ladda undervisningsgruppens studenter från EDS"], ["Kunde inte ladda undervisningsgruppens studenter från EDS"])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                    var l, d, p
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getStudentTuitionGroups = function(e) {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var t, n, o, i;
                return Object(r.__generator)(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        return c.trys.push([0, 5, , 6]),
                        void 0 === e.emailAddress && (e = {
                            emailAddress: this.userGetter().mail
                        }),
                        [4, this.http.get("StudentTuitionGroups", Object(r.__assign)(Object(r.__assign)({}, this.privatizingCacheBust()), e))];
                    case 1:
                        return 200 == (t = c.sent()).status ? [3, 3] : (n = a.c.bind,
                        o = [void 0, t.status],
                        [4, t.text()]);
                    case 2:
                        throw new (n.apply(a.c, o.concat([c.sent()])));
                    case 3:
                        return [4, t.json()];
                    case 4:
                        return [2, c.sent().tuitionGroupStudents];
                    case 5:
                        return i = c.sent(),
                        console.error("Error from EDS:", i),
                        Object(s.x)(Object(s.a)(U || (U = Object(r.__makeTemplateObject)(["Kunde inte ladda undervisningsgrupper från EDS"], ["Kunde inte ladda undervisningsgrupper från EDS"])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getSchoolTeachers = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n, o, i, c;
                return Object(r.__generator)(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        if (l.trys.push([0, 5, , 6]),
                        !e.schoolName)
                            try {
                                return [2, m]
                            } catch (e) {
                                return [2, []]
                            }
                        return [4, this.http.get("SchoolTeachers", Object(r.__assign)(Object(r.__assign)({}, this.privatizingCacheBust()), e))];
                    case 1:
                        return 200 == (t = l.sent()).status ? [3, 3] : (n = a.c.bind,
                        o = [void 0, t.status],
                        [4, t.text()]);
                    case 2:
                        throw new (n.apply(a.c, o.concat([l.sent()])));
                    case 3:
                        return [4, t.json()];
                    case 4:
                        return i = l.sent(),
                        [2, i.schoolTeachers.map((function(e) {
                            return Object(r.__assign)(Object(r.__assign)({}, e), {
                                teacherEmailAddress: e.teacherEmailAddress.toLowerCase()
                            })
                        }
                        ))];
                    case 5:
                        return c = l.sent(),
                        console.error("Error from EDS:", c),
                        Object(s.x)(Object(s.a)(M || (M = Object(r.__makeTemplateObject)(["Kunde inte ladda skolans lärare från EDS"], ["Kunde inte ladda skolans lärare från EDS"])))),
                        [2, []];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getAcademicYearTerms = function(e, t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(n) {
                    return [2, D(e, t)]
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    function D(e, t) {
        switch (e) {
        case "en_sin":
            return c.SouthIndia.filter((function(e) {
                return Object(O.default)(t, {
                    start: Object(T.default)(e.firstTerm.startDate),
                    end: Object(T.default)(e.secondTerm.endDate)
                })
            }
            ))[0];
        case "en_nin":
            return c.NorthIndia.filter((function(e) {
                return Object(O.default)(t, {
                    start: Object(T.default)(e.firstTerm.startDate),
                    end: Object(T.default)(e.secondTerm.endDate)
                })
            }
            ))[0];
        case "sv":
            var n = Object(o.c)(new Date(t), !0)
              , r = Object(o.c)(new Date(t), !1)
              , a = n[0]
              , i = r[0]
              , s = n[1]
              , l = r[1];
            return {
                firstTerm: {
                    startDate: Object(j.a)(a, {
                        representation: "date"
                    }),
                    endDate: Object(j.a)(new Date(Object(E.default)(a),Object(S.default)(s),Object(x.default)(s)), {
                        representation: "date"
                    })
                },
                secondTerm: {
                    startDate: Object(j.a)(i, {
                        representation: "date"
                    }),
                    endDate: Object(j.a)(new Date(Object(E.default)(i),Object(S.default)(l),Object(x.default)(l)), {
                        representation: "date"
                    })
                },
                holidays: []
            };
        case "ar":
            return c.SaudiArabia.filter((function(e) {
                return Object(O.default)(t, {
                    start: Object(T.default)(e.firstTerm.startDate),
                    end: Object(T.default)(e.secondTerm.endDate)
                })
            }
            ))[0]
        }
    }
    var N, A, I, L, P, V, G, R, B, U, M, K = function() {
        function e(e) {
            if ("string" == typeof e) {
                if (this.period = e,
                "en_sin" === v.a.KED_SCHOOL_LOCALE || "en_nin" === v.a.KED_SCHOOL_LOCALE) {
                    var t = D(v.a.KED_SCHOOL_LOCALE, Date.now());
                    this.period.includes("1") ? (this.term = "AT",
                    this.year = Object(E.default)(Object(T.default)(t.firstTerm.startDate))) : (this.term = "ST",
                    this.year = Object(E.default)(Object(T.default)(t.secondTerm.startDate)))
                } else if (this.term = this.period.startsWith("HT") ? "AT" : "ST",
                this.year = parseInt(this.period.substr(2)),
                isNaN(this.year))
                    throw new Error("Invalid period: " + this.period)
            } else {
                var n = new i(e);
                this.period = ("AT" === n.term ? "HT" : "VT") + n.year,
                this.term = n.term,
                this.year = n.year
            }
        }
        return Object.defineProperty(e.prototype, "schoolTerm", {
            get: function() {
                return new i({
                    academicYear: "AT" === this.term ? this.year + "/" + (this.year + 1) : this.year - 1 + "/" + this.year,
                    term: this.term
                })
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "kgPeriod", {
            get: function() {
                var e = ("AT" === this.term ? this.year : this.year - 1).toString()
                  , t = parseInt(e.substr(2, e.length - 1));
                return "LU " + t + "-" + (t + 1)
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.toString = function() {
            return this.period
        }
        ,
        e.prototype.valueOf = function() {
            return this.year + ":" + ("ST" === this.term ? "1" : "2")
        }
        ,
        e
    }()
}
, function(e, t, n) {
    "use strict";
    var r = n(143);
    n.d(t, "a", (function() {
        return r.a
    }
    ))
}
, , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }
    ));
    var r = n(0)
      , a = n(13)
      , o = n(62)
      , i = n(231)
      , s = function() {
        function e(e) {
            var t = this
              , n = e.table
              , a = e.getClient
              , o = e.getQueryOptions;
            this.mem = new i.a({
                query: function() {
                    return Object(r.__awaiter)(t, void 0, void 0, (function() {
                        var e;
                        return Object(r.__generator)(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, o()];
                            case 1:
                                return e = t.sent(),
                                [4, a().list(n, Object(r.__assign)(Object(r.__assign)({}, e), {
                                    cacheBust: this.getCacheBust()
                                }))];
                            case 2:
                                return [2, t.sent()]
                            }
                        }
                        ))
                    }
                    ))
                }
            }),
            this.options = e
        }
        return e.prototype.getCacheBust = function() {
            var e = this.options
              , t = e.table
              , n = e.user;
            return localStorage.getItem("cache-bust-" + t + "-" + n) || this.regenerateCacheBust()
        }
        ,
        e.prototype.regenerateCacheBust = function() {
            var e = this.options
              , t = e.table
              , n = e.user
              , r = Object(a.j)();
            return localStorage.setItem("cache-bust-" + t + "-" + n, r),
            r
        }
        ,
        e.prototype.upsert = function(e, t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var n, a = this;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return e.$etag ? [3, 2] : (n = Object.assign({}, e),
                        t(n),
                        [4, this.insert([n])]);
                    case 1:
                        return [2, r.sent()];
                    case 2:
                        return [4, this.update([e], t).catch((function(n) {
                            if ("http404" === n.name) {
                                var r = Object.assign({}, e);
                                return t(r),
                                a.insert([r])
                            }
                            return Promise.reject(n)
                        }
                        ))];
                    case 3:
                        r.sent(),
                        r.label = 4;
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.applyUpdateSpec = function(e, t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var n;
                return Object(r.__generator)(this, (function(r) {
                    return n = function(e) {
                        var n = Object(o.d)(e, t);
                        Object.assign(e, n)
                    }
                    ,
                    [2, this.update(e, n)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.update = function(e, t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var n, a, o, i, s, c, l, u = this;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return n = this.options,
                        a = n.getClient,
                        o = n.optimistic,
                        i = n.table,
                        s = a(),
                        c = e.map((function(e) {
                            var n = u.mem.items.find((function(t) {
                                return t.id === e.id
                            }
                            ));
                            return e = Object.assign({}, n || e),
                            t(e),
                            e
                        }
                        )),
                        o ? [4, this.mem.update(c.map((function(e) {
                            return Object.assign({}, e, {
                                $meta: "updating"
                            })
                        }
                        )))] : [3, 2];
                    case 1:
                        r.sent(),
                        r.label = 2;
                    case 2:
                        return [4, s.do((function(e) {
                            return c.forEach((function(t) {
                                return e.put(i, t)
                            }
                            ))
                        }
                        )).catch((function(n) {
                            return "http409" === n.name ? s.list(i, {
                                ids: e.map((function(e) {
                                    return e.id
                                }
                                ))
                            }, {
                                cache: "no-cache"
                            }).then((function(e) {
                                var n = e.map((function(e) {
                                    var n = Object.assign({}, e);
                                    return t(n),
                                    n
                                }
                                ));
                                return s.do((function(e) {
                                    return n.forEach((function(t) {
                                        return e.put(i, t)
                                    }
                                    ))
                                }
                                ))
                            }
                            )) : Promise.resolve(o && u.mem.update(e)).then((function() {
                                return Promise.reject(n)
                            }
                            ))
                        }
                        ))];
                    case 3:
                        return l = r.sent(),
                        this.regenerateCacheBust(),
                        c.forEach((function(e) {
                            e.$etag = l.newEtags[e.id],
                            e.$meta = void 0
                        }
                        )),
                        [4, this.mem.update(c)];
                    case 4:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.stripGraphs = function(e, t) {
            return e.map((function(e) {
                var n = Object.assign({}, e);
                return t.forEach((function(t) {
                    e[t] && (n[t] = e[t].map((function(e) {
                        return {
                            id: e.id
                        }
                    }
                    )))
                }
                )),
                n
            }
            ))
        }
        ,
        e.prototype.insert = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n, o, i, s, c, l, u, d, p, m, h, g, b, f, v, k, w = this;
                return Object(r.__generator)(this, (function(y) {
                    switch (y.label) {
                    case 0:
                        return t = this.options,
                        n = t.getClient,
                        o = t.optimistic,
                        i = t.table,
                        s = t.getQueryOptions,
                        c = n(),
                        [4, s()];
                    case 1:
                        return l = y.sent(),
                        u = [].concat(l.include),
                        e = e.map((function(e) {
                            return e.id ? e : Object.assign({}, e, {
                                id: Object(a.j)()
                            })
                        }
                        )),
                        d = this.stripGraphs(e, u),
                        o ? [4, this.mem.insert(d.map((function(e) {
                            return Object.assign({}, e, {
                                $meta: "adding"
                            })
                        }
                        )))] : [3, 3];
                    case 2:
                        y.sent(),
                        y.label = 3;
                    case 3:
                        p = new a.a,
                        m = function(e) {
                            var t, n, a = function(t) {
                                var n = e[t];
                                n && n.forEach((function(n) {
                                    p.link2(i, e.id, t, n.id)
                                }
                                ))
                            };
                            try {
                                for (var o = (t = void 0,
                                Object(r.__values)(u)), s = o.next(); !s.done; s = o.next()) {
                                    a(s.value)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    s && !s.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (t)
                                        throw t.error
                                }
                            }
                            p.add(i, e)
                        }
                        ;
                        try {
                            for (h = Object(r.__values)(d),
                            g = h.next(); !g.done; g = h.next())
                                b = g.value,
                                m(b)
                        } catch (e) {
                            v = {
                                error: e
                            }
                        } finally {
                            try {
                                g && !g.done && (k = h.return) && k.call(h)
                            } finally {
                                if (v)
                                    throw v.error
                            }
                        }
                        return [4, c.batch(p.mutationRequests).catch((function(t) {
                            return o && w.mem.delete(e.map((function(e) {
                                return e.id
                            }
                            ))),
                            Promise.reject(t)
                        }
                        ))];
                    case 4:
                        return f = y.sent(),
                        this.regenerateCacheBust(),
                        e.forEach((function(e) {
                            return e.$etag = f.newEtags[e.id]
                        }
                        )),
                        o ? [4, this.mem.update(e)] : [3, 6];
                    case 5:
                        return y.sent(),
                        [3, 8];
                    case 6:
                        return [4, this.mem.insert(e)];
                    case 7:
                        y.sent(),
                        y.label = 8;
                    case 8:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.delete = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n, a, o, i, s = this;
                return Object(r.__generator)(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        return t = this.options,
                        n = t.getClient,
                        a = t.optimistic,
                        o = t.table,
                        i = n(),
                        a ? [4, this.mem.update(e.map((function(e) {
                            return s.mem.items.find((function(t) {
                                return t.id === e
                            }
                            ))
                        }
                        )).filter((function(e) {
                            return e
                        }
                        )).map((function(e) {
                            return Object.assign({}, e, {
                                $meta: "deleting"
                            })
                        }
                        )))] : [3, 2];
                    case 1:
                        c.sent(),
                        c.label = 2;
                    case 2:
                        return [4, i.do((function(t) {
                            return e.forEach((function(e) {
                                return t.delete(o, e)
                            }
                            ))
                        }
                        )).catch((function(t) {
                            return Object(r.__awaiter)(s, void 0, void 0, (function() {
                                var n = this;
                                return Object(r.__generator)(this, (function(r) {
                                    switch (r.label) {
                                    case 0:
                                        return a ? [4, this.mem.update(e.map((function(e) {
                                            return n.mem.items.find((function(t) {
                                                return t.id === e
                                            }
                                            ))
                                        }
                                        )).filter((function(e) {
                                            return e
                                        }
                                        )).map((function(e) {
                                            return delete (e = Object.assign({}, e)).$meta,
                                            e
                                        }
                                        )))] : [3, 2];
                                    case 1:
                                        r.sent(),
                                        r.label = 2;
                                    case 2:
                                        throw t
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ))];
                    case 3:
                        return c.sent(),
                        this.regenerateCacheBust(),
                        [4, this.mem.delete(e)];
                    case 4:
                        return c.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }
    ));
    var r = n(0)
      , a = n(14)
      , o = {
        isApiMethod: null,
        cacheExpiration: 18e5,
        errorCacheExpiration: 5e3
    }
      , i = new Set(["length", "prototype", "arguments", "caller", "constructor", "apply", "bind", "call", "toString"]);
    function s(e, t) {
        void 0 === t && (t = o);
        for (var n = (t = Object(r.__assign)(Object(r.__assign)({}, o), t)).isApiMethod, s = t.cacheExpiration, c = t.errorCacheExpiration, l = Object.create(e), u = {}, d = e; d && d !== Object.prototype; d = Object.getPrototypeOf(d))
            p(d);
        function p(t) {
            Object.getOwnPropertyNames(t).forEach((function(o) {
                var d;
                l.hasOwnProperty(o) || (d = o,
                i.has(d) || "function" != typeof e[d] || n && !n(d)) || (l[o] = function() {
                    for (var n = [], i = 0; i < arguments.length; i++)
                        n[i] = arguments[i];
                    var l = JSON.stringify(Object(r.__spreadArray)([o], Object(r.__read)(n)))
                      , d = u[l];
                    if (void 0 !== d) {
                        if (d.promise)
                            throw d.promise;
                        if (Date.now() < d.timeout) {
                            var p = a.a.current;
                            if (p) {
                                var m = p.observables
                                  , h = d.observable;
                                m.push([h, h._hasValue, h._lastValue])
                            }
                            if (d.error)
                                throw d.error;
                            return d.value
                        }
                    }
                    try {
                        var g = t[o].apply(e, n).then((function(e) {
                            b.promise = null,
                            b.error = null,
                            b.value = e,
                            b.timeout = Date.now() + s
                        }
                        )).catch((function(e) {
                            b.promise = null,
                            b.error = e,
                            b.timeout = Date.now() + c
                        }
                        ))
                          , b = (h = new a.b(null),
                        {
                            timeout: Date.now() + s,
                            promise: g,
                            observable: h
                        });
                        throw u[l] = b,
                        g
                    } catch (e) {
                        if (e.then)
                            throw e;
                        u[l] = {
                            timeout: Date.now() + c,
                            error: e,
                            observable: new a.b(0)
                        }
                    }
                }
                )
            }
            ))
        }
        return l.$cache = {
            entries: function() {
                return Object(r.__spreadArray)([], Object(r.__read)(Object.entries(u))).map((function(e) {
                    var t = Object(r.__read)(e, 2)
                      , n = t[0]
                      , a = t[1]
                      , o = Object(r.__read)(JSON.parse(n));
                    return {
                        method: o[0],
                        args: o.slice(1),
                        cacheEntry: a
                    }
                }
                ))
            },
            invalidate: function(t, n) {
                var a, o, i = this.entries();
                t && (i = i.filter((function(e) {
                    var r = e.method
                      , a = e.args;
                    return r === t && !n || a.every((function(e, t) {
                        return n.length <= t || JSON.stringify(e) === JSON.stringify(n[t])
                    }
                    ))
                }
                )));
                var l = function(t, n, a) {
                    a.observable.subscribers.length > 0 ? e[t].apply(e, n).then((function(e) {
                        a.value = e,
                        a.error = null,
                        a.promise = null,
                        a.timeout = Date.now() + s,
                        a.observable.dispatch(e)
                    }
                    )).catch((function(e) {
                        a.value = null,
                        a.error = e,
                        a.promise = null,
                        a.timeout = Date.now() + c,
                        a.observable.dispatch(null)
                    }
                    )) : delete u[JSON.stringify(Object(r.__spreadArray)([t], Object(r.__read)(n)))]
                };
                try {
                    for (var d = Object(r.__values)(i), p = d.next(); !p.done; p = d.next()) {
                        var m = p.value;
                        l(m.method, m.args, m.cacheEntry)
                    }
                } catch (e) {
                    a = {
                        error: e
                    }
                } finally {
                    try {
                        p && !p.done && (o = d.return) && o.call(d)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
            }
        },
        l
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    }
    )),
    n.d(t, "a", (function() {
        return s
    }
    ));
    var r = n(14)
      , a = n(44)
      , o = new r.b(null)
      , i = new r.c(Object(r.h)((function() {
        var e = a.b.read();
        if (!e.complete)
            return null;
        if (!e.icClient)
            return null;
        var t = e.icClient.levelObservable.read()
          , n = t.levelData
          , r = (t.isLevelUpdated,
        o.value);
        r || (o.value = {
            env: e,
            levelData: n
        }),
        e !== (null == r ? void 0 : r.env) && (o.value = {
            env: e,
            levelData: n
        });
        var i = o.read().levelData;
        return {
            levelData: n,
            ackedData: i,
            doNotify: n.currentLevel > i.currentLevel || n.xpGainedAllTime > i.xpGainedAllTime
        }
    }
    )));
    function s() {
        var e, t, n = a.b.peek();
        if (n) {
            var r = ((null === (t = null === (e = n.icClient) || void 0 === e ? void 0 : e.levelObservable) || void 0 === t ? void 0 : t.peek()) || {}).levelData
              , i = void 0 === r ? null : r
              , s = o.value;
            s && i && s.levelData !== i && o.dispatch({
                env: n,
                levelData: i
            })
        }
    }
}
, , function(e, t, n) {
    "use strict";
    function r(e) {
        return function(t) {
            var n = this;
            return new e((function(e) {
                return n.subscribe((function(n, r, a) {
                    if (r)
                        e(null, r, a);
                    else
                        try {
                            e(t(n), r, a)
                        } catch (t) {
                            e(null, t, a)
                        }
                }
                ))
            }
            ))
        }
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    ));
    var r = {
        current: {},
        availableItems: {
            body: [{
                id: "Boy_1.svg",
                requiredLevel: 1,
                iconUrl: "/avatar-builder/Body/Boy_1.svg",
                components: [{
                    url: "/avatar-builder/Body/Boy_1.svg",
                    layer: 3
                }]
            }, {
                id: "Boy_2.svg",
                requiredLevel: 1,
                iconUrl: "/avatar-builder/Body/Boy_2.svg",
                components: [{
                    url: "/avatar-builder/Body/Boy_2.svg",
                    layer: 3
                }]
            }, {
                id: "Boy_3.svg",
                requiredLevel: 1,
                iconUrl: "/avatar-builder/Body/Boy_3.svg",
                components: [{
                    url: "/avatar-builder/Body/Boy_3.svg",
                    layer: 3
                }]
            }, {
                id: "Boy_4.svg",
                requiredLevel: 1,
                iconUrl: "/avatar-builder/Body/Boy_4.svg",
                components: [{
                    url: "/avatar-builder/Body/Boy_4.svg",
                    layer: 3
                }]
            }, {
                id: "Girl_1.svg",
                requiredLevel: 1,
                iconUrl: "/avatar-builder/Body/Girl_1.svg",
                components: [{
                    url: "/avatar-builder/Body/Girl_1.svg",
                    layer: 3
                }]
            }, {
                id: "Girl_2.svg",
                requiredLevel: 1,
                iconUrl: "/avatar-builder/Body/Girl_2.svg",
                components: [{
                    url: "/avatar-builder/Body/Girl_2.svg",
                    layer: 3
                }]
            }, {
                id: "Girl_3.svg",
                requiredLevel: 1,
                iconUrl: "/avatar-builder/Body/Girl_3.svg",
                components: [{
                    url: "/avatar-builder/Body/Girl_3.svg",
                    layer: 3
                }]
            }, {
                id: "Girl_4.svg",
                requiredLevel: 1,
                iconUrl: "/avatar-builder/Body/Girl_4.svg",
                components: [{
                    url: "/avatar-builder/Body/Girl_4.svg",
                    layer: 3
                }]
            }],
            hair: [{
                id: "BasicHair_01.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/BasicHair_01.png",
                components: [{
                    url: "/avatar-builder/hair/BasicHair_01.svg",
                    layer: 5
                }]
            }, {
                id: "BasicHair_02.png",
                requiredLevel: 2,
                iconUrl: "/seasonal-rewards/BasicHair_02.png",
                components: [{
                    url: "/avatar-builder/hair/BasicHair_02.svg",
                    layer: 5
                }]
            }, {
                id: "BasicHair_03.png",
                requiredLevel: 5,
                iconUrl: "/seasonal-rewards/BasicHair_03.png",
                components: [{
                    url: "/avatar-builder/hair/BasicHair_03.svg",
                    layer: 5
                }]
            }, {
                id: "BasicHair_04.png",
                requiredLevel: 8,
                iconUrl: "/seasonal-rewards/BasicHair_04.png",
                components: [{
                    url: "/avatar-builder/hair/BasicHair_04 back.svg",
                    layer: 1
                }, {
                    url: "/avatar-builder/hair/BasicHair_04 front.svg",
                    layer: 5
                }]
            }, {
                id: "BasicHair_05.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/BasicHair_05.png",
                components: [{
                    url: "/avatar-builder/hair/BasicHair_05 back.svg",
                    layer: 1
                }, {
                    url: "/avatar-builder/hair/BasicHair_05 front.svg",
                    layer: 5
                }]
            }, {
                id: "BasicHair_06.png",
                requiredLevel: 2,
                iconUrl: "/seasonal-rewards/BasicHair_06.png",
                components: [{
                    url: "/avatar-builder/hair/BasicHair_06 back.svg",
                    layer: 1
                }, {
                    url: "/avatar-builder/hair/BasicHair_06 front.svg",
                    layer: 5
                }]
            }, {
                id: "BasicHair_07.png",
                requiredLevel: 5,
                iconUrl: "/seasonal-rewards/BasicHair_07.png",
                components: [{
                    url: "/avatar-builder/hair/BasicHair_07 back.svg",
                    layer: 1
                }, {
                    url: "/avatar-builder/hair/BasicHair_07 front.svg",
                    layer: 5
                }]
            }, {
                id: "BasicHair_higab.png",
                requiredLevel: 2,
                iconUrl: "/seasonal-rewards/BasicHair_higab.png",
                components: [{
                    url: "/avatar-builder/hair/BasicHair_higab.svg",
                    layer: 1
                }]
            }],
            eyes: [{
                id: "Eyes_blue.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/Eyes_blue.png",
                components: [{
                    url: "/avatar-builder/Eyes/Eyes_blue.svg",
                    layer: 4
                }]
            }, {
                id: "Eyes_brown.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/Eyes_brown.png",
                components: [{
                    url: "/avatar-builder/Eyes/Eyes_brown.svg",
                    layer: 4
                }]
            }, {
                id: "Eyes_green.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/Eyes_green.png",
                components: [{
                    url: "/avatar-builder/Eyes/Eyes_green.svg",
                    layer: 4
                }]
            }, {
                id: "Eyes_makeup.png",
                requiredLevel: 4,
                iconUrl: "/seasonal-rewards/Eyes_makeup.png",
                components: [{
                    url: "/avatar-builder/Eyes/Eyes_makeup.svg",
                    layer: 4
                }]
            }],
            nose: [{
                id: "nose_long.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/nose_long.png",
                components: [{
                    url: "/avatar-builder/nose/nose_long.svg",
                    layer: 4
                }]
            }, {
                id: "nose_tiny.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/nose_tiny.png",
                components: [{
                    url: "/avatar-builder/nose/nose_tiny.svg",
                    layer: 4
                }]
            }, {
                id: "nose_wide.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/nose_wide.png",
                components: [{
                    url: "/avatar-builder/nose/nose_wide.svg",
                    layer: 4
                }]
            }],
            mouth: [{
                id: "mouth_fun.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/mouth_fun.png",
                components: [{
                    url: "/avatar-builder/mouth/mouth_fun.svg",
                    layer: 4
                }]
            }, {
                id: "mouth_laugh.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/mouth_laugh.png",
                components: [{
                    url: "/avatar-builder/mouth/mouth_laugh.svg",
                    layer: 4
                }]
            }, {
                id: "mouth_smile.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/mouth_smile.png",
                components: [{
                    url: "/avatar-builder/mouth/mouth_smile.svg",
                    layer: 4
                }]
            }],
            hat: [{
                id: "Hat_jazz.png",
                requiredLevel: 3,
                iconUrl: "/seasonal-rewards/Hat_jazz.png",
                components: [{
                    url: "/avatar-builder/Hats/Hat_jazz.svg",
                    layer: 5
                }]
            }, {
                id: "Hat_pirate.png",
                requiredLevel: 4,
                iconUrl: "/seasonal-rewards/Hat_pirate.png",
                components: [{
                    url: "/avatar-builder/Hats/Hat_pirate_back.svg",
                    layer: 1
                }, {
                    url: "/avatar-builder/Hats/Hat_pirate_front.svg",
                    layer: 5
                }]
            }, {
                id: "Hat_snapBack.png",
                requiredLevel: 6,
                iconUrl: "/seasonal-rewards/Hat_snapBack.png",
                components: [{
                    url: "path/to/file/in/avatar-builder/hat_snapBack.svg",
                    layer: 1
                }]
            }, {
                id: "Hat_winter.png",
                requiredLevel: 7,
                iconUrl: "/seasonal-rewards/Hat_winter.png",
                components: [{
                    url: "path/to/file/in/avatar-builder/Hat_winter.svg",
                    layer: 1
                }]
            }],
            glasses: [{
                id: "Glasses_monocle.png",
                requiredLevel: 8,
                iconUrl: "/seasonal-rewards/Glasses_monocle.png",
                components: [{
                    url: "/avatar-builder/Glasses/Glasses_monocle.svg",
                    layer: 6
                }]
            }, {
                id: "Glasses_purple.png",
                requiredLevel: 6,
                iconUrl: "/seasonal-rewards/Glasses_purple.png",
                components: [{
                    url: "/avatar-builder/Glasses/Glasses_purple.svg",
                    layer: 6
                }]
            }, {
                id: "Glasses_round.png",
                requiredLevel: 2,
                iconUrl: "/seasonal-rewards/Glasses_round.png",
                components: [{
                    url: "/avatar-builder/Glasses/Glasses_round.svg",
                    layer: 6
                }]
            }, {
                id: "Glasses_cool.png",
                requiredLevel: 9,
                iconUrl: "/seasonal-rewards/Glasses_cool.png",
                components: [{
                    url: "/avatar-builder/Glasses/Glasses_cool.svg",
                    layer: 6
                }]
            }, {
                id: "Glasses_sunburst.png",
                requiredLevel: 3,
                iconUrl: "/seasonal-rewards/Glasses_sunburst.png",
                components: [{
                    url: "/avatar-builder/Glasses/Glasses_sunburst.svg",
                    layer: 6
                }]
            }],
            shirt: [{
                id: "BasicShirt_01.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/BasicShirt_01.png",
                components: [{
                    url: "/avatar-builder/shirt/BasicShirt_01.svg",
                    layer: 4
                }]
            }, {
                id: "BasicShirt_02.png",
                requiredLevel: 6,
                iconUrl: "/seasonal-rewards/BasicShirt_02.png",
                components: [{
                    url: "/avatar-builder/shirt/BasicShirt_02.svg",
                    layer: 4
                }]
            }, {
                id: "BasicShirt_03.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/BasicShirt_03.png",
                components: [{
                    url: "/avatar-builder/shirt/BasicShirt_03.svg",
                    layer: 4
                }]
            }, {
                id: "BasicShirt_04.png",
                requiredLevel: 2,
                iconUrl: "/seasonal-rewards/BasicShirt_04.png",
                components: [{
                    url: "/avatar-builder/shirt/BasicShirt_04.svg",
                    layer: 4
                }]
            }, {
                id: "BasicShirt_05.png",
                requiredLevel: 7,
                iconUrl: "/seasonal-rewards/BasicShirt_05.png",
                components: [{
                    url: "/avatar-builder/shirt/BasicShirt_05.svg",
                    layer: 4
                }]
            }, {
                id: "BasicShirt_06.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/BasicShirt_06.png",
                components: [{
                    url: "/avatar-builder/shirt/BasicShirt_06.svg",
                    layer: 4
                }]
            }, {
                id: "BasicShirt_07.png",
                requiredLevel: 8,
                iconUrl: "/seasonal-rewards/BasicShirt_07.png",
                components: [{
                    url: "/avatar-builder/shirt/BasicShirt_07.svg",
                    layer: 4
                }]
            }, {
                id: "Shirt_hoodie.png",
                requiredLevel: 3,
                iconUrl: "/seasonal-rewards/Shirt_hoodie.png",
                components: [{
                    url: "/avatar-builder/shirt/Shirt_hoodie_back.svg",
                    layer: 2
                }, {
                    url: "/avatar-builder/shirt/Shirt_hoodie_front.svg",
                    layer: 4
                }]
            }, {
                id: "Shirt_leatherJacket.png",
                requiredLevel: 4,
                iconUrl: "/seasonal-rewards/Shirt_leatherJacket.png",
                components: [{
                    url: "/avatar-builder/shirt/Shirt_leatherJacket.svg",
                    layer: 4
                }]
            }, {
                id: "Shirt_magic.png",
                requiredLevel: 5,
                iconUrl: "/seasonal-rewards/Shirt_magic.png",
                components: [{
                    url: "/avatar-builder/shirt/Shirt_magic.svg",
                    layer: 4
                }]
            }, {
                id: "Shirt_sparkle.png",
                requiredLevel: 9,
                iconUrl: "/seasonal-rewards/Shirt_sparkle.png",
                components: [{
                    url: "/avatar-builder/shirt/Shirt_sparkle_back.svg",
                    layer: 2
                }, {
                    url: "/avatar-builder/shirt/Shirt_sparkle_front.svg",
                    layer: 4
                }]
            }, {
                id: "Shirt_suit.png",
                requiredLevel: 5,
                iconUrl: "/seasonal-rewards/Shirt_suit.png",
                components: [{
                    url: "/avatar-builder/shirt/Shirt_suit.svg",
                    layer: 4
                }]
            }],
            special: [{
                id: "Special_basketball.png",
                requiredLevel: 5,
                iconUrl: "/seasonal-rewards/Special_basketball.png",
                components: [{
                    url: "/avatar-builder/special items/Special_basketball.svg",
                    layer: 7
                }]
            }, {
                id: "Special_controller.png",
                requiredLevel: 9,
                iconUrl: "/seasonal-rewards/Special_controller.png",
                components: [{
                    url: "/avatar-builder/special items/Special_controller.svg",
                    layer: 7
                }]
            }, {
                id: "Special_cowalla.png",
                requiredLevel: 2,
                iconUrl: "/seasonal-rewards/Special_cowalla.png",
                components: [{
                    url: "/avatar-builder/special items/Special_cowalla.svg",
                    layer: 7
                }]
            }, {
                id: "Special_dog.png",
                requiredLevel: 7,
                iconUrl: "/seasonal-rewards/Special_dog.png",
                components: [{
                    url: "/avatar-builder/special items/Special_dog.svg",
                    layer: 7
                }]
            }, {
                id: "Special_mouse.png",
                requiredLevel: 8,
                iconUrl: "/seasonal-rewards/Special_mouse.png",
                components: [{
                    url: "/avatar-builder/special items/Special_mouse.svg",
                    layer: 7
                }]
            }, {
                id: "Special_soccerball.png",
                requiredLevel: 4,
                iconUrl: "/seasonal-rewards/Special_soccerball.png",
                components: [{
                    url: "/avatar-builder/special items/Special_soccerball.svg",
                    layer: 7
                }]
            }, {
                id: "Special_tweet.png",
                requiredLevel: 3,
                iconUrl: "/seasonal-rewards/Special_tweet.png",
                components: [{
                    url: "/avatar-builder/special items/Special_tweet.svg",
                    layer: 7
                }]
            }, {
                id: "Special_unicat.png",
                requiredLevel: 6,
                iconUrl: "/seasonal-rewards/Special_unicat.png",
                components: [{
                    url: "/avatar-builder/special items/Special_unicat.svg",
                    layer: 7
                }]
            }, {
                id: "Special_wizardFrog.png",
                requiredLevel: 1,
                iconUrl: "/seasonal-rewards/Special_wizardFrog.png",
                components: [{
                    url: "/avatar-builder/special items/Special_wizardFrog.svg",
                    layer: 7
                }]
            }]
        },
        rewards: [{
            requiredLevel: 1,
            iconUrl: "/seasonal-rewards/BasicShirt_01.png"
        }, {
            requiredLevel: 2,
            iconUrl: "/seasonal-rewards/BasicHair_02.png"
        }, {
            requiredLevel: 3,
            iconUrl: "/seasonal-rewards/Glasses_sunburst.png"
        }, {
            requiredLevel: 4,
            iconUrl: "/seasonal-rewards/Special_soccerball.png"
        }, {
            requiredLevel: 5,
            iconUrl: "/seasonal-rewards/Shirt_magic.png"
        }, {
            requiredLevel: 6,
            iconUrl: "/seasonal-rewards/Hat_snapBack.png"
        }, {
            requiredLevel: 7,
            iconUrl: "/seasonal-rewards/Special_dog.png"
        }, {
            requiredLevel: 8,
            iconUrl: "/seasonal-rewards/BasicHair_04.png"
        }, {
            requiredLevel: 9,
            iconUrl: "/seasonal-rewards/Glasses_cool.png"
        }]
    }
}
, , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return E
    }
    ));
    var r = n(0)
      , a = n(13)
      , o = n(10)
      , i = n(136)
      , s = n(12)
      , c = n(71)
      , l = n(30);
    var u = n(66)
      , d = n(14)
      , p = function() {
        function e(e) {
            this.kedBackendClient = e.kedBackendClient,
            this.getUser = function() {
                return e.currentUser
            }
            ,
            this.env = e
        }
        return e.prototype.getBearer = function() {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var e;
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return !this.bearer || this.bearer.expires < Date.now() ? (e = this,
                        [4, this.refreshBearer()]) : [3, 2];
                    case 1:
                        e.bearer = t.sent(),
                        t.label = 2;
                    case 2:
                        return [2, this.bearer]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.refreshBearer = function() {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var e, t, n, a, o, i, s, p, m, h, g, b;
                return Object(r.__generator)(this, (function(f) {
                    switch (f.label) {
                    case 0:
                        return e = this.getUser(),
                        t = u.a.getInstance(this.env),
                        [4, Object(d.f)((function() {
                            return t.readUserPrefs()
                        }
                        ))];
                    case 1:
                        return n = f.sent(),
                        a = n.icToken,
                        o = n.icTokenExpire,
                        i = n.icSegmentId,
                        s = function(e) {
                            var t = Object(l.b)(location.search).schoolGrade;
                            return t && (e = Object(r.__assign)(Object(r.__assign)({}, e), {
                                schoolGrade: parseInt(t)
                            })),
                            Object(c.a)(e) ? "343147a9-7f1e-46d5-94c7-d97da71b374f" : e.schoolGrade < 6 ? "c3667eaa-f309-4d05-a1ad-580e16425481" : "146514cd-9387-4b45-97d6-fc1096a745dd"
                        }(e),
                        a && Date.now() < o && i === s ? [2, {
                            token: a,
                            expires: o
                        }] : [4, this.kedBackendClient.http.post("insertcoin/login/user", {
                            segmentId: s
                        })];
                    case 2:
                        return (p = f.sent()).status >= 400 ? (m = Error.bind,
                        h = "Insert Coin error " + p.status + ": ",
                        [4, p.text()]) : [3, 4];
                    case 3:
                        throw new (m.apply(Error, [void 0, h + f.sent()]));
                    case 4:
                        return [4, p.json()];
                    case 5:
                        return g = f.sent().token,
                        b = {
                            token: g,
                            expires: Date.now() + 354e4
                        },
                        t.updateUserPrefs({
                            icToken: b.token,
                            icTokenExpire: b.expires,
                            icSegmentId: s
                        }),
                        [2, b]
                    }
                }
                ))
            }
            ))
        }
        ,
        Object(r.__decorate)([a.g], e.prototype, "refreshBearer", null),
        e
    }()
      , m = function(e) {
        function t(t) {
            var n = t.fetchData
              , a = t.getSocket
              , o = t.wsEvents
              , i = e.call(this, (function(e) {
                var t = null
                  , s = []
                  , c = {
                    unsubscribe: function() {
                        return Object(r.__awaiter)(this, void 0, void 0, (function() {
                            var e, n, a, o, i, c, l;
                            return Object(r.__generator)(this, (function(u) {
                                this.closed = !0;
                                try {
                                    for (e = Object(r.__values)(s),
                                    n = e.next(); !n.done; n = e.next())
                                        a = n.value,
                                        o = a.eventName,
                                        i = a.handler,
                                        t && t.off(o, i)
                                } catch (e) {
                                    c = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        n && !n.done && (l = e.return) && l.call(e)
                                    } finally {
                                        if (c)
                                            throw c.error
                                    }
                                }
                                return s = [],
                                [2]
                            }
                            ))
                        }
                        ))
                    },
                    closed: !1
                };
                return n().then((function(n) {
                    return Object(r.__awaiter)(i, void 0, void 0, (function() {
                        var i, l, u, d, p, m, h, g;
                        return Object(r.__generator)(this, (function(b) {
                            switch (b.label) {
                            case 0:
                                return c.closed ? [2] : (e(n, null, c),
                                c.closed ? [2] : t ? [3, 2] : [4, a()]);
                            case 1:
                                t = b.sent(),
                                b.label = 2;
                            case 2:
                                if (c.closed)
                                    return [2];
                                i = function(r, a) {
                                    var o = function(t) {
                                        c.closed || (n = a(n, t),
                                        e(n, null, c))
                                    };
                                    t.on(r, o),
                                    s.push({
                                        eventName: r,
                                        handler: o
                                    })
                                }
                                ;
                                try {
                                    for (l = Object(r.__values)(Object.entries(o)),
                                    u = l.next(); !u.done; u = l.next())
                                        d = Object(r.__read)(u.value, 2),
                                        p = d[0],
                                        m = d[1],
                                        i(p, m)
                                } catch (e) {
                                    h = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        u && !u.done && (g = l.return) && g.call(l)
                                    } finally {
                                        if (h)
                                            throw h.error
                                    }
                                }
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )).catch((function(t) {
                    c.closed || e(null, t, c)
                }
                )),
                c
            }
            )) || this;
            return i
        }
        return Object(r.__extends)(t, e),
        t
    }(d.d)
      , h = n(253)
      , g = n.n(h)
      , b = n(91)
      , f = null;
    o.a.IC_API_URL && (f = new URL(o.a.IC_API_URL).origin);
    var v, k, w, y, _, O, T, j, E = function() {
        function e(t, n, o, c) {
            var l = this;
            this.env = t,
            this.readonly = c;
            var u = this.bearerProvider = new p(t);
            this.http = new a.f(n,o,{});
            var h = function(e) {
                return "function" == typeof l[e] && "constructor" !== e && "fetch" !== e && "dispose" !== e
            };
            Object.keys(e.prototype).forEach((function(e) {
                h(e) && (l[e] = Object(a.h)(l[e]))
            }
            )),
            this.suspense = Object(i.a)(this, {
                isApiMethod: h
            });
            var y = null;
            function _() {
                return Object(r.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return Object(r.__generator)(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return y ? [3, 2] : [4, u.getBearer()];
                        case 1:
                            e = t.sent().token,
                            y = g()(f + "/", {
                                transports: ["websocket"],
                                query: {
                                    authentication: e
                                }
                            }),
                            t.label = 2;
                        case 2:
                            return [2, y]
                        }
                    }
                    ))
                }
                ))
            }
            var O = new m({
                fetchData: function() {
                    return Object(r.__awaiter)(l, void 0, void 0, (function() {
                        var e;
                        return Object(r.__generator)(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return e = {},
                                [4, this.level()];
                            case 1:
                                return [2, (e.levelData = t.sent(),
                                e.isLevelUpdated = !1,
                                e)]
                            }
                        }
                        ))
                    }
                    ))
                },
                getSocket: _,
                wsEvents: {
                    "level-xpGained": function(e, n) {
                        var a = null == n ? void 0 : n.update;
                        return Object(b.a)(t.currentUser) && a && Object(s.y)(Object(s.a)(v || (v = Object(r.__makeTemplateObject)(["Dina XP ökade med ", "!"], ["Dina XP ökade med ", "!"])), a.xpGained)),
                        {
                            levelData: null == n ? void 0 : n.newState,
                            isLevelUpdated: !0
                        }
                    },
                    "level-levelUp": function(e, n) {
                        var a = null == n ? void 0 : n.update;
                        return Object(b.a)(t.currentUser) && a && Object(s.z)(Object(s.a)(k || (k = Object(r.__makeTemplateObject)(["Du ökade previs till nivå ", "!"], ["Du ökade previs till nivå ", "!"])), n.newState.currentLevel)),
                        {
                            levelData: null == n ? void 0 : n.newState,
                            isLevelUpdated: !0
                        }
                    }
                }
            })
              , T = new m({
                fetchData: function() {
                    return Object(r.__awaiter)(l, void 0, void 0, (function() {
                        var e;
                        return Object(r.__generator)(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return e = {},
                                [4, this.achievment()];
                            case 1:
                                return [2, (e.achievements = t.sent(),
                                e.updatedAchievements = {},
                                e)]
                            }
                        }
                        ))
                    }
                    ))
                },
                getSocket: _,
                wsEvents: {
                    "achievement-tierProgressed": function(e, n) {
                        var a, o = null == n ? void 0 : n.newState;
                        if (!o)
                            return e;
                        Object(b.a)(t.currentUser);
                        var i = e.achievements
                          , s = e.updatedAchievements
                          , c = i.findIndex((function(e) {
                            return e.id === o.id
                        }
                        ));
                        return c < 0 ? e : {
                            achievements: i.slice(0, c).concat(o).concat(i.slice(c + 1)),
                            updatedAchievements: Object(r.__assign)(Object(r.__assign)({}, s), (a = {},
                            a[o.id] = !0,
                            a))
                        }
                    },
                    "achievement-tierCompleted": function(e, n) {
                        var a, o = null == n ? void 0 : n.newState;
                        if (!o)
                            return e;
                        Object(b.a)(t.currentUser) && Object(s.z)(Object(s.a)(w || (w = Object(r.__makeTemplateObject)(["Milstolpen ", " slutförd!"], ["Milstolpen ", " slutförd!"])), o.title));
                        var i = e.achievements
                          , c = e.updatedAchievements
                          , l = i.findIndex((function(e) {
                            return e.id === o.id
                        }
                        ));
                        return l < 0 ? e : {
                            achievements: i.slice(0, l).concat(o).concat(i.slice(l + 1)),
                            updatedAchievements: Object(r.__assign)(Object(r.__assign)({}, c), (a = {},
                            a[o.id] = !0,
                            a))
                        }
                    }
                }
            });
            this.achievementObservable = new d.c(T,1 / 0),
            this.levelObservable = new d.c(O,1 / 0)
        }
        return e.prototype.dispose = function() {
            this.levelObservable.dispose(),
            this.achievementObservable.dispose()
        }
        ,
        e.prototype.fetch = function(e, t, n, o) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var i, s, c, l, u, d, p;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return c = (s = this.http).fetch,
                        l = [t, e],
                        p = {},
                        [4, this.bearerProvider.getBearer()];
                    case 1:
                        return [4, c.apply(s, l.concat([(p.Authentication = r.sent().token,
                        p), n, o]))];
                    case 2:
                        return 200 == (i = r.sent()).status ? [3, 4] : (u = a.c.bind,
                        d = [void 0, i.status],
                        [4, i.text()]);
                    case 3:
                        throw new (u.apply(a.c, d.concat([r.sent()])));
                    case 4:
                        return [4, i.json()];
                    case 5:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.missionPath = function() {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var e, t;
                return Object(r.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        e = performance.getEntriesByType("navigation").some((function(e) {
                            return "back_forward" === e.type
                        }
                        )),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]),
                        [4, this.fetch("GET", "mission/path", null, e ? {
                            cache: "reload"
                        } : null)];
                    case 2:
                        return [2, n.sent()];
                    case 3:
                        return t = n.sent(),
                        console.error("Error from InsertCoint missionPath:", t),
                        Object(s.x)(Object(s.a)(y || (y = Object(r.__makeTemplateObject)(["Vi kunde tyvärr inte ladda dina uppdrag just nu  :'("], ["Vi kunde tyvärr inte ladda dina uppdrag just nu  :'("])))),
                        [2, []];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.fetchMissionByPathId = function(e, t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(n) {
                    return [2, this.fetch("GET", "mission/path/" + e, {
                        takePrevious: t
                    })]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.fetchMission = function(e, t) {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                return Object(r.__generator)(this, (function(n) {
                    return [2, this.fetch("GET", "mission/path/" + e + "/mission-number/" + t)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.achievment = function() {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var e;
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, this.fetch("GET", "achievement")];
                    case 1:
                        return [2, t.sent()];
                    case 2:
                        return e = t.sent(),
                        console.error("Error from InsertCoint achievment:", e),
                        Object(s.x)(Object(s.a)(_ || (_ = Object(r.__makeTemplateObject)(["Vi kunde tyvärr inte ladda dina achievements just nu  :'("], ["Vi kunde tyvärr inte ladda dina achievements just nu  :'("])))),
                        [2, []];
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.level = function() {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var e;
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, this.fetch("GET", "level")];
                    case 1:
                        return [2, t.sent()];
                    case 2:
                        return e = t.sent(),
                        console.error("Error from InsertCoint achievment:", e),
                        Object(s.x)(Object(s.a)(O || (O = Object(r.__makeTemplateObject)(["Vi kunde tyvärr inte ladda din level just nu  :'("], ["Vi kunde tyvärr inte ladda din level just nu  :'("])))),
                        [2, null];
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.selfReportingBehavior = function() {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var e;
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, this.fetch("GET", "self-reporting/behavior")];
                    case 1:
                        return [2, t.sent()];
                    case 2:
                        return e = t.sent(),
                        console.error("Error from InsertCoint Self-reporting Behavior:", e),
                        Object(s.x)(Object(s.a)(T || (T = Object(r.__makeTemplateObject)(["Vi kunde tyvärr inte ladda datat för listan för Self-reporting just nu  :'("], ["Vi kunde tyvärr inte ladda datat för listan för Self-reporting just nu  :'("])))),
                        [2, []];
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.submitSelfReportingBehavior = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                return Object(r.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        if (this.readonly)
                            throw new Error("No access to self-report");
                        return [4, this.fetch("POST", "self-reporting/behavior/" + e)];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.listAvailableAvatars = function() {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                return Object(r.__generator)(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]),
                        [4, this.fetch("GET", "level/module-config")];
                    case 1:
                        return [2, e.sent().avatars];
                    case 2:
                        return e.sent(),
                        Object(s.x)(Object(s.a)(j || (j = Object(r.__makeTemplateObject)(["Vi kunde tyvärr inte ladda datat för listan för Self-reporting just nu  :'("], ["Vi kunde tyvärr inte ladda datat för listan för Self-reporting just nu  :'("])))),
                        [2, []];
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }()
}
, , , , function(e) {
    e.exports = JSON.parse('{"SouthIndia":[{"firstTerm":{"startDate":"2015-06-01T00:00:00.000Z","endDate":"2015-10-31T00:00:00.000Z"},"secondTerm":{"startDate":"2015-11-01T00:00:00.000Z","endDate":"2016-03-27T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2016-06-23T00:00:00.000Z","endDate":"2016-10-31T00:00:00.000Z"},"secondTerm":{"startDate":"2016-11-01T00:00:00.000Z","endDate":"2017-03-25T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2017-06-05T00:00:00.000Z","endDate":"2017-10-31T00:00:00.000Z"},"secondTerm":{"startDate":"2017-11-01T00:00:00.000Z","endDate":"2018-03-30T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2018-06-04T00:00:00.000Z","endDate":"2018-10-31T00:00:00.000Z"},"secondTerm":{"startDate":"2018-11-01T00:00:00.000Z","endDate":"2019-04-29T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2019-06-03T00:00:00.000Z","endDate":"2019-10-31T00:00:00.000Z"},"secondTerm":{"startDate":"2019-11-01T00:00:00.000Z","endDate":"2020-03-27T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2020-05-11T00:00:00.000Z","endDate":"2020-10-26T00:00:00.000Z"},"secondTerm":{"startDate":"2020-11-02T00:00:00.000Z","endDate":"2021-05-03T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2021-05-10T00:00:00.000Z","endDate":"2021-10-24T00:00:00.000Z"},"secondTerm":{"startDate":"2021-11-01T00:00:00.000Z","endDate":"2022-05-02T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2022-06-05T00:00:00.000Z","endDate":"2022-10-31T00:00:00.000Z"},"secondTerm":{"startDate":"2022-11-01T00:00:00.000Z","endDate":"2023-03-31T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2023-06-04T00:00:00.000Z","endDate":"2023-10-31T00:00:00.000Z"},"secondTerm":{"startDate":"2023-11-01T00:00:00.000Z","endDate":"2024-03-29T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2024-06-03T00:00:00.000Z","endDate":"2024-10-31T00:00:00.000Z"},"secondTerm":{"startDate":"2024-11-01T00:00:00.000Z","endDate":"2025-03-28T00:00:00.000Z"},"holidays":[]}],"NorthIndia":[{"firstTerm":{"startDate":"2024-04-03T00:00:00.000Z","endDate":"2024-09-30T00:00:00.000Z"},"secondTerm":{"startDate":"2024-10-01T00:00:00.000Z","endDate":"2025-04-02T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2023-04-05T00:00:00.000Z","endDate":"2023-10-01T00:00:00.000Z"},"secondTerm":{"startDate":"2023-10-02T00:00:00.000Z","endDate":"2024-04-02T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2022-04-06T00:00:00.000Z","endDate":"2022-10-03T00:00:00.000Z"},"secondTerm":{"startDate":"2022-10-04T00:00:00.000Z","endDate":"2023-04-04T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2021-03-22T00:00:00.000Z","endDate":"2021-09-13T00:00:00.000Z"},"secondTerm":{"startDate":"2021-09-20T00:00:00.000Z","endDate":"2022-03-07T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2020-03-23T00:00:00.000Z","endDate":"2020-09-14T00:00:00.000Z"},"secondTerm":{"startDate":"2020-09-21T00:00:00.000Z","endDate":"2021-03-12T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2019-04-04T00:00:00.000Z","endDate":"2019-09-30T00:00:00.000Z"},"secondTerm":{"startDate":"2019-10-01T00:00:00.000Z","endDate":"2020-03-31T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2018-04-04T00:00:00.000Z","endDate":"2018-09-30T00:00:00.000Z"},"secondTerm":{"startDate":"2018-10-01T00:00:00.000Z","endDate":"2019-04-03T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2017-04-05T00:00:00.000Z","endDate":"2017-10-02T00:00:00.000Z"},"secondTerm":{"startDate":"2017-10-03T00:00:00.000Z","endDate":"2018-04-03T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2016-04-06T00:00:00.000Z","endDate":"2016-10-03T00:00:00.000Z"},"secondTerm":{"startDate":"2016-10-04T00:00:00.000Z","endDate":"2017-04-04T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2015-04-01T00:00:00.000Z","endDate":"2015-10-05T00:00:00.000Z"},"secondTerm":{"startDate":"2015-10-06T00:00:00.000Z","endDate":"2016-04-05T00:00:00.000Z"},"holidays":[]}],"SaudiArabia":[{"firstTerm":{"startDate":"2020-06-19T00:00:00.000Z","endDate":"2021-01-03T00:00:00.000Z"},"secondTerm":{"startDate":"2021-01-04T00:00:00.000Z","endDate":"2021-06-18T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2021-06-19T00:00:00.000Z","endDate":"2022-01-03T00:00:00.000Z"},"secondTerm":{"startDate":"2022-01-04T00:00:00.000Z","endDate":"2022-06-18T00:00:00.000Z"},"holidays":[]},{"firstTerm":{"startDate":"2022-06-19T00:00:00.000Z","endDate":"2023-01-02T00:00:00.000Z"},"secondTerm":{"startDate":"2023-01-03T00:00:00.000Z","endDate":"2023-06-17T00:00:00.000Z"},"holidays":[]}]}')
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return p
    }
    )),
    n.d(t, "b", (function() {
        return a.b
    }
    )),
    n.d(t, "d", (function() {
        return l
    }
    )),
    n.d(t, "f", (function() {
        return u.b
    }
    )),
    n.d(t, "e", (function() {
        return u.a
    }
    )),
    n.d(t, "c", (function() {
        return d
    }
    ));
    var r = n(235)
      , a = n(98)
      , o = n(0)
      , i = n(1)
      , s = n.n(i)
      , c = n(382)
      , l = Object(c.i)((function(e) {
        var t = Object(o.__assign)(Object(o.__assign)({}, e), {
            action: function(t) {
                e.action && e.action(t),
                e.history.push(e.to)
            }
        });
        return s.a.createElement(a.a, Object(o.__assign)({}, t, {
            type: "link"
        }))
    }
    ))
      , u = n(171)
      , d = function(e) {
        var t;
        return s.a.createElement("div", {
            className: "card " + (null !== (t = e.className) && void 0 !== t ? t : "")
        }, e.children)
    }
      , p = Object(r.a)(a.a, {
        addClass: {
            rename: "classNames",
            transform: function(e) {
                return [e]
            },
            message: "Use an array of classnames and pass them to classNames instead."
        },
        className: {
            rename: "classNames",
            transform: function(e) {
                return [e]
            },
            message: "Send classes as an array instead"
        },
        label: {
            rename: "children",
            message: "Use child elements instead of property label."
        },
        _inspection: {
            message: "Using className 'btn-*' is discouraged. Use context (primary, warning etc) and size (small, large) instead.",
            transform: function(e) {
                var t;
                return (null === (t = e.classNames) || void 0 === t ? void 0 : t.toString().indexOf("btn-")) > -1
            }
        }
    }, "Button")
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    }
    ));
    var r = n(0)
      , a = n(1)
      , o = n.n(a)
      , i = n(7)
      , s = n(44)
      , c = n(95);
    function l(e) {
        var t = e.children
          , n = Object(r.__read)(Object(a.useState)(i.b), 2)
          , l = n[0]
          , u = n[1];
        return Object(a.useEffect)((function() {
            function e(e) {
                u(e || i.b)
            }
            return s.a.subscribe(e),
            function() {
                return s.a.unsubscribe(e)
            }
        }
        ), []),
        o.a.createElement(c.a.Provider, {
            value: l
        }, t)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return o
    }
    )),
    n.d(t, "a", (function() {
        return i
    }
    )),
    n.d(t, "c", (function() {
        return s
    }
    ));
    var r = n(1)
      , a = n.n(r)
      , o = function(e) {
        var t = e.state
          , n = e.label
          , r = e.color
          , o = e.disabled
          , i = e.title
          , s = e.onChange
          , c = o ? "ui-checkbox disabled" : "ui-checkbox";
        return a.a.createElement("label", {
            className: r ? c + r : c
        }, n, a.a.createElement("input", {
            type: "checkbox",
            disabled: o,
            checked: "checked" == t,
            ref: function(e) {
                return e && (e.indeterminate = "indeterminate" == t)
            },
            onChange: s
        }), a.a.createElement("span", {
            className: "custom-element",
            tabIndex: 0,
            onKeyDown: function(e) {
                "Enter" != e.key && " " != e.key || (e.stopPropagation(),
                e.preventDefault(),
                e.target.click())
            },
            title: null != i ? i : ""
        }))
    }
      , i = function(e) {
        var t = e.state
          , n = e.label
          , r = e.color
          , o = e.disabled
          , i = e.title
          , s = e.onChange
          , c = void 0 === s ? function() {
            return null
        }
        : s;
        return a.a.createElement("label", {
            className: (o ? "disabled " : "") + (r ? r + " " : "") + "ui-addbox" + ("done" === t ? " done" : "")
        }, n, a.a.createElement("input", {
            type: "checkbox",
            checked: "checked" == t,
            disabled: o,
            onChange: c
        }), a.a.createElement("span", {
            className: "custom-element",
            onKeyDown: function(e) {
                "Enter" != e.key && " " != e.key || (e.stopPropagation(),
                e.preventDefault(),
                e.target.click())
            },
            tabIndex: 0,
            title: null != i ? i : ""
        }))
    }
      , s = function(e) {
        var t = e.label
          , n = e.index
          , r = e.title;
        return a.a.createElement("label", null, t, a.a.createElement("span", {
            className: "step-indicator",
            onKeyDown: function(e) {
                "Enter" != e.key && " " != e.key || (e.stopPropagation(),
                e.preventDefault(),
                e.target.click())
            },
            tabIndex: 0,
            title: null != r ? r : ""
        }, "L" + n))
    }
}
, , , , , , , , , , , , , , , , , function(e) {
    e.exports = JSON.parse('{"picker":"Integrate coursebuilder and subjectplanner with Google Picker","ksTutorComment":"Integrate KSTermplanner with tutor comments","kgTutorComment":"Integrate KSTermplanner  with tutor comments","termplannerCharts":"Integrate KSTermplanner with progress charts","weekplannerCharts":"Integrate Weekplanner with progress charts","teacherRights":"Activate course builder teacher rights","cbCollapseBoxes":"Course Builder: Collapse modules by default","ksAssignments":"KS show hand-in assignments","markPartialKRs":"Activate mark partial knowledge requirments functionality","KDT592":"Publish tabs / steps instead of entire course","stratBankMigrated":"Set to true when Week 5/2020 release is out and strategy banks have been reimported the last time. In coming versions, remove this feature flag and hard code as if it was set.","strategyBank":"Enable strategy bank in WeekPlanner - show strategy bank brain icon and list selected strategies","spWpCr":"Enable SP workpath classroom integration","cbWpCr":"Enable CB workpath classroom integration","tasksTab":"Show tasks tab (Uppgifter) on profile page","workpathTab":"Show workpaths tab on profile page","dynamicTaskContent":"Enable creation of multiple embedded html contents for task","wysiwygTooltip":"Add tooltip option to wysiwyh editors","planningToolClassrooms":"Enable Planning Tool classroom integration","cbEditTaskNewFormat":"Remove knowledge requirements and central content from edit task page in course builder. Add tabs and reformat the content","stricterHTML":"Apply more restrictions on washHTML and auto-convert from images to figures","messaging":"Including messaging feature","searchTasks":"Add search for tasks and preview tasks functionality","calendarResponsiveWeekView":"Make calendar responsive for mobile view","calendarWorkshopBookings":"Add calendar workshop bookings functionality","aipHideLogBook":"AIP Hide logbook and weekplanner and replace with steps and courses navigation","wysiwygTipTap":"Use TipTap as Wywiswyg","learningResources":"Add learning resources to task","createWordbank":"Enable wordbank creator"}')
}
, , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    }
    ));
    var r, a = n(0), o = n(1), i = n(131), s = n(5), c = n(41), l = function(e) {
        var t = e.onClick
          , n = e.title
          , r = e.faIcon
          , a = e.icon
          , s = e.color
          , l = e.className
          , d = e.position
          , p = e.size
          , m = o.useContext(c.b).intl
          , h = r || (a ? i.c[a] : "")
          , g = s ? i.b.actions[s] ? i.b.actions[s] : s : "var(--col-accent)"
          , b = p || "m";
        return o.createElement(u, {
            className: l,
            size: b,
            position: d || "relative",
            title: n || m.formatMessage({
                id: "common.edit",
                defaultMessage: "Redigera"
            }),
            onClick: t,
            color: g
        }, o.createElement("i", {
            className: h
        }))
    }, u = s.b.div.withConfig({
        displayName: "ActionItemDiv",
        componentId: "-1xtwz9q"
    })(r || (r = Object(a.__makeTemplateObject)(["\n  cursor: pointer;\n  display: inline-block;\n  font-size: ", ";\n  margin: ", ";\n  position: ", ";\n  color: ", ";\n  top: 0;\n  right: 0;\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  font-size: ", ";\n  margin: ", ";\n  position: ", ";\n  color: ", ";\n  top: 0;\n  right: 0;\n"])), (function(e) {
        var t = e.size;
        return "s" == t ? "0.8em" : "l" == t ? "1.2em" : "1em"
    }
    ), (function(e) {
        return "absolute" == e.position ? "4px 8px" : "4px"
    }
    ), (function(e) {
        return e.position
    }
    ), (function(e) {
        return e.color
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }
    )),
    n.d(t, "b", (function() {
        return l
    }
    ));
    var r = n(0)
      , a = n(30)
      , o = n(188)
      , i = n(10);
    var s = n(7)
      , c = function() {
        function e() {
            var e, t;
            this._initialized = !1;
            var n = function(e) {
                var t = e.toLowerCase().trim();
                Object.defineProperty(a, e, {
                    get: function() {
                        return this._initialized || this.init(),
                        this._features.has(t)
                    },
                    set: function(e) {
                        throw new Error("Feature flags cannot be set here")
                    }
                })
            }
              , a = this;
            try {
                for (var i = Object(r.__values)(Object.keys(o)), s = i.next(); !s.done; s = i.next()) {
                    n(s.value)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (t = i.return) && t.call(i)
                } finally {
                    if (e)
                        throw e.error
                }
            }
        }
        return e.prototype.init = function() {
            var e, t, n, c;
            if (!this._initialized) {
                var l = function(e) {
                    var t = (i.a.KED_FEATURES || "").split(",");
                    if (i.a.KED_FEATURES_PER_SCHOOL && e) {
                        var n = i.a.KED_FEATURES_PER_SCHOOL.split(";").map((function(e) {
                            return e.split("=")
                        }
                        )).map((function(e) {
                            var t = Object(r.__read)(e, 2)
                              , n = t[0]
                              , a = t[1];
                            return {
                                flag: n.trim(),
                                schools: a.toLowerCase().replace(/å/g, "a").replace(/ä/g, "a").replace(/ö/g, "o").split(",").map((function(e) {
                                    return e.trim()
                                }
                                ))
                            }
                        }
                        )).filter((function(t) {
                            return t.schools.indexOf((e.school || "").toLowerCase()) >= 0
                        }
                        ));
                        n.length > 0 && t.push.apply(t, Object(r.__spreadArray)([], Object(r.__read)(n.map((function(e) {
                            return e.flag
                        }
                        )))))
                    }
                    return t
                }(s.b.currentUser).map((function(e) {
                    return e.trim().toLowerCase()
                }
                ))
                  , u = Object(a.b)(location.search, {
                    toLower: !0
                });
                u.features && (l = l.concat(u.features.split(",").map((function(e) {
                    return e.trim().toLowerCase()
                }
                ))));
                var d = new Set;
                try {
                    for (var p = Object(r.__values)(l), m = p.next(); !m.done; m = p.next()) {
                        var h = m.value;
                        if ("*" === h)
                            try {
                                for (var g = (n = void 0,
                                Object(r.__values)(Object.keys(o))), b = g.next(); !b.done; b = g.next()) {
                                    var f = b.value;
                                    d.add(f.toLowerCase().trim())
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    b && !b.done && (c = g.return) && c.call(g)
                                } finally {
                                    if (n)
                                        throw n.error
                                }
                            }
                        else
                            "-" === h ? d.clear() : h.startsWith("!") ? d.delete(h.substr(1)) : d.add(h)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        m && !m.done && (t = p.return) && t.call(p)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                this._features = d,
                this._initialized = !0
            }
        }
        ,
        e
    }()
      , l = new c
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return l
    }
    )),
    n.d(t, "d", (function() {
        return u
    }
    )),
    n.d(t, "c", (function() {
        return d
    }
    )),
    n.d(t, "a", (function() {
        return p
    }
    ));
    var r, a, o, i, s = n(0), c = n(5), l = c.b.div.withConfig({
        displayName: "KedBoxedDiv",
        componentId: "-7kzgg3"
    })(r || (r = Object(s.__makeTemplateObject)(["\n  background: #f8f8f8;\n  width: inherit;\n  padding: 5px 20px 20px 20px;\n  box-shadow: var(--shadow-small);\n  margin-bottom: 2em;\n  border-radius: var(--border-radius-s);\n"], ["\n  background: #f8f8f8;\n  width: inherit;\n  padding: 5px 20px 20px 20px;\n  box-shadow: var(--shadow-small);\n  margin-bottom: 2em;\n  border-radius: var(--border-radius-s);\n"]))), u = c.b.hr.withConfig({
        displayName: "StyledHr",
        componentId: "-17jigvm"
    })(a || (a = Object(s.__makeTemplateObject)(["\n  display: block;\n  border: 0;\n  border-bottom: 2px rgba(0, 0, 0, 0.5) solid;\n  margin: 2em 4em;\n  box-shadow: var(--shadow-small);\n"], ["\n  display: block;\n  border: 0;\n  border-bottom: 2px rgba(0, 0, 0, 0.5) solid;\n  margin: 2em 4em;\n  box-shadow: var(--shadow-small);\n"]))), d = c.b.div.withConfig({
        displayName: "NotificationCircle",
        componentId: "-1mrtx90"
    })(o || (o = Object(s.__makeTemplateObject)(["\n  border-radius: 50%;\n  width: 1.5em;\n  height: 1.5em;\n  background: #d44f50;\n  text-align: center;\n  color: white;\n  font-size: 0.8em;\n  margin-left: 1em;\n  font-weight: bold;\n"], ["\n  border-radius: 50%;\n  width: 1.5em;\n  height: 1.5em;\n  background: #d44f50;\n  text-align: center;\n  color: white;\n  font-size: 0.8em;\n  margin-left: 1em;\n  font-weight: bold;\n"]))), p = c.b.label.withConfig({
        displayName: "AlignedLabel",
        componentId: "-1atsl34"
    })(i || (i = Object(s.__makeTemplateObject)(["\n  display: flex;\n  align-items: center;\n\n  input[type='text'],\n  textarea {\n    width: unset !important;\n    margin: 0;\n  }\n  & > * {\n    flex: 0 1;\n  }\n  & > *:first-child {\n    margin-right: 0.25rem;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  input[type='text'],\n  textarea {\n    width: unset !important;\n    margin: 0;\n  }\n  & > * {\n    flex: 0 1;\n  }\n  & > *:first-child {\n    margin-right: 0.25rem;\n  }\n"])))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    ));
    var r = n(1)
      , a = n(200)
      , o = function(e) {
        var t = e.unseenNotifications
          , n = e.onClick;
        return r.createElement(a.c, {
            onClick: function(e) {
                return n ? n() : e.preventDefault()
            }
        }, t)
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return V
    }
    ));
    var r, a, o, i, s, c = n(0), l = n(1), u = n.n(l), d = n(52), p = n(95), m = n(66), h = n(57), g = n(144), b = n(5), f = n(133), v = n(201), k = n(134), w = Object(d.a)((function(e) {
        var t = e.readProfileImageUrl
          , n = e.readHasNotification
          , r = e.getUnreadMessages
          , a = n()
          , o = t()
          , i = r();
        return u.a.createElement("div", {
            className: "profile-pic " + (a ? "has-notification" : "")
        }, "string" == typeof o ? u.a.createElement("img", {
            src: o
        }) : u.a.createElement(k.d, {
            avatar: o
        }), i > 0 && u.a.createElement(v.a, {
            unseenNotifications: i
        }))
    }
    )), y = n(12), _ = n(41), O = n(10), T = function(e) {
        var t = e.readProfileImageUrl
          , n = e.readHasNotification
          , r = e.userDisplayName
          , a = e.isActive
          , o = e.onClick
          , i = e.getUnreadMessages
          , s = (Object(l.useContext)(p.a),
        Object(c.__read)(Object(l.useState)(!1), 2))
          , u = s[0]
          , d = s[1]
          , m = Object(l.useContext)(_.b).intl;
        Object(l.useLayoutEffect)((function() {
            d(a)
        }
        ), [a]);
        return l.createElement(E, {
            onClick: o,
            className: u ? "isActive" : ""
        }, l.createElement(l.Suspense, {
            fallback: ""
        }, l.createElement(f.a, {
            render: function(e) {
                return l.createElement("span", null)
            }
        }, l.createElement(w, {
            readProfileImageUrl: t,
            readHasNotification: n,
            getUnreadMessages: i
        }))), l.createElement("a", {
            onClick: o
        }, m.formatMessage({
            id: "common.assignedPersonLogbook",
            defaultMessage: "{name} loggbok"
        }, {
            name: Object(y.o)(function(e) {
                if ((null == e ? void 0 : e.length) > 0)
                    return e.split(" ")[0]
            }(r), O.a.KED_LOCALE)
        }), " ", a ? l.createElement("i", {
            className: "fas fa-angle-down"
        }) : l.createElement("i", {
            className: "fas fa-angle-up"
        })))
    }, j = Object(b.c)(r || (r = Object(c.__makeTemplateObject)(["\n  0% {\n    background-color: #fff;\n  }\n  50% {\n    background-color: var(--col-accent);\n  }\n  100% {\n    background-color: #fff;\n  }\n"], ["\n  0% {\n    background-color: #fff;\n  }\n  50% {\n    background-color: var(--col-accent);\n  }\n  100% {\n    background-color: #fff;\n  }\n"]))), E = b.b.div.withConfig({
        displayName: "ProfileLinkDiv",
        componentId: "-17cxx6z"
    })(a || (a = Object(c.__makeTemplateObject)(["\n  padding: 0 0.5em;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: var(--border-radius-m);\n  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));\n  display: flex;\n  align-items: flex-start;\n  div[class*='NotificationCircle'] {\n    position: absolute;\n    top: 0;\n    left: 1.8em;\n  }\n  .profile-pic {\n    border: 2px solid var(--col-midgrey);\n    border-radius: 100%;\n    width: 2em;\n    height: 2em;\n    margin-right: 0.5em;\n    &.has-notification {\n      animation: ", " 4s ease-in-out infinite;\n    }\n  }\n\n  a {\n    margin: auto;\n    color: var(--col-midgrey);\n  }\n\n  &:hover,\n  &.isActive {\n    .profile-pic {\n      border-color: var(--col-accent);\n      background-color: white;\n      img {\n        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));\n      }\n    }\n    a {\n      color: #fff;\n    }\n  }\n"], ["\n  padding: 0 0.5em;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: var(--border-radius-m);\n  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));\n  display: flex;\n  align-items: flex-start;\n  div[class*='NotificationCircle'] {\n    position: absolute;\n    top: 0;\n    left: 1.8em;\n  }\n  .profile-pic {\n    border: 2px solid var(--col-midgrey);\n    border-radius: 100%;\n    width: 2em;\n    height: 2em;\n    margin-right: 0.5em;\n    &.has-notification {\n      animation: ", " 4s ease-in-out infinite;\n    }\n  }\n\n  a {\n    margin: auto;\n    color: var(--col-midgrey);\n  }\n\n  &:hover,\n  &.isActive {\n    .profile-pic {\n      border-color: var(--col-accent);\n      background-color: white;\n      img {\n        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));\n      }\n    }\n    a {\n      color: #fff;\n    }\n  }\n"])), j), S = n(7), x = function(e) {
        var t = e.openChildProfilePage
          , n = e.closeProfile
          , r = S.b.currentUser.impersonator || S.b.currentUser
          , a = r.children || [];
        return u.a.createElement(C, null, u.a.createElement("ul", null, u.a.createElement("li", {
            className: "",
            onClick: function() {
                return n()
            }
        }, u.a.createElement("i", {
            className: "fas fa-user"
        }), " ", r.displayName), u.a.createElement(u.a.Fragment, null, a.map((function(e) {
            return u.a.createElement("li", {
                key: e.mail,
                className: "",
                onClick: function() {
                    t(e)
                }
            }, u.a.createElement("i", {
                className: "fas fa-user"
            }), " ", e.displayName)
        }
        )))))
    }, C = b.b.div.withConfig({
        displayName: "ChildSelectorDiv",
        componentId: "-1lhwwwg"
    })(o || (o = Object(c.__makeTemplateObject)(["\n  ul {\n    padding: 0;\n    margin: 0;\n    background-color: rgba(255, 255, 255, 0.6);\n    list-style: none;\n    box-shadow: var(--shadow-small);\n  }\n\n  li {\n    padding: 0.2em;\n    padding-left: 0.4em;\n    margin: 0;\n\n    &:hover {\n      background-color: #666;\n    }\n\n    &.selected {\n      background-color: var(--col-cyan);\n    }\n  }\n"], ["\n  ul {\n    padding: 0;\n    margin: 0;\n    background-color: rgba(255, 255, 255, 0.6);\n    list-style: none;\n    box-shadow: var(--shadow-small);\n  }\n\n  li {\n    padding: 0.2em;\n    padding-left: 0.4em;\n    margin: 0;\n\n    &:hover {\n      background-color: #666;\n    }\n\n    &.selected {\n      background-color: var(--col-cyan);\n    }\n  }\n"]))), D = (b.b.li.withConfig({
        displayName: "ProfileLi",
        componentId: "-7olrn2"
    })(i || (i = Object(c.__makeTemplateObject)(["\n  border-bottom: 1px dotted black;\n  background-color: rgba(255, 255, 255, 0.8);\n"], ["\n  border-bottom: 1px dotted black;\n  background-color: rgba(255, 255, 255, 0.8);\n"]))),
    n(44)), N = n(208), A = Object(d.c)((function(e) {
        var t = e.showingProfile
          , n = e.user
          , r = e.complete
          , a = e.isParent
          , o = e.getUnreadMessages
          , i = Object(c.__read)(Object(l.useState)(!1), 2)
          , s = i[0]
          , d = i[1]
          , p = h.a.read()
          , m = function() {
            p ? h.a.dispatch(!1) : h.a.dispatch(!0)
        }
          , b = function() {
            h.a.dispatch(!1),
            Object(g.a)()
        };
        return u.a.createElement(I, null, u.a.createElement(T, {
            isActive: a && s || t,
            readProfileImageUrl: a ? function() {
                return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii01MCAtNTAgNzQwIDYxMiI+CiAgICA8cGF0aCBmaWxsPSJyZ2IoMTgyLDEyNyw0NSkiCiAgICAgICAgZD0iTTk2IDIyNGE2NCA2NCAwIDEwMC0xMjggNjQgNjQgMCAwMDAgMTI4em00NDggMGE2NCA2NCAwIDEwMC0xMjggNjQgNjQgMCAwMDAgMTI4em0zMiAzMmgtNjRjLTE4IDAtMzMgNy00NSAxOSA0MCAyMiA2OSA2MiA3NSAxMDloNjZjMTggMCAzMi0xNCAzMi0zMnYtMzJjMC0zNS0yOS02NC02NC02NHptLTI1NiAwYTExMiAxMTIgMCAxMDAtMjI0IDExMiAxMTIgMCAwMDAgMjI0em03NyAzMmgtOGExNTggMTU4IDAgMDEtMTM3IDBoLTljLTYzIDAtMTE1IDUyLTExNSAxMTV2MjljMCAyNyAyMiA0OCA0OCA0OGgyODhjMjcgMCA0OC0yMSA0OC00OHYtMjljMC02My01Mi0xMTUtMTE1LTExNXptLTIyNC0xM2E2NCA2NCAwIDAwLTQ1LTE5SDY0Yy0zNSAwLTY0IDI5LTY0IDY0djMyYzAgMTggMTQgMzIgMzIgMzJoNjZjNi00NyAzNS04NyA3NS0xMDl6IiAvPgo8L3N2Zz4="
            }
            : r ? n.readProfileImageUrl : function() {
                return null
            }
            ,
            getUnreadMessages: o,
            readHasNotification: a ? function() {
                return null
            }
            : n.readHasNotification,
            userDisplayName: n.displayName,
            onClick: function() {
                a ? (d(!s),
                s && b()) : m()
            }
        }), s && u.a.createElement(x, {
            openChildProfilePage: function(e) {
                d(!1),
                function(e) {
                    D.a.setNewEnv(e, (function() {
                        return Object(N.a)(e.mail, e.displayName)
                    }
                    )),
                    m()
                }(e)
            },
            closeProfile: function() {
                d(!1),
                b()
            }
        }))
    }
    )), I = b.b.div.withConfig({
        displayName: "ProfileMenuWrapper",
        componentId: "-ng7t9h"
    })(s || (s = Object(c.__makeTemplateObject)(["\n  position: absolute;\n  display: block;\n  top: 0.5em;\n  right: 1em;\n  cursor: pointer;\n  user-select: none;\n  z-index: 151;\n"], ["\n  position: absolute;\n  display: block;\n  top: 0.5em;\n  right: 1em;\n  cursor: pointer;\n  user-select: none;\n  z-index: 151;\n"]))), L = n(71);
    var P = n(97)
      , V = Object(d.c)((function() {
        var e = Object(c.__read)(Object(l.useState)(!1), 2)
          , t = e[0]
          , n = e[1]
          , r = Object(l.useContext)(p.a)
          , a = m.a.getInstance(r);
        Object(l.useEffect)((function() {
            var e = h.a.subscribe((function(e) {
                return n(e)
            }
            ));
            return function() {
                return e.unsubscribe()
            }
        }
        ), []);
        var o, i = P.b.messaging ? r.messagingClient.getNotificationsObservable(r.currentUser.mail).read() : null, s = (r.currentUser.impersonator || r.currentUser).children || [];
        if ("sv" === O.a.KED_LOCALE && !r.currentUser.impersonator && ((o = r.currentUser).roles.includes("STUDENT") && !Object(L.a)(o) && o.schoolGrade && !isNaN(o.schoolGrade) && o.schoolGrade <= 3))
            return null;
        var d = Object(l.useCallback)((function() {
            if (!r.complete)
                return !1;
            var e = O.a.IC_API_URL ? g.b.read() : null;
            return !!e && e.doNotify
        }
        ), [r, null == r ? void 0 : r.complete]);
        return u.a.createElement(A, {
            showingProfile: t,
            user: {
                readProfileImageUrl: a.readProfilePicture,
                readHasNotification: d,
                displayName: r.currentUser.displayName
            },
            getUnreadMessages: function() {
                var e;
                return null !== (e = null == i ? void 0 : i.notifications.length) && void 0 !== e ? e : 0
            },
            complete: r.complete,
            isParent: s.length > 0
        })
    }
    ))
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }
    ));
    var r = n(53)
      , a = n(75);
    function o(e, t) {
        var n = e.args
          , r = e.observables
          , a = e.obsVals;
        if (n.length !== t.length)
            return !1;
        for (var o = 0, i = t.length; o < i; ++o)
            if (n[o] !== t[o])
                return !1;
        for (o = 0,
        i = a.length; o < i; ++o)
            if (r[o]._lastValue !== a[o])
                return !1;
        return !0
    }
    function i() {
        return function(e, t, n) {
            var i = "function" == typeof n.get
              , s = "function" == typeof n.value;
            if (!i && !s)
                throw new Error("Invalid memo decoration");
            var c = i ? n.get : n.value;
            function l() {
                for (var e = this, n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                var s = function(e) {
                    return e ? o(e, n) ? e : e.next ? s(e.next) : void 0 : null
                }
                  , l = function(n) {
                    var r = e["_memo_" + t];
                    e["_memo_" + t] = n,
                    r && (r.prev = n,
                    n.next = r)
                }
                  , u = function(n) {
                    n.prev ? n.prev.next = n.next : e["_memo_" + t] === n && (e["_memo_" + t] = n.next),
                    n.next && (n.next.prev = n.prev),
                    n.prev = null,
                    n.next = null
                }
                  , d = r.a.current
                  , p = s(this["_memo_" + t]);
                if (p) {
                    if (!d)
                        throw new Error("Memify will not work outside an observable context. Please use withObserver() for the component that calls a memified method!");
                    return d.observables.push([p.outerObservable, !0, p.outerObservable._lastValue]),
                    p.result
                }
                var m = null
                  , h = []
                  , g = {
                    observables: h,
                    prerender: d && d.prerender
                };
                r.a.current = g;
                try {
                    var b = c.apply(this, n)
                      , f = g.observables.map((function(e) {
                        return e[0]._lastValue
                    }
                    ))
                      , v = 0
                      , k = null
                      , w = function() {
                        k = null,
                        0 === v && m && u(m)
                    }
                      , y = function() {
                        k || (k = setTimeout(w, 500))
                    }
                      , _ = new a.a((function(e) {
                        ++v,
                        k && (clearTimeout(k),
                        k = null);
                        var t = {
                            unsubscribe: function() {
                                0 == --v && y(),
                                n.forEach((function(e) {
                                    return e.unsubscribe()
                                }
                                )),
                                n = []
                            }
                        }
                          , n = h.map((function(n, r) {
                            return n[0].subscribe((function(n, a) {
                                n !== f[r] && ((f = f.slice())[r] = n),
                                e(f, a, t)
                            }
                            ))
                        }
                        ));
                        return t
                    }
                    ));
                    return d ? d.observables.push([_, !0, f]) : y(),
                    l(m = {
                        args: n,
                        observables: h.map((function(e) {
                            return e[0]
                        }
                        )),
                        obsVals: f,
                        result: b,
                        outerObservable: _,
                        prev: null,
                        next: null
                    }),
                    b
                } finally {
                    r.a.current = d
                }
            }
            i ? n.get = l : n.value = l
        }
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return w
    }
    )),
    n.d(t, "a", (function() {
        return y
    }
    ));
    var r = n(0)
      , a = n(13)
      , o = n(37)
      , i = n(62)
      , s = n(135)
      , c = n(161)
      , l = n(79)
      , u = n(10)
      , d = n(7)
      , p = n(230)
      , m = n(232);
    function h(e) {
        var t = null;
        return {
            getBearer: function() {
                return t || this.refreshBearer()
            },
            refreshBearer: function() {
                return t = e()
            }
        }
    }
    var g, b = n(112), f = n(30), v = n(48), k = n(12);
    function w(e, t, n) {
        return _(e, t, !1, n)
    }
    function y(e, t) {
        return _(e, t, !0)
    }
    function _(e, t, n, w) {
        var y;
        return Object(r.__awaiter)(this, void 0, Promise, (function() {
            function _(t) {
                return function() {
                    return Object(r.__awaiter)(this, void 0, Promise, (function() {
                        var n, o, i, s, c, l, d, p, m, h;
                        return Object(r.__generator)(this, (function(g) {
                            switch (g.label) {
                            case 0:
                                return n = Object(r.__read)(Object(f.c)(u.b.KED_TOKEN_PATH), 2),
                                o = n[0],
                                i = n[1],
                                s = Object(f.b)(i),
                                c = o + Object(f.a)(Object(r.__assign)(Object(r.__assign)({}, s), {
                                    impersonateChild: e,
                                    scopes: t.join(",")
                                })),
                                [4, fetch(c)];
                            case 1:
                                return 200 !== (l = g.sent()).status ? [3, 3] : [4, l.json()];
                            case 2:
                                return d = g.sent(),
                                [2, Object(r.__assign)(Object(r.__assign)({}, d), {
                                    tuitionGroups: j.tuitionGroups,
                                    baseGroup: j.baseGroup
                                })];
                            case 3:
                                return p = a.c.bind,
                                m = [void 0, l.status],
                                h = "Could not retrieve tutor token for " + e + ". Error Message: ",
                                [4, l.text()];
                            case 4:
                                throw new (p.apply(a.c, m.concat([h + g.sent()])))
                            }
                        }
                        ))
                    }
                    ))
                }
            }
            function O(t, n, o) {
                return function() {
                    return Object(r.__awaiter)(this, void 0, Promise, (function() {
                        var i, s, c, l, u;
                        return Object(r.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, t.get(n, o)];
                            case 1:
                                return 200 !== (i = r.sent()).status ? [3, 3] : [4, i.json()];
                            case 2:
                                return (s = r.sent()).tuitionGroups && (s.tuitionGroups = s.tuitionGroups.map((function(e) {
                                    return e.trim()
                                }
                                ))),
                                [2, s];
                            case 3:
                                return c = a.c.bind,
                                l = [void 0, i.status],
                                u = "Could not retrieve tutor token for " + e + ". Error Message: ",
                                [4, i.text()];
                            case 4:
                                throw new (c.apply(a.c, l.concat([u + r.sent()])))
                            }
                        }
                        ))
                    }
                    ))
                }
            }
            function T(e) {
                if (u.b.KED_TOKEN_URL && u.b.KED_CLIENT_ID && u.b.KED_CLIENT_SECRET)
                    switch (e) {
                    case "ked":
                        return Object(b.a)(u.b.KED_TOKEN_URL, j, v.c);
                    case "google":
                        return Object(b.a)(u.b.KED_TOKEN_URL + "/google", j, Object(r.__spreadArray)(Object(r.__spreadArray)([], Object(r.__read)(v.a)), Object(r.__read)(v.e)))
                    }
                else
                    switch (e) {
                    case "ked":
                        return h(_(v.c));
                    case "google":
                        return h(_(Object(r.__spreadArray)(Object(r.__spreadArray)([], Object(r.__read)(v.a)), Object(r.__read)(v.e))));
                    default:
                        throw new Error("Internal Error: Invalid token type")
                    }
            }
            var j, E, S, x, C, D, N, A, I, L;
            return Object(r.__generator)(this, (function(b) {
                switch (b.label) {
                case 0:
                    if (j = n && (null === (y = d.a.currentUser.children) || void 0 === y ? void 0 : y.find((function(t) {
                        return t.mail === e
                    }
                    ))),
                    n && !j)
                        throw new Error(Object(k.a)(g || (g = Object(r.__makeTemplateObject)(["Kunder inte impersonera ", ""], ["Kunder inte impersonera ", ""])), t));
                    return E = {
                        mail: e,
                        displayName: t,
                        roles: ["USER", "STUDENT"],
                        school: j ? j.school : d.a.currentUser.school
                    },
                    j ? E.impersonator = d.a.currentUser : E.tutorFor = e,
                    S = n ? T("ked") : h(O(d.a.kedBackendClient.http, "tutor/token", {
                        userEmail: e,
                        baseGroupId: w
                    })),
                    x = new a.d(o.c,S,u.b.KED_API_URL),
                    [4, S.getBearer()];
                case 1:
                    return C = b.sent(),
                    D = C.baseGroup,
                    N = C.tuitionGroups,
                    E.tuitionGroups = N,
                    E.baseGroup = D,
                    A = n ? T("google") : h(O(x.http, "tutor/convert-token/google")),
                    I = new s.b(o.c,u.b.EDS_API_URL,S,(function() {
                        return E
                    }
                    )),
                    (L = {
                        currentUser: E,
                        bearerProvider: S,
                        edsClient: I,
                        googleTokenProvider: A,
                        kedBackendClient: x,
                        tutored: !0,
                        db: new i.b({
                            client: x,
                            userEmail: e,
                            userDisplayName: t,
                            messagingUrl: u.b.KED_MESSAGING_HUB_URL
                        }),
                        weekPlannerStateObservable: l.a.observe(e)
                    }).ksTermPlannerRepo = new m.a((function() {
                        return x
                    }
                    ),(function() {
                        return E
                    }
                    )),
                    L.kgTermPlannerRepo = new p.a((function() {
                        return x
                    }
                    ),(function() {
                        return E
                    }
                    )),
                    L.icClient = u.b.IC_API_URL ? new c.a(L,o.c,u.b.IC_API_URL,!0) : null,
                    L.complete = !0,
                    [4, S.getBearer().catch((function(e) {
                        console.error(e)
                    }
                    ))];
                case 2:
                    return b.sent(),
                    [2, L]
                }
            }
            ))
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return m
    }
    ));
    var r, a, o, i = n(0), s = n(1), c = n(115), l = n(12), u = n(133), d = n(236), p = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.div = Object(s.createRef)(),
            t
        }
        return Object(i.__extends)(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = e.dialog
              , n = e.popDialog
              , p = e.handleOutsideClick
              , m = e.onKeyPress
              , h = e.onKeyDown
              , g = t.parentContainerCssClass
              , b = t.parentContainerElement
              , f = t.displayCloseButton
              , v = t.customCloseButtonTitle
              , k = t.content
              , w = t.preventCloseOnOutsideClick
              , y = (t.preventCloseOnEscape,
            g || (b ? "" : "modal-page"))
              , _ = !1 !== f;
            return s.createElement("div", {
                ref: this.div
            }, s.createElement(d.a, null), s.createElement("div", {
                className: "modal-page-wrap",
                onClick: function(e) {
                    return w ? null : p(e)
                }
            }, s.createElement((function(e) {
                return b ? s.cloneElement.apply(s, Object(i.__spreadArray)([b, Object(i.__assign)({}, e)], Object(i.__read)(e.children))) : s.createElement("div", Object(i.__assign)({}, e))
            }
            ), {
                className: y,
                tabIndex: 0,
                onKeyPress: function(e) {
                    return m(e, t.preventSubmitOnKeyPress)
                },
                onKeyDown: function(e) {
                    return h(e, t.preventSubmitOnKeyPress, t.preventCloseOnEscape)
                }
            }, s.createElement(u.a, {
                render: function() {
                    return s.createElement("div", {
                        style: {
                            width: 400,
                            height: 400
                        }
                    }, s.createElement("div", {
                        className: "error"
                    }, Object(l.a)(r || (r = Object(i.__makeTemplateObject)(["Det gick inte att ladda innehållet."], ["Det gick inte att ladda innehållet."])))), s.createElement(c.a, {
                        onClick: n,
                        size: "l",
                        position: "absolute",
                        title: v || Object(l.a)(a || (a = Object(i.__makeTemplateObject)(["Stäng"], ["Stäng"])))
                    }))
                }
            }, k, _ && s.createElement(c.a, {
                onClick: n,
                size: "l",
                position: "absolute",
                title: v || Object(l.a)(o || (o = Object(i.__makeTemplateObject)(["Stäng"], ["Stäng"])))
            })), s.createElement("div", {
                className: "stopFloats"
            }))))
        }
        ,
        t
    }(s.PureComponent), m = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.lastDiv = Object(s.createRef)(),
            n.handleOutsideClick = n.handleOutsideClick.bind(n),
            n.onKeyPress = n.onKeyPress.bind(n),
            n.onKeyDown = n.onKeyDown.bind(n),
            n.popDialog = n.popDialog.bind(n),
            n
        }
        return Object(i.__extends)(t, e),
        t.prototype.componentDidUpdate = function(e) {
            var t, n, r, a, o, i;
            null !== this.lastDiv.current && e.dialogs.length > this.props.dialogs.length && ((null === (n = null === (t = this.lastDiv.current) || void 0 === t ? void 0 : t.div) || void 0 === n ? void 0 : n.current.querySelector(".btn-default")) ? (null === (a = null === (r = this.lastDiv.current) || void 0 === r ? void 0 : r.div) || void 0 === a ? void 0 : a.current.querySelector(".btn-default")).focus() : (null === (i = null === (o = this.lastDiv.current) || void 0 === o ? void 0 : o.div) || void 0 === i ? void 0 : i.current.querySelector("input")).focus())
        }
        ,
        t.prototype.handleOutsideClick = function(e) {
            var t, n, r;
            (null === (r = null === (n = null === (t = this.lastDiv) || void 0 === t ? void 0 : t.current) || void 0 === n ? void 0 : n.div.current) || void 0 === r ? void 0 : r.contains(e.target)) || e.target.tagName
        }
        ,
        t.prototype.onKeyPress = function(e, t) {
            var n;
            t || 13 !== e.which || e.target && ("TEXTAREA" === e.target.tagName || "true" === e.target.contentEditable) || (null === (n = this.lastDiv.current) || void 0 === n ? void 0 : n.div.current.querySelector(".btn-default")).click(),
            e.stopPropagation()
        }
        ,
        t.prototype.onKeyDown = function(e, t, n) {
            var r;
            if (27 === e.which && !n)
                return this.popDialog(),
                void e.stopPropagation();
            t ? e.stopPropagation() : 83 === e.which && (e.ctrlKey || e.metaKey) && (e.preventDefault(),
            (null === (r = this.lastDiv.current) || void 0 === r ? void 0 : r.div.current.querySelector(".btn-default")).click(),
            e.stopPropagation())
        }
        ,
        t.prototype.popDialog = function() {
            var e = this.props.dialogs[this.props.dialogs.length - 1];
            if (e && e.onDialogClose)
                try {
                    e.onDialogClose()
                } catch (e) {
                    console.error("Error in onDialogClose", e)
                }
            this.props.popDialog()
        }
        ,
        t.prototype.render = function() {
            var e = this
              , t = this.props.dialogs;
            return document.querySelector("body").setAttribute("aria-disabled", (t.length > 0).toString()),
            document.querySelector("body").style.overflow = t.length > 0 ? "hidden" : "auto",
            t.length > 0 && s.createElement("div", null, t.map((function(n, r) {
                return s.createElement(p, {
                    key: r,
                    dialog: n,
                    handleOutsideClick: e.handleOutsideClick,
                    onKeyDown: e.onKeyDown,
                    onKeyPress: e.onKeyPress,
                    popDialog: e.popDialog,
                    ref: r == t.length - 1 ? e.lastDiv : void 0
                })
            }
            )))
        }
        ,
        t
    }(s.Component)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var t = n(10);
        t.b.ENVIRONMENT = "production",
        t.b.KED_API_URL = "https://backend.kedschools.com/kedbackend-canary/api/",
        t.b.KED_MESSAGING_HUB_URL = "https://backend.kedschools.com/kedmessaging/messagehub",
        t.b.EDS_API_URL = "https://api.kedschools.se/studentportal/",
        t.b.EDS_ALTERNATE_URL = "",
        t.b.IC_API_URL = "https://gwen.insertcoin.se/api/",
        t.b.GAS_API_CLASSROOM_SERVICE_ID = "AKfycbyaur8PEZeGS6kSwy9L_G96uu3DmQl-sIA0ESx5VG7S58YMpf9l",
        t.b.KED_TOKEN_PATH = t.b.KED_TOKEN_PATH,
        t.b.KED_SCHEDULE_TOKEN_API_URL = "",
        t.b.KED_SCHEDULE_BASE_API_URL = "",
        t.b.KED_CALENDAR_PROVIDERS = "google,kedbackend",
        t.b.KED_TOKEN_URL = "https://backend.kedschools.com/kedauth/token",
        t.b.KED_CLIENT_ID = "",
        t.b.KED_CDN = "https://storage.googleapis.com/kedcomponents/se-canary",
        t.b.KED_FEATURES = "strategyBank,picker,kgTutorComment,ksTutorComment,termplannerCharts,weekplannerCharts,studyGroups,cbCollapseBoxes,ksAssignments,markPartialKRs,KDT592,stratBankMigrated,spWpCr,cbWpCr,tasksTab,workpathTab,wysiwygTooltip,planningToolClassrooms,cbEditTaskNewFormat,dynamicTaskContent,calendarResponsiveWeekView,showTeacherOnboarding,wysiwygTipTap",
        t.b.KED_CLIENT_SECRET = "",
        t.b.KED_REALM = "SE1",
        t.b.KED_LOCALE = t.b.KED_LOCALE || "sv",
        t.b.KED_SCHOOL_LOCALE = t.b.KED_SCHOOL_LOCALE || "sv",
        t.b.KED_RESOURCES_URL = t.b.KED_RESOURCES_URL || e.env.KED_RESOURCES_URL,
        t.b.KED_GAMIFICATION_ICONS_STORAGE_URL = "https://storage.googleapis.com/ked-public-web-files/gwen-icons",
        t.b.KED_STRATBANK_FOLDER = "strategy-bank-se",
        t.b.KED_KSACADEMY_FOLDER = "ks-academy-se",
        t.b.KED_CONVERT_WORDBANK_SERVICE_URL = "https://ks.kunskapsporten.se/4.6c4a73a617db3da91bb258e/12.6c4a73a617db3da91bb2596.json",
        console.log("process rep url", ""),
        t.b.ERROR_REPORT_URL = t.b.ERROR_REPORT_URL || "",
        n.p = "https://storage.googleapis.com/kedcomponents/se-canary/vendor/"
    }
    ).call(this, n(87))
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }
    ));
    var r = n(0)
      , a = n(155)
      , o = n(12)
      , i = n(14)
      , s = function() {
        function e() {}
        return e.getUserAvatarData = function(t, n, r) {
            var a = e.getAvailableItems(r)
              , o = {}
              , i = t;
            return i && Object.keys(i).filter((function(e) {
                return !!e
            }
            )).forEach((function(e) {
                var t = Object.values(a[e]).find((function(t) {
                    return t.id === i[e] && t.requiredLevel <= n
                }
                ));
                o[e] = t
            }
            )),
            o
        }
        ,
        e.getAvailableItems = function(e) {
            return Object(o.n)(Object.keys(a.a.availableItems).map((function(e) {
                return a.a.availableItems[e]
            }
            ))).forEach((function(t) {
                t.iconUrl.includes(e) || (t.iconUrl = e + t.iconUrl),
                t.components.forEach((function(t) {
                    t.url.includes(e) || (t.url = e + t.url)
                }
                ))
            }
            )),
            a.a.availableItems
        }
        ,
        e.parseAvatarItems = function(e) {
            var t, n, a = {};
            try {
                for (var o = Object(r.__values)(Object.entries(e)), i = o.next(); !i.done; i = o.next()) {
                    var s = Object(r.__read)(i.value, 2)
                      , c = s[0]
                      , l = s[1];
                    l && (a[c] = l.id)
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return a
        }
        ,
        Object(r.__decorate)([Object(i.g)()], e, "getAvailableItems", null),
        e
    }()
}
, , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    }
    ));
    var r = n(0)
      , a = n(142)
      , o = n(7)
      , i = n(70)
      , s = n(122)
      , c = n(31)
      , l = n(46)
      , u = function(e) {
        function t(t, n) {
            var a = this
              , o = n()
              , u = new Date
              , d = Object(r.__read)(Object(i.c)(u, u.getMonth() >= 7), 2)
              , p = d[0]
              , m = d[1];
            return a = e.call(this, {
                getClient: t,
                optimistic: !0,
                table: "weekplans",
                user: o ? o.mail : "",
                getQueryOptions: function() {
                    return Object(r.__awaiter)(a, void 0, void 0, (function() {
                        return Object(r.__generator)(this, (function(e) {
                            return [2, {
                                from: Object(s.default)(Object(c.default)(p), 2).valueOf(),
                                to: Object(l.default)(Object(c.default)(m), 5).valueOf(),
                                role: "USER"
                            }]
                        }
                        ))
                    }
                    ))
                }
            }) || this
        }
        return Object(r.__extends)(t, e),
        t
    }(a.a)
      , d = new u((function() {
        return o.a.kedBackendClient
    }
    ),(function() {
        return o.a.currentUser
    }
    ));
    o.a.kgTermPlannerRepo = d
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = n(0)
      , a = function() {
        function e(e) {
            this.comm = e,
            this.listPromise = null,
            this.items = null,
            this.subscribers = []
        }
        return e.prototype.subscribe = function(e) {
            var t = this;
            return this.ensureHasData().then((function() {
                e(t.items, t.error),
                t.subscribers.push(e)
            }
            ))
        }
        ,
        e.prototype.unsubscribe = function(e) {
            this.subscribers = this.subscribers.filter((function(t) {
                return t !== e
            }
            ))
        }
        ,
        e.prototype.notifySubscribers = function() {
            var e = this;
            this.subscribers.forEach((function(t) {
                return t(e.items, e.error)
            }
            ))
        }
        ,
        e.prototype.ensureHasData = function() {
            return this.listPromise || this.refreshFromServer(),
            this.listPromise
        }
        ,
        e.prototype.refreshFromServer = function() {
            var e = this;
            return this.listPromise = this.comm.query().then((function(t) {
                e.items = t,
                e.error = null,
                e.notifySubscribers()
            }
            )).catch((function(t) {
                e.error = t,
                e.items = e.items || [],
                e.notifySubscribers()
            }
            )),
            this.listPromise
        }
        ,
        e.prototype.update = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return Object(r.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, this.ensureHasData()];
                    case 1:
                        return n.sent(),
                        t = Array.isArray(e) ? e : [e],
                        this.items = this.items.map((function(e) {
                            var n = t.find((function(t) {
                                var n = t.id;
                                return e.id === n
                            }
                            ));
                            return n ? Object.assign({}, n) : e
                        }
                        )),
                        this.notifySubscribers(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.insert = function(e) {
            var t = this;
            return this.ensureHasData().then((function() {
                t.items = t.items.concat(e),
                t.notifySubscribers()
            }
            ))
        }
        ,
        e.prototype.delete = function(e) {
            var t = this
              , n = Array.isArray(e) ? e : [e];
            return this.ensureHasData().then((function() {
                t.items = t.items.filter((function(e) {
                    return !n.some((function(t) {
                        return e.id === t
                    }
                    ))
                }
                )),
                t.notifySubscribers()
            }
            ))
        }
        ,
        e
    }()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = n(0)
      , a = function(e) {
        function t(t, n) {
            var a = this
              , o = n();
            return a = e.call(this, {
                getClient: t,
                optimistic: !0,
                table: "weekplans-ks",
                user: o ? o.mail : "",
                getQueryOptions: function() {
                    return Object(r.__awaiter)(a, void 0, void 0, (function() {
                        var e, t;
                        return Object(r.__generator)(this, (function(n) {
                            return e = this.startDate && this.startDate.valueOf() || Date.now(),
                            t = this.endDate && this.endDate.valueOf() || Date.now(),
                            [2, {
                                from: e,
                                to: t,
                                role: "USER"
                            }]
                        }
                        ))
                    }
                    ))
                }
            }) || this
        }
        return Object(r.__extends)(t, e),
        t.prototype.refreshData = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return Object(r.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return t = Object(r.__read)(e, 2),
                        this.startDate = t[0],
                        this.endDate = t[1],
                        [4, this.mem.refreshFromServer()];
                    case 1:
                        return n.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t
    }(n(142).a)
}
, , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }
    ));
    var r = n(0)
      , a = n(1)
      , o = n.n(a)
      , i = function(e, t, n, a) {
        return a && console.warn(a),
        function(a) {
            var i = Object(r.__assign)({}, a);
            return Object.keys(a).forEach((function(e) {
                if (t.hasOwnProperty(e)) {
                    var r = t[e];
                    r.message ? console.warn("Deprecation in <" + n + ">: " + r.message) : console.warn("Deprecated property" + (n ? " in <" + n + " />" : "") + ": " + e + (r.rename && " use " + r.rename + " instead")),
                    r.transform && (i[e] = r.transform(i[e])),
                    r.rename && (i[r.rename] = i[e])
                }
            }
            )),
            t._inspection && t._inspection.transform(i) && console.warn("Deprecation in <" + n + ">: " + t._inspection.message),
            o.a.createElement(e, Object(r.__assign)({}, i))
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    ));
    var r, a = n(0), o = n(5).b.div.withConfig({
        displayName: "DarkenDiv",
        componentId: "-18jqia0"
    })(r || (r = Object(a.__makeTemplateObject)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  background-color: #000;\n  width: 100vw;\n  height: 100vh;\n  z-index: 150;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  background-color: #000;\n  width: 100vw;\n  height: 100vh;\n  z-index: 150;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n"])))
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return S
    }
    ));
    var r = n(0)
      , a = n(13)
      , o = n(14)
      , i = n(62)
      , s = n(79)
      , c = n(34)
      , l = n(12)
      , u = n(54)
      , d = n(56)
      , p = n(86)
      , m = function(e) {
        Object.assign(this, e)
    };
    var h, g = n(10), b = n(100), f = n(80), v = n(31), k = n(186), w = n(261), y = n(320), _ = n(46), O = n(243), T = n(267), j = n(312), E = n(64), S = function() {
        function e(e, t) {
            this.db = e,
            this.persistedState = t,
            this.milestone = Object(v.default)(new Date).getTime()
        }
        return e.prototype.refine = function(e, t) {
            var n, a, o;
            void 0 === t && (t = !1);
            var i = []
              , s = null
              , c = [];
            if (!(null == e ? void 0 : e.length))
                return [];
            t ? (c = e.filter((function(e) {
                return !(e.name || e.weekDay && e.weekDays)
            }
            )),
            (s = {}).unassigned = [],
            e.forEach((function(e) {
                var t;
                null != e.weekDay ? s[e.weekDay] ? s[e.weekDay].push(e) : s[e.weekDay] = [e] : (null === (t = e.weekDays) || void 0 === t ? void 0 : t.length) ? e.weekDays.forEach((function(t) {
                    s[t] ? s[t].push(e) : s[t] = [e]
                }
                )) : s.unassigned.push(e)
            }
            ))) : s = Object(l.c)(e, (function(e) {
                return e.courseName || ""
            }
            ));
            var u = function(n) {
                var a, u, d = s[n] || s[""], p = {}, m = Object(l.c)(d, (function(e) {
                    return isNaN(e.step) || (p[e.learningGoal] = e.step),
                    e.learningGoal
                }
                )), h = function(e) {
                    var t = p[e];
                    return t ? t + ". " + e : "" + e
                }, b = [], f = function(r) {
                    var a = m[r][0].learningGoal
                      , s = m[r].sort(Object(l.j)(["order", "dateTime"]))
                      , u = null
                      , d = (u = t ? c.find((function(e) {
                        return e.learningGoal === a
                    }
                    )) : s.filter((function(e) {
                        return null == e.name
                    }
                    ))[0]) && u.url;
                    if ("unassigned" === n && t && e.filter((function(e) {
                        return e.name && e.learningGoal === a
                    }
                    )).every((function(e) {
                        var t;
                        return null != e.weekDay || (null === (t = e.weekDays) || void 0 === t ? void 0 : t.length)
                    }
                    )) && i.some((function(e) {
                        return e.learningGoals.find((function(e) {
                            return e.name === a && e.tasks.every((function(e) {
                                var t;
                                return null != e.weekDay || (null === (t = e.weekDays) || void 0 === t ? void 0 : t.length)
                            }
                            ))
                        }
                        ))
                    }
                    )))
                        return "continue";
                    b.push({
                        courseName: t ? null == u ? void 0 : u.courseName : n,
                        weekDay: t ? n : null === (o = null == u ? void 0 : u.weekDay) || void 0 === o ? void 0 : o.toString(),
                        name: a,
                        allTasks: s,
                        placeholderUT: u,
                        url: d,
                        step: s.map((function(e) {
                            return e.step
                        }
                        )).filter((function(e) {
                            return e
                        }
                        ))[0],
                        tasks: s.filter((function(e) {
                            return e.name
                        }
                        )),
                        tabName: s.map((function(e) {
                            return e.courseInfo && e.courseInfo.tabName
                        }
                        )).filter((function(e) {
                            return !!e
                        }
                        ))[0]
                    })
                };
                try {
                    for (var v = (a = void 0,
                    Object(r.__values)(Object.keys(m).sort((function(e, t) {
                        return h(e).localeCompare(h(t), g.a.KED_LOCALE, {
                            numeric: !0,
                            sensitivity: "base"
                        })
                    }
                    )))), k = v.next(); !k.done; k = v.next()) {
                        f(k.value)
                    }
                } catch (e) {
                    a = {
                        error: e
                    }
                } finally {
                    try {
                        k && !k.done && (u = v.return) && u.call(v)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
                i.push({
                    courseName: t ? null : n,
                    weekDay: n || null,
                    learningGoals: b
                })
            };
            try {
                for (var d = Object(r.__values)(Object.keys(s).sort((function(e, t) {
                    return e.localeCompare(t, g.a.KED_LOCALE)
                }
                )).filter((function(e) {
                    return e
                }
                )).concat(s[""] ? [""] : [])), p = d.next(); !p.done; p = d.next()) {
                    u(p.value)
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    p && !p.done && (a = d.return) && a.call(d)
                } finally {
                    if (n)
                        throw n.error
                }
            }
            return i
        }
        ,
        e.prototype.readAllV2UserTasks = function(e) {
            var t = Object(d.c)(e).getTime()
              , n = this.db.usertasks2.role("USER").cacheOptimized()
              , r = [];
            t < this.milestone && r.push(n.between(t, this.milestone)),
            r.push(n.after(this.milestone));
            var a = Object(o.i)(r.map((function(e) {
                return function() {
                    return e.read()
                }
            }
            )));
            return Object(l.n)(a)
        }
        ,
        e.prototype.readAllUserTasksForActiveWeek = function(e) {
            var t = Object(c.b)(e)
              , n = Object(c.b)(Date.now());
            return this.readAllV2UserTasks(e).filter((function(e) {
                return Object(u.f)(e, t, n)
            }
            ))
        }
        ,
        e.prototype.createCustomGoal = function(e, t) {
            var n = Object(c.b)(t);
            return {
                v: 2,
                id: Object(a.j)(),
                learningGoal: e,
                order: Object(a.n)(),
                dateTime: Object(u.a)(t),
                validWeeks: [n],
                selectedStrategies: []
            }
        }
        ,
        e.prototype.createUserTask = function(e, t, n) {
            var r = Object(c.b)(t)
              , o = {
                v: 2,
                id: Object(a.j)(),
                courseName: e.courseName,
                dateTime: Object(u.a)(t),
                learningGoal: e.learningGoal,
                name: e.name,
                url: e.url,
                deadline: e.deadline,
                order: Object(a.n)(),
                acl: [new a.b("email",this.db.deps.userEmail,"S")].map((function(e) {
                    return e.toString()
                }
                )),
                validWeeks: [r]
            };
            return n && (o.strategyTagIds = [n]),
            e.task ? (o.taskId = e.task.id,
            e.course ? o.courseId = e.course.id : e.courseInfo && (o.courseInfo = e.courseInfo),
            e.task.futureAbilities && e.task.futureAbilities.length > 0 && (o.futureAbility = e.task.futureAbilities[0])) : o.siteVisionPageId = e.id,
            e.step && (o.step = e.step),
            o
        }
        ,
        e.prototype.storeNewUserTask = function(e) {
            if (2 !== e.v)
                throw new Error("Internal: cannot store a new userTask if version is not 2");
            if (!Array.isArray(e.validWeeks))
                throw new Error("Internal: Trying to add a userTask without required v2 property 'validWeeks'");
            if (e.task || e.course)
                throw new Error("Internal: Properties task and course must not exist on v2 userTasks. Use taskId and courseId instead!");
            if (e.validWeeks.length < 1)
                throw new Error("Internal: There's never a point to store a new userTask without any validWeeks");
            e.validWeeks.forEach(c.a),
            this.setWeekPlannerBoxOpen(e.courseName || "", !0),
            this.db.usertasks2.add(e)
        }
        ,
        e.prototype.readWeekDate = function() {
            return this.persistedState.read().weekDate
        }
        ,
        e.prototype.readUserTasksForActiveWeek = function(e) {
            return this.readAllUserTasksForActiveWeek(e).filter((function(e) {
                return !e.weekTexts
            }
            ))
        }
        ,
        e.prototype.readUserTaskFromCourseTaskId = function(e, t) {
            Date.now();
            return Object(k.default)(Object(v.default)(t), Object(v.default)(new Date)) ? "invalid" : this.readAllUserTasksForActiveWeek(t).filter((function(t) {
                return t.taskId === e
            }
            ))[0] || null
        }
        ,
        e.prototype.readWeekTexts = function(e) {
            var t = this
              , n = Object(c.b)(e)
              , o = this.readAllUserTasksForActiveWeek(e).filter((function(e) {
                return !!e.weekTexts
            }
            )).slice().sort((function(e, t) {
                return t.dateTime - e.dateTime
            }
            ));
            if (o.length > 0) {
                var i = Object(r.__read)(o)
                  , s = i[0]
                  , l = i.slice(1)
                  , u = s.weekTexts
                  , d = u.assessment
                  , p = u.strategy
                  , m = s.$meta
                  , h = function(n, r) {
                    t.updateTask(s, n, r),
                    l.length > 0 && t.removeUserTasksFromOpenWeek(l, e)
                };
                return {
                    assessment: d,
                    strategy: p,
                    weekTextsMeta: m,
                    setWeekTexts: function(n) {
                        var r = n.strategy
                          , a = n.assessment;
                        (Object(f.a)() || !s.weekTexts.assessment && a) && t.logInsertCoinAssesment(e),
                        h({
                            weekTexts: {
                                assessment: a,
                                strategy: r
                            }
                        }, 1e3)
                    },
                    toggleSelectedStrategy: function(e, t) {
                        h({
                            selectedStrategies: "add" === t ? {
                                $add: [e]
                            } : {
                                $remove: [e]
                            }
                        }, 0)
                    }
                }
            }
            var g = function(o) {
                t.storeNewUserTask(Object(r.__assign)({
                    v: 2,
                    id: Object(a.j)(),
                    dateTime: Object(w.a)(e, 3).valueOf(),
                    validWeeks: [n],
                    done: !0,
                    weekTexts: {
                        strategy: "",
                        assessment: ""
                    }
                }, o))
            };
            return {
                assessment: "",
                strategy: "",
                weekTextsMeta: "not-stored-yet",
                setWeekTexts: function(n) {
                    var r = n.strategy
                      , a = n.assessment;
                    a && t.logInsertCoinAssesment(e),
                    g({
                        weekTexts: {
                            strategy: r,
                            assessment: a
                        }
                    })
                },
                toggleSelectedStrategy: function(e, t) {
                    "add" === t && g({
                        selectedStrategies: [e]
                    })
                }
            }
        }
        ,
        e.prototype.observeTask = function(e) {
            return (2 === e.v ? this.db.usertasks2 : this.db.usertasks).ids([e.id]).toValue().map((function(e) {
                return e[0]
            }
            ))
        }
        ,
        e.prototype._getTaskMap = function() {
            var e = this.readWeekDate()
              , t = this.readAllUserTasksForActiveWeek(e);
            return Object(l.d)(t, (function(e) {
                return e.courseInfo ? e.courseInfo.school + "/" + e.taskId : e.courseId + "/" + e.taskId
            }
            ))
        }
        ,
        e.prototype.findUserTaskFromSPTask = function(e, t) {
            return this._getTaskMap()[t + "/" + e.id]
        }
        ,
        e.prototype.findUserTaskFromCBTask = function(e, t) {
            return this._getTaskMap()[t.id + "/" + e.id]
        }
        ,
        e.prototype.readSelectedStrategiesForWeek = function(e) {
            var t = this.readAllUserTasksForActiveWeek(e);
            return Object(l.m)(Object(l.n)(t.map((function(e) {
                return e.selectedStrategies
            }
            )).filter((function(e) {
                return !!e
            }
            ))), (function(e) {
                return e.id
            }
            ))
        }
        ,
        e.prototype.listSelectedStrategiesForLearningGoal = function(e) {
            var t = e.placeholderUT;
            return t ? t.selectedStrategies : []
        }
        ,
        e.prototype.readStrategyParts = function(e) {
            var t = this
              , n = {}
              , a = this.readAllUserTasksForActiveWeek(e)
              , o = this.db.role("USER").userFavStrats.cacheOptimized().idsAndNamesOnly().read().map((function(e) {
                return e.name
            }
            ))
              , i = new Set
              , s = new Map;
            return a.forEach((function(e) {
                var a;
                if (e.selectedStrategies && e.selectedStrategies.length > 0) {
                    var c = Object(u.d)({
                        step: e.step,
                        tabName: e.courseInfo && e.courseInfo.tabName,
                        name: e.learningGoal,
                        courseName: e.courseName
                    })
                      , l = n[c] || {
                        courseName: e.courseName,
                        stepOrSubject: e.step ? e.step.toString() : e.courseInfo ? e.courseInfo.tabName : e.courseName ? e.learningGoal : null,
                        strategies: []
                    };
                    n[c] || (n[c] = l),
                    (a = l.strategies).push.apply(a, Object(r.__spreadArray)([], Object(r.__read)(e.selectedStrategies.map((function(e) {
                        return i.add(e.id + ":" + c),
                        new x(e,o,s,l,t.db)
                    }
                    )))))
                }
            }
            )),
            this.db.role("USER").userStratRecos.cacheOptimized().names(Object(r.__spreadArray)([], Object(r.__read)(i))).read().forEach((function(e) {
                return s.set(e.name, e)
            }
            )),
            Object.keys(n).map((function(e) {
                return n[e]
            }
            ))
        }
        ,
        e.prototype.addCBTaskToOpenWeek = function(e, t, n, a) {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var i, s, c = this;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return i = {
                            id: e.id,
                            name: e.name,
                            url: "",
                            courseName: t.name,
                            learningGoal: e.learningGoal || n.name,
                            task: e,
                            course: t,
                            courseInfo: void 0
                        },
                        a && Object.assign(i, a),
                        [4, Object(o.h)((function() {
                            return c.readWeekDate()
                        }
                        )).load()];
                    case 1:
                        return s = r.sent(),
                        [4, this.addLearningTaskToOpenWeek(i, s)];
                    case 2:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.addSPTaskToOpenWeek = function(e, t, n, a, i, s) {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var c, u, d = this;
                return Object(r.__generator)(this, (function(p) {
                    switch (p.label) {
                    case 0:
                        return c = {
                            id: e.id,
                            name: e.name,
                            url: "",
                            courseName: a.name,
                            learningGoal: "mission-tab" === i.tabClass ? Object(l.a)(h || (h = Object(r.__makeTemplateObject)(["Uppdrag"], ["Uppdrag"]))) : "step-course-tab" === i.type ? e.learningGoal : e.subject,
                            step: "step-course-tab" === i.type ? i.stepNo : void 0,
                            task: e,
                            courseInfo: {
                                school: t,
                                course: a.id,
                                tab: i.id,
                                contentId: n,
                                tabName: i.name || i.tabTitle
                            }
                        },
                        s && Object.assign(c, s),
                        [4, Object(o.h)((function() {
                            return d.readWeekDate()
                        }
                        )).load()];
                    case 1:
                        return u = p.sent(),
                        [4, this.addLearningTaskToOpenWeek(c, u)];
                    case 2:
                        return [2, p.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.addLearningTaskToOpenWeek = function(e, t) {
            return Object(r.__awaiter)(this, void 0, Promise, (function() {
                var n, a, s, l, d, p, m, h, g = this;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, Object(o.f)((function() {
                            return g.readAllV2UserTasks(t)
                        }
                        ))];
                    case 1:
                        return n = r.sent(),
                        a = Object(u.e)(e, n),
                        [4, Object(u.c)({
                            courseName: e.courseName,
                            tabName: e.courseInfo && e.courseInfo.tabName,
                            name: e.learningGoal,
                            step: e.step
                        })];
                    case 2:
                        return s = r.sent(),
                        l = Object(c.d)(t),
                        l.year,
                        l.week,
                        e.name && b.a.sendAssignTaskEvent({}),
                        0 !== a.length ? [3, 6] : (m = this.createUserTask(e, t, s),
                        this.storeNewUserTask(m),
                        m.courseName && m.learningGoal ? [4, Object(o.f)((function() {
                            return g.readAllUserTasksForActiveWeek(t).some((function(t) {
                                return t.courseName === e.courseName && t.step === e.step && t.learningGoal === e.learningGoal && !t.name
                            }
                            ))
                        }
                        ))] : [3, 5]);
                    case 3:
                        return r.sent() ? [3, 5] : [4, this.addLearningGoalPlaceholder({
                            courseName: m.courseName,
                            name: m.learningGoal,
                            step: m.step,
                            tabName: e.courseInfo && e.courseInfo.tabName
                        }, t)];
                    case 4:
                        r.sent(),
                        r.label = 5;
                    case 5:
                        return [2, m];
                    case 6:
                        return d = Object(c.b)(t),
                        (p = a.find((function(e) {
                            return e.deletedWeek === d
                        }
                        ))) ? (this.db.usertasks2.update(p, {
                            deletedWeek: i.a,
                            done: !1,
                            dateTime: Object(u.a)(t),
                            strategyTagIds: s ? [s] : void 0
                        }),
                        [2, p]) : a.find((function(e) {
                            return e.deletedWeek && e.deletedWeek < d
                        }
                        )) ? (m = this.createUserTask(e, t, s),
                        this.storeNewUserTask(m),
                        [2, m]) : (h = a[0],
                        this.db.usertasks2.update(h, {
                            validWeeks: {
                                $add: [d]
                            },
                            dateTime: Object(u.a)(t)
                        }, 0),
                        [2, h])
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.addCustomTaskToOpenWeek = function(e, t, n, o, i, s, l) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var d, p;
                return Object(r.__generator)(this, (function(r) {
                    return d = Object(c.b)(e),
                    p = {
                        id: Object(a.j)(),
                        v: 2,
                        validWeeks: [d],
                        dateTime: Object(u.a)(e),
                        order: Object(a.n)(),
                        courseName: t,
                        learningGoal: n,
                        name: o,
                        description: i,
                        url: s,
                        weekDays: l
                    },
                    this.storeNewUserTask(p),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.updateTask = function(e, t, n) {
            void 0 === n && (n = 0),
            (2 === e.v ? this.db.usertasks2 : this.db.usertasks).update(e, t, n)
        }
        ,
        e.prototype.removeUserTasksFromOpenWeek = function(e, t) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var n, a, o, i, s, u, d, p, m = this;
                return Object(r.__generator)(this, (function(h) {
                    n = Object(c.b)(t);
                    try {
                        for (a = Object(r.__values)(e),
                        o = a.next(); !o.done; o = a.next())
                            2 == (i = o.value).v ? 1 === i.validWeeks.length && i.validWeeks[0] === n ? this.db.usertasks2.delete(i.id) : (s = i.validWeeks.filter((function(e) {
                                return e >= n
                            }
                            )),
                            u = {
                                deletedWeek: n,
                                dateTime: t,
                                weekDay: null
                            },
                            s.length > 0 && (u.validWeeks = {
                                $remove: s
                            }),
                            this.db.usertasks2.update(i, u)) : this.db.usertasks.delete(i.id)
                    } catch (e) {
                        d = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (p = a.return) && p.call(a)
                        } finally {
                            if (d)
                                throw d.error
                        }
                    }
                    return Object(l.m)(e.filter((function(e) {
                        return e.name && e.courseName && e.learningGoal
                    }
                    )).map((function(e) {
                        var t = e.courseName
                          , n = e.learningGoal;
                        return {
                            key: t + n,
                            courseName: t,
                            learningGoal: n
                        }
                    }
                    )), (function(e) {
                        return e.key
                    }
                    )).forEach((function(e) {
                        var n = e.courseName
                          , r = e.learningGoal;
                        m.retireOrUnretirePlaceholder(t, n, r)
                    }
                    )),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setTaskDoneState = function(e, t, n) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var a, s, l, d, p, m, h, g, f, v, k, w, _, O, T = this;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return a = Object(c.d)(n),
                        s = a.year,
                        l = a.week,
                        e.name && t ? [4, Object(o.h)((function() {
                            return T.readUserTasksForActiveWeek(n)
                        }
                        )).load()] : [3, 2];
                    case 1:
                        d = r.sent(),
                        p = d.filter((function(e) {
                            return !!e.name
                        }
                        )),
                        m = p.filter((function(e) {
                            return e.done
                        }
                        )).length,
                        h = .75 * p.length,
                        p.length > 0 && m + 1 > h && b.a.sendMarkTaskAsDoneEvent({
                            taskName: e.name,
                            week: l,
                            year: s,
                            done: t,
                            futureAbility: e.futureAbility || null
                        }),
                        r.label = 2;
                    case 2:
                        return 2 != e.v ? [3, 9] : t ? (g = Object(c.b)(n),
                        f = Object(c.j)(g).getTime(),
                        v = e.validWeeks.filter((function(e) {
                            return e > g
                        }
                        )),
                        k = {
                            dateTime: f,
                            done: !0
                        },
                        e.strategyTagIds ? [3, 4] : [4, Object(u.c)({
                            courseName: e.courseName,
                            tabName: e.courseInfo && e.courseInfo.tabName,
                            name: e.learningGoal,
                            step: e.step
                        })]) : [3, 7];
                    case 3:
                        (w = r.sent()) && (k.strategyTagIds = [w]),
                        r.label = 4;
                    case 4:
                        return v.length > 0 && (k.validWeeks = {
                            $remove: v
                        }),
                        this.db.usertasks2.update(e, k, 0),
                        e.name && e.courseName ? [4, this.retireOrUnretirePlaceholder(n, e.courseName, e.learningGoal)] : [3, 6];
                    case 5:
                        r.sent(),
                        r.label = 6;
                    case 6:
                        return [3, 8];
                    case 7:
                        _ = Object(u.a)(n),
                        e.deadline && (O = Object(y.default)(e.deadline).valueOf(),
                        _ = Math.max(_, O)),
                        this.db.usertasks2.update(e, {
                            dateTime: _,
                            deletedWeek: i.a,
                            done: !1
                        }, 0),
                        e.name && e.courseName && this.retireOrUnretirePlaceholder(n, e.courseName, e.learningGoal),
                        r.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        this.db.usertasks.update(e, {
                            done: t
                        }, 0),
                        r.label = 10;
                    case 10:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.retireOrUnretirePlaceholder = function(e, t, n) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var a, i, s, c, l, u = this;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, Object(o.h)((function() {
                            return u.readAllUserTasksForActiveWeek(e)
                        }
                        )).load()];
                    case 1:
                        return a = r.sent(),
                        i = a.filter((function(e) {
                            return e.learningGoal === n && e.courseName === t
                        }
                        )),
                        s = i.filter((function(e) {
                            return !!e.name
                        }
                        )),
                        c = i.filter((function(e) {
                            return !e.name
                        }
                        )),
                        0 !== s.length ? [3, 4] : (l = c.filter((function(e) {
                            return e.courseName
                        }
                        ))).length > 0 ? [4, this.removeUserTasksFromOpenWeek(l, e)] : [3, 3];
                    case 2:
                        r.sent(),
                        r.label = 3;
                    case 3:
                        return [3, 5];
                    case 4:
                        s.every((function(e) {
                            return e.done
                        }
                        )) ? c.forEach((function(t) {
                            return u.setTaskDoneState(t, !0, e)
                        }
                        )) : c.forEach((function(t) {
                            t.done && u.setTaskDoneState(t, !1, e)
                        }
                        )),
                        r.label = 5;
                    case 5:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setSubTaskDoneState = function(e, t, n) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var a, o;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return a = 2 === e.v ? this.db.usertasks2 : this.db.usertasks,
                        !e.done || n ? [3, 2] : (a.update(e, {
                            subTasks: {
                                $update: e.subTasks.map((function(e) {
                                    return e.id === t ? {
                                        id: e.id,
                                        done: !1
                                    } : {
                                        id: e.id,
                                        done: !0
                                    }
                                }
                                ))
                            }
                        }),
                        [4, this.persistedState.load()]);
                    case 1:
                        o = r.sent().weekDate,
                        this.setTaskDoneState(e, !1, o),
                        r.label = 2;
                    case 2:
                        return a.update(e, {
                            subTasks: {
                                $update: [{
                                    id: t,
                                    done: n
                                }]
                            }
                        }, 0),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.changeWeek = function(e) {
            var t = this.persistedState.value
              , n = new s.a(t);
            n.weekDate = Object(_.default)(Object(v.default)(e), 3).valueOf(),
            n.save()
        }
        ,
        e.prototype.prevWeek = function() {
            var e = this.persistedState.value.weekDate
              , t = Object(O.default)(e, 1);
            this.changeWeek(t)
        }
        ,
        e.prototype.currentWeek = function() {
            this.changeWeek(new Date)
        }
        ,
        e.getCurrentWeek = function() {
            var e = new Date
              , t = {
                adjusted: !1,
                currentDate: null
            }
              , n = Object(d.c)(e);
            return Object(T.default)(e, n) ? t.currentDate = e : (t.currentDate = Object(j.default)(e),
            t.adjusted = !0),
            t
        }
        ,
        e.prototype.nextWeek = function() {
            var e = this.persistedState.value.weekDate
              , t = Object(E.default)(e, 1);
            this.changeWeek(t)
        }
        ,
        e.prototype.setWeekPlannerBoxOpen = function(e, t) {
            var n, a = new s.a(this.persistedState.value);
            a.openCourses = Object(r.__assign)(Object(r.__assign)({}, a.openCourses), ((n = {})[e] = !!t || void 0,
            n)),
            a.save()
        }
        ,
        e.prototype.setDayOrWeekMode = function(e) {
            var t = new s.a(this.persistedState.value);
            t.mode = e,
            t.save()
        }
        ,
        e.prototype.addCustomGoal = function(e, t) {
            var n = this.createCustomGoal(e, t);
            this.storeNewUserTask(n)
        }
        ,
        e.prototype.addLearningGoalPlaceholder = function(e, t, n) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var o, i, s;
                return Object(r.__generator)(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        return o = Object(c.b)(t),
                        [4, Object(u.c)(e)];
                    case 1:
                        return i = l.sent(),
                        s = Object(r.__assign)({
                            v: 2,
                            id: Object(a.j)(),
                            courseName: e.courseName,
                            learningGoal: e.name,
                            order: Object(a.n)(),
                            dateTime: Object(u.a)(t),
                            validWeeks: [o],
                            selectedStrategies: []
                        }, n),
                        e.step && (s.step = e.step),
                        i && (s.strategyTagIds = [i]),
                        delete s.name,
                        this.storeNewUserTask(s),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getSelectedStrategyToggler = function(e, t) {
            var n = this;
            return Object(a.h)((function(a, o) {
                return Object(r.__awaiter)(n, void 0, void 0, (function() {
                    var n, i, s;
                    return Object(r.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return n = e.placeholderUT,
                            "add" !== o ? [3, 4] : (i = Object(c.d)(t),
                            i.year,
                            i.week,
                            b.a.sendAddStrategyEvent(),
                            n ? [3, 2] : (s = Object(l.m)(Object(l.n)(e.tasks.map((function(e) {
                                return e.strategyTagIds
                            }
                            )).filter((function(e) {
                                return !!e
                            }
                            )))),
                            [4, this.addLearningGoalPlaceholder(e, t, {
                                strategyTagIds: s,
                                selectedStrategies: [a]
                            })]));
                        case 1:
                            return r.sent(),
                            [3, 3];
                        case 2:
                            this.updateTask(n, {
                                selectedStrategies: {
                                    $add: [a]
                                }
                            }, 0),
                            r.label = 3;
                        case 3:
                            return [3, 5];
                        case 4:
                            n && this.updateTask(n, {
                                selectedStrategies: {
                                    $remove: [a]
                                }
                            }, 0),
                            r.label = 5;
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getSelectedStrategyTogglerForWeek = function(e) {
            var t = this
              , n = this.readAllUserTasksForActiveWeek(e)
              , a = this.readWeekTexts(e);
            return function(e, o) {
                var i, s;
                if ("add" === o)
                    return a.toggleSelectedStrategy(e, "add");
                var c = n.filter((function(t) {
                    return t.selectedStrategies && t.selectedStrategies.some((function(t) {
                        return t.id === e.id
                    }
                    ))
                }
                ));
                try {
                    for (var l = Object(r.__values)(c), u = l.next(); !u.done; u = l.next()) {
                        var d = u.value;
                        t.updateTask(d, {
                            selectedStrategies: {
                                $remove: [e]
                            }
                        }, 0)
                    }
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (s = l.return) && s.call(l)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
            }
        }
        ,
        e.prototype.logInsertCoinAssesment = function(e) {
            var t = Object(c.d)(e)
              , n = t.year
              , r = t.week;
            b.a.sendAddEvaluationEvent({
                week: r,
                year: n
            })
        }
        ,
        Object(r.__decorate)([Object(o.g)()], e.prototype, "refine", null),
        Object(r.__decorate)([Object(o.g)()], e.prototype, "readAllV2UserTasks", null),
        Object(r.__decorate)([Object(o.g)()], e.prototype, "readAllUserTasksForActiveWeek", null),
        Object(r.__decorate)([Object(o.g)()], e.prototype, "readWeekDate", null),
        Object(r.__decorate)([Object(o.g)()], e.prototype, "readUserTasksForActiveWeek", null),
        Object(r.__decorate)([Object(o.g)()], e.prototype, "readWeekTexts", null),
        Object(r.__decorate)([Object(o.g)()], e.prototype, "_getTaskMap", null),
        Object(r.__decorate)([p.a, Object(o.g)()], e.prototype, "readSelectedStrategiesForWeek", null),
        Object(r.__decorate)([p.a, Object(o.g)()], e.prototype, "listSelectedStrategiesForLearningGoal", null),
        Object(r.__decorate)([p.a, Object(o.g)()], e.prototype, "readStrategyParts", null),
        Object(r.__decorate)([Object(o.g)()], e.prototype, "getSelectedStrategyToggler", null),
        Object(r.__decorate)([Object(o.g)(), p.a], e.prototype, "getSelectedStrategyTogglerForWeek", null),
        e
    }(), x = function(e) {
        function t(t, n, r, a, o) {
            var i = e.call(this, t) || this;
            return i.favoriteStrategyIds = n,
            i.recoMap = r,
            i.part = a,
            i.db = o,
            i
        }
        return Object(r.__extends)(t, e),
        Object.defineProperty(t.prototype, "isFavorite", {
            get: function() {
                return this.favoriteStrategyIds.includes(this.id)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "myRecommendation", {
            get: function() {
                var e = this.lookupRecoObject();
                return e ? e.type : null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isSavingRecommandation", {
            get: function() {
                return !!this.lookupRecoObject().$meta
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.changeMyRecommendation = function(e) {
            return Object(r.__awaiter)(this, void 0, void 0, (function() {
                var t, n;
                return Object(r.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return e && b.a.sendEvaluateStrategyEvent(),
                        t = this.myRecommendation,
                        console.log(t + "/" + e),
                        e === t ? [3, 2] : (n = this.lookupRecoObject(),
                        null === e ? n && this.db.userStratRecos.delete(n.id) : n ? this.db.userStratRecos.update(n, {
                            type: e,
                            dateTime: Date.now()
                        }) : this.db.userStratRecos.add({
                            id: Object(a.j)(),
                            name: this.recoName,
                            type: e,
                            dateTime: Date.now()
                        }),
                        [4, this.db.saveNow()]);
                    case 1:
                        r.sent(),
                        r.label = 2;
                    case 2:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        Object.defineProperty(t.prototype, "recoName", {
            get: function() {
                var e = this.id;
                return this.part.courseName && this.part.stepOrSubject ? e + ":" + this.part.courseName.toLowerCase() + ":" + this.part.stepOrSubject.toLowerCase() : "" + e
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.lookupRecoObject = function() {
            return this.recoMap.get(this.recoName)
        }
        ,
        Object(r.__decorate)([a.g], t.prototype, "changeMyRecommendation", null),
        t
    }(m)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return p
    }
    ));
    var r, a, o, i, s = n(0), c = n(1), l = n.n(c), u = n(5), d = n(15), p = function(e) {
        var t, n = e.isActive, r = e.isSelected, a = e.rewards, o = e.completed, i = e.missionNumber, s = e.finalMission, c = e.iconBaseUrl, u = e.onClick, d = o ? "/icons/check_complete.png" : "/icons/check_grey.png";
        switch (i) {
        case 1:
            t = c + "/icons/test.png";
            break;
        case 2:
            t = c + "/icons/studying.png";
            break;
        default:
            t = c + "/icons/gold-medal.png"
        }
        var p = a.map((function(e, t) {
            return l.a.createElement(b, {
                key: "mission-" + i + "-rewards-" + e.currency
            }, e.amount, " ", e.currency.toUpperCase())
        }
        ));
        return l.a.createElement(m, {
            finalMission: s,
            completed: o,
            id: "mission-number" + i
        }, l.a.createElement(h, {
            selected: r,
            disabled: !n,
            onClick: n ? u : function() {}
        }, l.a.createElement("img", {
            src: t,
            alt: "mission task"
        })), l.a.createElement(g, {
            finalMission: s
        }, l.a.createElement("img", {
            src: c + d,
            alt: "icon",
            width: "18px",
            height: "18px"
        }), p))
    }, m = u.b.li.withConfig({
        displayName: "RewardItem",
        componentId: "-1dnzjjb"
    })(r || (r = Object(s.__makeTemplateObject)(["\n\tposition: relative;\n\tflex: ", ';\n\t&:before {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tleft: 32px;\n\t\twidth: calc(100% - 31px);\n\t\theight: 2px;\n\t\tbackground-color: ', ";\n\t\tz-index: 0;\n\t}\n"], ["\n\tposition: relative;\n\tflex: ", ';\n\t&:before {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tleft: 32px;\n\t\twidth: calc(100% - 31px);\n\t\theight: 2px;\n\t\tbackground-color: ', ";\n\t\tz-index: 0;\n\t}\n"])), (function(e) {
        return e.finalMission ? 1 : 2
    }
    ), (function(e) {
        return e.completed ? d.a.primary : d.a.grey
    }
    )), h = u.b.div.withConfig({
        displayName: "MissionButton",
        componentId: "-1y3sn36"
    })(a || (a = Object(s.__makeTemplateObject)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 50px;\n\theight: 50px;\n\tpadding: 0;\n\tmargin: 0;\n\tbackground-color: #fff;\n\tborder-radius: 50px;\n\tz-index: 1;\n\tbox-sizing: border-box;\n\tborder: ", ";\n\tcursor: ", ";\n\topacity: ", ";\n\n\timg {\n\t\twidth: 102%;\n\t\theight: 102%;\n\t\tz-index: 0;\n\t}\n"], ["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 50px;\n\theight: 50px;\n\tpadding: 0;\n\tmargin: 0;\n\tbackground-color: #fff;\n\tborder-radius: 50px;\n\tz-index: 1;\n\tbox-sizing: border-box;\n\tborder: ", ";\n\tcursor: ", ";\n\topacity: ", ";\n\n\timg {\n\t\twidth: 102%;\n\t\theight: 102%;\n\t\tz-index: 0;\n\t}\n"])), (function(e) {
        return e.selected ? "4px solid " + d.a.primary : "none"
    }
    ), (function(e) {
        return e.disabled ? "default" : "pointer"
    }
    ), (function(e) {
        return e.disabled ? .3 : 1
    }
    )), g = u.b.div.withConfig({
        displayName: "RewardCheck",
        componentId: "-yyavqg"
    })(o || (o = Object(s.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 0%;\n\tdisplay: flex;\n\talign-items: center;\n\tleft: ", ";\n\twidth: 18px;\n\theight: 100%;\n\tborder-radius: 50%;\n\tz-index: 1;\n\n\timg {\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 0%;\n\tdisplay: flex;\n\talign-items: center;\n\tleft: ", ";\n\twidth: 18px;\n\theight: 100%;\n\tborder-radius: 50%;\n\tz-index: 1;\n\n\timg {\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n"])), (function(e) {
        return e.finalMission ? "100%" : "calc(50% + 9px)"
    }
    )), b = u.b.span.withConfig({
        displayName: "Currency",
        componentId: "-carrig"
    })(i || (i = Object(s.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 75%;\n\tleft: -50%;\n\ttransform: translateX(-30%);\n\twidth: 100px;\n\ttext-align: center;\n\tfont-size: 10px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n"], ["\n\tposition: absolute;\n\ttop: 75%;\n\tleft: -50%;\n\ttransform: translateX(-30%);\n\twidth: 100px;\n\ttext-align: center;\n\tfont-size: 10px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n"])))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return c
    }
    ));
    var r, a = n(0), o = n(1), i = n.n(o), s = n(5), c = function(e) {
        var t, n = e.incomingDate, r = e.iconBaseUrl, a = Date.now(), o = Date.parse(null == n ? void 0 : n.toDateString()), s = Math.ceil((o - a) / 864e5) + " d";
        return i.a.createElement(l, {
            className: "time-left"
        }, i.a.createElement("img", {
            src: r + "/icons/timer.png",
            alt: "timer",
            width: "15px",
            height: "15px"
        }), i.a.createElement("span", null, o - a > 864e5 ? s : (t = Math.max(o - a, 0) / 1e3,
        Math.ceil(t / 3600) + "h"), " kvar"))
    }, l = s.b.div.withConfig({
        displayName: "Wrapper",
        componentId: "-1yujmfw"
    })(r || (r = Object(a.__makeTemplateObject)(["\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tleft: 8px;\n\tdisplay: flex;\n\talign-items: center;\n\tmax-width: 70px;\n\tpadding: 2px 4px;\n\n\tcolor: #000;\n\tbackground-color: #fff;\n\tborder-radius: 11px;\n\t> img {\n\t\tmargin-right: 4px;\n\t}\n\t> span {\n\t\tfont-size: 10px;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n"], ["\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tleft: 8px;\n\tdisplay: flex;\n\talign-items: center;\n\tmax-width: 70px;\n\tpadding: 2px 4px;\n\n\tcolor: #000;\n\tbackground-color: #fff;\n\tborder-radius: 11px;\n\t> img {\n\t\tmargin-right: 4px;\n\t}\n\t> span {\n\t\tfont-size: 10px;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n"])))
}
, , , , , , , , , , function(e) {
    e.exports = JSON.parse('{"addeditsubtask.addSubtask":"Lägg till underuppgift","addeditsubtask.deleteSubtask":"Ta bort underuppgift","addeditsubtask.editSubtask":"Redigera underuppgift","addeditsubtask.nameLabel":"Underuppgiftens namn","calendar.currentDate":"Vecka {week}, {year}","calendar.fullDayEventLocation":"Plats: {location}","calendar.loadCalendarEvents":"Ladda kalenderhändelser...","calendar.loadingCalendar":"Laddar kalendrar... (listar...)","calendar.weekNumber":"V{weekNumber}","common.addDescriptionPlhd":"Lägg till en beskrivning...","common.cancel":"Avbryt","common.changesNotSavedErrorOccured":"För tillfället problem att spara data. Dina ändringar sparades inte.","common.changesNotSavedUnauthorized":"Ändringarna sparades inte p.g.a. otillräcklig behörighet.","common.descriptionLabel":"Beskrivning","common.errorSavingData":"Kunde inte spara.","common.linkLabel":"Länk","common.loading":"Laddar...","common.nameLabel":"Namn","common.emailLabel":"Email","common.groupLabel":"Grupp","common.subjectLabel":"Ämne","common.subjectsLabel":"Ämnen","common.moduleLabel":"Modul","common.modulesLabel":"Moduler","common.subjectTypeLabel":"Pass","common.contentLabel":"Innehåll","common.workpathTab":"Arbetsgång","common.workpathNoWeekPublished":"Inga publicerade veckor","common.dayLabel":"Dag","common.home":"Hem","common.listen":"Lyssna","common.listen_uk":"Listen UK","common.listen_usa":"Listen USA","common.timeLabel":"Tid","common.locationLabel":"Plats","common.selectAllLabel":"Alla","common.save":" Spara","common.saved":" Sparad","common.saving":"Sparar...","common.remove":"Ta bort","common.actions":"Åtgärder","common.copy":"Kopiera","coommon.move":"Fltyta","common.ok":"OK","common.saveAndClose":"Spara och stäng","common.deleteLbl":"Radera...","common.step":"Steg","common.grade":"Årskurs","common.inactivate":"Inaktivera","common.activate":"Aktivera","common.publish":"Publicera","common.finishEditing":"Avsluta redigering","common.finishPreview":"Avsluta förhandsgranskning","common.removeTab":"Ta bort fliken","common.removeBlock":"Ta bort blocket","common.addNewBlock":"Lägg till block","common.versionHistory":"Versionshistorik","common.preview":"Förhandsgranska","common.continueEditing":"Fortsätt redigera","common.viewModeselectedOneWorkpath":"Välj årskurs i listan ovan","common.edit":"Redigera","common.viewEditedVersion":"Visa redigerad version","common.calendarTab":"Schema","common.termplanner":"Terminsplan","common.termOverview":"Terminsöversikt","common.latestAssesments":"Bedömningar","common.goals":"Mål","common.myBaseGroupTab":"Min basgrupp","common.myStudyGroupTab":"Min studiegrupp","common.schoolStudents":"Skolans elever","common.assignmentsTab":"Uppgifter","common.filterByStudent":"Välj elev","common.chooseBasegroup":"Välj basgrupp","common.chooseStudygroup":"Välj studiegrupp","common.latestAssessments":"Senaste bedömningar","common.myLogbook":"Min loggbok","common.assignedPersonLogbook":"{name} loggbok","common.workingCourseVersion":"Arbetsversion","common.manageWorkingVersion":"Hantera arbetsversioner","common.resources":"Resurser","common.showTab":"Visa fliken","common.hideTab":"Dölj fliken","common.search":"Sök","customTask.addWorkGoalPrimarySchoolTitle":"Lägg till eget arbetsmål","customTask.addWorkGoalGymnasiumSchoolTitle":"Lägg till uppgift","customTask.enterNamePlhd":"Ange namn...","learningGoalsLost.overall":"Övergripande","linkDialog.remove":"Ta bort länken","linkDialog.linkText":"Ange länktext","linkDialog.linkUrl":"Ange URL","linkDialog.save":"Skapa länk","linkDialog.edit":"Redigera länk","linkDialog.followLink":"Följ länken:","task.addSubtask":"Lägg till underuppgift","task.editTask":"Redigera uppgift","task.editWorkGoals":"Redigera arbetsmål","task.enterTaskNamePlhd":"Ange uppgiftens namn...","task.removeDeadline":"Ta bort deadline","task.removeThisTask":"Ta bort den här uppgiften","task.removeWorkGoals":"Ta bort arbetsmål","task.setDeadline":"Ange deadline","task.setDeadlineLabel":"Ange deadline...","task.subTasks":"Underuppgifter","task.targetNameLabel":"Arbetsmålets namn","task.taskNameLabel":"Uppgiftens namn","task.whatShouldYouDoPlhd":"Vad ska du göra?","taskList.nextWeekTask":"för nästa vecka (v{week})","taskList.lastWeekTask":"för förra veckan (v{week})","taskList.currentWeekTask":"för vecka {week}","taskList.removeTaskFromWeeklyPlanning":"Ta bort uppgiften från egen veckoplanering {week}","taskList.addTaskToWeeklyPlanning":"Lägg till uppgiften i egen veckoplanering {week}","taskList.goToTask":"Visa uppgiften","termplanner.comments":"Kommentar","termplanner.course":"Kurs","termplanner.edsGoalGrades":"Terminsmål","termplanner.englishLanguage":"Eng","termplanner.swedishLanguage":"Sv/SvA","termplanner.finalStep":"Slutsteg","termplanner.firstTerm":"HT {year}","termplanner.hindiLanguage":"","termplanner.loadingTermplanner":"V.g. vänta medan terminsplaner laddas...","termplanner.modernLanguageFullname":"M.språk","termplanner.mathsFullname":"Matematik","termplanner.noFinalStepAvailable":"Inget slutsteg tillgängligt","termplanner.swedishLanguageFullName":"Svenska","termplanner.englishLanguageFullName":"Engelska","termplanner.maths":"Ma","termplanner.modernLanguage":"M.spr","termplanner.secondTerm":"VT {year}","termplanner.termPlanning":"Terminsplanering","termplanner.weekNumber":"Vecka","termplanner.chartsBoxTitle":"Min progression","tutorNoteDialog.weekComment":"Kommentar för vecka {weekNumber}","test.chooseComponentLabel":"Komponent","test.pageDescription":"Testsida för komponenter till nya startsidan","userTasks.addLearningGoal":"Eget arbetsmål","userTasks.deleteLearningGoal":"Ta bort lärandemålet och dess uppgifter","userTasks.primarySchoolGoals":"Egna lärandemål","userTasks.gymnasiumSchoolGoals":"Övriga uppgifter","userTasks.unassignedTaskSection":"Dag ej vald","weekNotebook.title":"Anteckningar","weekplanner.addLearningGoalGymnasiumSchool":"Rubrik:","weekplanner.addLearningGoalPrimarySchool":"Mål:","weekplanner.addLearningGoalPrimarySchoolTitle":"Lägg till eget lärandemål","weekplanner.addLearningGoalGymnasiumSchoolTitle":"Lägg till rubrik","weekplanner.confirmRemoveLearningObjectives":"Ta bort lärandemål samt {learningGoalsNumber} uppgifter?","weekplanner.copyPreviousWeekTaks":"Kopiera ej klara från föregående vecka","weekplanner.emptyLearningGoalErr":"Lärandemålet kan inte vara tomt","weekplanner.evaluation":"Utvärdering","weekplanner.evaluationDescription":"Reflektion kring din arbetsinsats och dina valda strategier under veckan.Utvärdera i förhållande till dina mål.","weekplanner.learningGoalPrimary":"Eget lärandemål","weekplanner.learningGoalGymnasium":"Uppgift","weekplanner.logBook":"Veckoplanering","weekplanner.nameCannotBeEmpty":"Namnet kan inte vara tomt","weekplanner.nameMustNotBeEmpty":"Namnet får inte vara tomt","weekplanner.strategy":"Egna strategier","weekplanner.strategyAndEvaluation":"Strategi & Utvärdering","weekplanner.strategyDescription":"Hur jag ska göra för att lära mig.","weekplanner.weekNumber":"Vecka {weekNumber}","weekplanner.weekTab":"Vecka","weekplanner.dayTab":"Dag","wysiwyg.bold":"Fetstil","wysiwyg.code":"Programkod","wysiwyg.heading1":"Rubrik 1","wysiwyg.heading2":"Rubrik 2","wysiwyg.heading3":"Rubrik 3","wysiwyg.image":"Infoga bild","wysiwyg.imagePromptMsg":"Ange bildens URL","wysiwyg.italic":"Kursiv","wysiwyg.line":"Vågrät linje","wysiwyg.link":"Infoga länk","wysiwyg.olist":"Ordnad lista","wysiwyg.paragraph":"Paragraf","wysiwyg.quote":"Citat","wysiwyg.strikethrough":"Struken","wysiwyg.ulist":"Punktlista","wysiwyg.underline":"Understruken","wysiwyg.clear":"Rensa formatering","wysiwyg.indent":"Öka indrag","wysiwyg.outdent":"Minska indrag","wysiwyg.tooltip":"Tooltip","wysiwyg.figure":"Figur","wysiwyg.table":"Infoga tabell","wysiwyg.tableInsertColBefore":"Infoga kolumn före","wysiwyg.tableInsertColAfter":"Infoga kolumn efter","wysiwyg.tableDeleteColumn":"Radera kolumn","wysiwyg.tableInsertRowBefore":"Infoga rad före","wysiwyg.tableInsertRowAfter":"Infoga rad efter","wysiwyg.tableDeleteRow":"Radera rad","wysiwyg.tableInsertHeaderRow":"Växla rubrikrad","wysiwyg.tableInsertHeaderCol":"Växla kolumnrubrik","wysiwyg.openCloseDialogTitle":"Configure open-Close content box","wysiwyg.openCloseTitleLabel":"Titel","wysiwyg.openCloseRemoveBox":"Unwrap open-close box","teacherView.coursesViewTitle":"Mina kurser/ uppgifter","teacherView.assignmentsViewTitle":"Inlämningsuppgifter","teacherView.assignmentsViewDescription":"Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder. Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.","teacherView.noUploadedAssignmentsForModule":"No assignments have been uploaded for this module","teacherView.assignmentStudentName":"Elev","teacherView.assignmentFileName":"Filnamn","teacherView.assignmentSubmittedAt":"Inlämnat","teacherView.assignmentReport":"Rapport","teacherView.assignmentGrade":"Nivå","teacherView.noTaskAssignments":"Inga uppdrag uppladdade för denna uppgift","teacherView.notSubmittedAssignments":"Ej lämnat in","teacherView.remindBtn":"Påminn","teacherView.filterByStudygroupsPlaceholder":"Välj undervisningsgrupp","teacherView.emailRemindersSentMsg":"E-postpåminnelsen har skickats","teacherView.sendEmailAtLeastOneRecipientErr":"Minst en elev ska väljas","teacherView.emailReminderInProgress":"Pågående","teacherView.filterByStudent":"Välj elev","teacherView.assignmentTaskName":"Uppgift","teacherView.assignmentTaskDescription":"Beskrivning","teacherView.assignmentTaskDeadline":"Tidsfrist","workpathTab.responsibleTeachersTitle":"Ansvariga lärare","workpathTab.baseGroupsTitle":"Grupper","workpathTab.baseGroupLegend":"Basgrupper:","workpathTab.baseGroupsCreateWorkpathBtn":"Skapa Arbetsgång","workpathTab.addResponsibleTeacher":"Lägg till ansvarig lärare","workpathTab.noGroupsSelected":"Inga grupper har valts","workpath.lectureSubjectType":"Föreläsning","workpath.labSubjectType":"Laboration","workpath.accountingSubjectType":"Redovisning","workpath.seminarSubjectType":"Seminarium","workpath.sampleSubjectType":"Prov","workpath.weekActivityTasks":"Veckans uppgifter","workpath.weekActivityGroup":"Grupp","workpath.weekActivityDone":"Uppgiften klar","workpath.shiftSubjectType":"Arbetspass","workpath.weekActivityTasksInstructions":"Dra och släpp uppgifter här...","workpath.takslistHeader":"Uppgifter","workpath.studyvisitsSubjectType":"Studiebesök","workpath.noWorkpathsFoundForCurrentSchool":"Det finns ännu ingen arbetsgång för denna skola","workpath.listOtherWorkpaths":"Andra arbetsgångar","workpath.createNewWorkpath":"Skapa ny arbetsgång","workpath.createNewWorkpathForCourse":"Koppla en arbetsgång till kursen","workpath.autosavedWarning":"Obs! Arbetsgången autosparas.","workpath.gymnContentLabel":"Lektionsinnehåll","workpath.applyTemplate":"Tillämpa mall","workpath.toInterval":"t.o.m","workpath.copyWorkpath":"Kopiera arbetsgången","workpath.subjectWeekRange":"Välj veckor för moduler","workpath.templateOverlaps":"Veckorna överlappar. Vänligen konrollera raderna.","workpathTab.customGroupLegend":"Grupper","workpathTab.customGroupPlaceholder":"Inga grupper","workpathTab.startWeek":"Startvecka","workpathTab.startPublishedWeek":"Publicerad startvecka","workpathTab.endPublishedWeek":"Publicerad slutvecka","workpathTab.endWeek":"Slutvecka","workpathTab.copyOrMove":"Kopiera eller flytta","workpathTab.removeSelectedRows":"Ta bort valda rader","workpathTab.selectLabel":"Välj","workpathTab.tuitionGroupLegend":"Undervisningsgrupper","workpathTab.linksHeader":"Material","workpathTab.yearGrade":"Årskurs","workpathTab.selectGradesDescription":"Markera den årskurs som arbetsgången gäller","workpath.viewModenoWorkpathsFound":"Det finns ännu ingen arbetsgång för denna kurs","workpathTab.showOnlyNextWeeks":"Visa endast närmsta veckorna...","workpathTab.showAllWeeks":"Visa alla veckor...","strategyBank.categories":"Kategorier","strategyBank.selectedStrategies":"Valda strategier","strategyBank.recommendedStrategies":"Rekommenderade strategier","strategyBank.strategyBankDialogTitle":"Strategibanken","strategyBank.ageGroupTitle":"Åldersgrupp","strategyBank.favouritesCategory":"Favoriter","strategyBank.strategyListTitle":"Valda strategier","strategyBank.closeDialog":"Stäng Strategibanken","strategyBank.editTagsWarning":"Etiketten finns inte längre","strategyBank.editStrategyCourseColumn":"Kurs","strategyBank.editStrategyTagsColumn":"Etiketter","strategyBank.strategyTitle":"Titel","strategyBank.strategyType":"Typ av strategi","strategyBank.deleteImage":"Ta bort befintlig bild","planningTool.addNew":"Ny planering","planningTool.communicationGroups":"Grupp","planningTool.selectGroupsDescription":"Markera de grupper som ska ingå i planeringen","planningTool.week":"Vecka","planningTool.content":"Innehåll","planningTool.task":"Uppgift","planningTool.group":"Grupp","planningTool.newLine":"Ny rad","planningTool.editRow":"Redigera","planningTool.info":"Dag/grupp","planningTool.teacher":"Lärare","planningTool.weekday":"Dag","planningTool.weekNumber":"Vecka {weekNumber}","planningTool.addTeacherComment":"Lägg till lärarkommentar","planningTool.WeekNumberLinks":"Vecka {weekNumber} länkar","planningTool.addNewLink":"Lägg till länk","planningTool.linksTitle":"Titel","planningTool.linksUrl":"Länk","planningTool.showOnlyMineCbx":"Visa endast mina","planningTool.removePlan":"Radera","planningTool.publishBtn":"Publicera...","planningTool.publishFromWeek":"Publicera från och med vecka","planningTool.publishToWeek":"Publicera till och med vecka","planningTool.copyMoveBtn":"Flytta/Kopiera","planningTool.copyBtn":"Kopiera","planningTool.moveBtn":"Flytta","planningTool.mergedStudentViewTitle":"Veckans kommunikationspass","studentAssignmentsTab.assignmentsTitle":"Inlämningsuppgifter","studentAssignmentsTab.notSubmittedAssignmemts":"Nedan finner du dina inlämningsuppgifter","studentAssignmentsTab.submittedAssignments":"Inlämnade uppgifter","courseSettings.defineTaskTags":"Uppgiftstaggar (ange en per rad)","courseSettings.courseNameLbl":"Namn","courseSettings.courseDescriptionLbl":"Beskrivning","courseSettings.courseTypeLbl":"Typ","courseSettings.courseTypeStep":"Stegkurs","courseSettings.courseTypeTheme":"Temakurs","courseSettings.subject":"Ämne","courseSettings.foreignLanguage":"Foreign Language","courseSettings.readspeakerLanguage_fr":"Franska","courseSettings.readspeakerLanguage_es":"Spanska","courseSettings.readspeakerLanguage_de":"Tyska","courseSettings.readspeakerLanguage_en":"Engelska","courseSettings.readspeakerLanguage_ar":"Arabiska","course.introductionTab":"Introduktion","courseSettings.planningLbl":"Planering","courseSettings.planningTab":"Planering","courseSettings.showPlanningChbx":"Show Planning Tab","courseSettings.changePolicy":"Ändringspolicy","courseSettings.policyAllowSchoolsCreateTabs":"Tillåt skolor skapa egna flikar","courseSettings.policyAllowSchoolsHideStandardTabs":"Tillåt skolor dölja standardflikar","courseSettings.policyAllowSchoolsChangeTAbsOrder":"Tillåt skolor ändra ordningen mellan standardflikar","courseSettings.yearGrades":"Årskurskopplingar","courseSettings.grade":"Årskurs {yearGrade}","courseSettings.linkedTopics":"Kopplade ämnen","courseSettings.mySubjects":"Mina ämnen","courseSettings.yearGradeDescriptionText":"Denna inställning styr vilka elever som ska se kursen under {MySubjects}","courseSettings.courseBlockTitle":"Kursblock","courseSettings.chooseCourseGrade":"Välj årskurser","courseSettings.defineTaskTag":"Uppgiftstaggar (ange en per rad)","courseSettings.courseBannerInfo":"You can also add an image by dragging and dropping it on the course banner at the top of this page.","courseSettings.courseBannerLbl":"Course banner","spTabSettings.introTab":"Introduktionsflik","spTabSettings.runUpTab":"Upptaktsflik","spTabSettings.subjectTab":"Ämnesflik","spTabSettings.missionTab":"Uppdragsflik","spTabSettings.contentTab":"Generell flik","spTabSettings.teacherTab":"Lärarsida","spTabSettings.wordbankTab":"Ordbank","spTabSettings.workpathTab":"Arbetsgång","spTabSettings.tabTypeLbl":"Flikens typ","spTabSettings.tabNameLbl":"Flikens namn","spTabSettings.createSchoolVersionOfCourse":"Skapa skolans version av kursen","spTabSettings.tabDescription":"Inställningar för fliken {tabName}","courseContent.richText":"Textruta","course.editedBy":"Senast redigerad av {modifiedBy} / {date}","courseContent.youtubMovie":"Youtube film","courseContent.learningGoals":"Lärandemål och uppgifter","courseContent.resourceList":"Resurslista","courseContent.embeddedHtml":"Inbäddad HTML","courseContent.wordBank":"Ordbank","courseContent.wordBankName":"Ordbank namn","courseContent.wordBankSourceLanguage":"Source","courseContent.wordBankTargetLanguage":"Target","courseContent.allowEditing":"Tillåt redigering","courseContent.commonLearningGoalsSettings":"Ange de gemensamma lärandemålen. Ange ett lärandemål per rad.","courseContent.commonLearningTaskSettings":"Ange ett lärandemål per rad.","learningTaskSettings.learningGoalsAndTasks":"Lärandemål och uppgifter","learningTaskSettings.setCommonLearningGoals":"Specificera gemensamma lärandemål för samtliga uppgifter","learningTaskSettings.addNewLearningGoal":"Lägg till lärandemål","learningTaskSettings.aipOnlyLearningGoals":"","courseContent.addNewRichTextContent":"Lägg till text","courseContent.addNewYoutubeMovieContent":"Lägg till youtube film","courseContent.addNewLearningGoalsContent":"Lägg till lärandemål och uppgifter","courseContent.addNewReasourceListContent":"Lägg till resurslista","courseContent.addNewEmbeddedHtmlContent":"Lägg till inbäddad HTML","courseContent.addNewWordbankContent":"Lägg till ordbank","courseContent.learningGoalsContentAddTask":"Lägg till egen uppgift","courseContent.learningGoalsContentAddTaskOnlyLg":"","courseContent.knowledgeRequirements":"Kunskapskrav","courseContent.centralContent":"Centralt innehåll","courseContent.abilities":"Förmågor","courseContent.learningGoalsContentAddTaskKedStaff":"Lägg till uppgift","courseContent.addNewResource":"Lägg till resurs","spAdmin.title":"Ämnesplaneraren Admin","spAdmin.createStandardCourse":"Skapa standardkurs","spAdminTabs.addNew":"Ny flik","spAdminTabs.settings":"Settings","spaAdminTabs.tabName":"Fliknamn","deltaView.globalUnpublishedChangesTitle":"Opublicerade kursövergripande ändringar","deltaView.undoGlobalChanges":"Ångra kursövergripande inställningar","deltaView.unpublishedChangesTitle":"Opublicerade ändringar i {label}","deltaView.undoChanges":"Ångra ändringarna i {label}","deltaView.noChangesToPublish":"Det finns inga ändringar att publicera.","deltaView.acceptedProp":"Påslaget","deltaView.rejectedProp":"Avslaget","deltaView.elementarySchoolProp":"Grundskola","deltaView.gymnasiumSchoolProp":"Gymnasieskola","deltaView.exerciseProp":"Övningsuppgift","deltaView.taskProp":"Uppgift","deltaView.assignmentProp":"Inlämningsuppgift","deltaView.themeCourseProp":"Temakurs","deltaView.stepCourseProp":"Stegkurs","courseContent.alloweHide":"Tillåt dölja rutan","courseBanner.changeSchoolLabel":"Växla skola","extraPageButtons.readingRuler":"Läslinjal","extraPageButtons.timer":"Timer","extraPageButtons.errorReport":"Felanmäl","deltaView.courseBlockEntity":"kursblock","deltaView.courseContentsEntity":"innehållsruta","deltaView.courseInstancesEntity":"kurs","deltaView.courseTabsEntity":"flik","deltaView.schoolsEntity":"skola","deltaView.tasksEntity":"uppgift","deltaView.groupEntity":"grupp","deltaView.contentAdded":"Tillagd innehållsruta","deltaView.tabAdded":"Tillagd flik","deltaView.blockAdded":"Tillagd block","deltaView.abilitiesAdded":"Tillagd förmåga","deltaView.centralContentAdded":"Tillagt centralt innehåll","deltaView.knowledgeReqAdded":"Tillagt kunskapskrav","deltaView.taskAdded":"Tillagd uppgift","deltaView.groupAdded":"Tillagd grupp","deltaView.tabDeleted":"Borttagen flik","deltaView.blockDeleted":"Borttaget block","deltaView.abilitiesDeleted":"Borttagen förmåga","deltaView.centralContentDeleted":"Borttaget centralt innehåll","deltaView.knowledgeReqDeleted":"Borttaget kunskapskrav","deltaView.taskDeleted":"Borttagen uppgift","deltaView.groupDeleted":"Borttagen grupp","deltaView.tabHidden":"Dold flik","deltaView.blockHidden":"Dolt block","deltaView.abilitiesHidden":"Dold förmåga","deltaView.centralContentHidden":"Dolt centralt innehåll","deltaView.knowledgeReqHidden":"Dolt kunskapskrav","deltaView.taskHidden":"Dold uppgift","deltaView.groupHidden":"Dold grupp","deltaView.commonLearningGoalPropChanged":"Ändrade gemensamma lärandemål","deltaView.contentPropChanged":"Ändrad innehållstext","deltaView.assignmentPropChanged":"Ändrad flagga för inlämningsuppgift","deltaView.allowReorderTabsPropChanged":"Ändrat om det ska va tillåtet att ändra ordning på flik","deltaView.allowRemoveTabsPropChanged":"Ändrat om borttagning av flik ska vara tillåtet","deltaView.allowAddTabsPropChanged":"Ändrat om tillägg av flik ska vara tillåtet","deltaView.createdByPropChanged":"Skapad av","deltaView.createdDatePropChanged":"Skapad datum","deltaView.endDateTimePropChanged":"Ändat datum / tid","deltaView.deadlinePropChanged":"Ändrat inlämningsdatum","deltaView.descriptionPropChanged":"Ändrad beskrivning","deltaView.embeddedHtmlPropChanged":"Lagt till inbäddad HTML","deltaView.fututureAbilitPropChanged":"Ändrade framtidsförmågor","deltaView.commonLgPropChanged":"Ändrad inställning för gemensamma lärandemål","deltaView.hiddenPropChanged":"Ändrad flagga \'gömd\'","deltaView.hiddenTaskPropChanged":"Ändrat listan på gömda uppgifter","deltaView.htmlPropChanged":"Ändrat innehåll","deltaView.learningGoalPropChanged":"Lärandemål","deltaView.learningGoalsPropChanged":"Ändrade lärandemål","deltaView.lockDeletePropChanged":"Ändrat flagga: \'lås från borttagning\'","deltaView.lockedPropChanged":"Ändrad flagga: \'förbjud ändring av flikar\'","deltaView.migratedTextsPropChanged":"Ändringar i migrerade texter från skolverket","deltaView.modifiedByPropChanged":"Ändrad av","deltaView.modifiedDatePropChanged":"Ändringsdatum","deltaView.modifiedTaskOrderPropChanged":"Ändrad ordning på uppgifter","deltaView.namePropChanged":"Ändrat namn","deltaView.orderPropChanged":"Ändrad ordning","deltaView.resourcePropChanged":"Ändrade i resurser","deltaView.schoolPropChanged":"Skola","deltaView.sendToUrkungPropChanged":"Ändrat flagga \'Skicka till urkund\'","deltaView.stepNumberPropChanged":"Stegnummer","deltaView.stepNumbersPropChanged":"Stegnummer","deltaView.subjectPropChanged":"Ämne","deltaView.subjectsPropChanged":"Ämnen","deltaView.tabClassPropChanged":"Typ av flik","deltaView.tabTitlePropChanged":"Fliknamn","deltaView.taskTypePropChanged":"Uppgiftstyp","deltaView.urlPropChanged":"Url","deltaView.workingProcedurePropChanged":"Arbetsprocess","deltaView.youtubeIdPropChanged":"Youtube ID","deltaView.itemAdded":"Tillagt objekt","deltaView.itemRemoved":"Borttaget objekt","deltaView.linkUndoed":"Ångrad länkning","deltaView.internalChangesProps":"Ändringar i interna egenskaper","deltaView.contentDeleted":"Borttagen innehållsruta","deltaView.contentHidden":"Dold innehållsruta","resource.edited":"Resursen/Länken redigerades senast","resource.createdAt":"Resursen/Länken redigerades senast {date} av","resource.removeResource":"Ta bort resurs/länk","task.introductionEditorDescription":"(Skriv en introduktion till uppgiften)","task.taskEditorDescription":"Skriv in en kort förklaring, max {maxCharacters} tecken, vad uppgiften går ut på.","task.taskName":"Uppdragets namn:","task.taskMissionTaskName":"Uppgiftens namn:","task.taskLearningGoals":"Lärandemål","task.chooseTaskType":"Uppgiftstyp","task.exerciseType":"Övningsuppgift","task.taskType":"Uppgift","task.assignmentType":"Inlämningsuppgift","task.submissionDate":"Inlämningsdatum","task.deleteSubmissionDate":"Ta bort inlämningsdatum","task.chooseTemplate":"Välj mall:","task.noTemplateFile":"Ingen mall","task.templateTextFile":"Textdokument","task.templateSpreadsheetFile":"Kalkylark","task.templatePresentationFile":"Presentation","task.templateChooseFile":"Välj fil","task.checkWithUrkund":"Skicka inlämningar till Urkund","task.introductionEditorTitle":"Introtext","task.workingProcedure":"Arbetsprocess","task.ordbankLink":"Länka till ordbank","task.resursLank":"Resurs länk","task.resursLankUrl":"Ange länkens URL för resursen","task.embeddedMaterial":"Inbäddat material","task.embeddedMaterialTooltip":"Klipp in HTML kod nedan","task.embeddedMaterialAddNew":"Lägg till inbäddat material","task.deleteTaskBtn":"Ta bort uppgiften","task.hidenTaskBtn":"Dölj uppgiften","task.delteTaskConfirmation":"Denna åtgärd går inte att ångra. Radera uppgiften?","task.removeTaskBtn":"Radera uppgiften","task.returnToTab":"Återgå till fliken","task.note":"Observera","task.assignmentNotIncludedInCurrentCourse":"Denna uppgift är inte med i skolans variant av kursen.","task.addTaskToLogbook":"Lägg till uppgiften i loggboken","task.removeTaskFromLogbook":"Ta bort uppgiften från loggboken","task.createdBy":"Skapad av {name}","task.editedBy":"Redigerad av {name}","task.tagSelector":"Taggning","task.searchTask":"Sök uppgift","task.addTasks":"Lägg till uppgifter","task.learningResources":"Learning resources","task.deleteResourceBtn":"Delete learning resource","task.contentType":"Content type","task.url":"URL","task.learningResourceName":"Resource name","task.addLearningResource":"Add learning resource","workpath.selectSchoolTeacher":"Välj bland skolans lärare...","workpath.noTeachersAvailable":"Det finns inga fler lärare att välja från","workpath.groupSelectorAlreadyExists":"En basgrupp med samma namn finns redan. Använd ett annat namn","workpath.userSelectorAlreadyExists":"Gruppen finns redan. Använd ett annat namn","workpath.templateTitle":"Mall för arbetsgång","workpath.weekContentDescription":"Denna vecka ska ni arbeta med...","workpath.showHiddenRows":"Visa dolda rader","workpath.deleteWorkpath":"Radera arbetsgång","workpath.confirmDeleteClassrooms":"Genom att ta bort den här arbetsvägen kommer även flera klassrum att raderas. Är du säker?","workpath.editWorkpath":"Redigera Arbetsgång","workpath.dnd.remove":"Ta bort uppgiften från veckan","workpath.dnd.move":"Flytta uppgiften till veckan","workpath.communicationGroups":"Kommunikationsgrupper","workpathDeltaView.unpublishedChanges":"Opublicerade ändringar i arbetsgång","workpathDeltaView.revertChanges":"Ångra samtliga ändringar","workpathDeltaView.noChangesToPublish":"Det finns inga ändringar att publicera.","workpathDeltaView.startWeekChanged":"Ändrad startvecka: {startWeek}","workpathDeltaView.endWeekChanged":"Ändrad slutvecka: {endWeek}","workpathDeltaView.descriptionUpdated":"Uppdaterad beskrivning","workpathDeltaView.taskDeadlineChanged":"Ändrad deadline för uppgift","workpathDeltaView.baseGroupsAdded":"Tillagda basgrupper","workpathDeltaView.baseGroupsRemoved":"Borttagna basgrupper","workpathDeltaView.teacherAdded":"Tillagda lärare","workpathDeltaView.teacherRemoved":"Borttagna lärare","workpathDeltaView.teacherRemovedDetails":"Tog bort en eller flera lärare från arbetsgången","workpathDeltaView.baseGroupsChangedForTeacher":"Ändrade basgrupper för {teacherName}","workpathDeltaView.emailChangedForTeacher":"Ändrad e-post för lärare","workpathDeltaView.emailChangedForTeacherDetails":"Ny e-post: {email}","workpathDeltaView.renamedTeacher":"Ändrat namn på lärare","workpathDeltaView.teacherNewName":"Nytt namn: {nm}","workpathDeltaView.subjectModifiedForTeacher":"Ändrade ämnen för {name}","workpathDeltaView.subjectModifiedForTeacherDetails":"Nya ämnen: {subjects}","workpathDeltaView.addClasrooms":"Tillagda classrooms","workpathDeltaView.removeClassrooms":"Borttagna klassrum","workpathDeltaView.deleteClassrooms":"Tog bort klassum","workpathDeltaView.removedGroups":"Borttagna grupper från {classroomName}","workpathDeltaView.addedGroups":"Tillagda grupper i {classroomName}","workpathDeltaView.renamedClassrom":"Ändrat namn på klassrum","workpathDeltaView.clasroomNewName":"Nytt namn: {newName}","workpathDeltaView.newWeeksAndActivities":"Nya veckor och aktiviteter","workpathDeltaView.newWeeksAndActivitiesDetails":"Vecka {weekNumber} med {activities} aktiviteter","workpathDeltaView.weekUpdated":"Vecka {weekNumber}","workpathDeltaView.weekUpdatedDetails":"Ändrade beskrivning till: <p>{description}</p>","workpathDeltaView.addedTasksThisWeek":"Lade till uppgifter i vecka {week}","workpathDeltaView.removedDataFromWeek":"Tog bort uppgifter från vecka {week}","workpathDeltaView.changedGroupFilterForTask":"Ändrade gruppfilter för uppgift","workpathDeltaView.deadlineChangedForTask":"Ändrad deadline för uppgift","workpathDeltaView.deadlineChangedForTaskDetails":"Ändrade deadline till: {date}","workpathDeltaView.addedActivitiesDetails":"Lade till aktiviteter","workpathDeltaView.removedActivitiesDetails":"Tog bort aktiviteter","workpathDeltaView.weekActivitiesWeekSubject":"Vecka {weekNumber} {subject}","workpathDeltaView.activityLectureTypeChanged":"Ändrade pass till {type}","workpathDeltaView.activityLocationChanged":"Ändrade plats till {location}","workpathDeltaView.activityGroupFilterChanged":"Ändrade gruppfilter för {lectureType} {location}","workpathDeltaView.activitySubjectChanged":"Ändrade ämne till {newSubject}","workpathDeltaView.groupFilterRemoved":"Gruppfilter borttaget","workpathDeltaView.newGroupFilter":"Nytt gruppfilter: {filters}","workpathDeltaView.weekActivitiesChangedTime":"Ändrade tid till {newTime}","workpathDeltaView.weekActivitiesRemovedTime":"Tog bort tidsangivelsen","workpathDeltaView.changedDayOfTheWeekTo":"Ändrade veckodag till {weekDays}","workpathDeltaView.removedDayOfTheWeek":"Tog bort veckodagsangivelsen","common.schoolYear":"Läsår","common.unnamed":"Namnlös","common.removeGroup":"Radera grupp","common.members":"Medlemmar","common.changesNeedsToBeSavedMsg":"Förändringar behöver sparas innan fönstret stängs!","common.nothingToSave":"Inget att spara...","common.add":"Lägg till:","common.addNewGroup":"Ny grupp","common.course":"Kurs","common.yearGrade":"Årskurs","common.when":"När","common.textEditorMaxChars":"Texten innehåller {numChars} av max {maxChars} tillåtna tecken","common.strategies":"Strategier","versionHistory.revision":"Revision","versionHistory.dateOrTime":"Datum och tid","versionHistory.publisher":"Publicerare","versionHistory.numChanges":"Antal ändringar","workpathTab.addNewWorkpath":"Lägg till arbetsgång","workpathTab.workpathListTitle":"Arbetsgångar","workpathTab.showOnlyMine":"Visa endast mina","workpathTab.tabDescription":"Arbetsgångar syns inte på standardkursen - de kan bara skapas genom att redigera kursen för en viss skola.","task.defaultSchoolName":"Kunskapsskolan i Sverige","task.hiddenTasksList":"Dolda uppgifter i {name}","spTabSettings.addMultipleWorkpaths":"Använd multipla arbetsgångar","spTabSettings.allowWorkpathCommunicationGroup":"Enable workpath communication groups","tooltip.remove":"Ta bort tooltip","tooltip.testTooltip":"Testa tooltip:","tooltip.editTooltip":"Redigera tooltip","tooltip.saveTooltip":"Skapa tooltip","tooltip.enterTooltip":"Ange tooltip","tooltip.enterText":"Ange text","task.migrateToTaskContents":"Migrera uppgift","goals.ultimateGoal":"Slutmål","manageNameDrafts.editWorkingVersion":"Redigera arbetsversion","manageNameDrafts.createNewWorkingVersion":"Skapa ny arbetsversion","manageNameDrafts.workingVersionCreated":"Arbetsversionen skapades {date} av","manageNameDrafts.removeWorkingVersion":"Ta bort arbetsversion","manageNameDrafts.confirmRemoveWorkingVersion":"Arbetsversionen {draftName} innehåller {changes} ändringar. Ta bort ändå? <p>Bekräfta genom att ange arbetsversionens namn:</p>","manageNameDrafts.removeWorkingVersionFailed":"Bekräftelse misslyckades. Arbetsversionen med namn {draftName} togs inte bort.","manageNameDrafts.workingVersionRemoved":"Arbetsversionen med namn {draftName} har raderats.","notificationBanner.conflictModeMessage":"Standardversionen av kursen har ändrats. Kontrollera de delar som är markerade med orange.","notificationBanner.exitConflictMode":"Dölj konfliktläge","notificationBanner.conflictsSolved":"Alla konflikter är nu lösta!","courseViewer.assignment":"Inlämningsuppgift","courseViewer.taskNotListedInWorkpaths":"Denna uppgift är inte listad i någon av dina arbetsgångar","courseViewer.taskNotListedInTermplanTeacher":"Denna uppgift har inte påbörjats av någon av eleverna i dina planeringar","common.missionTabTitle":"Uppdrag","strategyBank.includeSearchContent":"Include Content","strategyBank.ageGroupKindergarten":"4-6","strategyBank.ageGroupPrimary":"7-9","strategyBank.ageGroupGymnasium":"Gymnasium","strategyBank.search":"Search","strategyBank.support":"Felanmälan","strategyBank.deleteCategory":"Delete category","strategyBank.strategyLogo":"Logo","strategyBank.categorySaveDone":"Save done.","strategyBank.editCategory":"Edit category","figureDialog.edit":"Redigera figur","figureDialog.remove":"Ta bort figuren","figureDialog.insert":"Infoga figur","workshopBooking.select":"Välj","workshopBooking.subject":"Ämne","workshopBooking.teacher":"Lärare","workshopBooking.time":"Tid för WS","workshopBooking.location":"Lokal","workshopBooking.place":"Platser","workshopBooking.reasonNote":"Typ","workshopBooking.baseGroup":"Basgrupp","workshopBooking.name":"Namn","workshopBooking.absence":"Frånvaro","workshopBooking.reason":"Uppgift","workshopBooking.tasks":"Arbetsuppgifter","workshopBooking.note":"Notering","workshopBooking.empty":"--","workshopBooking.chooseWorskshop":"Välj WS","workshopBooking.reportedAbsent":"Anmäld frånvarande","workshopBooking.lateArrival":"Sen ankomst","workshopBooking.free":"Ledig","workshopBooking.infoMessage":"(Denna tabell kopplas till vald WS ovan)","workshopBooking.numberOfSeats":"Antal platser","workshopBooking.duration":"Dela upp tid","workshopBooking.attendance":"Närvaro/anmälda","workshopBooking.cancelWorkshop":"Cancel workshop","workshopBooking.uncancelWorkshop":"Un-cancel workshop","workshopBooking.convertToWorkshop":"Convert to workshop","workshopBooking.convertToLesson":"Convert to lesson","workshopReason.subjectLabel":"Ämne","workshopReason.taskLabel":"Uppgift","workshopReason.helpLabel":"Hjälp","workshopReason.ownWorkLabel":"Eget arbete","common.embedContent":"Embed content","ksAcademy.title":"Baskurs","wordbankContent.convertFromTemplate":"Convert from template","wysiwyg.openCloseAction":"Open-close"}')
}
, function(e) {
    e.exports = JSON.parse('{"addeditsubtask.deleteSubtask":"Delete subtask","addeditsubtask.editSubtask":"Edit subtask","addeditsubtask.nameLabel":"Name of subtask","addeditsubtask.addSubtask":"Add sub-task","calendar.currentDate":"Week {week}, {year}","calendar.fullDayEventLocation":"Place: {location}","calendar.loadCalendarEvents":"Load calendar events...","calendar.loadingCalendar":"Loading calendars... (listing...)","calendar.weekNumber":"W{weekNumber}","common.addDescriptionPlhd":"Add description...","common.cancel":"Cancel","common.saveAndClose":"Save and close","common.changesNotSavedErrorOccured":"An error occured while saving data. Your changes were not saved.","common.changesNotSavedUnauthorized":"The changes were not saved due to insufficient authority","common.descriptionLabel":"Description","common.errorSavingData":"An error occured while saving data.","common.linkLabel":"Link","common.loading":"Loading...","common.nameLabel":"Name","common.emailLabel":"Email","common.groupLabel":"Group","common.subjectLabel":"Subject","common.subjectsLabel":"Subjects","common.moduleLabel":"Module","common.modulesLabel":"Modules","common.contentLabel":"Content","common.subjectTypeLabel":"Session","common.workpathTab":"Workpath","common.workpathNoWeekPublished":"There\'s no week published","common.dayLabel":"Day","common.timeLabel":"Time","common.locationLabel":"Place","common.save":" Save","common.selectAllLabel":"All","common.saved":" Saved","common.saving":"Saving","common.remove":"Delete","common.actions":"Actions","common.copy":"Copy","coommon.move":"Move","common.delete":"Delete...","common.step":"Step","common.grade":"Grade","common.inactivate":"Inactivate","common.activate":"Activate","common.publish":"Publish","common.finishEditing":"Finish editing","common.finishPreview":"End preview","common.removeTab":"Remove tab","common.removeBlock":"Remove block","common.addNewBlock":"Add block","common.versionHistory":"Version History","common.preview":"Preview","common.continueEditing":"Continue editing","common.edit":"Edit","common.calendarTab":"Calendar","common.termplanner":"Term planner","common.viewEditedVersion":"View edited version","common.termOverview":"Term overview","common.latestAssesments":"Latest assesments","common.goals":"Goals","common.myBaseGroupTab":"My basegroups","common.myStudyGroupTab":"My studygroups","common.schoolStudents":"School students","common.assignmentsTab":"Assignments","common.filterByStudent":"Choose student","common.chooseBasegroup":"Choose base group","common.chooseStudygroup":"Choose study group","common.latestAssessments":"Latest assessments","common.myLogbook":"My logbook","common.assignedPersonLogbook":"{name} logbook","common.resources":"Resources","common.showTab":"Show tab","common.hideTab":"Hide tab","common.home":"Home","common.search":"Search","common.listen":"Listen","common.listen_uk":"Listen UK","common.listen_usa":"Listen USA","customTask.addWorkGoalPrimarySchoolTitle":"Add own working goal","customTask.addWorkGoalGymnasiumSchoolTitle":"Add own working goal","customTask.enterNamePlhd":"Enter Name...","learningGoalsLost.overall":"Overall","task.addSubtask":"Add subtask","task.editTask":"Edit task","task.editWorkGoals":"Edit working goal","task.enterTaskNamePlhd":"Enter the name of task...","task.removeDeadline":"Delete deadline","task.removeThisTask":"Delete this task","task.removeWorkGoals":"Delete working goal","task.setDeadline":"Set deadline","task.setDeadlineLabel":"Set deadline...","task.subTasks":"Subtasks","task.targetNameLabel":"Name of working goal","task.taskNameLabel":"Name of task","task.whatShouldYouDoPlhd":"What should you do?","taskList.nextWeekTask":"for next week (w{week})","taskList.lastWeekTask":"for last week (w{week})","taskList.currentWeekTask":"for week {week}","taskList.removeTaskFromWeeklyPlanning":"Delete task from your weekly planning {week}","taskList.addTaskToWeeklyPlanning":"Add task to your weekly planning {week}","taskList.goToTask":"Visa uppgiften","task.migrateToTaskContents":"Migrate task","termplanner.comments":"Comments","termplanner.course":"Theme course","termplanner.edsGoalGrades":"Term goals","termplanner.englishLanguage":"Eng","termplanner.finalStep":"Final Step","termplanner.firstTerm":"T1 {year}","termplanner.hindiLanguage":"Hindi","termplanner.ict":"ICT","termplanner.loadingTermplanner":"Loading Termplanner","termplanner.maths":"Maths","termplanner.modernLanguage":"MFL","termplanner.noFinalStepAvailable":"No final step available","termplanner.secondTerm":"T2 {year}","termplanner.termPlanning":"Term planner","termplanner.weekNumber":"Week","termplanner.chartsBoxTitle":"Progress Charts","termplanner.yoga":"Yoga","tutorNoteDialog.weekComment":"Note for week {weekNumber}","test.chooseComponentLabel":"Component","test.pageDescription":"Test page for the components on the starting page","url.remove":"Remove link","userTasks.addLearningGoal":"Own working goal","userTasks.deleteLearningGoal":"Delete learning goal and its tasks","userTasks.primarySchoolGoals":"Own learning goal","userTasks.gymnasiumSchoolGoals":"Own learning goal","userTasks.unassignedTaskSection":"Unassigned","weekNotebook.title":"Notepad","weekplanner.addLearningGoalGymnasiumSchool":"Goal:","weekplanner.addLearningGoalPrimarySchool":"Goal:","weekplanner.addLearningGoalPrimarySchoolTitle":"Add own learning goal","weekplanner.addLearningGoalGymnasiumSchoolTitle":"Add own learning goal","weekplanner.confirmRemoveLearningObjectives":"Delete learning goal and {learningGoalsNumber} tasks?","weekplanner.copyPreviousWeekTaks":"Copy from previous week","weekplanner.emptyLearningGoalErr":"The learning goal cannot be empty","weekplanner.evaluation":"Evaluation","weekplanner.evaluationDescription":"Reflection on your work effort and your chosen strategies during the week. Evaluate in relation to your goals.","weekplanner.learningGoalPrimary":"Own learning goal","weekplanner.learningGoalGymnasium":"Own learning goal","weekplanner.logBook":"Week Planner","weekplanner.nameCannotBeEmpty":"Name cannot be empty","weekplanner.nameMustNotBeEmpty":"Name must not be empty","weekplanner.strategy":"Own Strategies","weekplanner.strategyAndEvaluation":"Strategy & Evaluation","weekplanner.strategyDescription":"What I should do to learn","weekplanner.weekNumber":"Week {weekNumber}","wysiwyg.bold":"Bold","wysiwyg.code":"Code","wysiwyg.heading1":"Heading 1","wysiwyg.heading2":"Heading 2","wysiwyg.heading3":"Heading 3","wysiwyg.image":"Insert image","wysiwyg.imagePromptMsg":"Enter the URL of the image","wysiwyg.italic":"Italics","wysiwyg.line":"Horizontal line","wysiwyg.link":"Insert link","wysiwyg.olist":"Ordered list","wysiwyg.paragraph":"Paragraph","wysiwyg.quote":"Quote","wysiwyg.strikethrough":"Strikethrough","wysiwyg.ulist":"Bullet list","wysiwyg.underline":"Underline","wysiwyg.clear":"Remove formatting","wysiwyg.indent":"Increase indentation","wysiwyg.outdent":"Decrease identation","wysiwyg.tooltip":"Tooltip","wysiwyg.figure":"Figure","wysiwyg.table":"Insert table","wysiwyg.tableInsertColBefore":"Insert column before","wysiwyg.tableInsertColAfter":"Insert column after","wysiwyg.tableDeleteColumn":"Delete column","wysiwyg.tableInsertRowBefore":"Insert row before","wysiwyg.tableInsertRowAfter":"Insert row after","wysiwyg.tableDeleteRow":"Delete row","wysiwyg.tableInsertHeaderRow":"Toggle header row","wysiwyg.tableInsertHeaderCol":"Toggle header column","wysiwyg.openCloseDialogTitle":"Configure open-Close content box","wysiwyg.openCloseTitleLabel":"Titel","wysiwyg.openCloseRemoveBox":"Unwrap open-close box","wysiwyg.openCloseAction":"Open-close","teacherView.coursesViewTitle":"My Courses","teacherView.assignmentsViewTitle":"Assignments","teacherView.assignmentsViewDescription":"Here you cand find all the assignments you supervise. Click on the right menu to select course. The details are displayed below. You can open/hide each module.","teacherView.noUploadedAssignmentsForModule":"No assignments have been uploaded for this module","teacherView.assignmentStudentName":"Pupil","teacherView.assignmentFileName":"Filename","teacherView.assignmentSubmittedAt":"Submitted","teacherView.assignmentReport":"Report","teacherView.assignmentGrade":"Grade","teacherView.noTaskAssignments":"No assignments uploaded for this task","teacherView.notSubmittedAssignments":"Not submitted","teacherView.remindBtn":"Remind","teacherView.filterByStudygroupsPlaceholder":"Select study groups","teacherView.emailRemindersSentMsg":"Reminders successfully sent","teacherView.sendEmailAtLeastOneRecipientErr":"At least one student should be selected","teacherView.emailReminderInProgress":"In progress","teacherView.filterByStudent":"Choose student","teacherView.assignmentTaskName":"Task","teacherView.assignmentTaskDescription":"Description","teacherView.assignmentTaskDeadline":"Deadline","workpathTab.responsibleTeachersTitle":"Responsible teachers","workpathTab.baseGroupsTitle":"Groups","workpathTab.baseGroupLegend":"Base groups:","workpathTab.baseGroupsCreateWorkpathBtn":"Create Work Path","workpathTab.addResponsibleTeacher":"Add responsible teacher","workpathTab.noGroupsSelected":"No groups selected","workpath.lectureSubjectType":"Lecture","workpath.labSubjectType":"Lab","workpath.accountingSubjectType":"Presentation","workpath.seminarSubjectType":"Seminar","workpath.sampleSubjectType":"Sample","workpath.studyvisitsSubjectType":"Study Visit","workpath.noWorkpathsFoundForCurrentSchool":"No workpaths found for the current school","workpath.listOtherWorkpaths":"Other Workpaths","workpath.createNewWorkpath":"Create new workpath","workpath.createNewWorkpathForCourse":"Create worpath for current course","workpath.autosavedWarning":"Obs! Workpath is autosaved.","workpath.gymnContentLabel":"Lession content","workpath.weekActivityTasks":"This week\'s tasks","workpath.weekActivityGroup":"Group","workpath.weekActivityDone":"Task due","workpath.weekActivityTasksInstructions":"Drag and drop tasks here...","workpath.takslistHeader":"Tasks","workpath.shiftSubjectType":"Workshop","workpath.applyTemplate":"Apply template","workpath.toInterval":"to","workpath.subjectWeekRange":"Select week interval for module","workpath.templateOverlaps":"Subject weeks range overlaps. Please review selected data.","workpath.communicationGroups":"Communication Groups","workpathTab.customGroupLegend":"Groups","workpathTab.customGroupPlaceholder":"No groups","workpathTab.startWeek":"Start week","workpathTab.endWeek":"End week","workpathTab.copyOrMove":"Copy or move","workpathTab.removeSelectedRows":"Remove selected rows","workpathTab.selectLabel":"Select","workpathTab.linksHeader":"Links","workpathTab.yearGrade":"Grade","workpathTab.showOnlyNextWeeks":"Show only next few weeks...","workpathTab.showAllWeeks":"Show all weeks...","workpathTab.selectGradesDescription":"Mark the grade that will be included in the workpath","workpath.viewModenoWorkpathsFound":"No workpath created for this course, yet","workpath.viewModeselectedOneWorkpath":"Select one grade from the list above","workpath.copyWorkpath":"Copy workpath","strategyBank.categories":"Categories","strategyBank.selectedStrategies":"Selected strategies","strategyBank.recommendedStrategies":"Recommended strategies","strategyBank.strategyBankDialogTitle":"Strategy Bank","strategyBank.favouritesCategory":"Favourites","strategyBank.strategyListTitle":"Strategy List","strategyBank.closeDialog":"Close Strategybank","strategyBank.editTagsWarning":"Options are no longer valid","strategyBank.strategyTitle":"Title","strategyBank.strategyType":"Type of strategy","strategyBank.includeSearchContent":"Include Content","strategyBank.ageGroupTitle":"Age Group","strategyBank.ageGroupKindergarten":"4-6","strategyBank.ageGroupPrimary":"7-9","strategyBank.ageGroupGymnasium":"Gymnasium","strategyBank.search":"Search","strategyBank.support":"Support","strategyBank.deleteCategory":"Delete category","strategyBank.strategyLogo":"Logo","strategyBank.categorySaveDone":"Save done.","strategyBank.editCategory":"Edit category","strategyBank.deleteImage":"Delete existing image","workpathTab.tuitionGroupLegend":"Tuition groups","planningTool.addNew":"Add term planner","planningTool.communicationGroups":"Groups","planningTool.selectGroupsDescription":"Select groups to be included in the planning","planningTool.week":"Week","planningTool.content":"Content","planningTool.task":"Task","planningTool.group":"Group","planningTool.newLine":"New Row","planningTool.editRow":"Edit","planningTool.info":"Day/group","planningTool.teacher":"Teacher","planningTool.weekday":"Day","planningTool.weekNumber":"Week {weekNumber}","planningTool.addTeacherComment":"Add teacher comment","planningTool.WeekNumberLinks":"Week {weekNumber} links","planningTool.addNewLink":"Add new link","planningTool.linksTitle":"Title","planningTool.linksUrl":"Link","planningTool.showOnlyMineCbx":"Show only mine","planningTool.removePlan":"Radera","planningTool.publishBtn":"Publish","planningTool.publishFromWeek":"Publish from week","planningTool.publishToWeek":"Publish to week","planningTool.copyMoveBtn":"Move/Copy","planningTool.copyBtn":"Copy","planningTool.moveBtn":"Move","planningTool.mergedStudentViewTitle":"Week planning","studentAssignmentsTab":"Assignments","studentAssignmentsTab.notSubmittedAssignmemts":"Not submitted assignments","studentAssignmentsTab.submittedAssignments":"Submitted assignments","course.editedBy":"Last edited by {modifiedBy} / {date}","course.introductionTab":"Introduction","courseSettings.defineTaskTags":"Task tab","courseSettings.planningTab":"Planning","courseSettings.courseNameLbl":"Name","courseSettings.courseDescriptionLbl":"Description","courseSettings.courseTypeLbl":"Type","courseSettings.courseTypeStep":"Step course","courseSettings.courseTypeTheme":"Theme course","courseSettings.defineTaskTag":"Define task tags one per line","courseSettings.subject":"Subject","courseSettings.foreignLanguage":"Foreign Language","courseSettings.readspeakerLanguage_fr":"French","courseSettings.readspeakerLanguage_es":"Spanish","courseSettings.readspeakerLanguage_de":"German","courseSettings.readspeakerLanguage_en":"English","courseSettings.readspeakerLanguage_ar":"Arabic","courseSettings.planningLbl":"Planning","courseSettings.showPlanningChbx":"Show Planning Tab","courseSettings.changePolicy":"Change policy","courseSettings.policyAllowSchoolsCreateTabs":"Allow schools to create their own tabs","courseSettings.policyAllowSchoolsHideStandardTabs":"Allow schools to hide standard tabs","courseSettings.policyAllowSchoolsChangeTAbsOrder":"Allow schools to change the order between standard tabs","courseSettings.yearGrades":"Year Grades","courseSettings.grade":"Grade {yearGrade}","courseSettings.linkedTopics":"Linked Topics","courseSettings.yearGradeDescriptionText":"This setting controls which students should see the course below {MySubjects}","courseSettings.mySubjects":"My Subjects","courseSettings.courseBlockTitle":"Course block","courseSettings.chooseCourseGrade":"Assign course grades","courseSettings.courseContentLanguageLabel":"Course content language","courseSettings.arabicText":"Arabic","courseSettings.courseBannerInfo":"You can also add an image by dragging and dropping it on the course banner at the top of this page.","courseSettings.courseBannerLbl":"Course banner","spTabSettings.introTab":"Introduction","spTabSettings.runUpTab":"Introduction","spTabSettings.subjectTab":"Subject","spTabSettings.missionTab":"Mission","spTabSettings.contentTab":"Content","spTabSettings.teacherTab":"Teacher","spTabSettings.wordbankTab":"Wordbank","spTabSettings.workpathTab":"Workpath","spTabSettings.tabTypeLbl":"Tab type","spTabSettings.tabNameLbl":"Tab name","spTabSettings.tabDescription":"Settings for tab {tabName}","spTabSettings.createSchoolVersionOfCourse":"Create school version of the course","courseContent.richText":"Rich text","courseContent.youtubMovie":"Youtube movie","courseContent.learningGoals":"Learning Goals","courseContent.resourceList":"Resource list","courseContent.embeddedHtml":"Embedded Html","courseContent.wordBank":"Wordbank","courseContent.rubric":"Rubric","courseContent.allowEditing":"Allow editing","courseContent.commonLearningGoalsSettings":"Define the common learning objectives.Define one per line","courseContent.commonLearningTaskSettings":"Define one per line","learningTaskSettings.aipOnlyLearningGoals":"OnlyLearaningGoals","rubric.noLearningGoalsDefined":"No learning goals defined for the current course","rubric.title":"Rubric","rubric.learningGoalColumn":"Goal","rubric.level1Text":"Level 1","rubric.level2Text":"Level 2","rubric.level3Text":"Level 3","learningTaskSettings.learningGoalsAndTasks":"Learning goals and tasks","learningTaskSettings.setCommonLearningGoals":"Set common learning goals for all tasks","learningTaskSettings.addNewLearningGoal":"Add new learning goal","courseContent.addNewRichTextContent":"Add text","courseContent.addNewYoutubeMovieContent":"Add youtube video","courseContent.addNewLearningGoalsContent":"Add learning goals","courseContent.addNewReasourceListContent":"Add resource list","courseContent.addNewEmbeddedHtmlContent":"Add html content","courseContent.addNewWordbankContent":"Add new wordbank","courseContent.addNewRubricContent":"Add new rubric","courseContent.learningGoalsContentAddTask":"Add your own task","courseContent.knowledgeRequirements":"Knowledge Requirements","courseContent.centralContent":"Central content","courseContent.abilities":"Abilities","courseContent.learningGoalsContentAddTaskKedStaff":"Add task","courseContent.learningGoalsContentAddTaskOnlyLg":"Add learning resource","courseContent.addNewResource":"Add resource","courseContent.alloweHide":"Allow hide","spAdmin.title":"Subject Planner Admin","spAdmin.createStandardCourse":"Create new standard course","spAdminTabs.$":"Start","spAdminTabs.addNew":"New tab","spAdminTabs.settings":"Settings","spAdminTabs.schools":"Schools","spAdminTabs.subjects":"Subjects","spaAdminTabs.tabName":"Tab name","deltaView.globalUnpublishedChangesTitle":"Unpublished course global changes","deltaView.undoGlobalChanges":"Undo global changes","deltaView.unpublishedChangesTitle":"Unpublished changes in {label}","deltaView.undoChanges":"Undo changes to {label}","deltaView.noChangesToPublish":"No changes to be published","deltaView.acceptedProp":"Accepted","deltaView.rejectedProp":"Rejected","deltaView.elementarySchoolProp":"Ementary school","deltaView.gymnasiumSchoolProp":"Gymnasium school","deltaView.exerciseProp":"Excercise","deltaView.taskProp":"Task","deltaView.assignmentProp":"Assignment","deltaView.themeCourseProp":"Theme course","deltaView.stepCourseProp":"Step course","courseBanner.blockName":"Block {number}","courseBanner.changeSchoolLabel":"Change School","extraPageButtons.readingRuler":"Ruler","extraPageButtons.timer":"Timer","extraPageButtons.errorReport":"Error","deltaView.courseBlockEntity":"course block","deltaView.courseContentsEntity":"content box","deltaView.courseInstancesEntity":"course","deltaView.courseTabsEntity":"tab","deltaView.schoolsEntity":"school","deltaView.tasksEntity":"task","deltaView.groupEntity":"group","deltaView.contentAdded":"Content box added","deltaView.tabAdded":"Tab added","deltaView.blockAdded":"Block added","deltaView.abilitiesAdded":" ","deltaView.centralContentAdded":"Central content added","deltaView.knowledgeReqAdded":"Knowledge requirements added","deltaView.taskAdded":"Task added","deltaView.groupAdded":"Group added","deltaView.tabDeleted":"Tab deleted","deltaView.blockDeleted":"Block deleted","deltaView.abilitiesDeleted":"Skill deleted","deltaView.centralContentDeleted":"Central content deleted","deltaView.knowledgeReqDeleted":"Knowledge requirements deleted","deltaView.taskDeleted":"Task deleted","deltaView.groupDeleted":"Group deleted","deltaView.tabHidden":"Tab hidden","deltaView.blockHidden":"Block hidden","deltaView.abilitiesHidden":"Skill hidden","deltaView.centralContentHidden":"Central content hidden","deltaView.knowledgeReqHidden":"Knowledge requirements hidden","deltaView.taskHidden":"Task hidden","deltaView.groupHidden":"Group hidden","deltaView.commonLearningGoalPropChanged":"Changed common learning objectives","deltaView.contentPropChanged":"Changed content","deltaView.assignmentPropChanged":"Assignment flag changed","deltaView.allowReorderTabsPropChanged":"Changed if change of order for tabs is allowed","deltaView.allowRemoveTabsPropChanged":"Changed if removal of tab should be allowed","deltaView.allowAddTabsPropChanged":"Changed if the addition of a tab should be allowed","deltaView.createdByPropChanged":"Created by ","deltaView.createdDatePropChanged":"Date of creation","deltaView.endDateTimePropChanged":"Changed date / time","deltaView.deadlinePropChanged":"Deadline changed","deltaView.descriptionPropChanged":"Description changed","deltaView.embeddedHtmlPropChanged":"Embeddded html added","deltaView.commonLgPropChanged":"Common learning goals changed","deltaView.hiddenPropChanged":"Flag hidden changed","deltaView.hiddenTaskPropChanged":"List of hidden tasks changed","deltaView.htmlPropChanged":"Content changed","deltaView.learningGoalPropChanged":"Learning goal","deltaView.learningGoalsPropChanged":"Changed learning goal","deltaView.lockDeletePropChanged":"Changed flag: `lock delete`","deltaView.lockedPropChanged":"Changed flag: `Forbid changing tabs`","deltaView.migratedTextsPropChanged":"Changes in migrated texts from the National Agency for Education","deltaView.modifiedByPropChanged":"Edited by","deltaView.modifiedDatePropChanged":"Date of change","deltaView.modifiedTaskOrderPropChanged":"Order of tasks changed","deltaView.namePropChanged":"Name changed","deltaView.orderPropChanged":"Order changed","deltaView.resourcePropChanged":"Resources changed","deltaView.schoolPropChanged":"School changed","deltaView.sendToUrkungPropChanged":" ","deltaView.stepNumberPropChanged":"Step number","deltaView.stepNumbersPropChanged":"Step numbers","deltaView.subjectPropChanged":"Subject","deltaView.subjectsPropChanged":"Subjects","deltaView.tabClassPropChanged":"Type of tab","deltaView.tabTitlePropChanged":"Tab name","deltaView.taskTypePropChanged":"Task type","deltaView.urlPropChanged":"Url","deltaView.workingProcedurePropChanged":"How should it be done?","deltaView.youtubeIdPropChanged":"Youtube changed","deltaView.itemAdded":"Item added","deltaView.itemRemoved":"Deleted item","deltaView.linkUndoed":"Link undone","deltaView.internalChangesProps":"Changes in internal properties","deltaView.contentDeleted":"Content deleted","deltaView.contentHidden":"Content hidden","resource.edited":"The resource / link was edited","resource.createdAt":"The resource / link was last edited at {date}","resource.removeResource":"Delete resource / link","task.introductionEditorDescription":"(Write an introduction to the task)","task.taskEditorDescription":"Enter a short explanation, what the task is about.","task.taskName":"Task name:","task.taskMissionTaskName":"Name of the task:","task.taskLearningGoals":"Learning Goals","task.chooseTaskType":"Task type","task.exerciseType":"Excercise","task.taskType":"Task","task.assignmentType":"Assignment","task.submissionDate":"Submission date","task.deleteSubmissionDate":"Delete submission date","task.chooseTemplate":"Select template:","task.noTemplateFile":"No template","task.templateTextFile":"Text document","task.templateSpreadsheetFile":"Spreadsheet","task.templatePresentationFile":"Presentation","task.templateChooseFile":"Choose file","task.checkWithUrkund":"Send submission to urkund","task.introductionEditorTitle":"Introduction","task.taskCompleteSteps":"How should it be done?","task.taskAssessments":"Task assessment","task.ordbankLink":"Link to dictionary","task.resursLank":"Resource link","task.resursLankUrl":"Enter the resource link URL","task.embeddedMaterial":"Embedded material","task.embeddedMaterialTooltip":"Cut in HTML code below","task.embeddedMaterialAddNew":"Add embedded material","task.deleteTaskBtn":"Delete task","task.hidenTaskBtn":"Hide task","task.delteTaskConfirmation":"This action can not be undone. Delete the task?","task.removeTaskBtn":"Delete task","task.returnToTab":"Return to tab","task.note":"Note","task.assignmentNotIncludedInCurrentCourse":"This assignment is not included in the local version of the course.","task.addTaskToLogbook":"Add task to logbook","task.removeTaskFromLogbook":"Delete the task from the logbook","task.createdBy":"Created by {name}","task.editedBy":"Edited by {name}","task.searchTask":"Search task","task.addTasks":"Add tasks","task.learningResources":"Learning resources","task.deleteResourceBtn":"Delete learning resource","task.contentType":"Content type","task.url":"URL","task.learningResourceName":"Resource name","task.addLearningResource":"Add learning resource","workpath.selectSchoolTeacher":"Choose teacher at the school","workpath.noTeachersAvailable":"No teachers available","workpath.groupSelectorAlreadyExists":"A base group with this name already exists. Please rename it","workpath.userSelectorAlreadyExists":"Group already exists. Please rename it","workpath.templateTitle":"Template","workpath.showHiddenRows":"Show hidden rows","workpath.deleteWorkpath":"Delete workpath","workpath.confirmDeleteClassrooms":"By deleting this workpath, multiple classrooms will be deleted as well. Are you sure?","workpath.editWorkpath":"Edit Workpath","workpath.dnd.remove":"Remove task from week","workpath.dnd.move":"Move task to week","workpath.weekContentDescription":"This week you will work with...","workpathDeltaView.unpublishedChanges":"Unpublished changes in workpath","workpathDeltaView.revertChanges":"Undo all changes","workpathDeltaView.noChangesToPublish":"No changes to publish","workpathDeltaView.startWeekChanged":"Start week changed: {startWeek}","workpathDeltaView.endWeekChanged":"End week changed: {endWeek}","workpathDeltaView.descriptionUpdated":"Description updated","workpathDeltaView.taskDeadlineChanged":"Task deadline updated","workpathDeltaView.baseGroupsAdded":"Base groups added","workpathDeltaView.baseGroupsRemoved":"Base groups removed","workpathDeltaView.teacherAdded":"Added teacher","workpathDeltaView.teacherRemoved":"Removed teacher","workpathDeltaView.teacherRemovedDetails":"One or more teachers removed from workpath","workpathDeltaView.baseGroupsChangedForTeacher":"Basegroups changed for {teacherName}","workpathDeltaView.emailChangedForTeacher":"Email changed for teacher","workpathDeltaView.emailChangedForTeacherDetails":"New email: {email}","workpathDeltaView.renamedTeacher":"Teacher renamed","workpathDeltaView.teacherNewName":"New teacher name: {nm}","workpathDeltaView.subjectModifiedForTeacher":"Subjects changed for {name}","workpathDeltaView.subjectModifiedForTeacherDetails":"New subjects: {subjects}","workpathDeltaView.addClasrooms":"Classrooms added","workpathDeltaView.removeClassrooms":"Classrooms removed","workpathDeltaView.deleteClassrooms":"Classroom deleted","workpathDeltaView.removedGroups":"Removed groups from {classroomName}","workpathDeltaView.addedGroups":"Add groups in{classroomName}","workpathDeltaView.renamedClassrom":"Renamed classrooms","workpathDeltaView.clasroomNewName":"New name: {newName}","workpathDeltaView.newWeeksAndActivities":"New weeks and activities","workpathDeltaView.newWeeksAndActivitiesDetails":"Week {weekNumber} with {activities} activities","workpathDeltaView.weekUpdated":"Week {weekNumber}","workpathDeltaView.weekUpdatedDetails":"Changed description to: <p>{description}</p>","workpathDeltaView.addedTasksThisWeek":"Added tasks this week {week}","workpathDeltaView.removedDataFromWeek":"Deleted data from {week}","workpathDeltaView.changedGroupFilterForTask":"Changed group filter for task","workpathDeltaView.deadlineChangedForTask":"Changed deadline for task","workpathDeltaView.deadlineChangedForTaskDetails":"Changed deadline for task: {date}","weekplanner.addedActivitiesDetails":"Added activities","weekplanner.removedActivitiesDetails":"Removed activities","weekplanner.weekActivitiesWeekSubject":"Weeb {weekNumber} {subject}","weekplanner.activityLectureTypeChanged":"Lecture type changed to {type}","weekplanner.activityLocationChanged":"Changed place to {location}","weekplanner.activityGroupFilterChanged":"Changed group filter for {lectureType} {location}","weekplanner.activitySubjectChanged":"Changed topic to {newSubject}","workpathDeltaView.groupFilterRemoved":"Group filter removed","workpathDeltaView.newGroupFilter":"New group filter: {filters}","workpathDeltaView.weekActivitiesChangedTime":"Changed time to: {newTime}","workpathDeltaView.weekActivitiesRemovedTime":"Time activity removed","workpathDeltaView.changedDayOfTheWeekTo":"Changed day of the week to: {weekDays}","workpathDeltaView.removedDayOfTheWeek":"Weekday removed","common.schoolYear":"School Year","common.unnamed":"Unnamed","common.removeGroup":"Remove group","common.changesNeedsToBeSavedMsg":"Changes need to be saved before the window closes!","common.nothingToSave":"Nothing to save","common.members":"Members","common.add":"Add:","common.addNewGroup":"New group","common.course":"Course","common.yearGrade":"Year Grade","common.when":"When","common.textEditorMaxChars":"The text contains {numChars} of max {maxChars} characters allowed","common.strategies":"Strategies","common.workingCourseVersion":"Current work version","common.manageWorkingVersion":"Manage working versions","versionHistory.revision":"Revision","versionHistory.dateOrTime":"Date and Time","versionHistory.publisher":"Publisher","versionHistory.numChanges":"Number of changes","workpathTab.addNewWorkpath":"Add new workpath","workpathTab.workpathListTitle":"Workpaths","workpathTab.showOnlyMine":"Show only mine","workpathTab.tabDescription":"Workflows are not visible on the standard course - they can only be created by editing the course for a specific school.","task.defaultSchoolName":"Kunskapsskolan Education","task.hiddenTasksList":"Hidden tasks in {name}","task.tagSelector":"Task tag","spTabSettings.addMultipleWorkpaths":"Add multiple workpaths","spTabSettings.allowWorkpathCommunicationGroup":"Enable workpath communication groups","tooltip.remove":"Remove tooltip","tooltip.testTooltip":"Test tooltip:","tooltip.editTooltip":"Edit tooltip","tooltip.saveTooltip":"Save tooltip","tooltip.enterTooltip":"Enter tooltip","tooltip.enterText":"Enter text","linkDialog.remove":"Remove link","linkDialog.linkText":"Enter link text","linkDialog.linkUrl":"Enter URL","linkDialog.save":"Save link","linkDialog.edit":"Edit link","linkDialog.followLink":"Follow link:","goals.ultimateGoal":"Ultimate goal","manageNameDrafts.editWorkingVersion":"Edit working version","manageNameDrafts.createNewWorkingVersion":"Create new version","manageNameDrafts.workingVersionCreated":"Working version create at {date}","manageNameDrafts.removeWorkingVersion":"Remove working version","manageNameDrafts.removeWorkingVersionFailed":"Confirmation failed. The working version named {draftName} was not removed.","manageNameDrafts.workingVersionRemoved":"The working version named {draftName} has been deleted.","common.ok":"OK","notificationBanner.conflictModeMessage":"The standard version of the course has changed. Check the parts marked orange","notificationBanner.exitConflictMode":"Exit confict mode","notificationBanner.conflictsSolved":"All conflicts are now resolved!","courseViewer.assignment":"Assignment","courseViewer.taskNotListedInWorkpaths":"This task is not listed in any of you workpaths","common.missionTabTitle":"Mission","weekplanner.weekTab":"Week","weekplanner.dayTab":"Day","figureDialog.edit":"Edit figure","figureDialog.remove":"Remove figure","figureDialog.insert":"Insert figure","workshopBooking.select":"Select","workshopBooking.subject":"Subject","workshopBooking.teacher":"Teacher","workshopBooking.time":"Time for WS","workshopBooking.location":"Location","workshopBooking.place":"Place","workshopBooking.reasonNote":"Note","workshopBooking.chooseWorskshop":"Choose workshop","workshopBooking.baseGroup":"Base group","workshopBooking.name":"Name","workshopBooking.absence":"Absence","workshopBooking.reason":"Reason","workshopBooking.tasks":"Tasks","workshopBooking.note":"Note","workshopBooking.empty":"--","workshopBooking.reportedAbsent":"Reported absent","workshopBooking.lateArrival":"Late arrival","workshopBooking.free":"Free","workshopBooking.infoMessage":"(This table is linked to the selected WS above)","workshopBooking.numberOfSeats":"Number of seats","workshopBooking.duration":"Duration","workshopBooking.attendance":"Attendance/Registered","workshopBooking.cancelWorkshop":"Cancel workshop","workshopBooking.uncancelWorkshop":"Un-cancel workshop","workshopBooking.convertToWorkshop":"Convert to workshop","workshopBooking.convertToLesson":"Convert to lesson","workshopReason.subjectLabel":"Subject","workshopReason.taskLabel":"Task","workshopReason.helpLabel":"Help","workshopReason.ownWorkLabel":"Own Work","common.embedContent":"Embed content","ksAcademy.title":"KED Academy","courseContent.wordBankName":"Wordbank name","courseContent.wordBankSourceLanguage":"Source","courseContent.wordBankTargetLanguage":"Target","wordbankContent.convertFromTemplate":"Convert from template"}')
}
, function(e) {
    e.exports = JSON.parse('{"adminSubjectsTab.subjectLabel":"Subject","adminSubjectsTab.codeLabel":"Code","adminSubjectsTab.addRow":"Add new","adminSubjectsTab.save":"Save","spAdminTabs.$":"Start","spAdminTabs.addNew":"New tab","spAdminTabs.settings":"Settings","spAdminTabs.schools":"Schools","spAdminTabs.subjects":"Subjects","courseSettings.courseNameLbl":"Name","courseSettings.courseDescriptionLbl":"Description","courseSettings.courseTypeLbl":"Type","courseSettings.courseTypeStep":"Step course","courseSettings.step":"Step","courseSettings.courseTypeTheme":"Theme course","courseSettings.subject":"Subject","courseSettings.foreignLanguage":"Foreign Language","courseSettings.readspeakerLanguage_fr":"French","courseSettings.readspeakerLanguage_es":"Spanish","courseSettings.readspeakerLanguage_de":"German","courseSettings.readspeakerLanguage_en":"English","courseSettings.readspeakerLanguage_ar":"Arabic","courseSettings.planningLbl":"Planning","courseSettings.showPlanningChbx":"Show Planning Tab","courseSettings.changePolicy":"Change policy","courseSettings.policyAllowSchoolsCreateTabs":"Allow schools to create their own tabs","courseSettings.policyAllowSchoolsHideStandardTabs":"Allow schools to hide standard tabs","courseSettings.policyAllowSchoolsChangeTAbsOrder":"Allow schools to change the order between standard tabs","courseSettings.yearGrades":"Year Grades","courseSettings.grade":"Grade {yearGrade}","courseSettings.linkedTopics":"Linked Topics","courseSettings.mySubjects":"My Subjects","courseSettings.yearGradeDescriptionText":"This setting controls which students should see the course below {MySubjects}","courseSettings.courseBlockTitle":"Course block","courseSettings.chooseCourseGrade":"Assign course grades","courseSettings.courseBannerInfo":"You can also add an image by dragging and dropping it on the course banner at the top of this page.","courseSettings.courseBannerLbl":"Course banner","common.activate":"Activate","common.addNewBlock":"Add block","common.continueEditing":"تابِع التعديل","common.deleteLbl":"Delete","common.edit":"تعديل","common.finishEditing":"إنهَاء التعديل","common.finishPreview":"إنهَاء المعاينة الأوليَّة","common.grade":"Year Grade","common.inactivate":"Inactivate","common.preview":"مُعاينة أوليَّة","common.publish":"نشِر","common.publishEn":"Publish","common.removeBlock":"Remove block","common.removeTab":"إزالة تبويب","common.step":"خطوة","common.versionHistory":"تاريخ النسخة","common.viewEditedVersion":"اعرِض النسخة المعدلة","spTabSettings.contentTab":"المحتوى","spTabSettings.createSchoolVersionOfCourse":"اصنَع نسخةَ المدرسة الخاصة لهذا المُقرَّر التعليمي","spTabSettings.introTab":"تبويب المقدمة","spTabSettings.missionTab":"تبويب المهمة","spTabSettings.rubricTab":"تبويب المصفوفة","spTabSettings.runUpTab":"التبويب الأوَّلي","spTabSettings.subjectTab":"تبويب المادة الدراسية","spTabSettings.tabDescription":"ضبط التبويب {tabName}","spTabSettings.tabNameLbl":"إسم التبويب","spTabSettings.tabTypeLbl":"نوع التبويب","spTabSettings.teacherTab":"صفحة المُعلِّم","spTabSettings.wordbankTab":"الكلمات الهامَّة","spTabSettings.workpathTab":"مَسَارُ العمل","courseContent.addNewEmbeddedHtmlContent":"أضِف محتوى HTML ","courseContent.addNewLearningGoalsContent":"أضِف أهداف تعلم","courseContent.addNewReasourceListContent":"أضِف قائمة مصادر","courseContent.addNewResource":"أضِف مصدر","courseContent.addNewRichTextContent":"أضِف نص","courseContent.addNewRubricContent":"أضِف مصفوفة جديدة","courseContent.addNewWordbankContent":"أضِف كلمات هامَّة جديدة","courseContent.addNewYoutubeMovieContent":"أضِف فيديو YouTube","courseContent.allowEditing":"اسمَح بالتعديل","courseContent.embeddedHtml":"HTML مُضْمَن","courseContent.learningGoals":"أهداف و مُهِمَّات التعلم","courseContent.learningGoalsContentAddTask":"أضِف مُهمَّة خاصة بك","courseContent.learningGoalsContentAddTaskKedStaff":"أضِف مٌهِمَّة","courseContent.resourceList":"قائمة المصادر","courseContent.richText":"حَيِّز النص","courseContent.rubric":"المصفوفة","courseContent.wordBank":"الكلمات الهامة","courseContent.youtubMovie":"فلم YouTube","rubric.learningGoalColumn":"الهدف","rubric.level1Text":"المستوى 1","rubric.level2Text":"المستوى 2","rubric.level3Text":"المستوى 3","rubric.noLearningGoalsDefined":"لا توجد أهداف تعلُّميِّة مُعرَّفة لهذا المُقرر التعليمي الحالي","rubric.title":"المصفوفة","learningTaskSettings.addNewLearningGoal":"أضِف هدف تَعَلُّمي جديد","learningTaskSettings.learningGoalsAndTasks":"مُهِمّات و أهداف التعلم","learningTaskSettings.setCommonLearningGoals":"وضع أهداف تَعلُّميِّة عامَّة لجميع المُهِمَّات","deltaView.globalUnpublishedChangesTitle":"تغييرات المُقرَّر التعليمي العامة غير المَنشُورة","deltaView.undoGlobalChanges":"التراجُع عن التغييرات العامة","deltaView.unpublishedChangesTitle":"التغييرات غير المنشورة في {label}","deltaView.undoChanges":"التراجُع عن التغييرات لـ {label}","deltaView.noChangesToPublish":"لا يوجد تغييرات يجب نشرها","deltaView.acceptedProp":"مقبولة","deltaView.rejectedProp":"مرفوضة","deltaView.elementarySchoolProp":"المدرسة الإبتدائية و المتوسطة","deltaView.gymnasiumSchoolProp":"المدرسة الثانوية","deltaView.exerciseProp":"تمرين","deltaView.taskProp":"مُهِمَّة","deltaView.assignmentProp":"واجِب","deltaView.themeCourseProp":"المُوضُوع التعليمي","deltaView.stepCourseProp":"الخُطوَة التعليمية","wysiwyg.bold":"تَضخيم","wysiwyg.code":"تَرميز","wysiwyg.heading1":"تَرويسَة ١","wysiwyg.heading2":"تَرويسَة ٢","wysiwyg.heading3":"تَرويسَة ٣","wysiwyg.image":"صُورة","wysiwyg.imagePromptMsg":"رَابِطُ الصُورَة","wysiwyg.italic":"مائِل","wysiwyg.line":"خطٌّ أُفُقِي","wysiwyg.link":"رَابِط","wysiwyg.olist":"قائمة مُرَتَّبة بإِسْتِخْدَامِ الرُمُوزِ الهِجَائِيِّة أو الرَقَمِيِّة","wysiwyg.paragraph":"فَقَرَة","wysiwyg.quote":"اقْتِبَاس","wysiwyg.strikethrough":"اُشْطُب بِخَط","wysiwyg.ulist":"قائِمَة نُقَطِيِّة","wysiwyg.underline":"تَحْتَهُ خَط","wysiwyg.clear":"إِزالة التنسيق","wysiwyg.indent":"تَكبير الفَراغ لِلمَسَافةِ البَادِئَةِ لِلفَقَرَة","wysiwyg.outdent":"تَصْغِير الفَراغِ لِلمَسَافَةِ البَادِئَةِ لِلفَقَرَة","courseContent.alloweHide":"اسْمَحْ بالصَنَادِيق المَخْفيَّة","courseSettings.courseContentLanguage":"Arabic","courseSettings.courseContentLanguageLabel":"Course content language (by default en will be selected)","courseSettings.arabicText":"Arabic","courseBanner.blockName":"الرُزْمَة {number}","weekplanner.logBook":"مُخَطِّط الأسبوع","weekplanner.weekNumber":"أُسْبُوع {weekNumber}","weekplanner.learningGoalPrimary":"هَدَف التَعلُّم الخَاصِ بِك","weekplanner.strategyAndEvaluation":"اسْتَراتِيجيِّة و تَقْيِيم","weekplanner.emptyLearningGoalErr":"لَا يُمْكِنْ أَنْ يَكُون الهَدَفُ التَعْلِيمي فَارِغَاً","weekplanner.evaluation":"التَقْيِيم","weekplanner.evaluationDescription":"أَفْكَارُكَ الْمُنْعَكِسَة عَن الجُهد المَبذُول و الإسْتَراتِيجيِّات المُخْتَارَة خِلال الأُسْبُوع , قَيِّمْ بِالنِسْبَةِ لِأَهْدَافِك","weekplanner.addLearningGoalPrimarySchool":"الهَدَف::","weekplanner.addLearningGoalPrimarySchoolTitle":"أَضِفْ هَدَفَ التَعَلُّم الخَاصِّ بِك","weekNotebook.title":"مُفَكِّرَة","taskList.addTaskToWeeklyPlanning":"أَضِف مُستوَى لِمُخَطَّطِ الأُسْبُوع الخَاصِّ بِك  {week}","taskList.goToTask":"اعْرِض المُستوَى","taskList.removeTaskFromWeeklyPlanning":"احْذِف مُستوَى مِن مُخَطَّطِ الأُسْبُوع الخَاصِّ بِك  {week}","userTasks.deleteLearningGoal":"احْذِف هَدَف تَعْليمي و المُستوَيات الخَاصَّةِ بِه","userTasks.addLearningGoal":"هَدَفُ العَمَل الخَاص بِك","strategyBank.categories":"فِئَات","strategyBank.selectedStrategies":"الإستراتِيجيَّات المُخْتَارَة","strategyBank.recommendedStrategies":"الإستراتِيجيَّات المُقْتَرَحة","strategyBank.strategyBankDialogTitle":"بَنْكُ الإستراتِيجيَّة","strategyBank.favouritesCategory":"المُفَضَّلَة","strategyBank.strategyListTitle":"قَائِمَة الإستراتِيجيَّات","strategyBank.closeDialog":"أَغْلِق بَنْكَ الإِستراتِيجيَّات","strategyBank.editTagsWarning":"الخَيَارَات لَم تَعُد صَالِحَة","strategyBank.strategyTitle":"العُنْوَان","strategyBank.strategyType":"نَوْع الإستراتِيجيَّة","common.save":" حِفْظ","common.loading":"تَحْمِيل ...","common.nameLabel":"الإِسْم","common.descriptionLabel":"وَصْف","common.addDescriptionPlhd":"أَضِف وَصْف","common.linkLabel":"رَابِط","common.cancel":"إِلغَاء","customTask.enterNamePlhd":"أَدخِل الإِسْم...","customTask.addWorkGoalPrimarySchoolTitle":"أَضِف هَدف العَمَل الخَاصِّ بِك","task.addSubtask":"أَضِف مُستوَى فِرعيّ","task.editTask":"عَدِّل المُستوَى","task.editWorkGoals":"عَدِّل هَدَف العَمَل","task.enterTaskNamePlhd":"أَدخِل إِسم المُستوَى","task.removeDeadline":"اِحذِف المَوعِد النِهَائيّ","task.removeThisTask":"اِحذِف هَذا المُستوَى","task.removeWorkGoals":"اِحذِف هَدف العَمَل","task.setDeadline":"حَدَّد مَوعِداً نِهَائيَّاً","task.setDeadlineLabel":"حَدَّد مَوعِداً نِهَائيَّاً...","task.subTasks":"مُستوَيات فِرعِيَّة","task.targetNameLabel":"إِسم هَدَف العَمَل","task.taskNameLabel":"إِسم المُستوَى","addeditsubtask.deleteSubtask":"اِحْذِف المُستوَى الفِرعيّ","addeditsubtask.nameLabel":"إِسم المُستوَى الفِرعيّ","addeditsubtask.editSubtask":"عَدِّل المُستوَى الفِرعيّ","addeditsubtask.addSubtask":"أَضِف مُستوَى فِرعيّ","taskList.nextWeekTask":"لِأُسبُوع قَادِم (w{week})","taskList.lastWeekTask":"لِآخِر أُسبُوع (w{week})","taskList.currentWeekTask":"لِأُسبُوع {week}","courseBanner.changeSchoolLabel":"غَيِّرْ المَدْرَسَة","extraPageButtons.readingRuler":"مِسْطَرَة","extraPageButtons.timer":"مُؤَقِّت","extraPageButtons.errorReport":"خَطَأ","spAdminTabs.tabName":"إسم التبويب","deltaView.courseBlockEntity":"رُزمَةُ المَادَّة","deltaView.courseContentsEntity":"صُندوق المُحتَوى","deltaView.courseInstancesEntity":"المَادَّة","deltaView.courseTabsEntity":"تَبْويب","deltaView.schoolsEntity":"المَدْرَسة","deltaView.tasksEntity":"مُستوَى","deltaView.groupEntity":"مَجمُوعَة","deltaView.contentAdded":"تَمَّت إضافَة صُندوق مُحتَوى","deltaView.tabAdded":"تَمَّت إِضَافَة التَبويب","deltaView.blockAdded":"تَمَّت إِضَافَة الرُزْمَة","deltaView.centralContentAdded":" ","deltaView.taskAdded":"تَمَّت إِضَافَة المُستوَى","deltaView.groupAdded":"تَمَّت إِضَافَة مَجمُوعَة","deltaView.tabDeleted":"تَمَّ إِلغَاء التَبويب","deltaView.blockDeleted":"تَمَّ حَذفُ الرُزْمَة","deltaView.abilitiesDeleted":"تَمَّ حَذفُ المَهَارَة","deltaView.centralContentDeleted":" ","deltaView.taskDeleted":"تَمَّ إِلغَاء المُستوَى","deltaView.groupDeleted":"تَمَّ حَذف مَجمُوعة","deltaView.tabHidden":"تَمَّ إِخْفَاءُ التَبويب","deltaView.blockHidden":"تَمَّ إِخْفَاءُ الرُزْمَة","deltaView.abilitiesHidden":"تَمَّ إِخْفَاءُ المَهَارَة","deltaView.centralContentHidden":" ","deltaView.taskHidden":"تَمَّ إٍخْفَاء المُستوَى","deltaView.groupHidden":"تَمَّ إِخْفَاءُ المَهَارَة","deltaView.commonLearningGoalPropChanged":"المَطاليب التَعلميَّة المُشتَرَكة المُتَغيِّرة","deltaView.contentPropChanged":"مُحتَوى مُتَغيِّر","deltaView.assignmentPropChanged":"تَمَّ تَغيير عَلامَةُ تَمْييز الوَاجِب","deltaView.allowReorderTabsPropChanged":"سَيَتم التَغيير في حَال سُمِحَ بِتَغيير تَرتيب التَبويبات","deltaView.allowRemoveTabsPropChanged":"سَتَتَغيَّر في حَال وُجِبَ السَّماحُ بِإِزَالَةِ تَبْويب","deltaView.allowAddTabsPropChanged":"سَتَتَغيَّر في حَال وُجِبَ السَّماحُ بِإِضَافَةِ تَبْويب","deltaView.createdByPropChanged":"أُنْشِئَ مِنْ قِبَل","deltaView.createdDatePropChanged":"تَارِيخُ الإِنْشَاء","deltaView.endDateTimePropChanged":"تَارِيخُ الإِنْتِهَاء / الوَقت","deltaView.deadlinePropChanged":"تَمَّ تَغييرُ المَوعِد النِهائِي","deltaView.descriptionPropChanged":"تَمَّ تَغييرُ الوَصف","deltaView.embeddedHtmlPropChanged":"تَمَّت إِضَافَة HTML المُضَمَّن","deltaView.commonLgPropChanged":"تَمَّ تَغيير أَهْدَاف التَعلُّم المُشتَرَكة","deltaView.hiddenPropChanged":"تَمَّ تَغيير عَلامَةُ تَمْييزٍ مَخْفيَّة","deltaView.hiddenTaskPropChanged":"تَمَّ تَغيير قَائِمَةُ بَيَانات مَخْفيَّة","deltaView.htmlPropChanged":"تَمَّ تَغيير المُحتَوى","deltaView.learningGoalPropChanged":"أَهدَافُ التَعلُّم","deltaView.learningGoalsPropChanged":"هَدَفُ التَعلُّم المُتَغيِّر","deltaView.lockDeletePropChanged":"عَلامَةُ التَمييز المُتَغيِّرة : إِقْفَال الحَذف","deltaView.lockedPropChanged":"عَلامَةُ التَمييز المُتَغيِّرة : \'إِمْنَع تَغيير التَبويبات","deltaView.modifiedByPropChanged":"عُدِّلت من قِبَل","deltaView.modifiedDatePropChanged":"تَارِيخُ التَغْيير ","deltaView.modifiedTaskOrderPropChanged":"تَمَّ تَغيير تَرتيب المُهِمَّات","deltaView.namePropChanged":"تَمَّ تَغيير الإِسْم","deltaView.orderPropChanged":"تَمَّ تَغيير التَرتيب","deltaView.resourcePropChanged":"تَمَّ تَغيير المَصَادِر","deltaView.schoolPropChanged":"تَمَّ تَغيير المَدْرَسة","deltaView.sendToUrkungPropChanged":" ","deltaView.stepNumberPropChanged":"رَقَم الخُطوَة","deltaView.stepNumbersPropChanged":"أَرقَامُ الخُطوة","deltaView.subjectPropChanged":"المَوضُوع","deltaView.subjectsPropChanged":"المَوضُوعات","deltaView.tabClassPropChanged":"نَوْع التَبويب","deltaView.tabTitlePropChanged":"إِسم التَبويب","deltaView.taskTypePropChanged":"نَوْع المُستوَى","deltaView.urlPropChanged":"رَابِط","deltaView.workingProcedurePropChanged":"كَيْفَ يُمْكِنُ عَمَلُهُ","deltaView.youtubeIdPropChanged":"تَمَّ تَغيير هُويَّة المُعرِّف الخَاصَّة بـِ YouTube","deltaView.contentDeleted":"تَمَّ حَذْف المُحْتَوى","deltaView.contentHidden":"تَمَّ إِخْفَاء المُحْتَوى","------------new---------":"-----------------","task.introductionEditorDescription":"( اُكْتُب مُقَدِّمَةً لِهَذَا المُسْتَوَى )","task.taskEditorDescription":"Enter a short explanation, max {maxCharacters} characters, what the task is about.","task.taskName":":اسْمُ المُسْتَوَى","task.taskMissionTaskName":"اسْمُ المُسْتَوَى","task.taskLearningGoals":":الأَهدَافُ التَّعلِيميَّة","task.chooseTaskType":"نَوعُ المُستَوَى","task.taskType":"مُسْتَوَى","task.assignmentType":"تَسْلِيم المُستَوَى","task.submissionDate":"تَارِيخُ التَسْلِيم","task.deleteSubmissionDate":"احذِفْ تَاريخَ التَّسلِيم","task.chooseTemplate":"اخْتَر القَالِب","task.noTemplateFile":"بِدُون قَالِب","task.templateTextFile":"وَثيقَةٌ نَصيَّة","task.templateSpreadsheetFile":"جَدْوَل","task.templatePresentationFile":"العَرْض","task.templateChooseFile":"اخَتَر المَلَف","task.checkWithUrkund":"","task.introductionEditorTitle":"مُقَدِّمَة","task.taskCompleteSteps":"كَيْفَ يُمْكِنُ عَمَلُهُ؟","task.taskAssessments":"تَقييم المُسْتَوَيات","task.ordbankLink":"ارْبِطْهَا بِقَائِمَةِ الكَلِمَات","task.resursLank":"رَابِطُ المَصْدَر","task.resursLankUrl":"أَدْخِل العُنْوَان الإِلِكترُونيّ لِرَابِطِ المَصْدَر","task.embeddedMaterial":"مُحْتَوَى مُضْمَن","task.embeddedMaterialTooltip":"أَلصِقْ تَرمِيزَ HTML أَدْنَاه","task.embeddedMaterialAddNew":"اضَافَةُ مُحْتَوَى مُضْمَن","task.deleteTaskBtn":"احْذِف المُسْتَوَى","task.hidenTaskBtn":"إِخْفَاءُ المُسْتَوَى","task.delteTaskConfirmation":"لا يُمْكِنُ التَرَاجُعُ عَنْ مَا تَمَّ فِعْلُه . هَل تُريدُ حَذْفَ المُسْتَوى عِوَضَاً عَن ذَلِكَ ؟","task.removeTaskBtn":"احذِفْ المُسْتَوَى","task.returnToTab":"العَودَةُ إِلى التَبْويب","task.note":"مُلَاحَظَة","task.assignmentNotIncludedInCurrentCourse":"إنَّ النُسخَةَ المَوضُوعَةَ لِهَذِهِ المَادَةِ لَا تَحْتَوي عَلى هَذا الوَاجِب","task.addTaskToLogbook":"إِضَافَةُ المُسْتَوَى إِلى دَفْتَرِ المَوَاعِيدِ","task.removeTaskFromLogbook":"احْذِف المُسْتَوَى مِن دَفْتَرِ المَوَاعِيد","task.createdBy":"{name} أُنشِئَ مِن قِبَل","task.editedBy":"{name} عُدِّلَت مِن قِبَل","workpathTab.baseGroupLegend":":المَجْمُوعَاتُ الصَفيَّة","workpathTab.customGroupLegend":"مَجْمُوعَات","workpathTab.customGroupPlaceholder":"لَا وُجُود لِلمَجْمُوعَات","workpathTab.responsibleTeachersTitle":"المُعَلِّمَة / المُعَلِّم المَسْؤُول","workpathTab.addResponsibleTeacher":"أَضِف مُعَلِّمَة/مُعَلِّم مَسْؤُول","workpath.weekActivityTasksInstructions":" ...اسحَبْ وَ ضَعْ المُستَوَيَاتِ هُنَا","workpath.weekActivityDone":"تَمَّ إِتْمَامُ المُسْتَوَى","workpath.weekActivityGroup":"مَجْمُوعَة","workpath.takslistHeader":"مُستَوَيات","workpath.weekActivityTasks":"مُسْتَوَيَاتُ هَذا الأُسْبُوعِ الدِّرَاسيَّة","workpath.studyvisitsSubjectType":"زيَارَةٌ دِرَاسيَّة","workpath.accountingSubjectType":"العَرْض","workpath.seminarSubjectType":"نَدْوَة","workpath.sampleSubjectType":"عَيِّنَة","workpath.lectureSubjectType":"مُحَاضَرَة","workpath.labSubjectType":"مُختَبَر","workpathTab.selectLabel":"اِخْتَر","workpath.shiftSubjectType":"وَرْشَةُ عَمَل","workpathTab.endWeek":"نِهَايَةُ الأُسْبُوع","workpathTab.startWeek":"بِدَايَةُ الأُسْبُوع","workpathTab.yearGrade":"صَفٌّ دِرَاسيّ","workpath.applyTemplate":"طَبِّق القَالَب","workpathTab.noGroupsSelected":"لَا يُوجَدُ مَجْمُوعَاتٌ مُخْتَارَة","workpathTab.baseGroupsTitle":"المَجْمُوعَات","workpathTab.copyOrMove":"اِنْسَخ أَو حَرِّك","workpathTab.showOnlyNextWeeks":" ...أَظْهِر بَعْضاً مِن الأَسَابِيع المُقْبِلَة","workpathTab.showAllWeeks":" ...أَظْهِر كُلَّ الأَسَابِيع","workpathTab.selectGradesDescription":"حَدِّد العَلَامَةَ الَّتِي سَوفَ تُشْمَل فِي سِيرِ العَمَل","workpath.selectSchoolTeacher":"اخْتَر مُعَلِّمَة / مُعَلِّم مَوجُود فِي المَدْرَسَة","workpath.noTeachersAvailable":"لَا يُوجَدُ مُعَلِّمة / مُعَلِّم مُتَاح","workpath.groupSelectorAlreadyExists":"إِنَّ هَذا الإِسم مُسْتَخدَم مِن قِبَلِ مَجمُوعَةٍ صَفيَّةٍ مَوجُودَةٍ بالفِعْل . الرَجَاء إِعَادَةُ تَسمِيَتِهَا بِإسْمٍ جَديد","workpath.userSelectorAlreadyExists":"هَذِه المَجمُوعَةُ مَوجُودَةٌ بِالفِعْل . الرَجَاءُ إِعَادَةُ تَسْمِيَتِهَا بِإسْم جَدِيد","workpath.templateTitle":"قَوَالِب","workpath.showHiddenRows":"أَظهٍر صُفُوفَ الجَدْوَلِ المَخْفيَّة","workpath.deleteWorkpath":"احْذِف سَيرَ العَمَل","workpath.editWorkpath":"Edit Workpath","workpath.weekContentDescription":" ...فِي هَذَا الأُسْبُوعِ سَوفَ تَعْمَلُ مَعْ","deltaView.knowledgeReqAdded":" ","deltaView.knowledgeReqDeleted":" ","deltaView.knowledgeReqHidden":" ","workpathDeltaView.unpublishedChanges":"التَغيِيرَاتُ الغَيرِ مَنشُورَةٍ فِي سَيرِ العَمَل","workpathDeltaView.revertChanges":"تَرَاجَع عَن كُلِّ التَغيِيرَات","workpathDeltaView.noChangesToPublish":"لَا يُوجَدُ تَغيِيرَاتٍ لِيَتِمَّ نَشْرُهَا","workpathDeltaView.startWeekChanged":"{startWeek}:تَمَّ تَغيِيرُ بِدَايَةِ الأُسبُوع","workpathDeltaView.endWeekChanged":"{endWeek}:تَمَّ تَغيِيرُ نِهَايَةِ الأُسْبُوعِ","workpathDeltaView.descriptionUpdated":"تَمَّ تَحدِيثُ الوَصْف","workpathDeltaView.taskDeadlineChanged":"تَمَّ تَحْدِيثُ المَوعِد النِهَائيِّ للمُسْتَوَى","workpathDeltaView.baseGroupsAdded":"تَمَّت إِضَافَةُ مَجمُوعَةٍ صَفيَّة","workpathDeltaView.baseGroupsRemoved":"تَمَّ إِزَالَةُ المَجْمُوعَةِ الصَّفيَّة","workpathDeltaView.teacherAdded":"المُعَلِّمَة / المُعَلِّم المُضَاف","workpathDeltaView.teacherRemoved":"المُعَلِّمَة /المُعَلِّم الَّذِي تَمَّ عَدَمُ اخْتِيَارُه","workpathDeltaView.teacherRemovedDetails":"تَمَّ إِزَالَةُ مُعَلِّمَة /مُعَلِّم أَو أَكْثَر مِن سَيرِ العَمَل","workpathDeltaView.baseGroupsChangedForTeacher":"{teacherName} تَمَّ تَغييِرُ المَجمُوعَةِ الصَّفيَّة لِـ","workpathDeltaView.emailChangedForTeacher":"تَمَّ تَغيِيرُ البَرِيدِ الإِلكْترُونيِّ للمُعَلِّمَة / للمُعَلِّم","workpathDeltaView.emailChangedForTeacherDetails":" {email}:بَرِيدٌ إِلكْترُونيٌّ جَدِيد","workpathDeltaView.renamedTeacher":"تَمَّ إِعَادَةُ تَسْمِيَةِ المُعَلِّمَة/ المُعَلِّم","workpathDeltaView.teacherNewName":"{nm}: إِسْمُ مُعَلِّمَة / مُعَلِّم جَدِيْد","workpathDeltaView.subjectModifiedForTeacher":"{name} تَمَّ تَغيِيرُ المَوضُوعَاتِ لـ","workpathDeltaView.subjectModifiedForTeacherDetails":"{subjects}:مَوْضُوعٌ جَدِيْد","workpathDeltaView.addClasrooms":"تَمَّت إِضَافَةُ غُرفَةٍ صَفيَّة","workpathDeltaView.removeClassrooms":"تَمَّ إِزَالَةُ غُرْفَةِ الصَّف","workpathDeltaView.deleteClassrooms":"تَمَّ حَذفُ الغُرفَةِ الصَّفيَّة","workpathDeltaView.removedGroups":"{classroomName}:المَجْمُوعَة المُزَالَةُ مِن","workpathDeltaView.addedGroups":" {classroomName}:إِضَافَةُ مَجمُوعَةٍ فِي","workpathDeltaView.renamedClassrom":"الغُرفَةُ الصَّفيَّةُ الَّتي أُعِيدَ تَسْمِيَتُهَا","workpathDeltaView.clasroomNewName":"{newName}:إِسمٌ جَدِيد","workpathDeltaView.newWeeksAndActivities":"أَسَابِيعٌ وَ نَشَاطَاتٌ جَدِيدَة","workpathDeltaView.newWeeksAndActivitiesDetails":"نَشَاطَات {activities} مَعْ {weekNumber} أُسبُوع","workpathDeltaView.weekUpdated":" {weekNumber}:أُسْبُوع","workpathDeltaView.weekUpdatedDetails":"<p>{description}</p>:غْيِير الوَصْفِ إِلى","workpathDeltaView.addedTasksThisWeek":"{week} إِضَافَةُ مُستَوَيَاتٍ لِهَذا الأُسْبُوعِ","workpathDeltaView.removedDataFromWeek":"{week} البَيَانَاتُ المَحْذُوفَةُ مِن","workpathDeltaView.changedGroupFilterForTask":"وَسيلَةُ الإِنْتِقَاءِ المُتَغيِّرَةِ لِلمُسْتَوَى","workpathDeltaView.deadlineChangedForTask":"المَوعِدُ النِهَائِيِّ المُتَغيِّر لِلمُسْتَوَى","workpathDeltaView.deadlineChangedForTaskDetails":"{date}:المَوعِدُ النِهَائِيِّ المُتَغيِّر لِلمُسْتَوَى","workpathDeltaView.addedActivitiesDetails":"النَشَاطَاتُ المُضَافَة","workpathDeltaView.removedActivitiesDetails":"النَشَاطَاتُ المُزَالَةُ","workpathDeltaView.weekActivitiesWeekSubject":"أُسْبُوع {weekNumber}  {subject}","workpathDeltaView.activityLectureTypeChanged":"{type}:تَمَّ تَغْيِيرُ نَوعِ المُحَاضَرَةِ إِلى","workpathDeltaView.activityLocationChanged":"{location} تَمَّ تَغيِيرُ المَكَانِ إِلى","workpathDeltaView.activityGroupFilterChanged":"{location}  {lectureType} تَغَيَّرَت وَسيلَةُ الإِنتِقَاءِ لِلمَجْمُوعَةِ لـِ","workpathDeltaView.activitySubjectChanged":"{newSubject} تَمَّ تَغيِيرُ مَوضُوعِ الدَّرسِ إِلى","workpathDeltaView.groupFilterRemoved":"تَمَّ إِزَالَةُ وَسِيلَةِ الإِنْتِقَاءِ لِلمَجْمُوعَة","workpathDeltaView.newGroupFilter":"{filters} :وَسيلَةُ إِنْتِقَاءٍ جَدِيدَة","workpathDeltaView.weekActivitiesChangedTime":"{newTime}: تَمَّ تَغيِير الوَقْتُ إِلَى","workpathDeltaView.weekActivitiesRemovedTime":"تَمَّ إِزَالَةُ النَشَاطِ المُرتَبِطِ بِالوَقْت","workpathDeltaView.changedDayOfTheWeekTo":"{weekDays}: يَومُ الأُسبُوعِ المُتَغيِّرِ إِلى","workpathDeltaView.removedDayOfTheWeek":"تَمَّ إِزَالَةُ يَومِ الأُسْبُوع","common.emailLabel":"البَريدُ الإلكترُونيِّ","common.workpathTab":"سَيرُ العَمَلِ","common.subjectsLabel":"مَوَاضِيع","common.selectAllLabel":"اخْتِيَارُ الكُل","common.dayLabel":"يَوم","common.locationLabel":"مَكَان","common.timeLabel":"وَقْت","common.contentLabel":"مُحتَوى","common.subjectLabel":"مَوضُوع","common.groupLabel":"مَجمُوعَة","common.subjectTypeLabel":"جَلسَة","common.schoolYear":"السِنَة المَدرَسيَّة","common.unnamed":"غَيرُ مُسَمَّى","common.remove":"احْذِف","common.removeGroup":"احْذِف المَجمُوعَة","common.changesNeedsToBeSavedMsg":"يَجِب حِفظ التَغييرات قَبلَ إِغْلاقِ الشَاشَة","common.nothingToSave":"لا يُوجَد شَيئ يَجِبُ حِفْظُه","common.members":"أَعْضَاء","common.add":":إِضَافَة","common.addNewGroup":"مَجمُوعَة جَديدَة","common.copy":"انْسَخ","common.course":"المُقرَّر التَعلِيمي","common.yearGrade":"عَلامَاتُ السَنَةِ الدِرَاسيَّة","common.when":"مَتَى","deltaView.abilitiesAdded":" ","deltaView.itemAdded":"تَمَّت إِضَافَةُ عُنْصُر","deltaView.itemRemoved":"تَمَّ حَذْفُ عُنْصُر","deltaView.linkUndoed":"تَمَّ التَرَاجُعُ عَن الرَّابِط","deltaView.internalChangesProps":"تَغييرٌ فِي خَصائِصَ داخِليَّة","weekplanner.strategy":"الإسْتراتِيجيَّة الخَاصَّة بِي","weekplanner.strategyDescription":"مَاذَا يَجِبُ عَليَّ أَنْ أَفْعَل لِكَي أَتْعَلَّم","new":"--------------------------------------","workpathTab.addNewWorkpath":"Add new workpath","workpathTab.workpathListTitle":"Workpaths","workpathTab.showOnlyMine":"Show only mine","workpathTab.tabDescription":"Workflows are not visible on the standard course - they can only be created by editing the course for a specific school.","task.defaultSchoolName":"Kunskapsskolan Education","task.hiddenTasksList":"Hidden tasks in {name}","common.actions":"Actions","spTabSettings.addMultipleWorkpaths":"Add multiple workpaths","common.calendarTab":"Calendar","common.termplanner":"Termplanner","common.termOverview":"Term overview","common.latestAssesments":"Latest assesments","common.goals":"Goals","common.myBaseGroupTab":"My basegroups","common.myStudyGroupTab":"My studygroups","common.schoolStudents":"School students","common.assignmentsTab":"Assignments","termplanner.comments":"Comments","wysiwyg.tooltip":"Tooltip","tooltip.remove":"Remove tooltip","tooltip.testTooltip":"Test tooltip:","tooltip.editTooltip":"مَتَى","tooltip.saveTooltip":"Save tooltip","test":"----------------------check if termplanner subjects are correct------------------------","termplanner.course":"Theme course","termplanner.edsGoalGrades":"Intermediate goals","termplanner.englishLanguage":"Eng","termplanner.finalStep":"Final Step","termplanner.firstTerm":"T1 {year}","termplanner.loadingTermplanner":"Loading Termplanner","termplanner.maths":"Maths","termplanner.noFinalStepAvailable":"No final step available","termplanner.secondTerm":"T2 {year}","termplanner.termPlanning":"Term planner","termplanner.weekNumber":"Week","termplanner.arabicLanguage":"Arabic","termplanner.recitandAndInterpretation":"Recitation and Interpretation","tooltip.enterTooltip":"Enter tooltip","tooltip.enterText":"Enter text","linkDialog.remove":"Remove link","linkDialog.linkText":"Enter link text","linkDialog.linkUrl":"Enter URL","linkDialog.save":"Save link","linkDialog.edit":"Edit link","linkDialog.followLink":"Follow link:","resource.edited":"The resource / link was edited","resource.createdAt":"The resource / link was last edited at {date}","resource.removeResource":"Delete resource / link","common.textEditorMaxChars":"The text contains {numChars} of max {maxChars} characters allowed","common.myLogbook":"My logbook","common.assignedPersonLogbook":"{name} logbook","workpath.copyWorkpath":"Copy workpath","task.migrateToTaskContents":"Migrate task","courseContent.commonLearningGoalsSettings":"Define the common learning objectives.Define one per line","courseContent.commonLearningTaskSettings":"Define one per line","common.workingCourseVersion":"Current work version","common.manageWorkingVersion":"Manage working versions","manageNameDrafts.editWorkingVersion":"Edit working version","manageNameDrafts.createNewWorkingVersion":"Create new version","manageNameDrafts.workingVersionCreated":"Working version create at {date}","manageNameDrafts.removeWorkingVersion":"Remove working version","manageNameDrafts.removeWorkingVersionFailed":"Confirmation failed. The working version named {draftName} was not removed.","manageNameDrafts.workingVersionRemoved":"The working version named {draftName} has been deleted.","common.ok":"OK","common.home":"Home","common.listen":"Listen","notificationBanner.conflictModeMessage":"The standard version of the course has changed. Check the parts marked orange","notificationBanner.exitConflictMode":"Exit confict mode","notificationBanner.conflictsSolved":"All conflicts are now resolved!","courseViewer.assignment":"Assignment","common.resources":"Resources","common.showTab":"Show tab","common.hideTab":"Hide tab","courseViewer.taskNotListedInWorkpaths":"This task is not listed in any of you workpaths","common.missionTabTitle":"Mission","courseContent.knowledgeRequirements":"Knowledge Requirements","courseContent.centralContent":"Central content","courseContent.abilities":"Abilities","courseSettings.defineTaskTag":"Define task tags one per line","task.tagSelector":"Task tag","strategyBank.ageGroupTitle":"Åldersgrupp","strategyBank.includeSearchContent":"Include Content","strategyBank.ageGroupKindergarten":"4-6","strategyBank.ageGroupPrimary":"7-9","strategyBank.ageGroupGymnasium":"Gymnasium","strategyBank.search":"Search","strategyBank.support":"Support","strategyBank.deleteCategory":"Delete category","strategyBank.strategyLogo":"Logo","strategyBank.categorySaveDone":"Save done.","strategyBank.editCategory":"Edit category","strategyBank.deleteImage":"Delete existing image","spTabSettings.allowWorkpathCommunicationGroup":"Enable workpath communication groups","workpath.communicationGroups":"Communication Groups","weekplanner.weekTab":"Week","weekplanner.dayTab":"Day","userTasks.unassignedTaskSection":"Unassigned","task.searchTask":"Search task","common.search":"Search","task.addTasks":"Add tasks","task.learningResources":"Learning resources","task.deleteResourceBtn":"Delete learning resource","task.contentType":"Content type","task.url":"URL","task.learningResourceName":"Resource name","task.addLearningResource":"Add learning resource","workshopBooking.select":"Select","workshopBooking.subject":"Subject","workshopBooking.teacher":"Teacher","workshopBooking.time":"Time for WS","workshopBooking.location":"Location","workshopBooking.place":"Place","workshopBooking.reasonNote":"Note","workshopBooking.baseGroup":"Base group","workshopBooking.name":"Name","workshopBooking.absence":"Absence","workshopBooking.reason":"Reason","workshopBooking.tasks":"Tasks","workshopBooking.note":"Note","workshopBooking.empty":"--","workshopBooking.reportedAbsent":"Reported absent","workshopBooking.lateArrival":"Late arrival","workshopBooking.free":"Free","workshopBooking.infoMessage":"(This table is linked to the selected WS above)","workshopBooking.numberOfSeats":"Number of seats","workshopBooking.duration":"Duration","workshopBooking.attendance":"Attendance/Registered","workshopBooking.cancelWorkshop":"Cancel workshop","workshopBooking.uncancelWorkshop":"Un-cancel workshop","workshopBooking.convertToWorkshop":"Convert to workshop","workshopBooking.convertToLesson":"Convert to lesson","workshopReason.subjectLabel":"Subject","workshopReason.taskLabel":"Task","workshopReason.helpLabel":"Help","workshopReason.ownWorkLabel":"Own Work","workshopBooking.chooseWorskshop":"Choose workshop","learningTaskSettings.aipOnlyLearningGoals":"OnlyLearaningGoals","courseContent.learningGoalsContentAddTaskOnlyLg":"Add learning resource","spAdmin.title":"Subject Planner Admin","spAdmin.createStandardCourse":"Create new standard course","courseSettings.defineTaskTags":"Task tab","course.editedBy":"Last edited by {modifiedBy} / {date}","courseSettings.planningTab":"Planning","course.introductionTab":"Introduktion","wysiwyg.table":"Insert table","wysiwyg.tableInsertColBefore":"Insert column before","wysiwyg.tableInsertColAfter":"Insert column after","wysiwyg.tableDeleteColumn":"Delete column","wysiwyg.tableInsertRowBefore":"Insert row before","wysiwyg.tableInsertRowAfter":"Insert row after","wysiwyg.tableDeleteRow":"Delete row","wysiwyg.tableInsertHeaderRow":"Toggle header row","wysiwyg.tableInsertHeaderCol":"Toggle header column","wysiwyg.figure":"Figure","wysiwyg.openCloseDialogTitle":"Configure open-Close content box","wysiwyg.openCloseTitleLabel":"Titel","wysiwyg.openCloseRemoveBox":"Unwrap open-close box","wysiwyg.openCloseAction":"Open-close","common.embedContent":"Embed content","ksAcademy.title":"KED Academy","courseContent.wordBankName":"Wordbank name","courseContent.wordBankSourceLanguage":"Source","courseContent.wordBankTargetLanguage":"Target","workpath.confirmDeleteClassrooms":"By deleting this workpath, multiple classrooms will be deleted as well. Are you sure?","common.listen_uk":"Listen UK","common.listen_usa":"Listen USA"}')
}
, , function(e) {
    e.exports = JSON.parse('[{"pathId":"gymnasium","pathName":"Teacher Onboarding gymnasium school","finalMissionNumber":7,"previousMissions":[],"currentMission":{"missionNumber":1,"completed":false}},{"pathId":"primary","pathName":"Teacher Onboarding primary school","finalMissionNumber":7,"previousMissions":[],"currentMission":{"missionNumber":1,"completed":false}}]')
}
, function(e) {
    e.exports = JSON.parse("[]")
}
, function(e) {
    e.exports = JSON.parse('[{"behaviorId":"primary-objective-1","behaviorType":"media/article"},{"behaviorId":"gymnasium-objective-1","behaviorType":"media/article"},{"behaviorId":"primary-objective-2","behaviorType":"media/article"},{"behaviorId":"gymnasium-objective-2","behaviorType":"media/article"},{"behaviorId":"primary-objective-3","behaviorType":"assignment/quiz"},{"behaviorId":"gymnasium-objective-3","behaviorType":"assignment/quiz"},{"behaviorId":"primary-objective-4","behaviorType":"media/video"},{"behaviorId":"gymnasium-objective-4","behaviorType":"media/video"},{"behaviorId":"primary-objective-5","behaviorType":"media/article"},{"behaviorId":"gymnasium-objective-5","behaviorType":"media/article"},{"behaviorId":"primary-objective-6","behaviorType":"media/article"},{"behaviorId":"gymnasium-objective-6","behaviorType":"media/article"},{"behaviorId":"primary-objective-7","behaviorType":"media/article"},{"behaviorId":"gymnasium-objective-7","behaviorType":"media/article"},{"behaviorId":"primary-objective-8","behaviorType":"media/video"},{"behaviorId":"gymnasium-objective-8","behaviorType":"media/video"},{"behaviorId":"primary-objective-9","behaviorType":"media/video"},{"behaviorId":"gymnasium-objective-9","behaviorType":"media/article"},{"behaviorId":"primary-objective-10","behaviorType":"media/article"},{"behaviorId":"gymnasium-objective-10","behaviorType":"media/article"},{"behaviorId":"primary-objective-11","behaviorType":"assignment/quiz"},{"behaviorId":"gymnasium-objective-11","behaviorType":"assignment/quiz"}]')
}
, function(e) {
    e.exports = JSON.parse('{"gymnasium":[{"completed":false,"missionNumber":1,"objectives":[{"behaviorId":"gymnasium-objective-1","amount":1,"completed":0,"title":"Kunskapsskolans historia","cta":"https://ks.kunskapsporten.se/4.326809d917cda8287632676d.html"},{"behaviorId":"gymnasium-objective-2","amount":1,"completed":0,"title":"Vision och värderingar","cta":"https://ks.kunskapsporten.se/4.326809d917cda82876326777.html"},{"behaviorId":"gymnasium-objective-3","amount":1,"completed":0,"title":"Quizz","cta":"https://ks.kunskapsporten.se/4.326809d917cda82876326781.html"}],"rewards":[]},{"completed":false,"missionNumber":2,"objectives":[{"behaviorId":"gymnasium-objective-4","amount":1,"completed":0,"title":"Pedagogisk modell","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763267a5.html"},{"behaviorId":"gymnasium-objective-5","amount":1,"completed":0,"title":"Lärarens två roller","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763267af.html"}],"rewards":[]},{"completed":false,"missionNumber":3,"objectives":[{"behaviorId":"gymnasium-objective-6","completed":0,"amount":1,"title":"Rollen som ämneslärare","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763267c5.html"}],"rewards":[]},{"completed":false,"missionNumber":4,"objectives":[{"behaviorId":"gymnasium-objective-7","completed":0,"amount":1,"title":"Rollen som studiecoach","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763267d1.html"}],"rewards":[]},{"completed":false,"missionNumber":5,"objectives":[{"behaviorId":"gymnasium-objective-8","completed":0,"amount":1,"title":"Kunskapsporten","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763267dc.html"},{"behaviorId":"gymnasium-objective-9","completed":0,"amount":1,"title":"Vad är Kunskapsporten?","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763267e6.html"}],"rewards":[]},{"completed":false,"missionNumber":6,"objectives":[{"behaviorId":"gymnasium-objective-10","completed":0,"amount":1,"title":"Vi arbetar tillsammans!","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763267f2.html"}],"rewards":[]},{"completed":false,"missionNumber":7,"objectives":[{"behaviorId":"gymnasium-objective-11","completed":0,"amount":1,"title":"Skriv och reflektera","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763267fe.html"}],"rewards":[]}],"primary":[{"completed":false,"missionNumber":1,"objectives":[{"behaviorId":"primary-objective-1","amount":1,"completed":0,"title":"Kunskapsskolans historia","cta":"https://ks.kunskapsporten.se/4.326809d917cda82876326505.html"},{"behaviorId":"primary-objective-2","amount":1,"completed":0,"title":"Vision och värderingar","cta":"https://ks.kunskapsporten.se/4.326809d917cda82876326561.html"},{"behaviorId":"primary-objective-3","amount":1,"completed":0,"title":"Quizz","cta":"https://ks.kunskapsporten.se/4.326809d917cda8287632659d.html"}],"rewards":[]},{"completed":false,"missionNumber":2,"objectives":[{"behaviorId":"primary-objective-4","amount":1,"completed":0,"title":"Pedagogisk modell","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763265b8.html"},{"behaviorId":"primary-objective-5","amount":1,"completed":0,"title":"Lärarens två roller","cta":"https://ks.kunskapsporten.se/4.326809d917cda828763265f7.html"}],"rewards":[]},{"completed":false,"missionNumber":3,"objectives":[{"behaviorId":"primary-objective-6","completed":0,"amount":1,"title":"Rollen som ämneslärare","cta":"https://ks.kunskapsporten.se/4.326809d917cda8287632660c.html"}],"rewards":[]},{"completed":false,"missionNumber":4,"objectives":[{"behaviorId":"primary-objective-7","completed":0,"amount":1,"title":"Rollen som personlig handledare","cta":"https://ks.kunskapsporten.se/4.326809d917cda8287632666a.html"}],"rewards":[]},{"completed":false,"missionNumber":5,"objectives":[{"behaviorId":"primary-objective-8","completed":0,"amount":1,"title":"Kunskapsporten","cta":"https://ks.kunskapsporten.se/4.326809d917cda82876326678.html"},{"behaviorId":"primary-objective-9","completed":0,"amount":1,"title":"Hur hittar jag på Kunskapsporten?","cta":"https://ks.kunskapsporten.se/4.326809d917cda82876326683.html"}],"rewards":[]},{"completed":false,"missionNumber":6,"objectives":[{"behaviorId":"primary-objective-10","completed":0,"amount":1,"title":"Vi arbetar tillsammans!","cta":"https://ks.kunskapsporten.se/4.326809d917cda82876326753.html"}],"rewards":[]},{"completed":false,"missionNumber":7,"objectives":[{"behaviorId":"primary-objective-11","completed":0,"amount":1,"title":"Skriv och reflektera","cta":"https://ks.kunskapsporten.se/4.326809d917cda8287632675f.html"}],"rewards":[]}]}')
}
, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r = n(79);
    function a(e) {
        return e.weekPlannerStateObservable || (e.weekPlannerStateObservable = r.a.observe(e.currentUser.mail)),
        e.weekPlannerStateObservable
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}
, , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r),
    n.d(r, "Calendar", (function() {
        return et
    }
    )),
    n.d(r, "CalendarTutored", (function() {
        return tt
    }
    )),
    n.d(r, "WeekPlanner", (function() {
        return nt
    }
    )),
    n.d(r, "WeekPlannerTutored", (function() {
        return rt
    }
    )),
    n.d(r, "LatestAssessments", (function() {
        return at
    }
    )),
    n.d(r, "LearningTasks", (function() {
        return ot
    }
    )),
    n.d(r, "WeekNotebook", (function() {
        return it
    }
    )),
    n.d(r, "TutorsSelect", (function() {
        return st
    }
    )),
    n.d(r, "ParentChildSelectorView", (function() {
        return ct
    }
    )),
    n.d(r, "StrategyTeacherView", (function() {
        return lt
    }
    )),
    n.d(r, "KSAcademyStrategyTeacherView", (function() {
        return ut
    }
    )),
    n.d(r, "KSAcademyStrategyUpperTeacherView", (function() {
        return dt
    }
    )),
    n.d(r, "LazyWorkpathViewApp", (function() {
        return pt
    }
    )),
    n.d(r, "LazyWorkpathCbViewApp", (function() {
        return mt
    }
    )),
    n.d(r, "Onboarding", (function() {
        return $e
    }
    )),
    n.d(r, "KGTermPlanner", (function() {
        return ht
    }
    )),
    n.d(r, "KGTermPlannerTutored", (function() {
        return gt
    }
    )),
    n.d(r, "ListCourses", (function() {
        return bt
    }
    )),
    n.d(r, "KSTermPlanner", (function() {
        return ft
    }
    )),
    n.d(r, "KSTermPlannerTutored", (function() {
        return vt
    }
    )),
    n.d(r, "KSGoals", (function() {
        return kt
    }
    )),
    n.d(r, "MyCourses", (function() {
        return wt
    }
    )),
    n.d(r, "MySubjects", (function() {
        return yt
    }
    )),
    n.d(r, "KEDAppCourseBuilder", (function() {
        return _t
    }
    )),
    n.d(r, "KEDAppCourseViewer", (function() {
        return Ot
    }
    )),
    n.d(r, "KEDAppSubjectPlanner", (function() {
        return Tt
    }
    )),
    n.d(r, "KEDAppSubjectPlannerAdmin", (function() {
        return jt
    }
    )),
    n.d(r, "KEDAppTeacherView", (function() {
        return Et
    }
    ));
    var a = n(0)
      , o = n(20)
      , i = (n(210),
    n(13))
      , s = n(37)
      , c = n(84)
      , l = n(10)
      , u = n(7)
      , d = n(30)
      , p = n(12)
      , m = n(48)
      , h = n(112)
      , g = n(85)
      , b = Object(p.w)(u.a) ? m.e : m.d;
    function f(e, t, n, r) {
        var o = Object(d.b)(t)
          , i = Object(p.g)(o, c.a)
          , s = Object(a.__read)(Object(d.c)(e), 2)
          , l = s[0]
          , u = s[1]
          , m = Object(d.b)(u);
        return l + Object(d.a)(Object(a.__assign)(Object(a.__assign)(Object(a.__assign)({}, m), i), {
            impersonateChild: r,
            scopes: n.join(",")
        }))
    }
    function v(e, t) {
        return e + "/" + t
    }
    var k, w, y = function() {
        function e() {
            this.wantsRedirect = !1
        }
        return e.prototype.getBearer = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                return Object(a.__generator)(this, (function(e) {
                    throw new i.c(403,"No Google Account")
                }
                ))
            }
            ))
        }
        ,
        e.prototype.refreshBearer = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                return Object(a.__generator)(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.getBearer()];
                    case 1:
                        return [2, e.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }(), _ = u.a.currentUser && u.a.currentUser.mail;
    if (_)
        if (l.b.KED_TOKEN_PATH) {
            var O = u.a.currentUser.impersonator ? u.a.currentUser.mail : void 0
              , T = f(l.b.KED_TOKEN_PATH, location.search, m.c, O);
            u.a.bearerProvider = (w = v(k = T, _),
            new s.b(k,(function(e) {
                var t = JSON.parse(e);
                if (!t.ok)
                    throw new Error(t.error);
                return t.user && function(e, t) {
                    u.a.currentUser = e;
                    var n = Object(d.b)(location.search, {
                        toLower: !0
                    }).schoolgrade;
                    if (n) {
                        var r = parseInt(n);
                        u.a.currentUser.schoolGrade = r,
                        u.a.currentUser.schoolType = r > 9 ? "Gymnasium" : "Grundskolor"
                    }
                    sessionStorage.setItem("userInfo" + t, JSON.stringify(e))
                }(t.user, w),
                {
                    token: t.token,
                    expires: Date.now() + 354e4
                }
            }
            ),w)),
            function(e) {
                var t = sessionStorage.getItem("userInfo" + e);
                t && (u.a.currentUser = JSON.parse(t))
            }(v(T, _));
            var j = m.a.concat(Object(g.a)(u.a.currentUser) ? m.b : b)
              , E = f(l.b.KED_TOKEN_PATH, location.search, j, O);
            /.*\.local$/i.test(u.a.currentUser.mail) ? u.a.googleTokenProvider = new y : u.a.googleTokenProvider = function(e, t) {
                var n = v(e, t);
                return new s.b(e,(function(e) {
                    var t = JSON.parse(e);
                    if (!t.ok)
                        throw new Error(t.error);
                    return {
                        token: t.token,
                        expires: Date.now() + 354e4
                    }
                }
                ),n)
            }(E, _)
        } else {
            if (!(l.b.KED_TOKEN_URL && l.b.KED_CLIENT_ID && l.b.KED_CLIENT_SECRET))
                throw new Error("Missing configuration parameter KED_TOKEN_PATH");
            u.a.bearerProvider = Object(h.a)(l.b.KED_TOKEN_URL, u.a.currentUser, m.c);
            j = m.a.concat(Object(g.a)(u.a.currentUser) ? m.b : b);
            u.a.googleTokenProvider = Object(h.a)(l.b.KED_TOKEN_URL + "/google", u.a.currentUser, j)
        }
    u.a.kedBackendClient = new s.a(l.b.KED_API_URL,u.a.bearerProvider);
    var S = n(135);
    u.a.edsClient = new S.b(s.c,l.b.EDS_API_URL,u.a.bearerProvider,(function() {
        return u.a.currentUser
    }
    ));
    n(262);
    var x, C, D, N, A, I = function() {
        function e(e, t, n) {
            var r = this;
            this.http = new i.f(e,t,{
                bearerProvider: n
            });
            Object.keys(i.f.prototype).forEach((function(e) {
                var t;
                "function" == typeof r[t = e] && "constructor" !== t && (r[e] = Object(i.h)(r[e]))
            }
            ))
        }
        return e.prototype.getCurrentScheduleEvents = function(e) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var t, n;
                return Object(a.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]),
                        t = {},
                        e && (e.schoolyear && (t.year = e.schoolyear),
                        e.weeknr && (t.week = e.weeknr)),
                        [4, this._getKedScheduleEntity("schedule", t)];
                    case 1:
                        return [2, r.sent()];
                    case 2:
                        throw n = r.sent(),
                        console.error("Error trying to retrieve Ked Schedule Events: " + n),
                        new Error(Object(p.a)(x || (x = Object(a.__makeTemplateObject)(["Error trying to retrieve Ked Schedule Events"], ["Error trying to retrieve Ked Schedule Events"]))));
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getTypesList = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(a.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, this._getKedScheduleEntity("type")];
                    case 1:
                        return [2, t.sent()];
                    case 2:
                        throw e = t.sent(),
                        console.error("Error trying to retrieve Ked Schedule Types: " + e),
                        new Error(Object(p.a)(C || (C = Object(a.__makeTemplateObject)(["Error trying to retrieve Ked Schedule Types"], ["Error trying to retrieve Ked Schedule Types"]))));
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getLocationsList = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(a.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, this._getKedScheduleEntity("location")];
                    case 1:
                        return [2, t.sent()];
                    case 2:
                        throw e = t.sent(),
                        console.error("Error trying to retrieve Ked Schedule Locations: " + e),
                        new Error(Object(p.a)(D || (D = Object(a.__makeTemplateObject)(["Error trying to retrieve Ked Schedule Locations"], ["Error trying to retrieve Ked Schedule Locations"]))));
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getInvolvedTeachersList = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(a.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, this._getKedScheduleEntity("teacher")];
                    case 1:
                        return [2, t.sent()];
                    case 2:
                        throw e = t.sent(),
                        console.error("Error trying to retrieve Ked Schedule Teachers: " + e),
                        new Error(Object(p.a)(N || (N = Object(a.__makeTemplateObject)(["Error trying to retrieve Ked Schedule Teachers"], ["Error trying to retrieve Ked Schedule Teachers"]))));
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getAcademicYear = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(a.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, this._getKedScheduleEntity("yearstart")];
                    case 1:
                        return [2, t.sent()];
                    case 2:
                        throw e = t.sent(),
                        console.error("Error trying to retrieve Ked Schedule Academic Year: " + e),
                        new Error(Object(p.a)(A || (A = Object(a.__makeTemplateObject)(["Error trying to retrieve Ked Schedule Academic Year"], ["Error trying to retrieve Ked Schedule Academic Year"]))));
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype._getKedScheduleEntity = function(e, t) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var n, r, o;
                return Object(a.__generator)(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, this.http.get(e, t || null)];
                    case 1:
                        return 200 == (n = a.sent()).status ? [3, 3] : (r = i.c.bind,
                        o = [void 0, n.status],
                        [4, n.text()]);
                    case 2:
                        throw new (r.apply(i.c, o.concat([a.sent()])));
                    case 3:
                        return [4, n.json()];
                    case 4:
                        return [2, a.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }(), L = function() {
        function e(e) {
            this.kedScheduleUrl = e
        }
        return e.prototype.getBearer = function() {
            return Object(a.__awaiter)(this, void 0, Promise, (function() {
                var e;
                return Object(a.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return !this.bearer || this.bearer.expires < Date.now() ? (e = this,
                        [4, this.refreshBearer()]) : [3, 2];
                    case 1:
                        e.bearer = t.sent(),
                        t.label = 2;
                    case 2:
                        return [2, this.bearer]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.refreshBearer = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n;
                return Object(a.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, u.b.bearerProvider.getBearer()];
                    case 1:
                        if (!(e = r.sent()))
                            throw new i.c(500,"bearer token could not be retrieved");
                        return [4, fetch(this.kedScheduleUrl + "exchangetoken", {
                            method: "post",
                            body: e.token
                        })];
                    case 2:
                        return [4, (t = r.sent()).text()];
                    case 3:
                        if (n = r.sent(),
                        !t.ok)
                            throw new i.c(t.status,n);
                        return [2, {
                            token: n,
                            expires: Date.now() + 354e4
                        }]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    u.a.kedScheduleClient = new I(s.c,l.b.KED_SCHEDULE_BASE_API_URL,new L(l.b.KED_SCHEDULE_TOKEN_API_URL));
    var P = n(161)
      , V = n(143)
      , G = n(254)
      , R = n(255)
      , B = n(256)
      , U = n(66)
      , M = n(44)
      , K = n(14)
      , W = n(257)
      , F = function() {
        function e() {}
        return e.completeBehavior = function(e) {
            var t;
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                return Object(a.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return M.a.env && (null === (t = M.a.env.currentUser) || void 0 === t ? void 0 : t.mail) !== u.b.currentUser.mail || u.b.currentUser.children || u.b.currentUser.impersonator || u.b.tutored ? [2] : [4, U.a.getInstance(u.b).updateUserPrefs({
                            employeeCompletedObjectives: {
                                $add: [e]
                            }
                        })];
                    case 1:
                        return n.sent(),
                        [4, u.b.db.saveNow()];
                    case 2:
                        return n.sent(),
                        u.b.emplOnboardingClient.suspense.$cache.invalidate("missionPath"),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.catch = function(e) {
            console.warn("Could not complete the behavior")
        }
        ,
        e.resetOnboarding = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                return Object(a.__generator)(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, U.a.getInstance(u.b).updateUserPrefs({
                            employeeCompletedObjectives: []
                        })];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.computeTeacherOnboardingData = function(e) {
            var t;
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var n, r, o, i;
                return Object(a.__generator)(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return n = U.a.getInstance(u.b),
                        [4, Object(K.h)((function() {
                            return n.readUserPrefs()
                        }
                        )).load()];
                    case 1:
                        return r = a.sent(),
                        o = null !== (t = null == r ? void 0 : r.employeeCompletedObjectives) && void 0 !== t ? t : [],
                        (i = W[e]).forEach((function(e) {
                            e.objectives.forEach((function(e) {
                                o.includes(e.behaviorId) && (e.completed = 1)
                            }
                            )),
                            e.objectives.every((function(e) {
                                return e.completed
                            }
                            )) && (e.completed = !0)
                        }
                        )),
                        [2, i]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    o.a.KEDOnboardingService || (o.a.KEDOnboardingService = F);
    var z = n(71)
      , q = function() {
        function e(t) {
            var n = this
              , r = function(e) {
                return "function" == typeof n[e] && "constructor" !== e && "fetch" !== e && "dispose" !== e
            };
            Object.keys(e.prototype).forEach((function(e) {
                r(e) && (n[e] = Object(i.h)(n[e]))
            }
            )),
            this.suspense = Object(V.a)(this, {
                isApiMethod: r
            }),
            this.gymnasiumTeacher = (null == t ? void 0 : t.currentUser) && Object(z.a)(t.currentUser)
        }
        return e.prototype.missionPath = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var e, t, n, r;
                return Object(a.__generator)(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return e = this.gymnasiumTeacher ? "gymnasium" : "primary",
                        t = G.find((function(t) {
                            return t.pathId === e
                        }
                        )),
                        [4, F.computeTeacherOnboardingData(t.pathId)];
                    case 1:
                        return n = a.sent(),
                        (r = Object.assign([], n).sort(Object(p.i)("missionNumber")).reverse().find((function(e) {
                            return e.completed
                        }
                        ))) ? r.missionNumber === n.length ? t.currentMission = n[n.length - 1] : t.currentMission = n.find((function(e) {
                            return e.missionNumber === r.missionNumber + 1
                        }
                        )) : t.currentMission = n[0],
                        [2, Promise.resolve([t])]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.selfReportingBehavior = function() {
            var e = R;
            return Promise.resolve(e)
        }
        ,
        e.prototype.fetchMissionObjectiveType = function(e) {
            var t;
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                return Object(a.__generator)(this, (function(n) {
                    return [2, Promise.resolve(null === (t = B.find((function(t) {
                        return t.behaviorId === e
                    }
                    ))) || void 0 === t ? void 0 : t.behaviorType)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.fetchMission = function(e, t) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var n, r, o;
                return Object(a.__generator)(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, F.computeTeacherOnboardingData(e)];
                    case 1:
                        if (n = a.sent(),
                        r = t > 1 ? n.find((function(e) {
                            return e.missionNumber === t - 1
                        }
                        )) : n[0],
                        !(1 === t || r.completed))
                            throw "Current mission objectives have not been completed yet";
                        return o = n.find((function(e) {
                            return e.missionNumber === t
                        }
                        )),
                        [2, Promise.resolve(o)]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.submitSelfReportingBehavior = function(e) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                return Object(a.__generator)(this, (function(t) {
                    return F.completeBehavior(e),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    u.a.icClient = l.b.IC_API_URL ? u.a.icClient || new P.a(u.a,s.c,l.b.IC_API_URL,!1) : null,
    u.a.emplOnboardingClient = l.b.IC_API_URL ? u.a.emplOnboardingClient || new q(u.a) : null;
    var H, Y = n(127), Z = function() {
        function e(e) {
            var t = this
              , n = l.a.KED_MESSAGING_HUB_URL || l.a.KED_API_URL.replace("/api/", "/messagehub");
            this.env = e,
            this.connection = (new Y.a).withUrl(n, {
                accessTokenFactory: function() {
                    return Object(a.__awaiter)(t, void 0, void 0, (function() {
                        return Object(a.__generator)(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.env.bearerProvider.getBearer()];
                            case 1:
                                return [2, e.sent().token]
                            }
                        }
                        ))
                    }
                    ))
                }
            }).withAutomaticReconnect().build()
        }
        return e.prototype.getCurrentUserConversationsObservable = function(e) {
            var t = this
              , n = new J({
                fetchData: function() {
                    return Object(a.__awaiter)(t, void 0, void 0, (function() {
                        var t;
                        return Object(a.__generator)(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return t = {},
                                [4, this.getCurrentUserConversations(e)];
                            case 1:
                                return [2, (t.conversations = n.sent(),
                                t)]
                            }
                        }
                        ))
                    }
                    ))
                },
                getConnection: function() {
                    return t.connection
                },
                wsEvents: {
                    ReceiveConversationAsync: function(e, t) {
                        var n = Object.assign(e.conversations);
                        return {
                            conversations: n = Object(a.__spreadArray)(Object(a.__spreadArray)([], Object(a.__read)(n)), [Object(a.__assign)(Object(a.__assign)({}, t.updates), {
                                acl: t.acl,
                                id: t.id
                            })])
                        }
                    },
                    UpdateConversationAsync: function(e, t) {
                        var n = e.conversations.findIndex((function(e) {
                            return e.id === t.id
                        }
                        ));
                        if (n < 0)
                            return e;
                        var r = Object.assign({}, e.conversations[n]);
                        return Object.keys(t.updates).forEach((function(e) {
                            r[e] = t.updates[e]
                        }
                        )),
                        {
                            conversations: e.conversations.slice(0, n).concat(r).concat(e.conversations.slice(n + 1))
                        }
                    }
                }
            });
            return new K.c(n,1 / 0)
        }
        ,
        e.prototype.getNotificationsObservable = function(e) {
            var t = this
              , n = new J({
                fetchData: function() {
                    return Object(a.__awaiter)(t, void 0, void 0, (function() {
                        var t;
                        return Object(a.__generator)(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return t = {},
                                [4, this.env.db.unreadMessages.tags(e).load()];
                            case 1:
                                return [2, (t.notifications = n.sent(),
                                t)]
                            }
                        }
                        ))
                    }
                    ))
                },
                getConnection: function() {
                    return t.connection
                },
                wsEvents: {
                    ReceiveNotificationsAsync: function(e, t) {
                        return {
                            notifications: Object(a.__spreadArray)(Object(a.__spreadArray)([], Object(a.__read)(e.notifications)), [Object(a.__assign)({
                                id: t.id
                            }, t.updates)])
                        }
                    },
                    UnreadMessagesUpdated: function(e, t) {
                        return {
                            notifications: e.notifications.filter((function(e) {
                                return !t.find((function(t) {
                                    return t === e.id
                                }
                                ))
                            }
                            ))
                        }
                    }
                }
            });
            return new K.c(n,1 / 0)
        }
        ,
        e.prototype.getMessageObservable = function(e) {
            var t = this
              , n = new J({
                fetchData: function() {
                    return Object(a.__awaiter)(t, void 0, void 0, (function() {
                        var t;
                        return Object(a.__generator)(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return t = {},
                                [4, this.env.db.messages.hasEdgesFrom([e]).load()];
                            case 1:
                                return [2, (t.messages = n.sent(),
                                t)]
                            }
                        }
                        ))
                    }
                    ))
                },
                getConnection: function() {
                    return t.connection
                },
                wsEvents: {
                    ReceiveMessageAsync: function(t, n) {
                        return n.conversationId === e ? {
                            messages: Object(a.__spreadArray)(Object(a.__spreadArray)([], Object(a.__read)(t.messages)), [n.updates])
                        } : {
                            messages: t.messages
                        }
                    }
                }
            });
            return new K.c(n,1 / 0)
        }
        ,
        e.prototype.getCurrentUserConversations = function(e) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                return Object(a.__generator)(this, (function(e) {
                    return [2, this.env.db.conversations.role("USER").include("acl").load()]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.initConnection = function() {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var e;
                return Object(a.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        if (!this.connection || this.connection.state === Y.b.Connected)
                            return [3, 4];
                        t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, , 4]),
                        [4, this.connection.start()];
                    case 2:
                        return t.sent(),
                        [3, 4];
                    case 3:
                        return e = t.sent(),
                        console.error("Error from messaging client:", e),
                        Object(p.x)(Object(p.a)(H || (H = Object(a.__makeTemplateObject)(["Not able to connect to messagin system"], ["Not able to connect to messagin system"])))),
                        [3, 4];
                    case 4:
                        return [2, this.connection]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.addNewConversation = function(e) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return Object(a.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        if (this.connection.state !== Y.b.Connected)
                            return [3, 5];
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]),
                        [4, this.connection.send("AddNewConversation", {
                            op: "add",
                            id: e.id,
                            table: "conversations",
                            doc: e,
                            acl: e.acl
                        })];
                    case 2:
                        return n.sent(),
                        [3, 4];
                    case 3:
                        return t = n.sent(),
                        console.log(t),
                        [3, 4];
                    case 4:
                        return [3, 6];
                    case 5:
                        alert("No connection to server yet."),
                        n.label = 6;
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.sendMessage = function(t, n, r) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var o, i, s;
                return Object(a.__generator)(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        if (this.connection.state !== Y.b.Connected)
                            return [3, 5];
                        o = e.getUnreadMessages(t, n, r),
                        n.acl = t.acl,
                        i = o.map((function(e) {
                            return e.acl = t.acl,
                            {
                                op: "add",
                                id: e.id,
                                table: "unreadMessages",
                                doc: e
                            }
                        }
                        )),
                        c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]),
                        [4, this.connection.send("SendMessage", Object(a.__spreadArray)([{
                            op: "add",
                            id: n.id,
                            table: "messages",
                            doc: n
                        }, {
                            op: "link",
                            sourceTable: "conversations",
                            label: "messages",
                            sourceId: t.id,
                            targetId: n.id
                        }, {
                            op: "update",
                            table: "conversations",
                            id: t.id,
                            deltaDoc: {
                                lastSentMessage: n.dateTime
                            }
                        }], Object(a.__read)(i)), t)];
                    case 2:
                        return c.sent(),
                        [3, 4];
                    case 3:
                        return s = c.sent(),
                        console.log(s),
                        [3, 4];
                    case 4:
                        return [3, 6];
                    case 5:
                        alert("No connection to server yet."),
                        c.label = 6;
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setMessagesAsRead = function(e, t) {
            return Object(a.__awaiter)(this, void 0, void 0, (function() {
                var n;
                return Object(a.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return n = e.filter((function(e) {
                            return e.id
                        }
                        )).map((function(e) {
                            return {
                                op: "delete",
                                table: "unreadMessages",
                                id: e.id
                            }
                        }
                        )),
                        [4, this.connection.send("DeleteReadMessages", n, t)];
                    case 1:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.getUnreadMessages = function(e, t, n) {
            return e.acl.map((function(e) {
                return i.b.fromString(e).accessClaimValue
            }
            )).filter((function(e) {
                return !e.includes(n)
            }
            )).map((function(n) {
                return {
                    id: Object(i.j)(),
                    tags: [n, n + "/" + e.id],
                    messageId: t.id
                }
            }
            ))
        }
        ,
        Object(a.__decorate)([Object(K.g)()], e.prototype, "getCurrentUserConversationsObservable", null),
        Object(a.__decorate)([Object(K.g)()], e.prototype, "getNotificationsObservable", null),
        Object(a.__decorate)([Object(K.g)()], e.prototype, "getMessageObservable", null),
        e
    }(), J = function(e) {
        function t(t) {
            var n = t.wsEvents
              , r = t.fetchData
              , o = t.getConnection
              , i = t.params
              , s = e.call(this, (function(e) {
                var t = null
                  , c = []
                  , l = {
                    unsubscribe: function() {
                        return Object(a.__awaiter)(this, void 0, void 0, (function() {
                            var e, n, r, o, i, s, l;
                            return Object(a.__generator)(this, (function(u) {
                                this.closed = !0;
                                try {
                                    for (e = Object(a.__values)(c),
                                    n = e.next(); !n.done; n = e.next())
                                        r = n.value,
                                        o = r.eventName,
                                        i = r.handler,
                                        t && t.off(o, i)
                                } catch (e) {
                                    s = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        n && !n.done && (l = e.return) && l.call(e)
                                    } finally {
                                        if (s)
                                            throw s.error
                                    }
                                }
                                return c = [],
                                [2]
                            }
                            ))
                        }
                        ))
                    },
                    closed: !1
                };
                return r(i).then((function(r) {
                    return Object(a.__awaiter)(s, void 0, void 0, (function() {
                        var i, s, u, d, p, m, h, g;
                        return Object(a.__generator)(this, (function(b) {
                            switch (b.label) {
                            case 0:
                                return l.closed ? [2] : (e(r, null, l),
                                l.closed ? [2] : t ? [3, 2] : [4, o()]);
                            case 1:
                                t = b.sent(),
                                b.label = 2;
                            case 2:
                                if (l.closed)
                                    return [2];
                                i = function(n, a) {
                                    var o = function(t) {
                                        l.closed || (r = a(r, t),
                                        e(r, null, l))
                                    };
                                    t.on(n, o),
                                    c.push({
                                        eventName: n,
                                        handler: o
                                    })
                                }
                                ;
                                try {
                                    for (s = Object(a.__values)(Object.entries(n)),
                                    u = s.next(); !u.done; u = s.next())
                                        d = Object(a.__read)(u.value, 2),
                                        p = d[0],
                                        m = d[1],
                                        i(p, m)
                                } catch (e) {
                                    h = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        u && !u.done && (g = s.return) && g.call(s)
                                    } finally {
                                        if (h)
                                            throw h.error
                                    }
                                }
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )).catch((function(t) {
                    l.closed || e(null, t, l)
                }
                )),
                l
            }
            )) || this;
            return s
        }
        return Object(a.__extends)(t, e),
        t
    }(K.d), Q = n(97);
    !u.a.messagingClient && Q.b.messaging && (u.a.messagingClient = new Z(u.a),
    u.a.messagingClient.initConnection());
    var $ = n(1)
      , X = n.n($)
      , ee = n(29)
      , te = n.n(ee)
      , ne = n(96)
      , re = n(5)
      , ae = Object($.lazy)((function() {
        return n.e(25).then(n.bind(null, 667))
    }
    ));
    u.b.currentUser && (u.b.currentUser.roles.includes("ADMIN") && Object(d.b)(location.search, {
        toLower: !0
    }).edittestchildren && !document.getElementById("KED_TESTCHILDREN_EDITOR") && document.addEventListener("DOMContentLoaded", (function() {
        var e = document.createElement("div");
        e.id = "KED_TESTUSER_EDITOR",
        e.className = "ked-test-children-editor",
        document.body.appendChild(e),
        te.a.render(X.a.createElement(ie, null, X.a.createElement($.Suspense, {
            fallback: X.a.createElement(ne.b, null)
        }, X.a.createElement(ae, null))), e)
    }
    )));
    var oe, ie = re.b.div.withConfig({
        displayName: "TestChildrenDiv",
        componentId: "-16bxfg6"
    })(oe || (oe = Object(a.__makeTemplateObject)(["\n  position: absolute;\n  top: 5%;\n  left: 10%;\n  width: 80%;\n  background-color: white;\n  border: 2px solid var(--col-red);\n  border-radius: var(--border-radius-l);\n  padding: 1em;\n  box-shadow: var(--shadow-large);\n  h1 {\n    margin: 0 0 0.5em 0;\n    font-size: 1.4em;\n    font-weight: bold;\n  }\n  table thead {\n    text-align: left;\n  }\n  table td {\n    padding-right: 0.5em;\n  }\n  input:focus {\n    border-bottom-color: var(--col-red);\n  }\n"], ["\n  position: absolute;\n  top: 5%;\n  left: 10%;\n  width: 80%;\n  background-color: white;\n  border: 2px solid var(--col-red);\n  border-radius: var(--border-radius-l);\n  padding: 1em;\n  box-shadow: var(--shadow-large);\n  h1 {\n    margin: 0 0 0.5em 0;\n    font-size: 1.4em;\n    font-weight: bold;\n  }\n  table thead {\n    text-align: left;\n  }\n  table td {\n    padding-right: 0.5em;\n  }\n  input:focus {\n    border-bottom-color: var(--col-red);\n  }\n"]))), se = n(73), ce = n(203), le = n(130), ue = n(57), de = n(52), pe = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(1), n.e(19)]).then(n.bind(null, 658))
    }
    )), me = Object(de.a)((function(e) {
        var t = ue.a.read()
          , n = Object($.useRef)(null);
        return Object($.useEffect)((function() {}
        )),
        Object($.useEffect)((function() {
            function e(e) {
                "Escape" === e.key && (ue.a.dispatch(!1),
                e.stopPropagation(),
                e.preventDefault())
            }
            function r(e) {
                var t, n;
                (null === (n = (t = e.target).closest) || void 0 === n ? void 0 : n.call(t, ".profile-page-area")) || (e.stopPropagation(),
                e.preventDefault())
            }
            if (t)
                return n.current.focus(),
                document.addEventListener("keydown", e),
                document.addEventListener("wheel", r, {
                    passive: !1
                }),
                function() {
                    document.removeEventListener("keydown", e),
                    document.removeEventListener("wheel", r)
                }
        }
        ), [t]),
        X.a.createElement(X.a.Fragment, null, t && X.a.createElement("div", {
            className: "modal-page-wrap",
            style: {
                pointerEvents: "none"
            }
        }, X.a.createElement("div", {
            className: "profile-page-dialog",
            tabIndex: 0,
            "aria-disabled": "false",
            style: {
                pointerEvents: "auto"
            },
            ref: n
        }, X.a.createElement($.Suspense, {
            fallback: X.a.createElement(le.b, null)
        }, X.a.createElement(pe, null)))))
    }
    )), he = n(41), ge = n(51), be = n(199), fe = n(170);
    u.b.currentUser && !Q.b.aipHideLogBook && document.addEventListener("DOMContentLoaded", (function() {
        var e = document.getElementById("pageHeaderProfileLink");
        if (e) {
            var t = Object(ge.b)(Object(be.c)((function(e) {
                var t = e.intl;
                return X.a.createElement(he.b.Provider, {
                    value: {
                        intl: t
                    }
                }, X.a.createElement(fe.a, null, X.a.createElement(ce.a, null)))
            }
            )), "ar" === l.a.KED_SCHOOL_LOCALE);
            te.a.render(X.a.createElement(t, null), e)
        }
        if (!document.getElementById("KED_CHILD_SELECTOR_ELEM") && !document.getElementById("KED_PROFILE_PAGE_ELEM")) {
            var n = document.createElement("div");
            n.id = "KED_PROFILE_PAGE_ELEM",
            document.body.appendChild(n);
            var r = Object(ge.b)(Object(be.c)((function(e) {
                var t = e.intl;
                return X.a.createElement(he.b.Provider, {
                    value: {
                        intl: t
                    }
                }, X.a.createElement(fe.a, null, X.a.createElement(me, null)))
            }
            )), "ar" === l.a.KED_SCHOOL_LOCALE);
            te.a.render(X.a.createElement(r, null), n)
        }
    }
    ));
    var ve, ke, we, ye, _e = Object(re.c)(ve || (ve = Object(a.__makeTemplateObject)(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n"]))), Oe = Object(re.c)(ke || (ke = Object(a.__makeTemplateObject)(["\n  0% {\n    transform: translate(-50%, -50%) scale(0.9);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n"], ["\n  0% {\n    transform: translate(-50%, -50%) scale(0.9);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n"]))), Te = re.b.svg.withConfig({
        displayName: "TimerSvg",
        componentId: "-ugy7th"
    })(we || (we = Object(a.__makeTemplateObject)(["\n  width: 10em;\n  height: 10em;\n  user-select: none;\n\n  tspan.on {\n    animation-name: ", " 1s infinite;\n  }\n  text {\n    fill: var(--col-cyan);\n  }\n  circle {\n    stroke: var(--col-cyan);\n  }\n  circle.clock-circle {\n    fill: #fff;\n    transition: fill 500ms;\n  }\n  circle.progress-fill {\n    fill: #fff;\n  }\n  .incButton,\n  .decButton {\n    opacity: 0.2;\n    line {\n      stroke: var(--col-cyan);\n    }\n    &:hover {\n      transform: scale(1.1);\n      transform-origin: 0 -25%;\n    }\n  }\n  &:hover {\n    .incButton,\n    .decButton,\n    .playPause,\n    .directionToggle {\n      transition: opacity 500ms;\n      opacity: 1;\n    }\n  }\n  .playPause {\n    opacity: 0.2;\n    &:hover {\n      transform: scale(1.1);\n      transform-origin: 0 25%;\n    }\n    line,\n    polygon {\n      stroke: var(--col-cyan);\n      fill: var(--col-cyan);\n    }\n  }\n  .directionToggle {\n    opacity: 0.2;\n    &:hover {\n      transform: scale(1.1);\n      transform-origin: 0 25%;\n    }\n    line,\n    polygon {\n      stroke: var(--col-cyan);\n      fill: var(--col-cyan);\n    }\n  }\n"], ["\n  width: 10em;\n  height: 10em;\n  user-select: none;\n\n  tspan.on {\n    animation-name: ", " 1s infinite;\n  }\n  text {\n    fill: var(--col-cyan);\n  }\n  circle {\n    stroke: var(--col-cyan);\n  }\n  circle.clock-circle {\n    fill: #fff;\n    transition: fill 500ms;\n  }\n  circle.progress-fill {\n    fill: #fff;\n  }\n  .incButton,\n  .decButton {\n    opacity: 0.2;\n    line {\n      stroke: var(--col-cyan);\n    }\n    &:hover {\n      transform: scale(1.1);\n      transform-origin: 0 -25%;\n    }\n  }\n  &:hover {\n    .incButton,\n    .decButton,\n    .playPause,\n    .directionToggle {\n      transition: opacity 500ms;\n      opacity: 1;\n    }\n  }\n  .playPause {\n    opacity: 0.2;\n    &:hover {\n      transform: scale(1.1);\n      transform-origin: 0 25%;\n    }\n    line,\n    polygon {\n      stroke: var(--col-cyan);\n      fill: var(--col-cyan);\n    }\n  }\n  .directionToggle {\n    opacity: 0.2;\n    &:hover {\n      transform: scale(1.1);\n      transform-origin: 0 25%;\n    }\n    line,\n    polygon {\n      stroke: var(--col-cyan);\n      fill: var(--col-cyan);\n    }\n  }\n"])), _e), je = re.b.div.withConfig({
        displayName: "ContainerDiv",
        componentId: "-1993dn1"
    })(ye || (ye = Object(a.__makeTemplateObject)(["\n  position: relative;\n  display: inline-block;\n\n  .hide {\n    position: absolute;\n    top: 0.1em;\n    right: 0.1em;\n    display: none;\n    color: var(--col-red);\n    opacity: 0.8;\n    &:hover {\n      opacity: 1;\n      cursor: pointer;\n    }\n  }\n\n  .dragHandle {\n    display: none;\n    position: absolute;\n    top: 0.1em;\n    left: 0.1em;\n    color: var(--col-cyan);\n    opacity: 0.8;\n  }\n\n  &.ticking {\n    tspan,\n    .incButton,\n    .decButton {\n      opacity: 0;\n      transition: opacity 1500ms;\n    }\n    circle.clock-circle {\n      fill: rgba(255, 255, 255, 0);\n    }\n    &:hover {\n      tspan,\n      .incButton,\n      .decButton {\n        opacity: 0.2;\n        transition: opacity 100ms;\n      }\n    }\n  }\n\n  &:hover {\n    .dragHandle {\n      display: unset;\n    }\n    .hide {\n      display: block;\n    }\n  }\n\n  &.dragging {\n    .dragHandle {\n      display: unset;\n    }\n  }\n  &.alarm {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    svg {\n      circle.clock-circle {\n        fill: rgba(255, 255, 255, 0.8);\n      }\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      transform-origin: '50% 50%';\n      animation-name: ", ";\n      animation-duration: 1s;\n      animation-iteration-count: infinite;\n    }\n    .hide {\n      display: none;\n    }\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  .hide {\n    position: absolute;\n    top: 0.1em;\n    right: 0.1em;\n    display: none;\n    color: var(--col-red);\n    opacity: 0.8;\n    &:hover {\n      opacity: 1;\n      cursor: pointer;\n    }\n  }\n\n  .dragHandle {\n    display: none;\n    position: absolute;\n    top: 0.1em;\n    left: 0.1em;\n    color: var(--col-cyan);\n    opacity: 0.8;\n  }\n\n  &.ticking {\n    tspan,\n    .incButton,\n    .decButton {\n      opacity: 0;\n      transition: opacity 1500ms;\n    }\n    circle.clock-circle {\n      fill: rgba(255, 255, 255, 0);\n    }\n    &:hover {\n      tspan,\n      .incButton,\n      .decButton {\n        opacity: 0.2;\n        transition: opacity 100ms;\n      }\n    }\n  }\n\n  &:hover {\n    .dragHandle {\n      display: unset;\n    }\n    .hide {\n      display: block;\n    }\n  }\n\n  &.dragging {\n    .dragHandle {\n      display: unset;\n    }\n  }\n  &.alarm {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    svg {\n      circle.clock-circle {\n        fill: rgba(255, 255, 255, 0.8);\n      }\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      transform-origin: '50% 50%';\n      animation-name: ", ";\n      animation-duration: 1s;\n      animation-iteration-count: infinite;\n    }\n    .hide {\n      display: none;\n    }\n  }\n"])), Oe), Ee = n(58), Se = Object(de.a)((function(e) {
        var t = e.durationStep
          , n = e.alarmTime
          , r = Object(a.__read)(Object($.useState)(Ee.a.value), 2)
          , o = r[0]
          , i = o.duration
          , s = o.paused
          , c = o.elapsed
          , l = o.position
          , u = o.stop
          , d = o.visible
          , p = o.clockwise
          , m = r[1];
        Object($.useEffect)((function() {
            var e = Ee.a.subscribe((function(e) {
                return m(e)
            }
            ));
            return function() {
                return e.unsubscribe()
            }
        }
        ), []);
        var h = Object($.useRef)(void 0)
          , g = Object($.useRef)(null)
          , b = 44
          , f = function(e, t, n, r) {
            var a = t ? (r ? t - (e + 1) : e) / t * 2 * Math.PI : 0
              , o = e ? Math.round(a * b) : 0
              , i = v(e ? t - e : t);
            if (n && g.current) {
                var s = g.current.getElementsByClassName("progress")[0];
                s && s.setAttribute("stroke-dashoffset", o.toString());
                var c = g.current.getElementsByClassName("progress-fill")[0];
                c && (c.setAttribute("cx", (e > 0 ? Math.cos(a) * b : b).toString()),
                c.setAttribute("cy", (e > 0 ? Math.sin(a) * b : 0).toString())),
                g.current.getElementsByClassName("timer-minutes")[0].innerHTML = i[0],
                g.current.getElementsByClassName("timer-seconds")[0].innerHTML = i[1]
            }
        }
          , v = function(e) {
            var t = Math.round(e / 1e3) % 60;
            return [((Math.round(e / 1e3) - t) / 60).toString().padStart(2, "0"), t.toString().padStart(2, "0")]
        }
          , k = function(e) {
            var t, n = i + 1e3 * e;
            t = n <= 0 ? 0 : n > 36e5 ? 36e5 : n,
            Object(Ee.c)({
                paused: !0,
                duration: t,
                elapsed: 0 === t ? 0 : c
            })
        }
          , w = function(e) {
            if (g.current) {
                e.preventDefault(),
                g.current.classList.add("dragging");
                var t = e.clientX
                  , n = e.clientY
                  , r = g.current
                  , a = r.offsetTop
                  , o = r.offsetLeft
                  , i = g.current.getBoundingClientRect()
                  , s = i.left
                  , c = i.top;
                h.current = {
                    left: s - o,
                    top: c - a,
                    x: t,
                    y: n
                },
                window.addEventListener("mousemove", y, !1),
                window.addEventListener("mouseup", _, !1)
            }
        }
          , y = function(e) {
            var t = e.clientX
              , n = e.clientY;
            e.screenX,
            e.screenY;
            h.current && g.current && (g.current.style.transform = "translate(" + (h.current.left + t - h.current.x) + "px, " + (h.current.top + n - h.current.y + window.scrollY) + "px)")
        }
          , _ = function(e) {
            e.clientX,
            e.clientY;
            window.removeEventListener("mousemove", y, !1),
            window.removeEventListener("mouseup", _, !1),
            g.current && (g.current.classList.remove("dragging"),
            Object(Ee.c)({
                position: g.current.style.transform
            }))
        }
          , O = function() {
            var e = Date.now()
              , t = Ee.a.value.clockwise;
            s || (u - e <= 0 ? (f(0, i, d, t),
            Object(Ee.c)({
                paused: !0,
                elapsed: 0,
                stop: 0
            }),
            Object(a.__awaiter)(void 0, void 0, void 0, (function() {
                var e;
                return Object(a.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return g.current ? (e = g.current.style.transform,
                        g.current.classList.add("alarm"),
                        g.current.style.transform = "",
                        [4, new Promise((function(e) {
                            var t = function(e) {
                                return "Escape" === e.key && a()
                            }
                              , r = Ee.a.subscribe((function(e) {
                                return !e.visible && a()
                            }
                            ))
                              , a = function() {
                                window.removeEventListener("keydown", t),
                                r.unsubscribe(),
                                e()
                            };
                            setTimeout(a, n),
                            window.addEventListener("keydown", t)
                        }
                        ))]) : [2];
                    case 1:
                        return t.sent(),
                        g.current && (g.current.classList.remove("alarm"),
                        g.current.style.transform = e),
                        Object(Ee.b)(!1),
                        [2]
                    }
                }
                ))
            }
            ))) : f(Math.round(i - u + e), i, d, t))
        };
        return Object($.useEffect)((function() {
            if (!s) {
                var e = function(e) {
                    var t = !1
                      , n = requestAnimationFrame((function r() {
                        t || (e(),
                        n = requestAnimationFrame(r))
                    }
                    ));
                    return {
                        stop: function() {
                            n && (cancelAnimationFrame(n),
                            t = !0,
                            n = null)
                        }
                    }
                }(O);
                return function() {
                    return e.stop()
                }
            }
        }
        ), [s, u, i, d]),
        Object($.useLayoutEffect)((function() {
            f(c, i, d, p),
            g.current && (g.current.style.transform = null != l ? l : "")
        }
        ), [d, c, i, l, p]),
        d ? X.a.createElement(je, {
            ref: g,
            className: s ? "paused" : "ticking"
        }, X.a.createElement("i", {
            className: "dragHandle fas fa-arrows-alt",
            onMouseDown: w
        }), X.a.createElement(Te, {
            viewBox: "-50 -50 100 100"
        }, X.a.createElement("circle", {
            className: "clock-circle",
            r: b,
            fill: "transparent",
            strokeWidth: "1",
            stroke: "black",
            onMouseDown: w
        }), i && X.a.createElement("g", null, X.a.createElement("circle", {
            className: "progress",
            transform: "rotate(-90)",
            r: b,
            fill: "none",
            strokeWidth: "4",
            stroke: "black",
            strokeLinecap: "round",
            strokeDasharray: b * Math.PI * 2
        }), X.a.createElement("circle", {
            r: "4",
            className: "progress-fill",
            fill: "var(--col-cyan)",
            transform: "rotate(-90) scale(1,-1)"
        })), X.a.createElement("text", {
            textAnchor: "middle",
            x: "0",
            y: "10",
            fontSize: "30",
            onMouseDown: w
        }, X.a.createElement("tspan", {
            className: "timer-minutes"
        }), X.a.createElement("tspan", {
            className: s ? "" : "on"
        }, ":"), X.a.createElement("tspan", {
            className: "timer-seconds"
        })), X.a.createElement("g", {
            className: "incButton"
        }, X.a.createElement("line", {
            x1: "-10",
            y1: "-25",
            x2: "-10",
            y2: "-15",
            stroke: "black",
            strokeWidth: "2",
            strokeLinecap: "round"
        }), X.a.createElement("line", {
            x1: "-15",
            y1: "-20",
            x2: "-5",
            y2: "-20",
            stroke: "black",
            strokeWidth: "2",
            strokeLinecap: "round"
        }), X.a.createElement("rect", {
            width: "16",
            height: "16",
            y: "-28",
            x: "-18",
            fill: "transparent",
            onClick: function(e) {
                e.stopPropagation(),
                s && k(t || 30)
            }
        })), X.a.createElement("g", {
            className: "decButton"
        }, X.a.createElement("line", {
            x1: "5",
            y1: "-20",
            x2: "15",
            y2: "-20",
            stroke: "black",
            strokeWidth: "2",
            strokeLinecap: "round"
        }), X.a.createElement("rect", {
            width: "16",
            height: "16",
            y: "-28",
            x: "2",
            fill: "transparent",
            onClick: function(e) {
                e.stopPropagation(),
                s && k(-(t || 30))
            }
        })), X.a.createElement("g", {
            className: "directionToggle"
        }, X.a.createElement("line", {
            x1: "-16",
            y1: "22",
            x2: "-6",
            y2: "22",
            strokeWidth: "1"
        }), X.a.createElement("polygon", {
            points: "-6 21, -3 22, -6 23"
        }), X.a.createElement("line", {
            x1: "-13",
            y1: "27",
            x2: "-3",
            y2: "27",
            strokeWidth: "1"
        }), X.a.createElement("polygon", {
            points: "-13 26, -16 27, -13 28"
        }), X.a.createElement("rect", {
            width: "13",
            height: "8",
            y: "20",
            x: "-16",
            fill: "transparent",
            onClick: function(e) {
                e.stopPropagation(),
                Object(Ee.c)({
                    clockwise: !p
                })
            }
        })), X.a.createElement("g", {
            className: "playPause"
        }, s ? X.a.createElement("polygon", {
            points: "3,20 13,25 3,30",
            stroke: "black",
            strokeWidth: "4",
            strokeLinejoin: "round",
            strokeLinecap: "round"
        }) : X.a.createElement(X.a.Fragment, null, X.a.createElement("line", {
            x1: "3",
            y1: "20",
            x2: "3",
            y2: "30",
            stroke: "black",
            strokeWidth: "4",
            strokeLinecap: "round"
        }), X.a.createElement("line", {
            x1: "13",
            y1: "20",
            x2: "13",
            y2: "30",
            stroke: "black",
            strokeWidth: "4",
            strokeLinecap: "round"
        })), X.a.createElement("rect", {
            width: "20",
            height: "20",
            y: "20",
            x: "-2",
            fill: "transparent",
            onClick: function(e) {
                if (e.stopPropagation(),
                i) {
                    var t = {};
                    if (t.paused = !s,
                    s) {
                        var n = (new Date).getTime();
                        0 === c && (t.start = n);
                        var r = n + i - c;
                        t.stop = r
                    } else
                        t.elapsed = Math.round((new Date).getTime() + i - u);
                    Object(Ee.c)(t)
                }
            }
        }))), X.a.createElement("i", {
            className: "hide fas fa-times",
            onClick: function() {
                return Object(Ee.b)()
            }
        })) : null
    }
    ));
    u.b.currentUser && document.addEventListener("DOMContentLoaded", (function() {
        var e = document.getElementById("KEDComponents-timer");
        e || ((e = document.createElement("div")).id = "KEDComponents-timer",
        e.setAttribute("style", "\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 0;\n      height: 0;\n      pointer-events: none;\n    "),
        document.body.appendChild(e));
        var t = Object(d.b)(location.search, {
            toLower: !0
        })
          , n = X.a.createElement("div", {
            style: {
                pointerEvents: "auto"
            }
        }, X.a.createElement(Se, {
            alarmTime: 6e3,
            durationStep: parseInt(t.timerstep) || 60
        }));
        te.a.render(n, e)
    }
    ));
    var xe = n(191)
      , Ce = n(115)
      , De = n(168)
      , Ne = [X.a.createElement(X.a.Fragment, null, "   "), X.a.createElement(X.a.Fragment, null, ".  "), X.a.createElement(X.a.Fragment, null, ".. "), X.a.createElement(X.a.Fragment, null, "...")]
      , Ae = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.state = {
                errors: [],
                infos: [],
                progressDotsFrame: 0
            },
            n._unhandledRejection = n._unhandledRejection.bind(n),
            n._error = n._error.bind(n),
            n._customError = n._customError.bind(n),
            n._onInfo = n._onInfo.bind(n),
            n._onTempInfo = n._onTempInfo.bind(n),
            n._onTempInfoClose = n._onTempInfoClose.bind(n),
            n._onSuccess = n._onSuccess.bind(n),
            n._dbWriterError = n._dbWriterError.bind(n),
            n._dbWriterStateChanged = n._dbWriterStateChanged.bind(n),
            n
        }
        return Object(a.__extends)(t, e),
        t.prototype._addError = function(e, t, n) {
            var r = this;
            this.setState((function(r) {
                var a = r.errors;
                return a.some((function(t) {
                    return t.message === e
                }
                )) ? {
                    errors: a
                } : (a.length > 2 && (a = a.slice(1)),
                {
                    errors: a.concat([{
                        message: e,
                        details: t,
                        retryable: n
                    }])
                })
            }
            )),
            n || setTimeout((function() {
                r.setState((function(t) {
                    return {
                        errors: t.errors.filter((function(t) {
                            return t.message !== e
                        }
                        ))
                    }
                }
                ))
            }
            ), 3e4)
        }
        ,
        t.prototype._addInfo = function(e, t) {
            this.setState((function(n) {
                return {
                    infos: n.infos.filter((function(e) {
                        return e.id !== t
                    }
                    )).concat({
                        msg: e,
                        id: t
                    })
                }
            }
            )),
            this.state.infos.length > 0 && this.startTempInfoAnim()
        }
        ,
        t.prototype._closeInfo = function(e) {
            this.setState((function(t) {
                return {
                    infos: t.infos.filter((function(t) {
                        return t.id !== e
                    }
                    ))
                }
            }
            )),
            this.state.infos.some((function(t) {
                return t.id !== e
            }
            )) || this.stopTempInfoAnim()
        }
        ,
        t.prototype._dbWriterError = function(e, t) {
            this._addError("Det går inte att spara till servern", e, t)
        }
        ,
        t.prototype._dbWriterStateChanged = function(e) {
            var t = e.isEdited
              , n = e.isSaving;
            t || this.setState((function(e) {
                var t = e.errors;
                return {
                    errors: t = t.filter((function(e) {
                        return !e.retryable
                    }
                    ))
                }
            }
            )),
            this.setState({
                dbWriterIsEdited: t,
                dbWriterIsSaving: n
            })
        }
        ,
        t.prototype.componentDidMount = function() {
            window.addEventListener("unhandledrejection", this._unhandledRejection),
            window.addEventListener("error", this._error),
            window.addEventListener("customerror", this._customError),
            window.addEventListener("info", this._onInfo),
            window.addEventListener("tempInfo", this._onTempInfo),
            window.addEventListener("tempInfoClose", this._onTempInfoClose),
            window.addEventListener("success", this._onSuccess),
            se.c.writer.onError(this._dbWriterError),
            se.c.writer.onStateChange(this._dbWriterStateChanged)
        }
        ,
        t.prototype.componentWillUnmount = function() {
            window.removeEventListener("unhandledrejection", this._unhandledRejection),
            window.removeEventListener("error", this._error),
            window.removeEventListener("customerror", this._customError),
            window.removeEventListener("info", this._onInfo),
            window.removeEventListener("tempInfo", this._onTempInfo),
            window.removeEventListener("tempInfoClose", this._onTempInfoClose),
            window.removeEventListener("success", this._onSuccess),
            se.c.writer.off(this._dbWriterError),
            se.c.writer.off(this._dbWriterStateChanged),
            this.stopTempInfoAnim()
        }
        ,
        t.prototype.startTempInfoAnim = function() {
            var e = this;
            this.intervalHdl || (this.intervalHdl = setInterval((function() {
                return e.setState({
                    progressDotsFrame: (e.state.progressDotsFrame + 1) % Ne.length
                })
            }
            ), 300))
        }
        ,
        t.prototype.stopTempInfoAnim = function() {
            this.intervalHdl && (clearInterval(this.intervalHdl),
            this.intervalHdl = null)
        }
        ,
        t.prototype._unhandledRejection = function(e) {
            var t = this.props.toastManager;
            e.reason && t.add(e.reason, {
                appearance: "warning",
                autoDismiss: !0
            })
        }
        ,
        t.prototype._error = function(e) {
            var t = this.props.toastManager;
            e.error && t.add(e.error.message || e.error, {
                appearance: "warning",
                autoDismiss: !0
            })
        }
        ,
        t.prototype._customError = function(e) {
            var t = this.props.toastManager;
            e.detail && t.add(e.detail, {
                appearance: "error",
                autoDismiss: !0
            })
        }
        ,
        t.prototype._onInfo = function(e) {
            this.props.toastManager.add(e.detail, {
                appearance: "info",
                autoDismiss: !0
            })
        }
        ,
        t.prototype._onTempInfo = function(e) {
            this._addInfo(e.detail.msg, e.detail.id)
        }
        ,
        t.prototype._onTempInfoClose = function(e) {
            this._closeInfo(e.detail.id)
        }
        ,
        t.prototype._onSuccess = function(e) {
            this.props.toastManager.add(e.detail, {
                appearance: "success",
                autoDismiss: !0
            })
        }
        ,
        t.prototype.render = function() {
            var e = this
              , t = this.state
              , n = t.errors
              , r = t.infos
              , a = t.dbWriterIsSaving
              , o = t.progressDotsFrame
              , i = Object(p.m)(r, (function(e) {
                return e.msg
            }
            ));
            return X.a.createElement("div", {
                className: "error-success-feedback",
                style: {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    pointerEvents: "none",
                    zIndex: 500
                }
            }, X.a.createElement("div", {
                style: {
                    display: "table",
                    margin: "0 auto"
                }
            }, n.filter((function(e) {
                return !e.retryable || !a
            }
            )).map((function(t) {
                var n = t.message
                  , r = t.details
                  , a = t.retryable
                  , o = t.showDetails;
                return X.a.createElement("div", {
                    key: n,
                    className: "error"
                }, X.a.createElement("div", {
                    style: {
                        float: "left"
                    }
                }, n), X.a.createElement("div", {
                    style: {
                        pointerEvents: "auto"
                    }
                }, X.a.createElement(Ce.a, {
                    onClick: function() {
                        return e.removeError(n)
                    }
                })), r || a ? X.a.createElement("div", {
                    style: {
                        pointerEvents: "auto"
                    }
                }, r ? X.a.createElement(De.a, {
                    action: function() {
                        return e.toggleDetails(n)
                    }
                }, o ? "Dölj detailer" : "Visa detailjer") : void 0, o ? X.a.createElement("p", null, "" + r) : X.a.createElement(X.a.Fragment, null, " "), a ? X.a.createElement(De.a, {
                    action: function() {
                        return e.retrySave()
                    }
                }, "Försök spara nu") : void 0) : void 0)
            }
            )), i.map((function(e) {
                var t = e.id
                  , n = e.msg;
                return X.a.createElement("p", {
                    key: t,
                    className: "info"
                }, n, Ne[o])
            }
            ))))
        }
        ,
        t.prototype.removeError = function(e) {
            this.setState((function(t) {
                return {
                    errors: t.errors.filter((function(t) {
                        return t.message !== e
                    }
                    ))
                }
            }
            ))
        }
        ,
        t.prototype.retrySave = function() {
            se.c.writer.retrySave()
        }
        ,
        t.prototype.toggleDetails = function(e) {
            this.setState((function(t) {
                return {
                    errors: t.errors.map((function(t) {
                        return t.message === e ? Object(a.__assign)(Object(a.__assign)({}, t), {
                            showDetails: !t.showDetails
                        }) : t
                    }
                    ))
                }
            }
            ))
        }
        ,
        t
    }($.Component)
      , Ie = Object(xe.withToastManager)(Ae);
    function Le() {
        return X.a.createElement(xe.ToastProvider, {
            autoDismiss: !0,
            placement: "bottom-left"
        }, X.a.createElement(Ie, null))
    }
    document.addEventListener("DOMContentLoaded", (function() {
        if (!o.a._toastInitialized) {
            var e = document.createElement("div");
            e.id = "KED_ERROR_SUCCESS_FEEDBACK",
            document.body.appendChild(e),
            te.a.render(X.a.createElement(Le, null), e),
            o.a._toastInitialized = !0
        }
    }
    ));
    var Pe = n(126)
      , Ve = n(209)
      , Ge = Object(ge.b)(Object(be.c)((function(e) {
        var t = e.intl;
        return X.a.createElement(he.b.Provider, {
            value: {
                intl: t
            }
        }, X.a.createElement(Re, null))
    }
    )))
      , Re = Object(de.a)((function() {
        return X.a.createElement(Ve.a, {
            dialogs: Pe.a.read(),
            popDialog: function() {
                Pe.a.dispatch(Object(a.__spreadArray)([], Object(a.__read)(Pe.a.value.slice(0, Pe.a.value.length - 1))))
            }
        })
    }
    ));
    document.addEventListener("DOMContentLoaded", (function() {
        if (!o.a._dialogsInitialized) {
            var e = document.createElement("div");
            document.body.appendChild(e),
            te.a.render(X.a.createElement(Ge, null), e),
            o.a._dialogsInitialized = !0
        }
    }
    )),
    u.b.complete = !!se.c,
    ue.a.subscribe((function(e) {
        e || M.a.restoreOrigEnv()
    }
    ));
    u.a.bearerProvider.getBearer();
    function Be(e) {
        return function(t) {
            var n = Object(a.__read)(Object($.useState)(!1), 2)
              , r = n[0]
              , o = n[1];
            return Object($.useEffect)((function() {
                u.a.bearerProvider.getBearer().then((function() {
                    o(!0)
                }
                ))
            }
            )),
            r ? X.a.createElement(he.b.Provider, {
                value: {
                    intl: t.intl
                }
            }, X.a.createElement(e, Object(a.__assign)({}, t))) : X.a.createElement("p", null, "V.g. vänta... autenticerar... ", X.a.createElement(ne.b, null))
        }
    }
    var Ue = n(134)
      , Me = "true" === localStorage.getItem("guessIsOnboarding");
    function Ke(e) {
        var t = e.children
          , n = e.title
          , r = Object(a.__read)(Object($.useState)(!1), 2)
          , o = r[0]
          , i = r[1]
          , s = Object($.useRef)(null);
        return X.a.createElement(X.a.Fragment, null, X.a.createElement(Ye, null, X.a.createElement("a", {
            tabIndex: 0,
            title: n,
            onClick: function() {
                return i(!o)
            },
            onBlur: function(e) {
                var t, n = e.relatedTarget;
                n && (null === (t = s.current) || void 0 === t ? void 0 : t.contains(n)) || i(!1)
            }
        }, X.a.createElement("i", {
            className: "fas fa-info-circle"
        }))), o && X.a.createElement(Ze, {
            onClick: function() {
                return i(!1)
            },
            tabIndex: 0,
            ref: s
        }, t))
    }
    var We, Fe, ze, qe, He, Ye = re.b.div.withConfig({
        displayName: "SelectorDiv",
        componentId: "-1uis33f"
    })(We || (We = Object(a.__makeTemplateObject)(["\n  position: absolute;\n  right: 0.5em;\n  top: -1.5em;\n  a {\n    opacity: 0.5;\n    margin: 0;\n    padding: 0;\n    border-radius: 100vw;\n    text-decoration: none;\n    &:hover {\n      opacity: 1;\n      transition: all 50ms ease-in-out;\n      font-weight: 600;\n      font-size: 180%;\n    }\n    color: #eee;\n    font-size: 150%;\n    font-weight: 300;\n  }\n"], ["\n  position: absolute;\n  right: 0.5em;\n  top: -1.5em;\n  a {\n    opacity: 0.5;\n    margin: 0;\n    padding: 0;\n    border-radius: 100vw;\n    text-decoration: none;\n    &:hover {\n      opacity: 1;\n      transition: all 50ms ease-in-out;\n      font-weight: 600;\n      font-size: 180%;\n    }\n    color: #eee;\n    font-size: 150%;\n    font-weight: 300;\n  }\n"]))), Ze = re.b.div.withConfig({
        displayName: "ContextMenuDiv",
        componentId: "-1jf9ee0"
    })(Fe || (Fe = Object(a.__makeTemplateObject)(["\n  position: absolute;\n  right: 0.5em;\n  top: -0.5em;\n  z-index: 10001;\n\n  ul {\n    background: #ffffff;\n    list-style: none;\n    box-shadow: 0 15px 35px rgba(50, 50, 90, 0.1),\n      0 5px 15px rgba(0, 0, 0, 0.07);\n    border-radius: 5px;\n\n    li {\n      white-space: nowrap;\n      transition: ease 0.2s;\n      margin: 0;\n\n      a {\n        display: block;\n        padding: 1em;\n        color: #b0bec5;\n        text-decoration: none;\n        transition: ease 0.2s;\n        cursor: pointer;\n      }\n      a:hover {\n        text-decoration: underline;\n      }\n\n      :hover {\n        background-color: #ddd;\n        a {\n          color: black;\n        }\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  right: 0.5em;\n  top: -0.5em;\n  z-index: 10001;\n\n  ul {\n    background: #ffffff;\n    list-style: none;\n    box-shadow: 0 15px 35px rgba(50, 50, 90, 0.1),\n      0 5px 15px rgba(0, 0, 0, 0.07);\n    border-radius: 5px;\n\n    li {\n      white-space: nowrap;\n      transition: ease 0.2s;\n      margin: 0;\n\n      a {\n        display: block;\n        padding: 1em;\n        color: #b0bec5;\n        text-decoration: none;\n        transition: ease 0.2s;\n        cursor: pointer;\n      }\n      a:hover {\n        text-decoration: underline;\n      }\n\n      :hover {\n        background-color: #ddd;\n        a {\n          color: black;\n        }\n      }\n    }\n  }\n"]))), Je = n(80), Qe = re.b.div.withConfig({
        displayName: "OnboardingContainer",
        componentId: "-nfxop"
    })(ze || (ze = Object(a.__makeTemplateObject)(["\n  height: 188px;\n  max-width: 95%;\n  padding: 0 0 0 30px;\n"], ["\n  height: 188px;\n  max-width: 95%;\n  padding: 0 0 0 30px;\n"]))), $e = Object(de.c)((function() {
        var e, t, n, r = Object(g.a)(u.b.currentUser) && !Object(z.a)(u.b.currentUser), o = Object(g.a)(u.b.currentUser) && !(null === (e = u.b.currentUser) || void 0 === e ? void 0 : e.schoolGrade);
        n = o ? u.b.emplOnboardingClient : u.b.icClient;
        var i = U.a.getInstance(u.b)
          , s = Object(a.__read)(Object(K.i)([function() {
            return n.suspense.missionPath()
        }
        , function() {
            return n.suspense.selfReportingBehavior()
        }
        , function() {
            return i.readUserPrefs()
        }
        ]), 3)
          , l = s[0]
          , d = s[1]
          , m = s[2].hideOnboarding
          , h = Object(z.a)(u.b.currentUser) ? /gymn/ : u.b.currentUser.schoolGrade >= 6 ? /6\-9/ : /4\-5/
          , b = r ? null !== (t = u.b.currentUser.schoolGrade) && void 0 !== t ? t : 4 : 0
          , f = l.find((function(e) {
            return !e.currentMission.completed && /onboarding/i.test(e.pathName) && (h.test(e.pathName) || o)
        }
        ));
        if (Object($.useEffect)((function() {
            var e;
            Me !== (e = !!f && !m) && (Me = e,
            localStorage.setItem("guessIsOnboarding", e ? "true" : "false"))
        }
        ), [f, m]),
        !f)
            return null;
        var v = location.host.includes("localhost") || location.search.includes("testversion=dev");
        return X.a.createElement("div", {
            style: {
                position: "relative",
                width: "100%"
            }
        }, X.a.createElement(Ke, null, X.a.createElement("ul", null, X.a.createElement("li", null, X.a.createElement("a", {
            onClick: function() {
                i.updateUserPrefs({
                    hideOnboarding: !m
                })
            }
        }, m ? "Visa introresan" : "Dölj introresan")), r && X.a.createElement("li", null, X.a.createElement("a", {
            href: Object(c.g)(location.pathname, {
                schoolGrade: b > 5 ? "4" : "6"
            }),
            title: "Byt till " + (b > 5 ? "4-5" : "6-9")
        }, X.a.createElement("span", null, "Byt till: "), b > 5 ? "4-5" : "6-9")), Object(g.a)(u.b.currentUser) && X.a.createElement("li", null, X.a.createElement("a", {
            href: Object(c.g)(location.pathname, {}, "schoolGrade"),
            title: "KED onboarding"
        }, X.a.createElement("span", null, "Teacher onboarding "))), v && X.a.createElement("li", null, X.a.createElement("a", {
            onClick: function() {
                return Object(a.__awaiter)(void 0, void 0, void 0, (function() {
                    return Object(a.__generator)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, F.resetOnboarding()];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            },
            title: "Reset KED Onboarding"
        }, X.a.createElement("span", null, "Reset onboarding"))))), !m && X.a.createElement(Qe, null, X.a.createElement(Ue.g, {
            data: f,
            selfReportableBehaviors: d,
            fetchMission: function(e) {
                return Object(a.__awaiter)(void 0, void 0, void 0, (function() {
                    return Object(a.__generator)(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            Object(Je.b)(),
                            t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]),
                            [4, n.fetchMission(f.pathId, e)];
                        case 2:
                            return [2, t.sent()];
                        case 3:
                            return t.sent(),
                            Object(p.x)(Object(p.a)(qe || (qe = Object(a.__makeTemplateObject)(["Kunde inte ladda dina uppdrag"], ["Kunde inte ladda dina uppdrag"])))),
                            [2, {
                                completed: !0,
                                missionNumber: e,
                                objectives: [],
                                rewards: []
                            }];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            },
            navigate: function(e, t) {
                return Object(a.__awaiter)(void 0, void 0, void 0, (function() {
                    var r;
                    return Object(a.__generator)(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return o ? [4, n.fetchMissionObjectiveType(t)] : [3, 2];
                        case 1:
                            return r = a.sent(),
                            Xe(e, (function() {
                                location.href = Object(c.g)(e, {
                                    kedBehaviorId: t,
                                    kedBehaviorType: r
                                })
                            }
                            )),
                            [3, 3];
                        case 2:
                            Xe(e),
                            a.label = 3;
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            },
            sendSelfReport: function(e) {
                return Object(a.__awaiter)(void 0, void 0, void 0, (function() {
                    return Object(a.__generator)(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, n.submitSelfReportingBehavior(e)];
                        case 1:
                            return t.sent(),
                            n.suspense.$cache.invalidate("missionPath"),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
        })))
    }
    ), X.a.createElement((function() {
        return Me ? X.a.createElement(Qe, null) : null
    }
    ), null));
    function Xe(e, t) {
        Object(Je.b)();
        var n = new URL(e)
          , r = n.host
          , a = n.protocol;
        t ? t() : r === location.host && a === location.protocol ? location.href = Object(c.g)(e, {
            onboarding: "true"
        }) : open(e, e)
    }
    u.a.bearerProvider.getBearer(),
    /.*\.local$/i.test(null === (He = u.a.currentUser) || void 0 === He ? void 0 : He.mail) || u.a.googleTokenProvider.getBearer();
    var et = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 636)).then((function(e) {
            return {
                default: e.CalendarSelf
            }
        }
        ))
    }
    ))
      , tt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 637)).then((function(e) {
            return {
                default: e.CalendarTutored
            }
        }
        ))
    }
    ))
      , nt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(26)]).then(n.bind(null, 638)).then((function(e) {
            return {
                default: e.WeekPlannerSelf
            }
        }
        ))
    }
    ))
      , rt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(27)]).then(n.bind(null, 640)).then((function(e) {
            return {
                default: e.WeekPlannerTutored
            }
        }
        ))
    }
    ))
      , at = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(15)]).then(n.bind(null, 635)).then((function(e) {
            return {
                default: e.LatestAssessments
            }
        }
        ))
    }
    ))
      , ot = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(16)]).then(n.bind(null, 663)).then((function(e) {
            return {
                default: e.LearningTasks
            }
        }
        ))
    }
    ))
      , it = Object($.lazy)((function() {
        return n.e(0).then(n.bind(null, 494)).then((function(e) {
            return {
                default: e.RootWeekNotebook
            }
        }
        ))
    }
    ))
      , st = Object($.lazy)((function() {
        return n.e(0).then(n.bind(null, 627)).then((function(e) {
            return {
                default: e.TutorsSelect
            }
        }
        ))
    }
    ))
      , ct = Object($.lazy)((function() {
        return n.e(6).then(n.bind(null, 664)).then((function(e) {
            return {
                default: e.ChildSelectorSelf
            }
        }
        ))
    }
    ))
      , lt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(20)]).then(n.bind(null, 641)).then((function(e) {
            return {
                default: e.StrategyTeacherPageSelf
            }
        }
        ))
    }
    ))
      , ut = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 642)).then((function(e) {
            return {
                default: e.KSAcademyStrategyTeacherPageSelf
            }
        }
        ))
    }
    ))
      , dt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(11)]).then(n.bind(null, 643)).then((function(e) {
            return {
                default: e.KSAcademyTeacherUpperSecondaryPageSelf
            }
        }
        ))
    }
    ))
      , pt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(29)]).then(n.bind(null, 644)).then((function(e) {
            return {
                default: e.WorkpathViewSelf
            }
        }
        ))
    }
    ))
      , mt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(28)]).then(n.bind(null, 645)).then((function(e) {
            return {
                default: e.WorkpathCbViewSelf
            }
        }
        ))
    }
    ))
      , ht = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, 646)).then((function(e) {
            return {
                default: e.KGTermPlannerSelf
            }
        }
        ))
    }
    ))
      , gt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, 647)).then((function(e) {
            return {
                default: e.KGTermPlannerTutored
            }
        }
        ))
    }
    ))
      , bt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, 647)).then((function(e) {
            return {
                default: e.KGTermPlannerTutored
            }
        }
        ))
    }
    ))
      , ft = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(13)]).then(n.bind(null, 648)).then((function(e) {
            return {
                default: e.KSTermPlannerSelf
            }
        }
        ))
    }
    ))
      , vt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, 649)).then((function(e) {
            return {
                default: e.KSTermPlannerTutored
            }
        }
        ))
    }
    ))
      , kt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(12)]).then(n.bind(null, 634)).then((function(e) {
            return {
                default: e.KSGoals
            }
        }
        ))
    }
    ))
      , wt = Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(17)]).then(n.bind(null, 650)).then((function(e) {
            return {
                default: e.MyCourses
            }
        }
        ))
    }
    ))
      , yt = Object($.lazy)((function() {
        return n.e(18).then(n.bind(null, 665)).then((function(e) {
            return {
                default: e.MySubjects
            }
        }
        ))
    }
    ))
      , _t = Be(Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 657)).then((function(e) {
            return {
                default: e.CourseBuilder
            }
        }
        ))
    }
    )))
      , Ot = Be(Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, 659)).then((function(e) {
            return {
                default: e.CourseViewer
            }
        }
        ))
    }
    )))
      , Tt = Be(Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(22)]).then(n.bind(null, 656)).then((function(e) {
            return {
                default: e.SubjectPlannerViewerApp
            }
        }
        ))
    }
    )))
      , jt = Be(Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(23)]).then(n.bind(null, 660)).then((function(e) {
            return {
                default: e.SubjectPlannerAdminApp
            }
        }
        ))
    }
    )))
      , Et = Be(Object($.lazy)((function() {
        return Promise.all([n.e(0), n.e(24)]).then(n.bind(null, 666)).then((function(e) {
            return {
                default: e.TeacherViewApp
            }
        }
        ))
    }
    )));
    var St = {};
    Object.keys(r).forEach((function(e) {
        var t;
        St[e] = (t = Object(ge.b)(Object(be.c)(r[e])),
        function(e) {
            return $.createElement($.Suspense, {
                fallback: $.createElement(ne.b, {
                    label: "Loading component"
                })
            }, $.createElement(t, Object(a.__assign)({}, e)))
        }
        )
    }
    ));
    var xt = Object(a.__assign)({}, St);
    o.a.components = Object(a.__assign)(Object(a.__assign)({}, o.a.components), xt)
}
]);
