"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxImage({
  src,
  alt,
  intensity = 40,
  className = "",
  priority = false,
}) {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const getMultiplier = () => {
      const w = window.innerWidth;
      if (w < 640) return 0.25;
      if (w < 1024) return 0.5;
      return 1;
    };

    const handleScroll = () => {
      const wrapper = image.parentElement;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progres 0–1
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

      const effectiveIntensity = intensity * getMultiplier();

      // 🔒 KLUCZ: bezpieczny zakres (max kilka % wysokości)
      const maxSafeTranslate = rect.height * 0.025; // 2.5%

      const rawTranslate =
        progress * effectiveIntensity - effectiveIntensity / 2;

      const translateY = Math.max(
        Math.min(rawTranslate, maxSafeTranslate),
        -maxSafeTranslate
      );

      image.style.transform = `translateY(${translateY}px)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [intensity]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        className={`object-cover will-change-transform ${className}`}
      />
    </div>
  );
}
