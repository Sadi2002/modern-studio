import { sanityClient } from "../../lib/sanity/client";
import { homePageQuery, portfolioPageQuery } from "../../lib/sanity/queries";

export default async function dataProjects() {
  const homePageData = await sanityClient.fetch(homePageQuery);
  const { projectsSection } = homePageData;

  const portfolioPageData = await sanityClient.fetch(portfolioPageQuery);
  const { portfolioSection } = portfolioPageData;

  const projects = [...projectsSection.projects, ...portfolioSection.projects];

  return projects;
}
