import Image from "next/image";

export default function SecondSection() {
  return (
    <section className="mb-[80px] xl:mb-[150px]">
      <div className="flex flex-col gap-[40px] lg:flex-row">
        <div className="2xl:w-[45%]">
          <div className="mx-margin-mobile md:mx-tablet lg:mx-desktop 2xl:mx-[50px]">
            <h3 className="text-[23px] font-medium-font-weight mb-[20px]  lg:text-[26px] 2xl:text-[36px]">
              We blend only
            </h3>
            <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px] xl:mb-[50px] lg:max-w-[600px]">
              <p>
                We create modern, forward-thinking solutions that help
                businesses accelerate theiraesthetics, and a thoughtful
                understanding of the user’s needs. We believe that good
                architecture emerges from dialogue
              </p>
              <p>
                We create modern, forward-thinking solutions that help
                businesses accelerate their growth, streamline their operations,
                and stay ahead in an ever-evolving
              </p>
            </div>
          </div>
          <div className="relative aspect-[5/4]">
            <Image
              src="/aboutPage.jpg"
              alt="projekt"
              className="object-cover absolute top-0 left-0 w-full h-full  px-[20px]  md:px-[40px]  lg:px-[50px] 2xl:px-[50px]"
              fill
            />
          </div>
        </div>
        <div className="lg:pt-[150px] 2xl:w-[45%]">
          <div className="mx-margin-mobile md:mx-tablet 2xl:mx-[50px]">
            <h3 className="text-[23px] font-medium-font-weight mb-[20px] lg:text-[26px] 2xl:text-[36px]">
              Closely with each client
            </h3>
            <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px] xl:mb-[50px] lg:max-w-[600px] ">
              <p>
                We create modern, forward-thinking solutions that help
                businesses accelerate theiraesthetics, and a thoughtful
                understanding of the user’s needs. We believe that good
                architecture emerges from dialogue
              </p>
              <p>
                We create modern, forward-thinking solutions that help
                businesses accelerate their growth, streamline their operations,
                and stay ahead in an ever-evolving
              </p>
            </div>
          </div>
          <div className="relative aspect-[6/4] 2xl:aspect-[7/5]">
            <Image
              src="/aboutPage.jpg"
              alt="projekt"
              className="object-cover absolute top-0 left-0 w-full h-full  px-[20px] md:px-[40px]  lg:px-[50px] 2xl:px-[50px]"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
