import { sanityClient } from "../../lib/sanity/client";
import { blogPageQuery, homePageQuery } from "../../lib/sanity/queries";

export default async function dataBlog() {
  try {
    const [homePageData, blogPageData] = await Promise.all([
      sanityClient.fetch(homePageQuery),
      sanityClient.fetch(blogPageQuery),
    ]);

    const posts = [
      ...(homePageData?.blogSection?.posts || []),
      ...(blogPageData?.postsSection?.posts || []),
    ];

    return posts;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
}
