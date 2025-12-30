"use client";

import { useEffect, useState } from "react";

export default function MobileMenuReveal({
  children,
  isOpen,
  delay = 0,
  duration = 600,
  staggerIndex = 0,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let t;

    if (isOpen) {
      // reset przy każdym otwarciu
      setVisible(false);

      t = setTimeout(() => {
        setVisible(true);
      }, delay + staggerIndex * 40);
    } else {
      setVisible(false);
    }

    return () => clearTimeout(t);
  }, [isOpen, delay, staggerIndex]);

  return (
    <span
      style={{
        display: "inline-block",
        transform: visible ? "translateY(0)" : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transitionProperty: "transform, opacity",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.75,0.10,0.22,1)",
        willChange: "transform, opacity",
      }}
    >
      {children}
    </span>
  );
}
