import Navigation from "./Navigation";
import { navigationMobileData } from "@/app/data/sectionsData/navigation/mobile/navigationMobileData";
import { navigationDesktopData } from "@/app/data/sectionsData/navigation/desktop/navigationDesktopData";

export default function Header({ lang }) {
  return (
    <header className="fixed top-0 w-full z-9999 h-[80px]">
      {/* ✅ LCP LOGO — SERVER RENDER (1:1 wizualnie) */}
      <span className="absolute left-[20px] top-[20px] md:text-logo-font-size text-main-white">
        <a href={`/${lang}`}>Sadowski Studio</a>
      </span>

      {/* ❌ cała reszta BEZ ZMIAN */}
      <Navigation
        data={navigationDesktopData}
        dataMobile={navigationMobileData}
        lang={lang}
      />
    </header>
  );
}
