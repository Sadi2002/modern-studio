export const dynamic = "force-static";

import { heroSectionData } from "../data/sectionsData/homePage/heroSectionData";
import { aboutSectionData } from "../data/sectionsData/homePage/aboutSectionData";
import { projectsSectionData } from "../data/sectionsData/homePage/projectsSectionData";
import { processSectionData } from "../data/sectionsData/homePage/processSectionData";
import { blogSectionData } from "../data/sectionsData/homePage/blogSectionData";
import { faqSectionData } from "../data/sectionsData/homePage/faqSectionData";
import { buttonSectionData } from "../data/sectionsData/homePage/buttonSectionData";

import Hero from "./homePage/sections/Hero";

import About from "./homePage/sections/About";
import Projects from "./homePage/sections/Projects";
import Process from "./homePage/sections/Process";
import Blog from "./homePage/sections/Blog";
import Faq from "./homePage/sections/Faq";
import ButtonSection from "./homePage/sections/ButtonSection";

export async function generateStaticParams() {
  return [{ lang: "pl" }, { lang: "en" }, { lang: "de" }];
}

export const metadata = {
  title: "Modern Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Modern Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function Home({ params }) {
  const { lang } = await params;

  return (
    <>
      <Hero data={heroSectionData} lang={lang} />
      <div className="relative bg-white top-0 left-0 z-[99]">
        <About data={aboutSectionData} lang={lang} />
        <Projects data={projectsSectionData} lang={lang} />
        <Process data={processSectionData} lang={lang} />
        <Blog data={blogSectionData} lang={lang} />
        <Faq data={faqSectionData} lang={lang} />
        <ButtonSection data={buttonSectionData} lang={lang} />
      </div>
    </>
  );
}
