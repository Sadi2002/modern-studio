export const revalidate = 0;
import Image from "next/image";
import arrow from "../../../public/arrow.png";
import ArrowWhite from "../../../public/arrow-right-white.png";

import ProjectGallery from "../../components/Gallery";
import PortfolioClient from "../PortfolioClient";

import dataProjects from "../../data/dataProjects";

import { urlFor } from "../../../lib/sanity/client";
import Button from "@/app/components/Button";

export async function generateStaticParams() {
  const projects = await dataProjects();

  return projects.map((project) => ({ slug: project.slug.current }));
}

export default async function Project({ params }) {
  const { slug } = await params;
  const projects = await dataProjects();

  const project = projects.find((project) => project.slug.current === slug);

  const collaborators = project?.collaborators || [];

  return (
    <section className="flex flex-col pb-[0px]">
      <div className="flex  w-full justify-between pt-[100px] lg:pt-[150px] 2xl:pt-[200px] px-[20px] mb-[60px] xl:mb-[120px] md:px-[40px] flex-col lg:flex-row 2xl:px-[70px]">
        <h1 className="text-[clamp(36px,6.5vw,45px)] leading-[clamp(2.2rem,7.5vw,2.5rem)] md:text-[80px] md:leading-[80px] font-medium mb-[20px] 2xl:mb-[30px] max-w-[500px] lg:text-[clamp(2rem,4.5vw,80px)] lg:leading-[clamp(2rem,4.5vw,80px)] lg:max-w-[700px] lg:w-[50%] 2xl:max-w-[850px] xl:font-normal  uppercase">
          {project.title}
        </h1>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight lg:w-[50%] max-w-[700px] ">
          {project.description}
        </p>
      </div>
      <div className="flex flex-col gap-[40px] 2xl:gap-0 lg:flex-row w-full justify-between mb-[40px] xl:mb-[80px] px-[20px] md:px-[40px] 2xl:px-[70px]">
        <div>
          <span className="font-medium-font-weight text-[clamp(16px,5vw,18px)] leading-[clamp(0.75rem,10vw,20px)]2xl:text-[20px]">
            {project.location}
          </span>
        </div>
        <div className="flex flex-col text-[clamp(16px,5vw,18px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] gap-[5px] 2xl:gap-[10px]">
          <span className="font-medium-font-weight">Data completed</span>
          <span className="font-light-font-weight text-[14px] 2xl:text-[16px]">
            {project.year}
          </span>
        </div>
        <div className="flex flex-col text-[clamp(16px,5vw,18px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] gap-[5px] 2xl:gap-[10px]">
          <span className="font-medium-font-weight">Project Type</span>
          <span className="font-light-font-weight text-[14px] 2xl:text-[16px]">
            {project.type}
          </span>
        </div>
        <div className="flex flex-col text-[clamp(16px,5vw,18px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] gap-[5px] 2xl:gap-[10px]">
          {collaborators.length > 0 && (
            <>
              <span className="font-medium-font-weight">Collaborators</span>
              {collaborators.map((c, idx) => (
                <span
                  key={idx}
                  className="font-light-font-weight text-[14px] 2xl:text-[16px]"
                >
                  {c.title}
                </span>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="px-[20px] 2xl:px-[70px]">
        <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] after:w-full flex items-center ml-auto">
          View details{" "}
          <Image
            src={arrow}
            alt="Arrow Icon"
            className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative "
          />
        </button>
      </div>
      <div className="px-[10px] md:px-[20px] 2xl:px-[30px] mt-[10px] md:mt-[16px]">
        <div className="mt-[16px]">
          <div className="relative w-full aspect-[5/3] lg:aspect-[6/3] ">
            <Image
              src={urlFor(project.imgSrc).url()}
              alt="pokój"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between gap-[10px] md:gap-[16px] mt-[10px] md:mt-[16px]">
            <ProjectGallery
              gallery={project.gallery}
              projectKey={project.slug}
            />
          </div>
        </div>
        <div className="flex justify-end mt-[24px]">
          <Button
            arrow={ArrowWhite}
            linkTo="/portfolio"
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="md:self-end"
          >
            Contact us
          </Button>
        </div>
      </div>

      <div className="mt-[80px]">
        <h3 className="text-[clamp(36px,6.5vw,45px)] font-medium uppercase relative mb-5 lg:text-6xl  lg:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal mx-margin-mobile md:mx-tablet lg:hidden">
          Our projects
        </h3>
        <PortfolioClient projects={projects} isBtn={false} isProject={true} />
      </div>
    </section>
  );
}
