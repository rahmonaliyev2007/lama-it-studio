"use client";

import Heading from "@/app/components/Heading/Heading";
import { AIIcon, BranchIcon, ChipIcon, DotsIcon, GlobeIcon, LamaIconCircle, PCIcon, PhoneIcon, UIUXIcon, } from "@/public/assets/icons/icons";
import React, { useEffect, useState } from "react";
import './rotation.css'
const items = [
  { title: 'Веб-разработка', icon: <GlobeIcon />, description: "Мы проектируем продуманные и стильные интерфейсы, где эстетика сочетается с функциональностью.", },
  { title: 'Разработка мобильных приложений', icon: <PhoneIcon />, description: "Создаем мощные и адаптивные веб-приложения под любые устройства и экраны.", },
  { title: 'AI и машинное обучение', icon: <AIIcon />, description: "Мы проектируем продуманные и стильные интерфейсы, где эстетика сочетается с функциональностью. Наш подход ориентирован на поведение пользователей, удобство восприятия и визуальную гармонию — чтобы пользователи не просто использовали продукт, а получали от него удовольствие.", },
  { title: 'Pc nmadur icon', icon: <PCIcon />, description: "Интеграция AI для автоматизации процессов и улучшения пользовательского опыта.", },
  { title: '', icon: "", description: "Разрабатываем визуальную айдентику, логотипы и фирменный стиль.", },
  { title: 'Branch nimadur title', icon: <BranchIcon />, description: "Обеспечиваем поддержку и сопровождение digital-продуктов на всех этапах.", },
  { title: 'Chip namdur title', icon: <ChipIcon />, description: "Обеспечиваем поддержку и сопровождение digital-продуктов на всех этапах.", },
  { title: 'UI/UX-дизайн', icon: <UIUXIcon />, description: "Обеспечиваем поддержку и сопровождение digital-продуктов на всех этапах.", },
];

const RotatingInfoCircle = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [rotation, setRotation] = useState(0);
  const [showDescriptionIndex, setShowDescriptionIndex] = useState<number | null>(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDescriptionIndex(null);

      setTimeout(() => {
        const nextIndex = (activeIndex - 1 + items.length) % items.length;
        setActiveIndex(nextIndex);
        setRotation((prev) => prev + 360 / items.length);

        setTimeout(() => {
          setShowDescriptionIndex(nextIndex);
        }, 1000);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="containers">
      <Heading text="Услуги" title={<>Что мы умеем — <br /> технологично, точно, красиво</>} paragraph="От сайта до сложной цифровой экосистемы — мы разрабатываем продукты, которые решают реальные задачи. В каждом проекте — баланс технологий, дизайна и здравого смысла. Мы не просто делаем «как надо», мы делаем как лучше." />
      <div className="w-full h-screen flex items-center justify-start bg-black text-white relative overflow-hidden">
        {/* Central circle */}
        <div className="absolute w-[600px] h-[600px] items-center justify-center translate-x-[15%] flex z-[10]">
          <div className="w-[60%] relative h-[60%] rounded-full flex items-center justify-center z-0  overflow-hidden"><DotsIcon />
            <div className="w-full h-full  absolute top-0 rounded-[50%] left-0 shadow-[inset_0_0_100px_30px_black]"></div>

            <div className="absolute top-1/2 -translate-1/2 left-1/2 z-[20] rounded-[50%]"><div className="lama-icon"><LamaIconCircle /> </div>
              <div className="w-full h-full absolute top-0 z-[-1] bg-[#52515175] scale-[1.4] rounded-[50%] lama-shadow"></div>
              <div className="w-full h-full absolute top-0 z-[-1] bg-[#7e7b7b2e] scale-[1.8] rounded-[50%] lama-shadow"></div>
            </div>
          </div>
        </div>

        {/* Rotating elements */}
        <div className="absolute min-w-[600px] h-[600px] border border-dashed border-[#898989] rounded-[50%] flex items-center justify-center translate-x-[15%]" style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.75s ease-in-out", }}>
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const shouldShowDescription = index === showDescriptionIndex;

            return (
              <div key={index} className={` absolute flex items-center justify-start  bg-white text-black rounded-[30px] !p-2 transition-all duration-1000 ease-in-out overflow-hidden ${isActive && shouldShowDescription ? "w-[600px] h-auto z-10 justify-start gap-4" : "w-[80px] h-[80px] z-0"}`} style={{ transform: isActive && shouldShowDescription ? `rotate(${(360 / items.length) * index}deg) translate(0, -565px) rotate(-${rotation + (360 / items.length) * index}deg)` : `rotate(${(360 / items.length) * index}deg) translate(0, -300px) rotate(-${rotation + (360 / items.length) * index}deg)`, }} >
                <div className="w-[80px] h-[80px] flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-bold text-2xl text-black">{item.title}</h4>
                  <p className={` text-[16px] leading-[90%] text-black font-bold transition-all duration-1000 ease-in-out transform !w-[400px] ${shouldShowDescription ? "opacity-100" : "opacity-0 overflow-hidden"} `}>
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default RotatingInfoCircle;