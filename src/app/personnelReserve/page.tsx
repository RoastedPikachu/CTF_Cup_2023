"use client";
import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import TheHeader from "@/widgets/shared/TheHeader";
import TheFooter from "@/widgets/shared/TheFooter";

const Page = () => {
  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

  return (
    <>
      <TheHeader />

      <main className="relative mt-[80px] deskWide:mx-[calc((100%-1440px)/2)] px-[10%] deskWide:px-0 mlarge:px-[5%] pb-[100px] w-full max-w-[1440px] h-auto min-h-[800px] mlarge:min-h-[1200px] overflow-hidden">
        <img
          src="/static/personnelReservePage/background/FirstBackgroundImage.png"
          alt=""
          className="absolute top-[-140px] mlarge:top-[-40px] right-[-50px] mlarge:right-[-90px] scale-[0.95]"
        />

        <img
          src="/static/personnelReservePage/background/SecondBackgroundImage.png"
          alt=""
          className="absolute top-[180px] mlarge:top-[220px] left-[-300px] mlarge:left-[-150px] scale-[0.95]"
        />

        <section
          className={`relative ${
            !isMobile ? "flex" : "block"
          } justify-between mt-[50px] w-[85%] mlarge:w-full h-[460px] deskWide:h-[500px]`}
        >
          <div className="relative w-[58%] mlarge:w-full h-full">
            <div className="relative py-[30px] px-[40px] msmall:px-[20px] w-full h-[58%] mlarge:h-[250px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <img
                src="/static/personnelReservePage/text/PersonnelReserveText.png"
                alt="Кадровый резерв"
              />

              {!isMobile ? (
                <p className="absolute bottom-[30px] text-[#d27aff] text-[1rem] deskWide:text-[1.125rem] font-['Good_Timing'] tracking-wider">
                  Форма анкеты для кандидатов на <br /> позиции в компании
                  партнеров CTF
                </p>
              ) : (
                <p className="absolute bottom-[30px] text-[#d27aff] text-[1rem] deskWide:text-[1.125rem] font-['Good_Timing'] tracking-wider">
                  Форма анкеты для <br /> кандидатов на позиции в компании
                  партнеров CTF
                </p>
              )}
            </div>

            <div className="relative mt-[4%] mlarge:mt-[40px] py-[30px] px-[40px] msmall:px-[20px] w-full h-[38%] mlarge:h-[240px] mmedium:h-[280px] msmall:h-[300px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <p className="text-[#898787] text-[1.125rem] deskWide:text-[1.25rem] font-['Good_Timing_Regular']">
                Расскажи нам, что ты умеешь делать, приложи свое резюме и
                портфолио. Мы сохраним твою анкету и свяжемся с тобой, как
                только появится вакансия у наших партнеров
              </p>
            </div>
          </div>

          <div className="relative mlarge:mt-[110px] mmedium:mt-[150px] msmall:mt-[170px] py-[20px] px-[30px] msmall:px-[20px] w-[40%] mlarge:w-full h-[465px] deskWide:h-[510px] mmedium:h-[435px] msmall:h-[400px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <img
              src="/static/personnelReservePage/PersonnelReserveQRCode.png"
              alt="QR-Код, ведущий на регистрационную форму кадрового резерва"
              className="mx-auto"
            />

            <a
              href="https://aciso.timepad.ru/event/2694853/"
              className="absolute bottom-[20px] mlarge:bottom-[30px] mx-0 deskWide:mx-[5%] flex items-center justify-center pb-[7.5px] w-[calc(100%-60px)] msmall:w-[calc(100%-40px)] deskWide:w-[calc(90%-60px)] h-[47.5px] deskWide:h-[52.5px] bg-[#d27aff] rounded-[25px] text-[#ffffff] text-[1.625rem] deskWide:text-[1.75rem] mmedium:text-[1.5rem] msmall:text-[1.25rem] text-center font-['Good_Timing_Regular'] outline-none"
            >
              заполнить анкету
            </a>
          </div>
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
