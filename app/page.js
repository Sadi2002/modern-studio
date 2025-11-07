import About from "./homePage/sections/About";
import Hero from "./homePage/sections/Hero";
import Projects from "./homePage/sections/Projects";

export const metadata = {
  title: "Sadowski Studio",
  description: "Strona portfolio Sadowski Studio",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}
