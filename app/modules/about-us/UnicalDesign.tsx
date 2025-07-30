"use client"

import useInViewOnce from '@/app/hooks/inView'
import { BoxIcon } from '@/public/assets/icons/boxIcon'
import { BoxBackgroud} from '@/public/assets/icons/icons'
import React, { useRef } from 'react'

const UnicalDesign = () => {
  const ref = useRef(null)
  const isInView = useInViewOnce(ref);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const animate = isMobile ? isInView : false;
  return (
    <div ref={ref} className='w-full relative aspect-square max-h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0 0 5.6px 0 #FFFFFF 15%] overflow-hidden group  '>
          <div className='absolute bottom-0 !p-10 z-[11] max-[850px]:!p-7'>
            <h3 className='font-semibold text-2xl text-white max-[900px]:text-xl'>Уникальный дизайн</h3>
            <p className='font-semibold text-[15px] text-[#969696] !mt-[14px] !pr-[70px] max-[1100px]:!pr-0'>Превратите свое видение в реальность с помощью индивидуального дизайна, разработанного специально для вашего продукта.</p>
          </div>
          <div>
            <div className='flex gap-[6px] min-w-[115%] absolute top-[-25px] -translate-[5px]'><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/></div>
            <div className='flex gap-[6px] min-w-[115%] absolute top-[205px] -translate-[5px]'><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/></div>
            <div className='flex gap-[6px] min-w-[140%] absolute top-[315px] -translate-x-[70px]'><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/> <BoxBackgroud/></div>
            <div className='flex gap-[6px] min-w-[140%] absolute top-[85px] -translate-x-[70px]'><BoxBackgroud/><div className='max-[950px]:hidden'><BoxBackgroud/></div><BoxBackgroud/><div className=' relative'><div className=''><BoxBackgroud/></div> <div className={`absolute top-[-3%] left-[0.5%] ${animate ? '!opacity-100 !drop-shadow-[0_0_70px_#6bb0ff]' : 'group-hover:opacity-100 group-hover:drop-shadow-[0_0_70px_#6bb0ff]'} opacity-0 duration-1000`}><BoxIcon/></div></div><BoxBackgroud/><BoxBackgroud/> <BoxBackgroud/></div>
          </div>
        </div>
  )
}

export default UnicalDesign