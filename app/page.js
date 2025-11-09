"use client";

import dynamic from "next/dynamic";
import Hero from "./homePage/sections/Hero";

// Lazy load sekcji poza foldem
const About = dynamic(() => import("./homePage/sections/About"), {
  ssr: false,
  loading: () => <p>Ładowanie sekcji About...</p>,
});

const Projects = dynamic(() => import("./homePage/sections/Projects"), {
  ssr: false,
  loading: () => <p>Ładowanie sekcji Projects...</p>,
});

export default function Home() {
  return (
    <>
      {/* Hero widoczny od razu */}
      <Hero />

      {/* Pozostałe sekcje ładowane dynamicznie */}
      <About />
      <Projects />
    </>
  );
}
