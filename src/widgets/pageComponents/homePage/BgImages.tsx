"use client";
import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

const BgImages = () => {
  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

  return (
    <>
      <div className="absolute mt-[100px] mlarge:mt-[-15%] msmall:mt-[-26.5%] ml-[-11%] deskWide:ml-[calc(((100%-1440px)/2)-160px)] mlarge:ml-[0%] deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-[950px] mlarge:h-[600px] mlarge:overflow-hidden scale-[1.4] mlarge:scale-[1]">
        <img
          src={
            isMobile
              ? "/static/homePage/background/GreetingsBubblesPhoneImage.png"
              : "/static/homePage/background/GreetingsBubblesImage.png"
          }
          alt="Пузырьки"
          className="absolute w-full h-full scale-[1] mlarge:scale-[1.15] msmall:scale-[0.95] mlarge:object-cover z-[-1]"
        />
      </div>

      {!isMobile && (
        <div className="absolute mt-[2010px] deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-[2800px] overflow-y-hidden">
          <img
            src="/static/homePage/background/WaterCoolingImage.png"
            alt="Водянка задний фон"
            className="absolute w-full z-[-1]"
          />
        </div>
      )}

      {window.innerWidth > 1550 && (
        <div className="absolute mt-[810px] w-full h-[800px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.89)_16.01%,#000_28.81%,#000_100%)]"></div>
      )}
    </>
  );
};

export default BgImages;
