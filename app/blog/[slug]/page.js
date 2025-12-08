import Image from "next/image";
import Link from "next/link";
import ArrowWhite from "../../../public/arrow-right-white.png";
import dataBlog from "@/app/data/dataBlog";
import { sanityClient } from "../../../lib/sanity/client";
import { blogPostQuery } from "@/lib/sanity/queries";
import { urlFor } from "../../../lib/sanity/client";

export const revalidate = 0;

export async function generateStaticParams() {
  const posts = await dataBlog();
  console.log(posts);

  return posts.map((post) => ({ slug: post.slug.current }));
}

export default async function Post({ params }) {
  const { slug } = await params;
  const posts = await dataBlog();

  const blog = posts.find((post) => post.slug.current === slug);

  console.log(blog);

  return (
    <section className="pt-[100px] md:pt-[150px] lg:pt-[200px] w-full mb-[40px] lg:mb-[80px] relative px-[50px]">
      <div className=" w-full">
        <div className=" flex justify-between items-end mb-[40px]">
          <div className=" lg:max-w-[700px]  2xl:max-w-[570px] ">
            <h1 className="text-[clamp(36px,8vw,45px)] leading-[clamp(36px,8vw,45px)] font-medium mb-[20px] xl:mb-[20px] max-w-[500px] lg:text-[45px] lg:leading-[45 px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] xl:max-w-[600px] 2xl:max-w-[1200px] 2xl:font-normal 2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[850px] uppercase">
              {blog.title}
            </h1>
            <p className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px]">
              {blog.description}
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-[5px] mb-[10px]">
              <span className="font-medium-font-weight">Data:</span>
              <span className="font-light-font-weight">{blog.date}</span>
            </div>
            <div className="flex gap-[5px] mb-[10px]">
              <span className="font-medium-font-weight">Author:</span>
              <span className="font-light-font-weight">{blog.author}</span>
            </div>
            <div className="flex gap-[5px] mb-[10px]">
              <span className="font-medium-font-weight">{blog.category}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative aspect-[16/9] w-full mb-[80px]">
            <Image
              src={urlFor(blog.imgSrc).url()}
              alt="projekt"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-[40px] mb-[150px] max-w-[850px]">
            {blog.longDescription.contentBlocks.map((content, index) => {
              return (
                <div key={index}>
                  <h3 className="text-[30px] mb-[20px] font-medium">
                    {content.title}
                  </h3>
                  <div className="flex flex-col gap-[16px] font-light-font-weight">
                    {content.paragraphs.map((paragraph, pIndex) => {
                      return <p key={pIndex}>{paragraph}</p>;
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
          <div className="hidden lg:flex lg:justify-between">
            {/* 1 kolumna */}
            <div className="w-[39%] inline-block">
              <div className="lg:aspect-[8/8] relative xl:aspect-[8/7]">
                <Image
                  src="/about-large.webp"
                  alt="pokoj"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[65%]">
                  Designing a Luxury Mediterranean Villa
                </span>
                <span className="text-[#757575] text-[14px]">2025</span>
              </div>
            </div>

            {/* 2 kolumna */}
            <div className="w-[30%] inline-block">
              <div className="lg:aspect-[8/5] relative ">
                <Image
                  src="/about-large.webp"
                  alt="pokoj"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[70%]">
                  Designing a Luxury Mediterranean Villa
                </span>
                <span className="text-[#757575] text-[14px]">2025</span>
              </div>
            </div>

            {/* 3 kolumna */}
            <div className="w-[20%] inline-block xl:w-[20%] ">
              <div className="lg:aspect-[6/8] xl:aspect-[6/8] relative ] ">
                <Image
                  src="/about-large.webp"
                  alt="pokoj"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
                <span className="font-medium-font-weight max-w-[85%]">
                  Designing a Luxury Mediterranean Villa
                </span>
                <span className="text-[#757575] text-[14px]">2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
