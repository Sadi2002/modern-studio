import Image from "next/image";
import { urlFor } from "../../../../lib/sanity/client";
import Link from "next/link";

export default function About({ data, lang }) {
  return (
    <section
      id="about"
      className="pt-[80px] flex flex-col gap-[40px] xl:gap-[80px] xl:pt-[150px] mb-[80px] xl:mb-[150px]"
    >
      <div className="mx-margin-mobile lg:flex md:mx-tablet lg:mx-small-laptop lg:justify-between xl:justify-between 2xl:mx-desktop">
        <h2 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium mb-[20px] max-w-[500px] lg:text-[clamp(2rem,3.5vw,64px)] lg:leading-[clamp(2rem,4vw,64px)] lg:max-w-[700px] lg:w-[50%] 2xl:max-w-[850px] xl:font-normal">
          {data?.title?.[lang]}
        </h2>
        <div className="flex flex-col items-end lg:items-start lg:w-[50%]">
          <div className="flex flex-col gap-[16px] font-light-font-weight mb-[40px] items-start text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full">
            <p className="lg:max-w-[900px] 2xl:max-w-full">
              {data?.subtitle1?.[lang]}
            </p>
            <p className="lg:max-w-[900px] 2xl:max-w-full">
              {data?.subtitle2?.[lang]}
            </p>
          </div>
          <Link href={`/${lang}/${data?.button.buttonLink}`}>
            <button className="group relative font-medium-font-weight uppercase text-[clamp(0.75rem,3.5vw,1rem)] leading-none after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:h-[1px] after:w-full">
              <span className="relative block overflow-hidden h-[1em]">
                {/* pierwszy */}
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
                  {data?.button.buttonLabel?.[lang]}
                </span>

                {/* drugi */}
                <span className="absolute left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
                  {data?.button.buttonLabel?.[lang]}
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="relative max-w-[90%] xl:w-[80%] aspect-[3/1.7]">
        <Image
          src={urlFor(data.aboutImage).url()}
          alt="pokój"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
