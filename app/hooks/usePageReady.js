"use client";

import { useEffect, useState } from "react";

export function usePageReady(delay = 0) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleReady = () => {
      timeoutId = setTimeout(() => {
        setReady(true);
      }, delay);
    };

    window.addEventListener("page-ready", handleReady);

    return () => {
      window.removeEventListener("page-ready", handleReady);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return ready;
}
