import React from "react";

import TheHeader from "@/widgets/shared/TheHeader";
import TheFooter from "@/widgets/shared/TheFooter";

const Page = () => {
  return (
    <>
      <TheHeader />

      <main className="relative mt-[80px] deskWide:mx-[calc((100%-1440px)/2)] px-[10%] deskWide:px-0 mlarge:px-[5%] pb-[100px] w-full max-w-[1440px] h-auto min-h-[800px] mlarge:min-h-[1200px] overflow-hidden">
        <img
          src="/static/secretPage/text/PhasesFuelProcessingText.png"
          alt="Фазы обработки топлива"
          className="mt-[50px]"
        />

        <p className="mt-[30px] p-[30px] bg-[rgba(255,255,255,0.04)] rounded-[20px] text-[#ffffff] text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Good_Timing_Regular'] font-regular backdrop-blur-sm">
          В первой фазе просиходит сбор и переработка мусора, отходов и другого
          сырья. Специальные системы подготавливают сырье для последующей
          обработки. Они производят сортировку и удаляют нежелательные
          компоненты, чтобы получить оптимальное качество исходного материала
          для последующей обработки.
        </p>

        <p className="mt-[20px] p-[30px] bg-[rgba(255,255,255,0.04)] rounded-[20px] text-[#ffffff] text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Good_Timing_Regular'] font-regular backdrop-blur-sm">
          Вторая фаза — реакционная обработка. В этой фазе происходит
          взаимодействие подготовленного сырья с катализаторами и специальными
          добавками в реакторах. Происходит запуск процесса химической реакции
          при которой получают новое вещество - основу будущего Synthetix.
          Важным параметром на этом этапе является регулировка температуры,
          давления и времени нахождения вещества в реакторе для достижения
          нужных химических свойств синтетического топлива.
        </p>

        <p className="mt-[20px] p-[30px] bg-[rgba(255,255,255,0.04)] rounded-[20px] text-[#ffffff] text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Good_Timing_Regular'] font-regular backdrop-blur-sm">
          Третья фаза включает регулировку и улучшение характеристик полученной
          синтетической нефти. Здесь происходят процессы очистки,
          дополнительного смешивания и доработки продукта, чтобы достичь
          оптимальных характеристик, таких как вязкость, плотность и
          стабильность. Очищенный Synthetix проходит через специальные фильтры и
          системы разделения, чтобы удалить остаточные примеси и обеспечить
          стабильность топлива.
        </p>

        <p className="mt-[20px] p-[30px] bg-[rgba(255,255,255,0.04)] rounded-[20px] text-[#ffffff] text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] font-['Good_Timing_Regular'] font-regular backdrop-blur-sm">
          Финальная, четвертая, фаза производства включает упаковку и хранение
          готового Synthetix. Продукт может быть упакован в специальные емкости
          или контейнеры для удобства транспортировки и использования. Завод
          также оснащен системами контроля качества, которые проверяют
          характеристики нефти перед упаковкой и отправкой на склады или в
          другие точки назначения.
        </p>

        <div className="flex mlarge:block items-start mt-[20px] w-full">
          <div className="p-[30px] w-[410px] mlarge:w-full h-[420px] bg-[rgba(255,255,255,0.04)] rounded-[20px] backdrop-blur-sm">
            <div className="flex items-center justify-center">
              <h3 className="text-[#ffffff] text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.125rem] text-left font-['Good_Timing_Regular']">
                Телепорт здесь
              </h3>

              <img
                src="/static/secretPage/icon/RightArrowIcon.svg"
                alt=""
                className="mt-[5px] ml-[15px] w-[50px] h-[20px]"
              />
            </div>

            <img
              src="/static/secretPage/gif/FakeGif.png"
              alt=""
              className="mt-[20px] w-[350px] h-[300px] rounded-[20px]"
            />
          </div>

          <a
            href="https://t.me/hbgaaksbffaiqwe_bot"
            className="mlarge:block mlarge:mt-[20px] ml-[20px] mlarge:ml-0 py-[30px] px-[50px] mlarge:px-0 bg-[rgba(255,255,255,0.04)] rounded-[20px] text-[#d27aff] text-[2rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.125rem] mlarge:text-center font-['Good_Timing'] backdrop-blur-sm"
          >
            @hbgaaksbffaiqwe_bot
          </a>
        </div>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
