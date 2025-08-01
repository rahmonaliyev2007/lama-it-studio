"use client"
import Heading from '@/app/components/Heading/Heading'
import Image from 'next/image'
import React from 'react'
import aqua from '@/public/assets/images/aqua.png'
import b2b from '@/public/assets/images/b2b.png'
import star from '@/public/assets/images/star.png'
import statone from '@/public/assets/images/statone.png'
import dotsBg from '@/public/assets/images/backgrounds/dots.png'
import { useTranslations } from 'next-intl'
import { WhiteArrowIcon } from '@/public/assets/icons/icons'

const Projects = () => {
  const t = useTranslations();

  const projectsData = [
    { image: b2b, alt: 'aqua site lama-it-studio', bg: 'linear-gradient(150deg, #3d3d3d, #6bb0ff58)', title: 'B2bshop', link: "", desc: t('info_21') },
    { image: aqua, alt: 'b2b site lama-it-studio', bg: 'linear-gradient(120deg, #6BB0FF80, #FFFFFF78)', title: 'Aqua Evolution', link: "", desc: t('info_22') },
    { image: star, alt: 'star site lama-it-studio', bg: 'linear-gradient(120deg, black, #153239, #2f1b22, black)', title: 'Imart Business', link: "", desc: t('info_23') },
    { image: statone, alt: 'statone site lama-it-studio', bg: 'linear-gradient(120deg, #247045, #ceb578)', title: 'STAT-URMON', link: "", desc: t('info_24') },
  ]
  return (
    <main className='containers' id='projects'>
      <Heading text={t('menu_3')} title={<>{t('header_5').split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}</>} paragraph={t('info_20')} />

      <div className='flex justify-between items-center gap-[33px] max-[700px]:flex-col'>
        {projectsData.slice(0, 2).map(({ image, alt, bg, title, desc }, i) => (
          <div key={i} className="w-[50%] max-[700px]:w-full flex relative overflow-hidden justify-center items-center !px-[65px] group !pt-[60px] !pb-[30px] max-[1000px]:!px-[45px] max-[1000px]:!pt-[45px] max-[1000px]:!pb-[15px] max-[850px]:!px-[30px] max-[850px]:!pt-[30px] max-[850px]:!pb-[10px] rounded-[30px] border border-[#707070] shadow-[inset_0_0_40px_20px_black] max-[1000px]:shadow-[inset_0_0_30px_15px_black] max-[850px]:shadow-[inset_0_0_20px_10px_black] max-[850px]:hover:shadow-[inset_0_0_10px_5px_black] hover:shadow-[inset_0_0_20px_5px_black] duration-1000" style={{ background: bg }}>
            <Image width={570} height={540} alt={alt} src={image} className={`group-hover:scale-[1.1] duration-1000 drop-shadow-[0_0_25px_black] relative z-[2]`} />
            <div className='absolute bottom-0 group-hover:h-[35%] duration-1000 left-0 h-[50%] w-full rounded-b-[30px] z-[20] bg-gradient-to-b from-transparent via-[#000000b3] to-black' />
            <div className='absolute bottom-0 left-0 w-full z-[22] !px-[55px] max-[700px]:!px-[25px] max-[1000px]:!px-[35px] flex flex-col gap-[15px] !pb-[30px] max-[768px]:!pb-[20px] max-[768px]:gap-[5px]'>
             
             <div className='flex gap-2 items-center'>
               <h2 className='font-semibold text-2xl max-[768px]:text-xl max-[578px]:text-lg max-[500px]:text-base max-[1000px]:text-xl'>{title}</h2>
              <span className='bg-white w-[20px] h-[20px] rounded-[50%] opacity-0 group-hover:opacity-100 duration-700 group-hover:rotate-0 -rotate-45 flex juce\ items-center'><WhiteArrowIcon/></span>
              </div>
            
              <p className='font-medium text-[15px] text-[#969696] leading-[100%] max-w-[490px] max-[768px]:text-[13px] max-[1000px]:text-[13px] max-[500px]:text-[12px]'>{desc}</p>
            </div>
            <Image src={dotsBg} alt='bacground for projects lama-it-studio' width={500} height={400} className='duration-1000 absolute top-1/2 left-1/2 -translate-1/2 w-[95%] h-[95%] group-hover:w-[110%] group-hover:scale-[1.4] group-hover:opacity-[0.3] blur-[5px] group-hover:blur-[0px]' />
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center gap-[33px] !mt-[33px] max-[700px]:flex-col'>
        {projectsData.slice(2).map(({ image, alt, bg, title, desc }, i) => (
          <div key={i} className="w-[50%] max-[700px]:w-full flex relative overflow-hidden justify-center items-center !px-[65px] group !pt-[60px] !pb-[30px] max-[1000px]:!px-[45px] max-[1000px]:!pt-[45px] max-[1000px]:!pb-[15px] max-[850px]:!px-[30px] max-[850px]:!pt-[30px] max-[850px]:!pb-[10px] rounded-[30px] border border-[#707070] shadow-[inset_0_0_40px_20px_black] max-[1000px]:shadow-[inset_0_0_30px_15px_black] max-[850px]:shadow-[inset_0_0_20px_10px_black] max-[850px]:hover:shadow-[inset_0_0_10px_5px_black] hover:shadow-[inset_0_0_20px_5px_black] duration-1000" style={{ background: bg }}>
            <Image width={570} height={540} alt={alt} src={image} className={`group-hover:scale-[1.1] duration-1000 drop-shadow-[0_0_25px_black] relative z-[2]`} />
            <div className='absolute bottom-0 group-hover:h-[35%] duration-1000 left-0 h-[50%] w-full rounded-b-[30px] z-[20] bg-gradient-to-b from-transparent via-[#000000b3] to-black' />
            <div className='absolute bottom-0 left-0 w-full z-[22] !px-[55px] max-[700px]:!px-[25px] max-[1000px]:!px-[35px] flex flex-col gap-[15px] !pb-[30px] max-[768px]:!pb-[20px] max-[768px]:gap-[5px]'>
             
             <div className='flex gap-2 items-center'>
               <h2 className='font-semibold text-2xl max-[768px]:text-xl max-[578px]:text-lg max-[500px]:text-base max-[1000px]:text-xl'>{title}</h2>
              <span className='bg-white w-[20px] h-[20px] rounded-[50%] opacity-0 group-hover:opacity-100 duration-700 group-hover:rotate-0 -rotate-45 flex juce\ items-center'><WhiteArrowIcon/></span>
              </div>
            
              <p className='font-medium text-[15px] text-[#969696] leading-[100%] max-w-[490px] max-[768px]:text-[13px] max-[1000px]:text-[13px] max-[500px]:text-[12px]'>{desc}</p>
            </div>
            <Image src={dotsBg} alt='bacground for projects lama-it-studio' width={500} height={400} className='duration-1000 absolute top-1/2 left-1/2 -translate-1/2 w-[95%] h-[95%] group-hover:w-[110%] group-hover:scale-[1.4] group-hover:opacity-[0.3] blur-[5px] group-hover:blur-[0px]' />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Projects