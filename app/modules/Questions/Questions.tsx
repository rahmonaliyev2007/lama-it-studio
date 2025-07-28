import Accordion from '@/app/components/Accordion/Accordion'
import React from 'react'

const Questions = () => {
    return (
        <div className='containers flex justify-between items-start !mt-[200px]' id='questions'>
            <div>
                <div className='flex justify-start'>
                    <div className={`h-[45px] !px-[22px] border border-[#707070] rounded-[50px] font-semibold text-[16px] flex justify-center gap-2 items-center`}>
                        <span className='w-[12px] h-[12px] rounded-[50%] bg-[#6BB0FF] border-[2px] border-[#484848]'></span>
                        <span>Вопросы</span>
                    </div>
                </div>
                <h2 className={`text-[64px] font-semibold bg-gradient-to-b leading-[85%] from-neutral-400 text-start !my-[40px] via-neutral-500 to-blue-400 bg-clip-text text-transparent`}>
                    Есть вопросы? <br />
                    У нас есть ответы.
                </h2>
                <p className='max-w-[900px] text-[#CEC9C9] font-medium text-[16px] !m-auto text-center'>
                    Найдите ответы на распространенные вопросы об Aurix и его возможностях.
                </p>
            </div>
            <div className='max-w-[600px]'>
                <Accordion title='Какие сроки выполнения проекта?' text='Сколько стоит разработка сайта или приложения?' />
                <Accordion title='Сколько стоит разработка сайта или приложения?' text='Сколько стоит разработка сайта или приложения?' />
                <Accordion title='Работаете ли вы с заказами из других стран?' text='Сколько стоит разработка сайта или приложения?' />
                <Accordion title='Предоставляете ли вы техническую поддержку после сдачи проекта?' text='Сколько стоит разработка сайта или приложения?' />
                <Accordion title='Можно ли доработать уже существующий сайт/приложение?' text='Сколько стоит разработка сайта или приложения?' />
            </div>
        </div>
    )
}

export default Questions