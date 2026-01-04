import { blogSectionData } from "./sectionsData/homePage/blogSectionData";
import { postsSectionData } from "./sectionsData/blogPage/postsSectionData";

export default function dataBlog() {
  const posts = [
    ...(blogSectionData.posts || []),
    ...(postsSectionData.posts || []),
  ];

  return posts;
}
