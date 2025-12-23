"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LenisScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = window.__LENIS__;

    if (!lenis) return;

    // 🔥 natychmiastowy reset
    lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
