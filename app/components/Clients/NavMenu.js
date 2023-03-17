"use client";

import Image from "next/image";
import { useState } from "react";
import { menu } from "../Navbar";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {/* <button>
      </button> */}
      <Image
        className="block lg:hidden"
        src={"/hamburger.svg"}
        alt={"hamburger"}
        width={30}
        height={30}
      />
      <ul
        className={`bg-blue items-center absolute w-[92%] transition-all duration-500 ease-out translate-y-10 flex flex-col ${
          isOpen ? "top-10" : "-top-[450px]"
        }`}
      >
        {menu}
      </ul>
    </div>
  );
};

export default NavMenu;
