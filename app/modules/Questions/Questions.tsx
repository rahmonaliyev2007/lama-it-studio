"use client"

import Accordion from '@/app/components/Accordion/Accordion'
import { useTranslations } from 'next-intl'
import React from 'react'

const Questions = () => {
    const t = useTranslations();

    return (
        <div className='containers flex justify-between gap-[20px] max-[768px]:flex-col max-[768px]:gap-[43px] items-start !mt-[200px] max-[900px]:!mt-[160px] max-[900px]:!mb-[60px] max-[768px]:!mt-[130px] max-[768px]:!mb-[40px] max-[580px]:!mt-[100px] max-[580px]:!mb-[32px]' id='questions'>
            <div>
                <div className='flex justify-start'>    
                    <div className={`h-[45px] max-[768px]:h-[40px] max-[600px]:h-[36px] max-[768px]:!px-[14px] max-[600px]:!px-[11px]  max-[768px]:text-[13px] !px-[22px] border border-[#707070] rounded-[50px] font-semibold text-[16px] flex justify-center gap-2 items-center`}>
                    <span className='w-[12px] h-[12px] rounded-[50%] bg-[#6BB0FF] border-[2px] border-[#484848]'></span>
                    <span>{t('menu_4')}</span>
                </div>
                </div>
                <h2 className={`text-[64px] max-[1100px]:text-[50px] max-[768px]:!my-[25px] max-[768px]:text-[40px] max-[768px]:text-start max-[600px]:text-[32px] font-semibold leading-[90%] bg-[linear-gradient(-182deg,_white,_#737373,_#60a5fa)] bg-clip-text text-transparent text-start !my-[40px]`}>
                    {t('header_6').split('\n').map((line, i) => (
                                  <React.Fragment key={i}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))}
                </h2>
                <p className='max-w-[900px] text-[#CEC9C9] font-medium text-[16px] !m-auto text-left max-[768px]:text-[14px] max-[768px]:leading-[110%] '>
                    {t('info_25')}
                </p>
            </div>
            <div className='max-w-[600px] max-[1100px]:max-w-[500px] max-[950px]:max-w-[400px] max-[768px]:max-w-[768px] max-[768px]:w-full'>
                <Accordion title={t('question_1')} text={t('answer_1')} />
                <Accordion title={t('question_2')} text={t('answer_2')} />
                <Accordion title={t('question_3')} text={t('answer_3')} />
                <Accordion title={t('question_4')} text={t('answer_4')} />
                <Accordion title={t('question_5')} text={t('answer_5')} />
            </div>
        </div>
    )
}

export default Questions