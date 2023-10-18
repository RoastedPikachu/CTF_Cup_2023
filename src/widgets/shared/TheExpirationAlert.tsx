"use client";
import React from "react";

import { alertSlice } from "@/store/storeReducers/AlertSlice";
import { useAppDispatch, useAppSelector } from "@/store/storeHooks";
import { RootState } from "@/store";

const TheExpirationAlert = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state: RootState) => state.alert.isOpen);

  const { closeAlertWindow } = alertSlice.actions;

  return (
    <>
      {isOpen && (
        <div className="fixed flex mlarge:block justify-between items-center bottom-[50px] mx-[10%] mlarge:mx-[7.5%] mlarge:py-[30px] pl-[30px] pr-[20px] mlarge:px-[0px] w-[calc(80%+15px)] mlarge:w-[calc(85%)] h-[80px] mlarge:h-[190px] mmedium:h-[200px] border-[1px] border-[#ffffff] rounded-[60px] mlarge:rounded-[35px] bg-[rgba(217,217,217,0.07)] backdrop-blur font-['Good_Timing_Regular'] z-40">
          <p className="mlarge:mx-[12.5%] mmedium:mx-[7.5%] msmall:mx-[10%] mlarge:w-[75%] mmedium:w-[85%] msmall:w-[80%] text-[#ffffff] text-[1rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] mlarge:text-center font-normal">
            Регистрация закроется{" "}
            <strong className="text-[#6bf89a] font-medium">
              27 октября в 8 утра по Москве
            </strong>
            , — так что не забудьте зарегистрироваться
          </p>

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
