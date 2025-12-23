"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function useScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    ScrollTrigger.refresh();
  }, [pathname]);
}
