import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left text-center">
      <h2 className="lg:text-2xl text-xl uppercase text-cyan">
        Front end Web Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl text-4xl font-bold font-roboto text-orange">
        Edwin Bello
      </h1>
      <p className="text-lg mt-4 text-white">
        I am a front end web developer with a passion for <br className="hidden lg:block" /> creating
        websites responsive with 1 year of experience.
      </p>
    </div>
  );
};

export default HeroText;
