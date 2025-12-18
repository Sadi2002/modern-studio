import Navigation from "./Navigation";

import { sanityClient } from "../../../lib/sanity/client";
import {
  navigationMobileQuery,
  navigationQuery,
} from "../../../lib/sanity/queries";

export const revalidate = 0;

export default async function Header({ lang }) {
  const navigationData = await sanityClient.fetch(navigationQuery);

  const navigation = {
    logo: navigationData.logo?.logoLabel,
    links: navigationData.links?.items || [],
  };

  const navigationMobileData = await sanityClient.fetch(navigationMobileQuery);
  const navigationMobile = navigationMobileData;

  console.log(navigation);

  return (
    <header className="fixed z-1000 w-full top-0">
      <Navigation data={navigation} dataMobile={navigationMobile} lang={lang} />
    </header>
  );
}
