"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function useScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.__LENIS__) {
      window.__LENIS__.scrollTo(0, { immediate: true });
    }

    ScrollTrigger.refresh(true);
  }, [pathname]);
}
