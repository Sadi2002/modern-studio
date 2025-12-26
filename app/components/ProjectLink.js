"use client";

import AnimatedLink from "@/app/components/AnimatedLink";
import AnimatedProjectImage from "@/app/components/AnimatedProjectImage";
import { useIsLg } from "@/app/hooks/useIsLg";
import RevealAfterTransition from "./RevealAfterTransition";

export default function ProjectLink({
  href,
  imageProps, // props do AnimatedProjectImage (src, alt, slug, lang, className...)
  children, // co ma być klikane (np. <Image .../>)
}) {
  const isLg = useIsLg();

  // < 1024px → zwykły link z next-view-transitions
  if (!isLg) {
    return <AnimatedLink href={href}>{children}</AnimatedLink>;
  }

  // >= 1024px → Twoja animacja obrazka
  return (
    <AnimatedProjectImage {...imageProps}>{children}</AnimatedProjectImage>
  );
}
