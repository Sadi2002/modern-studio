import Image from "next/image";
import arrow from "../../public/arrow.png";

export default function Button({ children }) {
  return (
    <button className="bg-white rounded-[500px] px-3.5 py-1.5 text-[clamp(0.75rem,3.35vw,0.75rem)] ml-auto mr-0 font-medium flex items-center">
      {children}
      <Image
        src={arrow}
        alt="strzałka"
        className="w-[clamp(1rem,3.35vw,2rem)] h-[clamp(1rem,3.35vw,2rem)] relative top-[0px]"
      />
    </button>
  );
}
