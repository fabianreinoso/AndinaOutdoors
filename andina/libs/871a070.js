(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    107: function (e, n, o) {
      "use strict";
      o.d(n, "a", function () {
        return r;
      });
      o(72), o(7), o(19), o(37), o(63);
      var t = o(50),
        r = function (e) {
          ("new-yarn-and-colour-innovation" !== e[0].key &&
            "creating-your-own-yarn" !== e[0].key) ||
            e.unshift({ key: "michell-labs" });
          var n = e.find(function (e) {
              return "previous-collections" === Object(t.g)(e.key, "link", e);
            }),
            o = e
              .map(function (e) {
                return Object(t.g)(e.key, "link", e);
              })
              .filter(function (e) {
                return !Object(t.c)(e) && "index" !== e;
              });
          return (
            n && (o = ["collections", "previous-collections"]),
            "/".concat(o.join("/"))
          );
        };
    },
    108: function (e, n, o) {
      "use strict";
      o.d(n, "d", function () {
        return r;
      }),
        o.d(n, "c", function () {
          return l;
        }),
        o.d(n, "a", function () {
          return c;
        }),
        o.d(n, "b", function () {
          return d;
        });
      o(17), o(51), o(29), o(56), o(63), o(16);
      var t = "https://www.michell.com.pe/assets/collections/",
        r = function (e) {
          return e.replace(/\w\S*/g, function (e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
          });
        },
        l = function (path) {
          var text =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "no-image",
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "850x700",
            n = path.replace(" - ", "-").replace(/\s/g, "-");
          try {
            return o(386)("./images".concat(n));
          } catch (n) {
            return "https://dummyimage.com/"
              .concat(e, "/efefef/000000&text=")
              .concat(text);
          }
        },
        c = function (e) {
          var n,
            path = e.path,
            o = e.lineArticle,
            l = e.position,
            c = void 0 === l ? 0 : l,
            d = e.type,
            m = void 0 === d ? "general" : d,
            h = e.mode,
            v = void 0 === h ? "normal" : h;
          switch (path) {
            case "collections/machine-knitting/Prestige-Line/":
            case "collections/machine-knitting/Terra-Line/":
            case "collections/machine-knitting/Cloud-Line/":
            case "collections/machine-knitting/Organic-Eco-Ras-Line/":
            case "collections/machine-knitting/Colour-Line/":
            case "collections/machine-knitting/Natural-Line/":
            case "collections/machine-knitting/Sock-Line/":
            case "collections/hand-knitting/Pure-Line/":
            case "collections/hand-knitting/Terra-Line/":
            case "collections/hand-knitting/Cloud-Line/":
            case "collections/hand-knitting/Organic-Eco-Ras-Line/":
            case "collections/hand-knitting/Super-Bulky-Line/":
            case "collections/hand-knitting/Apu-Line/":
              var y = path.split("/");
              (y[1] = "".concat(y[1], "-24")), (path = y.join("/"));
              break;
            case "stock-service/stock-service/Machine-Knitting/":
              path = "stock-service/stock-service-24/Machine-Knitting/";
              break;
            case "stock-service/stock-service/Hand-Knitting/":
              path = "stock-service/stock-service-24/Hand-Knitting/";
              break;
            case "collections/spring-summer/Machine-Knitting/":
              path = "collections/spring-summer-24/Machine-Knitting/";
              break;
            case "collections/spring-summer/Hand-Knitting/":
              path = "collections/spring-summer-24/Hand-Knitting/";
          }
          var f,
            C = o.colors[c].replace(/[^\w-]+/g, "").toLowerCase();
          switch (v) {
            case "Swatch":
              f = "/" + v + "/" + C + ".jpg";
              break;
            case "datasheet_1":
            case "datasheet_2":
              f = "/" + v + ".jpg";
              break;
            case "normal":
              f = "/" + C + ".jpg";
          }
          var k = (null !== (n = o.folder) && void 0 !== n ? n : r(o.name))
            .replace(" - ", "-")
            .replace(/[ ]+/g, "-");
          return t + m + "/" + path + k + f;
        },
        d = function (e) {
          var path = e.path,
            image = e.image,
            n = e.type;
          return (
            t +
            (void 0 === n ? "general" : n) +
            "/" +
            path +
            "/" +
            image +
            ".jpg"
          );
        };
    },
    133: function (e, n, o) {
      "use strict";
      o(36), o(16), o(61);
      var t = o(1),
        r = o(50),
        menu = o(172),
        l = t.default.extend({
          name: "LanguageMenu",
          data: function () {
            return { showLanguage: !1 };
          },
          computed: {
            menuCssProps: function () {
              return [{ active: this.showLanguage }];
            },
          },
          methods: {
            showMenuLanguage: function () {
              this.showLanguage = !this.showLanguage;
            },
            hideMenuLanguage: function () {
              var e = this;
              setTimeout(function () {
                e.showLanguage = !1;
              }, 500);
            },
          },
        }),
        c = (o(321), o(9)),
        d = Object(c.a)(
          l,
          function () {
            var e = this,
              n = e.$createElement,
              o = e._self._c || n;
            return o("div", { staticClass: "language flex" }, [
              o(
                "div",
                {
                  staticClass:
                    "menu-language flex gap-1 relative cursor-pointer",
                  class: e.menuCssProps,
                  attrs: { "aria-expanded": "true", tabindex: "0" },
                  on: {
                    focusout: function (n) {
                      return e.hideMenuLanguage();
                    },
                    click: function (n) {
                      return e.showMenuLanguage();
                    },
                  },
                },
                [
                  o("span", { staticClass: "icon icon-language block w-5" }, [
                    o(
                      "svg",
                      {
                        attrs: {
                          id: "icon-language",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        o("path", {
                          attrs: {
                            d: "M12.725 14.5583L10.6084 12.4667L10.6334 12.4417C12.0834 10.825 13.1167 8.96667 13.725 7.00001H16.1667V5.33334H10.3334V3.66667H8.66671V5.33334H2.83337V6.99167H12.1417C11.5834 8.60001 10.7 10.125 9.50004 11.4583C8.72504 10.6 8.08337 9.65834 7.57504 8.66667H5.90837C6.51671 10.025 7.35004 11.3083 8.39171 12.4667L4.15004 16.65L5.33337 17.8333L9.50004 13.6667L12.0917 16.2583L12.725 14.5583ZM17.4167 10.3333H15.75L12 20.3333H13.6667L14.6 17.8333H18.5584L19.5 20.3333H21.1667L17.4167 10.3333ZM15.2334 16.1667L16.5834 12.5583L17.9334 16.1667H15.2334Z",
                          },
                        }),
                      ]
                    ),
                  ]),
                  e._v(" "),
                  o("span", { staticClass: "uppercase text" }, [
                    e._v(e._s(e.$i18n.localeProperties.code)),
                  ]),
                  e._v(" "),
                  o(
                    "span",
                    { staticClass: "overlay" },
                    e._l(e.$i18n.locales, function (n) {
                      return o(
                        "nuxt-link",
                        {
                          key: n.code,
                          staticClass: "menu-lang link",
                          attrs: { to: e.switchLocalePath(n.code) },
                        },
                        [e._v(e._s(n.name) + "\n      ")]
                      );
                    }),
                    1
                  ),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          "77935093",
          null
        ).exports,
        m = o(52),
        h = (o(29), o(107)),
        v = t.default.extend({
          name: "SubmenuItem",
          props: {
            item: { type: Object },
            parentItem: { type: Object, required: !0 },
          },
          methods: {
            getRoute: function (e) {
              return Object(h.a)([this.parentItem].concat(Object(m.a)(e)));
            },
          },
        }),
        y =
          (o(322),
          Object(c.a)(
            v,
            function () {
              var e = this,
                n = e.$createElement,
                o = e._self._c || n;
              return o(
                "div",
                { staticClass: "submenu-item", class: [e.item.key] },
                [
                  o(
                    "NuxtLink",
                    { attrs: { to: e.localePath(e.getRoute([e.item])) } },
                    [
                      e.item.img
                        ? o("img", {
                            staticClass: "img-section",
                            attrs: {
                              src:
                                "/assets/michell/images/general/" + e.item.img,
                              alt: "",
                            },
                          })
                        : o("div", { staticClass: "img" }),
                      e._v(" "),
                      o("div", { staticClass: "name font-semibold pt-2" }, [
                        e._v(
                          "\n      " +
                            e._s(e.$t("menu." + e.item.key + ".name")) +
                            " "
                        ),
                        e.item.isNew
                          ? o(
                              "span",
                              { staticClass: "text-lg font-medium uppercase" },
                              [e._v("(" + e._s(e.$t("newLabel")) + ")")]
                            )
                          : e._e(),
                      ]),
                      e._v(" "),
                      o(
                        "div",
                        { staticClass: "sub-name font-medium text-sm" },
                        [
                          e._v(
                            "\n      " +
                              e._s(e.$t("menu." + e.item.key + ".subName")) +
                              "\n    "
                          ),
                        ]
                      ),
                    ]
                  ),
                  e._v(" "),
                  e.item.children
                    ? o(
                        "div",
                        {
                          staticClass:
                            "submenu-child hidden lg:flex pt-2 gap-2",
                        },
                        [
                          e._l(e.item.children, function (n, t) {
                            return [
                              n.external
                                ? o(
                                    "a",
                                    {
                                      key: t,
                                      staticClass: "text-xs font-medium",
                                      attrs: {
                                        href: n.external,
                                        target: "_blank",
                                      },
                                    },
                                    [
                                      e._v(
                                        e._s(e.$t("menu." + n.key + ".name"))
                                      ),
                                    ]
                                  )
                                : o(
                                    "NuxtLink",
                                    {
                                      key: t,
                                      staticClass: "text-xs font-medium",
                                      attrs: {
                                        to: e.localePath(
                                          e.getRoute([e.item, n])
                                        ),
                                      },
                                    },
                                    [
                                      e._v(
                                        e._s(e.$t("menu." + n.key + ".name")) +
                                          "\n      "
                                      ),
                                    ]
                                  ),
                            ];
                          }),
                        ],
                        2
                      )
                    : e._e(),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "3689d205",
            null
          ).exports),
        f = t.default.extend({
          name: "SubmenuContent",
          components: { SubmenuItem: y },
          props: {
            items: {
              type: Array,
              default: function () {
                return [];
              },
            },
            parentItem: { type: Object, required: !0 },
          },
          data: function () {
            return {};
          },
          methods: {
            back: function () {
              this.$emit("back");
            },
          },
        }),
        C =
          (o(323),
          Object(c.a)(
            f,
            function () {
              var e = this,
                n = e.$createElement,
                o = e._self._c || n;
              return o(
                "nav",
                {
                  staticClass:
                    "submenu flex flex-col lg:flex-row justify-center px-6 py-7 lg:gap-8",
                },
                [
                  o("div", { staticClass: "back", on: { click: e.back } }, [
                    e._v(e._s(e.$t("Back"))),
                  ]),
                  e._v(" "),
                  o("div", { staticClass: "parent" }, [
                    e._v(e._s(e.$t("menu." + e.parentItem.key + ".name"))),
                  ]),
                  e._v(" "),
                  e._l(e.items, function (n, t) {
                    return o("SubmenuItem", {
                      key: t,
                      attrs: { item: n, "parent-item": e.parentItem },
                    });
                  }),
                ],
                2
              );
            },
            [],
            !1,
            null,
            "58a3e5ae",
            null
          ).exports),
        k = t.default.extend({ name: "SubMenuCertifications" }),
        _ =
          (o(324),
          Object(c.a)(
            k,
            function () {
              var e = this,
                n = e.$createElement,
                o = e._self._c || n;
              return o(
                "nav",
                { staticClass: "submenu px-6 py-7" },
                [
                  o(
                    "NuxtLink",
                    {
                      staticClass: "section-content",
                      attrs: { to: e.localePath("/certifications") },
                    },
                    [
                      o("div", { staticClass: "licences-certifications" }, [
                        o("div", { staticClass: "licenses line" }, [
                          o("div", { staticClass: "title" }, [
                            e._v(e._s(e.$t("certifications.licenses"))),
                          ]),
                          e._v(" "),
                          o("div", { staticClass: "items" }, [
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Capa_x0020_1-2.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Fondo.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "text" }, [
                                e._v("Alpaca Origin Mark"),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "sub" }, [
                                e._v("100% Alpaca"),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("span", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Fondo-1.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "text" }, [
                                e._v("Alpaca Blend Mark"),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "sub" }, [
                                e._v("Blends"),
                              ]),
                            ]),
                          ]),
                        ]),
                        e._v(" "),
                        o("div", { staticClass: "certifications" }, [
                          o("div", { staticClass: "title" }, [
                            e._v(e._s(e.$t("certifications.certifications"))),
                          ]),
                          e._v(" "),
                          o("div", { staticClass: "items" }, [
                            o("div", { staticClass: "item" }, [
                              o("span", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Layer_x0020_1-3.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "text" }, [
                                e._v("Certified by Control Union, CU 847906"),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Layer_x0020_1-5.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "text" }, [
                                e._v("Certified by Control Union, CU 847906"),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/GOTS-WEB.png",
                                    alt: "",
                                  },
                                }),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "text" }, [
                                e._v("Certified by Control Union, CU 847906"),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("span", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Layer_x0020_1-2.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "text" }, [
                                e._v("Certified by Control Union, CU 847906"),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("span", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Layer_x0020_1-1.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "text" }, [
                                e._v("Certified by Control Union, CU 847906"),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/usda-organic-logo-vector.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                              e._v(" "),
                              o("div", { staticClass: "text" }, [
                                e._v("Certified by Control Union, CU 847906"),
                              ]),
                            ]),
                          ]),
                          e._v(" "),
                          o("div", { staticClass: "items" }, [
                            o("div", { staticClass: "item basc" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/BASC_2@2x.png",
                                    alt: "",
                                  },
                                }),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Layer_x0020_1.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Layer_x0020_1-4.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Capa_x0020_1.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Layer_1.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                            ]),
                            e._v(" "),
                            o("div", { staticClass: "item" }, [
                              o("div", { staticClass: "logo" }, [
                                o("img", {
                                  attrs: {
                                    src: "/assets/michell/images/certifications/Capa_x0020_1-1.svg",
                                    alt: "",
                                  },
                                }),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      e._v(" "),
                      o("div", { staticClass: "section-title" }, [
                        o("div", { staticClass: "name font-semibold pt-2" }, [
                          e._v(
                            "\n        " +
                              e._s(
                                e.$t("certifications.certifications-licenses")
                              ) +
                              "\n      "
                          ),
                        ]),
                        e._v(" "),
                        o(
                          "div",
                          { staticClass: "sub-name font-medium text-sm" },
                          [
                            e._v(
                              "\n        " +
                                e._s(e.$t("certifications.p-1")) +
                                "\n      "
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "5642d28e",
            null
          ).exports),
        j = o(173),
        L = t.default.extend({
          name: "LanguageMenu",
          data: function () {
            return { showMenu: !1 };
          },
          computed: {
            menuCssProps: function () {
              return [{ active: this.showMenu }];
            },
          },
          methods: {
            showMenuLanguage: function () {
              this.showMenu = !this.showMenu;
            },
            hideMenuLanguage: function () {
              var e = this;
              setTimeout(function () {
                e.showMenu = !1;
              }, 500);
            },
          },
        }),
        M =
          (o(326),
          Object(c.a)(
            L,
            function () {
              var e = this,
                n = e.$createElement,
                o = e._self._c || n;
              return o("div", { staticClass: "smv flex" }, [
                o(
                  "div",
                  {
                    staticClass:
                      "menu-language flex gap-1 relative cursor-pointer",
                    class: e.menuCssProps,
                    attrs: { "aria-expanded": "true", tabindex: "0" },
                    on: {
                      focusout: function (n) {
                        return e.hideMenuLanguage();
                      },
                      click: function (n) {
                        return e.showMenuLanguage();
                      },
                    },
                  },
                  [
                    o("span", { staticClass: "uppercase title" }, [
                      e._v(e._s(e.$t("menu.smv.name"))),
                    ]),
                    e._v(" "),
                    e._m(0),
                  ]
                ),
              ]);
            },
            [
              function () {
                var e = this,
                  n = e.$createElement,
                  o = e._self._c || n;
                return o("span", { staticClass: "overlay" }, [
                  o(
                    "a",
                    {
                      staticClass: "menu-lang link",
                      attrs: {
                        href: "https://www.smv.gob.pe/Frm_HechosDeImportancia.aspx?data=C149D772979F79F472D813B00768303D1A6C6A0343433C30C77D65E9D4E3A994E0CC3D34C67976DC5A691C4D696EF82D49954F",
                        target: "_blank",
                      },
                    },
                    [e._v("\n        Hechos de Importancia\n      ")]
                  ),
                  e._v(" "),
                  o(
                    "a",
                    {
                      staticClass: "menu-lang link",
                      attrs: {
                        href: "https://www.smv.gob.pe/Frm_HechosDeImportancia.aspx?data=C149D772979F79F472D813B00768303D1A6C6A0343433C30C77D65E9D4E3A994E0CC3D34C67976DC5A691C4D696EF82D49954F",
                        target: "_blank",
                      },
                    },
                    [e._v("\n        Hechos de información\n      ")]
                  ),
                  e._v(" "),
                  o(
                    "a",
                    {
                      staticClass: "menu-lang link",
                      attrs: {
                        href: "https://www.smv.gob.pe/Frm_Memorias.aspx?data=80EE4CDF628C36ED7317E05512731F04276A39E6D01176109E20CC737C0FBE05037A7B0C67FCB74EF6EDB7949A94CEA5E05C32",
                        target: "_blank",
                      },
                    },
                    [e._v("\n        Memoria\n      ")]
                  ),
                  e._v(" "),
                  o(
                    "a",
                    {
                      staticClass: "menu-lang link",
                      attrs: {
                        href: "https://www.michell.com.pe/directorio.pdf",
                        target: "_blank",
                      },
                    },
                    [e._v("\n        Directorio\n      ")]
                  ),
                ]);
              },
            ],
            !1,
            null,
            "2fe0f750",
            null
          ).exports),
        w = t.default.extend({
          name: "MichellHeader",
          components: {
            LanguageMenu: d,
            SubmenuContent: C,
            SubMenuCertifications: _,
            NavButton: j.a,
            SMVMenu: M,
          },
          props: { complete: { type: Boolean, default: !0 } },
          data: function () {
            return {
              showMenu: !1,
              showMenuInternal: !1,
              timeout: null,
              menu: menu.a,
              primary: [
                "collections",
                "inspiration",
                "stock-service",
                "michell-labs",
                "origins",
                "certifications",
              ],
              secondary: [
                "about-us",
                "alpaca-story",
                "social-responsibility",
                "contact-us",
                "blog",
              ],
            };
          },
          computed: {
            isHome: function () {
              return ["index___es", "index___en"].includes(this.$route.name);
            },
          },
          watch: {
            $route: {
              immediate: !0,
              handler: function () {
                (this.showMenu = !1), (this.showMenuInternal = !1);
              },
            },
            showMenuInternal: function () {
              this.showMenu = !1;
            },
          },
          methods: {
            getRoute: function (e) {
              var n = "menu." + e + ".link";
              return this.$t(n);
            },
            mouseOverAction: function () {
              (this.showMenu = !0),
                Object(r.d)(this.timeout) || window.clearTimeout(this.timeout);
            },
            mouseLeaveAction: function () {
              var e = this;
              this.timeout = window.setTimeout(function () {
                e.showMenu = !1;
              }, 800);
            },
          },
        }),
        x =
          (o(327),
          o(328),
          Object(c.a)(
            w,
            function () {
              var e = this,
                n = e.$createElement,
                o = e._self._c || n;
              return o(
                "header",
                {
                  staticClass: "fixed",
                  class: [
                    {
                      white: e.isHome,
                      "show-menu": e.showMenu,
                      expanded: e.showMenuInternal,
                    },
                  ],
                },
                [
                  o("div", {
                    staticClass: "overlay",
                    on: {
                      mouseover: function (n) {
                        e.showMenu = !1;
                      },
                    },
                  }),
                  e._v(" "),
                  o(
                    "NuxtLink",
                    {
                      staticClass: "lg:ml-6 2xl:ml-10 parent logo-michell",
                      attrs: { to: e.localePath("/") },
                      nativeOn: {
                        mouseover: function (n) {
                          e.showMenu = !1;
                        },
                      },
                    },
                    [
                      "en" === e.$i18n.locale
                        ? o("img", {
                            attrs: {
                              src: "/assets/michell/images/general/logo-michell-en.svg",
                              alt: "",
                            },
                          })
                        : e._e(),
                      "es" === e.$i18n.locale
                        ? o("img", {
                            attrs: {
                              src: "/assets/michell/images/general/logo-michell-es.svg",
                              alt: "",
                            },
                          })
                        : e._e(),
                    ]
                  ),
                  e._v(" "),
                  e.complete ? e._e() : o("div", { staticClass: "flex-grow" }),
                  e._v(" "),
                  e.complete
                    ? o(
                        "nav",
                        {
                          staticClass: "primary",
                          attrs: { "aria-label": "Primary Menu" },
                        },
                        [
                          o(
                            "ul",
                            e._l(e.primary, function (n, t) {
                              return o(
                                "li",
                                { key: "prim" + t, class: "prim" + t },
                                [
                                  e.menu[n].external
                                    ? o(
                                        "a",
                                        {
                                          staticClass: "parent text-center",
                                          attrs: {
                                            href: e.menu[n].external,
                                            target: "_blank",
                                          },
                                          on: {
                                            mouseover: function (n) {
                                              return e.mouseOverAction();
                                            },
                                            mouseleave: function (n) {
                                              return e.mouseLeaveAction();
                                            },
                                          },
                                        },
                                        [
                                          e._v(
                                            e._s(
                                              e.$t(
                                                "menu." +
                                                  e.menu[n].key +
                                                  ".name"
                                              )
                                            )
                                          ),
                                        ]
                                      )
                                    : o(
                                        "NuxtLink",
                                        {
                                          staticClass: "parent text-center",
                                          attrs: {
                                            to: e.localePath(e.menu[n].key),
                                            event:
                                              "collections" === e.menu[n].key ||
                                              "michell-labs" === e.menu[n].key
                                                ? ""
                                                : "click",
                                          },
                                          nativeOn: {
                                            mouseover: function (n) {
                                              return e.mouseOverAction();
                                            },
                                            mouseleave: function (n) {
                                              return e.mouseLeaveAction();
                                            },
                                          },
                                        },
                                        [
                                          e._v(
                                            e._s(
                                              e.$t(
                                                "menu." +
                                                  e.menu[n].key +
                                                  ".name"
                                              )
                                            ) + "\n        "
                                          ),
                                        ]
                                      ),
                                  e._v(" "),
                                  e.menu[n].children
                                    ? o("SubmenuContent", {
                                        class: [e.menu[n].key],
                                        attrs: {
                                          items: e.menu[n].children,
                                          "parent-item": e.menu[n],
                                        },
                                        on: {
                                          back: function (n) {
                                            e.showMenu = !1;
                                          },
                                        },
                                        nativeOn: {
                                          mouseover: function (n) {
                                            return e.mouseOverAction();
                                          },
                                          mouseleave: function (n) {
                                            return e.mouseLeaveAction();
                                          },
                                        },
                                      })
                                    : e.menu[n].componentMenu
                                    ? o(e.menu[n].componentMenu, {
                                        tag: "Component",
                                        class: [e.menu[n].key],
                                        nativeOn: {
                                          mouseover: function (n) {
                                            return e.mouseOverAction();
                                          },
                                          mouseleave: function (n) {
                                            return e.mouseLeaveAction();
                                          },
                                        },
                                      })
                                    : e._e(),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                        ]
                      )
                    : e._e(),
                  e._v(" "),
                  e.complete
                    ? o(
                        "nav",
                        {
                          staticClass: "secondary flex-grow",
                          attrs: { "aria-label": "Secondary Menu" },
                        },
                        [
                          o(
                            "ul",
                            [
                              e._m(0),
                              e._v(" "),
                              e._l(e.secondary, function (n, t) {
                                return o(
                                  "li",
                                  { key: "sec" + t, class: "sec" + t },
                                  [
                                    e.menu[n].external
                                      ? o(
                                          "a",
                                          {
                                            staticClass: "parent",
                                            attrs: {
                                              href: e.menu[n].external,
                                              target: "_blank",
                                            },
                                            on: {
                                              mouseover: function (n) {
                                                e.showMenu = !1;
                                              },
                                            },
                                          },
                                          [
                                            e._v(
                                              e._s(
                                                e.$t(
                                                  "menu." +
                                                    e.menu[n].key +
                                                    ".name"
                                                )
                                              )
                                            ),
                                          ]
                                        )
                                      : o(
                                          "NuxtLink",
                                          {
                                            staticClass: "parent",
                                            attrs: {
                                              to: e.localePath(e.menu[n].key),
                                            },
                                            nativeOn: {
                                              mouseover: function (n) {
                                                return e.mouseOverAction();
                                              },
                                              mouseleave: function (n) {
                                                return e.mouseLeaveAction();
                                              },
                                            },
                                          },
                                          [
                                            e._v(
                                              e._s(
                                                e.$t(
                                                  "menu." +
                                                    e.menu[n].key +
                                                    ".name"
                                                )
                                              ) + "\n        "
                                            ),
                                          ]
                                        ),
                                    e._v(" "),
                                    e.menu[n].children
                                      ? o("SubmenuContent", {
                                          staticClass: "collections",
                                          attrs: {
                                            items: e.menu[n].children,
                                            "parent-item": e.menu[n],
                                          },
                                          nativeOn: {
                                            mouseover: function (n) {
                                              return e.mouseOverAction();
                                            },
                                            mouseleave: function (n) {
                                              return e.mouseLeaveAction();
                                            },
                                          },
                                        })
                                      : e._e(),
                                  ],
                                  1
                                );
                              }),
                              e._v(" "),
                              o("SMVMenu"),
                              e._v(" "),
                              e._m(1),
                            ],
                            2
                          ),
                        ]
                      )
                    : e._e(),
                  e._v(" "),
                  o("LanguageMenu", { staticClass: "language mr-6" }),
                  e._v(" "),
                  o("NavButton", {
                    model: {
                      value: e.showMenuInternal,
                      callback: function (n) {
                        e.showMenuInternal = n;
                      },
                      expression: "showMenuInternal",
                    },
                  }),
                ],
                1
              );
            },
            [
              function () {
                var e = this.$createElement,
                  n = this._self._c || e;
                return n(
                  "li",
                  { staticClass: "items-center separator-wrapper" },
                  [n("div", { staticClass: "separator" })]
                );
              },
              function () {
                var e = this.$createElement,
                  n = this._self._c || e;
                return n(
                  "li",
                  { staticClass: "items-center separator-wrapper right" },
                  [n("div", { staticClass: "separator" })]
                );
              },
            ],
            !1,
            null,
            "2225bf90",
            null
          ));
      n.a = x.exports;
    },
    134: function (e, n, o) {
      "use strict";
      o(36), o(16);
      var t = o(1),
        r = t.default.extend({ name: "MichellLogo" }),
        l = (o(329), o(9)),
        c = Object(l.a)(
          r,
          function () {
            var e = this,
              n = e.$createElement,
              o = e._self._c || n;
            return o(
              "a",
              {
                staticClass: "logo",
                attrs: {
                  href: "https://www.michell.com.pe/",
                  target: "_blank",
                },
              },
              [
                "en" === e.$i18n.locale
                  ? o("img", {
                      attrs: {
                        src: "/assets/michell/images/general/logo-grupo-michell-en.svg",
                        alt: "",
                      },
                    })
                  : e._e(),
                e._v(" "),
                "es" === e.$i18n.locale
                  ? o("img", {
                      attrs: {
                        src: "/assets/michell/images/general/logo-grupo-michell-es.svg",
                        alt: "",
                      },
                    })
                  : e._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "773b08a7",
          null
        ).exports,
        d = t.default.extend({
          name: "LandingFooter",
          components: { MichellGroupLogo: c },
          computed: {
            isHome: function () {
              return ["index___es", "index___en"].includes(this.$route.name);
            },
          },
        }),
        m =
          (o(330),
          Object(l.a)(
            d,
            function () {
              var e = this,
                n = e.$createElement,
                o = e._self._c || n;
              return o(
                "footer",
                { class: [{ white: e.isHome }] },
                [
                  o("MichellGroupLogo"),
                  e._v(" "),
                  o("div", { staticClass: "navigation" }, [
                    o(
                      "div",
                      { staticClass: "links" },
                      [
                        o(
                          "NuxtLink",
                          {
                            staticClass:
                              "flex flex-col lg:flex-row items-center gap-1 lg:gap-3 text-xs lg:text-base text-center w-18 lg:w-auto",
                            attrs: { to: e.localePath("sitemap") },
                          },
                          [
                            o("img", {
                              staticClass: "w-4 lg:w-6",
                              attrs: {
                                src: "/assets/michell/images/general/sitemap.svg",
                                alt: "sitemap",
                              },
                            }),
                            e._v(e._s(e.$t("menu.sitemap.name"))),
                          ]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    e._m(0),
                  ]),
                ],
                1
              );
            },
            [
              function () {
                var e = this,
                  n = e.$createElement,
                  o = e._self._c || n;
                return o("div", { staticClass: "info" }, [
                  o("div", { staticClass: "social-links" }, [
                    o(
                      "a",
                      {
                        staticClass: "instagram",
                        attrs: {
                          href: "https://www.instagram.com/accounts/login/?next=/michell_alpaca/",
                          target: "_blank",
                        },
                      },
                      [
                        o("img", {
                          attrs: {
                            src: "/assets/michell/images/general/logo-instagram.svg",
                            alt: "instagram",
                          },
                        }),
                      ]
                    ),
                    e._v(" "),
                    o(
                      "a",
                      {
                        staticClass: "facebook",
                        attrs: {
                          href: "https://www.facebook.com/MichellAlpaca/",
                          target: "_blank",
                        },
                      },
                      [
                        o("img", {
                          attrs: {
                            src: "/assets/michell/images/general/social-facebook.svg",
                            alt: "facebook",
                          },
                        }),
                      ]
                    ),
                    e._v(" "),
                    o(
                      "a",
                      {
                        staticClass: "youtube",
                        attrs: {
                          href: "https://www.youtube.com/user/grupomichell",
                          target: "_blank",
                        },
                      },
                      [
                        o("img", {
                          attrs: {
                            src: "/assets/michell/images/general/social-youtube.svg",
                            alt: "youtube",
                          },
                        }),
                      ]
                    ),
                    e._v(" "),
                    o(
                      "a",
                      {
                        staticClass: "linkedin",
                        attrs: {
                          href: "https://pe.linkedin.com/company/michell-alpaca",
                          target: "_blank",
                        },
                      },
                      [
                        o("img", {
                          attrs: {
                            src: "/assets/michell/images/general/social-linkedin.svg",
                            alt: "linkedin",
                          },
                        }),
                      ]
                    ),
                  ]),
                  e._v(" "),
                  o("div", { staticClass: "copyright" }, [
                    e._v("AndinaOutdoors. 2023 All rights reserved."),
                  ]),
                ]);
              },
            ],
            !1,
            null,
            "0a515ef4",
            null
          ));
      n.a = m.exports;
    },
    166: function (e, n, o) {
      "use strict";
      o(19), o(7), o(55), o(17), o(51);
      var t = o(1);
      n.a = function () {
        t.default.filter("replacePipeTpBr", function (e) {
          return e ? (e = e.toString()).replace("|", "<br>") : "";
        });
      };
    },
    167: function (e, n, o) {
      "use strict";
      var t = o(52),
        r = (o(7), o(55), o(17), o(51), o(1)),
        l = o(108),
        c = o(107);
      (r.default.prototype.$loadImage = function (path) {
        var text =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "no-image",
          e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "850x700";
        return Object(l.c)(path, text, e);
      }),
        (r.default.prototype.$loadCollection = function (e) {
          return Object(l.a)(e);
        }),
        (r.default.prototype.$loadCollectionTop = function (e) {
          return Object(l.b)(e);
        }),
        (r.default.prototype.$replacePipeTpBr = function (html) {
          return html ? (html = html.toString()).replace(/\|/g, "<br>") : "";
        }),
        (r.default.prototype.$parsePath = function (e) {
          return Object(c.a)(Object(t.a)(e));
        });
    },
    168: function (e, n, o) {
      "use strict";
      var t = o(1),
        r = o(254),
        l = o.n(r);
      o(387);
      t.default.component("image-zoom", l.a);
    },
    169: function (e, n, o) {
      "use strict";
      var t = o(1),
        r = o(255),
        l = o.n(r);
      t.default.component("video-background", l.a);
    },
    170: function (e, n, o) {
      "use strict";
      var t = o(1),
        r = o(256),
        l = o.n(r);
      o(388);
      t.default.use(l.a, {
        dialog: !0,
        dynamic: !0,
        injectModalsContainer: !0,
        dynamicDefaults: { foo: "foo" },
      });
    },
    171: function (e, n, o) {
      "use strict";
      var t = o(1),
        r = o(257);
      t.default.use(r.a);
    },
    172: function (e, n, o) {
      "use strict";
      o.d(n, "a", function () {
        return menu;
      });
      var menu = {
        collections: {
          key: "collections",
          children: [
            { img: "DSC_8934.png", key: "top-collections" },
            {
              img: "we04.jpg",
              key: "machine-knitting",
              children: [
                { img: "Web11.jpg", key: "prestige-line", sub: !0 },
                { img: "we03.jpg", key: "terra-line" },
                { img: "Web07.jpg", key: "cloud-line" },
                { img: "Web09.jpg", key: "organic-eco-and-ras-line" },
                { img: "Web06.jpg", key: "sock-line" },
                { img: "Web14.jpg", key: "colour-trend-and-natural-tones" },
                { img: "prhand.jpg", key: "previous-collections" },
              ],
            },
            {
              img: "we05-24.jpg",
              key: "hand-knitting",
              children: [
                { img: "Web17.jpg", key: "pure-line" },
                { img: "Web15.jpg", sub: !0, key: "terra-line" },
                { img: "Web16.jpg", sub: !0, key: "cloud-line" },
                { img: "Web18.jpg", sub: !0, key: "organic-eco-and-ras-line" },
                { img: "DSC_3109.jpg", sub: !0, key: "super-bulky-line" },
                { img: "apu.jpg", sub: !0, key: "apu-line" },
                { img: "prhand.jpg", key: "previous-collections" },
              ],
            },
            {
              img: "Spring-Summer_24.jpg",
              key: "spring-summer",
              isNew: !0,
              children: [
                { img: "ss24-Machine.jpg", sub: !0, key: "machine-knitting" },
                {
                  img: "ss24-hand-knitting.jpg",
                  sub: !0,
                  key: "hand-knitting",
                },
                {
                  img: "ss24-spring-previous.jpg",
                  key: "previous-collections",
                },
              ],
            },
          ],
        },
        "past-collections": {
          key: "past-collections",
          children: [
            {
              img: "08.jpg",
              key: "machine-knitting-23",
              children: [
                { img: "DSC_2222.jpg", key: "prestige-line", sub: !0 },
                { img: "DSC_1373.jpg", key: "terra-line" },
                { img: "DSC_1331.jpg", key: "cloud-line" },
                { img: "DSC_0811.jpg", key: "organic-eco-and-ras-line" },
                { img: "DSC_3137.jpg", key: "colour-trend-and-natural-tones" },
              ],
            },
            {
              img: "05.jpg",
              key: "hand-knitting-23",
              children: [
                { img: "pure-line.jpg", key: "pure-line" },
                { img: "Terra-Hand-Knitting.jpg", sub: !0, key: "terra-line" },
                { img: "HK-CLoud-Line.jpg", sub: !0, key: "cloud-line" },
                {
                  img: "Eco-Line-HK.jpg",
                  sub: !0,
                  key: "organic-eco-and-ras-line",
                },
                { img: "DSC_3109.jpg", sub: !0, key: "super-bulky-line" },
                { img: "apu.jpg", sub: !0, key: "apu-line" },
              ],
            },
            {
              img: "sprn-mki-y-hk.jpg",
              key: "spring-summer-23",
              children: [
                { img: "DSC_3331.jpg", sub: !0, key: "machine-knitting" },
                { img: "spring-hk.jpg", sub: !0, key: "hand-knitting" },
              ],
            },
          ],
        },
        inspiration: { key: "inspiration" },
        "stock-service": {
          key: "stock-service",
          img: "Web24.jpg",
          children: [
            {
              key: "ss-stock-service",
              link: "",
              img: "Web24.jpg",
              children: [
                {
                  img: "Web25.jpg",
                  sub: !0,
                  key: "ss-machine-knitting",
                  link: "machine-knitting",
                },
                {
                  img: "Web26.jpg",
                  sub: !0,
                  key: "ss-hand-knitting",
                  link: "hand-knitting",
                },
                {
                  img: "Web27.jpg",
                  key: "online-stock-service",
                  external:
                    "https://ordsprod.mfhsl.net:8443/ords/f?p=401:LOGIN_DESKTOP:7226322594458",
                },
              ],
            },
          ],
        },
        "michell-labs": {
          key: "michell-labs",
          children: [
            {
              img: "DSC_2778.jpg",
              key: "new-yarn-and-colour-innovation",
              childrenInternal: [
                {
                  key: "sustainable-easy-wash",
                  logo: "/images/origins/iniciatives_04.png",
                },
                {
                  key: "sustainable-green",
                  logo: "/images/origins/iniciatives_05.png",
                },
                {
                  key: "upcycle-yarns",
                  logo: "/images/origins/iniciatives_06.png",
                },
              ],
            },
            { img: "Web12.jpg", key: "colour-trend" },
            {
              img: "Michell-Labs-01.jpg",
              key: "creating-your-own-yarn",
              childrenInternal: [
                { key: "come-and-design" },
                { key: "our-fibres" },
                { key: "types-of-yarn" },
                { key: "types-of-colours" },
                { key: "cy-machine-knitting", link: "machine-knitting" },
                { key: "cy-hand-knitting", link: "hand-knitting" },
                { key: "cy2-hand-knitting", link: "suggested-labels" },
                { key: "cy-contact-us", link: "contact-us" },
              ],
            },
          ],
        },
        origins: {
          key: "origins",
          children: [
            { img: "HAC_3469.jpg", key: "origins", link: "" },
            { img: "Social-commitment.jpg", key: "social-commitment" },
            { img: "medio-ambiene.jpg", key: "environmental-commitment" },
            { img: "DSC_8598-2.jpg", key: "economic-commitment" },
            { img: "HAC_2595-2.jpg", key: "traceability" },
            { img: "reporte-de.jpg", key: "sustainability-reports" },
          ],
        },
        certifications: {
          key: "certifications",
          componentMenu: "SubMenuCertifications",
        },
        "about-us": {
          key: "about-us",
          children: [
            { img: "A1.jpg", key: "s-about-us", link: "about-us" },
            { img: "DSC_8371-2.jpg", key: "mission-and-vision" },
            { img: "DSC_8340-2.jpg", key: "production-process" },
          ],
        },
        "alpaca-story": {
          key: "alpaca-story",
          children: [
            { img: "HAC_2845.jpg", key: "the-alpaca-story" },
            { img: "frame_0003.jpg", key: "south-american-camelids" },
            { img: "HAC_2616.jpg", key: "peruvian-highland-wool" },
          ],
        },
        "social-responsibility": {
          key: "social-responsibility",
          children: [
            { img: "JMA_7033.jpg", key: "social-responsibility", link: "" },
            { img: "IMG_8980.jpg", key: "mirasol" },
            { img: "MMA_5692.jpg", key: "michell-art-contest" },
          ],
        },
        "contact-us": { key: "contact-us" },
        blog: { key: "blog", external: "https://www.michell.com.pe/blog/" },
        smv: {
          key: "smv",
          external:
            "https://www.smv.gob.pe/Frm_HechosDeImportancia.aspx?data=C149D772979F79F472D813B00768303D1A6C6A0343433C30C77D65E9D4E3A994E0CC3D34C67976DC5A691C4D696EF82D49954F",
        },
      };
    },
    173: function (e, n, o) {
      "use strict";
      var t = o(1).default.extend({
          name: "NavButton",
          model: { prop: "showMenuInternal", event: "toggle" },
          props: { showMenuInternal: { type: Boolean, default: !1 } },
          data: function () {
            return { expanded: !1 };
          },
          watch: {
            showMenuInternal: function (e) {
              this.expanded = e;
            },
            expanded: function (e) {
              this.$emit("toggle", e);
            },
          },
        }),
        r = (o(325), o(9)),
        component = Object(r.a)(
          t,
          function () {
            var e = this,
              n = e.$createElement,
              o = e._self._c || n;
            return o("div", { staticClass: "nav-button lg:hidden" }, [
              o("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: e.expanded,
                    expression: "expanded",
                  },
                ],
                staticClass: "checkbox",
                attrs: { id: "", type: "checkbox", name: "" },
                domProps: {
                  checked: Array.isArray(e.expanded)
                    ? e._i(e.expanded, null) > -1
                    : e.expanded,
                },
                on: {
                  change: function (n) {
                    var o = e.expanded,
                      t = n.target,
                      r = !!t.checked;
                    if (Array.isArray(o)) {
                      var l = e._i(o, null);
                      t.checked
                        ? l < 0 && (e.expanded = o.concat([null]))
                        : l > -1 &&
                          (e.expanded = o.slice(0, l).concat(o.slice(l + 1)));
                    } else e.expanded = r;
                  },
                },
              }),
              e._v(" "),
              e._m(0),
            ]);
          },
          [
            function () {
              var e = this,
                n = e.$createElement,
                o = e._self._c || n;
              return o("div", { staticClass: "hamburger-lines" }, [
                o("span", { staticClass: "line line1" }),
                e._v(" "),
                o("span", { staticClass: "line line2" }),
                e._v(" "),
                o("span", { staticClass: "line line3" }),
              ]);
            },
          ],
          !1,
          null,
          "227e1cc7",
          null
        );
      n.a = component.exports;
    },
    214: function (e, n, o) {
      e.exports = {};
    },
    215: function (e, n, o) {
      e.exports = {};
    },
    216: function (e, n, o) {
      e.exports = {};
    },
    217: function (e, n, o) {
      e.exports = {};
    },
    218: function (e, n, o) {
      e.exports = {};
    },
    219: function (e, n, o) {
      e.exports = {};
    },
    220: function (e, n, o) {
      e.exports = {};
    },
    221: function (e, n, o) {
      e.exports = {};
    },
    222: function (e, n, o) {
      e.exports = {};
    },
    223: function (e, n, o) {
      e.exports = {};
    },
    224: function (e, n, o) {
      e.exports = {};
    },
    225: function (e, n, o) {
      e.exports = {};
    },
    252: function (e, n, o) {
      "use strict";
      n.a = {
        michellLogo: {
          name: "GRUPO MICHELL",
          slogan: "Piensa en Alpaca... Piensa en Michell",
        },
        home: {
          top: "Bienvenidos al Grupo Textil Alpaquero más grande del Perú.",
          center:
            "Integrado verticalmente desde la crianza hasta la venta al por menor de productos de Alpaca.",
          bottom:
            "El Grupo Michell tiene pasión por proveer al mundo de productos y experiencias únicas alrededor de la Alpaca y su noble fibra.",
        },
        menu: {
          collections: { name: "Colecciones" },
          inspiration: { name: "Inspiración" },
          "top-collections": {
            name: "Colección Tops",
            subName: "Colección de la fibra de Alpaca - Tonos Naturales",
          },
          "machine-knitting": {
            name: "Tejido a Máquina",
            subName: "Colección de Hilados A/W 24-25",
          },
          "machine-knitting-23": {
            name: "Tejido a Máquina",
            subName: "Colección de Hilados A/W 23-24",
          },
          "prestige-line": { name: "Prestige Line" },
          "terra-line": { name: "Terra Line" },
          "cloud-line": { name: "Cloud Line" },
          "organic-eco-and-ras-line": { name: "Organic Eco & Ras Line" },
          "colour-trend-and-natural-tones": {
            name: "Colour Trend & Natural Tones",
          },
          "sock-line": { name: "Sock Line" },
          "previous-collections": { name: "Colecciones Previas" },
          "hand-knitting": {
            name: "Tejido a Mano",
            subName: "Colección de Hilados A/W 24-25",
          },
          "hand-knitting-23": {
            name: "Tejido a Mano",
            subName: "Colección de Hilados A/W 23-24",
          },
          "pure-line": { name: "Pure Line" },
          "apu-line": { name: "Apu Line" },
          "super-bulky-line": { name: "Super Bulky Line" },
          "spring-summer": {
            name: "Spring Summer",
            subName: "Colección de Hilados S/S 24",
          },
          "spring-summer-23": {
            name: "Spring Summer",
            subName: "Colección de Hilados S/S 23",
          },
          "stock-service": {
            name: "Stock Service",
            subName: "Colección de Hilados A/W 24-25",
          },
          "ss-stock-service": {
            name: "Stock Service",
            subName: "Colección de Hilados A/W 24-25",
          },
          "ss-machine-knitting": { name: "Tejido a Máquina" },
          "ss-hand-knitting": { name: "Tejido a Mano" },
          "online-stock-service": { name: "Online Stock Service" },
          "michell-labs": { name: "Michell Labs" },
          "new-yarn-and-colour-innovation": {
            name: "Innovaciones de Hilo y Color",
            subName:
              "EasyWash - Sustainable Green Colours - Upcycle Yarns - Mid.A/W",
          },
          "sustainable-easy-wash": { name: "Sustainable Easy Wash" },
          "sustainable-green": { name: "Sustainable Green" },
          "upcycle-yarns": { name: "Upcycle Yarns" },
          "colour-trend": {
            name: "Colores Tendencia",
            subName: "Colores Tendencia en Alpaca a nivel Global",
          },
          "creating-your-own-yarn": {
            name: "Crea tu propio Hilado",
            subName:
              "Nuestras Fibras – Tipos de Hilados – Tipós de Teñidos - Presentaciones",
          },
          "come-and-design": {
            name: "Ven y Diseña",
            subName: "Tu Nuevo Hilado",
          },
          "our-fibres": {
            name: "Nuestras Fibras",
            subName: "Natural, Man-Made, Synthetic",
          },
          "types-of-yarn": {
            name: "Tipos de Hilados",
            subName: "Nuevas Tipologias",
          },
          "types-of-colours": {
            name: "Tipos de Colores",
            subName: "Colour Guide",
          },
          "cy-machine-knitting": {
            name: "Tejido a Máquina",
            subName: "Presentaciones de Hilados",
          },
          "cy-hand-knitting": {
            name: "Tejido a Mano",
            subName: "Presentaciones de Hilados",
          },
          "cy2-hand-knitting": {
            name: "Tejido a Mano",
            subName: "Etiquetas Sugeridas",
          },
          "cy-contact-us": { name: "Contáctenos", subName: "Escríbenos" },
          origins: {
            name: "Origins",
            subName: "Los Pilares de Sostenibilidad",
          },
          "social-commitment": {
            name: "Compromiso Social",
            subName: "Comercio Justo Peru",
          },
          "environmental-commitment": {
            name: "Compromiso medioambiental",
            subName: "Ser sostenible",
          },
          "economic-commitment": {
            name: "Compromiso económico",
            subName: "Nuestro enfoque económico",
          },
          traceability: {
            name: "Trazabilidad",
            subName: "De dónde viene la fibra de alpaca",
          },
          "sustainability-reports": {
            name: "Reportes de Sostenibilidad",
            subName: "& Certificaciones",
          },
          certifications: { name: "Certificaciones", subName: "& Licencias" },
          "about-us": { name: "Nosotros" },
          "s-about-us": {
            name: "Nosotros",
            subName: "Pioneros en la Industria",
          },
          "mission-and-vision": {
            name: "Misión & Visión",
            subName: "Nuestro compromiso",
          },
          "production-process": {
            name: "Proceso de producción",
            subName: "Transformación de la fibra",
          },
          "alpaca-story": { name: "La Alpaca" },
          "the-alpaca-story": {
            name: "Historia de la Alpaca",
            subName: "Tesoro de los Andes",
          },
          "south-american-camelids": {
            name: "Camélidos sudamericanos",
            subName: "Llama - Guanaco - Vicuña",
          },
          "peruvian-highland-wool": {
            name: "Lana Peruana",
            subName: "Andes Peruanos",
          },
          "social-responsibility": {
            name: "Responsabilidad Social",
            subName: "Empresa socialmente responsable",
          },
          mirasol: {
            name: "Mirasol",
            subName: "Una asociación civil sin ánimo de lucro",
          },
          "michell-art-contest": {
            name: "Concurso Arte Michell",
            subName: "Concurso Nacional de Arte del Perú",
          },
          "michell-art-contest-left": {
            name: "Concurso Arte Michell",
            subName: "Artistas peruanos",
          },
          "contact-us": { name: "Contáctenos" },
          arequipa: { name: "Arequipa", subName: "" },
          lima: { name: "Lima", subName: "" },
          cusco: { name: "Cusco", subName: "" },
          blog: { name: "Blog" },
          smv: { name: "SMV" },
          sitemap: { name: "Mapa del sitio" },
        },
        "learn-more": "Learn More",
        download: "Descargar",
        companies: {
          michell: {
            category: "Tops e Hilados",
            text: "Transformamos la fibra de Alpaca y otras fibras naturales en tops e hilados para tejido a mano, máquina y tejido plano.",
          },
          mhf: {
            category: "Tejido de Punto y Plano",
            text: "Tejemos colecciones de prendas, abrigos y accesorios de vestir, además de finos textiles para el hogar, para marcas privadas.",
          },
          michellRugs: {
            category: "Alfombras",
            text: "Creamos alfombras, tanto para uso comercial y residencial, a medida, con diseños y colores únicos.",
          },
          solAlpaca: {
            category: "Prendas y accesorios",
            text: "Exclusiva colección de prendas premium de Alpaca y Vicuña inspirada en la rica tradición textil peruana.",
          },
          michellOutlet: {
            category: "Prendas y accesorios",
            text: "Prendas, accesorios e hilados de gran calidad a los mejores precios.",
          },
          mundoAlpaca: {
            category: "Centro Ecoturístico",
            text: "Vive la experiencia de la Alpaca en el corazón de Arequipa.",
          },
          amano: {
            category: "Museo Textil Precolombino",
            text: "Descubre la historia en el primer Museo Textil de Arequipa, poseedor de piezas precolombinas nunca antes exhibidas.",
          },
          mirasol: {
            category: "Escuela Mirasol",
            text: "Exclusiva colección de prendas premium de Alpaca y Vicuña inspirada en la rica tradición textil peruana.",
          },
          arteMichell: {
            category: "Concurso de arte peruano",
            text: "Preservando y promoviendo la riqueza del milenario arte textil peruano.",
          },
          michellApu: {
            category: "Colección de hilados a mano",
            text: "Empoderando mujeres de los Andes Peruanos a través del arte del hilado a mano.",
          },
          origins: {
            category: "Programas de sostenibilidad",
            text: "Origins by Michell presenta la información más relevante acerca de las acciones que estamos llevando a cabo para convertirnos en una empresa totalmente sostenible.",
          },
          news: {
            category: "Michell Alpaca Blog",
            text: "Conozca nuestra historia, colaboradores, comunidad, noticias y nuestras últimas innovaciones.",
          },
        },
        line: {
          "color-title": "Colour Card",
          "color-sub": "*Colour Sampling",
          "data-sheet-title": "Data Sheet",
          "data-sheet-sub": "(Scroll Down)",
          "knitted-swatch": "Knitted Swatch",
          presentation: "Presentation",
        },
        collections: {
          "machine-knitting": {
            p1: "Las colecciones <strong>PRESTIGE, TERRA, CLOUD, ORGANIC, ECO & RAS</strong> presentan hilados clásicos y de fantasía en Alpaca pura y mezclas con seda, lanas finas de merino, lino, tencel, poliamidas, acrílicos entre otros. Nosotros apuntamos a cambiar moda por estilo. Por estilo, nos referimos a proveer hilados de la mejor calidad – ambos clásicos y de fantasía, de tal manera que los diseñadores puedan crear tejidos que sean únicos y lujosos.",
            "prestige-line": { slogan: "Nuestros Hilos mas Lujosos" },
            "organic-eco-and-ras-line": { slogan: "100% Hilos sin Teñir" },
            "terra-line": { slogan: "" },
            "cloud-line": { slogan: "" },
            "colour-trend-and-natural-tones": { slogan: "" },
          },
          "hand-knitting": {
            p1: "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
            "pure-line": { slogan: "Nuestros Hilos Más Lujosos" },
            "terra-line": { slogan: "Hilados Clásicos" },
            "cloud-line": { slogan: "Hilados de Fantasía " },
            "super-bulky-line": { slogan: "Hilos Gruesos" },
            "organic-eco-and-ras-line": { slogan: "100% Hilos sin Teñir" },
            "apu-line": { slogan: "Hilados a mano" },
          },
          "machine-knitting-23": {
            p1: "Las colecciones <strong>PRESTIGE, TERRA, CLOUD, ORGANIC, ECO & RAS</strong> presentan hilados clásicos y de fantasía en Alpaca pura y mezclas con seda, lanas finas de merino, lino, tencel, poliamidas, acrílicos entre otros. Nosotros apuntamos a cambiar moda por estilo. Por estilo, nos referimos a proveer hilados de la mejor calidad – ambos clásicos y de fantasía, de tal manera que los diseñadores puedan crear tejidos que sean únicos y lujosos.",
            "prestige-line": { slogan: "Nuestros Hilos mas Lujosos" },
            "organic-eco-and-ras-line": { slogan: "100% Hilos sin Teñir" },
            "terra-line": { slogan: "" },
            "cloud-line": { slogan: "" },
            "colour-trend-and-natural-tones": { slogan: "" },
          },
          "hand-knitting-23": {
            p1: "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
            "pure-line": { slogan: "Nuestros Hilos Más Lujosos" },
            "terra-line": { slogan: "Hilados Clásicos" },
            "cloud-line": { slogan: "Hilados de Fantasía " },
            "super-bulky-line": { slogan: "Hilos Gruesos" },
            "organic-eco-and-ras-line": { slogan: "100% Hilos sin Teñir" },
            "apu-line": { slogan: "Hilados a mano" },
          },
          "spring-summer": {
            p1: "Michell Yarn Studio ha desarrollado la nueva colección de hilos de primavera-verano para 2023. Nuestro objetivo es crear hilos únicos, versátiles y frescos.",
            p2: "Le invitamos a descubrir y disfrutar de estas nuevas propuestas de hilos, esperando que le inspiren para crear prendas y accesorios únicos.",
            "machine-knitting": { slogan: "S/S 24 Colección de Hilados" },
            "hand-knitting": { slogan: "S/S 24 Colección de Hilados" },
          },
          "spring-summer-23": {
            p1: "Michell Yarn Studio ha desarrollado la nueva colección de hilos de primavera-verano para 2023. Nuestro objetivo es crear hilos únicos, versátiles y frescos.",
            p2: "Le invitamos a descubrir y disfrutar de estas nuevas propuestas de hilos, esperando que le inspiren para crear prendas y accesorios únicos.",
            "machine-knitting": { slogan: "S/S 23 Colección de Hilados" },
            "hand-knitting": { slogan: "S/S 23 Colección de Hilados" },
          },
        },
        "stock-service": {
          p1: "Nuestra pasión para proveer lo mejor en servicio al cliente nos ha permitido ofrecer una amplia variedad de hilados bajo el Servicio de Stock Perú, donde en la actualidad se ofrecen 8 calidades en una amplia gamas de colores clásicos y de tendencia. Esta temporada estamos renovando nuestra carta con nuevos artículos que esperamos sean de gran ayuda e inspiración.",
        },
        "view-google": "View in Google Maps",
        certifications: {
          "certifications-licenses": "Certificaciones & Licencias",
          "p-1":
            "Como parte de nuestro compromiso de convertirnos en una empresa más sostenible, hemos obtenido las siguientes certificaciones, que demuestran no sólo que somos sostenibles, sino también que somos una empresa transparente.",
          licenses: "Licencias",
          certifications: "Certificaciones",
          "p-2":
            '<span class="font-semibold">En Michell estamos alineándonos a criterios globales que aseguran la condición orgánica de nuestros productos textiles;</span> desde la obtención de la materia prima, hasta el correcto etiquetado del producto. Con esa conciencia bajo la mira, es que hemos conseguido certificarnos con la Norma Textil Orgánica (GOTS), la cual incluye criterios ecológicos y sociales que garantizan la inocuidad de nuestros productos para las personas y el medio ambiente. Para el consumidor, GOTS significa el estándar más importante de transparencia en cuanto a nuestro sistema productivo.',
          "p-3":
            "El secreto está en los detalles y en Michell lo sabemos bien.",
          "p-4":
            "Es por eso que la certificación de Interwoollabs nos garantiza como empresa que cuida su producto en cuanto a la finura de sus hilados. Dos veces al año, nuestro laboratorio de determinación de finura atraviesa rigurosas pruebas de análisis de muestras a ciegas, las cuales son evaluadas y comparadas con diferentes laboratorios que participan de estas pruebas también.",
          "p-5":
            "El producto que ofrece Michell y Cía. es completamente inofensivo para la salud humana.",
          "p-6":
            "Desde la materia prima hasta el hilado, Michell asegura que no existe rastro alguno de sustancias nocivas para el ser humano. Es gracias a esto que podemos decir con orgullo que contamos con la certificación Standard 100 de Oeko-Tex, la cual asegura que las empresas textiles cumplan con requisitos imprescindibles que eviten que el producto final sea dañino para las personas.",
          "p-7":
            '<span class="font-semibold">Basando nuestras operaciones en los 10 principios del comercio justo,</span> que garantizan beneficios equitativos para todas las partes involucradas en el proceso productivo, es que la empresa está certificada desde el 2020 por Peru Fair Trade. Para contar con esta certificación, hemos demostrado que nuestras actividades productivas implican acciones responsables para nuestros colaboradores, la sociedad y el medio ambiente; de manera que se crea una cadena de beneficio mutuo entre estos.',
          "p-8":
            '<span class="font-semibold">Michell cuenta con la certificación RAS,</span> que verifica el bienestar de los animales de alpaca y los requisitos de gestión de la tierra y hace un seguimiento desde el fundo hasta el producto final. Para más información, visite:',
          "p-9":
            "En Michell nos preocupamos por implementar medidas que nos permitan identificar y tomar acciones respecto al impacto que la empresa genera en el medio ambiente.",
          "p-10":
            "Nuestro primer paso para ello fue la primera medición de nuestra Huella de Carbono según la norma internacional que se terminó en mayo de 2022. El objetivo de esta medición fue cuantificar nuestras emisiones directas e indirectas de CO2, incluyendo la crianza de alpacas, los procesos productivos, el transporte de personal, los viajes, la electricidad, el transporte de materiales, entre otros. La medición de la huella de carbono es la base de una serie de estrategias que estamos estableciendo para compensar nuestras emisiones a corto, medio y largo plazo.",
          "p-11":
            '<span class="font-semibold">Michell cuenta con la certificación RWS,</span> que verifica el bienestar de los animales de alpaca y los requisitos de gestión de la tierra y hace un seguimiento desde el fundo hasta el producto final. Para más información, visite:',
          "p-12": "",
          "p-13": "",
        },
        "for-more-info": "Para más información",
        headquarters: "Oficina Principal",
        telephone: "Teléfono",
        "working-hours": "Horario Laboral",
        "other-lines": "Otras Líneas",
        "monday-friday": "Monday - Friday",
        "send-us-a-e-mail": "Send Us a E-mail",
        pages: {
          "about-us": {
            "about-us": {
              title: "Nosotros",
              description:
                "Pionero, líder, innovador y apasionado son algunas palabras que describen hoy a Michell tras celebrar recientemente nuestro 90 aniversario de ser pioneros y líderes en la producción de tops e hilados de alpaca en todo el mundo.",
            },
            "mission-and-vision": {
              title: "Misión y Visión",
              description:
                "La mayor ventaja de Michell es su gente y su cultura organizativa. Sigue invirtiendo en formación, evaluación continua y asistencia psicológica. Es a partir de todo esto y de su gente que Michell sigue creciendo y mejorando su calidad y servicio.",
            },
            "production-process": {
              title: "Proceso de Producción",
              description:
                "Transformar la alpaca y otras fibras naturales en productos de alto valor añadido, satisfaciendo las necesidades del mundo, promoviendo su uso global y cuidando la Comunidad y el medio ambiente.",
            },
          },
          "alpaca-story": {
            "the-alpaca-story": {
              title: "La Historia de la Alpaca",
              description:
                "La fibra de la Alpaca es una creación de la naturaleza. Las alturas peruanas fueron desde el principio una fuente de producción de fibra para nosotros y ahora son la fuente de nuestra inspiración. Las Alpacas han sido criadas desde tiempos ancestrales.",
            },
            "south-american-camelids": {
              title: "Camélidos Sudamericanos ",
              description:
                "La fibra de la Alpaca es una creación de la naturaleza. Las alturas peruanas fueron desde el principio una fuente de producción de fibra para nosotros y ahora son la fuente de nuestra inspiración. Las Alpacas han sido criadas desde tiempos ancestrales.",
            },
            "peruvian-highland-wool": {
              title: "Lana Peruana de los Andes",
              description:
                "La lana de la sierra peruana procede de un cruce de ovejas que vive en la sierra peruana a más de 2.000 metros de altitud. Estos animales cruzados derivan de Corridale y Merinos, y el entorno en el que viven les permite producir una lana que es seca, ondulada y duradera.",
            },
          },
          collections: {
            "spring-summer": {
              title: "Spring Summer",
              description:
                "Michell Yarn Studio ha desarrollado la nueva colección de hilos de primavera-verano para 2023. Nuestro objetivo es crear hilos únicos, versátiles y frescos. Le invitamos a descubrir y disfrutar de estas nuevas propuestas de hilos, esperando que le inspiren para crear prendas y accesorios únicos.",
            },
            "top-collections": {
              title: "Colecciones Top",
              description:
                "El pelo de Alpaca se produce en alrededor de 24 tonos naturales, lo que lo hace una alternativa atractiva para los principales diseñadores alrededor del mundo. La versatilidad de la fibra de Alpaca permite ser transformada en prendas de tejido de punto o plano, accesorios y artesanías.",
            },
            "machine-knitting": {
              title: "Tejido a Máquina",
              description:
                "Las colecciones PRESTIGE, TERRA, CLOUD, ORGANIC, ECO & RAS presentan hilados clásicos y de fantasía en Alpaca pura y mezclas con seda, lanas finas de merino, lino, tencel, poliamidas, acrílicos entre otros. Nosotros apuntamos a cambiar moda por estilo. Por estilo, nos referimos a proveer hilados de la mejor calidad – ambos clásicos y de fantasía, de tal manera que los diseñadores puedan crear tejidos que sean únicos y lujosos.",
            },
            "hand-knitting": {
              title: "Tejido a Mano",
              description:
                "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
            },
            "previous-collections": {
              title: "Colecciones Previas",
              description:
                "Todos los años las tendencias de color para las nuevas temporadas cambian y evolucionan, estos tonos se verán reflejados en revistas, catálogos, tiendas de moda y demás. La carta de colores de Tendencia Michell pone a su alcance una interesante gama de los colores de la nueva temporada los cuales serán de punto de partida.",
            },
          },
          "contact-us": {
            cusco: {
              title: "Contacto",
              description:
                "Pionero, líder, innovador y apasionado son algunas palabras que describen hoy a Michell tras celebrar recientemente nuestro 90 aniversario de ser pioneros y líderes en la producción de tops e hilados de alpaca en todo el mundo.",
            },
            lima: {
              title: "Contacto",
              description:
                "Pionero, líder, innovador y apasionado son algunas palabras que describen hoy a Michell tras celebrar recientemente nuestro 90 aniversario de ser pioneros y líderes en la producción de tops e hilados de alpaca en todo el mundo.",
            },
          },
          "creating-your-own-yarn": {
            "come-and-design": {
              title: "Michell Labs Diseña tu Propio Hilo",
              description:
                "Tomando en cuenta que las Colecciones de Hilados que propone Michell & Cia cada temporada busca satisfacer las necesidades de nuestros clientes, hoy va un paso más adelante ofreciendo un servicio personalizado que apunta a atender de manera más particular las necesidades de cada cliente,",
            },
            "our-fibres": {
              title: "Michell Labs Nuestras Fibras",
              description:
                "For Michell & Cia it is of vital importance to identify the raw materials and the percentage of which our yarns will be produced.",
            },
            "types-of-yarn": {
              title: "Michell Labs Tipologías de Hilados",
              description:
                "Nuestros clientes son el motor para desarrollar esta plataforma. En este sentido Michell Labs implementa herramientas y procesos para facilitar el desarrollo de nuevos hilados desde su tipología hasta su presentación.",
            },
            "types-of-colours": {
              title: "Michell Labs Tipos de Teñido",
              description:
                "Nuestros clientes son el motor para desarrollar esta plataforma. En este sentido Michell Labs implementa herramientas y procesos para facilitar el desarrollo de nuevos hilados desde su tipología hasta su presentación.",
            },
            "machine-knitting": {
              title: "Michell Labs Presentaciones para Tejido a Máquina",
              description:
                "Nuestros clientes son el motor para desarrollar esta plataforma. En este sentido Michell Labs implementa herramientas y procesos para facilitar el desarrollo de nuevos hilados desde su tipología hasta su presentación.",
            },
            "hand-knitting": {
              title: "Michell Labs Presentaciones para Tejido a Mano",
              description:
                "Nuestros clientes son el motor para desarrollar esta plataforma. En este sentido Michell Labs implementa herramientas y procesos para facilitar el desarrollo de nuevos hilados desde su tipología hasta su presentación.",
            },
            "suggested-labels": {
              title: "Michell Labs Etiquetas Sugeridas",
              description:
                "Nuestros clientes son el motor para desarrollar esta plataforma. En este sentido Michell Labs implementa herramientas y procesos para facilitar el desarrollo de nuevos hilados desde su tipología hasta su presentación.",
            },
            "contact-us": {
              title: "Michell Labs Contáctanos",
              description:
                "Para aquellos clientes también desean dar un paso más adelante, Michell & Cia pone a su disposición nuestro equipo de Investigación y Desarrollo (I&D) así como nuestras facilidades en Arequipa, Perú para que visiten y conozcan sus instalaciones, y del mismo modo puedan participar junto a nuestros equipos de I&D y Laboratorios",
            },
          },
          "past-collections": {
            "hand-knitting": {
              title: "Tejido a Mano",
              description:
                "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
              "pure-line": {
                title: "Tejido a Mano Pure Line",
                description:
                  "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
              },
              "terra-line": {
                title: "Tejido a Mano Terra Line",
                description:
                  "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
              },
              "cloud-line": {
                title: "Tejido a Mano Cloud Line",
                description:
                  "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
              },
              "organic-eco-and-ras-line": {
                title: "Tejido a Mano Organic, Eco & Ras Line",
                description:
                  "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
              },
              "super-bulky-line": {
                title: "Tejido a Mano Super Bulky Line",
                description:
                  "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
              },
              "apu-line": {
                title: "Tejido a Mano Apu Line",
                description:
                  "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
              },
            },
            "machine-knitting": {
              title: "Tejido a Máquina",
              description:
                "Las colecciones PRESTIGE, TERRA, CLOUD, ORGANIC, ECO & RAS presentan hilados clásicos y de fantasía en Alpaca pura y mezclas con seda, lanas finas de merino, lino, tencel, poliamidas, acrílicos entre otros. Nosotros apuntamos a cambiar moda por estilo. Por estilo, nos referimos a proveer hilados de la mejor calidad – ambos clásicos y de fantasía, de tal manera que los diseñadores puedan crear tejidos que sean únicos y lujosos.",
              "prestige-line": {
                title: "Tejido a Máquina Prestigue Line",
                description:
                  "The PRESTIGE, TERRA, CLOUD , ORGANIC and ECO & RAS Lines Collections include classic and fantasy yarns in pure Alpaca as well as blends with cashmere, silk, fine wools such as merino, linen, tencel, polyamides and acrylics, among others. Our aim is to change fashion for style, and by style we mean by providing yarns of the highest quality, both classic and fantasy, so that designers can create knits which are unique and luxurious.",
              },
              "terra-line": {
                title: "Tejido a Máquina Terra Line",
                description:
                  "The PRESTIGE, TERRA, CLOUD , ORGANIC and ECO & RAS Lines Collections include classic and fantasy yarns in pure Alpaca as well as blends with cashmere, silk, fine wools such as merino, linen, tencel, polyamides and acrylics, among others. Our aim is to change fashion for style, and by style we mean by providing yarns of the highest quality, both classic and fantasy, so that designers can create knits which are unique and luxurious.",
              },
              "cloud-line": {
                title: "Tejido a Máquina Cloud Line",
                description:
                  "The PRESTIGE, TERRA, CLOUD , ORGANIC and ECO & RAS Lines Collections include classic and fantasy yarns in pure Alpaca as well as blends with cashmere, silk, fine wools such as merino, linen, tencel, polyamides and acrylics, among others. Our aim is to change fashion for style, and by style we mean by providing yarns of the highest quality, both classic and fantasy, so that designers can create knits which are unique and luxurious.",
              },
              "organic-eco-and-ras-line": {
                title: "Tejido a Máquina Organic, Eco & Ras Line",
                description:
                  "The PRESTIGE, TERRA, CLOUD , ORGANIC and ECO & RAS Lines Collections include classic and fantasy yarns in pure Alpaca as well as blends with cashmere, silk, fine wools such as merino, linen, tencel, polyamides and acrylics, among others. Our aim is to change fashion for style, and by style we mean by providing yarns of the highest quality, both classic and fantasy, so that designers can create knits which are unique and luxurious.",
              },
              "colour-trend-and-natural-tones": {
                title: "Colores Tendencia & Tonos Naturales",
                description:
                  "Todos los años las tendencias de color para las nuevas temporadas cambian y evolucionan, estos tonos se verán reflejados en revistas, catálogos, tiendas de moda y demás. La carta de colores de Tendencia Michell pone a su alcance una interesante gama de los colores de la nueva temporada los cuales serán de punto de partida.",
              },
            },
          },
          general: {
            index: {
              title: "Michell Alpaca",
              description:
                "Con más de 90 años de experiencia y el conocimiento en el procesamiento de la fibra de alpaca, Michell & Cia. es hoy el pionero y el principal productor y exportador de tops e hilos de alpaca en el mundo.",
            },
            "about-us": {
              title: "Nosotros",
              description:
                "Pionero, líder, innovador y apasionado son algunas palabras que describen hoy a Michell tras celebrar recientemente nuestro 90 aniversario de ser pioneros y líderes en la producción de tops e hilados de alpaca en todo el mundo.",
            },
            "alpaca-story": {
              title: "La Historia de la Alpaca",
              description:
                "La fibra de la Alpaca es una creación de la naturaleza. Las alturas peruanas fueron desde el principio una fuente de producción de fibra para nosotros y ahora son la fuente de nuestra inspiración. Las Alpacas han sido criadas desde tiempos ancestrales.",
            },
            "contact-us": {
              title: "Contacto",
              description:
                "Pionero, líder, innovador y apasionado son algunas palabras que describen hoy a Michell tras celebrar recientemente nuestro 90 aniversario de ser pioneros y líderes en la producción de tops e hilados de alpaca en todo el mundo.",
            },
            "stock-service": {
              title: "Stock Service",
              description:
                "Nuestra pasión para proveer lo mejor en servicio al cliente nos ha permitido ofrecer una amplia variedad de hilados bajo el Servicio de Stock Perú, donde en la actualidad se ofrecen 8 calidades en una amplia gamas de colores clásicos y de tendencia. Esta temporada estamos renovando nuestra carta con nuevos artículos que esperamos sean de gran ayuda e inspiración.",
            },
            origins: {
              title: "Origins Pilares de Sostenibilidad",
              description:
                "En Michell estamos redefiniendo nuestro camino para convertirnos en una empresa más sostenible basada no sólo en un pilar económico, sino también en uno social y medioambiental.",
            },
            certifications: {
              title: "Certificaciones y Licencias",
              description:
                "Como parte de nuestro compromiso de convertirnos en una empresa sostenible, hemos obtenido las siguientes certificaciones, que demuestran los esfuerzos que estamos realizando para ser una empresa más sostenible.",
            },
            "social-responsibility": {
              title: "Responsabilidad Social",
              description:
                "Michell es una empresa socialmente responsable, tanto desde su interior como extendiendo esta filosofía a las comunidades con las que interactúa. Michell ha obtenido la Certificación de Comercio Justo del Perú otorgada por PromPerú el pasado mes de mayo de 2020, garantizando así que nuestros colaboradores disfruten de una agradable mejora de sus capacidades.",
            },
          },
          "hand-knitting": {
            "pure-line": {
              title: "Tejido a Mano Pure Line",
              description:
                "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
            },
            "terra-line": {
              title: "Tejido a Mano Terra Line",
              description:
                "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
            },
            "cloud-line": {
              title: "Tejido a Mano Cloud Line",
              description:
                "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
            },
            "organic-eco-and-ras-line": {
              title: "Tejido a Mano Organic, Eco & Ras Line",
              description:
                "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
            },
            "super-bulky-line": {
              title: "Tejido a Mano Super Bulky Line",
              description:
                "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
            },
            "apu-line": {
              title: "Tejido a Mano Apu Line",
              description:
                "La Colección de hilados para tejido a mano es creada como resultado de un estudio riguroso de tendencias de tejido a mano alrededor del mundo, combinando estructuras de hilado especiales, que resultan en una innovadora selección de hilados. Esta propuesta siempre puede ser modificada y personalizada según los requerimientos en mezclas, títulos y presentaciones requeridas por cada cliente.",
            },
          },
          "machine-knitting": {
            "prestige-line": {
              title: "Tejido a Máquina Prestigue Line",
              description:
                "The PRESTIGE, TERRA, CLOUD , ORGANIC and ECO & RAS Lines Collections include classic and fantasy yarns in pure Alpaca as well as blends with cashmere, silk, fine wools such as merino, linen, tencel, polyamides and acrylics, among others. Our aim is to change fashion for style, and by style we mean by providing yarns of the highest quality, both classic and fantasy, so that designers can create knits which are unique and luxurious.",
            },
            "terra-line": {
              title: "Tejido a Máquina Terra Line",
              description:
                "The PRESTIGE, TERRA, CLOUD , ORGANIC and ECO & RAS Lines Collections include classic and fantasy yarns in pure Alpaca as well as blends with cashmere, silk, fine wools such as merino, linen, tencel, polyamides and acrylics, among others. Our aim is to change fashion for style, and by style we mean by providing yarns of the highest quality, both classic and fantasy, so that designers can create knits which are unique and luxurious.",
            },
            "cloud-line": {
              title: "Tejido a Máquina Cloud Line",
              description:
                "The PRESTIGE, TERRA, CLOUD , ORGANIC and ECO & RAS Lines Collections include classic and fantasy yarns in pure Alpaca as well as blends with cashmere, silk, fine wools such as merino, linen, tencel, polyamides and acrylics, among others. Our aim is to change fashion for style, and by style we mean by providing yarns of the highest quality, both classic and fantasy, so that designers can create knits which are unique and luxurious.",
            },
            "organic-eco-and-ras-line": {
              title: "Tejido a Máquina Organic, Eco & Ras Line",
              description:
                "The PRESTIGE, TERRA, CLOUD , ORGANIC and ECO & RAS Lines Collections include classic and fantasy yarns in pure Alpaca as well as blends with cashmere, silk, fine wools such as merino, linen, tencel, polyamides and acrylics, among others. Our aim is to change fashion for style, and by style we mean by providing yarns of the highest quality, both classic and fantasy, so that designers can create knits which are unique and luxurious.",
            },
            "colour-trend-and-natural-tones": {
              title: "Colores Tendencia & Tonos Naturales",
              description:
                "Todos los años las tendencias de color para las nuevas temporadas cambian y evolucionan, estos tonos se verán reflejados en revistas, catálogos, tiendas de moda y demás. La carta de colores de Tendencia Michell pone a su alcance una interesante gama de los colores de la nueva temporada los cuales serán de punto de partida.",
            },
          },
          "michell-labs": {
            "new-yarn-and-colour-innovation": {
              title: "Michell Labs Innovaciones en Hilos y Colores",
              description:
                "Michell Labs nació como la plataforma de nuestro área de Investigación y Desarrollo para presentar innovaciones en hilos y colores. Buscamos, trabajamos y desarrollamos constantemente nuevas calidades, nuevos usos, propiedades y colores que tienen como objetivo presentar a nuestros clientes nuestras últimas innovaciones. En Michell, prestamos mucha atención a la innovación en torno al concepto de sostenibilidad, que nos ayudará a trabajar de manera conscientemente para cuidar nuestro medio ambiente y nuestro mundo.",
            },
            "colour-trend": {
              title: "Michell Labs Colores Tendencia Global",
              description:
                "Michell Labs nació como la plataforma de nuestra área de Investigación y Desarrollo para presentar innovaciones en hilos y colores. Buscamos, trabajamos y desarrollamos constantemente nuevas calidades, nuevos usos, propiedades y colores que tienen como objetivo presentar a nuestros clientes nuestras últimas innovaciones. En Michell, prestamos mucha atención a la innovación en torno al concepto de sostenibilidad, que nos ayudará a trabajar de manera conscientemente para cuidar nuestro medio ambiente y nuestro mundo.",
            },
            "creating-your-own-yarn": {
              title: "Michell Labs Crea tu Propio Hilo",
              description:
                "Michell Labs nació como la plataforma de nuestro área de Investigación y Desarrollo para presentar innovaciones en hilos y colores. Buscamos, trabajamos y desarrollamos constantemente nuevas calidades, nuevos usos, propiedades y colores que tienen como objetivo presentar a nuestros clientes nuestras últimas innovaciones. En Michell, prestamos mucha atención a la innovación en torno al concepto de sostenibilidad, que nos ayudará a trabajar de manera conscientemente para cuidar nuestro medio ambiente y nuestro mundo.",
            },
          },
          "new-yarn-and-colour-innovation": {
            "sustainable-easy-wash": {
              title: "Michell Labs Sostenible Easy Wash",
              description:
                "Presentamos Sustainable Easy Wash Alpaca, un novedoso tratamiento enzimático anti-encogimiento, que permite que los hilados de Alpaca tratados de esta manera puedan ser lavados a máquina. ",
            },
            "sustainable-green": {
              title: "Michell Labs Sostenible Green Colours",
              description:
                "Esta línea especial de colorantes es el resultado de nuestro compromiso de ofrecer una línea de colores sostenible y respetuosa con el medio ambiente.",
            },
            "upcycle-yarns": {
              title: "Michell Labs Upcycle Yarns",
              description:
                "El objetivo de lograr una economía circular es otro punto clave para nosotros, por lo que hemos sacado una línea de hilos llamada Upcycle. Lo que proponemos es reutilizar el material sobrante de diferentes procesos de producción en los procesos de hilado y teñido para reducir el desperdicio de materiales.",
            },
          },
          origins: {
            "social-commitment": {
              title: "Compromiso Social",
              description:
                "Como parte de una comunidad, buscamos ser protagonistas del desarrollo de todos. Dicho esto, nos proponemos ser una entidad de crecimiento social para nuestros colaboradores y todos aquellos actores que intervienen en torno a nuestra industria.",
            },
            "environmental-commitment": {
              title: "Compromiso Medioambiental",
              description:
                "Nuestro planeta vive años críticos y necesita un alto grado de concienciación por parte de los seres humanos si queremos preservar su biodiversidad.",
            },
            "economic-commitment": {
              title: "Compromiso Económico",
              description:
                'Nuestro enfoque económico está orientado a nuevas y modernas técnicas de producción que reflejan nuestra idea de convertirnos en una empresa sostenible totalmente adaptada a las necesidades actuales. Queremos ofrecer desde hilos ecológicos hasta productos innovadores que lleven la etiqueta de "sostenible" allá donde se vean.',
            },
            traceability: {
              title: "Trazabilidad por Michell",
              description:
                "La trazabilidad consiste en compartir con usted la procedencia de la fibra de alpaca, para que pueda ver el impacto económico positivo que tiene el uso de nuestros tops o hilos de alpaca. También estamos trabajando, para un futuro próximo, en la trazabilidad de otras fibras naturales con las que trabajamos.",
            },
            "sustainability-reports": {
              title: "Informes de sostenibilidad",
              description:
                "Como parte de nuestro compromiso de convertirnos en una empresa sostenible, hemos obtenido las siguientes certificaciones, que demuestran los esfuerzos que estamos realizando para ser una empresa más sostenible.",
            },
          },
          "social-responsibility": {
            mirasol: {
              title: "Mirasol",
              description:
                "La Escuela Mirasol es una asociación civil sin ánimo de lucro que se creó gracias a la iniciativa de un matrimonio noruego, clientes de Michell, y al apoyo incondicional de Michell & Cía S.A.",
            },
            "michell-art-contest": {
              title: "Concurso de Arte",
              description:
                'Michell ha organizado el "Concurso de Arte Michell" durante los últimos 40 años y hoy en día está considerado como uno de los mejores concursos de arte en Perú. Este concurso comenzó cuando la familia Michell viajó a Cabanaconde, cerca del Cañón del Colca en Arequipa. Allí se encontraron con varios artistas de gran talento que pintaban en acuarela.',
            },
          },
          "spring-summer": {
            "machine-knitting": {
              title: "Spring Summer Tejido a Máquina",
              description:
                "Michell Yarn Studio ha desarrollado la nueva colección de hilos de primavera-verano para 2023. Nuestro objetivo es crear hilos únicos, versátiles y frescos. Le invitamos a descubrir y disfrutar de estas nuevas propuestas de hilos, esperando que le inspiren para crear prendas y accesorios únicos.",
            },
            "hand-knitting": {
              title: "Spring Summer Tejido a Mano",
              description:
                "Michell Yarn Studio ha desarrollado la nueva colección de hilos de primavera-verano para 2023. Nuestro objetivo es crear hilos únicos, versátiles y frescos. Le invitamos a descubrir y disfrutar de estas nuevas propuestas de hilos, esperando que le inspiren para crear prendas y accesorios únicos.",
            },
          },
          "stock-service": {
            "machine-knitting": {
              title: "Stock Service Tejido a Máquina",
              description:
                "Nuestra pasión para proveer lo mejor en servicio al cliente nos ha permitido ofrecer una amplia variedad de hilados bajo el Servicio de Stock Perú, donde en la actualidad se ofrecen 8 calidades en una amplia gamas de colores clásicos y de tendencia. Esta temporada estamos renovando nuestra carta con nuevos artículos que esperamos sean de gran ayuda e inspiración.",
            },
            "hand-knitting": {
              title: "Stock Service Tejido a Mano",
              description:
                "Nuestra pasión para proveer lo mejor en servicio al cliente nos ha permitido ofrecer una amplia variedad de hilados bajo el Servicio de Stock Perú, donde en la actualidad se ofrecen 8 calidades en una amplia gamas de colores clásicos y de tendencia. Esta temporada estamos renovando nuestra carta con nuevos artículos que esperamos sean de gran ayuda e inspiración.",
            },
          },
        },
        newLabel: "Nuevo",
        paths: {
          "machine-knitting": "tejido-a-maquina",
          "hand-knitting": "tejido-a-mano",
        },
        Back: "Regresar",
        "view-more": "Conocer más",
      };
    },
    260: function (e, n, o) {
      "use strict";
      var t = o(1),
        r = o(50),
        l = o(133),
        c = o(134),
        d = t.default.extend({
          name: "MichellLayout",
          components: { MichellHeader: l.a, MichellFooter: c.a },
          mounted: function () {
            Object(r.d)(this.$cookies.get("cookies")) &&
              (this.$modal.show("cookies-policies"),
              this.$cookies.set("cookies", "1"));
          },
          methods: {
            close: function () {
              this.$modal.hide("cookies-policies");
            },
          },
        }),
        m = (o(331), o(332), o(9)),
        component = Object(m.a)(
          d,
          function () {
            var e = this,
              n = e.$createElement,
              o = e._self._c || n;
            return o(
              "div",
              [
                o("MichellHeader"),
                e._v(" "),
                o("Nuxt"),
                e._v(" "),
                o("MichellFooter"),
                e._v(" "),
                o(
                  "modal",
                  {
                    attrs: {
                      name: "cookies-policies",
                      adaptive: !0,
                      shiftY: 0,
                      width: "100%",
                      classes: "policies",
                    },
                  },
                  [
                    o(
                      "div",
                      {
                        staticClass:
                          "p-4 xl:px-10 flex flex-col xl:flex-row justify-center items-center h-full gap-8",
                      },
                      [
                        o("div", { staticClass: "text text-sm" }, [
                          o("p", { staticClass: "mb-5" }, [
                            e._v(
                              "\n          With your agreement, we and our partners use cookies or similar\n          technologies to store, access, and process personal data like your\n          visit on this website.\n        "
                            ),
                          ]),
                          e._v(" "),
                          o("p", [
                            e._v(
                              "\n          We and our partners do the following data processing: Personalised\n          ads and content, ad and content measurement, audience insights and\n          product development, Precise geolocation data, and identification\n          through device scanning, Share data and profiles not linked to your\n          identity, Store and/or access information on a device.\n        "
                            ),
                          ]),
                        ]),
                        e._v(" "),
                        o("div", { staticClass: "buttons" }, [
                          o(
                            "button",
                            {
                              on: {
                                click: function (n) {
                                  return e.close();
                                },
                              },
                            },
                            [e._v("Aceptar")]
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "630ed362",
          null
        );
      n.a = component.exports;
    },
    261: function (e, n, o) {
      "use strict";
      var t = o(1),
        r = o(133),
        l = o(134),
        c = t.default.extend({
          name: "PastCollections",
          components: { MichellHeader: r.a, MichellFooter: l.a },
        }),
        d = o(9),
        component = Object(d.a)(
          c,
          function () {
            var e = this,
              n = e.$createElement,
              o = e._self._c || n;
            return o(
              "div",
              [
                o("MichellHeader", { attrs: { complete: !1 } }),
                e._v(" "),
                o("Nuxt"),
                e._v(" "),
                o("MichellFooter"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "2223a864",
          null
        );
      n.a = component.exports;
    },
    265: function (e, n, o) {
      e.exports = o(266);
    },
    304: function (e, n, o) {
      "use strict";
      o.r(n);
      var t = o(4),
        r = (o(32), o(50));
      function l() {
        return (l = Object(t.a)(
          regeneratorRuntime.mark(function e(n) {
            var o, t, l, c, d;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (o = n.$axios),
                      (t = n.$cookies),
                      (l = n.redirect),
                      n.route,
                      n.params,
                      (c = t.get("AUTH_TOKEN")),
                      (d = "https://www.michell.com.pe/aw22-23/form"),
                      (e.next = 5);
                    break;
                  case 5:
                    if (!Object(r.d)(c)) {
                      e.next = 9;
                      break;
                    }
                    l(d), (e.next = 13);
                    break;
                  case 9:
                    return (e.next = 11), o.$get("/auth/verify");
                  case 11:
                    !1 === e.sent.access && l(d);
                  case 13:
                    return e.abrupt("return", !0);
                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      n.default = function (e) {
        return l.apply(this, arguments);
      };
    },
    319: function (e, n, o) {
      e.exports = {};
    },
    321: function (e, n, o) {
      "use strict";
      o(214);
    },
    322: function (e, n, o) {
      "use strict";
      o(215);
    },
    323: function (e, n, o) {
      "use strict";
      o(216);
    },
    324: function (e, n, o) {
      "use strict";
      o(217);
    },
    325: function (e, n, o) {
      "use strict";
      o(218);
    },
    326: function (e, n, o) {
      "use strict";
      o(219);
    },
    327: function (e, n, o) {
      "use strict";
      o(220);
    },
    328: function (e, n, o) {
      "use strict";
      o(221);
    },
    329: function (e, n, o) {
      "use strict";
      o(222);
    },
    330: function (e, n, o) {
      "use strict";
      o(223);
    },
    331: function (e, n, o) {
      "use strict";
      o(224);
    },
    332: function (e, n, o) {
      "use strict";
      o(225);
    },
    333: function (e, n, o) {
      "use strict";
      o.r(n),
        o.d(n, "state", function () {
          return r;
        }),
        o.d(n, "getter", function () {
          return l;
        }),
        o.d(n, "mutations", function () {
          return c;
        }),
        o.d(n, "actions", function () {
          return d;
        });
      var t = o(4),
        r =
          (o(32),
          function () {
            return { counter: 0 };
          }),
        l = {
          getCounter: function (e) {
            return e.counter;
          },
        },
        c = {
          increment: function (e) {
            e.counter++;
          },
        },
        d = {
          fetchCounter: function (e) {
            return Object(t.a)(
              regeneratorRuntime.mark(function n() {
                var o;
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (o = { data: 10 }),
                          (e.counter = o.data),
                          n.abrupt("return", o.data)
                        );
                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
        };
    },
    386: function (e, n) {
      function o(e) {
        var n = new Error("Cannot find module '" + e + "'");
        throw ((n.code = "MODULE_NOT_FOUND"), n);
      }
      (o.keys = function () {
        return [];
      }),
        (o.resolve = o),
        (e.exports = o),
        (o.id = 386);
    },
  },
  [[265, 94, 2, 95]],
]);
