"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealAfterTransition({
  children,
  delay = 0,
  duration = 700,
  stagger = 80,
  threshold = 0.3,
  once = true,
  fallbackMs = 1800, // 👈 daj dłużej niż typowy start VT
}) {
  const isHistoryNav =
    typeof window !== "undefined" && window.__IS_HISTORY_NAV__;

  const ref = useRef(null);
  const [canStart, setCanStart] = useState(false);
  const [inView, setInView] = useState(false);
  const [show, setShow] = useState(isHistoryNav);

  // 1️⃣ globalny start (intro / VT)
  useEffect(() => {
    const onGlobalStart = () => setCanStart(true);

    window.addEventListener("app-content-start", onGlobalStart);
    return () => window.removeEventListener("app-content-start", onGlobalStart);
  }, []);

  // 🛟 FAILSAFE: pokaż treść TYLKO jeśli start nigdy nie nadejdzie
  useEffect(() => {
    if (isHistoryNav || show) return;

    const t = setTimeout(() => {
      // 🔥 klucz: nie zabijaj animacji, jeśli start już przyszedł
      if (!canStart) setShow(true);
    }, fallbackMs);

    return () => clearTimeout(t);
  }, [isHistoryNav, show, canStart, fallbackMs]);

  // 2️⃣ IntersectionObserver
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once]);

  // 3️⃣ faktyczny start animacji
  useEffect(() => {
    if (isHistoryNav) return;
    if (!canStart || !inView || show) return;

    const timeoutId = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [canStart, inView, delay, show, isHistoryNav]);

  if (typeof children !== "string") return children;

  const words = children.trim().split(/\s+/);

  return (
    <span ref={ref} className="inline-block overflow-hidden">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block mr-[0.25em]"
          style={{
            transform: show ? "translateY(0)" : "translateY(20px)",
            opacity: show ? 1 : 0,
            transitionProperty: "transform, opacity",
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: "cubic-bezier(0.75,0.10,0.22,1)",
            transitionDelay: `${index * stagger}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
