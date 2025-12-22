"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HoverCursor({ arrow }) {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(
            ${pos.current.x}px,
            ${pos.current.y}px,
            0
          )
          translate(-50%, -50%)
          scale(${visible ? 1 : 0})
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
  }, [visible]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none
        w-[70px] h-[70px] rounded-full
        bg-black flex items-center justify-center
        transition-[width,height,opacity] duration-300 ease-out"
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      <Image src={arrow} alt="arrow" className="w-[20px] h-[20px]" />
    </div>
  );
}
