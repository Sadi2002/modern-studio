"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { useState } from "react";

import { urlFor } from "../../../lib/sanity/client";

export default function Navigation({ data, dataMobile }) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/pl" || pathname === "/de";
  const isContact = pathname.includes("/contact");

  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: "/",
    pl: "/pl",
    de: "/de",
  };

  const currentLang = pathname.split("/")[1] || "en";

  const availableLangs = Object.keys(languages).filter(
    (lang) => lang !== currentLang
  );

  console.log(dataMobile);

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
      <div className="flex items-center flex-row-reverse gap-[40px]">
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
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="h-[100dvh] w-full fixed top-0 left-0 bg-main-black z-50 md:hidden text-main-white">
          <div className="flex justify-between items-center mx-margin-mobile pt-mobile-navigation-top">
            <Link href="/" onClick={toggleMenu}>
              {dataMobile.logo}
            </Link>
            <div className="flex flex-row-reverse gap-[30px]">
              <span
                className="uppercase text-[14px] text-white font-medium-font-weight"
                onClick={toggleMenu}
              >
                {dataMobile.closeIcon}
              </span>
              <div className="flex md:hidden items-center justify-end gap-2 uppercase text-[14px] text-white ">
                {availableLangs.map((lang, index) => (
                  <div key={lang} className="flex items-center gap-2">
                    <Link href={languages[lang]} onClick={toggleMenu}>
                      {lang}
                    </Link>
                    {index < availableLangs.length - 1 && <span>/</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-[5px] absolute top-[50%] left-0 transform -translate-y-1/2 w-full text-[clamp(20px,6vw,40px)] font-normal-font-weight uppercase border-t border-[rgba(255,255,255,0.2)] max-w-[50%]">
            {dataMobile.links.map((link, index) => (
              <li
                key={index}
                className="border-b border-[rgba(255,255,255,0.2)] py-[15px]"
              >
                <Link
                  href={link.href}
                  className="pl-[20px]"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-[20px] left-0 w-full flex justify-between items-end">
            <ul className="flex flex-col text-[12px] gap-[8px] ml-margin-mobile">
              {dataMobile.socialMedia.map((social, index) => (
                <li key={index}>
                  <Link href={social.url}>{social.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col text-[12px] gap-[8px] text-right mr-margin-mobile">
              {/* <div className="flex md:hidden items-center justify-end gap-2 uppercase text-[12px] text-white ">
                {availableLangs.map((lang, index) => (
                  <div key={lang} className="flex items-center gap-2">
                    <Link href={languages[lang]} onClick={toggleMenu}>
                      {lang}
                    </Link>
                    {index < availableLangs.length - 1 && <span>/</span>}
                  </div>
                ))}
              </div> */}
              {dataMobile.legalLinks.map((legal, index) => (
                <Link key={index} href={legal.href}>
                  {legal.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-[80px]">
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
        <div
          className={`hidden md:flex items-center gap-2 uppercase text-[16px] ${
            isHome ? "text-main-white" : "text-black"
          }`}
        >
          {availableLangs.map((lang, index) => (
            <div key={lang} className="flex items-center gap-2">
              <Link href={languages[lang]}>{lang}</Link>
              {index < availableLangs.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
