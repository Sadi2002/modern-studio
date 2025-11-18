import Hero from "./homePage/sections/Hero";
import dynamic from "next/dynamic";
import LazyComponent from "./components/lazyComponent";

const DynamicAbout = dynamic(() => import("./homePage/sections/About"));
const DynamicProjects = dynamic(() => import("./homePage/sections/Projects"));
const DynamicProcess = dynamic(() => import("./homePage/sections/Process"));

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <LazyComponent height={300}>
        <DynamicAbout />
      </LazyComponent>

      <LazyComponent height={500}>
        <DynamicProjects />
      </LazyComponent>
      <LazyComponent height={500}>
        <DynamicProcess />
      </LazyComponent>
    </>
  );
}
