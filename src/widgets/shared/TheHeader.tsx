'use client';
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

const TheHeader = () => {
    return (
        <header className='flex justify-between items-center px-[10%] w-[100%] h-[80px]'>
            <div className='flex items-center'>
                <img src='/static/header/logo/CTFCupPurpleLogo.svg' alt='Логотип кубка CTF' className='w-[50px] h-[50px]'/>

                <a href='https://forms.yandex.ru/u/64f6f2ffd046882e71f64a8c/' className='ml-[15px] text-[#bf5af2] text-[1rem] desklarge:text-[1.5rem] deskmedium:text-[1.25rem] font-["Good_Timing"] font-semibold outline-none no-underline'>регистрация</a>
            </div>

            <nav className='flex justify-between w-[53%] mlarge:w-[100%] text-[#ffffff] text-[1rem] desklarge:text-[1.5rem] deskmedium:text-[1.25rem] mlarge:text-[0.75rem] font-["Good_Timing"] font-semibold'>
                <Link href='/' className='outline-none no-underline'>главная</Link>

                <Link href='/info' className='outline-none no-underline'>информация</Link>

                <Link href='/team' className='outline-none no-underline'>команда</Link>

                <Link href='/jury' className='outline-none no-underline'>жюри</Link>

                <Link href='/' className='outline-none no-underline'>партнеры</Link>
            </nav>
        </header>
    );
};

export default TheHeader;