"use client"

import useInViewOnce from '@/app/hooks/inView'
import { InfiniteIcon } from '@/public/assets/icons/icons'
import { useTranslations } from 'next-intl'
import React, { useRef } from 'react'

const Sovershertvo = () => {

  const ref = useRef(null)
  const isInView = useInViewOnce(ref);
  const t = useTranslations();

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const animate = isMobile ? isInView : false;

  return (
    <div ref={ref} className='w-full relative aspect-square max-h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0_0_5.6px_0_#FFFFFF_15%] overflow-hidden group  '>
      <div className='absolute min-[768px]:bottom-0 !p-10 z-[2] max-[850px]:!p-7 max-[678px]:top-0'>
            <h3 className='font-semibold text-2xl text-white max-[850px]:text-xl'>{t('info_8')}</h3>
            <p className='font-semibold text-[15px] text-[#969696] !mt-[14px] !pr-[70px] max-[1100px]:!pr-[0px] max-[850px]:!mt-[5px] max-[850px]:text-[13px]'>{t('info_9')}</p>
          </div>
      <div className='absolute min-[768px]:top-[5%] duration-1000 max-[768px]:bottom-[-15%] max-[480px]:bottom-[-20%] w-full flex justify-center max-[900px]:w-[80%] left-1/2 -translate-x-1/2'><InfiniteIcon/> <div className={`absolute ${animate ? '!drop-shadow-[0_0_60px_#6bb0ff]' : 'group-hover:drop-shadow-[0_0_60px_#6bb0ff]'} duration-1000 top-1/2 left-1/2 -translate-1/2 max-[900px]: bg-[#6BB0FF] shadow-[inset_0_0_21px_0_#FFFFFF,inset_0_0_75px_0_#0077FF] rounded-[50px] !py-[25px] !px-[35px] font-bold text-xl leading-[100%] text-[#FFFFFF] max-[900px]:text-sm max-[900px]:!py-[20px] uppercase`}>{t('title')}</div></div>
      </div>
  )
}

export default Sovershertvo