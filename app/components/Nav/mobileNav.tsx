"use client"

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import Button from '../Button/Button';

const MobileNav = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const t = useTranslations();

    const navItems = [
  { title: t('menu_1'), link: "#about" },
  { title: t('menu_2'), link: "#payments" },
  { title: t('menu_3'), link: "#projects" },
  { title: t('menu_4'), link: "#questions" },
  { title: t('menu_5'), link: "#contact" },
];
    return (
        <div>
            <button onClick={() => setIsActive(!isActive)} className={`z-50 w-[40px] h-[35px] min-[1050px]:hidden ${isActive ? 'gap-0' : 'gap-[9.5px]'}  duration-500 flex-col border border-[#2B2B2B] rounded-[10px] group relative flex justify-center items-center`}><span className={`w-[22px] h-[1px] rounded-[5px] bg-blue-400 ${isActive ? "opacity-0" : "opacity-100"} duration-500`}></span><span className={`w-[22px] h-[1px] rounded-[5px] bg-blue-400 ${isActive ? "opacity-0" : "opacity-100"} duration-500`}></span><span className={`w-[22px] h-[1px] rounded-[5px] bg-blue-400 ${isActive ? 'rotate-45' : 'rotate-0'} duration-500 absolute top-1/2 left-1/2 -translate-1/2`}></span><span className={`w-[22px] h-[1px] rounded-[5px] bg-blue-400 ${isActive ? 'rotate-[-45deg]' : 'rotate-0'} duration-500 absolute top-1/2 left-1/2 -translate-1/2`}></span></button>

            <div className={`fixed ${isActive ? "top-0 opacity-100" : "top-[-100%] opacity-0"} duration-1000 w-full left-0 flex justify-center flex-col !px-4 gap-[25px] !pt-[120px] backdrop-blur-2xl !pb-10 z-[14] `}>
                {navItems?.map((item)=> {
                    return (
                        <Link className='text-2xl font-bold leading-[100%] tracking-tighter' href={item.link}>{item.title}</Link>
                    )
                })}
                <Button text={t('menu_6')}/>
            </div>
        </div>
    )
}

export default MobileNav