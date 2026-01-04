"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  // ⛔ NIE BLOKUJ scrolla przed LCP
  useEffect(() => {
    if (!enabled) return;

    const preventScroll = (e) => {
      if (window.__SCROLL_LOCKED__) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [enabled]);

  // visibility handlers — BEZ ZMIAN
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        if (window.__LENIS__) window.__LENIS__.resize();
        if (window.ScrollTrigger) ScrollTrigger.refresh();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        document.documentElement.style.pointerEvents = "";
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // 🔥 DELAYED LENIS INIT (KLUCZ)
  useEffect(() => {
    // 1️⃣ pozwól przeglądarce wyrenderować LCP
    requestAnimationFrame(() => {
      // 2️⃣ następny tick
      setTimeout(() => {
        setEnabled(true);

        const lenis = new Lenis({
          duration: 1,
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
        });

        lenisRef.current = lenis;
        window.__LENIS__ = lenis;

        const raf = (time) => {
          lenis.raf(time);
          rafRef.current = requestAnimationFrame(raf);
        };

        rafRef.current = requestAnimationFrame(raf);
      }, 0);
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      window.__LENIS__ = null;
    };
  }, []);

  return <>{children}</>;
}
