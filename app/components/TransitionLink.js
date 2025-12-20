"use client";

import { usePageTransition } from "./PageTransition";

export default function TransitionLink({ href, children, className }) {
  const transition = usePageTransition();

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        transition(href);
      }}
    >
      {children}
    </a>
  );
}
