"use client";
import React, { useState, useEffect, useRef } from "react";

import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { mobileSlice } from "@/store/storeReducers/MobileSlice";
import { useAppDispatch } from "@/store/storeHooks";
import { RootState } from "@/store";

import Image from "next/image";

import Link from "next/link";

const TheHeader = () => {
  const dispatch = useAppDispatch();

  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

  const { setIsMobileStatus } = mobileSlice.actions;

  const [isModalWindowActive, setIsModalWindowActive] = useState(false);

  const nodeRef = useRef(null);

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isTopHeaderHidden, setIsTopHeaderHidden] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset + (window.innerWidth < 480 ? 250 : -100) >
      window.innerHeight
        ? setIsHeaderFixed(true)
        : setIsHeaderFixed(false);
      window.pageYOffset > 40
        ? setIsTopHeaderHidden(true)
        : setIsTopHeaderHidden(false);
    });

    dispatch(setIsMobileStatus(window.innerWidth < 480));
  }, []);

  return (
    <header
      className={`${
        isHeaderFixed
          ? "mt-0 bg-[#0d0d0d]"
          : isTopHeaderHidden
          ? "mt-[-80px]"
          : "mt-0"
      } fixed flex justify-between items-center px-[10%] deskWide:px-[calc((100%-1440px)/2)] mlarge:px-[5%] w-full h-[80px] duration-[400ms] ease-in-out z-30`}
    >
      {!isMobile ? (
        <nav className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Image
              src="/static/header/logo/CTFCupPurpleLogo.svg"
              alt="Логотип кубка CTF"
              width={50}
              height={50}
            />

            <Link
              href="/personnelReserve"
              className='ml-[15px] deskWide:ml-[20px] text-[#bf5af2] text-[1rem] deskWide:text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline'
            >
              кадровый резерв
            </Link>

            <Link
              href="/legend"
              className='ml-[35px] deskWide:ml-[40px] text-[#bf5af2] text-[1rem] deskWide:text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline'
            >
              легенда
            </Link>

            <a href="https://dzen.ru/a/ZaTfTur8P2mqCdJo?share_to=link" className='ml-[35px] deskWide:ml-[40px] text-[#bf5af2] text-[1rem] deskWide:text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline'>
              отчет
            </a>
          </div>

          <div className='flex justify-between w-[53%] mlarge:w-[100%] text-[#ffffff] text-[1rem] deskWide:text-[1.125rem] mlarge:text-[0.75rem] font-["Good_Timing"] font-semibold'>
            <Link href="/" className="outline-none no-underline">
              главная
            </Link>

            <Link href="/info" className="outline-none no-underline">
              информация
            </Link>

            <Link href="/team" className="outline-none no-underline">
              команда
            </Link>

            <Link href="/jury" className="outline-none no-underline">
              жюри
            </Link>

            <Link href="/partners" className="outline-none no-underline">
              партнеры
            </Link>
          </div>
        </nav>
      ) : (
        <>
          <Link
            href="/personnelReserve"
            className='text-[#bf5af2] text-[1rem] msmall:text-[0.875rem] font-["Good_Timing"] font-semibold outline-none no-underline'
          >
            кадровый резерв
          </Link>

          <Link
            href="/legend"
            className='text-[#bf5af2] text-[1rem] msmall:text-[0.875rem] font-["Good_Timing"] font-semibold outline-none no-underline'
          >
            легенда
          </Link>

          <button
            onClick={() => setIsModalWindowActive(true)}
            className="outline-none"
          >
            <img
              src="/static/header/icon/HamburgerMenuIcon.svg"
              alt="Кнопка: Открыть меню с ссылками"
              className="w-[20px] h-[20px]"
            />
          </button>

          <CSSTransition
            in={isModalWindowActive}
            nodeRef={nodeRef}
            timeout={600}
            classNames="modalHeader"
            unmountOnExit
          >
            <div
              ref={nodeRef}
              className="fixed ml-[calc(-5%)] py-[35px] px-[30px] w-full h-[100vh] bg-[#0d0d0d] z-30 ease-in-out"
            >
              <img
                src="/static/header/icon/XMarkIcon.svg"
                alt="Закрыть"
                onClick={() => setIsModalWindowActive(false)}
                className="absolute top-[35px] right-[30px] w-[25px] h-[25px]"
              />

              <nav className='flex flex-wrap mt-[60px] w-full h-[380px] text-[#ffffff] text-[1.125rem] text-right font-["Good_Timing"] font-semibold'>
                <a href="https://dzen.ru/a/ZaTfTur8P2mqCdJo?share_to=link" className='w-full text-[#bf5af2] text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline'>
                  отчет
                </a>

                <Link
                  href="/personnelReserve"
                  className='w-full text-[#bf5af2] text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline'
                >
                  кадровый резерв
                </Link>

                <Link
                  href="/legend"
                  className='w-full text-[#bf5af2] text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline'
                >
                  легенда
                </Link>

                <Link href="/" className="w-full outline-none no-underline">
                  главная
                </Link>

                <Link href="/info" className="w-full outline-none no-underline">
                  информация
                </Link>

                <Link href="/team" className="w-full outline-none no-underline">
                  команда
                </Link>

                <Link href="/jury" className="w-full outline-none no-underline">
                  жюри
                </Link>

                <Link
                  href="/partners"
                  className="w-full outline-none no-underline"
                >
                  партнеры
                </Link>
              </nav>
            </div>
          </CSSTransition>
        </>
      )}
    </header>
  );
};

export default TheHeader;
