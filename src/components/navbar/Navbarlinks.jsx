import React from "react";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
const Navbarlinks = () => {
  return (
    <ul className="flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] sm:w-4/5 lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg sm:rounded-3xl ">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <a href="#" className=" cursor-pointer text-white hover:text-cyan transition-all duration-500">{link.link}</a>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[2px] rounded-2xl transition-all duration-500"/>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbarlinks;
