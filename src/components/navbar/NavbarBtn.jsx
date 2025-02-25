import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
const NavbarBtn = () => {
  return (
    <button className="flex items-center font-bold text-white text-lg lg:px-4 lg:py-2 px-3 py-2 bg-gradient-to-r from-cyan from-20% to-orange rounded-full border border-cyan hover:border-orange hover:shadow-cyanShadow hover:scale-110 transition-all duration-500">
      Hire Me
      <FiArrowDownRight />
    </button>
  );
};

export default NavbarBtn;
