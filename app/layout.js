import "./globals.css";
import Header from "./components/Header/Header";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${poppins.className} antialiased bg-bg-main`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
