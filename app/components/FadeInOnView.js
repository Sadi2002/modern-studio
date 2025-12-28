"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeInOnView({
  children,
  duration = 700,
  delay = 0,
  threshold = 0.2,
  once = true,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

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
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className="mb-[10px] lg:mb-[16px]"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
        transition: `
          opacity ${duration}ms cubic-bezier(0.75,0.10,0.22,1) ${delay}ms,
          transform ${duration}ms cubic-bezier(0.75,0.10,0.22,1) ${delay}ms
        `,
      }}
    >
      {children}
    </div>
  );
}
