import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (/^\/(pl|de|en)(\/|$)/.test(pathname)) {
    return NextResponse.next();
  }

  // 1. cookie
  const cookieLang = request.cookies.get("lang")?.value;

  // 2. Accept-Language
  const headerLang = (() => {
    const al = request.headers.get("accept-language");
    if (!al) return null;
    if (al.startsWith("pl")) return "pl";
    if (al.startsWith("de")) return "de";
    if (al.startsWith("en")) return "en";
    return null;
  })();

  // 3. Geo (fallback)
  const geoLang =
    request.geo?.country === "PL"
      ? "pl"
      : request.geo?.country === "DE"
      ? "de"
      : null;

  const lang = cookieLang || headerLang || geoLang;

  if (lang) {
    const url = request.nextUrl.clone();
    url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
