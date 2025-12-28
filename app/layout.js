import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Intro from "./components/Intro";

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <Intro />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
