"use client";

import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { transitionStore } from "@/lib/transitionStore";
import ArrowWhite from "@/public/arrow-right-white.png";

gsap.registerPlugin(CustomEase);

const slowFastEase = CustomEase.create("slowFastEase", "0.75 0.10 0.22 1");

const CURSOR_SIZE = 90;
const FOLLOW_LERP = 0.25;

const AnimatedProjectImage = forwardRef(({ src, alt, slug, lang }, ref) => {
  const imgRef = useRef(null);
  const router = useRouter();

  // cursor refs
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;

    pos.current.x = e.clientX;
    pos.current.y = e.clientY;

    setHovered(true);
  };

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

    tl.call(() => {
      window.scrollTo({ top: 0, left: 0 });
      router.push(`/${lang}/portfolio/${slug}`, { scroll: false });
    });
  };

  useImperativeHandle(ref, () => ({
    startTransition,
  }));

  // smooth cursor follow
  useEffect(() => {
    if (!hovered) return;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * FOLLOW_LERP;
      pos.current.y += (mouse.current.y - pos.current.y) * FOLLOW_LERP;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${pos.current.x}px, ${pos.current.y}px, 0)
          translate(-50%, -50%)
        `;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafRef.current);
    };
  }, [hovered]);

  return (
    <div
      className="relative w-full h-full cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      onClick={startTransition}
    >
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none
          flex items-center justify-center
          rounded-full bg-black
          overflow-hidden
          transition-[width,height,opacity] duration-300 ease-out"
        style={{
          width: hovered ? `${CURSOR_SIZE}px` : "0px",
          height: hovered ? `${CURSOR_SIZE}px` : "0px",
          opacity: hovered ? 1 : 0,
        }}
      >
        <Image src={ArrowWhite} alt="arrow" className="w-[40px] h-[40px]" />
      </div>

      {/* PROJECT IMAGE */}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        className="object-cover absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
});

AnimatedProjectImage.displayName = "AnimatedProjectImage";
export default AnimatedProjectImage;
