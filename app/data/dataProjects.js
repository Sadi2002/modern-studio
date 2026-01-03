import { sanityClient } from "../../lib/sanity/client";
import { homePageQuery, portfolioPageQuery } from "../../lib/sanity/queries";
import { projectsSectionData } from "../data/sectionsData/homePage/projectsSectionData";
import { portfolioSectionData } from "../data/sectionsData/portfolioPage/portfolioSectionData";

console.log(portfolioSectionData);

export default async function dataProjects() {
  try {
    const [homePageData, portfolioPageData] = await Promise.all([
      sanityClient.fetch(homePageQuery),
      sanityClient.fetch(portfolioPageQuery),
    ]);

    const projects = [
      ...(projectsSectionData?.projects || []),
      ...(portfolioSectionData?.projects || []),
    ];

    return projects;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
}
