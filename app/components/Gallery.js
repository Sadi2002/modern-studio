"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapLayout({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // tylko na szerokościach >= 1280px
    if (window.innerWidth < 1280) {
      return;
    }

    const ctx = gsap.context(() => {
      const proxy = { y: 0 };
      const ease = 0.05; // mniejsza wartość = słabszy efekt (mniejsza różnica pozycji)

      const update = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        proxy.y += (scrollY - proxy.y) * ease;

        // mniejszy zakres przesunięcia (np. 70% realnego ruchu)
        const translatedY = proxy.y * 0.7;

        gsap.set(el, { y: -translatedY, force3D: true });

        requestAnimationFrame(update);
      };

      requestAnimationFrame(update);

      ScrollTrigger.scrollerProxy(el, {
        scrollTop(value) {
          if (arguments.length) {
            window.scrollTo(0, value);
          }
          return window.scrollY || window.pageYOffset;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: el.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () =>
        window.scrollTo(0, window.pageYOffset || 0)
      );
      ScrollTrigger.refresh();
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
