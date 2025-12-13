import { NextResponse } from "next/server";

const SUPPORTED = ["pl", "de", "en"];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.match(/\.(.*)$/) ||
    SUPPORTED.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  ) {
    return;
  }

  const cookieLang = request.cookies.get("lang")?.value;
  if (cookieLang && SUPPORTED.includes(cookieLang)) {
    return NextResponse.redirect(
      new URL(`/${cookieLang}${pathname}`, request.url)
    );
  }

  const country = request.geo?.country;
  if (country === "DE")
    return NextResponse.redirect(new URL(`/de${pathname}`, request.url));
  if (country === "PL")
    return NextResponse.redirect(new URL(`/pl${pathname}`, request.url));

  const accept = request.headers.get("accept-language") || "";
  const lang = accept.split(",")[0].slice(0, 2);
  const finalLang = SUPPORTED.includes(lang) ? lang : "en";

  return NextResponse.redirect(
    new URL(`/${finalLang}${pathname}`, request.url)
  );
}
