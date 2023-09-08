'use client';
import React, { useState, useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';

import { mobileSlice } from '@/store/storeReducers/MobileSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';
import { RootState } from '@/store';

import TheHeader from '@/widgets/shared/TheHeader';
import TheMobileHeader from '@/widgets/shared/TheMobileHeader';
import TheFooter from '@/widgets/shared/TheFooter';

export default function Home() {
  const dispatch = useAppDispatch();

  const [video, setVideo] = useState('');
  const [path, setPath] = useState('');

  const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

  const { setIsMobileStatus } = mobileSlice.actions;

  useEffect(() => {
      dispatch(setIsMobileStatus(window.innerWidth < 480));
      setPath(window.innerWidth < 480 ? '/static/homePage/background/GreetingsBubblesPhoneImage.svg' : '/static/homePage/background/GreetingsBubblesImage.svg');
  }, []);

  return (
    <>
        {!isMobile ? <TheHeader/> : <TheMobileHeader/>}

        <div className='absolute mt-[5%] deskmedium:mt-[10%] mlarge:mt-[-13.5%] ml-[10%] w-[80%] h-[900px] mlarge:h-[600px]'>
            <img src={path} alt='Пузырьки' className='absolute w-full h-full scale-[1.375] desklarge:scale-[1.5] deskmedium:scale-[1.625] mlarge:scale-[1.2] mlarge:object-cover z-[-1]'/>
        </div>

        {!isMobile && <div className='absolute mt-[1990px] w-[100%] h-[2800px] overflow-y-hidden'>
            <img src='/static/homePage/background/WaterCoolingImage.svg' alt='Водянка задний фон' className='absolute w-full z-[-1]'/>
        </div>}

        <main className='relative w-[100vw] h-auto overflow-hidden'>
            <section className='relative px-[15%] w-[100%] h-[700px] mlarge:h-[330px]'>
                <img src='/static/homePage/text/KubokCTFText.svg' alt='Кубок CTF 2023' className='pt-[calc(50%-290px)] deskmedium:pt-[calc(50%-400px)] h-[450px] deskmedium:h-[450px] mlarge:h-[400px] scale-[0.8] deskmedium:scale-[1] mlarge:scale-[1.3]'/>

                <div className='relative mt-[-90px] mlarge:mt-[-240px]'>
                    <p className='pt-[270px] text-[#ffffff] text-[2.25rem] mlarge:text-[1.25rem] font-["DaMiOne"] text-center'>Регистрация</p>

                    <img src='/static/homePage/icon/ArrowsDownIcon.svg' alt='Регистрация' className='ml-[calc(50%-20px)] mlarge:ml-[calc(50%-12.5px)] pt-[5px] w-[40px] mlarge:w-[25px] h-[40px] mlarge:h-[25px] cursor-pointer'/>
                </div>
            </section>

            <section className='pt-[200px] px-[10%] mlarge:px-[5%] w-[100%] h-[800px] mlarge:h-[450px] msmall:h-[400px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.89)_16.01%,#000_28.81%,#000_100%)]'>
                <div className='relative w-full h-[500px] mlarge:h-[210px] mmedium:h-[190px] msmall:h-[160px] border-[1px] border-[#ffffff] rounded-[25px]'>
                    <p className='absolute top-[-20px] mlarge:top-[-15px] left-[30px] mlarge:left-[20px] py-[5px] px-[20px] mlarge:px-[15px] bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px] text-[#ffffff] text-[1rem] mlarge:text-[0.875rem] font-["Good_Timing"] font-bold'>online</p>

                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Sv3cxIWXR0g?si=ELWfjKJE7ti-SvF2"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className='mmedium:w-[99.9%] rounded-[25px]'
                    >
                    </iframe>
                </div>
            </section>

            <section className='relative px-[15%] mlarge:px-[7.5%] w-full mlarge:w-full h-[750px]'>
                <img src='/static/homePage/text/RaspisanieText.svg' alt='Расписание' className='absolute mt-[-160px] mlarge:mt-[-120px] w-[80vw] mlarge:w-[95vw] h-[140px]'/>

                {!isMobile && <>
                    <div className='flex justify-between mlarge:block mt-[200px] mlarge:mt-[110px] w-full h-[670px] text-[#ffffff] font-["Good_Timing"]'>
                        <div className='relative py-[10px] px-[15px] w-[32.5%] h-[660px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px]'>
                            <img src='/static/homePage/background/BubblesBg1.svg' alt='Пузырьки2' className='absolute ml-[-15px] w-full h-[calc(100%-10px)] z-[-1]'/>

                            <div className='flex justify-end items-center h-[50px]'>
                                <div className='pr-[2.5px] text-[1rem]'>
                                    <p className='text-[#bf5af2]'>Task based</p>

                                    <p className='mt-[-7.5px] text-right'>октября</p>
                                </div>

                                <p className='text-[2.5rem]'>28-29</p>
                            </div>

                            <p className='mt-[30px] w-[100%]'>отборочный этап 24ч с 12:00 до 12:00 В 11:00 на почту, указанную при регистрации, будет отправлена ссылка.</p>

                            <p className='absolute bottom-[-15px] text-[5.5rem]'>online</p>
                        </div>

                        <div className='w-[63.5%] h-full'>
                            <div className='flex justify-between w-full'>
                                <div className='relative py-[10px] px-[15px] w-[47%] h-[400px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden'>
                                    <img src='/static/homePage/background/BubblesBg2.svg' alt='Пузырьки3' className='absolute mt-[15px] ml-[0px] w-[calc(100%-10px)] h-[calc(100%-10px)] z-[-1] scale-[1.15]'/>

                                    <div className='flex justify-end items-center h-[50px]'>
                                        <div className='pr-[2.5px] text-[1rem]'>
                                            <p className='text-[#bf5af2]'>Attack/Defence</p>

                                            <p className='mt-[-7.5px] text-right'>декабря</p>
                                        </div>

                                        <p className='text-[2.5rem]'>08</p>
                                    </div>

                                    <p className='mt-[30px] w-[100%]'>полуфинал с 9:00 до 19:30, «Сколково»</p>

                                    <p className='absolute bottom-[-15px] text-[4.75rem]'>offline</p>
                                </div>

                                <div className='relative py-[10px] px-[15px] w-[47%] h-[400px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden'>
                                    <img src='/static/homePage/background/BubblesBg3.svg' alt='Пузырьки4' className='absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110'/>

                                    <div className='flex justify-end items-center h-[50px]'>
                                        <div className='pr-[2.5px] text-[1rem] text-right'>
                                            <p className='text-[#bf5af2]'>Final</p>

                                            <p className='mt-[-7.5px]'>декабря</p>
                                        </div>

                                        <p className='text-[2.5rem]'>09</p>
                                    </div>

                                    <p className='mt-[30px] w-[100%]'>финал с 9:00 до 20:00, «Сколково»</p>

                                    <p className='absolute bottom-[-15px] text-[4.75rem]'>offline</p>
                                </div>
                            </div>

                            <div className='relative mt-[40px] w-full h-[210px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] '>
                                <div className='relative py-[10px] pl-[30px] pr-[15px] w-full h-full overflow-hidden'>
                                    <img src='/static/homePage/background/BubblesBg4.svg' alt='Пузырьки5' className='absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110'/>

                                    <div className='flex justify-between mt-[10px] w-full text-[#ffffff] text-[1rem] font-["Good_Timing"]'>
                                        <p className='w-[50%]'>финал для школьных команд с 9:00 до 19:30, «Сколково»</p>

                                        <div className='flex justify-end items-center h-[50px]'>
                                            <div className='pr-[2.5px] text-[1rem]'>
                                                <p className='text-[#bf5af2]'>Final</p>

                                                <p className='mt-[-7.5px] text-right'>декабря</p>
                                            </div>

                                            <p className='text-[2.5rem]'>08</p>
                                        </div>
                                    </div>

                                    <p className='absolute bottom-[-20px] right-[15px] text-[5.25rem]'>offline</p>
                                </div>

                                <p className='absolute bottom-[-20px] left-[60px] px-[40px] py-[7.5px] height-[40px] text-[#ffffff] text-[1rem] font-[Good_Timing] font-bold bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px]'>школьники</p>
                            </div>
                        </div>
                    </div>
                </>}

                {isMobile && <Carousel ariaLabel='div' showThumbs={false} showIndicators={false} showStatus={false} showArrows={false} className='mt-[110px] w-full h-[480px] msmall:h-[450px] text-[#ffffff] font-["Good_Timing"]'>
                    <div className='absolute py-[10px] px-[20px] w-[95%] h-[480px] msmall:h-[450px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg1.svg' alt='Пузырьки2' className='absolute mt-[-20%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1.5]'/>

                        <div className='flex justify-end items-center h-[50px]'>
                            <div className='pr-[2.5px] text-[1rem] msmall:text-[0.875rem]'>
                                <p className='msmall:mt-[-2.5px] text-[#bf5af2]'>Task based</p>

                                <p className='mt-[-7.5px] text-right'>октября</p>
                            </div>

                            <p className='text-[2.5rem] msmall:text-[2.25rem]'>28-29</p>
                        </div>

                        <p className='mt-[50px] w-[85%] text-[1rem] text-left leading-[2]'>отборочный этап 24ч с 12:00 до 12:00 В 11:00 на почту, указанную при регистрации, будет отправлена ссылка.</p>

                        <p className='absolute left-[17.5px] mmedium:left-[15px] msmall:left-[12.5px] bottom-[-25px] mmedium:bottom-[-20px] msmall:bottom-[-15px] text-[6rem] mmedium:text-[5.25rem] msmall:text-[4.5rem]'>online</p>
                    </div>

                    <div className='absolute py-[10px] px-[20px] w-[95%] h-[480px] msmall:h-[450px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg2.svg' alt='Пузырьки3' className='absolute mt-[-20%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1.5]'/>

                        <div className='flex justify-end items-center h-[50px]'>
                            <div className='pr-[2.5px] text-[1rem] msmall:text-[0.875rem]'>
                                <p className='msmall:mt-[-2.5px] text-[#bf5af2]'>Attack/Defence</p>

                                <p className='mt-[-7.5px] text-right'>декабря</p>
                            </div>

                            <p className='text-[2.5rem] msmall:text-[2.25rem]'>08</p>
                        </div>

                        <p className='mt-[50px] w-[85%] text-[1rem] text-left leading-[2]'>полуфинал с 9:00 до 19:30, «Сколково»</p>

                        <p className='absolute left-[15px] msmall:left-[12.5px] bottom-[-22.5px] mmedium:bottom-[-17.5px] msmall:bottom-[-12.5px] text-[5.75rem] mmedium:text-[5rem] msmall:text-[4.25rem]'>offline</p>
                    </div>

                    <div className='relative py-[10px] px-[20px] w-[95%] h-[480px] msmall:h-[450px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg3.svg' alt='Пузырьки4' className='absolute mt-[-10%] ml-[-52.5%] w-full h-[calc(100%-10px)] z-[-1] scale-[1.1]'/>

                        <div className='flex justify-end items-center h-[50px]'>
                            <div className='pr-[2.5px] text-[1rem] msmall:text-[0.875rem] text-right'>
                                <p className='msmall:mt-[-2.5px] text-[#bf5af2]'>Final</p>

                                <p className='mt-[-7.5px]'>декабря</p>
                            </div>

                            <p className='text-[2.5rem] msmall:text-[2.25rem]'>09</p>
                        </div>

                        <p className='mt-[50px] w-[85%] text-[1rem] text-left leading-[2]'>финал с 9:00 до 20:00, «Сколково»</p>

                        <p className='absolute left-[15px] msmall:left-[12.5px] bottom-[-22.5px] mmedium:bottom-[-17.5px] msmall:bottom-[-12.5px] text-[5.75rem] mmedium:text-[5rem] msmall:text-[4.25rem]'>offline</p>
                    </div>
                </Carousel>}

                {isMobile && <div className='relative mt-[30px] w-full h-[260px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] '>
                    <div className='relative py-[10px] pl-[30px] pr-[15px] w-full h-full overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg4.svg' alt='Пузырьки5' className='absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110'/>

                        <div className='flex justify-between mt-[25px] w-full text-[#ffffff] text-[0.875rem] font-["Good_Timing"]'>
                            <p className='msmall:mt-[10px] w-[55%] mmedium:w-[50%] text-[0.875rem] mmedium:text-[0.75rem] msmall:text-[0.625rem] leading-[1.75] mmedium:leading-[1.875] msmall:leading-[2]'>финал для школьных команд с 9:00 до 19:30, «Сколково»</p>

                            <div className='flex justify-end items-center mt-[-25px] h-[50px]'>
                                <div className='pr-[2.5px] text-[1rem] msmall:text-[0.875rem]'>
                                    <p className='text-[#bf5af2]'>Final</p>

                                    <p className='mt-[-7.5px] text-right'>декабря</p>
                                </div>

                                <p className='text-[2.5rem] msmall:text-[2rem]'>08</p>
                            </div>
                        </div>

                        <p className='absolute bottom-[-20px] msmall:bottom-[-12.5px] right-[15px] text-[#ffffff] text-[5.25rem] mmedium:text-[5rem] msmall:text-[4.25rem] font-bold'>offline</p>
                    </div>

                    <p className='absolute bottom-[-20px] msmall:bottom-[-15px] left-[20px] msmall:left-[15px] px-[40px] msmall:px-[25px] py-[7.5px] msmall:py-[5px] height-[40px] text-[#ffffff] text-[1rem] msmall:text-[0.875rem] font-[Good_Timing] font-bold bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px]'>школьники</p>
                </div>}
            </section>

            <section className='relative mlarge:flex mlarge:justify-between px-[15%] mlarge:px-[7.5%] w-full h-[850px] mlarge:h-[460px]'>
                <img src='/static/homePage/text/MestoProvedeniyaText.svg' alt='Место проведения' className='absolute right-[13.5%] mlarge:right-[7.5%] w-[80vw] mlarge:w-[92.5vw] h-[240px]'/>

                <img src='/static/homePage/logo/SkolkovoLogo.svg' alt='Сколково' className='pt-[200px] mlarge:pt-[60px] ml-[5%] mlarge:ml-[17.5%] w-[60%] scale-[1.3] mlarge:scale-[2] z-[-10]'/>

                <span className='relative mt-[300px] mlarge:mt-[0px] mmedium:mt-[20px] mlarge:ml-[-22.5%] w-[37.5%] mlarge:w-[50%] text-[#ffffff] text-[1rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] msmall:text-[0.625rem] font-["Good_Timing"] mlarge:text-right whitespace-nowrap mlarge:whitespace-normal'>
                    {!isMobile && <span className='z-20'>
                        <p className='mt-[15px] ml-[40px] z-40'>Адрес: Большой бул., 42 с1, Сколково, Москва, 143026</p>

                        <a href='https://sk.ru/transport/' className='ml-[40px] text-[#bf5af2] no-underline outline-none'>sk.ru/transport</a>
                    </span>}

                    {isMobile && <>
                        <p className='mt-[180px] whitespace-nowrap'>Адрес: Большой бул.,</p>

                        <p className='whitespace-nowrap'>42 с1, Сколково,</p>

                        <p className='whitespace-nowrap'>Москва, 143026</p>

                        <a href='https://sk.ru/transport/' className='text-[#bf5af2] no-underline outline-none'>sk.ru/transport</a>
                    </>}
                </span>

                {isMobile && <img src='/static/homePage/background/WaterCoolingPipeImage.svg' alt='Трубка водяного охлаждения, задний фон' className='absolute left-[0%] bottom-[-60px] mmedium:bottom-[-50px] msmall:bottom-[-35px] w-full'/>}
            </section>

            <section className='relative flex justify-between mt-[50px] mlarge:mt-[0px] px-[15%] mlarge:px-[7.5%] w-full h-[600px] mlarge:h-[520px] mmedium:h-[480px] msmall:h-[430px]'>
                <img src='/static/homePage/text/WhatIsCTFText.svg' alt='Что такое CTF?' className='absolute w-[85vw] mlarge:w-[95vw] mmedium:w-[100vw] h-[140px]'/>

                <span className='mt-[140px] mlarge:mt-[110px] ml-[20%] mlarge:ml-[0%] text-[#ffffff] text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] font-["Good_Timing"]'>
                    <h3 className='text-[#bf5af2] text-[3rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem]'>CTF (Capture the Flag)</h3>

                    <p className='mt-[5px] mmedium:mt-[10px]'>— это соревнования по информационной безопасности в форме командной игры, главная цель которой —
                        захватить флаг у соперника в приближённых к реальности условиях.</p>

                    <p className='mt-[20px]'>Команды решают прикладные задачи, чтобы получить уникальную комбинацию символов (флаг).</p>

                    <p className='mt-[20px]'>Далее участники отправляют флаг в специальную платформу и получают подтверждение, что задача
                        решена верно или стоит попытаться дать ответ ещё раз.</p>
                </span>
            </section>

            <section className='relative mt-[100px] mlarge:mt-[20px] px-[15%] mmedium:px-[10%] w-full h-[670px] mlarge:h-[1250px]'>
                {isMobile && <img src='/static/homePage/background/WaterCoolingPipesImage.svg' alt='Трубки водяного охлаждения, задний фон' className='absolute right-[5%] scale-[1.15] z-[-5]'/>}

                {isMobile && <img src='/static/homePage/background/WaterCoolingPipesImage2.svg' alt='Трубки водяного охлаждения, задний фон' className='absolute top-[540px] right-[5%] scale-[1.15] z-[-5]'/>}

                <img src='/static/homePage/text/OfficialDocumentsText.svg' alt='Официальные документы' className='absolute mlarge:mt-[20px] mmedium:mt-[15px] right-[13%] mmedium:right-[8.5%] w-[90vw] mlarge:w-[95vw] mmedium:w-[100vw] h-[250px] scale-[0.95]'/>

                <div className='pt-[280px] mlarge:pt-[240px] mmedium:pt-[225px] flex mlarge:block justify-between w-full h-[590px] mlarge:h-[900px]'>
                    <div className='relative flex items-center w-[30%] mlarge:w-full h-full mlarge:h-[300px] bg-[#0d0d0d] border-[1px] border-[#ffffff] rounded-[25px] text-[#ffffff] overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg5.svg' alt='Пузырьки5' className='absolute msmall:mt-[-40px] z-[0]'/>

                        <h3 className='absolute top-[20px] right-[10%] w-full text-[#bf5af2] text-[1.5rem] text-right font-["Good_Timing"] font-bold'>/DOC</h3>

                        <p className='px-[10%] w-full text-[0.875rem] font-bold leading-[1.75] z-10'>О проведении Всероссийских соревнований в области информационной безопасности «Кубок CTF России»</p>

                        <p className='absolute bottom-[5px] w-full text-[2.25rem] msmall:text-[2rem] text-center font-["Good_Timing"] font-bold'>положение</p>
                    </div>

                    <div className='relative flex items-center mlarge:mt-[30px] w-[30%] mlarge:w-full h-full mlarge:h-[300px] bg-[#0d0d0d] border-[1px] border-[#ffffff] rounded-[25px] text-[#ffffff] overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg6.svg' alt='Пузырьки6' className='absolute msmall:bottom-[0px] z-[0]'/>

                        <h3 className='absolute top-[20px] right-[10%] w-full text-[#bf5af2] text-[1.5rem] text-right font-["Good_Timing"] font-bold'>/DOC</h3>

                        <p className='px-[10%] w-full text-[1rem] font-bold leading-[1.75] z-10'>Правила проведения отборочного этапа VII Кубка CTF России</p>

                        <p className='absolute bottom-[5px] w-full text-[2.25rem] msmall:text-[2rem] text-center font-["Good_Timing"] font-bold'>регламенты</p>
                    </div>

                    <div className='relative flex items-center mlarge:mt-[30px] w-[30%] mlarge:w-full h-full mlarge:h-[300px] bg-[#0d0d0d] border-[1px] border-[#ffffff] rounded-[25px] text-[#ffffff] overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg7.svg' alt='Пузырьки7' className='absolute msmall:mt-[-40px] z-[0]'/>

                        <h3 className='absolute top-[20px] right-[10%] w-full text-[#bf5af2] text-[1.5rem] text-right font-["Good_Timing"] font-bold'>/DOC</h3>

                        <p className='px-[10%] w-full text-[1rem] font-bold leading-[1.75] z-10'>Памятка участника. Дата и место проведения соревнований:</p>
                        
                        <p className='absolute bottom-[5px] w-full text-[2.25rem] msmall:text-[2rem] text-center font-["Good_Timing"] font-bold'>памятка</p>
                    </div>
                </div>
            </section>
        </main>

        <TheFooter/>
    </>
  )
}
