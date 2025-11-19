import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-main-black pb-[30px]">
      <div className="flex justify-center pt-[20px] mb-[5px]">
        <Image src="/footer.png" alt="footer" width={220} height={165} />
      </div>
      <div className="border-t border-[rgba(255,255,255,.2)] w-[70%] mb-[70px]">
        <ul>
          <li className="py-[15px] border-b border-[rgba(255,255,255,.2)]">
            <Link
              href="#"
              className="uppercase text-white text-[clamp(20px,5.5vw,32px)] flex pl-[20px]"
            >
              About us
            </Link>
          </li>
          <li className="py-[15px] border-b border-[rgba(255,255,255,.2)]">
            <Link
              href="#"
              className="uppercase text-white text-[clamp(20px,5.5vw,32px)] flex pl-[20px]"
            >
              Portfolio
            </Link>
          </li>
          <li className="py-[15px] border-b border-[rgba(255,255,255,.2)]">
            <Link
              href="#"
              className="uppercase text-white text-[clamp(20px,5.5vw,32px)] flex pl-[20px]"
            >
              Process
            </Link>
          </li>
          <li className="py-[15px] border-b border-[rgba(255,255,255,.2)]">
            <Link
              href="#"
              className="uppercase text-white text-[clamp(20px,5.5vw,32px)] flex pl-[20px]"
            >
              Blog
            </Link>
          </li>
          <li className="py-[15px] border-b border-[rgba(255,255,255,.2)]">
            <Link
              href="#"
              className="uppercase text-white text-[clamp(20px,5.5vw,32px)] flex pl-[20px]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-margin-mobile flex flex-wrap justify-between gap-y-[50px] mb-[50px]">
        <div>
          <h3 className="text-white text-[clamp(20px,5.5vw,32px)] font-semibold mb-[32px]">
            Quick contact
          </h3>
          <ul className="flex flex-col gap-[13px]">
            <li>
              <Link
                href="#"
                className="text-white text-[clamp(14px,3.5vw,16px)] flex"
              >
                +48 512 381 126
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-[clamp(14px,3.5vw,16px)] flex"
              >
                Contact@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-[clamp(20px,5.5vw,32px)] font-semibold mb-[32px]">
            Information
          </h3>
          <ul className="flex flex-col gap-[13px]">
            <li>
              <Link
                href="#"
                className="text-white text-[clamp(14px,3.5vw,16px)] flex"
              >
                +48 124 151 123
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-[clamp(14px,3.5vw,16px)] flex"
              >
                kontat@wp.com
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-[clamp(20px,5.5vw,32px)] font-semibold mb-[32px]">
            SociaI media
          </h3>
          <ul className="flex flex-col gap-[13px]">
            <li>
              <Link
                href="#"
                className="text-white text-[clamp(14px,3.5vw,16px)] flex"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-[clamp(14px,3.5vw,16px)] flex"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[14px] items-end mx-margin-mobile">
        <span className="text-[clamp(12px,3.5vw,16px)] text-white">
          Polityka prwatności
        </span>
        <span className="text-[clamp(12px,3.5vw,16px)] text-white">
          2025 wszelkie prawa zastrzeżone
        </span>
      </div>
    </footer>
  );
}
