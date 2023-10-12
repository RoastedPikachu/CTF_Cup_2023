"use client";
import React from "react";

import { useAppSelector } from "@/store/storeHooks";
import { RootState } from "@/store";

const OfficialDocsImages = () => {
  const isMobile = useAppSelector((state: RootState) => state.mobile.isMobile);

  return (
    <>
      {isMobile && (
        <>
          <img
            src="/static/homePage/background/WaterCoolingPipesImage.png"
            alt="Трубки водяного охлаждения, задний фон"
            className="absolute right-[5%] scale-[1.15] z-[-5]"
          />

          <img
            src="/static/homePage/background/WaterCoolingPipesImage2.png"
            alt="Трубки водяного охлаждения, задний фон"
            className="absolute top-[540px] right-[5%] scale-[1.15] z-[-5]"
          />
        </>
      )}
    </>
  );
};

export default OfficialDocsImages;
