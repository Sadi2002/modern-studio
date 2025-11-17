"use client";
import LazyComponent from "@/app/components/lazyComponent";
import Image from "next/image";
import ArrowWhite from "../../../public/arrow-right-white.png";

import dataProcess from "../../dataProcess";
import { useState } from "react";

const process = dataProcess();

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet lg:flex-row lg:justify-between lg:mx-small-laptop">
      <div className="mb-[40px] lg:mb-0 lg:w-[50%]">
        <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(05)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
          Our Process
        </h3>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[50px] min-[380px]:max-w-[360px] md:max-w-[550px]">
          During construction, we remain involved to make sure the project is
          executed according to the design. We visit the site.
        </p>
        <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] ml-auto mr-0 block after:w-full lg:hidden">
          Więcej o nas
        </button>
        <button className="bg-main-black rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-main-white ml-auto mr-0 font-medium flex items-center md:ml-0 text-[clamp(0.75rem,3.35vw,1rem)] hidden lg:flex lg:ml-auto">
          Czytaj więcej
          <LazyComponent height={500}>
            <Image
              src={ArrowWhite}
              alt="strzałka"
              className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative"
            />
          </LazyComponent>
        </button>
        <div className="mt-[40px]">
          {process.map((step, index) => (
            <div
              key={step.id}
              className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)] cursor-pointer transition-all"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span className="block text-[clamp(18px,5.5vw,25px)] leading-[clamp(0.75rem,10vw,2rem)]">
                ({String(step.id).padStart(2, "0")}) {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[40%]">
        <div className="lg:sticky lg:top-[87.5px] lg:mt-[87.5px] xl:top-[100px] xl:mt-[100px] 2xl:mt-[130px] 2xl:top-[130px]">
          <LazyComponent height={500}>
            <div
              className="relative aspect-8/7 mb-[40px] lg:w-[100%] lg:h-[300px] lg:mb-0 2xl:h-[350px] inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${process[activeIndex].bgImage})`,
              }}
            >
              <Image
                src={process[activeIndex].imgSrc}
                alt={process[activeIndex].alt}
                fill
                unoptimized
                className="object-cover absolute top-0 left-0 w-full h-full"
              />
            </div>
          </LazyComponent>

          <p className="mt-[10px] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(16px,4.5vw,1.5rem)] max-w-[360px] lg:mt-[20px] lg:text-[16px] lg:leading-[24px]">
            {process[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
}
