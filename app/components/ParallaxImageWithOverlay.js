"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxImageWithOverlay({
  src,
  alt,
  intensity = 120,
  overlay = "rgba(0,0,0,0.6)",
  priority = false,
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // sekcja poza viewportem → nie liczymy
      if (rect.bottom < 0 || rect.top > windowHeight) return;

      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

      const translate = (progress - 0.5) * intensity;

      image.style.transform = `translate3d(-50%, ${translate}px, 0)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [intensity]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* PARALLAX IMAGE */}
      <div
        ref={imageRef}
        className="
          absolute
          left-1/2
          top-[-15%]
          w-full
          h-[130%]
          will-change-transform
        "
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10" style={{ background: overlay }} />
    </div>
  );
}
