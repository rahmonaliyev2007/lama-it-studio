"use client"
import React, { useEffect, useState } from "react";
import './rotation.css'
import { LamaIconCircle } from "@/public/assets/icons/LamaIcon";
import { items } from "./paymentData";
import dotsBg from '@/public/assets/images/dots.svg'
import Image from "next/image";
import { BREAKPOINTS } from "./paymentConfigs";

// Breakpoint configurations


const Payment = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const [rotation, setRotation] = useState(0);
    const [showDescriptionIndex, setShowDescriptionIndex] = useState<number | null>(2);

    useEffect(() => {
        let lastSwitchTime = performance.now();
        let animationFrameId: number;

        const loop = (now: number) => {
            const elapsed = now - lastSwitchTime;

            if (elapsed >= 6000) {
                setShowDescriptionIndex(null);

                setTimeout(() => {
                    const nextIndex = (activeIndex - 1 + items.length) % items.length;
                    setActiveIndex(nextIndex);
                    setRotation((prev) => prev + 360 / items.length);

                    setTimeout(() => {
                        setShowDescriptionIndex(nextIndex);
                    }, 1000);
                }, 1000);

                lastSwitchTime = now;
            }

            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(animationFrameId);
    }, [activeIndex]);

    const renderCentralCircle = (config: any) => (
        <div className={config.containerClasses}>
            <div className="w-[60%] relative h-[60%] rounded-full flex items-center justify-center z-0 overflow-hidden">
                {dotsBg && <Image alt="lama bg dots" src={dotsBg} />}
                <div className="w-full h-full absolute top-0 rounded-[50%] left-0 shadow-[inset_0_0_100px_30px_black]"></div>
                <div className="absolute top-1/2 -translate-1/2 left-1/2 z-[20] rounded-[50%]">
                    <div className={`lama-icon ${config.lamaScale}`}><LamaIconCircle /></div>
                    <div className={`w-full h-full absolute top-0 z-[-1] bg-[#52515175] ${config.shadowScale1} rounded-[50%] lama-shadow`}></div>
                    <div className={`w-full h-full absolute top-0 z-[-1] bg-[#7e7b7b2e] ${config.shadowScale2} rounded-[50%] lama-shadow`}></div>
                </div>
            </div>
        </div>
    );

    const renderRotatingElements = (config: any) => (
        <div className={config.rotatingClasses} style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.77s ease-in-out" }}>
            {items.map((item, index) => {
                const isActive = index === activeIndex;
                const shouldShowDescription = index === showDescriptionIndex;
                const rotateBase = (360 / items.length) * index;
                const commonTransform = `rotate(${rotateBase}deg) translate(0, ${config.translateDistance}px) rotate(-${rotation + rotateBase}deg)`;

                if (item.title === "plus") {
                    return (
                        <div key={index} className={`absolute flex items-center justify-center rounded-[50%] border border-dashed border-[#898989] bg-black ${config.circleSize} z-0 transition-all duration-1000 ease-in-out overflow-hidden`} style={{ transform: commonTransform }}>
                            <div className={`${config.circleSize} ${config.iconPadding || ''} flex items-center justify-center`}>{item.icon}</div>
                        </div>
                    );
                }

                return (
                    <div key={index} 
                         className={`absolute flex items-center justify-start bg-white text-black ${config.borderRadius} !py-2 transition-all duration-[0.95s] ease-in-out overflow-hidden ${isActive && shouldShowDescription ? `${config.activeWidth} h-auto z-10` : `${config.circleSize} z-0`}`}
                         style={{ transform: isActive && shouldShowDescription ? `rotate(${rotateBase}deg) translate(0, ${config.activeTranslateDistance}px) rotate(-${rotation + rotateBase}deg)` : commonTransform }}>
                        
                        <div className={`${config.circleSize} flex items-center !px-[20px]`}>
                            {item.icon}
                        </div>

                        <div className={`${isActive && shouldShowDescription ? "opacity-100 visible" : "opacity-0 invisible"} ${config.noMaxHeight ? "" : "max-h-96"} ${config.activeMinWidth} duration-500`}>
                            <h4 className={`font-bold ${config.titleSize} text-black line-clamp-1`}>{item.title}</h4>
                            <p className={`${config.textSize} leading-[90%] text-black !pr-2 line-clamp-3 font-bold transition-all duration-1000 ease-in-out transform w-full`}>{item.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return (
        <section className="" id="payments">
            <div className="w-full h-screen flex items-center justify-start bg-black text-white relative overflow-hidden">
    
                {renderCentralCircle(BREAKPOINTS.desktop)}
                {renderCentralCircle(BREAKPOINTS.tablet)}
                {renderCentralCircle(BREAKPOINTS.mobile)}

                {renderRotatingElements(BREAKPOINTS.desktop)}
                {renderRotatingElements(BREAKPOINTS.tablet)}
                {renderRotatingElements(BREAKPOINTS.mobile)}
                {renderRotatingElements(BREAKPOINTS.small)}
            </div>
        </section>
    );
};

export default Payment;