import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <Awards></Awards>
      <Stats />
      <Pricing></Pricing>
      <Education></Education>
      <OpenAccount></OpenAccount>
    </>
  );
};

export default HomePage;
