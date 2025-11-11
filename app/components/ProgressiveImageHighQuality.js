"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProgressiveImagePerfect({
  smallSrc,
  largeSrc,
  alt,
  aspectRatio = "16/9",
}) {
  const [src, setSrc] = useState(smallSrc);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Gdy tylko strona się załaduje — startuj pobieranie dużych obrazków
    const handleLoad = () => {
      const img = new window.Image();
      img.src = largeSrc;
      img.decoding = "async";
      img.fetchPriority = "low";
      img.loading = "lazy";

      img.onload = () => {
        setSrc(largeSrc); // podmień źródło
        setLoaded(true);
      };
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
      <Image
        key={src} // wymusza przeładowanie komponentu przy zmianie źródła
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={false}
        loading="eager"
        decoding="async"
        fetchPriority="low"
        unoptimized
        className="object-cover"
      />
    </div>
  );
}
