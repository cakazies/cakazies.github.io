/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.2 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/tbaltrushaitis/cv
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = e.document
      , o = Object.getPrototypeOf
      , i = n.slice
      , a = n.concat
      , s = n.push
      , u = n.indexOf
      , l = {}
      , c = l.toString
      , f = l.hasOwnProperty
      , d = f.toString
      , p = d.call(Object)
      , h = {}
      , g = function isFunction(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , m = function isWindow(e) {
        return null != e && e === e.window
    }
      , v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function DOMEval(e, t, n) {
        var o, i, a = (n = n || r).createElement("script");
        if (a.text = e,
        t)
            for (o in v)
                (i = t[o] || t.getAttribute && t.getAttribute(o)) && a.setAttribute(o, i);
        n.head.appendChild(a).parentNode.removeChild(a)
    }
    function toType(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var y = function(e, t) {
        return new y.fn.init(e,t)
    }
      , x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function isArrayLike(e) {
        var t = !!e && "length"in e && e.length
          , n = toType(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    y.fn = y.prototype = {
        jquery: "3.4.0",
        constructor: y,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = y.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return y.each(this, e)
        },
        map: function(e) {
            return this.pushStack(y.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    y.extend = y.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || g(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (y.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t],
                    i = o && !Array.isArray(n) ? [] : o || y.isPlainObject(n) ? n : {},
                    o = !1,
                    a[t] = y.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    y.extend({
        expando: "jQuery" + ("3.4.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = o(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && d.call(n) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            DOMEval(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (isArrayLike(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(x, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (isArrayLike(Object(e)) ? y.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                !t(e[o], o) !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, i = 0, s = [];
            if (isArrayLike(e))
                for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && s.push(o);
            else
                for (i in e)
                    null != (o = t(e[i], i, n)) && s.push(o);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (y.fn[Symbol.iterator] = n[Symbol.iterator]),
    y.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        var t, n, r, o, i, a, s, u, l, c, f, d, p, h, g, m, v, y, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, S = createCache(), A = createCache(), k = createCache(), E = createCache(), N = function(e, t) {
            return e === t && (f = !0),
            0
        }, D = {}.hasOwnProperty, j = [], P = j.pop, L = j.push, q = j.push, H = j.slice, M = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + F + "*(" + z + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + F + "*\\]", R = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", W = new RegExp(F + "+","g"), B = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$","g"), $ = new RegExp("^" + F + "*," + F + "*"), _ = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"), U = new RegExp(F + "|>"), X = new RegExp(R), G = new RegExp("^" + z + "$"), V = {
            ID: new RegExp("^#(" + z + ")"),
            CLASS: new RegExp("^\\.(" + z + ")"),
            TAG: new RegExp("^(" + z + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)","i"),
            bool: new RegExp("^(?:" + O + ")$","i"),
            needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = function() {
            d()
        }, ae = addCombinator(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            q.apply(j = H.call(w.childNodes), w.childNodes),
            j[w.childNodes.length].nodeType
        } catch (e) {
            q = {
                apply: j.length ? function(e, t) {
                    L.apply(e, H.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function Sizzle(e, t, r, o) {
            var i, s, l, c, f, h, v, y = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return r;
            if (!o && ((t ? t.ownerDocument || t : w) !== p && d(t),
            t = t || p,
            g)) {
                if (11 !== T && (f = Z.exec(e)))
                    if (i = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(i)))
                                return r;
                            if (l.id === i)
                                return r.push(l),
                                r
                        } else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return q.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return q.apply(r, t.getElementsByClassName(i)),
                            r
                    }
                if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e,
                    y = t,
                    1 === T && U.test(e)) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = b),
                        s = (h = a(e)).length; s--; )
                            h[s] = "#" + c + " " + toSelector(h[s]);
                        v = h.join(","),
                        y = ee.test(e) && testContext(t.parentNode) || t
                    }
                    try {
                        return q.apply(r, y.querySelectorAll(v)),
                        r
                    } catch (t) {
                        E(e, !0)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, o)
        }
        function createCache() {
            var e = [];
            return function cache(t, n) {
                return e.push(t + " ") > r.cacheLength && delete cache[e.shift()],
                cache[t + " "] = n
            }
        }
        function markFunction(e) {
            return e[b] = !0,
            e
        }
        function assert(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function addHandle(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
                r.attrHandle[n[o]] = t
        }
        function siblingCheck(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function createInputPseudo(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function createButtonPseudo(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function createDisabledPseudo(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function createPositionalPseudo(e) {
            return markFunction(function(t) {
                return t = +t,
                markFunction(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                        n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }
        function testContext(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = Sizzle.support = {},
        i = Sizzle.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        d = Sizzle.setDocument = function(e) {
            var t, o, a = e ? e.ownerDocument || e : w;
            return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement,
            g = !i(p),
            w !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
            n.attributes = assert(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = assert(function(e) {
                return e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = K.test(p.getElementsByClassName),
            n.getById = assert(function(e) {
                return h.appendChild(e).id = b,
                !p.getElementsByName || !p.getElementsByName(b).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if ((n = i.getAttributeNode("id")) && n.value === e)
                            return [i];
                        for (o = t.getElementsByName(e),
                        r = 0; i = o[r++]; )
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            m = [],
            (n.qsa = K.test(p.querySelectorAll)) && (assert(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + O + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
            }),
            assert(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && assert(function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                v.push("!=", R)
            }),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = K.test(h.compareDocumentPosition),
            x = t || K.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            N = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : c ? M(c, e) - M(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
                if (!o || !i)
                    return e === p ? -1 : t === p ? 1 : o ? -1 : i ? 1 : c ? M(c, e) - M(c, t) : 0;
                if (o === i)
                    return siblingCheck(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? siblingCheck(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }
            ,
            p) : p
        }
        ,
        Sizzle.matches = function(e, t) {
            return Sizzle(e, null, null, t)
        }
        ,
        Sizzle.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && d(e),
            n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {
                    E(t, !0)
                }
            return Sizzle(t, p, null, [e]).length > 0
        }
        ,
        Sizzle.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && d(e),
            x(e, t)
        }
        ,
        Sizzle.attr = function(e, t) {
            (e.ownerDocument || e) !== p && d(e);
            var o = r.attrHandle[t.toLowerCase()]
              , i = o && D.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        Sizzle.escape = function(e) {
            return (e + "").replace(re, oe)
        }
        ,
        Sizzle.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        Sizzle.uniqueSort = function(e) {
            var t, r = [], o = 0, i = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(N),
            f) {
                for (; t = e[i++]; )
                    t === e[i] && (o = r.push(i));
                for (; o--; )
                    e.splice(r[o], 1)
            }
            return c = null,
            e
        }
        ,
        o = Sizzle.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += o(t);
            return n
        }
        ,
        (r = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || Sizzle.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Sizzle.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && S(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var o = Sizzle.attr(r, e);
                        return null == o ? "!=" === t : !t || (o += "",
                        "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, d, p, h, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                        if (m) {
                            if (i) {
                                for (; g; ) {
                                    for (d = t; d = d[g]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && y) {
                                for (x = (p = (l = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++x && d === t) {
                                        c[e] = [T, p, x];
                                        break
                                    }
                            } else if (y && (x = p = (l = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                for (; (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, x]),
                                d !== t)); )
                                    ;
                            return (x -= o) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || Sizzle.error("unsupported pseudo: " + e);
                    return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? markFunction(function(e, n) {
                        for (var r, i = o(e, t), a = i.length; a--; )
                            e[r = M(e, i[a])] = !(n[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: markFunction(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(B, "$1"));
                    return r[b] ? markFunction(function(e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--; )
                            (i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, o, i) {
                        return t[0] = e,
                        r(t, null, i, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: markFunction(function(e) {
                    return function(t) {
                        return Sizzle(e, t).length > 0
                    }
                }),
                contains: markFunction(function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return (t.textContent || o(t)).indexOf(e) > -1
                    }
                }),
                lang: markFunction(function(e) {
                    return G.test(e || "") || Sizzle.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: createDisabledPseudo(!1),
                disabled: createDisabledPseudo(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: createPositionalPseudo(function() {
                    return [0]
                }),
                last: createPositionalPseudo(function(e, t) {
                    return [t - 1]
                }),
                eq: createPositionalPseudo(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: createPositionalPseudo(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: createPositionalPseudo(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: createPositionalPseudo(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: createPositionalPseudo(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = createInputPseudo(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = createButtonPseudo(t);
        function setFilters() {}
        function toSelector(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function addCombinator(e, t, n) {
            var r = t.dir
              , o = t.next
              , i = o || r
              , a = n && "parentNode" === i
              , s = C++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, d = [T, s];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[i]) && l[0] === T && l[1] === s)
                                    return d[2] = l[2];
                                if (c[i] = d,
                                d[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function elementMatcher(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function condense(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (i = e[s]) && (n && !n(i, r, o) || (a.push(i),
                l && t.push(s)));
            return a
        }
        function setMatcher(e, t, n, r, o, i) {
            return r && !r[b] && (r = setMatcher(r)),
            o && !o[b] && (o = setMatcher(o, i)),
            markFunction(function(i, a, s, u) {
                var l, c, f, d = [], p = [], h = a.length, g = i || function multipleContexts(e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++)
                        Sizzle(e, t[r], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), m = !e || !i && t ? g : condense(g, d, e, s, u), v = n ? o || (i ? e : h || r) ? [] : a : m;
                if (n && n(m, v, s, u),
                r)
                    for (l = condense(v, p),
                    r(l, [], s, u),
                    c = l.length; c--; )
                        (f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [],
                            c = v.length; c--; )
                                (f = v[c]) && l.push(m[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--; )
                            (f = v[c]) && (l = o ? M(i, f) : d[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else
                    v = condense(v === a ? v.splice(h, v.length) : v),
                    o ? o(null, a, v, u) : q.apply(a, v)
            })
        }
        function matcherFromTokens(e) {
            for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = addCombinator(function(e) {
                return e === t
            }, s, !0), f = addCombinator(function(e) {
                return M(t, e) > -1
            }, s, !0), d = [function(e, n, r) {
                var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                o
            }
            ]; u < i; u++)
                if (n = r.relative[e[u].type])
                    d = [addCombinator(elementMatcher(d), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (o = ++u; o < i && !r.relative[e[o].type]; o++)
                            ;
                        return setMatcher(u > 1 && elementMatcher(d), u > 1 && toSelector(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < o && matcherFromTokens(e.slice(u, o)), o < i && matcherFromTokens(e = e.slice(o)), o < i && toSelector(e))
                    }
                    d.push(n)
                }
            return elementMatcher(d)
        }
        return setFilters.prototype = r.filters = r.pseudos,
        r.setFilters = new setFilters,
        a = Sizzle.tokenize = function(e, t) {
            var n, o, i, a, s, u, l, c = A[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = r.preFilter; s; ) {
                for (a in n && !(o = $.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                u.push(i = [])),
                n = !1,
                (o = _.exec(s)) && (n = o.shift(),
                i.push({
                    value: n,
                    type: o[0].replace(B, " ")
                }),
                s = s.slice(n.length)),
                r.filter)
                    !(o = V[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(),
                    i.push({
                        value: n,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? Sizzle.error(e) : A(e, u).slice(0)
        }
        ,
        s = Sizzle.compile = function(e, t) {
            var n, o = [], i = [], s = k[e + " "];
            if (!s) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (s = matcherFromTokens(t[n]))[b] ? o.push(s) : i.push(s);
                (s = k(e, function matcherFromGroupMatchers(e, t) {
                    var n = t.length > 0
                      , o = e.length > 0
                      , i = function(i, a, s, u, c) {
                        var f, h, m, v = 0, y = "0", x = i && [], b = [], w = l, C = i || o && r.find.TAG("*", c), S = T += null == w ? 1 : Math.random() || .1, A = C.length;
                        for (c && (l = a === p || a || c); y !== A && null != (f = C[y]); y++) {
                            if (o && f) {
                                for (h = 0,
                                a || f.ownerDocument === p || (d(f),
                                s = !g); m = e[h++]; )
                                    if (m(f, a || p, s)) {
                                        u.push(f);
                                        break
                                    }
                                c && (T = S)
                            }
                            n && ((f = !m && f) && v--,
                            i && x.push(f))
                        }
                        if (v += y,
                        n && y !== v) {
                            for (h = 0; m = t[h++]; )
                                m(x, b, a, s);
                            if (i) {
                                if (v > 0)
                                    for (; y--; )
                                        x[y] || b[y] || (b[y] = P.call(u));
                                b = condense(b)
                            }
                            q.apply(u, b),
                            c && !i && b.length > 0 && v + t.length > 1 && Sizzle.uniqueSort(u)
                        }
                        return c && (T = S,
                        l = w),
                        x
                    };
                    return n ? markFunction(i) : i
                }(i, o))).selector = e
            }
            return s
        }
        ,
        u = Sizzle.select = function(e, t, n, o) {
            var i, u, l, c, f, d = "function" == typeof e && e, p = !o && a(e = d.selector || e);
            if (n = n || [],
            1 === p.length) {
                if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    d && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                for (i = V.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i],
                !r.relative[c = l.type]); )
                    if ((f = r.find[c]) && (o = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && testContext(t.parentNode) || t))) {
                        if (u.splice(i, 1),
                        !(e = o.length && toSelector(u)))
                            return q.apply(n, o),
                            n;
                        break
                    }
            }
            return (d || s(e, p))(o, t, !g, n, !t || ee.test(e) && testContext(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(N).join("") === b,
        n.detectDuplicates = !!f,
        d(),
        n.sortDetached = assert(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }),
        assert(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || addHandle("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && assert(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || addHandle("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        assert(function(e) {
            return null == e.getAttribute("disabled")
        }) || addHandle(O, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        Sizzle
    }(e);
    y.find = b,
    y.expr = b.selectors,
    y.expr[":"] = y.expr.pseudos,
    y.uniqueSort = y.unique = b.uniqueSort,
    y.text = b.getText,
    y.isXMLDoc = b.isXML,
    y.contains = b.contains,
    y.escapeSelector = b.escape;
    var w = function(e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && y(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , C = y.expr.match.needsContext;
    function nodeName(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function winnow(e, t, n) {
        return g(t) ? y.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? y.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? y.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : y.filter(t, e, n)
    }
    y.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? y.find.matchesSelector(r, e) ? [r] : [] : y.find.matches(e, y.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    y.fn.extend({
        find: function(e) {
            var t, n, r = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(y(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (y.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                y.find(e, o[t], n);
            return r > 1 ? y.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(winnow(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(winnow(this, e || [], !0))
        },
        is: function(e) {
            return !!winnow(this, "string" == typeof e && C.test(e) ? y(e) : e || [], !1).length
        }
    });
    var A, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (y.fn.init = function(e, t, n) {
        var o, i;
        if (!e)
            return this;
        if (n = n || A,
        "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : k.exec(e)) || !o[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof y ? t[0] : t,
                y.merge(this, y.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                S.test(o[1]) && y.isPlainObject(t))
                    for (o in t)
                        g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (i = r.getElementById(o[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(y) : y.makeArray(e, this)
    }
    ).prototype = y.fn,
    A = y(r);
    var E = /^(?:parents|prev(?:Until|All))/
      , N = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function sibling(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    y.fn.extend({
        has: function(e) {
            var t = y(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (y.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, o = this.length, i = [], a = "string" != typeof e && y(e);
            if (!C.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && y.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(i.length > 1 ? y.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(y(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(y.uniqueSort(y.merge(this.get(), y(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    y.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w(e, "parentNode", n)
        },
        next: function(e) {
            return sibling(e, "nextSibling")
        },
        prev: function(e) {
            return sibling(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e),
            y.merge([], e.childNodes))
        }
    }, function(e, t) {
        y.fn[e] = function(n, r) {
            var o = y.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (o = y.filter(r, o)),
            this.length > 1 && (N[e] || y.uniqueSort(o),
            E.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;
    function Identity(e) {
        return e
    }
    function Thrower(e) {
        throw e
    }
    function adoptValue(e, t, n, r) {
        var o;
        try {
            e && g(o = e.promise) ? o.call(e).done(t).fail(n) : e && g(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    y.Callbacks = function(e) {
        e = "string" == typeof e ? function createOptions(e) {
            var t = {};
            return y.each(e.match(D) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }(e) : y.extend({}, e);
        var t, n, r, o, i = [], a = [], s = -1, u = function() {
            for (o = o || e.once,
            r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (i = n ? [] : "")
        }, l = {
            add: function() {
                return i && (n && !t && (s = i.length - 1,
                a.push(n)),
                function add(t) {
                    y.each(t, function(t, n) {
                        g(n) ? e.unique && l.has(n) || i.push(n) : n && n.length && "string" !== toType(n) && add(n)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return y.each(arguments, function(e, t) {
                    for (var n; (n = y.inArray(t, i, n)) > -1; )
                        i.splice(n, 1),
                        n <= s && s--
                }),
                this
            },
            has: function(e) {
                return e ? y.inArray(e, i) > -1 : i.length > 0
            },
            empty: function() {
                return i && (i = []),
                this
            },
            disable: function() {
                return o = a = [],
                i = n = "",
                this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return o = a = [],
                n || t || (i = n = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, n) {
                return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ,
    y.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", y.Callbacks("memory"), y.Callbacks("memory"), 2], ["resolve", "done", y.Callbacks("once memory"), y.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", y.Callbacks("once memory"), y.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , o = {
                state: function() {
                    return r
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return y.Deferred(function(t) {
                        y.each(n, function(n, r) {
                            var o = g(e[r[4]]) && e[r[4]];
                            i[r[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, o) {
                    var i = 0;
                    function resolve(t, n, r, o) {
                        return function() {
                            var a = this
                              , s = arguments
                              , u = function() {
                                var e, u;
                                if (!(t < i)) {
                                    if ((e = r.apply(a, s)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    u = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(u) ? o ? u.call(e, resolve(i, n, Identity, o), resolve(i, n, Thrower, o)) : (i++,
                                    u.call(e, resolve(i, n, Identity, o), resolve(i, n, Thrower, o), resolve(i, n, Identity, n.notifyWith))) : (r !== Identity && (a = void 0,
                                    s = [e]),
                                    (o || n.resolveWith)(a, s))
                                }
                            }
                              , l = o ? u : function() {
                                try {
                                    u()
                                } catch (e) {
                                    y.Deferred.exceptionHook && y.Deferred.exceptionHook(e, l.stackTrace),
                                    t + 1 >= i && (r !== Thrower && (a = void 0,
                                    s = [e]),
                                    n.rejectWith(a, s))
                                }
                            }
                            ;
                            t ? l() : (y.Deferred.getStackHook && (l.stackTrace = y.Deferred.getStackHook()),
                            e.setTimeout(l))
                        }
                    }
                    return y.Deferred(function(e) {
                        n[0][3].add(resolve(0, e, g(o) ? o : Identity, e.notifyWith)),
                        n[1][3].add(resolve(0, e, g(t) ? t : Identity)),
                        n[2][3].add(resolve(0, e, g(r) ? r : Thrower))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? y.extend(e, o) : o
                }
            }
              , i = {};
            return y.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                o[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments),
                    this
                }
                ,
                i[t[0] + "With"] = a.fireWith
            }),
            o.promise(i),
            t && t.call(i, i),
            i
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , o = i.call(arguments)
              , a = y.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    o[e] = arguments.length > 1 ? i.call(arguments) : n,
                    --t || a.resolveWith(r, o)
                }
            };
            if (t <= 1 && (adoptValue(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || g(o[n] && o[n].then)))
                return a.then();
            for (; n--; )
                adoptValue(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    var P = y.Deferred();
    function completed() {
        r.removeEventListener("DOMContentLoaded", completed),
        e.removeEventListener("load", completed),
        y.ready()
    }
    y.fn.ready = function(e) {
        return P.then(e).catch(function(e) {
            y.readyException(e)
        }),
        this
    }
    ,
    y.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --y.readyWait : y.isReady) || (y.isReady = !0,
            !0 !== e && --y.readyWait > 0 || P.resolveWith(r, [y]))
        }
    }),
    y.ready.then = P.then,
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(y.ready) : (r.addEventListener("DOMContentLoaded", completed),
    e.addEventListener("load", completed));
    var L = function(e, t, n, r, o, i, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === toType(n))
            for (s in o = !0,
            n)
                L(e, t, s, n[s], !0, i, a);
        else if (void 0 !== r && (o = !0,
        g(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(y(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
    }
      , q = /^-ms-/
      , H = /-([a-z])/g;
    function fcamelCase(e, t) {
        return t.toUpperCase()
    }
    function camelCase(e) {
        return e.replace(q, "ms-").replace(H, fcamelCase)
    }
    var M = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Data() {
        this.expando = y.expando + Data.uid++
    }
    Data.uid = 1,
    Data.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            M(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t)
                o[camelCase(t)] = n;
            else
                for (r in t)
                    o[camelCase(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(camelCase) : (t = camelCase(t))in r ? [t] : t.match(D) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || y.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !y.isEmptyObject(t)
        }
    };
    var O = new Data
      , F = new Data
      , z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , I = /[A-Z]/g;
    function dataAttr(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(I, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function getData(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : z.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                F.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    y.extend({
        hasData: function(e) {
            return F.hasData(e) || O.hasData(e)
        },
        data: function(e, t, n) {
            return F.access(e, t, n)
        },
        removeData: function(e, t) {
            F.remove(e, t)
        },
        _data: function(e, t, n) {
            return O.access(e, t, n)
        },
        _removeData: function(e, t) {
            O.remove(e, t)
        }
    }),
    y.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0], a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = F.get(i),
                1 === i.nodeType && !O.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = camelCase(r.slice(5)),
                        dataAttr(i, r, o[r]));
                    O.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                F.set(this, e)
            }) : L(this, function(t) {
                var n;
                if (i && void 0 === t)
                    return void 0 !== (n = F.get(i, e)) ? n : void 0 !== (n = dataAttr(i, e)) ? n : void 0;
                this.each(function() {
                    F.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                F.remove(this, e)
            })
        }
    }),
    y.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = O.get(e, t),
                n && (!r || Array.isArray(n) ? r = O.access(e, t, y.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = y.queue(e, t)
              , r = n.length
              , o = n.shift()
              , i = y._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            r--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            o.call(e, function() {
                y.dequeue(e, t)
            }, i)),
            !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return O.get(e, n) || O.access(e, n, {
                empty: y.Callbacks("once memory").add(function() {
                    O.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    y.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? y.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = y.queue(this, e, t);
                y._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && y.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                y.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, o = y.Deferred(), i = this, a = this.length, s = function() {
                --r || o.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = O.get(i[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            o.promise(t)
        }
    });
    var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , W = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$","i")
      , B = ["Top", "Right", "Bottom", "Left"]
      , $ = r.documentElement
      , _ = function(e) {
        return y.contains(e.ownerDocument, e)
    }
      , U = {
        composed: !0
    };
    $.attachShadow && (_ = function(e) {
        return y.contains(e.ownerDocument, e) || e.getRootNode(U) === e.ownerDocument
    }
    );
    var X = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && _(e) && "none" === y.css(e, "display")
    }
      , G = function(e, t, n, r) {
        var o, i, a = {};
        for (i in t)
            a[i] = e.style[i],
            e.style[i] = t[i];
        for (i in o = n.apply(e, r || []),
        t)
            e.style[i] = a[i];
        return o
    };
    function adjustCSS(e, t, n, r) {
        var o, i, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return y.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (y.cssNumber[t] ? "" : "px"), c = e.nodeType && (y.cssNumber[t] || "px" !== l && +u) && W.exec(y.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; a--; )
                y.style(e, t, c + l),
                (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0),
                c /= i;
            c *= 2,
            y.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = o)),
        o
    }
    var V = {};
    function getDefaultDisplay(e) {
        var t, n = e.ownerDocument, r = e.nodeName, o = V[r];
        return o || (t = n.body.appendChild(n.createElement(r)),
        o = y.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === o && (o = "block"),
        V[r] = o,
        o)
    }
    function showHide(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
            (r = e[i]).style && (n = r.style.display,
            t ? ("none" === n && (o[i] = O.get(r, "display") || null,
            o[i] || (r.style.display = "")),
            "" === r.style.display && X(r) && (o[i] = getDefaultDisplay(r))) : "none" !== n && (o[i] = "none",
            O.set(r, "display", n)));
        for (i = 0; i < a; i++)
            null != o[i] && (e[i].style.display = o[i]);
        return e
    }
    y.fn.extend({
        show: function() {
            return showHide(this, !0)
        },
        hide: function() {
            return showHide(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                X(this) ? y(this).show() : y(this).hide()
            })
        }
    });
    var Y = /^(?:checkbox|radio)$/i
      , Q = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , J = /^$|^module$|\/(?:java|ecma)script/i
      , K = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function getAll(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && nodeName(e, t) ? y.merge([e], n) : n
    }
    function setGlobalEval(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            O.set(e[n], "globalEval", !t || O.get(t[n], "globalEval"))
    }
    K.optgroup = K.option,
    K.tbody = K.tfoot = K.colgroup = K.caption = K.thead,
    K.th = K.td;
    var Z, ee, te = /<|&#?\w+;/;
    function buildFragment(e, t, n, r, o) {
        for (var i, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((i = e[p]) || 0 === i)
                if ("object" === toType(i))
                    y.merge(d, i.nodeType ? [i] : i);
                else if (te.test(i)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (Q.exec(i) || ["", ""])[1].toLowerCase(),
                    u = K[s] || K._default,
                    a.innerHTML = u[1] + y.htmlPrefilter(i) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    y.merge(d, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(i));
        for (f.textContent = "",
        p = 0; i = d[p++]; )
            if (r && y.inArray(i, r) > -1)
                o && o.push(i);
            else if (l = _(i),
            a = getAll(f.appendChild(i), "script"),
            l && setGlobalEval(a),
            n)
                for (c = 0; i = a[c++]; )
                    J.test(i.type || "") && n.push(i);
        return f
    }
    Z = r.createDocumentFragment().appendChild(r.createElement("div")),
    (ee = r.createElement("input")).setAttribute("type", "radio"),
    ee.setAttribute("checked", "checked"),
    ee.setAttribute("name", "t"),
    Z.appendChild(ee),
    h.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked,
    Z.innerHTML = "<textarea>x</textarea>",
    h.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var ne = /^key/
      , re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , oe = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return !0
    }
    function returnFalse() {
        return !1
    }
    function expectSync(e, t) {
        return e === function safeActiveElement() {
            try {
                return r.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function on(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                on(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n,
        r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
        r = void 0) : (o = r,
        r = n,
        n = void 0)),
        !1 === o)
            o = returnFalse;
        else if (!o)
            return e;
        return 1 === i && (a = o,
        (o = function(e) {
            return y().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = y.guid++)),
        e.each(function() {
            y.event.add(this, t, o, r, n)
        })
    }
    function leverageNative(e, t, n) {
        n ? (O.set(e, t, !1),
        y.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, o, a = O.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a)
                        (y.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments),
                    O.set(this, t, a),
                    r = n(this, t),
                    this[t](),
                    a !== (o = O.get(this, t)) || r ? O.set(this, t, !1) : o = void 0,
                    a !== o)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        o
                } else
                    a && (O.set(this, t, y.event.trigger(y.extend(a.shift(), y.Event.prototype), a, this)),
                    e.stopImmediatePropagation())
            }
        })) : y.event.add(e, t, returnTrue)
    }
    y.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, g, m = O.get(e);
            if (m)
                for (n.handler && (n = (i = n).handler,
                o = i.selector),
                o && y.find.matchesSelector($, o),
                n.guid || (n.guid = y.guid++),
                (u = m.events) || (u = m.events = {}),
                (a = m.handle) || (a = m.handle = function(t) {
                    return void 0 !== y && y.event.triggered !== t.type ? y.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(D) || [""]).length; l--; )
                    p = g = (s = oe.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (f = y.event.special[p] || {},
                    p = (o ? f.delegateType : f.bindType) || p,
                    f = y.event.special[p] || {},
                    c = y.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && y.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i),
                    (d = u[p]) || ((d = u[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    y.event.global[p] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, g, m = O.hasData(e) && O.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(D) || [""]).length; l--; )
                    if (p = g = (s = oe.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = y.event.special[p] || {},
                        d = u[p = (r ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = i = d.length; i--; )
                            c = d[i],
                            !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || y.removeEvent(e, p, m.handle),
                        delete u[p])
                    } else
                        for (p in u)
                            y.event.remove(e, p + t[l], n, r, !0);
                y.isEmptyObject(u) && O.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = y.event.fix(e), u = new Array(arguments.length), l = (O.get(this, "events") || {})[s.type] || [], c = y.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = y.event.handlers.call(this, s, l),
                t = 0; (o = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = o.elem,
                    n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i,
                        s.data = i.data,
                        void 0 !== (r = ((y.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (i = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? y(o, this).index(l) > -1 : y.find(o, this, null, [l]).length),
                            a[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(y.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[y.expando] ? e : new y.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return Y.test(t.type) && t.click && nodeName(t, "input") && void 0 === O.get(t, "click") && leverageNative(t, "click", returnTrue),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return Y.test(t.type) && t.click && nodeName(t, "input") && void 0 === O.get(t, "click") && leverageNative(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return Y.test(t.type) && t.click && nodeName(t, "input") && O.get(t, "click") || nodeName(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    y.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    y.Event = function(e, t) {
        if (!(this instanceof y.Event))
            return new y.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? returnTrue : returnFalse,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && y.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[y.expando] = !0
    }
    ,
    y.Event.prototype = {
        constructor: y.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    y.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ne.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && re.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, y.event.addProp),
    y.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        y.event.special[e] = {
            setup: function() {
                return leverageNative(this, e, expectSync),
                !1
            },
            trigger: function() {
                return leverageNative(this, e),
                !0
            },
            delegateType: t
        }
    }),
    y.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        y.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, o = e.handleObj;
                return r && (r === this || y.contains(this, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    y.fn.extend({
        on: function(e, t, n, r) {
            return on(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return on(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                y(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = returnFalse),
            this.each(function() {
                y.event.remove(this, e, n, t)
            })
        }
    });
    var ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , ae = /<script|<style|<link/i
      , se = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function manipulationTarget(e, t) {
        return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && y(e).children("tbody")[0] || e
    }
    function disableScript(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function restoreScript(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function cloneCopyEvent(e, t) {
        var n, r, o, i, a, s, u, l;
        if (1 === t.nodeType) {
            if (O.hasData(e) && (i = O.access(e),
            a = O.set(t, i),
            l = i.events))
                for (o in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[o].length; n < r; n++)
                        y.event.add(t, o, l[o][n]);
            F.hasData(e) && (s = F.access(e),
            u = y.extend({}, s),
            F.set(t, u))
        }
    }
    function domManip(e, t, n, r) {
        t = a.apply([], t);
        var o, i, s, u, l, c, f = 0, d = e.length, p = d - 1, m = t[0], v = g(m);
        if (v || d > 1 && "string" == typeof m && !h.checkClone && se.test(m))
            return e.each(function(o) {
                var i = e.eq(o);
                v && (t[0] = m.call(this, o, i.html())),
                domManip(i, t, n, r)
            });
        if (d && (i = (o = buildFragment(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === o.childNodes.length && (o = i),
        i || r)) {
            for (u = (s = y.map(getAll(o, "script"), disableScript)).length; f < d; f++)
                l = o,
                f !== p && (l = y.clone(l, !0, !0),
                u && y.merge(s, getAll(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                y.map(s, restoreScript),
                f = 0; f < u; f++)
                    l = s[f],
                    J.test(l.type || "") && !O.access(l, "globalEval") && y.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? y._evalUrl && !l.noModule && y._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }) : DOMEval(l.textContent.replace(ue, ""), l, c))
        }
        return e
    }
    function remove(e, t, n) {
        for (var r, o = t ? y.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
            n || 1 !== r.nodeType || y.cleanData(getAll(r)),
            r.parentNode && (n && _(r) && setGlobalEval(getAll(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    y.extend({
        htmlPrefilter: function(e) {
            return e.replace(ie, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, s, u, l, c = e.cloneNode(!0), f = _(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || y.isXMLDoc(e)))
                for (a = getAll(c),
                r = 0,
                o = (i = getAll(e)).length; r < o; r++)
                    s = i[r],
                    u = a[r],
                    l = void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && Y.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (i = i || getAll(e),
                    a = a || getAll(c),
                    r = 0,
                    o = i.length; r < o; r++)
                        cloneCopyEvent(i[r], a[r]);
                else
                    cloneCopyEvent(e, c);
            return (a = getAll(c, "script")).length > 0 && setGlobalEval(a, !f && getAll(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, o = y.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (M(n)) {
                    if (t = n[O.expando]) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? y.event.remove(n, r) : y.removeEvent(n, r, t.handle);
                        n[O.expando] = void 0
                    }
                    n[F.expando] && (n[F.expando] = void 0)
                }
        }
    }),
    y.fn.extend({
        detach: function(e) {
            return remove(this, e, !0)
        },
        remove: function(e) {
            return remove(this, e)
        },
        text: function(e) {
            return L(this, function(e) {
                return void 0 === e ? y.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return domManip(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || manipulationTarget(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return domManip(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = manipulationTarget(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return domManip(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return domManip(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (y.cleanData(getAll(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return y.clone(this, e, t)
            })
        },
        html: function(e) {
            return L(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ae.test(e) && !K[(Q.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = y.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (y.cleanData(getAll(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return domManip(this, arguments, function(t) {
                var n = this.parentNode;
                y.inArray(this, e) < 0 && (y.cleanData(getAll(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    y.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        y.fn[e] = function(e) {
            for (var n, r = [], o = y(e), i = o.length - 1, a = 0; a <= i; a++)
                n = a === i ? this : this.clone(!0),
                y(o[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var le = new RegExp("^(" + R + ")(?!px)[a-z%]+$","i")
      , ce = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , fe = new RegExp(B.join("|"),"i");
    function curCSS(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || ce(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || _(e) || (a = y.style(e, t)),
        !h.pixelBoxStyles() && le.test(a) && fe.test(t) && (r = s.width,
        o = s.minWidth,
        i = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = o,
        s.maxWidth = i)),
        void 0 !== a ? a + "" : a
    }
    function addGetHookIf(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function computeStyleTests() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                $.appendChild(s).appendChild(u);
                var r = e.getComputedStyle(u);
                t = "1%" !== r.top,
                a = 12 === roundPixelMeasures(r.marginLeft),
                u.style.right = "60%",
                i = 36 === roundPixelMeasures(r.right),
                n = 36 === roundPixelMeasures(r.width),
                u.style.position = "absolute",
                o = 12 === roundPixelMeasures(u.offsetWidth / 3),
                $.removeChild(s),
                u = null
            }
        }
        function roundPixelMeasures(e) {
            return Math.round(parseFloat(e))
        }
        var t, n, o, i, a, s = r.createElement("div"), u = r.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === u.style.backgroundClip,
        y.extend(h, {
            boxSizingReliable: function() {
                return computeStyleTests(),
                n
            },
            pixelBoxStyles: function() {
                return computeStyleTests(),
                i
            },
            pixelPosition: function() {
                return computeStyleTests(),
                t
            },
            reliableMarginLeft: function() {
                return computeStyleTests(),
                a
            },
            scrollboxSize: function() {
                return computeStyleTests(),
                o
            }
        }))
    }();
    var de = ["Webkit", "Moz", "ms"]
      , pe = r.createElement("div").style
      , he = {};
    function finalPropName(e) {
        var t = y.cssProps[e] || he[e];
        return t || (e in pe ? e : he[e] = function vendorPropName(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = de.length; n--; )
                if ((e = de[n] + t)in pe)
                    return e
        }(e) || e)
    }
    var ge = /^(none|table(?!-c[ea]).+)/
      , me = /^--/
      , ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ye = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(e, t, n) {
        var r = W.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function boxModelAdjustment(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += y.css(e, n + B[a], !0, o)),
            r ? ("content" === n && (u -= y.css(e, "padding" + B[a], !0, o)),
            "margin" !== n && (u -= y.css(e, "border" + B[a] + "Width", !0, o))) : (u += y.css(e, "padding" + B[a], !0, o),
            "padding" !== n ? u += y.css(e, "border" + B[a] + "Width", !0, o) : s += y.css(e, "border" + B[a] + "Width", !0, o));
        return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0),
        u
    }
    function getWidthOrHeight(e, t, n) {
        var r = ce(e)
          , o = (!h.boxSizingReliable() || n) && "border-box" === y.css(e, "boxSizing", !1, r)
          , i = o
          , a = curCSS(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (le.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!h.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === y.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === y.css(e, "boxSizing", !1, r),
        (i = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + boxModelAdjustment(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
    }
    function Tween(e, t, n, r, o) {
        return new Tween.prototype.init(e,t,n,r,o)
    }
    y.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = curCSS(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = camelCase(t), u = me.test(t), l = e.style;
                if (u || (t = finalPropName(s)),
                a = y.cssHooks[t] || y.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                "string" === (i = typeof n) && (o = W.exec(n)) && o[1] && (n = adjustCSS(e, t, o),
                i = "number"),
                null != n && n == n && ("number" !== i || u || (n += o && o[3] || (y.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = camelCase(t);
            return me.test(t) || (t = finalPropName(s)),
            (a = y.cssHooks[t] || y.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = curCSS(e, t, r)),
            "normal" === o && t in ye && (o = ye[t]),
            "" === n || n ? (i = parseFloat(o),
            !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }),
    y.each(["height", "width"], function(e, t) {
        y.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ge.test(y.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, r) : G(e, ve, function() {
                        return getWidthOrHeight(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var o, i = ce(e), a = !h.scrollboxSize() && "absolute" === i.position, s = (a || r) && "border-box" === y.css(e, "boxSizing", !1, i), u = r ? boxModelAdjustment(e, t, r, s, i) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - boxModelAdjustment(e, t, "border", !1, i) - .5)),
                u && (o = W.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = y.css(e, t)),
                setPositiveNumber(0, n, u)
            }
        }
    }),
    y.cssHooks.marginLeft = addGetHookIf(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - G(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    y.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        y.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    o[e + B[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        },
        "margin" !== e && (y.cssHooks[e + t].set = setPositiveNumber)
    }),
    y.fn.extend({
        css: function(e, t) {
            return L(this, function(e, t, n) {
                var r, o, i = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = ce(e),
                    o = t.length; a < o; a++)
                        i[t[a]] = y.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? y.style(e, t, n) : y.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    y.Tween = Tween,
    Tween.prototype = {
        constructor: Tween,
        init: function(e, t, n, r, o, i) {
            this.elem = e,
            this.prop = n,
            this.easing = o || y.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = i || (y.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Tween.propHooks[this.prop];
            return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = t = y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Tween.propHooks._default.set(this),
            this
        }
    },
    Tween.prototype.init.prototype = Tween.prototype,
    Tween.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = y.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                y.fx.step[e.prop] ? y.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !y.cssHooks[e.prop] && null == e.elem.style[finalPropName(e.prop)] ? e.elem[e.prop] = e.now : y.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    y.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    y.fx = Tween.prototype.init,
    y.fx.step = {};
    var xe, be, we = /^(?:toggle|show|hide)$/, Te = /queueHooks$/;
    function schedule() {
        be && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(schedule) : e.setTimeout(schedule, y.fx.interval),
        y.fx.tick())
    }
    function createFxNow() {
        return e.setTimeout(function() {
            xe = void 0
        }),
        xe = Date.now()
    }
    function genFx(e, t) {
        var n, r = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o["margin" + (n = B[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function createTween(e, t, n) {
        for (var r, o = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e))
                return r
    }
    function Animation(e, t, n) {
        var r, o, i = 0, a = Animation.prefilters.length, s = y.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (o)
                return !1;
            for (var t = xe || createFxNow(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++)
                l.tweens[i].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: y.extend({}, t),
            opts: y.extend(!0, {
                specialEasing: {},
                easing: y.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: xe || createFxNow(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = y.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (!function propFilter(e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (o = t[r = camelCase(n)],
                i = e[n],
                Array.isArray(i) && (o = i[1],
                i = e[n] = i[0]),
                n !== r && (e[r] = i,
                delete e[n]),
                (a = y.cssHooks[r]) && "expand"in a)
                    for (n in i = a.expand(i),
                    delete e[r],
                    i)
                        n in e || (e[n] = i[n],
                        t[n] = o);
                else
                    t[r] = o
        }(c, l.opts.specialEasing); i < a; i++)
            if (r = Animation.prefilters[i].call(l, e, c, l.opts))
                return g(r.stop) && (y._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return y.map(c, createTween, l),
        g(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        y.fx.timer(y.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    y.Animation = y.extend(Animation, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return adjustCSS(n.elem, e, W.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e,
            e = ["*"]) : e = e.match(D);
            for (var n, r = 0, o = e.length; r < o; r++)
                n = e[r],
                Animation.tweeners[n] = Animation.tweeners[n] || [],
                Animation.tweeners[n].unshift(t)
        },
        prefilters: [function defaultPrefilter(e, t, n) {
            var r, o, i, a, s, u, l, c, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, g = e.nodeType && X(e), m = O.get(e, "fxshow");
            for (r in n.queue || (null == (a = y._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            d.always(function() {
                d.always(function() {
                    a.unqueued--,
                    y.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (o = t[r],
                we.test(o)) {
                    if (delete t[r],
                    i = i || "toggle" === o,
                    o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[r])
                            continue;
                        g = !0
                    }
                    p[r] = m && m[r] || y.style(e, r)
                }
            if ((u = !y.isEmptyObject(t)) || !y.isEmptyObject(p))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = m && m.display) && (l = O.get(e, "display")),
                "none" === (c = y.css(e, "display")) && (l ? c = l : (showHide([e], !0),
                l = e.style.display || l,
                c = y.css(e, "display"),
                showHide([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === y.css(e, "float") && (u || (d.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                d.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                p)
                    u || (m ? "hidden"in m && (g = m.hidden) : m = O.access(e, "fxshow", {
                        display: l
                    }),
                    i && (m.hidden = !g),
                    g && showHide([e], !0),
                    d.done(function() {
                        for (r in g || showHide([e]),
                        O.remove(e, "fxshow"),
                        p)
                            y.style(e, r, p[r])
                    })),
                    u = createTween(g ? m[r] : 0, r, d),
                    r in m || (m[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e)
        }
    }),
    y.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? y.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return y.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in y.fx.speeds ? r.duration = y.fx.speeds[r.duration] : r.duration = y.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            g(r.old) && r.old.call(this),
            r.queue && y.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    y.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(X).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = y.isEmptyObject(e)
              , i = y.speed(t, n, r)
              , a = function() {
                var t = Animation(this, y.extend({}, e), i);
                (o || O.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , i = y.timers
                  , a = O.get(this);
                if (o)
                    a[o] && a[o].stop && r(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && Te.test(o) && r(a[o]);
                for (o = i.length; o--; )
                    i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                    t = !1,
                    i.splice(o, 1));
                !t && n || y.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = O.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = y.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                y.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = i.length; t--; )
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                    i.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    y.each(["toggle", "show", "hide"], function(e, t) {
        var n = y.fn[t];
        y.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, o)
        }
    }),
    y.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        y.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    y.timers = [],
    y.fx.tick = function() {
        var e, t = 0, n = y.timers;
        for (xe = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || y.fx.stop(),
        xe = void 0
    }
    ,
    y.fx.timer = function(e) {
        y.timers.push(e),
        y.fx.start()
    }
    ,
    y.fx.interval = 13,
    y.fx.start = function() {
        be || (be = !0,
        schedule())
    }
    ,
    y.fx.stop = function() {
        be = null
    }
    ,
    y.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    y.fn.delay = function(t, n) {
        return t = y.fx && y.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var o = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var e = r.createElement("input")
          , t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = r.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var Ce, Se = y.expr.attrHandle;
    y.fn.extend({
        attr: function(e, t) {
            return L(this, y.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                y.removeAttr(this, e)
            })
        }
    }),
    y.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute ? y.prop(e, t, n) : (1 === i && y.isXMLDoc(e) || (o = y.attrHooks[t.toLowerCase()] || (y.expr.match.bool.test(t) ? Ce : void 0)),
                void 0 !== n ? null === n ? void y.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = y.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, o = t && t.match(D);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    e.removeAttribute(n)
        }
    }),
    Ce = {
        set: function(e, t, n) {
            return !1 === t ? y.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    y.each(y.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Se[t] || y.find.attr;
        Se[t] = function(e, t, r) {
            var o, i, a = t.toLowerCase();
            return r || (i = Se[a],
            Se[a] = o,
            o = null != n(e, t, r) ? a : null,
            Se[a] = i),
            o
        }
    });
    var Ae = /^(?:input|select|textarea|button)$/i
      , ke = /^(?:a|area)$/i;
    function stripAndCollapse(e) {
        return (e.match(D) || []).join(" ")
    }
    function getClass(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function classesToArray(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
    }
    y.fn.extend({
        prop: function(e, t) {
            return L(this, y.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[y.propFix[e] || e]
            })
        }
    }),
    y.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return 1 === i && y.isXMLDoc(e) || (t = y.propFix[t] || t,
                o = y.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = y.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ae.test(e.nodeName) || ke.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    h.optSelected || (y.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    y.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        y.propFix[this.toLowerCase()] = this
    }),
    y.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    y(this).addClass(e.call(this, t, getClass(this)))
                });
            if ((t = classesToArray(e)).length)
                for (; n = this[u++]; )
                    if (o = getClass(n),
                    r = 1 === n.nodeType && " " + stripAndCollapse(o) + " ") {
                        for (a = 0; i = t[a++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = stripAndCollapse(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    y(this).removeClass(e.call(this, t, getClass(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = classesToArray(e)).length)
                for (; n = this[u++]; )
                    if (o = getClass(n),
                    r = 1 === n.nodeType && " " + stripAndCollapse(o) + " ") {
                        for (a = 0; i = t[a++]; )
                            for (; r.indexOf(" " + i + " ") > -1; )
                                r = r.replace(" " + i + " ", " ");
                        o !== (s = stripAndCollapse(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                y(this).toggleClass(e.call(this, n, getClass(this), t), t)
            }) : this.each(function() {
                var t, o, i, a;
                if (r)
                    for (o = 0,
                    i = y(this),
                    a = classesToArray(e); t = a[o++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = getClass(this)) && O.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : O.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var Ee = /\r/g;
    y.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = g(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, y(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = y.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = y.valHooks[this.type] || y.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = y.valHooks[o.type] || y.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Ee, "") : null == n ? "" : n : void 0
        }
    }),
    y.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = y.find.attr(e, "value");
                    return null != t ? t : stripAndCollapse(y.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
                            if (t = y(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = y.makeArray(t), a = o.length; a--; )
                        ((r = o[a]).selected = y.inArray(y.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    y.each(["radio", "checkbox"], function() {
        y.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = y.inArray(y(e).val(), t) > -1
            }
        },
        h.checkOn || (y.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    h.focusin = "onfocusin"in e;
    var Ne = /^(?:focusinfocus|focusoutblur)$/
      , De = function(e) {
        e.stopPropagation()
    };
    y.extend(y.event, {
        trigger: function(t, n, o, i) {
            var a, s, u, l, c, d, p, h, v = [o || r], x = f.call(t, "type") ? t.type : t, b = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = o = o || r,
            3 !== o.nodeType && 8 !== o.nodeType && !Ne.test(x + y.event.triggered) && (x.indexOf(".") > -1 && (b = x.split("."),
            x = b.shift(),
            b.sort()),
            c = x.indexOf(":") < 0 && "on" + x,
            (t = t[y.expando] ? t : new y.Event(x,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = o),
            n = null == n ? [t] : y.makeArray(n, [t]),
            p = y.event.special[x] || {},
            i || !p.trigger || !1 !== p.trigger.apply(o, n))) {
                if (!i && !p.noBubble && !m(o)) {
                    for (l = p.delegateType || x,
                    Ne.test(l + x) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s),
                        u = s;
                    u === (o.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0; (s = v[a++]) && !t.isPropagationStopped(); )
                    h = s,
                    t.type = a > 1 ? l : p.bindType || x,
                    (d = (O.get(s, "events") || {})[t.type] && O.get(s, "handle")) && d.apply(s, n),
                    (d = c && s[c]) && d.apply && M(s) && (t.result = d.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = x,
                i || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !M(o) || c && g(o[x]) && !m(o) && ((u = o[c]) && (o[c] = null),
                y.event.triggered = x,
                t.isPropagationStopped() && h.addEventListener(x, De),
                o[x](),
                t.isPropagationStopped() && h.removeEventListener(x, De),
                y.event.triggered = void 0,
                u && (o[c] = u)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = y.extend(new y.Event, n, {
                type: e,
                isSimulated: !0
            });
            y.event.trigger(r, null, t)
        }
    }),
    y.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                y.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return y.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || y.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            y.event.simulate(t, e.target, y.event.fix(e))
        };
        y.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , o = O.access(r, t);
                o || r.addEventListener(e, n, !0),
                O.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , o = O.access(r, t) - 1;
                o ? O.access(r, t, o) : (r.removeEventListener(e, n, !0),
                O.remove(r, t))
            }
        }
    });
    var je = e.location
      , Pe = Date.now()
      , Le = /\?/;
    y.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || y.error("Invalid XML: " + t),
        n
    }
    ;
    var qe = /\[\]$/
      , He = /\r?\n/g
      , Me = /^(?:submit|button|image|reset|file)$/i
      , Oe = /^(?:input|select|textarea|keygen)/i;
    function buildParams(e, t, n, r) {
        var o;
        if (Array.isArray(t))
            y.each(t, function(t, o) {
                n || qe.test(e) ? r(e, o) : buildParams(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
            });
        else if (n || "object" !== toType(t))
            r(e, t);
        else
            for (o in t)
                buildParams(e + "[" + o + "]", t[o], n, r)
    }
    y.param = function(e, t) {
        var n, r = [], o = function(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !y.isPlainObject(e))
            y.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                buildParams(n, e[n], t, o);
        return r.join("&")
    }
    ,
    y.fn.extend({
        serialize: function() {
            return y.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = y.prop(this, "elements");
                return e ? y.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !y(this).is(":disabled") && Oe.test(this.nodeName) && !Me.test(e) && (this.checked || !Y.test(e))
            }).map(function(e, t) {
                var n = y(this).val();
                return null == n ? null : Array.isArray(n) ? y.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(He, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(He, "\r\n")
                }
            }).get()
        }
    });
    var Fe = /%20/g
      , ze = /#.*$/
      , Ie = /([?&])_=[^&]*/
      , Re = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , We = /^(?:GET|HEAD)$/
      , Be = /^\/\//
      , $e = {}
      , _e = {}
      , Ue = "*/".concat("*")
      , Xe = r.createElement("a");
    function addToPrefiltersOrTransports(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, o = 0, i = t.toLowerCase().match(D) || [];
            if (g(n))
                for (; r = i[o++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function inspectPrefiltersOrTransports(e, t, n, r) {
        var o = {}
          , i = e === _e;
        function inspect(a) {
            var s;
            return o[a] = !0,
            y.each(e[a] || [], function(e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || i || o[u] ? i ? !(s = u) : void 0 : (t.dataTypes.unshift(u),
                inspect(u),
                !1)
            }),
            s
        }
        return inspect(t.dataTypes[0]) || !o["*"] && inspect("*")
    }
    function ajaxExtend(e, t) {
        var n, r, o = y.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && y.extend(!0, e, r),
        e
    }
    Xe.href = je.href,
    y.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: je.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(je.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ue,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": y.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ajaxExtend(ajaxExtend(e, y.ajaxSettings), t) : ajaxExtend(y.ajaxSettings, e)
        },
        ajaxPrefilter: addToPrefiltersOrTransports($e),
        ajaxTransport: addToPrefiltersOrTransports(_e),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var o, i, a, s, u, l, c, f, d, p, h = y.ajaxSetup({}, n), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? y(g) : y.event, v = y.Deferred(), x = y.Callbacks("once memory"), b = h.statusCode || {}, w = {}, T = {}, C = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s)
                            for (s = {}; t = Re.exec(a); )
                                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = s[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    w[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            S.always(e[S.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return o && o.abort(t),
                    done(0, t),
                    this
                }
            };
            if (v.promise(S),
            h.url = ((t || h.url || je.href) + "").replace(Be, je.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(D) || [""],
            null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Xe.protocol + "//" + Xe.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = y.param(h.data, h.traditional)),
            inspectPrefiltersOrTransports($e, h, n, S),
            c)
                return S;
            for (d in (f = y.event && h.global) && 0 == y.active++ && y.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !We.test(h.type),
            i = h.url.replace(ze, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Fe, "+")) : (p = h.url.slice(i.length),
            h.data && (h.processData || "string" == typeof h.data) && (i += (Le.test(i) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (i = i.replace(Ie, "$1"),
            p = (Le.test(i) ? "&" : "?") + "_=" + Pe++ + p),
            h.url = i + p),
            h.ifModified && (y.lastModified[i] && S.setRequestHeader("If-Modified-Since", y.lastModified[i]),
            y.etag[i] && S.setRequestHeader("If-None-Match", y.etag[i])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && S.setRequestHeader("Content-Type", h.contentType),
            S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                S.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || c))
                return S.abort();
            if (C = "abort",
            x.add(h.complete),
            S.done(h.success),
            S.fail(h.error),
            o = inspectPrefiltersOrTransports(_e, h, n, S)) {
                if (S.readyState = 1,
                f && m.trigger("ajaxSend", [S, h]),
                c)
                    return S;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    o.send(w, done)
                } catch (e) {
                    if (c)
                        throw e;
                    done(-1, e)
                }
            } else
                done(-1, "No Transport");
            function done(t, n, r, s) {
                var l, d, p, w, T, C = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                o = void 0,
                a = s || "",
                S.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (w = function ajaxHandleResponses(e, t, n) {
                    for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                u.unshift(o);
                                break
                            }
                    if (u[0]in n)
                        i = u[0];
                    else {
                        for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                                i = o;
                                break
                            }
                            a || (a = o)
                        }
                        i = i || a
                    }
                    if (i)
                        return i !== u[0] && u.unshift(i),
                        n[i]
                }(h, S, r)),
                w = function ajaxConvert(e, t, n, r) {
                    var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i; )
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = i,
                        i = c.shift())
                            if ("*" === i)
                                i = u;
                            else if ("*" !== u && u !== i) {
                                if (!(a = l[u + " " + i] || l["* " + i]))
                                    for (o in l)
                                        if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + i
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, w, S, l),
                l ? (h.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (y.lastModified[i] = T),
                (T = S.getResponseHeader("etag")) && (y.etag[i] = T)),
                204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state,
                d = w.data,
                l = !(p = w.error))) : (p = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                S.status = t,
                S.statusText = (n || C) + "",
                l ? v.resolveWith(g, [d, C, S]) : v.rejectWith(g, [S, C, p]),
                S.statusCode(b),
                b = void 0,
                f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [S, h, l ? d : p]),
                x.fireWith(g, [S, C]),
                f && (m.trigger("ajaxComplete", [S, h]),
                --y.active || y.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return y.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return y.get(e, void 0, t, "script")
        }
    }),
    y.each(["get", "post"], function(e, t) {
        y[t] = function(e, n, r, o) {
            return g(n) && (o = o || r,
            r = n,
            n = void 0),
            y.ajax(y.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, y.isPlainObject(e) && e))
        }
    }),
    y._evalUrl = function(e, t) {
        return y.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                y.globalEval(e, t)
            }
        })
    }
    ,
    y.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = y(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                y(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = y(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                y(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                y(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    y.expr.pseudos.hidden = function(e) {
        return !y.expr.pseudos.visible(e)
    }
    ,
    y.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    y.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ge = {
        0: 200,
        1223: 204
    }
      , Ve = y.ajaxSettings.xhr();
    h.cors = !!Ve && "withCredentials"in Ve,
    h.ajax = Ve = !!Ve,
    y.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Ve && !t.crossDomain)
            return {
                send: function(o, i) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        s.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Ge[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    y.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    y.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return y.globalEval(e),
                e
            }
        }
    }),
    y.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    y.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(o, i) {
                    t = y("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Ye, Qe = [], Je = /(=)\?(?=&|$)|\?\?/;
    y.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Qe.pop() || y.expando + "_" + Pe++;
            return this[e] = !0,
            e
        }
    }),
    y.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = !1 !== t.jsonp && (Je.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Je.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Je, "$1" + o) : !1 !== t.jsonp && (t.url += (Le.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return a || y.error(o + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            i = e[o],
            e[o] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === i ? y(e).removeProp(o) : e[o] = i,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Qe.push(o)),
                a && g(i) && i(a[0]),
                a = i = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = ((Ye = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ye.childNodes.length),
    y.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (h.createHTMLDocument ? ((o = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
        t.head.appendChild(o)) : t = r),
        a = !n && [],
        (i = S.exec(e)) ? [t.createElement(i[1])] : (i = buildFragment([e], t, a),
        a && a.length && y(a).remove(),
        y.merge([], i.childNodes)));
        var o, i, a
    }
    ,
    y.fn.load = function(e, t, n) {
        var r, o, i, a = this, s = e.indexOf(" ");
        return s > -1 && (r = stripAndCollapse(e.slice(s)),
        e = e.slice(0, s)),
        g(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 && y.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(r ? y("<div>").append(y.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    y.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        y.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    y.expr.pseudos.animated = function(e) {
        return y.grep(y.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    y.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, u, l = y.css(e, "position"), c = y(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            i = y.css(e, "top"),
            u = y.css(e, "left"),
            ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
            o = r.left) : (a = parseFloat(i) || 0,
            o = parseFloat(u) || 0),
            g(t) && (t = t.call(e, n, y.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    y.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    y.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === y.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === y.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = y(e).offset()).top += y.css(e, "borderTopWidth", !0),
                    o.left += y.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - y.css(r, "marginTop", !0),
                    left: t.left - o.left - y.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === y.css(e, "position"); )
                    e = e.offsetParent;
                return e || $
            })
        }
    }),
    y.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        y.fn[e] = function(r) {
            return L(this, function(e, r, o) {
                var i;
                if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === o)
                    return i ? i[t] : e[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
            }, e, r, arguments.length)
        }
    }),
    y.each(["top", "left"], function(e, t) {
        y.cssHooks[t] = addGetHookIf(h.pixelPosition, function(e, n) {
            if (n)
                return n = curCSS(e, t),
                le.test(n) ? y(e).position()[t] + "px" : n
        })
    }),
    y.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        y.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            y.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o)
                  , s = n || (!0 === o || !0 === i ? "margin" : "border");
                return L(this, function(t, n, o) {
                    var i;
                    return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? y.css(t, n, s) : y.style(t, n, o, s)
                }, t, a ? o : void 0, a)
            }
        })
    }),
    y.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        y.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    y.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    y.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    y.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return r = i.call(arguments, 2),
            (o = function() {
                return e.apply(t || this, r.concat(i.call(arguments)))
            }
            ).guid = e.guid = e.guid || y.guid++,
            o
    }
    ,
    y.holdReady = function(e) {
        e ? y.readyWait++ : y.ready(!0)
    }
    ,
    y.isArray = Array.isArray,
    y.parseJSON = JSON.parse,
    y.nodeName = nodeName,
    y.isFunction = g,
    y.isWindow = m,
    y.camelCase = camelCase,
    y.type = toType,
    y.now = Date.now,
    y.isNumeric = function(e) {
        var t = y.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return y
    });
    var Ke = e.jQuery
      , Ze = e.$;
    return y.noConflict = function(t) {
        return e.$ === y && (e.$ = Ze),
        t && e.jQuery === y && (e.jQuery = Ke),
        y
    }
    ,
    t || (e.jQuery = e.$ = y),
    y
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.2
 * Build:    production-b76
 * Compiled: 2019-05-05T11:53:12 UTC
 * Commit:   854391a90d7eb3a4d553e2c6f7868d6612a13f7c
 */
