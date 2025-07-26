import { BoxBackgroud, BoxIcon } from '@/public/assets/icons/icons'
import React from 'react'

const UnicalDesign = () => {
  return (
    <div className='w-full relative h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0 0 5.6px 0 #FFFFFF 15%] overflow-hidden group  '>
          <div className='absolute bottom-0 !p-10 z-[11]'>
            <h3 className='font-semibold text-2xl text-white'>Уникальный дизайн</h3>
            <p className='font-semibold text-[15px] text-[#969696] !mt-[14px] !pr-[70px]'>Превратите свое видение в реальность с помощью индивидуального дизайна, разработанного специально для вашего продукта.</p>
          </div>
          <div>
            <div className='flex gap-[6px] min-w-[115%] absolute top-[-6%] -translate-[5%]'><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/></div>
            <div className='flex gap-[6px] min-w-[140%] absolute top-[21%] -translate-x-[11.1%]'><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><div className=' relative'><div className=''><BoxBackgroud/></div> <div className='absolute top-[-3%] left-[0.5%] group-hover:opacity-100 opacity-0 duration-1000 group-hover:drop-shadow-[0_0_70px_#6bb0ff]'><BoxIcon/></div></div><BoxBackgroud/><BoxBackgroud/> <BoxBackgroud/></div>
            <div className='flex gap-[6px] min-w-[115%] absolute top-[51.5%] -translate-[5%]'><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/></div>
            <div className='flex gap-[6px] min-w-[140%] absolute top-[78.5%] -translate-x-[11.1%]'><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/><BoxBackgroud/> <BoxBackgroud/></div>
            
            <div className=' absolute top-[50%] -translate-y-[76%] z-[10] left-1/2 -translate-x-[40%]  group-hover: opacity-0 duration-1000'><BoxIcon/></div>
          </div>
        </div>
  )
}

export default UnicalDesign