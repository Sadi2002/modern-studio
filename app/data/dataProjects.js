import { sanityClient } from "../../lib/sanity/client";
import { homePageQuery, portfolioPageQuery } from "../../lib/sanity/queries";

export default async function dataProjects() {
  try {
    const [homePageData, portfolioPageData] = await Promise.all([
      sanityClient.fetch(homePageQuery),
      sanityClient.fetch(portfolioPageQuery),
    ]);

    const projects = [
      ...(homePageData?.projectsSection?.projects || []),
      ...(portfolioPageData?.portfolioSection?.projects || []),
    ];

    return projects;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
}
