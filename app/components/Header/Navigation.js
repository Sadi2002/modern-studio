"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navigation({ data, dataMobile, lang }) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/pl" || pathname === "/de";
  const isContact = pathname.includes("/contact");

  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: "/",
    pl: "/pl",
    de: "/de",
  };

  // Określamy bieżący język
  let currentLang = "en";
  if (pathname.startsWith("/pl")) currentLang = "pl";
  else if (pathname.startsWith("/de")) currentLang = "de";

  // Dostępne języki w menu
  let availableLangs = [];
  if (currentLang === "en") availableLangs = ["pl", "de"];
  else if (currentLang === "pl") availableLangs = ["en", "de"];
  else if (currentLang === "de") availableLangs = ["en", "pl"];

  const toggleMenu = () => setIsOpen(!isOpen);

  if (!data) return null;

  // Link do strony głównej z zachowaniem prefiksu języka
  const getHomeLink = () => {
    return currentLang === "en" ? "/" : `/${currentLang}`;
  };

  // Funkcja do generowania linków zależnie od języka
  const getLocalizedLink = (targetPath) => {
    if (!targetPath.startsWith("/")) return targetPath;
    if (currentLang === "en") return targetPath;
    return `/${currentLang}${targetPath}`;
  };

  // Funkcja do generowania linków w switcherze języków, zachowując bieżącą ścieżkę
  const getLangSwitcherLink = (targetLang) => {
    if (currentLang === targetLang) return pathname;
    let pathWithoutLang = pathname;
    if (currentLang !== "en") {
      pathWithoutLang = pathname.replace(`/${currentLang}`, "") || "/";
    }
    if (targetLang === "en") return pathWithoutLang || "/";
    return `/${targetLang}${pathWithoutLang}`;
  };

  return (
    <nav className="flex items-center justify-between mx-margin-mobile lg:mx-desktop pt-mobile-navigation-top md:mx-tablet 2xl:mx-desktop lg:pt-desktop-navigation-top">
      {/* LOGO */}
      <span
        className={`md:text-logo-font-size ${
          isHome ? "text-main-white" : "text-main-black"
        }`}
      >
        <Link href={getHomeLink()}>{data.logo}</Link>
      </span>

      {/* MOBILE BURGER */}
      <div className="flex items-center flex-row-reverse gap-[40px]">
        <div
          className="md:hidden flex flex-col gap-burger-line-gap items-end"
          onClick={toggleMenu}
        >
          <span
            className={`h-burger-line-height w-[17px] ${
              isHome ? "bg-main-white" : "bg-main-black"
            }`}
          ></span>
          <span
            className={`h-burger-line-height w-[24px] ${
              isHome ? "bg-main-white" : "bg-main-black"
            }`}
          ></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="h-[100dvh] w-full fixed top-0 left-0 bg-main-black z-50 md:hidden text-main-white">
          <div className="flex justify-between items-center mx-margin-mobile pt-mobile-navigation-top">
            <Link href={getHomeLink()} onClick={toggleMenu}>
              {dataMobile.logo}
            </Link>
            <div className="flex flex-row-reverse gap-[30px]">
              <span
                className="uppercase text-[14px] text-white font-medium-font-weight"
                onClick={toggleMenu}
              >
                {dataMobile?.closeIcon?.[lang]}
              </span>
              <div className="flex md:hidden items-center justify-end gap-2 uppercase text-[14px] text-white ">
                {availableLangs.map((lang, index) => (
                  <div key={lang} className="flex items-center gap-2">
                    <Link href={getLangSwitcherLink(lang)} onClick={toggleMenu}>
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
                  href={getLocalizedLink(link?.href?.[lang])}
                  className="pl-[20px]"
                  onClick={toggleMenu}
                >
                  {link?.label?.[lang]}
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
              {dataMobile.legalLinks.map((legal, index) => (
                <Link key={index} href={getLocalizedLink(legal?.href?.[lang])}>
                  {legal?.label?.[lang]}
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
          } ${isContact ? "lg:text-main-white" : ""}`}
        >
          {data.links.map((link, index) => (
            <li key={index}>
              <Link
                href={getLocalizedLink(link?.href?.[lang])}
                className="text-links-size-navigation-mobile xl:text-links-size-navigation-desktop"
              >
                {link?.label?.[lang]}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`hidden md:flex items-center gap-2 uppercase text-[16px] ${
            isHome ? "text-main-white" : "md:text-main-black"
          } ${isContact ? "lg:text-main-white" : ""}`}
        >
          {availableLangs.map((lang, index) => (
            <div key={lang} className="flex items-center gap-2">
              <Link href={getLangSwitcherLink(lang)}>{lang}</Link>
              {index < availableLangs.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
