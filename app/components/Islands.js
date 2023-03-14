import Image from "next/image";
import star from "../../public/assets/misc/star.svg";
const Islands = () => {
  return (
    <div className="cardPlate">
      <Image
        src="/assets/packages/p2.png"
        alt="island"
        width={430}
        height={350}
      />
      <div className="text-left m-2">
        <h3>Kavaratti</h3>
        <p>
          Kavaratti is the capital of the Union Territory of Lakshadweep having
          ...
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 font-textline">
            <Image src={star} alt="rating" width={18} />
            <span>Review (4.2k)</span>
          </div>
          <button className="primaryButton px-4 my-2">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Islands;
