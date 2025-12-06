"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ProcessPanel from "../components/ProcessPanel";

const DynamicFirstSection = dynamic(() => import("./FirstSection"));

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mm = ScrollTrigger.matchMedia({
      // MOBILE / TABLET
      "(max-width: 1023px)": () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.set(containerRef.current, { x: 0 });
      },

      // DESKTOP
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

    // cleanup
    return () => {
      mm.revert();
    };
  }, []);

  const steps = [
    {
      title: "Initial Consultation Meeting",
      image: "/consultation.jpg",
      description: [
        "During the consultation, we focus on understanding your goals, expectations, and the unique characteristics of the space. We review your needs, discuss possible solutions, and outline the overall direction of the project.",
        "This stage helps establish clarity and alignment. We define the project scope, budget, and timeline so that the next phases can move forward efficiently and with a shared vision.",
      ],
    },
    {
      title: "Initial Consultation Meeting",
      image: "/consultation.jpg",
      description: [
        "During the consultation, we focus on understanding your goals, expectations, and the unique characteristics of the space. We review your needs, discuss possible solutions, and outline the overall direction of the project.",
        "This stage helps establish clarity and alignment. We define the project scope, budget, and timeline so that the next phases can move forward efficiently and with a shared vision.",
      ],
    },
    {
      title: "Initial Consultation Meeting",
      image: "/consultation.jpg",
      description: [
        "During the consultation, we focus on understanding your goals, expectations, and the unique characteristics of the space. We review your needs, discuss possible solutions, and outline the overall direction of the project.",
        "This stage helps establish clarity and alignment. We define the project scope, budget, and timeline so that the next phases can move forward efficiently and with a shared vision.",
      ],
    },
    {
      title: "Initial Consultation Meeting",
      image: "/consultation.jpg",
      description: [
        "During the consultation, we focus on understanding your goals, expectations, and the unique characteristics of the space. We review your needs, discuss possible solutions, and outline the overall direction of the project.",
        "This stage helps establish clarity and alignment. We define the project scope, budget, and timeline so that the next phases can move forward efficiently and with a shared vision.",
      ],
    },
    {
      title: "Initial Consultation Meeting",
      image: "/consultation.jpg",
      description: [
        "During the consultation, we focus on understanding your goals, expectations, and the unique characteristics of the space. We review your needs, discuss possible solutions, and outline the overall direction of the project.",
        "This stage helps establish clarity and alignment. We define the project scope, budget, and timeline so that the next phases can move forward efficiently and with a shared vision.",
      ],
    },
    {
      title: "Initial Consultation Meeting",
      image: "/consultation.jpg",
      description: [
        "During the consultation, we focus on understanding your goals, expectations, and the unique characteristics of the space. We review your needs, discuss possible solutions, and outline the overall direction of the project.",
        "This stage helps establish clarity and alignment. We define the project scope, budget, and timeline so that the next phases can move forward efficiently and with a shared vision.",
      ],
    },
    // dodaj kolejne kroki z innymi tytułami / opisami / obrazkami
  ];

  return (
    <div className="lg:overflow-hidden">
      <div
        ref={containerRef}
        className="container  lg:h-screen lg:scrollbar-hide  lg:[&>*]:shrink-0 will-change-transform"
      >
        {/* Panel 0: FirstSection jako pierwszy ekran, pełne 100vw */}
        <div className="panel-process lg:w-screen lg:flex lg:h-full">
          <div className="w-screen h-full">
            <DynamicFirstSection />
          </div>
        </div>

        {steps.map((step, i) => (
          <ProcessPanel
            key={i}
            index={i + 1}
            title={step.title}
            description={step.description}
            image={step.image}
          />
        ))}
      </div>
    </div>
  );
}
