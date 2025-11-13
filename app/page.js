"use client";
import Hero from "./homePage/sections/Hero";
import dynamic from "next/dynamic";

const DynamicAbout = dynamic(() => import("./homePage/sections/About"), {
  ssr: false,
  loading: () => <div>t</div>,
});
const DynamicProjects = dynamic(() => import("./homePage/sections/Projects"), {
  ssr: false,
  loading: () => <div>t</div>,
});

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicAbout />
      <DynamicProjects />
    </>
  );
}
