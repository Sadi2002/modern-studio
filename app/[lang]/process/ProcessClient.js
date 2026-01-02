"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProcessPanel from "./ProcessPanel";
import FirstSection from "./FirstSection";
import { urlFor } from "../../../lib/sanity/client";
import FadeInOnce from "@/app/components/FadeInOnce";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessClient({ welcomeSection, stepsSection, lang }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mm = ScrollTrigger.matchMedia({
      "(max-width: 1023px)": () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.set(containerRef.current, { x: 0 });
      },

      "(min-width: 1024px)": () => {
        const sections = gsap.utils.toArray(".panel-process");
        const totalWidth =
          sections.reduce((acc, s) => acc + s.offsetWidth, 0) -
          window.innerWidth;

        gsap.to(containerRef.current, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            end: () => "+=" + totalWidth,
            invalidateOnRefresh: true,
          },
        });
      },
    });

    return () => {
      mm.revert();
    };
  }, []);

  // MAPOWANIE: processesSection.items -> steps używane niżej
  const steps =
    stepsSection?.items
      ?.map((entry) => {
        const item = entry.processItem ?? entry;
        if (!item) return null;

        return {
          title: item?.title?.[lang],
          image: item?.image ? urlFor(item.image).url() : "/consultation.jpg",
          description: [
            item?.description1?.[lang] || "",
            item?.description2?.[lang] || "",
          ].filter(Boolean),
        };
      })
      .filter(Boolean) || [];

  return (
    <div className="lg:overflow-hidden">
      <div
        ref={containerRef}
        className="container  lg:h-screen lg:scrollbar-hide  lg:[&>*]:shrink-0 will-change-transform"
      >
        {/* Panel 0: FirstSection jako pierwszy ekran, pełne 100vw */}
        <div className="panel-process lg:w-screen lg:flex lg:h-full">
          <div className="w-screen h-full">
            <FirstSection data={welcomeSection} lang={lang} />
          </div>
        </div>

        {steps.map((step, i) => (
          <FadeInOnce key={i} delay={i * 0.08}>
            <ProcessPanel
              key={i}
              index={i + 1}
              title={step?.title}
              description={step?.description}
              image={step.image}
            />
          </FadeInOnce>
        ))}
      </div>
    </div>
  );
}
