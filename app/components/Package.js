import Link from "next/link";
import Card from "./Card";

const Package = () => {
  return (
    <div className="cardFrame mx-4 md:mx-16">
      <h3>Best Packages For You</h3>
      <p className="lightText">
        This is a unique experience on ship, sea and land, exploring different
        coral islands of Lakshadweep.
      </p>
      <div className="flex md:mx-0 border-y border-secondary rounded-bl-md rounded-tl-md">
        <Link href="/" className="navButton rounded-bl-md rounded-tl-md">
          Maldives
        </Link>
        <Link href="/" className="navButton">
          Samudram
        </Link>
        <Link href="/" className="navButton hidden md:block">
          Cordeila
        </Link>
        <Link href="/" className="navButton hidden lg:block">
          Agatti
        </Link>
        <Link href="/" className="navButton">
          More
        </Link>
      </div>
      <div className="stack-sect">
        {[...Array(3)].map((pack, i) => (
          <Card key={i} pack={pack} />
        ))}
      </div>
      <button className="outlineButton px-4 py-2">Discover More</button>
    </div>
  );
};

export default Package;
