"use client";

import { useEffect, useState } from "react";
import ArrowWhite from "../../../public/arrow-right-white.png";

const projectList = [
  { small: "/projekt2-small.webp", large: "/projekt2-large.jpg" },
  { small: "/projekt4-small.webp", large: "/projekt4-large.jpg" },
  { small: "/projekt3-small.webp", large: "/projekt3-large.jpg" },
  { small: "/projekt1-small.webp", large: "/projekt1-large.jpg" },
];

function ProjectImage({ smallSrc, largeSrc, alt }) {
  const [loadedLarge, setLoadedLarge] = useState(false);

  useEffect(() => {
    const loadLarge = () => {
      const img = new window.Image();
      img.src = largeSrc;
      img.onload = () => setLoadedLarge(true);
    };

    if (document.readyState === "complete") {
      loadLarge();
    } else {
      window.addEventListener("load", loadLarge);
      return () => window.removeEventListener("load", loadLarge);
    }
  }, [largeSrc]);

  return (
    <img
      src={loadedLarge ? largeSrc : smallSrc}
      alt={alt}
      className="object-cover w-full h-full transition-opacity duration-700"
    />
  );
}

export default function Projects() {
  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop mb-[50px]">
      <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(04)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
        Our projects
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:w-[calc(50%-10px)]">
          <div className="max-w-[80%] mb-[50px] lg:mb-[30px] lg:max-w-[100%] relative aspect-8/7">
            <ProjectImage
              smallSrc={projectList[0].small}
              largeSrc={projectList[0].large}
              alt="Projekt 2"
            />
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="w-[86%] flex flex-col items-end self-end mb-[50px] lg:mb-[0px] lg:w-[100%] lg:h-full relative aspect-5/3">
            <ProjectImage
              smallSrc={projectList[1].small}
              largeSrc={projectList[1].large}
              alt="Projekt 4"
            />
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:w-[calc(50%-10px)]">
          <div className="w-full-width mb-[50px] lg:mb-[30px] relative aspect-8/5">
            <ProjectImage
              smallSrc={projectList[2].small}
              largeSrc={projectList[2].large}
              alt="Projekt 3"
            />
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="max-w-[78%] mb-[30px] lg:w-[100%] lg:max-w-[100%] lg:mb-[60px] relative aspect-7/8 lg:aspect-8/7">
            <ProjectImage
              smallSrc={projectList[3].small}
              largeSrc={projectList[3].large}
              alt="Projekt 1"
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
              <img
                src={ArrowWhite.src}
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
