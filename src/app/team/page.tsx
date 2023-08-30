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
                        <img src='/static/avatars/org/PyarinViktorAvatar.svg' alt='Пярин Виктор Анатольевич' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ПЯРИН ВИКТОР АНАТОЛЬЕВИЧ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Председатель оргкомитета — действительный член АИН, член-корреспондент РАЕН и Академии Криптографии, лауреат Государственной премии, к.ф-м.н</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[50px] ml-[600px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/org/BarhatovDmitriyAvatar.svg' alt='Бархатов Дмитрий' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>БАРХАТОВ ДМИТРИЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Управляющий директор по информационной безопасности, ПАО АФК «Система»</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[20px] ml-[200px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/org/BenginVladimirAvatar.svg' alt='Бенгин Владимир' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>БЕНГИН ВЛАДИМИР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Директор Департамента обеспечения кибербезопасности, Министерства цифрового развития, связи, массовых коммуникаций Российской Федерации</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-20px] ml-[700px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/org/BudnikovAlexandrAvatar.svg' alt='Будников Александр' className='w-[180px] h-full'/>

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
                        <img src='/static/avatars/org/BykovRomanAvatar.svg' alt='Быков Роман' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>БЫКОВ РОМАН</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Директор <strong>RuCTF</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[70px] ml-[150px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/org/GorbatkoAlexandrAvatar.svg' alt='Горбатько Александр' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ГОРБАТЬКО АЛЕКСАНДР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Заместитель руководителя Департамента информационных технологий города Москвы</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-140px] ml-[700px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/org/IzbaenkovArtemAvatar.svg' alt='Избаенков Артём' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ИЗБАЕНКОВ АРТЁМ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Директор по развитию направления кибербезопасности «<strong>EdgeCenter</strong>»</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[80px] ml-[350px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/org/MasalovichAndreyAvatar.svg' alt='Масалович Андрей' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>МАСАЛОВИЧ АНДРЕЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Генеральный директор ООО «Лавина Пульс»</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[10px] ml-[700px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/org/UliannikovaOksanaAvatar.svg' alt='Ульянникова Оксана' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>УЛЬЯННИКОВА ОКСАНА</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Руководитель перспективных проектов в области информационной безопасности Кластер информационных технологий | ФОНД СКОЛКОВО</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-50px] ml-[-50px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/org/ChernovMaksimAvatar.svg' alt='Чернов Максим' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ЧЕРНОВ МАКСИМ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Директор по направлению «Информационная инфраструктура» АНО «Цифровая экономика»</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[30px] ml-[350px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/org/MininViktorAvatar.svg' alt='Минин Виктор' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>МИНИН ВИКТОР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Генеральный директор ООО «Лавина Пульс»</p>
                        </span>
                    </div>
                </section>

                <section className='mt-[150px]'>
                    <img src='/static/KomandaProjectText.svg' alt='Команда/проектная' className='w-full'/>

                    <div className='flex justify-between mt-[80px] ml-[200px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/SobolevaAlisaAvatar.svg' alt='Соболева Алиса' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>СОБОЛЕВА АЛИСА</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Менеджер проектов</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-30px] ml-[600px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/SmirnovMaksimAvatar.svg' alt='Смирнов Максим' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>СМИРНОВ МАКСИМ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Технический директор</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-20px] ml-[0px] w-[380px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'></div>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ЛОГИНОВА ДАРЬЯ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Руководитель команды разработчиков, <strong>C4T BuT S4D</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[400px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/RublevaMargarita.svg' alt='Рублёва Маргарита' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>РУБЛЕВА МАРГАРИТА</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Web-дизайнер</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[30px] ml-[750px] w-[380px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'></div>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>МАНУЙЛОВА НАТАЛЬЯ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Web-дизайнер</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[150px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/EmelianovEvgeniyAvatar.svg' alt='Емельянов Евгений' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ЕМЕЛЬЯНОВ ЕВГЕНИЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Технический специалист</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-60px] ml-[550px] w-[370px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'></div>

                        <span className='w-[180px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>МАРИЯ БЕЛОВА</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Редактор</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[-50px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/SergeyKuznetsovAvatar.svg' alt='Сергей Кузнецов' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>СЕРГЕЙ КУЗНЕЦОВ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Администратор</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[350px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/DanilShirshovAvatar.svg' alt='Даниил Ширшов' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ДАНИИЛ ШИРШОВ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Администратор</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[750px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/ArtyomMicheevAvatar.svg' alt='Артем Михеев' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>АРТЕМ МИХЕЕВ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>CBS</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[150px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/MukovkinDmitriyAvatar.svg' alt='Муковкин Дмитрий' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>МУКОВКИН ДМИТРИЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, ЦФТ</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-60px] ml-[550px] w-[370px] h-[220px]'>
                        <img src='/static/avatars/project/ZaitsevGeorgiyAvatar.svg' alt='Зайцев Георгий' className='w-[180px] h-full bg-[#b8b8b8]'/>

                        <span className='w-[180px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ЗАЙЦЕВ ГЕОРГИЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>KKS</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[-50px] w-[380px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>АНФИНОГЕНОВ МАКСИМ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>KKS</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[350px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/PodobaevMaksimAvatar.svg' alt='Подобаев Максим' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ПОДОБАЕВ МАКСИМ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>UserGate</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[750px] w-[380px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'></div>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>БЕКЕТОВ НИКИТА</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[150px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/KiguradzeGeorgiyAvatar.svg' alt='Кигурадзе Георгий' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>КИГУРАДЗЕ ГЕОРГИЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>CBS</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-60px] ml-[550px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/MartensPavelAvatar.svg' alt='Мартенс Павел' className='w-[180px] h-full bg-[#b8b8b8]'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>МАРТЕНС ПАВЕЛ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>UserGate</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-60px] ml-[-50px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/KedikIlyaAvatar.svg' alt='Кедик Илья' className='w-[180px] h-full bg-[#b8b8b8]'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>КЕДИК ИЛЬЯ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>UserGate</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[350px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/NikitinRomanAvatar.svg' alt='Никитин Роман' className='w-[180px] h-full bg-[#b8b8b8]'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>НИКИТИН РОМАН</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>DevOps, <strong>CBS</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[100px] ml-[150px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/ZeunovAntonAvatar.svg' alt='Зеунов Антон' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ЗЕУНОВ АНТОН</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик</p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-60px] ml-[550px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/KarginAlexandrAvatar.svg' alt='Каргин Александр' className='w-[180px] h-full bg-[#b8b8b8]'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>КАРГИН АЛЕКСАНДР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>HackerDom</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-60px] ml-[-50px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/HairutdinovDaniyarAvatar.svg' alt='Хайрутдинов Данияр' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ХАЙРУТДИНОВ ДАНИЯР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>HackerDom</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[350px] w-[380px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'></div>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ЧЕРЕПАНОВ ВЛАДИМИР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>HackerDom</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] ml-[750px] w-[370px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'></div>

                        <span className='w-[180px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>СЕРГЕЕВ АНДРЕЙ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>KKS</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-80px] ml-[150px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/KotovAlexandrAvatar.svg' alt='Котов Александр' className='w-[180px] h-full'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>КОТОВ АЛЕКСАНДР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Директор <strong>HackerDom</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-60px] ml-[550px] w-[380px] h-[220px]'>
                        <img src='/static/avatars/project/GrekovIlyaAvatar.svg' alt='Греков Илья' className='w-[180px] h-full bg-[#b8b8b8]'/>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ГРЕКОВ ИЛЬЯ</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>TeamLead, <strong>CBS</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-60px] ml-[-50px] w-[380px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'></div>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ХАЙРУТДИНОВ ДАНИЯР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>HackerDom</strong></p>
                        </span>
                    </div>

                    <div className='flex justify-between mt-[-10px] mb-[50px] ml-[350px] w-[380px] h-[220px]'>
                        <div className='w-[180px] h-full bg-[#b8b8b8]'></div>

                        <span className='w-[190px]'>
                            <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>ЧЕРЕПАНОВ ВЛАДИМИР</p>

                            <p className='text-[#ffffff] text-[0.875rem]'>Разработчик, <strong>HackerDom</strong></p>
                        </span>
                    </div>
                </section>
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;