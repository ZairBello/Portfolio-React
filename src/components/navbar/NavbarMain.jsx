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
  };
  return (
    <nav className="px-3 lg:px-6 h-20 z-20 flex gap-2 lg:gap-5 justify-center items-center mt-2 ">
      <div className="flex gap-2 justify-between items-center w-full max-w-[1200px] bg-black   p-4 rounded-full border-[0.5px] border-orange  ">
        <NavbarLogo />
        <div className="lg:w-3/4 hidden lg:flex lg:justify-center">
          <Navbarlinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="lg:hidden block p-4 lg:p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
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
