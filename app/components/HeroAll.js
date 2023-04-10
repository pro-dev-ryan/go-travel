import Image from "next/image";
import map from "../../public/assets/ataglance/svg/Vector.svg";

const HeroAll = () => {
  return (
    <div className="center h-52">
      <Image
        className="absolute hidden md:block top-20 left-1/2 -translate-x-1/2 -z-10"
        src={map}
        alt=""
        width={166}
      />
      <h1>At A Glance</h1>
    </div>
  );
};

export default HeroAll;
