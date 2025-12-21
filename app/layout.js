import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
