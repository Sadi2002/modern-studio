"use client";

import AnimatedLink from "@/app/components/AnimatedLink";
import AnimatedProjectImage from "@/app/components/AnimatedProjectImage";
import { useIsLg } from "@/app/hooks/useIsLg";
import RevealAfterTransition from "./RevealAfterTransition";
import { forwardRef } from "react";

const ProjectLink = forwardRef(function ProjectLink(
  { href, imageProps, children },
  ref
) {
  const isLg = useIsLg();

  // < 1024px
  if (!isLg) {
    return <AnimatedLink href={href}>{children}</AnimatedLink>;
  }

  // >= 1024px
  return (
    <AnimatedProjectImage ref={ref} {...imageProps}>
      {children}
    </AnimatedProjectImage>
  );
});

export default ProjectLink;
