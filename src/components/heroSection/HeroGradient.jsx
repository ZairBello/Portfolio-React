import React from "react";

const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-cyanMediumShadow absolute -top-30 right-[500px] md:right-[300px] -z-10 animate-pulse"></div>
      <div className="shadow-orangeMediumShadow absolute -top-30 md:top-0 -right-30 md:right-0 -z-10 animate-pulse"></div>
      <div className="shadow-cyanMediumShadow absolute top-[300px] left-0 -z-10 opacity-50"></div>
      <div className="shadow-orangeMediumShadow absolute top-[500px] left-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default HeroGradient;
