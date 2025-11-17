"use client";
import Image from "next/image";
import ArrowWhite from "../../../public/arrow-right-white.png";
import LazyComponent from "../../components/lazyComponent";

import DataProjects from "../../dataProjects";
import useIsAbove768 from "@/app/components/width768";

const projects = DataProjects();

export default function Projects() {
  const isAbove768 = useIsAbove768();
  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop mb-[80px] lg:mb-[150px]">
      <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(04)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
        Our projects
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:w-[calc(50%-10px)]">
          <div className="max-w-[80%] mb-[50px] lg:mb-[50px] lg:max-w-[100%]">
            <div className="relative aspect-8/7">
              <LazyComponent height={500}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${projects[0].bgImage})` }}
                >
                  <Image
                    src={projects[0].imgSrc}
                    alt={projects[0].alt}
                    className="object-cover absolute top-0 left-0 w-full h-full"
                    fill
                    unoptimized={isAbove768}
                  />
                </div>
              </LazyComponent>
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="w-[86%] flex flex-col items-end self-end mb-[50px] lg:mb-[0px] lg:w-[100%] lg:h-full">
            <div className="flex flex-col justify-end w-full relative aspect-5/3 lg:h-full">
              <LazyComponent height={500}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${projects[1].bgImage})` }}
                >
                  <Image
                    src={projects[1].imgSrc}
                    alt={projects[1].alt}
                    className="object-cover absolute top-0 left-0 w-full h-full"
                    fill
                    unoptimized={isAbove768}
                  />
                </div>
              </LazyComponent>
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:w-[calc(50%-10px)]">
          <div className="w-full mb-[50px] lg:mb-[50px]">
            <div className="relative aspect-8/5">
              <LazyComponent height={500}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${projects[2].bgImage})` }}
                >
                  <Image
                    src={projects[2].imgSrc}
                    alt={projects[2].alt}
                    className="object-cover absolute top-0 left-0 w-full h-full"
                    fill
                    unoptimized={isAbove768}
                  />
                </div>
              </LazyComponent>
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="max-w-[78%] mb-[30px] lg:w-[100%] lg:max-w-[100%] lg:mb-[60px]">
            <div className="relative aspect-7/8 lg:aspect-8/7">
              <LazyComponent height={500}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${projects[3].bgImage})` }}
                >
                  <Image
                    src={projects[3].imgSrc}
                    alt={projects[3].alt}
                    className="object-cover absolute top-0 left-0 w-full h-full"
                    fill
                    unoptimized={isAbove768}
                  />
                </div>
              </LazyComponent>
            </div>

            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)]">
              <span>Our project</span>
              <span>View project</span>
            </div>
          </div>

          <div className="leading-[26px] flex flex-col gap-[40px] items-end lg:gap-[30px]">
            <p className="self-start text-[clamp(20px,4.5vw,30px)] leading-[clamp(26px,5.5vw,2.7rem)] max-[491px]:max-w-[300px] min-[900px]:max-w-[750px] lg:text-[26px] lg:ml-10 lg:leading-[36px] lg:font-light-font-weight xl:max-w-[570px] xl:text-[26px] xl:leading-[40px] 2xl:text-[36px] 2xl:leading-[50px] 2xl:max-w-[800px]">
              Oferujemy doświadczenie wyrafinowanego komfortu, ponadczasowej
              elegancji i szczerej gościnności. Położona w romantycznym sercu.
            </p>
            <button className="bg-main-black rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-main-white ml-auto mr-0 font-medium flex items-center md:ml-0 text-[clamp(0.75rem,3.35vw,1rem)]">
              Zobacz wszystkie
              <LazyComponent height={1900}>
                <Image
                  src={ArrowWhite}
                  alt="strzałka"
                  className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative"
                />
              </LazyComponent>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
