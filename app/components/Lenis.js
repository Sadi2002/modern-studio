"use client";

import { useEffect } from "react";
import LenisLib from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Lenis() {
  useEffect(() => {
    const lenis = new LenisLib();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 100);
    });

    gsap.ticker.lagSmoothing(0);

    return () => lenis.destroy();
  }, []);

  return null;
}
