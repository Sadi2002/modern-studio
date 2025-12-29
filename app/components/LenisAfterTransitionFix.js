"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisAfterTransitionFix() {
  useEffect(() => {
    const onReady = () => {
      const lenis = window.__LENIS__;
      if (!lenis) return;

      lenis.resize();
      lenis.scrollTo(0, { immediate: true });

      requestAnimationFrame(() => {
        lenis.start();
        window.__SCROLL_LOCKED__ = false;
      });

      ScrollTrigger.refresh();
    };

    window.addEventListener("app-ready", onReady);
    return () => window.removeEventListener("app-ready", onReady);
  }, []);

  return null;
}
