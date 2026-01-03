import { heroSectionData } from "../data/sectionsData/homePage/heroSectionData";
import { aboutSectionData } from "../data/sectionsData/homePage/aboutSectionData";
import { projectsSectionData } from "../data/sectionsData/homePage/projectsSectionData";
import { processSectionData } from "../data/sectionsData/homePage/processSectionData";

import Hero from "./homePage/sections/Hero";
import dynamic from "next/dynamic";

import { sanityClient } from "../../lib/sanity/client";
import { homePageQuery } from "../../lib/sanity/queries";

const DynamicAbout = dynamic(() => import("./homePage/sections/About"));
const DynamicProjects = dynamic(() => import("./homePage/sections/Projects"));
const DynamicProcess = dynamic(() => import("./homePage/sections/Process"));
const DynamicBlog = dynamic(() => import("./homePage/sections/Blog"));
const DynamicFaq = dynamic(() => import("./homePage/sections/Faq"));
const DynamicButtonSection = dynamic(() =>
  import("./homePage/sections/ButtonSection")
);

export const revalidate = 3600;

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function Home({ params }) {
  const getParams = await params;
  const lang = getParams.lang;
  const homePageData = await sanityClient.fetch(homePageQuery);

  const { heroSection } = homePageData;

  const { aboutSection } = homePageData;
  const { projectsSection } = homePageData;
  const { processSection } = homePageData;
  const { blogSection } = homePageData;
  const { faqSection } = homePageData;
  const { buttonSection } = homePageData;

  return (
    <>
      <Hero data={heroSectionData} lang={lang} />
      <div className="relative bg-white top-0 left-0 z-[99]">
        <DynamicAbout data={aboutSectionData} lang={lang} />
        <DynamicProjects data={projectsSectionData} lang={lang} />
        <DynamicProcess data={processSectionData} lang={lang} />
        <DynamicBlog data={blogSection} lang={lang} />
        <DynamicFaq data={faqSection} lang={lang} />
        <DynamicButtonSection data={buttonSection} lang={lang} />
      </div>
    </>
  );
}
