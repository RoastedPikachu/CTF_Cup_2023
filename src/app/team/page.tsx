import React from 'react';

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

import PersonInfo from '@/widgets/shared/PersonInfo';

const Page = () => {
    return (
        <>
            <TheHeader/>

            <main className='mt-[50px] mlarge:mt-[0px] deskWide:mx-[calc((100%-1440px)/2)] px-[10%] deskWide:px-[0px] mlarge:px-[5%] w-full max-w-[1440px] h-auto'>
                <section>
                    <img src='/static/teamPage/text/KomandaOrgText.png' alt='Команда/оргкомитет' className='mt-[50px] mlarge:mt-[20px] mmedium:mt-[15px] msmall:mt-[10px] w-[85%] h-[100px] deskWide:h-[120px] mlarge:h-[50px] mmedium:h-[45px] msmall:h-[40px]'/>

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/PyarinViktorAnatolievichAvatar.png'}
                        personDescription={'Пярин Виктор Анатольевич'}
                        personText={'Председатель оргкомитета — действительный член АИН, член-корреспондент РАЕН и Академии Криптографии, лауреат Государственной премии, к.ф-м.н'}
                        styles={'mt-[80px] mlarge:mt-[50px] ml-[200px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BarhatovDmitriyAvatar.png'}
                        personDescription={'Бархатов Дмитрий'}
                        personText={'Председатель Координационного совета, Всероссийское общественное движение наставников детей и молодежи «Наставники России»'}
                        styles={'mt-[50px] mlarge:mt-[50px] msmall:mt-[80px] ml-[600px] deskWide:ml-[700px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BenginVladimirAvatar.png'}
                        personDescription={'Бенгин Владимир'}
                        personText={'Директор Департамента обеспечения кибербезопасности, Министерства цифрового развития, связи, массовых коммуникаций Российской Федерации'}
                        styles={'mt-[20px] mlarge:mt-[50px] msmall:mt-[80px] ml-[200px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BudnikovAlexandrAvatar.png'}
                        personDescription={'Будников Александр'}
                        personText={'Управляющий директор по информационной безопасности, ПАО АФК «Система»'}
                        styles={'mt-[-20px] mlarge:mt-[50px] msmall:mt-[80px] ml-[750px] deskWide:ml-[850px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/VoinovUriyAvatar.png'}
                        personDescription={'Войнов Юрий'}
                        personText={'Начальник Департамента информационных технологий, связи и защиты информации, МВД России'}
                        styles={'mt-[50px] mlarge:mt-[50px] ml-[0px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BykovRomanAvatar.png'}
                        personDescription={'Быков Роман'}
                        personText={'Директор <strong>RuCTF</strong>'}
                        styles={'mt-[-80px] mlarge:mt-[50px] ml-[500px] deskWide:ml-[600px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/GorbatkoAlexandrAvatar.png'}
                        personDescription={'Горбатько Александр'}
                        personText={'Заместитель руководителя Департамента информационных технологий города Москвы'}
                        styles={'mt-[70px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/IzbaenkovArtemAvatar.png'}
                        personDescription={'Избаенков Артём'}
                        personText={'Директор по развитию направления кибербезопасности <strong>EdgeCenter</strong>'}
                        styles={'mt-[-140px] mlarge:mt-[50px] ml-[750px] deskWide:ml-[850px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/MasalovichAndreyAvatar.png'}
                        personDescription={'Масалович Андрей'}
                        personText={'Генеральный директор ООО «Лавина Пульс»'}
                        styles={'mt-[80px] mlarge:mt-[50px] ml-[400px] deskWide:ml-[450px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/BirukovIgorAvatar.png'}
                        personDescription={'Бирюков Игорь'}
                        personText={'Руководитель перспективных проектов в области информационной безопасности Кластер информационных технологий | ФОНД СКОЛКОВО'}
                        styles={'mt-[100px] mlarge:mt-[50px] ml-[600px] deskWide:ml-[700px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/VasilievaVladislavaAnatolievaAvatar.png'}
                        personDescription={'Васильева Владислава Анатольевна'}
                        personText={'Заместитель директора направления «Безопасная Открытая Инфраструктура» АНО «Цифровая экономика»'}
                        styles={'mt-[-100px] mlarge:mt-[50px] msmall:mt-[80px] ml-[0px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/org/MininViktorAvatar.png'}
                        personDescription={'Минин Виктор'}
                        personText={'Председатель правления АРСИБ'}
                        styles={'mt-[100px] mlarge:mt-[50px] msmall:mt-[80px] ml-[400px] deskWide:ml-[500px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />
                </section>

                <section className='mt-[150px] mlarge:mt-[100px] mmedium:mt-[50px] pb-[100px]'>
                    <img src='/static/teamPage/text/KomandaProjectText.png' alt='Команда/проектная' className='w-[85%] h-[100px] deskWide:h-[120px] mlarge:h-[50px] mmedium:h-[45px] msmall:h-[40px]'/>

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SobolevaAlisaAvatar.png'}
                        personDescription={'Соболева Алиса'}
                        personText={'Организатор'}
                        styles={'mt-[80px] mlarge:mt-[50px] ml-[200px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/SmirnovMaksimAvatar.png'}
                        personDescription={'Смирнов Максим'}
                        personText={'Технический директор'}
                        styles={'mt-[-30px] mlarge:mt-[50px] ml-[650px] deskWide:ml-[700px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/LoginovaDaryaAvatar.png'}
                        personDescription={'Логинова Дарья'}
                        personText={'Куратор, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[-20px] mlarge:mt-[50px] ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/RublevaMargaritaAvatar.png'}
                        personDescription={'Рублёва Маргарита'}
                        personText={'Web-дизайнер'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[400px] deskWide:ml-[450px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ManuilovaNatalyaAvatar.png'}
                        personDescription={'Мануйлова Наталья'}
                        personText={'Организатор'}
                        styles={'mt-[30px] mlarge:mt-[50px] ml-[750px] deskWide:ml-[800px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/EmelyanovEvgeniyAvatar.png'}
                        personDescription={'Емельянов Евгений'}
                        personText={'Технический специалист'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/BelovaMariaAvatar.png'}
                        personDescription={'Белова Мария'}
                        personText={'Редактор'}
                        styles={'mt-[-60px] mlarge:mt-[50px] ml-[600px] deskWide:ml-[650px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KuznetsovSergeyAvatar.png'}
                        personDescription={'Кузнецов Сергей'}
                        personText={'Организатор'}
                        styles={'mt-[-10px] mlarge:mt-[50px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ShirshovDaniilAvatar.png'}
                        personDescription={'Ширшов Даниил'}
                        personText={'Организатор'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[350px] deskWide:ml-[400px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/NovikovIvanAvatar.png'}
                        personDescription={'Новиков Иван'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[100px] mlarge:mt-[50px] ml-[0px] deskWide:ml-[0px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/MicheevArtemAvatar.png'}
                        personDescription={'Михеев Артем'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[-160px] mlarge:mt-[50px] ml-[750px] deskWide:ml-[800px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/AvdeevaElizavetaAvatar.png'}
                        personDescription={'Авдеева Елизавета'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong'}
                        styles={'mt-[20px] mlarge:mt-[50px] ml-[350px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/FedotovIvanAvatar.png'}
                        personDescription={'Федотов Иван'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong'}
                        styles={'mt-[100px] mlarge:mt-[50px] ml-[550px] deskWide:ml-[600px] mlarge:ml-[0%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/PokrovskiyNikitaAvatar.png'}
                        personDescription={'Покровский Никита'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[-60px] mlarge:mt-[50px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/NikitinRomanAvatar.png'}
                        personDescription={'Никитин Роман'}
                        personText={'DevOps, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[400px] deskWide:ml-[450px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KhakimovLevAvatar.png'}
                        personDescription={'Хакимов Лев'}
                        personText={'Технический специалист'}
                        styles={'mt-[-10px] mlarge:mt-[50px] ml-[750px] deskWide:ml-[800px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ZeunovAntonAvatar.png'}
                        personDescription={'Зеунов Антон'}
                        personText={'Разработчик'}
                        styles={'mt-[-60px] mlarge:mt-[50px] ml-[0px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KarabutBorisAvatar.png'}
                        personDescription={'Карабут Борис'}
                        personText={'Frontend-разработчик'}
                        styles={'mt-[-60px] mlarge:mt-[50px] ml-[400px] deskWide:ml-[450px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/GrekovIlyaAvatar.png'}
                        personDescription={'Греков Илья'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong>'}
                        styles={'mt-[150px] mlarge:mt-[50px] ml-[600px] deskWide:ml-[650px] mlarge:ml-[0px]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/KokorinVsevolodAvatar.png'}
                        personDescription={'Кокорин Всеволод'}
                        personText={'Разработчик, <strong>C4T BuT S4D</strong'}
                        styles={'mt-[60px] mlarge:mt-[50px] ml-[150px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]'}
                    />

                    <PersonInfo
                        imgPath={'/static/teamPage/avatars/project/ShpilevRomanAvatar.png'}
                        personDescription={'Шпилев Роман'}
                        personText={'3D художник'}
                        styles={'mt-[-20px] mlarge:mt-[50px] ml-[600px] deskWide:ml-[650px] mlarge:ml-[0px]'}
                    />
                </section>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;