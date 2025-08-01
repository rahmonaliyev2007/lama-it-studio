"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { LamaIconCircle } from "@/public/assets/icons/LamaIcon";
import dotsBg from '@/public/assets/images/dots.svg';
import { AIIcon, BranchIcon, ChipIcon, GlobeIcon, PCIcon, PhoneIcon, UIUXIcon } from "@/public/assets/icons/icons";
import { useTranslations } from "next-intl";

const cards = [
    { id: 1, title: "Card 1", desc: "Tavsif 1" },
    { id: 2, title: "Card 2", desc: "Tavsif 2" },
    { id: 3, title: "Card 3", desc: "Tavsif 3" },
    { id: 4, title: "Card 4", desc: "Tavsif 4" },
];


export default function Slider() {
    const t = useTranslations();
     const cards = [
      {id:1 , title: 'Веб-разработка', icon: <GlobeIcon />, description: t('info_17')},
      {id:2 , title: 'Разработка мобильных приложений', icon: <PhoneIcon />, description: t('info_19') },
      {id:3 , title: 'AI и машинное обучение', icon: <AIIcon />, description: t('info_16')},
      {id:4 , title: 'Pc nmadur icon', icon: <PCIcon />, description:t('info_15') },
      {id:5 , title: 'Branch nimadur title', icon: <BranchIcon />, description: t('info_18'), },
      {id:6 , title: 'Chip namdur title', icon: <ChipIcon />, description: t('info_14'), },
      {id:7 , title: 'UI/UX-дизайн', icon: <UIUXIcon />, description: t('info_13'), },
    ];
    return (
        <div className="w-full max-w-3xl mx-auto relative h-[380px]">
            {/* Background dots */}
            <div className="absolute w-[380px] h-[380px] rounded-full overflow-hidden bg-black -translate-x-1/2 z-0">
                <Image src={dotsBg} alt="dots lama-it-studio" fill className="object-cover" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_40px_rgba(0,0,0,0.9)] pointer-events-none" />
            </div>

            {/* Icon overlay */}
            <div className="absolute scale-[0.8] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <LamaIconCircle />
            </div>

            {/* Swiper */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={100}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                className="absolute top-[38%] left-0 w-full -translate-y-[15%] h-full z-10 !pr-4 !pl-[100px] !m-0 !py-10 "
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className="bg-white shadow-[0_0_12px_2px_white] rounded-[20px] !p-[10px]">
                            <h2 className="text-[14px] text-[#000000] leading-[100%] flex items-center gap-2 font-bold"><span className={`${card.id === 7 ? 'scale-[1.1] !py-2 !mx-2' : 'scale-[0.7]'}`}>{card.icon}</span> {card.title}</h2>
                            <p className="text-[#000000] font-bold leading-[110%] text-[10px] !ml-[48px]">{card.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}