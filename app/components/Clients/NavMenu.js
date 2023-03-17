"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { links } from "../Navbar";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = links?.map((link, i) => (
    <Link
      onClick={() => setIsOpen(!isOpen)}
      className="text-sm text-light w-full text-center font-medium hover:text-primary py-[1.14rem]"
      key={i}
      href={link}
    >
      {link}
    </Link>
  ));

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image
          className="block lg:hidden"
          src={"/hamburger.svg"}
          alt={"hamburger"}
          width={30}
          height={30}
        />
      </button>
      <ul
        className={`bg-secondary items-center absolute w-full transition-all duration-300 ease-in-out flex flex-col gap-2 ${
          isOpen ? "opacity-1 top-[7.5rem]" : "opacity-0 top-[500px]"
        }`}
      >
        {menu}
      </ul>
    </div>
  );
};

export default NavMenu;
