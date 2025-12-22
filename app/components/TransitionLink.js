"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TransitionLink({ href, children, className }) {
  const router = useRouter();

  function handleClick(e) {
    if (!document.startViewTransition) return;

    e.preventDefault();

    document.startViewTransition(() => {
      router.push(href);
    });
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
