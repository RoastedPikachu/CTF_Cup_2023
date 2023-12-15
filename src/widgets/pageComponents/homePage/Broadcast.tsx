"use client";
import React, { useState } from "react";

const Broadcast = () => {
  const [isFirstDayVideo, setIsFirstDayVideo] = useState(true);

  return (
    <section className="pt-[200px] px-[10%] mlarge:px-[5%] w-full h-[980px] mlarge:h-[650px] mmedium:h-[620px] msmall:h-[570px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.89)_16.01%,#000_28.81%,#000_100%)]">
      <div className="relative w-full h-[500px] mlarge:h-[210px] mmedium:h-[190px] msmall:h-[160px] border-[1px] border-[#ffffff] rounded-[25px]">
        <p className='absolute top-[-20px] mlarge:top-[-15px] left-[30px] mlarge:left-[20px] py-[5px] px-[20px] mlarge:px-[15px] bg-[#111111] border-[1px] border-[#ffffff] rounded-[40px] text-[#ffffff] text-[1rem] mlarge:text-[0.875rem] font-["Good_Timing"] font-bold'>
          online
        </p>

        {isFirstDayVideo ? (
          <iframe
            src="https://vk.com/video_ext.php?oid=-153821859&id=456239049&hd=2"
            width="100%"
            height="100%"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
            className="mmedium:w-[99.9%] rounded-[25px]"
          ></iframe>
        ) : (
          <iframe
            src="https://vk.com/video_ext.php?oid=-153821859&id=456239050"
            width="100%"
            height="100%"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
            className="mmedium:w-[99.9%] rounded-[25px]"
          ></iframe>
        )}
      </div>

      <p className="mt-[80px] mlarge:mt-[50px] w-full text-[#ffffff] text-[2rem] mlarge:text-[1.5rem] mmedium:text-[1.375rem] msmall:text-[1.25rem] text-center font-['Good_Timing']">
        Смотреть трансляцию
      </p>

      <div className="flex justify-between items-center mt-[30px] mx-[32.5%] mlarge:mx-[10%] w-[35%] mlarge:w-[80%] h-[75px] mlarge:h-[50px]">
        <button
          onClick={() => setIsFirstDayVideo(true)}
          className="w-[47.5%] h-full bg-[#191919] rounded-[45px] text-[#9e9cff] text-[1.5rem] mlarge:text-[1.125rem] text-center font-['Good_Timing'] outline-none"
        >
          1 день
        </button>

        <button
          onClick={() => setIsFirstDayVideo(false)}
          className="w-[47.5%] h-full bg-[#191919] rounded-[45px] text-[#d27aff] text-[1.5rem] mlarge:text-[1.125rem] text-center font-['Good_Timing'] outline-none"
        >
          2 день
        </button>
      </div>
    </section>
  );
};

export default Broadcast;
