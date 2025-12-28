import Navigation from "./Navigation";

import { sanityClient } from "../../../lib/sanity/client";
import {
  navigationMobileQuery,
  navigationQuery,
} from "../../../lib/sanity/queries";

export const revalidate = 3600;

export default async function Header({ lang }) {
  const navigationData = await sanityClient.fetch(navigationQuery);

  const navigation = {
    logo: navigationData.logo?.logoLabel,
    links: navigationData.links?.items || [],
  };

  const navigationMobileData = await sanityClient.fetch(navigationMobileQuery);
  // const navigationMobile = navigationMobileData;

  const navigationMobile = {
    logo: navigationMobileData.logo?.logoLabel,
    links: navigationMobileData.links?.items || [],
    closeIcon: navigationMobileData.closeIcon?.[lang],
    socialMedia: navigationMobileData.socialMedia || [],
    legalLinks: navigationMobileData.legalLinks?.links || [],
    socialMedia: navigationMobileData.socialMedia?.socials || [],
  };

  return (
    <header className="fixed z-1000 w-full top-0">
      <Navigation data={navigation} dataMobile={navigationMobile} lang={lang} />
    </header>
  );
}
