import { sanityClient } from "../../lib/sanity/client";
import { homePageQuery } from "../../lib/sanity/queries";

export async function dataProcess() {
  try {
    const homePageData = await sanityClient.fetch(homePageQuery);

    const process = [...(homePageData?.processSection?.steps || [])];

    return process;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
}
