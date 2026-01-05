"use client";
import Image from "next/image";
import ArrowWhite from "../../../../public/arrow-right-white.png";

import projekt2 from "../../../../public/projekt2-large.webp";
import projekt3 from "../../../../public/projekt3-large.webp";
import projekt4 from "../../../../public/projekt4-large.webp";

import Button from "@/app/components/Button";
import AnimatedLink from "@/app/components/AnimatedLink";
import FadeInMobile from "@/app/components/FadeInMobile";

export default function Blog({ data, lang }) {
  if (!data) return null;

  const title = data?.title?.[lang] || "Blog";
  const description =
    data?.description?.[lang] ||
    "Welcome to our blog, where we explore design ideas, materials and architectural insights inspired by Mallorca.";
  const buttonLabel = data?.button?.buttonLabel?.[lang] || "View all";
  const buttonLink = data?.button?.buttonLink || "blog";

  // w Sanity: posts = array of {post: {...}}
  const posts =
    data.posts?.map((item) => item.post ?? item).filter(Boolean) || [];

  // helper do obrazka z Sanity + fallback
  const getImg = (post, fallback) => {
    if (post?.imgSrc) {
      try {
        return post.imgSrc;
      } catch {
        return fallback;
      }
    }
    return fallback;
  };

  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet  lg:mx-small-laptop mb-[80px]  xl:mb-[150px]">
      <div className="md:flex md:flex-col md:justify-between w-full  ">
        <div className="flex flex-col">
          <FadeInMobile>
            <h3 className="mb-5 text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)]   font-medium uppercase relative after:content-['(03)'] after:absolute after:bottom-[clamp(15px,4vw,25px)] md:after:bottom-[clamp(20px,4vw,25px)] xl:after:bottom-[clamp(20px,4vw,30px)] 2xl:after:top-[-35px] 2xl:after:top-[-35px] after:text-[10px] md:after:text-[12px] xl:text-6xl xl:after:text-[14px] 2xl:text-[80px] 2xl:leading-[80px] lg:font-normal xl:mb-[20px] 2xl:max-w-[1200px]">
              {title}
            </h3>
          </FadeInMobile>
          <FadeInMobile>
            <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[40px] xl:mb-[40px] min-[380px]:max-w-[390px] md:max-w-[500px] ">
              {description}
            </p>
          </FadeInMobile>
        </div>
        <div className="flex justify-end">
          <Button
            arrow={ArrowWhite}
            linkTo={`/${lang}/${buttonLink}`}
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="mb-[40px] ml-auto mr-0 md:max-h-[50px] self-end"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>

      {/* DESKTOP: 3 kolumny jak wcześniej */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* 1 kolumna */}

        <div className="w-full mb-[50px] lg:mb-[0] max-w-[80%] lg:max-w-[100%] lg:w-[39%] inline-block">
          <AnimatedLink href={`/${lang}/blog/${posts[0]?.slug.current}`}>
            <div className=" aspect-[8/7] lg:aspect-[8/8] lg:max-w-[100%] relative xl:aspect-[8/7] overflow-hidden cursor-pointer">
              <Image
                src={posts[0] ? getImg(posts[0], projekt3) : projekt3}
                alt={
                  posts[0]?.alt?.[lang] || posts[0]?.title?.[lang] || "pokoj"
                }
                fill
                placeholder="blur"
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="flex flex flex-col gap-[5px] justify-between mt-[5px]  w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[65%]">
                {posts[0]?.title?.[lang] ||
                  "Designing a Luxury Mediterranean Villa"}
              </span>
              <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                {posts[0]?.date?.[lang] || "March 2025"}
              </span>
            </div>
          </AnimatedLink>
        </div>

        {/* 2 kolumna */}
        <div className="w-full mb-[50px] max-w-[86%] ml-auto lg:ml-0 flex lg:max-w-[100%] lg:mb-[0] lg:w-[30%] inline-block">
          <AnimatedLink href={`/${lang}/blog/${posts[1]?.slug.current}`}>
            <div className="flex lg:block aspect-[5/3]  lg:aspect-[8/5] overflow-hidden relative cursor-pointer">
              <Image
                src={posts[1] ? getImg(posts[1], projekt2) : projekt2}
                alt={
                  posts[1]?.alt?.[lang] || posts[1]?.title?.[lang] || "pokoj"
                }
                fill
                placeholder="blur"
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
          </AnimatedLink>

          <div className="flex flex flex-col gap-[5px]  justify-between mt-[5px]  w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight ">
            <span className="font-medium-font-weight max-w-[70%]">
              {posts[1]?.title?.[lang] ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {posts[1]?.date?.[lang] || "January 2025"}
            </span>
          </div>
        </div>

        {/* 3 kolumna */}
        <div className="max-w-[78%] lg:max-w-[100%] lg:w-[20%] inline-block xl:w-[20%] ">
          <AnimatedLink href={`/${lang}/blog/${posts[1]?.slug.current}`}>
            <div className="aspect-[7/8]  lg:aspect-[6/8] xl:aspect-[6/8] relative overflow-hidden cursor-pointer">
              <Image
                src={posts[2] ? getImg(posts[2], projekt4) : projekt4}
                alt={
                  posts[2]?.alt?.[lang] || posts[2]?.title?.[lang] || "pokoj"
                }
                fill
                placeholder="blur"
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
          </AnimatedLink>

          <div className="flex flex flex-col gap-[5px] justify-between mt-[5px]  w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight ">
            <span className="font-medium-font-weight max-w-[100%]">
              {posts[2]?.title?.[lang] ||
                "Materials and Finishes Inspired by Mallorca."}
            </span>
            <span className="text-[#757575] lg:text-[14px] 2xl:text-[16px] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight">
              {posts[2]?.date?.[lang] || "August 2024"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
