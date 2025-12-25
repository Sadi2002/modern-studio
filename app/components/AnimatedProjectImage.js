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

const CURSOR_SIZE = 80;
const FOLLOW_LERP = 0.15;

const AnimatedProjectImage = forwardRef(
  ({ src, alt, slug, lang, className, children }, ref) => {
    const imgRef = useRef(null);
    const router = useRouter();
    const isTransitioningRef = useRef(false);

    const isClickingRef = useRef(false);

    const cursorCircleRef = useRef(null);
    const cursorTextWrapperRef = useRef(null);

    const textRef = useRef(null);

    let viewProjectText = "";

    if (lang === "de") {
      viewProjectText = "Projekt ansehen";
    } else if (lang === "pl") {
      viewProjectText = "Zobacz projekt";
    } else {
      viewProjectText = "View project";
    }

    // cursor refs
    const cursorRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // 🔑 KLUCZ: start animacji dokładnie tu
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      setHovered(true);
    };

    const startTransition = () => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;

      isClickingRef.current = true;

      const img = imgRef.current;
      if (!img) return;

      /* 🔒 BLOKUJ INTERAKCJE */
      document.documentElement.style.pointerEvents = "none";
      if (window.__LENIS__) window.__LENIS__.stop();

      const tl = gsap.timeline();

      /* 1️⃣ SCHOWAJ KURSOR + TEKST */
      tl.to(cursorCircleRef.current, {
        scale: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      tl.to(
        cursorTextWrapperRef.current,
        {
          y: "100%",
          duration: 0.25,
          ease: "power3.inOut",
        },
        "<"
      );

      /* 2️⃣ DOPIERO TERAZ IMAGE TRANSITION */
      tl.call(
        () => {
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

          gsap.to(clone, {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            duration: 1.05,
            ease: slowFastEase,
            onComplete: () => {
              window.scrollTo({ top: 0, left: 0 });
              router.push(`/${lang}/portfolio/${slug}`, { scroll: false });
            },
          });
        },
        null,
        "+=0"
      );
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
  translate(0%, -50%)
  ${isClickingRef.current ? "" : `scale(${hovered ? 1 : 0.8})`}
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

    useEffect(() => {
      if (!textRef.current) return;

      gsap.to(textRef.current, {
        y: hovered ? "0%" : "100%",
        duration: 0.32,
        ease: "power3.out",
        delay: hovered ? 0.16 : 0.12,
      });
    }, [hovered]);

    return (
      <div
        className="relative w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovered(false)}
        onClick={startTransition}
      >
        {/* CUSTOM CURSOR */}
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 z-[9999] pointer-events-none
    flex flex-col items-center gap-3
   "
        >
          {/* KOŁO */}
          <div
            ref={cursorCircleRef}
            className="flex items-center justify-center
  rounded-full bg-black
  transition-transform duration-500 ease-out"
            style={{
              width: `${CURSOR_SIZE}px`,
              height: `${CURSOR_SIZE}px`,
              transform: hovered ? "scale(1)" : "scale(0)",
            }}
          >
            <Image src={ArrowWhite} alt="arrow" className="w-[40px] h-[40px]" />
          </div>

          {/* TEKST */}
          {/* TEXT WRAPPER */}
          <div
            ref={cursorTextWrapperRef}
            className="overflow-hidden"
            style={{ height: "20px" }}
          >
            <span
              ref={textRef}
              className="block text-black text-sm tracking-wide uppercase"
              style={{ lineHeight: "20px", transform: "translateY(100%)" }}
            >
              {viewProjectText}
            </span>
          </div>
        </div>

        {/* PROJECT IMAGE */}
        {children ? (
          <div ref={imgRef} className="absolute inset-0">
            {children}
          </div>
        ) : (
          <Image
            ref={imgRef}
            src={src}
            alt={alt}
            fill
            className={`object-cover absolute top-0 left-0 w-full h-full ${className}`}
          />
        )}
      </div>
    );
  }
);

AnimatedProjectImage.displayName = "AnimatedProjectImage";
export default AnimatedProjectImage;
