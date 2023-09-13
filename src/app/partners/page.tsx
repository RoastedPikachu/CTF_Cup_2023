import React from 'react';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

const Page = () => {
    return (
        <>
            <TheHeader/>

            <main className='mx-[15%] pb-[100px] w-full'>
                <img src='/static/partnersPage/text/PartnersText.png' alt='Партнеры' className=' mt-[50px] w-[35%]'/>

                <div className='flex items-center mt-[60px] h-[60px]'>
                    <p className='text-[#ffffff] text-[2rem] font-["DaMiOne"]'>СТАНЬТЕ ЧАСТЬЮ</p>

                    <img src='/static/partnersPage/text/SevenCupText.png' alt='VII Кубка CTF' className='ml-[50px] w-[500px] h-[40px] scale-[1.1]'/>
                </div>

                <h3 className='mt-[40px] w-[40%] text-[#ffffff] text-[1.125rem] font-["Good_Timing"] leading-[1.75]'>Приглашаем к сотрудничеству ИТ и ИБ-компании. <br/> Напишите нам, если хотите поддержать развитие <br/> сообщества информационной безопасности России.</h3>

                <p className='mt-[20px] w-[40%] text-[#ffffff] text-[1rem]'>Кубок CTF ежегодно собирает несколько тысяч молодых айти-специалистов: в отборочном туре участвуют свыше 300 команд студентов и молодых проффесионалов, а финал помогает выявить самых талантливых участников. Поддержка такого мероприятия помогает с развитием HR-бренда, повышает узнаваемость компании и закрывает маркетинговые потребности организаций любого масштаба.</p>

                <a href='mailto:mnv@aciso.ru' className='flex justify-center items-center mt-[40px] ml-[300px] w-[320px] h-[55px] border-2 border-[#bf5af2] rounded-[30px] text-[#bf5af2] text-[1rem] font-["Good_Timing"] outline-none'>Обсудить сотрудничество</a>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;