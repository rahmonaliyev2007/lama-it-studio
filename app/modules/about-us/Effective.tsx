import { ThunderBorderIcon, ThunderIcon } from '@/public/assets/icons/icons'
import React from 'react'

const Effective = () => {
  return (
    <div className='w-full relative h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0_0_5.6px_0_#FFFFFF_15%] overflow-hidden group  '>
      <div className=' !p-10 !pb-0'>
        <h3 className='font-semibold text-2xl text-white'>Быстрое и эффективное исполнение</h3>
        <p className='font-semibold text-[15px] text-[#969696] !mt-[14px] !pr-[30px]'>Мы поставляем высококачественную продукцию - без экономии на ценах</p>
      </div>
        <div className='absolute bottom-0 flex justify-center w-full z-[3] group-hover:drop-shadow-[0_0_60px_#6bb0ff] transition-all duration-1000'><ThunderIcon/></div>
      <div className='absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 bottom-[-2%] group-hover:scale-100 scale-[0.7] group-hover:opacity-40 opacity-0 duration-1000'><ThunderBorderIcon/></div>
      <div className='absolute left-1/2 -translate-x-1/2 group-hover:bottom-[3%] bottom-[-2%] group-hover:scale-[1.3] scale-[0.7] group-hover:opacity-40 opacity-0 duration-1000'><ThunderBorderIcon/></div>
      <div className='absolute left-1/2 -translate-x-1/2 group-hover:bottom-[7%] bottom-[-2%] group-hover:scale-[1.7] scale-[0.7] group-hover:opacity-40 opacity-0 duration-1000'><ThunderBorderIcon/></div>
      <div className='absolute left-1/2 -translate-x-1/2 group-hover:bottom-[16%] bottom-[-2%] group-hover:scale-[2.3] scale-[0.7] group-hover:opacity-40 opacity-0 duration-1000'><ThunderBorderIcon/></div>
    </div>
  )
}

export default Effective