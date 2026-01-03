import { heroSectionData } from "../data/sectionsData/homePage/heroSectionData";
import { aboutSectionData } from "../data/sectionsData/homePage/aboutSectionData";
import { projectsSectionData } from "../data/sectionsData/homePage/projectsSectionData";
import { processSectionData } from "../data/sectionsData/homePage/processSectionData";
import { blogSectionData } from "../data/sectionsData/homePage/blogSectionData";
import { faqSectionData } from "../data/sectionsData/homePage/faqSectionData";
import { buttonSectionData } from "../data/sectionsData/homePage/buttonSectionData";

import Hero from "./homePage/sections/Hero";
import dynamic from "next/dynamic";

const DynamicAbout = dynamic(() => import("./homePage/sections/About"));
const DynamicProjects = dynamic(() => import("./homePage/sections/Projects"));
const DynamicProcess = dynamic(() => import("./homePage/sections/Process"));
const DynamicBlog = dynamic(() => import("./homePage/sections/Blog"));
const DynamicFaq = dynamic(() => import("./homePage/sections/Faq"));
const DynamicButtonSection = dynamic(() =>
  import("./homePage/sections/ButtonSection")
);

export async function generateStaticParams() {
  return [{ lang: "pl" }, { lang: "en" }, { lang: "de" }];
}

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function Home({ params }) {
  const { lang } = await params;

  return (
    <>
      <Hero data={heroSectionData} lang={lang} />
      <div className="relative bg-white top-0 left-0 z-[99]">
        <DynamicAbout data={aboutSectionData} lang={lang} />
        <DynamicProjects data={projectsSectionData} lang={lang} />
        <DynamicProcess data={processSectionData} lang={lang} />
        <DynamicBlog data={blogSectionData} lang={lang} />
        <DynamicFaq data={faqSectionData} lang={lang} />
        <DynamicButtonSection data={buttonSectionData} lang={lang} />
      </div>
    </>
  );
}
