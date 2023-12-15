import React from "react";

import TheHeader from "@/widgets/shared/TheHeader";
import TheFooter from "@/widgets/shared/TheFooter";
// import TheExpirationAlert from "@/widgets/shared/TheExpirationAlert";

import Broadcast from "@/widgets/pageComponents/homePage/Broadcast";
import Itinerary from "@/widgets/pageComponents/homePage/Itinerary";
import Address from "@/widgets/pageComponents/homePage/Address";
import OfficialDocsImages from "@/widgets/pageComponents/homePage/OfficialDocsImages";
import BgImages from "@/widgets/pageComponents/homePage/BgImages";

export default function Home() {
  return (
    <>
      <TheHeader />

      <BgImages />

      <main className="relative mt-[80px] deskWide:mx-[calc((100%-1440px)/2)] w-[100vw] max-w-[1440px] h-auto overflow-hidden">
        <section className="relative px-[15%] w-[100%] h-[700px] mlarge:h-[330px]">
          <img
            src="/static/homePage/text/KubokCTFText.svg"
            alt="Кубок CTF 2023"
            className="mt-[calc(50%-400px)] mlarge:mt-[calc(50%-190px)] mmedium:mt-[calc(50%-160px)] h-[450px] mlarge:h-[400px] scale-[0.75] mlarge:scale-[1.3]"
          />

          <div className="relative mt-[100px] mlarge:mt-[-20px] h-[100px]">
            <p className='text-[#ffffff] text-[2.25rem] mlarge:text-[1.25rem] font-["DaMiOne"] text-center'>
              Регистрация
            </p>

            <div className="flex justify-center mt-[5px]">
              <p className='w-[340px] mlarge:w-[200px] text-[#ffffff] text-[1.125rem] mlarge:text-[0.875rem] text-center font-["Good_Timing_Regular"] font-regular'>
                для{" "}
                <a
                  href="https://forms.yandex.ru/u/64fca2a6d0468870ebb9e8ac/"
                  className="text-[#bf5af2] outline-none"
                >
                  российских
                </a>
                /
                <a
                  href="https://forms.yandex.ru/u/650b4305c769f152a366a2d9/"
                  className="text-[#6bf29a] outline-none"
                >
                  иностранных
                </a>{" "}
                команд
              </p>
            </div>

            <img
              src="/static/homePage/icon/ArrowsDownIcon.svg"
              alt=""
              className="ml-[calc(50%-20px)] mlarge:ml-[calc(50%-12.5px)] pt-[10px] w-[40px] mlarge:w-[25px] h-[40px] mlarge:h-[25px] cursor-pointer"
            />
          </div>
        </section>

        <Broadcast />

        <section className="relative mlarge:mt-[0px] px-[15%] mlarge:px-[7.5%] w-full h-[550px] mlarge:h-[1320px] msmall:h-[1120px]">
          <img
            src="/static/homePage/text/WinnersText.png"
            alt="Победители"
            className="relative mt-[60px] mlarge:mt-[50px] w-[85vw] h-[120px] mlarge:h-[45px] msmall:h-[40px]"
          />

          <div className="relative flex mlarge:block justify-between items-center mt-[30px] w-full">
            <div className="relative w-[31%] mlarge:w-[95%] h-[380px] msmall:h-[320px] bg-[#191919] rounded-[20px] overflow-hidden">
              <p className="absolute top-[20px] right-[30px] text-[#ffffff] text-[1.75rem] mmedium:text-[1.5rem] font-['Good_Timing_Regular']">
                команда
              </p>

              <h3 className="mt-[80px] mx-[30px] w-[calc(100%-60px)] text-[#82ffac] text-[2.75rem] mmedium:text-[2.5rem] msmall:text-[2rem] text-right font-['Good_Timing']">
                NO@NAME
              </h3>

              <p className="absolute bottom-0 py-[20px] w-full h-[80px] msmall:h-[70px] bg-[rgba(120,255,165,0.88)] text-[#ffffff] text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] text-center font-['Good_Timing_Regular']">
                Академический зачет
              </p>
            </div>

            <div className="relative mlarge:mt-[40px] w-[31%] mlarge:w-[95%] h-[380px] msmall:h-[320px] bg-[#191919] rounded-[20px] overflow-hidden">
              <p className="absolute top-[20px] right-[30px] text-[#ffffff] text-[1.75rem] mmedium:text-[1.5rem] font-['Good_Timing_Regular']">
                команда
              </p>

              <h3 className="mt-[80px] mx-[30px] w-[calc(100%-60px)] text-[#9493ff] text-[2.75rem] mmedium:text-[2.5rem] msmall:text-[2rem] text-right font-['Good_Timing']">
                SPRUSH
              </h3>

              <p className="absolute bottom-0 py-[20px] w-full h-[80px] msmall:h-[70px] bg-[#9493ff] text-[#ffffff] text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] text-center font-['Good_Timing_Regular']">
                Смешанный зачет
              </p>
            </div>

            <div className="relative mlarge:mt-[40px] w-[31%] mlarge:w-[95%] h-[380px] msmall:h-[320px] bg-[#191919] rounded-[20px] overflow-hidden">
              <p className="absolute top-[20px] right-[30px] text-[#ffffff] text-[1.75rem] mmedium:text-[1.5rem] font-['Good_Timing_Regular']">
                команда
              </p>

              <h3 className="mt-[80px] mx-[30px] w-[calc(100%-60px)] text-[#d27aff] text-[2.75rem] mmedium:text-[2.5rem] msmall:text-[2rem] text-right font-['Good_Timing']">
                ЕНОТИКИ
              </h3>

              <p className="absolute bottom-0 py-[20px] w-full h-[80px] msmall:h-[70px] bg-[#d27aff] text-[#ffffff] text-[1.375rem] mmedium:text-[1.25rem] msmall:text-[1.125rem] text-center font-['Good_Timing_Regular']">
                Школьный зачет
              </p>
            </div>
          </div>
        </section>

        <Itinerary />

        <Address />

        <section className="relative flex justify-between mt-[-50px] deskWide:mt-[-50px] mlarge:mt-[0px] px-[15%] mlarge:px-[7.5%] w-full h-[600px] mlarge:h-[520px] mmedium:h-[480px] msmall:h-[430px]">
          <img
            src="/static/homePage/text/WhatIsCTFText.png"
            alt="Что такое CTF?"
            className="absolute left-[10.5%] mlarge:left-[5.5%] mlarge:mt-[40px] mmedium:mt-[35px] w-[95vw] mlarge:w-[95vw] mmedium:w-[100vw] h-[140px] mlarge:h-[50px] mmedium:h-[45px] scale-[0.9] mlarge:scale-[0.95]"
          />

          <span className='mt-[140px] mlarge:mt-[110px] msmall:mt-[90px] ml-[20%] mlarge:ml-[0%] text-[#ffffff] text-[1rem] deskWide:text-[1.125rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] font-["Good_Timing"]'>
            <h3 className="text-[#bf5af2] text-[3rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem]">
              CTF (Capture the Flag)
            </h3>

            <p className="mt-[5px] mmedium:mt-[10px]">
              — это соревнования по информационной безопасности в форме
              командной игры, главная цель которой — захватить флаг у соперника
              в приближённых к реальности условиях.
            </p>

            <p className="mt-[20px]">
              Команды решают прикладные задачи, чтобы получить уникальную
              комбинацию символов (флаг).
            </p>

            <p className="mt-[20px]">
              Далее участники отправляют флаг в специальную платформу и получают
              подтверждение, что задача решена верно или стоит попытаться дать
              ответ ещё раз.
            </p>
          </span>
        </section>

        <section className="relative mt-[100px] mlarge:mt-[20px] px-[15%] mmedium:px-[10%] w-full h-[670px] mlarge:h-[1250px]">
          <OfficialDocsImages />

          <img
            src="/static/homePage/text/OfficialDocumentsText.png"
            alt="Официальные документы"
            className="absolute right-[10%] mlarge:right-[5%] mmedium:right-[8.5%] mlarge:mt-[110px] mmedium:mt-[105px] w-[95vw] mlarge:w-[97.5vw] mmedium:w-[100vw] h-[250px] mlarge:h-[80px] mmedium:h-[70px] msmall:h-[65px] scale-[0.9] mlarge:scale-[0.95]"
          />

          <div className="pt-[280px] mlarge:pt-[240px] mmedium:pt-[225px] flex mlarge:block justify-between w-full h-[590px] mlarge:h-[900px]">
            <a
              href="/static/homePage/documents/Pologenie.pdf"
              className="relative flex items-center w-[30%] mlarge:w-full h-full mlarge:h-[300px] bg-[#0d0d0d] border-[1px] border-[#ffffff] rounded-[25px] text-[#ffffff] overflow-hidden"
            >
              <img
                src="/static/homePage/background/BubblesBg5.png"
                alt="Пузырьки5"
                className="absolute msmall:mt-[-40px] z-[0]"
              />

              <h3 className='absolute top-[20px] right-[10%] w-full text-[#bf5af2] text-[1.5rem] text-right font-["Good_Timing"] font-bold'>
                /DOC
              </h3>

              <p className="px-[10%] w-full text-[0.875rem] font-bold leading-[1.75] z-10">
                О проведении Всероссийских соревнований в области информационной
                безопасности «Кубок CTF России»
              </p>

              <p className='absolute bottom-[5px] w-full text-[2.25rem] msmall:text-[2rem] text-center font-["Good_Timing"] font-bold'>
                положение
              </p>
            </a>

            <a
              href="/static/homePage/documents/Reglament.pdf"
              className="relative flex items-center mlarge:mt-[30px] w-[30%] mlarge:w-full h-full mlarge:h-[300px] bg-[#0d0d0d] border-[1px] border-[#ffffff] rounded-[25px] text-[#ffffff] overflow-hidden"
            >
              <img
                src="/static/homePage/background/BubblesBg6.png"
                alt="Пузырьки6"
                className="absolute msmall:bottom-[0px] z-[0]"
              />

              <h3 className='absolute top-[20px] right-[10%] w-full text-[#bf5af2] text-[1.5rem] text-right font-["Good_Timing"] font-bold'>
                /DOC
              </h3>

              <p className="px-[10%] w-full text-[1rem] font-bold leading-[1.75] z-10">
                Правила проведения отборочного этапа VII Кубка CTF России
              </p>

              <p className='absolute bottom-[5px] w-full text-[2.25rem] msmall:text-[2rem] text-center font-["Good_Timing"] font-bold'>
                регламенты
              </p>
            </a>

            <div className="relative flex items-center mlarge:mt-[30px] w-[30%] mlarge:w-full h-full mlarge:h-[300px] bg-[#0d0d0d] border-[1px] border-[#ffffff] rounded-[25px] text-[#ffffff] overflow-hidden">
              <img
                src="/static/homePage/background/BubblesBg7.png"
                alt="Пузырьки7"
                className="absolute msmall:mt-[-40px] z-[0]"
              />

              <h3 className='absolute top-[20px] right-[10%] w-full text-[#bf5af2] text-[1.5rem] text-right font-["Good_Timing"] font-bold'>
                /DOC
              </h3>

              <p className="px-[10%] w-full text-[1rem] font-bold leading-[1.75] z-10">
                Появится ближе к дате очных этапов
              </p>

              <p className='absolute bottom-[5px] w-full text-[2.25rem] msmall:text-[2rem] text-center font-["Good_Timing"] font-bold'>
                памятка
              </p>
            </div>
          </div>
        </section>

        {/* Убрали из-за того, что срок вышел 27 октября <TheExpirationAlert />*/}
      </main>

      <TheFooter />
    </>
  );
}
