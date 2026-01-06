"use client";

import { cloneElement } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollToPlugin, CustomEase);

// 👇 rejestrujemy easing raz
CustomEase.create("heroScrollEase", "0.75,0.10,0.22,1");

export default function ScrollToSectionGSAP({
  targetId,
  duration = 0.1,
  offset = 0,
  children,
}) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    gsap.to(window, {
      duration,
      ease: "power3.inOut",
      scrollTo: {
        y: target,
        offsetY: offset,
      },
    });
  };

  return cloneElement(children, {
    onClick: (e) => {
      children.props.onClick?.(e);
      handleClick();
    },
  });
}
