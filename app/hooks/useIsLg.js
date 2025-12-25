"use client";
import { useEffect, useState } from "react";

export function useIsLg() {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isLg;
}
