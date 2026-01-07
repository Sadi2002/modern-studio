import ArrowWhite from "../../../../public/arrow-right-white.png";

import ProjectGallery from "../../../components/Gallery";
import PortfolioClient from "../PortfolioClient";

import dataProjects from "../../../data/dataProjects";

import Button from "@/app/components/Button";
import PortfolioDetails from "../PortfolioDetails";
import Model from "./Model";

import HeroImageTransition from "@/app/components/HeroImageTransition";
import HeroImage from "@/app/components/HeroImage";
import RevealAfterTransition from "@/app/components/RevealAfterTransition";
import FadeInMobile from "@/app/components/FadeInMobile";
import { projectPageTextsData } from "@/app/data/sectionsData/singleProject/projectPageTextsData";

export async function generateStaticParams() {
  const langs = ["pl", "en", "de"];
  const projects = dataProjects();

  return langs.flatMap((lang) =>
    projects.map((project) => ({
      lang,
      slug: project.slug.current,
    }))
  );
}

export default async function Project({ params }) {
  const { lang, slug } = await params;

  const portfolioPageData = projectPageTextsData;

  const { beforeProjectsText, detailsLabel, button, beforePortfolioText } =
    portfolioPageData;

  const projects = dataProjects();

  const project = projects.find((project) => project.slug.current === slug);

  const relatedProjects = projects.filter((p) => p.slug.current !== slug);

  const collaborators = project?.collaborators || [];

  console.log(project);

  return (
    <section className="flex flex-col pb-[0px]">
      <HeroImageTransition />
      <div
        id="start"
        className="flex  w-full justify-between pt-[100px] md:pt-[150px] 2xl:pt-[200px] px-[20px] mb-[40px] lg:mb-[80px] xl:mb-[150px] md:px-[40px] lg:px-[50px] flex-col lg:flex-row "
      >
        <h1 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium uppercase relative mb-5 xl:text-6xl  xl:mb-[20px] 2xl:text-[clamp(60px,4.3vw,5rem)] 2xl:leading-[80px] lg:font-normal 2xl:max-w-[1200px]">
          <RevealAfterTransition delay={0} stagger={50}>
            {project?.title?.[lang]}
          </RevealAfterTransition>
        </h1>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight lg:w-[50%] max-w-[700px] ">
          <RevealAfterTransition delay={0} stagger={5}>
            {project?.description?.[lang]}
          </RevealAfterTransition>
        </p>
      </div>
      <div className="flex flex-col gap-[40px] 2xl:gap-0 lg:flex-row w-full justify-between mb-[40px] xl:mb-[80px] px-[20px] md:px-[40px] lg:px-[50px] 2xl:px-[50px]">
        {project?.location && (
          <div>
            <span className="font-medium-font-weight text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px]">
              <RevealAfterTransition delay={0} stagger={50}>
                {project?.location?.[lang]}
              </RevealAfterTransition>
            </span>
          </div>
        )}

        {project?.dataCompleted && (
          <div className="flex flex-col text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] gap-[5px] 2xl:gap-[10px]">
            <span className="font-medium-font-weight">
              <RevealAfterTransition delay={0} stagger={50}>
                {project?.dataCompleted?.[lang]}
              </RevealAfterTransition>
            </span>
            <span className="font-light-font-weight text-[14px] 2xl:text-[16px]">
              <RevealAfterTransition delay={0} stagger={50}>
                {String(project?.year)}
              </RevealAfterTransition>
            </span>
          </div>
        )}

        {project?.typeTitle && (
          <div className="flex flex-col text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] gap-[5px] 2xl:gap-[10px]">
            <span className="font-medium-font-weight">
              <RevealAfterTransition delay={0} stagger={50}>
                {project?.typeTitle?.[lang]}
              </RevealAfterTransition>
            </span>
            <span className="font-light-font-weight text-[14px] 2xl:text-[16px]">
              <RevealAfterTransition delay={0} stagger={50}>
                {project?.type?.[lang]}
              </RevealAfterTransition>
            </span>
          </div>
        )}

        {project?.collaboratorsTitle && (
          <div className="flex flex-col text-[clamp(16px,4vw,20px)] leading-[clamp(0.75rem,10vw,20px)] 2xl:text-[20px] gap-[5px] 2xl:gap-[10px]">
            {collaborators.length > 0 && (
              <>
                <span className="font-medium-font-weight">
                  <RevealAfterTransition delay={0} stagger={50}>
                    {project?.collaboratorsTitle?.[lang]}
                  </RevealAfterTransition>
                </span>
                {collaborators.map((c, idx) => (
                  <span
                    key={idx}
                    className="font-light-font-weight text-[14px] 2xl:text-[16px]"
                  >
                    <RevealAfterTransition delay={0} stagger={50}>
                      {c?.title?.[lang]}
                    </RevealAfterTransition>
                  </span>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      {project?.details?.length > 0 && (
        <PortfolioDetails
          lang={lang}
          details={project.details}
          detailsLabel={detailsLabel}
        />
      )}

      <div className="px-[10px] md:px-[20px] 2xl:px-[30px] mt-[10px] md:mt-[16px]">
        <div className="mt-[30px]">
          <div
            data-hero-image
            className="relative w-full aspect-[8/6] lg:aspect-[6/3] "
          >
            <HeroImage src={project.imgSrc} alt="pokój" />

            <Model imgSrc={project.imgSrc} />
          </div>
          <div className="flex justify-between gap-[10px] md:gap-[16px] mt-[10px] md:mt-[16px]">
            <ProjectGallery
              gallery={project.gallery}
              projectKey={project.slug}
            />
          </div>
        </div>
        <div className="flex justify-end mt-[30px] px-[10px] md:px-[20px] 2xl:px-[40px] ">
          <Button
            arrow={ArrowWhite}
            linkTo={`/${lang}/${button?.beforePortfolioButtonLink}`}
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="md:self-end"
          >
            {button?.beforePortfolioButton?.[lang]}
          </Button>
        </div>
      </div>

      <div className="mt-[80px] lg:mt-[0]">
        <FadeInMobile>
          <h3 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium uppercase relative mb-5 lg:text-6xl  lg:mb-10 2xl:mb-[50px] 2xl:text-[80px] 2xl:font-normal mx-margin-mobile md:mx-tablet lg:hidden">
            {beforePortfolioText?.[lang]}
          </h3>
        </FadeInMobile>
        <PortfolioClient
          projects={relatedProjects}
          isBtn={false}
          isProject={true}
          lang={lang}
          beforeProjectsText={beforeProjectsText}
        />
      </div>
    </section>
  );
}
