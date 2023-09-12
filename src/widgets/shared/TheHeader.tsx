'use client';
import React, { useState, useEffect, useRef } from 'react';

import { CSSTransition } from "react-transition-group";

import { mobileSlice } from '@/store/storeReducers/MobileSlice';
import { useAppDispatch, useAppSelector} from "@/store/storeHooks";
import { RootState } from "@/store";

import Image from 'next/image';

import Link from 'next/link';

const TheHeader = () => {
    const dispatch = useAppDispatch();

    const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

    const { setIsMobileStatus } = mobileSlice.actions;

    const [isModalWindowActive, setIsModalWindowActive] = useState(false);

    const nodeRef = useRef(null);

    useEffect(() => {
        dispatch(setIsMobileStatus(window.innerWidth < 480));
    }, []);

    return (
        <header className='relative flex justify-between items-center px-[10%] mlarge:px-[5%] w-full h-[80px] z-30'>
            {!isMobile ? <>
                <div className='flex items-center'>
                    <Image src='/static/header/logo/CTFCupPurpleLogo.svg' alt='Логотип кубка CTF' width={50} height={50}/>

                    <a href='https://forms.yandex.ru/u/64fca2a6d0468870ebb9e8ac/' className='ml-[15px] text-[#bf5af2] text-[1rem] desklarge:text-[1.5rem] deskmedium:text-[1.25rem] font-["Good_Timing"] font-semibold outline-none no-underline'>регистрация</a>
                </div>

                <nav className='flex justify-between w-[53%] mlarge:w-[100%] text-[#ffffff] text-[1rem] desklarge:text-[1.5rem] deskmedium:text-[1.25rem] mlarge:text-[0.75rem] font-["Good_Timing"] font-semibold'>
                    <Link href='/' className='outline-none no-underline'>главная</Link>

                    <Link href='/info' className='outline-none no-underline'>информация</Link>

                    <Link href='/team' className='outline-none no-underline'>команда</Link>

                    <Link href='/jury' className='outline-none no-underline'>жюри</Link>

                    <Link href='/' className='outline-none no-underline'>партнеры</Link>
                </nav>
            </> : <>
                <a href='https://forms.yandex.ru/u/64fca2a6d0468870ebb9e8ac/' className='text-[#bf5af2] text-[1rem] font-["Good_Timing"] font-semibold outline-none no-underline'>регистрация</a>

                <button onClick={() => setIsModalWindowActive(true)} className='outline-none'>
                    <img src='/static/header/icon/HamburgerMenuIcon.svg' alt='Гамбургер меню' className='w-[20px] h-[20px]'/>
                </button>

                <CSSTransition in={isModalWindowActive} nodeRef={nodeRef} timeout={600} classNames='modalHeader' unmountOnExit>
                    <div ref={nodeRef} className='fixed ml-[calc(-5%)] py-[25px] px-[20px] w-full h-[100vh] bg-[#0d0d0d] z-30 ease-in-out'>
                         <img src='/static/header/icon/XMarkIcon.svg' alt='Закрыть' onClick={() => setIsModalWindowActive(false)} className='absolute top-[25px] right-[20px] w-[20px] h-[17.5px]'/>

                        <nav className='flex flex-wrap mt-[50px] w-full h-[300px] text-[#ffffff] text-[1.125rem] text-right font-["Good_Timing"] font-semibold'>
                            <a href='https://forms.yandex.ru/u/64fca2a6d0468870ebb9e8ac/' className='w-full text-[#bf5af2] text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline'>регистрация</a>

                            <Link href='/' className='w-full outline-none no-underline'>главная</Link>

                            <Link href='/info' className='w-full outline-none no-underline'>информация</Link>

                            <Link href='/team' className='w-full outline-none no-underline'>команда</Link>

                            <Link href='/jury' className='w-full outline-none no-underline'>жюри</Link>

                            <Link href='/' className='w-full outline-none no-underline'>партнеры</Link>
                        </nav>
                    </div>
                </CSSTransition>
            </>}
        </header>
    );
};

export default TheHeader;