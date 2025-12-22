"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "@/app/components/animations/slideInOut";

export default function AnimatedLink({ href, children, className }) {
  const pathname = usePathname();
  const router = useTransitionRouter();

  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        if (!href || pathname === href) return;

        e.preventDefault();

        router.push(href, {
          onTransitionReady: slideInOut,
        });
      }}
    >
      {children}
    </Link>
  );
}
