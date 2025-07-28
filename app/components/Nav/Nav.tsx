"use client";
import React, { useRef, useState } from "react";
import "./nav.css";

const navItems = [
  { title: "О нас", link: "#about" },
  { title: "Услуги", link: "#payments" },
  { title: "Проекты", link: "#projects" },
  { title: "Вопросы", link: "#questions" },
  { title: "Контакты", link: "#contact" },
];

const Nav = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseThere, setIsMouseThere] = useState<boolean>(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.currentTarget;
    const container = containerRef.current || document.body;
    const rect = li.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const width = rect.width - 12;
    const height = rect.height - 12;
    const left = rect.left - containerRect.left;
    const top = rect.top - containerRect.top;

    setIndicatorStyle({
      width: `${width}px`,
      height: `${height}px`,
      transform: `translate(${left + 5}px, ${top}px)`,
    });
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      <ul
        onMouseEnter={() => setIsMouseThere(true)}
        onMouseLeave={() => setIsMouseThere(false)}
        className="flex justify-center items-center border border-[#353535] p-2 rounded-[15px] overflow-hidden bg-[#0F0F0FCC] relative"
      >
        {navItems.map((item, idx) => (
          <li
            key={idx}
            onMouseEnter={handleMouseEnter}
            className="relative z-10 !px-[22px] !py-[10px] lowercase font-medium bg-[#0F0F0FCC]"
          >
            <a
              href={item.link}
              className="text-[16px] text-[#777777] hover:text-[#6BB0FF] duration-1000 cursor-pointer block"
            >
              {item.title}
            </a>
          </li>
        ))}
        <span
          className={`nav-indicator ${
            isMouseThere ? "opacity-100 duration-300" : "opacity-0"
          }`}
          style={indicatorStyle}
        ></span>
      </ul>
    </div>
  );
};

export default Nav;