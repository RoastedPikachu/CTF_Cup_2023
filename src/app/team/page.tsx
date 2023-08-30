import React from 'react';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

const Page = () => {
    return (
        <>
            <TheHeader/>

            <main className='px-[15%] w-full h-auto'>
                <section>
                    <img src='/static/KomandaOrgText.svg' alt='Команда/оргкомитет' className='w-full'/>

                    <div className='flex justify-between mt-[80px] ml-[200px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/PyarinViktorAvatar.svg' alt='Пярин Виктор Анатольевич' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ПЯРИН ВИКТОР АНАТОЛЬЕВИЧ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Председатель оргкомитета — действительный член АИН, член-корреспондент РАЕН и Академии Криптографии, лауреат Государственной премии, к.ф-м.н</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[50px] ml-[600px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/BarhatovDmitriyAvatar.svg' alt='Бархатов Дмитрий' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>БАРХАТОВ ДМИТРИЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Управляющий директор по информационной безопасности, ПАО АФК «Система»</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[20px] ml-[200px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/BenginVladimirAvatar.svg' alt='Бенгин Владимир' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>БЕНГИН ВЛАДИМИР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Директор Департамента обеспечения кибербезопасности, Министерства цифрового развития, связи, массовых коммуникаций Российской Федерации</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-20px] ml-[700px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/BudnikovAlexandrAvatar.svg' alt='Будников Александр' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>БУДНИКОВ АЛЕКСАНДР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Управляющий директор по информационной безопасности, ПАО АФК «Система»</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[50px] w-[380px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'></div>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ВОЙНОВ ЮРИЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>ВРИО начальника Департамента информационных технологий, связи и защиты информации МВД России</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-80px] ml-[500px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/BykovRomanAvatar.svg' alt='Быков Роман' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>БЫКОВ РОМАН</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Директор <strong>RuCTF</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[70px] ml-[150px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/GorbatkoAlexandrAvatar.svg' alt='Горбатько Александр' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ГОРБАТЬКО АЛЕКСАНДР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Заместитель руководителя Департамента информационных технологий города Москвы</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-140px] ml-[700px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/IzbaenkovArtemAvatar.svg' alt='Избаенков Артём' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ИЗБАЕНКОВ АРТЁМ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Директор по развитию направления кибербезопасности «<strong>EdgeCenter</strong>»</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[80px] ml-[350px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/MasalovichAndreyAvatar.svg' alt='Масалович Андрей' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>МАСАЛОВИЧ АНДРЕЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Генеральный директор ООО «Лавина Пульс»</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[10px] ml-[700px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/UliannikovaOksanaAvatar.svg' alt='Ульянникова Оксана' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>УЛЬЯННИКОВА ОКСАНА</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Руководитель перспективных проектов в области информационной безопасности Кластер информационных технологий | ФОНД СКОЛКОВО</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-50px] ml-[-50px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/ChernovMaksimAvatar.svg' alt='Чернов Максим' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ЧЕРНОВ МАКСИМ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Директор по направлению «Информационная инфраструктура» АНО «Цифровая экономика»</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[30px] ml-[350px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/MininViktorAvatar.svg' alt='Минин Виктор' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>МИНИН ВИКТОР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Генеральный директор ООО «Лавина Пульс»</p>
                        </span>
                    </div>
                </section>

                <section className='mt-[150px]'>
                    <img src='/static/KomandaProjectText.svg' alt='Команда/проектная' className='w-full'/>
                </section>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;