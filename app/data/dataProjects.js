import { projectsSectionData } from "../data/sectionsData/homePage/projectsSectionData";
import { portfolioSectionData } from "../data/sectionsData/portfolioPage/portfolioSectionData";

export default function dataProjects() {
  const projects = [
    ...(projectsSectionData?.projects || []),
    ...(portfolioSectionData?.projects || []),
  ];

  return projects;
}
