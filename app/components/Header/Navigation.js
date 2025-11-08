"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`flex items-center justify-between mx-margin-mobile pt-mobile-navigation-top md:mx-tablet 2xl:mx-desktop xl:pt-desktop-navigation-top ${
        isHome ? "text-white" : "text-black"
      }`}
    >
      {/* LOGO PO LEWEJ */}
      <span className="md:text-logo-font-size">
        <Link href="/">Sadowski Studio</Link>
      </span>

      {/* MOBILE BURGER */}
      <div className="md:hidden flex flex-col gap-burger-line-gap items-end">
        <span
          className={`h-burger-line-height w-[17px] bg-black ${
            isHome ? "bg-white" : "bg-black"
          }`}
        ></span>
        <span
          className={`h-burger-line-height w-[24px] bg-black ${
            isHome ? "bg-white" : "bg-black"
          }`}
        ></span>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-between-navigation-links items-center xl:gap-between-navigation-links-xl">
        <li>
          <Link href={"#"} className="text-[14px] xl:text-[16px]">
            About us
          </Link>
        </li>
        <li>
          <Link href={"/portfolio"} className="text-[14px] xl:text-[16px]">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href={"#"} className="text-[14px] xl:text-[16px]">
            Blog
          </Link>
        </li>
        <li>
          <Link href={"#"} className="text-[14px] xl:text-[16px]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
