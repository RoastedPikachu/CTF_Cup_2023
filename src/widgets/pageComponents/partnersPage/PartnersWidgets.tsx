'use client';
import React from 'react';

import { useAppSelector } from "@/store/storeHooks";
import { RootState } from "@/store";

const PartnersWidgets = () => {
    const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

    return (
        <>
            {!isMobile ?
                <div className='relative mt-[80px] w-[90%]'>
                    <img src='/static/partnersPage/background/PartnersBgImage1.png' alt='Пузырик1' className='absolute mt-[-170px] ml-[-500px] scale-[1.25]'/>

                    <img src='/static/partnersPage/background/PartnersBgImage2.png' alt='Пузырик2' className='absolute mt-[60px] ml-[400px] scale-[1.25]'/>

                    <img src='/static/partnersPage/background/PartnersBgImage3.png' alt='Пузырик3' className='absolute mt-[650px] ml-[-500px] scale-[1.15]'/>

                    <div className='flex justify-between w-full h-[300px]'>
                        <div className='p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Стань частью VII Кубка CTF</h3>

                            <p className='mt-[10px] text-[rgba(255,255,255,0.78)] text-[0.875rem] font-["Good_Timing"]'>Приглашаем к сотрудничеству ИТ и ИБ компании. Напишите нам, если хотите поддержать развитие сообщества информационной безопасности в России.</p>

                            <a href='mailto:mnv@aciso.ru' className='flex justify-center items-center mt-[30px] w-full h-[40px] bg-[rgba(217,217,217,0.03)] rounded-[30px] backdrop-blur-sm text-[#bf5af2] text-[0.875rem] font-["Good_Timing"] outline-none'>Обсудить сотрудничество</a>
                        </div>

                        <div className='relative p-[20px] w-[66%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Партнеры</h3>

                            <div className='flex justify-between items-center mt-[100px] ml-[20px] w-[85%]'>
                                <img src='/static/partnersPage/logo/CoordinationalCenterRuLogo.png' alt='Координационный центр доменов .ru/.рф'/>

                                <img src='/static/partnersPage/logo/ArmadaMediaGroupLogo.png' alt='Армада Медиа груп' className='scale-[1.1]'/>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex justify-between mt-[20px] w-full h-[300px]'>
                        <div className='p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Партнер призового фонда</h3>

                            <img src='/static/partnersPage/logo/NTCVulkanLogo.png' alt='НТЦ Вулкан' className='absolute bottom-[30px] right-[30px]'/>
                        </div>

                        <div className='p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-t-[20px]'>
                            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Технологические партнеры</h3>

                            <img src='/static/partnersPage/logo/EdgeCenterLogo.png' alt='Edge центр' className='mt-[80px] ml-[50px]'/>
                        </div>

                        <div className='p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Генеральный информационный партнер</h3>

                            <img src='/static/partnersPage/logo/HackerNewsLogo.png' alt='Hacker news' className='absolute bottom-[30px] right-[20px]'/>
                        </div>
                    </div>

                    <div className='relative flex justify-between w-full h-[300px]'>
                        <div className='mt-[20px] p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-t-[20px]'>
                            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Информационные партнеры</h3>

                            <img src='/static/partnersPage/logo/CTFNewsLogo.png' alt='CTF News' className='mt-[60px] ml-[20px]'/>
                        </div>

                        <div className='p-[20px] w-[32%] h-[320px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-b-[20px]'>
                            <img src='/static/partnersPage/logo/UserGateLogo.png' alt='User Gate' className='mt-[-30px]'/>

                            <img src='/static/partnersPage/logo/CBSLogo.png' alt='CBS' className='absolute bottom-[50px] right-[40px]'/>
                        </div>

                        {/*Нижние 2 div-а необходимы для создания скоса*/}

                        <div className='absolute mt-[332.5px] ml-[67.2%] w-[7.5px] h-[7.5px] bg-[rgba(255,255,255,0.04)] z-[15]'></div>

                        <div className='absolute mt-[330px] ml-[67%] w-[10px] h-[10px] bg-[#0d0d0d] rounded-br-[20px] z-[15]'></div>

                        <div className='mt-[20px] p-[20px] w-[32%] h-[320px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-t-[20px]'>
                            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>При поддержке</h3>

                            <div className='flex justify-between items-center mt-[30px] w-[95%]'>
                                <img src='/static/partnersPage/logo/GerbLogo1.png' alt='Герб1'/>

                                <img src='/static/partnersPage/logo/GerbLogo2.png' alt='Герб2'/>
                            </div>

                            <img src='/static/partnersPage/logo/GerbLogo3.png' alt='Герб3' className='ml-[50px]'/>
                        </div>
                    </div>

                    <div className='relative flex justify-between mt-[20px] w-full h-[300px]'>
                        <div className='p-[20px] w-[32%] h-[320px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-b-[20px]'>
                            <img src='/static/partnersPage/logo/VkontakteLogo.png' alt='Вконтакте' className='mt-[10px] ml-[20px]'/>

                            <img src='/static/partnersPage/logo/CodebyLogo.png' alt='Codeby.net' className='absolute bottom-[90px] right-[30px]'/>
                        </div>

                        <div className='relative mt-[20px] p-[20px] w-[66%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-tl-[20px]'>
                            <div className='flex justify-between items-center mt-[20px] mx-[2.5%] w-[95%]'>
                                <img src='/static/partnersPage/logo/BankOfRussiaLogo.png' alt='Банк России'/>

                                <img src='/static/partnersPage/logo/MinistryOfScienceAndHighEducationLogo.png' alt='Министерство науки и высшего образования РФ'/>
                            </div>

                            <div className='flex justify-between items-center mt-[50px] ml-[-5px] w-[95%]'>
                                <img src='/static/partnersPage/logo/MinCifriRossiiLogo.png' alt='Минцифры России'/>

                                <img src='/static/partnersPage/logo/ITDepartmentOfMoscowLogo.png' alt='Департамент информационных технологий города Москвы'/>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex justify-between mt-[20px] w-full h-[150px]'>
                        <div className='relative mt-[20px] p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-t-[20px] z-[10]'>
                            <img src='/static/partnersPage/logo/CTFCupVIILogo.png' alt='VII Кубок CTF 2023' className='mt-[20px] ml-[10px]'/>
                        </div>

                        {/*Нижние 2 div-а необходимы для создания скоса*/}

                        <div className='absolute mt-[162.5px] ml-[32%] w-[7.5px] h-[7.5px] bg-[rgba(255,255,255,0.04)] z-[15]'></div>

                        <div className='absolute mt-[160px] ml-[32%] w-[10px] h-[10px] bg-[#0d0d0d] rounded-bl-[20px] z-[15]'></div>

                        <div className='relative p-[20px] w-[66%] h-[150px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-b-[20px] z-[20]'>
                            <div className='flex justify-between items-center mx-[2.5%] w-[95%]'>
                                <img src='/static/partnersPage/logo/SystemLogo.png' alt='Система - акционерная финансовая корпорация' className='ml-[10px]'/>

                                <img src='/static/partnersPage/logo/GoznakLogo.png' alt='Гознак' className='mr-[100px]'/>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex justify-center items-center mt-[20px] p-[20px] pt-[40px] w-full h-[150px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-b-[20px] rounded-tr-[20px] z-[5]'>
                        <p className='text-[#4f4f4f] text-[1rem] font-["Good_Timing"]'>Кубок CTF ежегодно собирает несколько тысяч молодых айти-специалистов: в отборочном туре участвует свыше 300 команд студентов и молодых профессионалов, а финал помогает выявить самых талантливых участников. Поддержка такого мероприятия помогает с развитием HR-бренда, повышает узнаваемость компании и закрывает маркетинговые потребности организаций любого масштаба.</p>
                    </div>
                </div>
            :
                <div className='relative mt-[40px] w-[90%]'>
                    <img src='/static/partnersPage/background/PartnersBgImage1.png' alt='Пузырик1' className='absolute mt-[20px] ml-[-150px] scale-[2.25]'/>

                    <img src='/static/partnersPage/background/PartnersBgImage2.png' alt='Пузырик2' className='absolute mt-[450px] ml-[30px] scale-[2.5]'/>

                    <img src='/static/partnersPage/background/PartnersBgImage3.png' alt='Пузырик3' className='absolute mt-[1050px] ml-[-150px] scale-[2.25]'/>

                    <div className='p-[30px] w-full h-[320px] mmedium:h-[340px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                        <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Стань частью VII Кубка CTF</h3>

                        <p className='mt-[10px] text-[rgba(255,255,255,0.78)] text-[0.875rem] font-["Good_Timing"]'>Приглашаем к сотрудничеству ИТ и ИБ компании. Напишите нам, если хотите поддержать развитие сообщества информационной безопасности в России.</p>

                        <a href='mailto:mnv@aciso.ru' className='flex justify-center items-center mt-[40px] w-full h-[40px] bg-[rgba(217,217,217,0.03)] rounded-[30px] backdrop-blur-sm text-[#bf5af2] text-[0.875rem] font-["Good_Timing"] outline-none'>Обсудить сотрудничество</a>
                    </div>

                    <div className='relative mt-[20px] p-[30px] w-full h-[380px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                        <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Партнеры</h3>

                        <div className='relative mt-[40px] ml-[20px] w-full h-[280px]'>
                            <img src='/static/partnersPage/logo/CoordinationalCenterRuLogo.png' alt='Координационный центр доменов .ru/.рф' className='ml-[-20px]'/>

                            <img src='/static/partnersPage/logo/ArmadaMediaGroupLogo.png' alt='Армада Медиа груп' className='absolute bottom-[30px] right-[30px] scale-[1.1]'/>
                        </div>
                    </div>

                    <div className='relative mt-[20px] p-[20px] w-full h-[320px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                        <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Партнер призового фонда</h3>

                        <img src='/static/partnersPage/logo/NTCVulkanLogo.png' alt='НТЦ Вулкан' className='absolute bottom-[30px] right-[30px]'/>
                    </div>

                    <div className='mt-[20px] p-[30px] w-full h-[650px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                        <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Технологические партнеры</h3>

                        <img src='/static/partnersPage/logo/EdgeCenterLogo.png' alt='Edge центр' className='mt-[80px] ml-[50px] mmedium:ml-[30px]'/>

                        <img src='/static/partnersPage/logo/UserGateLogo.png' alt='User Gate' className='mt-[70px]'/>

                        <img src='/static/partnersPage/logo/CBSLogo.png' alt='CBS' className='absolute bottom-[50px] right-[40px]'/>
                    </div>

                    <div className='mt-[20px] p-[30px] w-full h-[320px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                        <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Генеральный информационный партнер</h3>

                        <img src='/static/partnersPage/logo/HackerNewsLogo.png' alt='Hacker news' className='absolute bottom-[30px] right-[20px]'/>
                    </div>

                    <div className='mt-[20px] p-[30px] w-full h-[650px] mmedium:h-[630px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                        <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>Информационные партнеры</h3>

                        <img src='/static/partnersPage/logo/CTFNewsLogo.png' alt='CTF News' className='mt-[60px] ml-[10px] mmedium:ml-[0px] scale-[1.15] mmedium:scale-[1.05]'/>

                        <img src='/static/partnersPage/logo/VkontakteLogo.png' alt='Вконтакте' className='mt-[110px] ml-[20px] mmedium:ml-[0px] scale-[1.15] mmedium:scale-[1.05]'/>

                        <img src='/static/partnersPage/logo/CodebyLogo.png' alt='Codeby.net' className='absolute bottom-[90px] right-[50px] mmedium:right-[30px] scale-[1.15] mmedium:scale-[1.05]'/>
                    </div>

                    <div className='mt-[20px] p-[30px] w-full h-[1100px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                        <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>При поддержке</h3>

                        <div className='flex justify-between items-center mt-[30px] w-full'>
                            <img src='/static/partnersPage/logo/GerbLogo1.png' alt='Герб1'/>

                            <img src='/static/partnersPage/logo/GerbLogo2.png' alt='Герб2'/>
                        </div>

                        <img src='/static/partnersPage/logo/GerbLogo3.png' alt='Герб3' className='ml-[50px] mmedium:ml-[40px]'/>

                        <img src='/static/partnersPage/logo/BankOfRussiaLogo.png' alt='Банк России' className='mt-[50px]'/>

                        <img src='/static/partnersPage/logo/MinistryOfScienceAndHighEducationLogo.png' alt='Министерство науки и высшего образования РФ' className='mt-[50px]'/>

                        <img src='/static/partnersPage/logo/MinCifriRossiiLogo.png' alt='Минцифры России' className='mt-[50px] ml-[-10px]'/>

                        <img src='/static/partnersPage/logo/ITDepartmentOfMoscowLogo.png' alt='Департамент информационных технологий города Москвы' className='mt-[50px] ml-[30px] mmedium:ml-[20px]'/>

                        <img src='/static/partnersPage/logo/SystemLogo.png' alt='Система - акционерная финансовая корпорация' className='mt-[50px] ml-[10px] mmedium:ml-[0px]'/>

                        <img src='/static/partnersPage/logo/GoznakLogo.png' alt='Гознак' className='mt-[50px] ml-[calc(50%-36px)]'/>
                    </div>

                    <div className='mt-[20px] p-[30px] w-full h-[640px] mmedium:h-[580px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]'>
                        <img src='/static/partnersPage/logo/CTFCupVIILogo.png' alt='VII Кубок CTF 2023' className='mt-[20px] ml-[10px] mmedium:ml-[0px] scale-[1.1] mmedium:scale-[1]'/>

                        <p className='mt-[40px] text-[#4f4f4f] text-[1rem] mmedium:text-[0.875rem] font-["Good_Timing"] leading-[1.65]'>Кубок CTF ежегодно собирает несколько тысяч молодых айти-специалистов: в отборочном туре участвует свыше 300 команд студентов и молодых профессионалов, а финал помогает выявить самых талантливых участников. Поддержка такого мероприятия помогает с развитием HR-бренда, повышает узнаваемость компании и закрывает маркетинговые потребности организаций любого масштаба.</p>
                    </div>
                </div>
            }
        </>
    );
};

export default PartnersWidgets;