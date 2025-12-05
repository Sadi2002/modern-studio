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

        {/* Panele 1-5: każdy dokładnie 100vw */}
        <div className="panel-process w-[100vw] lg:w-[50vw] pb-[40px] mb-[40px] border-b border-[rgba(0,0,0,0.2)] lg:pb-0 px-[20px] md:px-[40px] lg:border-b-0  h-full flex items-center lg:pt-[120px] 2xl:pt-[150px] text-black lg:border-r lg:border-[rgba(0,0,0,0.2)] flex-col lg:px-[40px] xl:px-[80px] 2xl:px-[150px]  items-start">
          <div className="max-w-[100%]">
            <span className="text-[16px] md:text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[clamp(30px,3vw,64px)] md:text-[45px]  md:max-w-[80%] leading-[clamp(36px,3vw,64px)] md:leading-[45px] mb-[20px] lg:text-[clamp(30px,3vw,64px)] lg:leading-[clamp(36px,3vw,64px)] font-medium-font-weight lg:font-normal-font-weight 2xl:max-w-[100%]">
              Initial Consultation Meeting
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[40px] flex flex-col gap-[16px] md:max-w-[85%] lg:max-w-[100%]">
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
          <div className="relative aspect-[6/4] md:aspect-[5/3] max-w-[100%] md:max-w-[80%] w-[100%] lg:aspect-[7/4]">
            <Image
              src="/consultation.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[100vw] lg:w-[50vw] pb-[40px] mb-[40px] border-b border-[rgba(0,0,0,0.2)] lg:pb-0 px-[20px] md:px-[40px] lg:border-b-0  h-full flex items-center lg:pt-[120px] 2xl:pt-[150px] text-black lg:border-r lg:border-[rgba(0,0,0,0.2)] flex-col lg:px-[40px] xl:px-[80px] 2xl:px-[150px]  items-start">
          <div className="max-w-[100%]">
            <span className="text-[16px] md:text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[clamp(30px,3vw,64px)] md:text-[45px]  md:max-w-[80%] leading-[clamp(36px,3vw,64px)] md:leading-[45px] mb-[20px] lg:text-[clamp(30px,3vw,64px)] lg:leading-[clamp(36px,3vw,64px)] font-medium-font-weight lg:font-normal-font-weight 2xl:max-w-[100%]">
              Initial Consultation Meeting
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[40px] flex flex-col gap-[16px] md:max-w-[85%] lg:max-w-[100%]">
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
          <div className="relative aspect-[6/4] md:aspect-[5/3] max-w-[100%] md:max-w-[80%] w-[100%] lg:aspect-[7/4]">
            <Image
              src="/consultation.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[100vw] lg:w-[50vw] pb-[40px] mb-[40px] border-b border-[rgba(0,0,0,0.2)] lg:pb-0 px-[20px] md:px-[40px] lg:border-b-0  h-full flex items-center lg:pt-[120px] 2xl:pt-[150px] text-black lg:border-r lg:border-[rgba(0,0,0,0.2)] flex-col lg:px-[40px] xl:px-[80px] 2xl:px-[150px]  items-start">
          <div className="max-w-[100%]">
            <span className="text-[16px] md:text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[clamp(30px,3vw,64px)] md:text-[45px]  md:max-w-[80%] leading-[clamp(36px,3vw,64px)] md:leading-[45px] mb-[20px] lg:text-[clamp(30px,3vw,64px)] lg:leading-[clamp(36px,3vw,64px)] font-medium-font-weight lg:font-normal-font-weight 2xl:max-w-[100%]">
              Initial Consultation Meeting
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[40px] flex flex-col gap-[16px] md:max-w-[85%] lg:max-w-[100%]">
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
          <div className="relative aspect-[6/4] md:aspect-[5/3] max-w-[100%] md:max-w-[80%] w-[100%] lg:aspect-[7/4]">
            <Image
              src="/consultation.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[100vw] lg:w-[50vw] pb-[40px] mb-[40px] border-b border-[rgba(0,0,0,0.2)] lg:pb-0 px-[20px] md:px-[40px] lg:border-b-0  h-full flex items-center lg:pt-[120px] 2xl:pt-[150px] text-black lg:border-r lg:border-[rgba(0,0,0,0.2)] flex-col lg:px-[40px] xl:px-[80px] 2xl:px-[150px]  items-start">
          <div className="max-w-[100%]">
            <span className="text-[16px] md:text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[clamp(30px,3vw,64px)] md:text-[45px]  md:max-w-[80%] leading-[clamp(36px,3vw,64px)] md:leading-[45px] mb-[20px] lg:text-[clamp(30px,3vw,64px)] lg:leading-[clamp(36px,3vw,64px)] font-medium-font-weight lg:font-normal-font-weight 2xl:max-w-[100%]">
              Initial Consultation Meeting
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[40px] flex flex-col gap-[16px] md:max-w-[85%] lg:max-w-[100%]">
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
          <div className="relative aspect-[6/4] md:aspect-[5/3] max-w-[100%] md:max-w-[80%] w-[100%] lg:aspect-[7/4]">
            <Image
              src="/consultation.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[100vw] lg:w-[50vw] pb-[40px] mb-[40px] border-b border-[rgba(0,0,0,0.2)] lg:pb-0 px-[20px] md:px-[40px] lg:border-b-0  h-full flex items-center lg:pt-[120px] 2xl:pt-[150px] text-black lg:border-r lg:border-[rgba(0,0,0,0.2)] flex-col lg:px-[40px] xl:px-[80px] 2xl:px-[150px]  items-start">
          <div className="max-w-[100%]">
            <span className="text-[16px] md:text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[clamp(30px,3vw,64px)] md:text-[45px]  md:max-w-[80%] leading-[clamp(36px,3vw,64px)] md:leading-[45px] mb-[20px] lg:text-[clamp(30px,3vw,64px)] lg:leading-[clamp(36px,3vw,64px)] font-medium-font-weight lg:font-normal-font-weight 2xl:max-w-[100%]">
              Initial Consultation Meeting
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[40px] flex flex-col gap-[16px] md:max-w-[85%] lg:max-w-[100%]">
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
          <div className="relative aspect-[6/4] md:aspect-[5/3] max-w-[100%] md:max-w-[80%] w-[100%] lg:aspect-[7/4]">
            <Image
              src="/consultation.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="panel-process w-[100vw] lg:w-[50vw] pb-[40px] mb-[40px] border-b border-[rgba(0,0,0,0.2)] lg:pb-0 px-[20px] md:px-[40px] lg:border-b-0  h-full flex items-center lg:pt-[120px] 2xl:pt-[150px] text-black lg:border-r lg:border-[rgba(0,0,0,0.2)] flex-col lg:px-[40px] xl:px-[80px] 2xl:px-[150px]  items-start">
          <div className="max-w-[100%]">
            <span className="text-[16px] md:text-[20px] block mb-[10px] font-normal-font-weight">
              (01)
            </span>
            <h3 className="text-[clamp(30px,3vw,64px)] md:text-[45px]  md:max-w-[80%] leading-[clamp(36px,3vw,64px)] md:leading-[45px] mb-[20px] lg:text-[clamp(30px,3vw,64px)] lg:leading-[clamp(36px,3vw,64px)] font-medium-font-weight lg:font-normal-font-weight 2xl:max-w-[100%]">
              Initial Consultation Meeting
            </h3>
            <div className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[40px] flex flex-col gap-[16px] md:max-w-[85%] lg:max-w-[100%]">
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
          <div className="relative aspect-[6/4] md:aspect-[5/3] max-w-[100%] md:max-w-[80%] w-[100%] lg:aspect-[7/4]">
            <Image
              src="/consultation.jpg"
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
