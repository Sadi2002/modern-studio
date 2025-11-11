"use client";

import ProgressiveImage from "../../components/ProgressiveImage"; // import komponentu
import Image from "next/image";
import ArrowWhite from "../../../public/arrow-right-white.png";

export default function Projects() {
  const projects = [
    { small: "/projekt1-small.jpg", large: "/projekt1-large.jpg" },
    { small: "/projekt2-small.jpg", large: "/projekt2-large.jpg" },
    { small: "/projekt3-small.jpg", large: "/projekt3-large.jpg" },
    { small: "/projekt4-small.jpg", large: "/projekt4-large.jpg" },
  ];

  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop mb-[50px]">
      <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(04)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
        Our projects
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Lewa kolumna */}
        <div className="flex flex-col lg:w-[calc(50%-10px)]">
          <div className="max-w-[80%] mb-[50px] lg:mb-[30px] lg:max-w-[100%]">
            <ProgressiveImage
              smallSrc={projects[1].small}
              largeSrc={projects[1].large}
              alt="pokój"
              className="relative aspect-8/7 overflow-hidden"
            />
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="w-[86%] flex flex-col items-end self-end mb-[50px] lg:mb-[0px] lg:w-[100%] lg:h-full">
            <ProgressiveImage
              smallSrc={projects[3].small}
              largeSrc={projects[3].large}
              alt="pokój"
              className="flex flex-col justify-end w-full-width relative aspect-5/3 overflow-hidden lg:h-full"
            />
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>
        </div>

        {/* Prawa kolumna */}
        <div className="lg:flex lg:flex-col lg:w-[calc(50%-10px)]">
          <div className="w-full-width mb-[50px] lg:mb-[30px]">
            <ProgressiveImage
              smallSrc={projects[2].small}
              largeSrc={projects[2].large}
              alt="pokój"
              className="relative aspect-8/5 overflow-hidden"
            />
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="max-w-[78%] mb-[30px] lg:w-[100%] lg:max-w-[100%] lg:mb-[60px]">
            <ProgressiveImage
              smallSrc={projects[0].small}
              largeSrc={projects[0].large}
              alt="pokój"
              className="relative aspect-7/8 overflow-hidden lg:aspect-8/7"
            />
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="leading-[26px] flex flex-col gap-[40px] items-end lg:gap-[30px]">
            <p className="self-start text-[clamp(20px,4.5vw,30px)] leading-[clamp(26px,5.5vw,2.7rem)] max-[491px]:max-w-[300px] min-[900px]:max-w-[750px] lg:text-[26px] lg:ml-10 lg:leading-[36px] lg:font-light-font-weight xl:max-w-[570px] xl:text-[26px] xl:leading-[40px] 2xl:text-[36px] 2xl:leading-[50px] 2xl:max-w-[800px]">
              Oferujemy doświadczenie wyrafinowanego komfortu, ponadczasowej
              elegancji i szczerej gościnności. Położona w romantycznym sercu.
            </p>
            <button className="bg-main-black rounded-buttonWithArrow-rounded px-buttonWithArrow-padding-x py-buttonWithArrow-padding-y text-main-white ml-buttonWithArrow-margin-left-mobile mr-buttonWithArrow-margin-right-mobile font-medium flex items-center md:ml-buttonWithArrow-margin-left-tablet text-hero-text-size-mobile">
              Zobacz wszystkie
              <Image
                src={ArrowWhite}
                alt="strzałka"
                className="w-buttonWithArrow-icon-width h-buttonWithArrow-icon-height top-[0.5px] relative"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
