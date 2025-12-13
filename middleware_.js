// import { NextResponse } from "next/server";

// const SUPPORTED = ["pl", "de", "en"];

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // 1️⃣ pomijamy assety i już zlokalizowane ścieżki
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/api") ||
//     SUPPORTED.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
//   ) {
//     return;
//   }

//   // 2️⃣ cookie
//   const cookieLang = request.cookies.get("lang")?.value;
//   if (cookieLang && SUPPORTED.includes(cookieLang)) {
//     return NextResponse.redirect(
//       new URL(`/${cookieLang}${pathname}`, request.url)
//     );
//   }

//   // 3️⃣ GEO (Vercel)
//   const country = request.geo?.country;
//   if (country === "DE")
//     return NextResponse.redirect(new URL(`/de${pathname}`, request.url));
//   if (country === "PL")
//     return NextResponse.redirect(new URL(`/pl${pathname}`, request.url));

//   // 4️⃣ Accept-Language
//   const accept = request.headers.get("accept-language") || "";
//   const lang = accept.split(",")[0].slice(0, 2);
//   const finalLang = SUPPORTED.includes(lang) ? lang : "en";

//   // Jeśli język to en, redirect na /en zamiast samego /
//   return NextResponse.redirect(
//     new URL(`/${finalLang}${pathname}`, request.url)
//   );
// }
