import Image from "next/image";
const Card = () => {
  return (
    <div className="mx-4 rounded shadow-sm space-y-2 shadow-gray-400">
      <Image
        className="rounded-tl rounded-tr"
        src="/assets/packages/p4.jpg"
        alt="package"
        width={425}
        height={350}
      />
      <div className="flex justify-between items-center m-2">
        <div className="flex gap-2 ">
          <Image
            src="/assets/misc/pin.png"
            alt="location pin"
            width={25}
            height={5}
          />
          <span className="font-semibold text-xl">Indonesia</span>
        </div>
        <div className="center gap-2">
          <Image
            src="/assets/misc/star.svg"
            alt="star"
            width={18}
            height={18}
          />
          <span>4.5</span>
        </div>
      </div>
      <p className="px-2 font-headline">
        Explore the Beauty of the island for 3 days and 2 nights with our travel
        agency...
      </p>
      <div className="center ">
        <button className="primaryButton my-2 text-lg px-[5%]">Book Now</button>
      </div>
    </div>
  );
};

export default Card;
