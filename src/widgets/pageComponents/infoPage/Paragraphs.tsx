'use client';
import React, { useState, useRef } from 'react';

interface ParagraphsProps {
    isMobile: boolean;
}

interface Paragraph {
    id: number,
    title: string,
    isOpen: boolean,
    text: string
}

const Paragraphs:React.FC<ParagraphsProps> = ({ isMobile }) => {
    const [paragraphs, setParagraphs] = useState([
        {
            id: 1,
            title: 'Могу ли я принять участие в Кубке, если меня отчислили?',
            isOpen: false,
            text: 'Да, в этом году в Смешанном зачете могут принять участие любые люди не старше <strong style="color: #bf5af2;">25 лет (включительно)</strong>'
        },
        {
            id: 2,
            title: 'Какой зачет нам выбрать, если мы студенты, но у нас есть школьник в составе?',
            isOpen: false,
            text: 'В любой непонятной ситуации выбирайте <strong style="color: #bf5af2;">Смешанный зачет</strong>. Школьный только для школьников, а Академический — для студентов одного вуза (или колледжа)'
        },
        {
            id: 3,
            title: 'Могут ли пройти на финал иностранные команды',
            isOpen: false,
            text: 'Теоретически — да. А на практике каждая заявка иностранной команды будет рассматриваться в индивидуальном порядке <strong style="color: #bf5af2;">Оргкомитетом</strong>'
        },
        {
            id: 4,
            title: 'Приз — один на три зачета?',
            isOpen: false,
            text: 'А вот и нет — победитель <strong style="color: #bf5af2;">каждого из трех</strong> зачетов получит и денежный приз, и <strong style="color: #bf5af2;">свой экземпляр кубка</strong> ;)'
        },
        {
            id: 5,
            title: 'Когда будут известны результаты отборочного тура?',
            isOpen: false,
            text: 'Мы постараемся опубликовать результаты как можно скорее — но обычно нам нужно <strong style="color: #bf5af2;">2-3 дня</strong>, чтобы точно проверить результаты: за это время убедимся, что: <p style="margin-top: 10px;">&nbsp; &#9679; никто из команд не спутал зачеты,</p><p>&nbsp; &#9679; предоставил всю информацию в регистрации,</p><p>&nbsp; &#9679; не жульничал во время этапа.</p>'
        },
        {
            id: 6,
            title: 'Сколько этапов ждут школьников?',
            isOpen: false,
            text: 'В Школьном зачете всего <strong style="color: #bf5af2;">два этапа</strong>: общий <strong style="color: #bf5af2;">отборочный этап</strong>, а также <strong style="color: #bf5af2;">финал в декабре</strong> (смотри расписание на главной странице)'
        }
    ] as Paragraph[]);

    const nodeRef = useRef(null);

    return (
        <section className='mt-[120px] mlarge:mt-[100px] mmedium:mt-[80px] msmall:mt-[60px] pb-[100px] px-[10%] deskWide:px-[0px] mlarge:px-[5%] w-full'>
            <img src='/static/infoPage/text/FAQText.svg' alt='FAQ' className='w-[25%] mlarge:w-[50%] mmedium:w-[55%] pb-[40px] mlarge:pb-[20px] mmedium:pb-[0px]'/>

            {paragraphs.map((paragraph:Paragraph) => (
                <div key={paragraph.id} className='mt-[30px] mlarge:mt-[50px] pb-[20px] h-auto border-b-2 border-[#bf5af2]'>
                    <div className='flex justify-between items-center w-[calc(100%-12.5px)] h-[50px]'>
                        <h3 className='w-[70%] mlarge:w-full text-[#ffffff] text-[1.5rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] font-["Good_Timing"] font-bold'>{paragraph.title}</h3>

                        {!isMobile && <button className='w-[20px] h-[20px] outline-none' onClick={() => {paragraph.isOpen = !paragraph.isOpen; setParagraphs([...paragraphs])}}>
                            <img src='/static/infoPage/icon/XmarkIcon.svg' alt='Иконка открытия и закрытия' ref={nodeRef} className={`w-full h-full ${paragraph.isOpen ? 'rotate-0' : 'rotate-45'} duration-[600ms] ease-in-out`}/>
                        </button>}
                    </div>

                    {(paragraph.isOpen || isMobile) && <p dangerouslySetInnerHTML={{ __html: paragraph.text}} className='mt-[30px] pb-[20px] text-[#ffffff] text-[1rem] mmedium:text-[0.875rem]'></p>}
                </div>
            ))}
        </section>
    );
};

export default Paragraphs;