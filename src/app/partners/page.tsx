'use client';
import React from 'react';

import { useAppSelector } from "@/store/storeHooks";
import { RootState } from "@/store";

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

const Page = () => {
    const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

    return (
        <>
            <TheHeader/>

            <main className='deskWide:mx-[calc((100%-1440px)/2)] px-[10%] deskWide:px-[0px] mlarge:px-[5%] pb-[100px] w-full max-w-[1440px]'>
                <img src='/static/partnersPage/text/PartnersText.svg' alt='Партнеры' className='mt-[50px] mlarge:mt-[20px] mmedium:mt-[15px] msmall:mt-[10px] w-[50%] mlarge:w-[65%]'/>

                <div className='flex items-center mlarge:block mt-[60px] mlarge:mt-[50px] msmall:mt-[30px] h-[60px] mlarge:h-[100px]'>
                    <p className='text-[#ffffff] text-[2rem] mlarge:text-[1.5rem] msmall:text-[1.375rem] font-["DaMiOne"]'>СТАНЬТЕ ЧАСТЬЮ</p>

                    <img src='/static/partnersPage/text/SeventhCupText.svg' alt='VII Кубка CTF' className='mlarge:mt-[15px] ml-[50px] mlarge:ml-[0px] w-[500px] h-[40px] mlarge:h-[35px] msmall:h-[30px] scale-[1.1] mlarge:scale-[1]'/>
                </div>

                {!isMobile ?
                    <h3 className='mt-[40px] w-[55%] text-[#ffffff] text-[1.125rem] font-["Good_Timing"] leading-[1.75]'>Приглашаем к сотрудничеству ИТ и ИБ-компании. <br/> Напишите нам, если хотите поддержать развитие <br/> сообщества информационной безопасности России.</h3>
                :
                    <h3 className='mt-[40px] msmall:mt-[20px] w-[40%] mlarge:w-full text-[#ffffff] text-[1.125rem] msmall:text-[1rem] font-["Good_Timing"] leading-[1.75]'>Приглашаем к сотрудничеству <br/> ИТ и ИБ-компании. Напишите нам, если хотите поддержать развитие <br/> сообщества информационной безопасности России.</h3>
                }

                <p className='mt-[20px] w-[50%] mlarge:w-full text-[#ffffff] text-[1rem] msmall:text-[0.875rem] mlarge:leading-[1.75rem]'>Кубок CTF ежегодно собирает несколько тысяч молодых айти-специалистов: в отборочном туре участвуют свыше 300 команд студентов и молодых проффесионалов, а финал помогает выявить самых талантливых участников. Поддержка такого мероприятия помогает с развитием HR-бренда, повышает узнаваемость компании и закрывает маркетинговые потребности организаций любого масштаба.</p>

                <a href='mailto:mnv@aciso.ru' className='flex justify-center items-center mt-[40px] ml-[220px] mlarge:ml-[0px] w-[320px] mmedium:w-[300px] msmall:w-[280px] h-[55px] mmedium:h-[50px] msmall:h-[45px] border-2 border-[#bf5af2] rounded-[30px] text-[#bf5af2] text-[1rem] font-["Good_Timing"] outline-none'>Обсудить сотрудничество</a>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;