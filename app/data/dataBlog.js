import { sanityClient } from "../../lib/sanity/client";
import { homePageQuery } from "../../lib/sanity/queries";

export default async function dataBlog() {
  const homePageData = await sanityClient.fetch(homePageQuery);
  const { blogSection } = homePageData;

  const posts = [...blogSection.posts];

  return posts;
}
