import React from 'react';

import Link from 'next/link';

const TheFooter = () => {
    return (
        <footer className='flex justify-between mlarge:block relative pt-[70px] mlarge:pt-[50px] px-[15%] mlarge:px-[10%] mmedium:px-[5%] w-full h-[350px] mlarge:h-[750px] bg-[#000000]'>
            <nav className='flex flex-wrap w-[200px] h-[210px] text-[#ffffff] text-[1rem] font-["Good_Timing"] font-bold'>
                <h3 className='text-[1.125rem] font-["DaMiOne"]'>/МЕНЮ</h3>

                <Link href='/' className='w-[200px] outline-none no-underline'>главная</Link>

                <Link href='/info' className='w-[200px] outline-none no-underline'>информация</Link>

                <Link href='/team' className='w-[200px] outline-none no-underline'>команда</Link>

                <Link href='/jury' className='w-[200px] outline-none no-underline'>жюри</Link>

                <Link href='' className='w-[200px] outline-none no-underline'>партнеры</Link>
            </nav>

            <div className='mlarge:mt-[50px] text-[#ffffff] text-[1rem] font-["Good_Timing"] font-bold'>
                <h3 className='text-[1.125rem] font-["DaMiOne"]'>/Контакты</h3>

                <p className='mt-[10px]'><strong className='text-[#bf5af2]'>tg:</strong> @deviantwish @AlisaSoboleva</p>

                <p className='mt-[10px]'><strong className='text-[#b3b1ff]'>phone:</strong> +7(495)640-53-30</p>

                <p className='mt-[10px]'><strong className='text-[#6bf89a]'>e-mail:</strong> info@aciso.ru</p>
            </div>

            <div className='mlarge:mt-[50px]'>
                <button className='flex justify-between items-top w-[300px] mlarge:w-full h-[40px] border-b-2 border-[#ffffff]'>
                    <p className='text-[#ffffff] text-[1.25rem] font-["DaMiOne"]'>FOLLOW US</p>

                    <img src='/static/footer/icon/ArrowRightDownIcon.svg' alt='FOLLOW US' className='mt-[5px] w-[15px] h-[15px]'/>
                </button>

                <div className='flex justify-between items-center mt-[30px] w-[300px] mlarge:w-full h-[25px]'>
                    <span className='flex justify-between w-[80px]'>
                        <a href='https://vk.com/ctfcup' className='outline-none'>
                            <img src='/static/footer/icon/VkIcon.svg' alt='Вконтакте'/>
                        </a>

                        <a href='' className='outline-none'>
                            <img src='/static/footer/icon/TelegramIcon.svg' alt='Телеграм'/>
                        </a>
                    </span>

                    <a href='https://old.ctfcup.ru/' className='text-[#bf5af2] text-[0.875rem] font-["Good_Timing"] font-bold outline-none'>VI Кубок CTF России</a>
                </div>
            </div>

            <div className='absolute bottom-[25px] mlarge:bottom-[40px] w-[70%] mlarge:w-[80%] mmedium:w-[90%] h-[60px]'>
                <img src='/static/footer/logo/CTFCupLogo.svg' alt='Логотип Кубка CTF' className='ml-[calc(50%-25px)] w-[50px] h-[50px]'/>

                <p className='mt-[10px] mlarge:mt-[20px] w-full text-[rgba(255,255,255,0.6)] text-[0.5rem] font-["DaMiOne"] text-center'>@CTFCUP2023</p>
            </div>
        </footer>
    )
};

export default TheFooter;