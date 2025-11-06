import Image from "next/image";
import heroImage from "../../../public/main.png";
import arrow from "../../../public/arrow.png";

export default function Hero() {
  return (
    <section className="h-screen absolute top-0 left-0 w-full">
      <div>
        <div className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.55)] -z-1"></div>
        <Image
          src={heroImage}
          fill
          quality={75}
          alt="nowoczesny dom"
          placeholder="blur"
          className="object-cover -z-10 absolute"
        />
      </div>
      <div className="mx-mobile flex flex-col h-full justify-center items-center pt-[200px]">
        <div>
          <h1 className="text-white text-4xl font-medium mb-2.5">
            OSIEDLE ZACISZE W Warszawie
          </h1>
          <p className="text-white text-[12px] font-light leading-[18px] mb-[50px]">
            Oferujemy doświadczenie wyrafinowanego komfortu, ponadczasowej
            elegancji szczerej gościnności. Położona w romantycznym
          </p>
        </div>
        <button className="bg-white rounded-[500px] px-3.5 py-1.5 text-[10px] ml-auto mr-0 font-medium flex items-center">
          Read more{" "}
          <Image
            src={arrow}
            alt="strzałka"
            className="w-[14px] h-[14px] relative top-[1px]"
          />
        </button>
      </div>
      <span className="absolute bottom-[20px] left-0 mx-mobile font-normal text-[#C6C6C6] text-[10px]">
        (scroll down)
      </span>
    </section>
  );
}
