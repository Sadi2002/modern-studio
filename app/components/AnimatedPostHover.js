"use client";

import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import ArrowWhite from "@/public/arrow-right-white.png";

const CURSOR_SIZE = 80;
const FOLLOW_LERP = 0.15;

// 🔑 etykiety zależne od języka
const LABELS = {
  en: "View post",
  pl: "Zobacz wpis",
  de: "Beitrag ansehen",
};

export default function AnimatedPostHover({ children }) {
  const pathname = usePathname();

  const lang = pathname.startsWith("/pl")
    ? "pl"
    : pathname.startsWith("/de")
    ? "de"
    : "en";

  const label = LABELS[lang];

  // refs
  const cursorRef = useRef(null);
  const cursorCircleRef = useRef(null);
  const cursorTextWrapperRef = useRef(null);
  const textRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    pos.current.x = e.clientX;
    pos.current.y = e.clientY;

    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);

    // 🔒 HARD RESET TEKSTU
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.set(textRef.current, {
        y: "100%",
        opacity: 1,
        display: "block",
      });
    }

    if (cursorTextWrapperRef.current) {
      gsap.killTweensOf(cursorTextWrapperRef.current);
      gsap.set(cursorTextWrapperRef.current, {
        y: "0%",
        opacity: 1,
      });
    }
  };

  // smooth cursor follow — 1:1 jak projekty
  useEffect(() => {
    if (!hovered) return;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * FOLLOW_LERP;
      pos.current.y += (mouse.current.y - pos.current.y) * FOLLOW_LERP;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${pos.current.x}px, ${pos.current.y}px, 0)
          translate(0%, -50%)
          scale(${hovered ? 1 : 0.8})
        `;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafRef.current);
    };
  }, [hovered]);

  // slide tekstu — zabezpieczony
  useEffect(() => {
    if (!textRef.current) return;

    gsap.killTweensOf(textRef.current);

    gsap.to(textRef.current, {
      y: hovered ? "0%" : "100%",
      duration: 0.32,
      ease: "power3.out",
      delay: hovered ? 0.16 : 0.12,
    });
  }, [hovered]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none
        flex flex-col items-center gap-3"
      >
        {/* KOŁO */}
        <div
          ref={cursorCircleRef}
          className="flex items-center justify-center
          rounded-full bg-black
          transition-transform duration-500 ease-out"
          style={{
            width: `${CURSOR_SIZE}px`,
            height: `${CURSOR_SIZE}px`,
            transform: hovered ? "scale(1)" : "scale(0)",
          }}
        >
          <Image
            src={ArrowWhite}
            alt="arrow"
            className="w-[40px] h-[40px]"
            placeholder="blur"
          />
        </div>

        {/* TEKST */}
        <div
          ref={cursorTextWrapperRef}
          className="overflow-hidden"
          style={{ height: "20px" }}
        >
          <span
            ref={textRef}
            className="block text-black text-sm tracking-wide uppercase"
            style={{
              lineHeight: "20px",
              transform: "translateY(100%)",
            }}
          >
            {label}
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}
