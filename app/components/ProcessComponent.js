"use client";

import Image from "next/image";
import ArrowWhite from "../../public/arrow-right-white.png";

import dataProcess from "../data/dataProcess";
import { useState } from "react";
import Button from "@/app/components/Button";

const process = dataProcess();

export default function ProcessComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexDesktop, setActiveIndexDesktop] = useState(0);

  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet lg:flex-row lg:justify-between lg:mx-small-laptop mb-[40px] lg:mb-[80px] xl:mb-[150px]">
      <div className="mb-[40px] lg:mb-0 lg:w-[50%] ">
        <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(05)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
          How We Work
        </h3>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[50px] min-[380px]:max-w-[360px] md:max-w-[400px] lg:max-w-[500px]">
          From initial concept to final completion — each step brings you closer
          to your exceptional villa.
        </p>
        <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] ml-auto mr-0 block after:w-full lg:hidden">
          Więcej o nas
        </button>
        <div className="lg:flex lg:justify-end">
          <Button
            arrow={ArrowWhite}
            linkTo="#"
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="hidden md:self-end lg:flex"
          >
            Czytaj więcej
          </Button>
        </div>

        <div className="mt-[40px]">
          {process.map((step, index) => (
            <div
              key={step.id}
              className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)] cursor-pointer transition-all lg:pointer-events-auto"
              // MOBILE: klik zmienia tylko treść (activeIndex)
              onClick={() => setActiveIndex(index)}
              // DESKTOP: hover zmienia treść + obrazek
              onMouseEnter={() => {
                setActiveIndex(index);
                setActiveIndexDesktop(index);
              }}
            >
              <span className="flex justify-between items-center text-[clamp(14px,4.3vw,23px)] leading-[clamp(0.75rem,10vw,2rem)]">
                ({String(step.id).padStart(2, "0")}) {step.title}{" "}
                <Image
                  width={20}
                  height={20}
                  src="/chev.png"
                  alt="Arrow Icon"
                  className="mr-[10px] lg:hidden"
                />
              </span>

              <div
                className={`lg:hidden ${
                  activeIndex === index ? "mt-[10px]" : "hidden"
                }`}
              >
                <p className="font-light-font-weight mb-[20px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(16px,4.5vw,1.5rem)] pr-[30px] md:pr-[70px]  lg:text-[16px] lg:leading-[24px] ">
                  {step.description}
                </p>
                {activeIndex === index && (
                  <div className="relative w-full mb-[0px] aspect-8/5">
                    <Image
                      src={step.imgSrc}
                      alt={step.alt}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                      placeholder="blur"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block lg:w-[40%]">
        <div className="lg:sticky lg:top-[87.5px] lg:mt-[87.5px] xl:top-[100px] xl:mt-[100px] 2xl:mt-[130px] 2xl:top-[130px]">
          <div className="relative aspect-8/5 mb-[40px] lg:w-[100%] lg:h-[300px] lg:mb-0 2xl:h-[350px] lg:aspect-8/7">
            <Image
              src={process[activeIndexDesktop].imgSrc}
              alt={process[activeIndexDesktop].alt}
              fill
              className="object-cover absolute top-0 left-0 w-full h-full"
              placeholder="blur"
            />
          </div>

          <p className="hidden mt-[10px] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(16px,4.5vw,1.5rem)] max-w-[360px] lg:mt-[20px] lg:text-[16px] lg:leading-[24px] lg:flex">
            {process[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
}
