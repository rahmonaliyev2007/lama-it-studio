"use client"
import React, { useEffect, useRef, useState } from 'react'

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);
    const particlesRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

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
    }, []);
    
    const createParticle = (): void => {
        
        if (!particlesRef.current) return;

        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size: number = Math.random() * 5 + 2;
        const posX: number = Math.random() * window.innerWidth;
        const posY: number = Math.random() * window.innerHeight;
        const duration: number = Math.random() * 20 + 10;
        const delay: number = Math.random() * 5;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.opacity = (Math.random() * 0.5 + 0.3).toString();
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particlesRef.current.appendChild(particle);

        setTimeout(() => {
            if (particlesRef.current && particlesRef.current.contains(particle)) {
                particlesRef.current.removeChild(particle);
                createParticle(); 
            }
        }, (duration + delay) * 10000);
    };
    return (
       <div className={`fixed rounded-full w-[20px] h-[20px] pointer-events-none z-50 -translate-1/2 shadow-[0_0_5.2px_0_#00000040] bg-linear-to-r from-[#FFFFFF] to-[#6BB0FF] ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ left: `${mousePosition.x + 30}px`, top: `${mousePosition.y + 30}px`}} />

    )
}

export default Cursor