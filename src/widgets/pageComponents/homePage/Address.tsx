"use client";
import React from "react";

import { useAppSelector } from "@/store/storeHooks";
import { RootState } from "@/store";

const Address = () => {
  const isMobile = useAppSelector((state: RootState) => state.mobile.isMobile);

  return (
    <section className="relative mlarge:flex mlarge:justify-between mt-[-60px] mlarge:mt-[0px] px-[15%] mlarge:px-[7.5%] w-full h-[850px] mlarge:h-[420px] msmall:h-[380px]">
      <img
        src="/static/homePage/text/MestoProvedeniyaText.png"
        alt="Место проведения"
        className="absolute right-[10%] mlarge:right-[5%] mlarge:mt-[60px] mmedium:mt-[75px] msmall:mt-[50px] w-[95vw] mlarge:w-[92.5vw] h-[240px] mlarge:h-[90px] mmedium:h-[80px] msmall:h-[75px] scale-[0.9] mlarge:scale-[0.95]"
      />

      <img
        src="/static/homePage/logo/SkolkovoLogo.png"
        alt="Сколково"
        className="pt-[200px] mlarge:pt-[140px] mmedium:pt-[160px] msmall:pt-[120px] ml-[5%] mlarge:ml-[15%] w-[65%] max-w-[580px] mlarge:h-[300px] msmall:h-[260px] scale-[1.3] mlarge:scale-[1.65] mmedium:scale-[1.55] msmall:scale-[1.6] z-[-10]"
      />

      <span className='relative mt-[300px] mlarge:mt-[0px] msmall:mt-[-30px] mmedium:mt-[20px] mlarge:ml-[-22.5%] w-[37.5%] mlarge:w-[50%] text-[#ffffff] text-[1rem] deskWide:text-[1.125rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] msmall:text-[0.625rem] font-["Good_Timing"] mlarge:text-right whitespace-nowrap mlarge:whitespace-normal'>
        {!isMobile ? (
          <span className="z-20">
            <p className="mt-[15px] ml-[40px] z-40">
              Адрес: Большой бул., 42 с1, Сколково, Москва, 143026
            </p>

            <a
              href="https://sk.ru/transport/"
              className="ml-[40px] text-[#bf5af2] no-underline outline-none"
            >
              sk.ru/transport
            </a>
          </span>
        ) : (
          <>
            <p className="mt-[180px] whitespace-nowrap">Адрес: Большой бул.,</p>

            <p className="whitespace-nowrap">42 с1, Сколково,</p>

            <p className="whitespace-nowrap">Москва, 143026</p>

            <a
              href="https://sk.ru/transport/"
              className="text-[#bf5af2] no-underline outline-none"
            >
              sk.ru/transport
            </a>

            <img
              src="/static/homePage/background/WaterCoolingPipeImage.png"
              alt="Трубка водяного охлаждения, задний фон"
              className="absolute left-[0%] bottom-[-60px] mmedium:bottom-[-50px] msmall:bottom-[-35px] w-full"
            />
          </>
        )}
      </span>
    </section>
  );
};

export default Address;
