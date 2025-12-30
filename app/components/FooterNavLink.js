"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "@/app/components/animations/slideInOut";
import FadeInMobile from "./FadeInMobile";

export default function FooterNavLink({ href, label, className = "" }) {
  const pathname = usePathname();
  const router = useTransitionRouter();

  return (
    <Link
      href={href}
      className={`group ${className}`}
      onClick={(e) => {
        if (!href || pathname === href) return;

        e.preventDefault();

        router.push(href, {
          onTransitionReady: slideInOut,
        });
      }}
    >
      <span className="relative overflow-hidden block">
        <span className="block leading-[20px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
          {label}
        </span>

        <span className="absolute leading-[20px] left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
          {label}
        </span>
      </span>
    </Link>
  );
}
