import Image from "next/image";

export default function SecondSection() {
  return (
    <section className="mb-[80px] xl:mb-[150px]">
      <div className="flex flex-col gap-[80px]">
        <div>
          <div className="mx-margin-mobile">
            <h3 className="text-[23px] font-medium-font-weight mb-[20px]">
              We blend only
            </h3>
            <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px] xl:mb-[50px]">
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
              className="object-cover absolute top-0 left-0 w-full h-full  px-[10px]"
              fill
            />
          </div>
        </div>
        <div>
          <div className="mx-margin-mobile">
            <h3 className="text-[23px] font-medium-font-weight mb-[20px]">
              Closely with each client
            </h3>
            <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px] xl:mb-[50px]">
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
              className="object-cover absolute top-0 left-0 w-full h-full  px-[10px]"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
