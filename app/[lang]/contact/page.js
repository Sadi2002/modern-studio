import Link from "next/link";
import ArrowWhite from "../../../public/arrow-right-white.png";
import Button from "../../components/Button";
import { sanityClient } from "../../../lib/sanity/client";
import { contactPageQuery } from "@/lib/sanity/queries";
import ContactForm from "../../components/ContactForm";
import RevealAfterTransition from "@/app/components/RevealAfterTransition";
import FadeInMobile from "@/app/components/FadeInMobile";

export const revalidate = 0;

export default async function Contact({ params }) {
  const getParams = await params;
  console.log(getParams);
  const lang = getParams.lang;
  const contactPageData = await sanityClient.fetch(contactPageQuery);

  console.log(contactPageData);

  const section = contactPageData?.contactSection || {};

  console.log(section);

  const title = section?.title?.[lang] || "Let’s create the unforgettable";
  const description =
    section?.description?.[lang] ||
    "For all inquiries, please contact our team. We are ready to discuss new projects, answer your questions, and explore how we can bring your";
  const formTitle = section?.formTitle?.[lang] || "Send a message";
  const nameLabel = section?.nameLabel?.[lang] || "Name";
  const emailLabel = section?.emailLabel?.[lang] || "Email";
  const messageLabel = section?.messageLabel?.[lang] || "Message";
  const submitLabel = section?.submitLabel?.[lang] || "Send message";

  const thankYouMessage =
    section?.thankYouMessage?.[lang] ||
    "Your message has been sent successfully.";

  const errorMessage =
    section?.errorMessage?.[lang] || "An error occurred. Please try again.";

  const privacyText =
    section?.privacyPolicyText?.[lang] || "I accept the privacy policy.";

  const additional = section.additionalInfo || {};
  const email = additional.email || "kontakt@sadowskistudio.com";
  const phone = additional.phone || "+48 414 512 859";
  const facebookLabel = additional.facebookLabel || "Facebook";
  const facebookUrl = additional.facebookUrl || "https://google.com";

  console.log(additional);

  return (
    <section className="flex flex-col gap-[40px] lg:gap-0 lg:flex-row w-full lg:items-center lg:mt-[100px] lg:h-[calc(100dvh-100px)]">
      <div className="flex-1 pt-[100px] md:pt-[150px] lg:pt-0 mx-margin-mobile md:mx-tablet lg:ml-[50px] 2xl:mx-[50px]">
        <h1 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] uppercase font-medium mb-[20px] max-w-[500px] xl:max-w-[700px] lg:text-[45px] lg:leading-[45px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px]  2xl:text-[clamp(60px,4.3vw,5rem)] 2xl:leading-[80px] lg:font-normal 2xl:max-w-[75%]">
          <RevealAfterTransition delay={0} stagger={50}>
            {title}
          </RevealAfterTransition>
        </h1>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight mb-[40px] lg:mb-[40px] xl:max-w-[700px]">
          <RevealAfterTransition delay={0} stagger={5}>
            {description}
          </RevealAfterTransition>
        </p>
        <ContactForm
          formTitle={formTitle}
          nameLabel={nameLabel}
          emailLabel={emailLabel}
          messageLabel={messageLabel}
          submitLabel={submitLabel}
          thankYouMessage={thankYouMessage}
          errorMessage={errorMessage}
          privacyText={privacyText}
        />
      </div>
      <div className=" lg:bg-black flex lg:pt-[40px] px-[20px] pb-[70px] md:px-[40px] lg:p-0 lg:mt-[100px] lg:h-[100dvh] w-[100% relative lg:ml-auto lg:w-[clamp(30rem,3vw,10rem)] 2xl:w-[clamp(36rem,35vw,50%)]">
        <div className="lg:text-main-white  text-[14px] flex flex-col lg:ml-[40px] xl:ml-[40px] 2xl:ml-[60px] md:text-[18px] space-y-4 lg:absolute bottom-[200px]">
          <FadeInMobile>
            <span className="mb-[10px]">
              {additional?.email?.emailLabel?.[lang]}:&nbsp;
              <Link href={`mailto:${additional?.email?.emailAddress}`}>
                {additional?.email?.emailAddress}
              </Link>
            </span>
          </FadeInMobile>
          <FadeInMobile>
            <span className="mb-[10px]">
              {additional?.phone?.phoneLabel?.[lang]}:&nbsp;
              <Link href={`tel:${additional?.phone?.phoneNumber}`}>
                {additional?.phone?.phoneNumber}
              </Link>
            </span>
          </FadeInMobile>
          <FadeInMobile>
            <span className="mb-[10px]">
              <Link target="_blank" href={facebookUrl}>
                {facebookLabel}
              </Link>
            </span>
          </FadeInMobile>
        </div>
      </div>
    </section>
  );
}
