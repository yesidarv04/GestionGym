import React, { useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import HeroTwo from "../components/HeroTwo";
import ServiceAreaTwo from "../components/ServiceAreaTwo";
import AboutTwo from "../components/AboutTwo";
import CounterTwo from "../components/CounterTwo";
import PortfolioTwo from "../components/PortfolioTwo";
import PricingPlanTwo from "../components/PricingPlanTwo";
import FooterAreaTwo from "../components/FooterAreaTwo";
import Preloader from "../helper/Preloader";

const HomePageTwo = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header Two */}
      <HeaderTwo />

      {/* Hero Two */}
      <HeroTwo />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* About Two */}
      <div className="about-area-2 bg-smoke">
        <AboutTwo />
      </div>

      {/* Counter Two */}
      <CounterTwo />

      {/* Portfolio Two */}
      <PortfolioTwo />

      {/* Pricing Plan Two */}
      <PricingPlanTwo />

      {/* Footer Area Two */}
      <FooterAreaTwo />
    </>
  );
};

export default HomePageTwo;
