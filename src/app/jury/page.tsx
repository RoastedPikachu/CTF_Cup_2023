'use client';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "@/store/storeHooks";
import { mobileSlice } from "@/store/storeReducers/MobileSlice";
import { RootState } from '@/store';

import TheHeader from '@/widgets/shared/TheHeader';
import TheMobileHeader from '@/widgets/shared/TheMobileHeader';
import TheFooter from '@/widgets/shared/TheFooter';

import PersonInfo from '@/widgets/shared/PersonInfo';

const Page = () => {
    const dispatch = useAppDispatch();

    const isMobile = useAppSelector((state:RootState) => state.mobile.isMobile);

    const { setIsMobileStatus } = mobileSlice.actions;

    useEffect(() => {
        dispatch(setIsMobileStatus(window.innerWidth < 480));
    }, [])

    return (
        <>
            {!isMobile ? <TheHeader/> : <TheMobileHeader/>}

            <main className='px-[10%] w-full'>
                <img src='/static/juryPage/text/JuryText.svg' alt='Жюри' className='w-[55%]'/>

                <PersonInfo
                    imgPath={'/static/juryPage/avatars/BudnikovAlexandrAvatar.svg'}
                    personDescription={'Будников Александр'}
                    personText={'Председатель оргкомитета — действительный член АИН, член-корреспондент РАЕН и Академии Криптографии, лауреат Государственной премии, к.ф-м.н'}
                    mt={80}
                    ml={200}
                />
            </main>

            <TheFooter/>
        </>
    );
};

export default Page;