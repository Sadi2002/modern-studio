import Link from "next/link";
import ArrowWhite from "../../public/arrow-right-white.png";
import Button from "../components/Button";

export default function Contact() {
  return (
    <section className="flex flex-col gap-[40px] lg:flex-row w-full  ">
      <div className="flex-1 pt-[100px] md:pt-[150px] mx-margin-mobile md:ml-tablet 2xl:mx-[70px]">
        <h1 className="text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[clamp(2.1rem,7.5vw,2.7rem)] font-medium mb-[20px] max-w-[500px] lg:text-[clamp(2rem,3.5vw,64px)] lg:leading-[clamp(2rem,3.5vw,64px)] lg:max-w-[1000px] lg:w-[100%] 2xl:max-w-[850px] xl:font-normal">
          Let’s create something unforgettable
        </h1>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight max-w-[600px] mb-[40px] lg:mb-[80px]">
          For all inquiries, please contact our team. We are ready to discuss
          new projects, answer your questions, and explore how we can bring your
        </p>
        <form className="space-y-8 max-w-[100%] lg:max-w-[800px] ">
          <h2 className="text-[20px] font-medium-font-weight mb-[20px] lg:mb-[50px]">
            Send a message
          </h2>
          <div className="flex flex-col gap-8 md:flex-row md:gap-8 max-w-[80%] lg:max-w-[100%] ">
            <div className="flex-1 ">
              <input
                id="name"
                type="text"
                className="w-full border-b border-black outline-none py-2 bg-transparent placeholder:text-[12px] lg:placeholder:text-[16px]  placeholder:font-light"
                autoComplete="off"
                placeholder="Name"
              />
            </div>
            <div className="flex-1 ">
              <input
                id="email"
                type="email"
                className="w-full border-b border-black outline-none py-2 bg-transparent placeholder:text-[12px] placeholder:font-light lg:placeholder:text-[16px]"
                autoComplete="off"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="max-w-[80%] lg:max-w-[100%]">
            <textarea
              id="message"
              rows={2}
              className="w-full border-b border-black outline-none py-2 bg-transparent resize-none placeholder:text-[12px] placeholder:font-light lg:placeholder:text-[16px]"
              placeholder="Message"
            />
          </div>
          <div className="flex justify-end">
            <Button
              arrow={ArrowWhite}
              linkTo="/portfolio"
              bgColor="main-black"
              textColor="main-white"
              additionalStyles="md:self-end"
            >
              Send message
            </Button>
          </div>
        </form>
      </div>
      <div className=" lg:bg-black flex pt-[40px] px-[20px] pb-[40px] md:px-[40px] lg:p-0 lg:h-[100dvh] w-[100%] lg:w-[45%]  relative lg:ml-auto 2xl:w-[37%]">
        <div className="lg:text-main-white flex flex-col lg:ml-[40px] xl:ml-[80px] space-y-4 lg:absolute  bottom-[100px]">
          <span>
            E-mail:&nbsp;
            <Link href="mailto:kontakt@sadowskistudio.com">
              kontakt@sadowskistudio.com
            </Link>
          </span>
          <span>
            Phone:&nbsp;<Link href="mailto:+48414512859">+48 414 512 859</Link>
          </span>
          <span>
            <Link href="https://google.com">Facebook</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
