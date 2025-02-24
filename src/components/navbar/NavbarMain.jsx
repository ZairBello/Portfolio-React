import React from "react";
import NavbarLogo from "./NavbarLogo";
import Navbarlinks from "./Navbarlinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavbarMain = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
    console.log(showLinks);
  };
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 ">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-full border-[0.5px] border-orange  ">
        <NavbarLogo />
        <div className={`${
          showLinks ? "sm:block" : "sm:hidden"} lg:block`}>
          <Navbarlinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden @sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
        <button
          onClick={handleToggleLinks}
          className="text-2xl p-3 border-orange border rounded-full text-white "
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
