"use client"; // To kluczowe dla działania wyszukiwania i stanów

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity/client"; // Upewnij się, że ścieżka jest poprawna

// Importuj statyczne obrazy (tak jak w oryginale)
import projekt2 from "../../public/projekt2-large.webp";
import projekt3 from "../../public/projekt3-large.webp";
import projekt4 from "../../public/projekt4-large.webp";

export default function BlogClient({ posts, postsSection }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 1. Ekstrakcja unikalnych kategorii z postów (bez duplikatów)
  const categories = useMemo(() => {
    const allCategories = posts.flatMap((post) => post.categories || []);
    // Zakładamy, że kategoria to obiekt z polem 'title' lub string.
    // Dostosuj mapowanie, jeśli struktura w Sanity jest inna.
    const uniqueTitles = Array.from(
      new Set(allCategories.map((c) => c.title || c))
    );
    return uniqueTitles.sort();
  }, [posts]);

  // 2. Logika filtrowania (Search + Kategoria)
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory
      ? post.categories?.some((c) => (c.title || c) === selectedCategory)
      : true;

    return matchesSearch && matchesCategory;
  });

  // Funkcja pomocnicza do obrazków
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

  // Helper do obsługi kliknięcia w kategorię (toggle)
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Odznacz jeśli już wybrana
    } else {
      setSelectedCategory(category);
    }
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
        <div className="w-full lg:w-[25%] flex flex-col mb-[40px] lg:mb-0">
          <div className="relative border-b border-[rgb(0,0,0)] pb-[10px]">
            <input
              type="text"
              placeholder={postsSection.searchPlaceholder}
              className="w-[90%] focus:outline-none pl-[15px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Image
              width={24}
              height={24}
              src="/lupka.png"
              alt="Lupka"
              className="object-cover absolute top-[40%] right-[15px] translate-y-[-50%]"
            />
          </div>

          {/* Dynamiczne kategorie */}
          <div className="font-medium-font-weight flex flex-col gap-[15px] mt-[40px]">
            {categories.map((category, index) => (
              <span
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? "text-black font-bold"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {category}
              </span>
            ))}
            {categories.length === 0 && (
              <span className="text-gray-400 text-sm">Brak kategorii</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between lg:flex-row mb-[50px] lg:mb-[80px]">
        {/* Przekazujemy filteredPosts zamiast posts do gridu */}

        {/* 1 kolumna */}
        <div className="max-w-[80%] lg:max-w-full mb-[50px] lg:mb-[0] lg:w-[39%] inline-block">
          <Link
            href={
              filteredPosts[0] ? `blog/${filteredPosts[0].slug.current}` : "#"
            }
          >
            <div className=" aspect-[8/7] lg:aspect-[8/8] lg:max-w-[100%] relative xl:aspect-[8/7]">
              <Image
                src={
                  filteredPosts[0]
                    ? getImg(filteredPosts[0], projekt3)
                    : projekt3
                }
                alt={
                  filteredPosts[0]?.alt || filteredPosts[0]?.title || "pokoj"
                }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
            <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
              <span className="font-medium-font-weight max-w-[65%]">
                {filteredPosts[0]?.title ||
                  "Designing a Luxury Mediterranean Villa"}
              </span>
              <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
                {filteredPosts[0]?.date || "March 2025"}
              </span>
            </div>
          </Link>
        </div>

        {/* 2 kolumna */}
        <div className="w-full mb-[50px] max-w-[86%] ml-auto lg:ml-0 flex lg:max-w-[100%] lg:mb-[0] lg:w-[30%] inline-block">
          <Link
            href={
              filteredPosts[1] ? `blog/${filteredPosts[1].slug.current}` : "#"
            }
          >
            <div className="flex lg:block aspect-[5/3]  lg:aspect-[8/5] relative ">
              <Image
                src={
                  filteredPosts[1]
                    ? getImg(filteredPosts[1], projekt2)
                    : projekt2
                }
                alt={
                  filteredPosts[1]?.alt || filteredPosts[1]?.title || "pokoj"
                }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </Link>
          <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[70%]">
              {filteredPosts[1]?.title ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {filteredPosts[1]?.date || "January 2025"}
            </span>
          </div>
        </div>

        {/* 3 kolumna */}
        <div className="max-w-[78%] lg:max-w-[100%] lg:w-[20%] inline-block xl:w-[20%] ">
          <Link
            href={
              filteredPosts[2] ? `blog/${filteredPosts[2].slug.current}` : "#"
            }
          >
            <div className="aspect-[7/8]  lg:aspect-[6/8] xl:aspect-[6/8] relative ">
              <Image
                src={
                  filteredPosts[2]
                    ? getImg(filteredPosts[2], projekt4)
                    : projekt4
                }
                alt={
                  filteredPosts[2]?.alt || filteredPosts[2]?.title || "pokoj"
                }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </Link>
          <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[85%]">
              {filteredPosts[2]?.title ||
                "Materials and Finishes Inspired by Mallorca."}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {filteredPosts[2]?.date || "August 2024"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[50px] lg:gap-[0] lg:flex-row lg:justify-between mb-[80px]">
        {/* Wiersz 2 */}
        <div className="w-[80%] ml-auto lg:ml-0 lg:w-[27%] inline-block">
          <Link
            href={
              filteredPosts[3] ? `blog/${filteredPosts[3].slug.current}` : "#"
            }
          >
            <div className="aspect-[8/8] relative xl:aspect-[11/9]">
              <Image
                src={
                  filteredPosts[3]
                    ? getImg(filteredPosts[3], projekt4)
                    : projekt4
                }
                alt="pokoj"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </Link>
          <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[65%]">
              {filteredPosts[3]?.title ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {filteredPosts[3]?.date || "March 2025"}
            </span>
          </div>
        </div>
        <div className="w-[70%] lg:w-[16%] inline-block">
          <Link
            href={
              filteredPosts[4] ? `blog/${filteredPosts[4].slug.current}` : "#"
            }
          >
            <div className="aspect-[8/10] relative xl:aspect-[8/10]">
              <Image
                src={
                  filteredPosts[4]
                    ? getImg(filteredPosts[4], projekt4)
                    : projekt4
                }
                alt="pokoj"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </Link>
          <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[65%]">
              {filteredPosts[4]?.title ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {filteredPosts[4]?.date || "March 2025"}
            </span>
          </div>
        </div>

        <div className="w-[80%] ml-auto lg:ml-0 lg:w-[23%] inline-block">
          <Link
            href={
              filteredPosts[5] ? `blog/${filteredPosts[5].slug.current}` : "#"
            }
          >
            <div className="aspect-[8/5] relative ">
              <Image
                src={
                  filteredPosts[5]
                    ? getImg(filteredPosts[5], projekt4)
                    : projekt4
                }
                alt="pokoj"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </Link>
          <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[70%]">
              {filteredPosts[5]?.title ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {filteredPosts[5]?.date || "March 2025"}
            </span>
          </div>
        </div>

        <div className="w-[65%] lg:w-[20%] inline-block xl:w-[18%] ">
          <Link
            href={
              filteredPosts[6] ? `blog/${filteredPosts[6].slug.current}` : "#"
            }
          >
            <div className="aspect-[6/8] xl:aspect-[6/7] relative ">
              <Image
                src={
                  filteredPosts[6]
                    ? getImg(filteredPosts[6], projekt4)
                    : projekt4
                }
                alt="pokoj"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 23vw, 80vw"
              />
            </div>
          </Link>
          <div className="flex lg:flex-col gap-[5px] justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)] 2xl:text-[18px] font-normal-font-weight">
            <span className="font-medium-font-weight max-w-[85%]">
              {filteredPosts[6]?.title ||
                "Maximizing Light and Views in Your Mallorca Home"}
            </span>
            <span className="text-[#757575] font-medium-font-weight min-w-[70px] flex justify-end lg:justify-start lg:font-normal-font-weight lg:text-[14px] 2xl:text-[16px]">
              {filteredPosts[6]?.date || "March 2025"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
