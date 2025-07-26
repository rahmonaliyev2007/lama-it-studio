"use client"
import React, { useState } from 'react';
import './hero.css'
import Header from '../Header';
import GradientText from '@/app/components/GradientText/GradientText';
import { ArrowIcon } from '@/public/assets/icons/icons';
const Hero = () => {
  const [activeBtn, setActiveBtn] = useState(true);
  return (
    <header className="hero-container">
      <Header />

      <div className="dot dot1" />
      <div className="dot dot2" />
      <div className="dot dot3" />
      <div className="dot dot4" />

      {/* Content */}
      <div className='hero-content'>
        <h1 className='text-[150px] !font-bold'><GradientText text='Lama IT Studio' fontSize={150} /></h1>
        <p className='font-medium text-[20px]'>Мы разрабатываем индивидуальные ИТ-решения для инновационных компаний.</p>
        <div onMouseLeave={() => setActiveBtn(true)} className="!mt-[40px] cursor-pointer bg-[#0F0F0FE5] flex items-center justify-center rounded-[15px] border border-[#353535] relative overflow-hidden" >
          <button onMouseEnter={() => setActiveBtn(false)} className={`!py-[10px] !px-[18px] duration-500 font-medium relative z-10 ${!activeBtn ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6BB0FF]" : "text-[#777777]"}`}>
            Наши услуги
          </button>

          <button onMouseEnter={() => setActiveBtn(true)} className={`!py-[10px] !px-[18px] flex items-center gap-1 duration-500 font-medium relative z-10 `} >
            <span className={` duration-500 ${activeBtn ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6BB0FF]" : "text-[#777777]"}`}>Связаться</span> <span className={`duration-500 ${activeBtn ? "text-[#6BB0FF]" : "text-[#777777]"}`}><ArrowIcon /></span>
          </button>

          <div onClick={() => !activeBtn ? console.log("Nashi uslugiga go") : console.log("Svyazatga go")}
            className={`w-[48.5%] h-[80%] border border-[#6BB0FF] rounded-[12px] absolute top-[4.5px] duration-500 z-0 
        ${activeBtn ? "left-1/2" : "left-[4.5px]"}`}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;