'use client';
import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "@/store/storeHooks";
import { mobileSlice } from "@/store/storeReducers/MobileSlice";
import { RootState } from '@/store';

import TheHeader from '@/widgets/shared/TheHeader';
import TheMobileHeader from '@/widgets/shared/TheMobileHeader';
import TheFooter from '@/widgets/shared/TheFooter';

interface Paragraph {
    id: number,
    title: string,
    isOpen: boolean,
    text: string
}

const Page = () => {
    const dispatch = useAppDispatch();

    const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

    const { setIsMobileStatus } = mobileSlice.actions;

    const [paragraphs, setParagraphs] = useState([
        {
            id: 1,
            title: 'Могу ли я принять участие в Кубке, если меня отчислили?',
            isOpen: false,
            text: 'Токен для регистрации можно получить у <b className="text-[#bf5af2]">@ctfmarketbot</b>, если ты был участником Летней Школы <b>CTF 2022</b>. Мы выгрузили все данные <b className="text-[#bf5af2]">(TelegramUserID, баллы)</b> из бота ЛШ и на основе них сделали те самые токены для регистрации. Баллы подтянутся автоматически'
        },
        {
            id: 2,
            title: 'Какой зачет нам выбрать, если мы студенты, но у нас есть школьник в составе?',
            isOpen: false,
            text: 'В любой непонятной ситуации выбирайте <b className="text-[#bf5af2]">Смешанный зачет</b>. Школьный только для школьников, а Академический — для студентов одного вуза (или колледжа).'
        },
        {
            id: 3,
            title: 'Могут ли пройти на финал иностранные команды',
            isOpen: false,
            text: 'Теоретически — да. А на практике каждая заявка иностранной команды будет рассматриваться в индивидуальном порядке Национальной Ассоциацией международной информационной безопасности, так что гарантировать <b>100%</b> вероятность прохождения мы, увы, не можем.'
        },
        {
            id: 4,
            title: 'Приз — один на три зачета?',
            isOpen: false,
            text: 'А вот и нет — победитель <b className="text-[#bf5af2]">каждого из трех</b> зачетов получит и денежный приз, и <b className="text-[#bf5af2]">свой экземпляр кубка</b> ;)'
        },
        {
            id: 5,
            title: 'Когда будут известны результаты отборочного тура?',
            isOpen: false,
            text: 'Мы постараемся опубликовать результаты как можно скорее — но обычно нам нужно <b className="text-[#bf5af2]">2-3 дня</b>, чтобы точно проверить результаты: за это время убедимся, что <ul><li>никто из команд не спутал зачеты,</li><li>предоставил всю информацию в регистрации,</li><li>не жульничал во время этапа.</li></ul>'
        },
        {
            id: 6,
            title: 'Сколько этапов ждут школьников?',
            isOpen: false,
            text: 'В школьном зачете всего <b className="text-[#bf5af2]">два этапа</b>: общий с остальными участниками <b className="text-[#bf5af2]">отборочный этап</b>, а также <b className="text-[#bf5af2]">очный финал в декабре</b>.'
        }
    ] as Paragraph[]);

    useEffect(() => {
        dispatch(setIsMobileStatus(window.innerWidth < 480));
    }, [])
    return (
        <>
            {!isMobile ? <TheHeader/> : <TheMobileHeader/>}

            <main className='relative mt-[50px] w-[100vw] h-auto overflow-hidden'>
                <img src='/static/infoPage/background/InfoBgImage1.svg' alt='Пузырик' className='absolute mt-[-20px] right-[-60px] z-[-1] scale-[0.9]'/>

                <section className='px-[10%] w-full'>
                    <img src='/static/infoPage/text/PravilaText.svg' alt='Правила' className='w-[60%]'/>

                    <div className='flex justify-between mt-[80px] w-full h-[250px]'>
                        <span className='flex justyfy-between w-[48%] h-full text-[#ffffff]'>
                            <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>01</p>

                            <p className='mt-[10px] w-[85%] font-["Good_Timing"] font-bold'>В отборочном этапе могут участвовать <b className='text-[#bf5af2]'>студенческие</b> и <b className='text-[#bf5af2]'>школьные</b> команды размером <b className='text-[#bf5af2]'>5-7</b> человек</p>
                        </span>

                        <span className='flex justyfy-between w-[48%] h-full text-[#ffffff]'>
                            <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>03</p>

                            <p className='w-[85%] font-["Good_Timing"] font-bold'>По итогам отборочных в полуфинал проходит <b className='text-[#bf5af2]'>10 команд</b>. В финале примут участие <b className='text-[#bf5af2]'>4 команды</b>.</p>
                        </span>
                    </div>

                    <div className='flex justify-between w-full h-[110px]'>
                        <span className='flex justyfy-between w-[48%] text-[#ffffff]'>
                            <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>02</p>

                            <p className='mt-[50px] w-[85%] font-["Good_Timing"] font-bold'>Участники должны быть не старше <b className='text-[#bf5af2]'>25 лет</b></p>
                        </span>

                        <span className='flex justyfy-between w-[48%] text-[#ffffff]'>
                            <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>04</p>

                            <p className='mt-[30px] w-[85%] font-["Good_Timing"] font-bold'>В полуфинале от одного учебного заведения — <b className='text-[#bf5af2]'>не более 2х команд</b></p>
                        </span>
                    </div>

                    <p className='mt-[50px] w-[50%] text-[#ffffff] text-[1.125rem] font-["Good_Timing"] font-bold'>*подробнее ознакомиться с правилами можно в разделе <b className='text-[#bf5af2]'>«ОФИЦИАЛЬНЫЕ ДОКУМЕНТЫ»</b></p>
                </section>

                <section className='mt-[120px] pb-[100px] px-[10%] w-full'>
                    <img src='/static/infoPage/text/FAQText.svg' alt='FAQ' className='w-[40%] pb-[50px]'/>

                    {paragraphs.map((paragraph:Paragraph) => (
                        <div key={paragraph.id} className='mt-[30px] pb-[20px] h-auto border-b-2 border-[#bf5af2]'>
                            <div className='flex justify-between items-center w-[calc(100%-12.5px)] h-[50px]'>
                                <h3 className='w-[70%] text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>{paragraph.title}</h3>

                                <button className='w-[20px] h-[20px] outline-none' onClick={() => {paragraph.isOpen = !paragraph.isOpen; setParagraphs([...paragraphs])}}>
                                    {paragraph.isOpen ? <img src='/static/infoPage/icon/XmarkIcon.svg' alt='Закрыть' className='w-full h-full'/> : <img src='/static/infoPage/icon/XmarkIcon.svg' alt='Открыть' className='w-full h-full rotate-45'/>}
                                </button>
                            </div>

                            {paragraph.isOpen && <p dangerouslySetInnerHTML={{ __html: paragraph.text}} className='mt-[30px] pb-[20px] text-[#ffffff] text-[1rem]'></p>}
                        </div>
                    ))}
                </section>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;