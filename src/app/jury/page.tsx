'use client';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "@/store/storeHooks";
import { mobileSlice } from "@/store/storeReducers/MobileSlice";
import { RootState } from '@/store';

import TheHeader from '@/widgets/shared/TheHeader';
import TheMobileHeader from '@/widgets/shared/TheMobileHeader';
import TheFooter from '@/widgets/shared/TheFooter';

import PersonInfo from '@/widgets/shared/PersonInfo';

const Page = () => {
    const dispatch = useAppDispatch();

    const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

    const { setIsMobileStatus } = mobileSlice.actions;

    useEffect(() => {
        dispatch(setIsMobileStatus(window.innerWidth < 480));
    }, [])

    return (
        <>
            {!isMobile ? <TheHeader/> : <TheMobileHeader/>}

            <main className='px-[10%] w-full pb-[100px]'>
                <img src='/static/juryPage/text/JuryText.svg' alt='Жюри' className='w-[55%]'/>

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/BudnikovAlexandrAvatar.svg'}
                    personDescription={'Будников Александр'}
                    personText={'Управляющий директор по информационной безопасности, ПАО АФК «Система»'}
                    mt={'80px'}
                    ml={'150px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/BugrovVladimirAvatar.svg'}
                    personDescription={'Бугров Владимир'}
                    personText={'И. О. начальника Департамента по обеспечению информационной безопасности ПФР'}
                    mt={'-10px'}
                    ml={'550px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/VolkovSergeyAvatar.svg'}
                    personDescription={'Волков Сергей'}
                    personText={'Начальник отдела информационной безопасности, АО «ГОЗНАК»'}
                    mt={'80px'}
                    ml={'150px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/DerlishIlyaAvatar.svg'}
                    personDescription={'Дерлыш Илья'}
                    personText={'Эксперт информационной безопасности, Росатом'}
                    mt={'-80px'}
                    ml={'750px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/KaderMichailAvatar.svg'}
                    personDescription={'Кадер Михаил'}
                    personText={'Архитектор по информационной безопасности'}
                    mt={'100px'}
                    ml={'0px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/KuznetsovAndreyAvatar.svg'}
                    personDescription={'Кузнецов Андрей'}
                    personText={'Технический директор Национального Киберполигона «Ростелеком-Солар»'}
                    mt={'-80px'}
                    ml={'550px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/MarkovAlexeyAvatar.svg'}
                    personDescription={'Марков Алексей'}
                    personText={'Президент группы компаний ГК «Эшелон»'}
                    mt={'50px'}
                    ml={'150px'}
                />

                <PersonInfo
                    imgPath={''}
                    personDescription={'Минаков Сергей'}
                    personText={'Старший научный сотрудник Академия криптографии РФ'}
                    mt={'-80px'}
                    ml={'750px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/MasalovichAndreyAvatar.svg'}
                    personDescription={'Масалович Андрей'}
                    personText={'Генеральный директор ООО «Лавина Пульс»'}
                    mt={'40px'}
                    ml={'350px'}
                />

                <PersonInfo
                    imgPath={''}
                    personDescription={'Михайленко Наталья'}
                    personText={'Доцент кафедры противодействия преступлениям в сфере ИТТ, к.ю.н.'}
                    mt={'50px'}
                    ml={'750px'}
                />

                <PersonInfo
                    imgPath={''}
                    personDescription={'Лоскутова Олеся'}
                    personText={'Заместитель начальника центрального вычислительного центра, Главный информационно-аналитический центр МВД России'}
                    mt={'-180px'}
                    ml={'0px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/UsanovAlexeyAvatar.svg'}
                    personDescription={'Усанов Алексей'}
                    personText={'Технический директор НТЦ «Вулкан»'}
                    mt={'40px'}
                    ml={'350px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/OvchinnikovViktorAvatar.svg'}
                    personDescription={'Овчинников Виктор'}
                    personText={'Начальник отдела информационной безопасности, ООО «М13 ИТ УСЛУГИ»'}
                    mt={'140px'}
                    ml={'0px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/SklyarovDmitriyAvatar.svg'}
                    personDescription={'Скляров Дмитрий'}
                    personText={'Руководитель отдела анализа приложений, Positive Technologies'}
                    mt={'-160px'}
                    ml={'550px'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/TsarevGrigoriyAvatar.svg'}
                    personDescription={'Царев Григорий'}
                    personText={'Руководитель направления Центра взаимодействия и реагирования Департамента информационной безопасности Банка России'}
                    mt={'120px'}
                    ml={'150px'}
                />
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;