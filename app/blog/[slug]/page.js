import Image from "next/image";
import Link from "next/link";
import ArrowWhite from "../../../public/arrow-right-white.png";
import dataBlog from "@/app/data/dataBlog";
import { sanityClient } from "../../../lib/sanity/client";
import { blogPostQuery } from "@/lib/sanity/queries";
import { urlFor } from "../../../lib/sanity/client";
import projekt1 from "../../../public/projekt1-large.webp";
import projekt2 from "../../../public/projekt2-large.webp";
import projekt3 from "../../../public/projekt3-large.webp";
import projekt4 from "../../../public/projekt4-large.webp";

export const revalidate = 0;

export async function generateStaticParams() {
  const posts = await dataBlog();

  return posts.map((post) => ({ slug: post.slug.current }));
}

export default async function Post({ params }) {
  const lang = "en";
  const { slug } = await params;
  const posts = await dataBlog();

  const blog = posts.find((post) => post.slug.current === slug);

  const getImg = (post, fallback) => {
    if (post?.imgSrc) {
      try {
        return urlFor(post.imgSrc).url();
      } catch {
        return fallback;
      }
    }
    return fallback;
  };

  return (
    <section className="pt-[100px] px-[20px] md:px-[40px] lg:px-[50px] md:pt-[150px] lg:pt-[150px] 2xl:pt-[200px] w-full mb-[80px] lg:mb-[80px] relative">
      <div>
        <div>
          <div className=" flex flex-col lg:flex-row justify-between lg:items-end mb-[20px] md:mb-[40px] lg:mb-[0px] gap-[20px]">
            <div className=" lg:max-w-[1000px]  2xl:max-w-[570px] ">
              <h1 className="text-[clamp(30px,8vw,45px)] leading-[clamp(36px,8vw,45px)] font-medium mb-[20px] xl:mb-[20px] max-w-[500px] lg:text-[45px] lg:leading-[45 px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] xl:max-w-[1200px] 2xl:max-w-[1200px] 2xl:font-normal 2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[900px] uppercase">
                {blog?.title?.[lang]}
              </h1>
              <p className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px]  lg:max-w-[600px]">
                {blog?.description?.[lang]}
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-col lg:items-end lg:gap-[20px]  mb-[40px] lg:mb-[80px]">
            <div className="flex gap-[20px] justify-between lg:justify-end w-full lg:w-[40%] lg:relative lg:top-[-25px]">
              <div className="flex gap-[5px] ">
                <span className="font-medium-font-weight">
                  {blog?.category?.[lang]}
                </span>
              </div>
              <div className="flex gap-[5px]">
                <span className="font-light-font-weight">{blog?.date}</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full mb-[10px] lg:mb-[0]">
              <Image
                src={urlFor(blog.imgSrc).url()}
                alt="projekt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] mb-[80px] xl:mb-[150px] max-w-[850px]">
          {blog.longDescription.contentBlocks.map((content, index) => {
            return (
              <div key={index}>
                <h3 className="text-[30px] mb-[20px] font-medium">
                  {content?.title?.[lang]}
                </h3>
                <div className="flex flex-col gap-[16px] font-light-font-weight">
                  {content.paragraphs.map((paragraph, pIndex) => {
                    return <p key={pIndex}>{paragraph?.[lang]}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-[clamp(36px,8vw,45px)] leading-[clamp(36px,8vw,45px)] font-medium mb-[20px] xl:mb-[20px] max-w-[500px] lg:text-[45px] lg:leading-[45 px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] xl:max-w-[600px] 2xl:max-w-[1200px] 2xl:font-normal 2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[850px] uppercase">
          SEE OTHER BLOGS
        </h3>
        <div className="flex justify-end">
          <Link
            href="/blog"
            className="bg-main-black mb-[40px] rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-main-white ml-auto mr-0 font-medium flex items-center md:ml-0 text-[clamp(0.75rem,3.35vw,1rem)] md:flex md:max-h-[50px] self-end"
          >
            Zobacz wszystkie
            <Image
              src={ArrowWhite}
              alt="strzałka"
              className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative "
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between lg:flex-row">
          {/* 1 kolumna */}

          <div className="w-full mb-[50px] max-w-[80%] lg:max-w-[100%] lg:mb-[0] lg:w-[39%] inline-block">
            <Link href={`${posts[0]?.slug.current}`}>
              <div className="aspect-[8/7] lg:aspect-[8/8] lg:max-w-[100%] relative xl:aspect-[8/7]">
                <Image
                  src={posts[0] ? getImg(posts[0], projekt3) : projekt3}
                  alt={
                    posts[0]?.alt?.[lang] || posts[0]?.title?.[lang] || "pokoj"
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[65%]">
                  {posts[0]?.title?.[lang] ||
                    "Designing a Luxury Mediterranean Villa"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {posts[0]?.date?.[lang] || "March 2025"}
                </span>
              </div>
            </Link>
          </div>

          {/* 2 kolumna */}
          <div className="w-full mb-[50px] max-w-[86%] ml-auto lg:ml-0 flex lg:max-w-[100%] lg:mb-[0] lg:w-[30%] inline-block">
            <Link href={`${posts[1]?.slug.current}`}>
              <div className="flex lg:block aspect-[5/3]  lg:aspect-[8/5] relative ">
                <Image
                  src={posts[1] ? getImg(posts[1], projekt2) : projekt2}
                  alt={
                    posts[1]?.alt?.[lang] || posts[1]?.title?.[lang] || "pokoj"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="flex lg:flex-col gap-[4px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[70%]">
                {posts[1]?.title?.[lang] ||
                  "Maximizing Light and Views in Your Mallorca Home"}
              </span>
              <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                {posts[1]?.date?.[lang] || "January 2025"}
              </span>
            </div>
          </div>

          {/* 3 kolumna */}
          <div className="max-w-[78%] lg:max-w-[100%] lg:w-[20%] inline-block xl:w-[20%] ">
            <Link href={`${posts[2]?.slug.current}`}>
              <div className="aspect-[7/8]  lg:aspect-[6/8] xl:aspect-[6/8] relative ">
                <Image
                  src={posts[2] ? getImg(posts[2], projekt4) : projekt4}
                  alt={
                    posts[2]?.alt?.[lang] || posts[2]?.title?.[lang] || "pokoj"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[85%]">
                {posts[2]?.title?.[lang] ||
                  "Materials and Finishes Inspired by Mallorca."}
              </span>
              <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                {posts[2]?.date?.[lang] || "August 2024"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
