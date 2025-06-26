import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <>
      <Hero></Hero>
      <LeftSection
        img="./images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        cta1="Try Demo"
        cta2="Learn More"
      ></LeftSection>
      <RightSection
        img="./images/console.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        cta1="Learn More"
      ></RightSection>
      <LeftSection
        img="./images/coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        cta1="Coin"
      ></LeftSection>
      <RightSection
        img="./images/kiteconnect.png"
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        cta1="Kite Connect"
      ></RightSection>
      <LeftSection
        img="./images/varsity.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      ></LeftSection>
      <Universe></Universe>
    </>
  );
};

export default ProductPage;
