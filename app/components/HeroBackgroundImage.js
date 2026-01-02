"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroBackgroundImage({ src, alt }) {
  const wrapperRef = useRef(null);
  const scrollY = useRef(0);
  const raf = useRef(null);

  const [zoomOut, setZoomOut] = useState(false);

  // zoom startowy – ZOSTAJE
  useEffect(() => {
    const onReady = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setZoomOut(true);
        });
      });
    };

    window.addEventListener("app-content-start", onReady);
    return () => window.removeEventListener("app-content-start", onReady);
  }, []);

  // 🔥 PARALLAX SCROLL (PRAWIDŁOWY)
  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    const animate = () => {
      if (!wrapperRef.current) {
        raf.current = requestAnimationFrame(animate);
        return;
      }

      const vh = window.innerHeight;

      // progress 0 → 1 na wysokości hero
      const progress = Math.min(scrollY.current / vh, 1);

      // DUŻY PARALLAX
      const maxTranslate = vh * 0.4; // 40% viewportu

      wrapperRef.current.style.transform = `
  translateY(${-progress * maxTranslate}px)
  scale(${zoomOut ? 1 : 1.05})
`;

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, [zoomOut]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 will-change-transform">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`
          object-cover
          will-change-transform
          transition-transform
          duration-[1200ms]
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${zoomOut ? "scale-100" : "scale-105"}
        `}
      />
    </div>
  );
}
