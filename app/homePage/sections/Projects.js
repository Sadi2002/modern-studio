"use client";

import Image from "next/image";

import ArrowWhite from "../../../public/arrow-right-white.png";

import { useState, useEffect } from "react";

export default function Projects() {
  // Stany kontrolujące, czy duży obraz się załadował
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);

  // Efekt uruchamiany natychmiast po wyrenderowaniu komponentu
  useEffect(() => {
    // Ładowanie dużych obrazów w tle
    const img = new window.Image();
    img.src = "/projekt1-large.jpg";
    img.onload = () => setLoaded(true);

    const img2 = new window.Image();
    img2.src = "/projekt2-large.jpg";
    img2.onload = () => setLoaded2(true);

    const img3 = new window.Image();
    img3.src = "/projekt3-large.jpg";
    img3.onload = () => setLoaded3(true);

    const img4 = new window.Image();
    img4.src = "/projekt4-large.jpg";
    img4.onload = () => setLoaded4(true);
  }, []);

  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop mb-[50px]">
      <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(04)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
        Our projects
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:w-[calc(50%-10px)]">
          <div className="max-w-[80%] mb-[50px] lg:mb-[30px] lg:max-w-[100%]">
            <div className="relative aspect-8/7 overflow-hidden ">
              {/* MAŁY OBRAZ - Ładuje się natychmiast, jest rozmyty */}
              <Image
                src="/projekt2-small.jpg"
                alt="pokój"
                fill
                className={`object-cover transition-filter duration-700 ease-in-out ${
                  loaded2 ? "blur-0" : "blur-lg"
                }`}
                style={{ objectFit: "cover" }}
              />

              {/* DUŻY OBRAZ - Renderowany i widoczny TYLKO po załadowaniu */}
              {loaded2 && (
                <Image
                  src="/projekt2-large.jpg"
                  alt="pokój"
                  fill
                  className={`object-cover transition-filter duration-700 blur-0`}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              )}
            </div>
            <div className="flex justify-between mt-[5px]  w-full-width text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="w-[86%] flex flex-col items-end self-end mb-[50px] lg:mb-[0px] lg:w-[100%] lg:h-full">
            <div className="flex flex-col justify-end w-full-width relative aspect-5/3 overflow-hidden lg:h-full">
              {/* MAŁY OBRAZ */}
              <Image
                src="/projekt4-small.jpg"
                alt="pokój"
                fill
                className={`object-cover transition-filter duration-700 ease-in-out ${
                  loaded4 ? "blur-0" : "blur-lg"
                }`}
                style={{ objectFit: "cover" }}
              />

              {/* DUŻY OBRAZ */}
              {loaded4 && (
                <Image
                  src="/projekt4-large.jpg"
                  alt="pokój"
                  fill
                  className={`object-cover transition-filter duration-700 blur-0`}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
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
            <div className="relative aspect-8/5 overflow-hidden">
              {/* MAŁY OBRAZ */}
              <Image
                src="/projekt3-small.jpg"
                alt="pokój"
                fill
                className={`object-cover transition-filter duration-700 ease-in-out ${
                  loaded3 ? "blur-0" : "blur-lg"
                }`}
                style={{ objectFit: "cover" }}
              />

              {/* DUŻY OBRAZ */}
              {loaded3 && (
                <Image
                  src="/projekt3-large.jpg"
                  alt="pokój"
                  fill
                  className={`object-cover transition-filter duration-700 blur-0`}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              )}
            </div>
            <div className="flex justify-between mt-[5px]  w-full-width text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>
          <div className="max-w-[78%] mb-[30px] lg:w-[100%] lg:max-w-[100%] lg:mb-[60px]">
            <div className="relative aspect-7/8 overflow-hidden lg:aspect-8/7 ">
              {/* MAŁY OBRAZ */}
              <Image
                src="/projekt1-small.jpg"
                alt="pokój"
                fill
                className={`object-cover transition-filter duration-700 ease-in-out ${
                  loaded ? "blur-0" : "blur-lg"
                }`}
                style={{ objectFit: "cover" }}
              />

              {/* DUŻY OBRAZ */}
              {loaded && (
                <Image
                  src="/projekt1-large.jpg"
                  alt="pokój"
                  fill
                  className={`object-cover transition-filter duration-700 blur-0`}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
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
            <button
              className={`bg-main-black rounded-buttonWithArrow-rounded px-buttonWithArrow-padding-x py-buttonWithArrow-padding-y  text-main-white ml-buttonWithArrow-margin-left-mobile mr-buttonWithArrow-margin-right-mobile font-medium flex items-center md:ml-buttonWithArrow-margin-left-tablet text-hero-text-size-mobile`}
            >
              Zobacz wszystkie
              <Image
                src={ArrowWhite}
                alt="strzałka"
                className="w-buttonWithArrow-icon-width h-buttonWithArrow-icon-height top-[0.5px] relative"
              />
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
