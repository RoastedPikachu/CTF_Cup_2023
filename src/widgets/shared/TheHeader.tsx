'use client';
import React from 'react';

import Link from 'next/link';

const TheHeader = () => {
    return (
        <header className='flex justify-between items-center px-[15%] w-[100%] h-[80px]'>
            <a className='text-[#bf5af2] text-[1rem] font-["Good_Timing"] font-semibold outline-none no-underline'>регистрация</a>

            <nav className='flex justify-between w-[55%] text-[#ffffff] text-[1rem] font-["Good_Timing"] font-semibold'>
                <Link href='/' className='outline-none no-underline'>информация</Link>

                <Link href='/' className='outline-none no-underline'>команда</Link>
                
                <Link href='/' className='outline-none no-underline'>жюри</Link>

                <Link href='/' className='outline-none no-underline'>партнеры</Link>
            </nav>
        </header>
    );
};

export default TheHeader;