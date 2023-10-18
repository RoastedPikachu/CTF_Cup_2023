(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    623: function (e, s, l) {
      Promise.resolve().then(l.t.bind(l, 6685, 23)),
        Promise.resolve().then(l.t.bind(l, 3222, 23)),
        Promise.resolve().then(l.bind(l, 552)),
        Promise.resolve().then(l.bind(l, 3426)),
        Promise.resolve().then(l.bind(l, 9147)),
        Promise.resolve().then(l.bind(l, 8581)),
        Promise.resolve().then(l.bind(l, 2640));
    },
    7603: function (e, s, l) {
      "use strict";
      l.d(s, {
        C: function () {
          return m;
        },
        T: function () {
          return a;
        },
      });
      var t = l(3198);
      let a = () => (0, t.I0)(),
        m = t.v9;
    },
    2974: function (e, s, l) {
      "use strict";
      l.d(s, {
        mobileSlice: function () {
          return a;
        },
      });
      var t = l(663);
      let a = (0, t.oM)({
        name: "mobile",
        initialState: { isMobile: !0 },
        reducers: {
          setIsMobileStatus(e, s) {
            e.isMobile = s.payload;
          },
        },
      });
      s.Z = a.reducer;
    },
    3426: function (e, s, l) {
      "use strict";
      l.r(s);
      var t = l(7437);
      l(2265);
      var a = l(7603);
      s.default = () => {
        let e = (0, a.C)((e) => e.mobile.isMobile);
        return (0, t.jsxs)("section", {
          className:
            "relative mlarge:flex mlarge:justify-between mt-[-60px] mlarge:mt-[0px] px-[15%] mlarge:px-[7.5%] w-full h-[850px] mlarge:h-[420px] msmall:h-[380px]",
          children: [
            (0, t.jsx)("img", {
              src: "/static/homePage/text/MestoProvedeniyaText.png",
              alt: "Место проведения",
              className:
                "absolute right-[10%] mlarge:right-[5%] mlarge:mt-[60px] mmedium:mt-[75px] msmall:mt-[50px] w-[95vw] mlarge:w-[92.5vw] h-[240px] mlarge:h-[90px] mmedium:h-[80px] msmall:h-[75px] scale-[0.9] mlarge:scale-[0.95]",
            }),
            (0, t.jsx)("img", {
              src: "/static/homePage/logo/SkolkovoLogo.png",
              alt: "Сколково",
              className:
                "pt-[200px] mlarge:pt-[140px] mmedium:pt-[160px] msmall:pt-[120px] ml-[5%] mlarge:ml-[15%] w-[65%] max-w-[580px] mlarge:h-[300px] msmall:h-[260px] scale-[1.3] mlarge:scale-[1.65] mmedium:scale-[1.55] msmall:scale-[1.6] z-[-10]",
            }),
            (0, t.jsx)("span", {
              className:
                'relative mt-[300px] mlarge:mt-[0px] msmall:mt-[-30px] mmedium:mt-[20px] mlarge:ml-[-22.5%] w-[37.5%] mlarge:w-[50%] text-[#ffffff] text-[1rem] deskWide:text-[1.125rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] msmall:text-[0.625rem] font-["Good_Timing"] mlarge:text-right whitespace-nowrap mlarge:whitespace-normal',
              children: e
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("p", {
                        className: "mt-[180px] whitespace-nowrap",
                        children: "Адрес: Большой бул.,",
                      }),
                      (0, t.jsx)("p", {
                        className: "whitespace-nowrap",
                        children: "42 с1, Сколково,",
                      }),
                      (0, t.jsx)("p", {
                        className: "whitespace-nowrap",
                        children: "Москва, 143026",
                      }),
                      (0, t.jsx)("a", {
                        href: "https://sk.ru/transport/",
                        className: "text-[#bf5af2] no-underline outline-none",
                        children: "sk.ru/transport",
                      }),
                      (0, t.jsx)("img", {
                        src: "/static/homePage/background/WaterCoolingPipeImage.png",
                        alt: "Трубка водяного охлаждения, задний фон",
                        className:
                          "absolute left-[0%] bottom-[-60px] mmedium:bottom-[-50px] msmall:bottom-[-35px] w-full",
                      }),
                    ],
                  })
                : (0, t.jsxs)("span", {
                    className: "z-20",
                    children: [
                      (0, t.jsx)("p", {
                        className: "mt-[15px] ml-[40px] z-40",
                        children:
                          "Адрес: Большой бул., 42 с1, Сколково, Москва, 143026",
                      }),
                      (0, t.jsx)("a", {
                        href: "https://sk.ru/transport/",
                        className:
                          "ml-[40px] text-[#bf5af2] no-underline outline-none",
                        children: "sk.ru/transport",
                      }),
                    ],
                  }),
            }),
          ],
        });
      };
    },
    8581: function (e, s, l) {
      "use strict";
      l.r(s);
      var t = l(7437);
      l(2265);
      var a = l(7603);
      s.default = () => {
        let e = (0, a.C)((e) => e.mobile.isMobile);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className:
                "absolute mt-[20px] mlarge:mt-[-15%] msmall:mt-[-26.5%] ml-[-11%] deskWide:ml-[calc(((100%-1440px)/2)-160px)] mlarge:ml-[0%] deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-[950px] mlarge:h-[600px] mlarge:overflow-hidden scale-[1.4] mlarge:scale-[1]",
              children: (0, t.jsx)("img", {
                src: e
                  ? "/static/homePage/background/GreetingsBubblesPhoneImage.png"
                  : "/static/homePage/background/GreetingsBubblesImage.png",
                alt: "Пузырьки",
                className:
                  "absolute w-full h-full scale-[1] mlarge:scale-[1.15] msmall:scale-[0.95] mlarge:object-cover z-[-1]",
              }),
            }),
            !e &&
              (0, t.jsx)("div", {
                className:
                  "absolute mt-[2010px] deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-[2800px] overflow-y-hidden",
                children: (0, t.jsx)("img", {
                  src: "/static/homePage/background/WaterCoolingImage.png",
                  alt: "Водянка задний фон",
                  className: "absolute w-full z-[-1]",
                }),
              }),
            window.innerWidth > 1550 &&
              (0, t.jsx)("div", {
                className:
                  "absolute mt-[810px] w-full h-[800px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.89)_16.01%,#000_28.81%,#000_100%)]",
              }),
          ],
        });
      };
    },
    9147: function (e, s, l) {
      "use strict";
      l.r(s);
      var t = l(7437);
      l(2265);
      var a = l(5278),
        m = l(7603);
      s.default = () => {
        let e = (0, m.C)((e) => e.mobile.isMobile);
        return (0, t.jsxs)("section", {
          className:
            "relative px-[15%] mlarge:px-[7.5%] w-full mlarge:w-full h-[750px]",
          children: [
            (0, t.jsx)("img", {
              src: "/static/homePage/text/RaspisanieText.png",
              alt: "Расписание",
              className:
                "absolute left-[10.5%] mlarge:left-[5%] mt-[-160px] mlarge:mt-[-75px] mmedium:mt-[-70px] w-[90vw] mlarge:w-[95vw] h-[120px] mlarge:h-[40px] mmedium:h-[35px] scale-[0.9] mlarge:scale-[0.95]",
            }),
            e
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(a.lr, {
                      ariaLabel: "div",
                      showThumbs: !1,
                      showIndicators: !1,
                      showStatus: !1,
                      showArrows: !1,
                      className:
                        'mt-[110px] w-full h-[480px] msmall:h-[450px] text-[#ffffff] font-["Good_Timing"]',
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "absolute py-[10px] px-[20px] w-[95%] h-[480px] msmall:h-[450px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden",
                          children: [
                            (0, t.jsx)("img", {
                              src: "/static/homePage/background/BubblesPhoneBg1.png",
                              alt: "Пузырьки2",
                              className:
                                "absolute mt-[-2.5%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1.05]",
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex justify-end items-center h-[50px]",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "pr-[2.5px] text-[1rem] msmall:text-[0.875rem]",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "msmall:mt-[-2.5px] text-[#bf5af2]",
                                      children: "Task based",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "mt-[-7.5px] text-right",
                                      children: "октября",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "text-[2.5rem] msmall:text-[2.25rem]",
                                  children: "28-29",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("p", {
                              className:
                                "mt-[50px] w-[85%] text-[1rem] text-left leading-[2]",
                              children: [
                                "отборочный этап 24 часа ",
                                (0, t.jsx)("br", {}),
                                " с 12:00 до 12:00 ",
                                (0, t.jsx)("br", {}),
                                (0, t.jsx)("br", {}),
                                " В 11:00 на почту, указанную при регистрации, будет отправлена ссылка.",
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "absolute left-[17.5px] mmedium:left-[15px] msmall:left-[12.5px] bottom-[-25px] mmedium:bottom-[-20px] msmall:bottom-[-15px] text-[6rem] mmedium:text-[5.25rem] msmall:text-[4.5rem]",
                              children: "online",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "absolute py-[10px] px-[20px] w-[95%] h-[480px] msmall:h-[450px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden",
                          children: [
                            (0, t.jsx)("img", {
                              src: "/static/homePage/background/BubblesPhoneBg2.png",
                              alt: "Пузырьки3",
                              className:
                                "absolute mt-[-2.5%] mmedium:mt-[-5%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1]",
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex justify-end items-center h-[50px]",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "pr-[2.5px] text-[1rem] msmall:text-[0.875rem]",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "msmall:mt-[-2.5px] text-[#bf5af2]",
                                      children: "Attack/Defence",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "mt-[-7.5px] text-right",
                                      children: "декабря",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "text-[2.5rem] msmall:text-[2.25rem]",
                                  children: "08",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("p", {
                              className:
                                "mt-[50px] w-[85%] text-[1rem] text-left leading-[2]",
                              children: [
                                "полуфинал ",
                                (0, t.jsx)("br", {}),
                                " с 9:00 до 19:30, ",
                                (0, t.jsx)("br", {}),
                                " \xabСколково\xbb",
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "absolute left-[15px] msmall:left-[12.5px] bottom-[-22.5px] mmedium:bottom-[-17.5px] msmall:bottom-[-12.5px] text-[5.75rem] mmedium:text-[5rem] msmall:text-[4.25rem]",
                              children: "offline",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "relative py-[10px] px-[20px] w-[95%] h-[480px] msmall:h-[450px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden",
                          children: [
                            (0, t.jsx)("img", {
                              src: "/static/homePage/background/BubblesPhoneBg3.png",
                              alt: "Пузырьки4",
                              className:
                                "absolute mt-[-5%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1]",
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex justify-end items-center h-[50px]",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "pr-[2.5px] text-[1rem] msmall:text-[0.875rem] text-right",
                                  children: [
                                    (0, t.jsx)("p", {
                                      className:
                                        "msmall:mt-[-2.5px] text-[#bf5af2]",
                                      children: "Final",
                                    }),
                                    (0, t.jsx)("p", {
                                      className: "mt-[-7.5px]",
                                      children: "декабря",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "text-[2.5rem] msmall:text-[2.25rem]",
                                  children: "09",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("p", {
                              className:
                                "mt-[50px] w-[85%] text-[1rem] text-left leading-[2]",
                              children: [
                                "финал ",
                                (0, t.jsx)("br", {}),
                                " с 9:00 до 20:00, ",
                                (0, t.jsx)("br", {}),
                                " \xabСколково\xbb",
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "absolute left-[15px] msmall:left-[12.5px] bottom-[-22.5px] mmedium:bottom-[-17.5px] msmall:bottom-[-12.5px] text-[5.75rem] mmedium:text-[5rem] msmall:text-[4.25rem]",
                              children: "offline",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "relative mt-[30px] w-full h-[260px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px]",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "relative py-[10px] pl-[30px] pr-[15px] w-full h-full overflow-hidden",
                          children: [
                            (0, t.jsx)("img", {
                              src: "/static/homePage/background/BubblesPhoneBg4.png",
                              alt: "Пузырьки5",
                              className:
                                "absolute right-[5.5%] mt-[-10px] w-[95%] h-[calc(100%-10px)] z-[-1] scale-110 rounded-[30px]",
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                'relative mt-[45px] mmedium:mt-[50px] msmall:mt-[60px] w-full text-[#ffffff] text-[0.875rem] font-["Good_Timing"]',
                              children: [
                                (0, t.jsxs)("span", {
                                  className:
                                    "w-[80%] mmedium:w-[50%] text-[0.875rem] mmedium:text-[0.75rem] leading-[1.5]",
                                  children: [
                                    (0, t.jsxs)("p", {
                                      className: "mt-[20px]",
                                      children: [
                                        "финал для школьных ",
                                        (0, t.jsx)("br", {}),
                                        " команд с 9:00 до 19:30, ",
                                        (0, t.jsx)("br", {}),
                                        "\xabСколково\xbb",
                                      ],
                                    }),
                                    " ",
                                    (0, t.jsx)("br", {}),
                                    (0, t.jsxs)("p", {
                                      className:
                                        "mt-[-10px] text-[0.75rem] mmedium:text-[0.625rem] leading-[1.15]",
                                      children: [
                                        "награждение состоится ",
                                        (0, t.jsx)("br", {}),
                                        " ",
                                        (0, t.jsx)("strong", {
                                          className: "text-[#bf5af2]",
                                          children: "9 декабря",
                                        }),
                                        ",",
                                        (0, t.jsx)("br", {}),
                                        " а потом — афтепати",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "absolute flex justify-end items-center right-[0px] top-[-45px] mmedium:top-[-50px] msmall:top-[-60px] h-[50px]",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "pr-[2.5px] text-[1rem] msmall:text-[0.875rem]",
                                      children: [
                                        (0, t.jsx)("p", {
                                          className:
                                            "text-[#bf5af2] text-right",
                                          children: "Final",
                                        }),
                                        (0, t.jsx)("p", {
                                          className: "mt-[-7.5px] text-right",
                                          children: "декабря",
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)("p", {
                                      className:
                                        "text-[2.5rem] msmall:text-[2rem]",
                                      children: "08",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "absolute bottom-[-20px] msmall:bottom-[-12.5px] right-[15px] text-[#ffffff] text-[5.25rem] mmedium:text-[5rem] msmall:text-[4.25rem] font-bold",
                              children: "offline",
                            }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className:
                            "absolute bottom-[-20px] msmall:bottom-[-15px] left-[20px] msmall:left-[15px] px-[40px] msmall:px-[25px] py-[7.5px] msmall:py-[5px] height-[40px] text-[#ffffff] text-[1rem] msmall:text-[0.875rem] font-[Good_Timing] font-bold bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px]",
                          children: "школьники",
                        }),
                      ],
                    }),
                  ],
                })
              : (0, t.jsx)(t.Fragment, {
                  children: (0, t.jsxs)("div", {
                    className:
                      'flex justify-between mlarge:block mt-[200px] mlarge:mt-[110px] w-full h-[670px] text-[#ffffff] font-["Good_Timing"]',
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "relative py-[10px] px-[15px] w-[32.5%] h-[660px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px]",
                        children: [
                          (0, t.jsx)("img", {
                            src: "/static/homePage/background/BubblesBg1.png",
                            alt: "Пузырьки2",
                            className:
                              "absolute ml-[-15px] w-full h-[calc(100%-10px)] z-[-1]",
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex justify-end items-center h-[50px]",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "pr-[2.5px] text-[1rem]",
                                children: [
                                  (0, t.jsx)("p", {
                                    className: "text-[#bf5af2]",
                                    children: "Task based",
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "mt-[-7.5px] text-right",
                                    children: "октября",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("p", {
                                className: "text-[2.5rem]",
                                children: "28-29",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            className:
                              "mt-[30px] w-[100%] deskWide:text-[1.125rem]",
                            children: [
                              "отборочный этап 24 часа ",
                              (0, t.jsx)("br", {}),
                              " с 12:00 до 12:00 ",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("br", {}),
                              " В 11:00 на почту, указанную при регистрации, будет отправлена ссылка",
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "absolute bottom-[-15px] text-[5.5rem]",
                            children: "online",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "w-[63.5%] h-full",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex justify-between w-full",
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "relative py-[10px] px-[15px] w-[47%] h-[400px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden",
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "/static/homePage/background/BubblesBg2.png",
                                    alt: "Пузырьки3",
                                    className:
                                      "absolute mt-[15px] ml-[0px] w-[calc(100%-10px)] h-[calc(100%-10px)] z-[-1] scale-[1.15]",
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex justify-end items-center h-[50px]",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "pr-[2.5px] text-[1rem]",
                                        children: [
                                          (0, t.jsx)("p", {
                                            className: "text-[#bf5af2]",
                                            children: "Attack/Defence",
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "mt-[-7.5px] text-right",
                                            children: "декабря",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "text-[2.5rem]",
                                        children: "08",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("p", {
                                    className:
                                      "mt-[30px] w-[100%] deskWide:text-[1.125rem]",
                                    children: [
                                      "полуфинал ",
                                      (0, t.jsx)("br", {}),
                                      " с 9:00 до 19:30, ",
                                      (0, t.jsx)("br", {}),
                                      " \xabСколково\xbb",
                                    ],
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "absolute bottom-[-15px] text-[4.75rem]",
                                    children: "offline",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "relative py-[10px] px-[15px] w-[47%] h-[400px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden",
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "/static/homePage/background/BubblesBg3.png",
                                    alt: "Пузырьки4",
                                    className:
                                      "absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110",
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex justify-end items-center h-[50px]",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className:
                                          "pr-[2.5px] text-[1rem] text-right",
                                        children: [
                                          (0, t.jsx)("p", {
                                            className: "text-[#bf5af2]",
                                            children: "Final",
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "mt-[-7.5px]",
                                            children: "декабря",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "text-[2.5rem]",
                                        children: "09",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("p", {
                                    className:
                                      "mt-[30px] w-[100%] deskWide:text-[1.125rem]",
                                    children: [
                                      "финал ",
                                      (0, t.jsx)("br", {}),
                                      " с 9:00 до 20:00, ",
                                      (0, t.jsx)("br", {}),
                                      " \xabСколково\xbb",
                                    ],
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "absolute bottom-[-15px] text-[4.75rem]",
                                    children: "offline",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "relative mt-[35px] w-full h-[210px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] ",
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "relative py-[10px] pl-[30px] pr-[15px] w-full h-full overflow-hidden",
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "/static/homePage/background/BubblesBg4.png",
                                    alt: "Пузырьки5",
                                    className:
                                      "absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110",
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      'flex justify-between mt-[10px] w-full text-[#ffffff] text-[1rem] font-["Good_Timing"]',
                                    children: [
                                      (0, t.jsxs)("span", {
                                        className:
                                          "w-[50%] deskWide:text-[1.125rem]",
                                        children: [
                                          (0, t.jsxs)("p", {
                                            children: [
                                              "финал для школьных команд ",
                                              (0, t.jsx)("br", {}),
                                              " с 9:00 до 19:30, ",
                                              (0, t.jsx)("br", {}),
                                              "\xabСколково\xbb",
                                            ],
                                          }),
                                          " ",
                                          (0, t.jsx)("br", {}),
                                          (0, t.jsxs)("p", {
                                            className:
                                              "mt-[-10px] deskWide:mt-[-20px] text-[0.75rem] deskWide:text-[0.875rem]",
                                            children: [
                                              "награждение состоится ",
                                              (0, t.jsx)("br", {}),
                                              (0, t.jsx)("strong", {
                                                className: "text-[#bf5af2]",
                                                children: "9 декабря",
                                              }),
                                              ", ",
                                              (0, t.jsx)("br", {}),
                                              " а потом — афтепати",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className:
                                          "flex justify-end items-center h-[50px]",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "pr-[2.5px] text-[1rem]",
                                            children: [
                                              (0, t.jsx)("p", {
                                                className: "text-[#bf5af2]",
                                                children: "Final",
                                              }),
                                              (0, t.jsx)("p", {
                                                className:
                                                  "mt-[-7.5px] text-right",
                                                children: "декабря",
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("p", {
                                            className: "text-[2.5rem]",
                                            children: "08",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "absolute bottom-[-20px] right-[15px] text-[5.25rem]",
                                    children: "offline",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "absolute bottom-[-20px] left-[60px] px-[40px] py-[7.5px] height-[40px] text-[#ffffff] text-[1rem] font-[Good_Timing] font-bold bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px]",
                                children: "школьники",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
          ],
        });
      };
    },
    2640: function (e, s, l) {
      "use strict";
      l.r(s);
      var t = l(7437);
      l(2265);
      var a = l(7603);
      s.default = () => {
        let e = (0, a.C)((e) => e.mobile.isMobile);
        return (0, t.jsx)(t.Fragment, {
          children:
            e &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("img", {
                  src: "/static/homePage/background/WaterCoolingPipesImage.png",
                  alt: "Трубки водяного охлаждения, задний фон",
                  className: "absolute right-[5%] scale-[1.15] z-[-5]",
                }),
                (0, t.jsx)("img", {
                  src: "/static/homePage/background/WaterCoolingPipesImage2.png",
                  alt: "Трубки водяного охлаждения, задний фон",
                  className:
                    "absolute top-[540px] right-[5%] scale-[1.15] z-[-5]",
                }),
              ],
            }),
        });
      };
    },
    552: function (e, s, l) {
      "use strict";
      l.r(s);
      var t = l(7437),
        a = l(2265),
        m = l(1289),
        r = l(2974),
        x = l(7603),
        i = l(6691),
        n = l.n(i),
        c = l(1396),
        d = l.n(c);
      s.default = () => {
        let e = (0, x.T)(),
          s = (0, x.C)((e) => e.mobile.isMobile),
          { setIsMobileStatus: l } = r.mobileSlice.actions,
          [i, c] = (0, a.useState)(!1),
          o = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            e(l(window.innerWidth < 480));
          }, []),
          (0, t.jsx)("header", {
            className:
              "relative flex justify-between items-center px-[10%] deskWide:px-[calc((100%-1440px)/2)] mlarge:px-[5%] w-full h-[80px] z-30",
            children: s
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("a", {
                      href: "https://forms.yandex.ru/u/64fca2a6d0468870ebb9e8ac/",
                      className:
                        'text-[#bf5af2] text-[1rem] font-["Good_Timing"] font-semibold outline-none no-underline',
                      children: "регистрация",
                    }),
                    (0, t.jsx)("button", {
                      onClick: () => c(!0),
                      className: "outline-none",
                      children: (0, t.jsx)("img", {
                        src: "/static/header/icon/HamburgerMenuIcon.svg",
                        alt: "Гамбургер меню",
                        className: "w-[20px] h-[20px]",
                      }),
                    }),
                    (0, t.jsx)(m.Z, {
                      in: i,
                      nodeRef: o,
                      timeout: 600,
                      classNames: "modalHeader",
                      unmountOnExit: !0,
                      children: (0, t.jsxs)("div", {
                        ref: o,
                        className:
                          "fixed ml-[calc(-5%)] py-[25px] px-[20px] w-full h-[100vh] bg-[#0d0d0d] z-30 ease-in-dist",
                        children: [
                          (0, t.jsx)("img", {
                            src: "/static/header/icon/XMarkIcon.svg",
                            alt: "Закрыть",
                            onClick: () => c(!1),
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
                              (0, t.jsx)(d(), {
                                href: "/",
                                className: "w-full outline-none no-underline",
                                children: "главная",
                              }),
                              (0, t.jsx)(d(), {
                                href: "/info",
                                className: "w-full outline-none no-underline",
                                children: "информация",
                              }),
                              (0, t.jsx)(d(), {
                                href: "/team",
                                className: "w-full outline-none no-underline",
                                children: "команда",
                              }),
                              (0, t.jsx)(d(), {
                                href: "/jury",
                                className: "w-full outline-none no-underline",
                                children: "жюри",
                              }),
                              (0, t.jsx)(d(), {
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
                        (0, t.jsx)(n(), {
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
                        (0, t.jsx)(d(), {
                          href: "/",
                          className: "outline-none no-underline",
                          children: "главная",
                        }),
                        (0, t.jsx)(d(), {
                          href: "/info",
                          className: "outline-none no-underline",
                          children: "информация",
                        }),
                        (0, t.jsx)(d(), {
                          href: "/team",
                          className: "outline-none no-underline",
                          children: "команда",
                        }),
                        (0, t.jsx)(d(), {
                          href: "/jury",
                          className: "outline-none no-underline",
                          children: "жюри",
                        }),
                        (0, t.jsx)(d(), {
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
    e.O(0, [132, 170, 278, 971, 596, 744], function () {
      return e((e.s = 623));
    }),
      (_N_E = e.O());
  },
]);
