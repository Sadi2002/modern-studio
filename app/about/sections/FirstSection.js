import Button from "@/app/components/Button";
import Image from "next/image";
import ArrowWhite from "../../../public/arrow-right-white.png";

export default function FirstSection() {
  return (
    <section className="pt-[100px] md:pt-[150px] lg:pt-[100px] w-full mb-[80px] xl:mb-[150px] relative ">
      <div className="hidden lg:flex justify-center items-center w-[70px] h-[70px] rounded-[500px] bg-black absolute bottom-[30px] left-[50%] translate-x-[-50%] cursor-pointer">
        <Image
          src="/arrow-right-white.png"
          alt="projekt"
          width={45}
          height={45}
          className="rotate-125"
        />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="px-[20px] lg:pt-[100px] md:px-[40px] lg:max-w-[600px] xl:max-w-[700px] 2xl:pl-[70px]">
          <h1 className="text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[clamp(2.1rem,7.5vw,2.7rem)] font-medium mb-[20px] xl:mb-[40px] max-w-[500px] lg:text-[clamp(2rem,3.5vw,64px)] lg:leading-[clamp(2rem,3.5vw,64px)] lg:max-w-[400px] lg:w-[100%] xl:max-w-[600px] 2xl:max-w-[1000px] xl:font-normal">
            WELCOME TO OUR STUDIO HUMAN
          </h1>
          <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px] xl:mb-[50px]">
            <p>
              We create modern, forward-thinking solutions that help businesses
              accelerate theiraesthetics, and a thoughtful understanding of the
              user’s needs. We believe that good architecture emerges from
              dialogue
            </p>
            <p>
              We create modern, forward-thinking solutions that help businesses
              accelerate their growth, streamline their operations, and stay
              ahead in an ever-evolving
            </p>
          </div>
          <div className="flex justify-start mb-[40px]">
            <Button
              arrow={ArrowWhite}
              linkTo="/portfolio"
              bgColor="main-black"
              textColor="main-white"
              additionalStyles="md:self-end"
            >
              Read more
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/5] md:aspect-[5/3] lg:w-[45%] lg:aspect-[4/5] lg:h-[calc(100dvh-100px)]">
          <Image
            src="/aboutPage.jpg"
            alt="projekt"
            className="object-cover absolute top-0 left-0 w-full h-full"
            fill
          />
        </div>
      </div>
    </section>
  );
}
