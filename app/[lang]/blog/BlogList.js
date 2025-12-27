"use client";

import Image from "next/image";
import Link from "next/link";
import projekt2 from "../../../public/projekt2-large.webp";
import projekt3 from "../../../public/projekt3-large.webp";
import projekt4 from "../../../public/projekt4-large.webp";
import { urlFor } from "../../../lib/sanity/client";
import { useState } from "react";
import AnimatedLink from "@/app/components/AnimatedLink";
import RevealAfterTransition from "@/app/components/RevealAfterTransition";

export default function BlogList({ posts, postsSection, lang }) {
  console.log(postsSection);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // sprawdza tytuł + kategorię
  const match = (post) => {
    if (!post) return false;

    const matchesSearch = post?.title?.[lang]
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      !selectedCategory || post?.category?.[lang] === selectedCategory;

    return matchesSearch && matchesCategory;
  };

  const categories = [...new Set(posts.map((p) => p?.category?.[lang]))];

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

  const hasMatch = posts.some(match);

  return (
    <div>
      <div className="w-full lg:w-[25%] flex flex-col mb-[80px] lg:mb-0 relative lg:absolute lg:top-[150px] 2xl:top-[200px] lg:right-[50px]">
        <div className="relative border-b border-[rgb(0,0,0)] pb-[5px]">
          <input
            type="text"
            placeholder={postsSection?.searchPlaceholder?.[lang]}
            className="w-[90%] focus:outline-none pl-[10px] placeholder:text-[clamp(0.85rem,3.35vw,1rem)] placeholder:leading-[clamp(0.75rem,10vw,1.5rem)]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Image
            width={24}
            height={24}
            src="/lupka.png"
            alt="Lupka"
            className="object-cover absolute top-[40%] right-[15px] translate-y-[-50%]"
          />
        </div>

        {/* Kategorie */}
        <div className="font-medium-font-weight flex flex-col gap-[10px] mt-[20px] text-[clamp(14px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
          {categories.map((category, index) => (
            <span
              key={index}
              onClick={() =>
                setSelectedCategory((prev) =>
                  prev === category ? null : category
                )
              }
              className={`cursor-pointer ${
                selectedCategory === category ? "underline" : ""
              }`}
            >
              <RevealAfterTransition delay={0} stagger={50}>
                {category}
              </RevealAfterTransition>
            </span>
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-wrap gap-y-[50px]  lg:gap-y-[80px]  lg:flex-row mb-[50px] lg:mb-[80px] ${
          search || selectedCategory
            ? "justify-start gap-x-[80px]"
            : "justify-between"
        }`}
      >
        {/* 0 */}
        <div
          className="max-w-[80%] lg:max-w-full lg:mb-[0] lg:mb-[50px] lg:w-[39%] inline-block"
          style={{ display: match(posts[0]) ? "inline-block" : "none" }}
        >
          <AnimatedLink href={`/${lang}/blog/${posts[0]?.slug.current}`}>
            <div className=" aspect-[8/7] lg:aspect-[8/8] lg:max-w-[100%] relative xl:aspect-[8/7]">
              <Image
                src={posts[0] ? getImg(posts[0], projekt3) : projekt3}
                alt={
                  posts[0]?.alt?.[lang] || posts[0]?.title?.[lang] || "pokoj"
                }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
            <div className="flex flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[85%]">
                {posts[0]?.title?.[lang] ||
                  "Designing a Luxury Mediterranean Villa"}
              </span>
              <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px] ">
                {posts[0]?.date?.[lang] || "March 2025"}
              </span>
            </div>
          </AnimatedLink>
        </div>

        {/* 1 */}
        <div
          className="w-full lg:mb-[0] max-w-[86%] ml-auto lg:ml-0 flex lg:max-w-[100%] lg:mb-[0] lg:w-[30%] inline-block"
          style={{ display: match(posts[1]) ? "inline-block" : "none" }}
        >
          <AnimatedLink href={`/${lang}/blog/${posts[1]?.slug.current}`}>
            <div className="flex lg:block aspect-[5/3]  lg:aspect-[8/5] relative ">
              <Image
                src={posts[1] ? getImg(posts[1], projekt2) : projekt2}
                alt={
                  posts[1]?.alt?.[lang] || posts[1]?.title?.[lang] || "pokoj"
                }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </AnimatedLink>
          <div className="flex flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[85%]">
              {posts[1]?.title?.[lang] ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {posts[1]?.date?.[lang] || "January 2025"}
            </span>
          </div>
        </div>

        {/* 2 */}
        <div
          className="max-w-[78%] lg:max-w-[100%] lg:w-[20%] inline-block xl:w-[20%]"
          style={{ display: match(posts[2]) ? "inline-block" : "none" }}
        >
          <AnimatedLink href={`/${lang}/blog/${posts[2]?.slug.current}`}>
            <div className="aspect-[7/8] lg:aspect-[6/8] xl:aspect-[6/8] relative ">
              <Image
                src={posts[2] ? getImg(posts[2], projekt4) : projekt4}
                alt={
                  posts[2]?.alt?.[lang] || posts[2]?.title?.[lang] || "pokoj"
                }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </AnimatedLink>
          <div className="flex flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[100%]">
              {posts[2]?.title?.[lang] ||
                "Materials and Finishes Inspired by Mallorca."}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {posts[2]?.date?.[lang] || "August 2024"}
            </span>
          </div>
        </div>

        {/* 3 */}
        <div
          className="w-[80%] ml-auto lg:ml-0 lg:w-[27%] inline-block"
          style={{ display: match(posts[3]) ? "inline-block" : "none" }}
        >
          <AnimatedLink href={`/${lang}/blog/${posts[3]?.slug.current}`}>
            <div className="aspect-[8/8] relative xl:aspect-[11/9]">
              <Image
                src={posts[3] ? getImg(posts[3], projekt4) : projekt4}
                alt={posts[3]?.alt?.[lang] || "post image"}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </AnimatedLink>
          <div className="flex flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[85%]">
              {posts[3]?.title?.[lang] ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {posts[3]?.date?.[lang] || "March 2025"}
            </span>
          </div>
        </div>

        {/* 4 */}
        <div
          className="w-[70%] lg:w-[16%] inline-block"
          style={{ display: match(posts[4]) ? "inline-block" : "none" }}
        >
          <AnimatedLink href={`/${lang}/blog/${posts[4]?.slug.current}`}>
            <div className="aspect-[8/10] relative xl:aspect-[8/10]">
              <Image
                src={posts[4] ? getImg(posts[4], projekt4) : projekt4}
                alt={posts[4]?.alt?.[lang] || "post image"}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </AnimatedLink>
          <div className="flex flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[85%]">
              {posts[4]?.title?.[lang] ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {posts[4]?.date?.[lang] || "March 2025"}
            </span>
          </div>
        </div>

        {/* 5 */}
        <div
          className="w-[80%] ml-auto lg:ml-0 lg:w-[23%] inline-block"
          style={{ display: match(posts[5]) ? "inline-block" : "none" }}
        >
          <AnimatedLink href={`/${lang}/blog/${posts[5]?.slug.current}`}>
            <div className="aspect-[8/5] relative ">
              <Image
                src={posts[5] ? getImg(posts[5], projekt4) : projekt4}
                alt={posts[5]?.alt?.[lang] || "post image"}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </AnimatedLink>
          <div className="flex flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[85%]">
              {posts[5]?.title?.[lang] ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {posts[5]?.date?.[lang] || "March 2025"}
            </span>
          </div>
        </div>

        {/* 6 */}
        <div
          className="w-[65%] lg:w-[20%] inline-block xl:w-[18%]"
          style={{ display: match(posts[6]) ? "inline-block" : "none" }}
        >
          <AnimatedLink href={`/${lang}/blog/${posts[6]?.slug.current}`}>
            <div className="aspect-[6/8] xl:aspect-[6/7] relative ">
              <Image
                src={posts[6] ? getImg(posts[6], projekt4) : projekt4}
                alt={posts[6]?.alt?.[lang] || "post image"}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </AnimatedLink>
          <div className="flex flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[85%]">
              {posts[6]?.title?.[lang] ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-start lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {posts[6]?.date?.[lang] || "March 2025"}
            </span>
          </div>
        </div>
      </div>

      {!hasMatch && (
        <div className="w-full flex justify-center items-center py-10 text-center text-[#757575]">
          {postsSection?.notFound?.[lang] ||
            "No posts found matching your criteria."}
        </div>
      )}
    </div>
  );
}
