"use client";

import dynamic from "next/dynamic";

const SmoothScrollProvider = dynamic(() => import("./SmoothScrollProvider"), {
  ssr: false,
});

export default function LazySmoothScroll({ children }) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
