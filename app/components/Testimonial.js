import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="center relative cardPlate cardFrame shadow border-t-4 border-t-accent p-5 h-80 md:my-14">
      <div className="absolute -top-14">
        <Image
          className="rounded-full border-8 border-light"
          src="https://api.lorem.space/image/face?w=150&h=150"
          alt="user"
          width={120}
          height={120}
        />
      </div>
      <div className="cardPlate pt-8">
        <h3>Lexy Valore</h3>
        <p className="text-lg font-semibold">Toronto, Canada</p>
        <p className="px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel,
          nemo exercitationem amet dolore ut?
        </p>
        <div className="center gap-4">
          {[...Array(5)].map((stars, i) => (
            <Image
              key={i}
              stars={stars}
              src="/assets/misc/star.svg"
              alt="rating"
              width={25}
              height={25}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
