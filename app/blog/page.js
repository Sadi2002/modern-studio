import Image from "next/image";
import projekt2 from "../../public/projekt2-large.webp";
import projekt3 from "../../public/projekt3-large.webp";
import projekt4 from "../../public/projekt4-large.webp";
import Link from "next/link";
import dataBlog from "../data/dataBlog";
import { urlFor } from "../../lib/sanity/client";

export default async function Blog() {
  const posts = await dataBlog();

  console.log(posts);

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
            Projects, Process, and Our Ideas
          </h1>
          <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight max-w-[600px]  ">
            Dive into our world of architecture where every project tells a
            story. Discover the design processes, creative insights, and
            innovative ideas that shape our work and inspire our clients.
          </p>
        </div>
        <div className="w-full lg:w-[25%] flex flex-col mb-[40px] lg:mb-0">
          <div className="relative border-b border-[rgb(0,0,0)] pb-[10px]">
            <input
              type="text"
              placeholder="Wpisz nazwe kategorii"
              className="w-[90%] focus:outline-none pl-[15px]"
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
            <span>Wieżowce</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        {/* 1 kolumna */}

        <div className="w-full mb-[50px] lg:mb-[0] lg:w-[39%] inline-block">
          <Link href={`blog/${posts[0]?.slug.current}`}>
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
          <Link href={`blog/${posts[1]?.slug.current}`}>
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
          <Link href={`blog/${posts[2]?.slug.current}`}>
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
