"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navigation({ data, dataMobile, lang }) {
  const pathname = usePathname();
  const isHome = ["/en", "/pl", "/de"].includes(pathname);
  const isContact = pathname.includes("/contact");

  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const SUPPORTED_LANGS = ["en", "pl", "de"];
  const currentLang =
    SUPPORTED_LANGS.find((l) => pathname.startsWith(`/${l}`)) || "en";
  const availableLangs = SUPPORTED_LANGS.filter((l) => l !== currentLang);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getHomeLink = () => `/${currentLang}`;

  const getLocalizedLink = (targetPath) => {
    if (!targetPath.startsWith("/")) return targetPath;
    return `/${currentLang}${targetPath === "/" ? "" : targetPath}`;
  };

  const getLangSwitcherLink = (targetLang) => {
    if (currentLang === targetLang) return pathname;
    let pathWithoutLang = pathname.replace(`/${currentLang}`, "") || "/";
    return `/${targetLang}${pathWithoutLang === "/" ? "" : pathWithoutLang}`;
  };

  // Scroll effect - hide/show + zmiana kolorów
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return; // jeśli menu otwarte, nie reagujemy na scroll

      const currentScrollY = window.scrollY;

      // Hide/show navbar dopiero po zescrollowaniu 50px
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current) {
          setHideNav(true);
        } else {
          setHideNav(false);
        }
      } else {
        setHideNav(false); // zawsze pokazuj navbar, jeśli scroll < 50px
      }

      lastScrollY.current = currentScrollY;

      // Zmiana kolorów dla strony głównej i kontakt
      let threshold = isHome
        ? window.innerHeight - 30
        : isContact
        ? window.innerHeight - 50
        : 0;
      if (currentScrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, isContact, isOpen]);

  // Blokada scrolla body kiedy mobile menu otwarte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!data) return null;

  // TU ZOSTAWIAM WSZYSTKIE TWOJE STYLE KOLORÓW BEZ ZMIAN
  const logoColor =
    !isHome || isScrolled || isContact ? "text-main-black" : "text-main-white";
  const linkColor =
    !isHome || isScrolled || isContact
      ? "md:text-main-black"
      : "text-main-white";

  return (
    <nav
      className={`flex items-center justify-between px-[20px] lg:mx-desktop pt-mobile-navigation-top md:px-[40px] lg:px-0 2xl:mx-desktop lg:pt-desktop-navigation-top transition-transform duration-500 ease-in-out ${
        hideNav ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* LOGO */}
      <span className={`md:text-logo-font-size ${logoColor}`}>
        <Link href={getHomeLink()}>{data.logo}</Link>
      </span>

      {/* MOBILE BURGER */}
      <div className="flex items-center flex-row-reverse gap-[40px] absolute right-0  md:right-[20px]">
        <div
          className="lg:hidden flex flex-col gap-burger-line-gap items-end cursor-pointer p-[20px]"
          onClick={toggleMenu}
        >
          <span
            className={`h-burger-line-height w-[17px] ${
              !isHome || isScrolled || isContact
                ? "bg-main-black"
                : "bg-main-white"
            }`}
          ></span>
          <span
            className={`h-burger-line-height w-[24px] ${
              !isHome || isScrolled || isContact
                ? "bg-main-black"
                : "bg-main-white"
            }`}
          ></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="h-[100dvh] w-full fixed top-0 left-0 z-50 lg:hidden bg-main-black text-main-white">
          <div className="flex justify-between items-center pt-mobile-navigation-top px-[20px] md:px-[40px] md:text-logo-font-size ">
            <Link href={getHomeLink()} onClick={toggleMenu}>
              {dataMobile.logo}
            </Link>
            <div className="flex flex-row-reverse gap-[30px]">
              <span
                className="uppercase text-[14px] text-white font-medium-font-weight cursor-pointer md:text-[16px]"
                onClick={toggleMenu}
              >
                {dataMobile?.closeIcon}
              </span>
              <div className="flex lg:hidden items-center justify-end gap-2 uppercase text-[14px] md:text-[16px] text-white">
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

          <ul className="flex flex-col gap-[5px] absolute top-[50%] left-0 transform -translate-y-1/2 w-full text-[clamp(20px,6vw,40px)] font-normal-font-weight uppercase border-t border-[rgba(255,255,255,0.2)] max-w-[50%] ">
            {dataMobile.links.map((link, index) => (
              <li
                key={index}
                className="border-b border-[rgba(255,255,255,0.2)] py-[15px]"
              >
                <Link
                  href={`/${lang}/${getLocalizedLink(link?.href)}`}
                  className="pl-[20px] md:pl-[40px]"
                  onClick={toggleMenu}
                >
                  {link?.label?.[lang]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-[20px] left-0 w-full flex justify-between items-end px-[20px] md:px-[40px]">
            <ul className="flex flex-col text-[14px] gap-[8px] md:text-[16px]">
              {dataMobile.socialMedia.map((social, index) => (
                <li key={index}>
                  <Link target="_blank" href={social?.url}>
                    {social?.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col text-[12px] gap-[8px] text-right md:text-[14px]">
              {dataMobile.legalLinks.map((legal, index) => (
                <Link
                  key={index}
                  href={`/${lang}/${legal?.href}`}
                  onClick={toggleMenu}
                >
                  {legal?.label?.[lang]}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex gap-[80px]">
        <ul
          className={`hidden lg:flex gap-between-navigation-links items-center xl:gap-between-navigation-links-xl ${linkColor} `}
        >
          {data.links.map((link, index) => (
            <li key={index}>
              <Link
                href={`/${lang}/${getLocalizedLink(link?.href)}`}
                className="group relative inline-flex leading-none overflow-hidden text-links-size-navigation-mobile xl:text-links-size-navigation-desktop"
              >
                <span className="relative block h-[1em] overflow-hidden">
                  {/* pierwszy */}
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
                    {link?.label?.[lang]}
                  </span>

                  {/* drugi */}
                  <span className="absolute left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
                    {link?.label?.[lang]}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`hidden md:flex items-center gap-2 uppercase text-[16px] ${linkColor} `}
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
