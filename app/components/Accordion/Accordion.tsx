'use client'

import React, { useState } from 'react'
import { WhitePlusIcon } from '@/public/assets/icons/icons'

interface AccordionProps { title: string, text: string}

const Accordion: React.FC<AccordionProps> = ({ title, text }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-[#4E4C4C] duration-1000 rounded-[30px] overflow-hidden shadow-[0_0_5.6px_0_#FFFFFF26] !mb-[20px]">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between !p-[35px] max-[1100px]:!p-[25px] max-[1000px]:!p-[22px] max-[1100px]:text-lg max-[1000px]:text-base max-[768px]:text-sm leading-[100%] font-bold text-xl">
                <span className="text-left font-bold max-w-[90%]">{title}</span>
                <div className={`${isOpen ? "rotate-45" : "rotate-0"} duration-500`}><WhitePlusIcon/></div>
            </button>
            <div className={`duration-1000 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-[#B7B7B7] font-medium text-md !px-[35px] !pb-[35px]">{text}</p>
            </div>
        </div>
    )
}

export default Accordion