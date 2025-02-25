import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <div className="pt-10 pb-10">
      <div className="flex flex-col md:flex-row gap-4 max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
