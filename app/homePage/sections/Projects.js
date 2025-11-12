"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowWhite from "../../../public/arrow-right-white.png";

export default function Projects() {
  const [loadedImages, setLoadedImages] = useState({});
  const [fadeInImages, setFadeInImages] = useState({});

  useEffect(() => {
    const images = [
      { key: "projekt1", src: "/projekt1-large.jpg" },
      { key: "projekt2", src: "/projekt2-large.jpg" },
      { key: "projekt3", src: "/projekt3-large.jpg" },
      { key: "projekt4", src: "/projekt4-large.jpg" },
    ];

    images.forEach(({ key, src }) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        // najpierw ustawiamy loadedImages → duże zdjęcie jest gotowe, ale opacity nadal 0.5
        setLoadedImages((prev) => ({ ...prev, [key]: true }));
        // po krótkiej chwili animujemy opacity do 1
        setTimeout(() => {
          setFadeInImages((prev) => ({ ...prev, [key]: true }));
        }, 300); // 300ms opóźnienia można dopasować
      };
    });
  }, []);

  const renderProjectImage = (smallSrc, largeSrc, key) => (
    <div className="relative w-full h-full">
      {/* Małe zdjęcie */}
      <Image
        src={smallSrc}
        alt="pokój"
        fill
        className="object-cover transition-opacity duration-700 w-full h-full"
        style={{ opacity: fadeInImages[key] ? 0 : 0.5 }}
      />

      {/* Duże zdjęcie */}
      {loadedImages[key] && (
        <Image
          src={largeSrc}
          alt="pokój"
          fill
          className="object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-700"
          style={{ opacity: fadeInImages[key] ? 1 : 0.5 }}
          unoptimized
        />
      )}
    </div>
  );

  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop mb-[50px]">
      <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(04)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
        Our projects
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:w-[calc(50%-10px)]">
          <div className="max-w-[80%] mb-[50px] lg:mb-[30px] lg:max-w-[100%]">
            <div className="relative aspect-8/7">
              {renderProjectImage(
                "/projekt2-small.jpg",
                "/projekt2-large.jpg",
                "projekt2"
              )}
            </div>
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="w-[86%] flex flex-col items-end self-end mb-[50px] lg:mb-[0px] lg:w-[100%] lg:h-full">
            <div className="flex flex-col justify-end w-full-width relative aspect-5/3 lg:h-full">
              {renderProjectImage(
                "/projekt4-small.jpg",
                "/projekt4-large.jpg",
                "projekt4"
              )}
            </div>
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:w-[calc(50%-10px)]">
          <div className="w-full-width mb-[50px] lg:mb-[30px]">
            <div className="relative aspect-8/5">
              {renderProjectImage(
                "/projekt3-small.jpg",
                "/projekt3-large.jpg",
                "projekt3"
              )}
            </div>
            <div className="flex justify-between mt-[5px] w-full-width text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="max-w-[78%] mb-[30px] lg:w-[100%] lg:max-w-[100%] lg:mb-[60px]">
            <div className="relative aspect-7/8 lg:aspect-8/7">
              {renderProjectImage(
                "/projekt1-small.jpg",
                "/projekt1-large.jpg",
                "projekt1"
              )}
            </div>
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
