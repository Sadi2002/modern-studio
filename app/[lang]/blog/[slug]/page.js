import Image from "next/image";
import Link from "next/link";
import ArrowWhite from "../../../../public/arrow-right-white.png";
import dataBlog from "@/app/data/dataBlog";
import { sanityClient } from "../../../../lib/sanity/client";
import { blogPageQuery, blogPostQuery } from "@/lib/sanity/queries";
import { urlFor } from "../../../../lib/sanity/client";
import projekt1 from "../../../../public/projekt1-large.webp";
import projekt2 from "../../../../public/projekt2-large.webp";
import projekt3 from "../../../../public/projekt3-large.webp";
import projekt4 from "../../../../public/projekt4-large.webp";
import Button from "@/app/components/Button";

export const revalidate = 0;

export async function generateStaticParams() {
  const posts = await dataBlog();

  return posts.map((post) => ({ slug: post.slug.current }));
}

export default async function Post({ params }) {
  const getParams = await params;
  const lang = getParams.lang;
  const blogPageData = await sanityClient.fetch(blogPageQuery);

  function getRandomPosts(posts, count) {
    return [...posts].sort(() => Math.random() - 0.5).slice(0, count);
  }

  const { postsSection } = blogPageData;

  console.log(postsSection);

  const whatsLanguage = lang === "en" ? "/blog" : `/${lang}/blog`;

  console.log(lang);

  const { slug } = await params;
  const posts = await dataBlog();

  console.log(posts);

  const blog = posts.find((post) => post.slug.current === slug);
  const relatedPosts = getRandomPosts(
    posts.filter((post) => post.slug.current !== slug),
    3
  );

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
    <section className="pt-[100px] px-[20px] md:px-[40px] lg:px-[50px] md:pt-[150px] 2xl:pt-[200px] w-full mb-[80px] lg:mb-[80px] xl:mb-[150px] relative">
      <div>
        <div>
          <div className=" flex flex-col lg:flex-row justify-between lg:items-end mb-[40px] md:mb-[40px] lg:mb-[0px] gap-[20px]">
            <div className=" lg:max-w-[1000px] 2xl:max-w-[1200px]">
              <h1 className="text-[clamp(23px,7vw,36px)] leading-[clamp(32px,10vw,42px)] font-medium mb-[20px] xl:mb-[20px] max-w-[600px] lg:text-[45px] lg:leading-[55px] lg:max-w-[600px] lg:w-[100%] xl:text-[60px] xl:leading-[65px] xl:max-w-[750px] 2xl:max-w-[1000px] lg:font-normal 2xl:text-[clamp(60px,4.3vw,5rem)] 2xl:leading-[clamp(60px,5vw,6rem)] ">
                {blog?.title?.[lang]}
              </h1>
              <p className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] lg:max-w-[580px] 2xl:max-w-[800px]">
                {blog?.description?.[lang]}
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-col lg:items-end lg:gap-[56px]  mb-[40px] lg:mb-[80px]">
            <div className="flex justify-between lg:justify-end w-full lg:w-[40%] lg:relative lg:top-[-25px] flex flex-col lg:flex-row lg:items-center gap-[5px] lg:gap-[10px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
              <div className="flex gap-[5px] ">
                <span className="font-medium-font-weight">
                  {blog?.category?.[lang]}
                </span>
              </div>
              <div className="flex gap-[5px]">
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {blog?.date?.[lang]}
                </span>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full mb-[5px] lg:mb-[0]">
              <Image
                src={urlFor(blog.imgSrc).url()}
                alt="projekt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] mb-[80px] xl:mb-[150px] max-w-[850px] 2xl:max-w-[1000px]">
          {blog.longDescription.contentBlocks.map((content, index) => {
            return (
              <div key={index}>
                <h3 className="mb-[20px] text-[clamp(23px,5.5vw,36px)] leading-[clamp(32px,7vw,42px)] md:leading-[clamp(36px,10vw,42px)] max-w-[85%] md:max-w-[75%] font-medium-font-weight lg:font-normal ">
                  {content?.title?.[lang]}
                </h3>
                <div className="flex flex-col gap-[16px] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
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
        <h3 className="text-[clamp(1.5rem,8vw,3rem)] uppercase leading-[clamp(2.2rem,10vw,3.5rem)] font-medium mb-[20px] xl:mb-[20px] max-w-[500px] lg:text-[45px] lg:leading-[45 px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] xl:max-w-[600px] 2xl:max-w-[1200px] 2xl:font-normal 2xl:text-[clamp(60px,4.3vw,5rem)] 2xl:leading-[80px] 2xl:w-[850px] uppercase">
          {postsSection?.seeOtherBlogs?.seeOtherBlogsLabel?.[lang]}
        </h3>
        <div className="hidden lg:flex justify-end">
          <Button
            arrow={ArrowWhite}
            linkTo={`/${lang}/${postsSection?.seeOtherBlogs?.button?.seeOtherBlogsButtonLink}`}
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="ml-auto mr-0 mb-[40px] md:max-h-[50px] self-end"
          >
            {
              postsSection?.seeOtherBlogs?.button?.seeOtherBlogsButtonLabel?.[
                lang
              ]
            }
          </Button>
        </div>
        <div className="flex flex-col justify-between lg:flex-row mb-[40px] lg:mb-0">
          {/* 1 kolumna */}

          <div className="w-full mb-[50px] max-w-[80%] lg:max-w-[100%] lg:mb-[0] lg:w-[39%] inline-block">
            <Link href={`${posts[0]?.slug.current}`}>
              <div className="aspect-[8/7] lg:aspect-[8/8] lg:max-w-[100%] relative xl:aspect-[8/7]">
                <Image
                  src={
                    relatedPosts[0]
                      ? getImg(relatedPosts[0], projekt3)
                      : projekt3
                  }
                  alt={
                    relatedPosts[0]?.alt?.[lang] ||
                    relatedPosts[0]?.title?.[lang] ||
                    "pokoj"
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[65%]">
                  {relatedPosts[0]?.title?.[lang] ||
                    "Designing a Luxury Mediterranean Villa"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {relatedPosts[0]?.date?.[lang] || "March 2025"}
                </span>
              </div>
            </Link>
          </div>

          {/* 2 kolumna */}
          <div className="w-full mb-[50px] max-w-[86%] ml-auto lg:ml-0 flex lg:max-w-[100%] lg:mb-[0] lg:w-[30%] inline-block">
            <Link href={`${relatedPosts[1]?.slug.current}`}>
              <div className="flex lg:block aspect-[5/3]  lg:aspect-[8/5] relative ">
                <Image
                  src={
                    relatedPosts[1]
                      ? getImg(relatedPosts[1], projekt2)
                      : projekt2
                  }
                  alt={
                    relatedPosts[1]?.alt?.[lang] ||
                    relatedPosts[1]?.title?.[lang] ||
                    "pokoj"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-[4px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[70%]">
                {relatedPosts[1]?.title?.[lang] ||
                  "Maximizing Light and Views in Your Mallorca Home"}
              </span>
              <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                {relatedPosts[1]?.date?.[lang] || "January 2025"}
              </span>
            </div>
          </div>

          {/* 3 kolumna */}
          <div className="max-w-[78%] lg:max-w-[100%] lg:w-[20%] inline-block xl:w-[20%] ">
            <Link href={`${relatedPosts[2]?.slug.current}`}>
              <div className="aspect-[7/8]  lg:aspect-[6/8] xl:aspect-[6/8] relative ">
                <Image
                  src={
                    relatedPosts[2]
                      ? getImg(relatedPosts[2], projekt4)
                      : projekt4
                  }
                  alt={
                    relatedPosts[2]?.alt?.[lang] ||
                    relatedPosts[2]?.title?.[lang] ||
                    "pokoj"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[100%]">
                {relatedPosts[2]?.title?.[lang] ||
                  "Materials and Finishes Inspired by Mallorca."}
              </span>
              <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                {relatedPosts[2]?.date?.[lang] || "August 2024"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden justify-end">
          <Button
            arrow={ArrowWhite}
            linkTo={`/${lang}/${postsSection?.seeOtherBlogs?.button?.seeOtherBlogsButtonLink}`}
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="ml-auto mr-0 md:ml-0 md:max-h-[50px] self-end"
          >
            {
              postsSection?.seeOtherBlogs?.button?.seeOtherBlogsButtonLabel?.[
                lang
              ]
            }
          </Button>
        </div>
      </div>
    </section>
  );
}
