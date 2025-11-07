import Image from "next/image";
import arrow from "../../public/arrow.png";

export default function Button({ children }) {
  return (
    <button className="bg-white rounded-[500px] py-1.5 px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)]  text-[clamp(0.75rem,3.35vw,1rem)] ml-auto mr-0 font-medium flex items-center md:ml-0 ">
      {children}
      <Image
        src={arrow}
        alt="strzałka"
        className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] relative"
      />
    </button>
  );
}
