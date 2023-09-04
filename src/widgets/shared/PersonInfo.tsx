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
        <div className={`flex justify-between ${styles} w-[390px] h-[220px]`}>
            {imgPath ?
                <div className='relative w-[180px] h-[220px]'>
                    <Image src={imgPath} alt={personDescription} width={180} height={220} className='absolute z-10'/>
                    <Image src={imgPath} alt={personDescription} width={180} height={220} className='absolute duration-700 ease-in-out grayscale hover:opacity-0 z-20'/>
                </div>
                :
                <div className='w-[180px] h-full bg-[#b8b8b8]'></div>
            }

            <span className='w-[190px]'>
                <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>{personDescription.toUpperCase()}</p>

                <p dangerouslySetInnerHTML={{ __html: personText}} className='text-[#ffffff] text-[0.875rem]'></p>
            </span>
        </div>
    );
};

export default PersonInfo;