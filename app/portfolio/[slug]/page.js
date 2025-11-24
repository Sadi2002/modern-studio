import Image from "next/image";
import arrow from "../../../public/arrow.png";

import ProjectGallery from "../../components/Gallery";
import PortfolioClient from "../PortfolioClient";

import dataProjects from "../../data/dataProjects";

import { urlFor } from "../../../lib/sanity/client";

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
    <section className="flex flex-col pb-[80px] 2xl:pb-[150px]">
      <div className="flex  w-full justify-between pt-[100px] lg:pt-[150px] 2xl:pt-[200px] px-[20px] mb-[60px] xl:mb-[120px] md:px-[40px] flex-col lg:flex-row 2xl:px-[70px]">
        <h1 className="text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[clamp(2.1rem,7.5vw,2.5rem)] md:text-[80px] md:leading-[80px] font-medium mb-[20px] 2xl:mb-[30px] max-w-[500px] lg:text-[clamp(2rem,4.5vw,80px)] lg:leading-[clamp(2rem,4.5vw,80px)] lg:max-w-[700px] lg:w-[50%] 2xl:max-w-[850px] xl:font-normal  uppercase">
          {project.title}
        </h1>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight lg:w-[50%] max-w-[700px] ">
          {project.description}
        </p>
      </div>
      <div className="flex flex-col gap-[40px] 2xl:gap-0 xl:flex-row w-full justify-between mb-[40px] xl:mb-[80px] px-[20px] md:px-[40px] 2xl:px-[70px]">
        <div>
          <span className="font-medium-font-weight text-[clamp(16px,5vw,20px)] leading-[clamp(0.75rem,10vw,20px)]">
            {project.location}
          </span>
        </div>
        <div className="flex flex-col text-[clamp(12px,5vw,20px)] leading-[clamp(0.75rem,10vw,20px)] gap-[10px]">
          <span className="font-medium-font-weight">Data completed</span>
          <span className="font-light-font-weight text-[16px]">
            {project.year}
          </span>
        </div>
        <div className="flex flex-col text-[clamp(12px,5vw,20px)] leading-[clamp(0.75rem,10vw,20px)] gap-[10px]">
          <span className="font-medium-font-weight">Project Type</span>
          <span className="font-light-font-weight text-[16px]">
            {project.type}
          </span>
        </div>
        <div className="flex flex-col text-[clamp(12px,5vw,20px)] leading-[clamp(0.75rem,10vw,20px)] gap-[10px]">
          {collaborators.length > 0 && (
            <>
              <span className="font-medium-font-weight">Collaborators</span>
              {collaborators.map((c, idx) => (
                <span key={idx} className="font-light-font-weight text-[16px]">
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
      <div className="px-[20px] 2xl:px-[30px] mt-[16px]">
        <div className="mt-[16px]">
          <div className="relative w-full aspect-[5/3] xl:aspect-[6/3] ">
            <Image
              src={urlFor(project.imgSrc).url()}
              alt="pokój"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between gap-[16px] mt-[16px]">
            <ProjectGallery
              gallery={project.gallery}
              projectKey={project.slug}
            />
          </div>
        </div>
      </div>
      <PortfolioClient projects={projects} />
    </section>
  );
}
