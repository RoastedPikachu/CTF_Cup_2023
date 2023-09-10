'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const TheHeader = () => {
    return (
        <header className='flex justify-between items-center px-[10%] w-[100%] h-[80px]'>
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
        </header>
    );
};

export default TheHeader;