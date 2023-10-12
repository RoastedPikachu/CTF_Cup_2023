import React from "react";

import TheHeader from "@/widgets/shared/TheHeader";
import TheFooter from "@/widgets/shared/TheFooter";

import PartnersWidgets from "@/widgets/pageComponents/partnersPage/PartnersWidgets";

const Page = () => {
  return (
    <>
      <TheHeader />

      <main className="relative deskWide:mx-[calc((100%-1440px)/2)] px-[10%] mlarge:px-[5%] pb-[100px] w-full max-w-[1440px]">
        <img
          src="/static/partnersPage/text/PartnersText.svg"
          alt="Партнеры"
          className="mt-[50px] mlarge:mt-[20px] mmedium:mt-[15px] msmall:mt-[10px] w-[50%] mlarge:w-[65%]"
        />

        <PartnersWidgets />
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
