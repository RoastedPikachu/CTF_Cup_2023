'use client';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

export default function Home() {
  const [video, setVideo] = useState('');

  useEffect(() => {
      axios.get('https://api.vk.com/method/video.get?access_token=1a68e9d51a68e9d51a68e9d557197d9f1d11a681a68e9d57e8558a77284ad7e8e522141&v=5.131&videos=-153821859_398')
          .then((response:any) => {
              console.log(response);
          })
  }, []);

  return (
    <>
        <TheHeader/>

        <main className='w-[100%] h-auto'>

            <img src='/static/GreetingsBubblesImage.svg' alt='Пузырьки' className='absolute mt-[5%] ml-[10%] w-[80%] h-[900px] scale-[1.375] z-[-1]'/>

            <section className='relative px-[15%] w-[100%] h-[700px]'>
                <img src='/static/KubokCTFText.svg' alt='Кубок CTF 2023' className='pt-[calc(50%-300px)] h-[450px] scale-[0.65]'/>

                <div className='relative mt-[-80px]'>
                    <p className='pt-[270px] text-[#ffffff] text-[2.25rem] font-["DaMiOne"] text-center'>Регистрация</p>

                    <img src='/static/ArrowsDownIcon.svg' alt='Регистрация' className='ml-[calc(50%-20px)] pt-[5px] w-[40px] h-[40px] cursor-pointer'/>
                </div>
            </section>

            <section className='px-[15%] w-[100%] h-[800px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.89)_16.01%,#000_28.81%,#000_100%)]'>

            </section>

            <section className='relative px-[15%] w-[97.5%] h-[800px]'>
                <img src='/static/RaspisanieText.svg' alt='Расписание' className='absolute mt-[-160px] w-[80vw] h-[140px]'/>

                <div className='flex justify-between mt-[200px] w-full h-[670px] text-[#ffffff] font-["Good_Timing"]'>
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

            <section className='relative flex justify-between px-[15%] w-[97.5%] h-[700px]'>
                <img src='/static/MestoProvedeniyaText.svg' alt='Место проведения' className='absolute right-[14%] w-[80vw] h-[240px]'/>

                <img src='/static/SkolkovoLogo.svg' alt='Сколково' className='w-[60%] scale-[1.3]'/>

                <span className='mt-[300px] w-[37.5%] text-[#ffffff] text-[1.5rem] font-["Good_Timing"] whitespace-nowrap'>
                    <p>Адрес: Большой бул., 42 с1,</p>

                    <p>Сколково, Москва, 143026</p>
                </span>
            </section>

            <section className='relative flex justify-between px-[15%] w-[97.5%] h-[500px]'>
                <img src='/static/WhatIsCTFText.svg' alt='Что такое CTF?' className='absolute w-[85vw] h-[140px]'/>

                <span className='mt-[140px] ml-[20%] text-[#ffffff] text-[1rem] font-["Good_Timing"]'>
                    <h3 className='text-[#bf5af2] text-[3rem]'>CTF (Capture the Flag)</h3>

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
