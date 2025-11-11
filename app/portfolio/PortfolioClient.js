"use client";

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

// 🔹 Mały helper – ładuje duże obrazy w tle
function ProgressiveImage({ smallSrc, largeSrc, alt }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const img = new window.Image();
    img.src = largeSrc;
    img.onload = () => setLoaded(true);
  }, [largeSrc]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Mały obraz – od razu widać */}
      <Image
        src={smallSrc}
        alt={alt}
        fill
        className="absolute top-0 left-0 w-full h-full object-cover"
        unoptimized
      />

      {/* Duży obraz – fade-in nad małym */}
      <Image
        src={largeSrc}
        alt={alt}
        fill
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        unoptimized
        priority
      />
    </div>
  );
}

export default function PortfolioClient() {
  const projects = useMemo(
    () => [
      {
        title: "Beehive House",
        location: "Accord, NY",
        subtitle: "New, single-family",
        imageSmall: "/projekt3-small.jpg",
        imageLarge: "/projekt3-large.jpg",
        slug: "#",
      },
      {
        title: "Broadway Loft",
        location: "New York, NY",
        subtitle: "Adaptive reuse",
        imageSmall: "/projekt2-small.jpg",
        imageLarge: "/projekt2-large.jpg",
        slug: "#",
      },
      {
        title: "Ocean Parkway",
        location: "Brooklyn, NY",
        subtitle: "Residential",
        imageSmall: "/projekt1-small.jpg",
        imageLarge: "/projekt1-large.jpg",
        slug: "#",
      },
      {
        title: "Sequoia House",
        location: "Chicago, IL",
        subtitle: "Workspace",
        imageSmall: "/projekt4-small.jpg",
        imageLarge: "/projekt4-large.jpg",
        slug: "#",
      },
      {
        title: "Son Del North",
        location: "Aspen, CO",
        subtitle: "Hospitality",
        imageSmall: "/projekt5-small.jpg",
        imageLarge: "/projekt5-large.jpg",
        slug: "#",
      },
      {
        title: "Son Del North",
        location: "Aspen, CO",
        subtitle: "Hospitality",
        imageSmall: "/projekt6-small.jpg",
        imageLarge: "/projekt6-large.jpg",
        slug: "#",
      },
    ],
    []
  );

  const cardRefs = useRef([]);
  const linkRefs = useRef([]);
  const linksViewportRef = useRef(null);
  const linksInnerRef = useRef(null);
  const headerRef = useRef(null);

  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [hasMeasured, setHasMeasured] = useState(false);

  const OPACITY_FLOOR = 0;
  const GAUSS_K = 0.85;
  const HEADER_SPEED = 5.4;
  const HEADER_FLOOR = 0;

  const [opacities, setOpacities] = useState(() =>
    projects.map((_, i) => (i === 0 ? 1 : OPACITY_FLOOR))
  );

  const measure = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    const centers = cardRefs.current.map((el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return r.top + r.height / 2;
    });
    if (!centers.length) return;

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

    const nextOpacities = centers.map((c) => {
      const norm = Math.abs(c - viewportCenter) / spacing;
      const o =
        OPACITY_FLOOR + (1 - OPACITY_FLOOR) * Math.exp(-GAUSS_K * norm * norm);
      return Math.max(OPACITY_FLOOR, Math.min(1, o));
    });
    setOpacities(nextOpacities);

    if (headerRef.current) {
      const hr = headerRef.current.getBoundingClientRect();
      const hCenter = hr.top + hr.height / 2;
      const hNorm = Math.abs(hCenter - viewportCenter) / spacing;
      const w = window.innerWidth;
      if (w >= 1280 && w < 1800 && window.scrollY <= 0) {
        setHeaderOpacity(1);
      } else {
        let xNorm = hNorm;
        if (w >= 1280 && w < 1800) {
          xNorm *= HEADER_SPEED * 1.05;
        } else {
          xNorm *= HEADER_SPEED;
        }
        const hOpacity =
          HEADER_FLOOR +
          (1 - HEADER_FLOOR) * Math.exp(-GAUSS_K * xNorm * xNorm);
        setHeaderOpacity(Math.max(HEADER_FLOOR, Math.min(1, hOpacity)));
      }
    }

    const linkCenters = linkRefs.current.map((el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const innerRect = linksInnerRef.current?.getBoundingClientRect();
      return rect.top - (innerRect?.top || 0) + rect.height / 2;
    });

    const linksViewport = linksViewportRef.current;
    if (linksViewport && linkCenters.length >= 2) {
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
      const containerCenter = linksViewport.clientHeight / 2;
      const targetTranslate = containerCenter - desiredCenter;
      setTranslateY(targetTranslate);
    }

    if (!hasMeasured) setHasMeasured(true);
  }, [GAUSS_K, HEADER_SPEED, OPACITY_FLOOR, HEADER_FLOOR, hasMeasured]);

  useLayoutEffect(() => {
    measure();
    const handleLoad = () => measure();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [measure]);

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
    const onResize = () => onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(rafId);
    };
  }, [measure]);

  return (
    <div className="xl:flex mx-margin-mobile md:mx-tablet xl:mx-desktop mt-[100px]">
      <div className="hidden xl:flex w-[40%]">
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
              A national practice for design—
            </div>
            {projects.map((p, i) => (
              <div key={i}>
                <Link
                  href={`/portfolio/${p.slug}`}
                  ref={(el) => (linkRefs.current[i] = el)}
                  className="block text-[50px] 2xl:text-[80px] leading-[0.9] font-light whitespace-nowrap transition-opacity duration-150 ease-linear will-change-opacity"
                  style={{
                    opacity: opacities[i],
                    pointerEvents:
                      opacities[i] < OPACITY_FLOOR * 2 ? "none" : "auto",
                  }}
                >
                  {p.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full-width xl:w-[60%] gap-[50px] xl:gap-[100px]">
        {projects.map((p, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="flex flex-col"
          >
            <Link
              href={`/portfolio/${p.slug}`}
              className="group block cursor-pointer"
              aria-label={`Zobacz ${p.title}`}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <ProgressiveImage
                  smallSrc={p.imageSmall}
                  largeSrc={p.imageLarge}
                  alt={p.title}
                />
              </div>
              <div className="flex justify-between mt-[5px] xl:mt-[7px] 2xl:mt-[10px] items-center">
                <span className="text-[12px] xl:text-[15px]">
                  {`${p.title} | ${p.subtitle}`}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] xl:text-[15px]">
                    {p.location}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
