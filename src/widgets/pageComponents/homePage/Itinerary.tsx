"use client";
import React from "react";

import { Carousel } from "react-responsive-carousel";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Itinerary = () => {
  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

  return (
    <section className="relative px-[15%] mlarge:px-[7.5%] w-full mlarge:w-full h-[750px]">
      <img
        src="/static/homePage/text/RaspisanieText.png"
        alt="Расписание"
        className="absolute left-[10.5%] mlarge:left-[5%] mt-[-160px] mlarge:mt-[-75px] mmedium:mt-[-70px] w-[90vw] mlarge:w-[95vw] h-[120px] mlarge:h-[40px] mmedium:h-[35px] scale-[0.9] mlarge:scale-[0.95]"
      />

      {!isMobile ? (
        <>
          <div className='flex justify-between mlarge:block mt-[200px] mlarge:mt-[110px] w-full h-[670px] text-[#ffffff] font-["Good_Timing"]'>
            <div className="relative py-[10px] px-[15px] w-[32.5%] h-[660px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px]">
              <img
                src="/static/homePage/background/BubblesBg1.png"
                alt="Пузырьки2"
                className="absolute ml-[-15px] w-full h-[calc(100%-10px)] z-[-1]"
              />

              <div className="flex justify-end items-center h-[50px]">
                <div className="pr-[2.5px] text-[1rem]">
                  <p className="text-[#bf5af2]">Task based</p>

                  <p className="mt-[-7.5px] text-right">октября</p>
                </div>

                <p className="text-[2.5rem]">28-29</p>
              </div>

              <p className="mt-[30px] w-[100%] deskWide:text-[1.125rem]">
                отборочный этап 24 часа <br /> с 12:00 до 12:00 <br />
                <br /> В 11:00 на почту, указанную при регистрации, будет
                отправлена ссылка
              </p>

              <p className="absolute bottom-[-15px] text-[5.5rem]">online</p>
            </div>

            <div className="w-[63.5%] h-full">
              <div className="flex justify-between w-full">
                <div className="relative py-[10px] px-[15px] w-[47%] h-[400px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden">
                  <img
                    src="/static/homePage/background/BubblesBg2.png"
                    alt="Пузырьки3"
                    className="absolute mt-[15px] ml-[0px] w-[calc(100%-10px)] h-[calc(100%-10px)] z-[-1] scale-[1.15]"
                  />

                  <div className="flex justify-end items-center h-[50px]">
                    <div className="pr-[2.5px] text-[1rem]">
                      <p className="text-[#bf5af2]">Attack/Defence</p>

                      <p className="mt-[-7.5px] text-right">декабря</p>
                    </div>

                    <p className="text-[2.5rem]">08</p>
                  </div>

                  <p className="mt-[30px] w-[100%] deskWide:text-[1.125rem]">
                    полуфинал <br /> с 9:00 до 19:30, <br /> «Сколково»
                  </p>

                  <p className="absolute bottom-[-15px] text-[4.75rem]">
                    offline
                  </p>
                </div>

                <div className="relative py-[10px] px-[15px] w-[47%] h-[400px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden">
                  <img
                    src="/static/homePage/background/BubblesBg3.png"
                    alt="Пузырьки4"
                    className="absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110"
                  />

                  <div className="flex justify-end items-center h-[50px]">
                    <div className="pr-[2.5px] text-[1rem] text-right">
                      <p className="text-[#bf5af2]">Final</p>

                      <p className="mt-[-7.5px]">декабря</p>
                    </div>

                    <p className="text-[2.5rem]">09</p>
                  </div>

                  <p className="mt-[30px] w-[100%] deskWide:text-[1.125rem]">
                    финал <br /> с 9:00 до 20:00, <br /> «Сколково»
                  </p>

                  <p className="absolute bottom-[-15px] text-[4.75rem]">
                    offline
                  </p>
                </div>
              </div>

              <div className="relative mt-[35px] w-full h-[210px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] ">
                <div className="relative py-[10px] pl-[30px] pr-[15px] w-full h-full overflow-hidden">
                  <img
                    src="/static/homePage/background/BubblesBg4.png"
                    alt="Пузырьки5"
                    className="absolute mt-[-10px] w-full h-[calc(100%-10px)] z-[-1] scale-110"
                  />

                  <div className='flex justify-between mt-[10px] w-full text-[#ffffff] text-[1rem] font-["Good_Timing"]'>
                    <span className="w-[50%] deskWide:text-[1.125rem]">
                      <p>
                        финал для школьных команд <br /> с 9:00 до 19:30, <br />
                        «Сколково»
                      </p>{" "}
                      <br />
                      <p className="mt-[-10px] deskWide:mt-[-20px] text-[0.75rem] deskWide:text-[0.875rem]">
                        награждение состоится <br />
                        <strong className="text-[#bf5af2]">
                          9 декабря
                        </strong>, <br /> а потом — афтепати
                      </p>
                    </span>

                    <div className="flex justify-end items-center h-[50px]">
                      <div className="pr-[2.5px] text-[1rem]">
                        <p className="text-[#bf5af2]">Final</p>

                        <p className="mt-[-7.5px] text-right">декабря</p>
                      </div>

                      <p className="text-[2.5rem]">08</p>
                    </div>
                  </div>

                  <p className="absolute bottom-[-20px] right-[15px] text-[5.25rem]">
                    offline
                  </p>
                </div>

                <p className="absolute bottom-[-20px] left-[60px] px-[40px] py-[7.5px] height-[40px] text-[#ffffff] text-[1rem] font-[Good_Timing] font-bold bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px]">
                  школьники
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Carousel
            ariaLabel="div"
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            className='mt-[110px] w-full h-[480px] msmall:h-[450px] text-[#ffffff] font-["Good_Timing"]'
          >
            <div className="absolute py-[10px] px-[20px] w-[95%] h-[480px] msmall:h-[450px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden">
              <img
                src="/static/homePage/background/BubblesPhoneBg1.png"
                alt="Пузырьки2"
                className="absolute mt-[-2.5%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1.05]"
              />

              <div className="flex justify-end items-center h-[50px]">
                <div className="pr-[2.5px] text-[1rem] msmall:text-[0.875rem]">
                  <p className="msmall:mt-[-2.5px] text-[#bf5af2]">
                    Task based
                  </p>

                  <p className="mt-[-7.5px] text-right">октября</p>
                </div>

                <p className="text-[2.5rem] msmall:text-[2.25rem]">28-29</p>
              </div>

              <p className="mt-[50px] w-[85%] text-[1rem] text-left leading-[2]">
                отборочный этап 24 часа <br /> с 12:00 до 12:00 <br />
                <br /> В 11:00 на почту, указанную при регистрации, будет
                отправлена ссылка.
              </p>

              <p className="absolute left-[17.5px] mmedium:left-[15px] msmall:left-[12.5px] bottom-[-25px] mmedium:bottom-[-20px] msmall:bottom-[-15px] text-[6rem] mmedium:text-[5.25rem] msmall:text-[4.5rem]">
                online
              </p>
            </div>

            <div className="absolute py-[10px] px-[20px] w-[95%] h-[480px] msmall:h-[450px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden">
              <img
                src="/static/homePage/background/BubblesPhoneBg2.png"
                alt="Пузырьки3"
                className="absolute mt-[-2.5%] mmedium:mt-[-5%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1]"
              />

              <div className="flex justify-end items-center h-[50px]">
                <div className="pr-[2.5px] text-[1rem] msmall:text-[0.875rem]">
                  <p className="msmall:mt-[-2.5px] text-[#bf5af2]">
                    Attack/Defence
                  </p>

                  <p className="mt-[-7.5px] text-right">декабря</p>
                </div>

                <p className="text-[2.5rem] msmall:text-[2.25rem]">08</p>
              </div>

              <p className="mt-[50px] w-[85%] text-[1rem] text-left leading-[2]">
                полуфинал <br /> с 9:00 до 19:30, <br /> «Сколково»
              </p>

              <p className="absolute left-[15px] msmall:left-[12.5px] bottom-[-22.5px] mmedium:bottom-[-17.5px] msmall:bottom-[-12.5px] text-[5.75rem] mmedium:text-[5rem] msmall:text-[4.25rem]">
                offline
              </p>
            </div>

            <div className="relative py-[10px] px-[20px] w-[95%] h-[480px] msmall:h-[450px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px] overflow-hidden">
              <img
                src="/static/homePage/background/BubblesPhoneBg3.png"
                alt="Пузырьки4"
                className="absolute mt-[-5%] ml-[-50%] w-full h-[calc(100%-10px)] z-[-1] scale-[1]"
              />

              <div className="flex justify-end items-center h-[50px]">
                <div className="pr-[2.5px] text-[1rem] msmall:text-[0.875rem] text-right">
                  <p className="msmall:mt-[-2.5px] text-[#bf5af2]">Final</p>

                  <p className="mt-[-7.5px]">декабря</p>
                </div>

                <p className="text-[2.5rem] msmall:text-[2.25rem]">09</p>
              </div>

              <p className="mt-[50px] w-[85%] text-[1rem] text-left leading-[2]">
                финал <br /> с 9:00 до 20:00, <br /> «Сколково»
              </p>

              <p className="absolute left-[15px] msmall:left-[12.5px] bottom-[-22.5px] mmedium:bottom-[-17.5px] msmall:bottom-[-12.5px] text-[5.75rem] mmedium:text-[5rem] msmall:text-[4.25rem]">
                offline
              </p>
            </div>
          </Carousel>

          <div className="relative mt-[30px] w-full h-[260px] bg-[#0d0d0d0] border-[1px] border-[#ffffff] rounded-[25px]">
            <div className="relative py-[10px] pl-[30px] pr-[15px] w-full h-full overflow-hidden">
              <img
                src="/static/homePage/background/BubblesPhoneBg4.png"
                alt="Пузырьки5"
                className="absolute right-[5.5%] mt-[-10px] w-[95%] h-[calc(100%-10px)] z-[-1] scale-110 rounded-[30px]"
              />

              <div className='relative mt-[45px] mmedium:mt-[50px] msmall:mt-[60px] w-full text-[#ffffff] text-[0.875rem] font-["Good_Timing"]'>
                <span className="w-[80%] mmedium:w-[50%] text-[0.875rem] mmedium:text-[0.75rem] leading-[1.5]">
                  <p className="mt-[20px]">
                    финал для школьных <br /> команд с 9:00 до 19:30, <br />
                    «Сколково»
                  </p>{" "}
                  <br />
                  <p className="mt-[-10px] text-[0.75rem] mmedium:text-[0.625rem] leading-[1.15]">
                    награждение состоится <br />{" "}
                    <strong className="text-[#bf5af2]">9 декабря</strong>,
                    <br /> а потом — афтепати
                  </p>
                </span>

                <div className="absolute flex justify-end items-center right-[0px] top-[-45px] mmedium:top-[-50px] msmall:top-[-60px] h-[50px]">
                  <div className="pr-[2.5px] text-[1rem] msmall:text-[0.875rem]">
                    <p className="text-[#bf5af2] text-right">Final</p>

                    <p className="mt-[-7.5px] text-right">декабря</p>
                  </div>

                  <p className="text-[2.5rem] msmall:text-[2rem]">08</p>
                </div>
              </div>

              <p className="absolute bottom-[-20px] msmall:bottom-[-12.5px] right-[15px] text-[#ffffff] text-[5.25rem] mmedium:text-[5rem] msmall:text-[4.25rem] font-bold">
                offline
              </p>
            </div>

            <p className="absolute bottom-[-20px] msmall:bottom-[-15px] left-[20px] msmall:left-[15px] px-[40px] msmall:px-[25px] py-[7.5px] msmall:py-[5px] height-[40px] text-[#ffffff] text-[1rem] msmall:text-[0.875rem] font-[Good_Timing] font-bold bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px]">
              школьники
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Itinerary;
