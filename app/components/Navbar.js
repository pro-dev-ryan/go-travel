import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
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
    className="text-sm border border-primary w-full text-center md:text-base font-medium xl:text-lg lg:ml-1 hover:text-primary md:px-2 xl:px-4 py-5 my-px"
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
      <div className="flex relative justify-between items-center mx-4 md:mx-16 z-40">
        <span className="block md:hidden">
          <NavMenu />
        </span>
        <div className="w-fit">
          <Link href={"/"}>
            <Image
              className=""
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>
          <div className="hidden lg:flex">{menu}</div>
        </div>
        <div className="md:flex items-center gap-3 my-auto">
          {sign?.map((signBtn) => (
            <button
              key={signBtn}
              className={` lg:px-6 py-2 md:pt-1 md:text-xl font-semibold text-accent transition-colors duration-200 hover:text-neutral ${
                signBtn === "Sign Up" &&
                "rounded-full text-light px-4 hover:text-white hidden lg:inline-block hover:bg-primary bg-accent"
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
