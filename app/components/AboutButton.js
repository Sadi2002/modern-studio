"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "@/app/components/animations/slideInOut";

export default function AboutButton({ href, label }) {
  const pathname = usePathname();
  const router = useTransitionRouter();

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (!href || pathname === href) return;

        e.preventDefault();

        router.push(href, {
          onTransitionReady: slideInOut,
        });
      }}
    >
      <button className="group relative font-medium-font-weight uppercase text-[clamp(0.75rem,3.5vw,1rem)] leading-none after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:h-[1px] after:w-full">
        <span className="relative block overflow-hidden">
          {/* pierwszy */}
          <span className="block leading-[20px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
            {label}
          </span>

          {/* drugi */}
          <span className="absolute leading-[20px] left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
            {label}
          </span>
        </span>
      </button>
    </Link>
  );
}
