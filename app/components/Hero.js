import Image from "next/image";
import Visit from "../../public/assets/hero/Group 8.png";
const Hero = () => {
  return (
    <div className="flex md:pt-16 mx-auto">
      <div className="w-1/2">
        <div className="md:flex gap-9 hidden items-center w-fit px-4 py-1 rounded-full bg-blue">
          <p className="font-headline text-4xl">Visit</p>
          <span>
            <Image src={Visit} alt="image" />
          </span>
        </div>
        <p className="font-headline font-bold sm:text-2xl md:text-4xl xl:text-6xl py-20">
          The Exotic <br />{" "}
          <span className="text-accent my-2 lg:inline-block">Lakshadweep</span>{" "}
          <br /> Islands
        </p>
        <button className="border border-accent px-8 py-4 rounded-md font-bold text-base text-accent hover:bg-accent hover:text-white hover:border-none transition-all duration-100">
          Discover Now
        </button>
      </div>
      <span className="hero-bg top-20"></span>
      <div className="w-1/2 section relative">
        <Image
          className="absolute -top-10 hidden md:block right-0"
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
