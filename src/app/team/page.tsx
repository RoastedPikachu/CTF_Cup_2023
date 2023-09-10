import React from 'react';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

import PersonInfo from '@/widgets/shared/PersonInfo';

const Page = () => {
    return (
        <>
            <TheHeader/>

            <main className='mt-[50px] mlarge:mt-[0px] px-[15%] mlarge:px-[5%] w-full h-auto'>
                <section>
                    <img src='/static/teamPage/text/KomandaOrgText.svg' alt='Команда/оргкомитет' className='w-full'/>

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/PyarinViktorAnatolievichAvatar.svg'}
                        personDescription={'Пярин Виктор Анатольевич'}
                        personText={'Председатель оргкомитета — действительный член АИН, член-корреспондент РАЕН и Академии Криптографии, лауреат Государственной премии, к.ф-м.н'}
                        styles={'mt-[80px] mlarge:mt-[50px] ml-[200px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BarhatovDmitriyAvatar.svg'}
                        personDescription={'Бархатов Дмитрий'}
                        personText={'Председатель Координационного совета, Всероссийское общественное движение наставников детей и молодежи «Наставники России»'}
                        styles={'mt-[50px] mlarge:mt-[50px] msmall:mt-[80px] ml-[600px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BenginVladimirAvatar.svg'}
                        personDescription={'Бенгин Владимир'}
                        personText={'Директор Департамента обеспечения кибербезопасности, Министерства цифрового развития, связи, массовых коммуникаций Российской Федерации'}
                        styles={'mt-[20px] mlarge:mt-[50px] msmall:mt-[80px] ml-[200px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BudnikovAlexandrAvatar.svg'}
                        personDescription={'Будников Александр'}
                        personText={'Управляющий директор по информационной безопасности, ПАО АФК «Система»'}
                        styles={'mt-[-20px] mlarge:mt-[50px] msmall:mt-[80px] ml-[700px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/VoinovUriyAvatar.svg'}
                        personDescription={'Войнов Юрий'}
                        personText={'Начальник Департамента информационных технологий, связи и защиты информации, МВД России'}
                        styles={'mt-[50px] mlarge:mt-[50px] ml-[0px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BykovRomanAvatar.svg'}
                        personDescription={'Быков Роман'}
                        personText={'Директор <strong>RuCTF</strong>'}
                        styles={'mt-[-80px] mlarge:mt-[50px] ml-[500px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/GorbatkoAlexandrAvatar.svg'}
                        personDescription={'Горбатько Александр'}
                        personText={'Заместитель руководителя Департамента информационных технологий города Москвы'}
                        styles={'mt-[70px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/IzbaenkovArtemAvatar.svg'}
                        personDescription={'Избаенков Артём'}
                        personText={'Директор по развитию направления кибербезопасности <strong>EdgeCenter</strong>'}
                        styles={'mt-[-140px] mlarge:mt-[50px] ml-[700px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/MasalovichAndreyAvatar.svg'}
                        personDescription={'Масалович Андрей'}
                        personText={'Генеральный директор ООО «Лавина Пульс»'}
                        styles={'mt-[80px] mlarge:mt-[50px] ml-[350px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BirukovIgorAvatar.svg'}
                        personDescription={'Бирюков Игорь'}
                        personText={'Руководитель перспективных проектов в области информационной безопасности Кластер информационных технологий | ФОНД СКОЛКОВО'}
                        styles={'mt-[100px] mlarge:mt-[50px] ml-[550px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/VasilievaVladislavaAnatolievaAvatar.svg'}
                        personDescription={'Васильева Владислава Анатольевна'}
                        personText={'Заместитель директора направления «Безопасная Открытая Инфраструктура» АНО «Цифровая экономика»'}
                        styles={'mt-[-100px] mlarge:mt-[50px] msmall:mt-[80px] ml-[0px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/MininViktorAvatar.svg'}
                        personDescription={'Минин Виктор'}
                        personText={'Председатель правления АРСИБ'}
                        styles={'mt-[100px] mlarge:mt-[50px] msmall:mt-[80px] ml-[350px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />
                </section>

                <section className='mt-[150px] mlarge:mt-[100px] mmedium:mt-[50px] pb-[100px]'>
                    <img src='/static/teamPage/text/KomandaProjectText.svg' alt='Команда/проектная' className='w-full'/>

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SobolevaAlisaAvatar.svg'}
                        personDescription={'Соболева Алиса'}
                        personText={'Организатор'}
                        styles={'mt-[80px] mlarge:mt-[50px] ml-[200px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SmirnovMaksimAvatar.svg'}
                        personDescription={'Смирнов Максим'}
                        personText={'Технический директор'}
                        styles={'mt-[-30px] mlarge:mt-[50px] ml-[600px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/LoginovaDaryaAvatar.svg'}
                        personDescription={'Логинова Дарья'}
                        personText={'Куратор, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[-20px] mlarge:mt-[50px] ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/RublevaMargaritaAvatar.svg'}
                        personDescription={'Рублёва Маргарита'}
                        personText={'Web-дизайнер'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[400px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ManuilovaNataliaAvatar.svg'}
                        personDescription={'Мануйлова Наталья'}
                        personText={'Организатор'}
                        styles={'mt-[30px] mlarge:mt-[50px] ml-[750px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/EmelianovEvgeniyAvatar.svg'}
                        personDescription={'Емельянов Евгений'}
                        personText={'Технический специалист'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/BelovaMariaAvatar.svg'}
                        personDescription={'Белова Мария'}
                        personText={'Редактор'}
                        styles={'mt-[-60px] mlarge:mt-[50px] ml-[550px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SergeyKuznetsovAvatar.svg'}
                        personDescription={'Кузнецов Сергей'}
                        personText={'Организатор'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[-50px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/DanilShirshovAvatar.svg'}
                        personDescription={'Ширшов Даниил'}
                        personText={'Организатор'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[350px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ArtyomMicheevAvatar.svg'}
                        personDescription={'Михеев Артем'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[750px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/AvdeevaElizavetaAvatar.svg'}
                        personDescription={'Авдеева Елизавета'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/FedotovIvanAvatar.svg'}
                        personDescription={'Федотов Иван'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong'}
                        styles={'mt-[-60px] mlarge:mt-[50px] ml-[550px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/PokrovskiyNikitaAvatar.svg'}
                        personDescription={'Покровский Никита'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[-50px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/NikitinRomanAvatar.svg'}
                        personDescription={'Никитин Роман'}
                        personText={'DevOps, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[350px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KhakimovLevAvatar.svg'}
                        personDescription={'Хакимов Лев'}
                        personText={'Технический специалист'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[750px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ZeunovAntonAvatar.svg'}
                        personDescription={'Зеунов Антон'}
                        personText={'Разработчик'}
                        styles={'mt-[-60px] mlarge:mt-[50px] ml-[0px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KarabutBorisAvatar.svg'}
                        personDescription={'Карабут Борис'}
                        personText={'Frontend-разработчик'}
                        styles={'mt-[-60px] mlarge:mt-[50px] ml-[350px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/GrekovIlyaAvatar.svg'}
                        personDescription={'Греков Илья'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[150px] mlarge:mt-[50px] ml-[550px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KokorinVsevolodAvatar.svg'}
                        personDescription={'Кокорин Всеволод'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong'}
                        styles={'mt-[60px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ShpilevRomanAvatar.svg'}
                        personDescription={'Шпилев Роман'}
                        personText={'3D художник'}
                        styles={'mt-[-20px] mlarge:mt-[50px] ml-[550px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />
                </section>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;