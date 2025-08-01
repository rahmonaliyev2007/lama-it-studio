"use client";
import useInViewOnce from "@/app/hooks/inView";
import {
  ChatGPTIcon, CIcon, CPlusPlusIcon, FigmaIcon, FramerIcon, JSIcon, PhytonIcon, TailwindIcon,
} from "@/public/assets/icons/icons";
import { ReactIcon } from "@/public/assets/icons/ReactIcon";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";

const AdaptivTecnologies = () => {
  const items = [
    { id: "js", icon: <JSIcon /> },
    { id: "figma", icon: <FigmaIcon /> },
    { id: "python1", icon: <PhytonIcon /> },
    { id: "tailwind", icon: <TailwindIcon /> },
    { id: "cpp", icon: <CPlusPlusIcon /> },
  ];

  const items2 = [
    { id: "chatgpt", icon: <ChatGPTIcon /> },
    { id: "framer", icon: <FramerIcon /> },
    { id: "python2", icon: <PhytonIcon /> },
    { id: "react", icon: <ReactIcon /> },
    { id: "c", icon: <CIcon /> },
  ];
  const ref = useRef(null)
  const isInView = useInViewOnce(ref);
  const t = useTranslations();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const animate = isMobile ? isInView : false;

  return (
    <div ref={ref} className='w-full !pb-1 max-[1200px]:hidden max-md:block relative aspect-square max-h-[400px] border-[#4E4C4C] border-[1px] rounded-[30px] p-[20px] shadow-[0 0 5.6px 0 #FFFFFF 15%] overflow-hidden group '>

      <div className='!p-10 max-[1100px]:!p-7'>
        <h3 className='font-semibold text-2xl max-[1100px]:text-xl text-white'>{t('info_4')}</h3>
        <p className='font-semibold text-[15px] leading-[110%] text-[#969696] !mt-[14px] max-[1100px]:!mt-[5px] max-[1100px]:text-[13px]'>{t('info_5')}</p>
      </div>

      <div className={`flex items-center gap-[40px] min-w-[120%] max-[600px]:bottom-[27%] translate-x-[3%] duration-1000 ${animate ? '!translate-x-[-15%]' : 'group-hover:translate-x-[-15%]'} bottom-1/3 absolute`}>
        {[...items, ...items2].map(({ id, icon }) => (
          <div key={id} className='shadow-[0_0_10px_0_#00000099,inset_0_0_10px_0_#FFFFFF0D] bg-[#191919CC] w-[70px] h-[70px] max-md:w-[60px] max-md:h-[60px] max-[600px]:w-[50px] max-[600px]:h-[50px] rounded-[50%] flex justify-center items-center'>
            {icon}
          </div>
        ))}
      </div>
      <div className={`flex items-center gap-[40px] min-w-[120%] max-[600px]:bottom-[5%] translate-x-[-15%] duration-1000 ${animate ? '!translate-x-[3%]' : 'group-hover:translate-x-[3%]'} bottom-10 absolute`}>
        {[...items2, ...items].map(({ id, icon }) => (
          <div key={id} className='shadow-[0_0_10px_0_#00000099,inset_0_0_10px_0_#FFFFFF0D] bg-[#191919CC] w-[70px] h-[70px] max-md:w-[60px] max-md:h-[60px] max-[600px]:w-[50px] max-[600px]:h-[50px] rounded-[50%] flex justify-center items-center' >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdaptivTecnologies;