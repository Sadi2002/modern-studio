"use client";

import Image from "next/image";
import Link from "next/link";
import projekt2 from "../../public/projekt2-large.webp";
import projekt3 from "../../public/projekt3-large.webp";
import projekt4 from "../../public/projekt4-large.webp";
import { urlFor } from "../../lib/sanity/client";
import { useState } from "react";

export default function BlogList({ posts, postsSection }) {
  const [search, setSearch] = useState("");

  const match = (post) =>
    post?.title?.toLowerCase().includes(search.toLowerCase());

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
    <div>
      <div className="w-full lg:w-[25%] flex flex-col mb-[40px] lg:mb-0 relative lg:absolute lg:top-[200px] lg:right-[50px]">
        <div className="relative border-b border-[rgb(0,0,0)] pb-[10px]">
          <input
            type="text"
            placeholder={postsSection.searchPlaceholder}
            className="w-[90%] focus:outline-none pl-[15px]"
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
        <div className="font-medium-font-weight flex flex-col gap-[15px] mt-[40px]">
          <span>Mieszkanie</span>
          <span>Domy jednorodzinne</span>
          <span>Kawiarnie</span>
          <span>Wieżowiec</span>
        </div>
      </div>

      <div
        className={`flex flex-col flex-wrap gap-[80px] lg:flex-row mb-[50px] lg:mb-[80px] ${
          search ? "justify-start" : "justify-between"
        }`}
      >
        {/* 0 */}
        <div
          className="max-w-[80%] lg:max-w-full mb-[50px] lg:mb-[0] lg:w-[39%] inline-block"
          style={{ display: match(posts[0]) ? "inline-block" : "none" }}
        >
          <Link href={`blog/${posts[0]?.slug.current}`}>
            <div className=" aspect-[8/7] lg:aspect-[8/8] lg:max-w-[100%] relative xl:aspect-[8/7]">
              <Image
                src={posts[0] ? getImg(posts[0], projekt3) : projekt3}
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
        </div>

        {/* 1 */}
        <div
          className="w-full mb-[50px] max-w-[86%] ml-auto lg:ml-0 flex lg:max-w-[100%] lg:mb-[0] lg:w-[30%] inline-block"
          style={{ display: match(posts[1]) ? "inline-block" : "none" }}
        >
          <Link href={`blog/${posts[1]?.slug.current}`}>
            <div className="flex lg:block aspect-[5/3]  lg:aspect-[8/5] relative ">
              <Image
                src={posts[1] ? getImg(posts[1], projekt2) : projekt2}
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
        </div>

        {/* 2 */}
        <div
          className="max-w-[78%] lg:max-w-[100%] lg:w-[20%] inline-block xl:w-[20%]"
          style={{ display: match(posts[2]) ? "inline-block" : "none" }}
        >
          <Link href={`blog/${posts[2]?.slug.current}`}>
            <div className="aspect-[7/8] lg:aspect-[6/8] xl:aspect-[6/8] relative ">
              <Image
                src={posts[2] ? getImg(posts[2], projekt4) : projekt4}
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
        </div>

        {/* 3 */}
        <div
          className="w-[80%] ml-auto lg:ml-0 lg:w-[27%] inline-block"
          style={{ display: match(posts[3]) ? "inline-block" : "none" }}
        >
          <Link href={`blog/${posts[3]?.slug.current}`}>
            <div className="aspect-[8/8] relative xl:aspect-[11/9]">
              <Image
                src={posts[3] ? getImg(posts[3], projekt4) : projekt4}
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
        </div>

        {/* 4 */}
        <div
          className="w-[70%] lg:w-[16%] inline-block"
          style={{ display: match(posts[4]) ? "inline-block" : "none" }}
        >
          <Link href={`blog/${posts[4]?.slug.current}`}>
            <div className="aspect-[8/10] relative xl:aspect-[8/10]">
              <Image
                src={posts[4] ? getImg(posts[4], projekt4) : projekt4}
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
        </div>

        {/* 5 */}
        <div
          className="w-[80%] ml-auto lg:ml-0 lg:w-[23%] inline-block"
          style={{ display: match(posts[5]) ? "inline-block" : "none" }}
        >
          <Link href={`blog/${posts[5]?.slug.current}`}>
            <div className="aspect-[8/5] relative ">
              <Image
                src={posts[5] ? getImg(posts[5], projekt4) : projekt4}
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
        </div>

        {/* 6 */}
        <div
          className="w-[65%] lg:w-[20%] inline-block xl:w-[18%]"
          style={{ display: match(posts[6]) ? "inline-block" : "none" }}
        >
          <Link href={`blog/${posts[6]?.slug.current}`}>
            <div className="aspect-[6/8] xl:aspect-[6/7] relative ">
              <Image
                src={posts[6] ? getImg(posts[6], projekt4) : projekt4}
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
        </div>
      </div>
    </div>
  );
}
