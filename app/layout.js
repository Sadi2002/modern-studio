import "./globals.css";
import Header from "./components/Header/Header";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],

  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${poppins.className} min-h-screen bg-bg-main`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
