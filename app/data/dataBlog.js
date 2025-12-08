import { sanityClient } from "../../lib/sanity/client";
import { blogPageQuery, homePageQuery } from "../../lib/sanity/queries";

export default async function dataBlog() {
  const homePageData = await sanityClient.fetch(homePageQuery);
  const { blogSection } = homePageData;

  const blogPageData = await sanityClient.fetch(blogPageQuery);
  const { postsSection } = blogPageData;

  const posts = [...blogSection.posts, ...postsSection.posts];

  console.log(posts);
  return posts;
}
