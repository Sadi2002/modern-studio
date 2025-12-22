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

    const handleScroll = () => {
      const wrapper = image.parentElement;
      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

      const translateY = Math.min(
        Math.max(progress * intensity - intensity / 2, -intensity / 2),
        intensity / 2
      );

      image.style.transform = `translateY(${translateY}px) scale(1.15)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

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
