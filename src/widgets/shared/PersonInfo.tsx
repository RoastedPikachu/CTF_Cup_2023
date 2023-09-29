import React from 'react';

interface PersonProps {
    imgPath: string,
    personDescription: string,
    personText: string,
    styles: string
}

const PersonInfo: React.FC<PersonProps> = ({imgPath, personDescription, personText, styles}) => {
    return (
        <div className={`flex justify-between ${styles} w-[390px] mlarge:w-[290px] mmedium:w-[275px] msmall:w-[250px] h-[220px] mlarge:h-[170px] msmall:h-[160px]`}>
            <div className='relative w-[180px] mlarge:w-[140px] msmall:w-[130px] h-[220px] mlarge:h-[170px] msmall:h-[160px]'>
                <img src={imgPath} alt={personDescription} className='absolute w-full h-full z-10'/>
                <img src={imgPath} alt={personDescription} className='absolute w-full h-full duration-700 ease-in-out grayscale hover:opacity-0 z-20'/>
            </div>

            <span className='w-[190px] mlarge:w-[135px] mmedium:w-[120px] msmall:w-[110px]'>
                <p className='mlarge:w-[125px] text-[#bf5af2] text-[1.25rem] mlarge:text-[1rem] mmedium:text-[0.875rem] font-["Good_Timing"] font-bold'>{personDescription.toUpperCase()}</p>

                <p dangerouslySetInnerHTML={{ __html: personText}} className='mmedium:mt-[5px] text-[#ffffff] text-[0.875rem] mlarge:text-[0.625rem] mlarge:leading-[1.75]'></p>
            </span>
        </div>
    );
};

export default PersonInfo;