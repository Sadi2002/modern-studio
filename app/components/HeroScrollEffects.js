"use client";

import { useEffect, useRef } from "react";

export default function HeroScrollEffects({ children }) {
  const contentRef = useRef(null);
  const bgRef = useRef(null);
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

      // 🖥 DESKTOP – wszystkie animacje
      if (isDesktop) {
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${progress * 60}px)`;
          contentRef.current.style.opacity = 1 - progress * 0.4;
        }

        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${progress * 60}px)`;
        }
      }

      // 📱 MOBILE + 🖥 DESKTOP – TYLKO PRZYCIEMNIENIE
      if (overlayRef.current) {
        overlayRef.current.style.backgroundColor = `rgba(0,0,0,${
          0.4 + progress * 0.5
        })`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      />

      {/* background */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform" />

      {/* content */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20 pointer-events-none will-change-transform"
      >
        <div className="pointer-events-auto h-full">{children}</div>
      </div>
    </>
  );
}
