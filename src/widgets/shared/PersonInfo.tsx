import React from 'react';

interface PersonProps {
    imgPath: string,
    personDescription: string,
    personText: string,
    mt: string,
    ml: string
}

const PersonInfo: React.FC<PersonProps> = ({imgPath, personDescription, personText, mt, ml}) => {
    return (
        <div className={`flex justify-between mt-[${mt}] ml-[${ml}] w-[390px] h-[220px]`}>
            {imgPath ? <img src={imgPath} alt={personDescription} className='w-[180px] h-full'/> : <div className='w-[180px] h-full bg-[#b8b8b8]'></div>}

            <span className='w-[190px]'>
                <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>{personDescription.toUpperCase()}</p>

                <p className='text-[#ffffff] text-[0.875rem]'>{personText}</p>
            </span>
        </div>
    );
};

export default PersonInfo;