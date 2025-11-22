import Navigation from "./Navigation";

import { sanityClient } from "../../../lib/sanity/client";
import { navigationQuery } from "../../../lib/sanity/queries";

export const revalidate = 0;

export default async function Header() {
  const navigationData = await sanityClient.fetch(navigationQuery);
  const navigation = navigationData;

  return (
    <header className="fixed z-1000 w-full top-0">
      <Navigation data={navigation} />
    </header>
  );
}
