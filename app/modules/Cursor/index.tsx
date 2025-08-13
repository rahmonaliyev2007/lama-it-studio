"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const createParticle = useCallback((): void => {
    if (!particlesRef.current) return;

    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 5 + 2;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.opacity = (Math.random() * 0.5 + 0.3).toString();
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particlesRef.current.appendChild(particle);

    setTimeout(() => {
      if (particlesRef.current?.contains(particle)) {
        particlesRef.current.removeChild(particle);
        createParticle(); 
      }
    }, (duration + delay) * 10);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        createParticle();
      }
    }

    if (heroRef.current) {
      const text = heroRef.current.querySelector('h1');
      if (text) {
        text.classList.add('animate-reveal');
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [createParticle]);

  return (
    <>
      <div ref={particlesRef} className="pointer-events-none fixed top-0 left-0 w-full h-full z-[-1] max-[768px]:hidden"/>
      <div ref={heroRef} className={`fixed rounded-full max-[768px]:hidden w-[20px] h-[20px] pointer-events-none z-[500] -translate-1/2 shadow-[0_0_5.2px_0_#00000040] bg-gradient-to-r from-[#FFFFFF] to-[#6BB0FF] ${ cursorVisible ? 'opacity-100' : 'opacity-0' }`} style={{ left: `${mousePosition.x + 5}px`, top: `${mousePosition.y + 5}px`, }}/>
    </>
  );
};

export default Cursor;