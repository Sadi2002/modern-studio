import Image from "next/image";
import Button from "@/app/components/Button";
import ArrowWhite from "../../../public/arrow-right-white.png";

import DataProjects from "../../data/dataProjects";

const projects = DataProjects();

export default function Projects() {
  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop mb-[80px] xl:mb-[150px]">
      <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(04)'] after:absolute after:top-[5px] after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal">
        Our projects
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:w-[calc(50%-10px)]">
          <div className="max-w-[80%] mb-[50px] lg:mb-[50px] lg:max-w-[100%]">
            <div className="relative aspect-8/7">
              <Image
                src={projects[0].imgSrc}
                alt={projects[0].alt}
                className="object-cover absolute top-0 left-0 w-full h-full"
                fill
                placeholder="blur"
              />
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span className="font-medium-font-weight">
                Villa Maris, Mallorca
              </span>
              <span className="font-medium-font-weight">2025</span>
            </div>
          </div>

          <div className="w-[86%] flex flex-col items-end self-end mb-[50px] lg:mb-[0px] lg:w-[100%] lg:h-full">
            <div className="flex flex-col justify-end w-full relative aspect-5/3 lg:h-full">
              <Image
                src={projects[1].imgSrc}
                alt={projects[1].alt}
                className="object-cover absolute top-0 left-0 w-full h-full"
                fill
                placeholder="blur"
              />
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)]">
              <span className="font-medium-font-weight">
                Villa Llevant, Mallorca
              </span>
              <span className="font-medium-font-weight">2024</span>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:w-[calc(50%-10px)]">
          <div className="w-full mb-[50px] lg:mb-[50px]">
            <div className="relative aspect-8/5">
              <Image
                src={projects[2].imgSrc}
                alt={projects[2].alt}
                className="object-cover absolute top-0 left-0 w-full h-full"
                fill
                placeholder="blur"
              />
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)]">
              <span className="font-medium-font-weight">
                Villa Esencia, Mallorca
              </span>
              <span className="font-medium-font-weight">2023</span>
            </div>
          </div>

          <div className="max-w-[78%] mb-[30px] lg:w-[100%] lg:max-w-[100%] lg:mb-[60px]">
            <div className="relative aspect-7/8 lg:aspect-8/7">
              <Image
                src={projects[3].imgSrc}
                alt={projects[3].alt}
                className="object-cover absolute top-0 left-0 w-full h-full"
                fill
                placeholder="blur"
              />
            </div>

            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)]">
              <span className="font-medium-font-weight">
                Son Brisa, Mallorca
              </span>
              <span className="font-medium-font-weight ">2022</span>
            </div>
          </div>

          <div className="leading-[26px] flex flex-col gap-[40px] items-end lg:gap-[30px]">
            <p className="self-start text-[clamp(14px,3.5vw,23px)] leading-[clamp(20px,6vw,26px)] min-[900px]:max-w-[750px] lg:ml-10 lg:leading-[36px] md:leading-[34px] md:max-w-[600px] font-light-font-weight xl:max-w-[570px] xl:text-[23px] xl:leading-[36px] 2xl:text-[26px] 2xl:leading-[42px] 2xl:max-w-[800px]">
              Our villas harmoniously blend contemporary Mediterranean design
              with the natural landscape of Mallorca, featuring open interiors,
              sunlit terraces, premium materials, and seamless indoor‑outdoor
              living for timeless luxury.
            </p>
            <Button
              arrow={ArrowWhite}
              linkTo="/portfolio"
              bgColor="main-black"
              textColor="main-white"
              additionalStyles="md:self-end"
            >
              Zobacz wszystkie
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
