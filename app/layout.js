import "./globals.css";
import Header from "./components/Header/Header";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer/Footer";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
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
