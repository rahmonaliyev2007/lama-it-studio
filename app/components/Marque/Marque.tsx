"use client"
import React, { useEffect, useRef, useState } from "react";
import "./Marquee.css";

const items: string[] = ["MINISTRY OF ECOLOGY", "AQUA EVOLUTION", "FINTECH", "COMFORT ENGINEERING GROUP"];

const Marquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [repeatedItems, setRepeatedItems] = useState<string[]>([]);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const itemWidth = 200;
    const minItems = Math.ceil((window.innerWidth * 2) / itemWidth);

    const repeats = Math.ceil(minItems / items.length);
    const newItems = Array(repeats).fill(items).flat();
    setRepeatedItems(newItems);
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos -= 1;
      marquee.style.transform = `translateX(${scrollPos}px)`;

      if (Math.abs(scrollPos) >= marquee.scrollWidth / 2) {
        scrollPos = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [repeatedItems]);

  return (
    <div className="marquee-container">
      <div className="marquee-track" ref={marqueeRef}>
        {repeatedItems.map((text, idx) => (
          <span className="marquee-item" key={idx}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;