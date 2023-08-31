import React from 'react';

import TheHeader from '@/widgets/shared/TheHeader';
import TheMobileHeader from '@/widgets/shared/TheMobileHeader';
import TheFooter from '@/widgets/shared/TheFooter';

const Page = () => {
    return (
        <>
            {/*{!isMobile ? <TheHeader/> : <TheMobileHeader/>}*/}

            <main className='relative w-[100vw] h-auto overflow-hidden'>
                <img src='/static/infoPage/text/PravilaText.svg' alt='Правила' className='px-[15%] w-[60%]'/>

                <section className='mt-[100px] px-[15%] w-full'>
                    <div className='flex justify-between w-full h-[150px]'>
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

                <section className='mt-[120px] px-[15%] w-full'>
                    <img src='/static/infoPage/text/FAQText.svg' alt='FAQ' className='w-[40%]'/>


                </section>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;