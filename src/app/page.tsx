import React from 'react';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

import Itinerary from '@/widgets/pageComponents/homePage/Itinerary';
import Address from '@/widgets/pageComponents/homePage/Address';
import OfficialDocsImages from "@/widgets/pageComponents/homePage/OfficialDocsImages";
import BgImages from "@/widgets/pageComponents/homePage/BgImages";

export default function Home() {
  return (
    <>
        <TheHeader/>

        <BgImages/>

        <main className='relative deskWide:mx-[calc((100%-1440px)/2)] w-[100vw] max-w-[1440px] h-auto overflow-hidden'>
            <section className='relative px-[15%] w-[100%] h-[700px] mlarge:h-[330px]'>
                <img src='/static/homePage/text/KubokCTFText.svg' alt='Кубок CTF 2023' className='mt-[calc(50%-400px)] mlarge:mt-[calc(50%-140px)] mmedium:mt-[calc(50%-120px)] h-[450px] mlarge:h-[400px] scale-[0.75] mlarge:scale-[1.3]'/>

                <div className='relative mt-[100px] mlarge:mt-[20px] h-[100px]'>
                    <a href='https://forms.yandex.ru/u/64fca2a6d0468870ebb9e8ac/' className='outline-none'>
                        <p className='text-[#ffffff] text-[2.25rem] mlarge:text-[1.25rem] font-["DaMiOne"] text-center'>Регистрация</p>

                        <img src='/static/homePage/icon/ArrowsDownIcon.svg' className='ml-[calc(50%-20px)] mlarge:ml-[calc(50%-12.5px)] pt-[5px] w-[40px] mlarge:w-[25px] h-[40px] mlarge:h-[25px] cursor-pointer'/>
                    </a>
                </div>
            </section>

            <section className='pt-[200px] px-[10%] mlarge:px-[5%] w-full h-[800px] mlarge:h-[450px] msmall:h-[400px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.89)_16.01%,#000_28.81%,#000_100%)]'>
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

            <Itinerary/>

            <Address/>

            <section className='relative flex justify-between mt-[40px] deskWide:mt-[20px] mlarge:mt-[0px] px-[15%] mlarge:px-[7.5%] w-full h-[600px] mlarge:h-[520px] mmedium:h-[480px] msmall:h-[430px]'>
                <img src='/static/homePage/text/WhatIsCTFText.png' alt='Что такое CTF?' className='absolute left-[10.5%] mlarge:left-[5.5%] mlarge:mt-[40px] mmedium:mt-[35px] w-[95vw] mlarge:w-[95vw] mmedium:w-[100vw] h-[140px] mlarge:h-[50px] mmedium:h-[45px] scale-[0.9] mlarge:scale-[0.95]'/>

                <span className='mt-[140px] mlarge:mt-[110px] msmall:mt-[90px] ml-[20%] mlarge:ml-[0%] text-[#ffffff] text-[1rem] deskWide:text-[1.125rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] font-["Good_Timing"]'>
                    <h3 className='text-[#bf5af2] text-[3rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem]'>CTF (Capture the Flag)</h3>

                    <p className='mt-[5px] mmedium:mt-[10px]'>— это соревнования по информационной безопасности в форме командной игры, главная цель которой —
                        захватить флаг у соперника в приближённых к реальности условиях.</p>

                    <p className='mt-[20px]'>Команды решают прикладные задачи, чтобы получить уникальную комбинацию символов (флаг).</p>

                    <p className='mt-[20px]'>Далее участники отправляют флаг в специальную платформу и получают подтверждение, что задача
                        решена верно или стоит попытаться дать ответ ещё раз.</p>
                </span>
            </section>

            <section className='relative mt-[100px] mlarge:mt-[20px] px-[15%] mmedium:px-[10%] w-full h-[670px] mlarge:h-[1250px]'>
                <OfficialDocsImages/>

                <img src='/static/homePage/text/OfficialDocumentsText.png' alt='Официальные документы' className='absolute right-[10%] mlarge:right-[5%] mmedium:right-[8.5%] mlarge:mt-[110px] mmedium:mt-[105px] w-[95vw] mlarge:w-[97.5vw] mmedium:w-[100vw] h-[250px] mlarge:h-[80px] mmedium:h-[70px] msmall:h-[65px] scale-[0.9] mlarge:scale-[0.95]'/>

                <div className='pt-[280px] mlarge:pt-[240px] mmedium:pt-[225px] flex mlarge:block justify-between w-full h-[590px] mlarge:h-[900px]'>
                    <a href='/static/homePage/documents/Pologenie.pdf' className='relative flex items-center w-[30%] mlarge:w-full h-full mlarge:h-[300px] bg-[#0d0d0d] border-[1px] border-[#ffffff] rounded-[25px] text-[#ffffff] overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg5.png' alt='Пузырьки5' className='absolute msmall:mt-[-40px] z-[0]'/>

                        <h3 className='absolute top-[20px] right-[10%] w-full text-[#bf5af2] text-[1.5rem] text-right font-["Good_Timing"] font-bold'>/DOC</h3>

                        <p className='px-[10%] w-full text-[0.875rem] font-bold leading-[1.75] z-10'>О проведении Всероссийских соревнований в области информационной безопасности «Кубок CTF России»</p>

                        <p className='absolute bottom-[5px] w-full text-[2.25rem] msmall:text-[2rem] text-center font-["Good_Timing"] font-bold'>положение</p>
                    </a>

                    <a href='/static/homePage/documents/Reglament.pdf' className='relative flex items-center mlarge:mt-[30px] w-[30%] mlarge:w-full h-full mlarge:h-[300px] bg-[#0d0d0d] border-[1px] border-[#ffffff] rounded-[25px] text-[#ffffff] overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg6.png' alt='Пузырьки6' className='absolute msmall:bottom-[0px] z-[0]'/>

                        <h3 className='absolute top-[20px] right-[10%] w-full text-[#bf5af2] text-[1.5rem] text-right font-["Good_Timing"] font-bold'>/DOC</h3>

                        <p className='px-[10%] w-full text-[1rem] font-bold leading-[1.75] z-10'>Правила проведения отборочного этапа VII Кубка CTF России</p>

                        <p className='absolute bottom-[5px] w-full text-[2.25rem] msmall:text-[2rem] text-center font-["Good_Timing"] font-bold'>регламенты</p>
                    </a>

                    <div className='relative flex items-center mlarge:mt-[30px] w-[30%] mlarge:w-full h-full mlarge:h-[300px] bg-[#0d0d0d] border-[1px] border-[#ffffff] rounded-[25px] text-[#ffffff] overflow-hidden'>
                        <img src='/static/homePage/background/BubblesBg7.png' alt='Пузырьки7' className='absolute msmall:mt-[-40px] z-[0]'/>

                        <h3 className='absolute top-[20px] right-[10%] w-full text-[#bf5af2] text-[1.5rem] text-right font-["Good_Timing"] font-bold'>/DOC</h3>

                        <p className='px-[10%] w-full text-[1rem] font-bold leading-[1.75] z-10'>Появится ближе к дате очных этапов</p>
                        
                        <p className='absolute bottom-[5px] w-full text-[2.25rem] msmall:text-[2rem] text-center font-["Good_Timing"] font-bold'>памятка</p>
                    </div>
                </div>
            </section>
        </main>

        <TheFooter/>
    </>
  )
}
