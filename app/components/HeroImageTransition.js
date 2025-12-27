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
    const DURATION = 1.25;
    const isProject = window.__NAV_KIND__ === "project";

    // 👉 tylko projekty startują wcześniej
    const CONTENT_PROGRESS = isProject ? 0.45 : 1;

    gsap.to(clone, {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      duration: DURATION,
      ease: slowFastEase,

      onUpdate() {
        // 🔥 WCZEŚNIEJSZY START TYLKO DLA PROJEKTÓW
        if (
          this.progress() >= CONTENT_PROGRESS &&
          !window.__CONTENT_STARTED__
        ) {
          window.__CONTENT_STARTED__ = true;
          window.dispatchEvent(new Event("app-content-start"));
        }
      },

      onComplete: () => {
        hero.querySelector("img")?.classList.remove("opacity-0");

        clone.remove();
        transitionStore.clone = null;
        transitionStore.isTransitioning = false;

        document.documentElement.style.pointerEvents = "";
        if (window.__LENIS__) window.__LENIS__.start();

        // 🛡 fallback — jeśli NIE był project
        if (!isProject && !window.__CONTENT_STARTED__) {
          window.__CONTENT_STARTED__ = true;
          window.dispatchEvent(new Event("app-content-start"));
        }

        // reset trybu po użyciu
        window.__NAV_KIND__ = "normal";
      },
    });
  }, []);

  return null;
}
