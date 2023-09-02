import React from 'react';

const PersonInfo = ({imgPath, personDescription, personText, mt, ml}) => {
    return (
        <div className={`flex justify-between mt-[${mt}px] ml-[${ml}px] w-[390px] h-[220px]`}>
            <img src={imgPath} alt={personDescription} className='w-[180px] h-full'/>

            <span className='w-[190px]'>
                <p className='text-[#bf5af2] text-[1.25rem] font-["Good_Timing"] font-bold'>{personDescription.toUpperCase()}</p>

                <p className='text-[#ffffff] text-[0.875rem]'>{personText}</p>
            </span>
        </div>
    );
};

export default PersonInfo;