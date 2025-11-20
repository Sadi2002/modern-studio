import Image from "next/image";
import arrow from "../../../public/arrow.png";
import projekt1 from "../../../public/projekt3-large.webp";
import projekt2 from "../../../public/projekt2-large.webp";
import projekt3 from "../../../public/projekt4-large.webp";
import DataProjects from "../../data/dataProjects";

const projects = DataProjects();

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Project({ params }) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  return (
    <section className="flex flex-col pb-[150px]">
      <div className="flex  w-full justify-between pt-[200px] mb-[120px] px-[70px]">
        <h1 className="text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[clamp(2.1rem,7.5vw,2.5rem)] font-medium mb-[30px] max-w-[500px] lg:text-[clamp(2rem,4.5vw,80px)] lg:leading-[clamp(2rem,4.5vw,80px)] lg:max-w-[700px] lg:w-[50%] 2xl:max-w-[850px] xl:font-normal  uppercase">
          {project.title}
        </h1>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight lg:w-[50%] max-w-[700px] ">
          {project.description}
        </p>
      </div>
      <div className="flex w-full justify-between mb-[80px] px-[70px]">
        <div>
          <span className="font-medium-font-weight text-[clamp(12px,3.35vw,20px)] leading-[clamp(0.75rem,10vw,20px)]">
            {project.location}
          </span>
        </div>
        <div className="flex flex-col text-[clamp(12px,3.35vw,20px)] leading-[clamp(0.75rem,10vw,20px)] gap-[16px]">
          <span className="font-medium-font-weight">Data completed</span>
          <span className="font-light-font-weight">{project.year}</span>
        </div>
        <div className="flex flex-col text-[clamp(12px,3.35vw,20px)] leading-[clamp(0.75rem,10vw,20px)] gap-[16px]">
          <span className="font-medium-font-weight">Project Type</span>
          <span className="font-light-font-weight">{project.type}</span>
        </div>
        <div className="flex flex-col text-[clamp(12px,3.35vw,20px)] leading-[clamp(0.75rem,10vw,20px)] gap-[16px]">
          <span className="font-medium-font-weight">Collaborators</span>
          {project.collaborators.map((collaborator, index) => (
            <span key={index} className="font-light-font-weight">
              {collaborator.title}
            </span>
          ))}
        </div>
      </div>
      <div className="px-[70px]">
        <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] after:w-full flex items-center ml-auto">
          View details{" "}
          <Image
            src={arrow}
            alt="Arrow Icon"
            className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative "
          />
        </button>
      </div>
      <div className="px-[30px] mt-[24px]">
        <div className="mt-[16px]">
          <div className="relative w-full aspect-[3/1.7] ">
            <Image
              src={project.imgSrc}
              alt="pokój"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between gap-[16px] mt-[16px]">
            <div className="relative w-full aspect-[6/4] ">
              <Image
                src={project.imgSrc}
                alt="pokój"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[8/10]">
              <Image
                src={project.imgSrc}
                alt="pokój"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
