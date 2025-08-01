"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import "./hero.css";
import Header from "../Header";
import GradientText from "@/app/components/GradientText/GradientText";
import { ArrowIcon } from "@/public/assets/icons/icons";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Hero = () => {
  const [activeBtn, setActiveBtn] = useState<"left" | "right">("right");
  const leftRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const t = useTranslations();

  const moveHighlight = useCallback(() => {
    const target = activeBtn === "left" ? leftRef.current : rightRef.current;
    const highlight = highlightRef.current;

    if (target && highlight) {
      const { offsetLeft, offsetWidth } = target;
      highlight.style.left = `${offsetLeft - 4}px`;
      highlight.style.width = `${offsetWidth + 6}px`;
    }
  }, [activeBtn]);

  useEffect(() => {
    moveHighlight();
    window.addEventListener("resize", moveHighlight);
    return () => window.removeEventListener("resize", moveHighlight);
  }, [moveHighlight]);

  return (
    <header className="hero-container">
      <Header />
      <div className="dot dot1" />
      <div className="dot dot2" />
      <div className="dot dot3" />
      <div className="dot dot4" />

      <div className="hero-content">
        <h1 className="text-[150px] !px-[20px] max-[1100px]:text-[130px] max-[1000px]:text-[100px] max-[768px]:text-[80px] max-[450px]:text-[64px] !font-bold duration-1000 max-[600px]:leading-[90%]">
          <GradientText text="Lama IT Studio" />
        </h1>
        <p className="font-medium !px-[20px] text-[20px] max-[1100px]:text-lg max-[1000px]:text-base duration-1000 max-[768px]:text-sm max-[768px]:tracking-[-5%] max-[768px]:!mt-[20px]">
         {t('header_1')}
        </p>

        {/* Button group */}
        <div
          onMouseLeave={() => setActiveBtn("right")}
          className="!mt-[40px] cursor-pointer bg-[#0F0F0FE5] flex items-center justify-start rounded-[15px] border border-[#353535] relative overflow-hidden !px-[8px]"
        >
          {/* Moving background border */}
          <div
            ref={highlightRef}
            className="h-[80%] border border-[#6BB0FF] rounded-[12px] absolute top-[10%] duration-1000 z-0"
          />

          {/* Left button */}
          <button
            ref={leftRef}
            onMouseEnter={() => setActiveBtn("left")}
            onClick={() => router.push("#payments")}
            className={`relative z-10 font-medium !py-[10px] !px-[18px] duration-300 max-[768px]:text-[14px] ${
              activeBtn === "left"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6BB0FF]"
                : "text-[#777777]"
            }`}
          >
            {t('button_1')}
          </button>

          {/* Right button */}
          <button
            ref={rightRef}
            onMouseEnter={() => setActiveBtn("right")}
            onClick={() => router.push("#contact")}
            className="relative z-10 flex items-center gap-1 font-medium !py-[10px] !px-[18px] duration-300 max-[768px]:text-[14px]"
          >
            <span
              className={`duration-500 ${
                activeBtn === "right"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6BB0FF]"
                  : "text-[#777777]"
              }`}
            >
              {t('button_2')}
            </span>
            <span
              className={`duration-500 ${
                activeBtn === "right" ? "text-[#6BB0FF]" : "text-[#777777]"
              }`}
            >
              <ArrowIcon />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;