import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
// import Intro from "./components/Intro";

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className="max-w-[1920px] mx-auto">
          {/* <Intro /> */}
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
