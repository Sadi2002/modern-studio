export const revalidate = 0;
import Image from "next/image";
import Button from "@/app/components/Button";
import ArrowWhite from "../../../public/arrow-right-white.png";

import DataProjects from "../../data/dataProjects";
import Link from "next/link";

import { urlFor } from "../../../lib/sanity/client";

export default async function Projects({ data }) {
  const project = await DataProjects();

  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop mb-[80px] xl:mb-[150px]">
      <h3 className="text-[clamp(36px,6.5vw,45px)] leading-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(04)'] after:absolute after:top-[-15px] xl:after:top-[-25px] 2xl:after:top-[-35px]  after:text-[8px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px] xl:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal 2xl:max-w-[1200px]">
        {data.title}
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:w-[calc(50%-10px)]">
          <Link href={`/portfolio/${project[0]?.slug.current}`}>
            <div className="max-w-[80%] mb-[50px] lg:mb-[50px] lg:max-w-[100%]">
              <div className="relative aspect-8/7">
                <Image
                  src={urlFor(project[0]?.imgSrc).url()}
                  alt={project[0]?.alt}
                  className="object-cover absolute top-0 left-0 w-full h-full"
                  fill
                />
              </div>
              <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight">
                  {project[0]?.title}, {project[0]?.location}
                </span>
                <span className="font-medium-font-weight">
                  {project[0]?.year}
                </span>
              </div>
            </div>
          </Link>

          <Link
            href={`/portfolio/${project[1]?.slug.current}`}
            className="h-full flex justify-end"
          >
            <div className="w-[86%] flex flex-col items-end self-end mb-[50px] lg:mb-[0px] lg:w-[100%] lg:h-full">
              <div className="flex flex-col justify-end w-full relative aspect-5/3 lg:h-full">
                <Image
                  src={urlFor(project[1]?.imgSrc).url()}
                  alt={project[1]?.alt}
                  className="object-cover absolute top-0 left-0 w-full h-full"
                  fill
                />
              </div>
              <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px]">
                <span className="font-medium-font-weight">
                  {project[1]?.title}, {project[1]?.location}
                </span>
                <span className="font-medium-font-weight">
                  {project[1]?.year}
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:flex lg:flex-col lg:w-[calc(50%-10px)]">
          <Link href={`/portfolio/${project[2]?.slug.current}`}>
            <div className="w-full mb-[50px] lg:mb-[50px]">
              <div className="relative aspect-8/5">
                <Image
                  src={urlFor(project[2]?.imgSrc).url()}
                  alt={project[2]?.alt}
                  className="object-cover absolute top-0 left-0 w-full h-full"
                  fill
                />
              </div>
              <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px]">
                <span className="font-medium-font-weight">
                  {project[2]?.title}, {project[2]?.location}
                </span>
                <span className="font-medium-font-weight">
                  {project[2]?.year}
                </span>
              </div>
            </div>
          </Link>

          <Link href={`/portfolio/${project[3]?.slug.current}`}>
            <div className="max-w-[78%] mb-[30px] lg:w-[100%] lg:max-w-[100%] lg:mb-[60px]">
              <div className="relative aspect-7/8 lg:aspect-8/7">
                <Image
                  src={urlFor(project[3]?.imgSrc).url()}
                  alt={project[3]?.alt}
                  className="object-cover absolute top-0 left-0 w-full h-full"
                  fill
                />
              </div>

              <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px]">
                <span className="font-medium-font-weight">
                  {project[3]?.title}, {project[3]?.location}
                </span>
                <span className="font-medium-font-weight ">
                  {project[3]?.year}
                </span>
              </div>
            </div>
          </Link>

          <div className="leading-[26px] flex flex-col gap-[40px] items-end lg:gap-[40px] xl:gap-[50px]">
            <p className="self-start text-[clamp(14px,3.5vw,18px)] leading-[clamp(20px,6vw,24px)] min-[900px]:max-w-[750px] lg:ml-10 lg:leading-[28px] md:leading-[28px] md:max-w-[600px] font-light-font-weight  xl:max-w-[600px] xl:text-[20px] xl:leading-[34px] 2xl:text-[23px] 2xl:leading-[36px] 2xl:max-w-[800px]">
              {data.subtitle}
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
