"use client";

import { useEffect, useRef } from "react";

export default function HeroScrollEffects({ children }) {
  const contentRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);

  const scrollY = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    const animate = () => {
      const vh = window.innerHeight;
      const progress = Math.min(scrollY.current / vh, 1);

      // CONTENT
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${progress * 80}px)`;
        contentRef.current.style.opacity = 1 - progress * 0.4;
      }

      // BACKGROUND
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${progress * 60}px)`;
      }

      // OVERLAY
      if (overlayRef.current) {
        overlayRef.current.style.backgroundColor = `rgba(0,0,0,${
          0.55 + progress * 0.25
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
