import React from "react";
import NavbarLogo from "./NavbarLogo";
import Navbarlinks from "./Navbarlinks";
import NavbarBtn from "./NavbarBtn";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const NavbarMain = () => {
  const [showLinks, setShowLinks] = useState(false);

  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  const topVariants = {
    close: {
      rotate: 0,
      x: 0,
    },
    opened: {
      rotate: 50,
      x: 5,
      backgroundColor: "#f1e1d9",
    },
  };

  const centerVariants = {
    close: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
      transition: {
        opacity: { duration: 0.1 },
      },
    },
  };

  const donwVariants = {
    close: {
      rotate: 0,
      x: 0,
    },
    opened: {
      rotate: -50,
      x: 5,
      backgroundColor: "#f1e1d9",
    },
  };

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <>
      <nav className="px-3 lg:px-6 h-20 z-20 flex gap-2 lg:gap-5 justify-center items-center mt-2 ">
        <div className="flex gap-2 justify-between items-center w-full max-w-[1200px] bg-black p-4 rounded-full border-[0.5px] border-orange  ">
          <NavbarLogo />
          <div className="lg:w-3/4 hidden lg:flex lg:justify-center">
            <Navbarlinks />
          </div>
          <NavbarBtn />
        </div>
        <div className="lg:hidden block p-4 lg:p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
          <button
            onClick={handleToggleLinks}
            className="text-2xl flex flex-col gap-2 py-3 px-4 border-orange border rounded-full text-white "
          >
            <motion.div
              variants={topVariants}
              initial="close"
              animate={showLinks ? "opened" : "close"}
              className="w-8 h-1 bg-[#bfbfbf] rounded origin-left"
            />
            <motion.div
              variants={centerVariants}
              initial="close"
              animate={showLinks ? "opened" : "close"}
              className="w-8 h-1 bg-[#bfbfbf] rounded"
            />
            <motion.div
              variants={donwVariants}
              initial="close"
              animate={showLinks ? "opened" : "close"}
              className="w-8 h-1 bg-[#bfbfbf] rounded origin-left"
            />
          </button>
        </div>
      </nav>
      {/* Menu Movil */}
      <div>
        <AnimatePresence>
          {showLinks && (
            <motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ ease: "backInOut" }}
                className=" mt-5 mx-5 z-30 absolute p-8 rounded-xl text-white  gap-6 bg-cyan/30 backdrop-blur-lg w-4/5 font-bold overflow-hidden"
              >
                <div className="flex flex-col items-center gap-2">
                  {links.map((link, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                      href={`#${link.section}`}
                      className="text-xl text-white hover:text-orange transition-all "
                    >
                      {link.link}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavbarMain;
