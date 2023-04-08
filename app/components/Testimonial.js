import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="center cardPlate shadow border-t-4 border-t-accent h-80 my-8 lg:h-96 md:my-16">
      <div className="absolute -top-2 md:top-5 lg:top-6">
        <Image
          className="rounded-full border-8 border-light"
          src="https://api.lorem.space/image/face?w=150&h=150"
          alt="user"
          width={90}
          height={90}
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
