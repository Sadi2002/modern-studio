import { sanityClient } from "../../lib/sanity/client";
import { blogPageQuery, homePageQuery } from "../../lib/sanity/queries";
import { blogSectionData } from "./sectionsData/homePage/blogSectionData";

export default async function dataBlog() {
  try {
    const [homePageData, blogPageData] = await Promise.all([
      sanityClient.fetch(homePageQuery),
      sanityClient.fetch(blogPageQuery),
    ]);

    const posts = [
      ...(blogSectionData.posts || []),
      ...(blogPageData?.postsSection?.posts || []),
    ];

    return posts;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
}
