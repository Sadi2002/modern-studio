import Image from "next/image";
import { urlFor } from "../../../../lib/sanity/client";

export default function FourthSection({ data, lang }) {
  return (
    <section className="relative w-full mb-[40px] xl:mb-[80px] px-[20px] md:px-[40px] lg:px-[50px] h-[400px] min-h-[400px] min-[500px]:min-h-[500px] min-[500px]:h-[500px] md:h-[550px] lg:h-[650px]">
      <div className="bg-[rgba(0,0,0,0.59)] w-full h-full absolute inset-0 z-100" />

      <Image
        src={urlFor(data.image).url()}
        alt="projekt"
        className="object-cover h-full z-10"
        fill
      />

      <div className="flex flex-col w-full h-full relative z-150 text-white py-[clamp(60px,10vw,80px)] lg:py-[100px] justify-between">
        <h3 className="text-[clamp(36px,8vw,45px)] leading-[clamp(36px,8vw,45px)] font-medium uppercase md:max-w-[75%] lg:max-w-[60%] lg:text-[45px] lg:leading-[45px] xl:max-w-[70%] xl:text-[60px] xl:leading-[60px] 2xl:text-[80px] 2xl:leading-[80px]">
          {data?.title?.[lang]}
        </h3>

        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] self-end md:max-w-[50%] lg:max-w-[50%] xl:max-w-[35%]">
          {data?.description?.[lang]}
        </p>
      </div>
    </section>
  );
}
