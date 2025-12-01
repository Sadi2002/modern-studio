"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { useState } from "react";

import { urlFor } from "../../../lib/sanity/client";

export default function Navigation({ data }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isContact = pathname === "/contact";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!data) return null;

  return (
    <nav
      className={`flex items-center justify-between mx-margin-mobile lg:mx-desktop pt-mobile-navigation-top md:mx-tablet 2xl:mx-desktop lg:pt-desktop-navigation-top `}
    >
      {/* LOGO PO LEWEJ */}
      <span
        className={`md:text-logo-font-size ${
          isHome ? "text-main-white" : "text-main-black"
        }`}
      >
        <Link href="/">{data.logo}</Link>
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
        <div className="h-[100dvh] w-full fixed top-0 left-0 bg-main-black z-50 md:hidden text-main-white">
          <div className="flex justify-between items-center mx-margin-mobile pt-mobile-navigation-top">
            <Link href="/" onClick={toggleMenu}>
              SeoVilla
            </Link>
            <span
              className="uppercase text-[14px] text-white font-medium-font-weight"
              onClick={toggleMenu}
            >
              Close
            </span>
          </div>
          <ul className="flex flex-col gap-[5px] e absolute top-[50%] left-0 transform -translate-y-1/2 w-full text-[clamp(20px,6vw,40px)] font-normal-font-weight uppercase border-t border-[rgba(255,255,255,0.2)] max-w-[50%]">
            <li className="border-b border-[rgba(255,255,255,0.2)] py-[15px]">
              <Link href="#" className="pl-[20px]" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="border-b border-[rgba(255,255,255,0.2)] py-[15px]">
              <Link href="/about" className="pl-[20px]" onClick={toggleMenu}>
                About us
              </Link>
            </li>
            <li className="border-b border-[rgba(255,255,255,0.2)] py-[15px]">
              <Link
                href="/portfolio"
                className="pl-[20px]"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="border-b border-[rgba(255,255,255,0.2)] py-[15px]">
              <Link href="#" className="pl-[20px]">
                Blog
              </Link>
            </li>
            <li className="border-b border-[rgba(255,255,255,0.2)] py-[15px]">
              <Link href="/contact" className="pl-[20px]" onClick={toggleMenu}>
                Contact
              </Link>
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
      <ul
        className={`hidden md:flex gap-between-navigation-links items-center xl:gap-between-navigation-links-xl ${
          isHome ? "text-main-white" : "md:text-main-black"
        }
        ${isContact ? "lg:text-main-white" : ""}
        `}
      >
        {data.links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-links-size-navigation-mobile xl:text-links-size-navigation-desktop"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
