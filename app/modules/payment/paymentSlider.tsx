"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

const cards = [
  { id: 1, title: "Card 1", desc: "Tavsif 1" },
  { id: 2, title: "Card 2", desc: "Tavsif 2" },
  { id: 3, title: "Card 3", desc: "Tavsif 3" },
  { id: 4, title: "Card 4", desc: "Tavsif 4" },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearAndSetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    clearAndSetTimeout();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true, // kompyuterda ham surish imkoniyati uchun
  });

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden" {...swipeHandlers}>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full min-w-full flex-shrink-0 p-6 bg-white rounded-2xl shadow-md text-center"
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Navigatsiya tugmalari */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ›
      </button>

      {/* Nuqtalar */}
      <div className="flex justify-center mt-4 gap-2">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}