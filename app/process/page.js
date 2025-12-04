"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const DynamicFirstSection = dynamic(() => import("./FirstSection"));

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel-process");
      if (!sections.length) return;

      // Łączna szerokość wszystkich paneli
      const totalWidth =
        sections.reduce((acc, section) => acc + section.offsetWidth, 0) -
        window.innerWidth; // zostawiamy szerokość pierwszego widoku

      gsap.to(containerRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => "+=" + totalWidth,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-hidden">
      <div
        ref={containerRef}
        className="container h-screen scrollbar-hide  [&>*]:shrink-0"
      >
        {/* Panel 0: FirstSection jako pierwszy ekran, pełne 100vw */}
        <div className="panel-process w-screen flex h-full">
          <div className="w-screen h-full">
            <DynamicFirstSection />
          </div>
        </div>

        {/* Panele 1-5: każdy dokładnie 100vw */}
        <div className="panel-process w-[50vw] h-full flex items-center justify-center  text-black border-r border-[rgba(0,0,0,0.2)] flex-col lg:px-[150px] items-start">
          <div className="max-w-[100%]">
            <span className="text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[64px] leading-[64px] mb-[20px] font-normal-font-weight">
              Initial Consultation Meeting
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[20px] flex flex-col gap-[16px]">
              <p>
                During the consultation, we focus on understanding your goals,
                expectations, and the unique characteristics of the space. We
                review your needs, discuss possible solutions, and outline the
                overall direction of the project.
              </p>
              <p>
                This stage helps establish clarity and alignment. We define the
                project scope, budget, and timeline so that the next phases can
                move forward efficiently and with a shared vision.
              </p>
            </div>
          </div>
          <div className="relative aspect-[5/4] md:aspect-[5/4] max-w-[100%] w-[100%] lg:aspect-[4/5]  xl:aspect-[5/8]  2xl:aspect-[7/4]   ">
            <Image
              src="/consultation.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[50vw] h-full flex items-center lg:pt-[150px] text-black border-r border-[rgba(0,0,0,0.2)] flex-col lg:px-[150px] items-start">
          <div className="max-w-[100%]">
            <span className="text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[64px] leading-[64px] mb-[20px] font-normal-font-weight">
              Projects, Process, and Our Ideas
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[20px] flex flex-col gap-[16px]">
              <p>
                Dive into our world of architecture where every project tells a
                story. Discover the design processes, creative insights, and
                innovative ideas that shape our work and inspire our clients.
              </p>
              <p>
                Dive into our world of architecture where every project tells a
                story. Discover the design processes, creative insights, and
                innovative ideas that shape our work and inspire our clients.
              </p>
            </div>
          </div>
          <div className="relative aspect-[5/4] md:aspect-[5/4] max-w-[100%] w-[100%] lg:aspect-[4/5]  xl:aspect-[5/8]  2xl:aspect-[7/4]   ">
            <Image
              src="/inside4.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[50vw] h-full flex items-center justify-center  text-black border-r border-[rgba(0,0,0,0.2)] flex-col lg:px-[150px] items-start">
          <div className="max-w-[100%]">
            <span className="text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[64px] leading-[64px] mb-[20px] font-normal-font-weight">
              Initial Consultation Meeting
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[20px] flex flex-col gap-[16px]">
              <p>
                During the consultation, we focus on understanding your goals,
                expectations, and the unique characteristics of the space. We
                review your needs, discuss possible solutions, and outline the
                overall direction of the project.
              </p>
              <p>
                This stage helps establish clarity and alignment. We define the
                project scope, budget, and timeline so that the next phases can
                move forward efficiently and with a shared vision.
              </p>
            </div>
          </div>
          <div className="relative aspect-[5/4] md:aspect-[5/4] max-w-[100%] w-[100%] lg:aspect-[4/5]  xl:aspect-[5/8]  2xl:aspect-[7/4]   ">
            <Image
              src="/consultation.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[50vw] h-full flex items-center lg:pt-[150px] text-black border-r border-[rgba(0,0,0,0.2)] flex-col lg:px-[150px] items-start">
          <div className="max-w-[100%]">
            <span className="text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[64px] leading-[64px] mb-[20px] font-normal-font-weight">
              Projects, Process, and Our Ideas
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[20px] flex flex-col gap-[16px]">
              <p>
                Dive into our world of architecture where every project tells a
                story. Discover the design processes, creative insights, and
                innovative ideas that shape our work and inspire our clients.
              </p>
              <p>
                Dive into our world of architecture where every project tells a
                story. Discover the design processes, creative insights, and
                innovative ideas that shape our work and inspire our clients.
              </p>
            </div>
          </div>
          <div className="relative aspect-[5/4] md:aspect-[5/4] max-w-[100%] w-[100%] lg:aspect-[4/5]  xl:aspect-[5/8]  2xl:aspect-[7/4]   ">
            <Image
              src="/inside4.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[50vw] h-full flex items-center justify-center  text-black border-r border-[rgba(0,0,0,0.2)] flex-col lg:px-[150px] items-start">
          <div className="max-w-[100%]">
            <span className="text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[64px] leading-[64px] mb-[20px] font-normal-font-weight">
              Initial Consultation Meeting
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[20px] flex flex-col gap-[16px]">
              <p>
                During the consultation, we focus on understanding your goals,
                expectations, and the unique characteristics of the space. We
                review your needs, discuss possible solutions, and outline the
                overall direction of the project.
              </p>
              <p>
                This stage helps establish clarity and alignment. We define the
                project scope, budget, and timeline so that the next phases can
                move forward efficiently and with a shared vision.
              </p>
            </div>
          </div>
          <div className="relative aspect-[5/4] md:aspect-[5/4] max-w-[100%] w-[100%] lg:aspect-[4/5]  xl:aspect-[5/8]  2xl:aspect-[7/4]   ">
            <Image
              src="/consultation.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[50vw] h-full flex items-center lg:pt-[150px] text-black border-r border-[rgba(0,0,0,0.2)] flex-col lg:px-[150px] items-start">
          <div className="max-w-[100%]">
            <span className="text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[64px] leading-[64px] mb-[20px] font-normal-font-weight">
              Projects, Process, and Our Ideas
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[20px] flex flex-col gap-[16px]">
              <p>
                Dive into our world of architecture where every project tells a
                story. Discover the design processes, creative insights, and
                innovative ideas that shape our work and inspire our clients.
              </p>
              <p>
                Dive into our world of architecture where every project tells a
                story. Discover the design processes, creative insights, and
                innovative ideas that shape our work and inspire our clients.
              </p>
            </div>
          </div>
          <div className="relative aspect-[5/4] md:aspect-[5/4] max-w-[100%] w-[100%] lg:aspect-[4/5]  xl:aspect-[5/8]  2xl:aspect-[7/4]   ">
            <Image
              src="/inside4.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
