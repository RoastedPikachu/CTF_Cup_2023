"use client";
import React from "react";

import { useAppSelector } from "@/store/storeHooks";
import { RootState } from "@/store";

import TheHeader from "@/widgets/shared/TheHeader";
import TheFooter from "@/widgets/shared/TheFooter";

import Paragraphs from "@/widgets/pageComponents/infoPage/Paragraphs";

const Page = () => {
  const isMobile = useAppSelector((state: RootState) => state.mobile.isMobile);

  return (
    <>
      <TheHeader />

      <main className="relative deskWide:mx-[calc((100%-1440px)/2)] w-[100vw] max-w-[1440px] h-auto overflow-hidden deskWide:overflow-visible">
        {!isMobile && (
          <img
            src="/static/infoPage/background/InfoBgImage1.png"
            alt="Пузырик"
            className="absolute mt-[-20px] right-[-600px] z-[-1] scale-[0.9] deskWide:scale-[0.8]"
          />
        )}

        {!isMobile && (
          <img
            src="/static/infoPage/background/InfoBgImage2.png"
            alt="Пузырик2"
            className="absolute mt-[1000px] left-[-450px] deskWide:left-[-600px] z-[-1] scale-[0.9] deskWide:scale-[0.8]"
          />
        )}

        <section className="px-[10%] deskWide:px-[0%] mlarge:px-[5%] w-full">
          <img
            src="/static/infoPage/text/PravilaText.svg"
            alt="Правила"
            className="mt-[50px] mmedium:mt-[30px] w-[45%] mlarge:w-[50%] mmedium:w-[60%]"
          />

          {!isMobile ? (
            <>
              <div className="flex justify-between mt-[80px] w-full h-[250px]">
                <span className="flex justyfy-between w-[45%] h-full text-[#ffffff]">
                  <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>01</p>

                  <p className='w-[60%] font-["Good_Timing"] font-bold'>
                    Команды могут принять <br /> участие в
                    <strong className="text-[#bf5af2]"> одном из трех</strong>
                    <br /> зачетов:
                    <strong className="text-[#bf5af2]"> Школьном</strong>,{" "}
                    <br />
                    <strong className="text-[#bf5af2]">Академическом </strong>
                    или <br />
                    <strong className="text-[#bf5af2]">Смешанном</strong>
                  </p>
                </span>

                <span className="flex justify-between w-[45%] h-full text-[#ffffff]">
                  <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>03</p>

                  <p className='mt-[5px] w-[60%] font-["Good_Timing"] font-bold'>
                    По итогу Отборочного <br /> тура в Полуфинал <br /> проходят
                    <strong className="text-[#bf5af2]"> 30 команд</strong>, по
                    10
                    <br /> команд в каждом зачёте
                  </p>
                </span>
              </div>

              <div className="flex justify-between w-full h-[110px]">
                <span className="flex justyfy-between w-[45%] text-[#ffffff]">
                  <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>02</p>

                  <p className='mt-[5px] w-[60%] font-["Good_Timing"] font-bold'>
                    Возраст <br /> участников — <br />
                    <strong className="text-[#bf5af2]">от 14 до 25 лет</strong>
                    <br /> включительно
                  </p>
                </span>

                <span className="flex justify-between w-[45%] text-[#ffffff]">
                  <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>04</p>

                  <p className='mt-[30px] w-[60%] font-["Good_Timing"] font-bold'>
                    В Полуфинале от одного <br /> учебного заведения —
                    <strong className="text-[#bf5af2]">
                      {" "}
                      не <br /> более 1 команды
                    </strong>
                  </p>
                </span>
              </div>
            </>
          ) : (
            <div className="mt-[80px] mmedium:mt-[50px] w-full h-[560px] mmedium:h-[520px] msmall:h-[440px]">
              <span className="flex justyfy-between items-center w-full h-[100px] text-[#ffffff]">
                <p className='mt-[-40px] mlarge:text-[6rem] mmedium:text-[5.5rem] msmall:text-[5.25rem] font-["DaMiOne"]'>
                  01
                </p>

                <p className='mt-[-30px] msmall:mt-[-40px] ml-[5px] w-[85%] mlarge:text-[0.75rem] mmedium:text-[0.625rem] msmall:text-[0.5rem] font-["Good_Timing"] font-bold'>
                  Команды могут принять <br /> участие в
                  <strong className="text-[#bf5af2]"> одном из трёх</strong>
                  <br /> зачётов:
                  <strong className="text-[#bf5af2]"> Школьном</strong>, <br />
                  <strong className="text-[#bf5af2]">Академическом</strong> или
                  <br /> <strong className="text-[#bf5af2]"> Смешанном</strong>
                </p>
              </span>

              <span className="flex justyfy-between items-center mt-[50px] mmedium:mt-[40px] msmall:mt-[20px] w-full h-[100px] text-[#ffffff]">
                <p className='mt-[-40px] msmall:mt-[-30px] mr-[10px] w-[85%] mlarge:text-[0.75rem] mmedium:text-[0.625rem] msmall:text-[0.5rem] text-right font-["Good_Timing"] font-bold'>
                  Возраст <br /> участников — <br />
                  <strong className="text-[#bf5af2]"> от 14 до 25 лет</strong>
                  <br /> включительно
                </p>

                <p className='mt-[-40px] mlarge:text-[6rem] mmedium:text-[5.5rem] msmall:text-[5.25rem] font-["DaMiOne"]'>
                  02
                </p>
              </span>

              <span className="flex justyfy-between items-center mt-[50px] mmedium:mt-[40px] msmall:mt-[20px] w-full h-[100px] text-[#ffffff]">
                <p className='mt-[-40px] mlarge:text-[6rem] mmedium:text-[5.5rem] msmall:text-[5.25rem] font-["DaMiOne"]'>
                  03
                </p>

                <p className='mt-[-50px] msmall:mt-[-30px] ml-[5px] w-[85%] mlarge:text-[0.75rem] mmedium:text-[0.625rem] msmall:text-[0.5rem] font-["Good_Timing"] font-bold'>
                  По итогу Отборочного <br /> тура в Полуфинал <br /> проходят
                  <strong className="text-[#bf5af2]"> 30 команд</strong>, по 10
                  <br /> команд в каждом зачёте
                </p>
              </span>

              <span className="flex justyfy-between items-center mt-[50px] mmedium:mt-[40px] msmall:mt-[20px] w-full h-[100px] text-[#ffffff]">
                <p className='mt-[-30px] msmall:mt-[-20px] mr-[10px] w-[85%] mlarge:text-[0.75rem] mmedium:text-[0.625rem] msmall:text-[0.5rem] text-right font-["Good_Timing"] font-bold'>
                  В полуфинале от одного учебного заведения —
                  <strong className="text-[#bf5af2]">
                    {" "}
                    не более 1 команды
                  </strong>
                </p>

                <p className='mt-[-40px] mlarge:text-[6rem] mmedium:text-[5.5rem] msmall:text-[5.25rem] font-["DaMiOne"]'>
                  04
                </p>
              </span>
            </div>
          )}

          <p className='mt-[20px] w-[50%] mlarge:w-full text-[#ffffff] text-[1.125rem] mlarge:text-[0.875rem] msmall:text-[0.75rem] font-["Good_Timing"] font-bold'>
            *подробнее ознакомиться с правилами можно в разделе
            <strong className="text-[#bf5af2]"> «ОФИЦИАЛЬНЫЕ ДОКУМЕНТЫ»</strong>
          </p>
        </section>

        <Paragraphs isMobile={isMobile} />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
