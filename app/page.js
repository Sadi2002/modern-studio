import Hero from "./homePage/sections/Hero";
import dynamic from "next/dynamic";

const DynamicAbout = dynamic(() => import("./homePage/sections/About"));
const DynamicProjects = dynamic(() => import("./homePage/sections/Projects"));
const DynamicProcess = dynamic(() => import("./homePage/sections/Process"));
const DynamicBlog = dynamic(() => import("./homePage/sections/Blog"));
const DynamicFaq = dynamic(() => import("./homePage/sections/Faq"));

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicAbout />
      <DynamicProjects />
      {/* <DynamicProcess />
      <DynamicBlog />
      <DynamicFaq /> */}
    </>
  );
}
