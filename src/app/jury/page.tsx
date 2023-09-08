'use client';
import React from 'react';

import { useAppSelector } from "@/store/storeHooks";
import { RootState } from '@/store';

import TheHeader from '@/widgets/shared/TheHeader';
import TheMobileHeader from '@/widgets/shared/TheMobileHeader';
import TheFooter from '@/widgets/shared/TheFooter';

import PersonInfo from '@/widgets/shared/PersonInfo';

const Page = () => {
    const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

    return (
        <>
            {!isMobile ? <TheHeader/> : <TheMobileHeader/>}

            <main className='px-[10%] mlarge:px-[5%] w-full pb-[100px]'>
                <img src='/static/juryPage/text/JuryText.svg' alt='Жюри' className='w-[55%] mlarge:w-[60%]'/>

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/BudnikovAlexandrAvatar.svg'}
                    personDescription={'Будников Александр'}
                    personText={'Управляющий директор по информационной безопасности, ПАО АФК «Система»'}
                    styles={'mt-[80px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[0px]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/BugrovVladimirAvatar.svg'}
                    personDescription={'Бугров Владимир'}
                    personText={'Заместитель начальника Департамента технической защиты информации Главного научно-исследовательского вычислительного центра Управления делами Президента Российской Федерации'}
                    styles={'mt-[-10px] mlarge:mt-[50px] ml-[550px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/VolkovSergeyAvatar.svg'}
                    personDescription={'Волков Сергей'}
                    personText={'Начальник отдела информационной безопасности, АО «ГОЗНАК»'}
                    styles={'mt-[80px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[0px]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/DerlishIlyaAvatar.svg'}
                    personDescription={'Дерлыш Илья'}
                    personText={'Эксперт информационной безопасности, Росатом'}
                    styles={'mt-[-80px] mlarge:mt-[50px] ml-[750px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/KaderMichailAvatar.svg'}
                    personDescription={'Кадер Михаил'}
                    personText={'Архитектор по информационной безопасности'}
                    styles={'mt-[100px] mlarge:mt-[50px] ml-[0px]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/KuznetsovAndreyAvatar.svg'}
                    personDescription={'Кузнецов Андрей'}
                    personText={'Технический директор Национального Киберполигона «Ростелеком-Солар»'}
                    styles={'mt-[-80px] mlarge:mt-[50px] ml-[550px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/MarkovAlexeyAvatar.svg'}
                    personDescription={'Марков Алексей'}
                    personText={'Президент группы компаний ГК «Эшелон»'}
                    styles={'mt-[50px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[0px]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/MinakovSergeyAvatar.svg'}
                    personDescription={'Минаков Сергей'}
                    personText={'Старший научный сотрудник Академия криптографии РФ'}
                    styles={'mt-[-80px] mlarge:mt-[50px] ml-[750px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/MasalovichAndreyAvatar.svg'}
                    personDescription={'Масалович Андрей'}
                    personText={'Генеральный директор ООО «Лавина Пульс»'}
                    styles={'mt-[40px] mlarge:mt-[50px] ml-[350px] mlarge:ml-[0px]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/MichailenkoNatalyaAvatar.svg'}
                    personDescription={'Михайленко Наталья'}
                    personText={'Доцент кафедры противодействия преступлениям в сфере ИТТ, к.ю.н.'}
                    styles={'mt-[50px] mlarge:mt-[50px] ml-[750px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/LoskutovaOlesyaAvatar.svg'}
                    personDescription={'Лоскутова Олеся'}
                    personText={'Заместитель начальника центрального вычислительного центра, Главный информационно-аналитический центр МВД России'}
                    styles={'mt-[-180px] mlarge:mt-[50px] ml-[0px]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/UsanovAlexeyAvatar.svg'}
                    personDescription={'Усанов Алексей'}
                    personText={'Технический директор НТЦ «Вулкан»'}
                    styles={'mt-[40px] mlarge:mt-[50px] ml-[350px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/OvchinnikovViktorAvatar.svg'}
                    personDescription={'Овчинников Виктор'}
                    personText={'Начальник отдела информационной безопасности, ООО «М13 ИТ УСЛУГИ»'}
                    styles={'mt-[140px] mlarge:mt-[50px] ml-[0px] mlarge:ml-[0px]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/SklyarovDmitriyAvatar.svg'}
                    personDescription={'Скляров Дмитрий'}
                    personText={'Руководитель отдела анализа приложений, Positive Technologies'}
                    styles={'mt-[-160px] mlarge:mt-[50px] ml-[550px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                />

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/TsarevGrigoriyAvatar.svg'}
                    personDescription={'Царев Григорий'}
                    personText={'Руководитель направления Центра взаимодействия и реагирования Департамента информационной безопасности Банка России'}
                    styles={'mt-[120px] mlarge:mt-[50px] ml-[200px] mlarge:ml-[0px]'}
                />
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;