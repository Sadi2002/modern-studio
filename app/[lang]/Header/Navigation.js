"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navigation({ data, dataMobile, lang }) {
  const pathname = usePathname();
  const isHome = ["/en", "/pl", "/de"].includes(pathname);
  const isContact = pathname.includes("/contact");

  const [isOpen, setIsOpen] = useState(false);

  const SUPPORTED_LANGS = ["en", "pl", "de"];

  // Określamy bieżący język na podstawie prefixu
  let currentLang =
    SUPPORTED_LANGS.find((l) => pathname.startsWith(`/${l}`)) || "en";

  // Pozostałe języki do switchera
  const availableLangs = SUPPORTED_LANGS.filter((l) => l !== currentLang);

  const toggleMenu = () => setIsOpen(!isOpen);

  if (!data) return null;

  // Link do strony głównej z prefiksem języka
  const getHomeLink = () => `/${currentLang}`;

  // Generowanie linków w nawigacji
  const getLocalizedLink = (targetPath) => {
    if (!targetPath.startsWith("/")) return targetPath;
    return `/${currentLang}${targetPath === "/" ? "" : targetPath}`;
  };

  // Generowanie linków w switcherze języków
  const getLangSwitcherLink = (targetLang) => {
    if (currentLang === targetLang) return pathname;

    // Usuń obecny prefiks języka
    let pathWithoutLang = pathname.replace(`/${currentLang}`, "") || "/";
    return `/${targetLang}${pathWithoutLang === "/" ? "" : pathWithoutLang}`;
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
              <div className="flex md:hidden items-center justify-end gap-2 uppercase text-[14px] text-white">
                {availableLangs.map((l, idx) => (
                  <div key={l} className="flex items-center gap-2">
                    <Link href={getLangSwitcherLink(l)} onClick={toggleMenu}>
                      {l}
                    </Link>
                    {idx < availableLangs.length - 1 && <span>/</span>}
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
          {availableLangs.map((l, idx) => (
            <div key={l} className="flex items-center gap-2">
              <Link href={getLangSwitcherLink(l)}>{l}</Link>
              {idx < availableLangs.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
