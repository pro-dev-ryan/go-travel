import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
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
  const menu = links.map((link, i) => (
    <Link className="sm:text-base font-medium px-6 py-2" key={i} href={link}>
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
    <nav className="bg-blue py-2 lg:py-4">
      <div className="sm:flex sm:mx-auto max-w-7xl justify-between items-center">
        <div className="sm:text-lg sm:flex justify-start items-center">
          <Image src="/logo.png" alt="logo" height="56" width="99" />
          {menu}
        </div>
        <div>
          {sign?.map((signBtn) => (
            <button
              key={signBtn}
              className={`px-6 py-2 font-medium text-accent ${
                signBtn === "Sign Up" &&
                "rounded-full text-light hover:bg-primary bg-accent"
              }`}
            >
              {signBtn}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
