"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyComponent({ children, height }) {
  const mySection = useRef(null);
  const isVisible = useRef(false);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.current) {
            isVisible.current = true;

            forceUpdate((v) => v + 1);

            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: `${height}px 0px 0px 0px` }
    );

    if (mySection.current) {
      observer.observe(mySection.current);
    }
  }, [mySection, height]);

  return (
    <div className="h-full" ref={mySection}>
      {isVisible ? children : null}
    </div>
  );
}
