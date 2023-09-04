import React from 'react';

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
                    <img src={imgPath} alt={personDescription} className='absolute w-full h-full z-10'/>
                    <img src={imgPath} alt={personDescription} className='absolute w-full h-full duration-700 ease-in-out grayscale hover:opacity-0 z-20'/>
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