"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyComponent({ children, height }) {
  const mySection = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!loadedRef.current) {
              setIsVisible(true);
              loadedRef.current = true;
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: `0px 0px ${height}px 0px` }
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
