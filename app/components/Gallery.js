"use client";

import { useMemo } from "react";

import Image from "next/image";
import FadeInOnView from "./FadeInOnView";

function buildLayout(gallery) {
  const layout = [];
  let i = 0;
  let isPair = true;
  while (i < gallery.length) {
    if (isPair && i + 1 < gallery.length) {
      layout.push({ type: "two", index: i });
      i += 2;
    } else {
      layout.push({ type: "one", index: i });
      i += 1;
    }
    isPair = !isPair;
  }
  return layout;
}

export default function ProjectGallery({ gallery }) {
  console.log(gallery);
  const layout = useMemo(() => {
    if (!gallery || gallery.length === 0) return [];
    return buildLayout(gallery);
  }, [gallery]);

  if (!gallery || gallery.length === 0) return null;

  const items = layout.map((block, idx) => {
    if (block.type === "one") {
      const big = gallery[block.index];
      if (!big) return null;

      return (
        <FadeInOnView key={`gallery-${idx}`}>
          <div
            key={`big-${big._id || idx}`}
            className="w-full mb-[10px] md:mb-[16px]"
          >
            <div className="relative w-full overflow-hidden aspect-[8/6] lg:aspect-[6/3]">
              <Image
                src={big?.image}
                alt={big?.image?.alt || "Gallery image"}
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </FadeInOnView>
      );
    }

    const firstSmall = gallery[block.index];
    const secondSmall = gallery[block.index + 1];

    return (
      <FadeInOnView key={`gallery-${idx}`}>
        <div
          key={`pair-${firstSmall._id || idx}`}
          className="flex flex-col gap-[10px] md:gap-[16px] lg:grid lg:grid-cols-2 mb-[10px] md:mb-[16px]"
        >
          {[firstSmall, secondSmall].map(
            (img, index) =>
              img && (
                <div
                  key={index}
                  className="relative overflow-hidden aspect-[8/9] lg:aspect-[6/6]"
                >
                  <Image
                    src={img?.image}
                    alt={img?.image?.alt || "Gallery image"}
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
              )
          )}
        </div>
      </FadeInOnView>
    );
  });

  return <section className="space-y-6 w-full">{items}</section>;
}
