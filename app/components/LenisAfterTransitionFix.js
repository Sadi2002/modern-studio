"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisAfterTransitionFix() {
  useEffect(() => {
    const onReady = () => {
      const lenis = window.__LENIS__;
      if (!lenis) return;

      // 🔓 zawsze odblokuj input
      document.documentElement.style.pointerEvents = "";

      // 🔥 NAJWAŻNIEJSZE
      lenis.start();

      // 🔥 poczekaj aż layout się ustabilizuje
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          lenis.resize();
          ScrollTrigger.refresh(true);
        });
      });
    };

    window.addEventListener("app-ready", onReady);
    return () => window.removeEventListener("app-ready", onReady);
  }, []);

  return null;
}
