import Button from "@/app/components/Button";
import ArrowWhite from "../../../public/arrow-right-white.png";
import Image from "next/image";

export default function ThirdSection() {
  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet gap-[40px] lg:gap-[80px]  lg:justify-between lg:mx-small-laptop mb-[40px] lg:mb-[80px] xl:mb-[150px]">
      <div>
        <h3 className="text-[clamp(36px,6.5vw,45px)] leading-[clamp(36px,6.5vw,45px)] font-medium uppercase relative  mb-5 xl:text-6xl xl:leading-[60px] xl:mb-[20px] 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal 2xl:max-w-[1200px]">
          MEET OUR STUDIO
        </h3>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[40px] xl:mb-[50px] min-[380px]:max-w-[390px] md:max-w-[400px] lg:max-w-[500px]">
          We are an architectural studio dedicated to creating spaces that
          combine functionality, aesthetics, and a thoughtful understanding of
          the user’s needs. W
        </p>
        <div className="flex justify-end lg:justify-start">
          <Button
            arrow={ArrowWhite}
            linkTo="#"
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="md:self-end lg:flex"
          >
            Czytaj więcej
          </Button>
        </div>
      </div>
      <div className="lg:flex ">
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-full gap-[40px] lg:gap-[40px] lg:justify-end 2xl:gap-x-[80px] 2xl:max-w-[100%]">
          <div className="flex flex-col lg:w-[23%] xl:w-[23%] gap-[10px] ">
            <div className="relative  flex flex-col aspect-[7/8] xl:aspect-[9/10] 2xl:aspect-[15/16]">
              <Image
                src="/person1.png"
                alt="projekt"
                className="object-cover h-full"
                fill
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col pr-[15px]">
                <h3 className="text-[clamp(16px,4.5vw,20px)] leading-[clamp(0.75rem,10vw,1.5rem)] ">
                  Anna Schedmann
                </h3>
                <span className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  General Architect
                </span>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-[20px] h-[20px] ">
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <Image
                    src="/linkedIn.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-[23%] xl:w-[23%] gap-[10px] ">
            <div className="relative  flex flex-col aspect-[7/8] xl:aspect-[9/10] 2xl:aspect-[15/16]">
              <Image
                src="/person2.png"
                alt="projekt"
                className="object-cover h-full"
                fill
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col pr-[15px]">
                <h3 className="text-[clamp(16px,4.5vw,20px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  Anna Schedmann
                </h3>
                <span className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  General Architect
                </span>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-[20px] h-[20px] ">
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <Image
                    src="/linkedIn.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-[23%] xl:w-[23%] gap-[10px] ">
            <div className="relative  flex flex-col aspect-[7/8] xl:aspect-[9/10] 2xl:aspect-[15/16]">
              <Image
                src="/person3.png"
                alt="projekt"
                className="object-cover h-full"
                fill
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col pr-[15px]">
                <h3 className="text-[clamp(16px,4.5vw,20px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  Anna Schedmann
                </h3>
                <span className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  General Architect
                </span>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-[20px] h-[20px] ">
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <Image
                    src="/linkedIn.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-[23%] xl:w-[23%] gap-[10px] ">
            <div className="relative  flex flex-col aspect-[7/8] xl:aspect-[9/10] 2xl:aspect-[15/16]">
              <Image
                src="/person4.png"
                alt="projekt"
                className="object-cover h-full"
                fill
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col pr-[15px]">
                <h3 className="text-[clamp(16px,4.5vw,20px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  Anna Schedmann
                </h3>
                <span className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  General Architect
                </span>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-[20px] h-[20px] ">
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <Image
                    src="/linkedIn.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-[23%] xl:w-[23%] gap-[10px] ">
            <div className="relative  flex flex-col aspect-[7/8] xl:aspect-[9/10] 2xl:aspect-[15/16]">
              <Image
                src="/person5.png"
                alt="projekt"
                className="object-cover h-full"
                fill
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col pr-[15px]">
                <h3 className="text-[clamp(16px,4.5vw,20px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  Anna Schedmann
                </h3>
                <span className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  General Architect
                </span>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-[20px] h-[20px] ">
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <Image
                    src="/linkedIn.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-[23%] xl:w-[23%] gap-[10px] ">
            <div className="relative  flex flex-col aspect-[7/8] xl:aspect-[9/10] 2xl:aspect-[15/16]">
              <Image
                src="/person6.png"
                alt="projekt"
                className="object-cover h-full"
                fill
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col pr-[15px]">
                <h3 className="text-[clamp(16px,4.5vw,20px)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  Anna Schedmann
                </h3>
                <span className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
                  General Architect
                </span>
              </div>
              <div className="flex gap-[10px]">
                <div className="w-[20px] h-[20px] ">
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <Image
                    src="/linkedIn.png"
                    alt="instagram"
                    className="object-cover h-full"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
