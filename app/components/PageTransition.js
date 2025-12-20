"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("closeEase", "0.2, 0.0, 0.0, 1");
CustomEase.create("openEase", "0.2, 0.0, 0.0, 1");

let isTransitioning = false;

export function usePageTransition() {
  const pathname = usePathname();

  return (href) => {
    // 🔒 blokada wieloklików
    if (isTransitioning) return;

    // 🔒 klik w ten sam route — NIC NIE ROBIMY
    if (href === pathname) return;

    isTransitioning = true;

    window.dispatchEvent(
      new CustomEvent("page:close", {
        detail: { href },
      })
    );
  };
}

export default function PageTransition() {
  const overlayRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // ENTER – po zmianie route
  useEffect(() => {
    if (!isTransitioning) return;

    const overlay = overlayRef.current;

    gsap.set(overlay, {
      scaleY: 1,
      transformOrigin: "top",
    });

    gsap.to(overlay, {
      scaleY: 0,
      duration: 0.85,
      ease: "openEase",
      onComplete: () => {
        isTransitioning = false;
      },
    });
  }, [pathname]);

  // LEAVE – przed zmianą route
  useEffect(() => {
    const handler = (e) => {
      const overlay = overlayRef.current;

      gsap.set(overlay, {
        scaleY: 0,
        transformOrigin: "bottom",
      });

      gsap.to(overlay, {
        scaleY: 1,
        duration: 0.75,
        ease: "closeEase",
        onComplete: () => {
          router.push(e.detail.href);
        },
      });
    };

    window.addEventListener("page:close", handler);
    return () => window.removeEventListener("page:close", handler);
  }, [router]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black pointer-events-none"
      style={{ transform: "scaleY(0)" }}
    />
  );
}
