"use client";
import React, { useState } from "react";

interface Result {
  id: number;
  name: string;
  city: string;
}

interface StudentsResult extends Result {
  almaMater: string;
}

const Results = () => {
  const [results, setResults] = useState([
    {
      id: 1,
      isOpen: false,
    },
    {
      id: 2,
      isOpen: false,
    },
    {
      id: 3,
      isOpen: false,
    },
  ]);

  const [schoolResults, setSchoolResults] = useState([
    {
      id: 1,
      name: "ЕНОТИКИ",
      city: "Новосибирск, Оренбург, Москва, Красноярск",
    },
    {
      id: 2,
      name: "TALKSABOUTWETTHINGS",
      city: "Москва",
    },
    {
      id: 3,
      name: "УТЯТА",
      city: "Москва, Власиха",
    },
    {
      id: 4,
      name: "[MADOKA] ARCHEVODЫЫ",
      city: "Оренбург, Новосибирск, Томск, Санкт-Петербург",
    },
    {
      id: 5,
      name: "XLS TEAM",
      city: "Россошь, Воронеж",
    },
    {
      id: 6,
      name: "CYBERSQD",
      city: "Самара",
    },
    {
      id: 7,
      name: "P7DTTRM",
      city: "Москва",
    },
    {
      id: 8,
      name: "РАДИОРЫНОК №13",
      city: "Тюмень",
    },
    {
      id: 9,
      name: "K1TT3N5",
      city: "Москва",
    },
    {
      id: 10,
      name: "BITAPS",
      city: "Москва, Лесосибирск, Нижний Новгород",
    },
  ] as Result[]);

  const [mixedResults, setMixedResults] = useState([
    {
      id: 1,
      name: "SPRUSH",
      city: "Москва",
    },
    {
      id: 2,
      name: "FR13NDS TEAM",
      city: "Астана, Казахстан",
    },
    {
      id: 3,
      name: "REDHAZZARTEAM",
      city: "Москва, Грозный, Рязань",
    },
    {
      id: 4,
      name: "BULBA HACKERS",
      city: "Минск, Беларусь",
    },
    {
      id: 5,
      name: "SMILEY-FROM-TELEGA",
      city: "Новосибирск, Санкт-Петербург",
    },
    {
      id: 6,
      name: "QUAL3NC3",
      city: "Санкт-Петербург, Екатеринбург",
    },
    {
      id: 7,
      name: "LITTLE COMPUTER DEMONS",
      city: "Москва",
    },
    {
      id: 8,
      name: "[MADOKA] CTF LOVERS",
      city: "Санкт-Петербург, Одинцово",
    },
    {
      id: 9,
      name: "DDOST4R",
      city: "Астана, Казахстан",
    },
    {
      id: 10,
      name: "DROVOSEC",
      city: "Москва, Санкт-Петербург",
    },
  ] as Result[]);

  const [studentsResults, setStudentsResults] = useState([
    {
      id: 1,
      name: "DTL",
      city: "Москва",
      almaMater: "МИФИ",
    },
    {
      id: 2,
      name: "UZUZUGA",
      city: "Иннополис",
      almaMater: "Иннополис",
    },
    {
      id: 3,
      name: "[MIEM] N_K_N",
      city: "Москва",
      almaMater: "ВШЭ",
    },
    {
      id: 4,
      name: "CR4.SH",
      city: "Москва",
      almaMater: "МИРЭА",
    },
    {
      id: 5,
      name: "FAKAPPA",
      city: "Санкт-Петербург",
      almaMater: "ИТМО",
    },
    {
      id: 6,
      name: "RED CADETS",
      city: "Санкт-Петербург",
      almaMater: "ВКА",
    },
    {
      id: 7,
      name: "SIGAN",
      city: "Оренбург",
      almaMater: "ОГУ",
    },
    {
      id: 8,
      name: "NON@ME13",
      city: "Орёл",
      almaMater: "АФСО",
    },
    {
      id: 9,
      name: "ЛЕTEAM В ТОП",
      city: "Москва",
      almaMater: "МГТУ ГА",
    },
    {
      id: 10,
      name: "CYBERKTITS",
      city: "Казань",
      almaMater: "ГАПОУ МЦК-КТИТС",
    },
  ] as StudentsResult[]);

  return (
    <section className="deskWide:mb-[100px] px-[10%] deskWide:px-[0%] mlarge:px-[5%] w-full">
      <img
        src="/static/infoPage/text/ResultsText.png"
        alt="Итоги отборочного этапа"
        className="mt-[150px] mlarge:mt-[100px] w-[45%] mlarge:w-[50%] mmedium:w-[60%]"
      />

      <div className="mt-[100px] mlarge:mt-[50px]">
        <div className="relative w-full">
          <div className="flex justify-evenly items-center mlarge:mt-[30px] mb-[50px] mlarge:mb-[30px] w-[40%] mlarge:w-[60%] h-[75px] mlarge:h-[50px] border-[2px] border-[#bf5af2] rounded-[40px] mlarge:rounded-[30px]">
            <img
              src="/static/infoPage/text/SchoolResultsText.png"
              alt="Результаты школьного зачёта"
              className="mlarge:w-[60%]"
            />

            <button
              onClick={() => {
                results[0].isOpen = !results[0].isOpen;
                setResults([...results]);
              }}
              className="outline-none"
            >
              <img
                src="/static/infoPage/icon/SchoolTopArrowIcon.svg"
                alt="Открыть список из топ 10 участников школьного зачета"
                className={`mt-[10px] mlarge:mt-[2.5px] mlarge:w-[22.5px] mlarge:h-[25px] ${
                  results[0].isOpen ? "rotate-0" : "rotate-[180deg]"
                } duration-[1000ms] ease-in-out`}
              />
            </button>
          </div>

          {results[0].isOpen &&
            schoolResults.map((team) => (
              <div
                key={team.id}
                className={`relative flex items-center mt-[15px] px-[2.5%] w-full h-[45px] mmedium:h-[55px] bg-[rgba(217,217,217,0.08)] ${
                  team.id === 1
                    ? "border-[2px] border-[#d27aff] text-[#d27aff]"
                    : team.id === 2
                    ? "border-[2px] border-[#9e9cff] text-[#9e9cff]"
                    : team.id === 3
                    ? "border-[2px] border-[#7dffa9] text-[#7dffa9]"
                    : "text-[#ffffff]"
                } backdrop-blur-sm rounded-[20px]`}
              >
                {team.id === 1 && (
                  <img
                    src="/static/infoPage/icon/SchoolFirstPlaceIcon.svg"
                    alt="Первое место"
                    className="absolute mlarge:hidden mt-[-2.5px] ml-[-60px] w-[20px] h-[20px]"
                  />
                )}

                <p className="w-[15%] mmedium:w-[17.5%] text-[1.75rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem] font-['Good_Timing'] font-bold">
                  {team.id > 0 && team.id < 10 ? `0${team.id}` : team.id}
                </p>

                <p
                  className={`w-[35%] ${
                    team.id === 8
                      ? "mlarge:w-[50%]"
                      : "mlarge:w-[45%] mmedium:w-[47.5%]"
                  } text-[1.125rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] ${
                    team.id === 2 ? "msmall:text-[0.7rem]" : ""
                  } text-left font-['Good_Timing_Regular'] tracking-widest`}
                >
                  {team.name}
                </p>

                <p
                  className={`w-[60%] ${
                    team.id === 8
                      ? "mlarge:w-[35%]"
                      : "mlarge:w-[40%] mmedium:w-[35%]"
                  } text-[0.875rem] mlarge:text-[0.625rem] msmall:text-[0.5rem] text-right font-regular tracking-wider`}
                >
                  {team.city}
                </p>
              </div>
            ))}
        </div>

        <div className="relative w-full">
          <div className="flex justify-evenly items-center mt-[50px] mlarge:mt-[30px] mb-[50px] mlarge:mb-[30px] w-[42.5%] mlarge:w-[65%] h-[75px] mlarge:h-[50px] border-[2px] border-[#8c8aff] rounded-[40px] mlarge:rounded-[30px]">
            <img
              src="/static/infoPage/text/MixedResultsText.png"
              alt="Результаты смешанного зачёта"
              className="mlarge:w-[65%]"
            />

            <button
              onClick={() => {
                results[1].isOpen = !results[1].isOpen;
                setResults([...results]);
              }}
              className="outline-none"
            >
              <img
                src="/static/infoPage/icon/MixedTopArrowIcon.svg"
                alt="Открыть список из топ 10 участников смешанного зачета"
                className={`mt-[10px] mlarge:mt-[2.5px] mlarge:w-[22.5px] mlarge:h-[25px] ${
                  results[1].isOpen ? "rotate-0" : "rotate-[180deg]"
                } duration-[1000ms] ease-in-out`}
              />
            </button>
          </div>

          {results[1].isOpen &&
            mixedResults.map((team) => (
              <div
                key={team.id}
                className={`relative flex items-center mt-[15px] px-[2.5%] w-full h-[45px] mmedium:h-[55px] bg-[rgba(217,217,217,0.08)] ${
                  team.id === 1
                    ? "border-[2px] border-[#9e9cff] text-[#9e9cff]"
                    : team.id === 2
                    ? "border-[2px] border-[#7dffa9] text-[#7dffa9]"
                    : team.id === 3
                    ? "border-[2px] border-[#d27aff] text-[#d27aff]"
                    : "text-[#ffffff]"
                } backdrop-blur-sm rounded-[20px]`}
              >
                {team.id === 1 && (
                  <img
                    src="/static/infoPage/icon/MixedFirstPlaceIcon.svg"
                    alt="Первое место"
                    className="absolute mlarge:hidden mt-[-2.5px] ml-[-60px] w-[20px] h-[20px]"
                  />
                )}

                <p className="w-[15%] text-[1.75rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem] font-['Good_Timing'] font-bold">
                  {team.id > 0 && team.id < 10 ? `0${team.id}` : team.id}
                </p>

                <p
                  className={`w-[35%] ${
                    team.id === 7 ? "mlarge:w-[55%]" : "mlarge:w-[45%]"
                  } text-[1.125rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] text-left font-['Good_Timing_Regular'] tracking-widest`}
                >
                  {team.name}
                </p>

                <p
                  className={`w-[60%] ${
                    team.id === 7 ? "mlarge:w-[30%]" : "mlarge:w-[40%]"
                  } text-[0.875rem] mlarge:text-[0.625rem] msmall:text-[0.5rem] text-right font-regular tracking-wider`}
                >
                  {team.city}
                </p>
              </div>
            ))}
        </div>

        <div>
          <div className="flex justify-evenly items-center mlarge:mt-[30px] mb-[50px] mlarge:mb-[30px] w-[60%] mlarge:w-[75%] msmall:w-[80%] h-[75px] mlarge:h-[50px] border-[2px] border-[#6bf89a] rounded-[40px] mlarge:rounded-[30px]">
            <img
              src="/static/infoPage/text/StudentsResultsText.png"
              alt="Результаты академического зачёта"
              className="mlarge:w-[75%]"
            />

            <button
              onClick={() => {
                results[2].isOpen = !results[2].isOpen;
                setResults([...results]);
              }}
              className="outline-none"
            >
              <img
                src="/static/infoPage/icon/StudentsTopArrowIcon.svg"
                alt="Открыть список из топ 10 участников академического зачета"
                className={`mt-[10px] mlarge:mt-[2.5px] mlarge:w-[22.5px] mlarge:h-[25px] ${
                  results[2].isOpen ? "rotate-0" : "rotate-[180deg]"
                } duration-[1000ms] ease-in-out`}
              />
            </button>
          </div>

          {results[2].isOpen &&
            studentsResults.map((team) => (
              <div
                key={team.id}
                className={`relative flex items-center mt-[15px] px-[2.5%] w-full h-[45px] mmedium:h-[55px] bg-[rgba(217,217,217,0.08)] ${
                  team.id === 1
                    ? "border-[2px] border-[#7dffa9] text-[#7dffa9]"
                    : team.id === 2
                    ? "border-[2px] border-[#9e9cff] text-[#9e9cff]"
                    : team.id === 3
                    ? "border-[2px] border-[#d27aff] text-[#d27aff]"
                    : "text-[#ffffff]"
                } backdrop-blur-sm rounded-[20px]`}
              >
                {team.id === 1 && (
                  <img
                    src="/static/infoPage/icon/StudentsFirstPlaceIcon.svg"
                    alt="Первое место"
                    className="absolute mt-[-2.5px] ml-[-60px] w-[20px] h-[20px]"
                  />
                )}

                <p className="w-[15%] text-[1.75rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem] font-['Good_Timing'] font-bold">
                  {team.id > 0 && team.id < 10 ? `0${team.id}` : team.id}
                </p>

                <p
                  className={`w-[35%] ${
                    team.id === 10 ? "mlarge:w-[35%]" : "mlarge:w-[40%]"
                  } ${
                    team.id === 9 ? "mlarge:w-[45%]" : "mlarge:w-[40%]"
                  } msmall:w-[45%] text-[1.125rem] mlarge:text-[0.875rem] mmedium:text-[0.75rem] text-left font-['Good_Timing_Regular'] tracking-widest`}
                >
                  {team.name}
                </p>

                <p
                  className={`w-[30%] ${
                    team.id === 10 ? "mlarge:w-[30%]" : "mlarge:w-[25%]"
                  } ${
                    team.id === 9 ? "mlarge:w-[20%]" : "mlarge:w-[25%]"
                  } msmall:w-[20%] text-[1.125rem] mlarge:text-[0.75rem] mmedium:text-[0.625rem] text-left font-['Good_Timing_Regular'] tracking-widest`}
                >
                  {team.almaMater}
                </p>

                <p className="w-[30%] mlarge:w-[20%]text-[0.875rem]  mlarge:text-[0.625rem] msmall:text-[0.5rem] text-right font-regular tracking-wider">
                  {team.city}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
