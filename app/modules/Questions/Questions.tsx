import Accordion from '@/app/components/Accordion/Accordion'
import React from 'react'

const Questions = () => {
    return (
        <div className='containers flex justify-between  gap-[20px] max-[768px]:flex-col max-[768px]:gap-[43px] items-start !mt-[200px] max-[900px]:!mt-[160px] max-[900px]:!mb-[60px] max-[768px]:!mt-[130px] max-[768px]:!mb-[40px] max-[580px]:!mt-[100px] max-[580px]:!mb-[32px]' id='questions'>
            <div>
                <div className='flex justify-start'>
                    
                    <div className={`h-[45px] max-[768px]:h-[40px] max-[600px]:h-[36px] max-[768px]:!px-[14px] max-[600px]:!px-[11px]  max-[768px]:text-[13px] !px-[22px] border border-[#707070] rounded-[50px] font-semibold text-[16px] flex justify-center gap-2 items-center`}>
                    <span className='w-[12px] h-[12px] rounded-[50%] bg-[#6BB0FF] border-[2px] border-[#484848]'></span>
                    <span>Вопросы</span>
                </div>
                </div>
                <h2 className={`text-[64px] max-[1100px]:text-[50px] max-[768px]:!my-[25px] max-[768px]:text-[40px] max-[768px]:text-start max-[600px]:text-[32px] font-semibold bg-gradient-to-b leading-[85%] from-neutral-400 text-start !my-[40px] via-neutral-500 to-blue-400 bg-clip-text text-transparent`}>
                    Есть вопросы? <br />
                    У нас есть ответы.
                </h2>
                <p className='max-w-[900px] text-[#CEC9C9] font-medium text-[16px] !m-auto text-left max-[768px]:text-[14px] max-[768px]:leading-[110%] '>
                    Найдите ответы на распространенные вопросы об Aurix и его возможностях.
                </p>
            </div>
            <div className='max-w-[600px] max-[768px]:max-w-[768px] max-[768px]:w-full'>
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