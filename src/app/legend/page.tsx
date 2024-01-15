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

      <main className="relative mt-[80px] deskWide:mx-[calc((100%-1440px)/2)] px-[10%] deskWide:px-0 mlarge:px-[5%] pb-[100px] w-full max-w-[1440px] h-auto min-h-[850px] mlarge:min-h-[1100px] mmedium:min-h-[1050px] msmall:min-h-[1000px]">
          <section
              className={`relative ${
                  !isMobile ? "flex" : "block"
              } justify-between pt-[50px] w-[85%] mlarge:w-full deskWide:w-[80%] h-[510px] deskWide:h-[550px]`}
          >
              <div className="relative w-[58%] mlarge:w-full h-full mlarge:h-[530px]">
                  <div className="relative py-[30px] px-[40px] msmall:px-[20px] w-full h-[58%] mlarge:h-[250px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
                      <img
                          src="/static/legendPage/text/LegendaText.png"
                          alt="Легенда"
                      />

                      {!isMobile ? (
                          <p className="absolute bottom-[30px] text-[#d27aff] text-[1rem] deskWide:text-[1.125rem] font-['Good_Timing'] tracking-wider">
                              Окунись в события, <br/> произошедшие в 2196 году
                          </p>
                      ) : (
                          <p className="absolute bottom-[30px] text-[#d27aff] text-[1rem] deskWide:text-[1.125rem] font-['Good_Timing'] tracking-wider">
                              Окунись в события, <br/> произошедшие в 2196 году
                          </p>
                      )}
                  </div>

                  <div className="relative flex mlarge:justify-center items-center mt-[4%] mlarge:mt-[40px] py-[30px] px-[40px] msmall:px-[20px] w-full h-[38%] mlarge:h-[200px] mmedium:h-[180px] msmall:h-[150px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
                      <a href="/static/legendPage/documents/Legend.pdf" className="flex justify-center items-center pb-[15px] w-[350px] mmedium:w-[300px] msmall:w-[220px] h-[100px] mmedium:h-[80px] msmall:h-[70px] bg-[#d27aff] rounded-[60px] text-[#0d0d0d] text-[2.625rem] mmedium:text-[2.375rem] msmall:text-[2.125rem] font-['Good_Timing_Regular'] cursor-pointer outline-none">cкачать</a>
                  </div>
              </div>

              <div className="relative mmedium:mt-[-20px] msmall:mt-[-50px] py-[20px] px-[30px] mlarge:px-[20px] w-[40%] mlarge:w-full h-[465px] deskWide:h-[510px] mmedium:h-[435px] msmall:h-[400px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
                  <img
                      src="/static/legendPage/CTFComicsImage.png"
                      alt="Обложка легенды/комикса. На заднем плане злодей, На переднем 2 главных героя (мужчина и женщина), также логотип и название Кубок CTF России"
                      className="mx-auto w-full h-full"
                  />
              </div>
          </section>
      </main>

      <TheFooter/>
    </>
  );
};

export default Page;
