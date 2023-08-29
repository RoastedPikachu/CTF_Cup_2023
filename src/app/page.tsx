'use client';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

export default function Home() {
  const [video, setVideo] = useState('');
  const [path, setPath] = useState('');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      setIsMobile(window.innerWidth < 480);
      setPath(window.innerWidth < 480 ? '/static/GreetingsBubblesPhoneImage.svg' : '/static/GreetingsBubblesImage.svg');
  }, []);

  return (
    <>
        <TheHeader/>

        <img src={path} alt='Пузырьки' className='absolute mt-[5%] mlarge:mt-[-13.5%] ml-[10%] w-[80%] h-[900px] mlarge:h-[600px] scale-[1.375] mlarge:scale-[1.5] z-[-1]'/>

        <main className='relative w-[100%] h-auto'>

            <section className='relative px-[15%] w-[100%] h-[700px] mlarge:h-[330px]'>
                <img src='/static/KubokCTFText.svg' alt='Кубок CTF 2023' className='pt-[calc(50%-300px)] h-[450px] mlarge:h-[400px] scale-[0.65] mlarge:scale-[1.3]'/>

                <div className='relative mt-[-80px] mlarge:mt-[-240px]'>
                    <p className='pt-[270px] text-[#ffffff] text-[2.25rem] mlarge:text-[1.25rem] font-["DaMiOne"] text-center'>Регистрация</p>

                    <img src='/static/ArrowsDownIcon.svg' alt='Регистрация' className='ml-[calc(50%-20px)] mlarge:ml-[calc(50%-12.5px)] pt-[5px] w-[40px] mlarge:w-[25px] h-[40px] mlarge:h-[25px] cursor-pointer'/>
                </div>
            </section>

            <section className='px-[15%] mlarge:px-[5%] w-[100%] h-[800px] mlarge:h-[450px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.89)_16.01%,#000_28.81%,#000_100%)]'>

            </section>

            <section className='relative px-[15%] mlarge:px-[5%] w-[97.5%] mlarge:w-full h-[800px] mlarge:h-[700px]'>
                <img src='/static/RaspisanieText.svg' alt='Расписание' className='absolute mt-[-160px] w-[80vw] mlarge:w-[95vw] h-[140px]'/>

                <div className='flex justify-between mlarge:block mt-[200px] mlarge:mt-[150px] w-full h-[670px] text-[#ffffff] font-["Good_Timing"]'>
                    <div className='relative py-[10px] px-[15px] w-[32.5%] h-[660px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px]'>
                        <img src='/static/BubblesBg1.svg' alt='Пузырьки2' className='absolute ml-[-15px] w-full h-[calc(100%-10px)] z-[-1]'/>

                        <div className='flex justify-end items-center h-[50px]'>
                            <div className='pr-[2.5px] text-[1rem]'>
                                <p className='text-[#bf5af2]'>Task based</p>

                                <p className='mt-[-7.5px] text-right'>ноября</p>
                            </div>

                            <p className='text-[2.5rem]'>19–20</p>
                        </div>

                        <p className='mt-[30px] w-[100%]'>отборочный этап 24ч с 12.00 до 12.00 В 11.00 на почту, указанную при регистрации, будет отправлена ссылка.</p>

                        <p className='absolute bottom-[-15px] text-[5.5rem]'>online</p>
                    </div>

                    <div className='w-[63.5%] h-full'>
                        <div className='flex justify-between w-full'>
                            <div className='relative py-[10px] px-[15px] w-[47%] h-[400px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden'>
                                <img src='/static/BubblesBg2.svg' alt='Пузырьки3' className='absolute mt-[15px] ml-[0px] w-[calc(100%-10px)] h-[calc(100%-10px)] z-[-1] scale-[1.15]'/>

                                <div className='flex justify-end items-center h-[50px]'>
                                    <div className='pr-[2.5px] text-[1rem]'>
                                        <p className='text-[#bf5af2]'>Attack/Defence</p>

                                        <p className='mt-[-7.5px] text-right'>декабря</p>
                                    </div>

                                    <p className='text-[2.5rem]'>10</p>
                                </div>

                                <p className='mt-[30px] w-[100%]'>полуфинал с 9.00 до 19.30, «Сколково»</p>

                                <p className='absolute bottom-[-15px] text-[4.75rem]'>offline</p>
                            </div>

                            <div className='relative py-[10px] px-[15px] w-[47%] h-[400px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden'>
                                <img src='/static/BubblesBg3.svg' alt='Пузырьки4' className='absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110'/>

                                <div className='flex justify-end items-center h-[50px]'>
                                    <div className='pr-[2.5px] text-[1rem] text-right'>
                                        <p className='text-[#bf5af2]'>Final</p>

                                        <p className='mt-[-7.5px]'>декабря</p>
                                    </div>

                                    <p className='text-[2.5rem]'>11</p>
                                </div>

                                <p className='mt-[30px] w-[100%]'>финал с 9.00 до 20.00, «Сколково»</p>

                                <p className='absolute bottom-[-15px] text-[4.75rem]'>offline</p>
                            </div>
                        </div>

                        <div className='relative mt-[40px] w-full h-[210px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] '>
                            <div className='relative py-[10px] pl-[30px] pr-[15px] w-full h-full overflow-hidden'>
                                <img src='/static/BubblesBg4.svg' alt='Пузырьки5' className='absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110'/>

                                <div className='flex justify-between mt-[10px] w-full text-[#ffffff] text-[1rem] font-["Good_Timing"]'>
                                    <p className='w-[50%]'>полуфинал 24ч с 12.00 до 12.00 В 11.00 на почту, указанную при регистрации, будет отправлена ссылка.</p>

                                    <div className='flex justify-end items-center h-[50px]'>
                                        <div className='pr-[2.5px] text-[1rem]'>
                                            <p className='text-[#bf5af2]'>Semi-final</p>

                                            <p className='mt-[-7.5px] text-right'>декабря</p>
                                        </div>

                                        <p className='text-[2.5rem]'>10</p>
                                    </div>
                                </div>

                                <p className='absolute bottom-[-20px] right-[15px] text-[5.25rem]'>offline</p>
                            </div>

                            <p className='absolute bottom-[-20px] left-[60px] px-[40px] py-[7.5px] height-[40px] text-[#ffffff] text-[1rem] font-[Good_Timing] bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px]'>школьники</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative flex justify-between px-[15%] mlarge:px-[5%] w-[97.5%] mlarge:w-full h-[700px] mlarge:h-[460px]'>
                <img src='/static/MestoProvedeniyaText.svg' alt='Место проведения' className='absolute right-[14%] mlarge:right-[0%] w-[80vw] mlarge:w-[92.5vw] h-[240px]'/>

                <img src='/static/SkolkovoLogo.svg' alt='Сколково' className='mlarge:mt-[140px] mlarge:ml-[17.5%] w-[60%] scale-[1.3] mlarge:scale-[2]'/>

                <span className='mt-[300px] mlarge:mt-[180px] mlarge:ml-[-15%] w-[37.5%] mlarge:w-[50%] text-[#ffffff] text-[1.5rem] mlarge:text-[0.875rem] font-["Good_Timing"] mlarge:text-right whitespace-nowrap mlarge:whitespace-normal'>
                    {!isMobile && <p>Адрес: Большой бул., 42 с1,</p>}

                    {!isMobile && <p>Сколково, Москва, 143026</p>}

                    {isMobile && <p className='whitespace-nowrap'>Адрес: Большой бул.,</p>}

                    {isMobile && <p className='whitespace-nowrap'>42 с1, Сколково,</p>}

                    {isMobile && <p className='whitespace-nowrap'>Москва, 143026</p>}
                </span>
            </section>

            <section className='relative flex justify-between px-[15%] mlarge:px-[5%] w-[97.5%] mlarge:w-full h-[500px] mlarge:h-[550px]'>
                <img src='/static/WhatIsCTFText.svg' alt='Что такое CTF?' className='absolute w-[85vw] mlarge:w-[92.5vw] h-[140px]'/>

                <span className='mt-[140px] mlarge:mt-[110px] ml-[20%] mlarge:ml-[0%] text-[#ffffff] text-[1rem] font-["Good_Timing"]'>
                    <h3 className='text-[#bf5af2] text-[3rem] mlarge:text-[1.5rem]'>CTF (Capture the Flag)</h3>

                    <p className='mt-[5px]'>— это соревнования по информационной безопасности в форме командной игры, главная цель которой —
                        захватить флаг у соперника в приближённых к реальности условиях.</p>

                    <p className='mt-[20px]'>Команды решают прикладные задачи, чтобы получить уникальную комбинацию символов (флаг).</p>

                    <p className='mt-[20px]'>Далее участники отправляют флаг в специальную платформу и получают подтверждение, что задача
                        решена верно или стоит попытаться дать ответ ещё раз.</p>
                </span>
            </section>
        </main>

        <TheFooter/>
    </>
  )
}
