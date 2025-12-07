import { sanityClient } from "../../lib/sanity/client";
import { homePageQuery } from "../../lib/sanity/queries";

export async function dataProcess() {
  const homePageData = await sanityClient.fetch(homePageQuery);

  console.log("homePageData from Sanity:", homePageData);

  const { processSection } = homePageData || {};

  console.log("processSection:", processSection);

  const process = [...(processSection?.steps || [])];

  console.log("process (steps):", process);

  return process;
}
