import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import logo from "/public/logo.png";
import { open } from "../layout";
import NavMenu from "./Clients/NavMenu";

export const links = [
  "Find Reservations",
  "Package",
  "About Lakshadweep",
  "About Us",
  "Gol",
  "Support",
];

const menu = links?.map((link, i) => (
  <Link
    className="text-sm border border-primary lg:border-none w-full lg:max-w-max text-center md:text-base xl:text-lg xl:font-medium hover:text-primary"
    key={i}
    href={link}
  >
    {link === "Package" || link === "About Lakshadweep" ? (
      <span className="lg:flex lg:items-center ">
        {link} <BiChevronDown className="hidden sm:block" size={23} />
      </span>
    ) : (
      link
    )}
  </Link>
));
const Navbar = () => {
  const sign = ["Login", "Sign Up"];

  return (
    <nav className="nav-class">
      <div className="flex relative justify-between items-center mx-4 md:mx-16 xl:mx-20 z-40">
        <span className="block md:hidden">
          <NavMenu />
        </span>
        <div className="flex lg:w-full items-center lg:gap-3">
          <div className="w-14 lg:w-16">
            <Link className="w-fit" href={"/"}>
              <Image src={logo} alt="logo" width={150} />
            </Link>
          </div>
          <div className="hidden lg:flex items-center lg:gap-4">{menu}</div>
        </div>
        <div className="md:flex items-center gap-3 lg:gap-0 xl:my-auto">
          {sign?.map((signBtn) => (
            <button
              key={signBtn}
              className={` lg:px-4 py-2 md:pt-1 md:text-xl lg:text-base font-semibold text-accent transition-colors duration-200 hover:text-neutral ${
                signBtn === "Sign Up" &&
                "rounded-full text-light px-4 lg:px-6 lg:whitespace-nowrap hover:text-white hidden lg:inline-block hover:bg-primary bg-accent"
              } ${open.className} font-linkline`}
            >
              {signBtn}
            </button>
          ))}
          <span className="hidden md:block my-2">
            <NavMenu />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
