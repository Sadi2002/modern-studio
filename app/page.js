"use client";
import Hero from "./homePage/sections/Hero";
import dynamic from "next/dynamic";

const DynamicAbout = dynamic(() => import("./homePage/sections/About"), {
  ssr: false,
});
const DynamicProjects = dynamic(() => import("./homePage/sections/Projects"), {
  ssr: false,
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
