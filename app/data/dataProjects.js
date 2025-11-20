import projekt1 from "../../public/projekt2-large.webp";
import projekt2 from "../../public/projekt4-large.webp";
import projekt3 from "../../public/projekt3-large.webp";
import projekt4 from "../../public/projekt1-large.webp";

export default function dataProjects() {
  const projects = [
    {
      id: 1,
      title: "Our project",
      imgSrc: projekt1,
      alt: "pokój1",
      slug: "Warszawa",
    },
    {
      id: 2,
      title: "Our project",
      imgSrc: projekt2,
      alt: "pokój",
      slug: "Warszawa",
    },
    {
      id: 3,
      title: "Our project",

      imgSrc: projekt3,
      alt: "pokój",
      slug: "Warszawa",
    },
    {
      id: 4,
      title: "Our project",
      imgSrc: projekt4,
      alt: "pokój",
      slug: "Warszawa",
    },
  ];
  return projects;
}
