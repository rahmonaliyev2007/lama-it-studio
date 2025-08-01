"use client"

import useInViewOnce from '@/app/hooks/inView'
import { PersonIcon } from '@/public/assets/icons/icons'
import { LamaIconCircle } from '@/public/assets/icons/LamaIcon'
import { useTranslations } from 'next-intl'
import React, { useRef } from 'react'
const ProDesign = () => {
    const ref = useRef(null)
    const isInView = useInViewOnce(ref);
    const t = useTranslations();

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
    const animate = isMobile ? isInView : false;

    return (
        <div ref={ref} className={`w-full relative aspect-square max-h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0 0 5.6px 0 #FFFFFF 15%] overflow-hidden group `}>

            <div className='!p-10 max-[850px]:!p-7'>
                <h3 className='font-semibold text-2xl max-[850px]:text-xl text-white'>{t('info_2')}</h3>
                <p className='font-semibold text-[15px] leading-[110%] text-[#969696] !mt-[14px] max-[850px]:!mt-[5px] max-[850px]:text-[13px]'>{t('info_3')}</p>
            </div>

            <div className={`${animate ? '!bg-[#6bb0ff4c] !scale-[1.2] max-[600px]:!scale-[1]' : 'group-hover:bg-[#6bb0ff4c] group-hover:scale-[1.2]'} max-[600px]:scale-[0.8] shadow-[inset_0_0_6px_0_#fff] bg-transparent z-[5] w-[172px] h-[172px] absolute -bottom-[15%] left-1/2 -translate-x-1/2 rounded-[50%] duration-1000`}></div>
            <div className={`${animate ? '!bg-[#6bb0ff29] !scale-[1.7] max-[600px]:!scale-[1.5]' : 'group-hover:bg-[#6bb0ff29] group-hover:scale-[1.7]'} bg-transparent z-[4] w-[172px] h-[172px] absolute -bottom-[15%] left-1/2 -translate-x-1/2 rounded-[50%] duration-1000`}></div>
            <div className={`${animate ? '!bg-[#6bb0ff11] !scale-[2.3] max-[600px]:!scale-[2]' : 'group-hover:bg-[#6bb0ff11] group-hover:scale-[2.3]'} bg-transparent z-[3] w-[172px] h-[172px] absolute -bottom-[15%] left-1/2 -translate-x-1/2 rounded-[50%]  duration-1000`}></div>
            <div className={`${animate ? '!bg-[#6bb0ff0f] !scale-[2.9] max-[600px]:!scale-[2.6]' : 'group-hover:bg-[#6bb0ff0f] group-hover:scale-[2.9]'} bg-transparent z-[2] w-[172px] h-[172px] absolute -bottom-[15%] left-1/2 -translate-x-1/2 rounded-[50%]  duration-1000`}></div>
            <div className={`absolute -bottom-[15%] left-1/2 -translate-x-1/2 z-10 max-[600px]:scale-[0.8]`}>
                <LamaIconCircle />
            </div>
            <div className={`duration-1000 z-[6] absolute top-[80%] ${animate ? '!top-[45%]' : 'group-hover:top-[45%]'} left-1/2 -translate-x-1/2 w-[75px] h-[75px] max-[600px]:w-[65px] max-[600px]:h-[65px] flex justify-center items-center`}><PersonIcon /></div>
            <div className={`duration-1000 z-[6] absolute top-[80%] ${animate ? '!top-[58%] !left-[30%]' : 'group-hover:top-[58%] group-hover:left-[30%]'} left-1/2 -translate-x-1/2 w-[60px] h-[60px] max-[600px]:w-[50px] max-[600px]:h-[50px] flex justify-center items-center`}><PersonIcon /></div>
            <div className={`duration-1000 z-[6] absolute top-[80%] ${animate ? '!left-[17%]' : 'group-hover:left-[17%]'} left-1/2 -translate-x-1/2 w-[67px] h-[67px] max-[600px]:w-[57px] max-[600px]:h-[57px] flex justify-center items-center`}><PersonIcon /></div>
            <div className={`duration-1000 z-[6] absolute top-[80%] ${animate ? '!top-[57%] !left-[10%]' : 'group-hover:top-[57%] group-hover:left-[10%]'} left-1/2 -translate-x-1/2 w-[45px] h-[45px] max-[600px]:w-[35px] max-[600px]:h-[35px] flex justify-center items-center`}><PersonIcon /></div>
            <div className={`duration-1000 z-[6] absolute top-[80%] ${animate ? '!top-[53%] !left-[75%]' : 'group-hover:top-[53%] group-hover:left-[75%]'} left-1/2 -translate-x-1/2 w-[55px] h-[55px] max-[600px]:w-[45px] max-[600px]:h-[55px] flex justify-center items-center`}><PersonIcon /></div>
            <div className={`duration-1000 z-[6] absolute top-[80%] ${animate ? '!top-[80%] !left-[80%]' : 'group-hover:top-[80%] group-hover:left-[80%]'} left-1/2 -translate-x-1/2 w-[60px] h-[60px] max-[600px]:w-[50px] max-[600px]:h-[50px] flex justify-center items-center`}><PersonIcon /></div> </div>
    )
}

export default ProDesign