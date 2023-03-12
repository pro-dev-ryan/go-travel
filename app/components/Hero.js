import Image from "next/image";
import Visit from "../../public/assets/hero/Group 8.png";
import map from "../../public/assets/hero/map.png";
import { open } from "../layout";
const Hero = () => {
  return (
    <div className="flex md:pt-16 mx-auto">
      <div className="absolute top-0 hero-bg">
        {/* <Image src={map} alt={map} className="object-fill scale-125" /> */}
      </div>
      <div className="w-full text-center lg:w-1/2">
        <div className="md:flex gap-9 hidden items-center w-fit px-4 py-1 rounded-full bg-blue">
          <p className="font-headline text-4xl">Visit</p>
          <span>
            <Image src={Visit} alt="image" />
          </span>
        </div>
        <p
          className={`font-headline font-bold text-2xl text-secondary md:text-4xl xl:text-6xl py-20 ${open.className}`}
        >
          The Exotic <br />{" "}
          <span className="text-accent my-2 lg:inline-block">Lakshadweep </span>
          Islands
        </p>
        <button className="border border-accent px-8 py-4 mx-auto rounded-sm lg:rounded-md font-bold text-base text-accent hover:bg-accent hover:text-white hover:border-none transition-border duration-100">
          Discover Now
        </button>
      </div>
      <span className="hero-bg hidden md:top-20"></span>
      <div className="w-1/2 section relative hidden lg:block">
        <Image
          className="absolute -top-10 md:block right-0"
          src="/assets/hero/model.png"
          width={500}
          height={480}
          alt="bg"
        />
      </div>
    </div>
  );
};

export default Hero;
