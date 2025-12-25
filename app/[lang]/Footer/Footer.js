import Image from "next/image";
import Link from "next/link";

import { sanityClient } from "../../../lib/sanity/client";
import { footerQuery } from "../../../lib/sanity/queries";

import { urlFor } from "../../../lib/sanity/client";

import FooterNavLink from "@/app/components/FooterNavLink";

export const revalidate = 0;

export default async function Footer({ lang }) {
  const footerData = await sanityClient.fetch(footerQuery);
  const footer = footerData;
  console.log(footer);

  return (
    <footer className="bg-main-black pb-[30px]">
      <div className="lg:flex ">
        <div className="flex justify-center mb-[5px] lg:w-[100%] lg:pt-0">
          <Image
            src={urlFor(footer.logo).url()}
            alt="footer"
            width={220}
            height={165}
            className="object-cover md:w-[400px]"
          />
        </div>
        <div className="border-t border-[rgba(255,255,255,.2)] w-[70%] mb-[70px] lg:pt-[80px] lg:mb-0 lg:border-none ">
          <ul>
            {footer.navLinks.map((link, index) => (
              <li
                key={index}
                className="py-[15px] border-b border-[rgba(255,255,255,.2)]  lg:py-[30px] last:lg:border-b-0"
              >
                <FooterNavLink
                  href={`/${lang}${link?.url?.[lang]}`}
                  label={link?.title?.[lang]}
                  className="uppercase text-white text-[clamp(20px,5vw,23px)] flex pl-[20px] md:pl-[40px] leading-none"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="mx-margin-mobile md:mx-tablet   justify-between  mb-[50px] lg:border-t lg:border-[rgba(255,255,255,0.2)] lg:justify-start lg:gap-x-[50px] lg:pt-[15px] lg:mx-0 lg:mb-[80px]
       xl:justify-between "
      >
        <div className="flex flex-wrap justify-between min-[436px]:gap-x-[50px] gap-y-[50px] lg:mx-[50px] lg:pt-[40px] lg:max-w-[65%] xl:justify-between 2xl:max-w-[45%]">
          {footer.quickContact.map((contact, index) => (
            <div key={index}>
              <h3 className="text-white text-[clamp(20px,5.5vw,23px)] font-medium mb-[20px]">
                {contact?.sectionTitle?.[lang]}
              </h3>
              <ul className="flex flex-col gap-[10px]">
                {contact.items.map((item, idx) => (
                  <li key={idx}>
                    <FooterNavLink
                      href={item.url}
                      label={item?.title?.[lang]}
                      className="text-white text-[clamp(12px,3.5vw,16px)] flex"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[5px] items-end mx-margin-mobile md:mx-tablet lg:flex-row lg:justify-end lg:gap-x-[50px] 2xl:gap-x-[80px]">
        <FooterNavLink
          href={`/${lang}/${footer?.privacyPolicy?.privacyPolicyHref}`}
          label={footer?.privacyPolicy?.privacyPolicyLabel?.[lang]}
          className="text-[clamp(12px,3.5vw,16px)] text-white"
        />

        <span className="text-[clamp(12px,3.5vw,16px)] leading-[20px]  text-white">
          {footer?.copyrightText?.[lang]}
        </span>
      </div>
    </footer>
  );
}
