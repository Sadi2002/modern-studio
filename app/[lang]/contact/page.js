import Link from "next/link";
import ArrowWhite from "../../../public/arrow-right-white.png";
import Button from "../../components/Button";
import { sanityClient } from "../../../lib/sanity/client";
import { contactPageQuery } from "@/lib/sanity/queries";
import ContactForm from "../../components/ContactForm";

export const revalidate = 0;

export default async function Contact({ params }) {
  const getParams = await params;
  console.log(getParams);
  const lang = getParams.lang;
  const contactPageData = await sanityClient.fetch(contactPageQuery);

  console.log(contactPageData);

  const section = contactPageData?.contactSection || {};

  const title = section?.title?.[lang] || "Let’s create the unforgettable";
  const description =
    section?.description?.[lang] ||
    "For all inquiries, please contact our team. We are ready to discuss new projects, answer your questions, and explore how we can bring your";
  const formTitle = section?.formTitle?.[lang] || "Send a message";
  const nameLabel = section?.nameLabel?.[lang] || "Name";
  const emailLabel = section?.emailLabel?.[lang] || "Email";
  const messageLabel = section?.messageLabel?.[lang] || "Message";
  const submitLabel = section?.submitLabel?.[lang] || "Send message";

  const additional = section.additionalInfo || {};
  const email = additional.email || "kontakt@sadowskistudio.com";
  const phone = additional.phone || "+48 414 512 859";
  const facebookLabel = additional.facebookLabel || "Facebook";
  const facebookUrl = additional.facebookUrl || "https://google.com";

  return (
    <section className="flex flex-col gap-[40px] lg:flex-row w-full lg:items-center">
      <div className="flex-1 pt-[100px] md:pt-[150px] mx-margin-mobile md:mx-tablet lg:ml-[50px] 2xl:mx-[50px]">
        <h1 className="text-[clamp(36px,8vw,45px)] leading-[clamp(36px,8vw,45px)] uppercase font-medium mb-[20px] max-w-[500px] xl:max-w-[700px] lg:text-[45px] lg:leading-[45px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] 2xl:max-w-[1200px] 2xl:text-[80px] 2xl:leading-[80px]  2xl:font-normal">
          {title}
        </h1>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight max-w-[600px] mb-[40px] lg:mb-[40px]">
          {description}
        </p>
        <ContactForm
          formTitle={formTitle}
          nameLabel={nameLabel}
          emailLabel={emailLabel}
          messageLabel={messageLabel}
          submitLabel={submitLabel}
        />
      </div>
      <div className=" lg:bg-black flex pt-[40px] px-[20px] pb-[40px] md:px-[40px] lg:p-0 lg:h-[100dvh] w-[100%] lg:w-[clamp(31rem,3vw,10rem)]  relative lg:ml-auto xl:w-[clamp(36rem,3vw,10rem)] 2xl:w-[clamp(40rem,3vw,10rem)]">
        <div className="lg:text-main-white  text-[14px] flex flex-col lg:ml-[40px] xl:ml-[40px] 2xl:ml-[70px] md:text-[16px] space-y-4 lg:absolute  bottom-[100px]">
          <span>
            E-mail:&nbsp;
            <Link href={`mailto:${email}`}>{email}</Link>
          </span>
          <span>
            Phone:&nbsp;
            <Link href={`tel:${phone}`}>{phone}</Link>
          </span>
          <span>
            <Link href={facebookUrl}>{facebookLabel}</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
