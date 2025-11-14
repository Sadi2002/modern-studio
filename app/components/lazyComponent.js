"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyComponent({ children, height }) {
  const mySection = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: `${height}px 0px ${height}px 0px` }
    );

    if (mySection.current) {
      observer.observe(mySection.current);
    }
  }, [mySection, height]);

  return <div ref={mySection}>{isVisible ? children : null}</div>;
}
