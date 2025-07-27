import { InfiniteIcon } from '@/public/assets/icons/icons'
import { InfinityButtonIcon } from '@/public/assets/icons/InfinityIcon'
import React from 'react'

const Sovershertvo = () => {
  return (
    <div className='w-full relative h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0_0_5.6px_0_#FFFFFF_15%] overflow-hidden group  '>
      <div className='absolute bottom-0 !p-10 z-[2]'>
            <h3 className='font-semibold text-2xl text-white'>Cовершенство, пока ты не будешь удовлетворен</h3>
            <p className='font-semibold text-[15px] text-[#969696] !mt-[14px] !pr-[70px]'>Вы можете запросить несколько правок для каждой задачи, пока не будете полностью удовлетворены результатом.</p>
          </div>
      <div className='absolute top-[5%] duration-1000 w-full flex justify-center'><InfiniteIcon/></div>
      <div className='group-hover:drop-shadow-[0_0_60px_#6bb0ff] duration-1000 absolute top-1/3 left-1/2 -translate-1/2'><InfinityButtonIcon/></div>
    </div>
  )
}

export default Sovershertvo