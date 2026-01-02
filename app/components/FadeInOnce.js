"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FadeInOnce({ children, delay = 0 }) {
  const ref = useRef(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, {
      opacity: 0,
      y: 40,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;

          gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay,
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
