(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    393: function (t, e, n) {
      "use strict";
      var c = n(3),
        o = n(394);
      c(
        { target: "String", proto: !0, forced: n(395)("link") },
        {
          link: function (t) {
            return o(this, "a", "href", t);
          },
        }
      );
    },
    394: function (t, e, n) {
      var c = n(6),
        o = n(44),
        l = n(21),
        r = /"/g,
        d = c("".replace);
      t.exports = function (t, e, n, c) {
        var h = l(o(t)),
          f = "<" + e;
        return (
          "" !== n && (f += " " + n + '="' + d(l(c), r, "&quot;") + '"'),
          f + ">" + h + "</" + e + ">"
        );
      };
    },
    395: function (t, e, n) {
      var c = n(5);
      t.exports = function (t) {
        return c(function () {
          var e = ""[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      };
    },
    404: function (t, e, n) {
      t.exports = {};
    },
    416: function (t, e, n) {
      "use strict";
      n(404);
    },
    420: function (t, e, n) {
      "use strict";
      n(19), n(7), n(393);
      var c = n(1),
        o = n(50),
        l = c.default.extend({
          name: "OtherLines",
          props: {
            collectionFolder: { type: String, default: "collections" },
            collectionName: { type: String, required: !0 },
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          computed: {
            menu: function () {
              var t = this;
              return this.items.filter(function (e) {
                var n;
                return (
                  (null !== (n = e.link) && void 0 !== n ? n : e.key) !==
                  t.lineKey
                );
              });
            },
            lineKey: function () {
              return this.$route.params.line;
            },
            isChild: function () {
              var article = this.$route.params.article;
              return !Object(o.d)(article);
            },
          },
          methods: {
            getLocalePath: function (line) {
              var t,
                path =
                  ("collections" === this.collectionFolder
                    ? "/".concat(this.collectionFolder)
                    : "") +
                  "/" +
                  this.collectionName +
                  "/" +
                  (null !== (t = line.link) && void 0 !== t ? t : line.key);
              return (
                "previous-collections" === line.key &&
                  (path = "/collections/previous-collections"),
                this.localePath(path)
              );
            },
          },
        }),
        r = (n(416), n(9)),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.isChild
              ? n(
                  "div",
                  { staticClass: "other-lines" },
                  [
                    n("div", { staticClass: "label" }, [
                      t._v(t._s(t.$t("other-lines")) + ":"),
                    ]),
                    t._v(" "),
                    t._l(t.menu, function (line, e) {
                      return [
                        e > 0
                          ? n("span", { key: "space" + e }, [t._v("|")])
                          : t._e(),
                        t._v(" "),
                        n(
                          "NuxtLink",
                          {
                            key: e,
                            staticClass: "collection-line",
                            attrs: { to: t.getLocalePath(line) },
                          },
                          [
                            t._v(
                              t._s(t.$t("menu." + line.key + ".name")) +
                                "\n    "
                            ),
                          ]
                        ),
                      ];
                    }),
                  ],
                  2
                )
              : t._e();
          },
          [],
          !1,
          null,
          "4f175eae",
          null
        );
      e.a = component.exports;
    },
    664: function (t, e, n) {
      "use strict";
      n.r(e);
      var c = n(1),
        o = n(420),
        menu = n(172),
        l = c.default.extend({
          name: "MachineKnitting",
          components: { OtherLines: o.a },
          nuxtI18n: { paths: { es: "/colecciones/tejido-a-maquina" } },
          data: function () {
            var t;
            return {
              collectionName: "machine-knitting",
              items:
                null === (t = menu.a.collections.children) || void 0 === t
                  ? void 0
                  : t[1].children,
            };
          },
          head: function () {
            var section = "collections",
              t = "machine-knitting";
            return {
              title: this.$t("pages.".concat(section, ".").concat(t, ".title")),
              meta: [
                {
                  hid: "description",
                  name: "description",
                  content: this.$t(
                    "pages.".concat(section, ".").concat(t, ".description")
                  ),
                },
                {
                  hid: "og:description",
                  name: "og:description",
                  content: this.$t(
                    "pages.".concat(section, ".").concat(t, ".description")
                  ),
                },
                {
                  hid: "og:title",
                  name: "og:title",
                  content: this.$t(
                    "pages.".concat(section, ".").concat(t, ".title")
                  ),
                },
              ],
            };
          },
        }),
        r = n(9),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass:
                  "machine-knitting-template page-collection-template",
              },
              [
                n("Nuxt"),
                t._v(" "),
                n("OtherLines", {
                  attrs: {
                    "collection-name": t.collectionName,
                    items: t.items,
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "43148454",
          null
        );
      e.default = component.exports;
    },
  },
]);
