(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [599, 181],
  {
    4306: function (e, n, l) {
      Promise.resolve().then(l.t.bind(l, 6685, 23)),
        Promise.resolve().then(l.t.bind(l, 3222, 23)),
        Promise.resolve().then(l.bind(l, 552));
    },
    7603: function (e, n, l) {
      "use strict";
      l.d(n, {
        C: function () {
          return i;
        },
        T: function () {
          return s;
        },
      });
      var t = l(3198);
      let s = () => (0, t.I0)(),
        i = t.v9;
    },
    2974: function (e, n, l) {
      "use strict";
      l.d(n, {
        mobileSlice: function () {
          return s;
        },
      });
      var t = l(663);
      let s = (0, t.oM)({
        name: "mobile",
        initialState: { isMobile: !0 },
        reducers: {
          setIsMobileStatus(e, n) {
            e.isMobile = n.payload;
          },
        },
      });
      n.Z = s.reducer;
    },
    552: function (e, n, l) {
      "use strict";
      l.r(n);
      var t = l(7437),
        s = l(2265),
        i = l(1289),
        r = l(2974),
        o = l(7603),
        a = l(6691),
        c = l.n(a),
        d = l(1396),
        u = l.n(d);
      n.default = () => {
        let e = (0, o.T)(),
          n = (0, o.C)((e) => e.mobile.isMobile),
          { setIsMobileStatus: l } = r.mobileSlice.actions,
          [a, d] = (0, s.useState)(!1),
          f = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            e(l(window.innerWidth < 480));
          }, []),
          (0, t.jsx)("header", {
            className:
              "relative flex justify-between items-center px-[10%] deskWide:px-[calc((100%-1440px)/2)] mlarge:px-[5%] w-full h-[80px] z-30",
            children: n
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("a", {
                      href: "https://forms.yandex.ru/u/64fca2a6d0468870ebb9e8ac/",
                      className:
                        'text-[#bf5af2] text-[1rem] font-["Good_Timing"] font-semibold outline-none no-underline',
                      children: "регистрация",
                    }),
                    (0, t.jsx)("button", {
                      onClick: () => d(!0),
                      className: "outline-none",
                      children: (0, t.jsx)("img", {
                        src: "/static/header/icon/HamburgerMenuIcon.svg",
                        alt: "Гамбургер меню",
                        className: "w-[20px] h-[20px]",
                      }),
                    }),
                    (0, t.jsx)(i.Z, {
                      in: a,
                      nodeRef: f,
                      timeout: 600,
                      classNames: "modalHeader",
                      unmountOnExit: !0,
                      children: (0, t.jsxs)("div", {
                        ref: f,
                        className:
                          "fixed ml-[calc(-5%)] py-[25px] px-[20px] w-full h-[100vh] bg-[#0d0d0d] z-30 ease-in-dist",
                        children: [
                          (0, t.jsx)("img", {
                            src: "/static/header/icon/XMarkIcon.svg",
                            alt: "Закрыть",
                            onClick: () => d(!1),
                            className:
                              "absolute top-[25px] right-[20px] w-[20px] h-[17.5px]",
                          }),
                          (0, t.jsxs)("nav", {
                            className:
                              'flex flex-wrap mt-[50px] w-full h-[300px] text-[#ffffff] text-[1.125rem] text-right font-["Good_Timing"] font-semibold',
                            children: [
                              (0, t.jsx)("a", {
                                href: "https://forms.yandex.ru/u/64fca2a6d0468870ebb9e8ac/",
                                className:
                                  'w-full text-[#bf5af2] text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline',
                                children: "регистрация",
                              }),
                              (0, t.jsx)(u(), {
                                href: "/",
                                className: "w-full outline-none no-underline",
                                children: "главная",
                              }),
                              (0, t.jsx)(u(), {
                                href: "/info",
                                className: "w-full outline-none no-underline",
                                children: "информация",
                              }),
                              (0, t.jsx)(u(), {
                                href: "/team",
                                className: "w-full outline-none no-underline",
                                children: "команда",
                              }),
                              (0, t.jsx)(u(), {
                                href: "/jury",
                                className: "w-full outline-none no-underline",
                                children: "жюри",
                              }),
                              (0, t.jsx)(u(), {
                                href: "/partners",
                                className: "w-full outline-none no-underline",
                                children: "партнеры",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, t.jsx)(c(), {
                          src: "/static/header/logo/CTFCupPurpleLogo.svg",
                          alt: "Логотип кубка CTF",
                          width: 50,
                          height: 50,
                        }),
                        (0, t.jsx)("a", {
                          href: "https://forms.yandex.ru/u/64fca2a6d0468870ebb9e8ac/",
                          className:
                            'ml-[15px] deskWide:ml-[20px] text-[#bf5af2] text-[1rem] deskWide:text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline',
                          children: "регистрация",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("nav", {
                      className:
                        'flex justify-between w-[53%] mlarge:w-[100%] text-[#ffffff] text-[1rem] deskWide:text-[1.125rem] mlarge:text-[0.75rem] font-["Good_Timing"] font-semibold',
                      children: [
                        (0, t.jsx)(u(), {
                          href: "/",
                          className: "outline-none no-underline",
                          children: "главная",
                        }),
                        (0, t.jsx)(u(), {
                          href: "/info",
                          className: "outline-none no-underline",
                          children: "информация",
                        }),
                        (0, t.jsx)(u(), {
                          href: "/team",
                          className: "outline-none no-underline",
                          children: "команда",
                        }),
                        (0, t.jsx)(u(), {
                          href: "/jury",
                          className: "outline-none no-underline",
                          children: "жюри",
                        }),
                        (0, t.jsx)(u(), {
                          href: "/partners",
                          className: "outline-none no-underline",
                          children: "партнеры",
                        }),
                      ],
                    }),
                  ],
                }),
          })
        );
      };
    },
  },
  function (e) {
    e.O(0, [132, 170, 971, 596, 744], function () {
      return e((e.s = 4306));
    }),
      (_N_E = e.O());
  },
]);
