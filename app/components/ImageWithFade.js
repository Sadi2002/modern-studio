"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageWithFade({ smallSrc, largeSrc, alt }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = largeSrc;
    img.onload = () => setLoaded(true);
  }, [largeSrc]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* małe zdjęcie */}
      <Image
        src={smallSrc}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-50"
        }`}
        style={{ objectFit: "cover" }}
        unoptimized
        priority
      />

      {/* duże zdjęcie */}
      <Image
        src={largeSrc}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ objectFit: "cover" }}
        unoptimized
      />
    </div>
  );
}
