import React from 'react';

import Image from 'next/image';

interface PersonProps {
    imgPath: string,
    personDescription: string,
    personText: string,
    styles: string
}

const PersonInfo: React.FC<PersonProps> = ({imgPath, personDescription, personText, styles}) => {
    return (
        <div className={`flex justify-between ${styles} w-[390px] mlarge:w-[300px] msmall:w-[260px] h-[220px] mlarge:h-[170px] msmall:h-[160px]`}>
            <div className='relative w-[180px] mlarge:w-[140px] msmall:w-[130px] h-[220px] mlarge:h-[170px] msmall:h-[160px]'>
                <Image src={imgPath} alt={personDescription} width={180} height={220} className='absolute z-10'/>
                <Image src={imgPath} alt={personDescription} width={180} height={220} className='absolute duration-700 ease-in-out grayscale hover:opacity-0 z-20'/>
            </div>

            <span className='w-[190px] mlarge:w-[145px] msmall:w-[120px]'>
                <p className='text-[#bf5af2] text-[1.25rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-["Good_Timing"] font-bold'>{personDescription.toUpperCase()}</p>

                <p dangerouslySetInnerHTML={{ __html: personText}} className='mmedium:mt-[5px] text-[#ffffff] text-[0.875rem] mlarge:text-[0.75rem] mmedium:text-[0.625rem]'></p>
            </span>
        </div>
    );
};

export default PersonInfo;