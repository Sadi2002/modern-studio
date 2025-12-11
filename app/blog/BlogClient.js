"use client";

import { useMemo, useState } from "react";
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

  const filteredPosts = useMemo(() => {
    if (!normalizedSearch) return posts;
    return posts.filter((post) =>
      (post.title || "").toLowerCase().includes(normalizedSearch)
    );
  }, [posts, normalizedSearch]);

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

  // bierzemy kolejne posty do slotów 0..6
  const slots = [
    filteredPosts[0],
    filteredPosts[1],
    filteredPosts[2],
    filteredPosts[3],
    filteredPosts[4],
    filteredPosts[5],
    filteredPosts[6],
  ];

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

      {/* RZĄD 1 – sloty 0,1,2 z ich aspectami */}
      <div className="flex flex-col justify-between lg:flex-row mb-[50px] lg:mb-[80px]">
        {/* slot 0 – jak Twój posts[0] */}
        <div className="max-w-[80%] lg:max-w-full mb-[50px] lg:mb-[0] lg:w-[39%] inline-block">
          {slots[0] && (
            <Link href={`blog/${slots[0].slug.current}`}>
              <div className=" aspect-[8/7] lg:aspect-[8/8] lg:max-w-[100%] relative xl:aspect-[8/7]">
                <Image
                  src={getImg(slots[0], projekt3)}
                  alt={slots[0]?.alt || slots[0]?.title || "pokoj"}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 23vw, 80vw"
                />
              </div>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[65%]">
                  {slots[0]?.title || "Designing a Luxury Mediterranean Villa"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {slots[0]?.date || "March 2025"}
                </span>
              </div>
            </Link>
          )}
        </div>

        {/* slot 1 – jak Twój posts[1] */}
        <div className="w-full mb-[50px] max-w-[86%] ml-auto lg:ml-0 flex lg:max-w-[100%] lg:mb-[0] lg:w-[30%] inline-block">
          {slots[1] && (
            <>
              <Link href={`blog/${slots[1].slug.current}`}>
                <div className="flex lg:block aspect-[5/3]  lg:aspect-[8/5] relative ">
                  <Image
                    src={getImg(slots[1], projekt2)}
                    alt={slots[1]?.alt || slots[1]?.title || "pokoj"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[70%]">
                  {slots[1]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {slots[1]?.date || "January 2025"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* slot 2 – jak Twój posts[2] */}
        <div className="max-w-[78%] lg:max-w-[100%] lg:w-[20%] inline-block xl:w-[20%] ">
          {slots[2] && (
            <>
              <Link href={`blog/${slots[2].slug.current}`}>
                <div className="aspect-[7/8]  lg:aspect-[6/8] xl:aspect-[6/8] relative ">
                  <Image
                    src={getImg(slots[2], projekt4)}
                    alt={slots[2]?.alt || slots[2]?.title || "pokoj"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[85%]">
                  {slots[2]?.title ||
                    "Materials and Finishes Inspired by Mallorca."}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {slots[2]?.date || "August 2024"}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* RZĄD 2 – sloty 3,4,5,6 */}
      <div className="flex flex-col gap-[50px] lg:gap-[0] lg:flex-row lg:justify-between mb-[80px]">
        {/* slot 3 – jak Twój posts[3] */}
        <div className="w-[80%] ml-auto lg:ml-0 lg:w-[27%] inline-block">
          {slots[3] && (
            <>
              <Link href={`blog/${slots[3].slug.current}`}>
                <div className="aspect-[8/8] relative xl:aspect-[11/9]">
                  <Image
                    src={getImg(slots[3], projekt4)}
                    alt={slots[3]?.alt || slots[3]?.title || "pokoj"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[65%]">
                  {slots[3]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {slots[3]?.date || "March 2025"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* slot 4 – jak Twój posts[4] */}
        <div className="w-[70%] lg:w-[16%] inline-block">
          {slots[4] && (
            <>
              <Link href={`blog/${slots[4].slug.current}`}>
                <div className="aspect-[8/10] relative xl:aspect-[8/10]">
                  <Image
                    src={getImg(slots[4], projekt4)}
                    alt={slots[4]?.alt || slots[4]?.title || "pokoj"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[65%]">
                  {slots[4]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {slots[4]?.date || "March 2025"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* slot 5 – jak Twój posts[5] */}
        <div className="w-[80%] ml-auto lg:ml-0 lg:w-[23%] inline-block">
          {slots[5] && (
            <>
              <Link href={`blog/${slots[5].slug.current}`}>
                <div className="aspect-[8/5] relative ">
                  <Image
                    src={getImg(slots[5], projekt4)}
                    alt={slots[5]?.alt || slots[5]?.title || "pokoj"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[70%]">
                  {slots[5]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {slots[5]?.date || "March 2025"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* slot 6 – jak Twój posts[6] */}
        <div className="w-[65%] lg:w-[20%] inline-block xl:w-[18%] ">
          {slots[6] && (
            <>
              <Link href={`blog/${slots[6].slug.current}`}>
                <div className="aspect-[6/8] xl:aspect-[6/7] relative ">
                  <Image
                    src={getImg(slots[6], projekt4)}
                    alt={slots[6]?.alt || slots[6]?.title || "pokoj"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 23vw, 80vw"
                  />
                </div>
              </Link>
              <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[85%]">
                  {slots[6]?.title ||
                    "Maximizing Light and Views in Your Mallorca Home"}
                </span>
                <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                  {slots[6]?.date || "March 2025"}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
