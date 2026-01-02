"use client";

import { useEffect, useRef } from "react";

export default function HeroScrollEffects({ children }) {
  const overlayRef = useRef(null);

  const scrollY = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    const animate = () => {
      const vh = window.innerHeight;
      const progress = Math.min(scrollY.current / vh, 1);

      if (overlayRef.current) {
        // 📱 mobile – tylko przyciemnienie
        if (!isDesktop) {
          overlayRef.current.style.backgroundColor = `rgba(0,0,0,${
            0.4 + progress * 0.3
          })`;
        }

        // 🖥 desktop – jak było
        if (isDesktop) {
          overlayRef.current.style.backgroundColor = `rgba(0,0,0,${
            0.4 + progress * 0.5
          })`;
        }
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      />

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="pointer-events-auto h-full">{children}</div>
      </div>
    </>
  );
}
