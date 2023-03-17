"use client";

import Image from "next/image";
import { useState } from "react";
import { menu } from "../Navbar";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        className={`bg-blue items-center absolute w-full transition-all duration-500 ease-in flex flex-col ${
          isOpen ? "opacity-1 top-12" : "opacity-0 top-[500px]"
        }`}
      >
        {menu}
      </ul>
    </div>
  );
};

export default NavMenu;
