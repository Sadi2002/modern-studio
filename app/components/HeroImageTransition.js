"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { transitionStore } from "@/lib/transitionStore";

gsap.registerPlugin(CustomEase);

const slowFastEase = CustomEase.create("slowFastEaseHero", "0.75 0.10 0.22 1");

export default function HeroImageTransition() {
  useEffect(() => {
    const clone = transitionStore.clone;
    if (!clone) return;

    const hero = document.querySelector("[data-hero-image]");
    if (!hero) return;

    const rect = hero.getBoundingClientRect();

    // 🔥 wolno → szybko → precyzyjnie (zjazd)
    gsap.to(clone, {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      duration: 1.25,
      ease: slowFastEase,
      onComplete: () => {
        hero.querySelector("img")?.classList.remove("opacity-0");

        clone.remove();
        transitionStore.clone = null;
        transitionStore.isTransitioning = false;
        document.body.style.overflow = "auto";
      },
    });
  }, []);

  return null;
}
