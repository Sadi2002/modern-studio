"use client";

import { useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { transitionStore } from "@/lib/transitionStore";

gsap.registerPlugin(CustomEase);

const slowFastEase = CustomEase.create("slowFastEase", "0.87 0 0.13 1");

export default function AnimatedProjectImage({ src, alt, slug }) {
  const imgRef = useRef(null);
  const router = useRouter();

  const handleClick = () => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();

    // 🔹 klon
    const clone = img.cloneNode(true);
    document.body.appendChild(clone);

    Object.assign(clone.style, {
      position: "fixed",
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      margin: 0,
      zIndex: 9999,
      objectFit: "cover",
      pointerEvents: "none",
      willChange: "top, left, width, height",
    });

    // zapis do globalnego store
    transitionStore.clone = clone;
    transitionStore.isTransitioning = true;

    // blokada scrolla
    document.body.style.overflow = "hidden";

    // 🔥 TIMELINE
    const tl = gsap.timeline();

    // 1️⃣ wejście do full screen
    tl.to(clone, {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      duration: 1.05,
      ease: slowFastEase,
    });

    // 2️⃣ HOLD – pauza na pełnym ekranie
    tl.to({}, { duration: 0 });

    // 3️⃣ reset scrolla + zmiana URL
    tl.call(() => {
      // WAŻNE: nowa strona ma się renderować od góry
      window.scrollTo({ top: 0, left: 0 });

      router.push(`/portfolio/${slug}`, { scroll: false });
    });
  };

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      fill
      onClick={handleClick}
      className="object-cover absolute top-0 left-0 w-full h-full cursor-pointer"
    />
  );
}
