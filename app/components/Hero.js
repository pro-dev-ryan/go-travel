import Image from "next/image";
import Visit from "../../public/assets/hero/Group 8.png";
import model from "../../public/assets/hero/model.png";
import map from "../../public/assets/hero/map.png";
import { open } from "../layout";
const Hero = () => {
  return (
    <div className="flex md:pt-16 md:px-16">
      <div className=" absolute lg:hidden lg:bg-gradient-to-b from-blue to-light bg-no-repeat -z-10 -top-16">
        <Image src={map} alt={map} className="object-cover -z-30" />
      </div>
      <div className="w-full text-center md:text-left md:w-1/2">
        <div className="md:flex gap-3 hidden items-center w-fit px-8 py-1 rounded-full bg-blue">
          <p className="font-headline center gap-1 font-medium text-base">
            Visit
            <span className="pt-1 block">
              <Image src={Visit} alt="image" width={14} />
            </span>
          </p>
        </div>
        <div className="font-headline font-bold text-2xl text-secondary">
          <h3
            className={` md:text-3xl md:text-left xl:text-6xl py-8 ${open.className}`}
          >
            The Exotic <br />
            <span className="text-accent my-2 md:my-3 md:block">
              Lakshadweep{" "}
            </span>
            Islands
          </h3>
        </div>
        <button className="outlineButton px-8 py-4">Discover Now</button>
      </div>
      <span className="hero-bg hidden md:top-20"></span>
      <div className="w-1/2 section relative hidden md:block">
        <Image
          className="absolute top-1/2 -translate-y-1/2 md:block right-0"
          src={model}
          width={350}
          alt="bg"
        />
      </div>
    </div>
  );
};

export default Hero;
