/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */

window.onload = () => {
   const dataPhones = document.querySelectorAll(".data-phone");
   dataPhones.forEach((item) => {
      item.addEventListener("input", (e) => {
         console.log(item);
         item.value = item.value.replace(/\D/, "");
      });
   });
};

!(function (e, t) {
   "use strict";
   "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
           ? t(e, !0)
           : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e);
             })
      : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
   "use strict";
   var i = [],
      n = Object.getPrototypeOf,
      o = i.slice,
      s = i.flat
         ? function (e) {
              return i.flat.call(e);
           }
         : function (e) {
              return i.concat.apply([], e);
           },
      r = i.push,
      a = i.indexOf,
      l = {},
      c = l.toString,
      d = l.hasOwnProperty,
      u = d.toString,
      h = u.call(Object),
      p = {},
      f = function (e) {
         return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
      },
      g = function (e) {
         return null != e && e === e.window;
      },
      m = e.document,
      v = { type: !0, src: !0, nonce: !0, noModule: !0 };
   function y(e, t, i) {
      var n,
         o,
         s = (i = i || m).createElement("script");
      if (((s.text = e), t)) for (n in v) (o = t[n] || (t.getAttribute && t.getAttribute(n))) && s.setAttribute(n, o);
      i.head.appendChild(s).parentNode.removeChild(s);
   }
   function b(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
   }
   var w = "3.6.1",
      x = function (e, t) {
         return new x.fn.init(e, t);
      };
   function S(e) {
      var t = !!e && "length" in e && e.length,
         i = b(e);
      return !f(e) && !g(e) && ("array" === i || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
   }
   (x.fn = x.prototype =
      {
         jquery: w,
         constructor: x,
         length: 0,
         toArray: function () {
            return o.call(this);
         },
         get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
         },
         pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return (t.prevObject = this), t;
         },
         each: function (e) {
            return x.each(this, e);
         },
         map: function (e) {
            return this.pushStack(
               x.map(this, function (t, i) {
                  return e.call(t, i, t);
               })
            );
         },
         slice: function () {
            return this.pushStack(o.apply(this, arguments));
         },
         first: function () {
            return this.eq(0);
         },
         last: function () {
            return this.eq(-1);
         },
         even: function () {
            return this.pushStack(
               x.grep(this, function (e, t) {
                  return (t + 1) % 2;
               })
            );
         },
         odd: function () {
            return this.pushStack(
               x.grep(this, function (e, t) {
                  return t % 2;
               })
            );
         },
         eq: function (e) {
            var t = this.length,
               i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
         },
         end: function () {
            return this.prevObject || this.constructor();
         },
         push: r,
         sort: i.sort,
         splice: i.splice,
      }),
      (x.extend = x.fn.extend =
         function () {
            var e,
               t,
               i,
               n,
               o,
               s,
               r = arguments[0] || {},
               a = 1,
               l = arguments.length,
               c = !1;
            for (
               "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
                  "object" == typeof r || f(r) || (r = {}),
                  a === l && ((r = this), a--);
               a < l;
               a++
            )
               if (null != (e = arguments[a]))
                  for (t in e)
                     (n = e[t]),
                        "__proto__" !== t &&
                           r !== n &&
                           (c && n && (x.isPlainObject(n) || (o = Array.isArray(n)))
                              ? ((i = r[t]),
                                (s = o && !Array.isArray(i) ? [] : o || x.isPlainObject(i) ? i : {}),
                                (o = !1),
                                (r[t] = x.extend(c, s, n)))
                              : void 0 !== n && (r[t] = n));
            return r;
         }),
      x.extend({
         expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
         isReady: !0,
         error: function (e) {
            throw new Error(e);
         },
         noop: function () {},
         isPlainObject: function (e) {
            var t, i;
            return (
               !(!e || "[object Object]" !== c.call(e)) &&
               (!(t = n(e)) ||
                  ("function" == typeof (i = d.call(t, "constructor") && t.constructor) && u.call(i) === h))
            );
         },
         isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
         },
         globalEval: function (e, t, i) {
            y(e, { nonce: t && t.nonce }, i);
         },
         each: function (e, t) {
            var i,
               n = 0;
            if (S(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
            return e;
         },
         makeArray: function (e, t) {
            var i = t || [];
            return null != e && (S(Object(e)) ? x.merge(i, "string" == typeof e ? [e] : e) : r.call(i, e)), i;
         },
         inArray: function (e, t, i) {
            return null == t ? -1 : a.call(t, e, i);
         },
         merge: function (e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
            return (e.length = o), e;
         },
         grep: function (e, t, i) {
            for (var n = [], o = 0, s = e.length, r = !i; o < s; o++) !t(e[o], o) !== r && n.push(e[o]);
            return n;
         },
         map: function (e, t, i) {
            var n,
               o,
               r = 0,
               a = [];
            if (S(e)) for (n = e.length; r < n; r++) null != (o = t(e[r], r, i)) && a.push(o);
            else for (r in e) null != (o = t(e[r], r, i)) && a.push(o);
            return s(a);
         },
         guid: 1,
         support: p,
      }),
      "function" == typeof Symbol && (x.fn[Symbol.iterator] = i[Symbol.iterator]),
      x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
         l["[object " + t + "]"] = t.toLowerCase();
      });
   var T =
      /*!
       * Sizzle CSS Selector Engine v2.3.6
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2021-02-16
       */
      (function (e) {
         var t,
            i,
            n,
            o,
            s,
            r,
            a,
            l,
            c,
            d,
            u,
            h,
            p,
            f,
            g,
            m,
            v,
            y,
            b,
            w = "sizzle" + 1 * new Date(),
            x = e.document,
            S = 0,
            T = 0,
            C = le(),
            k = le(),
            E = le(),
            P = le(),
            A = function (e, t) {
               return e === t && (u = !0), 0;
            },
            O = {}.hasOwnProperty,
            M = [],
            L = M.pop,
            D = M.push,
            $ = M.push,
            z = M.slice,
            j = function (e, t) {
               for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
               return -1;
            },
            R =
               "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            N =
               "\\[" +
               I +
               "*(" +
               H +
               ")(?:" +
               I +
               "*([*^$|!~]?=)" +
               I +
               "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
               H +
               "))|)" +
               I +
               "*\\]",
            F =
               ":(" +
               H +
               ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
               N +
               ")*)|.*)\\)|)",
            q = new RegExp(I + "+", "g"),
            B = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            W = new RegExp("^" + I + "*," + I + "*"),
            _ = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            X = new RegExp(I + "|>"),
            Y = new RegExp(F),
            U = new RegExp("^" + H + "$"),
            V = {
               ID: new RegExp("^#(" + H + ")"),
               CLASS: new RegExp("^\\.(" + H + ")"),
               TAG: new RegExp("^(" + H + "|[*])"),
               ATTR: new RegExp("^" + N),
               PSEUDO: new RegExp("^" + F),
               CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                     I +
                     "*(even|odd|(([+-]|)(\\d*)n|)" +
                     I +
                     "*(?:([+-]|)" +
                     I +
                     "*(\\d+)|))" +
                     I +
                     "*\\)|)",
                  "i"
               ),
               bool: new RegExp("^(?:" + R + ")$", "i"),
               needsContext: new RegExp(
                  "^" +
                     I +
                     "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                     I +
                     "*((?:-\\d)?\\d*)" +
                     I +
                     "*\\)|)(?=[^-]|$)",
                  "i"
               ),
            },
            G = /HTML$/i,
            Z = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
            ie = function (e, t) {
               var i = "0x" + e.slice(1) - 65536;
               return (
                  t ||
                  (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
               );
            },
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
               return t
                  ? "\0" === e
                     ? "�"
                     : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
                  : "\\" + e;
            },
            se = function () {
               h();
            },
            re = we(
               function (e) {
                  return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
               },
               { dir: "parentNode", next: "legend" }
            );
         try {
            $.apply((M = z.call(x.childNodes)), x.childNodes), M[x.childNodes.length].nodeType;
         } catch (e) {
            $ = {
               apply: M.length
                  ? function (e, t) {
                       D.apply(e, z.call(t));
                    }
                  : function (e, t) {
                       for (var i = e.length, n = 0; (e[i++] = t[n++]); );
                       e.length = i - 1;
                    },
            };
         }
         function ae(e, t, n, o) {
            var s,
               a,
               c,
               d,
               u,
               f,
               v,
               y = t && t.ownerDocument,
               x = t ? t.nodeType : 9;
            if (((n = n || []), "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))) return n;
            if (!o && (h(t), (t = t || p), g)) {
               if (11 !== x && (u = Q.exec(e)))
                  if ((s = u[1])) {
                     if (9 === x) {
                        if (!(c = t.getElementById(s))) return n;
                        if (c.id === s) return n.push(c), n;
                     } else if (y && (c = y.getElementById(s)) && b(t, c) && c.id === s) return n.push(c), n;
                  } else {
                     if (u[2]) return $.apply(n, t.getElementsByTagName(e)), n;
                     if ((s = u[3]) && i.getElementsByClassName && t.getElementsByClassName)
                        return $.apply(n, t.getElementsByClassName(s)), n;
                  }
               if (i.qsa && !P[e + " "] && (!m || !m.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                  if (((v = e), (y = t), 1 === x && (X.test(e) || _.test(e)))) {
                     for (
                        ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && i.scope) ||
                           ((d = t.getAttribute("id")) ? (d = d.replace(ne, oe)) : t.setAttribute("id", (d = w))),
                           a = (f = r(e)).length;
                        a--;

                     )
                        f[a] = (d ? "#" + d : ":scope") + " " + be(f[a]);
                     v = f.join(",");
                  }
                  try {
                     return $.apply(n, y.querySelectorAll(v)), n;
                  } catch (t) {
                     P(e, !0);
                  } finally {
                     d === w && t.removeAttribute("id");
                  }
               }
            }
            return l(e.replace(B, "$1"), t, n, o);
         }
         function le() {
            var e = [];
            return function t(i, o) {
               return e.push(i + " ") > n.cacheLength && delete t[e.shift()], (t[i + " "] = o);
            };
         }
         function ce(e) {
            return (e[w] = !0), e;
         }
         function de(e) {
            var t = p.createElement("fieldset");
            try {
               return !!e(t);
            } catch (e) {
               return !1;
            } finally {
               t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
         }
         function ue(e, t) {
            for (var i = e.split("|"), o = i.length; o--; ) n.attrHandle[i[o]] = t;
         }
         function he(e, t) {
            var i = t && e,
               n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
            return e ? 1 : -1;
         }
         function pe(e) {
            return function (t) {
               return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
         }
         function fe(e) {
            return function (t) {
               var i = t.nodeName.toLowerCase();
               return ("input" === i || "button" === i) && t.type === e;
            };
         }
         function ge(e) {
            return function (t) {
               return "form" in t
                  ? t.parentNode && !1 === t.disabled
                     ? "label" in t
                        ? "label" in t.parentNode
                           ? t.parentNode.disabled === e
                           : t.disabled === e
                        : t.isDisabled === e || (t.isDisabled !== !e && re(t) === e)
                     : t.disabled === e
                  : "label" in t && t.disabled === e;
            };
         }
         function me(e) {
            return ce(function (t) {
               return (
                  (t = +t),
                  ce(function (i, n) {
                     for (var o, s = e([], i.length, t), r = s.length; r--; ) i[(o = s[r])] && (i[o] = !(n[o] = i[o]));
                  })
               );
            });
         }
         function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
         }
         for (t in ((i = ae.support = {}),
         (s = ae.isXML =
            function (e) {
               var t = e && e.namespaceURI,
                  i = e && (e.ownerDocument || e).documentElement;
               return !G.test(t || (i && i.nodeName) || "HTML");
            }),
         (h = ae.setDocument =
            function (e) {
               var t,
                  o,
                  r = e ? e.ownerDocument || e : x;
               return r != p && 9 === r.nodeType && r.documentElement
                  ? ((f = (p = r).documentElement),
                    (g = !s(p)),
                    x != p &&
                       (o = p.defaultView) &&
                       o.top !== o &&
                       (o.addEventListener
                          ? o.addEventListener("unload", se, !1)
                          : o.attachEvent && o.attachEvent("onunload", se)),
                    (i.scope = de(function (e) {
                       return (
                          f.appendChild(e).appendChild(p.createElement("div")),
                          void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                       );
                    })),
                    (i.attributes = de(function (e) {
                       return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (i.getElementsByTagName = de(function (e) {
                       return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (i.getElementsByClassName = J.test(p.getElementsByClassName)),
                    (i.getById = de(function (e) {
                       return (f.appendChild(e).id = w), !p.getElementsByName || !p.getElementsByName(w).length;
                    })),
                    i.getById
                       ? ((n.filter.ID = function (e) {
                            var t = e.replace(te, ie);
                            return function (e) {
                               return e.getAttribute("id") === t;
                            };
                         }),
                         (n.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                               var i = t.getElementById(e);
                               return i ? [i] : [];
                            }
                         }))
                       : ((n.filter.ID = function (e) {
                            var t = e.replace(te, ie);
                            return function (e) {
                               var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                               return i && i.value === t;
                            };
                         }),
                         (n.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                               var i,
                                  n,
                                  o,
                                  s = t.getElementById(e);
                               if (s) {
                                  if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
                                  for (o = t.getElementsByName(e), n = 0; (s = o[n++]); )
                                     if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
                               }
                               return [];
                            }
                         })),
                    (n.find.TAG = i.getElementsByTagName
                       ? function (e, t) {
                            return void 0 !== t.getElementsByTagName
                               ? t.getElementsByTagName(e)
                               : i.qsa
                               ? t.querySelectorAll(e)
                               : void 0;
                         }
                       : function (e, t) {
                            var i,
                               n = [],
                               o = 0,
                               s = t.getElementsByTagName(e);
                            if ("*" === e) {
                               for (; (i = s[o++]); ) 1 === i.nodeType && n.push(i);
                               return n;
                            }
                            return s;
                         }),
                    (n.find.CLASS =
                       i.getElementsByClassName &&
                       function (e, t) {
                          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                       }),
                    (v = []),
                    (m = []),
                    (i.qsa = J.test(p.querySelectorAll)) &&
                       (de(function (e) {
                          var t;
                          (f.appendChild(e).innerHTML =
                             "<a id='" +
                             w +
                             "'></a><select id='" +
                             w +
                             "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                             e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + I + "*(?:''|\"\")"),
                             e.querySelectorAll("[selected]").length || m.push("\\[" + I + "*(?:value|" + R + ")"),
                             e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                             (t = p.createElement("input")).setAttribute("name", ""),
                             e.appendChild(t),
                             e.querySelectorAll("[name='']").length ||
                                m.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"),
                             e.querySelectorAll(":checked").length || m.push(":checked"),
                             e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"),
                             e.querySelectorAll("\\\f"),
                             m.push("[\\r\\n\\f]");
                       }),
                       de(function (e) {
                          e.innerHTML =
                             "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = p.createElement("input");
                          t.setAttribute("type", "hidden"),
                             e.appendChild(t).setAttribute("name", "D"),
                             e.querySelectorAll("[name=d]").length && m.push("name" + I + "*[*^$|!~]?="),
                             2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                             (f.appendChild(e).disabled = !0),
                             2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                             e.querySelectorAll("*,:x"),
                             m.push(",.*:");
                       })),
                    (i.matchesSelector = J.test(
                       (y =
                          f.matches ||
                          f.webkitMatchesSelector ||
                          f.mozMatchesSelector ||
                          f.oMatchesSelector ||
                          f.msMatchesSelector)
                    )) &&
                       de(function (e) {
                          (i.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", F);
                       }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = J.test(f.compareDocumentPosition)),
                    (b =
                       t || J.test(f.contains)
                          ? function (e, t) {
                               var i = 9 === e.nodeType ? e.documentElement : e,
                                  n = t && t.parentNode;
                               return (
                                  e === n ||
                                  !(
                                     !n ||
                                     1 !== n.nodeType ||
                                     !(i.contains
                                        ? i.contains(n)
                                        : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
                                  )
                               );
                            }
                          : function (e, t) {
                               if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                               return !1;
                            }),
                    (A = t
                       ? function (e, t) {
                            if (e === t) return (u = !0), 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                               n ||
                               (1 &
                                  (n =
                                     (e.ownerDocument || e) == (t.ownerDocument || t)
                                        ? e.compareDocumentPosition(t)
                                        : 1) ||
                               (!i.sortDetached && t.compareDocumentPosition(e) === n)
                                  ? e == p || (e.ownerDocument == x && b(x, e))
                                     ? -1
                                     : t == p || (t.ownerDocument == x && b(x, t))
                                     ? 1
                                     : d
                                     ? j(d, e) - j(d, t)
                                     : 0
                                  : 4 & n
                                  ? -1
                                  : 1)
                            );
                         }
                       : function (e, t) {
                            if (e === t) return (u = !0), 0;
                            var i,
                               n = 0,
                               o = e.parentNode,
                               s = t.parentNode,
                               r = [e],
                               a = [t];
                            if (!o || !s) return e == p ? -1 : t == p ? 1 : o ? -1 : s ? 1 : d ? j(d, e) - j(d, t) : 0;
                            if (o === s) return he(e, t);
                            for (i = e; (i = i.parentNode); ) r.unshift(i);
                            for (i = t; (i = i.parentNode); ) a.unshift(i);
                            for (; r[n] === a[n]; ) n++;
                            return n ? he(r[n], a[n]) : r[n] == x ? -1 : a[n] == x ? 1 : 0;
                         }),
                    p)
                  : p;
            }),
         (ae.matches = function (e, t) {
            return ae(e, null, null, t);
         }),
         (ae.matchesSelector = function (e, t) {
            if ((h(e), i.matchesSelector && g && !P[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
               try {
                  var n = y.call(e, t);
                  if (n || i.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
               } catch (e) {
                  P(t, !0);
               }
            return ae(t, p, null, [e]).length > 0;
         }),
         (ae.contains = function (e, t) {
            return (e.ownerDocument || e) != p && h(e), b(e, t);
         }),
         (ae.attr = function (e, t) {
            (e.ownerDocument || e) != p && h(e);
            var o = n.attrHandle[t.toLowerCase()],
               s = o && O.call(n.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== s
               ? s
               : i.attributes || !g
               ? e.getAttribute(t)
               : (s = e.getAttributeNode(t)) && s.specified
               ? s.value
               : null;
         }),
         (ae.escape = function (e) {
            return (e + "").replace(ne, oe);
         }),
         (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
         }),
         (ae.uniqueSort = function (e) {
            var t,
               n = [],
               o = 0,
               s = 0;
            if (((u = !i.detectDuplicates), (d = !i.sortStable && e.slice(0)), e.sort(A), u)) {
               for (; (t = e[s++]); ) t === e[s] && (o = n.push(s));
               for (; o--; ) e.splice(n[o], 1);
            }
            return (d = null), e;
         }),
         (o = ae.getText =
            function (e) {
               var t,
                  i = "",
                  n = 0,
                  s = e.nodeType;
               if (s) {
                  if (1 === s || 9 === s || 11 === s) {
                     if ("string" == typeof e.textContent) return e.textContent;
                     for (e = e.firstChild; e; e = e.nextSibling) i += o(e);
                  } else if (3 === s || 4 === s) return e.nodeValue;
               } else for (; (t = e[n++]); ) i += o(t);
               return i;
            }),
         (n = ae.selectors =
            {
               cacheLength: 50,
               createPseudo: ce,
               match: V,
               attrHandle: {},
               find: {},
               relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
               },
               preFilter: {
                  ATTR: function (e) {
                     return (
                        (e[1] = e[1].replace(te, ie)),
                        (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                     );
                  },
                  CHILD: function (e) {
                     return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                           ? (e[3] || ae.error(e[0]),
                             (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                             (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                           : e[3] && ae.error(e[0]),
                        e
                     );
                  },
                  PSEUDO: function (e) {
                     var t,
                        i = !e[6] && e[2];
                     return V.CHILD.test(e[0])
                        ? null
                        : (e[3]
                             ? (e[2] = e[4] || e[5] || "")
                             : i &&
                               Y.test(i) &&
                               (t = r(i, !0)) &&
                               (t = i.indexOf(")", i.length - t) - i.length) &&
                               ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
                          e.slice(0, 3));
                  },
               },
               filter: {
                  TAG: function (e) {
                     var t = e.replace(te, ie).toLowerCase();
                     return "*" === e
                        ? function () {
                             return !0;
                          }
                        : function (e) {
                             return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                  },
                  CLASS: function (e) {
                     var t = C[e + " "];
                     return (
                        t ||
                        ((t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
                           C(e, function (e) {
                              return t.test(
                                 ("string" == typeof e.className && e.className) ||
                                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                                    ""
                              );
                           }))
                     );
                  },
                  ATTR: function (e, t, i) {
                     return function (n) {
                        var o = ae.attr(n, e);
                        return null == o
                           ? "!=" === t
                           : !t ||
                                ((o += ""),
                                "=" === t
                                   ? o === i
                                   : "!=" === t
                                   ? o !== i
                                   : "^=" === t
                                   ? i && 0 === o.indexOf(i)
                                   : "*=" === t
                                   ? i && o.indexOf(i) > -1
                                   : "$=" === t
                                   ? i && o.slice(-i.length) === i
                                   : "~=" === t
                                   ? (" " + o.replace(q, " ") + " ").indexOf(i) > -1
                                   : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"));
                     };
                  },
                  CHILD: function (e, t, i, n, o) {
                     var s = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        a = "of-type" === t;
                     return 1 === n && 0 === o
                        ? function (e) {
                             return !!e.parentNode;
                          }
                        : function (t, i, l) {
                             var c,
                                d,
                                u,
                                h,
                                p,
                                f,
                                g = s !== r ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                             if (m) {
                                if (s) {
                                   for (; g; ) {
                                      for (h = t; (h = h[g]); )
                                         if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                      f = g = "only" === e && !f && "nextSibling";
                                   }
                                   return !0;
                                }
                                if (((f = [r ? m.firstChild : m.lastChild]), r && y)) {
                                   for (
                                      b =
                                         (p =
                                            (c =
                                               (d =
                                                  (u = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[
                                                  e
                                               ] || [])[0] === S && c[1]) && c[2],
                                         h = p && m.childNodes[p];
                                      (h = (++p && h && h[g]) || (b = p = 0) || f.pop());

                                   )
                                      if (1 === h.nodeType && ++b && h === t) {
                                         d[e] = [S, p, b];
                                         break;
                                      }
                                } else if (
                                   (y &&
                                      (b = p =
                                         (c =
                                            (d = (u = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[
                                               e
                                            ] || [])[0] === S && c[1]),
                                   !1 === b)
                                )
                                   for (
                                      ;
                                      (h = (++p && h && h[g]) || (b = p = 0) || f.pop()) &&
                                      ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) ||
                                         !++b ||
                                         (y &&
                                            ((d = (u = h[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [
                                               S,
                                               b,
                                            ]),
                                         h !== t));

                                   );
                                return (b -= o) === n || (b % n == 0 && b / n >= 0);
                             }
                          };
                  },
                  PSEUDO: function (e, t) {
                     var i,
                        o = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                     return o[w]
                        ? o(t)
                        : o.length > 1
                        ? ((i = [e, e, "", t]),
                          n.setFilters.hasOwnProperty(e.toLowerCase())
                             ? ce(function (e, i) {
                                  for (var n, s = o(e, t), r = s.length; r--; ) e[(n = j(e, s[r]))] = !(i[n] = s[r]);
                               })
                             : function (e) {
                                  return o(e, 0, i);
                               })
                        : o;
                  },
               },
               pseudos: {
                  not: ce(function (e) {
                     var t = [],
                        i = [],
                        n = a(e.replace(B, "$1"));
                     return n[w]
                        ? ce(function (e, t, i, o) {
                             for (var s, r = n(e, null, o, []), a = e.length; a--; ) (s = r[a]) && (e[a] = !(t[a] = s));
                          })
                        : function (e, o, s) {
                             return (t[0] = e), n(t, null, s, i), (t[0] = null), !i.pop();
                          };
                  }),
                  has: ce(function (e) {
                     return function (t) {
                        return ae(e, t).length > 0;
                     };
                  }),
                  contains: ce(function (e) {
                     return (
                        (e = e.replace(te, ie)),
                        function (t) {
                           return (t.textContent || o(t)).indexOf(e) > -1;
                        }
                     );
                  }),
                  lang: ce(function (e) {
                     return (
                        U.test(e || "") || ae.error("unsupported lang: " + e),
                        (e = e.replace(te, ie).toLowerCase()),
                        function (t) {
                           var i;
                           do {
                              if ((i = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                                 return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-");
                           } while ((t = t.parentNode) && 1 === t.nodeType);
                           return !1;
                        }
                     );
                  }),
                  target: function (t) {
                     var i = e.location && e.location.hash;
                     return i && i.slice(1) === t.id;
                  },
                  root: function (e) {
                     return e === f;
                  },
                  focus: function (e) {
                     return (
                        e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                     );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                     var t = e.nodeName.toLowerCase();
                     return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                  },
                  selected: function (e) {
                     return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                  },
                  empty: function (e) {
                     for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                     return !0;
                  },
                  parent: function (e) {
                     return !n.pseudos.empty(e);
                  },
                  header: function (e) {
                     return K.test(e.nodeName);
                  },
                  input: function (e) {
                     return Z.test(e.nodeName);
                  },
                  button: function (e) {
                     var t = e.nodeName.toLowerCase();
                     return ("input" === t && "button" === e.type) || "button" === t;
                  },
                  text: function (e) {
                     var t;
                     return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                     );
                  },
                  first: me(function () {
                     return [0];
                  }),
                  last: me(function (e, t) {
                     return [t - 1];
                  }),
                  eq: me(function (e, t, i) {
                     return [i < 0 ? i + t : i];
                  }),
                  even: me(function (e, t) {
                     for (var i = 0; i < t; i += 2) e.push(i);
                     return e;
                  }),
                  odd: me(function (e, t) {
                     for (var i = 1; i < t; i += 2) e.push(i);
                     return e;
                  }),
                  lt: me(function (e, t, i) {
                     for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0; ) e.push(n);
                     return e;
                  }),
                  gt: me(function (e, t, i) {
                     for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
                     return e;
                  }),
               },
            }),
         (n.pseudos.nth = n.pseudos.eq),
         { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            n.pseudos[t] = pe(t);
         for (t in { submit: !0, reset: !0 }) n.pseudos[t] = fe(t);
         function ye() {}
         function be(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n;
         }
         function we(e, t, i) {
            var n = t.dir,
               o = t.next,
               s = o || n,
               r = i && "parentNode" === s,
               a = T++;
            return t.first
               ? function (t, i, o) {
                    for (; (t = t[n]); ) if (1 === t.nodeType || r) return e(t, i, o);
                    return !1;
                 }
               : function (t, i, l) {
                    var c,
                       d,
                       u,
                       h = [S, a];
                    if (l) {
                       for (; (t = t[n]); ) if ((1 === t.nodeType || r) && e(t, i, l)) return !0;
                    } else
                       for (; (t = t[n]); )
                          if (1 === t.nodeType || r)
                             if (
                                ((d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {})),
                                o && o === t.nodeName.toLowerCase())
                             )
                                t = t[n] || t;
                             else {
                                if ((c = d[s]) && c[0] === S && c[1] === a) return (h[2] = c[2]);
                                if (((d[s] = h), (h[2] = e(t, i, l)))) return !0;
                             }
                    return !1;
                 };
         }
         function xe(e) {
            return e.length > 1
               ? function (t, i, n) {
                    for (var o = e.length; o--; ) if (!e[o](t, i, n)) return !1;
                    return !0;
                 }
               : e[0];
         }
         function Se(e, t, i, n, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)
               (s = e[a]) && ((i && !i(s, n, o)) || (r.push(s), c && t.push(a)));
            return r;
         }
         function Te(e, t, i, n, o, s) {
            return (
               n && !n[w] && (n = Te(n)),
               o && !o[w] && (o = Te(o, s)),
               ce(function (s, r, a, l) {
                  var c,
                     d,
                     u,
                     h = [],
                     p = [],
                     f = r.length,
                     g =
                        s ||
                        (function (e, t, i) {
                           for (var n = 0, o = t.length; n < o; n++) ae(e, t[n], i);
                           return i;
                        })(t || "*", a.nodeType ? [a] : a, []),
                     m = !e || (!s && t) ? g : Se(g, h, e, a, l),
                     v = i ? (o || (s ? e : f || n) ? [] : r) : m;
                  if ((i && i(m, v, a, l), n))
                     for (c = Se(v, p), n(c, [], a, l), d = c.length; d--; ) (u = c[d]) && (v[p[d]] = !(m[p[d]] = u));
                  if (s) {
                     if (o || e) {
                        if (o) {
                           for (c = [], d = v.length; d--; ) (u = v[d]) && c.push((m[d] = u));
                           o(null, (v = []), c, l);
                        }
                        for (d = v.length; d--; ) (u = v[d]) && (c = o ? j(s, u) : h[d]) > -1 && (s[c] = !(r[c] = u));
                     }
                  } else (v = Se(v === r ? v.splice(f, v.length) : v)), o ? o(null, r, v, l) : $.apply(r, v);
               })
            );
         }
         function Ce(e) {
            for (
               var t,
                  i,
                  o,
                  s = e.length,
                  r = n.relative[e[0].type],
                  a = r || n.relative[" "],
                  l = r ? 1 : 0,
                  d = we(
                     function (e) {
                        return e === t;
                     },
                     a,
                     !0
                  ),
                  u = we(
                     function (e) {
                        return j(t, e) > -1;
                     },
                     a,
                     !0
                  ),
                  h = [
                     function (e, i, n) {
                        var o = (!r && (n || i !== c)) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
                        return (t = null), o;
                     },
                  ];
               l < s;
               l++
            )
               if ((i = n.relative[e[l].type])) h = [we(xe(h), i)];
               else {
                  if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                     for (o = ++l; o < s && !n.relative[e[o].type]; o++);
                     return Te(
                        l > 1 && xe(h),
                        l > 1 &&
                           be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(B, "$1"),
                        i,
                        l < o && Ce(e.slice(l, o)),
                        o < s && Ce((e = e.slice(o))),
                        o < s && be(e)
                     );
                  }
                  h.push(i);
               }
            return xe(h);
         }
         return (
            (ye.prototype = n.filters = n.pseudos),
            (n.setFilters = new ye()),
            (r = ae.tokenize =
               function (e, t) {
                  var i,
                     o,
                     s,
                     r,
                     a,
                     l,
                     c,
                     d = k[e + " "];
                  if (d) return t ? 0 : d.slice(0);
                  for (a = e, l = [], c = n.preFilter; a; ) {
                     for (r in ((i && !(o = W.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
                     (i = !1),
                     (o = _.exec(a)) &&
                        ((i = o.shift()), s.push({ value: i, type: o[0].replace(B, " ") }), (a = a.slice(i.length))),
                     n.filter))
                        !(o = V[r].exec(a)) ||
                           (c[r] && !(o = c[r](o))) ||
                           ((i = o.shift()), s.push({ value: i, type: r, matches: o }), (a = a.slice(i.length)));
                     if (!i) break;
                  }
                  return t ? a.length : a ? ae.error(e) : k(e, l).slice(0);
               }),
            (a = ae.compile =
               function (e, t) {
                  var i,
                     o = [],
                     s = [],
                     a = E[e + " "];
                  if (!a) {
                     for (t || (t = r(e)), i = t.length; i--; ) (a = Ce(t[i]))[w] ? o.push(a) : s.push(a);
                     (a = E(
                        e,
                        (function (e, t) {
                           var i = t.length > 0,
                              o = e.length > 0,
                              s = function (s, r, a, l, d) {
                                 var u,
                                    f,
                                    m,
                                    v = 0,
                                    y = "0",
                                    b = s && [],
                                    w = [],
                                    x = c,
                                    T = s || (o && n.find.TAG("*", d)),
                                    C = (S += null == x ? 1 : Math.random() || 0.1),
                                    k = T.length;
                                 for (d && (c = r == p || r || d); y !== k && null != (u = T[y]); y++) {
                                    if (o && u) {
                                       for (f = 0, r || u.ownerDocument == p || (h(u), (a = !g)); (m = e[f++]); )
                                          if (m(u, r || p, a)) {
                                             l.push(u);
                                             break;
                                          }
                                       d && (S = C);
                                    }
                                    i && ((u = !m && u) && v--, s && b.push(u));
                                 }
                                 if (((v += y), i && y !== v)) {
                                    for (f = 0; (m = t[f++]); ) m(b, w, r, a);
                                    if (s) {
                                       if (v > 0) for (; y--; ) b[y] || w[y] || (w[y] = L.call(l));
                                       w = Se(w);
                                    }
                                    $.apply(l, w), d && !s && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
                                 }
                                 return d && ((S = C), (c = x)), b;
                              };
                           return i ? ce(s) : s;
                        })(s, o)
                     )),
                        (a.selector = e);
                  }
                  return a;
               }),
            (l = ae.select =
               function (e, t, i, o) {
                  var s,
                     l,
                     c,
                     d,
                     u,
                     h = "function" == typeof e && e,
                     p = !o && r((e = h.selector || e));
                  if (((i = i || []), 1 === p.length)) {
                     if (
                        (l = p[0] = p[0].slice(0)).length > 2 &&
                        "ID" === (c = l[0]).type &&
                        9 === t.nodeType &&
                        g &&
                        n.relative[l[1].type]
                     ) {
                        if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0])) return i;
                        h && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                     }
                     for (s = V.needsContext.test(e) ? 0 : l.length; s-- && ((c = l[s]), !n.relative[(d = c.type)]); )
                        if (
                           (u = n.find[d]) &&
                           (o = u(c.matches[0].replace(te, ie), (ee.test(l[0].type) && ve(t.parentNode)) || t))
                        ) {
                           if ((l.splice(s, 1), !(e = o.length && be(l)))) return $.apply(i, o), i;
                           break;
                        }
                  }
                  return (h || a(e, p))(o, t, !g, i, !t || (ee.test(e) && ve(t.parentNode)) || t), i;
               }),
            (i.sortStable = w.split("").sort(A).join("") === w),
            (i.detectDuplicates = !!u),
            h(),
            (i.sortDetached = de(function (e) {
               return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            de(function (e) {
               return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
               ue("type|href|height|width", function (e, t, i) {
                  if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
               }),
            (i.attributes &&
               de(function (e) {
                  return (
                     (e.innerHTML = "<input/>"),
                     e.firstChild.setAttribute("value", ""),
                     "" === e.firstChild.getAttribute("value")
                  );
               })) ||
               ue("value", function (e, t, i) {
                  if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
               }),
            de(function (e) {
               return null == e.getAttribute("disabled");
            }) ||
               ue(R, function (e, t, i) {
                  var n;
                  if (!i)
                     return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
               }),
            ae
         );
      })(e);
   (x.find = T),
      (x.expr = T.selectors),
      (x.expr[":"] = x.expr.pseudos),
      (x.uniqueSort = x.unique = T.uniqueSort),
      (x.text = T.getText),
      (x.isXMLDoc = T.isXML),
      (x.contains = T.contains),
      (x.escapeSelector = T.escape);
   var C = function (e, t, i) {
         for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
               if (o && x(e).is(i)) break;
               n.push(e);
            }
         return n;
      },
      k = function (e, t) {
         for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
         return i;
      },
      E = x.expr.match.needsContext;
   function P(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
   }
   var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
   function O(e, t, i) {
      return f(t)
         ? x.grep(e, function (e, n) {
              return !!t.call(e, n, e) !== i;
           })
         : t.nodeType
         ? x.grep(e, function (e) {
              return (e === t) !== i;
           })
         : "string" != typeof t
         ? x.grep(e, function (e) {
              return a.call(t, e) > -1 !== i;
           })
         : x.filter(t, e, i);
   }
   (x.filter = function (e, t, i) {
      var n = t[0];
      return (
         i && (e = ":not(" + e + ")"),
         1 === t.length && 1 === n.nodeType
            ? x.find.matchesSelector(n, e)
               ? [n]
               : []
            : x.find.matches(
                 e,
                 x.grep(t, function (e) {
                    return 1 === e.nodeType;
                 })
              )
      );
   }),
      x.fn.extend({
         find: function (e) {
            var t,
               i,
               n = this.length,
               o = this;
            if ("string" != typeof e)
               return this.pushStack(
                  x(e).filter(function () {
                     for (t = 0; t < n; t++) if (x.contains(o[t], this)) return !0;
                  })
               );
            for (i = this.pushStack([]), t = 0; t < n; t++) x.find(e, o[t], i);
            return n > 1 ? x.uniqueSort(i) : i;
         },
         filter: function (e) {
            return this.pushStack(O(this, e || [], !1));
         },
         not: function (e) {
            return this.pushStack(O(this, e || [], !0));
         },
         is: function (e) {
            return !!O(this, "string" == typeof e && E.test(e) ? x(e) : e || [], !1).length;
         },
      });
   var M,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
   ((x.fn.init = function (e, t, i) {
      var n, o;
      if (!e) return this;
      if (((i = i || M), "string" == typeof e)) {
         if (
            !(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) ||
            (!n[1] && t)
         )
            return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
         if (n[1]) {
            if (
               ((t = t instanceof x ? t[0] : t),
               x.merge(this, x.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : m, !0)),
               A.test(n[1]) && x.isPlainObject(t))
            )
               for (n in t) f(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
         }
         return (o = m.getElementById(n[2])) && ((this[0] = o), (this.length = 1)), this;
      }
      return e.nodeType
         ? ((this[0] = e), (this.length = 1), this)
         : f(e)
         ? void 0 !== i.ready
            ? i.ready(e)
            : e(x)
         : x.makeArray(e, this);
   }).prototype = x.fn),
      (M = x(m));
   var D = /^(?:parents|prev(?:Until|All))/,
      $ = { children: !0, contents: !0, next: !0, prev: !0 };
   function z(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
   }
   x.fn.extend({
      has: function (e) {
         var t = x(e, this),
            i = t.length;
         return this.filter(function () {
            for (var e = 0; e < i; e++) if (x.contains(this, t[e])) return !0;
         });
      },
      closest: function (e, t) {
         var i,
            n = 0,
            o = this.length,
            s = [],
            r = "string" != typeof e && x(e);
         if (!E.test(e))
            for (; n < o; n++)
               for (i = this[n]; i && i !== t; i = i.parentNode)
                  if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && x.find.matchesSelector(i, e))) {
                     s.push(i);
                     break;
                  }
         return this.pushStack(s.length > 1 ? x.uniqueSort(s) : s);
      },
      index: function (e) {
         return e
            ? "string" == typeof e
               ? a.call(x(e), this[0])
               : a.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
      },
      add: function (e, t) {
         return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
      },
      addBack: function (e) {
         return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
   }),
      x.each(
         {
            parent: function (e) {
               var t = e.parentNode;
               return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
               return C(e, "parentNode");
            },
            parentsUntil: function (e, t, i) {
               return C(e, "parentNode", i);
            },
            next: function (e) {
               return z(e, "nextSibling");
            },
            prev: function (e) {
               return z(e, "previousSibling");
            },
            nextAll: function (e) {
               return C(e, "nextSibling");
            },
            prevAll: function (e) {
               return C(e, "previousSibling");
            },
            nextUntil: function (e, t, i) {
               return C(e, "nextSibling", i);
            },
            prevUntil: function (e, t, i) {
               return C(e, "previousSibling", i);
            },
            siblings: function (e) {
               return k((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
               return k(e.firstChild);
            },
            contents: function (e) {
               return null != e.contentDocument && n(e.contentDocument)
                  ? e.contentDocument
                  : (P(e, "template") && (e = e.content || e), x.merge([], e.childNodes));
            },
         },
         function (e, t) {
            x.fn[e] = function (i, n) {
               var o = x.map(this, t, i);
               return (
                  "Until" !== e.slice(-5) && (n = i),
                  n && "string" == typeof n && (o = x.filter(n, o)),
                  this.length > 1 && ($[e] || x.uniqueSort(o), D.test(e) && o.reverse()),
                  this.pushStack(o)
               );
            };
         }
      );
   var j = /[^\x20\t\r\n\f]+/g;
   function R(e) {
      return e;
   }
   function I(e) {
      throw e;
   }
   function H(e, t, i, n) {
      var o;
      try {
         e && f((o = e.promise))
            ? o.call(e).done(t).fail(i)
            : e && f((o = e.then))
            ? o.call(e, t, i)
            : t.apply(void 0, [e].slice(n));
      } catch (e) {
         i.apply(void 0, [e]);
      }
   }
   (x.Callbacks = function (e) {
      e =
         "string" == typeof e
            ? (function (e) {
                 var t = {};
                 return (
                    x.each(e.match(j) || [], function (e, i) {
                       t[i] = !0;
                    }),
                    t
                 );
              })(e)
            : x.extend({}, e);
      var t,
         i,
         n,
         o,
         s = [],
         r = [],
         a = -1,
         l = function () {
            for (o = o || e.once, n = t = !0; r.length; a = -1)
               for (i = r.shift(); ++a < s.length; )
                  !1 === s[a].apply(i[0], i[1]) && e.stopOnFalse && ((a = s.length), (i = !1));
            e.memory || (i = !1), (t = !1), o && (s = i ? [] : "");
         },
         c = {
            add: function () {
               return (
                  s &&
                     (i && !t && ((a = s.length - 1), r.push(i)),
                     (function t(i) {
                        x.each(i, function (i, n) {
                           f(n) ? (e.unique && c.has(n)) || s.push(n) : n && n.length && "string" !== b(n) && t(n);
                        });
                     })(arguments),
                     i && !t && l()),
                  this
               );
            },
            remove: function () {
               return (
                  x.each(arguments, function (e, t) {
                     for (var i; (i = x.inArray(t, s, i)) > -1; ) s.splice(i, 1), i <= a && a--;
                  }),
                  this
               );
            },
            has: function (e) {
               return e ? x.inArray(e, s) > -1 : s.length > 0;
            },
            empty: function () {
               return s && (s = []), this;
            },
            disable: function () {
               return (o = r = []), (s = i = ""), this;
            },
            disabled: function () {
               return !s;
            },
            lock: function () {
               return (o = r = []), i || t || (s = i = ""), this;
            },
            locked: function () {
               return !!o;
            },
            fireWith: function (e, i) {
               return o || ((i = [e, (i = i || []).slice ? i.slice() : i]), r.push(i), t || l()), this;
            },
            fire: function () {
               return c.fireWith(this, arguments), this;
            },
            fired: function () {
               return !!n;
            },
         };
      return c;
   }),
      x.extend({
         Deferred: function (t) {
            var i = [
                  ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                  ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"],
               ],
               n = "pending",
               o = {
                  state: function () {
                     return n;
                  },
                  always: function () {
                     return s.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                     return o.then(null, e);
                  },
                  pipe: function () {
                     var e = arguments;
                     return x
                        .Deferred(function (t) {
                           x.each(i, function (i, n) {
                              var o = f(e[n[4]]) && e[n[4]];
                              s[n[1]](function () {
                                 var e = o && o.apply(this, arguments);
                                 e && f(e.promise)
                                    ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject)
                                    : t[n[0] + "With"](this, o ? [e] : arguments);
                              });
                           }),
                              (e = null);
                        })
                        .promise();
                  },
                  then: function (t, n, o) {
                     var s = 0;
                     function r(t, i, n, o) {
                        return function () {
                           var a = this,
                              l = arguments,
                              c = function () {
                                 var e, c;
                                 if (!(t < s)) {
                                    if ((e = n.apply(a, l)) === i.promise())
                                       throw new TypeError("Thenable self-resolution");
                                    (c = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                       f(c)
                                          ? o
                                             ? c.call(e, r(s, i, R, o), r(s, i, I, o))
                                             : (s++, c.call(e, r(s, i, R, o), r(s, i, I, o), r(s, i, R, i.notifyWith)))
                                          : (n !== R && ((a = void 0), (l = [e])), (o || i.resolveWith)(a, l));
                                 }
                              },
                              d = o
                                 ? c
                                 : function () {
                                      try {
                                         c();
                                      } catch (e) {
                                         x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, d.stackTrace),
                                            t + 1 >= s && (n !== I && ((a = void 0), (l = [e])), i.rejectWith(a, l));
                                      }
                                   };
                           t
                              ? d()
                              : (x.Deferred.getStackHook && (d.stackTrace = x.Deferred.getStackHook()),
                                e.setTimeout(d));
                        };
                     }
                     return x
                        .Deferred(function (e) {
                           i[0][3].add(r(0, e, f(o) ? o : R, e.notifyWith)),
                              i[1][3].add(r(0, e, f(t) ? t : R)),
                              i[2][3].add(r(0, e, f(n) ? n : I));
                        })
                        .promise();
                  },
                  promise: function (e) {
                     return null != e ? x.extend(e, o) : o;
                  },
               },
               s = {};
            return (
               x.each(i, function (e, t) {
                  var r = t[2],
                     a = t[5];
                  (o[t[1]] = r.add),
                     a &&
                        r.add(
                           function () {
                              n = a;
                           },
                           i[3 - e][2].disable,
                           i[3 - e][3].disable,
                           i[0][2].lock,
                           i[0][3].lock
                        ),
                     r.add(t[3].fire),
                     (s[t[0]] = function () {
                        return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                     }),
                     (s[t[0] + "With"] = r.fireWith);
               }),
               o.promise(s),
               t && t.call(s, s),
               s
            );
         },
         when: function (e) {
            var t = arguments.length,
               i = t,
               n = Array(i),
               s = o.call(arguments),
               r = x.Deferred(),
               a = function (e) {
                  return function (i) {
                     (n[e] = this), (s[e] = arguments.length > 1 ? o.call(arguments) : i), --t || r.resolveWith(n, s);
                  };
               };
            if (t <= 1 && (H(e, r.done(a(i)).resolve, r.reject, !t), "pending" === r.state() || f(s[i] && s[i].then)))
               return r.then();
            for (; i--; ) H(s[i], a(i), r.reject);
            return r.promise();
         },
      });
   var N = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
   (x.Deferred.exceptionHook = function (t, i) {
      e.console &&
         e.console.warn &&
         t &&
         N.test(t.name) &&
         e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
   }),
      (x.readyException = function (t) {
         e.setTimeout(function () {
            throw t;
         });
      });
   var F = x.Deferred();
   function q() {
      m.removeEventListener("DOMContentLoaded", q), e.removeEventListener("load", q), x.ready();
   }
   (x.fn.ready = function (e) {
      return (
         F.then(e).catch(function (e) {
            x.readyException(e);
         }),
         this
      );
   }),
      x.extend({
         isReady: !1,
         readyWait: 1,
         ready: function (e) {
            (!0 === e ? --x.readyWait : x.isReady) ||
               ((x.isReady = !0), (!0 !== e && --x.readyWait > 0) || F.resolveWith(m, [x]));
         },
      }),
      (x.ready.then = F.then),
      "complete" === m.readyState || ("loading" !== m.readyState && !m.documentElement.doScroll)
         ? e.setTimeout(x.ready)
         : (m.addEventListener("DOMContentLoaded", q), e.addEventListener("load", q));
   var B = function (e, t, i, n, o, s, r) {
         var a = 0,
            l = e.length,
            c = null == i;
         if ("object" === b(i)) for (a in ((o = !0), i)) B(e, t, a, i[a], !0, s, r);
         else if (
            void 0 !== n &&
            ((o = !0),
            f(n) || (r = !0),
            c &&
               (r
                  ? (t.call(e, n), (t = null))
                  : ((c = t),
                    (t = function (e, t, i) {
                       return c.call(x(e), i);
                    }))),
            t)
         )
            for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
         return o ? e : c ? t.call(e) : l ? t(e[0], i) : s;
      },
      W = /^-ms-/,
      _ = /-([a-z])/g;
   function X(e, t) {
      return t.toUpperCase();
   }
   function Y(e) {
      return e.replace(W, "ms-").replace(_, X);
   }
   var U = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
   };
   function V() {
      this.expando = x.expando + V.uid++;
   }
   (V.uid = 1),
      (V.prototype = {
         cache: function (e) {
            var t = e[this.expando];
            return (
               t ||
                  ((t = {}),
                  U(e) &&
                     (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
               t
            );
         },
         set: function (e, t, i) {
            var n,
               o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = i;
            else for (n in t) o[Y(n)] = t[n];
            return o;
         },
         get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
         },
         access: function (e, t, i) {
            return void 0 === t || (t && "string" == typeof t && void 0 === i)
               ? this.get(e, t)
               : (this.set(e, t, i), void 0 !== i ? i : t);
         },
         remove: function (e, t) {
            var i,
               n = e[this.expando];
            if (void 0 !== n) {
               if (void 0 !== t) {
                  i = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in n ? [t] : t.match(j) || []).length;
                  for (; i--; ) delete n[t[i]];
               }
               (void 0 === t || x.isEmptyObject(n)) &&
                  (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
         },
         hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t);
         },
      });
   var G = new V(),
      Z = new V(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;
   function Q(e, t, i) {
      var n;
      if (void 0 === i && 1 === e.nodeType)
         if (((n = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (i = e.getAttribute(n)))) {
            try {
               i = (function (e) {
                  return (
                     "true" === e ||
                     ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e))
                  );
               })(i);
            } catch (e) {}
            Z.set(e, t, i);
         } else i = void 0;
      return i;
   }
   x.extend({
      hasData: function (e) {
         return Z.hasData(e) || G.hasData(e);
      },
      data: function (e, t, i) {
         return Z.access(e, t, i);
      },
      removeData: function (e, t) {
         Z.remove(e, t);
      },
      _data: function (e, t, i) {
         return G.access(e, t, i);
      },
      _removeData: function (e, t) {
         G.remove(e, t);
      },
   }),
      x.fn.extend({
         data: function (e, t) {
            var i,
               n,
               o,
               s = this[0],
               r = s && s.attributes;
            if (void 0 === e) {
               if (this.length && ((o = Z.get(s)), 1 === s.nodeType && !G.get(s, "hasDataAttrs"))) {
                  for (i = r.length; i--; )
                     r[i] && 0 === (n = r[i].name).indexOf("data-") && ((n = Y(n.slice(5))), Q(s, n, o[n]));
                  G.set(s, "hasDataAttrs", !0);
               }
               return o;
            }
            return "object" == typeof e
               ? this.each(function () {
                    Z.set(this, e);
                 })
               : B(
                    this,
                    function (t) {
                       var i;
                       if (s && void 0 === t)
                          return void 0 !== (i = Z.get(s, e)) || void 0 !== (i = Q(s, e)) ? i : void 0;
                       this.each(function () {
                          Z.set(this, e, t);
                       });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                 );
         },
         removeData: function (e) {
            return this.each(function () {
               Z.remove(this, e);
            });
         },
      }),
      x.extend({
         queue: function (e, t, i) {
            var n;
            if (e)
               return (
                  (t = (t || "fx") + "queue"),
                  (n = G.get(e, t)),
                  i && (!n || Array.isArray(i) ? (n = G.access(e, t, x.makeArray(i))) : n.push(i)),
                  n || []
               );
         },
         dequeue: function (e, t) {
            t = t || "fx";
            var i = x.queue(e, t),
               n = i.length,
               o = i.shift(),
               s = x._queueHooks(e, t);
            "inprogress" === o && ((o = i.shift()), n--),
               o &&
                  ("fx" === t && i.unshift("inprogress"),
                  delete s.stop,
                  o.call(
                     e,
                     function () {
                        x.dequeue(e, t);
                     },
                     s
                  )),
               !n && s && s.empty.fire();
         },
         _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return (
               G.get(e, i) ||
               G.access(e, i, {
                  empty: x.Callbacks("once memory").add(function () {
                     G.remove(e, [t + "queue", i]);
                  }),
               })
            );
         },
      }),
      x.fn.extend({
         queue: function (e, t) {
            var i = 2;
            return (
               "string" != typeof e && ((t = e), (e = "fx"), i--),
               arguments.length < i
                  ? x.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                       var i = x.queue(this, e, t);
                       x._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && x.dequeue(this, e);
                    })
            );
         },
         dequeue: function (e) {
            return this.each(function () {
               x.dequeue(this, e);
            });
         },
         clearQueue: function (e) {
            return this.queue(e || "fx", []);
         },
         promise: function (e, t) {
            var i,
               n = 1,
               o = x.Deferred(),
               s = this,
               r = this.length,
               a = function () {
                  --n || o.resolveWith(s, [s]);
               };
            for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; r--; )
               (i = G.get(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t);
         },
      });
   var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ie = ["Top", "Right", "Bottom", "Left"],
      ne = m.documentElement,
      oe = function (e) {
         return x.contains(e.ownerDocument, e);
      },
      se = { composed: !0 };
   ne.getRootNode &&
      (oe = function (e) {
         return x.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
      });
   var re = function (e, t) {
      return (
         "none" === (e = t || e).style.display || ("" === e.style.display && oe(e) && "none" === x.css(e, "display"))
      );
   };
   function ae(e, t, i, n) {
      var o,
         s,
         r = 20,
         a = n
            ? function () {
                 return n.cur();
              }
            : function () {
                 return x.css(e, t, "");
              },
         l = a(),
         c = (i && i[3]) || (x.cssNumber[t] ? "" : "px"),
         d = e.nodeType && (x.cssNumber[t] || ("px" !== c && +l)) && te.exec(x.css(e, t));
      if (d && d[3] !== c) {
         for (l /= 2, c = c || d[3], d = +l || 1; r--; )
            x.style(e, t, d + c), (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0), (d /= s);
         (d *= 2), x.style(e, t, d + c), (i = i || []);
      }
      return (
         i &&
            ((d = +d || +l || 0),
            (o = i[1] ? d + (i[1] + 1) * i[2] : +i[2]),
            n && ((n.unit = c), (n.start = d), (n.end = o))),
         o
      );
   }
   var le = {};
   function ce(e) {
      var t,
         i = e.ownerDocument,
         n = e.nodeName,
         o = le[n];
      return (
         o ||
         ((t = i.body.appendChild(i.createElement(n))),
         (o = x.css(t, "display")),
         t.parentNode.removeChild(t),
         "none" === o && (o = "block"),
         (le[n] = o),
         o)
      );
   }
   function de(e, t) {
      for (var i, n, o = [], s = 0, r = e.length; s < r; s++)
         (n = e[s]).style &&
            ((i = n.style.display),
            t
               ? ("none" === i && ((o[s] = G.get(n, "display") || null), o[s] || (n.style.display = "")),
                 "" === n.style.display && re(n) && (o[s] = ce(n)))
               : "none" !== i && ((o[s] = "none"), G.set(n, "display", i)));
      for (s = 0; s < r; s++) null != o[s] && (e[s].style.display = o[s]);
      return e;
   }
   x.fn.extend({
      show: function () {
         return de(this, !0);
      },
      hide: function () {
         return de(this);
      },
      toggle: function (e) {
         return "boolean" == typeof e
            ? e
               ? this.show()
               : this.hide()
            : this.each(function () {
                 re(this) ? x(this).show() : x(this).hide();
              });
      },
   });
   var ue,
      he,
      pe = /^(?:checkbox|radio)$/i,
      fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ge = /^$|^module$|\/(?:java|ecma)script/i;
   (ue = m.createDocumentFragment().appendChild(m.createElement("div"))),
      (he = m.createElement("input")).setAttribute("type", "radio"),
      he.setAttribute("checked", "checked"),
      he.setAttribute("name", "t"),
      ue.appendChild(he),
      (p.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ue.innerHTML = "<textarea>x</textarea>"),
      (p.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
      (ue.innerHTML = "<option></option>"),
      (p.option = !!ue.lastChild);
   var me = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
   };
   function ve(e, t) {
      var i;
      return (
         (i =
            void 0 !== e.getElementsByTagName
               ? e.getElementsByTagName(t || "*")
               : void 0 !== e.querySelectorAll
               ? e.querySelectorAll(t || "*")
               : []),
         void 0 === t || (t && P(e, t)) ? x.merge([e], i) : i
      );
   }
   function ye(e, t) {
      for (var i = 0, n = e.length; i < n; i++) G.set(e[i], "globalEval", !t || G.get(t[i], "globalEval"));
   }
   (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
      (me.th = me.td),
      p.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
   var be = /<|&#?\w+;/;
   function we(e, t, i, n, o) {
      for (var s, r, a, l, c, d, u = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
         if ((s = e[p]) || 0 === s)
            if ("object" === b(s)) x.merge(h, s.nodeType ? [s] : s);
            else if (be.test(s)) {
               for (
                  r = r || u.appendChild(t.createElement("div")),
                     a = (fe.exec(s) || ["", ""])[1].toLowerCase(),
                     l = me[a] || me._default,
                     r.innerHTML = l[1] + x.htmlPrefilter(s) + l[2],
                     d = l[0];
                  d--;

               )
                  r = r.lastChild;
               x.merge(h, r.childNodes), ((r = u.firstChild).textContent = "");
            } else h.push(t.createTextNode(s));
      for (u.textContent = "", p = 0; (s = h[p++]); )
         if (n && x.inArray(s, n) > -1) o && o.push(s);
         else if (((c = oe(s)), (r = ve(u.appendChild(s), "script")), c && ye(r), i))
            for (d = 0; (s = r[d++]); ) ge.test(s.type || "") && i.push(s);
      return u;
   }
   var xe = /^([^.]*)(?:\.(.+)|)/;
   function Se() {
      return !0;
   }
   function Te() {
      return !1;
   }
   function Ce(e, t) {
      return (
         (e ===
            (function () {
               try {
                  return m.activeElement;
               } catch (e) {}
            })()) ==
         ("focus" === t)
      );
   }
   function ke(e, t, i, n, o, s) {
      var r, a;
      if ("object" == typeof t) {
         for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), t)) ke(e, a, i, n, t[a], s);
         return e;
      }
      if (
         (null == n && null == o
            ? ((o = i), (n = i = void 0))
            : null == o && ("string" == typeof i ? ((o = n), (n = void 0)) : ((o = n), (n = i), (i = void 0))),
         !1 === o)
      )
         o = Te;
      else if (!o) return e;
      return (
         1 === s &&
            ((r = o),
            (o = function (e) {
               return x().off(e), r.apply(this, arguments);
            }),
            (o.guid = r.guid || (r.guid = x.guid++))),
         e.each(function () {
            x.event.add(this, t, o, n, i);
         })
      );
   }
   function Ee(e, t, i) {
      i
         ? (G.set(e, t, !1),
           x.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                 var n,
                    s,
                    r = G.get(this, t);
                 if (1 & e.isTrigger && this[t]) {
                    if (r.length) (x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (
                       ((r = o.call(arguments)),
                       G.set(this, t, r),
                       (n = i(this, t)),
                       this[t](),
                       r !== (s = G.get(this, t)) || n ? G.set(this, t, !1) : (s = {}),
                       r !== s)
                    )
                       return e.stopImmediatePropagation(), e.preventDefault(), s && s.value;
                 } else
                    r.length &&
                       (G.set(this, t, { value: x.event.trigger(x.extend(r[0], x.Event.prototype), r.slice(1), this) }),
                       e.stopImmediatePropagation());
              },
           }))
         : void 0 === G.get(e, t) && x.event.add(e, t, Se);
   }
   (x.event = {
      global: {},
      add: function (e, t, i, n, o) {
         var s,
            r,
            a,
            l,
            c,
            d,
            u,
            h,
            p,
            f,
            g,
            m = G.get(e);
         if (U(e))
            for (
               i.handler && ((i = (s = i).handler), (o = s.selector)),
                  o && x.find.matchesSelector(ne, o),
                  i.guid || (i.guid = x.guid++),
                  (l = m.events) || (l = m.events = Object.create(null)),
                  (r = m.handle) ||
                     (r = m.handle =
                        function (t) {
                           return void 0 !== x && x.event.triggered !== t.type
                              ? x.event.dispatch.apply(e, arguments)
                              : void 0;
                        }),
                  c = (t = (t || "").match(j) || [""]).length;
               c--;

            )
               (p = g = (a = xe.exec(t[c]) || [])[1]),
                  (f = (a[2] || "").split(".").sort()),
                  p &&
                     ((u = x.event.special[p] || {}),
                     (p = (o ? u.delegateType : u.bindType) || p),
                     (u = x.event.special[p] || {}),
                     (d = x.extend(
                        {
                           type: p,
                           origType: g,
                           data: n,
                           handler: i,
                           guid: i.guid,
                           selector: o,
                           needsContext: o && x.expr.match.needsContext.test(o),
                           namespace: f.join("."),
                        },
                        s
                     )),
                     (h = l[p]) ||
                        (((h = l[p] = []).delegateCount = 0),
                        (u.setup && !1 !== u.setup.call(e, n, f, r)) ||
                           (e.addEventListener && e.addEventListener(p, r))),
                     u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)),
                     o ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                     (x.event.global[p] = !0));
      },
      remove: function (e, t, i, n, o) {
         var s,
            r,
            a,
            l,
            c,
            d,
            u,
            h,
            p,
            f,
            g,
            m = G.hasData(e) && G.get(e);
         if (m && (l = m.events)) {
            for (c = (t = (t || "").match(j) || [""]).length; c--; )
               if (((p = g = (a = xe.exec(t[c]) || [])[1]), (f = (a[2] || "").split(".").sort()), p)) {
                  for (
                     u = x.event.special[p] || {},
                        h = l[(p = (n ? u.delegateType : u.bindType) || p)] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        r = s = h.length;
                     s--;

                  )
                     (d = h[s]),
                        (!o && g !== d.origType) ||
                           (i && i.guid !== d.guid) ||
                           (a && !a.test(d.namespace)) ||
                           (n && n !== d.selector && ("**" !== n || !d.selector)) ||
                           (h.splice(s, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
                  r &&
                     !h.length &&
                     ((u.teardown && !1 !== u.teardown.call(e, f, m.handle)) || x.removeEvent(e, p, m.handle),
                     delete l[p]);
               } else for (p in l) x.event.remove(e, p + t[c], i, n, !0);
            x.isEmptyObject(l) && G.remove(e, "handle events");
         }
      },
      dispatch: function (e) {
         var t,
            i,
            n,
            o,
            s,
            r,
            a = new Array(arguments.length),
            l = x.event.fix(e),
            c = (G.get(this, "events") || Object.create(null))[l.type] || [],
            d = x.event.special[l.type] || {};
         for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
         if (((l.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, l))) {
            for (r = x.event.handlers.call(this, l, c), t = 0; (o = r[t++]) && !l.isPropagationStopped(); )
               for (l.currentTarget = o.elem, i = 0; (s = o.handlers[i++]) && !l.isImmediatePropagationStopped(); )
                  (l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace)) ||
                     ((l.handleObj = s),
                     (l.data = s.data),
                     void 0 !== (n = ((x.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) &&
                        !1 === (l.result = n) &&
                        (l.preventDefault(), l.stopPropagation()));
            return d.postDispatch && d.postDispatch.call(this, l), l.result;
         }
      },
      handlers: function (e, t) {
         var i,
            n,
            o,
            s,
            r,
            a = [],
            l = t.delegateCount,
            c = e.target;
         if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
               if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                  for (s = [], r = {}, i = 0; i < l; i++)
                     void 0 === r[(o = (n = t[i]).selector + " ")] &&
                        (r[o] = n.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [c]).length),
                        r[o] && s.push(n);
                  s.length && a.push({ elem: c, handlers: s });
               }
         return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
      },
      addProp: function (e, t) {
         Object.defineProperty(x.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: f(t)
               ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                 }
               : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                 },
            set: function (t) {
               Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
            },
         });
      },
      fix: function (e) {
         return e[x.expando] ? e : new x.Event(e);
      },
      special: {
         load: { noBubble: !0 },
         click: {
            setup: function (e) {
               var t = this || e;
               return pe.test(t.type) && t.click && P(t, "input") && Ee(t, "click", Se), !1;
            },
            trigger: function (e) {
               var t = this || e;
               return pe.test(t.type) && t.click && P(t, "input") && Ee(t, "click"), !0;
            },
            _default: function (e) {
               var t = e.target;
               return (pe.test(t.type) && t.click && P(t, "input") && G.get(t, "click")) || P(t, "a");
            },
         },
         beforeunload: {
            postDispatch: function (e) {
               void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            },
         },
      },
   }),
      (x.removeEvent = function (e, t, i) {
         e.removeEventListener && e.removeEventListener(t, i);
      }),
      (x.Event = function (e, t) {
         if (!(this instanceof x.Event)) return new x.Event(e, t);
         e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                 e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Se : Te),
              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && x.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[x.expando] = !0);
      }),
      (x.Event.prototype = {
         constructor: x.Event,
         isDefaultPrevented: Te,
         isPropagationStopped: Te,
         isImmediatePropagationStopped: Te,
         isSimulated: !1,
         preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Se), e && !this.isSimulated && e.preventDefault();
         },
         stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Se), e && !this.isSimulated && e.stopPropagation();
         },
         stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Se),
               e && !this.isSimulated && e.stopImmediatePropagation(),
               this.stopPropagation();
         },
      }),
      x.each(
         {
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
            which: !0,
         },
         x.event.addProp
      ),
      x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
         x.event.special[e] = {
            setup: function () {
               return Ee(this, e, Ce), !1;
            },
            trigger: function () {
               return Ee(this, e), !0;
            },
            _default: function (t) {
               return G.get(t.target, e);
            },
            delegateType: t,
         };
      }),
      x.each(
         { mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
         function (e, t) {
            x.event.special[e] = {
               delegateType: t,
               bindType: t,
               handle: function (e) {
                  var i,
                     n = this,
                     o = e.relatedTarget,
                     s = e.handleObj;
                  return (
                     (o && (o === n || x.contains(n, o))) ||
                        ((e.type = s.origType), (i = s.handler.apply(this, arguments)), (e.type = t)),
                     i
                  );
               },
            };
         }
      ),
      x.fn.extend({
         on: function (e, t, i, n) {
            return ke(this, e, t, i, n);
         },
         one: function (e, t, i, n) {
            return ke(this, e, t, i, n, 1);
         },
         off: function (e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj)
               return (
                  (n = e.handleObj),
                  x(e.delegateTarget).off(
                     n.namespace ? n.origType + "." + n.namespace : n.origType,
                     n.selector,
                     n.handler
                  ),
                  this
               );
            if ("object" == typeof e) {
               for (o in e) this.off(o, t, e[o]);
               return this;
            }
            return (
               (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
               !1 === i && (i = Te),
               this.each(function () {
                  x.event.remove(this, e, i, t);
               })
            );
         },
      });
   var Pe = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Oe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
   function Me(e, t) {
      return (P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0]) || e;
   }
   function Le(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
   }
   function De(e) {
      return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
   }
   function $e(e, t) {
      var i, n, o, s, r, a;
      if (1 === t.nodeType) {
         if (G.hasData(e) && (a = G.get(e).events))
            for (o in (G.remove(t, "handle events"), a))
               for (i = 0, n = a[o].length; i < n; i++) x.event.add(t, o, a[o][i]);
         Z.hasData(e) && ((s = Z.access(e)), (r = x.extend({}, s)), Z.set(t, r));
      }
   }
   function ze(e, t) {
      var i = t.nodeName.toLowerCase();
      "input" === i && pe.test(e.type)
         ? (t.checked = e.checked)
         : ("input" !== i && "textarea" !== i) || (t.defaultValue = e.defaultValue);
   }
   function je(e, t, i, n) {
      t = s(t);
      var o,
         r,
         a,
         l,
         c,
         d,
         u = 0,
         h = e.length,
         g = h - 1,
         m = t[0],
         v = f(m);
      if (v || (h > 1 && "string" == typeof m && !p.checkClone && Ae.test(m)))
         return e.each(function (o) {
            var s = e.eq(o);
            v && (t[0] = m.call(this, o, s.html())), je(s, t, i, n);
         });
      if (
         h &&
         ((r = (o = we(t, e[0].ownerDocument, !1, e, n)).firstChild), 1 === o.childNodes.length && (o = r), r || n)
      ) {
         for (l = (a = x.map(ve(o, "script"), Le)).length; u < h; u++)
            (c = o), u !== g && ((c = x.clone(c, !0, !0)), l && x.merge(a, ve(c, "script"))), i.call(e[u], c, u);
         if (l)
            for (d = a[a.length - 1].ownerDocument, x.map(a, De), u = 0; u < l; u++)
               (c = a[u]),
                  ge.test(c.type || "") &&
                     !G.access(c, "globalEval") &&
                     x.contains(d, c) &&
                     (c.src && "module" !== (c.type || "").toLowerCase()
                        ? x._evalUrl &&
                          !c.noModule &&
                          x._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, d)
                        : y(c.textContent.replace(Oe, ""), c, d));
      }
      return e;
   }
   function Re(e, t, i) {
      for (var n, o = t ? x.filter(t, e) : e, s = 0; null != (n = o[s]); s++)
         i || 1 !== n.nodeType || x.cleanData(ve(n)),
            n.parentNode && (i && oe(n) && ye(ve(n, "script")), n.parentNode.removeChild(n));
      return e;
   }
   x.extend({
      htmlPrefilter: function (e) {
         return e;
      },
      clone: function (e, t, i) {
         var n,
            o,
            s,
            r,
            a = e.cloneNode(!0),
            l = oe(e);
         if (!(p.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || x.isXMLDoc(e)))
            for (r = ve(a), n = 0, o = (s = ve(e)).length; n < o; n++) ze(s[n], r[n]);
         if (t)
            if (i) for (s = s || ve(e), r = r || ve(a), n = 0, o = s.length; n < o; n++) $e(s[n], r[n]);
            else $e(e, a);
         return (r = ve(a, "script")).length > 0 && ye(r, !l && ve(e, "script")), a;
      },
      cleanData: function (e) {
         for (var t, i, n, o = x.event.special, s = 0; void 0 !== (i = e[s]); s++)
            if (U(i)) {
               if ((t = i[G.expando])) {
                  if (t.events) for (n in t.events) o[n] ? x.event.remove(i, n) : x.removeEvent(i, n, t.handle);
                  i[G.expando] = void 0;
               }
               i[Z.expando] && (i[Z.expando] = void 0);
            }
      },
   }),
      x.fn.extend({
         detach: function (e) {
            return Re(this, e, !0);
         },
         remove: function (e) {
            return Re(this, e);
         },
         text: function (e) {
            return B(
               this,
               function (e) {
                  return void 0 === e
                     ? x.text(this)
                     : this.empty().each(function () {
                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                             (this.textContent = e);
                       });
               },
               null,
               e,
               arguments.length
            );
         },
         append: function () {
            return je(this, arguments, function (e) {
               (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Me(this, e).appendChild(e);
            });
         },
         prepend: function () {
            return je(this, arguments, function (e) {
               if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Me(this, e);
                  t.insertBefore(e, t.firstChild);
               }
            });
         },
         before: function () {
            return je(this, arguments, function (e) {
               this.parentNode && this.parentNode.insertBefore(e, this);
            });
         },
         after: function () {
            return je(this, arguments, function (e) {
               this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
         },
         empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
               1 === e.nodeType && (x.cleanData(ve(e, !1)), (e.textContent = ""));
            return this;
         },
         clone: function (e, t) {
            return (
               (e = null != e && e),
               (t = null == t ? e : t),
               this.map(function () {
                  return x.clone(this, e, t);
               })
            );
         },
         html: function (e) {
            return B(
               this,
               function (e) {
                  var t = this[0] || {},
                     i = 0,
                     n = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if ("string" == typeof e && !Pe.test(e) && !me[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                     e = x.htmlPrefilter(e);
                     try {
                        for (; i < n; i++)
                           1 === (t = this[i] || {}).nodeType && (x.cleanData(ve(t, !1)), (t.innerHTML = e));
                        t = 0;
                     } catch (e) {}
                  }
                  t && this.empty().append(e);
               },
               null,
               e,
               arguments.length
            );
         },
         replaceWith: function () {
            var e = [];
            return je(
               this,
               arguments,
               function (t) {
                  var i = this.parentNode;
                  x.inArray(this, e) < 0 && (x.cleanData(ve(this)), i && i.replaceChild(t, this));
               },
               e
            );
         },
      }),
      x.each(
         {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
         },
         function (e, t) {
            x.fn[e] = function (e) {
               for (var i, n = [], o = x(e), s = o.length - 1, a = 0; a <= s; a++)
                  (i = a === s ? this : this.clone(!0)), x(o[a])[t](i), r.apply(n, i.get());
               return this.pushStack(n);
            };
         }
      );
   var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      He = /^--/,
      Ne = function (t) {
         var i = t.ownerDocument.defaultView;
         return (i && i.opener) || (i = e), i.getComputedStyle(t);
      },
      Fe = function (e, t, i) {
         var n,
            o,
            s = {};
         for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
         for (o in ((n = i.call(e)), t)) e.style[o] = s[o];
         return n;
      },
      qe = new RegExp(ie.join("|"), "i"),
      Be = "[\\x20\\t\\r\\n\\f]",
      We = new RegExp("^" + Be + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Be + "+$", "g");
   function _e(e, t, i) {
      var n,
         o,
         s,
         r,
         a = He.test(t),
         l = e.style;
      return (
         (i = i || Ne(e)) &&
            ((r = i.getPropertyValue(t) || i[t]),
            a && (r = r.replace(We, "$1")),
            "" !== r || oe(e) || (r = x.style(e, t)),
            !p.pixelBoxStyles() &&
               Ie.test(r) &&
               qe.test(t) &&
               ((n = l.width),
               (o = l.minWidth),
               (s = l.maxWidth),
               (l.minWidth = l.maxWidth = l.width = r),
               (r = i.width),
               (l.width = n),
               (l.minWidth = o),
               (l.maxWidth = s))),
         void 0 !== r ? r + "" : r
      );
   }
   function Xe(e, t) {
      return {
         get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
         },
      };
   }
   !(function () {
      function t() {
         if (d) {
            (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
               (d.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
               ne.appendChild(c).appendChild(d);
            var t = e.getComputedStyle(d);
            (n = "1%" !== t.top),
               (l = 12 === i(t.marginLeft)),
               (d.style.right = "60%"),
               (r = 36 === i(t.right)),
               (o = 36 === i(t.width)),
               (d.style.position = "absolute"),
               (s = 12 === i(d.offsetWidth / 3)),
               ne.removeChild(c),
               (d = null);
         }
      }
      function i(e) {
         return Math.round(parseFloat(e));
      }
      var n,
         o,
         s,
         r,
         a,
         l,
         c = m.createElement("div"),
         d = m.createElement("div");
      d.style &&
         ((d.style.backgroundClip = "content-box"),
         (d.cloneNode(!0).style.backgroundClip = ""),
         (p.clearCloneStyle = "content-box" === d.style.backgroundClip),
         x.extend(p, {
            boxSizingReliable: function () {
               return t(), o;
            },
            pixelBoxStyles: function () {
               return t(), r;
            },
            pixelPosition: function () {
               return t(), n;
            },
            reliableMarginLeft: function () {
               return t(), l;
            },
            scrollboxSize: function () {
               return t(), s;
            },
            reliableTrDimensions: function () {
               var t, i, n, o;
               return (
                  null == a &&
                     ((t = m.createElement("table")),
                     (i = m.createElement("tr")),
                     (n = m.createElement("div")),
                     (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                     (i.style.cssText = "border:1px solid"),
                     (i.style.height = "1px"),
                     (n.style.height = "9px"),
                     (n.style.display = "block"),
                     ne.appendChild(t).appendChild(i).appendChild(n),
                     (o = e.getComputedStyle(i)),
                     (a =
                        parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) ===
                        i.offsetHeight),
                     ne.removeChild(t)),
                  a
               );
            },
         }));
   })();
   var Ye = ["Webkit", "Moz", "ms"],
      Ue = m.createElement("div").style,
      Ve = {};
   function Ge(e) {
      var t = x.cssProps[e] || Ve[e];
      return (
         t ||
         (e in Ue
            ? e
            : (Ve[e] =
                 (function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), i = Ye.length; i--; )
                       if ((e = Ye[i] + t) in Ue) return e;
                 })(e) || e))
      );
   }
   var Ze = /^(none|table(?!-c[ea]).+)/,
      Ke = { position: "absolute", visibility: "hidden", display: "block" },
      Je = { letterSpacing: "0", fontWeight: "400" };
   function Qe(e, t, i) {
      var n = te.exec(t);
      return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
   }
   function et(e, t, i, n, o, s) {
      var r = "width" === t ? 1 : 0,
         a = 0,
         l = 0;
      if (i === (n ? "border" : "content")) return 0;
      for (; r < 4; r += 2)
         "margin" === i && (l += x.css(e, i + ie[r], !0, o)),
            n
               ? ("content" === i && (l -= x.css(e, "padding" + ie[r], !0, o)),
                 "margin" !== i && (l -= x.css(e, "border" + ie[r] + "Width", !0, o)))
               : ((l += x.css(e, "padding" + ie[r], !0, o)),
                 "padding" !== i
                    ? (l += x.css(e, "border" + ie[r] + "Width", !0, o))
                    : (a += x.css(e, "border" + ie[r] + "Width", !0, o)));
      return (
         !n &&
            s >= 0 &&
            (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - 0.5)) || 0),
         l
      );
   }
   function tt(e, t, i) {
      var n = Ne(e),
         o = (!p.boxSizingReliable() || i) && "border-box" === x.css(e, "boxSizing", !1, n),
         s = o,
         r = _e(e, t, n),
         a = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Ie.test(r)) {
         if (!i) return r;
         r = "auto";
      }
      return (
         ((!p.boxSizingReliable() && o) ||
            (!p.reliableTrDimensions() && P(e, "tr")) ||
            "auto" === r ||
            (!parseFloat(r) && "inline" === x.css(e, "display", !1, n))) &&
            e.getClientRects().length &&
            ((o = "border-box" === x.css(e, "boxSizing", !1, n)), (s = a in e) && (r = e[a])),
         (r = parseFloat(r) || 0) + et(e, t, i || (o ? "border" : "content"), s, n, r) + "px"
      );
   }
   function it(e, t, i, n, o) {
      return new it.prototype.init(e, t, i, n, o);
   }
   x.extend({
      cssHooks: {
         opacity: {
            get: function (e, t) {
               if (t) {
                  var i = _e(e, "opacity");
                  return "" === i ? "1" : i;
               }
            },
         },
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
         zoom: !0,
      },
      cssProps: {},
      style: function (e, t, i, n) {
         if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
               s,
               r,
               a = Y(t),
               l = He.test(t),
               c = e.style;
            if ((l || (t = Ge(a)), (r = x.cssHooks[t] || x.cssHooks[a]), void 0 === i))
               return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : c[t];
            "string" === (s = typeof i) && (o = te.exec(i)) && o[1] && ((i = ae(e, t, o)), (s = "number")),
               null != i &&
                  i == i &&
                  ("number" !== s || l || (i += (o && o[3]) || (x.cssNumber[a] ? "" : "px")),
                  p.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                  (r && "set" in r && void 0 === (i = r.set(e, i, n))) || (l ? c.setProperty(t, i) : (c[t] = i)));
         }
      },
      css: function (e, t, i, n) {
         var o,
            s,
            r,
            a = Y(t);
         return (
            He.test(t) || (t = Ge(a)),
            (r = x.cssHooks[t] || x.cssHooks[a]) && "get" in r && (o = r.get(e, !0, i)),
            void 0 === o && (o = _e(e, t, n)),
            "normal" === o && t in Je && (o = Je[t]),
            "" === i || i ? ((s = parseFloat(o)), !0 === i || isFinite(s) ? s || 0 : o) : o
         );
      },
   }),
      x.each(["height", "width"], function (e, t) {
         x.cssHooks[t] = {
            get: function (e, i, n) {
               if (i)
                  return !Ze.test(x.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                     ? tt(e, t, n)
                     : Fe(e, Ke, function () {
                          return tt(e, t, n);
                       });
            },
            set: function (e, i, n) {
               var o,
                  s = Ne(e),
                  r = !p.scrollboxSize() && "absolute" === s.position,
                  a = (r || n) && "border-box" === x.css(e, "boxSizing", !1, s),
                  l = n ? et(e, t, n, a, s) : 0;
               return (
                  a &&
                     r &&
                     (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                           parseFloat(s[t]) -
                           et(e, t, "border", !1, s) -
                           0.5
                     )),
                  l && (o = te.exec(i)) && "px" !== (o[3] || "px") && ((e.style[t] = i), (i = x.css(e, t))),
                  Qe(0, i, l)
               );
            },
         };
      }),
      (x.cssHooks.marginLeft = Xe(p.reliableMarginLeft, function (e, t) {
         if (t)
            return (
               (parseFloat(_e(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                     Fe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                     })) + "px"
            );
      })),
      x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
         (x.cssHooks[e + t] = {
            expand: function (i) {
               for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                  o[e + ie[n] + t] = s[n] || s[n - 2] || s[0];
               return o;
            },
         }),
            "margin" !== e && (x.cssHooks[e + t].set = Qe);
      }),
      x.fn.extend({
         css: function (e, t) {
            return B(
               this,
               function (e, t, i) {
                  var n,
                     o,
                     s = {},
                     r = 0;
                  if (Array.isArray(t)) {
                     for (n = Ne(e), o = t.length; r < o; r++) s[t[r]] = x.css(e, t[r], !1, n);
                     return s;
                  }
                  return void 0 !== i ? x.style(e, t, i) : x.css(e, t);
               },
               e,
               t,
               arguments.length > 1
            );
         },
      }),
      (x.Tween = it),
      (it.prototype = {
         constructor: it,
         init: function (e, t, i, n, o, s) {
            (this.elem = e),
               (this.prop = i),
               (this.easing = o || x.easing._default),
               (this.options = t),
               (this.start = this.now = this.cur()),
               (this.end = n),
               (this.unit = s || (x.cssNumber[i] ? "" : "px"));
         },
         cur: function () {
            var e = it.propHooks[this.prop];
            return e && e.get ? e.get(this) : it.propHooks._default.get(this);
         },
         run: function (e) {
            var t,
               i = it.propHooks[this.prop];
            return (
               this.options.duration
                  ? (this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                  : (this.pos = t = e),
               (this.now = (this.end - this.start) * t + this.start),
               this.options.step && this.options.step.call(this.elem, this.now, this),
               i && i.set ? i.set(this) : it.propHooks._default.set(this),
               this
            );
         },
      }),
      (it.prototype.init.prototype = it.prototype),
      (it.propHooks = {
         _default: {
            get: function (e) {
               var t;
               return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = x.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
            },
            set: function (e) {
               x.fx.step[e.prop]
                  ? x.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType || (!x.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : x.style(e.elem, e.prop, e.now + e.unit);
            },
         },
      }),
      (it.propHooks.scrollTop = it.propHooks.scrollLeft =
         {
            set: function (e) {
               e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
         }),
      (x.easing = {
         linear: function (e) {
            return e;
         },
         swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
         },
         _default: "swing",
      }),
      (x.fx = it.prototype.init),
      (x.fx.step = {});
   var nt,
      ot,
      st = /^(?:toggle|show|hide)$/,
      rt = /queueHooks$/;
   function at() {
      ot &&
         (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, x.fx.interval),
         x.fx.tick());
   }
   function lt() {
      return (
         e.setTimeout(function () {
            nt = void 0;
         }),
         (nt = Date.now())
      );
   }
   function ct(e, t) {
      var i,
         n = 0,
         o = { height: e };
      for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = ie[n])] = o["padding" + i] = e;
      return t && (o.opacity = o.width = e), o;
   }
   function dt(e, t, i) {
      for (var n, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), s = 0, r = o.length; s < r; s++)
         if ((n = o[s].call(i, t, e))) return n;
   }
   function ut(e, t, i) {
      var n,
         o,
         s = 0,
         r = ut.prefilters.length,
         a = x.Deferred().always(function () {
            delete l.elem;
         }),
         l = function () {
            if (o) return !1;
            for (
               var t = nt || lt(),
                  i = Math.max(0, c.startTime + c.duration - t),
                  n = 1 - (i / c.duration || 0),
                  s = 0,
                  r = c.tweens.length;
               s < r;
               s++
            )
               c.tweens[s].run(n);
            return (
               a.notifyWith(e, [c, n, i]), n < 1 && r ? i : (r || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
         },
         c = a.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, i),
            originalProperties: t,
            originalOptions: i,
            startTime: nt || lt(),
            duration: i.duration,
            tweens: [],
            createTween: function (t, i) {
               var n = x.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
               return c.tweens.push(n), n;
            },
            stop: function (t) {
               var i = 0,
                  n = t ? c.tweens.length : 0;
               if (o) return this;
               for (o = !0; i < n; i++) c.tweens[i].run(1);
               return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
            },
         }),
         d = c.props;
      for (
         !(function (e, t) {
            var i, n, o, s, r;
            for (i in e)
               if (
                  ((o = t[(n = Y(i))]),
                  (s = e[i]),
                  Array.isArray(s) && ((o = s[1]), (s = e[i] = s[0])),
                  i !== n && ((e[n] = s), delete e[i]),
                  (r = x.cssHooks[n]) && ("expand" in r))
               )
                  for (i in ((s = r.expand(s)), delete e[n], s)) (i in e) || ((e[i] = s[i]), (t[i] = o));
               else t[n] = o;
         })(d, c.opts.specialEasing);
         s < r;
         s++
      )
         if ((n = ut.prefilters[s].call(c, e, d, c.opts)))
            return f(n.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
      return (
         x.map(d, dt, c),
         f(c.opts.start) && c.opts.start.call(e, c),
         c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
         x.fx.timer(x.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
         c
      );
   }
   (x.Animation = x.extend(ut, {
      tweeners: {
         "*": [
            function (e, t) {
               var i = this.createTween(e, t);
               return ae(i.elem, e, te.exec(t), i), i;
            },
         ],
      },
      tweener: function (e, t) {
         f(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
         for (var i, n = 0, o = e.length; n < o; n++)
            (i = e[n]), (ut.tweeners[i] = ut.tweeners[i] || []), ut.tweeners[i].unshift(t);
      },
      prefilters: [
         function (e, t, i) {
            var n,
               o,
               s,
               r,
               a,
               l,
               c,
               d,
               u = "width" in t || "height" in t,
               h = this,
               p = {},
               f = e.style,
               g = e.nodeType && re(e),
               m = G.get(e, "fxshow");
            for (n in (i.queue ||
               (null == (r = x._queueHooks(e, "fx")).unqueued &&
                  ((r.unqueued = 0),
                  (a = r.empty.fire),
                  (r.empty.fire = function () {
                     r.unqueued || a();
                  })),
               r.unqueued++,
               h.always(function () {
                  h.always(function () {
                     r.unqueued--, x.queue(e, "fx").length || r.empty.fire();
                  });
               })),
            t))
               if (((o = t[n]), st.test(o))) {
                  if ((delete t[n], (s = s || "toggle" === o), o === (g ? "hide" : "show"))) {
                     if ("show" !== o || !m || void 0 === m[n]) continue;
                     g = !0;
                  }
                  p[n] = (m && m[n]) || x.style(e, n);
               }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
               for (n in (u &&
                  1 === e.nodeType &&
                  ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                  null == (c = m && m.display) && (c = G.get(e, "display")),
                  "none" === (d = x.css(e, "display")) &&
                     (c ? (d = c) : (de([e], !0), (c = e.style.display || c), (d = x.css(e, "display")), de([e]))),
                  ("inline" === d || ("inline-block" === d && null != c)) &&
                     "none" === x.css(e, "float") &&
                     (l ||
                        (h.done(function () {
                           f.display = c;
                        }),
                        null == c && ((d = f.display), (c = "none" === d ? "" : d))),
                     (f.display = "inline-block"))),
               i.overflow &&
                  ((f.overflow = "hidden"),
                  h.always(function () {
                     (f.overflow = i.overflow[0]), (f.overflowX = i.overflow[1]), (f.overflowY = i.overflow[2]);
                  })),
               (l = !1),
               p))
                  l ||
                     (m ? "hidden" in m && (g = m.hidden) : (m = G.access(e, "fxshow", { display: c })),
                     s && (m.hidden = !g),
                     g && de([e], !0),
                     h.done(function () {
                        for (n in (g || de([e]), G.remove(e, "fxshow"), p)) x.style(e, n, p[n]);
                     })),
                     (l = dt(g ? m[n] : 0, n, h)),
                     n in m || ((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
         },
      ],
      prefilter: function (e, t) {
         t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
      },
   })),
      (x.speed = function (e, t, i) {
         var n =
            e && "object" == typeof e
               ? x.extend({}, e)
               : { complete: i || (!i && t) || (f(e) && e), duration: e, easing: (i && t) || (t && !f(t) && t) };
         return (
            x.fx.off
               ? (n.duration = 0)
               : "number" != typeof n.duration &&
                 (n.duration in x.fx.speeds
                    ? (n.duration = x.fx.speeds[n.duration])
                    : (n.duration = x.fx.speeds._default)),
            (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
            (n.old = n.complete),
            (n.complete = function () {
               f(n.old) && n.old.call(this), n.queue && x.dequeue(this, n.queue);
            }),
            n
         );
      }),
      x.fn.extend({
         fadeTo: function (e, t, i, n) {
            return this.filter(re).css("opacity", 0).show().end().animate({ opacity: t }, e, i, n);
         },
         animate: function (e, t, i, n) {
            var o = x.isEmptyObject(e),
               s = x.speed(t, i, n),
               r = function () {
                  var t = ut(this, x.extend({}, e), s);
                  (o || G.get(this, "finish")) && t.stop(!0);
               };
            return (r.finish = r), o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r);
         },
         stop: function (e, t, i) {
            var n = function (e) {
               var t = e.stop;
               delete e.stop, t(i);
            };
            return (
               "string" != typeof e && ((i = t), (t = e), (e = void 0)),
               t && this.queue(e || "fx", []),
               this.each(function () {
                  var t = !0,
                     o = null != e && e + "queueHooks",
                     s = x.timers,
                     r = G.get(this);
                  if (o) r[o] && r[o].stop && n(r[o]);
                  else for (o in r) r[o] && r[o].stop && rt.test(o) && n(r[o]);
                  for (o = s.length; o--; )
                     s[o].elem !== this ||
                        (null != e && s[o].queue !== e) ||
                        (s[o].anim.stop(i), (t = !1), s.splice(o, 1));
                  (!t && i) || x.dequeue(this, e);
               })
            );
         },
         finish: function (e) {
            return (
               !1 !== e && (e = e || "fx"),
               this.each(function () {
                  var t,
                     i = G.get(this),
                     n = i[e + "queue"],
                     o = i[e + "queueHooks"],
                     s = x.timers,
                     r = n ? n.length : 0;
                  for (i.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--; )
                     s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                  for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                  delete i.finish;
               })
            );
         },
      }),
      x.each(["toggle", "show", "hide"], function (e, t) {
         var i = x.fn[t];
         x.fn[t] = function (e, n, o) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ct(t, !0), e, n, o);
         };
      }),
      x.each(
         {
            slideDown: ct("show"),
            slideUp: ct("hide"),
            slideToggle: ct("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
         },
         function (e, t) {
            x.fn[e] = function (e, i, n) {
               return this.animate(t, e, i, n);
            };
         }
      ),
      (x.timers = []),
      (x.fx.tick = function () {
         var e,
            t = 0,
            i = x.timers;
         for (nt = Date.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
         i.length || x.fx.stop(), (nt = void 0);
      }),
      (x.fx.timer = function (e) {
         x.timers.push(e), x.fx.start();
      }),
      (x.fx.interval = 13),
      (x.fx.start = function () {
         ot || ((ot = !0), at());
      }),
      (x.fx.stop = function () {
         ot = null;
      }),
      (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (x.fn.delay = function (t, i) {
         return (
            (t = (x.fx && x.fx.speeds[t]) || t),
            (i = i || "fx"),
            this.queue(i, function (i, n) {
               var o = e.setTimeout(i, t);
               n.stop = function () {
                  e.clearTimeout(o);
               };
            })
         );
      }),
      (function () {
         var e = m.createElement("input"),
            t = m.createElement("select").appendChild(m.createElement("option"));
         (e.type = "checkbox"),
            (p.checkOn = "" !== e.value),
            (p.optSelected = t.selected),
            ((e = m.createElement("input")).value = "t"),
            (e.type = "radio"),
            (p.radioValue = "t" === e.value);
      })();
   var ht,
      pt = x.expr.attrHandle;
   x.fn.extend({
      attr: function (e, t) {
         return B(this, x.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
         return this.each(function () {
            x.removeAttr(this, e);
         });
      },
   }),
      x.extend({
         attr: function (e, t, i) {
            var n,
               o,
               s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
               return void 0 === e.getAttribute
                  ? x.prop(e, t, i)
                  : ((1 === s && x.isXMLDoc(e)) ||
                       (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ht : void 0)),
                    void 0 !== i
                       ? null === i
                          ? void x.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (n = o.set(e, i, t))
                          ? n
                          : (e.setAttribute(t, i + ""), i)
                       : o && "get" in o && null !== (n = o.get(e, t))
                       ? n
                       : null == (n = x.find.attr(e, t))
                       ? void 0
                       : n);
         },
         attrHooks: {
            type: {
               set: function (e, t) {
                  if (!p.radioValue && "radio" === t && P(e, "input")) {
                     var i = e.value;
                     return e.setAttribute("type", t), i && (e.value = i), t;
                  }
               },
            },
         },
         removeAttr: function (e, t) {
            var i,
               n = 0,
               o = t && t.match(j);
            if (o && 1 === e.nodeType) for (; (i = o[n++]); ) e.removeAttribute(i);
         },
      }),
      (ht = {
         set: function (e, t, i) {
            return !1 === t ? x.removeAttr(e, i) : e.setAttribute(i, i), i;
         },
      }),
      x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
         var i = pt[t] || x.find.attr;
         pt[t] = function (e, t, n) {
            var o,
               s,
               r = t.toLowerCase();
            return n || ((s = pt[r]), (pt[r] = o), (o = null != i(e, t, n) ? r : null), (pt[r] = s)), o;
         };
      });
   var ft = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;
   function mt(e) {
      return (e.match(j) || []).join(" ");
   }
   function vt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
   }
   function yt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(j)) || [];
   }
   x.fn.extend({
      prop: function (e, t) {
         return B(this, x.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
         return this.each(function () {
            delete this[x.propFix[e] || e];
         });
      },
   }),
      x.extend({
         prop: function (e, t, i) {
            var n,
               o,
               s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
               return (
                  (1 === s && x.isXMLDoc(e)) || ((t = x.propFix[t] || t), (o = x.propHooks[t])),
                  void 0 !== i
                     ? o && "set" in o && void 0 !== (n = o.set(e, i, t))
                        ? n
                        : (e[t] = i)
                     : o && "get" in o && null !== (n = o.get(e, t))
                     ? n
                     : e[t]
               );
         },
         propHooks: {
            tabIndex: {
               get: function (e) {
                  var t = x.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : ft.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
               },
            },
         },
         propFix: { for: "htmlFor", class: "className" },
      }),
      p.optSelected ||
         (x.propHooks.selected = {
            get: function (e) {
               var t = e.parentNode;
               return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
               var t = e.parentNode;
               t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
         }),
      x.each(
         [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
         ],
         function () {
            x.propFix[this.toLowerCase()] = this;
         }
      ),
      x.fn.extend({
         addClass: function (e) {
            var t, i, n, o, s, r;
            return f(e)
               ? this.each(function (t) {
                    x(this).addClass(e.call(this, t, vt(this)));
                 })
               : (t = yt(e)).length
               ? this.each(function () {
                    if (((n = vt(this)), (i = 1 === this.nodeType && " " + mt(n) + " "))) {
                       for (s = 0; s < t.length; s++) (o = t[s]), i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                       (r = mt(i)), n !== r && this.setAttribute("class", r);
                    }
                 })
               : this;
         },
         removeClass: function (e) {
            var t, i, n, o, s, r;
            return f(e)
               ? this.each(function (t) {
                    x(this).removeClass(e.call(this, t, vt(this)));
                 })
               : arguments.length
               ? (t = yt(e)).length
                  ? this.each(function () {
                       if (((n = vt(this)), (i = 1 === this.nodeType && " " + mt(n) + " "))) {
                          for (s = 0; s < t.length; s++)
                             for (o = t[s]; i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                          (r = mt(i)), n !== r && this.setAttribute("class", r);
                       }
                    })
                  : this
               : this.attr("class", "");
         },
         toggleClass: function (e, t) {
            var i,
               n,
               o,
               s,
               r = typeof e,
               a = "string" === r || Array.isArray(e);
            return f(e)
               ? this.each(function (i) {
                    x(this).toggleClass(e.call(this, i, vt(this), t), t);
                 })
               : "boolean" == typeof t && a
               ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
               : ((i = yt(e)),
                 this.each(function () {
                    if (a)
                       for (s = x(this), o = 0; o < i.length; o++)
                          (n = i[o]), s.hasClass(n) ? s.removeClass(n) : s.addClass(n);
                    else
                       (void 0 !== e && "boolean" !== r) ||
                          ((n = vt(this)) && G.set(this, "__className__", n),
                          this.setAttribute &&
                             this.setAttribute("class", n || !1 === e ? "" : G.get(this, "__className__") || ""));
                 }));
         },
         hasClass: function (e) {
            var t,
               i,
               n = 0;
            for (t = " " + e + " "; (i = this[n++]); )
               if (1 === i.nodeType && (" " + mt(vt(i)) + " ").indexOf(t) > -1) return !0;
            return !1;
         },
      });
   var bt = /\r/g;
   x.fn.extend({
      val: function (e) {
         var t,
            i,
            n,
            o = this[0];
         return arguments.length
            ? ((n = f(e)),
              this.each(function (i) {
                 var o;
                 1 === this.nodeType &&
                    (null == (o = n ? e.call(this, i, x(this).val()) : e)
                       ? (o = "")
                       : "number" == typeof o
                       ? (o += "")
                       : Array.isArray(o) &&
                         (o = x.map(o, function (e) {
                            return null == e ? "" : e + "";
                         })),
                    ((t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) &&
                       "set" in t &&
                       void 0 !== t.set(this, o, "value")) ||
                       (this.value = o));
              }))
            : o
            ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (i = t.get(o, "value"))
               ? i
               : "string" == typeof (i = o.value)
               ? i.replace(bt, "")
               : null == i
               ? ""
               : i
            : void 0;
      },
   }),
      x.extend({
         valHooks: {
            option: {
               get: function (e) {
                  var t = x.find.attr(e, "value");
                  return null != t ? t : mt(x.text(e));
               },
            },
            select: {
               get: function (e) {
                  var t,
                     i,
                     n,
                     o = e.options,
                     s = e.selectedIndex,
                     r = "select-one" === e.type,
                     a = r ? null : [],
                     l = r ? s + 1 : o.length;
                  for (n = s < 0 ? l : r ? s : 0; n < l; n++)
                     if (
                        ((i = o[n]).selected || n === s) &&
                        !i.disabled &&
                        (!i.parentNode.disabled || !P(i.parentNode, "optgroup"))
                     ) {
                        if (((t = x(i).val()), r)) return t;
                        a.push(t);
                     }
                  return a;
               },
               set: function (e, t) {
                  for (var i, n, o = e.options, s = x.makeArray(t), r = o.length; r--; )
                     ((n = o[r]).selected = x.inArray(x.valHooks.option.get(n), s) > -1) && (i = !0);
                  return i || (e.selectedIndex = -1), s;
               },
            },
         },
      }),
      x.each(["radio", "checkbox"], function () {
         (x.valHooks[this] = {
            set: function (e, t) {
               if (Array.isArray(t)) return (e.checked = x.inArray(x(e).val(), t) > -1);
            },
         }),
            p.checkOn ||
               (x.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
               });
      }),
      (p.focusin = "onfocusin" in e);
   var wt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function (e) {
         e.stopPropagation();
      };
   x.extend(x.event, {
      trigger: function (t, i, n, o) {
         var s,
            r,
            a,
            l,
            c,
            u,
            h,
            p,
            v = [n || m],
            y = d.call(t, "type") ? t.type : t,
            b = d.call(t, "namespace") ? t.namespace.split(".") : [];
         if (
            ((r = p = a = n = n || m),
            3 !== n.nodeType &&
               8 !== n.nodeType &&
               !wt.test(y + x.event.triggered) &&
               (y.indexOf(".") > -1 && ((b = y.split(".")), (y = b.shift()), b.sort()),
               (c = y.indexOf(":") < 0 && "on" + y),
               ((t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
               (t.namespace = b.join(".")),
               (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
               (t.result = void 0),
               t.target || (t.target = n),
               (i = null == i ? [t] : x.makeArray(i, [t])),
               (h = x.event.special[y] || {}),
               o || !h.trigger || !1 !== h.trigger.apply(n, i)))
         ) {
            if (!o && !h.noBubble && !g(n)) {
               for (l = h.delegateType || y, wt.test(l + y) || (r = r.parentNode); r; r = r.parentNode)
                  v.push(r), (a = r);
               a === (n.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || e);
            }
            for (s = 0; (r = v[s++]) && !t.isPropagationStopped(); )
               (p = r),
                  (t.type = s > 1 ? l : h.bindType || y),
                  (u = (G.get(r, "events") || Object.create(null))[t.type] && G.get(r, "handle")) && u.apply(r, i),
                  (u = c && r[c]) &&
                     u.apply &&
                     U(r) &&
                     ((t.result = u.apply(r, i)), !1 === t.result && t.preventDefault());
            return (
               (t.type = y),
               o ||
                  t.isDefaultPrevented() ||
                  (h._default && !1 !== h._default.apply(v.pop(), i)) ||
                  !U(n) ||
                  (c &&
                     f(n[y]) &&
                     !g(n) &&
                     ((a = n[c]) && (n[c] = null),
                     (x.event.triggered = y),
                     t.isPropagationStopped() && p.addEventListener(y, xt),
                     n[y](),
                     t.isPropagationStopped() && p.removeEventListener(y, xt),
                     (x.event.triggered = void 0),
                     a && (n[c] = a))),
               t.result
            );
         }
      },
      simulate: function (e, t, i) {
         var n = x.extend(new x.Event(), i, { type: e, isSimulated: !0 });
         x.event.trigger(n, null, t);
      },
   }),
      x.fn.extend({
         trigger: function (e, t) {
            return this.each(function () {
               x.event.trigger(e, t, this);
            });
         },
         triggerHandler: function (e, t) {
            var i = this[0];
            if (i) return x.event.trigger(e, t, i, !0);
         },
      }),
      p.focusin ||
         x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var i = function (e) {
               x.event.simulate(t, e.target, x.event.fix(e));
            };
            x.event.special[t] = {
               setup: function () {
                  var n = this.ownerDocument || this.document || this,
                     o = G.access(n, t);
                  o || n.addEventListener(e, i, !0), G.access(n, t, (o || 0) + 1);
               },
               teardown: function () {
                  var n = this.ownerDocument || this.document || this,
                     o = G.access(n, t) - 1;
                  o ? G.access(n, t, o) : (n.removeEventListener(e, i, !0), G.remove(n, t));
               },
            };
         });
   var St = e.location,
      Tt = { guid: Date.now() },
      Ct = /\?/;
   x.parseXML = function (t) {
      var i, n;
      if (!t || "string" != typeof t) return null;
      try {
         i = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {}
      return (
         (n = i && i.getElementsByTagName("parsererror")[0]),
         (i && !n) ||
            x.error(
               "Invalid XML: " +
                  (n
                     ? x
                          .map(n.childNodes, function (e) {
                             return e.textContent;
                          })
                          .join("\n")
                     : t)
            ),
         i
      );
   };
   var kt = /\[\]$/,
      Et = /\r?\n/g,
      Pt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;
   function Ot(e, t, i, n) {
      var o;
      if (Array.isArray(t))
         x.each(t, function (t, o) {
            i || kt.test(e) ? n(e, o) : Ot(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n);
         });
      else if (i || "object" !== b(t)) n(e, t);
      else for (o in t) Ot(e + "[" + o + "]", t[o], i, n);
   }
   (x.param = function (e, t) {
      var i,
         n = [],
         o = function (e, t) {
            var i = f(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
         };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
         x.each(e, function () {
            o(this.name, this.value);
         });
      else for (i in e) Ot(i, e[i], t, o);
      return n.join("&");
   }),
      x.fn.extend({
         serialize: function () {
            return x.param(this.serializeArray());
         },
         serializeArray: function () {
            return this.map(function () {
               var e = x.prop(this, "elements");
               return e ? x.makeArray(e) : this;
            })
               .filter(function () {
                  var e = this.type;
                  return (
                     this.name &&
                     !x(this).is(":disabled") &&
                     At.test(this.nodeName) &&
                     !Pt.test(e) &&
                     (this.checked || !pe.test(e))
                  );
               })
               .map(function (e, t) {
                  var i = x(this).val();
                  return null == i
                     ? null
                     : Array.isArray(i)
                     ? x.map(i, function (e) {
                          return { name: t.name, value: e.replace(Et, "\r\n") };
                       })
                     : { name: t.name, value: i.replace(Et, "\r\n") };
               })
               .get();
         },
      });
   var Mt = /%20/g,
      Lt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      zt = /^(?:GET|HEAD)$/,
      jt = /^\/\//,
      Rt = {},
      It = {},
      Ht = "*/".concat("*"),
      Nt = m.createElement("a");
   function Ft(e) {
      return function (t, i) {
         "string" != typeof t && ((i = t), (t = "*"));
         var n,
            o = 0,
            s = t.toLowerCase().match(j) || [];
         if (f(i))
            for (; (n = s[o++]); )
               "+" === n[0] ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i);
      };
   }
   function qt(e, t, i, n) {
      var o = {},
         s = e === It;
      function r(a) {
         var l;
         return (
            (o[a] = !0),
            x.each(e[a] || [], function (e, a) {
               var c = a(t, i, n);
               return "string" != typeof c || s || o[c] ? (s ? !(l = c) : void 0) : (t.dataTypes.unshift(c), r(c), !1);
            }),
            l
         );
      }
      return r(t.dataTypes[0]) || (!o["*"] && r("*"));
   }
   function Bt(e, t) {
      var i,
         n,
         o = x.ajaxSettings.flatOptions || {};
      for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
      return n && x.extend(!0, e, n), e;
   }
   (Nt.href = St.href),
      x.extend({
         active: 0,
         lastModified: {},
         etag: {},
         ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
               "*": Ht,
               text: "text/plain",
               html: "text/html",
               xml: "application/xml, text/xml",
               json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML },
            flatOptions: { url: !0, context: !0 },
         },
         ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, x.ajaxSettings), t) : Bt(x.ajaxSettings, e);
         },
         ajaxPrefilter: Ft(Rt),
         ajaxTransport: Ft(It),
         ajax: function (t, i) {
            "object" == typeof t && ((i = t), (t = void 0)), (i = i || {});
            var n,
               o,
               s,
               r,
               a,
               l,
               c,
               d,
               u,
               h,
               p = x.ajaxSetup({}, i),
               f = p.context || p,
               g = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
               v = x.Deferred(),
               y = x.Callbacks("once memory"),
               b = p.statusCode || {},
               w = {},
               S = {},
               T = "canceled",
               C = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                     var t;
                     if (c) {
                        if (!r)
                           for (r = {}; (t = $t.exec(s)); )
                              r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = r[e.toLowerCase() + " "];
                     }
                     return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                     return c ? s : null;
                  },
                  setRequestHeader: function (e, t) {
                     return null == c && ((e = S[e.toLowerCase()] = S[e.toLowerCase()] || e), (w[e] = t)), this;
                  },
                  overrideMimeType: function (e) {
                     return null == c && (p.mimeType = e), this;
                  },
                  statusCode: function (e) {
                     var t;
                     if (e)
                        if (c) C.always(e[C.status]);
                        else for (t in e) b[t] = [b[t], e[t]];
                     return this;
                  },
                  abort: function (e) {
                     var t = e || T;
                     return n && n.abort(t), k(0, t), this;
                  },
               };
            if (
               (v.promise(C),
               (p.url = ((t || p.url || St.href) + "").replace(jt, St.protocol + "//")),
               (p.type = i.method || i.type || p.method || p.type),
               (p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""]),
               null == p.crossDomain)
            ) {
               l = m.createElement("a");
               try {
                  (l.href = p.url),
                     (l.href = l.href),
                     (p.crossDomain = Nt.protocol + "//" + Nt.host != l.protocol + "//" + l.host);
               } catch (e) {
                  p.crossDomain = !0;
               }
            }
            if (
               (p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
               qt(Rt, p, i, C),
               c)
            )
               return C;
            for (u in ((d = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !zt.test(p.type)),
            (o = p.url.replace(Lt, "")),
            p.hasContent
               ? p.data &&
                 p.processData &&
                 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                 (p.data = p.data.replace(Mt, "+"))
               : ((h = p.url.slice(o.length)),
                 p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((o += (Ct.test(o) ? "&" : "?") + p.data), delete p.data),
                 !1 === p.cache && ((o = o.replace(Dt, "$1")), (h = (Ct.test(o) ? "&" : "?") + "_=" + Tt.guid++ + h)),
                 (p.url = o + h)),
            p.ifModified &&
               (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]),
               x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
            ((p.data && p.hasContent && !1 !== p.contentType) || i.contentType) &&
               C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader(
               "Accept",
               p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                  : p.accepts["*"]
            ),
            p.headers))
               C.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || c)) return C.abort();
            if (((T = "abort"), y.add(p.complete), C.done(p.success), C.fail(p.error), (n = qt(It, p, i, C)))) {
               if (((C.readyState = 1), d && g.trigger("ajaxSend", [C, p]), c)) return C;
               p.async &&
                  p.timeout > 0 &&
                  (a = e.setTimeout(function () {
                     C.abort("timeout");
                  }, p.timeout));
               try {
                  (c = !1), n.send(w, k);
               } catch (e) {
                  if (c) throw e;
                  k(-1, e);
               }
            } else k(-1, "No Transport");
            function k(t, i, r, l) {
               var u,
                  h,
                  m,
                  w,
                  S,
                  T = i;
               c ||
                  ((c = !0),
                  a && e.clearTimeout(a),
                  (n = void 0),
                  (s = l || ""),
                  (C.readyState = t > 0 ? 4 : 0),
                  (u = (t >= 200 && t < 300) || 304 === t),
                  r &&
                     (w = (function (e, t, i) {
                        for (var n, o, s, r, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                           l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (n)
                           for (o in a)
                              if (a[o] && a[o].test(n)) {
                                 l.unshift(o);
                                 break;
                              }
                        if (l[0] in i) s = l[0];
                        else {
                           for (o in i) {
                              if (!l[0] || e.converters[o + " " + l[0]]) {
                                 s = o;
                                 break;
                              }
                              r || (r = o);
                           }
                           s = s || r;
                        }
                        if (s) return s !== l[0] && l.unshift(s), i[s];
                     })(p, C, r)),
                  !u &&
                     x.inArray("script", p.dataTypes) > -1 &&
                     x.inArray("json", p.dataTypes) < 0 &&
                     (p.converters["text script"] = function () {}),
                  (w = (function (e, t, i, n) {
                     var o,
                        s,
                        r,
                        a,
                        l,
                        c = {},
                        d = e.dataTypes.slice();
                     if (d[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                     for (s = d.shift(); s; )
                        if (
                           (e.responseFields[s] && (i[e.responseFields[s]] = t),
                           !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                           (l = s),
                           (s = d.shift()))
                        )
                           if ("*" === s) s = l;
                           else if ("*" !== l && l !== s) {
                              if (!(r = c[l + " " + s] || c["* " + s]))
                                 for (o in c)
                                    if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                       !0 === r ? (r = c[o]) : !0 !== c[o] && ((s = a[0]), d.unshift(a[1]));
                                       break;
                                    }
                              if (!0 !== r)
                                 if (r && e.throws) t = r(t);
                                 else
                                    try {
                                       t = r(t);
                                    } catch (e) {
                                       return {
                                          state: "parsererror",
                                          error: r ? e : "No conversion from " + l + " to " + s,
                                       };
                                    }
                           }
                     return { state: "success", data: t };
                  })(p, w, C, u)),
                  u
                     ? (p.ifModified &&
                          ((S = C.getResponseHeader("Last-Modified")) && (x.lastModified[o] = S),
                          (S = C.getResponseHeader("etag")) && (x.etag[o] = S)),
                       204 === t || "HEAD" === p.type
                          ? (T = "nocontent")
                          : 304 === t
                          ? (T = "notmodified")
                          : ((T = w.state), (h = w.data), (u = !(m = w.error))))
                     : ((m = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                  (C.status = t),
                  (C.statusText = (i || T) + ""),
                  u ? v.resolveWith(f, [h, T, C]) : v.rejectWith(f, [C, T, m]),
                  C.statusCode(b),
                  (b = void 0),
                  d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? h : m]),
                  y.fireWith(f, [C, T]),
                  d && (g.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")));
            }
            return C;
         },
         getJSON: function (e, t, i) {
            return x.get(e, t, i, "json");
         },
         getScript: function (e, t) {
            return x.get(e, void 0, t, "script");
         },
      }),
      x.each(["get", "post"], function (e, t) {
         x[t] = function (e, i, n, o) {
            return (
               f(i) && ((o = o || n), (n = i), (i = void 0)),
               x.ajax(x.extend({ url: e, type: t, dataType: o, data: i, success: n }, x.isPlainObject(e) && e))
            );
         };
      }),
      x.ajaxPrefilter(function (e) {
         var t;
         for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
      }),
      (x._evalUrl = function (e, t, i) {
         return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
               x.globalEval(e, t, i);
            },
         });
      }),
      x.fn.extend({
         wrapAll: function (e) {
            var t;
            return (
               this[0] &&
                  (f(e) && (e = e.call(this[0])),
                  (t = x(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                     .map(function () {
                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                        return e;
                     })
                     .append(this)),
               this
            );
         },
         wrapInner: function (e) {
            return f(e)
               ? this.each(function (t) {
                    x(this).wrapInner(e.call(this, t));
                 })
               : this.each(function () {
                    var t = x(this),
                       i = t.contents();
                    i.length ? i.wrapAll(e) : t.append(e);
                 });
         },
         wrap: function (e) {
            var t = f(e);
            return this.each(function (i) {
               x(this).wrapAll(t ? e.call(this, i) : e);
            });
         },
         unwrap: function (e) {
            return (
               this.parent(e)
                  .not("body")
                  .each(function () {
                     x(this).replaceWith(this.childNodes);
                  }),
               this
            );
         },
      }),
      (x.expr.pseudos.hidden = function (e) {
         return !x.expr.pseudos.visible(e);
      }),
      (x.expr.pseudos.visible = function (e) {
         return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (x.ajaxSettings.xhr = function () {
         try {
            return new e.XMLHttpRequest();
         } catch (e) {}
      });
   var Wt = { 0: 200, 1223: 204 },
      _t = x.ajaxSettings.xhr();
   (p.cors = !!_t && "withCredentials" in _t),
      (p.ajax = _t = !!_t),
      x.ajaxTransport(function (t) {
         var i, n;
         if (p.cors || (_t && !t.crossDomain))
            return {
               send: function (o, s) {
                  var r,
                     a = t.xhr();
                  if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
                     for (r in t.xhrFields) a[r] = t.xhrFields[r];
                  for (r in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                  t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                  o))
                     a.setRequestHeader(r, o[r]);
                  (i = function (e) {
                     return function () {
                        i &&
                           ((i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                           "abort" === e
                              ? a.abort()
                              : "error" === e
                              ? "number" != typeof a.status
                                 ? s(0, "error")
                                 : s(a.status, a.statusText)
                              : s(
                                   Wt[a.status] || a.status,
                                   a.statusText,
                                   "text" !== (a.responseType || "text") || "string" != typeof a.responseText
                                      ? { binary: a.response }
                                      : { text: a.responseText },
                                   a.getAllResponseHeaders()
                                ));
                     };
                  }),
                     (a.onload = i()),
                     (n = a.onerror = a.ontimeout = i("error")),
                     void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                             4 === a.readyState &&
                                e.setTimeout(function () {
                                   i && n();
                                });
                          }),
                     (i = i("abort"));
                  try {
                     a.send((t.hasContent && t.data) || null);
                  } catch (e) {
                     if (i) throw e;
                  }
               },
               abort: function () {
                  i && i();
               },
            };
      }),
      x.ajaxPrefilter(function (e) {
         e.crossDomain && (e.contents.script = !1);
      }),
      x.ajaxSetup({
         accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
         },
         contents: { script: /\b(?:java|ecma)script\b/ },
         converters: {
            "text script": function (e) {
               return x.globalEval(e), e;
            },
         },
      }),
      x.ajaxPrefilter("script", function (e) {
         void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      x.ajaxTransport("script", function (e) {
         var t, i;
         if (e.crossDomain || e.scriptAttrs)
            return {
               send: function (n, o) {
                  (t = x("<script>")
                     .attr(e.scriptAttrs || {})
                     .prop({ charset: e.scriptCharset, src: e.url })
                     .on(
                        "load error",
                        (i = function (e) {
                           t.remove(), (i = null), e && o("error" === e.type ? 404 : 200, e.type);
                        })
                     )),
                     m.head.appendChild(t[0]);
               },
               abort: function () {
                  i && i();
               },
            };
      });
   var Xt,
      Yt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;
   x.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
         var e = Yt.pop() || x.expando + "_" + Tt.guid++;
         return (this[e] = !0), e;
      },
   }),
      x.ajaxPrefilter("json jsonp", function (t, i, n) {
         var o,
            s,
            r,
            a =
               !1 !== t.jsonp &&
               (Ut.test(t.url)
                  ? "url"
                  : "string" == typeof t.data &&
                    0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                    Ut.test(t.data) &&
                    "data");
         if (a || "jsonp" === t.dataTypes[0])
            return (
               (o = t.jsonpCallback = f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
               a
                  ? (t[a] = t[a].replace(Ut, "$1" + o))
                  : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
               (t.converters["script json"] = function () {
                  return r || x.error(o + " was not called"), r[0];
               }),
               (t.dataTypes[0] = "json"),
               (s = e[o]),
               (e[o] = function () {
                  r = arguments;
               }),
               n.always(function () {
                  void 0 === s ? x(e).removeProp(o) : (e[o] = s),
                     t[o] && ((t.jsonpCallback = i.jsonpCallback), Yt.push(o)),
                     r && f(s) && s(r[0]),
                     (r = s = void 0);
               }),
               "script"
            );
      }),
      (p.createHTMLDocument =
         (((Xt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"),
         2 === Xt.childNodes.length)),
      (x.parseHTML = function (e, t, i) {
         return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((i = t), (t = !1)),
              t ||
                 (p.createHTMLDocument
                    ? (((n = (t = m.implementation.createHTMLDocument("")).createElement("base")).href =
                         m.location.href),
                      t.head.appendChild(n))
                    : (t = m)),
              (s = !i && []),
              (o = A.exec(e))
                 ? [t.createElement(o[1])]
                 : ((o = we([e], t, s)), s && s.length && x(s).remove(), x.merge([], o.childNodes)));
         var n, o, s;
      }),
      (x.fn.load = function (e, t, i) {
         var n,
            o,
            s,
            r = this,
            a = e.indexOf(" ");
         return (
            a > -1 && ((n = mt(e.slice(a))), (e = e.slice(0, a))),
            f(t) ? ((i = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
            r.length > 0 &&
               x
                  .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                  .done(function (e) {
                     (s = arguments), r.html(n ? x("<div>").append(x.parseHTML(e)).find(n) : e);
                  })
                  .always(
                     i &&
                        function (e, t) {
                           r.each(function () {
                              i.apply(this, s || [e.responseText, t, e]);
                           });
                        }
                  ),
            this
         );
      }),
      (x.expr.pseudos.animated = function (e) {
         return x.grep(x.timers, function (t) {
            return e === t.elem;
         }).length;
      }),
      (x.offset = {
         setOffset: function (e, t, i) {
            var n,
               o,
               s,
               r,
               a,
               l,
               c = x.css(e, "position"),
               d = x(e),
               u = {};
            "static" === c && (e.style.position = "relative"),
               (a = d.offset()),
               (s = x.css(e, "top")),
               (l = x.css(e, "left")),
               ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1
                  ? ((r = (n = d.position()).top), (o = n.left))
                  : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
               f(t) && (t = t.call(e, i, x.extend({}, a))),
               null != t.top && (u.top = t.top - a.top + r),
               null != t.left && (u.left = t.left - a.left + o),
               "using" in t ? t.using.call(e, u) : d.css(u);
         },
      }),
      x.fn.extend({
         offset: function (e) {
            if (arguments.length)
               return void 0 === e
                  ? this
                  : this.each(function (t) {
                       x.offset.setOffset(this, e, t);
                    });
            var t,
               i,
               n = this[0];
            return n
               ? n.getClientRects().length
                  ? ((t = n.getBoundingClientRect()),
                    (i = n.ownerDocument.defaultView),
                    { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset })
                  : { top: 0, left: 0 }
               : void 0;
         },
         position: function () {
            if (this[0]) {
               var e,
                  t,
                  i,
                  n = this[0],
                  o = { top: 0, left: 0 };
               if ("fixed" === x.css(n, "position")) t = n.getBoundingClientRect();
               else {
                  for (
                     t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement;
                     e && (e === i.body || e === i.documentElement) && "static" === x.css(e, "position");

                  )
                     e = e.parentNode;
                  e &&
                     e !== n &&
                     1 === e.nodeType &&
                     (((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0)),
                     (o.left += x.css(e, "borderLeftWidth", !0)));
               }
               return {
                  top: t.top - o.top - x.css(n, "marginTop", !0),
                  left: t.left - o.left - x.css(n, "marginLeft", !0),
               };
            }
         },
         offsetParent: function () {
            return this.map(function () {
               for (var e = this.offsetParent; e && "static" === x.css(e, "position"); ) e = e.offsetParent;
               return e || ne;
            });
         },
      }),
      x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
         var i = "pageYOffset" === t;
         x.fn[e] = function (n) {
            return B(
               this,
               function (e, n, o) {
                  var s;
                  if ((g(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView), void 0 === o)) return s ? s[t] : e[n];
                  s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : (e[n] = o);
               },
               e,
               n,
               arguments.length
            );
         };
      }),
      x.each(["top", "left"], function (e, t) {
         x.cssHooks[t] = Xe(p.pixelPosition, function (e, i) {
            if (i) return (i = _e(e, t)), Ie.test(i) ? x(e).position()[t] + "px" : i;
         });
      }),
      x.each({ Height: "height", Width: "width" }, function (e, t) {
         x.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (i, n) {
            x.fn[n] = function (o, s) {
               var r = arguments.length && (i || "boolean" != typeof o),
                  a = i || (!0 === o || !0 === s ? "margin" : "border");
               return B(
                  this,
                  function (t, i, o) {
                     var s;
                     return g(t)
                        ? 0 === n.indexOf("outer")
                           ? t["inner" + e]
                           : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((s = t.documentElement),
                          Math.max(
                             t.body["scroll" + e],
                             s["scroll" + e],
                             t.body["offset" + e],
                             s["offset" + e],
                             s["client" + e]
                          ))
                        : void 0 === o
                        ? x.css(t, i, a)
                        : x.style(t, i, o, a);
                  },
                  t,
                  r ? o : void 0,
                  r
               );
            };
         });
      }),
      x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
         x.fn[t] = function (e) {
            return this.on(t, e);
         };
      }),
      x.fn.extend({
         bind: function (e, t, i) {
            return this.on(e, null, t, i);
         },
         unbind: function (e, t) {
            return this.off(e, null, t);
         },
         delegate: function (e, t, i, n) {
            return this.on(t, e, i, n);
         },
         undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i);
         },
         hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
         },
      }),
      x.each(
         "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
         ),
         function (e, t) {
            x.fn[t] = function (e, i) {
               return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t);
            };
         }
      );
   var Vt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
   (x.proxy = function (e, t) {
      var i, n, s;
      if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), f(e)))
         return (
            (n = o.call(arguments, 2)),
            (s = function () {
               return e.apply(t || this, n.concat(o.call(arguments)));
            }),
            (s.guid = e.guid = e.guid || x.guid++),
            s
         );
   }),
      (x.holdReady = function (e) {
         e ? x.readyWait++ : x.ready(!0);
      }),
      (x.isArray = Array.isArray),
      (x.parseJSON = JSON.parse),
      (x.nodeName = P),
      (x.isFunction = f),
      (x.isWindow = g),
      (x.camelCase = Y),
      (x.type = b),
      (x.now = Date.now),
      (x.isNumeric = function (e) {
         var t = x.type(e);
         return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (x.trim = function (e) {
         return null == e ? "" : (e + "").replace(Vt, "$1");
      }),
      "function" == typeof define &&
         define.amd &&
         define("jquery", [], function () {
            return x;
         });
   var Gt = e.jQuery,
      Zt = e.$;
   return (
      (x.noConflict = function (t) {
         return e.$ === x && (e.$ = Zt), t && e.jQuery === x && (e.jQuery = Gt), x;
      }),
      void 0 === t && (e.jQuery = e.$ = x),
      x
   );
}),
   (function (e) {
      "use strict";
      "function" == typeof define && define.amd
         ? define(["jquery"], e)
         : "undefined" != typeof exports
         ? (module.exports = e(require("jquery")))
         : e(jQuery);
   })(function (e) {
      "use strict";
      var t,
         i = window.Slick || {};
      (t = 0),
         ((i = function (i, n) {
            var o,
               s = this;
            (s.defaults = {
               accessibility: !0,
               adaptiveHeight: !1,
               appendArrows: e(i),
               appendDots: e(i),
               arrows: !0,
               asNavFor: null,
               prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
               nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
               autoplay: !1,
               autoplaySpeed: 3e3,
               centerMode: !1,
               centerPadding: "50px",
               cssEase: "ease",
               customPaging: function (t, i) {
                  return e('<button type="button" />').text(i + 1);
               },
               dots: !1,
               dotsClass: "slick-dots",
               draggable: !0,
               easing: "linear",
               edgeFriction: 0.35,
               fade: !1,
               focusOnSelect: !1,
               focusOnChange: !1,
               infinite: !0,
               initialSlide: 0,
               lazyLoad: "ondemand",
               mobileFirst: !1,
               pauseOnHover: !0,
               pauseOnFocus: !0,
               pauseOnDotsHover: !1,
               respondTo: "window",
               responsive: null,
               rows: 1,
               rtl: !1,
               slide: "",
               slidesPerRow: 1,
               slidesToShow: 1,
               slidesToScroll: 1,
               speed: 500,
               swipe: !0,
               swipeToSlide: !1,
               touchMove: !0,
               touchThreshold: 5,
               useCSS: !0,
               useTransform: !0,
               variableWidth: !1,
               vertical: !1,
               verticalSwiping: !1,
               waitForAnimate: !0,
               zIndex: 1e3,
            }),
               (s.initials = {
                  animating: !1,
                  dragging: !1,
                  autoPlayTimer: null,
                  currentDirection: 0,
                  currentLeft: null,
                  currentSlide: 0,
                  direction: 1,
                  $dots: null,
                  listWidth: null,
                  listHeight: null,
                  loadIndex: 0,
                  $nextArrow: null,
                  $prevArrow: null,
                  scrolling: !1,
                  slideCount: null,
                  slideWidth: null,
                  $slideTrack: null,
                  $slides: null,
                  sliding: !1,
                  slideOffset: 0,
                  swipeLeft: null,
                  swiping: !1,
                  $list: null,
                  touchObject: {},
                  transformsEnabled: !1,
                  unslicked: !1,
               }),
               e.extend(s, s.initials),
               (s.activeBreakpoint = null),
               (s.animType = null),
               (s.animProp = null),
               (s.breakpoints = []),
               (s.breakpointSettings = []),
               (s.cssTransitions = !1),
               (s.focussed = !1),
               (s.interrupted = !1),
               (s.hidden = "hidden"),
               (s.paused = !0),
               (s.positionProp = null),
               (s.respondTo = null),
               (s.rowCount = 1),
               (s.shouldClick = !0),
               (s.$slider = e(i)),
               (s.$slidesCache = null),
               (s.transformType = null),
               (s.transitionType = null),
               (s.visibilityChange = "visibilitychange"),
               (s.windowWidth = 0),
               (s.windowTimer = null),
               (o = e(i).data("slick") || {}),
               (s.options = e.extend({}, s.defaults, n, o)),
               (s.currentSlide = s.options.initialSlide),
               (s.originalSettings = s.options),
               void 0 !== document.mozHidden
                  ? ((s.hidden = "mozHidden"), (s.visibilityChange = "mozvisibilitychange"))
                  : void 0 !== document.webkitHidden &&
                    ((s.hidden = "webkitHidden"), (s.visibilityChange = "webkitvisibilitychange")),
               (s.autoPlay = e.proxy(s.autoPlay, s)),
               (s.autoPlayClear = e.proxy(s.autoPlayClear, s)),
               (s.autoPlayIterator = e.proxy(s.autoPlayIterator, s)),
               (s.changeSlide = e.proxy(s.changeSlide, s)),
               (s.clickHandler = e.proxy(s.clickHandler, s)),
               (s.selectHandler = e.proxy(s.selectHandler, s)),
               (s.setPosition = e.proxy(s.setPosition, s)),
               (s.swipeHandler = e.proxy(s.swipeHandler, s)),
               (s.dragHandler = e.proxy(s.dragHandler, s)),
               (s.keyHandler = e.proxy(s.keyHandler, s)),
               (s.instanceUid = t++),
               (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
               s.registerBreakpoints(),
               s.init(!0);
         }).prototype.activateADA = function () {
            this.$slideTrack
               .find(".slick-active")
               .attr({ "aria-hidden": "false" })
               .find("a, input, button, select")
               .attr({ tabindex: "0" });
         }),
         (i.prototype.addSlide = i.prototype.slickAdd =
            function (t, i, n) {
               var o = this;
               if ("boolean" == typeof i) (n = i), (i = null);
               else if (i < 0 || i >= o.slideCount) return !1;
               o.unload(),
                  "number" == typeof i
                     ? 0 === i && 0 === o.$slides.length
                        ? e(t).appendTo(o.$slideTrack)
                        : n
                        ? e(t).insertBefore(o.$slides.eq(i))
                        : e(t).insertAfter(o.$slides.eq(i))
                     : !0 === n
                     ? e(t).prependTo(o.$slideTrack)
                     : e(t).appendTo(o.$slideTrack),
                  (o.$slides = o.$slideTrack.children(this.options.slide)),
                  o.$slideTrack.children(this.options.slide).detach(),
                  o.$slideTrack.append(o.$slides),
                  o.$slides.each(function (t, i) {
                     e(i).attr("data-slick-index", t);
                  }),
                  (o.$slidesCache = o.$slides),
                  o.reinit();
            }),
         (i.prototype.animateHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
               var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
               e.$list.animate({ height: t }, e.options.speed);
            }
         }),
         (i.prototype.animateSlide = function (t, i) {
            var n = {},
               o = this;
            o.animateHeight(),
               !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
               !1 === o.transformsEnabled
                  ? !1 === o.options.vertical
                     ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, i)
                     : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, i)
                  : !1 === o.cssTransitions
                  ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                    e({ animStart: o.currentLeft }).animate(
                       { animStart: t },
                       {
                          duration: o.options.speed,
                          easing: o.options.easing,
                          step: function (e) {
                             (e = Math.ceil(e)),
                                !1 === o.options.vertical
                                   ? ((n[o.animType] = "translate(" + e + "px, 0px)"), o.$slideTrack.css(n))
                                   : ((n[o.animType] = "translate(0px," + e + "px)"), o.$slideTrack.css(n));
                          },
                          complete: function () {
                             i && i.call();
                          },
                       }
                    ))
                  : (o.applyTransition(),
                    (t = Math.ceil(t)),
                    !1 === o.options.vertical
                       ? (n[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                       : (n[o.animType] = "translate3d(0px," + t + "px, 0px)"),
                    o.$slideTrack.css(n),
                    i &&
                       setTimeout(function () {
                          o.disableTransition(), i.call();
                       }, o.options.speed));
         }),
         (i.prototype.getNavTarget = function () {
            var t = this.options.asNavFor;
            return t && null !== t && (t = e(t).not(this.$slider)), t;
         }),
         (i.prototype.asNavFor = function (t) {
            var i = this.getNavTarget();
            null !== i &&
               "object" == typeof i &&
               i.each(function () {
                  var i = e(this).slick("getSlick");
                  i.unslicked || i.slideHandler(t, !0);
               });
         }),
         (i.prototype.applyTransition = function (e) {
            var t = this,
               i = {};
            !1 === t.options.fade
               ? (i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase)
               : (i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase),
               !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
         }),
         (i.prototype.autoPlay = function () {
            var e = this;
            e.autoPlayClear(),
               e.slideCount > e.options.slidesToShow &&
                  (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
         }),
         (i.prototype.autoPlayClear = function () {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer);
         }),
         (i.prototype.autoPlayIterator = function () {
            var e = this,
               t = e.currentSlide + e.options.slidesToScroll;
            e.paused ||
               e.interrupted ||
               e.focussed ||
               (!1 === e.options.infinite &&
                  (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
                     ? (e.direction = 0)
                     : 0 === e.direction &&
                       ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
               e.slideHandler(t));
         }),
         (i.prototype.buildArrows = function () {
            var t = this;
            !0 === t.options.arrows &&
               ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
               (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
               t.slideCount > t.options.slidesToShow
                  ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                    t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                    !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                  : t.$prevArrow
                       .add(t.$nextArrow)
                       .addClass("slick-hidden")
                       .attr({ "aria-disabled": "true", tabindex: "-1" }));
         }),
         (i.prototype.buildDots = function () {
            var t,
               i,
               n = this;
            if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
               for (
                  n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0;
                  t <= n.getDotCount();
                  t += 1
               )
                  i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
               (n.$dots = i.appendTo(n.options.appendDots)), n.$dots.find("li").first().addClass("slick-active");
            }
         }),
         (i.prototype.buildOut = function () {
            var t = this;
            (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
               (t.slideCount = t.$slides.length),
               t.$slides.each(function (t, i) {
                  e(i)
                     .attr("data-slick-index", t)
                     .data("originalStyling", e(i).attr("style") || "");
               }),
               t.$slider.addClass("slick-slider"),
               (t.$slideTrack =
                  0 === t.slideCount
                     ? e('<div class="slick-track"/>').appendTo(t.$slider)
                     : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
               (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
               t.$slideTrack.css("opacity", 0),
               (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
               e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
               t.setupInfinite(),
               t.buildArrows(),
               t.buildDots(),
               t.updateDots(),
               t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
               !0 === t.options.draggable && t.$list.addClass("draggable");
         }),
         (i.prototype.buildRows = function () {
            var e,
               t,
               i,
               n,
               o,
               s,
               r,
               a = this;
            if (((n = document.createDocumentFragment()), (s = a.$slider.children()), a.options.rows > 0)) {
               for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                  var l = document.createElement("div");
                  for (t = 0; t < a.options.rows; t++) {
                     var c = document.createElement("div");
                     for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = e * r + (t * a.options.slidesPerRow + i);
                        s.get(d) && c.appendChild(s.get(d));
                     }
                     l.appendChild(c);
                  }
                  n.appendChild(l);
               }
               a.$slider.empty().append(n),
                  a.$slider
                     .children()
                     .children()
                     .children()
                     .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
            }
         }),
         (i.prototype.checkResponsive = function (t, i) {
            var n,
               o,
               s,
               r = this,
               a = !1,
               l = r.$slider.width(),
               c = window.innerWidth || e(window).width();
            if (
               ("window" === r.respondTo
                  ? (s = c)
                  : "slider" === r.respondTo
                  ? (s = l)
                  : "min" === r.respondTo && (s = Math.min(c, l)),
               r.options.responsive && r.options.responsive.length && null !== r.options.responsive)
            ) {
               for (n in ((o = null), r.breakpoints))
                  r.breakpoints.hasOwnProperty(n) &&
                     (!1 === r.originalSettings.mobileFirst
                        ? s < r.breakpoints[n] && (o = r.breakpoints[n])
                        : s > r.breakpoints[n] && (o = r.breakpoints[n]));
               null !== o
                  ? null !== r.activeBreakpoint
                     ? (o !== r.activeBreakpoint || i) &&
                       ((r.activeBreakpoint = o),
                       "unslick" === r.breakpointSettings[o]
                          ? r.unslick(o)
                          : ((r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o])),
                            !0 === t && (r.currentSlide = r.options.initialSlide),
                            r.refresh(t)),
                       (a = o))
                     : ((r.activeBreakpoint = o),
                       "unslick" === r.breakpointSettings[o]
                          ? r.unslick(o)
                          : ((r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o])),
                            !0 === t && (r.currentSlide = r.options.initialSlide),
                            r.refresh(t)),
                       (a = o))
                  : null !== r.activeBreakpoint &&
                    ((r.activeBreakpoint = null),
                    (r.options = r.originalSettings),
                    !0 === t && (r.currentSlide = r.options.initialSlide),
                    r.refresh(t),
                    (a = o)),
                  t || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
            }
         }),
         (i.prototype.changeSlide = function (t, i) {
            var n,
               o,
               s = this,
               r = e(t.currentTarget);
            switch (
               (r.is("a") && t.preventDefault(),
               r.is("li") || (r = r.closest("li")),
               (n =
                  s.slideCount % s.options.slidesToScroll != 0
                     ? 0
                     : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
               t.data.message)
            ) {
               case "previous":
                  (o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n),
                     s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                  break;
               case "next":
                  (o = 0 === n ? s.options.slidesToScroll : n),
                     s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                  break;
               case "index":
                  var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
                  s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                  break;
               default:
                  return;
            }
         }),
         (i.prototype.checkNavigable = function (e) {
            var t, i;
            if (((i = 0), e > (t = this.getNavigableIndexes())[t.length - 1])) e = t[t.length - 1];
            else
               for (var n in t) {
                  if (e < t[n]) {
                     e = i;
                     break;
                  }
                  i = t[n];
               }
            return e;
         }),
         (i.prototype.cleanUpEvents = function () {
            var t = this;
            t.options.dots &&
               null !== t.$dots &&
               (e("li", t.$dots)
                  .off("click.slick", t.changeSlide)
                  .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                  .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
               !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
               t.$slider.off("focus.slick blur.slick"),
               !0 === t.options.arrows &&
                  t.slideCount > t.options.slidesToShow &&
                  (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                  t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                  !0 === t.options.accessibility &&
                     (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
                     t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
               t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
               t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
               t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
               t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
               t.$list.off("click.slick", t.clickHandler),
               e(document).off(t.visibilityChange, t.visibility),
               t.cleanUpSlideEvents(),
               !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
               !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
               e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
               e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
               e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
               e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
         }),
         (i.prototype.cleanUpSlideEvents = function () {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
               t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
         }),
         (i.prototype.cleanUpRows = function () {
            var e,
               t = this;
            t.options.rows > 0 &&
               ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
         }),
         (i.prototype.clickHandler = function (e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
         }),
         (i.prototype.destroy = function (t) {
            var i = this;
            i.autoPlayClear(),
               (i.touchObject = {}),
               i.cleanUpEvents(),
               e(".slick-cloned", i.$slider).detach(),
               i.$dots && i.$dots.remove(),
               i.$prevArrow &&
                  i.$prevArrow.length &&
                  (i.$prevArrow
                     .removeClass("slick-disabled slick-arrow slick-hidden")
                     .removeAttr("aria-hidden aria-disabled tabindex")
                     .css("display", ""),
                  i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
               i.$nextArrow &&
                  i.$nextArrow.length &&
                  (i.$nextArrow
                     .removeClass("slick-disabled slick-arrow slick-hidden")
                     .removeAttr("aria-hidden aria-disabled tabindex")
                     .css("display", ""),
                  i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
               i.$slides &&
                  (i.$slides
                     .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                     .removeAttr("aria-hidden")
                     .removeAttr("data-slick-index")
                     .each(function () {
                        e(this).attr("style", e(this).data("originalStyling"));
                     }),
                  i.$slideTrack.children(this.options.slide).detach(),
                  i.$slideTrack.detach(),
                  i.$list.detach(),
                  i.$slider.append(i.$slides)),
               i.cleanUpRows(),
               i.$slider.removeClass("slick-slider"),
               i.$slider.removeClass("slick-initialized"),
               i.$slider.removeClass("slick-dotted"),
               (i.unslicked = !0),
               t || i.$slider.trigger("destroy", [i]);
         }),
         (i.prototype.disableTransition = function (e) {
            var t = this,
               i = {};
            (i[t.transitionType] = ""), !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
         }),
         (i.prototype.fadeSlide = function (e, t) {
            var i = this;
            !1 === i.cssTransitions
               ? (i.$slides.eq(e).css({ zIndex: i.options.zIndex }),
                 i.$slides.eq(e).animate({ opacity: 1 }, i.options.speed, i.options.easing, t))
               : (i.applyTransition(e),
                 i.$slides.eq(e).css({ opacity: 1, zIndex: i.options.zIndex }),
                 t &&
                    setTimeout(function () {
                       i.disableTransition(e), t.call();
                    }, i.options.speed));
         }),
         (i.prototype.fadeSlideOut = function (e) {
            var t = this;
            !1 === t.cssTransitions
               ? t.$slides
                    .eq(e)
                    .animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing)
               : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
         }),
         (i.prototype.filterSlides = i.prototype.slickFilter =
            function (e) {
               var t = this;
               null !== e &&
                  ((t.$slidesCache = t.$slides),
                  t.unload(),
                  t.$slideTrack.children(this.options.slide).detach(),
                  t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                  t.reinit());
            }),
         (i.prototype.focusHandler = function () {
            var t = this;
            t.$slider
               .off("focus.slick blur.slick")
               .on("focus.slick", "*", function (i) {
                  var n = e(this);
                  setTimeout(function () {
                     t.options.pauseOnFocus && n.is(":focus") && ((t.focussed = !0), t.autoPlay());
                  }, 0);
               })
               .on("blur.slick", "*", function (i) {
                  e(this);
                  t.options.pauseOnFocus && ((t.focussed = !1), t.autoPlay());
               });
         }),
         (i.prototype.getCurrent = i.prototype.slickCurrentSlide =
            function () {
               return this.currentSlide;
            }),
         (i.prototype.getDotCount = function () {
            var e = this,
               t = 0,
               i = 0,
               n = 0;
            if (!0 === e.options.infinite)
               if (e.slideCount <= e.options.slidesToShow) ++n;
               else
                  for (; t < e.slideCount; )
                     ++n,
                        (t = i + e.options.slidesToScroll),
                        (i +=
                           e.options.slidesToScroll <= e.options.slidesToShow
                              ? e.options.slidesToScroll
                              : e.options.slidesToShow);
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
               for (; t < e.slideCount; )
                  ++n,
                     (t = i + e.options.slidesToScroll),
                     (i +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                           ? e.options.slidesToScroll
                           : e.options.slidesToShow);
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1;
         }),
         (i.prototype.getLeft = function (e) {
            var t,
               i,
               n,
               o,
               s = this,
               r = 0;
            return (
               (s.slideOffset = 0),
               (i = s.$slides.first().outerHeight(!0)),
               !0 === s.options.infinite
                  ? (s.slideCount > s.options.slidesToShow &&
                       ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                       (o = -1),
                       !0 === s.options.vertical &&
                          !0 === s.options.centerMode &&
                          (2 === s.options.slidesToShow ? (o = -1.5) : 1 === s.options.slidesToShow && (o = -2)),
                       (r = i * s.options.slidesToShow * o)),
                    s.slideCount % s.options.slidesToScroll != 0 &&
                       e + s.options.slidesToScroll > s.slideCount &&
                       s.slideCount > s.options.slidesToShow &&
                       (e > s.slideCount
                          ? ((s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1),
                            (r = (s.options.slidesToShow - (e - s.slideCount)) * i * -1))
                          : ((s.slideOffset = (s.slideCount % s.options.slidesToScroll) * s.slideWidth * -1),
                            (r = (s.slideCount % s.options.slidesToScroll) * i * -1))))
                  : e + s.options.slidesToShow > s.slideCount &&
                    ((s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth),
                    (r = (e + s.options.slidesToShow - s.slideCount) * i)),
               s.slideCount <= s.options.slidesToShow && ((s.slideOffset = 0), (r = 0)),
               !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow
                  ? (s.slideOffset =
                       (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 - (s.slideWidth * s.slideCount) / 2)
                  : !0 === s.options.centerMode && !0 === s.options.infinite
                  ? (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth)
                  : !0 === s.options.centerMode &&
                    ((s.slideOffset = 0), (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
               (t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r),
               !0 === s.options.variableWidth &&
                  ((n =
                     s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite
                        ? s.$slideTrack.children(".slick-slide").eq(e)
                        : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow)),
                  (t =
                     !0 === s.options.rtl
                        ? n[0]
                           ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width())
                           : 0
                        : n[0]
                        ? -1 * n[0].offsetLeft
                        : 0),
                  !0 === s.options.centerMode &&
                     ((n =
                        s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite
                           ? s.$slideTrack.children(".slick-slide").eq(e)
                           : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1)),
                     (t =
                        !0 === s.options.rtl
                           ? n[0]
                              ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width())
                              : 0
                           : n[0]
                           ? -1 * n[0].offsetLeft
                           : 0),
                     (t += (s.$list.width() - n.outerWidth()) / 2))),
               t
            );
         }),
         (i.prototype.getOption = i.prototype.slickGetOption =
            function (e) {
               return this.options[e];
            }),
         (i.prototype.getNavigableIndexes = function () {
            var e,
               t = this,
               i = 0,
               n = 0,
               o = [];
            for (
               !1 === t.options.infinite
                  ? (e = t.slideCount)
                  : ((i = -1 * t.options.slidesToScroll), (n = -1 * t.options.slidesToScroll), (e = 2 * t.slideCount));
               i < e;

            )
               o.push(i),
                  (i = n + t.options.slidesToScroll),
                  (n +=
                     t.options.slidesToScroll <= t.options.slidesToShow
                        ? t.options.slidesToScroll
                        : t.options.slidesToShow);
            return o;
         }),
         (i.prototype.getSlick = function () {
            return this;
         }),
         (i.prototype.getSlideCount = function () {
            var t,
               i,
               n,
               o = this;
            return (
               (n = !0 === o.options.centerMode ? Math.floor(o.$list.width() / 2) : 0),
               (i = -1 * o.swipeLeft + n),
               !0 === o.options.swipeToSlide
                  ? (o.$slideTrack.find(".slick-slide").each(function (n, s) {
                       var r, a;
                       if (
                          ((r = e(s).outerWidth()),
                          (a = s.offsetLeft),
                          !0 !== o.options.centerMode && (a += r / 2),
                          i < a + r)
                       )
                          return (t = s), !1;
                    }),
                    Math.abs(e(t).attr("data-slick-index") - o.currentSlide) || 1)
                  : o.options.slidesToScroll
            );
         }),
         (i.prototype.goTo = i.prototype.slickGoTo =
            function (e, t) {
               this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
            }),
         (i.prototype.init = function (t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") ||
               (e(i.$slider).addClass("slick-initialized"),
               i.buildRows(),
               i.buildOut(),
               i.setProps(),
               i.startLoad(),
               i.loadSlider(),
               i.initializeEvents(),
               i.updateArrows(),
               i.updateDots(),
               i.checkResponsive(!0),
               i.focusHandler()),
               t && i.$slider.trigger("init", [i]),
               !0 === i.options.accessibility && i.initADA(),
               i.options.autoplay && ((i.paused = !1), i.autoPlay());
         }),
         (i.prototype.initADA = function () {
            var t = this,
               i = Math.ceil(t.slideCount / t.options.slidesToShow),
               n = t.getNavigableIndexes().filter(function (e) {
                  return e >= 0 && e < t.slideCount;
               });
            t.$slides
               .add(t.$slideTrack.find(".slick-cloned"))
               .attr({ "aria-hidden": "true", tabindex: "-1" })
               .find("a, input, button, select")
               .attr({ tabindex: "-1" }),
               null !== t.$dots &&
                  (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
                     var o = n.indexOf(i);
                     if (
                        (e(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + i, tabindex: -1 }),
                        -1 !== o)
                     ) {
                        var s = "slick-slide-control" + t.instanceUid + o;
                        e("#" + s).length && e(this).attr({ "aria-describedby": s });
                     }
                  }),
                  t.$dots
                     .attr("role", "tablist")
                     .find("li")
                     .each(function (o) {
                        var s = n[o];
                        e(this).attr({ role: "presentation" }),
                           e(this)
                              .find("button")
                              .first()
                              .attr({
                                 role: "tab",
                                 id: "slick-slide-control" + t.instanceUid + o,
                                 "aria-controls": "slick-slide" + t.instanceUid + s,
                                 "aria-label": o + 1 + " of " + i,
                                 "aria-selected": null,
                                 tabindex: "-1",
                              });
                     })
                     .eq(t.currentSlide)
                     .find("button")
                     .attr({ "aria-selected": "true", tabindex: "0" })
                     .end());
            for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++)
               t.options.focusOnChange
                  ? t.$slides.eq(o).attr({ tabindex: "0" })
                  : t.$slides.eq(o).removeAttr("tabindex");
            t.activateADA();
         }),
         (i.prototype.initArrowEvents = function () {
            var e = this;
            !0 === e.options.arrows &&
               e.slideCount > e.options.slidesToShow &&
               (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide),
               e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide),
               !0 === e.options.accessibility &&
                  (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
         }),
         (i.prototype.initDotEvents = function () {
            var t = this;
            !0 === t.options.dots &&
               t.slideCount > t.options.slidesToShow &&
               (e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide),
               !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
               !0 === t.options.dots &&
                  !0 === t.options.pauseOnDotsHover &&
                  t.slideCount > t.options.slidesToShow &&
                  e("li", t.$dots)
                     .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                     .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
         }),
         (i.prototype.initSlideEvents = function () {
            var t = this;
            t.options.pauseOnHover &&
               (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
               t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
         }),
         (i.prototype.initializeEvents = function () {
            var t = this;
            t.initArrowEvents(),
               t.initDotEvents(),
               t.initSlideEvents(),
               t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
               t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
               t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
               t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
               t.$list.on("click.slick", t.clickHandler),
               e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
               !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
               !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
               e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
               e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
               e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
               e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
               e(t.setPosition);
         }),
         (i.prototype.initUI = function () {
            var e = this;
            !0 === e.options.arrows &&
               e.slideCount > e.options.slidesToShow &&
               (e.$prevArrow.show(), e.$nextArrow.show()),
               !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
         }),
         (i.prototype.keyHandler = function (e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
               (37 === e.keyCode && !0 === t.options.accessibility
                  ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
                  : 39 === e.keyCode &&
                    !0 === t.options.accessibility &&
                    t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
         }),
         (i.prototype.lazyLoad = function () {
            var t,
               i,
               n,
               o = this;
            function s(t) {
               e("img[data-lazy]", t).each(function () {
                  var t = e(this),
                     i = e(this).attr("data-lazy"),
                     n = e(this).attr("data-srcset"),
                     s = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                     r = document.createElement("img");
                  (r.onload = function () {
                     t.animate({ opacity: 0 }, 100, function () {
                        n && (t.attr("srcset", n), s && t.attr("sizes", s)),
                           t.attr("src", i).animate({ opacity: 1 }, 200, function () {
                              t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                           }),
                           o.$slider.trigger("lazyLoaded", [o, t, i]);
                     });
                  }),
                     (r.onerror = function () {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                           o.$slider.trigger("lazyLoadError", [o, t, i]);
                     }),
                     (r.src = i);
               });
            }
            if (
               (!0 === o.options.centerMode
                  ? !0 === o.options.infinite
                     ? (n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2)
                     : ((i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1))),
                       (n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
                  : ((i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide),
                    (n = Math.ceil(i + o.options.slidesToShow)),
                    !0 === o.options.fade && (i > 0 && i--, n <= o.slideCount && n++)),
               (t = o.$slider.find(".slick-slide").slice(i, n)),
               "anticipated" === o.options.lazyLoad)
            )
               for (var r = i - 1, a = n, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++)
                  r < 0 && (r = o.slideCount - 1), (t = (t = t.add(l.eq(r))).add(l.eq(a))), r--, a++;
            s(t),
               o.slideCount <= o.options.slidesToShow
                  ? s(o.$slider.find(".slick-slide"))
                  : o.currentSlide >= o.slideCount - o.options.slidesToShow
                  ? s(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow))
                  : 0 === o.currentSlide && s(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
         }),
         (i.prototype.loadSlider = function () {
            var e = this;
            e.setPosition(),
               e.$slideTrack.css({ opacity: 1 }),
               e.$slider.removeClass("slick-loading"),
               e.initUI(),
               "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
         }),
         (i.prototype.next = i.prototype.slickNext =
            function () {
               this.changeSlide({ data: { message: "next" } });
            }),
         (i.prototype.orientationChange = function () {
            this.checkResponsive(), this.setPosition();
         }),
         (i.prototype.pause = i.prototype.slickPause =
            function () {
               this.autoPlayClear(), (this.paused = !0);
            }),
         (i.prototype.play = i.prototype.slickPlay =
            function () {
               var e = this;
               e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
            }),
         (i.prototype.postSlide = function (t) {
            var i = this;
            i.unslicked ||
               (i.$slider.trigger("afterChange", [i, t]),
               (i.animating = !1),
               i.slideCount > i.options.slidesToShow && i.setPosition(),
               (i.swipeLeft = null),
               i.options.autoplay && i.autoPlay(),
               !0 === i.options.accessibility &&
                  (i.initADA(),
                  i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
         }),
         (i.prototype.prev = i.prototype.slickPrev =
            function () {
               this.changeSlide({ data: { message: "previous" } });
            }),
         (i.prototype.preventDefault = function (e) {
            e.preventDefault();
         }),
         (i.prototype.progressiveLazyLoad = function (t) {
            t = t || 1;
            var i,
               n,
               o,
               s,
               r,
               a = this,
               l = e("img[data-lazy]", a.$slider);
            l.length
               ? ((i = l.first()),
                 (n = i.attr("data-lazy")),
                 (o = i.attr("data-srcset")),
                 (s = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
                 ((r = document.createElement("img")).onload = function () {
                    o && (i.attr("srcset", o), s && i.attr("sizes", s)),
                       i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                       !0 === a.options.adaptiveHeight && a.setPosition(),
                       a.$slider.trigger("lazyLoaded", [a, i, n]),
                       a.progressiveLazyLoad();
                 }),
                 (r.onerror = function () {
                    t < 3
                       ? setTimeout(function () {
                            a.progressiveLazyLoad(t + 1);
                         }, 500)
                       : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                         a.$slider.trigger("lazyLoadError", [a, i, n]),
                         a.progressiveLazyLoad());
                 }),
                 (r.src = n))
               : a.$slider.trigger("allImagesLoaded", [a]);
         }),
         (i.prototype.refresh = function (t) {
            var i,
               n,
               o = this;
            (n = o.slideCount - o.options.slidesToShow),
               !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
               o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
               (i = o.currentSlide),
               o.destroy(!0),
               e.extend(o, o.initials, { currentSlide: i }),
               o.init(),
               t || o.changeSlide({ data: { message: "index", index: i } }, !1);
         }),
         (i.prototype.registerBreakpoints = function () {
            var t,
               i,
               n,
               o = this,
               s = o.options.responsive || null;
            if ("array" === e.type(s) && s.length) {
               for (t in ((o.respondTo = o.options.respondTo || "window"), s))
                  if (((n = o.breakpoints.length - 1), s.hasOwnProperty(t))) {
                     for (i = s[t].breakpoint; n >= 0; )
                        o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                     o.breakpoints.push(i), (o.breakpointSettings[i] = s[t].settings);
                  }
               o.breakpoints.sort(function (e, t) {
                  return o.options.mobileFirst ? e - t : t - e;
               });
            }
         }),
         (i.prototype.reinit = function () {
            var t = this;
            (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
               (t.slideCount = t.$slides.length),
               t.currentSlide >= t.slideCount &&
                  0 !== t.currentSlide &&
                  (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
               t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
               t.registerBreakpoints(),
               t.setProps(),
               t.setupInfinite(),
               t.buildArrows(),
               t.updateArrows(),
               t.initArrowEvents(),
               t.buildDots(),
               t.updateDots(),
               t.initDotEvents(),
               t.cleanUpSlideEvents(),
               t.initSlideEvents(),
               t.checkResponsive(!1, !0),
               !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
               t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
               t.setPosition(),
               t.focusHandler(),
               (t.paused = !t.options.autoplay),
               t.autoPlay(),
               t.$slider.trigger("reInit", [t]);
         }),
         (i.prototype.resize = function () {
            var t = this;
            e(window).width() !== t.windowWidth &&
               (clearTimeout(t.windowDelay),
               (t.windowDelay = window.setTimeout(function () {
                  (t.windowWidth = e(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
               }, 50)));
         }),
         (i.prototype.removeSlide = i.prototype.slickRemove =
            function (e, t, i) {
               var n = this;
               if (
                  ((e = "boolean" == typeof e ? (!0 === (t = e) ? 0 : n.slideCount - 1) : !0 === t ? --e : e),
                  n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
               )
                  return !1;
               n.unload(),
                  !0 === i
                     ? n.$slideTrack.children().remove()
                     : n.$slideTrack.children(this.options.slide).eq(e).remove(),
                  (n.$slides = n.$slideTrack.children(this.options.slide)),
                  n.$slideTrack.children(this.options.slide).detach(),
                  n.$slideTrack.append(n.$slides),
                  (n.$slidesCache = n.$slides),
                  n.reinit();
            }),
         (i.prototype.setCSS = function (e) {
            var t,
               i,
               n = this,
               o = {};
            !0 === n.options.rtl && (e = -e),
               (t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
               (i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
               (o[n.positionProp] = e),
               !1 === n.transformsEnabled
                  ? n.$slideTrack.css(o)
                  : ((o = {}),
                    !1 === n.cssTransitions
                       ? ((o[n.animType] = "translate(" + t + ", " + i + ")"), n.$slideTrack.css(o))
                       : ((o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(o)));
         }),
         (i.prototype.setDimensions = function () {
            var e = this;
            !1 === e.options.vertical
               ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding })
               : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
                 !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })),
               (e.listWidth = e.$list.width()),
               (e.listHeight = e.$list.height()),
               !1 === e.options.vertical && !1 === e.options.variableWidth
                  ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
                    e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)))
                  : !0 === e.options.variableWidth
                  ? e.$slideTrack.width(5e3 * e.slideCount)
                  : ((e.slideWidth = Math.ceil(e.listWidth)),
                    e.$slideTrack.height(
                       Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)
                    ));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
         }),
         (i.prototype.setFade = function () {
            var t,
               i = this;
            i.$slides.each(function (n, o) {
               (t = i.slideWidth * n * -1),
                  !0 === i.options.rtl
                     ? e(o).css({ position: "relative", right: t, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 })
                     : e(o).css({ position: "relative", left: t, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 });
            }),
               i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 });
         }),
         (i.prototype.setHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
               var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
               e.$list.css("height", t);
            }
         }),
         (i.prototype.setOption = i.prototype.slickSetOption =
            function () {
               var t,
                  i,
                  n,
                  o,
                  s,
                  r = this,
                  a = !1;
               if (
                  ("object" === e.type(arguments[0])
                     ? ((n = arguments[0]), (a = arguments[1]), (s = "multiple"))
                     : "string" === e.type(arguments[0]) &&
                       ((n = arguments[0]),
                       (o = arguments[1]),
                       (a = arguments[2]),
                       "responsive" === arguments[0] && "array" === e.type(arguments[1])
                          ? (s = "responsive")
                          : void 0 !== arguments[1] && (s = "single")),
                  "single" === s)
               )
                  r.options[n] = o;
               else if ("multiple" === s)
                  e.each(n, function (e, t) {
                     r.options[e] = t;
                  });
               else if ("responsive" === s)
                  for (i in o)
                     if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];
                     else {
                        for (t = r.options.responsive.length - 1; t >= 0; )
                           r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1),
                              t--;
                        r.options.responsive.push(o[i]);
                     }
               a && (r.unload(), r.reinit());
            }),
         (i.prototype.setPosition = function () {
            var e = this;
            e.setDimensions(),
               e.setHeight(),
               !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
               e.$slider.trigger("setPosition", [e]);
         }),
         (i.prototype.setProps = function () {
            var e = this,
               t = document.body.style;
            (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
               "top" === e.positionProp
                  ? e.$slider.addClass("slick-vertical")
                  : e.$slider.removeClass("slick-vertical"),
               (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) ||
                  (!0 === e.options.useCSS && (e.cssTransitions = !0)),
               e.options.fade &&
                  ("number" == typeof e.options.zIndex
                     ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                     : (e.options.zIndex = e.defaults.zIndex)),
               void 0 !== t.OTransform &&
                  ((e.animType = "OTransform"),
                  (e.transformType = "-o-transform"),
                  (e.transitionType = "OTransition"),
                  void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
               void 0 !== t.MozTransform &&
                  ((e.animType = "MozTransform"),
                  (e.transformType = "-moz-transform"),
                  (e.transitionType = "MozTransition"),
                  void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
               void 0 !== t.webkitTransform &&
                  ((e.animType = "webkitTransform"),
                  (e.transformType = "-webkit-transform"),
                  (e.transitionType = "webkitTransition"),
                  void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
               void 0 !== t.msTransform &&
                  ((e.animType = "msTransform"),
                  (e.transformType = "-ms-transform"),
                  (e.transitionType = "msTransition"),
                  void 0 === t.msTransform && (e.animType = !1)),
               void 0 !== t.transform &&
                  !1 !== e.animType &&
                  ((e.animType = "transform"), (e.transformType = "transform"), (e.transitionType = "transition")),
               (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
         }),
         (i.prototype.setSlideClasses = function (e) {
            var t,
               i,
               n,
               o,
               s = this;
            if (
               ((i = s.$slider
                  .find(".slick-slide")
                  .removeClass("slick-active slick-center slick-current")
                  .attr("aria-hidden", "true")),
               s.$slides.eq(e).addClass("slick-current"),
               !0 === s.options.centerMode)
            ) {
               var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
               (t = Math.floor(s.options.slidesToShow / 2)),
                  !0 === s.options.infinite &&
                     (e >= t && e <= s.slideCount - 1 - t
                        ? s.$slides
                             .slice(e - t + r, e + t + 1)
                             .addClass("slick-active")
                             .attr("aria-hidden", "false")
                        : ((n = s.options.slidesToShow + e),
                          i
                             .slice(n - t + 1 + r, n + t + 2)
                             .addClass("slick-active")
                             .attr("aria-hidden", "false")),
                     0 === e
                        ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center")
                        : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")),
                  s.$slides.eq(e).addClass("slick-center");
            } else
               e >= 0 && e <= s.slideCount - s.options.slidesToShow
                  ? s.$slides
                       .slice(e, e + s.options.slidesToShow)
                       .addClass("slick-active")
                       .attr("aria-hidden", "false")
                  : i.length <= s.options.slidesToShow
                  ? i.addClass("slick-active").attr("aria-hidden", "false")
                  : ((o = s.slideCount % s.options.slidesToShow),
                    (n = !0 === s.options.infinite ? s.options.slidesToShow + e : e),
                    s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow
                       ? i
                            .slice(n - (s.options.slidesToShow - o), n + o)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")
                       : i
                            .slice(n, n + s.options.slidesToShow)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false"));
            ("ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad) || s.lazyLoad();
         }),
         (i.prototype.setupInfinite = function () {
            var t,
               i,
               n,
               o = this;
            if (
               (!0 === o.options.fade && (o.options.centerMode = !1),
               !0 === o.options.infinite &&
                  !1 === o.options.fade &&
                  ((i = null), o.slideCount > o.options.slidesToShow))
            ) {
               for (
                  n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
                     t = o.slideCount;
                  t > o.slideCount - n;
                  t -= 1
               )
                  (i = t - 1),
                     e(o.$slides[i])
                        .clone(!0)
                        .attr("id", "")
                        .attr("data-slick-index", i - o.slideCount)
                        .prependTo(o.$slideTrack)
                        .addClass("slick-cloned");
               for (t = 0; t < n + o.slideCount; t += 1)
                  (i = t),
                     e(o.$slides[i])
                        .clone(!0)
                        .attr("id", "")
                        .attr("data-slick-index", i + o.slideCount)
                        .appendTo(o.$slideTrack)
                        .addClass("slick-cloned");
               o.$slideTrack
                  .find(".slick-cloned")
                  .find("[id]")
                  .each(function () {
                     e(this).attr("id", "");
                  });
            }
         }),
         (i.prototype.interrupt = function (e) {
            e || this.autoPlay(), (this.interrupted = e);
         }),
         (i.prototype.selectHandler = function (t) {
            var i = this,
               n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
               o = parseInt(n.attr("data-slick-index"));
            o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o);
         }),
         (i.prototype.slideHandler = function (e, t, i) {
            var n,
               o,
               s,
               r,
               a,
               l,
               c = this;
            if (
               ((t = t || !1),
               !(
                  (!0 === c.animating && !0 === c.options.waitForAnimate) ||
                  (!0 === c.options.fade && c.currentSlide === e)
               ))
            )
               if (
                  (!1 === t && c.asNavFor(e),
                  (n = e),
                  (a = c.getLeft(n)),
                  (r = c.getLeft(c.currentSlide)),
                  (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
                  !1 === c.options.infinite &&
                     !1 === c.options.centerMode &&
                     (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
               )
                  !1 === c.options.fade &&
                     ((n = c.currentSlide),
                     !0 !== i && c.slideCount > c.options.slidesToShow
                        ? c.animateSlide(r, function () {
                             c.postSlide(n);
                          })
                        : c.postSlide(n));
               else if (
                  !1 === c.options.infinite &&
                  !0 === c.options.centerMode &&
                  (e < 0 || e > c.slideCount - c.options.slidesToScroll)
               )
                  !1 === c.options.fade &&
                     ((n = c.currentSlide),
                     !0 !== i && c.slideCount > c.options.slidesToShow
                        ? c.animateSlide(r, function () {
                             c.postSlide(n);
                          })
                        : c.postSlide(n));
               else {
                  if (
                     (c.options.autoplay && clearInterval(c.autoPlayTimer),
                     (o =
                        n < 0
                           ? c.slideCount % c.options.slidesToScroll != 0
                              ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                              : c.slideCount + n
                           : n >= c.slideCount
                           ? c.slideCount % c.options.slidesToScroll != 0
                              ? 0
                              : n - c.slideCount
                           : n),
                     (c.animating = !0),
                     c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                     (s = c.currentSlide),
                     (c.currentSlide = o),
                     c.setSlideClasses(c.currentSlide),
                     c.options.asNavFor &&
                        (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow &&
                        l.setSlideClasses(c.currentSlide),
                     c.updateDots(),
                     c.updateArrows(),
                     !0 === c.options.fade)
                  )
                     return (
                        !0 !== i
                           ? (c.fadeSlideOut(s),
                             c.fadeSlide(o, function () {
                                c.postSlide(o);
                             }))
                           : c.postSlide(o),
                        void c.animateHeight()
                     );
                  !0 !== i && c.slideCount > c.options.slidesToShow
                     ? c.animateSlide(a, function () {
                          c.postSlide(o);
                       })
                     : c.postSlide(o);
               }
         }),
         (i.prototype.startLoad = function () {
            var e = this;
            !0 === e.options.arrows &&
               e.slideCount > e.options.slidesToShow &&
               (e.$prevArrow.hide(), e.$nextArrow.hide()),
               !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
               e.$slider.addClass("slick-loading");
         }),
         (i.prototype.swipeDirection = function () {
            var e,
               t,
               i,
               n,
               o = this;
            return (
               (e = o.touchObject.startX - o.touchObject.curX),
               (t = o.touchObject.startY - o.touchObject.curY),
               (i = Math.atan2(t, e)),
               (n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
               (n <= 45 && n >= 0) || (n <= 360 && n >= 315)
                  ? !1 === o.options.rtl
                     ? "left"
                     : "right"
                  : n >= 135 && n <= 225
                  ? !1 === o.options.rtl
                     ? "right"
                     : "left"
                  : !0 === o.options.verticalSwiping
                  ? n >= 35 && n <= 135
                     ? "down"
                     : "up"
                  : "vertical"
            );
         }),
         (i.prototype.swipeEnd = function (e) {
            var t,
               i,
               n = this;
            if (((n.dragging = !1), (n.swiping = !1), n.scrolling)) return (n.scrolling = !1), !1;
            if (
               ((n.interrupted = !1),
               (n.shouldClick = !(n.touchObject.swipeLength > 10)),
               void 0 === n.touchObject.curX)
            )
               return !1;
            if (
               (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
               n.touchObject.swipeLength >= n.touchObject.minSwipe)
            ) {
               switch ((i = n.swipeDirection())) {
                  case "left":
                  case "down":
                     (t = n.options.swipeToSlide
                        ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                        : n.currentSlide + n.getSlideCount()),
                        (n.currentDirection = 0);
                     break;
                  case "right":
                  case "up":
                     (t = n.options.swipeToSlide
                        ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                        : n.currentSlide - n.getSlideCount()),
                        (n.currentDirection = 1);
               }
               "vertical" != i && (n.slideHandler(t), (n.touchObject = {}), n.$slider.trigger("swipe", [n, i]));
            } else
               n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), (n.touchObject = {}));
         }),
         (i.prototype.swipeHandler = function (e) {
            var t = this;
            if (
               !(
                  !1 === t.options.swipe ||
                  ("ontouchend" in document && !1 === t.options.swipe) ||
                  (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
               )
            )
               switch (
                  ((t.touchObject.fingerCount =
                     e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
                  (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
                  !0 === t.options.verticalSwiping &&
                     (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                  e.data.action)
               ) {
                  case "start":
                     t.swipeStart(e);
                     break;
                  case "move":
                     t.swipeMove(e);
                     break;
                  case "end":
                     t.swipeEnd(e);
               }
         }),
         (i.prototype.swipeMove = function (e) {
            var t,
               i,
               n,
               o,
               s,
               r,
               a = this;
            return (
               (s = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
               !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
                  ((t = a.getLeft(a.currentSlide)),
                  (a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX),
                  (a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY),
                  (a.touchObject.swipeLength = Math.round(
                     Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
                  )),
                  (r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                  !a.options.verticalSwiping && !a.swiping && r > 4
                     ? ((a.scrolling = !0), !1)
                     : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
                       (i = a.swipeDirection()),
                       void 0 !== e.originalEvent &&
                          a.touchObject.swipeLength > 4 &&
                          ((a.swiping = !0), e.preventDefault()),
                       (o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                       !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                       (n = a.touchObject.swipeLength),
                       (a.touchObject.edgeHit = !1),
                       !1 === a.options.infinite &&
                          ((0 === a.currentSlide && "right" === i) ||
                             (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                          ((n = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                       !1 === a.options.vertical
                          ? (a.swipeLeft = t + n * o)
                          : (a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o),
                       !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o),
                       !0 !== a.options.fade &&
                          !1 !== a.options.touchMove &&
                          (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
            );
         }),
         (i.prototype.swipeStart = function (e) {
            var t,
               i = this;
            if (((i.interrupted = !0), 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow))
               return (i.touchObject = {}), !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
               (i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
               (i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
               (i.dragging = !0);
         }),
         (i.prototype.unfilterSlides = i.prototype.slickUnfilter =
            function () {
               var e = this;
               null !== e.$slidesCache &&
                  (e.unload(),
                  e.$slideTrack.children(this.options.slide).detach(),
                  e.$slidesCache.appendTo(e.$slideTrack),
                  e.reinit());
            }),
         (i.prototype.unload = function () {
            var t = this;
            e(".slick-cloned", t.$slider).remove(),
               t.$dots && t.$dots.remove(),
               t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
               t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
               t.$slides
                  .removeClass("slick-slide slick-active slick-visible slick-current")
                  .attr("aria-hidden", "true")
                  .css("width", "");
         }),
         (i.prototype.unslick = function (e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy();
         }),
         (i.prototype.updateArrows = function () {
            var e = this;
            Math.floor(e.options.slidesToShow / 2),
               !0 === e.options.arrows &&
                  e.slideCount > e.options.slidesToShow &&
                  !e.options.infinite &&
                  (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                  e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                  0 === e.currentSlide
                     ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                       e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                     : ((e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode) ||
                          (e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode)) &&
                       (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                       e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
         }),
         (i.prototype.updateDots = function () {
            var e = this;
            null !== e.$dots &&
               (e.$dots.find("li").removeClass("slick-active").end(),
               e.$dots
                  .find("li")
                  .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                  .addClass("slick-active"));
         }),
         (i.prototype.visibility = function () {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
         }),
         (e.fn.slick = function () {
            var e,
               t,
               n = this,
               o = arguments[0],
               s = Array.prototype.slice.call(arguments, 1),
               r = n.length;
            for (e = 0; e < r; e++)
               if (
                  ("object" == typeof o || void 0 === o
                     ? (n[e].slick = new i(n[e], o))
                     : (t = n[e].slick[o].apply(n[e].slick, s)),
                  void 0 !== t)
               )
                  return t;
            return n;
         });
   }),
   (function (e, t) {
      "object" == typeof exports && "undefined" != typeof module
         ? t(exports)
         : "function" == typeof define && define.amd
         ? define(["exports"], t)
         : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).window = e.window || {}));
   })(this, function (e) {
      "use strict";
      const t = (e) =>
            "object" == typeof e &&
            null !== e &&
            e.constructor === Object &&
            "[object Object]" === Object.prototype.toString.call(e),
         i = (e, ...n) => {
            const o = n.length;
            for (let s = 0; s < o; s++) {
               const o = n[s] || {};
               Object.entries(o).forEach(([n, o]) => {
                  const s = Array.isArray(o) ? [] : {};
                  e[n] || Object.assign(e, { [n]: s }),
                     t(o)
                        ? Object.assign(e[n], i(s, o))
                        : Array.isArray(o)
                        ? Object.assign(e, { [n]: [...o] })
                        : Object.assign(e, { [n]: o });
               });
            }
            return e;
         },
         n = function (e) {
            var t = new DOMParser().parseFromString(e, "text/html").body;
            if (t.childElementCount > 1) {
               for (var i = document.createElement("div"); t.firstChild; ) i.appendChild(t.firstChild);
               return i;
            }
            return t.firstChild;
         },
         o = (e) => e && null !== e && e instanceof Element && "nodeType" in e,
         s = function (e) {
            const t = window.pageYOffset,
               i = window.pageYOffset + window.innerHeight;
            if (!o(e)) return 0;
            const n = e.getBoundingClientRect(),
               s = n.y + window.pageYOffset,
               r = n.y + n.height + window.pageYOffset;
            if (t > r || i < s) return 0;
            if (t < s && i > r) return 100;
            if (s < t && r > i) return 100;
            let a = n.height;
            s < t && (a -= window.pageYOffset - s), r > i && (a -= r - i);
            const l = (a / window.innerHeight) * 100;
            return Math.round(l);
         },
         r = !("undefined" == typeof window || !window.document || !window.document.createElement);
      let a;
      const l = [
            "a[href]",
            "area[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
            "iframe",
            "object",
            "embed",
            "video",
            "audio",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
         ].join(","),
         c = (e) => {
            if (e && r) {
               void 0 === a &&
                  document.createElement("div").focus({
                     get preventScroll() {
                        return (a = !0), !1;
                     },
                  });
               try {
                  if (a) e.focus({ preventScroll: !0 });
                  else {
                     const t = window.pageXOffset || document.body.scrollTop,
                        i = window.pageYOffset || document.body.scrollLeft;
                     e.focus(), document.body.scrollTo({ top: t, left: i, behavior: "auto" });
                  }
               } catch (e) {}
            }
         },
         d =
            '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
         u = {
            PANUP: "Move up",
            PANDOWN: "Move down",
            PANLEFT: "Move left",
            PANRIGHT: "Move right",
            ZOOMIN: "Zoom in",
            ZOOMOUT: "Zoom out",
            TOGGLEZOOM: "Toggle zoom level",
            TOGGLE1TO1: "Toggle zoom level",
            ITERATEZOOM: "Toggle zoom level",
            ROTATECCW: "Rotate counterclockwise",
            ROTATECW: "Rotate clockwise",
            FLIPX: "Flip horizontally",
            FLIPY: "Flip vertically",
            FITX: "Fit horizontally",
            FITY: "Fit vertically",
            RESET: "Reset",
            TOGGLEFS: "Toggle fullscreen",
         },
         h = {
            dragToClose: !0,
            hideScrollbar: !0,
            Carousel: {
               classes: {
                  container: "fancybox__carousel",
                  viewport: "fancybox__viewport",
                  track: "fancybox__track",
                  slide: "fancybox__slide",
               },
            },
            contentClick: "toggleZoom",
            contentDblClick: !1,
            backdropClick: "close",
            animated: !0,
            idle: 3500,
            showClass: "f-zoomInUp",
            hideClass: "f-fadeOut",
            commonCaption: !1,
            parentEl: null,
            startIndex: 0,
            l10n: Object.assign(Object.assign({}, u), {
               CLOSE: "Close",
               NEXT: "Next",
               PREV: "Previous",
               MODAL: "You can close this modal content with the ESC key",
               ERROR: "Something Went Wrong, Please Try Again Later",
               IMAGE_ERROR: "Image Not Found",
               ELEMENT_NOT_FOUND: "HTML Element Not Found",
               AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
               AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
               IFRAME_ERROR: "Error Loading Page",
               TOGGLE_ZOOM: "Toggle zoom level",
               TOGGLE_THUMBS: "Toggle thumbnails",
               TOGGLE_SLIDESHOW: "Toggle slideshow",
               TOGGLE_FULLSCREEN: "Toggle full-screen mode",
               DOWNLOAD: "Download",
            }),
            tpl: {
               closeButton:
                  '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
               main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
            },
            groupAll: !1,
            groupAttr: "data-fancybox",
            defaultType: "image",
            defaultDisplay: "block",
            autoFocus: !0,
            trapFocus: !0,
            placeFocusBack: !0,
            closeButton: "auto",
            keyboard: {
               Escape: "close",
               Delete: "close",
               Backspace: "close",
               PageUp: "next",
               PageDown: "prev",
               ArrowUp: "prev",
               ArrowDown: "next",
               ArrowRight: "next",
               ArrowLeft: "prev",
            },
            Fullscreen: { autoStart: !1 },
            compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
            wheel: "zoom",
         };
      var p, f;
      !(function (e) {
         (e[(e.Init = 0)] = "Init"),
            (e[(e.Ready = 1)] = "Ready"),
            (e[(e.Closing = 2)] = "Closing"),
            (e[(e.CustomClosing = 3)] = "CustomClosing"),
            (e[(e.Destroy = 4)] = "Destroy");
      })(p || (p = {})),
         (function (e) {
            (e[(e.Loading = 0)] = "Loading"),
               (e[(e.Opening = 1)] = "Opening"),
               (e[(e.Ready = 2)] = "Ready"),
               (e[(e.Closing = 3)] = "Closing");
         })(f || (f = {}));
      const g = function (e, t) {
         return e.split(".").reduce((e, t) => ("object" == typeof e ? e[t] : void 0), t);
      };
      class m {
         constructor(e = {}) {
            Object.defineProperty(this, "options", { enumerable: !0, configurable: !0, writable: !0, value: e }),
               Object.defineProperty(this, "events", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: new Map(),
               }),
               this.setOptions(e);
            for (const e of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
               e.startsWith("on") && "function" == typeof this[e] && (this[e] = this[e].bind(this));
         }
         setOptions(e) {
            this.options = e ? i({}, this.constructor.defaults, e) : {};
            for (const [e, t] of Object.entries(this.option("on") || {})) this.on(e, t);
         }
         option(e, ...t) {
            let i = g(e, this.options);
            return i && "function" == typeof i && (i = i.call(this, this, ...t)), i;
         }
         optionFor(e, t, i, ...n) {
            let o = g(t, e);
            var s;
            "string" != typeof (s = o) || isNaN(s) || isNaN(parseFloat(s)) || (o = parseFloat(o)),
               "true" === o && (o = !0),
               "false" === o && (o = !1),
               o && "function" == typeof o && (o = o.call(this, this, e, ...n));
            let r = g(t, this.options);
            return (
               r && "function" == typeof r ? (o = r.call(this, this, e, ...n, o)) : void 0 === o && (o = r),
               void 0 === o ? i : o
            );
         }
         cn(e) {
            const t = this.options.classes;
            return (t && t[e]) || "";
         }
         localize(e, t = []) {
            e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e, t, i) => {
               let n = "";
               return (
                  i
                     ? (n = this.option(`${t[0] + t.toLowerCase().substring(1)}.l10n.${i}`))
                     : t && (n = this.option(`l10n.${t}`)),
                  n || (n = e),
                  n
               );
            });
            for (let i = 0; i < t.length; i++) e = e.split(t[i][0]).join(t[i][1]);
            return e.replace(/\{\{(.*?)\}\}/g, (e, t) => t);
         }
         on(e, t) {
            let i = [];
            "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
               this.events || (this.events = new Map()),
               i.forEach((e) => {
                  let i = this.events.get(e);
                  i || (this.events.set(e, []), (i = [])), i.includes(t) || i.push(t), this.events.set(e, i);
               });
         }
         off(e, t) {
            let i = [];
            "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
               i.forEach((e) => {
                  const i = this.events.get(e);
                  if (Array.isArray(i)) {
                     const e = i.indexOf(t);
                     e > -1 && i.splice(e, 1);
                  }
               });
         }
         emit(e, ...t) {
            [...(this.events.get(e) || [])].forEach((e) => e(this, ...t)), "*" !== e && this.emit("*", e, ...t);
         }
      }
      Object.defineProperty(m, "version", { enumerable: !0, configurable: !0, writable: !0, value: "5.0.15" }),
         Object.defineProperty(m, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: {} });
      class v extends m {
         constructor(e = {}) {
            super(e),
               Object.defineProperty(this, "plugins", { enumerable: !0, configurable: !0, writable: !0, value: {} });
         }
         attachPlugins(e = {}) {
            const t = new Map();
            for (const [i, n] of Object.entries(e)) {
               const e = this.option(i),
                  o = this.plugins[i];
               o || !1 === e ? o && !1 === e && (o.detach(), delete this.plugins[i]) : t.set(i, new n(this, e || {}));
            }
            for (const [e, i] of t) (this.plugins[e] = i), i.attach();
            this.emit("attachPlugins");
         }
         detachPlugins(e) {
            e = e || Object.keys(this.plugins);
            for (const t of e) {
               const e = this.plugins[t];
               e && e.detach(), delete this.plugins[t];
            }
            return this.emit("detachPlugins"), this;
         }
      }
      class y extends m {
         constructor(e, t) {
            super(t),
               Object.defineProperty(this, "instance", { enumerable: !0, configurable: !0, writable: !0, value: e });
         }
         attach() {}
         detach() {}
      }
      const b = () => {
         queueMicrotask(() => {
            (() => {
               const { slug: e, index: t } = w.parseURL(),
                  i = Le.getInstance();
               if (i && !1 !== i.option("Hash")) {
                  const n = i.carousel;
                  if (e && n) {
                     for (let t of n.slides) if (t.slug && t.slug === e) return n.slideTo(t.index);
                     if (e === i.option("slug")) return n.slideTo(t - 1);
                     const o = i.getSlide(),
                        s = o && o.triggerEl && o.triggerEl.dataset;
                     if (s && s.fancybox === e) return n.slideTo(t - 1);
                  }
                  (w.hasSilentClose = !0), i.close();
               }
               w.startFromUrl();
            })();
         });
      };
      class w extends y {
         constructor() {
            super(...arguments),
               Object.defineProperty(this, "origHash", { enumerable: !0, configurable: !0, writable: !0, value: "" }),
               Object.defineProperty(this, "timer", { enumerable: !0, configurable: !0, writable: !0, value: null });
         }
         onChange() {
            const e = this.instance,
               t = e.carousel;
            this.timer && clearTimeout(this.timer);
            const i = e.getSlide();
            if (!t || !i) return;
            const n = e.isOpeningSlide(i),
               o = new URL(document.URL).hash;
            let s,
               r = i.slug || void 0;
            (s = r || this.instance.option("slug")),
               !s && i.triggerEl && i.triggerEl.dataset && (s = i.triggerEl.dataset.fancybox);
            let a = "";
            s && "true" !== s && (a = "#" + s + (!r && t.slides.length > 1 ? "-" + (i.index + 1) : "")),
               n && (this.origHash = o !== a ? o : ""),
               a &&
                  o !== a &&
                  (this.timer = setTimeout(() => {
                     try {
                        window.history[n ? "pushState" : "replaceState"](
                           {},
                           document.title,
                           window.location.pathname + window.location.search + a
                        );
                     } catch (e) {}
                  }, 300));
         }
         onClose() {
            if ((this.timer && clearTimeout(this.timer), !0 !== w.hasSilentClose))
               try {
                  window.history.replaceState(
                     {},
                     document.title,
                     window.location.pathname + window.location.search + (this.origHash || "")
                  );
               } catch (e) {}
         }
         attach() {
            this.instance.on("Carousel.ready", this.onChange),
               this.instance.on("Carousel.change", this.onChange),
               this.instance.on("close", this.onClose);
         }
         detach() {
            this.instance.off("Carousel.ready", this.onChange),
               this.instance.off("Carousel.change", this.onChange),
               this.instance.off("close", this.onClose);
         }
         static parseURL() {
            const e = window.location.hash.slice(1),
               t = e.split("-"),
               i = t[t.length - 1],
               n = (i && /^\+?\d+$/.test(i) && parseInt(t.pop() || "1", 10)) || 1;
            return { hash: e, slug: t.join("-"), index: n };
         }
         static startFromUrl() {
            if (((w.hasSilentClose = !1), Le.getInstance() || !1 === Le.defaults.Hash)) return;
            const { hash: e, slug: t, index: i } = w.parseURL();
            if (!t) return;
            let n = document.querySelector(`[data-slug="${e}"]`);
            if ((n && n.dispatchEvent(new CustomEvent("click", { bubbles: !0, cancelable: !0 })), Le.getInstance()))
               return;
            const o = document.querySelectorAll(`[data-fancybox="${t}"]`);
            o.length &&
               ((n = o[i - 1]), n && n.dispatchEvent(new CustomEvent("click", { bubbles: !0, cancelable: !0 })));
         }
         static destroy() {
            window.removeEventListener("hashchange", b, !1);
         }
      }
      function x() {
         window.addEventListener("hashchange", b, !1),
            setTimeout(() => {
               w.startFromUrl();
            }, 500);
      }
      Object.defineProperty(w, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: {} }),
         Object.defineProperty(w, "hasSilentClose", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
         r &&
            (/complete|interactive|loaded/.test(document.readyState)
               ? x()
               : document.addEventListener("DOMContentLoaded", x));
      const S = (e, t = 1e4) => ((e = parseFloat(e + "") || 0), Math.round((e + Number.EPSILON) * t) / t),
         T = function (e) {
            if (!(e && e instanceof Element && e.offsetParent)) return !1;
            const t = e.scrollHeight > e.clientHeight,
               i = window.getComputedStyle(e).overflowY,
               n = -1 !== i.indexOf("hidden"),
               o = -1 !== i.indexOf("visible");
            return t && !n && !o;
         },
         C = function (e, t) {
            return !(!e || e === document.body || (t && e === t)) && (T(e) ? e : C(e.parentElement, t));
         },
         k = (e) => `${e || ""}`.split(" ").filter((e) => !!e),
         E = (e, t, i) => {
            k(t).forEach((t) => {
               e && e.classList.toggle(t, i || !1);
            });
         };
      class P {
         constructor(e) {
            Object.defineProperty(this, "pageX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
               Object.defineProperty(this, "pageY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
               Object.defineProperty(this, "clientX", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               Object.defineProperty(this, "clientY", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               Object.defineProperty(this, "id", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
               Object.defineProperty(this, "time", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
               Object.defineProperty(this, "nativePointer", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               (this.nativePointer = e),
               (this.pageX = e.pageX),
               (this.pageY = e.pageY),
               (this.clientX = e.clientX),
               (this.clientY = e.clientY),
               (this.id = self.Touch && e instanceof Touch ? e.identifier : -1),
               (this.time = Date.now());
         }
      }
      const A = { passive: !1 };
      class O {
         constructor(e, { start: t = () => !0, move: i = () => {}, end: n = () => {} }) {
            Object.defineProperty(this, "element", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
               Object.defineProperty(this, "startCallback", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               Object.defineProperty(this, "moveCallback", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               Object.defineProperty(this, "endCallback", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               Object.defineProperty(this, "currentPointers", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: [],
               }),
               Object.defineProperty(this, "startPointers", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: [],
               }),
               (this.element = e),
               (this.startCallback = t),
               (this.moveCallback = i),
               (this.endCallback = n);
            for (const e of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"])
               this[e] = this[e].bind(this);
            this.element.addEventListener("mousedown", this.onPointerStart, A),
               this.element.addEventListener("touchstart", this.onTouchStart, A),
               this.element.addEventListener("touchmove", this.onMove, A),
               this.element.addEventListener("touchend", this.onTouchEnd),
               this.element.addEventListener("touchcancel", this.onTouchEnd);
         }
         onPointerStart(e) {
            if (!e.buttons || 0 !== e.button) return;
            const t = new P(e);
            this.currentPointers.some((e) => e.id === t.id) ||
               (this.triggerPointerStart(t, e) &&
                  (window.addEventListener("mousemove", this.onMove),
                  window.addEventListener("mouseup", this.onPointerEnd),
                  window.addEventListener("blur", this.onWindowBlur)));
         }
         onTouchStart(e) {
            for (const t of Array.from(e.changedTouches || [])) this.triggerPointerStart(new P(t), e);
            window.addEventListener("blur", this.onWindowBlur);
         }
         onMove(e) {
            const t = this.currentPointers.slice(),
               i = "changedTouches" in e ? Array.from(e.changedTouches || []).map((e) => new P(e)) : [new P(e)],
               n = [];
            for (const e of i) {
               const t = this.currentPointers.findIndex((t) => t.id === e.id);
               t < 0 || (n.push(e), (this.currentPointers[t] = e));
            }
            n.length && this.moveCallback(e, this.currentPointers.slice(), t);
         }
         onPointerEnd(e) {
            (e.buttons > 0 && 0 !== e.button) ||
               (this.triggerPointerEnd(e, new P(e)),
               window.removeEventListener("mousemove", this.onMove),
               window.removeEventListener("mouseup", this.onPointerEnd),
               window.removeEventListener("blur", this.onWindowBlur));
         }
         onTouchEnd(e) {
            for (const t of Array.from(e.changedTouches || [])) this.triggerPointerEnd(e, new P(t));
         }
         triggerPointerStart(e, t) {
            return (
               !!this.startCallback(t, e, this.currentPointers.slice()) &&
               (this.currentPointers.push(e), this.startPointers.push(e), !0)
            );
         }
         triggerPointerEnd(e, t) {
            const i = this.currentPointers.findIndex((e) => e.id === t.id);
            i < 0 ||
               (this.currentPointers.splice(i, 1),
               this.startPointers.splice(i, 1),
               this.endCallback(e, t, this.currentPointers.slice()));
         }
         onWindowBlur() {
            this.clear();
         }
         clear() {
            for (; this.currentPointers.length; ) {
               const e = this.currentPointers[this.currentPointers.length - 1];
               this.currentPointers.splice(this.currentPointers.length - 1, 1),
                  this.startPointers.splice(this.currentPointers.length - 1, 1),
                  this.endCallback(
                     new Event("touchend", { bubbles: !0, cancelable: !0, clientX: e.clientX, clientY: e.clientY }),
                     e,
                     this.currentPointers.slice()
                  );
            }
         }
         stop() {
            this.element.removeEventListener("mousedown", this.onPointerStart, A),
               this.element.removeEventListener("touchstart", this.onTouchStart, A),
               this.element.removeEventListener("touchmove", this.onMove, A),
               this.element.removeEventListener("touchend", this.onTouchEnd),
               this.element.removeEventListener("touchcancel", this.onTouchEnd),
               window.removeEventListener("mousemove", this.onMove),
               window.removeEventListener("mouseup", this.onPointerEnd),
               window.removeEventListener("blur", this.onWindowBlur);
         }
      }
      function M(e, t) {
         return t ? Math.sqrt(Math.pow(t.clientX - e.clientX, 2) + Math.pow(t.clientY - e.clientY, 2)) : 0;
      }
      function L(e, t) {
         return t ? { clientX: (e.clientX + t.clientX) / 2, clientY: (e.clientY + t.clientY) / 2 } : e;
      }
      var D;
      !(function (e) {
         (e[(e.Init = 0)] = "Init"),
            (e[(e.Error = 1)] = "Error"),
            (e[(e.Ready = 2)] = "Ready"),
            (e[(e.Panning = 3)] = "Panning"),
            (e[(e.Mousemove = 4)] = "Mousemove"),
            (e[(e.Destroy = 5)] = "Destroy");
      })(D || (D = {}));
      const $ = ["a", "b", "c", "d", "e", "f"],
         z = {
            content: null,
            width: "auto",
            height: "auto",
            panMode: "drag",
            touch: !0,
            dragMinThreshold: 3,
            lockAxis: !1,
            mouseMoveFactor: 1,
            mouseMoveFriction: 0.12,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: "auto",
            minScale: 1,
            maxScale: 2,
            friction: 0.25,
            dragFriction: 0.35,
            decelFriction: 0.05,
            click: "toggleZoom",
            dblClick: !1,
            wheel: "zoom",
            wheelLimit: 7,
            spinner: !0,
            bounds: "auto",
            infinite: !1,
            rubberband: !0,
            bounce: !0,
            maxVelocity: 75,
            transformParent: !1,
            classes: {
               content: "f-panzoom__content",
               isLoading: "is-loading",
               canZoomIn: "can-zoom_in",
               canZoomOut: "can-zoom_out",
               isDraggable: "is-draggable",
               isDragging: "is-dragging",
               inFullscreen: "in-fullscreen",
               htmlHasFullscreen: "with-panzoom-in-fullscreen",
            },
            l10n: u,
         },
         j = (e, t) => {
            e &&
               k(t).forEach((t) => {
                  e.classList.remove(t);
               });
         },
         R = (e, t) => {
            e &&
               k(t).forEach((t) => {
                  e.classList.add(t);
               });
         },
         I = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
         H = 1e3,
         N = "mousemove",
         F = "drag",
         q = "content";
      let B = null,
         W = null;
      class _ extends v {
         get isTouchDevice() {
            return null === W && (W = window.matchMedia("(hover: none)").matches), W;
         }
         get isMobile() {
            return null === B && (B = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), B;
         }
         get panMode() {
            return this.options.panMode !== N || this.isTouchDevice ? F : N;
         }
         get panOnlyZoomed() {
            const e = this.options.panOnlyZoomed;
            return "auto" === e ? this.isTouchDevice : e;
         }
         get isInfinite() {
            return this.option("infinite");
         }
         get angle() {
            return (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0;
         }
         get targetAngle() {
            return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0;
         }
         get scale() {
            const { a: e, b: t } = this.current;
            return Math.sqrt(e * e + t * t) || 1;
         }
         get targetScale() {
            const { a: e, b: t } = this.target;
            return Math.sqrt(e * e + t * t) || 1;
         }
         get minScale() {
            return this.option("minScale") || 1;
         }
         get fullScale() {
            const { contentRect: e } = this;
            return e.fullWidth / e.fitWidth || 1;
         }
         get maxScale() {
            return this.fullScale * (this.option("maxScale") || 1) || 1;
         }
         get coverScale() {
            const { containerRect: e, contentRect: t } = this,
               i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1;
            return Math.min(this.fullScale, i);
         }
         get isScaling() {
            return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
         }
         get isContentLoading() {
            const e = this.content;
            return !!(e && e instanceof HTMLImageElement) && !e.complete;
         }
         get isResting() {
            if (this.isBouncingX || this.isBouncingY) return !1;
            for (const e of $) {
               const t = "e" == e || "f" === e ? 0.001 : 1e-5;
               if (Math.abs(this.target[e] - this.current[e]) > t) return !1;
            }
            return !(!this.ignoreBounds && !this.checkBounds().inBounds);
         }
         constructor(e, t = {}, i = {}) {
            var o;
            if (
               (super(t),
               Object.defineProperty(this, "pointerTracker", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "resizeObserver", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "updateTimer", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "clickTimer", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "rAF", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "isTicking", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
               Object.defineProperty(this, "friction", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "ignoreBounds", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: !1,
               }),
               Object.defineProperty(this, "isBouncingX", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: !1,
               }),
               Object.defineProperty(this, "isBouncingY", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: !1,
               }),
               Object.defineProperty(this, "clicks", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "trackingPoints", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: [],
               }),
               Object.defineProperty(this, "pwt", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "cwd", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "pmme", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
               Object.defineProperty(this, "state", { enumerable: !0, configurable: !0, writable: !0, value: D.Init }),
               Object.defineProperty(this, "isDragging", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
               Object.defineProperty(this, "container", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               Object.defineProperty(this, "content", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               Object.defineProperty(this, "spinner", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "containerRect", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
               }),
               Object.defineProperty(this, "contentRect", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: {
                     top: 0,
                     right: 0,
                     bottom: 0,
                     left: 0,
                     fullWidth: 0,
                     fullHeight: 0,
                     fitWidth: 0,
                     fitHeight: 0,
                     width: 0,
                     height: 0,
                  },
               }),
               Object.defineProperty(this, "dragStart", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
               }),
               Object.defineProperty(this, "dragOffset", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: { x: 0, y: 0, time: 0 },
               }),
               Object.defineProperty(this, "current", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: Object.assign({}, I),
               }),
               Object.defineProperty(this, "target", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: Object.assign({}, I),
               }),
               Object.defineProperty(this, "velocity", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
               }),
               Object.defineProperty(this, "lockedAxis", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
               !e)
            )
               throw new Error("Container Element Not Found");
            (this.container = e),
               this.initContent(),
               this.attachPlugins(Object.assign(Object.assign({}, _.Plugins), i)),
               this.emit("init");
            const s = this.content;
            if (
               (s.addEventListener("load", this.onLoad),
               s.addEventListener("error", this.onError),
               this.isContentLoading)
            ) {
               if (this.option("spinner")) {
                  e.classList.add(this.cn("isLoading"));
                  const t = n(d);
                  !e.contains(s) || s.parentElement instanceof HTMLPictureElement
                     ? (this.spinner = e.appendChild(t))
                     : (this.spinner =
                          (null === (o = s.parentElement) || void 0 === o ? void 0 : o.insertBefore(t, s)) || null);
               }
               this.emit("beforeLoad");
            } else
               queueMicrotask(() => {
                  this.enable();
               });
         }
         initContent() {
            const { container: e } = this,
               t = this.cn(q);
            let i = this.option(q) || e.querySelector(`.${t}`);
            if (
               (i || ((i = e.querySelector("img,picture") || e.firstElementChild), i && R(i, t)),
               i instanceof HTMLPictureElement && (i = i.querySelector("img")),
               !i)
            )
               throw new Error("No content found");
            this.content = i;
         }
         onLoad() {
            this.spinner && (this.spinner.remove(), (this.spinner = null)),
               this.option("spinner") && this.container.classList.remove(this.cn("isLoading")),
               this.emit("afterLoad"),
               this.state === D.Init ? this.enable() : this.updateMetrics();
         }
         onError() {
            this.state !== D.Destroy &&
               (this.spinner && (this.spinner.remove(), (this.spinner = null)),
               this.stop(),
               this.detachEvents(),
               (this.state = D.Error),
               this.emit("error"));
         }
         attachObserver() {
            var e;
            const t = () =>
               Math.abs(this.containerRect.width - this.container.getBoundingClientRect().width) > 0.1 ||
               Math.abs(this.containerRect.height - this.container.getBoundingClientRect().height) > 0.1;
            this.resizeObserver ||
               void 0 === window.ResizeObserver ||
               (this.resizeObserver = new ResizeObserver(() => {
                  this.updateTimer ||
                     (t()
                        ? (this.onResize(),
                          this.isMobile &&
                             (this.updateTimer = setTimeout(() => {
                                t() && this.onResize(), (this.updateTimer = null);
                             }, 500)))
                        : this.updateTimer && (clearTimeout(this.updateTimer), (this.updateTimer = null)));
               })),
               null === (e = this.resizeObserver) || void 0 === e || e.observe(this.container);
         }
         detachObserver() {
            var e;
            null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
         }
         attachEvents() {
            const { container: e } = this;
            e.addEventListener("click", this.onClick, { passive: !1, capture: !1 }),
               e.addEventListener("wheel", this.onWheel, { passive: !1 }),
               (this.pointerTracker = new O(e, {
                  start: this.onPointerDown,
                  move: this.onPointerMove,
                  end: this.onPointerUp,
               })),
               document.addEventListener(N, this.onMouseMove);
         }
         detachEvents() {
            var e;
            const { container: t } = this;
            t.removeEventListener("click", this.onClick, { passive: !1, capture: !1 }),
               t.removeEventListener("wheel", this.onWheel, { passive: !1 }),
               null === (e = this.pointerTracker) || void 0 === e || e.stop(),
               (this.pointerTracker = null),
               document.removeEventListener(N, this.onMouseMove),
               document.removeEventListener("keydown", this.onKeydown, !0),
               this.clickTimer && (clearTimeout(this.clickTimer), (this.clickTimer = null)),
               this.updateTimer && (clearTimeout(this.updateTimer), (this.updateTimer = null));
         }
         animate() {
            const e = this.friction;
            this.setTargetForce();
            const t = this.option("maxVelocity");
            for (const i of $)
               e
                  ? ((this.velocity[i] *= 1 - e),
                    t && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], t), -1 * t)),
                    (this.current[i] += this.velocity[i]))
                  : (this.current[i] = this.target[i]);
            this.setTransform(),
               this.setEdgeForce(),
               !this.isResting || this.isDragging
                  ? (this.rAF = requestAnimationFrame(() => this.animate()))
                  : this.stop("current");
         }
         setTargetForce() {
            for (const e of $)
               ("e" === e && this.isBouncingX) ||
                  ("f" === e && this.isBouncingY) ||
                  (this.velocity[e] = (1 / (1 - this.friction) - 1) * (this.target[e] - this.current[e]));
         }
         checkBounds(e = 0, t = 0) {
            const { current: i } = this,
               n = i.e + e,
               o = i.f + t,
               s = this.getBounds(),
               { x: r, y: a } = s,
               l = r.min,
               c = r.max,
               d = a.min,
               u = a.max;
            let h = 0,
               p = 0;
            return (
               l !== 1 / 0 && n < l ? (h = l - n) : c !== 1 / 0 && n > c && (h = c - n),
               d !== 1 / 0 && o < d ? (p = d - o) : u !== 1 / 0 && o > u && (p = u - o),
               Math.abs(h) < 0.001 && (h = 0),
               Math.abs(p) < 0.001 && (p = 0),
               Object.assign(Object.assign({}, s), { xDiff: h, yDiff: p, inBounds: !h && !p })
            );
         }
         clampTargetBounds() {
            const { target: e } = this,
               { x: t, y: i } = this.getBounds();
            t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)),
               t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)),
               i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)),
               i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max));
         }
         calculateContentDim(e = this.current) {
            const { content: t, contentRect: i } = this,
               { fitWidth: n, fitHeight: o, fullWidth: s, fullHeight: r } = i;
            let a = s,
               l = r;
            if (this.option("zoom") || 0 !== this.angle) {
               const i = !(
                     t instanceof HTMLImageElement ||
                     ("none" !== window.getComputedStyle(t).maxWidth && "none" !== window.getComputedStyle(t).maxHeight)
                  ),
                  c = i ? s : n,
                  d = i ? r : o,
                  u = this.getMatrix(e),
                  h = new DOMPoint(0, 0).matrixTransform(u),
                  p = new DOMPoint(0 + c, 0).matrixTransform(u),
                  f = new DOMPoint(0 + c, 0 + d).matrixTransform(u),
                  g = new DOMPoint(0, 0 + d).matrixTransform(u),
                  m = Math.abs(f.x - h.x),
                  v = Math.abs(f.y - h.y),
                  y = Math.abs(g.x - p.x),
                  b = Math.abs(g.y - p.y);
               (a = Math.max(m, y)), (l = Math.max(v, b));
            }
            return { contentWidth: a, contentHeight: l };
         }
         setEdgeForce() {
            if (this.ignoreBounds || this.isDragging || this.panMode === N || this.targetScale < this.scale)
               return (this.isBouncingX = !1), void (this.isBouncingY = !1);
            const { target: e } = this,
               { x: t, y: i, xDiff: n, yDiff: o } = this.checkBounds(),
               s = this.option("maxVelocity");
            let r = this.velocity.e,
               a = this.velocity.f;
            0 !== n
               ? ((this.isBouncingX = !0),
                 n * r <= 0
                    ? (r += 0.14 * n)
                    : ((r = 0.14 * n),
                      t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)),
                      t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))),
                 s && (r = Math.max(Math.min(r, s), -1 * s)))
               : (this.isBouncingX = !1),
               0 !== o
                  ? ((this.isBouncingY = !0),
                    o * a <= 0
                       ? (a += 0.14 * o)
                       : ((a = 0.14 * o),
                         i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)),
                         i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))),
                    s && (a = Math.max(Math.min(a, s), -1 * s)))
                  : (this.isBouncingY = !1),
               this.isBouncingX && (this.velocity.e = r),
               this.isBouncingY && (this.velocity.f = a);
         }
         enable() {
            const { content: e } = this,
               t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
            for (const e of $) this.current[e] = this.target[e] = t[e];
            this.updateMetrics(),
               this.attachObserver(),
               this.attachEvents(),
               (this.state = D.Ready),
               this.emit("ready");
         }
         onClick(e) {
            var t;
            this.isDragging &&
               (null === (t = this.pointerTracker) || void 0 === t || t.clear(),
               (this.trackingPoints = []),
               this.startDecelAnim());
            const i = e.target;
            if (!i || e.defaultPrevented) return;
            if (i && i.hasAttribute("disabled")) return e.preventDefault(), void e.stopPropagation();
            if (
               (() => {
                  const e = window.getSelection();
                  return e && "Range" === e.type;
               })() &&
               !i.closest("button")
            )
               return;
            const n = i.closest("[data-panzoom-action]"),
               s = i.closest("[data-panzoom-change]"),
               r = n || s,
               a = r && o(r) ? r.dataset : null;
            if (a) {
               const t = a.panzoomChange,
                  i = a.panzoomAction;
               if (((t || i) && e.preventDefault(), t)) {
                  let i = {};
                  try {
                     i = JSON.parse(t);
                  } catch (e) {
                     console && console.warn("The given data was not valid JSON");
                  }
                  return void this.applyChange(i);
               }
               if (i) return void (this[i] && this[i]());
            }
            if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
               return e.preventDefault(), void e.stopPropagation();
            const l = this.content.getBoundingClientRect();
            if (
               this.dragStart.time &&
               !this.canZoomOut() &&
               (Math.abs(l.x - this.dragStart.x) > 2 || Math.abs(l.y - this.dragStart.y) > 2)
            )
               return;
            this.dragStart.time = 0;
            const c = (t) => {
                  this.option("zoom") &&
                     t &&
                     "string" == typeof t &&
                     /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(t) &&
                     "function" == typeof this[t] &&
                     (e.preventDefault(), this[t]({ event: e }));
               },
               d = this.option("click", e),
               u = this.option("dblClick", e);
            u
               ? (this.clicks++,
                 1 == this.clicks &&
                    (this.clickTimer = setTimeout(() => {
                       1 === this.clicks
                          ? (this.emit("click", e), !e.defaultPrevented && d && c(d))
                          : (this.emit("dblClick", e), e.defaultPrevented || c(u)),
                          (this.clicks = 0),
                          (this.clickTimer = null);
                    }, 350)))
               : (this.emit("click", e), !e.defaultPrevented && d && c(d));
         }
         addTrackingPoint(e) {
            const t = this.trackingPoints.filter((e) => e.time > Date.now() - 100);
            t.push(e), (this.trackingPoints = t);
         }
         onPointerDown(e, t, i) {
            var n;
            (this.pwt = 0), (this.dragOffset = { x: 0, y: 0, time: 0 }), (this.trackingPoints = []);
            const o = this.content.getBoundingClientRect();
            if (((this.dragStart = { x: o.x, y: o.y, top: o.top, left: o.left, time: Date.now() }), this.clickTimer))
               return !1;
            if (this.panMode === N && this.targetScale > 1) return e.preventDefault(), e.stopPropagation(), !1;
            if (!i.length) {
               const t = e.composedPath()[0];
               if (
                  ["A", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(t.nodeName) ||
                  t.closest("[contenteditable]") ||
                  t.closest("[data-selectable]") ||
                  t.closest("[data-panzoom-change]") ||
                  t.closest("[data-panzoom-action]")
               )
                  return !1;
               null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
            }
            if ("mousedown" === e.type) e.preventDefault();
            else if (Math.abs(this.velocity.a) > 0.3) return !1;
            return (
               (this.target.e = this.current.e),
               (this.target.f = this.current.f),
               this.stop(),
               this.isDragging || ((this.isDragging = !0), this.addTrackingPoint(t), this.emit("touchStart", e)),
               !0
            );
         }
         onPointerMove(e, t, i) {
            if (!1 === this.option("touch", e)) return;
            if (!this.isDragging) return;
            if (t.length < 2 && this.panOnlyZoomed && S(this.targetScale) <= S(this.minScale)) return;
            if ((this.emit("touchMove", e), e.defaultPrevented)) return;
            this.addTrackingPoint(t[0]);
            const { content: n } = this,
               o = L(i[0], i[1]),
               s = L(t[0], t[1]);
            let r = 0,
               a = 0;
            if (t.length > 1) {
               const e = n.getBoundingClientRect();
               (r = o.clientX - e.left - 0.5 * e.width), (a = o.clientY - e.top - 0.5 * e.height);
            }
            const l = M(i[0], i[1]),
               c = M(t[0], t[1]);
            let d = l ? c / l : 1,
               u = s.clientX - o.clientX,
               h = s.clientY - o.clientY;
            (this.dragOffset.x += u),
               (this.dragOffset.y += h),
               (this.dragOffset.time = Date.now() - this.dragStart.time);
            let p = S(this.targetScale) === S(this.minScale) && this.option("lockAxis");
            if (p && !this.lockedAxis)
               if ("xy" === p || "y" === p || "touchmove" === e.type) {
                  if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
                     return void e.preventDefault();
                  const t = Math.abs((180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI);
                  (this.lockedAxis = t > 45 && t < 135 ? "y" : "x"),
                     (this.dragOffset.x = 0),
                     (this.dragOffset.y = 0),
                     (u = 0),
                     (h = 0);
               } else this.lockedAxis = p;
            if (
               (C(e.target, this.content) && ((p = "x"), (this.dragOffset.y = 0)),
               p && "xy" !== p && this.lockedAxis !== p && S(this.targetScale) === S(this.minScale))
            )
               return;
            e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
            const f = this.checkBounds(u, h);
            this.option("rubberband")
               ? ("x" !== this.isInfinite &&
                    ((f.xDiff > 0 && u < 0) || (f.xDiff < 0 && u > 0)) &&
                    (u *= Math.max(0, 0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * f.xDiff))),
                 "y" !== this.isInfinite &&
                    ((f.yDiff > 0 && h < 0) || (f.yDiff < 0 && h > 0)) &&
                    (h *= Math.max(0, 0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * f.yDiff))))
               : (f.xDiff && (u = 0), f.yDiff && (h = 0));
            const g = this.targetScale,
               m = this.minScale,
               v = this.maxScale;
            g < 0.5 * m && (d = Math.max(d, m)),
               g > 1.5 * v && (d = Math.min(d, v)),
               "y" === this.lockedAxis && S(g) === S(m) && (u = 0),
               "x" === this.lockedAxis && S(g) === S(m) && (h = 0),
               this.applyChange({
                  originX: r,
                  originY: a,
                  panX: u,
                  panY: h,
                  scale: d,
                  friction: this.option("dragFriction"),
                  ignoreBounds: !0,
               });
         }
         onPointerUp(e, t, i) {
            if (i.length) return (this.dragOffset.x = 0), (this.dragOffset.y = 0), void (this.trackingPoints = []);
            this.container.classList.remove(this.cn("isDragging")),
               this.isDragging &&
                  (this.addTrackingPoint(t),
                  this.panOnlyZoomed &&
                     this.contentRect.width - this.contentRect.fitWidth < 1 &&
                     this.contentRect.height - this.contentRect.fitHeight < 1 &&
                     (this.trackingPoints = []),
                  C(e.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []),
                  this.emit("touchEnd", e),
                  (this.isDragging = !1),
                  (this.lockedAxis = !1),
                  this.state !== D.Destroy && (e.defaultPrevented || this.startDecelAnim()));
         }
         startDecelAnim() {
            const e = this.isScaling;
            this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
               (this.isBouncingX = !1),
               (this.isBouncingY = !1);
            for (const e of $) this.velocity[e] = 0;
            (this.target.e = this.current.e),
               (this.target.f = this.current.f),
               j(this.container, "is-scaling"),
               j(this.container, "is-animating"),
               (this.isTicking = !1);
            const { trackingPoints: t } = this,
               i = t[0],
               n = t[t.length - 1];
            let o = 0,
               s = 0,
               r = 0;
            n && i && ((o = n.clientX - i.clientX), (s = n.clientY - i.clientY), (r = n.time - i.time));
            let a = 0,
               l = 0,
               c = 0,
               d = 0,
               u = this.option("decelFriction");
            const h = this.targetScale;
            if (r > 0) {
               (c = Math.abs(o) > 3 ? o / (r / 30) : 0), (d = Math.abs(s) > 3 ? s / (r / 30) : 0);
               const e = this.option("maxVelocity");
               e && ((c = Math.max(Math.min(c, e), -1 * e)), (d = Math.max(Math.min(d, e), -1 * e)));
            }
            c && (a = c / (1 / (1 - u) - 1)),
               d && (l = d / (1 / (1 - u) - 1)),
               ("y" === this.option("lockAxis") ||
                  ("xy" === this.option("lockAxis") && "y" === this.lockedAxis && S(h) === this.minScale)) &&
                  (a = c = 0),
               ("x" === this.option("lockAxis") ||
                  ("xy" === this.option("lockAxis") && "x" === this.lockedAxis && S(h) === this.minScale)) &&
                  (l = d = 0);
            const p = this.dragOffset.x,
               f = this.dragOffset.y,
               g = this.option("dragMinThreshold") || 0;
            Math.abs(p) < g && Math.abs(f) < g && ((a = l = 0), (c = d = 0)),
               (h < this.minScale - 1e-5 || h > this.maxScale + 1e-5 || (e && !a && !l)) && (u = 0.35),
               this.applyChange({ panX: a, panY: l, friction: u }),
               this.emit("decel", c, d, p, f);
         }
         onWheel(e) {
            var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (e, t) {
               return Math.abs(t) > Math.abs(e) ? t : e;
            });
            const i = Math.max(-1, Math.min(1, t));
            if ((this.emit("wheel", e, i), this.panMode === N)) return;
            if (e.defaultPrevented) return;
            const n = this.option("wheel");
            "pan" === n
               ? (e.preventDefault(),
                 (this.panOnlyZoomed && !this.canZoomOut()) ||
                    this.applyChange({ panX: 2 * -e.deltaX, panY: 2 * -e.deltaY, bounce: !1 }))
               : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(e);
         }
         onMouseMove(e) {
            this.panWithMouse(e);
         }
         onKeydown(e) {
            "Escape" === e.key && this.toggleFS();
         }
         onResize() {
            this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
         }
         setTransform() {
            this.emit("beforeTransform");
            const { current: e, target: t, content: i, contentRect: n } = this,
               o = Object.assign({}, I);
            for (const i of $) {
               const n = "e" == i || "f" === i ? H : 1e5;
               (o[i] = S(e[i], n)), Math.abs(t[i] - e[i]) < ("e" == i || "f" === i ? 0.51 : 0.001) && (e[i] = t[i]);
            }
            let { a: s, b: r, c: a, d: l, e: c, f: d } = o,
               u = `matrix(${s}, ${r}, ${a}, ${l}, ${c}, ${d})`,
               h = i.parentElement instanceof HTMLPictureElement ? i.parentElement : i;
            if ((this.option("transformParent") && (h = h.parentElement || h), h.style.transform === u)) return;
            h.style.transform = u;
            const { contentWidth: p, contentHeight: f } = this.calculateContentDim();
            (n.width = p), (n.height = f), this.emit("afterTransform");
         }
         updateMetrics(e = !1) {
            if (!this || this.state === D.Destroy) return;
            if (this.isContentLoading) return;
            const { container: t, content: i } = this,
               n = i instanceof HTMLImageElement,
               o = t.getBoundingClientRect(),
               s = getComputedStyle(this.container),
               r = o.width,
               a = o.height,
               l = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom),
               c = r - (parseFloat(s.paddingLeft) + parseFloat(s.paddingRight)),
               d = a - l;
            this.containerRect = { width: r, height: a, innerWidth: c, innerHeight: d };
            let u = this.option("width") || "auto",
               h = this.option("height") || "auto";
            "auto" === u &&
               (u =
                  parseFloat(i.dataset.width || "") ||
                  ((e) => {
                     let t = 0;
                     return (
                        (t =
                           e instanceof HTMLImageElement
                              ? e.naturalWidth
                              : e instanceof SVGElement
                              ? e.width.baseVal.value
                              : Math.max(e.offsetWidth, e.scrollWidth)),
                        t || 0
                     );
                  })(i)),
               "auto" === h &&
                  (h =
                     parseFloat(i.dataset.height || "") ||
                     ((e) => {
                        let t = 0;
                        return (
                           (t =
                              e instanceof HTMLImageElement
                                 ? e.naturalHeight
                                 : e instanceof SVGElement
                                 ? e.height.baseVal.value
                                 : Math.max(e.offsetHeight, e.scrollHeight)),
                           t || 0
                        );
                     })(i));
            let p = i.parentElement instanceof HTMLPictureElement ? i.parentElement : i;
            this.option("transformParent") && (p = p.parentElement || p);
            const f = p.getAttribute("style") || "";
            p.style.setProperty("transform", "none", "important"),
               n && ((p.style.width = ""), (p.style.height = "")),
               p.offsetHeight;
            const g = i.getBoundingClientRect();
            let m = g.width,
               v = g.height,
               y = 0,
               b = 0;
            n &&
               (Math.abs(u - m) > 1 || Math.abs(h - v) > 1) &&
               ({
                  width: m,
                  height: v,
                  top: y,
                  left: b,
               } = ((e, t, i, n) => {
                  const o = i / n;
                  return (
                     o > e / t ? ((i = e), (n = e / o)) : ((i = t * o), (n = t)),
                     { width: i, height: n, top: 0.5 * (t - n), left: 0.5 * (e - i) }
                  );
               })(m, v, u, h)),
               (this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
                  top: g.top - o.top + y,
                  bottom: o.bottom - g.bottom + y,
                  left: g.left - o.left + b,
                  right: o.right - g.right + b,
                  fitWidth: m,
                  fitHeight: v,
                  width: m,
                  height: v,
                  fullWidth: u,
                  fullHeight: h,
               })),
               (p.style.cssText = f),
               n && ((p.style.width = `${m}px`), (p.style.height = `${v}px`)),
               this.setTransform(),
               !0 !== e && this.emit("refresh"),
               this.ignoreBounds ||
                  (S(this.targetScale) < S(this.minScale)
                     ? this.zoomTo(this.minScale, { friction: 0 })
                     : this.targetScale > this.maxScale
                     ? this.zoomTo(this.maxScale, { friction: 0 })
                     : this.state === D.Init || this.checkBounds().inBounds || this.requestTick()),
               this.updateControls();
         }
         getBounds() {
            const e = this.option("bounds");
            if ("auto" !== e) return e;
            const { contentWidth: t, contentHeight: i } = this.calculateContentDim(this.target);
            let n = 0,
               o = 0,
               s = 0,
               r = 0;
            const a = this.option("infinite");
            if (!0 === a || (this.lockedAxis && a === this.lockedAxis))
               (n = -1 / 0), (s = 1 / 0), (o = -1 / 0), (r = 1 / 0);
            else {
               let { containerRect: e, contentRect: a } = this,
                  l = S(this.contentRect.fitWidth * this.targetScale, H),
                  c = S(this.contentRect.fitHeight * this.targetScale, H),
                  { innerWidth: d, innerHeight: u } = e;
               if (
                  (this.containerRect.width === l && (d = e.width),
                  this.containerRect.width === c && (u = e.height),
                  t > d)
               ) {
                  (s = 0.5 * (t - d)), (n = -1 * s);
                  let e = 0.5 * (a.right - a.left);
                  (n += e), (s += e);
               }
               if (
                  (this.contentRect.fitWidth > d &&
                     t < d &&
                     ((n -= 0.5 * (this.contentRect.fitWidth - d)), (s -= 0.5 * (this.contentRect.fitWidth - d))),
                  i > u)
               ) {
                  (r = 0.5 * (i - u)), (o = -1 * r);
                  let e = 0.5 * (a.bottom - a.top);
                  (o += e), (r += e);
               }
               this.contentRect.fitHeight > u &&
                  i < u &&
                  ((n -= 0.5 * (this.contentRect.fitHeight - u)), (s -= 0.5 * (this.contentRect.fitHeight - u)));
            }
            return { x: { min: n, max: s }, y: { min: o, max: r } };
         }
         updateControls() {
            const e = this,
               t = e.container,
               {
                  panMode: i,
                  contentRect: n,
                  fullScale: o,
                  targetScale: s,
                  coverScale: r,
                  maxScale: a,
                  minScale: l,
               } = e;
            let c =
                  {
                     toggleMax: s - l < 0.5 * (a - l) ? a : l,
                     toggleCover: s - l < 0.5 * (r - l) ? r : l,
                     toggleZoom: s - l < 0.5 * (o - l) ? o : l,
                  }[e.option("click") || ""] || l,
               d = e.canZoomIn(),
               u = e.canZoomOut(),
               h = u && i === F;
            S(s) < S(l) && !this.panOnlyZoomed && (h = !0),
               (S(n.width, 1) > S(n.fitWidth, 1) || S(n.height, 1) > S(n.fitHeight, 1)) && (h = !0),
               S(n.width * s, 1) < S(n.fitWidth, 1) && (h = !1),
               i === N && (h = !1);
            let p = d && S(c) > S(s),
               f = !p && !h && u && S(c) < S(s);
            E(t, this.cn("canZoomIn"), p), E(t, this.cn("canZoomOut"), f), E(t, this.cn("isDraggable"), h);
            for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))
               d
                  ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
                  : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
            for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))
               u
                  ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
                  : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
            for (const e of t.querySelectorAll(
               '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
            )) {
               d || u
                  ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
                  : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
               const t = e.querySelector("g");
               t && (t.style.display = d ? "" : "none");
            }
         }
         panTo({
            x: e = this.target.e,
            y: t = this.target.f,
            scale: i = this.targetScale,
            friction: n = this.option("friction"),
            angle: o = 0,
            originX: s = 0,
            originY: r = 0,
            flipX: a = !1,
            flipY: l = !1,
            ignoreBounds: c = !1,
         }) {
            this.state !== D.Destroy &&
               this.applyChange({
                  panX: e - this.target.e,
                  panY: t - this.target.f,
                  scale: i / this.targetScale,
                  angle: o,
                  originX: s,
                  originY: r,
                  friction: n,
                  flipX: a,
                  flipY: l,
                  ignoreBounds: c,
               });
         }
         applyChange({
            panX: e = 0,
            panY: t = 0,
            scale: i = 1,
            angle: n = 0,
            originX: o = -this.current.e,
            originY: s = -this.current.f,
            friction: r = this.option("friction"),
            flipX: a = !1,
            flipY: l = !1,
            ignoreBounds: c = !1,
            bounce: d = this.option("bounce"),
         }) {
            if (this.state === D.Destroy) return;
            this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
               (this.friction = r || 0),
               (this.ignoreBounds = c);
            const { current: u } = this,
               h = u.e,
               p = u.f,
               f = this.getMatrix(this.target);
            let g = new DOMMatrix().translate(h, p).translate(o, s).translate(e, t);
            if (this.option("zoom")) {
               if (!c) {
                  const e = this.targetScale,
                     t = this.minScale,
                     n = this.maxScale;
                  e * i < t && (i = t / e), e * i > n && (i = n / e);
               }
               g = g.scale(i);
            }
            (g = g.translate(-o, -s).translate(-h, -p).multiply(f)),
               n && (g = g.rotate(n)),
               a && (g = g.scale(-1, 1)),
               l && (g = g.scale(1, -1));
            for (const e of $)
               "e" !== e && "f" !== e && (g[e] > this.minScale + 1e-5 || g[e] < this.minScale - 1e-5)
                  ? (this.target[e] = g[e])
                  : (this.target[e] = S(g[e], H));
            (this.targetScale < this.scale || Math.abs(i - 1) > 0.1 || this.panMode === N || !1 === d) &&
               !c &&
               this.clampTargetBounds(),
               this.isResting || ((this.state = D.Panning), this.requestTick());
         }
         stop(e = !1) {
            if (this.state === D.Init || this.state === D.Destroy) return;
            const t = this.isTicking;
            this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
               (this.isBouncingX = !1),
               (this.isBouncingY = !1);
            for (const t of $)
               (this.velocity[t] = 0),
                  "current" === e
                     ? (this.current[t] = this.target[t])
                     : "target" === e && (this.target[t] = this.current[t]);
            this.setTransform(),
               j(this.container, "is-scaling"),
               j(this.container, "is-animating"),
               (this.isTicking = !1),
               (this.state = D.Ready),
               t && (this.emit("endAnimation"), this.updateControls());
         }
         requestTick() {
            this.isTicking ||
               (this.emit("startAnimation"),
               this.updateControls(),
               R(this.container, "is-animating"),
               this.isScaling && R(this.container, "is-scaling")),
               (this.isTicking = !0),
               this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
         }
         panWithMouse(e, t = this.option("mouseMoveFriction")) {
            if (((this.pmme = e), this.panMode !== N || !e)) return;
            if (S(this.targetScale) <= S(this.minScale)) return;
            this.emit("mouseMove", e);
            const { container: i, containerRect: n, contentRect: o } = this,
               s = n.width,
               r = n.height,
               a = i.getBoundingClientRect(),
               l = (e.clientX || 0) - a.left,
               c = (e.clientY || 0) - a.top;
            let { contentWidth: d, contentHeight: u } = this.calculateContentDim(this.target);
            const h = this.option("mouseMoveFactor");
            h > 1 && (d !== s && (d *= h), u !== r && (u *= h));
            let p = 0.5 * (d - s) - (((l / s) * 100) / 100) * (d - s);
            p += 0.5 * (o.right - o.left);
            let f = 0.5 * (u - r) - (((c / r) * 100) / 100) * (u - r);
            (f += 0.5 * (o.bottom - o.top)),
               this.applyChange({ panX: p - this.target.e, panY: f - this.target.f, friction: t });
         }
         zoomWithWheel(e) {
            if (this.state === D.Destroy || this.state === D.Init) return;
            const t = Date.now();
            if (t - this.pwt < 45) return void e.preventDefault();
            this.pwt = t;
            var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (e, t) {
               return Math.abs(t) > Math.abs(e) ? t : e;
            });
            const n = Math.max(-1, Math.min(1, i)),
               { targetScale: o, maxScale: s, minScale: r } = this;
            let a = (o * (100 + 45 * n)) / 100;
            S(a) < S(r) && S(o) <= S(r)
               ? ((this.cwd += Math.abs(n)), (a = r))
               : S(a) > S(s) && S(o) >= S(s)
               ? ((this.cwd += Math.abs(n)), (a = s))
               : ((this.cwd = 0), (a = Math.max(Math.min(a, s), r))),
               this.cwd > this.option("wheelLimit") ||
                  (e.preventDefault(), S(a) !== S(o) && this.zoomTo(a, { event: e }));
         }
         canZoomIn() {
            return (
               this.option("zoom") &&
               (S(this.contentRect.width, 1) < S(this.contentRect.fitWidth, 1) ||
                  S(this.targetScale) < S(this.maxScale))
            );
         }
         canZoomOut() {
            return this.option("zoom") && S(this.targetScale) > S(this.minScale);
         }
         zoomIn(e = 1.25, t) {
            this.zoomTo(this.targetScale * e, t);
         }
         zoomOut(e = 0.8, t) {
            this.zoomTo(this.targetScale * e, t);
         }
         zoomToFit(e) {
            this.zoomTo("fit", e);
         }
         zoomToCover(e) {
            this.zoomTo("cover", e);
         }
         zoomToFull(e) {
            this.zoomTo("full", e);
         }
         zoomToMax(e) {
            this.zoomTo("max", e);
         }
         toggleZoom(e) {
            this.zoomTo(this.targetScale - this.minScale < 0.5 * (this.fullScale - this.minScale) ? "full" : "fit", e);
         }
         toggleMax(e) {
            this.zoomTo(this.targetScale - this.minScale < 0.5 * (this.maxScale - this.minScale) ? "max" : "fit", e);
         }
         toggleCover(e) {
            this.zoomTo(
               this.targetScale - this.minScale < 0.5 * (this.coverScale - this.minScale) ? "cover" : "fit",
               e
            );
         }
         iterateZoom(e) {
            this.zoomTo("next", e);
         }
         zoomTo(e = 1, { friction: t = "auto", originX: i = 0, originY: n = 0, event: o } = {}) {
            if (this.isContentLoading || this.state === D.Destroy) return;
            const { targetScale: s } = this;
            this.stop();
            let r = 1;
            if ((this.panMode === N && (o = this.pmme || o), o)) {
               const e = this.content.getBoundingClientRect(),
                  t = o.clientX || 0,
                  s = o.clientY || 0;
               (i = t - e.left - 0.5 * e.width), (n = s - e.top - 0.5 * e.height);
            }
            const a = this.fullScale,
               l = this.maxScale;
            let c = this.coverScale;
            "number" == typeof e
               ? (r = e / s)
               : ("next" === e && (a - c < 0.2 && (c = a), (e = s < a - 1e-5 ? "full" : s < l - 1e-5 ? "max" : "fit")),
                 (r = "full" === e ? a / s || 1 : "cover" === e ? c / s || 1 : "max" === e ? l / s || 1 : 1 / s || 1)),
               (t = "auto" === t ? (r > 1 ? 0.15 : 0.25) : t),
               this.applyChange({ scale: r, originX: i, originY: n, friction: t }),
               o && this.panMode === N && this.panWithMouse(o, t);
         }
         rotateCCW() {
            this.applyChange({ angle: -90 });
         }
         rotateCW() {
            this.applyChange({ angle: 90 });
         }
         flipX() {
            this.applyChange({ flipX: !0 });
         }
         flipY() {
            this.applyChange({ flipY: !0 });
         }
         fitX() {
            this.stop("target");
            const { containerRect: e, contentRect: t, target: i } = this;
            this.applyChange({
               panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
               panY: 0.5 * e.height - (t.top + 0.5 * t.fitHeight) - i.f,
               scale: e.width / t.fitWidth / this.targetScale,
               originX: 0,
               originY: 0,
               ignoreBounds: !0,
            });
         }
         fitY() {
            this.stop("target");
            const { containerRect: e, contentRect: t, target: i } = this;
            this.applyChange({
               panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
               panY: 0.5 * e.innerHeight - (t.top + 0.5 * t.fitHeight) - i.f,
               scale: e.height / t.fitHeight / this.targetScale,
               originX: 0,
               originY: 0,
               ignoreBounds: !0,
            });
         }
         toggleFS() {
            const { container: e } = this,
               t = this.cn("inFullscreen"),
               i = this.cn("htmlHasFullscreen");
            e.classList.toggle(t);
            const n = e.classList.contains(t);
            n
               ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0))
               : (document.documentElement.classList.remove(i),
                 document.removeEventListener("keydown", this.onKeydown, !0)),
               this.updateMetrics(),
               this.emit(n ? "enterFS" : "exitFS");
         }
         getMatrix(e = this.current) {
            const { a: t, b: i, c: n, d: o, e: s, f: r } = e;
            return new DOMMatrix([t, i, n, o, s, r]);
         }
         reset(e) {
            if (this.state !== D.Init && this.state !== D.Destroy) {
               this.stop("current");
               for (const e of $) this.target[e] = I[e];
               (this.target.a = this.minScale),
                  (this.target.d = this.minScale),
                  this.clampTargetBounds(),
                  this.isResting ||
                     ((this.friction = void 0 === e ? this.option("friction") : e),
                     (this.state = D.Panning),
                     this.requestTick());
            }
         }
         destroy() {
            this.stop(), (this.state = D.Destroy), this.detachEvents(), this.detachObserver();
            const { container: e, content: t } = this,
               i = this.option("classes") || {};
            for (const t of Object.values(i)) e.classList.remove(t + "");
            t && (t.removeEventListener("load", this.onLoad), t.removeEventListener("error", this.onError)),
               this.detachPlugins();
         }
      }
      Object.defineProperty(_, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: z }),
         Object.defineProperty(_, "Plugins", { enumerable: !0, configurable: !0, writable: !0, value: {} });
      class X extends y {
         onCreateSlide(e, t, i) {
            const n = this.instance,
               o = n.optionFor(i, "src") || "",
               { el: s, type: r } = i;
            s &&
               "image" === r &&
               "string" == typeof o &&
               this.setContent(i, o).then(
                  (e) => {
                     const t = i.contentEl,
                        o = i.imageEl,
                        r = i.thumbElSrc;
                     if (n.isClosing() || !t || !o) return;
                     t.offsetHeight;
                     const a = !!n.isOpeningSlide(i) && this.getZoomInfo(i);
                     if (this.option("protected")) {
                        s.addEventListener("contextmenu", (e) => {
                           e.preventDefault();
                        });
                        const e = document.createElement("div");
                        R(e, "fancybox-protected"), t.appendChild(e);
                     }
                     if (r && a) {
                        const o = e.contentRect,
                           s = Math.max(o.fullWidth, o.fullHeight);
                        let c = null;
                        !a.opacity &&
                           s > 1200 &&
                           ((c = document.createElement("img")), R(c, "fancybox-ghost"), (c.src = r), t.appendChild(c));
                        const d = () => {
                           c &&
                              (R(c, "f-fadeFastOut"),
                              setTimeout(() => {
                                 c && (c.remove(), (c = null));
                              }, 200));
                        };
                        ((l = r),
                        new Promise((e, t) => {
                           const i = new Image();
                           (i.onload = e), (i.onerror = t), (i.src = l);
                        })).then(
                           () => {
                              (i.state = f.Opening),
                                 this.instance.emit("reveal", i),
                                 this.zoomIn(i).then(
                                    () => {
                                       d(), this.instance.done(i);
                                    },
                                    () => {
                                       n.hideLoading(i);
                                    }
                                 ),
                                 c &&
                                    setTimeout(
                                       () => {
                                          d();
                                       },
                                       s > 2500 ? 800 : 200
                                    );
                           },
                           () => {
                              n.hideLoading(i), n.revealContent(i);
                           }
                        );
                     } else {
                        const t = this.optionFor(i, "initialSize"),
                           o = this.optionFor(i, "zoom"),
                           s = { event: n.prevMouseMoveEvent || n.options.event, friction: o ? 0.12 : 0 };
                        let r = n.optionFor(i, "showClass") || void 0,
                           a = !0;
                        n.isOpeningSlide(i) &&
                           ("full" === t
                              ? e.zoomToFull(s)
                              : "cover" === t
                              ? e.zoomToCover(s)
                              : "max" === t
                              ? e.zoomToMax(s)
                              : (a = !1),
                           e.stop("current")),
                           a && r && (r = e.isDragging ? "f-fadeIn" : ""),
                           n.revealContent(i, r);
                     }
                     var l;
                  },
                  () => {
                     n.setError(i, "{{IMAGE_ERROR}}");
                  }
               );
         }
         onRemoveSlide(e, t, i) {
            i.panzoom && i.panzoom.destroy(), (i.panzoom = void 0), (i.imageEl = void 0);
         }
         onChange(e, t, i, n) {
            for (const e of t.slides) {
               const t = e.panzoom;
               t && e.index !== i && t.reset(0.35);
            }
         }
         onClose() {
            const e = this.instance,
               t = e.container,
               i = e.getSlide();
            if (!t || !t.parentElement || !i) return;
            const { el: n, contentEl: o, panzoom: s } = i,
               r = i.thumbElSrc;
            if (!n || !r || !o || !s || s.isContentLoading || s.state === D.Init || s.state === D.Destroy) return;
            s.updateMetrics();
            let a = this.getZoomInfo(i);
            if (!a) return;
            (this.instance.state = p.CustomClosing),
               t.classList.remove("is-zooming-in"),
               t.classList.add("is-zooming-out"),
               (o.style.backgroundImage = `url('${r}')`);
            const l = t.getBoundingClientRect();
            Object.assign(t.style, {
               position: "absolute",
               top: `${window.pageYOffset}px`,
               left: `${window.pageXOffset}px`,
               bottom: "auto",
               right: "auto",
               width: `${l.width}px`,
               height: `${l.height}px`,
               overflow: "hidden",
            });
            const { x: c, y: d, scale: u, opacity: h } = a;
            if (h) {
               const e = ((e, t, i, n) => {
                  const o = t - e;
                  return (t) => 1 + (((t - e) / o) * -1 || 0);
               })(s.scale, u);
               s.on("afterTransform", () => {
                  o.style.opacity = e(s.scale) + "";
               });
            }
            s.on("endAnimation", () => {
               e.destroy();
            }),
               (s.target.a = u),
               (s.target.b = 0),
               (s.target.c = 0),
               (s.target.d = u),
               s.panTo({ x: c, y: d, scale: u, friction: h ? 0.2 : 0.33, ignoreBounds: !0 }),
               s.isResting && e.destroy();
         }
         setContent(e, t) {
            return new Promise((s, r) => {
               var a, l;
               const c = this.instance,
                  d = e.el;
               if (!d) return void r();
               c.showLoading(e);
               let u = this.optionFor(e, "content");
               "string" == typeof u && (u = n(u)),
                  (u && o(u)) ||
                     ((u = document.createElement("img")),
                     u instanceof HTMLImageElement &&
                        ((u.src = t || ""),
                        (u.alt =
                           (null === (a = e.caption) || void 0 === a
                              ? void 0
                              : a.replace(/<[^>]+>/gi, "").substring(0, 1e3)) ||
                           `Image ${e.index + 1} of ${
                              null === (l = c.carousel) || void 0 === l ? void 0 : l.pages.length
                           }`),
                        (u.draggable = !1),
                        e.srcset && u.setAttribute("srcset", e.srcset)),
                     e.sizes && u.setAttribute("sizes", e.sizes)),
                  u.classList.add("fancybox-image"),
                  (e.imageEl = u),
                  c.setContent(e, u, !1),
                  (e.panzoom = new _(
                     d,
                     i({}, this.option("Panzoom") || {}, {
                        content: u,
                        width: c.optionFor(e, "width", "auto"),
                        height: c.optionFor(e, "height", "auto"),
                        wheel: () => {
                           const e = c.option("wheel");
                           return ("zoom" === e || "pan" == e) && e;
                        },
                        click: (t, i) => {
                           var n, o;
                           if (c.isCompact || c.isClosing()) return !1;
                           if (e.index !== (null === (n = c.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;
                           let s =
                              !i ||
                              (i.target &&
                                 (null === (o = e.contentEl) || void 0 === o ? void 0 : o.contains(i.target)));
                           return c.option(s ? "contentClick" : "backdropClick") || !1;
                        },
                        dblClick: () => (c.isCompact ? "toggleZoom" : c.option("contentDblClick") || !1),
                        spinner: !1,
                        panOnlyZoomed: !0,
                        wheelLimit: 1 / 0,
                        transformParent: !0,
                        on: {
                           ready: (e) => {
                              s(e);
                           },
                           error: () => {
                              r();
                           },
                           destroy: () => {
                              r();
                           },
                        },
                     })
                  ));
            });
         }
         zoomIn(e) {
            return new Promise((t, i) => {
               const n = this.instance,
                  o = n.container,
                  { panzoom: s, contentEl: r, el: a } = e;
               s && s.updateMetrics();
               const l = this.getZoomInfo(e);
               if (!(l && a && r && s && o)) return void i();
               const { x: c, y: d, scale: u, opacity: h } = l,
                  p = () => {
                     e.state !== f.Closing &&
                        (h && (r.style.opacity = Math.max(Math.min(1, 1 - (1 - s.scale) / (1 - u)), 0) + ""),
                        s.scale >= 1 && s.scale > s.targetScale - 0.1 && t(s));
                  },
                  g = (e) => {
                     e.scale < 0.99 ||
                        e.scale > 1.01 ||
                        ((r.style.opacity = ""),
                        j(o, "is-zooming-in"),
                        e.off("endAnimation", g),
                        e.off("touchStart", g),
                        e.off("afterTransform", p),
                        t(e));
                  };
               s.on("endAnimation", g),
                  s.on("touchStart", g),
                  s.on("afterTransform", p),
                  s.on(["error", "destroy"], () => {
                     i();
                  }),
                  s.panTo({ x: c, y: d, scale: u, friction: 0, ignoreBounds: !0 }),
                  s.stop("current");
               const m = { event: "mousemove" === s.panMode ? n.prevMouseMoveEvent || n.options.event : void 0 },
                  v = this.optionFor(e, "initialSize");
               R(o, "is-zooming-in"),
                  n.hideLoading(e),
                  "full" === v
                     ? s.zoomToFull(m)
                     : "cover" === v
                     ? s.zoomToCover(m)
                     : "max" === v
                     ? s.zoomToMax(m)
                     : s.reset(0.172);
            });
         }
         getZoomInfo(e) {
            const { el: t, imageEl: i, thumbEl: n, panzoom: o } = e;
            if (!t || !i || !n || !o || s(n) < 3 || !this.optionFor(e, "zoom") || this.instance.state === p.Destroy)
               return !1;
            const { top: r, left: a, width: l, height: c } = n.getBoundingClientRect();
            let { top: d, left: u, fitWidth: h, fitHeight: f } = o.contentRect;
            if (!(l && c && h && f)) return !1;
            const g = l / h,
               m = o.container.getBoundingClientRect();
            (d += m.top), (u += m.left);
            const v = -1 * (u + 0.5 * h - (a + 0.5 * l)),
               y = -1 * (d + 0.5 * f - (r + 0.5 * c));
            let b = this.option("zoomOpacity") || !1;
            return "auto" === b && (b = Math.abs(l / c - h / f) > 0.1), { x: v, y: y, scale: g, opacity: b };
         }
         attach() {
            this.instance.on("Carousel.change", this.onChange),
               this.instance.on("Carousel.createSlide", this.onCreateSlide),
               this.instance.on("Carousel.removeSlide", this.onRemoveSlide),
               this.instance.on("close", this.onClose);
         }
         detach() {
            this.instance.off("Carousel.change", this.onChange),
               this.instance.off("Carousel.createSlide", this.onCreateSlide),
               this.instance.off("Carousel.removeSlide", this.onRemoveSlide),
               this.instance.off("close", this.onClose);
         }
      }
      Object.defineProperty(X, "defaults", {
         enumerable: !0,
         configurable: !0,
         writable: !0,
         value: { initialSize: "fit", Panzoom: { maxScale: 1 }, protected: !1, zoom: !0, zoomOpacity: "auto" },
      });
      const Y = (e, t = {}) => {
            const i = new URL(e),
               n = new URLSearchParams(i.search),
               o = new URLSearchParams();
            for (const [e, i] of [...n, ...Object.entries(t)]) {
               let t = i.toString();
               "t" === e ? o.set("start", parseInt(t).toString()) : o.set(e, t);
            }
            let s = o.toString(),
               r = e.match(/#t=((.*)?\d+s)/);
            return r && (s += `#t=${r[1]}`), s;
         },
         U = [
            "image",
            "html",
            "ajax",
            "inline",
            "clone",
            "iframe",
            "map",
            "pdf",
            "html5video",
            "youtube",
            "vimeo",
            "video",
         ];
      class V extends y {
         onInitSlide(e, t, i) {
            this.processType(i);
         }
         onCreateSlide(e, t, i) {
            this.setContent(i);
         }
         onRemoveSlide(e, t, i) {
            i.closeBtnEl && (i.closeBtnEl.remove(), (i.closeBtnEl = void 0)),
               i.xhr && (i.xhr.abort(), (i.xhr = null)),
               i.iframeEl &&
                  ((i.iframeEl.onload = i.iframeEl.onerror = null),
                  (i.iframeEl.src = "//about:blank"),
                  (i.iframeEl = null));
            const n = i.contentEl,
               o = i.placeholderEl;
            if ("inline" === i.type && n && o)
               n.classList.remove("fancybox__content"),
                  "none" !== n.style.display && (n.style.display = "none"),
                  o.parentNode && o.parentNode.insertBefore(n, o),
                  o.remove(),
                  (i.placeholderEl = null);
            else for (; i.el && i.el.firstChild; ) i.el.removeChild(i.el.firstChild);
         }
         onSelectSlide(e, t, i) {
            i.state === f.Ready && this.playVideo();
         }
         onUnselectSlide(e, t, i) {
            var n, o;
            if ("html5video" === i.type) {
               try {
                  null === (o = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) ||
                     void 0 === o ||
                     o.pause();
               } catch (e) {}
               return;
            }
            let s;
            "vimeo" === i.type
               ? (s = { method: "pause", value: "true" })
               : "youtube" === i.type && (s = { event: "command", func: "pauseVideo" }),
               s &&
                  i.iframeEl &&
                  i.iframeEl.contentWindow &&
                  i.iframeEl.contentWindow.postMessage(JSON.stringify(s), "*"),
               i.poller && clearTimeout(i.poller);
         }
         onDone(e, t) {
            e.isCurrentSlide(t) && !e.isClosing() && this.playVideo();
         }
         onRefresh(e, t) {
            t.slides.forEach((e) => {
               e.el && (this.setAspectRatio(e), this.resizeIframe(e));
            });
         }
         onMessage(e) {
            try {
               let t = JSON.parse(e.data);
               if ("https://player.vimeo.com" === e.origin) {
                  if ("ready" === t.event)
                     for (let t of Array.from(document.getElementsByClassName("fancybox__iframe")))
                        t instanceof HTMLIFrameElement && t.contentWindow === e.source && (t.dataset.ready = "true");
               } else if (e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === t.event) {
                  const e = document.getElementById(t.id);
                  e && (e.dataset.ready = "true");
               }
            } catch (e) {}
         }
         loadAjaxContent(e) {
            const t = this.instance.optionFor(e, "src") || "";
            this.instance.showLoading(e);
            const i = this.instance,
               n = new XMLHttpRequest();
            i.showLoading(e),
               (n.onreadystatechange = function () {
                  n.readyState === XMLHttpRequest.DONE &&
                     i.state === p.Ready &&
                     (i.hideLoading(e),
                     200 === n.status
                        ? i.setContent(e, n.responseText)
                        : i.setError(e, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
               });
            const o = e.ajax || null;
            n.open(o ? "POST" : "GET", t + ""),
               n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
               n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
               n.send(o),
               (e.xhr = n);
         }
         setInlineContent(e) {
            let t = null;
            if (o(e.src)) t = e.src;
            else if ("string" == typeof e.src) {
               const i = e.src.split("#", 2).pop();
               t = i ? document.getElementById(i) : null;
            }
            if (t) {
               if ("clone" === e.type || t.closest(".fancybox__slide")) {
                  t = t.cloneNode(!0);
                  const i = t.dataset.animationName;
                  i && (t.classList.remove(i), delete t.dataset.animationName);
                  let n = t.getAttribute("id");
                  (n = n ? `${n}--clone` : `clone-${this.instance.id}-${e.index}`), t.setAttribute("id", n);
               } else if (t.parentNode) {
                  const i = document.createElement("div");
                  i.classList.add("fancybox-placeholder"), t.parentNode.insertBefore(i, t), (e.placeholderEl = i);
               }
               this.instance.setContent(e, t);
            } else this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}");
         }
         setIframeContent(e) {
            const { src: t, el: i } = e;
            if (!t || "string" != typeof t || !i) return;
            const n = this.instance,
               o = document.createElement("iframe");
            (o.className = "fancybox__iframe"),
               o.setAttribute("id", `fancybox__iframe_${n.id}_${e.index}`),
               o.setAttribute("allow", "autoplay; fullscreen"),
               o.setAttribute("scrolling", "auto"),
               (o.onerror = () => {
                  n.setError(e, "{{IFRAME_ERROR}}");
               }),
               (e.iframeEl = o);
            const s = this.optionFor(e, "preload");
            if ((i.classList.add("is-loading"), "iframe" !== e.type || !1 === s))
               return o.setAttribute("src", e.src + ""), this.resizeIframe(e), void n.setContent(e, o);
            n.showLoading(e),
               (o.onload = () => {
                  if (!o.src.length) return;
                  const t = "true" !== o.dataset.ready;
                  (o.dataset.ready = "true"), this.resizeIframe(e), t ? n.revealContent(e) : n.hideLoading(e);
               }),
               o.setAttribute("src", t),
               n.setContent(e, o, !1);
         }
         resizeIframe(e) {
            const t = e.iframeEl,
               i = null == t ? void 0 : t.parentElement;
            if (!t || !i) return;
            let n = e.autoSize,
               o = e.width || 0,
               s = e.height || 0;
            o && s && (n = !1);
            const r = i && i.style;
            if (!1 !== e.preload && !1 !== n && r)
               try {
                  const e = window.getComputedStyle(i),
                     n = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight),
                     a = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom),
                     l = t.contentWindow;
                  if (l) {
                     const e = l.document,
                        t = e.getElementsByTagName("html")[0],
                        i = e.body;
                     (r.width = ""),
                        (i.style.overflow = "hidden"),
                        (o = o || t.scrollWidth + n),
                        (r.width = `${o}px`),
                        (i.style.overflow = ""),
                        (r.flex = "0 0 auto"),
                        (r.height = `${i.scrollHeight}px`),
                        (s = t.scrollHeight + a);
                  }
               } catch (e) {}
            if (o || s) {
               const e = { flex: "0 1 auto", width: "", height: "" };
               o && (e.width = `${o}px`), s && (e.height = `${s}px`), Object.assign(r, e);
            }
         }
         playVideo() {
            const e = this.instance.getSlide();
            if (!e) return;
            const { el: t } = e;
            if (!t || !t.offsetParent) return;
            if (!this.optionFor(e, "videoAutoplay")) return;
            if ("html5video" === e.type)
               try {
                  const e = t.querySelector("video");
                  if (e) {
                     const t = e.play();
                     void 0 !== t &&
                        t
                           .then(() => {})
                           .catch((t) => {
                              (e.muted = !0), e.play();
                           });
                  }
               } catch (e) {}
            if ("youtube" !== e.type && "vimeo" !== e.type) return;
            const i = () => {
               if (e.iframeEl && e.iframeEl.contentWindow) {
                  let t;
                  if ("true" === e.iframeEl.dataset.ready)
                     return (
                        (t =
                           "youtube" === e.type
                              ? { event: "command", func: "playVideo" }
                              : { method: "play", value: "true" }),
                        t && e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"),
                        void (e.poller = void 0)
                     );
                  "youtube" === e.type &&
                     ((t = { event: "listening", id: e.iframeEl.getAttribute("id") }),
                     e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"));
               }
               e.poller = setTimeout(i, 250);
            };
            i();
         }
         processType(e) {
            if (e.html) return (e.type = "html"), (e.src = e.html), void (e.html = "");
            const t = this.instance.optionFor(e, "src", "");
            if (!t || "string" != typeof t) return;
            let i = e.type,
               n = null;
            if (
               (n = t.match(
                  /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
               ))
            ) {
               const o = this.optionFor(e, "youtube"),
                  { nocookie: s } = o,
                  r = (function (e, t) {
                     var i = {};
                     for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
                     if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                           t.indexOf(n[o]) < 0 &&
                              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                              (i[n[o]] = e[n[o]]);
                     }
                     return i;
                  })(o, ["nocookie"]),
                  a = `www.youtube${s ? "-nocookie" : ""}.com`,
                  l = Y(t, r),
                  c = encodeURIComponent(n[2]);
               (e.videoId = c),
                  (e.src = `https://${a}/embed/${c}?${l}`),
                  (e.thumbSrc = e.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
                  (i = "youtube");
            } else if ((n = t.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/))) {
               const o = Y(t, this.optionFor(e, "vimeo")),
                  s = encodeURIComponent(n[1]),
                  r = n[4] || "";
               (e.videoId = s),
                  (e.src = `https://player.vimeo.com/video/${s}?${r ? `h=${r}${o ? "&" : ""}` : ""}${o}`),
                  (i = "vimeo");
            }
            if (!i && e.triggerEl) {
               const t = e.triggerEl.dataset.type;
               U.includes(t) && (i = t);
            }
            i ||
               ("string" == typeof t &&
                  ("#" === t.charAt(0)
                     ? (i = "inline")
                     : (n = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                     ? ((i = "html5video"),
                       (e.videoFormat = e.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])))
                     : t.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                     ? (i = "image")
                     : t.match(/\.(pdf)((\?|#).*)?$/i)
                     ? (i = "pdf")
                     : (n = t.match(
                          /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
                       ))
                     ? ((e.src = `https://maps.google.${n[1]}/?ll=${(n[2]
                          ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "")
                          : n[4] + ""
                       ).replace(/\?/, "&")}&output=${n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`),
                       (i = "map"))
                     : (n = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) &&
                       ((e.src = `https://maps.google.${n[1]}/maps?q=${n[2]
                          .replace("query=", "q=")
                          .replace("api=1", "")}&output=embed`),
                       (i = "map")))),
               (i = i || this.instance.option("defaultType")),
               (e.type = i),
               "image" === i && (e.thumbSrc = e.thumbSrc || e.src);
         }
         setContent(e) {
            const t = this.instance.optionFor(e, "src") || "";
            if (e && e.type && t) {
               switch (e.type) {
                  case "html":
                     this.instance.setContent(e, t);
                     break;
                  case "html5video":
                     const i = this.option("videoTpl");
                     i &&
                        this.instance.setContent(
                           e,
                           i
                              .replace(/\{\{src\}\}/gi, t + "")
                              .replace(/\{\{format\}\}/gi, this.optionFor(e, "videoFormat") || "")
                              .replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || "")
                        );
                     break;
                  case "inline":
                  case "clone":
                     this.setInlineContent(e);
                     break;
                  case "ajax":
                     this.loadAjaxContent(e);
                     break;
                  case "pdf":
                  case "map":
                  case "youtube":
                  case "vimeo":
                     e.preload = !1;
                  case "iframe":
                     this.setIframeContent(e);
               }
               this.setAspectRatio(e);
            }
         }
         setAspectRatio(e) {
            var t;
            const i = e.contentEl,
               n = this.optionFor(e, "videoRatio"),
               o = null === (t = e.el) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (!(i && o && n && 1 !== n && e.type && ["video", "youtube", "vimeo", "html5video"].includes(e.type)))
               return;
            const s = o.width,
               r = o.height;
            (i.style.aspectRatio = n + ""),
               (i.style.width = s / r > n ? "auto" : ""),
               (i.style.height = s / r > n ? "" : "auto");
         }
         attach() {
            this.instance.on("Carousel.initSlide", this.onInitSlide),
               this.instance.on("Carousel.createSlide", this.onCreateSlide),
               this.instance.on("Carousel.removeSlide", this.onRemoveSlide),
               this.instance.on("Carousel.selectSlide", this.onSelectSlide),
               this.instance.on("Carousel.unselectSlide", this.onUnselectSlide),
               this.instance.on("Carousel.Panzoom.refresh", this.onRefresh),
               this.instance.on("done", this.onDone),
               window.addEventListener("message", this.onMessage);
         }
         detach() {
            this.instance.off("Carousel.initSlide", this.onInitSlide),
               this.instance.off("Carousel.createSlide", this.onCreateSlide),
               this.instance.off("Carousel.removeSlide", this.onRemoveSlide),
               this.instance.off("Carousel.selectSlide", this.onSelectSlide),
               this.instance.off("Carousel.unselectSlide", this.onUnselectSlide),
               this.instance.off("Carousel.Panzoom.refresh", this.onRefresh),
               this.instance.off("done", this.onDone),
               window.removeEventListener("message", this.onMessage);
         }
      }
      Object.defineProperty(V, "defaults", {
         enumerable: !0,
         configurable: !0,
         writable: !0,
         value: {
            ajax: null,
            autoSize: !0,
            preload: !0,
            videoAutoplay: !0,
            videoRatio: 16 / 9,
            videoTpl:
               '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            videoFormat: "",
            vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
            youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
         },
      });
      class G extends y {
         constructor() {
            super(...arguments),
               Object.defineProperty(this, "state", { enumerable: !0, configurable: !0, writable: !0, value: "ready" }),
               Object.defineProperty(this, "inHover", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
               Object.defineProperty(this, "timer", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "progressBar", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               });
         }
         get isActive() {
            return "ready" !== this.state;
         }
         onReady(e) {
            this.option("autoStart") && (e.isInfinite || e.page < e.pages.length - 1) && this.start();
         }
         onChange() {
            var e;
            (null === (e = this.instance.panzoom) || void 0 === e ? void 0 : e.isResting) ||
               (this.removeProgressBar(), this.pause());
         }
         onSettle() {
            this.resume();
         }
         onVisibilityChange() {
            "visible" === document.visibilityState ? this.resume() : this.pause();
         }
         onMouseEnter() {
            (this.inHover = !0), this.pause();
         }
         onMouseLeave() {
            var e;
            (this.inHover = !1),
               (null === (e = this.instance.panzoom) || void 0 === e ? void 0 : e.isResting) && this.resume();
         }
         onTimerEnd() {
            "play" === this.state &&
               (this.instance.isInfinite || this.instance.page !== this.instance.pages.length - 1
                  ? this.instance.slideNext()
                  : this.instance.slideTo(0));
         }
         removeProgressBar() {
            this.progressBar && (this.progressBar.remove(), (this.progressBar = null));
         }
         createProgressBar() {
            var e;
            if (!this.option("showProgress")) return null;
            this.removeProgressBar();
            const t = this.instance,
               i = (null === (e = t.pages[t.page]) || void 0 === e ? void 0 : e.slides) || [];
            let n = this.option("progressParentEl");
            if ((n || (n = (1 === i.length ? i[0].el : null) || t.viewport), !n)) return null;
            const o = document.createElement("div");
            return R(o, "f-progress"), n.prepend(o), (this.progressBar = o), o.offsetHeight, o;
         }
         set() {
            if (this.instance.pages.length < 2) return;
            if (this.progressBar) return;
            const e = this.option("timeout");
            (this.state = "play"), R(this.instance.container, "has-autoplay");
            let t = this.createProgressBar();
            t && ((t.style.transitionDuration = `${e}ms`), (t.style.transform = "scaleX(1)")),
               (this.timer = setTimeout(() => {
                  (this.timer = null), this.inHover || this.onTimerEnd();
               }, e)),
               this.emit("set");
         }
         clear() {
            this.timer && (clearTimeout(this.timer), (this.timer = null)), this.removeProgressBar();
         }
         start() {
            if ((this.set(), this.option("pauseOnHover"))) {
               const e = this.instance.container;
               e.addEventListener("mouseenter", this.onMouseEnter, !1),
                  e.addEventListener("mouseleave", this.onMouseLeave, !1);
            }
            document.addEventListener("visibilitychange", this.onVisibilityChange, !1);
         }
         stop() {
            const e = this.instance.container;
            this.clear(),
               (this.state = "ready"),
               e.removeEventListener("mouseenter", this.onMouseEnter, !1),
               e.removeEventListener("mouseleave", this.onMouseLeave, !1),
               document.removeEventListener("visibilitychange", this.onVisibilityChange, !1),
               j(e, "has-autoplay"),
               this.emit("stop");
         }
         pause() {
            "play" === this.state && ((this.state = "pause"), this.clear(), this.emit("pause"));
         }
         resume() {
            const e = this.instance;
            if (e.isInfinite || e.page !== e.pages.length - 1)
               if ("play" !== this.state) {
                  if ("pause" === this.state && !this.inHover) {
                     const e = new Event("resume", { bubbles: !0, cancelable: !0 });
                     this.emit("resume", event), e.defaultPrevented || this.set();
                  }
               } else this.set();
            else this.stop();
         }
         toggle() {
            "play" === this.state || "pause" === this.state ? this.stop() : this.set();
         }
         attach() {
            this.instance.on("ready", this.onReady),
               this.instance.on("Panzoom.startAnimation", this.onChange),
               this.instance.on("Panzoom.endAnimation", this.onSettle),
               this.instance.on("Panzoom.touchMove", this.onChange);
         }
         detach() {
            this.instance.off("ready", this.onReady),
               this.instance.off("Panzoom.startAnimation", this.onChange),
               this.instance.off("Panzoom.endAnimation", this.onSettle),
               this.instance.off("Panzoom.touchMove", this.onChange),
               this.stop();
         }
      }
      Object.defineProperty(G, "defaults", {
         enumerable: !0,
         configurable: !0,
         writable: !0,
         value: { autoStart: !0, pauseOnHover: !0, progressParentEl: null, showProgress: !0, timeout: 3e3 },
      });
      class Z extends y {
         constructor() {
            super(...arguments),
               Object.defineProperty(this, "ref", { enumerable: !0, configurable: !0, writable: !0, value: null });
         }
         onPrepare(e) {
            const t = e.carousel;
            if (!t) return;
            const n = e.container;
            n &&
               ((t.options.Autoplay = i(this.option("Autoplay") || {}, {
                  pauseOnHover: !1,
                  autoStart: !1,
                  timeout: this.option("timeout"),
                  progressParentEl: () => n.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]") || n,
                  on: {
                     set: (t) => {
                        var i;
                        n.classList.add("has-slideshow"),
                           (null === (i = e.getSlide()) || void 0 === i ? void 0 : i.state) !== f.Ready && t.pause();
                     },
                     stop: () => {
                        n.classList.remove("has-slideshow"), e.isCompact || e.endIdle();
                     },
                     resume: (t, i) => {
                        var n, o, s;
                        !i ||
                           !i.cancelable ||
                           ((null === (n = e.getSlide()) || void 0 === n ? void 0 : n.state) === f.Ready &&
                              (null === (s = null === (o = e.carousel) || void 0 === o ? void 0 : o.panzoom) ||
                              void 0 === s
                                 ? void 0
                                 : s.isResting)) ||
                           i.preventDefault();
                     },
                  },
               })),
               t.attachPlugins({ Autoplay: G }),
               (this.ref = t.plugins.Autoplay));
         }
         onReady(e) {
            const t = e.carousel,
               i = this.ref;
            t && i && this.option("playOnStart") && (t.isInfinite || t.page < t.pages.length - 1) && i.start();
         }
         onDone(e, t) {
            const i = this.ref;
            if (!i) return;
            const n = t.panzoom;
            n &&
               n.on("startAnimation", () => {
                  e.isCurrentSlide(t) && i.stop();
               }),
               e.isCurrentSlide(t) && i.resume();
         }
         onKeydown(e, t) {
            var i;
            const n = this.ref;
            n &&
               t === this.option("key") &&
               "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) &&
               n.toggle();
         }
         attach() {
            this.instance.on("Carousel.init", this.onPrepare),
               this.instance.on("Carousel.ready", this.onReady),
               this.instance.on("done", this.onDone),
               this.instance.on("keydown", this.onKeydown);
         }
         detach() {
            this.instance.off("Carousel.init", this.onPrepare),
               this.instance.off("Carousel.ready", this.onReady),
               this.instance.off("done", this.onDone),
               this.instance.off("keydown", this.onKeydown);
         }
      }
      var K;
      Object.defineProperty(Z, "defaults", {
         enumerable: !0,
         configurable: !0,
         writable: !0,
         value: { key: " ", playOnStart: !1, timeout: 3e3 },
      }),
         (function (e) {
            (e[(e.Init = 0)] = "Init"), (e[(e.Ready = 1)] = "Ready"), (e[(e.Destroy = 2)] = "Destroy");
         })(K || (K = {}));
      const J = (e) => {
            if (("string" == typeof e && (e = { html: e }), !(e instanceof String || e instanceof HTMLElement))) {
               const t = e.thumb;
               void 0 !== t &&
                  ("string" == typeof t && (e.thumbSrc = t),
                  t instanceof HTMLImageElement && ((e.thumbEl = t), (e.thumbElSrc = t.src), (e.thumbSrc = t.src)),
                  delete e.thumb);
            }
            return Object.assign(
               { html: "", el: null, isDom: !1, class: "", index: -1, dim: 0, gap: 0, pos: 0, transition: !1 },
               e
            );
         },
         Q = (e = {}) => Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, e),
         ee = {
            classes: {
               container: "f-thumbs f-carousel__thumbs",
               viewport: "f-thumbs__viewport",
               track: "f-thumbs__track",
               slide: "f-thumbs__slide",
               isResting: "is-resting",
               isSelected: "is-selected",
               isLoading: "is-loading",
               hasThumbs: "has-thumbs",
            },
            minCount: 2,
            parentEl: null,
            thumbTpl:
               '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
            type: "modern",
         };
      var te;
      !(function (e) {
         (e[(e.Init = 0)] = "Init"),
            (e[(e.Ready = 1)] = "Ready"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.Disabled = 3)] = "Disabled");
      })(te || (te = {}));
      let ie = class extends y {
         constructor() {
            super(...arguments),
               Object.defineProperty(this, "type", { enumerable: !0, configurable: !0, writable: !0, value: "modern" }),
               Object.defineProperty(this, "container", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "track", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "carousel", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "panzoom", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "thumbWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "thumbClipWidth", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: 0,
               }),
               Object.defineProperty(this, "thumbHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "thumbGap", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "thumbExtraGap", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: 0,
               }),
               Object.defineProperty(this, "shouldCenter", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: !0,
               }),
               Object.defineProperty(this, "state", { enumerable: !0, configurable: !0, writable: !0, value: te.Init });
         }
         formatThumb(e, t) {
            return this.instance.localize(t, [
               ["%i", e.index],
               ["%d", e.index + 1],
               ["%s", e.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"],
            ]);
         }
         getSlides() {
            const e = [],
               t = this.option("thumbTpl") || "";
            if (t)
               for (const i of this.instance.slides || []) {
                  let n = "";
                  i.type &&
                     ((n = `for-${i.type}`),
                     i.type && ["video", "youtube", "vimeo", "html5video"].includes(i.type) && (n += " for-video")),
                     e.push({ html: this.formatThumb(i, t), customClass: n });
               }
            return e;
         }
         onInitSlide(e, t) {
            const i = t.el;
            i &&
               ((t.thumbSrc = i.dataset.thumbSrc || t.thumbSrc || ""),
               (t.thumbClipWidth = parseFloat(i.dataset.thumbClipWidth || "") || t.thumbClipWidth || 0),
               (t.thumbHeight = parseFloat(i.dataset.thumbHeight || "") || t.thumbHeight || 0));
         }
         onInitSlides() {
            this.state === te.Init && this.build();
         }
         onRefreshM() {
            this.refreshModern();
         }
         onChangeM() {
            "modern" === this.type && ((this.shouldCenter = !0), this.centerModern());
         }
         onClickModern(e) {
            e.preventDefault(), e.stopPropagation();
            const t = this.instance,
               i = t.page,
               n = (e) => {
                  if (e) {
                     const t = e.closest("[data-carousel-index]");
                     if (t) return parseInt(t.dataset.carouselIndex || "", 10) || 0;
                  }
                  return -1;
               },
               o = (e, t) => {
                  const i = document.elementFromPoint(e, t);
                  return i ? n(i) : -1;
               };
            let s = n(e.target);
            s < 0 && ((s = o(e.clientX + this.thumbGap, e.clientY)), s === i && (s = i - 1)),
               s < 0 && ((s = o(e.clientX - this.thumbGap, e.clientY)), s === i && (s = i + 1)),
               s < 0 &&
                  (s = ((t) => {
                     let n = o(e.clientX - t, e.clientY),
                        r = o(e.clientX + t, e.clientY);
                     return s < 0 && n === i && (s = i + 1), s < 0 && r === i && (s = i - 1), s;
                  })(this.thumbExtraGap)),
               s === i ? this.centerModern() : s > -1 && s < t.pages.length && t.slideTo(s);
         }
         onTransformM() {
            if ("modern" !== this.type) return;
            const { instance: e, container: t, track: i } = this,
               n = e.panzoom;
            if (!(t && i && n && this.panzoom)) return;
            E(t, this.cn("isResting"), n.state !== D.Init && n.isResting);
            const o = this.thumbGap,
               s = this.thumbExtraGap,
               r = this.thumbClipWidth;
            let a = 0,
               l = 0,
               c = 0;
            for (const t of e.slides) {
               let i = t.index,
                  n = t.thumbSlideEl;
               if (!n) continue;
               E(n, this.cn("isSelected"), i === e.page),
                  (l = 1 - Math.abs(e.getProgress(i))),
                  n.style.setProperty("--progress", l ? l + "" : "");
               const d = 0.5 * ((t.thumbWidth || 0) - r);
               (a += o),
                  (a += d),
                  l && (a -= l * (d + s)),
                  n.style.setProperty("--shift", a - o + ""),
                  (a += d),
                  l && (a -= l * (d + s)),
                  (a -= o),
                  0 === i && (c = s * l);
            }
            i && (i.style.setProperty("--left", c + ""), i.style.setProperty("--width", a + c + o + s * l + "")),
               this.shouldCenter && this.centerModern();
         }
         buildClassic() {
            const { container: e, track: t } = this,
               n = this.getSlides();
            if (!e || !t || !n) return;
            const o = new this.instance.constructor(
               e,
               i(
                  {
                     track: t,
                     infinite: !1,
                     center: !0,
                     fill: !0,
                     dragFree: !0,
                     slidesPerPage: 1,
                     transition: !1,
                     Dots: !1,
                     Navigation: !1,
                     Sync: {},
                     classes: {
                        container: "f-thumbs",
                        viewport: "f-thumbs__viewport",
                        track: "f-thumbs__track",
                        slide: "f-thumbs__slide",
                     },
                  },
                  this.option("Carousel") || {},
                  { Sync: { target: this.instance }, slides: n }
               )
            );
            (this.carousel = o),
               (this.track = t),
               o.on("ready", () => {
                  this.emit("ready");
               });
         }
         buildModern() {
            if ("modern" !== this.type) return;
            const { container: e, track: t, instance: i } = this,
               o = this.option("thumbTpl") || "";
            if (!e || !t || !o) return;
            R(e, "is-horizontal"), this.updateModern();
            for (const e of i.slides || []) {
               const i = document.createElement("div");
               if ((R(i, this.cn("slide")), e.type)) {
                  let t = `for-${e.type}`;
                  ["video", "youtube", "vimeo", "html5video"].includes(e.type) && (t += " for-video"), R(i, t);
               }
               i.appendChild(n(this.formatThumb(e, o))),
                  (e.thumbSlideEl = i),
                  t.appendChild(i),
                  this.resizeModernSlide(e);
            }
            const s = new i.constructor.Panzoom(e, {
               content: t,
               lockAxis: "x",
               zoom: !1,
               panOnlyZoomed: !1,
               bounds: () => {
                  let e = 0,
                     t = 0,
                     n = i.slides[0],
                     o = i.slides[i.slides.length - 1],
                     s = i.slides[i.page];
                  return (
                     n &&
                        o &&
                        s &&
                        ((t = -1 * this.getModernThumbPos(0)),
                        0 !== i.page && (t += 0.5 * (n.thumbWidth || 0)),
                        (e = -1 * this.getModernThumbPos(i.slides.length - 1)),
                        i.page !== i.slides.length - 1 &&
                           (e += (o.thumbWidth || 0) - (s.thumbWidth || 0) - 0.5 * (o.thumbWidth || 0))),
                     { x: { min: e, max: t }, y: { min: 0, max: 0 } }
                  );
               },
            });
            s.on("touchStart", (e, t) => {
               this.shouldCenter = !1;
            }),
               s.on("click", (e, t) => this.onClickModern(t)),
               s.on("ready", () => {
                  this.centerModern(), this.emit("ready");
               }),
               s.on(["afterTransform", "refresh"], (e) => {
                  this.lazyLoadModern();
               }),
               (this.panzoom = s),
               this.refreshModern();
         }
         updateModern() {
            if ("modern" !== this.type) return;
            const { container: e } = this;
            e &&
               ((this.thumbGap = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-gap")) || 0),
               (this.thumbExtraGap = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-extra-gap")) || 0),
               (this.thumbWidth = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-width")) || 40),
               (this.thumbClipWidth = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-clip-width")) || 40),
               (this.thumbHeight = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-height")) || 40));
         }
         refreshModern() {
            var e;
            if ("modern" === this.type) {
               this.updateModern();
               for (const e of this.instance.slides || []) this.resizeModernSlide(e);
               this.onTransformM(),
                  null === (e = this.panzoom) || void 0 === e || e.updateMetrics(!0),
                  this.centerModern(0);
            }
         }
         centerModern(e) {
            const t = this.instance,
               { container: i, panzoom: n } = this;
            if (!i || !n || n.state === D.Init) return;
            const o = t.page;
            let s = this.getModernThumbPos(o),
               r = s;
            for (let e = t.page - 3; e < t.page + 3; e++) {
               if (e < 0 || e > t.pages.length - 1 || e === t.page) continue;
               const i = 1 - Math.abs(t.getProgress(e));
               i > 0 && i < 1 && (r += i * (this.getModernThumbPos(e) - s));
            }
            let a = 100;
            void 0 === e &&
               ((e = 0.2),
               t.inTransition.size > 0 && (e = 0.12),
               Math.abs(-1 * n.current.e - r) > n.containerRect.width && ((e = 0.5), (a = 0))),
               (n.options.maxVelocity = a),
               n.applyChange({ panX: S(-1 * r - n.target.e, 1e3), friction: null === t.prevPage ? 0 : e });
         }
         lazyLoadModern() {
            const { instance: e, panzoom: t } = this;
            if (!t) return;
            const i = -1 * t.current.e || 0;
            let o = this.getModernThumbPos(e.page);
            if (t.state !== D.Init || 0 === o)
               for (const o of e.slides || []) {
                  const e = o.thumbSlideEl;
                  if (!e) continue;
                  const s = e.querySelector("img[data-lazy-src]"),
                     r = o.index,
                     a = this.getModernThumbPos(r),
                     l = i - 0.5 * t.containerRect.innerWidth,
                     c = l + t.containerRect.innerWidth;
                  if (!s || a < l || a > c) continue;
                  let u = s.dataset.lazySrc;
                  if (!u || !u.length) continue;
                  if ((delete s.dataset.lazySrc, (s.src = u), s.complete)) continue;
                  R(e, this.cn("isLoading"));
                  const h = n(d);
                  e.appendChild(h),
                     s.addEventListener(
                        "load",
                        () => {
                           e.offsetParent && (e.classList.remove(this.cn("isLoading")), h.remove());
                        },
                        !1
                     );
               }
         }
         resizeModernSlide(e) {
            if ("modern" !== this.type) return;
            if (!e.thumbSlideEl) return;
            const t =
               e.thumbClipWidth && e.thumbHeight
                  ? Math.round(this.thumbHeight * (e.thumbClipWidth / e.thumbHeight))
                  : this.thumbWidth;
            e.thumbWidth = t;
         }
         getModernThumbPos(e) {
            const t = this.instance.slides[e],
               i = this.panzoom;
            if (!i || !i.contentRect.fitWidth) return 0;
            let n = i.containerRect.innerWidth,
               o = i.contentRect.width;
            2 === this.instance.slides.length && ((e -= 1), (o = 2 * this.thumbClipWidth));
            let s = e * (this.thumbClipWidth + this.thumbGap) + this.thumbExtraGap + 0.5 * (t.thumbWidth || 0);
            return (s -= o > n ? 0.5 * n : 0.5 * o), S(s || 0, 1);
         }
         build() {
            const e = this.instance,
               t = e.container,
               i = this.option("minCount") || 0;
            if (i) {
               let t = 0;
               for (const i of e.slides || []) i.thumbSrc && t++;
               if (t < i) return this.cleanup(), void (this.state = te.Disabled);
            }
            const n = this.option("type");
            if (["modern", "classic"].indexOf(n) < 0) return void (this.state = te.Disabled);
            this.type = n;
            const o = document.createElement("div");
            R(o, this.cn("container")), R(o, `is-${n}`);
            const s = this.option("parentEl");
            s ? s.appendChild(o) : t.after(o), (this.container = o), R(t, this.cn("hasThumbs"));
            const r = document.createElement("div");
            R(r, this.cn("track")),
               o.appendChild(r),
               (this.track = r),
               "classic" === n ? this.buildClassic() : this.buildModern(),
               (this.state = te.Ready),
               o.addEventListener("click", (t) => {
                  setTimeout(() => {
                     var t;
                     null === (t = null == o ? void 0 : o.querySelector(`[data-carousel-index="${e.page}"]`)) ||
                        void 0 === t ||
                        t.focus();
                  }, 100);
               });
         }
         cleanup() {
            this.carousel && this.carousel.destroy(),
               (this.carousel = null),
               this.panzoom && this.panzoom.destroy(),
               (this.panzoom = null),
               this.container && this.container.remove(),
               (this.container = null),
               (this.track = null),
               (this.state = te.Init),
               j(this.instance.container, this.cn("hasThumbs"));
         }
         attach() {
            const { instance: e } = this;
            e.on("initSlide", this.onInitSlide),
               e.state === K.Init ? e.on("initSlides", this.onInitSlides) : this.onInitSlides(),
               e.on("Panzoom.afterTransform", this.onTransformM),
               e.on("Panzoom.refresh", this.onRefreshM),
               e.on("change", this.onChangeM);
         }
         detach() {
            const { instance: e } = this;
            e.off("initSlide", this.onInitSlide),
               e.off("initSlides", this.onInitSlides),
               e.off("Panzoom.afterTransform", this.onTransformM),
               e.off("Panzoom.refresh", this.onRefreshM),
               e.off("change", this.onChangeM),
               this.cleanup();
         }
      };
      Object.defineProperty(ie, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: ee });
      const ne = Object.assign(Object.assign({}, ee), { key: "t", showOnStart: !0, parentEl: null });
      class oe extends y {
         constructor() {
            super(...arguments),
               Object.defineProperty(this, "ref", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "hidden", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
         }
         get isEnabled() {
            const e = this.ref;
            return e && e.state !== te.Disabled;
         }
         get isHidden() {
            return this.hidden;
         }
         onInit() {
            const e = this.instance,
               t = e.carousel;
            if (this.ref || !t) return;
            const n = this.option("parentEl") || e.footer || e.container;
            n &&
               ((t.options.Thumbs = i({}, this.options, {
                  parentEl: n,
                  classes: { container: "f-thumbs fancybox__thumbs" },
                  Carousel: {
                     Sync: { friction: e.option("Carousel.friction") },
                     on: {
                        click: (e, t) => {
                           t.stopPropagation();
                        },
                     },
                  },
                  on: {
                     ready: (e) => {
                        const t = e.container;
                        t &&
                           this.hidden &&
                           (this.refresh(),
                           (t.style.transition = "none"),
                           this.hide(),
                           t.offsetHeight,
                           queueMicrotask(() => {
                              (t.style.transition = ""), this.show();
                           }));
                     },
                  },
               })),
               t.attachPlugins({ Thumbs: ie }),
               (this.ref = t.plugins.Thumbs),
               this.option("showOnStart") || ((this.ref.state = te.Hidden), (this.hidden = !0)));
         }
         onResize() {
            var e;
            const t = null === (e = this.ref) || void 0 === e ? void 0 : e.container;
            t && (t.style.maxHeight = "");
         }
         onKeydown(e, t) {
            const i = this.option("key");
            i && i === t && this.toggle();
         }
         toggle() {
            const e = this.ref;
            e &&
               e.state !== te.Disabled &&
               (e.state !== te.Hidden ? (this.hidden ? this.show() : this.hide()) : e.build());
         }
         show() {
            const e = this.ref,
               t = e && e.state !== te.Disabled && e.container;
            t &&
               (this.refresh(),
               t.offsetHeight,
               t.removeAttribute("aria-hidden"),
               t.classList.remove("is-hidden"),
               (this.hidden = !1));
         }
         hide() {
            const e = this.ref,
               t = e && e.container;
            t && (this.refresh(), t.offsetHeight, t.classList.add("is-hidden"), t.setAttribute("aria-hidden", "true")),
               (this.hidden = !0);
         }
         refresh() {
            const e = this.ref;
            if (!e || e.state === te.Disabled) return;
            const t = e.container,
               i = (null == t ? void 0 : t.firstChild) || null;
            t && i && i.childNodes.length && (t.style.maxHeight = `${i.getBoundingClientRect().height}px`);
         }
         attach() {
            this.instance.state === p.Init ? this.instance.on("Carousel.init", this.onInit) : this.onInit(),
               this.instance.on("resize", this.onResize),
               this.instance.on("keydown", this.onKeydown);
         }
         detach() {
            var e;
            this.instance.off("Carousel.init", this.onInit),
               this.instance.off("resize", this.onResize),
               this.instance.off("keydown", this.onKeydown),
               null === (e = this.instance.carousel) || void 0 === e || e.detachPlugins(["Thumbs"]),
               (this.ref = null);
         }
      }
      Object.defineProperty(oe, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: ne });
      const se = {
         panLeft: { icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>', change: { panX: -100 } },
         panRight: { icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>', change: { panX: 100 } },
         panUp: { icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>', change: { panY: -100 } },
         panDown: { icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>', change: { panY: 100 } },
         zoomIn: {
            icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
            action: "zoomIn",
         },
         zoomOut: {
            icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
            action: "zoomOut",
         },
         toggle1to1: {
            icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
            action: "toggleZoom",
         },
         toggleZoom: {
            icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
            action: "toggleZoom",
         },
         iterateZoom: {
            icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
            action: "iterateZoom",
         },
         rotateCCW: {
            icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
            action: "rotateCCW",
         },
         rotateCW: {
            icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
            action: "rotateCW",
         },
         flipX: {
            icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
            action: "flipX",
         },
         flipY: {
            icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
            action: "flipY",
         },
         fitX: {
            icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
            action: "fitX",
         },
         fitY: {
            icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
            action: "fitY",
         },
         reset: {
            icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
            action: "reset",
         },
         toggleFS: {
            icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
            action: "toggleFS",
         },
      };
      var re;
      !(function (e) {
         (e[(e.Init = 0)] = "Init"), (e[(e.Ready = 1)] = "Ready"), (e[(e.Disabled = 2)] = "Disabled");
      })(re || (re = {}));
      const ae = {
         tabindex: "-1",
         width: "24",
         height: "24",
         viewBox: "0 0 24 24",
         xmlns: "http://www.w3.org/2000/svg",
      };
      class le extends y {
         constructor() {
            super(...arguments),
               Object.defineProperty(this, "state", { enumerable: !0, configurable: !0, writable: !0, value: re.Init }),
               Object.defineProperty(this, "container", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               });
         }
         onReady(e) {
            var t;
            if (!e.carousel) return;
            let i = this.option("display"),
               n = this.option("absolute"),
               o = this.option("enabled");
            if ("auto" === o) {
               const e = this.instance.carousel;
               let t = 0;
               if (e) for (const i of e.slides) (i.panzoom || "image" === i.type) && t++;
               t || (o = !1);
            }
            o || (i = void 0);
            let s = 0;
            const r = { left: [], middle: [], right: [] };
            if (i)
               for (const e of ["left", "middle", "right"])
                  for (const n of i[e]) {
                     const i = this.createEl(n);
                     i && (null === (t = r[e]) || void 0 === t || t.push(i), s++);
                  }
            let a = null;
            if ((s && (a = this.createContainer()), a)) {
               for (const [e, t] of Object.entries(r)) {
                  const i = document.createElement("div");
                  R(i, "fancybox__toolbar__column is-" + e);
                  for (const e of t) i.appendChild(e);
                  "auto" !== n || "middle" !== e || t.length || (n = !0), a.appendChild(i);
               }
               !0 === n && R(a, "is-absolute"), (this.state = re.Ready), this.onRefresh();
            } else this.state = re.Disabled;
         }
         onClick(e) {
            var t, i;
            const n = this.instance,
               s = n.getSlide(),
               r = null == s ? void 0 : s.panzoom,
               a = e.target,
               l = a && o(a) ? a.dataset : null;
            if (!l) return;
            if (void 0 !== l.fancyboxToggleThumbs)
               return (
                  e.preventDefault(),
                  e.stopPropagation(),
                  void (null === (t = n.plugins.Thumbs) || void 0 === t || t.toggle())
               );
            if (void 0 !== l.fancyboxToggleFullscreen)
               return e.preventDefault(), e.stopPropagation(), void this.instance.toggleFullscreen();
            if (void 0 !== l.fancyboxToggleSlideshow) {
               e.preventDefault(), e.stopPropagation();
               const t = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
               let o = t.isActive;
               return r && "mousemove" === r.panMode && !o && r.reset(), void (o ? t.stop() : t.start());
            }
            const c = l.panzoomAction,
               d = l.panzoomChange;
            if (((d || c) && (e.preventDefault(), e.stopPropagation()), d)) {
               let t = {};
               try {
                  t = JSON.parse(d);
               } catch (e) {}
               r && r.applyChange(t);
            } else c && r && r[c] && r[c]();
         }
         onChange() {
            this.onRefresh();
         }
         onRefresh() {
            if (this.instance.isClosing()) return;
            const e = this.container;
            if (!e) return;
            const t = this.instance.getSlide();
            if (!t || t.state !== f.Ready) return;
            const i = t && !t.error && t.panzoom;
            for (const t of e.querySelectorAll("[data-panzoom-action]"))
               i
                  ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
                  : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
            let n = i && i.canZoomIn(),
               o = i && i.canZoomOut();
            for (const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))
               n
                  ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
                  : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
            for (const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))
               o
                  ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
                  : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
            for (const t of e.querySelectorAll(
               '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
            )) {
               o || n
                  ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
                  : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
               const e = t.querySelector("g");
               e && (e.style.display = n ? "" : "none");
            }
         }
         onDone(e, t) {
            var i;
            null === (i = t.panzoom) ||
               void 0 === i ||
               i.on("afterTransform", () => {
                  this.instance.isCurrentSlide(t) && this.onRefresh();
               }),
               this.instance.isCurrentSlide(t) && this.onRefresh();
         }
         createContainer() {
            const e = this.instance.container;
            if (!e) return null;
            const t = this.option("parentEl") || e,
               i = document.createElement("div");
            return (
               R(i, "fancybox__toolbar"),
               t.prepend(i),
               i.addEventListener("click", this.onClick, { passive: !1, capture: !0 }),
               e && R(e, "has-toolbar"),
               (this.container = i),
               i
            );
         }
         createEl(e) {
            var t;
            const i = this.instance.carousel;
            if (!i) return null;
            if ("toggleFS" === e) return null;
            if ("fullscreen" === e && !this.instance.fsAPI) return null;
            let o = null;
            const s = i.slides.length || 0;
            let r = 0,
               a = 0;
            for (const e of i.slides)
               (e.panzoom || "image" === e.type) && r++, ("image" === e.type || e.downloadSrc) && a++;
            if (s < 2 && ["infobar", "prev", "next"].includes(e)) return o;
            if (void 0 !== se[e] && !r) return null;
            if ("download" === e && !a) return null;
            if ("thumbs" === e) {
               const e = this.instance.plugins.Thumbs;
               if (!e || !e.isEnabled) return null;
            }
            if (
               "slideshow" === e &&
               (!(null === (t = this.instance.carousel) || void 0 === t ? void 0 : t.plugins.Autoplay) || s < 2)
            )
               return null;
            if (void 0 !== se[e]) {
               const t = se[e];
               (o = document.createElement("button")),
                  o.setAttribute("title", this.instance.localize(`{{${e.toUpperCase()}}}`)),
                  R(o, "f-button"),
                  t.action && (o.dataset.panzoomAction = t.action),
                  t.change && (o.dataset.panzoomChange = JSON.stringify(t.change)),
                  o.appendChild(n(this.instance.localize(t.icon)));
            } else {
               const t = (this.option("items") || [])[e];
               t &&
                  ((o = n(this.instance.localize(t.tpl))),
                  "function" == typeof t.click &&
                     o.addEventListener("click", (e) => {
                        e.preventDefault(),
                           e.stopPropagation(),
                           "function" == typeof t.click && t.click.call(this, this, e);
                     }));
            }
            const l = null == o ? void 0 : o.querySelector("svg");
            if (l) for (const [e, t] of Object.entries(ae)) l.getAttribute(e) || l.setAttribute(e, String(t));
            return o;
         }
         removeContainer() {
            const e = this.container;
            e && e.remove(), (this.container = null), (this.state = re.Disabled);
            const t = this.instance.container;
            t && j(t, "has-toolbar");
         }
         attach() {
            const e = this,
               { instance: t } = e;
            t.on("Carousel.initSlides", e.onReady),
               t.on("done", e.onDone),
               t.on("reveal", e.onChange),
               t.on("Carousel.change", e.onChange),
               e.onReady(e.instance);
         }
         detach() {
            const e = this,
               { instance: t } = e;
            t.off("Carousel.initSlides", e.onReady),
               t.off("done", e.onDone),
               t.off("reveal", e.onChange),
               t.off("Carousel.change", e.onChange),
               e.removeContainer();
         }
      }
      Object.defineProperty(le, "defaults", {
         enumerable: !0,
         configurable: !0,
         writable: !0,
         value: {
            absolute: "auto",
            display: {
               left: ["infobar"],
               middle: [],
               right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"],
            },
            enabled: "auto",
            items: {
               infobar: {
                  tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
               },
               download: {
                  tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
               },
               prev: {
                  tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
               },
               next: {
                  tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
               },
               slideshow: {
                  tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
               },
               fullscreen: {
                  tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
               },
               thumbs: {
                  tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
               },
               close: {
                  tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
               },
            },
            parentEl: null,
         },
      });
      const ce = { Hash: w, Html: V, Images: X, Slideshow: Z, Thumbs: oe, Toolbar: le },
         de = function (e, t) {
            let i = !0;
            return (...n) => {
               i &&
                  ((i = !1),
                  e(...n),
                  setTimeout(() => {
                     i = !0;
                  }, t));
            };
         },
         ue = (e, t) => {
            let i = [];
            return (
               e.childNodes.forEach((e) => {
                  e.nodeType !== Node.ELEMENT_NODE || (t && !e.matches(t)) || i.push(e);
               }),
               i
            );
         };
      class he extends y {
         constructor() {
            super(...arguments),
               Object.defineProperty(this, "isDynamic", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
               Object.defineProperty(this, "list", { enumerable: !0, configurable: !0, writable: !0, value: null });
         }
         onRefresh() {
            this.refresh();
         }
         build() {
            let e = this.list;
            return (
               e ||
                  ((e = document.createElement("ul")),
                  R(e, this.cn("list")),
                  e.setAttribute("role", "tablist"),
                  this.instance.container.appendChild(e),
                  R(this.instance.container, this.cn("hasDots")),
                  (this.list = e)),
               e
            );
         }
         refresh() {
            var e;
            const t = this.instance.pages.length,
               i = Math.min(2, this.option("minCount")),
               n = Math.max(2e3, this.option("maxCount")),
               o = this.option("dynamicFrom");
            if (t < i || t > n) return void this.cleanup();
            const s = "number" == typeof o && t > 5 && t >= o,
               r = !this.list || this.isDynamic !== s || this.list.children.length !== t;
            r && this.cleanup();
            const a = this.build();
            if ((E(a, this.cn("isDynamic"), !!s), r)) for (let e = 0; e < t; e++) a.append(this.createItem(e));
            let l,
               c = 0;
            for (const t of [...a.children]) {
               const i = c === this.instance.page;
               i && (l = t),
                  E(t, this.cn("isCurrent"), i),
                  null === (e = t.children[0]) || void 0 === e || e.setAttribute("aria-selected", i ? "true" : "false");
               for (const e of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"]) j(t, this.cn(e));
               c++;
            }
            if (((l = l || a.firstChild), s && l)) {
               const e = l.previousElementSibling,
                  t = e && e.previousElementSibling;
               R(e, this.cn("isPrev")), R(t, this.cn("isBeforePrev"));
               const i = l.nextElementSibling,
                  n = i && i.nextElementSibling;
               R(i, this.cn("isNext")), R(n, this.cn("isAfterNext"));
            }
            this.isDynamic = s;
         }
         createItem(e = 0) {
            var t;
            const i = document.createElement("li");
            i.setAttribute("role", "presentation");
            const o = n(this.instance.localize(this.option("dotTpl"), [["%d", e + 1]]).replace(/\%i/g, e + ""));
            return i.appendChild(o), null === (t = i.children[0]) || void 0 === t || t.setAttribute("role", "tab"), i;
         }
         cleanup() {
            this.list && (this.list.remove(), (this.list = null)),
               (this.isDynamic = !1),
               j(this.instance.container, this.cn("hasDots"));
         }
         attach() {
            this.instance.on(["refresh", "change"], this.onRefresh);
         }
         detach() {
            this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
         }
      }
      Object.defineProperty(he, "defaults", {
         enumerable: !0,
         configurable: !0,
         writable: !0,
         value: {
            classes: {
               list: "f-carousel__dots",
               isDynamic: "is-dynamic",
               hasDots: "has-dots",
               dot: "f-carousel__dot",
               isBeforePrev: "is-before-prev",
               isPrev: "is-prev",
               isCurrent: "is-current",
               isNext: "is-next",
               isAfterNext: "is-after-next",
            },
            dotTpl:
               '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
            dynamicFrom: 11,
            maxCount: 1 / 0,
            minCount: 2,
         },
      });
      const pe = "disabled",
         fe = "next",
         ge = "prev";
      class me extends y {
         constructor() {
            super(...arguments),
               Object.defineProperty(this, "container", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "prev", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "next", { enumerable: !0, configurable: !0, writable: !0, value: null });
         }
         onRefresh() {
            const e = this.instance,
               t = e.pages.length,
               i = e.page;
            if (t < 2) return void this.cleanup();
            this.build();
            let n = this.prev,
               o = this.next;
            n &&
               o &&
               (n.removeAttribute(pe),
               o.removeAttribute(pe),
               e.isInfinite || (i <= 0 && n.setAttribute(pe, ""), i >= t - 1 && o.setAttribute(pe, "")));
         }
         createButton(e) {
            const t = this.instance,
               i = document.createElement("button");
            i.setAttribute("tabindex", "0"),
               i.setAttribute("title", t.localize(`{{${e.toUpperCase()}}}`)),
               R(i, this.cn("button") + " " + this.cn(e === fe ? "isNext" : "isPrev"));
            const n = t.isRTL ? (e === fe ? ge : fe) : e;
            var o;
            return (
               (i.innerHTML = t.localize(this.option(`${n}Tpl`))),
               (i.dataset[
                  `carousel${((o = e), o ? (o.match("^[a-z]") ? o.charAt(0).toUpperCase() + o.substring(1) : o) : "")}`
               ] = "true"),
               i
            );
         }
         build() {
            let e = this.container;
            e ||
               ((this.container = e = document.createElement("div")),
               R(e, this.cn("container")),
               this.instance.container.appendChild(e)),
               this.next || (this.next = e.appendChild(this.createButton(fe))),
               this.prev || (this.prev = e.appendChild(this.createButton(ge)));
         }
         cleanup() {
            this.prev && this.prev.remove(),
               this.next && this.next.remove(),
               this.container && this.container.remove(),
               (this.prev = null),
               (this.next = null),
               (this.container = null);
         }
         attach() {
            this.instance.on(["refresh", "change"], this.onRefresh);
         }
         detach() {
            this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
         }
      }
      Object.defineProperty(me, "defaults", {
         enumerable: !0,
         configurable: !0,
         writable: !0,
         value: {
            classes: { container: "f-carousel__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" },
            nextTpl:
               '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
            prevTpl:
               '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
         },
      });
      class ve extends y {
         constructor() {
            super(...arguments),
               Object.defineProperty(this, "selectedIndex", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "target", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "nav", { enumerable: !0, configurable: !0, writable: !0, value: null });
         }
         addAsTargetFor(e) {
            (this.target = this.instance), (this.nav = e), this.attachEvents();
         }
         addAsNavFor(e) {
            (this.nav = this.instance), (this.target = e), this.attachEvents();
         }
         attachEvents() {
            this.nav &&
               this.target &&
               ((this.nav.options.initialSlide = this.target.options.initialPage),
               this.nav.on("ready", this.onNavReady),
               this.nav.state === K.Ready && this.onNavReady(this.nav),
               this.target.on("ready", this.onTargetReady),
               this.target.state === K.Ready && this.onTargetReady(this.target));
         }
         onNavReady(e) {
            e.on("createSlide", this.onNavCreateSlide),
               e.on("Panzoom.click", this.onNavClick),
               e.on("Panzoom.touchEnd", this.onNavTouch),
               this.onTargetChange();
         }
         onTargetReady(e) {
            e.on("change", this.onTargetChange), e.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
         }
         onNavClick(e, t, i) {
            i.pointerType || this.onNavTouch(e, e.panzoom, i);
         }
         onNavTouch(e, t, i) {
            var n, o;
            if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3) return;
            const s = i.target,
               { nav: r, target: a } = this;
            if (!r || !a || !s) return;
            const l = s.closest("[data-index]");
            if ((i.stopPropagation(), i.preventDefault(), !l)) return;
            const c = parseInt(l.dataset.index || "", 10) || 0,
               d = a.getPageForSlide(c),
               u = r.getPageForSlide(c);
            r.slideTo(u),
               a.slideTo(d, {
                  friction:
                     null === (o = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === o
                        ? void 0
                        : o.Sync.option("friction"),
               }),
               this.markSelectedSlide(c);
         }
         onNavCreateSlide(e, t) {
            t.index === this.selectedIndex && this.markSelectedSlide(t.index);
         }
         onTargetChange() {
            const { target: e, nav: t } = this;
            if (!e || !t) return;
            if (t.state !== K.Ready || e.state !== K.Ready) return;
            const i = e.pages[e.page].slides[0].index,
               n = t.getPageForSlide(i);
            this.markSelectedSlide(i), t.slideTo(n);
         }
         markSelectedSlide(e) {
            const { nav: t } = this;
            t &&
               t.state === K.Ready &&
               ((this.selectedIndex = e),
               [...t.slides].map((t) => {
                  t.el && t.el.classList[t.index === e ? "add" : "remove"]("is-nav-selected");
               }));
         }
         attach() {
            let e = this.options.target,
               t = this.options.nav;
            e ? this.addAsNavFor(e) : t && this.addAsTargetFor(t);
         }
         detach() {
            this.nav &&
               (this.nav.off("ready", this.onNavReady),
               this.nav.off("createSlide", this.onNavCreateSlide),
               this.nav.off("Panzoom.click", this.onNavClick),
               this.nav.off("Panzoom.touchEnd", this.onNavTouch)),
               (this.nav = null),
               this.target &&
                  (this.target.off("ready", this.onTargetReady),
                  this.target.off("refresh", this.onTargetChange),
                  this.target.off("change", this.onTargetChange)),
               (this.target = null);
         }
      }
      Object.defineProperty(ve, "defaults", {
         enumerable: !0,
         configurable: !0,
         writable: !0,
         value: { friction: 0.35 },
      });
      const ye = { Navigation: me, Dots: he, Sync: ve };
      class be extends v {
         get axis() {
            return this.isHorizontal ? "e" : "f";
         }
         get isEnabled() {
            return this.state === K.Ready;
         }
         get isInfinite() {
            let e = !1;
            const t = this.contentDim,
               i = this.viewportDim;
            return this.pages.length >= 2 && t > 1.5 * i && (e = this.option("infinite")), e;
         }
         get isRTL() {
            return "rtl" === this.option("direction");
         }
         get isHorizontal() {
            return "x" === this.option("axis");
         }
         constructor(e, t = {}, i = {}) {
            if (
               (super(),
               Object.defineProperty(this, "userOptions", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: {},
               }),
               Object.defineProperty(this, "userPlugins", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: {},
               }),
               Object.defineProperty(this, "bp", { enumerable: !0, configurable: !0, writable: !0, value: "" }),
               Object.defineProperty(this, "lp", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "state", { enumerable: !0, configurable: !0, writable: !0, value: K.Init }),
               Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "prevPage", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "container", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               Object.defineProperty(this, "viewport", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "track", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "slides", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
               Object.defineProperty(this, "pages", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
               Object.defineProperty(this, "panzoom", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "inTransition", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: new Set(),
               }),
               Object.defineProperty(this, "contentDim", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "viewportDim", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               "string" == typeof e && (e = document.querySelector(e)),
               !e || !o(e))
            )
               throw new Error("No Element found");
            (this.container = e),
               (this.slideNext = de(this.slideNext.bind(this), 150)),
               (this.slidePrev = de(this.slidePrev.bind(this), 150)),
               (this.userOptions = t),
               (this.userPlugins = i),
               queueMicrotask(() => {
                  this.processOptions();
               });
         }
         processOptions() {
            const e = i({}, be.defaults, this.userOptions);
            let n = "";
            const o = e.breakpoints;
            if (o && t(o))
               for (const [s, r] of Object.entries(o)) window.matchMedia(s).matches && t(r) && ((n += s), i(e, r));
            (n === this.bp && this.state !== K.Init) ||
               ((this.bp = n),
               this.state === K.Ready && (e.initialSlide = this.pages[this.page].slides[0].index),
               this.state !== K.Init && this.destroy(),
               super.setOptions(e),
               !1 === this.option("enabled")
                  ? this.attachEvents()
                  : setTimeout(() => {
                       this.init();
                    }, 0));
         }
         init() {
            (this.state = K.Init),
               this.emit("init"),
               this.attachPlugins(Object.assign(Object.assign({}, be.Plugins), this.userPlugins)),
               this.initLayout(),
               this.initSlides(),
               this.updateMetrics(),
               this.setInitialPosition(),
               this.initPanzoom(),
               this.attachEvents(),
               (this.state = K.Ready),
               this.emit("ready");
         }
         initLayout() {
            const { container: e } = this,
               t = this.option("classes");
            R(e, this.cn("container")),
               E(e, t.isLTR, !this.isRTL),
               E(e, t.isRTL, this.isRTL),
               E(e, t.isVertical, !this.isHorizontal),
               E(e, t.isHorizontal, this.isHorizontal);
            let i = this.option("viewport") || e.querySelector(`.${t.viewport}`);
            i ||
               ((i = document.createElement("div")), R(i, t.viewport), i.append(...ue(e, `.${t.slide}`)), e.prepend(i));
            let n = this.option("track") || e.querySelector(`.${t.track}`);
            n || ((n = document.createElement("div")), R(n, t.track), n.append(...Array.from(i.childNodes))),
               n.setAttribute("aria-live", "polite"),
               i.contains(n) || i.prepend(n),
               (this.viewport = i),
               (this.track = n),
               this.emit("initLayout");
         }
         initSlides() {
            const { track: e } = this;
            if (e) {
               (this.slides = []),
                  [...ue(e, `.${this.cn("slide")}`)].forEach((e) => {
                     if (o(e)) {
                        const t = J({ el: e, isDom: !0, index: this.slides.length });
                        this.slides.push(t), this.emit("initSlide", t, this.slides.length);
                     }
                  });
               for (let e of this.option("slides", [])) {
                  const t = J(e);
                  (t.index = this.slides.length), this.slides.push(t), this.emit("initSlide", t, this.slides.length);
               }
               this.emit("initSlides");
            }
         }
         setInitialPage() {
            let e = 0;
            const t = this.option("initialSlide");
            (e =
               "number" == typeof t ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0),
               (this.page = e);
         }
         setInitialPosition() {
            if (!this.track || !this.pages.length) return;
            const e = this.isHorizontal;
            let t = this.page;
            this.pages[t] || (this.page = t = 0);
            const i = this.pages[t].pos * (this.isRTL && e ? 1 : -1),
               n = e ? `${i}px` : "0",
               o = e ? "0" : `${i}px`;
            (this.track.style.transform = `translate3d(${n}, ${o}, 0) scale(1)`),
               this.option("adaptiveHeight") && this.setViewportHeight();
         }
         initPanzoom() {
            this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
            const e = this.option("Panzoom") || {};
            (this.panzoom = new _(
               this.viewport,
               i(
                  {},
                  {
                     content: this.track,
                     zoom: !1,
                     panOnlyZoomed: !1,
                     lockAxis: this.isHorizontal ? "x" : "y",
                     infinite: this.isInfinite,
                     click: !1,
                     dblClick: !1,
                     touch: (e) => !(this.pages.length < 2 && !e.options.infinite),
                     bounds: () => this.getBounds(),
                     maxVelocity: (e) =>
                        Math.abs(e.target[this.axis] - e.current[this.axis]) < 2 * this.viewportDim ? 100 : 0,
                  },
                  e
               )
            )),
               this.panzoom.on("*", (e, t, ...i) => {
                  this.emit(`Panzoom.${t}`, e, ...i);
               }),
               this.panzoom.on("decel", this.onDecel),
               this.panzoom.on("refresh", this.onRefresh),
               this.panzoom.on("beforeTransform", this.onBeforeTransform),
               this.panzoom.on("endAnimation", this.onEndAnimation);
         }
         attachEvents() {
            const e = this.container;
            e &&
               (e.addEventListener("click", this.onClick, { passive: !1, capture: !1 }),
               e.addEventListener("slideTo", this.onSlideTo)),
               window.addEventListener("resize", this.onResize);
         }
         createPages() {
            let e = [];
            const { contentDim: t, viewportDim: i } = this,
               n = this.option("slidesPerPage");
            if ("number" == typeof n && t > i) {
               for (let t = 0; t < this.slides.length; t += n)
                  e.push(Q({ index: t, slides: this.slides.slice(t, t + n) }));
               return e;
            }
            let o = 0,
               s = 0;
            for (const t of this.slides)
               (!e.length || s + t.dim > i) && (e.push(Q()), (o = e.length - 1), (s = 0)),
                  (s += t.dim + t.gap),
                  e[o].slides.push(t);
            return e;
         }
         processPages() {
            const e = this.pages,
               { contentDim: t, viewportDim: i } = this,
               n = this.option("center"),
               o = this.option("fill"),
               s = o && n && t > i && !this.isInfinite;
            if (
               (e.forEach((e, o) => {
                  (e.index = o), (e.pos = e.slides[0].pos), (e.dim = 0);
                  for (const [t, i] of e.slides.entries())
                     (e.dim += i.dim), t < e.slides.length - 1 && (e.dim += i.gap);
                  s && e.pos + 0.5 * e.dim < 0.5 * i
                     ? (e.pos = 0)
                     : s && e.pos + 0.5 * e.dim >= t - 0.5 * i
                     ? (e.pos = t - i)
                     : n && (e.pos += -0.5 * (i - e.dim));
               }),
               e.forEach((e, n) => {
                  o && !this.isInfinite && t > i && ((e.pos = Math.max(e.pos, 0)), (e.pos = Math.min(e.pos, t - i))),
                     (e.pos = S(e.pos, 1e3)),
                     (e.dim = S(e.dim, 1e3)),
                     e.pos < 0.1 && e.pos > -0.1 && (e.pos = 0);
               }),
               this.isInfinite)
            )
               return e;
            const r = [];
            let a;
            return (
               e.forEach((e) => {
                  const t = Object.assign({}, e);
                  a && t.pos === a.pos
                     ? ((a.dim += t.dim), (a.slides = [...a.slides, ...t.slides]))
                     : ((t.index = r.length), (a = t), r.push(t));
               }),
               r
            );
         }
         getPageFromIndex(e = 0) {
            const t = this.pages.length;
            let i;
            return (
               (e = parseInt((e || 0).toString()) || 0),
               (i = this.isInfinite ? ((e % t) + t) % t : Math.max(Math.min(e, t - 1), 0)),
               i
            );
         }
         getSlideMetrics(e) {
            const t = this.isHorizontal ? "width" : "height";
            let i = 0,
               n = 0,
               o = e.el;
            o
               ? (i = parseFloat(o.dataset[t] || "") || 0)
               : ((o = document.createElement("div")),
                 (o.style.visibility = "hidden"),
                 R(o, this.cn("slide") + " " + e.class),
                 (this.track || document.body).prepend(o)),
               i
                  ? ((o.style[t] = `${i}px`), (o.style["width" === t ? "height" : "width"] = ""))
                  : (i = o.getBoundingClientRect()[t]);
            const s = getComputedStyle(o);
            return (
               "content-box" === s.boxSizing &&
                  (this.isHorizontal
                     ? ((i += parseFloat(s.paddingLeft) || 0), (i += parseFloat(s.paddingRight) || 0))
                     : ((i += parseFloat(s.paddingTop) || 0), (i += parseFloat(s.paddingBottom) || 0))),
               (n = parseFloat(s[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0),
               this.isHorizontal,
               e.el || o.remove(),
               { dim: S(i, 1e3), gap: S(n, 1e3) }
            );
         }
         getBounds() {
            let e = { min: 0, max: 0 };
            if (this.isInfinite) e = { min: -1 / 0, max: 1 / 0 };
            else if (this.pages.length) {
               const t = this.pages[0].pos,
                  i = this.pages[this.pages.length - 1].pos;
               e = this.isRTL && this.isHorizontal ? { min: t, max: i } : { min: -1 * i, max: -1 * t };
            }
            return { x: this.isHorizontal ? e : { min: 0, max: 0 }, y: this.isHorizontal ? { min: 0, max: 0 } : e };
         }
         repositionSlides() {
            let e,
               { viewport: t, viewportDim: i, contentDim: n, page: o, pages: s } = this,
               r = 0,
               a = 0,
               l = 0,
               c = 0;
            this.panzoom ? (c = -1 * this.panzoom.current[this.axis]) : s[o] && (c = s[o].pos || 0),
               (e = this.isHorizontal ? (this.isRTL ? "right" : "left") : "top"),
               this.isRTL && this.isHorizontal && (c *= -1);
            for (const t of this.slides)
               t.el
                  ? ("top" === e ? ((t.el.style.right = ""), (t.el.style.left = "")) : (t.el.style.top = ""),
                    t.index !== r ? (t.el.style[e] = 0 === a ? "" : `${S(a, 1e3)}px`) : (t.el.style[e] = ""),
                    (l += t.dim + t.gap),
                    r++)
                  : (a += t.dim + t.gap);
            if (this.isInfinite && l && t) {
               const o = this.isHorizontal;
               let s = getComputedStyle(t),
                  r = "padding",
                  d = o ? "Right" : "Bottom",
                  u = parseFloat(s[r + (o ? "Left" : "Top")]);
               (c -= u), (i += u), (i += parseFloat(s[r + d]));
               for (const t of this.slides)
                  t.el &&
                     (S(t.pos) < S(i) &&
                        S(t.pos + t.dim + t.gap) < S(c) &&
                        S(c) > S(n - i) &&
                        (t.el.style[e] = `${S(a + l, 1e3)}px`),
                     S(t.pos + t.gap) >= S(n - i) &&
                        S(t.pos) > S(c + i) &&
                        S(c) < S(i) &&
                        (t.el.style[e] = `-${S(l, 1e3)}px`));
            }
            let d,
               u,
               h = [...this.inTransition];
            if ((h.length > 1 && ((d = this.pages[h[0]]), (u = this.pages[h[1]])), d && u)) {
               let t = 0;
               for (const i of this.slides)
                  i.el
                     ? this.inTransition.has(i.index) &&
                       d.slides.indexOf(i) < 0 &&
                       (i.el.style[e] = `${S(t + (d.pos - u.pos), 1e3)}px`)
                     : (t += i.dim + i.gap);
            }
         }
         createSlideEl(e) {
            if (!this.track || !e) return;
            if (e.el) return;
            const t = document.createElement("div");
            R(t, this.cn("slide")), R(t, e.class), R(t, e.customClass), e.html && (t.innerHTML = e.html);
            const i = [];
            this.slides.forEach((e, t) => {
               e.el && i.push(t);
            });
            const n = e.index;
            let o = null;
            if (i.length) {
               let e = i.reduce((e, t) => (Math.abs(t - n) < Math.abs(e - n) ? t : e));
               o = this.slides[e];
            }
            const s = o && o.el ? (o.index < e.index ? o.el.nextSibling : o.el) : null;
            this.track.insertBefore(t, this.track.contains(s) ? s : null), (e.el = t), this.emit("createSlide", e);
         }
         removeSlideEl(e, t = !1) {
            const i = e.el;
            if (!i) return;
            if ((j(i, this.cn("isSelected")), e.isDom && !t))
               return (
                  i.removeAttribute("aria-hidden"),
                  i.removeAttribute("data-index"),
                  j(i, this.cn("isSelected")),
                  void (i.style.left = "")
               );
            this.emit("removeSlide", e);
            const n = new CustomEvent("animationend");
            i.dispatchEvent(n), e.el && e.el.remove(), (e.el = null);
         }
         transitionTo(e = 0, t = this.option("transition")) {
            if (!t) return !1;
            const { pages: i, panzoom: n } = this;
            e = parseInt((e || 0).toString()) || 0;
            const o = this.getPageFromIndex(e);
            if (!n || !i[o] || i.length < 2 || i[this.page].slides[0].dim < this.viewportDim) return !1;
            const s = e > this.page ? 1 : -1,
               r = this.pages[o].pos * (this.isRTL ? 1 : -1);
            if (this.page === o && S(r, 1e3) === S(n.target[this.axis], 1e3)) return !1;
            this.clearTransitions();
            const a = n.isResting;
            R(this.container, this.cn("inTransition"));
            const l = this.pages[this.page].slides[0],
               c = this.pages[o].slides[0];
            this.inTransition.add(c.index), this.createSlideEl(c);
            let d = l.el,
               u = c.el;
            a || "slide" === t || ((t = "fadeFast"), (d = null));
            const h = this.isRTL ? "next" : "prev",
               p = this.isRTL ? "prev" : "next";
            return (
               d &&
                  (this.inTransition.add(l.index),
                  (l.transition = t),
                  d.addEventListener("animationend", this.onAnimationEnd),
                  d.classList.add(`f-${t}Out`, `to-${s > 0 ? p : h}`)),
               u &&
                  ((c.transition = t),
                  u.addEventListener("animationend", this.onAnimationEnd),
                  u.classList.add(`f-${t}In`, `from-${s > 0 ? h : p}`)),
               n.panTo({ x: this.isHorizontal ? r : 0, y: this.isHorizontal ? 0 : r, friction: 0 }),
               this.onChange(o),
               !0
            );
         }
         manageSlideVisiblity() {
            const e = new Set(),
               t = new Set(),
               i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
            for (const n of this.slides) i.has(n) ? e.add(n) : t.add(n);
            for (const t of this.inTransition) e.add(this.slides[t]);
            for (const t of e) this.createSlideEl(t), this.lazyLoadSlide(t);
            for (const i of t) e.has(i) || this.removeSlideEl(i);
            this.markSelectedSlides(), this.repositionSlides();
         }
         markSelectedSlides() {
            if (!this.pages[this.page] || !this.pages[this.page].slides) return;
            const e = "aria-hidden";
            let t = this.cn("isSelected");
            if (t)
               for (const i of this.slides)
                  i.el &&
                     ((i.el.dataset.index = `${i.index}`),
                     this.pages[this.page].slides.includes(i)
                        ? (i.el.classList.contains(t) || (R(i.el, t), this.emit("selectSlide", i)),
                          i.el.removeAttribute(e))
                        : (i.el.classList.contains(t) && (j(i.el, t), this.emit("unselectSlide", i)),
                          i.el.setAttribute(e, "true")));
         }
         flipInfiniteTrack() {
            const e = this.panzoom;
            if (!e || !this.isInfinite) return;
            const t = "x" === this.option("axis") ? "e" : "f",
               { viewportDim: i, contentDim: n } = this;
            let o = e.current[t],
               s = e.target[t] - o,
               r = 0,
               a = 0.5 * i,
               l = n;
            this.isRTL && this.isHorizontal
               ? (o < -a && ((r = -1), (o += l)), o > l - a && ((r = 1), (o -= l)))
               : (o > a && ((r = 1), (o -= l)), o < -l + a && ((r = -1), (o += l))),
               r && ((e.current[t] = o), (e.target[t] = o + s));
         }
         lazyLoadSlide(e) {
            const t = this,
               i = e && e.el;
            if (!i) return;
            const s = new Set(),
               r = "f-fadeIn";
            i.querySelectorAll("[data-lazy-srcset]").forEach((e) => {
               e instanceof HTMLImageElement && s.add(e);
            });
            let a = Array.from(i.querySelectorAll("[data-lazy-src]"));
            i.dataset.lazySrc && a.push(i),
               a.map((e) => {
                  e instanceof HTMLImageElement
                     ? s.add(e)
                     : o(e) &&
                       ((e.style.backgroundImage = `url('${e.dataset.lazySrc || ""}')`), delete e.dataset.lazySrc);
               });
            const l = (e, i, n) => {
               n && (n.remove(), (n = null)),
                  i.complete &&
                     (i.classList.add(r),
                     setTimeout(() => {
                        i.classList.remove(r);
                     }, 350),
                     (i.style.display = "")),
                  this.option("adaptiveHeight") &&
                     e.el &&
                     this.pages[this.page].slides.indexOf(e) > -1 &&
                     (t.updateMetrics(), t.setViewportHeight()),
                  this.emit("load", e);
            };
            for (const t of s) {
               let i = null;
               (t.src = t.dataset.lazySrcset || t.dataset.lazySrc || ""),
                  delete t.dataset.lazySrc,
                  delete t.dataset.lazySrcset,
                  (t.style.display = "none"),
                  t.addEventListener("error", () => {
                     l(e, t, i);
                  }),
                  t.addEventListener("load", () => {
                     l(e, t, i);
                  }),
                  setTimeout(() => {
                     t.parentNode && e.el && (t.complete ? l(e, t, i) : ((i = n(d)), t.parentNode.insertBefore(i, t)));
                  }, 300);
            }
         }
         onAnimationEnd(e) {
            var t;
            const i = e.target,
               n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
               o = this.slides[n],
               s = e.animationName;
            if (!i || !o || !s) return;
            const r = !!this.inTransition.has(n) && o.transition;
            r && s.substring(0, r.length + 2) === `f-${r}` && this.inTransition.delete(n),
               this.inTransition.size || this.clearTransitions(),
               n === this.page &&
                  (null === (t = this.panzoom) || void 0 === t ? void 0 : t.isResting) &&
                  this.emit("settle");
         }
         onDecel(e, t = 0, i = 0) {
            const { isRTL: n, isHorizontal: o, axis: s, pages: r } = this,
               a = r.length,
               l = Math.abs(Math.atan2(i, t) / (Math.PI / 180));
            let c = 0;
            if (((c = l > 45 && l < 135 ? (o ? 0 : i) : o ? t : 0), !a)) return;
            const d = this.option("dragFree");
            let u = this.page,
               h = n && o ? 1 : -1;
            const p = e.target[s] * h,
               f = e.current[s] * h;
            let { pageIndex: g } = this.getPageFromPosition(p),
               { pageIndex: m } = this.getPageFromPosition(f);
            d
               ? this.onChange(g)
               : ((u = m),
                 Math.abs(c) > 5 && (u = n && o ? (c < 0 ? u - 1 : u + 1) : c < 0 ? u + 1 : u - 1),
                 this.slideTo(u, { transition: !1, friction: e.option("decelFriction") }));
         }
         onClick(e) {
            const t = e.target,
               i = t && o(t) ? t.dataset : null;
            let n, s;
            i &&
               (void 0 !== i.carouselPage
                  ? ((s = "slideTo"), (n = i.carouselPage))
                  : void 0 !== i.carouselNext
                  ? (s = "slideNext")
                  : void 0 !== i.carouselPrev && (s = "slidePrev")),
               s
                  ? (e.preventDefault(), e.stopPropagation(), t && !t.hasAttribute("disabled") && this[s](n))
                  : this.emit("click", e);
         }
         onSlideTo(e) {
            const t = e.detail || 0;
            this.slideTo(this.getPageForSlide(t), { friction: 0 });
         }
         onChange(e, t = 0) {
            const i = this.page;
            (this.prevPage = i),
               (this.page = e),
               this.option("adaptiveHeight") && this.setViewportHeight(),
               e !== i && (this.markSelectedSlides(), this.emit("change", e, i, t));
         }
         onRefresh() {
            let e = this.contentDim,
               t = this.viewportDim;
            this.updateMetrics(),
               (this.contentDim === e && this.viewportDim === t) ||
                  this.slideTo(this.page, { friction: 0, transition: !1 });
         }
         onResize() {
            this.option("breakpoints") && this.processOptions();
         }
         onBeforeTransform(e) {
            this.lp !== e.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
               (this.lp = e.current.e);
         }
         onEndAnimation() {
            this.inTransition.size || this.emit("settle");
         }
         reInit(e = null, t = null) {
            this.destroy(),
               (this.state = K.Init),
               (this.userOptions = e || this.userOptions),
               (this.userPlugins = t || this.userPlugins),
               this.processOptions();
         }
         slideTo(e = 0, { friction: t = this.option("friction"), transition: i = this.option("transition") } = {}) {
            if (this.state === K.Destroy) return;
            const { axis: n, isHorizontal: o, isRTL: s, pages: r, panzoom: a } = this,
               l = r.length,
               c = s && o ? 1 : -1;
            if (!a || !l) return;
            if (this.transitionTo(e, i)) return;
            const d = this.getPageFromIndex(e);
            let u = r[d].pos;
            if (this.isInfinite) {
               const t = this.contentDim,
                  i = a.target[n] * c;
               if (2 === l) u += t * Math.floor(parseFloat(e + "") / 2);
               else {
                  const e = i;
                  u = [u, u - t, u + t].reduce(function (t, i) {
                     return Math.abs(i - e) < Math.abs(t - e) ? i : t;
                  });
               }
            }
            (u *= c),
               Math.abs(a.target[n] - u) < 0.1 ||
                  (a.panTo({ x: o ? u : 0, y: o ? 0 : u, friction: t }), this.onChange(d));
         }
         slideToClosest(e) {
            if (this.panzoom) {
               const { pageIndex: t } = this.getPageFromPosition(this.panzoom.current[this.isHorizontal ? "e" : "f"]);
               this.slideTo(t, e);
            }
         }
         slideNext() {
            this.slideTo(this.page + 1);
         }
         slidePrev() {
            this.slideTo(this.page - 1);
         }
         clearTransitions() {
            this.inTransition.clear(), j(this.container, this.cn("inTransition"));
            const e = ["to-prev", "to-next", "from-prev", "from-next"];
            for (const t of this.slides) {
               const i = t.el;
               if (i) {
                  i.removeEventListener("animationend", this.onAnimationEnd), i.classList.remove(...e);
                  const n = t.transition;
                  n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
               }
            }
            this.manageSlideVisiblity();
         }
         prependSlide(e) {
            var t, i;
            let n = Array.isArray(e) ? e : [e];
            for (const e of n.reverse()) this.slides.unshift(J(e));
            for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
            const o = (null === (t = this.pages[this.page]) || void 0 === t ? void 0 : t.pos) || 0;
            (this.page += n.length), this.updateMetrics();
            const s = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0;
            if (this.panzoom) {
               const e = this.isRTL ? o - s : s - o;
               (this.panzoom.target.e -= e), (this.panzoom.current.e -= e), this.panzoom.requestTick();
            }
         }
         appendSlide(e) {
            let t = Array.isArray(e) ? e : [e];
            for (const e of t) {
               const t = J(e);
               (t.index = this.slides.length), this.slides.push(t), this.emit("initSlide", e, this.slides.length);
            }
            this.updateMetrics();
         }
         removeSlide(e) {
            const t = this.slides.length;
            (e = ((e % t) + t) % t), this.removeSlideEl(this.slides[e], !0), this.slides.splice(e, 1);
            for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
            this.updateMetrics(), this.slideTo(this.page, { friction: 0, transition: !1 });
         }
         updateMetrics() {
            const { panzoom: e, viewport: t, track: i, isHorizontal: n } = this;
            if (!i) return;
            const o = n ? "width" : "height";
            if (t) {
               let e = S(t.getBoundingClientRect()[o], 1e3),
                  i = getComputedStyle(t),
                  s = "padding",
                  r = n ? "Right" : "Bottom";
               (e -= parseFloat(i[s + (n ? "Left" : "Top")]) + parseFloat(i[s + r])), (this.viewportDim = e);
            }
            let s,
               r = this.pages.length,
               a = 0;
            for (const [e, t] of this.slides.entries()) {
               let i = 0,
                  n = 0;
               !t.el && s ? ((i = s.dim), (n = s.gap)) : (({ dim: i, gap: n } = this.getSlideMetrics(t)), (s = t)),
                  (i = S(i, 1e3)),
                  (n = S(n, 1e3)),
                  (t.dim = i),
                  (t.gap = n),
                  (t.pos = a),
                  (a += i),
                  (this.isInfinite || e < this.slides.length - 1) && (a += n);
            }
            const l = this.contentDim;
            (a = S(a, 1e3)),
               (this.contentDim = a),
               e && ((e.contentRect[o] = a), (e.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] = a)),
               (this.pages = this.createPages()),
               (this.pages = this.processPages()),
               this.state === K.Init && this.setInitialPage(),
               (this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
               e &&
                  r === this.pages.length &&
                  Math.abs(a - l) > 0.5 &&
                  ((e.target[this.axis] = -1 * this.pages[this.page].pos),
                  (e.current[this.axis] = -1 * this.pages[this.page].pos),
                  e.stop()),
               this.manageSlideVisiblity(),
               this.emit("refresh");
         }
         getProgress(e, t = !1) {
            void 0 === e && (e = this.page);
            const i = this,
               n = i.panzoom,
               o = i.pages[e] || 0;
            if (!o || !n) return 0;
            let s = -1 * n.current.e,
               r = i.contentDim;
            var a = [
               S((s - o.pos) / (1 * o.dim), 1e3),
               S((s + r - o.pos) / (1 * o.dim), 1e3),
               S((s - r - o.pos) / (1 * o.dim), 1e3),
            ].reduce(function (e, t) {
               return Math.abs(t) < Math.abs(e) ? t : e;
            });
            return t ? a : Math.max(-1, Math.min(1, a));
         }
         setViewportHeight() {
            const { page: e, pages: t, viewport: i, isHorizontal: n } = this;
            if (!i || !t[e]) return;
            let o = 0;
            n &&
               this.track &&
               ((this.track.style.height = "auto"),
               t[e].slides.forEach((e) => {
                  e.el && (o = Math.max(o, e.el.offsetHeight));
               })),
               (i.style.height = o ? `${o}px` : "");
         }
         getPageForSlide(e) {
            for (const t of this.pages) for (const i of t.slides) if (i.index === e) return t.index;
            return -1;
         }
         getVisibleSlides(e = 0) {
            var t;
            const i = new Set();
            let { contentDim: n, viewportDim: o, pages: s, page: r } = this;
            n = n + (null === (t = this.slides[this.slides.length - 1]) || void 0 === t ? void 0 : t.gap) || 0;
            let a = 0;
            (a = this.panzoom ? -1 * this.panzoom.current[this.axis] : (s[r] && s[r].pos) || 0),
               this.isInfinite && (a -= Math.floor(a / n) * n),
               this.isRTL && this.isHorizontal && (a *= -1);
            const l = a - o * e,
               c = a + o * (e + 1),
               d = this.isInfinite ? [-1, 0, 1] : [0];
            for (const e of this.slides)
               for (const t of d) {
                  const o = e.pos + t * n,
                     s = e.pos + e.dim + e.gap + t * n;
                  o < c && s > l && i.add(e);
               }
            return i;
         }
         getPageFromPosition(e) {
            const { viewportDim: t, contentDim: i } = this,
               n = this.pages.length,
               o = this.slides.length,
               s = this.slides[o - 1];
            let r = 0,
               a = 0,
               l = 0;
            const c = this.option("center");
            c && (e += 0.5 * t), this.isInfinite || (e = Math.max(this.slides[0].pos, Math.min(e, s.pos)));
            const d = i + s.gap;
            (l = Math.floor(e / d) || 0), (e -= l * d);
            let u = s,
               h = this.slides.find((t) => {
                  const i = e + (u && !c ? 0.5 * u.dim : 0);
                  return (u = t), t.pos <= i && t.pos + t.dim + t.gap > i;
               });
            return h || (h = s), (a = this.getPageForSlide(h.index)), (r = a + l * n), { page: r, pageIndex: a };
         }
         destroy() {
            if ([K.Destroy].includes(this.state)) return;
            this.state = K.Destroy;
            const { container: e, viewport: t, track: i, slides: n, panzoom: o } = this,
               s = this.option("classes");
            e.removeEventListener("click", this.onClick, { passive: !1, capture: !1 }),
               e.removeEventListener("slideTo", this.onSlideTo),
               window.removeEventListener("resize", this.onResize),
               o && (o.destroy(), (this.panzoom = null)),
               n &&
                  n.forEach((e) => {
                     this.removeSlideEl(e);
                  }),
               this.detachPlugins(),
               t && t.offsetParent && i && i.offsetParent && t.replaceWith(...i.childNodes);
            for (const [t, i] of Object.entries(s)) "container" !== t && i && e.classList.remove(i);
            (this.track = null), (this.viewport = null), (this.page = 0), (this.slides = []);
            const r = this.events.get("ready");
            (this.events = new Map()), r && this.events.set("ready", r);
         }
      }
      Object.defineProperty(be, "Panzoom", { enumerable: !0, configurable: !0, writable: !0, value: _ }),
         Object.defineProperty(be, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
               viewport: null,
               track: null,
               enabled: !0,
               slides: [],
               axis: "x",
               transition: "fade",
               preload: 1,
               slidesPerPage: "auto",
               initialPage: 0,
               friction: 0.12,
               Panzoom: { decelFriction: 0.12 },
               center: !0,
               infinite: !0,
               fill: !0,
               dragFree: !1,
               adaptiveHeight: !1,
               direction: "ltr",
               classes: {
                  container: "f-carousel",
                  viewport: "f-carousel__viewport",
                  track: "f-carousel__track",
                  slide: "f-carousel__slide",
                  isLTR: "is-ltr",
                  isRTL: "is-rtl",
                  isHorizontal: "is-horizontal",
                  isVertical: "is-vertical",
                  inTransition: "in-transition",
                  isSelected: "is-selected",
               },
               l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d" },
            },
         }),
         Object.defineProperty(be, "Plugins", { enumerable: !0, configurable: !0, writable: !0, value: ye });
      const we = "with-fancybox",
         xe = "hide-scrollbar",
         Se = "--fancybox-scrollbar-compensate",
         Te = "--fancybox-body-margin",
         Ce = "is-animated",
         ke = "is-loading",
         Ee = function () {
            var e = window.getSelection();
            return e && "Range" === e.type;
         };
      let Pe = null,
         Ae = null;
      const Oe = new Map();
      let Me = 0;
      class Le extends v {
         get isIdle() {
            return this.idle;
         }
         get isCompact() {
            return this.option("compact");
         }
         constructor(e = [], t = {}, i = {}) {
            super(t),
               Object.defineProperty(this, "userSlides", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
               Object.defineProperty(this, "userPlugins", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: {},
               }),
               Object.defineProperty(this, "idle", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
               Object.defineProperty(this, "idleTimer", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "clickTimer", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "pwt", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "ignoreFocusChange", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: !1,
               }),
               Object.defineProperty(this, "state", { enumerable: !0, configurable: !0, writable: !0, value: p.Init }),
               Object.defineProperty(this, "id", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
               Object.defineProperty(this, "container", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "footer", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "carousel", { enumerable: !0, configurable: !0, writable: !0, value: null }),
               Object.defineProperty(this, "lastFocus", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: null,
               }),
               Object.defineProperty(this, "prevMouseMoveEvent", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: void 0,
               }),
               Object.defineProperty(this, "fsAPI", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
               (this.fsAPI = (() => {
                  let e,
                     t = "",
                     i = "",
                     n = "";
                  return (
                     document.fullscreenEnabled
                        ? ((t = "requestFullscreen"), (i = "exitFullscreen"), (n = "fullscreenElement"))
                        : document.webkitFullscreenEnabled &&
                          ((t = "webkitRequestFullscreen"),
                          (i = "webkitExitFullscreen"),
                          (n = "webkitFullscreenElement")),
                     t &&
                        (e = {
                           request: function (e) {
                              return "webkitRequestFullscreen" === t ? e[t](Element.ALLOW_KEYBOARD_INPUT) : e[t]();
                           },
                           exit: function () {
                              return document[n] && document[i]();
                           },
                           isFullscreen: function () {
                              return document[n];
                           },
                        }),
                     e
                  );
               })()),
               (this.id = t.id || ++Me),
               Oe.set(this.id, this),
               (this.userSlides = e),
               (this.userPlugins = i),
               queueMicrotask(() => {
                  this.init();
               });
         }
         init() {
            if (this.state === p.Destroy) return;
            (this.state = p.Init),
               this.attachPlugins(Object.assign(Object.assign({}, Le.Plugins), this.userPlugins)),
               this.emit("init"),
               !0 === this.option("hideScrollbar") &&
                  (() => {
                     if (!r) return;
                     const e = document.body;
                     if (e.classList.contains(xe)) return;
                     const t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
                        i = e.currentStyle || window.getComputedStyle(e),
                        n = parseFloat(i.marginRight);
                     document.documentElement.style.setProperty(Se, `${t}px`),
                        n && e.style.setProperty(Te, `${n}px`),
                        e.classList.add(xe);
                  })(),
               this.initLayout();
            const e = () => {
               this.initCarousel(this.userSlides),
                  (this.state = p.Ready),
                  this.attachEvents(),
                  this.emit("ready"),
                  setTimeout(() => {
                     this.container && this.container.setAttribute("aria-hidden", "false");
                  }, 16);
            };
            this.option("Fullscreen.autoStart") && this.fsAPI && !this.fsAPI.isFullscreen()
               ? this.fsAPI
                    .request(this.container)
                    .then(() => e())
                    .catch(() => e())
               : e();
         }
         initLayout() {
            var e, t;
            const i = this.option("parentEl") || document.body,
               o = n(this.localize(this.option("tpl.main") || ""));
            o &&
               (o.setAttribute("id", `fancybox-${this.id}`),
               o.setAttribute("aria-label", this.localize("{{MODAL}}")),
               o.classList.toggle("is-compact", this.isCompact),
               R(o, this.option("mainClass") || ""),
               (this.container = o),
               (this.footer = o.querySelector(".fancybox__footer")),
               i.appendChild(o),
               R(document.documentElement, we),
               (Pe && Ae) ||
                  ((Pe = document.createElement("span")),
                  R(Pe, "fancybox-focus-guard"),
                  Pe.setAttribute("tabindex", "0"),
                  Pe.setAttribute("aria-hidden", "true"),
                  Pe.setAttribute("aria-label", "Focus guard"),
                  (Ae = Pe.cloneNode()),
                  null === (e = o.parentElement) || void 0 === e || e.insertBefore(Pe, o),
                  null === (t = o.parentElement) || void 0 === t || t.append(Ae)),
               this.option("animated") &&
                  (R(o, Ce),
                  setTimeout(() => {
                     this.isClosing() || j(o, Ce);
                  }, 350)),
               this.emit("initLayout"));
         }
         initCarousel(e) {
            const t = this.container;
            if (!t) return;
            const n = t.querySelector(".fancybox__carousel");
            if (!n) return;
            const o = (this.carousel = new be(
               n,
               i(
                  {},
                  {
                     slides: e,
                     transition: "fade",
                     Panzoom: {
                        lockAxis: this.option("dragToClose") ? "xy" : "x",
                        infinite: !!this.option("dragToClose") && "y",
                     },
                     Dots: !1,
                     Navigation: {
                        classes: {
                           container: "fancybox__nav",
                           button: "f-button",
                           isNext: "is-next",
                           isPrev: "is-prev",
                        },
                     },
                     initialPage: this.option("startIndex"),
                     l10n: this.option("l10n"),
                  },
                  this.option("Carousel") || {}
               )
            ));
            o.on("*", (e, t, ...i) => {
               this.emit(`Carousel.${t}`, e, ...i);
            }),
               o.on(["ready", "change"], () => {
                  var e;
                  const t = this.getSlide();
                  t && (null === (e = t.panzoom) || void 0 === e || e.updateControls()), this.manageCaption(t);
               }),
               o.on("removeSlide", (e, t) => {
                  t.closeBtnEl && t.closeBtnEl.remove(),
                     (t.closeBtnEl = void 0),
                     t.captionEl && t.captionEl.remove(),
                     (t.captionEl = void 0),
                     t.spinnerEl && t.spinnerEl.remove(),
                     (t.spinnerEl = void 0),
                     (t.state = void 0);
               }),
               o.on("Panzoom.touchStart", () => {
                  this.isCompact || this.endIdle();
               }),
               o.on("settle", () => {
                  this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(),
                     this.option("autoFocus") && this.checkFocus();
               }),
               this.option("dragToClose") &&
                  (o.on("Panzoom.afterTransform", (e, t) => {
                     const i = this.getSlide();
                     if (i && T(i.el)) return;
                     const n = this.container;
                     if (n) {
                        const e = Math.abs(t.current.f),
                           i = e < 1 ? "" : Math.max(0.5, Math.min(1, 1 - (e / t.contentRect.fitHeight) * 1.5));
                        n.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                           n.style.setProperty("--fancybox-opacity", i + "");
                     }
                  }),
                  o.on("Panzoom.touchEnd", (e, t, i) => {
                     var n;
                     const o = this.getSlide();
                     if (o && T(o.el)) return;
                     if (
                        t.isMobile &&
                        document.activeElement &&
                        -1 !==
                           ["TEXTAREA", "INPUT"].indexOf(
                              null === (n = document.activeElement) || void 0 === n ? void 0 : n.nodeName
                           )
                     )
                        return;
                     const s = Math.abs(t.dragOffset.y);
                     "y" === t.lockedAxis &&
                        (s >= 200 || (s >= 50 && t.dragOffset.time < 300)) &&
                        (i && i.cancelable && i.preventDefault(),
                        this.close(i, "f-throwOut" + (t.current.f < 0 ? "Up" : "Down")));
                  })),
               o.on(["change"], (e) => {
                  var t;
                  let i = null === (t = this.getSlide()) || void 0 === t ? void 0 : t.triggerEl;
                  if (i) {
                     const t = new CustomEvent("slideTo", { bubbles: !0, cancelable: !0, detail: e.page });
                     i.dispatchEvent(t);
                  }
               }),
               o.on(["refresh", "change"], (e) => {
                  const t = this.container;
                  if (!t) return;
                  for (const i of t.querySelectorAll("[data-fancybox-current-index]")) i.innerHTML = e.page + 1;
                  for (const i of t.querySelectorAll("[data-fancybox-count]")) i.innerHTML = e.pages.length;
                  if (!e.isInfinite) {
                     for (const i of t.querySelectorAll("[data-fancybox-next]"))
                        e.page < e.pages.length - 1
                           ? (i.removeAttribute("disabled"), i.removeAttribute("tabindex"))
                           : (i.setAttribute("disabled", ""), i.setAttribute("tabindex", "-1"));
                     for (const i of t.querySelectorAll("[data-fancybox-prev]"))
                        e.page > 0
                           ? (i.removeAttribute("disabled"), i.removeAttribute("tabindex"))
                           : (i.setAttribute("disabled", ""), i.setAttribute("tabindex", "-1"));
                  }
                  const i = this.getSlide();
                  if (!i) return;
                  let n = i.downloadSrc || "";
                  n || "image" !== i.type || i.error || "string" != typeof i.src || (n = i.src);
                  for (const e of t.querySelectorAll("[data-fancybox-download]")) {
                     const t = i.downloadFilename;
                     n
                        ? (e.removeAttribute("disabled"),
                          e.removeAttribute("tabindex"),
                          e.setAttribute("href", n),
                          e.setAttribute("download", t || n),
                          e.setAttribute("target", "_blank"))
                        : (e.setAttribute("disabled", ""),
                          e.setAttribute("tabindex", "-1"),
                          e.removeAttribute("href"),
                          e.removeAttribute("download"));
                  }
               }),
               this.emit("initCarousel");
         }
         attachEvents() {
            const e = this.container;
            e &&
               (e.addEventListener("click", this.onClick, { passive: !1, capture: !1 }),
               e.addEventListener("wheel", this.onWheel, { passive: !1, capture: !1 }),
               document.addEventListener("keydown", this.onKeydown, { passive: !1, capture: !0 }),
               document.addEventListener("visibilitychange", this.onVisibilityChange, !1),
               document.addEventListener("mousemove", this.onMousemove),
               this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0),
               window.addEventListener("resize", this.onResize));
         }
         detachEvents() {
            const e = this.container;
            e &&
               (document.removeEventListener("keydown", this.onKeydown, { passive: !1, capture: !0 }),
               e.removeEventListener("wheel", this.onWheel, { passive: !1, capture: !1 }),
               e.removeEventListener("click", this.onClick, { passive: !1, capture: !1 }),
               document.removeEventListener("mousemove", this.onMousemove),
               window.removeEventListener("resize", this.onResize),
               document.removeEventListener("visibilitychange", this.onVisibilityChange, !1),
               document.removeEventListener("focus", this.onFocus, !0));
         }
         onClick(e) {
            var t, i;
            const { container: n, isCompact: o } = this;
            if (!n || this.isClosing()) return;
            !o && this.option("idle") && this.resetIdle();
            const s = document.activeElement;
            if (Ee() && s && n.contains(s)) return;
            const r = e.composedPath()[0];
            if (r === (null === (t = this.carousel) || void 0 === t ? void 0 : t.container)) return;
            if (r.closest(".f-spinner") || r.closest("[data-fancybox-close]"))
               return e.preventDefault(), void this.close(e);
            if (r.closest("[data-fancybox-prev]")) return e.preventDefault(), void this.prev();
            if (r.closest("[data-fancybox-next]")) return e.preventDefault(), void this.next();
            if (o && "image" === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.type))
               return void (this.clickTimer
                  ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
                  : (this.clickTimer = setTimeout(() => {
                       this.toggleIdle(), (this.clickTimer = null);
                    }, 350)));
            if ((this.emit("click", e), e.defaultPrevented)) return;
            let a = !1;
            if (r.closest(".fancybox__content")) {
               if (s) {
                  if (s.closest("[contenteditable]")) return;
                  r.matches(l) || s.blur();
               }
               if (Ee()) return;
               a = this.option("contentClick");
            } else r.closest(".fancybox__carousel") && !r.matches(l) && (a = this.option("backdropClick"));
            "close" === a
               ? (e.preventDefault(), this.close(e))
               : "next" === a
               ? (e.preventDefault(), this.next())
               : "prev" === a && (e.preventDefault(), this.prev());
         }
         onWheel(e) {
            const t = this.option("wheel", e),
               i = "slide" === t,
               n = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (e, t) {
                  return Math.abs(t) > Math.abs(e) ? t : e;
               }),
               o = Math.max(-1, Math.min(1, n)),
               s = Date.now();
            this.pwt && s - this.pwt < 300
               ? i && e.preventDefault()
               : ((this.pwt = s),
                 this.emit("wheel", e),
                 e.defaultPrevented ||
                    ("close" === t
                       ? (e.preventDefault(), this.close(e))
                       : "slide" === t && (e.preventDefault(), this[o > 0 ? "prev" : "next"]())));
         }
         onKeydown(e) {
            if (!this.isTopmost()) return;
            this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
            const t = e.key,
               i = this.option("keyboard");
            if (!i || e.ctrlKey || e.altKey || e.shiftKey) return;
            const n = e.composedPath()[0],
               s = document.activeElement && document.activeElement.classList,
               r = (s && s.contains("f-button")) || n.dataset.carouselPage || n.dataset.carouselIndex;
            if (
               "Escape" !== t &&
               !r &&
               o(n) &&
               (n.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n.nodeName))
            )
               return;
            this.emit("keydown", t, e);
            const a = i[t];
            "function" == typeof this[a] && (e.preventDefault(), this[a]());
         }
         onResize() {
            const e = this.container;
            if (!e) return;
            const t = this.isCompact;
            e.classList.toggle("is-compact", t),
               this.manageCaption(this.getSlide()),
               this.isCompact ? this.clearIdle() : this.endIdle(),
               this.emit("resize");
         }
         onFocus(e) {
            this.isTopmost() && this.checkFocus(e);
         }
         onMousemove(e) {
            (this.prevMouseMoveEvent = e), !this.isCompact && this.option("idle") && this.resetIdle();
         }
         onVisibilityChange() {
            "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
         }
         manageCloseBtn(e) {
            const t = this.optionFor(e, "closeButton") || !1;
            if ("auto" === t) {
               const e = this.plugins.Toolbar;
               if (e && e.state === re.Ready) return;
            }
            if (!t) return;
            if (!e.contentEl || e.closeBtnEl) return;
            const i = this.option("tpl.closeButton");
            if (i) {
               const t = n(this.localize(i));
               (e.closeBtnEl = e.contentEl.appendChild(t)), e.el && R(e.el, "has-close-btn");
            }
         }
         manageCaption(e) {
            var t, i;
            const n = "fancybox__caption",
               o = "has-caption",
               s = this.container;
            if (!s) return;
            const r = this.isCompact || this.option("commonCaption"),
               a = !r;
            if (
               (this.caption && this.stop(this.caption),
               a && this.caption && (this.caption.remove(), (this.caption = null)),
               r && !this.caption)
            )
               for (const e of (null === (t = this.carousel) || void 0 === t ? void 0 : t.slides) || [])
                  e.captionEl &&
                     (e.captionEl.remove(),
                     (e.captionEl = void 0),
                     j(e.el, o),
                     null === (i = e.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
            if ((e || (e = this.getSlide()), !e || (r && !this.isCurrentSlide(e)))) return;
            const l = e.el;
            let c = this.optionFor(e, "caption", "");
            if ("string" != typeof c || !c.length)
               return void (
                  r &&
                  this.caption &&
                  this.animate(this.caption, "f-fadeOut", () => {
                     var e;
                     null === (e = this.caption) || void 0 === e || e.remove(), (this.caption = null);
                  })
               );
            let d = null;
            if (a) {
               if (((d = e.captionEl || null), l && !d)) {
                  const t = `fancybox__caption_${this.id}_${e.index}`;
                  (d = document.createElement("div")),
                     R(d, n),
                     d.setAttribute("id", t),
                     (e.captionEl = l.appendChild(d)),
                     R(l, o),
                     l.setAttribute("aria-labelledby", t);
               }
            } else (d = this.caption), d || (d = s.querySelector("." + n)), d || ((d = document.createElement("div")), (d.dataset.fancyboxCaption = ""), R(d, n), (d.innerHTML = c), (this.footer || s).prepend(d)), R(s, o), (this.caption = d);
            d && (d.innerHTML = c);
         }
         checkFocus(e) {
            var t;
            const i = document.activeElement || null;
            (i && (null === (t = this.container) || void 0 === t ? void 0 : t.contains(i))) || this.focus(e);
         }
         focus(e) {
            var t;
            if (this.ignoreFocusChange) return;
            const i = document.activeElement || null,
               n = (null == e ? void 0 : e.target) || null,
               o = this.container,
               s = this.getSlide();
            if (!o || !(null === (t = this.carousel) || void 0 === t ? void 0 : t.viewport)) return;
            if (!e && i && o.contains(i)) return;
            const r = s && s.state === f.Ready ? s.el : null;
            if (!r || r.contains(i) || o === i) return;
            e && e.cancelable && e.preventDefault(), (this.ignoreFocusChange = !0);
            const a = Array.from(o.querySelectorAll(l));
            let d = [],
               u = null;
            for (let e of a) {
               const t = !e.offsetParent || e.closest('[aria-hidden="true"]'),
                  i = r && r.contains(e),
                  n = !this.carousel.viewport.contains(e);
               e === o || ((i || n) && !t)
                  ? (d.push(e),
                    void 0 !== e.dataset.origTabindex && (e.tabIndex = parseFloat(e.dataset.origTabindex)),
                    e.removeAttribute("data-orig-tabindex"),
                    (!e.hasAttribute("autoFocus") && u) || (u = e))
                  : ((e.dataset.origTabindex =
                       void 0 === e.dataset.origTabindex
                          ? e.getAttribute("tabindex") || void 0
                          : e.dataset.origTabindex),
                    (e.tabIndex = -1));
            }
            let h = null;
            e
               ? (!n || d.indexOf(n) < 0) &&
                 ((h = u || o),
                 d.length && (i === Ae ? (h = d[0]) : (this.lastFocus !== o && i !== Pe) || (h = d[d.length - 1])))
               : (h = s && "image" === s.type ? o : u || o),
               h && c(h),
               (this.lastFocus = document.activeElement),
               (this.ignoreFocusChange = !1);
         }
         next() {
            const e = this.carousel;
            e && e.pages.length > 1 && e.slideNext();
         }
         prev() {
            const e = this.carousel;
            e && e.pages.length > 1 && e.slidePrev();
         }
         jumpTo(...e) {
            this.carousel && this.carousel.slideTo(...e);
         }
         isTopmost() {
            var e;
            return (null === (e = Le.getInstance()) || void 0 === e ? void 0 : e.id) == this.id;
         }
         animate(e = null, t = "", i) {
            if (!e || !t) return void (i && i());
            this.stop(e);
            const n = (o) => {
               o.target === e &&
                  e.dataset.animationName &&
                  (e.removeEventListener("animationend", n), delete e.dataset.animationName, i && i(), j(e, t));
            };
            (e.dataset.animationName = t), e.addEventListener("animationend", n), R(e, t);
         }
         stop(e) {
            e && e.dispatchEvent(new CustomEvent("animationend", { bubbles: !1, cancelable: !0, currentTarget: e }));
         }
         setContent(e, t = "", i = !0) {
            if (this.isClosing()) return;
            const s = e.el;
            if (!s) return;
            let r = null;
            if (
               (o(t)
                  ? (r = t)
                  : ((r = n(t + "")), o(r) || ((r = document.createElement("div")), (r.innerHTML = t + ""))),
               ["img", "picture", "iframe", "video", "audio"].includes(r.nodeName.toLowerCase()))
            ) {
               const e = document.createElement("div");
               e.appendChild(r), (r = e);
            }
            o(r) && e.filter && !e.error && (r = r.querySelector(e.filter)),
               r && o(r)
                  ? (R(r, "fancybox__content"),
                    e.id && r.setAttribute("id", e.id),
                    ("none" !== r.style.display && "none" !== getComputedStyle(r).getPropertyValue("display")) ||
                       (r.style.display = e.display || this.option("defaultDisplay") || "flex"),
                    s.classList.add(`has-${e.error ? "error" : e.type || "unknown"}`),
                    s.prepend(r),
                    (e.contentEl = r),
                    i && this.revealContent(e),
                    this.manageCloseBtn(e),
                    this.manageCaption(e))
                  : this.setError(e, "{{ELEMENT_NOT_FOUND}}");
         }
         revealContent(e, t) {
            const i = e.el,
               n = e.contentEl;
            i &&
               n &&
               (this.emit("reveal", e),
               this.hideLoading(e),
               (e.state = f.Opening),
               (t = this.isOpeningSlide(e) ? (void 0 === t ? this.optionFor(e, "showClass") : t) : "f-fadeIn")
                  ? this.animate(n, t, () => {
                       this.done(e);
                    })
                  : this.done(e));
         }
         done(e) {
            this.isClosing() ||
               ((e.state = f.Ready),
               this.emit("done", e),
               R(e.el, "is-done"),
               this.isCurrentSlide(e) &&
                  this.option("autoFocus") &&
                  queueMicrotask(() => {
                     this.option("autoFocus") && (this.option("autoFocus") ? this.focus() : this.checkFocus());
                  }),
               this.isOpeningSlide(e) && !this.isCompact && this.option("idle") && this.setIdle());
         }
         isCurrentSlide(e) {
            const t = this.getSlide();
            return !(!e || !t) && t.index === e.index;
         }
         isOpeningSlide(e) {
            var t, i;
            return (
               null === (null === (t = this.carousel) || void 0 === t ? void 0 : t.prevPage) &&
               e.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
            );
         }
         showLoading(e) {
            e.state = f.Loading;
            const t = e.el;
            t &&
               (R(t, ke),
               this.emit("loading", e),
               e.spinnerEl ||
                  setTimeout(() => {
                     if (!this.isClosing() && !e.spinnerEl && e.state === f.Loading) {
                        let i = n(d);
                        (e.spinnerEl = i), t.prepend(i), this.animate(i, "f-fadeIn");
                     }
                  }, 250));
         }
         hideLoading(e) {
            const t = e.el;
            if (!t) return;
            const i = e.spinnerEl;
            this.isClosing()
               ? null == i || i.remove()
               : (j(t, ke),
                 i &&
                    this.animate(i, "f-fadeOut", () => {
                       i.remove();
                    }),
                 e.state === f.Loading && (this.emit("loaded", e), (e.state = f.Ready)));
         }
         setError(e, t) {
            if (this.isClosing()) return;
            this.emit("error"), (e.error = t), this.hideLoading(e), this.clearContent(e);
            const i = document.createElement("div");
            i.classList.add("fancybox-error"),
               (i.innerHTML = this.localize(t || "<p>{{ERROR}}</p>")),
               this.setContent(e, i);
         }
         clearContent(e) {
            var t;
            null === (t = this.carousel) || void 0 === t || t.emit("removeSlide", e),
               e.contentEl && (e.contentEl.remove(), (e.contentEl = void 0)),
               e.closeBtnEl && (e.closeBtnEl.remove(), (e.closeBtnEl = void 0));
            const i = e.el;
            i && (j(i, ke), j(i, "has-error"), j(i, "has-unknown"), j(i, `has-${e.type || "unknown"}`));
         }
         getSlide() {
            var e;
            const t = this.carousel;
            return (
               (null === (e = null == t ? void 0 : t.pages[null == t ? void 0 : t.page]) || void 0 === e
                  ? void 0
                  : e.slides[0]) || void 0
            );
         }
         close(e, t) {
            if (this.isClosing()) return;
            const i = new Event("shouldClose", { bubbles: !0, cancelable: !0 });
            if ((this.emit("shouldClose", i, e), i.defaultPrevented)) return;
            e && e.cancelable && (e.preventDefault(), e.stopPropagation());
            const n = this.fsAPI,
               o = () => {
                  this.proceedClose(e, t);
               };
            n && n.isFullscreen() ? Promise.resolve(n.exit()).then(() => o()) : o();
         }
         clearIdle() {
            this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null);
         }
         setIdle(e = !1) {
            const t = () => {
               this.clearIdle(), (this.idle = !0), R(this.container, "is-idle"), this.emit("setIdle");
            };
            if ((this.clearIdle(), !this.isClosing()))
               if (e) t();
               else {
                  const e = this.option("idle");
                  e && (this.idleTimer = setTimeout(t, e));
               }
         }
         endIdle() {
            this.clearIdle(),
               this.idle && !this.isClosing() && ((this.idle = !1), j(this.container, "is-idle"), this.emit("endIdle"));
         }
         resetIdle() {
            this.endIdle(), this.setIdle();
         }
         toggleIdle() {
            this.idle ? this.endIdle() : this.setIdle(!0);
         }
         toggleFullscreen() {
            const e = this.fsAPI;
            e && (e.isFullscreen() ? e.exit() : this.container && e.request(this.container));
         }
         isClosing() {
            return [p.Closing, p.CustomClosing, p.Destroy].includes(this.state);
         }
         proceedClose(e, t) {
            var i;
            (this.state = p.Closing), this.clearIdle(), this.detachEvents();
            const n = this.container,
               o = this.carousel,
               r = this.getSlide(),
               a = r && this.option("placeFocusBack") ? r.triggerEl || this.option("trigger") : null;
            if (
               (a && (s(a) ? c(a) : a.focus()),
               n &&
                  (R(n, "is-closing"),
                  n.setAttribute("aria-hidden", "true"),
                  this.option("animated") && R(n, Ce),
                  (n.style.pointerEvents = "none")),
               o)
            ) {
               o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy();
               for (const e of o.slides) {
                  (e.state = f.Closing), this.hideLoading(e);
                  const t = e.contentEl;
                  t && this.stop(t);
                  const i = null == e ? void 0 : e.panzoom;
                  i && (i.stop(), i.detachEvents(), i.detachObserver()),
                     this.isCurrentSlide(e) || o.emit("removeSlide", e);
               }
            }
            this.emit("close", e),
               this.state !== p.CustomClosing
                  ? (void 0 === t && r && (t = this.optionFor(r, "hideClass")),
                    t && r
                       ? (this.animate(r.contentEl, t, () => {
                            o && o.emit("removeSlide", r);
                         }),
                         setTimeout(() => {
                            this.destroy();
                         }, 500))
                       : this.destroy())
                  : setTimeout(() => {
                       this.destroy();
                    }, 500);
         }
         destroy() {
            var e;
            if (this.state === p.Destroy) return;
            (this.state = p.Destroy), null === (e = this.carousel) || void 0 === e || e.destroy();
            const t = this.container;
            t && t.remove(), Oe.delete(this.id);
            const i = Le.getInstance();
            i
               ? i.focus()
               : (Pe && (Pe.remove(), (Pe = null)),
                 Ae && (Ae.remove(), (Ae = null)),
                 j(document.documentElement, we),
                 (() => {
                    if (!r) return;
                    const e = document,
                       t = e.body;
                    t.classList.remove(xe), t.style.setProperty(Te, ""), e.documentElement.style.setProperty(Se, "");
                 })(),
                 this.emit("destroy"));
         }
         static bind(e, t, i) {
            if (!r) return;
            let n,
               s = "",
               a = {};
            if (
               (void 0 === e
                  ? (n = document.body)
                  : "string" == typeof e
                  ? ((n = document.body), (s = e), "object" == typeof t && (a = t || {}))
                  : ((n = e), "string" == typeof t && (s = t), "object" == typeof i && (a = i || {})),
               !n || !o(n))
            )
               return;
            s = s || "[data-fancybox]";
            const l = Le.openers.get(n) || new Map();
            l.set(s, a), Le.openers.set(n, l), 1 === l.size && n.addEventListener("click", Le.fromEvent);
         }
         static unbind(e, t) {
            let i,
               n = "";
            if (
               ("string" == typeof e ? ((i = document.body), (n = e)) : ((i = e), "string" == typeof t && (n = t)), !i)
            )
               return;
            const o = Le.openers.get(i);
            o && n && o.delete(n), (n && o) || (Le.openers.delete(i), i.removeEventListener("click", Le.fromEvent));
         }
         static destroy() {
            let e;
            for (; (e = Le.getInstance()); ) e.destroy();
            for (const e of Le.openers.keys()) e.removeEventListener("click", Le.fromEvent);
            Le.openers = new Map();
         }
         static fromEvent(e) {
            if (e.defaultPrevented) return;
            if (e.button && 0 !== e.button) return;
            if (e.ctrlKey || e.metaKey || e.shiftKey) return;
            let t = e.composedPath()[0];
            const n = t.closest("[data-fancybox-trigger]");
            if (n) {
               const e = n.dataset.fancyboxTrigger || "",
                  i = document.querySelectorAll(`[data-fancybox="${e}"]`),
                  o = parseInt(n.dataset.fancyboxIndex || "", 10) || 0;
               t = i[o] || t;
            }
            if (!(t && t instanceof Element)) return;
            let o, s, r, a;
            if (
               ([...Le.openers].reverse().find(
                  ([e, i]) =>
                     !(
                        !e.contains(t) ||
                        ![...i].reverse().find(([i, n]) => {
                           let l = t.closest(i);
                           return !!l && ((o = e), (s = i), (r = l), (a = n), !0);
                        })
                     )
               ),
               !o || !s || !r)
            )
               return;
            (a = a || {}), e.preventDefault(), (t = r);
            let l = [],
               c = i({}, h, a);
            (c.event = e), (c.trigger = t), (c.delegate = n);
            const d = c.groupAll,
               u = c.groupAttr,
               p = u && t ? t.getAttribute(`${u}`) : "";
            if (
               ((!t || p || d) && (l = [].slice.call(o.querySelectorAll(s))),
               t && !d && (l = p ? l.filter((e) => e.getAttribute(`${u}`) === p) : [t]),
               !l.length)
            )
               return;
            const f = Le.getInstance();
            return f && f.options.trigger && l.indexOf(f.options.trigger) > -1
               ? void 0
               : (t && (c.startIndex = l.indexOf(t)), Le.fromNodes(l, c));
         }
         static fromSelector(e, t) {
            let i = null,
               n = "";
            if (
               ("string" == typeof e
                  ? ((i = document.body), (n = e))
                  : e instanceof HTMLElement && "string" == typeof t && ((i = e), (n = t)),
               !i || !n)
            )
               return !1;
            const o = Le.openers.get(i);
            if (!o) return !1;
            const s = o.get(n);
            return !!s && Le.fromNodes(Array.from(i.querySelectorAll(n)), s);
         }
         static fromNodes(e, t) {
            t = i({}, h, t);
            const n = [];
            for (const i of e) {
               const e = i.dataset || {},
                  o =
                     e.src || i.getAttribute("href") || i.getAttribute("currentSrc") || i.getAttribute("src") || void 0;
               let s;
               const r = t.delegate;
               let a;
               r &&
                  n.length === t.startIndex &&
                  (s = r instanceof HTMLImageElement ? r : r.querySelector("img:not([aria-hidden])")),
                  s || (s = i instanceof HTMLImageElement ? i : i.querySelector("img:not([aria-hidden])")),
                  s &&
                     ((a = s.currentSrc || s.src || void 0),
                     !a && s.dataset && (a = s.dataset.lazySrc || s.dataset.src || void 0));
               const l = { src: o, triggerEl: i, thumbEl: s, thumbElSrc: a, thumbSrc: a };
               for (const t in e) "fancybox" !== t && (l[t] = e[t] + "");
               n.push(l);
            }
            return new Le(n, t);
         }
         static getInstance(e) {
            return e
               ? Oe.get(e)
               : Array.from(Oe.values())
                    .reverse()
                    .find((e) => !e.isClosing() && e) || null;
         }
         static getSlide() {
            var e;
            return (null === (e = Le.getInstance()) || void 0 === e ? void 0 : e.getSlide()) || null;
         }
         static show(e = [], t = {}) {
            return new Le(e, t);
         }
         static next() {
            const e = Le.getInstance();
            e && e.next();
         }
         static prev() {
            const e = Le.getInstance();
            e && e.prev();
         }
         static close(e = !0, ...t) {
            if (e) for (const e of Oe.values()) e.close(...t);
            else {
               const e = Le.getInstance();
               e && e.close(...t);
            }
         }
      }
      Object.defineProperty(Le, "version", { enumerable: !0, configurable: !0, writable: !0, value: "5.0.15" }),
         Object.defineProperty(Le, "defaults", { enumerable: !0, configurable: !0, writable: !0, value: h }),
         Object.defineProperty(Le, "Plugins", { enumerable: !0, configurable: !0, writable: !0, value: ce }),
         Object.defineProperty(Le, "openers", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
         (e.Fancybox = Le);
   }),
   $(".companies-slider").slick({
      infinite: !0,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: `   <button type="button" class="slick-next">\n  <img src='${
         location.origin + location.pathname
      }wp-content/themes/Doctor/assets/images/companies/rightArr.png' alt="">\n    </button>`,
      prevArrow: `  <button type="button" class="slick-prev">\n  <img src='${
         location.origin + location.pathname
      }wp-content/themes/Doctor/assets/images/companies/leftArr.png' alt="" />\n</button>`,
      responsive: [
         { breakpoint: 1201, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: !0, arrows: !1, dots: !0 } },
         { breakpoint: 930, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: !0, arrows: !1, dots: !0 } },
         { breakpoint: 615, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: !0, arrows: !1, dots: !1 } },
      ],
   }),
   Fancybox.bind("[data-fancybox]", {});
const accordionItemHeaders = document.querySelectorAll(".accordion__item-title");
accordionItemHeaders.forEach((e) => {
   e.addEventListener("click", (t) => {
      e.classList.toggle("active");
      const i = e.nextElementSibling;
      e.classList.contains("active") ? (i.style.maxHeight = i.scrollHeight + "px") : (i.style.maxHeight = 0);
   });
});
const phoneInput = document.querySelectorAll("input[data-phone]");
phoneInput.forEach((e) => {
   e.addEventListener("input", () => {
      e.value = e.value.replace(/\D/, "");
   });
});
const buttons = document.querySelectorAll(".more__button"),
   hiddenCards = document.querySelectorAll("[data-card]");
function calcScroll() {
   let e = document.createElement("div");
   (e.style.width = "50px"),
      (e.style.height = "50px"),
      (e.style.overflowY = "scroll"),
      (e.style.visibility = "hidden"),
      document.body.appendChild(e);
   let t = e.offsetWidth - e.clientWidth;
   return e.remove(), t;
}
buttons.forEach((e) => {
   e.addEventListener("click", (t) => {
      t.preventDefault(),
         hiddenCards.forEach((t) => {
            "hidden" === t.dataset.card
               ? ((t.style.display = "block"), (e.textContent = "Скрыть >"), (t.dataset.card = "open"))
               : "open" === t.dataset.card &&
                 ((t.style.display = "none"), (e.textContent = "Посмотреть все услуги >"), (t.dataset.card = "hidden"));
         });
   });
});
const menuBtn = document.querySelectorAll(".menu"),
   menuContent = document.querySelector(".header__mobile-box");
menuBtn.forEach((e) => {
   e.addEventListener("click", () => {
      menuContent.classList.toggle("header__mobile-box--hidden");
   });
});
const popupBtn = document.querySelector(".top__btn"),
   modalPopup = document.querySelector(".top__popup"),
   closePopupBtn = document.querySelector(".top__popup-close"),
   scroll = calcScroll();
popupBtn.addEventListener("click", (e) => {
   e.preventDefault(),
      (modalPopup.style.display = "block"),

      (document.body.style.marginRight = `${scroll}px`);
}),
   closePopupBtn.addEventListener("click", () => {
      (modalPopup.style.display = "none"),

         (document.body.style.marginRight = "0px");
   }),
   modalPopup.addEventListener("click", (e) => {
      e.target === modalPopup &&
         ((modalPopup.style.display = "none"),

         (document.body.style.marginRight = "0px"));
   });
