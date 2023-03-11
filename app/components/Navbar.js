import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { open } from "../layout";
const Navbar = () => {
  const links = [
    "Find Reservations",
    "Package",
    "About Lakshadweep",
    "About Us",
    "Gol",
    "Support",
  ];
  const sign = ["Login", "Sign Up"];
  const menu = links?.map((link, i) => (
    <Link
      className="text-sm md:text-base md:font-medium xl:text-lg ml-1 hover:text-primary xl:px-4 py-2"
      key={i}
      href={link}
    >
      {link === "Package" || link === "About Lakshadweep" ? (
        <span className="flex items-center ">
          {link} <BiChevronDown size={23} />
        </span>
      ) : (
        link
      )}
    </Link>
  ));

  return (
    <nav className="bg-transparent py-2 xl:py-4 p-2 sticky top-1">
      <div className="mx-4 md:mx-auto md:flex max-w-7xl justify-between items-center">
        <div className="sm:text-lg sm:flex justify-start items-center">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={90} height={90} />
          </Link>
          <div className="hidden lg:flex">{menu}</div>
        </div>
        <div className="flex flex-col lg:flex-row gap-1">
          {sign?.map((signBtn) => (
            <button
              key={signBtn}
              className={`px-4 lg:px-6 py-2 font-semibold text-accent transition-colors duration-200 hover:text-neutral ${
                signBtn === "Sign Up" &&
                "rounded-full text-light hover:text-white hidden lg:inline-block hover:bg-primary bg-accent"
              } ${open.className} font-linkline`}
            >
              {signBtn}
            </button>
          ))}
          <div className="bg-primary">
            <Image
              className="lg:hidden"
              src={"/hamburger.svg"}
              alt={"hamburger"}
              width={30}
              height={30}
            />
            <span className="lg:hidden">{menu}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
