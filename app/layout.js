import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ViewTransitions>
  );
}
