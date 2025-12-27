"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroBackgroundImage({ src, alt }) {
  const [zoomOut, setZoomOut] = useState(false);

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

  return (
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
  );
}
