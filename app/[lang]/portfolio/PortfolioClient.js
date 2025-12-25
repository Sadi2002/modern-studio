"use client";
export const revalidate = 0;

import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import dataProjects from "../../data/dataProjects";
import Button from "../../components/Button";
import ArrowWhite from "../../../public/arrow-right-white.png";

import { urlFor } from "../../../lib/sanity/client";
import AnimatedProjectImage from "@/app/components/AnimatedProjectImage";

export default function PortfolioClient({
  projects = [],
  isProject = false,
  isBtn = true,
  lang,
  beforeProjectsText,
  button,
}) {
  const pathname = usePathname();
  const isPortfolio = pathname === `/${lang}/portfolio`;

  const [cardOpacities, setCardOpacities] = useState(() =>
    projects.map(() => 0)
  );

  const cardRefs = useRef([]); // DOM refs for right-side cards
  const linkRefs = useRef([]); // DOM refs for left-side links
  const imageRefs = useRef([]);
  const linksViewportRef = useRef(null); // sticky container (visible area for links)
  const linksInnerRef = useRef(null); // inner list we translate
  const headerRef = useRef(null); // ref for the small header line

  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [hasMeasured, setHasMeasured] = useState(false);

  // Constants for visual tuning
  const OPACITY_FLOOR = 0;
  const GAUSS_K = 0.85; // slightly steeper falloff so titles reach full opacity closer to exact center
  const HEADER_SPEED = 5.4;
  const HEADER_FLOOR = 0; // header can fully disappear

  // Initialize lower items as hidden by default
  const [opacities, setOpacities] = useState(
    () => projects?.map((_, i) => (i === 0 ? 1 : OPACITY_FLOOR)) || []
  );

  // Helper: linear interpolation
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  // const slugify = (s) =>
  //   s
  //     .toLowerCase()
  //     .replace(/[^a-z0-9]+/g, "-")
  //     .replace(/(^-|-$)+/g, "");

  // Shared measure function so we can run it synchronously on first paint
  const measure = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    const centers = cardRefs.current.map((el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return r.top + r.height / 2; // center of card relative to viewport
    });
    if (!centers.length) return;

    // Compute average spacing between cards (px) for normalization
    let spacing = 1;
    if (centers.length > 1) {
      const diffs = [];
      for (let i = 0; i < centers.length - 1; i++)
        diffs.push(Math.abs(centers[i + 1] - centers[i]));
      diffs.sort((a, b) => a - b);
      const mid = Math.floor(diffs.length / 2);
      spacing =
        diffs.length % 2 === 0 ? (diffs[mid - 1] + diffs[mid]) / 2 : diffs[mid];
      spacing = Math.max(1, spacing);
    }

    // Smooth, continuous opacity by distance (Gaussian falloff)
    const nextOpacities = centers.map((c) => {
      const norm = Math.abs(c - viewportCenter) / spacing;
      const o =
        OPACITY_FLOOR + (1 - OPACITY_FLOOR) * Math.exp(-GAUSS_K * norm * norm);
      return Math.max(OPACITY_FLOOR, Math.min(1, o));
    });
    setOpacities(nextOpacities);

    // ===== RIGHT SIDE CARDS OPACITY (IMAGES) =====
    // ===== RIGHT SIDE CARDS: BINARY VISIBILITY =====
    const viewportHeight = window.innerHeight;

    // ile px przed wejściem do viewport ma się już pokazać
    const ENTER_OFFSET = 300;

    setCardOpacities((prev) =>
      cardRefs.current.map((el, i) => {
        if (!el) return prev[i] ?? 0;

        const r = el.getBoundingClientRect();
        const isVisible =
          r.top < viewportHeight - ENTER_OFFSET && r.bottom > ENTER_OFFSET;

        // JEŚLI JUŻ JEST 1 → ZOSTAJE 1
        if (prev[i] === 1) return 1;

        // W PRZECIWNYM RAZIE → pojawia się gdy wejdzie
        return isVisible ? 1 : 0;
      })
    );

    // Header opacity based on its own distance to viewport center (fade faster)
    if (headerRef.current) {
      const hr = headerRef.current.getBoundingClientRect();
      const hCenter = hr.top + hr.height / 2;
      const hNorm = Math.abs(hCenter - viewportCenter) / spacing;
      const w = window.innerWidth;

      // XL: start with opacity 1 at page top, then enable fading up to <1800px
      if (w >= 1280 && w < 1800 && window.scrollY <= 0) {
        setHeaderOpacity(1);
      } else {
        let xNorm = hNorm;
        if (w >= 1280 && w < 1800) {
          xNorm *= HEADER_SPEED * 1.05; // jeszcze trochę wolniejsze wygaszanie w XL..<1800 (z 1.15 -> 1.05)
        } else {
          xNorm *= HEADER_SPEED; // zachowaj dotychczasowe na innych szerokościach
        }
        const hOpacity =
          HEADER_FLOOR +
          (1 - HEADER_FLOOR) * Math.exp(-GAUSS_K * xNorm * xNorm);
        setHeaderOpacity(Math.max(HEADER_FLOOR, Math.min(1, hOpacity)));
      }
    }

    // Compute link centers (relative to inner list top) directly here for stability
    const linkCenters = linkRefs.current.map((el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const innerRect = linksInnerRef.current?.getBoundingClientRect();
      return rect.top - (innerRect?.top || 0) + rect.height / 2;
    });

    // Compute continuous target translate between adjacent links (no jumps)
    const linksViewport = linksViewportRef.current;
    if (linksViewport && linkCenters.length >= 2) {
      // Find bounding indices i0 <= center <= i1 using card centers
      let i1 = linkCenters.length - 1;
      for (let i = 0; i < centers.length; i++) {
        if (centers[i] >= viewportCenter) {
          i1 = i;
          break;
        }
      }
      let i0 = Math.max(0, Math.min(i1 - 1, linkCenters.length - 2));
      const c0 = centers[i0];
      const c1 = centers[i1];
      const denom = Math.max(1, Math.abs(c1 - c0));
      const t = Math.max(0, Math.min(1, (viewportCenter - c0) / denom));

      const desiredCenter = linkCenters[i0] * (1 - t) + linkCenters[i1] * t;

      // Center target without extra bias so the box does not shift up/down additionally
      const containerCenter = linksViewport.clientHeight / 2;

      const targetTranslate = containerCenter - desiredCenter;
      setTranslateY(targetTranslate);
    }

    // Mark as measured to reveal UI without jump
    if (!hasMeasured) setHasMeasured(true);
  }, [GAUSS_K, HEADER_SPEED, OPACITY_FLOOR, HEADER_FLOOR, hasMeasured]);

  // Run measure synchronously before paint to avoid initial jump
  useLayoutEffect(() => {
    measure();
    // Also measure after images load (if Next/Image changes layout)
    const handleLoad = () => measure();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [measure]);

  // Scroll/resize listeners using rAF
  useEffect(() => {
    let rafId = 0;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(() => {
          ticking = false;
          measure();
        });
      }
    };

    const onResize = () => {
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(rafId);
    };
  }, [measure]);
  return (
    <div
      className={`lg:flex mx-margin-mobile md:mx-tablet xl:mx-desktop
    ${
      isProject
        ? "mt-[20px] lg:mt-[80px] xl:mt-[150px]"
        : "mt-[100px] lg:mt-[100px]"
    }
    ${
      isPortfolio
        ? "mb-[80px] xl:mb-[150px] md:mt-[150px]"
        : "mb-[30px] xl:mb-[100px]"
    }
    2xl:mb-[100px]"
  `}
    >
      <div className="hidden lg:flex w-[40%]">
        <div
          ref={linksViewportRef}
          className="sticky top-[calc((100vh-30vw)/2)] h-[30vw]"
        >
          <div
            ref={linksInnerRef}
            style={{
              transform: `translateY(${translateY}px)`,
              visibility: hasMeasured ? "visible" : "hidden",
            }}
            className="will-change-transform flex flex-col gap-10"
          >
            <div
              ref={headerRef}
              style={{ opacity: headerOpacity }}
              className="transition-opacity duration-150 ease-linear will-change-opacity"
            >
              {beforeProjectsText?.[lang]}
            </div>
            {projects.map((p, i) => (
              <div key={i} className="">
                <button
                  ref={(el) => (linkRefs.current[i] = el)}
                  type="button"
                  onClick={() => imageRefs.current[i]?.startTransition?.()}
                  className="text-[clamp(36px,6.5vw,45px)] leading-[clamp(36px,6.5vw,45px)] relative mb-5 xl:text-6xl  xl:mb-[20px] 2xl:text-[clamp(60px,4.3vw,5rem)] 2xl:leading-[80px] lg:font-light-font-weight block min-[1535px]:w-[500px] min-[1600px]:w-[600px] text-left"
                  style={{
                    opacity: opacities[i],
                    pointerEvents:
                      opacities[i] < OPACITY_FLOOR * 2 ? "none" : "auto",
                  }}
                >
                  {p?.title?.[lang]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-[60%] gap-[50px] xl:gap-[100px]">
        {projects.map((p, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="flex flex-col transition-opacity duration-1000 ease-out will-change-opacity"
            style={{
              opacity: cardOpacities[i],
              pointerEvents: cardOpacities[i] < 0.15 ? "none" : "auto",
            }}
          >
            <div className="overflow-hidden">
              <div className="relative w-full aspect-[8/6] xl:aspect-[8/5] overflow-hidden">
                <AnimatedProjectImage
                  ref={(el) => (imageRefs.current[i] = el)}
                  src={urlFor(p.imgSrc).url()}
                  alt={p?.title?.[lang]}
                  slug={p.slug.current}
                  lang={lang}
                  fill
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  className={
                    "transition-transform duration-500 ease-out hover:scale-105"
                  }
                />
              </div>
            </div>
            <div className="flex justify-between mt-[5px] xl:mt-[7px] 2xl:mt-[10px] items-start gap-[20px]">
              <span className=" text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-medium-font-weight ">{`${p?.title?.[lang]}, ${p.location?.[lang]}`}</span>
              <div className="flex items-center gap-4">
                <span className="sm:inline  text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px]  font-medium-font-weight">
                  {p?.year}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end lg:mt-[0px] xl:mt-[-50px]">
          {isBtn && (
            <Button
              arrow={ArrowWhite}
              linkTo={`/${lang}/${button?.beforePortfolioButtonLink}`}
              bgColor="main-black"
              textColor="main-white"
              additionalStyles="md:self-end"
            >
              {button?.beforePortfolioButton?.[lang]}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
