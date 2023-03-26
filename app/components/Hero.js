import Image from "next/image";
import Visit from "../../public/assets/hero/Group 8.png";
import model from "../../public/assets/hero/model.png";
import map from "../../public/assets/hero/map.png";
import { open } from "../layout";
const Hero = () => {
  return (
    <div className="flex md:pt-16 md:px-16 xl:px-20 lg:relative">
      <div className="absolute lg:bg-gradient-to-b from-[#E5F8FE] to-transparent bg-no-repeat -z-10 -top-16 lg:right-0 lg:left-0">
        <Image src={map} alt={map} className="object-cover lg:hidden -z-30" />
        <div className="relative">
          <Image
            src={map}
            alt={map}
            className="object-contain absolute -top-32 right-0"
          />
        </div>
      </div>
      <div className="w-full text-center md:text-left md:w-1/2">
        <div className="md:flex gap-3 hidden items-center w-fit px-8 py-1 rounded-full bg-blue">
          <p className="font-headline center gap-1 lg:gap-5 font-medium text-base lg:text-4xl">
            Visit
            <span className="pt-1 block w-3 md:w-5 lg:w-8">
              <Image src={Visit} alt="image" width={50} />
            </span>
          </p>
        </div>
        <div className="font-headline text-xl text-secondary">
          <h3
            className={` md:text-3xl font-bold md:text-left lg:text-4xl xl:text-6xl py-8 ${open.className}`}
          >
            The Exotic <br />
            <span className="text-accent my-2 md:my-3 md:block">
              Lakshadweep{" "}
            </span>
            Islands
          </h3>
        </div>
        <button className="outlineButton px-8 py-4 md:px-4 lg:px-8 md:py-2 lg:py-4  ">
          Discover Now
        </button>
      </div>
      <span className="hero-bg hidden md:top-20"></span>
      <div className="w-1/2 section hidden md:flex justify-end items-center">
        <div className="w-full md:w-72 lg:w-96 xl:w-[470px]">
          <Image className=" md:block" src={model} width={450} alt="bg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
