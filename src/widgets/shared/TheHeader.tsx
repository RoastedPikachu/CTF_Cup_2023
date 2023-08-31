'use client';
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

const TheHeader = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 480);
    }, []);

    return (
        <header className='flex justify-between items-center px-[15%] w-[100%] h-[80px]'>
            <a className='text-[#bf5af2] text-[1rem] font-["Good_Timing"] font-semibold outline-none no-underline'>регистрация</a>

            <nav className='flex justify-between w-[60%] mlarge:w-[100%] text-[#ffffff] text-[1rem] mlarge:text-[0.75rem] font-["Good_Timing"] font-semibold'>
                <Link href='/' className='outline-none no-underline'>главная</Link>

                <Link href='/info' className='outline-none no-underline'>информация</Link>

                <Link href='/team' className='outline-none no-underline'>команда</Link>

                <Link href='/' className='outline-none no-underline'>жюри</Link>

                <Link href='/' className='outline-none no-underline'>партнеры</Link>
            </nav>
        </header>
    );
};

export default TheHeader;