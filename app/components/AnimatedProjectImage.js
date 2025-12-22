"use client";

import { useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { transitionStore } from "@/lib/transitionStore";

gsap.registerPlugin(CustomEase);

const slowFastEase = CustomEase.create("slowFastEase", "0.75 0.10 0.22 1");

const AnimatedProjectImage = forwardRef(({ src, alt, slug }, ref) => {
  const imgRef = useRef(null);
  const router = useRouter();

  const startTransition = () => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();

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

    transitionStore.clone = clone;
    transitionStore.isTransitioning = true;
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();

    tl.to(clone, {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      duration: 1.05,
      ease: slowFastEase,
    });

    tl.to({}, { duration: 0 });

    tl.call(() => {
      window.scrollTo({ top: 0, left: 0 });
      router.push(`/portfolio/${slug}`, { scroll: false });
    });
  };

  // 👇 expose method to parent
  useImperativeHandle(ref, () => ({
    startTransition,
  }));

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      fill
      onClick={startTransition}
      className="object-cover absolute top-0 left-0 w-full h-full cursor-pointer"
    />
  );
});

AnimatedProjectImage.displayName = "AnimatedProjectImage";
export default AnimatedProjectImage;
