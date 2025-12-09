"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowWhite from "../../../public/arrow-right-white.png";

import projekt1 from "../../../public/projekt1-large.webp";
import projekt2 from "../../../public/projekt2-large.webp";
import projekt3 from "../../../public/projekt3-large.webp";
import projekt4 from "../../../public/projekt4-large.webp";

import { urlFor } from "../../../lib/sanity/client";

export default function Blog({ data }) {
  console.log(data.posts[0].slug);
  // gdy brak sekcji – nic nie renderujemy
  if (!data) return null;

  const title = data.title || "Blog";
  const description =
    data.description ||
    "Welcome to our blog, where we explore design ideas, materials and architectural insights inspired by Mallorca.";
  const buttonLabel = data.buttonLabel || "Zobacz wszystkie";
  const buttonLink = data.buttonLink || "/blog";

  // w Sanity: posts = array of {post: {...}}
  const posts =
    data.posts?.map((item) => item.post ?? item).filter(Boolean) || [];

  // helper do obrazka z Sanity + fallback
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
    <section className="mx-margin-mobile flex flex-col md:mx-tablet  lg:mx-small-laptop mb-[80px]  xl:mb-[150px]">
      <div className="md:flex md:flex-col md:justify-between w-full  ">
        <div className="flex flex-col">
          <h3 className="mb-5 text-[clamp(36px,6.5vw,45px)] leading-[clamp(36px,6.5vw,45px)]   font-medium uppercase relative after:content-['(03)'] after:absolute after:top-[-15px] xl:after:top-[-25px] 2xl:after:top-[-35px] after:text-[8px] xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px]  2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal xl:mb-[20px] 2xl:max-w-[1200px]">
            {title}
          </h3>
          <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[40px] xl:mb-[50px] xl:mb-[0] min-[380px]:max-w-[390px] md:max-w-[500px] ">
            {description}
          </p>
        </div>
        <div className="flex justify-end">
          <Link
            href={buttonLink}
            className="bg-main-black mb-[40px] rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-main-white ml-auto mr-0 font-medium flex items-center md:ml-0 text-[clamp(0.75rem,3.35vw,1rem)] md:flex md:max-h-[50px] self-end"
          >
            {buttonLabel}
            <Image
              src={ArrowWhite}
              alt="strzałka"
              className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative "
            />
          </Link>
        </div>
      </div>

      {/* MOBILE: slider – 3 karty jak wcześniej */}
      {/* <div className=" lg:hidden">
        <div className="flex w-full overflow-x-scroll snap-x snap-mandatory space-x-4  scrollbar-hide">
          {/* 1 karta */}
      {/* <div className="flex-shrink-0 w-[80%] aspect-[3/4]   flex flex-col md:aspect-[7/6]">
            <div className="h-full relative">
              <Image
                src={posts[0] ? getImg(posts[0], projekt2) : projekt2}
                alt={posts[0]?.alt || posts[0]?.title || "pokoj"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>{posts[0]?.title || "Our project"}</span>
              <span>{posts[0]?.link ? "View project" : "View project"}</span>
            </div>
          </div> */}

      {/* 2 karta */}
      {/* <div className="flex-shrink-0 w-[80%] aspect-[3/4]  flex flex-col md:aspect-[7/6]">
            <div className="h-full relative">
              <Image
                src={posts[1] ? getImg(posts[1], projekt4) : projekt4}
                alt={posts[1]?.alt || posts[1]?.title || "pokoj"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>{posts[1]?.title || "Our project"}</span>
              <span>{posts[1]?.link ? "View project" : "View project"}</span>
            </div>
          </div> */}

      {/* 3 karta */}
      {/* <div className="flex-shrink-0 w-[80%] aspect-[3/4]   flex flex-col md:aspect-[7/6]">
            <div className="h-full relative">
              <Image
                src={posts[2] ? getImg(posts[2], projekt2) : projekt2}
                alt={posts[2]?.alt || posts[2]?.title || "pokoj"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span>{posts[2]?.title || "Our project"}</span>
              <span>{posts[2]?.link ? "View project" : "View project"}</span>
            </div>
          </div>
        </div> */}
      {/* </div>  */}

      {/* DESKTOP: 3 kolumny jak wcześniej */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* 1 kolumna */}

        <div className="w-full mb-[50px] lg:mb-[0] lg:w-[39%] inline-block">
          <Link href={`blog/${data.posts[0]?.slug.current}`}>
            <div className="max-w-[80%] aspect-[8/7] lg:aspect-[8/8] lg:max-w-[100%] relative xl:aspect-[8/7]">
              <Image
                src={posts[0] ? getImg(posts[0], projekt3) : projekt3}
                alt={posts[0]?.alt || posts[0]?.title || "pokoj"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[65%]">
                {posts[0]?.title || "Designing a Luxury Mediterranean Villa"}
              </span>
              <span className="text-[#757575] text-[14px]">
                {posts[0]?.date || "March 2025"}
              </span>
            </div>
          </Link>
        </div>

        {/* 2 kolumna */}
        <div className="w-full mb-[50px] max-w-[86%] ml-auto lg:ml-0 flex lg:max-w-[100%] lg:mb-[0] lg:w-[30%] inline-block">
          <Link href={`blog/${data.posts[1]?.slug.current}`}>
            <div className="flex lg:block aspect-[5/3]  lg:aspect-[8/5] relative ">
              <Image
                src={posts[1] ? getImg(posts[1], projekt2) : projekt2}
                alt={posts[1]?.alt || posts[1]?.title || "pokoj"}
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[70%]">
              {posts[1]?.title ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] text-[14px]">
              {posts[1]?.date || "January 2025"}
            </span>
          </div>
        </div>

        {/* 3 kolumna */}
        <div className="max-w-[78%] lg:max-w-[100%] lg:w-[20%] inline-block xl:w-[20%] ">
          <Link href={`blog/${data.posts[2]?.slug.current}`}>
            <div className="aspect-[7/8]  lg:aspect-[6/8] xl:aspect-[6/8] relative ">
              <Image
                src={posts[2] ? getImg(posts[2], projekt4) : projekt4}
                alt={posts[2]?.alt || posts[2]?.title || "pokoj"}
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[85%]">
              {posts[2]?.title ||
                "Materials and Finishes Inspired by Mallorca."}
            </span>
            <span className="text-[#757575] text-[14px]">
              {posts[2]?.date || "August 2024"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
