import Image from "next/image";
import Button from "../../../components/Button";
import ArrowWhite from "../../../../public/arrow-right-white.png";
import DataProjects from "../../../data/dataProjects";
import ProjectLink from "@/app/components/ProjectLink";
import FadeInMobile from "@/app/components/FadeInMobile";

export default async function Projects({ data, lang }) {
  const project = await DataProjects();

  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop mb-[80px] xl:mb-[150px]">
      <FadeInMobile>
        <h3 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium uppercase relative after:content-['(04)'] after:absolute after:bottom-[clamp(15px,4vw,25px)] md:after:bottom-[clamp(20px,4vw,25px)] xl:after:bottom-[clamp(20px,4vw,30px)] 2xl:after:top-[-35px]  after:text-[10px] mb-5 xl:text-6xl md:after:text-[12px] xl:after:text-[14px]  xl:mb-[20px] 2xl:text-[80px] 2xl:leading-[80px] lg:font-normal 2xl:max-w-[1200px]">
          {data?.title?.[lang]}
        </h3>
      </FadeInMobile>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:w-[calc(50%-10px)]">
          <div className="max-w-[80%] mb-[50px] lg:mb-[50px] lg:max-w-[100%]">
            <div className="relative aspect-8/7 overflow-hidden">
              <ProjectLink
                href={`/${lang}/portfolio/${project[0]?.slug.current}`}
                imageProps={{
                  src: project[0]?.imgSrc,
                  alt: project[0]?.alt?.[lang],
                  slug: project[0]?.slug.current,
                  lang,
                  className:
                    "transition-transform duration-500 ease-out hover:scale-105",
                }}
              >
                <Image
                  src={project[0]?.imgSrc}
                  alt={project[0]?.alt?.[lang] || ""}
                  fill
                  placeholder="blur"
                  className="object-cover absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-out hover:scale-105"
                />
              </ProjectLink>
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight gap-[20px]">
              <span className="font-medium-font-weight">
                {project[0]?.title?.[lang]}, {project[0]?.location?.[lang]}
              </span>
              <span className="font-medium-font-weight">
                {project[0]?.year}
              </span>
            </div>
          </div>

          <div className="w-[86%] flex flex-col items-end self-end mb-[50px] lg:mb-[0px] lg:w-[100%] lg:h-full">
            <div className="flex flex-col justify-end w-full relative aspect-5/3 lg:h-full overflow-hidden">
              <ProjectLink
                href={`/${lang}/portfolio/${project[1]?.slug.current}`}
                imageProps={{
                  src: project[1]?.imgSrc,
                  alt: project[1]?.alt?.[lang],
                  slug: project[1]?.slug.current,
                  lang,
                  className:
                    "transition-transform duration-500 ease-out hover:scale-105",
                }}
              >
                <Image
                  src={project[1]?.imgSrc}
                  alt={project[1]?.alt?.[lang] || ""}
                  fill
                  placeholder="blur"
                  className="object-cover absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-out hover:scale-105"
                />
              </ProjectLink>
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] gap-[20px]">
              <span className="font-medium-font-weight ">
                {project[1]?.title?.[lang]}, {project[1]?.location?.[lang]}
              </span>
              <span className="font-medium-font-weight">
                {project[1]?.year}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:w-[calc(50%-10px)]">
          <div className="w-full mb-[50px] lg:mb-[50px]">
            <div className="relative aspect-8/5 overflow-hidden">
              <ProjectLink
                href={`/${lang}/portfolio/${project[2]?.slug.current}`}
                imageProps={{
                  src: project[2]?.imgSrc,
                  alt: project[2]?.alt?.[lang],
                  slug: project[2]?.slug.current,
                  lang,
                  className:
                    "transition-transform duration-500 ease-out hover:scale-105",
                }}
              >
                <Image
                  src={project[2]?.imgSrc}
                  alt={project[2]?.alt?.[lang] || ""}
                  fill
                  placeholder="blur"
                  className="object-cover absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-out hover:scale-105"
                />
              </ProjectLink>
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] gap-[20px]">
              <span className="font-medium-font-weight">
                {project[2]?.title?.[lang]}, {project[2]?.location?.[lang]}
              </span>
              <span className="font-medium-font-weight">
                {project[2]?.year}
              </span>
            </div>
          </div>

          <div className="max-w-[78%] mb-[30px] lg:w-[100%] lg:max-w-[100%] lg:mb-[60px]">
            <div className="relative aspect-7/8 lg:aspect-8/7 overflow-hidden">
              <ProjectLink
                href={`/${lang}/portfolio/${project[3]?.slug.current}`}
                imageProps={{
                  src: project[3]?.imgSrc,
                  alt: project[3]?.alt?.[lang],
                  slug: project[3]?.slug.current,
                  lang,
                  className:
                    "transition-transform duration-500 ease-out hover:scale-105",
                }}
              >
                <Image
                  src={project[3]?.imgSrc}
                  alt={project[3]?.alt?.[lang] || ""}
                  fill
                  placeholder="blur"
                  className="object-cover absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-out hover:scale-105"
                />
              </ProjectLink>
            </div>

            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] gap-[20px]">
              <span className="font-medium-font-weight">
                {project[3]?.title?.[lang]}, {project[3]?.location?.[lang]}
              </span>
              <span className="font-medium-font-weight ">
                {project[3]?.year}
              </span>
            </div>
          </div>

          <div className="leading-[26px] flex flex-col gap-[40px] items-end lg:gap-[40px] xl:gap-[50px] lg:justift-start md:items-start">
            <FadeInMobile>
              <p className="self-start text-[clamp(14px,3.5vw,18px)] leading-[clamp(20px,10vw,24px)] min-[900px]:max-w-[750px] lg:ml-10 lg:leading-[28px] md:leading-[28px] md:max-w-[600px] font-light-font-weight  xl:max-w-[600px] xl:text-[20px] xl:leading-[34px] 2xl:text-[23px] 2xl:leading-[36px] 2xl:max-w-[800px]">
                {data?.subtitle?.[lang]}
              </p>
            </FadeInMobile>

            <Button
              arrow={ArrowWhite}
              linkTo={`/${lang}/${data?.button?.buttonLink}`}
              bgColor="main-black"
              textColor="main-white"
              additionalStyles="md:self-end"
            >
              {data?.button?.buttonLabel?.[lang]}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
