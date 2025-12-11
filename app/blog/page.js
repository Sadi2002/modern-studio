import Image from "next/image";
import projekt2 from "../../public/projekt2-large.webp";
import projekt3 from "../../public/projekt3-large.webp";
import projekt4 from "../../public/projekt4-large.webp";
import Link from "next/link";
import dataBlog from "../data/dataBlog";
import { urlFor } from "../../lib/sanity/client";
import { blogPageQuery } from "@/lib/sanity/queries";
import { sanityClient } from "../../lib/sanity/client";
import BlogClient from "./BlogClient";

export const revalidate = 0;

export default async function Blog() {
  const blogPageData = await sanityClient.fetch(blogPageQuery);
  const { postsSection } = blogPageData;
  const posts = await dataBlog();

  return (
    <BlogClient
      postsSection={postsSection}
      posts={posts}
      projekt2={projekt2}
      projekt3={projekt3}
      projekt4={projekt4}
    />
  );
}
