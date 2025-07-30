"use client"
import useInViewOnce from '@/app/hooks/inView';
import { ThunderBorderIcon, ThunderIcon } from '@/public/assets/icons/icons'
import React, { useRef } from 'react'

const Effective = () => {
  const ref = useRef(null)
  const isInView = useInViewOnce(ref);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const animate = isMobile ? isInView : false;
  return (
    <div ref={ref} className='w-full relative aspect-square max-h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0_0_5.6px_0_#FFFFFF_15%] overflow-hidden group  '>
      <div className=' !p-10 !pb-0 max-[850px]:!p-7'>
        <h3 className='font-semibold text-2xl text-white max-[850px]:text-xl'>Быстрое и эффективное исполнение</h3>
        <p className='font-semibold text-[15px] text-[#969696] !mt-[14px] !pr-[30px] max-[1200px]:!pr-0 max-[850px]:!mt-[5px] max-[850px]:text-[13px]'>Мы поставляем высококачественную продукцию - без экономии на ценах</p>
      </div>
      <div className={`absolute bottom-0 flex justify-center w-full z-[3] ${animate ? '!drop-shadow-[0_0_60px_#6bb0ff]' : 'group-hover:drop-shadow-[0_0_60px_#6bb0ff]'} transition-all duration-1000`}><ThunderIcon /></div>
      <div className={`absolute left-1/2 -translate-x-1/2 ${animate ? '!bottom-0 !scale-100 !opacity-40' : 'group-hover:bottom-0 group-hover:scale-100 group-hover:opacity-40'} bottom-[-2%] scale-[0.7] opacity-0 duration-1000`}><ThunderBorderIcon /></div>
      <div className={`absolute left-1/2 -translate-x-1/2 ${animate ? '!bottom-[3%] !scale-[1.3] !opacity-40' : 'group-hover:bottom-[3%] group-hover:scale-[1.3] group-hover:opacity-40'}  bottom-[-2%]  scale-[0.7]  opacity-0 duration-1000`}><ThunderBorderIcon /></div>
      <div className={`absolute left-1/2 -translate-x-1/2 ${animate ? '!bottom-[7%] !scale-[1.7] !opacity-40' : 'group-hover:bottom-[7%] group-hover:scale-[1.7] group-hover:opacity-40'}  bottom-[-2%]  scale-[0.7]  opacity-0 duration-1000`}><ThunderBorderIcon /></div>
      <div className={`absolute left-1/2 -translate-x-1/2 ${animate ? '!bottom-[16%] !scale-[2.3] !opacity-40' : 'group-hover:bottom-[16%] group-hover:scale-[2.3] group-hover:opacity-40'}  bottom-[-2%]  scale-[0.7]  opacity-0 duration-1000`}><ThunderBorderIcon /></div>
    </div>
  )
}

export default Effective