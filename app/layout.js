import "./globals.css";
import Header from "./components/Header/Header";
import localFont from "next/font/local";
import Footer from "./components/Footer/Footer";

export const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        {/* Preconnect do Google Fonts, przyspiesza pobranie fontów */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.className} min-h-screen bg-bg-main`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
