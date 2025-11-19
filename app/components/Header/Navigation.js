"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex items-center justify-between mx-margin-mobile pt-mobile-navigation-top md:mx-tablet 2xl:mx-desktop lg:pt-desktop-navigation-top ${
        isHome ? "text-main-white" : "text-main-black"
      }`}
    >
      {/* LOGO PO LEWEJ */}
      <span className="md:text-logo-font-size">
        <Link href="/">SeoVilla</Link>
      </span>

      {/* MOBILE BURGER */}
      <div
        className="md:hidden flex flex-col gap-burger-line-gap items-end"
        onClick={toggleMenu}
      >
        <span
          className={`h-burger-line-height w-[17px] bg-main-black ${
            isHome ? "bg-main-white" : "bg-black"
          }`}
        ></span>
        <span
          className={`h-burger-line-height w-[24px] bg-main-black ${
            isHome ? "bg-main-white" : "bg-main-black"
          }`}
        ></span>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="h-[100dvh] w-full fixed top-0 left-0 bg-main-black z-50 md:hidden">
          <div className="flex justify-between items-center mx-margin-mobile pt-mobile-navigation-top">
            <Link href="/">SeoVilla</Link>
            <span
              className="uppercase text-[14px] text-white font-medium-font-weight"
              onClick={toggleMenu}
            >
              Close
            </span>
          </div>
          <ul className="flex flex-col gap-[5px] ml-margin-mobile absolute top-[50%] left-0 transform -translate-y-1/2 w-full text-[clamp(30px,9vw,40px)] font-normal-font-weight uppercase">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Portfolio</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
          <div className="absolute bottom-[20px] left-0 w-full flex justify-between items-end">
            <ul className="flex flex-col text-[12px] gap-[8px] ml-margin-mobile">
              <li>
                <Link href={"#"}>Facebook</Link>
              </li>
              <li>
                <Link href={"#"}>Instagrm</Link>
              </li>
              <li>
                <Link href={"#"}>Tiktok</Link>
              </li>
            </ul>
            <ul className="flex flex-col text-[12px] gap-[8px] text-right mr-margin-mobile">
              <Link href={"#"}>Polityka prywatności</Link>
              <span>2025 wszelkie prawa zastrzeżone</span>
            </ul>
          </div>
        </div>
      )}

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-between-navigation-links items-center xl:gap-between-navigation-links-xl">
        <li>
          <Link
            href={"#"}
            className="text-links-size-navigation-mobile xl:text-links-size-navigation-desktop"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            href={"/portfolio"}
            className="text-links-size-navigation-mobile xl:text-links-size-navigation-desktop"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="text-links-size-navigation-mobile xl:text-links-size-navigation-desktop"
          >
            Process
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="text-links-size-navigation-mobile xl:text-links-size-navigation-desktop"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="text-links-size-navigation-mobile xl:text-links-size-navigation-desktop"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
