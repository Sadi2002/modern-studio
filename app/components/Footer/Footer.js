import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-main-black pb-[30px]">
      <div className="lg:flex ">
        <div className="flex justify-center mb-[5px] lg:w-[100%] lg:pt-0">
          <Image
            src="/footer.png"
            alt="footer"
            width={220}
            height={165}
            className="object-cover md:w-[400px]"
          />
        </div>
        <div className="border-t border-[rgba(255,255,255,.2)] w-[70%] mb-[70px] lg:pt-[80px] lg:mb-0 lg:border-none">
          <ul>
            <li className="py-[15px] border-b border-[rgba(255,255,255,.2)] lg:py-[30px]">
              <Link
                href="#"
                className="uppercase text-white text-[clamp(20px,5.5vw,20px)] flex pl-[20px] md:pl-[40px]"
              >
                About us
              </Link>
            </li>
            <li className="py-[15px] border-b border-[rgba(255,255,255,.2)] lg:py-[30px]">
              <Link
                href="#"
                className="uppercase text-white text-[clamp(20px,5.5vw,20px)] flex pl-[20px] md:pl-[40px]"
              >
                Portfolio
              </Link>
            </li>
            <li className="py-[15px] border-b border-[rgba(255,255,255,.2)] lg:py-[30px]">
              <Link
                href="#"
                className="uppercase text-white text-[clamp(20px,5.5vw,20px)] flex pl-[20px] md:pl-[40px]"
              >
                Process
              </Link>
            </li>
            <li className="py-[15px] border-b border-[rgba(255,255,255,.2)] lg:py-[30px]">
              <Link
                href="#"
                className="uppercase text-white text-[clamp(20px,5.5vw,20px)] flex pl-[20px] md:pl-[40px]"
              >
                Blog
              </Link>
            </li>
            <li className="py-[15px] border-b border-[rgba(255,255,255,.2)] lg:border-none lg:py-[30px]">
              <Link
                href="#"
                className="uppercase text-white text-[clamp(20px,5.5vw,20px)] flex pl-[20px] md:pl-[40px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="mx-margin-mobile md:mx-tablet   justify-between  mb-[50px] lg:border-t lg:border-[rgba(255,255,255,0.2)] lg:justify-start lg:gap-x-[50px] lg:pt-[15px] lg:mx-0 lg:mb-[80px]
       xl:justify-between "
      >
        <div className="flex flex-wrap justify-between min-[436px]:gap-x-[50px] gap-y-[50px] lg:mx-[50px] lg:pt-[40px] lg:max-w-[50%] xl:justify-between 2xl:max-w-[45%]">
          <div>
            <h3 className="text-white text-[clamp(20px,5.5vw,20px)] font-semibold mb-[20px]">
              Quick contact
            </h3>
            <ul className="flex flex-col gap-[5px]">
              <li>
                <Link
                  href="#"
                  className="text-white text-[clamp(12px,3.5vw,14px)] flex"
                >
                  +48 512 381 126
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white text-[clamp(12px,3.5vw,14px)] flex"
                >
                  Contact@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[clamp(20px,5.5vw,20px)] font-semibold mb-[20px]">
              Information
            </h3>
            <ul className="flex flex-col gap-[5px]">
              <li>
                <Link
                  href="#"
                  className="text-white text-[clamp(12px,3.5vw,14px)] flex"
                >
                  +48 124 151 123
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white text-[clamp(12px,3.5vw,14px)] flex"
                >
                  kontat@wp.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[clamp(20px,5.5vw,20px)] font-semibold mb-[20px]">
              SociaI media
            </h3>
            <ul className="flex flex-col gap-[5px]">
              <li>
                <Link
                  href="#"
                  className="text-white text-[clamp(12px,3.5vw,14px)] flex"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white text-[clamp(12px,3.5vw,14px)] flex"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[5px] items-end mx-margin-mobile md:mx-tablet lg:flex-row lg:justify-end lg:gap-x-[50px] 2xl:gap-x-[120px]">
        <span className="text-[clamp(12px,3.5vw,16px)] md:text-[12px] xl:text-[16px] text-white">
          Polityka prwatności
        </span>
        <span className="text-[clamp(12px,3.5vw,16px)] md:text-[12px] xl:text-[16px] text-white">
          2025 wszelkie prawa zastrzeżone
        </span>
      </div>
    </footer>
  );
}
