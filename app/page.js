import Hero from "./homePage/sections/Hero";
import dynamic from "next/dynamic";

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
  const homePageData = await sanityClient.fetch(homePageQuery);
  const { sekcje } = homePageData;

  console.log(sekcje);
  return (
    <>
      <Hero data={sekcje} />
      <DynamicAbout />
      <DynamicProjects />
      <DynamicProcess />
      <DynamicBlog />
      <DynamicFaq />
    </>
  );
}
