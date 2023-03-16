"use client";

import Image from "next/image";
import { useState } from "react";
import { menu } from "../Navbar";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
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
      <div
        className={`bg-blue backdrop-blur-sm flex flex-col items-center absolute w-[92%] ${
          isOpen ? "top-14" : "-top-96"
        } transition-all duration-200 `}
      >
        {isOpen ? menu : null}
      </div>
    </div>
  );
};

export default NavMenu;
