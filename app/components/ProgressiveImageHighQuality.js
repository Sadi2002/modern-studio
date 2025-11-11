"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProgressiveImageHighQuality({
  smallSrc,
  largeSrc,
  alt,
  className = "",
  aspectRatio = "16/9",
}) {
  const [showLarge, setShowLarge] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      const img = new window.Image();
      img.src = largeSrc;
      img.onload = () => setShowLarge(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [largeSrc]);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ aspectRatio }}
    >
      {/* Małe zdjęcie — ładowane natychmiast */}
      <Image
        src={smallSrc}
        alt={alt}
        fill
        loading="eager"
        decoding="async"
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ease-in-out ${
          showLarge ? "opacity-0" : "opacity-100"
        } ${className}`}
      />

      {/* Duże zdjęcie — pojawia się dopiero po pełnym załadowaniu strony */}
      {showLarge && (
        <img
          src={largeSrc}
          alt={alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 ${className}`}
          loading="lazy"
          fetchPriority="low"
          decoding="async"
        />
      )}
    </div>
  );
}
