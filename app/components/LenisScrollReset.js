"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = window.__LENIS__;
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });

    requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh(true);
    });
  }, [pathname]);

  return null;
}
