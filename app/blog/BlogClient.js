"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogFilter from "./BlogFilter";
import { urlFor } from "../../lib/sanity/client";

export default function BlogClient({
  postsSection,
  posts,
  projekt2,
  projekt3,
  projekt4,
}) {
  const [search, setSearch] = useState("");

  const normalizedSearch = useMemo(() => search.toLowerCase().trim(), [search]);

  const matchesSearch = (post) => {
    if (!post) return false;
    if (!normalizedSearch) return true; // brak szukania = pokazuj wszystko

    const title = (post.title || "").toLowerCase();
    return title.includes(normalizedSearch);
  };

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
    <section className="px-[20px] pt-[100px] md:px-[40px] lg:pt-[200px] lg:px-[50px] mb-[80px] xl:mb-[150px]">
      <div className="flex flex-col gap-[40px] justify-start lg:flex-row lg:justify-between lg:items-center lg:mb-[80px]">
        <div>
          <h1 className="text-[clamp(36px,8vw,45px)] leading-[clamp(36px,8vw,45px)] uppercase font-medium mb-[20px] max-w-[500px] xl:max-w-[700px] lg:text-[45px] lg:leading-[45px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] 2xl:max-w-[900px] 2xl:text-[80px] 2xl:leading-[80px]  2xl:font-normal">
            {postsSection.sectionTitle}
          </h1>
          <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight max-w-[600px]  ">
            {postsSection.sectionDescription}
          </p>
        </div>
        <BlogFilter
          searchPlaceholder={postsSection.searchPlaceholder}
          onSearchChange={setSearch}
        />
      </div>

      {/* RZĄD 1 – indeksy 0,1,2 z zachowaniem ich aspectów */}
      <div className="flex flex-col justify-between lg:flex-row mb-[50px] lg:mb-[80px]">
        {/* 1 kolumna – posts[0] */}
        <div className="max-w-[80%] lg:max-w-full mb-[50px] lg:mb-[0] lg:w-[39%] inline-block">
          {posts[0] && matchesSearch(posts[0]) && (
            <Link href={`blog/${posts[0]?.slug.current}`}>
              <div className=" aspect-[8/7] lg:aspect-[8/8] lg:max-w-[100%] relative xl:aspect-[8/7]">
                <Image
                  src={getImg(posts[0], projekt3)}
                  alt={posts[0]?.alt || posts[0]?.title || "pokoj"}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 23vw, 80vw"
                />
              </div>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[65%]">
                  {posts[0]?.title || "Designing a Luxury Mediterranean Villa"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {posts[0]?.date || "March 2025"}
                </span>
              </div>
            </Link>
          )}
        </div>

        {/* 2 kolumna – posts[1] */}
        <div className="w-full mb-[50px] max-w-[86%] ml-auto lg:ml-0 flex lg:max-w-[100%] lg:mb-[0] lg:w-[30%] inline-block">
          {posts[1] && matchesSearch(posts[1]) && (
            <>
              <Link href={`blog/${posts[1]?.slug.current}`}>
                <div className="flex lg:block aspect-[5/3]  lg:aspect-[8/5] relative ">
                  <Image
                    src={getImg(posts[1], projekt2)}
                    alt={posts[1]?.alt || posts[1]?.title || "pokoj"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[70%]">
                  {posts[1]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {posts[1]?.date || "January 2025"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* 3 kolumna – posts[2] */}
        <div className="max-w-[78%] lg:max-w-[100%] lg:w-[20%] inline-block xl:w-[20%] ">
          {posts[2] && matchesSearch(posts[2]) && (
            <>
              <Link href={`blog/${posts[2]?.slug.current}`}>
                <div className="aspect-[7/8]  lg:aspect-[6/8] xl:aspect-[6/8] relative ">
                  <Image
                    src={getImg(posts[2], projekt4)}
                    alt={posts[2]?.alt || posts[2]?.title || "pokoj"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[85%]">
                  {posts[2]?.title ||
                    "Materials and Finishes Inspired by Mallorca."}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {posts[2]?.date || "August 2024"}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* RZĄD 2 – indeksy 3,4,5,6 – też z tymi samymi klasami */}
      <div className="flex flex-col gap-[50px] lg:gap-[0] lg:flex-row lg:justify-between mb-[80px]">
        {/* posts[3] */}
        <div className="w-[80%] ml-auto lg:ml-0 lg:w-[27%] inline-block">
          {posts[3] && matchesSearch(posts[3]) && (
            <>
              <Link href={`blog/${posts[3]?.slug.current}`}>
                <div className="aspect-[8/8] relative xl:aspect-[11/9]">
                  <Image
                    src={getImg(posts[3], projekt4)}
                    alt="pokoj"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[65%]">
                  {posts[3]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {posts[3]?.date || "March 2025"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* posts[4] */}
        <div className="w-[70%] lg:w-[16%] inline-block">
          {posts[4] && matchesSearch(posts[4]) && (
            <>
              <Link href={`blog/${posts[4]?.slug.current}`}>
                <div className="aspect-[8/10] relative xl:aspect-[8/10]">
                  <Image
                    src={getImg(posts[4], projekt4)}
                    alt="pokoj"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[65%]">
                  {posts[4]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {posts[4]?.date || "March 2025"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* posts[5] */}
        <div className="w-[80%] ml-auto lg:ml-0 lg:w-[23%] inline-block">
          {posts[5] && matchesSearch(posts[5]) && (
            <>
              <Link href={`blog/${posts[5]?.slug.current}`}>
                <div className="aspect-[8/5] relative ">
                  <Image
                    src={getImg(posts[5], projekt4)}
                    alt="pokoj"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[70%]">
                  {posts[5]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {posts[5]?.date || "March 2025"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* posts[6] */}
        <div className="w-[65%] lg:w-[20%] inline-block xl:w-[18%] ">
          {posts[6] && matchesSearch(posts[6]) && (
            <>
              <Link href={`blog/${posts[6]?.slug.current}`}>
                <div className="aspect-[6/8] xl:aspect-[6/7] relative ">
                  <Image
                    src={getImg(posts[6], projekt4)}
                    alt="pokoj"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[85%]">
                  {posts[6]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {posts[6]?.date || "March 2025"}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
