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

    // 📐 RESPONSYWNY MNOŻNIK
    const getMultiplier = () => {
      const w = window.innerWidth;
      if (w < 640) return 0.25; // telefon
      if (w < 1024) return 0.5; // tablet / mały laptop
      return 1; // desktop
    };

    const handleScroll = () => {
      const wrapper = image.parentElement;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

      const effectiveIntensity = intensity * getMultiplier();

      const translateY = Math.min(
        Math.max(
          progress * effectiveIntensity - effectiveIntensity / 2,
          -effectiveIntensity / 2
        ),
        effectiveIntensity / 2
      );

      image.style.transform = `translateY(${translateY}px) scale(1.15)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [intensity]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover will-change-transform ${className}`}
      />
    </div>
  );
}
