'use client';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "@/store/storeHooks";
import { mobileSlice } from "@/store/storeReducers/MobileSlice";
import { RootState } from '@/store';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';
import TheMobileHeader from "@/widgets/shared/TheMobileHeader";

import PersonInfo from '@/widgets/shared/PersonInfo';

const Page = () => {
    const dispatch = useAppDispatch();

    const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

    const { setIsMobileStatus } = mobileSlice.actions;

    useEffect(() => {
        dispatch(setIsMobileStatus(window.innerWidth < 480));
    }, []);

    return (
        <>
            {!isMobile ? <TheHeader/> : <TheMobileHeader/>}

            <main className='mt-[50px] px-[15%] w-full h-auto'>
                <section>
                    <img src='/static/teamPage/text/KomandaOrgText.svg' alt='Команда/оргкомитет' className='w-full'/>

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/PyarinViktorAnatolievichAvatar.svg'}
                        personDescription={'Пярин Виктор Анатольевич'}
                        personText={'Председатель оргкомитета — действительный член АИН, член-корреспондент РАЕН и Академии Криптографии, лауреат Государственной премии, к.ф-м.н'}
                        styles={'mt-[80px] ml-[200px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BarhatovDmitriyAvatar.svg'}
                        personDescription={'Бархатов Дмитрий'}
                        personText={'Управляющий директор по информационной безопасности, ПАО АФК «Система»'}
                        styles={'mt-[50px] ml-[600px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BenginVladimirAvatar.svg'}
                        personDescription={'Бенгин Владимир'}
                        personText={'Директор Департамента обеспечения кибербезопасности, Министерства цифрового развития, связи, массовых коммуникаций Российской Федерации'}
                        styles={'mt-[20px] ml-[200px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BudnikovAlexandrAvatar.svg'}
                        personDescription={'Будников Александр'}
                        personText={'Управляющий директор по информационной безопасности, ПАО АФК «Система»'}
                        styles={'mt-[-20px] ml-[700px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/VoinovUriyAvatar.svg'}
                        personDescription={'Войнов Юрий'}
                        personText={'ВРИО начальника Департамента информационных технологий, связи и защиты информации МВД России'}
                        styles={'mt-[50px] ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BykovRomanAvatar.svg'}
                        personDescription={'Быков Роман'}
                        personText={'Директор <strong>RuCTF</strong>'}
                        styles={'mt-[-80px] ml-[500px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/GorbatkoAlexandrAvatar.svg'}
                        personDescription={'Горбатько Александр'}
                        personText={'Заместитель руководителя Департамента информационных технологий города Москвы'}
                        styles={'mt-[70px] ml-[150px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/IzbaenkovArtemAvatar.svg'}
                        personDescription={'Избаенков Артём'}
                        personText={'Директор по развитию направления кибербезопасности «<strong>EdgeCenter</strong>»'}
                        styles={'mt-[-140px] ml-[700px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/MasalovichAndreyAvatar.svg'}
                        personDescription={'Масалович Андрей'}
                        personText={'Генеральный директор ООО «Лавина Пульс»'}
                        styles={'mt-[80px] ml-[350px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/UliannikovaOksanaAvatar.svg'}
                        personDescription={'Ульянникова Оксана'}
                        personText={'Руководитель перспективных проектов в области информационной безопасности Кластер информационных технологий | ФОНД СКОЛКОВО'}
                        styles={'mt-[10px] ml-[700px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/ChernovMaksimAvatar.svg'}
                        personDescription={'Чернов Максим'}
                        personText={'Директор по направлению «Информационная инфраструктура» АНО «Цифровая экономика»'}
                        styles={'mt-[-50px] ml-[-50px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/MininViktorAvatar.svg'}
                        personDescription={'Минин Виктор'}
                        personText={'Генеральный директор ООО «Лавина Пульс»'}
                        styles={'mt-[30px] ml-[350px]'}
                    />
                </section>

                <section className='mt-[150px] pb-[100px]'>
                    <img src='/static/teamPage/text/KomandaProjectText.svg' alt='Команда/проектная' className='w-full'/>

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SobolevaAlisaAvatar.svg'}
                        personDescription={'Соболева Алиса'}
                        personText={'Менеджер проектов'}
                        styles={'mt-[80px] ml-[200px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SmirnovMaksimAvatar.svg'}
                        personDescription={'Смирнов Максим'}
                        personText={'Технический директор'}
                        styles={'mt-[-30px] ml-[600px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/LoginovaDaryaAvatar.svg'}
                        personDescription={'Логинова Дарья'}
                        personText={'Руководитель команды разработчиков, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[-20px] ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/RublevaMargaritaAvatar.svg'}
                        personDescription={'Рублёва Маргарита'}
                        personText={'Web-дизайнер'}
                        styles={'mt-[-10px] ml-[400px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ManuilovaNataliaAvatar.svg'}
                        personDescription={'Мануйлова Наталья'}
                        personText={'Организатор'}
                        styles={'mt-[30px] ml-[750px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/EmelianovEvgeniyAvatar.svg'}
                        personDescription={'Емельянов Евгений'}
                        personText={'Технический специалист'}
                        styles={'mt-[-10px] ml-[150px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/BelovaMariaAvatar.svg'}
                        personDescription={'Мария Белова'}
                        personText={'Редактор'}
                        styles={'mt-[-60px] ml-[550px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SergeyKuznetsovAvatar.svg'}
                        personDescription={'Сергей Кузнецов'}
                        personText={'Администратор'}
                        styles={'mt-[-10px] ml-[-50px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/DanilShirshovAvatar.svg'}
                        personDescription={'Даниил Ширшов'}
                        personText={'Администратор'}
                        styles={'mt-[-10px] ml-[350px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ArtyomMicheevAvatar.svg'}
                        personDescription={'Артем Михеев'}
                        personText={'Разработчик, <strong>CBS</strong>'}
                        styles={'mt-[-10px] ml-[750px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/AvdeevaElizavetaAvatar.svg'}
                        personDescription={'Авдеева Елизавета'}
                        personText={'Разработчик'}
                        styles={'mt-[-10px] ml-[150px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/FedotovIvanAvatar.svg'}
                        personDescription={'Федотов Аватар'}
                        personText={'Разработчик'}
                        styles={'mt-[-60px] ml-[550px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/PokrovskiyNikitaAvatar.svg'}
                        personDescription={'Покровский Никита'}
                        personText={'Разработчик'}
                        styles={'mt-[-10px] ml-[-50px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/NikitinRomanAvatar.svg'}
                        personDescription={'Никитин Роман'}
                        personText={'DevOps, <strong>CBS</strong>'}
                        styles={'mt-[-10px] ml-[350px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KhakimovLevAvatar.svg'}
                        personDescription={'Хакимов Лев'}
                        personText={'Технический специалист'}
                        styles={'mt-[-10px] ml-[750px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ZeunovAntonAvatar.svg'}
                        personDescription={'Зеунов Антон'}
                        personText={'Разработчик'}
                        styles={'mt-[100px] ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/GrekovIlyaAvatar.svg'}
                        personDescription={'Греков Илья'}
                        personText={'TeamLead, <strong>CBS</strong>'}
                        styles={'mt-[0px] ml-[550px]'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Вячеслав Лукин'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[80px] ml-[150px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KokorinVsevolodAvatar.svg'}
                        personDescription={'Кокорин Всеволод'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong'}
                        styles={'mt-[-60px] ml-[550px]'}
                    />
                </section>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;