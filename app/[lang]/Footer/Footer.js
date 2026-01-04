import Image from "next/image";
import { footerData } from "@/app/data/sectionsData/footer/footerData";
import FooterNavLink from "@/app/components/FooterNavLink";
import FadeInMobile from "@/app/components/FadeInMobile";

export const revalidate = 0;

export default async function Footer({ lang }) {
  const footer = footerData;
  console.log(footer);
  return (
    <footer className="bg-main-black pb-[30px]">
      <div className="lg:flex ">
        <div className="flex justify-center mb-[5px] lg:w-[100%] lg:pt-0">
          <div className="w-[250px] md:w-[300px] lg:w-[400px] flex items-center">
            <Image
              src={footer.logo}
              alt="footer"
              width={400}
              height={300}
              sizes="(max-width: 640px) 120px,
             (max-width: 768px) 160px,
             (max-width: 1024px) 220px,
             400px"
              className="w-full h-auto object-contain"
            />
          </div>
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
        <div className="flex gap-x-[20px] flex-wrap justify-between min-[436px]:gap-x-[50px] gap-y-[50px] lg:mx-[50px] lg:pt-[40px] lg:max-w-[65%] xl:justify-between 2xl:max-w-[45%]">
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

        <span className="text-[clamp(12px,3.5vw,16px)] leading-[30px] text-white">
          <FadeInMobile>{footer?.copyrightText?.[lang]}</FadeInMobile>
        </span>
      </div>
    </footer>
  );
}
