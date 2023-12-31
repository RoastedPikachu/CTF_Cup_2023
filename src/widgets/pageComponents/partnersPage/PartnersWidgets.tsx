"use client";
import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

const PartnersWidgets = () => {
  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

  return (
    <>
      {!isMobile ? (
        <div className="relative mt-[80px] w-[90%] deskWide:w-full">
          <img
            src="/static/partnersPage/background/PartnersBgImage1.png"
            alt="Пузырик1"
            className="absolute mt-[-170px] ml-[-500px] scale-[1.25]"
          />

          <img
            src="/static/partnersPage/background/PartnersBgImage2.png"
            alt="Пузырик2"
            className="absolute mt-[60px] ml-[400px] scale-[1.25]"
          />

          <img
            src="/static/partnersPage/background/PartnersBgImage3.png"
            alt="Пузырик3"
            className="absolute mt-[650px] ml-[-500px] scale-[1.15]"
          />

          <div className="flex justify-between w-full h-[300px]">
            <div className="p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Стань частью VII Кубка CTF
              </h3>

              <p className='mt-[10px] text-[rgba(255,255,255,0.78)] text-[0.875rem] font-["Good_Timing_Regular"] font-regular'>
                Приглашаем к сотрудничеству ИТ и ИБ компании. Напишите нам, если
                хотите поддержать развитие сообщества информационной
                безопасности в России.
              </p>

              <a
                href="mailto:mnv@aciso.ru"
                className='flex justify-center items-center mt-[30px] w-full h-[40px] bg-[rgba(217,217,217,0.03)] rounded-[30px] backdrop-blur-sm text-[#bf5af2] text-[1rem] font-["Good_Timing"] outline-none'
              >
                Обсудить сотрудничество
              </a>
            </div>

            <div className="relative p-[20px] w-[66%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Организаторы
              </h3>

              <a href="https://sk.ru" className="outline-none">
                <img
                  src="/static/partnersPage/logo/SkolkovoLogo.png"
                  alt="Сколково"
                  className="mt-[100px] ml-[30px] w-[360px] h-[100px]"
                />
              </a>

              <a
                href="https://xn--80aagyaaanwdoxgiag.xn--p1ai/"
                className="outline-none"
              >
                <img
                  src="/static/partnersPage/logo/CoachesOfRussiaLogo.png"
                  alt="Наставники России"
                  className="absolute bottom-[25px] right-[100px] w-[90px] h-[115px]"
                />
              </a>

              <a href="https://aciso.ru/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/ArsibLogo.png"
                  alt="Арсиб"
                  className="absolute top-[30px] right-[150px] w-[200px] h-[120px]"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-between mt-[20px] w-full h-[320px]">
            <div className="relative p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <h3 className='w-[100px] text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Генеральный партнер
              </h3>

              <a href="https://www.rdp.ru/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/RDPLogo.png"
                  alt="RDP"
                  className="absolute bottom-[50px] right-[30px]"
                />
              </a>
            </div>

            <div className="relative p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <h3 className='w-[100px] text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Официальный партнер
              </h3>

              <a
                href="https://www.sberbank.com/ru/ecs"
                className="outline-none"
              >
                <img
                  src="/static/partnersPage/logo/SberbankLogo.png"
                  alt="Сбербанк"
                  className="absolute bottom-[50px] right-[40px] scale-[0.8]"
                />
              </a>
            </div>

            <div className="relative p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <h3 className='w-[100px] text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Официальный партнер
              </h3>

              <a href="https://www.gazprombank.ru/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/GazprombankLogo.png"
                  alt="Газпромбанк"
                  className="absolute bottom-[45px] right-0 scale-[0.9]"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-between mt-[20px] w-full h-[300px]">
            <div className="p-[20px] w-[66%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Партнер призового фонда
              </h3>

              <div className="relative flex justify-between items-center mt-[50px] w-[80%]">
                <a href="https://ntc-vulkan.ru/" className="outline-none">
                  <img
                    src="/static/partnersPage/logo/NTCVulkanLogo.png"
                    alt="НТЦ Вулкан"
                    className="mt-[80px] ml-[80px]"
                  />
                </a>

                <a href="https://www.usergate.com/ru" className="outline-none">
                  <img
                    src="/static/partnersPage/logo/UserGateLogo.png"
                    alt="UserGate"
                    className="absolute bottom-[-15px] right-[-100px]"
                  />
                </a>
              </div>
            </div>

            <div className="relative p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <h3 className='w-[100px] text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Специальный партнер
              </h3>

              <a href="https://www.ptsecurity.com/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/PositiveTechnologiesLogo.png"
                  alt="Positive Technologies"
                  className="absolute bottom-[40px] right-[40px] scale-[1.1]"
                />
              </a>
            </div>
          </div>

          <div className="relative flex justify-between mt-[20px] w-full h-[340px]">
            <div className="relative p-[20px] w-[32%] h-[340px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-t-[20px]">
              <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Информационные партнеры
              </h3>

              <a href="https://ctfnews.ru/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/CTFNewsLogo.png"
                  alt="CTF News"
                  className="mt-[80px] ml-[20px]"
                />
              </a>
            </div>

            <div className="relative p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
              <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Партнеры
              </h3>

              <a>
                <img
                  src="/static/partnersPage/logo/CoordinationalCenterRuLogo.png"
                  alt="Координационный центр домена .RU .РФ"
                  className="mt-[30px] ml-[5px] scale-[0.9]"
                />
              </a>

              <a>
                <img
                  src="/static/partnersPage/logo/202ALogo.png"
                  alt="202А"
                  className="absolute bottom-[20px] right-[30px]"
                />
              </a>
            </div>

            <div className="w-[32%] h-full">
              <div className="relative p-[20px] w-full h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
                <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                  Генеральный информационный партнер
                </h3>

                <a href="https://xakep.ru/" className="outline-none">
                  <img
                    src="/static/partnersPage/logo/HackerNewsLogo.png"
                    alt="Hacker news"
                    className="absolute bottom-[30px] right-[20px]"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-between mt-[0px] w-full h-[490px]">
            <div className="relative mt-[0px] p-[20px] w-[32%] h-[510px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm z-20">
              <a href="https://vk.com/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/VkontakteLogo.png"
                  alt="Вконтакте"
                  className="mt-[-50px] ml-[20px]"
                />
              </a>

              <a href="https://codeby.net/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/CodebyLogo.png"
                  alt="Codeby.net"
                  className="mt-[90px] ml-[25px]"
                />
              </a>

              <a href="https://ocs-radio.com/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/MooseEchoLogo.png"
                  alt="Эхо лосей. Проект OCS Distribution"
                  className="mt-[80px] ml-[30px]"
                />
              </a>

              <a href="https://www.globalcio.ru" className="outline-none">
                <img
                  src="/static/partnersPage/logo/GlobalCIOLogo.png"
                  alt="GlobalCIO"
                  className="mt-[90px] ml-[15px] scale-[0.9]"
                />
              </a>
            </div>

            <div className="relative mt-[20px] p-[20px] w-[32%] h-[470px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px] z-20">
              <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                Технологические партнеры
              </h3>

              <a href="https://edgecenter.ru/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/EdgeCenterLogo.png"
                  alt="Edge центр"
                  className="mt-[70px] ml-[50px]"
                />
              </a>

              <a href="https://cbsctf.ru/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/CBSLogo.png"
                  alt="CBS"
                  className="absolute bottom-[50px] right-[40px]"
                />
              </a>
            </div>

            <div className="relative mt-[20px] p-[20px] w-[32%] h-[490px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-t-[20px] z-20">
              <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
                При поддержке
              </h3>

              <div className="flex justify-between items-center mt-[30px] w-[90%]">
                <img
                  src="/static/partnersPage/logo/GerbLogo1.png"
                  alt="Герб1"
                  className="ml-[20px] scale-[1.25]"
                />

                <img
                  src="/static/partnersPage/logo/GerbLogo2.png"
                  alt="Герб2"
                  className="mt-[10px] scale-[1.25]"
                />
              </div>

              <img
                src="/static/partnersPage/logo/GerbLogo3.png"
                alt="Герб3"
                className="mt-[50px] ml-[50px] scale-[1.25]"
              />

              <img
                src="/static/partnersPage/logo/FSPLogo.png"
                alt="ФСП"
                className="mt-[60px] ml-[50px] scale-[1.1]"
              />
            </div>

            {/*Нижние 2 div-а необходимы для создания скоса*/}

            <div className="absolute mt-[502.5px] right-[calc(328.5px+0.3%)] w-[7.5px] h-[7.5px] bg-[rgba(255,255,255,0.04)] z-[25]"></div>

            <div className="absolute mt-[500px] right-[332.5px] w-[10px] h-[10px] bg-[#0d0d0d] rounded-br-[20px] z-[25]"></div>
          </div>

          <div className="relative flex justify-between mt-[20px] w-full h-[340px]">
            <div className="relative p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-b-[20px] z-20">
              <a href="https://securitymedia.org/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/CyberMediaLogo.png"
                  alt="Cyber Media"
                  className="mt-[-70px] ml-[70px]"
                />
              </a>

              <a href="https://it-planet.org/" className="outline-none">
                <img
                  src="/static/partnersPage/logo/ITPlanetLogo.png"
                  alt="IT Планета"
                  className="absolute bottom-[50px] right-[50px]"
                />
              </a>
            </div>

            <div className="relative p-[20px] w-[66%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-tl-[20px]">
              <div className="flex justify-between items-center mt-[20px] mx-[2.5%] w-[95%]">
                <img
                  src="/static/partnersPage/logo/BankOfRussiaLogo.png"
                  alt="Банк России"
                />

                <img
                  src="/static/partnersPage/logo/MinistryOfScienceAndHighEducationLogo.png"
                  alt="Министерство науки и высшего образования РФ"
                />
              </div>

              <div className="flex justify-between items-center mt-[80px] ml-[-5px] w-[95%]">
                <img
                  src="/static/partnersPage/logo/MinCifriRossiiLogo.png"
                  alt="Минцифры России"
                />

                <img
                  src="/static/partnersPage/logo/ITDepartmentOfMoscowLogo.png"
                  alt="Департамент информационных технологий города Москвы"
                />
              </div>
            </div>
          </div>

          <div className="relative flex justify-between w-full h-[170px]">
            <div className="relative mt-[20px] p-[20px] w-[32%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-t-[20px] z-20">
              <img
                src="/static/partnersPage/logo/CTFCupVIILogo.png"
                alt="VII Кубок CTF 2023"
                className="mt-[20px] ml-[10px]"
              />

              {/*Нижние 2 div-а необходимы для создания скоса*/}

              <div className="absolute mt-[3.5px] ml-[calc(311px+0.3%)] w-[7.5px] h-[7.5px] bg-[rgba(255,255,255,0.04)] z-[25]"></div>

              <div className="absolute mt-[0px] ml-[313px] w-[10px] h-[10px] bg-[#0d0d0d] rounded-bl-[20px] z-[25]"></div>
            </div>

            <div className="relative p-[20px] w-[66%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-b-[20px] z-20">
              <div className="flex justify-between items-center mt-[10px] mx-[2.5%] w-[95%]">
                <img
                  src="/static/partnersPage/logo/SystemLogo.png"
                  alt="Система - акционерная финансовая корпорация"
                  className="ml-[60px] scale-[1.1]"
                />

                <img
                  src="/static/partnersPage/logo/GoznakLogo.png"
                  alt="Гознак"
                  className="mr-[120px]"
                />
              </div>
            </div>
          </div>

          <div className="relative mt-[20px] p-[30px] w-full h-[170px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-b-[20px] rounded-tr-[20px] z-[5]">
            <p className='mt-[10px] text-[#4f4f4f] text-[1rem] font-["Good_Timing_Regular"] font-regular'>
              Кубок CTF ежегодно собирает несколько тысяч молодых
              айти-специалистов: в отборочном туре участвует свыше 300 команд
              студентов и молодых профессионалов, а финал помогает выявить самых
              талантливых участников. Поддержка такого мероприятия помогает с
              развитием HR-бренда, повышает узнаваемость компании и закрывает
              маркетинговые потребности организаций любого масштаба.
            </p>
          </div>
        </div>
      ) : (
        <div className="relative mt-[40px] w-[90%] msmall:w-full">
          <img
            src="/static/partnersPage/background/PartnersBgImage1.png"
            alt="Пузырик1"
            className="absolute mt-[20px] ml-[-150px] scale-[2.25]"
          />

          <img
            src="/static/partnersPage/background/PartnersBgImage2.png"
            alt="Пузырик2"
            className="absolute mt-[450px] ml-[30px] scale-[2.5]"
          />

          <img
            src="/static/partnersPage/background/PartnersBgImage3.png"
            alt="Пузырик3"
            className="absolute mt-[1050px] ml-[-150px] scale-[2.25]"
          />

          <div className="p-[30px] msmall:p-[20px] w-full h-[320px] mmedium:h-[340px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Стань частью VII Кубка CTF
            </h3>

            <p className='mt-[10px] text-[rgba(255,255,255,0.78)] text-[0.875rem] font-["Good_Timing_Regular"] font-regular'>
              Приглашаем к сотрудничеству ИТ и ИБ компании. Напишите нам, если
              хотите поддержать развитие сообщества информационной безопасности
              в России.
            </p>

            <a
              href="mailto:mnv@aciso.ru"
              className='flex justify-center items-center mt-[40px] w-full h-[40px] bg-[rgba(217,217,217,0.03)] rounded-[30px] backdrop-blur-sm text-[#bf5af2] text-[0.875rem] font-["Good_Timing"] outline-none'
            >
              Обсудить сотрудничество
            </a>
          </div>

          <div className="relative mt-[20px] p-[30px] w-full h-[560px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Организаторы
            </h3>

            <a
              href="https://xn--80aagyaaanwdoxgiag.xn--p1ai/"
              className="outline-none"
            >
              <img
                src="/static/partnersPage/logo/CoachesOfRussiaLogo.png"
                alt="Наставники России"
                className="mt-[10px] ml-[10px] mmedium:ml-[-10px] scale-[0.85] mmedium:scale-[0.8]"
              />
            </a>

            <a href="https://aciso.ru/" className="outline-none">
              <img
                src="/static/partnersPage/logo/ArsibLogo.png"
                alt="Арсиб"
                className="mt-[35px] msmall:mt-[40px] ml-[20px] mmedium:ml-[5px] scale-[0.9] mmedium:scale-[0.85]"
              />
            </a>

            <a href="https://sk.ru" className="outline-none">
              <img
                src="/static/partnersPage/logo/SkolkovoLogo.png"
                alt="Сколково"
                className="absolute bottom-[30px] right-[5px] mmedium:right-0 scale-[0.85] mmedium:scale-[0.8]"
              />
            </a>
          </div>

          <div className="relative mt-[20px] p-[30px] msmall:p-[20px] w-full h-[320px] mmedium:h-[340px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='w-[100px] text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Генеральный партнер
            </h3>

            <a href="https://www.rdp.ru/" className="outline-none">
              <img
                src="/static/partnersPage/logo/RDPLogo.png"
                alt="RDP"
                className="absolute bottom-[50px] right-[30px]"
              />
            </a>
          </div>

          <div className="relative mt-[20px] p-[30px] w-full h-[320px] mmedium:h-[300px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='w-[100px] text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Официальный партнер
            </h3>

            <a href="https://www.sberbank.com/ru/ecs" className="outline-none">
              <img
                src="/static/partnersPage/logo/SberbankLogo.png"
                alt="Сбербанк"
                className="absolute bottom-[50px] mmedium:bottom-[40px] right-[30px] mmedium:right-[10px] scale-[0.85]"
              />
            </a>
          </div>

          <div className="relative mt-[20px] p-[30px] w-full h-[320px] mmedium:h-[300px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='w-[100px] text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Официальный партнер
            </h3>

            <a href="https://www.gazprombank.ru/" className="outline-none">
              <img
                src="/static/partnersPage/logo/GazprombankLogo.png"
                alt="Газпромбанк"
                className="absolute bottom-[50px] right-0 scale-[0.85]"
              />
            </a>
          </div>

          <div className="relative mt-[20px] p-[30px] msmall:p-[20px] w-full h-[360px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Партнеры
            </h3>

            <a href="https://cctld.ru/" className="outline-none">
              <img
                src="/static/partnersPage/logo/CoordinationalCenterRuLogo.png"
                alt="Координационный центр доменов .ru/.рф"
                className="mt-[40px] left-[20px] scale-[0.95] mmedium:scale-[0.85]"
              />
            </a>

            <a>
              <img
                src="/static/partnersPage/logo/202ALogo.png"
                alt="202А"
                className="absolute bottom-[30px] right-[40px]"
              />
            </a>
          </div>

          <div className="relative mt-[20px] p-[20px] msmall:p-[20px] w-full h-[360px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Партнер призового фонда
            </h3>

            <a href="https://ntc-vulkan.ru/" className="outline-none">
              <img
                src="/static/partnersPage/logo/NTCVulkanLogo.png"
                alt="НТЦ Вулкан"
                className="mt-[40px] ml-[90px] mmedium:ml-[70px]"
              />
            </a>

            <a href="https://www.usergate.com/ru" className="outline-none">
              <img
                src="/static/partnersPage/logo/UserGateLogo.png"
                alt="User Gate"
                className="absolute bottom-[30px] right-[25px] mmedium:right-[5px] msmall:right-0"
              />
            </a>
          </div>

          <div className="relative mt-[20px] p-[20px] w-full h-[320px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Специальный партнер
            </h3>

            <a href="https://www.ptsecurity.com/" className="outline-none">
              <img
                src="/static/partnersPage/logo/PositiveTechnologiesLogo.png"
                alt="Positive Technologies"
                className="absolute bottom-[40px] right-[40px] msmall:right-[30px] scale-[1.1] msmall:scale-[1]"
              />
            </a>
          </div>

          <div className="relative mt-[20px] p-[30px] msmall:p-[20px] w-full h-[500px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Технологические партнеры
            </h3>

            <a href="https://edgecenter.ru/" className="outline-none">
              <img
                src="/static/partnersPage/logo/EdgeCenterLogo.png"
                alt="Edge центр"
                className="mt-[80px] ml-[50px] mmedium:ml-[30px]"
              />
            </a>

            <a href="https://cbsctf.ru/" className="outline-none">
              <img
                src="/static/partnersPage/logo/CBSLogo.png"
                alt="CBS"
                className="absolute bottom-[50px] right-[40px]"
              />
            </a>
          </div>

          <div className="relative mt-[20px] p-[30px] msmall:p-[20px] w-full h-[320px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Генеральный информационный партнер
            </h3>

            <a href="https://xakep.ru/" className="outline-none">
              <img
                src="/static/partnersPage/logo/HackerNewsLogo.png"
                alt="Hacker news"
                className="absolute bottom-[30px] right-[20px]"
              />
            </a>
          </div>

          <div className="relative mt-[20px] p-[30px] msmall:p-[20px] w-full h-[1160px] mmedium:h-[1140px] msmall:h-[1130px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              Информационные партнеры
            </h3>

            <a href="https://ctfnews.ru/" className="outline-none">
              <img
                src="/static/partnersPage/logo/CTFNewsLogo.png"
                alt="CTF News"
                className="mt-[60px] ml-[10px] mmedium:ml-[0px] scale-[1.1] mmedium:scale-[1.05]"
              />
            </a>

            <a href="https://vk.com/" className="outline-none">
              <img
                src="/static/partnersPage/logo/VkontakteLogo.png"
                alt="Вконтакте"
                className="mt-[80px] ml-[15px] mmedium:ml-[0px] scale-[1.05] mmedium:scale-[1.05]"
              />
            </a>

            <a href="https://codeby.net/" className="outline-none">
              <img
                src="/static/partnersPage/logo/CodebyLogo.png"
                alt="Codeby.net"
                className="mt-[100px] mmedium:mt-[100px] ml-[20px] mmedium:ml-0 scale-[1.05] mmedium:scale-[1.05]"
              />
            </a>

            <a href="https://ocs-radio.com/" className="outline-none">
              <img
                src="/static/partnersPage/logo/MooseEchoLogo.png"
                alt="Эхо лосей. Проект OCS Distribution"
                className="mt-[90px] ml-[20px] mmedium:ml-0"
              />
            </a>

            <a href="https://www.globalcio.ru" className="outline-none">
              <img
                src="/static/partnersPage/logo/GlobalCIOLogo.png"
                alt="GlobalCIO"
                className="mt-[90px] ml-[10px] mmedium:ml-[5px] msmall:ml-[0px] scale-[0.9]"
              />
            </a>

            <a href="https://securitymedia.org/" className="outline-none">
              <img
                src="/static/partnersPage/logo/CyberMediaLogo.png"
                alt="Cyber Media"
                className="mt-[10px] ml-[30px] msmall:ml-[10px]"
              />
            </a>

            <a href="https://it-planet.org/" className="outline-none">
              <img
                src="/static/partnersPage/logo/ITPlanetLogo.png"
                alt="IT Планета"
                className="absolute bottom-[30px] msmall:bottom-[20px] right-[60px] mmedium:right-[40px] mmedium:scale-[0.9]"
              />
            </a>
          </div>

          <div className="mt-[20px] p-[30px] msmall:p-[20px] w-full h-[1220px] mmedium:h-[1200px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <h3 className='text-[#ffffff] text-[1.5rem] font-["Good_Timing"] font-bold'>
              При поддержке
            </h3>

            <div className="flex justify-between items-center mt-[30px] w-full">
              <img src="/static/partnersPage/logo/GerbLogo1.png" alt="Герб1" />

              <img src="/static/partnersPage/logo/GerbLogo2.png" alt="Герб2" />
            </div>

            <img
              src="/static/partnersPage/logo/GerbLogo3.png"
              alt="Герб3"
              className="ml-[50px] mmedium:ml-[40px]"
            />

            <img
              src="/static/partnersPage/logo/BankOfRussiaLogo.png"
              alt="Банк России"
              className="mt-[50px] ml-[calc(50%-140px)] mmedium:ml-[0px] scale-[0.95]"
            />

            <img
              src="/static/partnersPage/logo/MinistryOfScienceAndHighEducationLogo.png"
              alt="Министерство науки и высшего образования РФ"
              className="mt-[50px] ml-[calc(50%-130px)] mmedium:ml-[0px] mmedium:scale-[0.95]"
            />

            <img
              src="/static/partnersPage/logo/MinCifriRossiiLogo.png"
              alt="Минцифры России"
              className="mt-[40px] ml-[calc(50%-135px)] mmedium:ml-[0px] scale-[1.1]"
            />

            <img
              src="/static/partnersPage/logo/ITDepartmentOfMoscowLogo.png"
              alt="Департамент информационных технологий города Москвы"
              className="mt-[50px] ml-[calc(50%-110px)]"
            />

            <img
              src="/static/partnersPage/logo/SystemLogo.png"
              alt="Система - акционерная финансовая корпорация"
              className="mt-[60px] ml-[calc(50%-100px)] scale-[1.1]"
            />

            <img
              src="/static/partnersPage/logo/FSPLogo.png"
              alt="ФСП"
              className="mt-[50px] ml-[calc(50%-85px)]"
            />

            <img
              src="/static/partnersPage/logo/GoznakLogo.png"
              alt="Гознак"
              className="mt-[50px] ml-[calc(50%-35px)]"
            />
          </div>

          <div className="relative mt-[20px] p-[30px] msmall:p-[20px] w-full h-auto bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]">
            <img
              src="/static/partnersPage/logo/CTFCupVIILogo.png"
              alt="VII Кубок CTF 2023"
              className="mt-[20px] ml-[10px] mmedium:ml-[0px] scale-[1.1] mmedium:scale-[1]"
            />

            <p className='mt-[40px] mmedium:mt-[30px] text-[#4f4f4f] text-[1rem] mmedium:text-[0.875rem] font-["Good_Timing_Regular"] font-regular leading-[1.65]'>
              Кубок CTF ежегодно собирает несколько тысяч молодых
              айти-специалистов: в отборочном туре участвует свыше 300 команд
              студентов и молодых профессионалов, а финал помогает выявить самых
              талантливых участников. Поддержка такого мероприятия помогает с
              развитием HR-бренда, повышает узнаваемость компании и закрывает
              маркетинговые потребности организаций любого масштаба.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PartnersWidgets;
