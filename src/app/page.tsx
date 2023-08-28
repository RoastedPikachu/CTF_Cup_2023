import Image from 'next/image'

import TheHeader from '@/widgets/shared/TheHeader';
import TheFooter from '@/widgets/shared/TheFooter';

export default function Home() {
  return (
    <>
        <TheHeader/>

        <main className='w-[100%] h-auto'>

            <img src='/static/GreetingsBubblesImage.svg' alt='Пузырьки' className='absolute mt-[5%] ml-[10%] w-[80%] h-[900px] scale-[1.375] z-10'/>

            <section className='relative px-[10%] w-[100%] h-[700px]'>
                <img src='/static/KubokCTFText.svg' alt='Кубок CTF 2023' className='pt-[calc(50%-400px)] h-[450px] scale-[0.65]'/>

                <div className='relative mt-[-80px]'>
                    <p className='pt-[250px] text-[#ffffff] text-[2.25rem] font-["DaMiOne"] text-center'>Регистрация</p>

                    <img src='/static/ArrowsDownIcon.svg' alt='Регистрация' className='absolute ml-[calc(50%-20px)] pt-[5px] w-[40px] h-[40px] cursor-pointer z-20'/>
                </div>
            </section>

            <section className='px-[10%] w-[100%] h-[800px] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.89)_16.01%,#000_28.81%,#000_100%)]'>

            </section>

            <section className='px-[10%] w-[100%] h-[1000px]'>
                <img src='/static/RaspisanieText.svg' alt='Расписание' className='mt-[50px] h-[120px]'/>

                <div className='flex justify-between w-full h-[670px]'>
                    <div>

                    </div>

                    <div>
                        <div>
                            <div>

                            </div>

                            <div>

                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </main>

        <TheFooter/>
    </>
  )
}
