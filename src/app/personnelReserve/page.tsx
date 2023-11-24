import React from "react";

import TheHeader from "@/widgets/shared/TheHeader";
import TheFooter from "@/widgets/shared/TheFooter";

const Page = () => {
  return (
    <>
      <TheHeader />

      <main className="relative mt-[80px] deskWide:mx-[calc((100%-1440px)/2)] px-[10%] deskWide:px-0 mlarge:px-[5%] pb-[100px] w-full max-w-[1440px] h-auto min-h-[800px] overflow-hidden">
        <img
          src="/static/personnelReservePage/background/FirstBackgroundImage.png"
          alt=""
          className="absolute top-[-140px] right-[-50px] scale-[0.95]"
        />

        <img
          src="/static/personnelReservePage/background/SecondBackgroundImage.png"
          alt=""
          className="absolute top-[180px] left-[-300px] scale-[0.95]"
        />

        <section className="relative flex justify-between mt-[50px] w-[85%] h-[460px] deskWide:h-[500px]">
          <div className="relative w-[58%] h-full">
            <div className="relative py-[30px] px-[40px] w-full h-[58%] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <img
                src="/static/personnelReservePage/text/PersonnelReserveText.png"
                alt="Кадровый резерв"
              />

              <p className="absolute bottom-[30px] text-[#d27aff] text-[1rem] deskWide:text-[1.125rem] font-['Good_Timing'] tracking-wider">
                Форма анкеты для кандидатов на <br /> позиции в компании
                партнеров CTF
              </p>
            </div>

            <div className="relative mt-[4%] py-[30px] px-[40px] w-full h-[38%] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <p className="text-[#898787] text-[1.125rem] deskWide:text-[1.25rem] font-['Good_Timing_Regular']">
                Расскажи нам, что ты умеешь делать, приложи свое резюме и
                портфолио. Мы сохраним твою анкету и свяжемся с тобой, как
                только появится вакансия у наших партнеров
              </p>
            </div>
          </div>

          <div className="relative py-[20px] px-[30px] w-[40%] h-[510px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <img
              src="/static/personnelReservePage/PersonnelReserveQRCode.png"
              alt="QR-Код, ведущий на регистрационную форму кадрового резерва"
              className="mx-auto"
            />

            <a
              href="https://aciso.timepad.ru/event/2688041/"
              className="absolute bottom-[20px] mx-[0px] deskWide:mx-[5%] flex items-center justify-center pb-[7.5px] w-[calc(100%-60px)] deskWide:w-[calc(90%-60px)] h-[47.5px] deskWide:h-[52.5px] bg-[#d27aff] rounded-[25px] text-[#ffffff] text-[1.625rem] deskWide:text-[1.75rem] text-center font-['Good_Timing_Regular'] outline-none"
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
