"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeInMobile({
  children,
  duration = 700,
  delay = 0,
  threshold = 0.2,
  once = true,
  y = 12,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔒 SPRAWDZAMY WIDTH TYLKO RAZ
  useEffect(() => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);

    // 👉 desktop: pokaż od razu, bez animacji
    if (!mobile) {
      setShow(true);
    }
  }, []);

  // 👉 OBSERVER TYLKO NA MOBILE
  useEffect(() => {
    if (!isMobile || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isMobile, threshold, once]);

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0px)" : `translateY(${y}px)`,
        transition: isMobile
          ? `
              opacity ${duration}ms cubic-bezier(0.75,0.10,0.22,1) ${delay}ms,
              transform ${duration}ms cubic-bezier(0.75,0.10,0.22,1) ${delay}ms
            `
          : "none",
      }}
    >
      {children}
    </div>
  );
}
