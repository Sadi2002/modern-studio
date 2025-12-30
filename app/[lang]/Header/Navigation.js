"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "../../components/animations/slideInOut";
import MobileMenuReveal from "@/app/components/MobileMenuReveal";

export default function Navigation({ data, dataMobile, lang }) {
  const isSameRoute = (href) => {
    return href === pathname;
  };
  const router = useTransitionRouter();

  const pathname = usePathname();
  const isHome = ["/en", "/pl", "/de"].includes(pathname);
  const isContact = pathname.includes("/contact");

  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [showLines, setShowLines] = useState(false);

  const lastScrollY = useRef(0);

  const SUPPORTED_LANGS = ["en", "pl", "de"];
  const currentLang =
    SUPPORTED_LANGS.find((l) => pathname.startsWith(`/${l}`)) || "en";
  const availableLangs = SUPPORTED_LANGS.filter((l) => l !== currentLang);

  const toggleMenu = () => {
    if (isOpen) {
      // CLOSE
      setShowLines(false);
      setShowMobileHeader(false);
      setIsOpen(false);
    } else {
      // OPEN
      setIsOpen(true);

      // 🔥 header po 100ms
      setTimeout(() => {
        setShowMobileHeader(true);
      }, 100);

      // 🔥 linie / linki później
      setTimeout(() => {
        setShowLines(true);
      }, 600);
    }
  };

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

  useEffect(() => {
    // ⬅️ ZA KAŻDYM RAZEM, GDY ZMIENIA SIĘ STRONA
    setIsOpen(false);
    setShowMobileHeader(false);
    setShowLines(false);
  }, [pathname]);

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
        <Link
          href={getHomeLink()} // = `/${currentLang}`
          onClick={(e) => {
            const target = getHomeLink(); // `/${currentLang}`

            if (pathname === target) {
              // jesteś już na home → nie odpalaj animacji
              return;
            }

            e.preventDefault();

            router.push(target, {
              onTransitionReady: slideInOut,
            });
          }}
        >
          {data.logo}
        </Link>
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
      {/* MOBILE MENU HEADER (nie animowany) */}

      <div
        className={`fixed top-0 left-0 z-[60] w-full lg:hidden text-main-white ${
          showMobileHeader ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          opacity: showMobileHeader ? 1 : 0,
          transform: showMobileHeader ? "translateY(0)" : "translateY(-6px)",
          transition: "opacity 300ms ease, transform 300ms ease",
        }}
      >
        <div className="flex justify-between items-center pt-mobile-navigation-top px-[20px] md:px-[40px] md:text-logo-font-size">
          <Link
            href={getHomeLink()}
            onClick={(e) => {
              const target = getHomeLink();
              if (pathname === target) {
                toggleMenu();
                return;
              }
              e.preventDefault();
              toggleMenu();
              router.push(target, { onTransitionReady: slideInOut });
            }}
          >
            <MobileMenuReveal isOpen={isOpen} delay={0}>
              {dataMobile.logo}
            </MobileMenuReveal>
          </Link>

          <div className="flex flex-row-reverse gap-[30px]">
            <span
              className="uppercase text-[14px] text-white font-medium-font-weight cursor-pointer md:text-[16px]"
              onClick={toggleMenu}
            >
              <MobileMenuReveal isOpen={isOpen} delay={0}>
                {dataMobile?.closeIcon}
              </MobileMenuReveal>
            </span>

            <div className="flex lg:hidden items-center justify-end gap-2 uppercase text-[14px] md:text-[16px] text-white">
              {availableLangs.map((l, idx) => (
                <div key={l} className="flex items-center gap-2">
                  <Link
                    href={getLangSwitcherLink(l)}
                    onClick={(e) => {
                      const target = getLangSwitcherLink(l);
                      if (pathname === target) {
                        toggleMenu();
                        return;
                      }
                      e.preventDefault();
                      router.push(target, {
                        onTransitionReady: () => {
                          slideInOut();
                          toggleMenu();
                        },
                      });
                    }}
                  >
                    <MobileMenuReveal isOpen={isOpen} delay={0}>
                      {l}
                    </MobileMenuReveal>
                  </Link>

                  {idx < availableLangs.length - 1 && (
                    <span>
                      <MobileMenuReveal isOpen={isOpen} delay={0}>
                        /
                      </MobileMenuReveal>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed top-0 left-0 z-50 lg:hidden h-[100dvh] w-full bg-main-black text-main-white
             transition-transform duration-[1200ms]
             ease-[cubic-bezier(0.75,0.10,0.22,1)]"
        style={{
          transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* <div className="flex justify-between items-center pt-mobile-navigation-top px-[20px] md:px-[40px] md:text-logo-font-size ">
          <Link
            href={getHomeLink()}
            onClick={(e) => {
              const target = getHomeLink(); // `/${currentLang}`

              if (pathname === target) {
                // jesteś już na home → tylko zamknij menu
                toggleMenu();
                return;
              }

              e.preventDefault();

              toggleMenu();
              router.push(target, { onTransitionReady: slideInOut });
            }}
          >
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
                  <Link
                    href={getLangSwitcherLink(l)}
                    onClick={(e) => {
                      const target = getLangSwitcherLink(l);

                      if (pathname === target) {
                        // ten sam język → tylko zamknij menu
                        toggleMenu();
                        return;
                      }

                      e.preventDefault();

                      router.push(target, {
                        onTransitionReady: () => {
                          slideInOut();
                          toggleMenu(); // zamykamy menu po starcie animacji
                        },
                      });
                    }}
                  >
                    {l}
                  </Link>

                  {idx < availableLangs.length - 1 && <span>/</span>}
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <ul className="relative flex flex-col gap-[5px] absolute top-[50%] left-0 transform -translate-y-1/2 w-full text-[clamp(20px,6vw,40px)] font-normal-font-weight uppercase max-w-[50%]">
          <span
            className="absolute top-0 left-0 h-[1px] w-full bg-[rgba(255,255,255,0.2)] pointer-events-none"
            style={{
              opacity: showLines ? 1 : 0,
              transition: "opacity 400ms ease",
            }}
          />

          {dataMobile.links.map((link, index) => (
            <li key={index} className="relative py-[15px] overflow-hidden">
              {/* 🔹 LINIA POD KAŻDYM LINKIEM */}
              <span
                className="absolute left-0 bottom-0 h-[1px] w-full bg-[rgba(255,255,255,0.2)] pointer-events-none"
                style={{
                  opacity: showLines ? 1 : 0,
                  transition: "opacity 400ms ease",
                }}
              />

              <Link
                href={`/${lang}/${getLocalizedLink(link?.href)}`}
                className="pl-[20px] md:pl-[40px]"
                onClick={(e) => {
                  const target = `/${lang}/${getLocalizedLink(link?.href)}`;
                  if (isSameRoute(target)) return;

                  e.preventDefault();
                  router.push(target, {
                    onTransitionReady: () => {
                      slideInOut();
                      setIsOpen(false);
                    },
                  });
                }}
              >
                <MobileMenuReveal
                  isOpen={isOpen}
                  delay={600}
                  staggerIndex={index}
                >
                  {link?.label?.[lang]}
                </MobileMenuReveal>
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-[20px] left-0 w-full flex justify-between items-end px-[20px] md:px-[40px]">
          <ul className="flex flex-col text-[14px] gap-[8px] md:text-[16px]">
            {dataMobile.socialMedia.map((social, index) => (
              <li key={index}>
                <Link target="_blank" href={social?.url}>
                  <MobileMenuReveal isOpen={isOpen} delay={600}>
                    {social?.title}
                  </MobileMenuReveal>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col text-[12px] gap-[8px] text-right md:text-[14px]">
            {dataMobile.legalLinks.map((legal, index) => {
              const target = `/${lang}/${legal?.href}`;

              return (
                <Link
                  key={index}
                  href={target}
                  onClick={(e) => {
                    if (pathname === target) {
                      // ta sama strona → tylko zamknij menu
                      toggleMenu();
                      return;
                    }

                    e.preventDefault();

                    router.push(target, {
                      onTransitionReady: () => {
                        slideInOut();
                        toggleMenu(); // zamykamy menu PO starcie animacji
                      },
                    });
                  }}
                >
                  <MobileMenuReveal isOpen={isOpen} delay={600}>
                    {legal?.label?.[lang]}
                  </MobileMenuReveal>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex gap-[80px]">
        <ul
          className={`hidden lg:flex gap-between-navigation-links items-center xl:gap-between-navigation-links-xl ${linkColor} `}
        >
          {data.links.map((link, index) => (
            <li key={index}>
              <Link
                onClick={(e) => {
                  const target = `/${lang}/${getLocalizedLink(link?.href)}`;

                  if (isSameRoute(target)) return;
                  e.preventDefault();

                  router.push(`/${lang}/${getLocalizedLink(link?.href)}`, {
                    onTransitionReady: slideInOut,
                  });
                }}
                href={`/${lang}/${getLocalizedLink(link?.href)}`}
                className="group relative inline-flex leading-none overflow-hidden text-links-size-navigation-mobile xl:text-links-size-navigation-desktop"
              >
                <span className="relative block overflow-hidden">
                  {/* pierwszy */}
                  <span className="block leading-[20px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
                    {link?.label?.[lang]}
                  </span>

                  {/* drugi */}
                  <span className="absolute leading-[20px] left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
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
              <Link
                href={getLangSwitcherLink(l)}
                onClick={(e) => {
                  const target = getLangSwitcherLink(l);

                  if (pathname === target) {
                    // klik w aktualny język → brak animacji
                    return;
                  }

                  e.preventDefault();

                  router.push(target, {
                    onTransitionReady: slideInOut,
                  });
                }}
                className="group relative inline-flex leading-none overflow-hidden"
              >
                <span className="relative block overflow-hidden leading-[20px]">
                  {/* pierwszy */}
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
                    {l}
                  </span>

                  {/* drugi */}
                  <span className="absolute left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
                    {l}
                  </span>
                </span>
              </Link>
              {idx < availableLangs.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
