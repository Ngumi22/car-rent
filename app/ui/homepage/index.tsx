// /ui/homepage/index.tsx

import React from "react";
import Hero from "./Hero";
import CarSearch from "./CarSearch";
import HowItWorks from "./HowItWorks";
import CarFleet from "./CarFleet";
// import About from "./About";
// import WhyChooseUs from "./WhyChooseUs";
// import Cars from "./Cars";
// import AppDownload from "./AppDownload";
// import Blog from "./Blog";
// import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <CarSearch />
      <HowItWorks />
      <CarFleet />
      {/*

      <About />
      <WhyChooseUs />
      <Cars />
      <AppDownload />
      <Blog />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
