"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "@/app/components/animations/slideInOut";

export default function Button({
  linkTo = "#",
  arrow,
  bgColor,
  textColor,
  additionalStyles = "",
  children,
  type,
}) {
  const pathname = usePathname();
  const router = useTransitionRouter();

  const classNames = `group cursor-pointer inline-flex gap-2 justify-center items-center leading-none bg-${bgColor} rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-${textColor} font-medium text-[clamp(0.75rem,3.35vw,1rem)] ${additionalStyles}`;

  const AnimatedText = (
    <span className="relative overflow-hidden block">
      <span className="block leading-[20px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full will-change-transform">
        {children}
      </span>
      <span className="absolute leading-[20px] left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full will-change-transform">
        {children}
      </span>
    </span>
  );

  const Content = (
    <>
      {AnimatedText}
      {arrow && (
        <Image
          src={arrow}
          alt="Arrow Icon"
          className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] relative top-[0.5px]"
        />
      )}
    </>
  );

  // 👉 SUBMIT (bez nawigacji)
  if (type === "submit") {
    return (
      <button type="submit" className={classNames}>
        {Content}
      </button>
    );
  }

  // 👉 NAWIGACJA Z ANIMACJĄ
  return (
    <Link
      href={linkTo}
      className={classNames}
      onClick={(e) => {
        if (!linkTo || pathname === linkTo) return;

        e.preventDefault();

        router.push(linkTo, {
          onTransitionReady: slideInOut,
        });
      }}
    >
      {Content}
    </Link>
  );
}
