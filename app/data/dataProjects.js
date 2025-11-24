import { sanityClient } from "../../lib/sanity/client";
import { homePageQuery } from "../../lib/sanity/queries";

export default async function dataProjects() {
  const homePageData = await sanityClient.fetch(homePageQuery);
  const { projectsSection } = homePageData;

  const projects = [...projectsSection.projects];

  console.log(projects);
  return projects;
}
