import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="center relative cardPlate cardFrame border border-primary p-5 h-80">
      <div className="absolute -top-12">
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
          {[...Array(5)].map((stars) => (
            <Image
              key={stars}
              stars={stars}
              src="/assets/misc/star.svg"
              alt="rating"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
