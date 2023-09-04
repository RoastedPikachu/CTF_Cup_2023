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
            text: 'Да, в этом году в Смешанном зачете могут принять участие любые люди не старше <strong style="color: #bf5af2;">25 лет (включительно)</strong>'
        },
        {
            id: 2,
            title: 'Какой зачет нам выбрать, если мы студенты, но у нас есть школьник в составе?',
            isOpen: false,
            text: 'В любой непонятной ситуации выбирайте <strong style="color: #bf5af2;">Смешанный зачет</strong>. Школьный только для школьников, а Академический — для студентов одного вуза (или колледжа).'
        },
        {
            id: 3,
            title: 'Могут ли пройти на финал иностранные команды',
            isOpen: false,
            text: 'Теоретически — да. А на практике каждая заявка иностранной команды будет рассматриваться в индивидуальном порядке Национальной Ассоциацией международной информационной безопасности, так что гарантировать <strong>100%</strong> вероятность прохождения мы, увы, не можем.'
        },
        {
            id: 4,
            title: 'Приз — один на три зачета?',
            isOpen: false,
            text: 'А вот и нет — победитель <strong style="color: #bf5af2;">каждого из трех</strong> зачетов получит и денежный приз, и <strong style="color: #bf5af2;">свой экземпляр кубка</strong> ;)'
        },
        {
            id: 5,
            title: 'Когда будут известны результаты отборочного тура?',
            isOpen: false,
            text: 'Мы постараемся опубликовать результаты как можно скорее — но обычно нам нужно <strong style="color: #bf5af2;">2-3 дня</strong>, чтобы точно проверить результаты: за это время убедимся, что <ul><li>никто из команд не спутал зачеты,</li><li>предоставил всю информацию в регистрации,</li><li>не жульничал во время этапа.</li></ul>'
        },
        {
            id: 6,
            title: 'Сколько этапов ждут школьников?',
            isOpen: false,
            text: 'В школьном зачете всего <strong style="color: #bf5af2;">два этапа</strong>: общий с остальными участниками <strong style="color: #bf5af2;">отборочный этап</strong>, а также <strong style="color: #bf5af2;">очный финал в декабре</strong>.'
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

                <img src='/static/infoPage/background/InfoBgImage2.svg' alt='Пузырик2' className='absolute mt-[1000px] left-[-100px] z-[-1] scale-[0.9]'/>

                <section className='px-[10%] w-full'>
                    <img src='/static/infoPage/text/PravilaText.svg' alt='Правила' className='w-[60%]'/>

                    <div className='flex justify-between mt-[80px] w-full h-[250px]'>
                        <span className='flex justyfy-between w-[45%] h-full text-[#ffffff]'>
                            <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>01</p>

                            <p className='mt-[10px] w-[85%] font-["Good_Timing"] font-bold'>В отборочном этапе могут участвовать <strong className='text-[#bf5af2]'>студенческие</strong> и <strong className='text-[#bf5af2]'>школьные</strong> команды размером <strong className='text-[#bf5af2]'>5-7</strong> человек</p>
                        </span>

                        <span className='flex justyfy-between w-[45%] h-full text-[#ffffff]'>
                            <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>03</p>

                            <p className='w-[85%] font-["Good_Timing"] font-bold'>По итогам отборочных в полуфинал проходит <strong className='text-[#bf5af2]'>10 команд</strong>. В финале примут участие <strong className='text-[#bf5af2]'>4 команды</strong>.</p>
                        </span>
                    </div>

                    <div className='flex justify-between w-full h-[110px]'>
                        <span className='flex justyfy-between w-[45%] text-[#ffffff]'>
                            <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>02</p>

                            <p className='mt-[50px] w-[85%] font-["Good_Timing"] font-bold'>Участники должны быть не старше <strong className='text-[#bf5af2]'>25 лет</strong></p>
                        </span>

                        <span className='flex justyfy-between w-[45%] text-[#ffffff]'>
                            <p className='mt-[-40px] text-[8rem] font-["DaMiOne"]'>04</p>

                            <p className='mt-[30px] w-[85%] font-["Good_Timing"] font-bold'>В полуфинале от одного учебного заведения — <strong className='text-[#bf5af2]'>не более 2х команд</strong></p>
                        </span>
                    </div>

                    <p className='mt-[50px] w-[50%] text-[#ffffff] text-[1.125rem] font-["Good_Timing"] font-bold'>*подробнее ознакомиться с правилами можно в разделе <strong className='text-[#bf5af2]'>«ОФИЦИАЛЬНЫЕ ДОКУМЕНТЫ»</strong></p>
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