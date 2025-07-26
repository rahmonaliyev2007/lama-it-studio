import { ChatGPTIcon, CIcon, CPlusPlusIcon, FigmaIcon, FramerIcon, JSIcon, PhytonIcon, ReactIcon, TailwindIcon } from '@/public/assets/icons/icons'
import React, { ReactNode } from 'react'

const AdaptivTecnologies = () => {
  const items = [<JSIcon />, <FigmaIcon />, <PhytonIcon />, <TailwindIcon />, <CPlusPlusIcon />]
  const items2= [ <ChatGPTIcon/>, <FramerIcon/>, <PhytonIcon/>, <ReactIcon/>, <CIcon/>]

  return (
    <div className='w-full !pb-10 relative h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0 0 5.6px 0 #FFFFFF 15%] overflow-hidden group '>
      <div className=' !p-10'>
        <h3 className='font-semibold text-2xl text-white'>Адаптивные технологии</h3>
        <p className='font-semibold text-[15px] text-[#969696] !mt-[14px]'>Мы строим с использованием новейших технологий, чтобы вы были впереди</p>
      </div>
      <div className='flex items-center gap-[40px] min-w-[120%] translate-x-[3%] duration-1000 group-hover:translate-x-[-15%] bottom-1/3 absolute'>
        {items?.map((item, i) => { return (<Icon i={i}>{item}</Icon>) })}
      </div>
       <div className='flex items-center gap-[40px] min-w-[120%] translate-x-[-15%] duration-1000 group-hover:translate-x-[3%] bottom-10 absolute'>
        {items2?.map((item, inx) => { return (<Icon i={inx + 5}>{item}</Icon>) })}
      </div>
    </div>
  )
}

export default AdaptivTecnologies

const Icon = ({ children, i }: { children: ReactNode, i: number }) => {
  return (
    <div key={i} className='shadow-[0_0_10px_0_#00000099,inset_0_0_10px_0_#FFFFFF0D] bg-[#191919CC] w-[70px] h-[70px] rounded-[50%] flex justify-center items-center'>
      {children}
    </div>
  )
}