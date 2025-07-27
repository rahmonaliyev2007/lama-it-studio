import { PersonIcon } from '@/public/assets/icons/icons'
import { LamaIconCircle } from '@/public/assets/icons/LamaIcon'
import React from 'react'

const ProDesign = () => {
    return (
        <div className={`w-full relative h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0 0 5.6px 0 #FFFFFF 15%] overflow-hidden group `}>
            
            <div className=' !p-10'>
                <h3 className='font-semibold text-2xl text-white'>Про дизайнеры</h3>
                <p className='font-semibold text-[15px] text-[#969696] !mt-[14px]'>мы создаем высококачественные цифровые решения, которые выглядят великолепно и работают еще лучше</p>
            </div>
            
            
            <div className='group-hover:bg-[#6bb0ff4c] shadow-[inset_0_0_6px_0_#fff] bg-transparent z-[5] w-[172px] h-[172px] absolute -bottom-[15%] left-1/2 -translate-x-1/2 rounded-[50%] group-hover:scale-[1.2] duration-1000'></div>
            <div className='group-hover:bg-[#6bb0ff29] bg-transparent z-[4] w-[172px] h-[172px] absolute -bottom-[15%] left-1/2 -translate-x-1/2 rounded-[50%] group-hover:scale-[1.7] duration-1000'></div>
            <div className='group-hover:bg-[#6bb0ff11] bg-transparent z-[3] w-[172px] h-[172px] absolute -bottom-[15%] left-1/2 -translate-x-1/2 rounded-[50%] group-hover:scale-[2.3] duration-1000'></div>
            <div className='group-hover:bg-[#6bb0ff0f] bg-transparent z-[2] w-[172px] h-[172px] absolute -bottom-[15%] left-1/2 -translate-x-1/2 rounded-[50%] group-hover:scale-[2.9] duration-1000'></div>
            <div className={`absolute -bottom-[15%] left-1/2 -translate-x-1/2 z-10`}>
                <LamaIconCircle />
            </div>
            <div className='duration-1000 z-[6] absolute top-[80%] group-hover:top-[45%] left-1/2 -translate-x-1/2 w-[75px] h-[75px] flex justify-center items-center'><PersonIcon/></div>
            <div className='duration-1000 z-[6] absolute top-[80%] group-hover:top-[58%] group-hover:left-[30%] left-1/2 -translate-x-1/2 w-[60px] h-[60px] flex justify-center items-center'><PersonIcon/></div>
            <div className='duration-1000 z-[6] absolute top-[80%] group-hover:left-[17%] left-1/2 -translate-x-1/2 w-[67px] h-[67px] flex justify-center items-center'><PersonIcon/></div>
            <div className='duration-1000 z-[6] absolute top-[80%] group-hover:top-[57%] group-hover:left-[10%] left-1/2 -translate-x-1/2 w-[45px] h-[45px] flex justify-center items-center'><PersonIcon/></div>
            <div className='duration-1000 z-[6] absolute top-[80%] group-hover:top-[53%] group-hover:left-[75%] left-1/2 -translate-x-1/2 w-[55px] h-[55px] flex justify-center items-center'><PersonIcon/></div>
            <div className='duration-1000 z-[6] absolute top-[80%] group-hover:top-[80%] group-hover:left-[80%] left-1/2 -translate-x-1/2 w-[60px] h-[60px] flex justify-center items-center'><PersonIcon/></div>

            
        </div>
    )
}

export default ProDesign