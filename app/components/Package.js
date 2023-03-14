import Link from "next/link";
import Card from "./Card";

const Package = () => {
  return (
    <div className="space-y-10 text-center">
      <h3>Best Packages For You</h3>
      <p className="mx-1 font-light text-base">
        This is a unique experience on ship, sea and land, exploring different
        coral islands of Lakshadweep.
      </p>
      <div className="mx-2">
        <Link href="/" className="navButton rounded-bl-md rounded-tl-md">
          Maldives
        </Link>
        <Link href="/" className="navButton">
          Samudram
        </Link>
        <Link href="/" className="navButton">
          More
        </Link>
      </div>
      <div className=" space-y-5">
        {[...Array(3)].map((pack, i) => (
          <Card key={i} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default Package;
