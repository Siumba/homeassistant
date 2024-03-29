!(function (e) {
  var t = {};
  function r(o) {
    if (t[o]) return t[o].exports;
    var n = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            o,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return o;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 4));
})([
  function (e, t, r) {
    "use strict";
    function o() {
      return document.querySelector("hc-main")
        ? document.querySelector("hc-main").hass
        : document.querySelector("home-assistant")
        ? document.querySelector("home-assistant").hass
        : void 0;
    }
    function n(e) {
      return document.querySelector("hc-main")
        ? document.querySelector("hc-main").provideHass(e)
        : document.querySelector("home-assistant")
        ? document.querySelector("home-assistant").provideHass(e)
        : void 0;
    }
    function s() {
      var e,
        t = document.querySelector("hc-main");
      return t
        ? (((e = t._lovelaceConfig).current_view = t._lovelacePath), e)
        : (t =
            (t =
              (t =
                (t =
                  ((t =
                    (t =
                      (t =
                        (t =
                          (t = document.querySelector("home-assistant")) &&
                          t.shadowRoot) &&
                        t.querySelector("home-assistant-main")) &&
                      t.shadowRoot) &&
                    t.querySelector(
                      "app-drawer-layout partial-panel-resolver"
                    )) &&
                    t.shadowRoot) ||
                  t) && t.querySelector("ha-panel-lovelace")) &&
              t.shadowRoot) && t.querySelector("hui-root"))
        ? (((e = t.lovelace).current_view = t.___curView), e)
        : null;
    }
    function a() {
      var e = document.querySelector("hc-main");
      return (e = e
        ? ((e =
            (e = (e = e && e.shadowRoot) && e.querySelector("hc-lovelace")) &&
            e.shadowRoot) &&
            e.querySelector("hui-view")) ||
          e.querySelector("hui-panel-view")
        : (e =
            (e =
              (e =
                (e =
                  (e =
                    (e =
                      (e =
                        ((e =
                          (e =
                            (e =
                              (e =
                                (e =
                                  document.querySelector("home-assistant")) &&
                                e.shadowRoot) &&
                              e.querySelector("home-assistant-main")) &&
                            e.shadowRoot) &&
                          e.querySelector(
                            "app-drawer-layout partial-panel-resolver"
                          )) &&
                          e.shadowRoot) ||
                        e) && e.querySelector("ha-panel-lovelace")) &&
                    e.shadowRoot) && e.querySelector("hui-root")) &&
                e.shadowRoot) && e.querySelector("ha-app-layout")) &&
            e.querySelector("#view")) && e.firstElementChild);
    }
    async function i() {
      if (customElements.get("hui-view")) return !0;
      await customElements.whenDefined("partial-panel-resolver");
      const e = document.createElement("partial-panel-resolver");
      if (
        ((e.hass = {
          panels: [{ url_path: "tmp", component_name: "lovelace" }],
        }),
        e._updateRoutes(),
        await e.routerOptions.routes.tmp.load(),
        !customElements.get("ha-panel-lovelace"))
      )
        return !1;
      const t = document.createElement("ha-panel-lovelace");
      return (
        (t.hass = o()),
        void 0 === t.hass &&
          (await new Promise((e) => {
            window.addEventListener(
              "connection-status",
              (t) => {
                console.log(t), e();
              },
              { once: !0 }
            );
          }),
          (t.hass = o())),
        (t.panel = { config: { mode: null } }),
        t._fetchConfig(),
        !0
      );
    }
    r.d(t, "a", function () {
      return o;
    }),
      r.d(t, "e", function () {
        return n;
      }),
      r.d(t, "c", function () {
        return s;
      }),
      r.d(t, "d", function () {
        return a;
      }),
      r.d(t, "b", function () {
        return i;
      });
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return o;
    });
    let o = (function () {
      if (window.fully && "function" == typeof fully.getDeviceId)
        return fully.getDeviceId();
      if (!localStorage["lovelace-player-device-id"]) {
        const e = () =>
          Math.floor(1e5 * (1 + Math.random()))
            .toString(16)
            .substring(1);
        localStorage["lovelace-player-device-id"] = `${e()}${e()}-${e()}${e()}`;
      }
      return localStorage["lovelace-player-device-id"];
    })();
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hasOldTemplate;
    }),
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return parseOldTemplate;
      });
    var _hass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
      _deviceID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    function hasOldTemplate(e) {
      return /\[\[\s+.*\s+\]\]/.test(e);
    }
    function parseTemplateString(str, specialData = {}) {
      if ("string" != typeof str) return text;
      const FUNCTION = /^[a-zA-Z0-9_]+\(.*\)$/,
        EXPR = /([^=<>!]+)\s*(==|!=|<|>|<=|>=)\s*([^=<>!]+)/,
        SPECIAL = /^\{.+\}$/,
        STRING = /^"[^"]*"|'[^']*'$/;
      "string" == typeof specialData && (specialData = {}),
        (specialData = Object.assign(
          {
            user: Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__.a)().user.name,
            browser: _deviceID_js__WEBPACK_IMPORTED_MODULE_1__.a,
            hash: location.hash.substr(1) || " ",
          },
          specialData
        ));
      const _parse_function = (e) => {
          let t = [e.substr(0, e.indexOf("(")).trim()];
          for (e = e.substr(e.indexOf("(") + 1); e; ) {
            let r = 0,
              o = 0,
              n = !1;
            for (; e[r]; ) {
              let t = e[r++];
              if (
                (t === n && r > 1 && "\\" !== e[r - 2]
                  ? (n = !1)
                  : "\"'".includes(t) && (n = t),
                !n)
              ) {
                if ("(" === t) o += 1;
                else if (")" === t) {
                  o -= 1;
                  continue;
                }
                if (!(o > 0) && ",)".includes(t)) break;
              }
            }
            t.push(e.substr(0, r - 1).trim()), (e = e.substr(r));
          }
          return t;
        },
        _parse_special = (e) => (
          (e = e.substr(1, e.length - 2)), specialData[e] || `{${e}}`
        ),
        _parse_entity = (e) => {
          let t;
          if ((e = e.split("."))[0].match(SPECIAL))
            (t = _parse_special(e.shift())),
              (t =
                Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__.a)().states[t] ||
                t);
          else if (
            ((t = Object(_hass_js__WEBPACK_IMPORTED_MODULE_0__.a)().states[
              `${e.shift()}.${e.shift()}`
            ]),
            !e.length)
          )
            return t.state;
          return e.forEach((e) => (t = t[e])), t;
        },
        _eval_expr = (str) => {
          if (((str = EXPR.exec(str)), null === str)) return !1;
          const lhs = parseTemplateString(str[1]),
            rhs = parseTemplateString(str[3]);
          var expr = "";
          return (
            (expr =
              parseFloat(lhs) != lhs
                ? `"${lhs}" ${str[2]} "${rhs}"`
                : `${parseFloat(lhs)} ${str[2]} ${parseFloat(rhs)}`),
            eval(expr)
          );
        },
        _eval_function = (e) => {
          if ("if" === e[0])
            return _eval_expr(e[1])
              ? parseTemplateString(e[2])
              : parseTemplateString(e[3]);
        };
      try {
        return (
          (str = str.trim()),
          str.match(STRING)
            ? str.substr(1, str.length - 2)
            : str.match(SPECIAL)
            ? _parse_special(str)
            : str.match(FUNCTION)
            ? _eval_function(_parse_function(str))
            : str.includes(".")
            ? _parse_entity(str)
            : str
        );
      } catch (e) {
        return `[[ Template matching failed: ${str} ]]`;
      }
    }
    function parseOldTemplate(e, t = {}) {
      if ("string" != typeof e) return e;
      return (e = e.replace(/\[\[\s(.*?)\s\]\]/g, (e, r, o, n) =>
        parseTemplateString(r, t)
      ));
    }
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"card-tools","private":true,"version":"2.1.2","description":"Lovelace Card Tools","scripts":{"build":"webpack","watch":"webpack --watch --mode=development"},"repository":{"type":"git","url":"github.com:thomasloven/card-tools"},"author":"Thomas Lovén","license":"MIT","devDependencies":{"webpack":"^4.44.1","webpack-cli":"^3.3.12"}}'
    );
  },
  function (e, t, r) {
    "use strict";
    r.r(t);
    const o = customElements.get("home-assistant-main")
        ? Object.getPrototypeOf(customElements.get("home-assistant-main"))
        : Object.getPrototypeOf(customElements.get("hui-view")),
      n = o.prototype.html,
      s = o.prototype.css;
    var a = r(0);
    function i(e, t, r = null) {
      if (
        (((e = new Event(e, {
          bubbles: !0,
          cancelable: !1,
          composed: !0,
        })).detail = t || {}),
        r)
      )
        r.dispatchEvent(e);
      else {
        var o = Object(a.d)();
        o && o.dispatchEvent(e);
      }
    }
    let c = window.cardHelpers;
    const l = new Promise(async (e, t) => {
      c && e();
      const r = async () => {
        (c = await window.loadCardHelpers()), (window.cardHelpers = c), e();
      };
      window.loadCardHelpers
        ? r()
        : window.addEventListener("load", async () => {
            Object(a.b)(), window.loadCardHelpers && r();
          });
    });
    function u(e, t) {
      const r = { type: "error", error: e, origConfig: t },
        o = document.createElement("hui-error-card");
      return (
        customElements.whenDefined("hui-error-card").then(() => {
          const e = document.createElement("hui-error-card");
          e.setConfig(r), o.parentElement && o.parentElement.replaceChild(e, o);
        }),
        l.then(() => {
          i("ll-rebuild", {}, o);
        }),
        o
      );
    }
    function d(e, t) {
      if (!t || "object" != typeof t || !t.type)
        return u(`No ${e} type configured`, t);
      let r = t.type;
      if (
        ((r = r.startsWith("custom:")
          ? r.substr("custom:".length)
          : `hui-${r}-${e}`),
        customElements.get(r))
      )
        return (function (e, t) {
          let r = document.createElement(e);
          try {
            r.setConfig(JSON.parse(JSON.stringify(t)));
          } catch (e) {
            r = u(e, t);
          }
          return (
            l.then(() => {
              i("ll-rebuild", {}, r);
            }),
            r
          );
        })(r, t);
      const o = u(`Custom element doesn't exist: ${r}.`, t);
      o.style.display = "None";
      const n = setTimeout(() => {
        o.style.display = "";
      }, 2e3);
      return (
        customElements.whenDefined(r).then(() => {
          clearTimeout(n), i("ll-rebuild", {}, o);
        }),
        o
      );
    }
    function p(e) {
      return c ? c.createCardElement(e) : d("card", e);
    }
    function m(e) {
      return c ? c.createHuiElement(e) : d("element", e);
    }
    function h(e) {
      if (c) return c.createRowElement(e);
      const t = new Set([
          "call-service",
          "cast",
          "conditional",
          "divider",
          "section",
          "select",
          "weblink",
        ]),
        r = {
          alert: "toggle",
          automation: "toggle",
          climate: "climate",
          cover: "cover",
          fan: "toggle",
          group: "group",
          input_boolean: "toggle",
          input_number: "input-number",
          input_select: "input-select",
          input_text: "input-text",
          light: "toggle",
          lock: "lock",
          media_player: "media-player",
          remote: "toggle",
          scene: "scene",
          script: "script",
          sensor: "sensor",
          timer: "timer",
          switch: "toggle",
          vacuum: "toggle",
          water_heater: "climate",
          input_datetime: "input-datetime",
          none: void 0,
        };
      if (!e) return u("Invalid configuration given.", e);
      if (
        ("string" == typeof e && (e = { entity: e }),
        "object" != typeof e || (!e.entity && !e.type))
      )
        return u("Invalid configuration given.", e);
      const o = e.type || "default";
      if (t.has(o) || o.startsWith("custom:")) return d("row", e);
      return d("entity-row", {
        type: r[e.entity ? e.entity.split(".", 1)[0] : "none"] || "text",
        ...e,
      });
    }
    class f extends o {
      static get version() {
        return 2;
      }
      static get properties() {
        return { noHass: { type: Boolean } };
      }
      setConfig(e) {
        (this._config = e),
          this.el
            ? this.el.setConfig(e)
            : ((this.el = this.create(e)),
              this._hass && (this.el.hass = this._hass),
              this.noHass && Object(a.e)(this));
      }
      set config(e) {
        this.setConfig(e);
      }
      set hass(e) {
        (this._hass = e), this.el && (this.el.hass = e);
      }
      createRenderRoot() {
        return this;
      }
      render() {
        return n`${this.el}`;
      }
    }
    const g = function (e, t) {
        const r = Object.getOwnPropertyDescriptors(t.prototype);
        for (const [t, o] of Object.entries(r))
          "constructor" !== t && Object.defineProperty(e.prototype, t, o);
        const o = Object.getOwnPropertyDescriptors(t);
        for (const [t, r] of Object.entries(o))
          "prototype" !== t && Object.defineProperty(e, t, r);
        const n = Object.getPrototypeOf(t),
          s = Object.getOwnPropertyDescriptors(n.prototype);
        for (const [t, r] of Object.entries(s))
          "constructor" !== t &&
            Object.defineProperty(Object.getPrototypeOf(e).prototype, t, r);
        const a = Object.getOwnPropertyDescriptors(n);
        for (const [t, r] of Object.entries(a))
          "prototype" !== t &&
            Object.defineProperty(Object.getPrototypeOf(e), t, r);
      },
      _ = customElements.get("card-maker");
    if (!_ || !_.version || _.version < 2) {
      class e extends f {
        create(e) {
          return p(e);
        }
        getCardSize() {
          return this.firstElementChild && this.firstElementChild.getCardSize
            ? this.firstElementChild.getCardSize()
            : 1;
        }
      }
      _ ? g(_, e) : customElements.define("card-maker", e);
    }
    const w = customElements.get("element-maker");
    if (!w || !w.version || w.version < 2) {
      class e extends f {
        create(e) {
          return m(e);
        }
      }
      w ? g(w, e) : customElements.define("element-maker", e);
    }
    const y = customElements.get("entity-row-maker");
    if (!y || !y.version || y.version < 2) {
      class e extends f {
        create(e) {
          return h(e);
        }
      }
      y ? g(y, e) : customElements.define("entity-row-maker", e);
    }
    var v = r(1);
    function b(e, t = {}) {
      return (
        customElements.whenDefined("long-press").then(() => {
          document.body.querySelector("long-press").bind(e);
        }),
        customElements.whenDefined("action-handler").then(() => {
          document.body.querySelector("action-handler").bind(e, t);
        }),
        e
      );
    }
    async function E(e, t, r = !1) {
      let o = e;
      "string" == typeof t && (t = t.split(/(\$| )/));
      for (const [e, n] of t.entries())
        if (n.trim().length) {
          if (!o) return null;
          o.localName &&
            o.localName.includes("-") &&
            (await customElements.whenDefined(o.localName)),
            o.updateComplete && (await o.updateComplete),
            (o =
              "$" === n
                ? r && e == t.length - 1
                  ? [o.shadowRoot]
                  : o.shadowRoot
                : r && e == t.length - 1
                ? o.querySelectorAll(n)
                : o.querySelector(n));
        }
      return o;
    }
    async function O(e, t, r = !1, o = 1e4) {
      return Promise.race([
        E(e, t, r),
        new Promise((e, t) => setTimeout(() => t(new Error("timeout")), o)),
      ]).catch((e) => {
        if (!e.message || "timeout" !== e.message) throw e;
        return null;
      });
    }
    async function S(e, t = !1) {
      const r =
        document.querySelector("hc-main") ||
        document.querySelector("home-assistant");
      i("hass-more-info", { entityId: e }, r);
      const o = await O(r, "$ ha-more-info-dialog");
      return (o.large = t), o;
    }
    async function C() {
      const e =
        document.querySelector("home-assistant") ||
        document.querySelector("hc-root");
      i("hass-more-info", { entityId: "." }, e);
      const t = await O(e, "$ card-tools-popup");
      t && t.closeDialog();
    }
    async function x(e, t, r = !1, o = {}, n = !1) {
      if (!customElements.get("card-tools-popup")) {
        const e = customElements.get("home-assistant-main")
            ? Object.getPrototypeOf(customElements.get("home-assistant-main"))
            : Object.getPrototypeOf(customElements.get("hui-view")),
          t = e.prototype.html,
          r = e.prototype.css;
        class o extends e {
          static get properties() {
            return {
              open: {},
              large: { reflect: !0, type: Boolean },
              hass: {},
            };
          }
          updated(e) {
            e.has("hass") && this.card && (this.card.hass = this.hass);
          }
          closeDialog() {
            this.open = !1;
          }
          async _makeCard() {
            const e = await window.loadCardHelpers();
            (this.card = await e.createCardElement(this._card)),
              (this.card.hass = this.hass),
              this.requestUpdate();
          }
          async _applyStyles() {
            let e = await O(this, "$ ha-dialog");
            customElements.whenDefined("card-mod").then(async () => {
              if (!e) return;
              customElements
                .get("card-mod")
                .applyToElement(
                  e,
                  "more-info",
                  this._style,
                  { config: this._card },
                  [],
                  !1
                );
            });
          }
          async showDialog(e, t, r = !1, o = {}, n = !1) {
            (this.title = e),
              (this._card = t),
              (this.large = r),
              (this._style = o),
              (this.fullscreen = !!n),
              this._makeCard(),
              await this.updateComplete,
              (this.open = !0),
              await this._applyStyles();
          }
          _enlarge() {
            this.large = !this.large;
          }
          render() {
            return this.open
              ? t`
            <ha-dialog
              open
              @closed=${this.closeDialog}
              .heading=${!0}
              hideActions
              @ll-rebuild=${this._makeCard}
            >
            ${
              this.fullscreen
                ? t`<div slot="heading"></div>`
                : t`
                <app-toolbar slot="heading">
                  <mwc-icon-button
                    .label=${"dismiss"}
                    dialogAction="cancel"
                  >
                    <ha-icon
                      .icon=${"mdi:close"}
                    ></ha-icon>
                  </mwc-icon-button>
                  <div class="main-title" @click=${this._enlarge}>
                    ${this.title}
                  </div>
                </app-toolbar>
              `
            }
              <div class="content">
                ${this.card}
              </div>
            </ha-dialog>
          `
              : t``;
          }
          static get styles() {
            return r`
          ha-dialog {
            --mdc-dialog-min-width: 400px;
            --mdc-dialog-max-width: 600px;
            --mdc-dialog-heading-ink-color: var(--primary-text-color);
            --mdc-dialog-content-ink-color: var(--primary-text-color);
            --justify-action-buttons: space-between;
          }
          @media all and (max-width: 450px), all and (max-height: 500px) {
            ha-dialog {
              --mdc-dialog-min-width: 100vw;
              --mdc-dialog-max-width: 100vw;
              --mdc-dialog-min-height: 100%;
              --mdc-dialog-max-height: 100%;
              --mdc-shape-medium: 0px;
              --vertial-align-dialog: flex-end;
            }
          }

          app-toolbar {
            flex-shrink: 0;
            color: var(--primary-text-color);
            background-color: var(--secondary-background-color);
          }

          .main-title {
            margin-left: 16px;
            line-height: 1.3em;
            max-height: 2.6em;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
          .content {
            margin: -24px -24px !important;
          }

          @media all and (max-width: 450px), all and (max-height: 500px) {
            app-toolbar {
              background-color: var(--app-header-background-color);
              color: var(--app-header-text-color, white);
            }
          }

          @media all and (min-width: 451px) and (min-height: 501px) {
            ha-dialog {
              --mdc-dialog-max-width: 90vw;
            }

            .content {
              width: 400px;
            }
            :host([large]) .content {
              width: calc(90vw - 48px);
            }

            :host([large]) app-toolbar {
              max-width: calc(90vw - 32px);
            }
          }
          `;
          }
        }
        customElements.define("card-tools-popup", o);
      }
      const s =
        document.querySelector("home-assistant") ||
        document.querySelector("hc-root");
      if (!s) return;
      let i = await O(s, "$ card-tools-popup");
      if (
        (i ||
          ((i = document.createElement("card-tools-popup")),
          s.shadowRoot.appendChild(i),
          Object(a.e)(i)),
        !window._moreInfoDialogListener)
      ) {
        const e = async (e) => {
          if (e.state && "cardToolsPopup" in e.state)
            if (e.state.cardToolsPopup) {
              const {
                title: t,
                card: r,
                large: o,
                style: n,
                fullscreen: s,
              } = e.state.params;
              x(t, r, o, n, s);
            } else i.closeDialog();
        };
        window.addEventListener("popstate", e),
          (window._moreInfoDialogListener = !0);
      }
      history.replaceState({ cardToolsPopup: !1 }, ""),
        history.pushState(
          {
            cardToolsPopup: !0,
            params: { title: e, card: t, large: r, style: o, fullscreen: n },
          },
          ""
        ),
        i.showDialog(e, t, r, o, n);
    }
    function D(e, t, r) {
      e || (e = Object(a.a)().connection);
      let o = {
          user: Object(a.a)().user.name,
          browser: v.a,
          hash: location.hash.substr(1) || " ",
          ...r.variables,
        },
        n = r.template,
        s = r.entity_ids;
      return e.subscribeMessage(
        (e) => {
          let r = e.result;
          (r = r.replace(
            /_\([^)]*\)/g,
            (e) => Object(a.a)().localize(e.substring(2, e.length - 1)) || e
          )),
            t(r);
        },
        { type: "render_template", template: n, variables: o, entity_ids: s }
      );
    }
    var j = r(2);
    const T = Object(a.a)().callWS({ type: "config/area_registry/list" }),
      P = Object(a.a)().callWS({ type: "config/device_registry/list" }),
      k = Object(a.a)().callWS({ type: "config/entity_registry/list" });
    async function q() {
      return (
        (window.cardToolsData = window.cardToolsData || {
          areas: await T,
          devices: await P,
          entities: await k,
        }),
        window.cardToolsData
      );
    }
    function $(e) {
      const t = window.cardToolsData;
      for (const r of t.areas)
        if (r.name.toLowerCase() === e.toLowerCase()) return r;
      return null;
    }
    function R(e) {
      const t = window.cardToolsData;
      let r = [];
      if (!e) return r;
      for (const o of t.devices) o.area_id === e.area_id && r.push(o);
      return r;
    }
    function I(e) {
      const t = window.cardToolsData;
      for (const r of t.devices)
        if (r.name.toLowerCase() === e.toLowerCase()) return r;
      return null;
    }
    function L(e) {
      const t = window.cardToolsData;
      let r = [];
      if (!e) return r;
      for (const o of t.entities) o.device_id === e.id && r.push(o.entity_id);
      return r;
    }
    function M(e, t) {
      window._registerCard ||
        ((window._customCardButtons = []),
        (window._registerCard = (e, t) => {
          window._customCardButtons.push({ el: e, name: t });
        }),
        customElements.whenDefined("hui-card-picker").then(() => {
          customElements.get("hui-card-picker").prototype.firstUpdated =
            function () {
              (this._customCardButtons = document.createElement("div")),
                this._customCardButtons.classList.add("cards-container"),
                (this._customCardButtons.id = "custom"),
                (this._customCardButtons.style.borderTop =
                  "1px solid var(--primary-color)"),
                window._customCardButtons.forEach,
                this.shadowRoot.appendChild(this._customCardButtons),
                window._customCardButtons.forEach((e) => {
                  const t = document.createElement("mwc-button");
                  (t.type = "custom:" + e.el),
                    (t.innerHTML = e.name),
                    t.addEventListener("click", this._cardPicked),
                    this._customCardButtons.appendChild(t);
                });
            };
        })),
        window._registerCard(e, t);
    }
    q();
    const B = async (e) => {
      await (async () => {
        if (customElements.get("developer-tools-event")) return;
        await customElements.whenDefined("partial-panel-resolver");
        const e = document.createElement("partial-panel-resolver");
        (e.hass = {
          panels: [{ url_path: "tmp", component_name: "developer-tools" }],
        }),
          e._updateRoutes(),
          await e.routerOptions.routes.tmp.load(),
          await customElements.whenDefined("developer-tools-router");
        const t = document.createElement("developer-tools-router");
        await t.routerOptions.routes.event.load();
      })();
      return document
        .createElement("developer-tools-event")
        ._computeParsedEventData(e);
    };
    class N {
      static checkVersion(e) {}
      static args() {}
      static logger() {}
      static get localize() {
        return Object(a.a)().localize;
      }
      static get deviceID() {
        return v.a;
      }
      static get fireEvent() {
        return i;
      }
      static get hass() {
        return Object(a.a)();
      }
      static get lovelace() {
        return Object(a.c)();
      }
      static get lovelace_view() {
        return a.d;
      }
      static get provideHass() {
        return a.e;
      }
      static get LitElement() {
        return o;
      }
      static get LitHtml() {
        return n;
      }
      static get LitCSS() {
        return s;
      }
      static get longpress() {
        return b;
      }
      static get createCard() {
        return p;
      }
      static get createElement() {
        return m;
      }
      static get createEntityRow() {
        return h;
      }
      static get moreInfo() {
        return S;
      }
      static get popUp() {
        return x;
      }
      static get closePopUp() {
        return C;
      }
      static get hasTemplate() {
        return (e) => {
          return (
            (t = e),
            !!String(t).includes("{%") ||
              !!String(t).includes("{{") ||
              void 0 ||
              Object(j.a)(e)
          );
          var t;
        };
      }
      static parseTemplate(e, t, r = {}) {
        return "string" == typeof e
          ? Object(j.b)(e, t)
          : (async function (e, t, r = {}) {
              for (var o in (e || (e = e()),
              (r = {}),
              (r = Object.assign(
                {
                  user: e.user.name,
                  browser: v.a,
                  hash: location.hash.substr(1) || " ",
                },
                r
              )))) {
                var n = new RegExp(`\\{${o}\\}`, "g");
                t = t.replace(n, r[o]);
              }
              return e.callApi("POST", "template", { template: t });
            })(e, t, r);
      }
      static get subscribeRenderTemplate() {
        return D;
      }
      static get getData() {
        return q;
      }
      static get areaByName() {
        return $;
      }
      static get areaDevices() {
        return R;
      }
      static get deviceByName() {
        return I;
      }
      static get deviceEntities() {
        return L;
      }
      static get registerCard() {
        return M;
      }
      static get yaml2json() {
        return B;
      }
      static get selectTree() {
        return O;
      }
    }
    const A = r(3);
    customElements.get("card-tools") ||
      (customElements.define("card-tools", N),
      (window.cardTools = customElements.get("card-tools")),
      console.info(
        `%cCARD-TOOLS ${A.version} IS INSTALLED\n  %cDeviceID: ${
          customElements.get("card-tools").deviceID
        }`,
        "color: green; font-weight: bold",
        ""
      ));
  },
]);
