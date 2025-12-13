import Hero from "./homePage/sections/Hero";
import dynamic from "next/dynamic";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { sanityClient } from "../lib/sanity/client";
import { homePageQuery } from "../lib/sanity/queries";

const DynamicAbout = dynamic(() => import("./homePage/sections/About"));
const DynamicProjects = dynamic(() => import("./homePage/sections/Projects"));
const DynamicProcess = dynamic(() => import("./homePage/sections/Process"));
const DynamicBlog = dynamic(() => import("./homePage/sections/Blog"));
const DynamicFaq = dynamic(() => import("./homePage/sections/Faq"));

export const revalidate = 0;

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function Home() {
  const lang = "en";
  const homePageData = await sanityClient.fetch(homePageQuery);

  const { heroSection } = homePageData;
  const { aboutSection } = homePageData;
  const { projectsSection } = homePageData;
  const { processSection } = homePageData;
  const { blogSection } = homePageData;
  const { faqSection } = homePageData;

  return (
    <>
      <Header lang={lang} />
      <Hero data={heroSection} lang={lang} />
      <DynamicAbout data={aboutSection} lang={lang} />
      <DynamicProjects data={projectsSection} lang={lang} />
      <DynamicProcess data={processSection} lang={lang} />
      <DynamicBlog data={blogSection} lang={lang} />
      <DynamicFaq data={faqSection} lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
