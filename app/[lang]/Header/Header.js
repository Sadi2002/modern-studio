import Navigation from "./Navigation";
import { navigationMobileData } from "@/app/data/sectionsData/navigation/mobile/navigationMobileData";
import { navigationDesktopData } from "@/app/data/sectionsData/navigation/desktop/navigationDesktopData";

export default function Header({ lang }) {
  return (
    <header className="fixed top-0 w-full z-9999 h-[80px]">
      <Navigation
        data={navigationDesktopData}
        dataMobile={navigationMobileData}
        lang={lang}
      />
    </header>
  );
}
