import React from 'react';

import Link from 'next/link';

const TheFooter = () => {
    return (
        <footer className='flex justify-between relative pt-[70px] px-[15%] w-[100%] h-[330px] bg-[#000000]'>
            <nav className='flex flex-wrap w-[200px] h-[180px] text-[#ffffff] text-[1rem] font-["Good_Timing"] font-bold'>
                <h3 className='text-[1.125rem] font-["DaMiOne"]'>/МЕНЮ</h3>

                <Link href='' className='w-[200px] outline-none no-underline'>главная</Link>

                <Link href='' className='w-[200px] outline-none no-underline'>правила и результаты</Link>

                <Link href='' className='w-[200px] outline-none no-underline'>команда</Link>

                <Link href='' className='w-[200px] outline-none no-underline'>партнеры</Link>
            </nav>

            <div className='text-[#ffffff] text-[1rem] font-["Good_Timing"] font-bold'>
                <h3 className='text-[1.125rem] font-["DaMiOne"]'>/Контакты</h3>

                <p className='mt-[10px]'>tg: @deviantwish</p>

                <p className='mt-[10px]'>phone: +7(495)640-53-30</p>

                <p className='mt-[10px]'>e-mail: info@aciso.ru</p>
            </div>

            <div>
                <button className='flex justify-between items-top w-[300px] h-[40px] border-b-2 border-[#ffffff]'>
                    <p className='text-[#ffffff] text-[1.25rem] font-["DaMiOne"]'>FOLLOW US</p>

                    <img src='/static/ArrowRightDownIcon.svg' alt='FOLLOW US' className='mt-[5px] w-[15px] h-[15px]'/>
                </button>

                <div className='flex justify-between items-center mt-[30px] w-[80px] h-[25px]'>
                    <a href='https://vk.com/ctfcup' className='outline-none'>
                        <img src='/static/VkIcon.svg' alt='Вконтакты'/>
                    </a>

                    <a href='' className='outline-none'>
                        <img src='/static/TelegramIcon.svg' alt='Телеграм'/>
                    </a>
                </div>
            </div>

            <p className='absolute bottom-[15px] w-[70%] text-[rgba(255,255,255,0.6)] text-[0.5rem] font-["DaMiOne"] text-center'>@CTFCUP2023</p>
        </footer>
    )
};

export default TheFooter;