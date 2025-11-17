"use client";
import { useEffect, useRef, useState } from "react";

export default function LazyComponent({ children, height }) {
  const mySection = useRef(null);
  const isVisible = useRef(false); // NIE robi re-render
  const [, forceUpdate] = useState(0); // Tylko aby wymusić jeden re-render

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.current) {
            isVisible.current = true;

            // WYWOŁAJ RE-RENDER TYLKO RAZ
            forceUpdate((v) => v + 1);

            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: `0px 0px ${height}px 0px` }
    );

    if (mySection.current) {
      observer.observe(mySection.current);
    }

    return () => observer.disconnect();
  }, [height]);

  return (
    <div ref={mySection} className="h-full">
      {isVisible ? children : null}
    </div>
  );
}
