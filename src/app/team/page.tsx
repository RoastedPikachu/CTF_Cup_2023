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
                        mt={'80px'}
                        ml={'200px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BarhatovDmitriyAvatar.svg'}
                        personDescription={'Бархатов Дмитрий'}
                        personText={'Управляющий директор по информационной безопасности, ПАО АФК «Система»'}
                        mt={'50px'}
                        ml={'600px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BenginVladimirAvatar.svg'}
                        personDescription={'Бенгин Владимир'}
                        personText={'Директор Департамента обеспечения кибербезопасности, Министерства цифрового развития, связи, массовых коммуникаций Российской Федерации'}
                        mt={'20px'}
                        ml={'200px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BudnikovAlexandrAvatar.svg'}
                        personDescription={'Будников Александр'}
                        personText={'Управляющий директор по информационной безопасности, ПАО АФК «Система»'}
                        mt={'-20px'}
                        ml={'700px'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Войнов Юрий'}
                        personText={'ВРИО начальника Департамента информационных технологий, связи и защиты информации МВД России'}
                        mt={'50px'}
                        ml={'0px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BykovRomanAvatar.svg'}
                        personDescription={'Быков Роман'}
                        personText={'Директор <strong>RuCTF</strong>'}
                        mt={'-80px'}
                        ml={'500px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/GorbatkoAlexandrAvatar.svg'}
                        personDescription={'Горбатько Александр'}
                        personText={'Заместитель руководителя Департамента информационных технологий города Москвы'}
                        mt={'70px'}
                        ml={'150px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/IzbaenkovArtemAvatar.svg'}
                        personDescription={'Избаенков Артём'}
                        personText={'Директор по развитию направления кибербезопасности «<strong>EdgeCenter</strong>»'}
                        mt={'-140px'}
                        ml={'700px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/MasalovichAndreyAvatar.svg'}
                        personDescription={'Масалович Андрей'}
                        personText={'Генеральный директор ООО «Лавина Пульс»'}
                        mt={'80px'}
                        ml={'350px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/UliannikovaOksanaAvatar.svg'}
                        personDescription={'Ульянникова Оксана'}
                        personText={'Руководитель перспективных проектов в области информационной безопасности Кластер информационных технологий | ФОНД СКОЛКОВО'}
                        mt={'10px'}
                        ml={'700px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/ChernovMaksimAvatar.svg'}
                        personDescription={'Чернов Максим'}
                        personText={'Директор по направлению «Информационная инфраструктура» АНО «Цифровая экономика»'}
                        mt={'-50px'}
                        ml={'-50px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/MininViktorAvatar.svg'}
                        personDescription={'Минин Виктор'}
                        personText={'Генеральный директор ООО «Лавина Пульс»'}
                        mt={'30px'}
                        ml={'350px'}
                    />
                </section>

                <section className='mt-[150px] pb-[100px]'>
                    <img src='/static/teamPage/text/KomandaProjectText.svg' alt='Команда/проектная' className='w-full'/>

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SobolevaAlisaAvatar.svg'}
                        personDescription={'Соболева Алиса'}
                        personText={'Менеджер проектов'}
                        mt={'80px'}
                        ml={'200px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SmirnovMaksimAvatar.svg'}
                        personDescription={'Смирнов Максим'}
                        personText={'Технический директор'}
                        mt={'-30px'}
                        ml={'600px'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Логинова Дарья'}
                        personText={'Руководитель команды разработчиков, <strong>C4T BuT S4D</strong>'}
                        mt={'-20px'}
                        ml={'0px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/RublevaMargarita.svg'}
                        personDescription={'Рублёва Маргарита'}
                        personText={'Web-дизайнер'}
                        mt={'-10px'}
                        ml={'400px'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Мануйлова Наталья'}
                        personText={'Web-дизайнер'}
                        mt={'30px'}
                        ml={'750px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/EmelianovEvgeniyAvatar.svg'}
                        personDescription={'Емельянов Евгений'}
                        personText={'Технический специалист'}
                        mt={'-10px'}
                        ml={'150px'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Мария Белова'}
                        personText={'Редактор'}
                        mt={'-60px'}
                        ml={'550px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SergeyKuznetsovAvatar.svg'}
                        personDescription={'Сергей Кузнецов'}
                        personText={'Администратор'}
                        mt={'-10px'}
                        ml={'-50px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/DanilShirshovAvatar.svg'}
                        personDescription={'Даниил Ширшов'}
                        personText={'Администратор'}
                        mt={'-10px'}
                        ml={'350px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ArtyomMicheevAvatar.svg'}
                        personDescription={'Артем Михеев'}
                        personText={'Разработчик, <strong>CBS</strong>'}
                        mt={'-10px'}
                        ml={'750px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/MukovkinDmitriyAvatar.svg'}
                        personDescription={'Муковкин Дмитрий'}
                        personText={'Разработчик, ЦФТ'}
                        mt={'-10px'}
                        ml={'150px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ZaitsevGeorgiyAvatar.svg'}
                        personDescription={'Зайцев Георгий'}
                        personText={'Разработчик, <strong>KKS</strong>'}
                        mt={'-60px'}
                        ml={'550px'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Анфиногенов Максим'}
                        personText={'Разработчик, <strong>KKS</strong>'}
                        mt={'-10px'}
                        ml={'-50px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/PodobaevMaksimAvatar.svg'}
                        personDescription={'Подобаев Максим'}
                        personText={'Разработчик, <strong>UserGate</strong>'}
                        mt={'-10px'}
                        ml={'350px'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Бекетов Никита'}
                        personText={'Разработчик'}
                        mt={'-10px'}
                        ml={'750px'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Бекетов Никита'}
                        personText={'Разработчик'}
                        mt={'-10px'}
                        ml={'750px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KiguradzeGeorgiyAvatar.svg'}
                        personDescription={'Кигурадзе Георгий'}
                        personText={'Разработчик, <strong>CBS</strong>'}
                        mt={'-10px'}
                        ml={'150px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/MartensPavelAvatar.svg'}
                        personDescription={'Мартенс Павел'}
                        personText={'Разработчик, <strong>UserGate</strong>'}
                        mt={'-60px'}
                        ml={'550px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KedikIlyaAvatar.svg'}
                        personDescription={'Кедик Илья'}
                        personText={'Разработчик, <strong>UserGate</strong>'}
                        mt={'-60px'}
                        ml={'-50px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/NikitinRomanAvatar.svg'}
                        personDescription={'Никитин Роман'}
                        personText={'DevOps, <strong>CBS</strong>'}
                        mt={'-10px'}
                        ml={'350px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ZeunovAntonAvatar.svg'}
                        personDescription={'Зеунов Антон'}
                        personText={'Разработчик'}
                        mt={'100px'}
                        ml={'150px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KarginAlexandrAvatar.svg'}
                        personDescription={'Каргин Александр'}
                        personText={'Разработчик, <strong>HackerDom</strong>'}
                        mt={'-60px'}
                        ml={'550px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/HairutdinovDaniyarAvatar.svg'}
                        personDescription={'Хайрутдинов Данияр'}
                        personText={'Разработчик, <strong>HackerDom</strong>'}
                        mt={'-60px'}
                        ml={'-50px'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Черепанов Владимир'}
                        personText={'Разработчик, <strong>HackerDom</strong>'}
                        mt={'-10px'}
                        ml={'350px'}
                    />

                    <PersonInfo
                        imgPath={''}
                        personDescription={'Сергеев Андрей'}
                        personText={'Разработчик, <strong>KKS</strong>'}
                        mt={'-10px'}
                        ml={'750px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KotovAlexandrAvatar.svg'}
                        personDescription={'Котов Александр'}
                        personText={'Директор, <strong>HackerDom</strong>'}
                        mt={'-80px'}
                        ml={'150px'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/GrekovIlyaAvatar.svg'}
                        personDescription={'Греков Илья'}
                        personText={'TeamLead, <strong>CBS</strong>'}
                        mt={'-60px'}
                        ml={'550px'}
                    />
                </section>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;