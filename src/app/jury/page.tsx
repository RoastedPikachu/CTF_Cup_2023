import React from "react";

import TheHeader from "@/widgets/shared/TheHeader";
import TheFooter from "@/widgets/shared/TheFooter";

import PersonInfo from "@/widgets/shared/PersonInfo";

const Page = () => {
  return (
    <>
      <TheHeader />

      <main className="mt-[130px] deskWide:mx-[calc((100%-1440px)/2)] px-[10%] deskWide:px-[0px] mlarge:px-[5%] w-full max-w-[1440px] pb-[100px]">
        <img
          src="/static/juryPage/text/JuryText.png"
          alt="Жюри"
          className="mt-[50px] mlarge:mt-[20px] mmedium:mt-[15px] msmall:mt-[10px] w-[45%] mlarge:w-[60%] h-[100px] deskWide:h-[120px] mlarge:h-[50px] mmedium:h-[45px] msmall:h-[40px]"
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/BudnikovAlexandrAvatar.png"}
          personDescription={"Будников Александр"}
          personText={
            "Управляющий директор по информационной безопасности, ПАО АФК «Система»"
          }
          styles={
            "mt-[80px] mlarge:mt-[50px] ml-[150px] deskWide:ml-[200px] mlarge:ml-0"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/BugrovVladimirAvatar.png"}
          personDescription={"Бугров Владимир"}
          personText={
            "Заместитель начальника Департамента технической защиты информации Главного научно-исследовательского вычислительного центра Управления делами Президента Российской Федерации"
          }
          styles={
            "mt-[-10px] mlarge:mt-[50px] ml-[550px] deskWide:ml-[650px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/VolkovSergeyAvatar.png"}
          personDescription={"Волков Сергей"}
          personText={
            "Начальник отдела информационной безопасности, АО «ГОЗНАК»"
          }
          styles={
            "mt-[80px] mlarge:mt-[50px] mmedium:mt-[80px] msmall:mt-[120px] ml-[150px] deskWide:ml-[200px] mlarge:ml-0"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/DerlishIlyaAvatar.png"}
          personDescription={"Дерлыш Илья"}
          personText={"Эксперт информационной безопасности, Росатом"}
          styles={
            "mt-[-80px] mlarge:mt-[50px] ml-[750px] deskWide:ml-[900px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/KaderMichailAvatar.png"}
          personDescription={"Кадер Михаил"}
          personText={
            "Архитектор по информационной безопасности, <strong>Positive Technologies</strong>"
          }
          styles={"mt-[100px] mlarge:mt-[50px] ml-0 deskWide:ml-[50px]"}
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/KuznetsovAndreyAvatar.png"}
          personDescription={"Кузнецов Андрей"}
          personText={
            "Технический директор Национального Киберполигона «Ростелеком-Солар»"
          }
          styles={
            "mt-[-80px] mlarge:mt-[50px] ml-[550px] deskWide:ml-[650px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/MarkovAlexeyAvatar.png"}
          personDescription={"Марков Алексей"}
          personText={
            "Президент группы компаний ГК «Эшелон», доктор технических наук, лауреат премии Правительства РФ в области науки и техники"
          }
          styles={
            "mt-[50px] mlarge:mt-[50px] ml-[150px] deskWide:ml-[250px] mlarge:ml-0"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/MinakovSergeyAvatar.png"}
          personDescription={"Минаков Сергей"}
          personText={
            "Заместитель генерального директора АНО НТЦ ЦК, старший научный сотрудник Академии криптографии РФ"
          }
          styles={
            "mt-[-80px] mlarge:mt-[50px] ml-[750px] deskWide:ml-[900px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/MasalovichAndreyAvatar.png"}
          personDescription={"Масалович Андрей"}
          personText={"Генеральный директор ООО «Лавина Пульс»"}
          styles={
            "mt-[40px] mlarge:mt-[50px] ml-[350px] deskWide:ml-[500px] mlarge:ml-0"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/MichailenkoNatalyaAvatar.png"}
          personDescription={"Михайленко Наталья"}
          personText={
            "Доцент кафедры противодействия преступлениям в сфере ИТТ, Московский университет МВД России им. В.Я. Кикотя, кандидат юридических наук, доцент <br/> Вице-президент Московского регионального отделения Международной полицейской ассоциации"
          }
          styles={
            "mt-[50px] mlarge:mt-[50px] ml-[750px] deskWide:ml-[900px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/LoskutovaOlesyaAvatar.png"}
          personDescription={"Лоскутова Олеся"}
          personText={
            "Заместитель начальника центрального вычислительного центра, Главный информационно-аналитический центр МВД России"
          }
          styles={"mt-[-180px] mlarge:mt-[100px] mmedium:mt-[150px] msmall:mt-[200px] ml-0 deskWide:ml-[50px]"}
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/OvchinnikovViktorAvatar.png"}
          personDescription={"Овчинников Виктор"}
          personText={
            "Начальник отдела информационной безопасности, ООО «М13 ИТ УСЛУГИ»"
          }
          styles={
            "mt-[140px] mlarge:mt-[50px] ml-[50px] deskWide:ml-[50px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/SklyarovDmitriyAvatar.png"}
          personDescription={"Скляров Дмитрий"}
          personText={
            "Руководитель отдела анализа приложений, Positive Technologies"
          }
          styles={
            "mt-[-160px] mlarge:mt-[50px] ml-[650px] deskWide:ml-[700px] mlarge:ml-0"
          }
        />

        <PersonInfo
          imgPath={"/static/juryPage/avatars/TsarevGrigoriyAvatar.png"}
          personDescription={"Царев Григорий"}
          personText={
            "Руководитель направления Центра взаимодействия и реагирования Департамента информационной безопасности Банка России"
          }
          styles={
            "mt-[120px] mlarge:mt-[50px] ml-[300px] deskWide:ml-[350px] mlarge:ml-[25%] mmedium:ml-[20%] msmall:ml-[12.5%]"
          }
        />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
