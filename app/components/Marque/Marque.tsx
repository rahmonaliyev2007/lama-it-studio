"use client"
import React, { useEffect, useRef } from "react";
import "./Marquee.css";

const items: string[] = ["FEEDUP", "PEPSI", "MAKRO", "ZARA", "KORZINKA", "EVOS", "ORMAN"];

const Marquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee-track" ref={marqueeRef}>
        {[...items, ...items].map((text, idx) => (
          <span className="marquee-item" key={idx}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;