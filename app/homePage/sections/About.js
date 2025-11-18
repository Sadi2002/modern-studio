"use client";

import Image from "next/image";
import aboutLarge from "../../../public/about-large.jpg";
import LazyComponent from "@/app/components/lazyComponent";
import useIsAbove768 from "@/app/components/width768";

export default function About() {
  const isAbove768 = useIsAbove768();

  return (
    <section className="pt-[60px] flex flex-col gap-[40px] xl:gap-[80px] xl:pt-[150px] 2xl:gap-[100px] mb-[80px] xl:mb-[150px]">
      <div className="mx-margin-mobile lg:flex md:mx-tablet lg:mx-small-laptop lg:justify-between xl:justify-between 2xl:mx-desktop">
        <h2 className="text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[clamp(2.1rem,7.5vw,2.5rem)] font-medium mb-[30px] max-w-[500px] lg:text-[clamp(2rem,3.5vw,64px)] lg:leading-[clamp(2rem,3.5vw,64px)] lg:max-w-[700px] lg:w-[50%] 2xl:max-w-[850px] xl:font-normal">
          Discover the beautiful Villas of Majorca
        </h2>
        <div className="flex flex-col items-end lg:items-start lg:w-[50%]">
          <div className="flex flex-col gap-[16px] font-light-font-weight mb-[40px] items-start text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full">
            <p className="lg:max-w-[900px] 2xl:max-w-full">
              We design contemporary villas in Majorca, combining aesthetics
              with functionality. Our goal is to ensure that every project
              responds both to the island’s climate and the expectations of our
              clients.
            </p>
            <p className="lg:max-w-[900px] 2xl:max-w-full">
              We work with high-quality materials and clean architectural forms,
              focusing on comfort, proportions, and details that define the
              character of each space.
            </p>
          </div>
          <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] after:w-full">
            MORE ABOUT US
          </button>
        </div>
      </div>
      <LazyComponent height={300}>
        <div className="relative max-w-[90%] xl:w-[80%] aspect-[3/1.7] bg-[url('/about-small.webp')] bg-center bg-cover">
          <Image
            src={aboutLarge}
            alt="pokój"
            fill
            className="object-cover"
            unoptimized={isAbove768}
          />
        </div>
      </LazyComponent>
    </section>
  );
}
