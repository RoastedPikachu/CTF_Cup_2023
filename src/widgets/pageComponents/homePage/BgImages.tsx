'use client';
import React from 'react';

import { useAppSelector } from '@/store/storeHooks';
import { RootState } from '@/store';

const BgImages = () => {
    const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

    return (
        <>
            <div className='absolute mt-[-80px] deskWide:mt-[-80px] mlarge:mt-[-15%] msmall:mt-[-26.5%] mlarge:ml-[0%] deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-[1250px] mlarge:h-[600px] mlarge:overflow-hidden'>
                <img src={isMobile ? '/static/homePage/background/GreetingsBubblesPhoneImage.png' : '/static/homePage/background/GreetingsBubblesImage.png'} alt='Пузырьки' className='absolute w-full h-full scale-[1] mlarge:scale-[1.15] msmall:scale-[0.95] mlarge:object-cover z-[-1]'/>
            </div>

            {!isMobile && <div className='absolute mt-[2010px] deskWide:mx-[calc((100%-1440px)/2)] w-full max-w-[1440px] h-[2800px] overflow-y-hidden'>
                <img src='/static/homePage/background/WaterCoolingImage.png' alt='Водянка задний фон' className='absolute w-full z-[-1]'/>
            </div>}
        </>
    );
};

export default BgImages;