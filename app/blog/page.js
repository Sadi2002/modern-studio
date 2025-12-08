"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import projekt2 from "../../public/projekt2-large.webp";
import projekt3 from "../../public/projekt3-large.webp";
import projekt4 from "../../public/projekt4-large.webp";

// prosta lista "postów" oparta na tym, co już masz w JSX
const POSTS = [
  {
    id: 1,
    title: "Designing a Luxury Mediterranean Villa",
    date: "March 2025",
    category: "Domy jednorodzinne",
    image: projekt4,
    layout: "top-1", // do rozróżnienia układu
  },
  {
    id: 2,
    title: "Maximizing Light and Views in Your Mallorca Home",
    date: "January 2025",
    category: "Mieszkanie",
    image: projekt3,
    layout: "top-2",
  },
  {
    id: 3,
    title: "Materials and Finishes Inspired by Mallorca.",
    date: "August 2024",
    category: "Kawiarnie",
    image: projekt2,
    layout: "top-3",
  },
  {
    id: 4,
    title: "Designing a Luxury Mediterranean Villa",
    date: "March 2025",
    category: "Wieżowce",
    image: projekt2,
    layout: "bottom-1",
  },
  {
    id: 5,
    title: "Designing a Luxury Mediterranean Villa",
    date: "March 2025",
    category: "Domy jednorodzinne",
    image: projekt4,
    layout: "bottom-2",
  },
  {
    id: 6,
    title: "Maximizing Light and Views in Your Mallorca Home",
    date: "January 2025",
    category: "Mieszkanie",
    image: projekt2,
    layout: "bottom-3",
  },
  {
    id: 7,
    title: "Materials and Finishes Inspired by Mallorca.",
    date: "August 2024",
    category: "Kawiarnie",
    image: projekt3,
    layout: "bottom-4",
  },
];

export default function Blog() {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return POSTS;
    const q = query.toLowerCase();

    return POSTS.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
    );
  }, [query]);

  // pomocnicze funkcje żeby zachować układ (górny wiersz / dolny wiersz)
  const topRow = filteredPosts.filter((p) => p.layout.startsWith("top"));
  const bottomRow = filteredPosts.filter((p) => p.layout.startsWith("bottom"));

  // helper do klas width/aspect na podstawie layoutu
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

  const isFiltering = !!query.trim();

  return (
    <section className="pt-[200px] mx-desktop">
      <div className="flex justify-between items-center lg:mb-[80px]">
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
        <div className="w-[25%] flex flex-col">
          <div className="relative border-b border-[rgb(0,0,0)] pb-[10px]">
            <input
              type="text"
              placeholder="Wpisz nazwe kategorii"
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
            <button
              type="button"
              className="text-left"
              onClick={() => setQuery("Mieszkanie")}
            >
              Mieszkanie
            </button>
            <button
              type="button"
              className="text-left"
              onClick={() => setQuery("Domy jednorodzinne")}
            >
              Domy jednorodzinne
            </button>
            <button
              type="button"
              className="text-left"
              onClick={() => setQuery("Kawiarnie")}
            >
              Kawiarnie
            </button>
            <button
              type="button"
              className="text-left"
              onClick={() => setQuery("Wieżowce")}
            >
              Wieżowce
            </button>
          </div>
        </div>
      </div>

      <div>
        {/* WIDOK BEZ FILTROWANIA - jak teraz, dwa wiersze */}
        {!isFiltering && (
          <>
            {topRow.length > 0 && (
              <div className="flex lg:justify-between mb-[80px]">
                {topRow.map((post) => (
                  <div
                    key={post.id}
                    className={`${getWidthClass(post.layout)} inline-block`}
                  >
                    <div className={getAspectClass(post.layout)}>
                      <Image
                        src={post.image}
                        alt="pokoj"
                        fill
                        className="object-cover"
                        placeholder="blur"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
                      <span className="font-medium-font-weight max-w-[70%]">
                        {post.title}
                      </span>
                      <span className="text-[#757575] text-[14px]">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {bottomRow.length > 0 && (
              <div className="flex lg:justify-between mb-[80px]">
                {bottomRow.map((post) => (
                  <div
                    key={post.id}
                    className={`${getWidthClass(post.layout)} inline-block`}
                  >
                    <div className={getAspectClass(post.layout)}>
                      <Image
                        src={post.image}
                        alt="pokoj"
                        fill
                        className="object-cover"
                        placeholder="blur"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] justify-between mt-[10px] w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
                      <span className="font-medium-font-weight max-w-[70%]">
                        {post.title}
                      </span>
                      <span className="text-[#757575] text-[14px]">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* WIDOK Z FILTROWANIEM - wszystkie obok siebie w jednym wierszu */}
        {isFiltering && filteredPosts.length > 0 && (
          <div className="flex mb-20 flex-wrap gap-y-10 gap-x-20">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className={`${getWidthClass(post.layout)} inline-block`}
              >
                <div className={getAspectClass(post.layout)}>
                  <Image
                    src={post.image}
                    alt="pokoj"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="flex flex-col gap-2 justify-between mt-2.5 w-full text-[clamp(12px,3.35vw,1rem)] font-normal-font-weight">
                  <span className="font-medium-font-weight max-w-[70%]">
                    {post.title}
                  </span>
                  <span className="text-[#757575] text-[14px]">
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Jeśli nic nie pasuje */}
        {filteredPosts.length === 0 && (
          <p className="mt-10 text-sm text-[#757575]">
            Brak postów dla frazy: <span className="font-medium">{query}</span>
          </p>
        )}
      </div>
    </section>
  );
}
