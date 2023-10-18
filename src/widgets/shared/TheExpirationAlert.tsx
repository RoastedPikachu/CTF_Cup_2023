"use client";
import React from "react";

import { alertSlice } from "@/store/storeReducers/AlertSlice";
import { useAppDispatch, useAppSelector } from "@/store/storeHooks";
import { RootState } from "@/store";

const TheExpirationAlert = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state: RootState) => state.alert.isOpen);
  const isMobile = useAppSelector((state: RootState) => state.mobile.isMobile);

  const { closeAlertWindow } = alertSlice.actions;

  return (
    <>
      {!isOpen && (
        <div className="fixed flex mlarge:block justify-between items-center bottom-[50px] mx-[10%] deskWide:mx-[0%] mlarge:mx-[7.5%] mlarge:pt-[30px] mlarge:pb-[10px] pl-[30px] pr-[20px] mlarge:px-0 w-[calc(80%+15px)] max-w-[1480px] mlarge:w-[85%] h-[80px] mlarge:min-h-[180px] mlarge:h-auto border-[1px] border-[#ffffff] rounded-[60px] mlarge:rounded-[35px] bg-[rgba(217,217,217,0.07)] backdrop-blur text-[#ffffff] text-[1rem] font-['Good_Timing_Regular'] font-normal z-40">
          {!isMobile ? (
            <p className="deskWide:text-[1.125rem]">
              Регистрация закроется{" "}
              <strong className="text-[#6bf89a] font-medium">
                27 октября в 8 утра по Москве
              </strong>
              , — так что не забудьте зарегистрироваться
            </p>
          ) : (
            <p className="mlarge:mx-[5%] mlarge:w-[90%] mlarge:text-[0.875rem] mmedium:text-[0.75rem] text-center">
              Регистрация закроется{" "}
              <strong className="text-[#6bf89a] font-medium">
                27 октября <br /> в 8 утра по Москве
              </strong>
              , — так что не <br /> забудьте зарегистрироваться
            </p>
          )}

          <button
            onClick={() => dispatch(closeAlertWindow())}
            className="flex justify-center items-center mlarge:mt-[20px] mlarge:mx-[calc(50%-100px)] w-[200px] h-[50px] bg-[rgba(217,217,217,0.01)] border-[2px] border-[#d27aff] rounded-[25px] text-[#d27aff] text-[1rem] font-normal backdrop-blur-sm"
          >
            Принято
          </button>
        </div>
      )}
    </>
  );
};

export default TheExpirationAlert;
