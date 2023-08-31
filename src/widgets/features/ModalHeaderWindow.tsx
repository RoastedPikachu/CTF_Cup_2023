import React from 'react';
import Link from "next/link";

const ModalHeaderWindow = () => {
    return (
        <div className='fixed ml-[calc(-5%)] py-[25px] px-[20px] w-full h-[100vh] bg-[#0d0d0d] z-30'>
            <img src='/static/header/icon/XMarkIcon.svg' alt='Закрыть' className='absolute top-[25px] right-[20px] w-[20px] h-[17.5px]'/>

            <nav className='flex flex-wrap mt-[50px] w-full h-[300px] text-[#ffffff] text-[1.125rem] text-right font-["Good_Timing"] font-semibold'>
                <a className='w-full text-[#bf5af2] text-[1.125rem] font-["Good_Timing"] font-semibold outline-none no-underline'>регистрация</a>

                <Link href='/' className='outline-none no-underline'>главная</Link>

                <Link href='/' className='w-full outline-none no-underline'>информация</Link>

                <Link href='/team' className='w-full outline-none no-underline'>команда</Link>

                <Link href='/' className='w-full outline-none no-underline'>жюри</Link>

                <Link href='/' className='w-full outline-none no-underline'>партнеры</Link>
            </nav>
        </div>
    );
};

export default ModalHeaderWindow;