"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProgressiveImage({
  smallSrc,
  largeSrc,
  alt,
  className = "",
}) {
  const [bigLoaded, setBigLoaded] = useState(false);

  useEffect(() => {
    // Używamy globalnego Image z okna przeglądarki
    const img = new window.Image();
    img.src = largeSrc;
    img.onload = () => setBigLoaded(true);
  }, [largeSrc]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Mały obrazek */}
      <Image
        src={smallSrc}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-700 ${
          bigLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(10px)" }}
        unoptimized
      />

      {/* Duży obrazek */}
      {bigLoaded && (
        <Image
          src={largeSrc}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-700 opacity-100"
          unoptimized
        />
      )}
    </div>
  );
}
