"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { urlForImage } from "../../lib/sanity/client";

const LAYOUTS_SECOND_ROW = ["bottom-1", "bottom-2", "bottom-3", "bottom-4"];

const getWidthClass = (layout) => {
  switch (layout) {
    case "top-1":
      return "w-[39%]";
    case "top-2":
      return "w-[30%]";
    case "top-3":
      return "w-[20%] xl:w-[20%]";
    case "bottom-1":
      return "w-[27%]";
    case "bottom-2":
      return "w-[16%]";
    case "bottom-3":
      return "w-[23%]";
    case "bottom-4":
    default:
      return "w-[20%] xl:w-[18%]";
  }
};

const getAspectClass = (layout) => {
  switch (layout) {
    case "top-1":
      return "lg:aspect-[8/8] relative xl:aspect-[8/7]";
    case "top-2":
      return "lg:aspect-[8/5] relative";
    case "top-3":
      return "lg:aspect-[6/8] xl:aspect-[6/8] relative";
    case "bottom-1":
      return "lg:aspect-[8/8] relative xl:aspect-[11/9]";
    case "bottom-2":
      return "lg:aspect-[8/8] relative xl:aspect-[8/10]";
    case "bottom-3":
      return "lg:aspect-[8/5] relative";
    case "bottom-4":
    default:
      return "lg:aspect-[6/8] xl:aspect-[6/7] relative";
  }
};

export default function BlogClient({
  sectionTitle,
  sectionDescription,
  searchPlaceholder,
  posts,
}) {
  const [query, setQuery] = useState("");

  const normalizedPosts = useMemo(
    () =>
      (posts || []).map((item, index) => ({
        id: item._key || index,
        title: item.post?.title || "",
        description: item.post?.description || "",
        category: item.post?.category || "",
        image: item.post?.imgSrc || null,
        alt: item.post?.alt || item.post?.title || "",
        slug: item.post?.slug?.current || "",
        date: item.post?.date || "",
      })),
    [posts]
  );

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return normalizedPosts;
    const q = query.toLowerCase();

    return normalizedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        (post.category || "").toLowerCase().includes(q)
    );
  }, [query, normalizedPosts]);

  const postsWithLayout = useMemo(() => {
    const firstRowLayouts = ["top-1", "top-2", "top-3"];

    return filteredPosts.map((post, index) => {
      if (index < firstRowLayouts.length) {
        return { ...post, layout: firstRowLayouts[index] };
      }
      const layout =
        LAYOUTS_SECOND_ROW[
          (index - firstRowLayouts.length) % LAYOUTS_SECOND_ROW.length
        ];
      return { ...post, layout };
    });
  }, [filteredPosts]);

  const isFiltering = !!query.trim();
  const firstRow = postsWithLayout.slice(0, 3);
  const rest = postsWithLayout.slice(3);

  const categories = useMemo(() => {
    const set = new Set(
      normalizedPosts
        .map((p) => p.category?.trim())
        .filter(Boolean)
    );
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [normalizedPosts]);

  const handleCategoryClick = (cat) => setQuery(cat);

  const renderCard = (post) => (
    <div
      key={post.id}
      className={`${getWidthClass(post.layout)} inline-block`}
    >
      <div className={getAspectClass(post.layout)}>
        {post.image && (
          <Image
            src={urlForImage(post.image).url()}
            alt={post.alt}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 justify-between mt-2.5 w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
        <span className="font-medium-font-weight max-w-[70%]">
          {post.title}
        </span>
        {post.date && (
          <span className="text-[#757575] text-[14px]">
            {post.date}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section className="pt-[200px] mx-desktop">
      <div className="flex justify-between items-center lg:mb-20">
        <div>
          <h1 className="text-[clamp(36px,8vw,45px)] leading-[clamp(36px,8vw,45px)] uppercase font-medium mb-[20px] max-w-[500px] xl:max-w-[700px] lg:text-[45px] lg:leading-[45px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] 2xl:max-w-[900px] 2xl:text-[80px] 2xl:leading-[80px]  2xl:font-normal">
            {sectionTitle}
          </h1>
          <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight max-w-[600px]  ">
            {sectionDescription}
          </p>
        </div>
        <div className="w-[25%] flex flex-col">
          <div className="relative border-b border-[rgb(0,0,0)] pb-2.5">
            <input
              type="text"
              placeholder={searchPlaceholder || "Wpisz nazwe kategorii"}
              className="w-[90%] focus:outline-none pl-[15px]"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className="text-left"
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        {!isFiltering && (
          <>
            {firstRow.length > 0 && (
              <div className="flex lg:justify-between mb-20">
                {firstRow.map(renderCard)}
              </div>
            )}

            {rest.length > 0 && (
              <div className="flex flex-wrap gap-y-10 gap-x-20 mb-20">
                {rest.map(renderCard)}
              </div>
            )}
          </>
        )}

        {isFiltering && postsWithLayout.length > 0 && (
          <div className="flex mb-20 flex-wrap gap-y-10 gap-x-20">
            {postsWithLayout.map(renderCard)}
          </div>
        )}

        {postsWithLayout.length === 0 && (
          <p className="mt-10 text-sm text-[#757575]">
            Brak postów dla frazy: <span className="font-medium">{query}</span>
          </p>
        )}
      </div>
    </section>
  );
}
