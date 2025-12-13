"use client";

import { useMemo } from "react";
import { urlFor } from "../../lib/sanity/client";
import Image from "next/image";

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
        <div
          key={`big-${big._id || idx}`}
          className="w-full mb-[10px] md:mb-[16px]"
        >
          <div className="relative w-full overflow-hidden aspect-[8/6] lg:aspect-[6/3]">
            <Image
              src={urlFor(big).url()}
              alt={big.alt || "Gallery image"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      );
    }

    const firstSmall = gallery[block.index];
    const secondSmall = gallery[block.index + 1];

    return (
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
                  src={urlFor(img).url()}
                  alt={img.alt || "Gallery image"}
                  fill
                  className="object-cover"
                />
              </div>
            )
        )}
      </div>
    );
  });

  return <section className="space-y-6 w-full">{items}</section>;
}
