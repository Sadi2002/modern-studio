"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ArrowWhite from "../../../../public/arrow-right-white.png";
import Button from "../../../components/Button";
import { urlFor } from "../../../../lib/sanity/client";

export default function Process({ data, lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexDesktop, setActiveIndexDesktop] = useState(0);

  // data = processSection z Sanity
  const steps = data?.steps || [];

  if (!steps.length) {
    console.log("Process: brak steps w data", data);
    return null;
  }

  const activeDesktopStep = steps[activeIndexDesktop];

  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet lg:mx-small-laptop mb-[40px] lg:mb-[80px] xl:mb-[150px]">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* LEWY DIV: tytuł, opis, przyciski + lista kroków */}
        <div className="mb-[40px] lg:mb-0 lg:w-[50%] ">
          {/* Tytuł / opis / przyciski – jak wcześniej */}
          <h3 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium uppercase relative after:content-['(05)'] after:absolute after:bottom-[clamp(15px,4vw,25px)] md:after:bottom-[clamp(20px,4vw,25px)] xl:after:bottom-[clamp(20px,4vw,30px)] 2xl:after:top-[-35px] after:text-[10px] md:after:text-[12px]  2xl:after:top-[-35px] mb-5 xl:text-6xl xl:after:text-[14px] xl:mb-[20px] 2xl:text-[80px] 2xl:leading-[80px] lg:font-normal 2xl:max-w-[1200px]">
            {data?.title?.[lang]}
          </h3>
          <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[40px] xl:mb-[50px] min-[380px]:max-w-[390px] md:max-w-[400px] lg:max-w-[500px]">
            {data?.description?.[lang]}
          </p>

          <Link href={`/${lang}/${data?.button?.buttonLink}`}>
            <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] ml-auto mr-0 block after:w-full lg:hidden">
              {data?.button?.buttonLabel?.[lang]}
            </button>
          </Link>

          <div className="hidden lg:flex lg:justify-end">
            <Button
              arrow={ArrowWhite}
              linkTo={`/${lang}/${data?.button?.buttonLink}`}
              bgColor="main-black"
              textColor="main-white"
              additionalStyles="hidden md:self-end lg:flex"
            >
              {data?.button?.buttonLabel?.[lang]}
            </Button>
          </div>

          {/* Lista kroków pod nagłówkiem */}
          <div className="mt-[40px]">
            {steps.map((step, index) => (
              <div
                key={step.id ?? index}
                className="py-[20px] border-b-[1px] border-b-[rgba(0,0,0,0.2)] cursor-pointer transition-all lg:pointer-events-auto"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setActiveIndexDesktop(index);
                }}
              >
                <span className="flex gap-[10px] items-center text-[clamp(14px,4.3vw,23px)] leading-[clamp(0.75rem,10vw,2rem)]">
                  <span className="flex">(0{index + 1})</span>{" "}
                  {step?.title?.[lang]}
                  <Image
                    width={20}
                    height={20}
                    src="/chev.png"
                    alt="Arrow Icon"
                    className="mr-[10px] lg:hidden"
                  />
                </span>

                {/* MOBILE: rozwijany opis + obrazek */}
                <div
                  className={`lg:hidden ${
                    activeIndex === index ? "mt-[10px]" : "hidden"
                  }`}
                >
                  <p className="font-light-font-weight mb-[20px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] pr-[30px] md:pr-[70px] lg:text-[16px] lg:leading-[24px]">
                    {step?.description?.[lang]}
                  </p>
                  {step.imgSrc && (
                    <Image
                      src={urlFor(step.imgSrc).url()}
                      alt={step?.alt?.[lang] || ""}
                      width={600}
                      height={400}
                      loading="eager"
                      sizes="100vw"
                      className={`object-cover w-full h-[200px] transition-opacity duration-300
        ${
          activeIndex === index
            ? "opacity-100"
            : "opacity-0 absolute top-0 left-0"
        }
      `}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRAWY DIV: sticky obraz + opis na desktopie */}
        <div className="hidden lg:flex lg:w-[40%] items-end">
          <div className=" lg:mt-[70px] lg:w-full xl:mt-[100px] 2xl:mt-[130px] ">
            <div className="relative aspect-8/5 mb-[40px] lg:w-[100%] lg:h-[300px] lg:mb-0 2xl:h-[400px] lg:aspect-8/7">
              {steps.map(
                (step, index) =>
                  step.imgSrc && (
                    <Image
                      key={step._key ?? index}
                      src={urlFor(step.imgSrc).url()}
                      alt={step?.alt?.[lang] || ""}
                      fill
                      priority={index === 0}
                      loading="eager"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className={`object-cover transition-opacity duration-300
          ${activeIndexDesktop === index ? "opacity-100 z-10" : "opacity-0 z-0"}
        `}
                    />
                  )
              )}
            </div>

            {/* <p className="hidden mt-[10px] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(16px,4.5vw,1.5rem)] max-w-[360px] lg:mt-[10px] lg:text-[16px] lg:leading-[24px] lg:flex xl:max-w-[400px] 2xl:max-w-[450px]">
              {steps[activeIndex]?.description?.[lang]}
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
