"use client"
import Marquee from '@/app/components/Marque/Marque';
import React from 'react'
import UnicalDesign from './UnicalDesign';
import ProDesign from './ProDesign';
import AdaptivTecnologies from './AdaptivTecnologies';
import Effective from './Effective';
import Sovershertvo from './Sovershertvo';
import Heading from '@/app/components/Heading/Heading';
import { useTranslations } from 'next-intl';

const TecnologiesModule = () => {
const t = useTranslations();
  return (
    <div id='about'>
      <div>
        <div className="relative z-[20]">
          <div className="absolute bottom-full left-0 w-full h-[80px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
          <h2 className="font-medium text-[#747474] text-xl max-[768px]:text-[14px] max-[900px]:text-lg m-auto text-center py-4 relative z-[20] bg-black">{t('header_2')}</h2>
        </div>
        <Marquee />
      </div>

      <Heading title={<>{t('header_3').split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}</>} text={t('menu_1')} paragraph={t('info_1')}/>

      <div className="containers">
        <div className='flex justify-between items-center gap-[15px] !mt-[85px] max-[768px]:!mt-0 max-[500px]:flex-col max-md:flex-col'>
        <ProDesign />
        <AdaptivTecnologies />
        <Effective />
      </div >
      <div className='flex justify-between items-center gap-[15px] !mt-[15px] max-md:flex-col'>
        <Sovershertvo />
        <UnicalDesign />
      </div>
      </div>
    </div>
  )
}

export default TecnologiesModule


