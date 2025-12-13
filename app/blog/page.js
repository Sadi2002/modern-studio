import dataBlog from "../data/dataBlog";
import { urlFor } from "../../lib/sanity/client";
import { blogPageQuery } from "@/lib/sanity/queries";
import { sanityClient } from "../../lib/sanity/client";
import BlogList from "./BlogList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const revalidate = 0;

export default async function Blog() {
  const lang = "en";
  const blogPageData = await sanityClient.fetch(blogPageQuery);
  const { postsSection } = blogPageData;
  const posts = await dataBlog();
  console.log(posts);

  return (
    <>
      <Header lang={"en"} />
      <section className="px-[20px] pt-[100px] md:px-[40px] lg:pt-[200px] lg:px-[50px] mb-[80px] xl:mb-[150px] relative">
        <div className="flex flex-col gap-[40px] justify-start lg:flex-row lg:justify-between lg:items-center lg:mb-[80px]">
          <div>
            <h1 className="text-[clamp(36px,8vw,45px)] leading-[clamp(36px,8vw,45px)] uppercase font-medium mb-[20px] max-w-[500px] xl:max-w-[700px] lg:text-[45px] lg:leading-[45px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] 2xl:max-w-[900px] 2xl:text-[80px] 2xl:leading-[80px]  2xl:font-normal">
              {postsSection?.sectionTitle?.[lang]}
            </h1>
            <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight max-w-[600px]  ">
              {postsSection?.sectionDescription?.[lang]}
            </p>
          </div>
        </div>
        <BlogList posts={posts} postsSection={postsSection} lang={lang} />
      </section>
      <Footer lang={"en"} />
    </>
  );
}
