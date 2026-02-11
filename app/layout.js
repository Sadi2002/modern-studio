import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Intro from "./components/Intro";
import ChatArchitekt from "./components/ChatArchitekt";
// import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className="max-w-[1920px] mx-auto">
          {/* <GoogleAnalytics gaId="G-QRXY895P90" /> */}
          <Intro />
          <ChatArchitekt />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
