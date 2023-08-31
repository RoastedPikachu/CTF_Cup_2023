'use client';
import React, { useState, useEffect, useRef } from 'react';

import { Carousel } from 'react-responsive-carousel';

import axios from 'axios';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

export default function Home() {
  const [video, setVideo] = useState('');
  const [path, setPath] = useState('');

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
      setIsMobile(window.innerWidth < 480);
      setPath(window.innerWidth < 480 ? '/static/GreetingsBubblesPhoneImage.svg' : '/static/GreetingsBubblesImage.svg');
  }, []);

  return (
    <>
        <TheHeader/>

        <img src={path} alt='Пузырьки' className='absolute mt-[5%] mlarge:mt-[-13.5%] ml-[10%] w-[80%] h-[900px] mlarge:h-[600px] scale-[1.375] mlarge:scale-[1.2] z-[-1] mlarge:object-cover'/>

        {!isMobile && <div className='absolute mt-[1990px] w-[100%] h-[2000px] overflow-y-hidden'>
            <img src='/static/WaterCoolingImage.svg' alt='Водянка задний фон' className='absolute w-full'/>
        </div>}

        <main className='relative w-[100vw] h-auto overflow-hidden'>
            <section className='relative px-[15%] w-[100%] h-[700px] mlarge:h-[330px]'>
                <img src='/static/KubokCTFText.svg' alt='Кубок CTF 2023' className='pt-[calc(50%-300px)] h-[450px] mlarge:h-[400px] scale-[0.65] mlarge:scale-[1.3]'/>

                <div className='relative mt-[-80px] mlarge:mt-[-240px]'>
                    <p className='pt-[270px] text-[#ffffff] text-[2.25rem] mlarge:text-[1.25rem] font-["DaMiOne"] text-center'>Регистрация</p>

                    <img src='/static/ArrowsDownIcon.svg' alt='Регистрация' className='ml-[calc(50%-20px)] mlarge:ml-[calc(50%-12.5px)] pt-[5px] w-[40px] mlarge:w-[25px] h-[40px] mlarge:h-[25px] cursor-pointer'/>
                </div>
            </section>

            <section className='px-[15%] mlarge:px-[5%] w-[100%] h-[800px] mlarge:h-[450px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.89)_16.01%,#000_28.81%,#000_100%)]'>

            </section>

            <section className='relative px-[15%] mlarge:px-[7.5%] w-[97.5%] mlarge:w-full h-[750px]'>
                <img src='/static/RaspisanieText.svg' alt='Расписание' className='absolute mt-[-160px] mlarge:mt-[-120px] w-[80vw] mlarge:w-[95vw] h-[140px]'/>

                {!isMobile && <>
                    <div className='flex justify-between mlarge:block mt-[200px] mlarge:mt-[110px] w-full h-[670px] text-[#ffffff] font-["Good_Timing"]'>
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

                                <p className='absolute bottom-[-20px] left-[60px] px-[40px] py-[7.5px] height-[40px] text-[#ffffff] text-[1rem] font-[Good_Timing] font-bold bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px]'>школьники</p>
                            </div>
                        </div>
                    </div>
                </>}

                {isMobile && <Carousel ariaLabel='div' showThumbs={false} showIndicators={false} showStatus={false} showArrows={false} className='mt-[110px] w-full h-[480px] text-[#ffffff] font-["Good_Timing"]'>
                    <div className={`absolute py-[10px] px-[20px] w-[95%] h-[480px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden`}>
                        <img src='/static/BubblesBg1.svg' alt='Пузырьки2' className='absolute mt-[-20%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1.5]'/>

                        <div className='flex justify-end items-center h-[50px]'>
                            <div className='pr-[2.5px] text-[1rem]'>
                                <p className='text-[#bf5af2]'>Task based</p>

                                <p className='mt-[-7.5px] text-right'>ноября</p>
                            </div>

                            <p className='text-[2.5rem]'>19–20</p>
                        </div>

                        <p className='mt-[50px] w-[85%] text-[1rem] text-left leading-[2]'>отборочный этап 24ч с 12.00 до 12.00 В 11.00 на почту, указанную при регистрации, будет отправлена ссылка.</p>

                        <p className='absolute left-[17.5px] bottom-[-25px] text-[6rem]'>online</p>
                    </div>

                    <div className={`absolute py-[10px] px-[20px] w-[95%] h-[480px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden`}>
                        <img src='/static/BubblesBg2.svg' alt='Пузырьки3' className='absolute mt-[-20%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1.5]'/>

                        <div className='flex justify-end items-center h-[50px]'>
                            <div className='pr-[2.5px] text-[1rem]'>
                                <p className='text-[#bf5af2]'>Attack/Defence</p>

                                <p className='mt-[-7.5px] text-right'>декабря</p>
                            </div>

                            <p className='text-[2.5rem]'>10</p>
                        </div>

                        <p className='mt-[50px] w-[85%] text-[1rem] text-left leading-[2]'>полуфинал с 9.00 до 19.30, «Сколково»</p>

                        <p className='absolute left-[15px] bottom-[-22.5px] text-[5.75rem]'>offline</p>
                    </div>

                    <div className={`relative py-[10px] px-[20px] w-[95%] h-[480px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden`}>
                        <img src='/static/BubblesBg3.svg' alt='Пузырьки4' className='absolute mt-[-10%] ml-[-52.5%] w-full h-[calc(100%-10px)] z-[-1] scale-[1.1]'/>

                        <div className='flex justify-end items-center h-[50px]'>
                            <div className='pr-[2.5px] text-[1rem] text-right'>
                                <p className='text-[#bf5af2]'>Final</p>

                                <p className='mt-[-7.5px]'>декабря</p>
                            </div>

                            <p className='text-[2.5rem]'>11</p>
                        </div>

                        <p className='mt-[50px] w-[85%] text-[1rem] text-left leading-[2]'>финал с 9.00 до 20.00, «Сколково»</p>

                        <p className='absolute left-[15px] bottom-[-22.5px] text-[5.75rem]'>offline</p>
                    </div>
                </Carousel>}

                {isMobile && <div className='relative mt-[30px] w-full h-[260px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] '>
                    <div className='relative py-[10px] pl-[30px] pr-[15px] w-full h-full overflow-hidden'>
                        <img src='/static/BubblesBg4.svg' alt='Пузырьки5' className='absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110'/>

                        <div className='flex justify-between mt-[25px] w-full text-[#ffffff] text-[0.875rem] font-["Good_Timing"]'>
                            <p className='w-[55%] text-[0.875rem] leading-[1.75]'>полуфинал 24ч с 12.00 до 12.00 В 11.00 на почту, указанную при регистрации, будет отправлена ссылка.</p>

                            <div className='flex justify-end items-center mt-[-25px] h-[50px]'>
                                <div className='pr-[2.5px] text-[1rem]'>
                                    <p className='text-[#bf5af2]'>Semi-final</p>

                                    <p className='mt-[-7.5px] text-right'>декабря</p>
                                </div>

                                <p className='text-[2.5rem]'>10</p>
                            </div>
                        </div>

                        <p className='absolute bottom-[-20px] right-[15px] text-[#ffffff] text-[5.25rem] font-bold'>offline</p>
                    </div>

                    <p className='absolute bottom-[-20px] left-[20px] px-[40px] py-[7.5px] height-[40px] text-[#ffffff] text-[1rem] font-[Good_Timing] font-bold bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px]'>школьники</p>
                </div>}
            </section>

            <section className='relative flex justify-between mlarge:block px-[15%] mlarge:px-[7.5%] w-[97.5%] mlarge:w-full h-[850px] mlarge:h-[460px]'>
                <img src='/static/MestoProvedeniyaText.svg' alt='Место проведения' className='absolute right-[14%] mlarge:right-[7.5%] w-[80vw] mlarge:w-[92.5vw] h-[240px]'/>

                <img src='/static/SkolkovoLogo.svg' alt='Сколково' className='pt-[200px] mlarge:pt-[140px] ml-[5%] mlarge:ml-[17.5%] w-[60%] scale-[1.3] mlarge:scale-[2]'/>

                <span className='mt-[300px] mlarge:mt-[0px] mlarge:ml-[-22.5%] w-[37.5%] mlarge:w-[50%] text-[#ffffff] text-[1rem] mlarge:text-[0.875rem] font-["Good_Timing"] mlarge:text-right whitespace-nowrap mlarge:whitespace-normal'>
                    {!isMobile && <p className='mt-[15px] ml-[40px]'>Адрес: Большой бул., 42 с1, Сколково, Москва, 143026</p>}

                    {isMobile && <>
                        <p className='mt-[-150px] whitespace-nowrap'>Адрес: Большой бул.,</p>

                        <p className='whitespace-nowrap'>42 с1, Сколково,</p>

                        <p className='whitespace-nowrap'>Москва, 143026</p>
                    </>}
                </span>

                {isMobile && <img src='/static/WaterCoolingPipeImage.svg' alt='Трубка водяного охлаждения, задний фон' className='absolute left-[0%] bottom-[-60px] w-full'/>}
            </section>

            <section className='relative flex justify-between px-[15%] mlarge:px-[7.5%] w-[97.5%] mlarge:w-full h-[500px] mlarge:h-[550px]'>
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
