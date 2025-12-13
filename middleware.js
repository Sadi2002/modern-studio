import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // pomiń zasoby techniczne
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // jeśli URL już zawiera język — nie rób nic
  if (/^\/(de|en|pl)(\/|$)/.test(pathname)) {
    return NextResponse.next();
  }

  const country = request.geo?.country; // "DE", "PL", itd.

  if (country === "DE") {
    const url = request.nextUrl.clone();
    url.pathname = `/de${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next|api|.*\\.).*)"],
};
