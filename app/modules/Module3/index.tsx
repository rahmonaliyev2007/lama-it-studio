"use client"
import React, { useEffect, useState } from "react";

const items = [
    {
        title: "1",
        description:
            "Мы проектируем продуманные и стильные интерфейсы, где эстетика сочетается с функциональностью. Наш подход ориентирован на поведение пользователей, удобство восприятия и визуальную гармонию — чтобы пользователи не просто использовали продукт, а получали от него удовольствие.",
    },
    {
        title: "2",
        description: "Создаем мощные и адаптивные веб-приложения под любые устройства и экраны.",
    },
    {
        title: "3",
        description: "Проектируем удобные мобильные интерфейсы для iOS и Android платформ.",
    },
    {
        title: "4",
        description: "Интеграция AI для автоматизации процессов и улучшения пользовательского опыта.",
    },
    {
        title: "5",
        description: "Разрабатываем визуальную айдентику, логотипы и фирменный стиль.",
    },
    {
        title: "6",
        description: "Обеспечиваем поддержку и сопровождение digital-продуктов на всех этапах.",
    },
    {
        title: "7",
        description: "Обеспечиваем поддержку и сопровождение digital-продуктов на всех этапах.",
    },
    {
        title: "8",
        description: "Обеспечиваем поддержку и сопровождение digital-продуктов на всех этапах.",
    },
];

const RotatingInfoCircle = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev === 0 ? prev = 7 : prev - 1) % items.length);
            setRotation((prev) => prev + 360 / items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="containers">
            <div className="w-full h-screen flex items-center justify-start bg-black text-white relative overflow-hidden">

                <div className="absolute w-[600px] h-[600px] flex items-center justify-center translate-x-[10%]" style={{ transform: `rotate(${rotation}deg)`, transition: "transform 1s ease-in-out" }} >
                    {items.map((_, index) => (
                        <div key={index} className="w-[100px] h-[100px] rounded-[30px] bg-white text-black flex items-center justify-center absolute duration-[1.3s]" style={{ transform: `rotate(${(360 / items.length) * index}deg) translate(0, -300px) rotate(-${rotation + (360 / items.length) * index}deg)` }}>
                            {index}
                        </div>
                    ))}
                </div>

                {/* Central circle */}
                <div className="absolute w-[600px] h-[600px] items-center justify-center translate-x-[10%] flex">

                <div className="w-[70%] h-[70%] opacity-40 rounded-full bg-blue-500 flex items-center justify-center z-10 ">
                   {/* svg */}

                </div>
                </div>

                {/* Info box */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[350px] bg-white text-black rounded-xl p-4 transition-opacity duration-500">
                    <h3 className="font-semibold text-lg mb-1">{items[activeIndex].title}</h3>
                    <p className="text-sm leading-tight">{items[activeIndex].description}</p>
                </div>
            </div>
        </section>
    );
};

export default RotatingInfoCircle;